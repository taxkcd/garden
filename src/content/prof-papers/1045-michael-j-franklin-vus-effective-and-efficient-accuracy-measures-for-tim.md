---
title: "1045 · VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection — Michael J. Franklin"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-j-franklin"
source_hash: "9eaac02a7345e8a28f87b64b21e728f1b96b9421cfbc667d55a59110593c0e6b"
sequence: 1045
generator: "outreach-garden: managed"
---

# 1045 · VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection

## At a glance

- **Professor:** Michael J. Franklin
- **Institution:** University of Chicago
- **Paper:** [VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection](https://arxiv.org/pdf/2502.13318)
- **Authors:** Paul Boniol, Ashwin K. Krishna, Marine Bruel, Qinghua Liu, Mingyi Huang, Themis Palpanas, Ruey S. Tsay, Aaron Elmore, Michael J. Franklin, John Paparrizos
- **Year:** 2025

## Paper overview

This paper addresses the challenge of accurately evaluating time-series anomaly detection methods. Traditional evaluation metrics often require setting thresholds and focus on point anomalies, which are inadequate for range-based anomalies that span multiple observations. The authors propose new threshold-independent, parameter-free accuracy measures called Volume Under the Surface (VUS) that extend existing AUC-based metrics to better handle range-based anomalies. They also introduce optimized algorithms to compute these measures efficiently. Their experiments demonstrate that VUS measures are more robust, consistent, and better at distinguishing accurate from inaccurate methods compared to existing metrics.

### Why it matters

**Research problem:** Existing evaluation measures for time-series anomaly detection (AD) are mostly threshold-dependent and designed for point-based anomalies, which leads to unreliable and biased assessments when applied to range-based anomalies. There is a lack of robust, threshold-independent, and parameter-free accuracy measures that can handle range-based anomalies effectively.

**Why it matters:** Time-series anomaly detection is critical in many scientific and industrial domains such as IoT, healthcare, manufacturing, and environmental monitoring. Accurate evaluation of AD methods is essential to select and improve algorithms that can reliably detect anomalies, especially range-based anomalies that affect multiple consecutive data points. Poor evaluation metrics can mislead research and application outcomes.

**Key contributions:**

- Systematic large-scale quantitative and qualitative evaluation of 13 accuracy measures for time-series AD, including 9 existing and 4 new proposed measures.
- Introduction of Range-AUC-ROC and Range-AUC-PR measures that extend traditional AUC metrics with continuous label buffers to better handle range-based anomalies.
- Proposal of the Volume Under the Surface (VUS) family of accuracy measures that integrate over all buffer sizes and thresholds, providing parameter-free and threshold-independent evaluation.
- Development of two optimized algorithms (VUSopt and VUSmemopt) that significantly reduce the execution time of VUS computations while maintaining exactness.
- Empirical demonstration that VUS-ROC and VUS-PR outperform existing measures in robustness to noise, lag, and anomaly cardinality ratio, and better separate accurate from inaccurate AD methods.

## About the professor

**Michael J. Franklin** — Morton D. Hull Distinguished Service Professor, Department of Computer Science, University of Chicago.

Research interests: Big Data, Databases, Distributed and Streaming Database Technology, Systems

### Research links

- [Faculty/profile page](https://cs.uchicago.edu/people/michael-franklin)
- [Professor website](https://scholar.google.com/citations?user=p0sQC6sAAAAJ)
- [LinkedIn](https://www.linkedin.com/in/mjfranklin/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** time series anomaly detection evaluation
**The paper assumes:** time series anomaly detection evaluation metrics, thresholding in anomaly detection, AUC-ROC and AUC-PR concepts, point-based versus range-based anomaly labeling
**Already in this field?** Skip this entirely if you already understand time series anomaly detection evaluation metrics and the limitations of threshold-dependent measures.

This background selection is designed to prepare you for understanding the evaluation of time-series anomaly detection methods, focusing on the novel VUS accuracy measures proposed in the paper. The rigorous course option offers a deep dive into foundational machine learning concepts including anomaly detection, while the fast track provides a concise, focused introduction to anomaly detection techniques and evaluation, suitable for quickly grasping key ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-5 and 8-12, about 9.5 hours — covering core supervised learning, evaluation metrics, and error analysis relevant to anomaly detection evaluation.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative and comprehensive machine learning course covering supervised and unsupervised learning, evaluation metrics, and practical advice, which are essential to understand the foundations behind anomaly detection evaluation and metrics like AUC and Precision/Recall that the paper builds upon.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [ANALYSIS - ML - Anomaly Detection](https://www.youtube.com/playlist?list=PLD9bLfJzgkJ84yxz8t8oH5A0Qi3EI-1h-) — ITtechEval · 14 videos · 3.5h across 14 episodes

**Watch only this:** Episodes 3-8, about 1.5 hours — covering anomaly detection parameters, scoring, tuning, and forecasting relevant to understanding evaluation challenges and metrics.

*Why it unblocks this paper:* The ANALYSIS - ML - Anomaly Detection series provides concise, practical explanations of anomaly detection concepts, including evaluation and tuning, in short episodes that directly address anomaly detection workflows and metrics, making it a focused and efficient introduction aligned with the paper's topic.

*If you want all of it:* 3.5 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the VUS paper, start with foundational concepts on time-series anomaly detection evaluation and threshold-independent evaluation metrics to grasp the challenges and existing approaches. Then, study the core concept of the paper, the novel Volume Under the Surface (VUS) measures, through the authors' own talk to get direct insights into their contributions and methodology.

### Time-series anomaly detection evaluation *(prerequisite)*
This section covers the challenges and existing methods for evaluating anomaly detection in time series data, providing essential background on why traditional metrics fall short for range-based anomalies. Understanding these evaluation challenges is crucial before delving into the new VUS measures proposed by the paper.

*How the paper uses it:* The paper addresses limitations in existing time-series anomaly detection evaluation metrics, motivating the need for VUS.

▶ [Kiraly, Risi, & Tveten - sktime: time series anomaly detection, changepoint detection, segmentation](https://www.youtube.com/watch?v=VwhevNkxjYw) — PyData · 1:29:22 · 1y ago

### Threshold-independent evaluation metrics *(prerequisite)*
This section explains evaluation metrics that do not rely on manually set thresholds, such as AUC-based metrics, which are foundational to the VUS measures. Grasping these concepts helps understand how VUS extends and improves upon threshold-independent evaluation.

*How the paper uses it:* VUS measures are threshold-independent, building on the concept of evaluation metrics that integrate over all thresholds.

▶ [Lec-6.7:MODEL EVALUATION AND PERFORMANCE MATRICS| CLASS 2ND YEAR COMPUTER SCIENCE](https://www.youtube.com/watch?v=nffwlenlvrY) — CS & AI Learning with Arfan Wazeer | PhD Scholar · 24:03 · 1mo ago

### Area Under the Curve metrics *(prerequisite)*
AUC metrics like ROC and PR curves are standard tools for evaluating binary classifiers and are extended by the paper to handle range-based anomalies. Understanding these metrics is necessary to appreciate the innovations introduced by Range-AUC and VUS.

*How the paper uses it:* The paper extends traditional AUC metrics to Range-AUC and further to VUS for better evaluation of range-based anomalies.

▶ [The ROC Curve : Data Science Concepts](https://www.youtube.com/watch?v=SHM_GgNI4fY) — ritvikmath · 17:19 · 5y ago

### Range-based anomaly detection *(prerequisite)*
This section introduces the concept of range-based anomalies, which span multiple consecutive points in time series data, highlighting why point-based evaluation metrics are insufficient. This understanding is key to appreciating the motivation behind the VUS measures.

*How the paper uses it:* The paper specifically targets evaluation challenges posed by range-based anomalies in time series.

▶ [Anomaly Detection Algorithms and Techniques for Real-World Detection Systems](https://www.youtube.com/watch?v=CAvKQHHNmcY) — Next Day Video · 34:59 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper on VUS accuracy measures for time-series anomaly detection. Start with the basics of time-series anomaly detection and its evaluation challenges, then learn about threshold-independent metrics and AUC-based evaluation. Finally, grasp the novel Volume Under the Surface (VUS) measures proposed in the paper for robust, parameter-free evaluation of range-based anomalies.

### Time-series anomaly detection evaluation *(prerequisite)*
Learn what time-series anomaly detection is and why evaluating these methods is challenging, especially due to anomalies spanning ranges rather than points. This sets the stage for understanding why traditional metrics fall short and motivates the need for new evaluation measures.

*How the paper uses it:* The paper addresses limitations in existing evaluation methods for time-series anomaly detection, particularly for range-based anomalies.

▶ [Anomaly Detection : Time Series Talk](https://www.youtube.com/watch?v=XPwCo4cqqt0) — ritvikmath · 9:38 · 6y ago

### Threshold-independent evaluation metrics *(prerequisite)*
Understand evaluation metrics that do not rely on a fixed threshold, such as AUC, which consider all possible thresholds to provide a more robust assessment of model performance. This concept is crucial because threshold sensitivity is a key problem the paper aims to solve.

*How the paper uses it:* The paper proposes threshold-independent measures to overcome the sensitivity of threshold-based metrics in anomaly detection evaluation.

▶ [Lec-6.7:MODEL EVALUATION AND PERFORMANCE MATRICS| CLASS 2ND YEAR COMPUTER SCIENCE](https://www.youtube.com/watch?v=nffwlenlvrY) — CS & AI Learning with Arfan Wazeer | PhD Scholar · 24:03 · 1mo ago

### Area Under the Curve metrics *(prerequisite)*
Dive deeper into AUC metrics like ROC and Precision-Recall curves, which summarize model performance across thresholds. These are foundational metrics extended by the paper to handle range-based anomalies more effectively.

*How the paper uses it:* The paper extends traditional AUC metrics to Range-AUC and VUS measures for better evaluation of range-based anomalies.

▶ [ROC Curve & AUC | Logistic Regression Evaluation Metrics in Machine Learning | Urdu / Hindi](https://www.youtube.com/watch?v=wLgYR0IrxO4) — Programming With MA · 1:17:24 · 3mo ago

### Range-based anomaly detection *(prerequisite)*
Learn about anomalies that occur over continuous ranges in time-series data rather than isolated points. Understanding this anomaly type clarifies why traditional point-based evaluation metrics are insufficient.

*How the paper uses it:* The paper focuses on improving evaluation metrics specifically for range-based anomalies in time-series data.

▶ [Outlier & Anomaly Detection using Isolation Forest | What are Anomalies? | What is Isolation Forest?](https://www.youtube.com/watch?v=kN--TRv1UDY) — Six Sigma Pro SMART · 10:51 · 2y ago

### Volume Under the Surface measures
Explore the novel Volume Under the Surface (VUS) metrics that integrate over all buffer sizes and thresholds to provide parameter-free, threshold-independent evaluation of time-series anomaly detection methods. This concept is the core contribution of the paper.

*How the paper uses it:* VUS is the new family of accuracy measures proposed by the paper to robustly evaluate range-based anomaly detection without parameter tuning.

▶ [Double Integrals Explained Visually: Volume Under a Surface (Step by Step)](https://www.youtube.com/watch?v=UOxJQQPuBxs) — Mathspark8 · 26:24 · 6d ago

## Already in your library

- [Unsupervised anomaly detection in multivariate time series - Laura BOGGIA](https://www.youtube.com/watch?v=fV1cSVncNI0) — also for: HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series (John Paparrizos)
- [TransferLab Anomaly Detection Training - Module 5: Anomaly Detection on Time Series](https://www.youtube.com/watch?v=Q0VxhJ5c_7k) — also for: HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series (John Paparrizos)
- [Anomaly detection in time series with Python | Data Science with Marco](https://www.youtube.com/watch?v=qy41dXGbAxY) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [Shreya Khurana - Realtime Time Series Anomaly Detection in ...](https://www.youtube.com/watch?v=ca4w2ZIZ0S0) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Generic and Scalable Framework for Automated Time-series Anomaly Detection](https://www.youtube.com/watch?v=G0jxilXDVUQ) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [ROC and AUC, Clearly Explained!](https://www.youtube.com/watch?v=4jRBRDbJemM) — also for: Aligning Language Models with Selective Prediction (Aryan Deshwal)
- [ROC Curve in Machine Learning | ROC-AUC in Machine Learning Simplified | CampusX](https://www.youtube.com/watch?v=gdW6hj9IXaA) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [ROC Curves and Area Under the Curve (AUC) Explained](https://www.youtube.com/watch?v=OAl6eAyP-yo) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [Anomaly Detection: Algorithms, Explanations, Applications](https://www.youtube.com/watch?v=12Xq9OLdQwQ) — also for: Towards Scalable Visual Data Wrangling via Direct Manipulation (El Kindi Rezig)
- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Complete Anomaly Detection Machine Learning Algorithms- Isolation Forest,DBSCAN,Local Factor Outlier](https://www.youtube.com/watch?v=93DwLV0TkNs) — also for: HYDRA: A Multi-Level Hierarchy-Driven Approach for Robust Anomaly Detection in Time Series (John Paparrizos)
- [Anomaly Detection | Machine Learning Tutorial | TutorialsPoint](https://www.youtube.com/watch?v=AYap1FTvR9E) — also for: Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults (Daniel P. Siewiorek)
- [Anomaly-Based Intrusion Detection Explained (Beginner-Friendly IDS Tutorial)](https://www.youtube.com/watch?v=7vgKmbYWHiI) — also for: A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS) (Bryan C. Ward)
- [Lec-7: kNN Classification with Real Life Example | Movie Imdb Example | Supervised Learning](https://www.youtube.com/watch?v=O1nWXTXcCwI) — also for: Deepfake Detection: A Systematic Literature Review (Andrew H. Sung)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Stanford CS229: Machine Learning | Summer 2019 | Lecture ...](https://www.youtube.com/watch?v=Lb1-iNIOLBw) — also for: On the Entropy Calibration of Language Models (Gregory Valiant)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the VUS paper's contributions to time-series anomaly detection evaluation. The beginner project focuses on reproducing a core concept of threshold sensitivity in traditional metrics. The intermediate project involves implementing the VUS metric from the paper and comparing it against a baseline metric on a public time-series anomaly dataset. The advanced project extends the VUS computation to improve scalability, addressing one of the paper's stated limitations.

### Beginner — Threshold Sensitivity of Traditional Metrics on Range-Based Anomalies
*Effort: a weekend, ~8 hours*

You build a small Python script to simulate a univariate time series with synthetic range-based anomalies and anomaly scores. Then you compute threshold-based metrics like Precision, Recall, and F1-score at multiple thresholds to visualize their sensitivity and instability. You plot how these metrics vary with threshold choice, illustrating the problem the paper highlights.

**Why it shows you understood the paper:** This project shows you understand the core limitation of threshold-dependent evaluation metrics for range-based anomalies, a key motivation for the paper's VUS measures.

**Grounded in:** Threshold-based measures like Precision, Recall, and F-score are highly sensitive to threshold choice and noise, making them unreliable for time-series AD evaluation.

**Tech stack:** Python 3.x, matplotlib, numpy, pandas

**Data:** Synthetic univariate time series data with manually inserted range-based anomalies, generated within the project.

**Build it:**

1. Generate a synthetic univariate time series with normal data and several range-based anomaly segments.
2. Simulate anomaly scores with some noise and lag relative to the true anomalies.
3. Implement threshold-based Precision, Recall, and F1-score calculations over a range of thresholds.
4. Plot the metrics as functions of threshold to show sensitivity and instability.
5. Write a README explaining the threshold sensitivity problem and how it motivates threshold-independent metrics.

**Ships as:** A Python script and notebook that visualize threshold sensitivity of traditional metrics on range-based anomalies, with clear plots and explanations.

**Stretch goal:** Add a simple implementation of AUC-ROC and AUC-PR on the same data to compare threshold-dependent and threshold-independent metrics.

### Intermediate — Implementing and Evaluating VUS Metrics on Public Time-Series Data
*Effort: 2 weekends, ~20 hours*

You implement the Volume Under the Surface (VUS) family of accuracy measures from the paper based on its algorithmic descriptions. You apply your implementation to a public univariate time-series anomaly detection dataset (e.g., the Numenta Anomaly Benchmark or a similar well-known dataset) and compare VUS-ROC and VUS-PR against traditional AUC-ROC and AUC-PR metrics. You analyze and report differences in robustness and separability.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reimplement the paper's core contribution (VUS metrics) and apply it to real data, reproducing the paper's claims about improved robustness and consistency.

**Grounded in:** Proposal of the Volume Under the Surface (VUS) family of accuracy measures that integrate over all buffer sizes and thresholds, providing parameter-free and threshold-independent evaluation.

**Tech stack:** Python 3.x, numpy, pandas, matplotlib, scipy

**Data:** Public univariate time-series anomaly detection dataset such as the Numenta Anomaly Benchmark (NAB) or a similar publicly available dataset used as a substitute for the paper's data.

**Build it:**

1. Study the paper's algorithmic description of VUS and Range-AUC metrics.
2. Implement VUS-ROC and VUS-PR computations in Python, including buffer integration.
3. Download and preprocess a public univariate time-series anomaly detection dataset with labeled range anomalies.
4. Compute traditional AUC-ROC and AUC-PR metrics and your VUS metrics on anomaly detection scores from a baseline method (e.g., simple thresholding or a known AD algorithm).
5. Visualize and compare the metrics, highlighting robustness to noise and lag.
6. Document your implementation, usage instructions, and analysis in a detailed README.

**Ships as:** A Python package or notebook implementing VUS metrics, applied to a public dataset, with comparative analysis and visualizations demonstrating the advantages of VUS.

**Stretch goal:** Implement one of the paper's optimized VUS algorithms (VUSopt or VUSmemopt) to improve computation speed and compare runtime performance.

### Advanced — Optimizing VUS Computation for Scalable Evaluation
*Effort: 3+ weeks*

You develop an optimized implementation of the VUS metric computation inspired by the paper's VUSopt or VUSmemopt algorithms to reduce computational complexity. You benchmark your implementation against a naive VUS computation on large synthetic or public datasets. You explore parallelization or approximate methods to further improve scalability. You document trade-offs between speed and accuracy and discuss implications for near-real-time evaluation.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by improving VUS scalability, showing deep comprehension of the metric's computational challenges and practical deployment considerations.

**Grounded in:** Further optimization of VUS computation to reduce execution time and improve scalability.

**Tech stack:** Python 3.x, numpy, pandas, numba or Cython for optimization, matplotlib

**Data:** Large synthetic time-series data with range-based anomalies or a large public dataset with labeled anomalies to test scalability.

**Build it:**

1. Reimplement the naive VUS computation as a baseline.
2. Study the paper's descriptions of VUSopt and VUSmemopt optimization algorithms.
3. Implement one or both optimized algorithms using efficient data structures and vectorized operations.
4. Use tools like numba or Cython to accelerate critical code sections.
5. Benchmark runtime and memory usage on datasets of increasing size.
6. Optionally, explore parallel or approximate computation strategies.
7. Write a comprehensive report comparing methods, discussing scalability, and suggesting future improvements.

**Ships as:** An optimized VUS computation library with benchmarks and a report analyzing scalability improvements and trade-offs.

**Stretch goal:** Extend the evaluation framework to multivariate time-series anomaly detection, adapting VUS metrics accordingly.
