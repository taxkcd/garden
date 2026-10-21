---
title: "893 · Drug Overdose Vital-Signs Evaluator Using Machine Learning — Amanda Watson"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amanda-watson"
source_hash: "6a28fb60e9fa0c4dd69be9c353b82c89e52f38b881651fe99de3153497497b34"
sequence: 893
generator: "outreach-garden: managed"
---

# 893 · Drug Overdose Vital-Signs Evaluator Using Machine Learning

## At a glance

- **Professor:** Amanda Watson
- **Institution:** University of Virginia
- **Paper:** [Drug Overdose Vital-Signs Evaluator Using Machine Learning](https://www.ijcai.org/proceedings/2024/0814.pdf)
- **Authors:** Anush Niranjan Lingamoorthy, Abhishek Kumar Mishra, Suman Kumar, David Gordon, Jacob Brenner, Nagarajan Kandasamy, Amanda Watson
- **Year:** 2024

## Paper overview

This paper presents a novel wearable device worn on the shoulder that uses machine learning to detect opioid overdose by monitoring oxygen saturation, respiration, and motion. Because real overdose data is scarce, the authors used sleep apnea patient data as a proxy due to similar physiological signs. Their capsule network model, OxyCaps, classifies hypoxemia severity with high accuracy, aiming to improve early overdose detection and patient acceptance by focusing on comfort and concealability.

### Why it matters

**Research problem:** The opioid epidemic causes many deaths due to delayed overdose detection and intervention. Existing overdose detection devices often rely on single biomarkers and are not always acceptable to patients, especially those from underserved communities. There is a lack of clean, real-world overdose data to train effective detection models.

**Why it matters:** Opioid overdose deaths are a global crisis with 120,000 annual deaths worldwide and 16 million people affected by opioid use disorder. Timely detection and intervention can save lives, but many overdoses occur when users are alone, limiting chances for help. Patient willingness to wear detection devices is critical for effectiveness.

**Key contributions:**

- Development of OxyCaps, a novel capsule network architecture for hypoxemia classification using spatial and temporal features.
- Creation and public release of a unique shoulder-based PPG and motion dataset from 19 sleep apnea patients.
- Design and validation of a discreet, shoulder-worn wearable device tailored to underserved opioid use disorder populations.
- Demonstration that combining oxygen saturation, respiration, and motion features improves classification accuracy and reduces false positives.

## About the professor

**Amanda Watson** — Assistant Professor, Electrical and Computer Engineering, Computer Science, University of Virginia.

Research interests: Wearable technology for Healthcare and Athletic Performance

### Research links

- [Faculty/profile page](https://engineering.virginia.edu/faculty/amanda-watson)
- [Professor website](http://amandawatson.org/)
- [Resolved homepage](https://watsonresearchlab.org/team)
- [Lab website](https://engineering.virginia.edu/link-lab)
- [Google Scholar](https://scholar.google.com/citations?user%253D2UFPsQYAAAAJ%2526hl%253Den)
- [GitHub](https://github.com/aawatson22)
- [LinkedIn](https://www.linkedin.com/in/amandawatson22/)
- [Social profile](https://twitter.com/DrWatson_22)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** machine learning for physiological signals
**The paper assumes:** machine learning for physiological time-series data, signal feature extraction, classification models for biomedical signals
**Already in this field?** Skip this entirely if you already understand machine learning techniques applied to physiological signal processing and classification.

This background focuses on machine learning applied to physiological signal processing, essential for understanding the OxyCaps model's design and evaluation in the paper. The rigorous course option provides a deep, structured university-level foundation in biomedical signal processing, while the fast track offers a concise, practical introduction to digital signal processing concepts relevant to physiological data analysis. Readers can choose the lane that fits their time and depth needs; the fast track is a focused primer, not a shortcut in quality.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [PEC303:Biomedical Signal Processing](https://www.youtube.com/playlist?list=PLeefXVKiX48rcnK0TentV2rXrQoIhuqpy) — Course on Biomedical Signal Processing · 45 videos · 13.2h across 45 episodes

**Watch only this:** Series 2 Lecture 4 Electrical activity of heart through Series 2 Lecture 13 Electrical activity of Brain, about 2.5 hours — these lectures cover key physiological signals and their processing relevant to PPG and respiration signals used in the paper.

*Why it unblocks this paper:* This university-level Biomedical Signal Processing course covers foundational concepts and techniques for analyzing physiological signals like ECG and EEG, including noise/artifact handling and feature extraction, directly relevant to understanding the data and model in the paper.

*If you want all of it:* 13.2 hours across 45 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.341x Digital Signal Processing - Prof. Alan V. Oppenheim (2016)](https://www.youtube.com/playlist?list=PL9FGejYK7LeQ2oF0S3CjdWaVf8B3QcjfA) — Elmul Soad Swopno · 13 videos · 2.8h across 13 episodes

**Watch only this:** Episodes T1.1 Difference equations for LTI systems through T3 3 Further comments on sampling, about 1.5 hours — these episodes cover core DSP concepts essential for understanding signal preprocessing in the paper.

*Why it unblocks this paper:* This concise MIT Digital Signal Processing course provides clear, intuition-driven explanations of signal processing fundamentals like filtering, sampling, and system response, which underpin machine learning feature extraction from physiological signals in the paper.

*If you want all of it:* 2.8 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Drug Overdose Vital-Signs Evaluator Using Machine Learning,' start by building foundational knowledge on photoplethysmography (PPG) signal processing, hypoxemia and oxygen saturation monitoring, capsule networks in machine learning, and wearable sensor design for health monitoring. These prerequisites provide the physiological, technical, and hardware context necessary to appreciate the novel contributions of the paper. Finally, focus on the authors' own presentation of their wearable overdose detection system to directly grasp their approach, results, and future directions.

### Photoplethysmography signal processing *(prerequisite)*
Understanding how PPG signals are captured and processed is essential for interpreting the wearable sensor data used in the paper. The selected lecture from Dr. Cailbhe Doherty offers a rigorous academic overview of PPG origins, signal processing techniques, and applications in wearable technology, aligning well with the paper's sensor data acquisition and feature extraction.

*How the paper uses it:* The paper uses PPG signals from a shoulder-worn device to estimate oxygen saturation and respiration rate, making PPG signal processing foundational.

▶ [Photoplethysmography (PPG): Origins to Modern Applications in Wearable Technology](https://www.youtube.com/watch?v=YjM_bvzwwRc) — Dr Cailbhe Doherty · 12:42 · 2y ago

### Hypoxemia and oxygen saturation monitoring *(prerequisite)*
A solid grasp of hypoxemia and oxygen saturation measurement principles is critical to understanding the physiological basis for overdose detection in the paper. The video by Clinical Problem Solvers offers a detailed clinical and physiological explanation of hypoxemia versus hypoxia, pulse oximetry, and oxygen saturation metrics, providing depth beyond basic definitions.

*How the paper uses it:* The paper's core detection task is classifying hypoxemia severity using oxygen saturation and related vital signs.

▶ [Hypoxemia vs Hypoxia - False Hypoxemia and methemoglobinemia](https://www.youtube.com/watch?v=IyHJvWWi5wU) — Clinical Problem Solvers · 13:25 · 5y ago

### Capsule networks in machine learning *(prerequisite)*
Capsule networks are the key machine learning architecture used in the paper's OxyCaps model for hypoxemia classification. The detailed lecture from the AI Ukraine Conference thoroughly covers capsule network internals, training, and advantages over CNNs, providing the advanced technical background needed to understand the model design and performance claims.

*How the paper uses it:* OxyCaps, the paper's novel ML model, is a capsule network architecture tailored for hypoxemia classification.

▶ [Andrii Babii. INTRODUCTION TO CAPSULE NETWORKS](https://www.youtube.com/watch?v=K2y6CnCEqIo) — AI Ukraine Conference · 1:30:27 · 7y ago

### Wearable sensor design for health monitoring *(prerequisite)*
Understanding design considerations for wearable health sensors, especially comfort and discreetness, contextualizes the paper's development of a shoulder-worn device aimed at underserved populations. The ONDRI overview lecture provides an academic perspective on remote monitoring, commercial vs research-grade devices, and design challenges relevant to the paper's device.

*How the paper uses it:* The paper emphasizes patient-centric design of a shoulder-worn wearable device for overdose detection.

▶ [Wearable Sensors and Health Monitoring Overview through ONDRI@Home](https://www.youtube.com/watch?v=siKRu50KA4o) — Ontario Neurodegenerative Disease Research Initiative (ONDRI) · 15:40 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on opioid overdose detection using a wearable device and machine learning, start by learning the physiological basis of oxygen saturation and hypoxemia monitoring, which are critical for detecting overdose. Next, grasp how photoplethysmography (PPG) signals are captured and processed in wearables. Then, explore the design principles behind comfortable, discreet wearable sensors for health monitoring. Finally, build intuition on capsule networks, the core machine learning architecture used in the paper for classifying hypoxemia severity.

### Hypoxemia and oxygen saturation monitoring *(prerequisite)*
Hypoxemia means low oxygen levels in the blood, which is a key sign of opioid overdose. Understanding how oxygen saturation is measured and why it matters helps you grasp the physiological signals the wearable device monitors. This section explains oxygen transport, pulse oximetry, and how oxygen levels relate to health.

*How the paper uses it:* The paper detects opioid overdose by classifying hypoxemia severity using oxygen saturation data from a wearable sensor.

▶ [Hypoxemia vs Hypoxia - False Hypoxemia and methemoglobinemia](https://www.youtube.com/watch?v=IyHJvWWi5wU) — Clinical Problem Solvers · 13:25 · 5y ago

### Photoplethysmography signal processing *(prerequisite)*
Photoplethysmography (PPG) is an optical method used in wearables to measure blood volume changes and estimate oxygen saturation and heart rate. Understanding how PPG signals are generated and processed is essential to interpret the sensor data used by the machine learning model.

*How the paper uses it:* The shoulder-worn device collects PPG and motion data to estimate oxygen saturation and respiration rate for overdose detection.

▶ [Photoplethysmography (PPG): Origins to Modern Applications in Wearable Technology](https://www.youtube.com/watch?v=YjM_bvzwwRc) — Dr Cailbhe Doherty · 12:42 · 2y ago

### Wearable sensor design for health monitoring *(prerequisite)*
Designing wearable sensors for health requires balancing accuracy, comfort, and user acceptance, especially for vulnerable populations. This section covers principles of discreet, comfortable sensor placement and how wearables collect physiological data in real-world settings.

*How the paper uses it:* The paper’s novel shoulder-worn device was designed for comfort and concealability to improve patient acceptance in underserved opioid use disorder populations.

▶ [Wearable Sensors and Health Monitoring Overview through ONDRI@Home](https://www.youtube.com/watch?v=siKRu50KA4o) — Ontario Neurodegenerative Disease Research Initiative (ONDRI) · 15:40 · 5y ago

### Capsule networks in machine learning *(prerequisite)*
Capsule networks are an advanced neural network architecture that better capture spatial and temporal relationships in data compared to traditional convolutional networks. Understanding their structure and routing mechanisms helps explain why the paper’s OxyCaps model achieves high accuracy in classifying hypoxemia severity.

*How the paper uses it:* The paper develops OxyCaps, a capsule network model that classifies three hypoxemia stages from wearable sensor data with high accuracy.

▶ [Capsule Networks Explained](https://www.youtube.com/watch?v=sGK5mhJSzVg) — DataMListic · 6:06 · 3y ago

## Already in your library

- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas from the "Drug Overdose Vital-Signs Evaluator Using Machine Learning" paper. Starting with basic signal processing and visualization of PPG data, moving to implementing the OxyCaps capsule network model for hypoxemia classification on a proxy dataset, and culminating in extending the model or device calibration to address key limitations noted by the authors. Each project ties directly to a specific contribution, result, or limitation from the paper and leverages the applicant's existing software engineering and machine learning skills.

### Beginner — PPG Signal Processing and Visualization from Shoulder Data
*Effort: a weekend (~6-8 hours)*

You build a small Python project that loads sample photoplethysmography (PPG) and motion sensor data from sleep apnea patients (simulated or publicly available PPG data as proxy), processes the signals to extract oxygen saturation and respiration rate estimates, and visualizes these signals over time. The project replicates the initial data processing pipeline that underpins the wearable device's vital sign monitoring.

**Why it shows you understood the paper:** This project demonstrates your grasp of the physiological signals and preprocessing steps critical to the paper's wearable device design and data collection, showing you understand the foundational data the OxyCaps model uses.

**Grounded in:** The paper's approach section describing the shoulder-based wearable sensor collecting PPG and motion data to estimate oxygen saturation and respiration rate.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Use publicly available PPG datasets from sleep apnea studies as a proxy since the paper's own dataset is not publicly released; alternatively, simulate PPG signals with noise and motion artifacts.

**Build it:**

1. Find and download a publicly available PPG dataset related to sleep apnea or simulate PPG and motion signals.
2. Implement signal filtering and preprocessing to clean the PPG and motion data.
3. Extract features such as oxygen saturation estimates and respiration rate from the processed signals.
4. Visualize the raw and processed signals along with the extracted features over time using plots.
5. Write a README explaining the signal processing steps and their relevance to hypoxemia monitoring.

**Ships as:** A GitHub repository with Python notebooks/scripts that load, process, and visualize PPG and motion data, demonstrating the extraction of vital signs relevant to hypoxemia.

**Stretch goal:** Add a simple threshold-based classifier to categorize oxygen saturation levels into normal and hypoxemia stages.

### Intermediate — Reimplement OxyCaps Capsule Network for Hypoxemia Classification
*Effort: 1-3 weekends (~20 hours)*

You implement the OxyCaps capsule network architecture described in the paper to classify three hypoxemia severity levels (normal, moderate, severe) using features extracted from shoulder PPG and motion data. You train and evaluate your model on a proxy dataset (e.g., sleep apnea PPG data) and compare its accuracy and recall against a simple baseline classifier such as Random Forest or SVM.

**Why it shows you understood the paper:** This project shows you can translate the paper's novel capsule network design into working code, understand the classification task, and critically evaluate model performance metrics as reported in the paper.

**Grounded in:** The paper's key contribution of developing OxyCaps, a capsule network for hypoxemia classification achieving 92% accuracy and 0.98 recall for critical hypoxemia.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use publicly available sleep apnea PPG datasets as a proxy for opioid overdose data; no official dataset from the paper is released, so you reimplement based on the paper's description.

**Build it:**

1. Review the paper's description of the OxyCaps capsule network architecture and hypoxemia classification task.
2. Preprocess the proxy dataset to extract features similar to those used in the paper (oxygen saturation, respiration, motion).
3. Implement the capsule network model architecture in PyTorch or TensorFlow.
4. Train the model using cross-validation and evaluate classification accuracy and recall for hypoxemia stages.
5. Implement a baseline model (e.g., Random Forest) on the same data and compare performance.
6. Document your implementation details, results, and comparison in a README.

**Verified links from the paper:**

- <https://github.com/abhishekkumarm98/Drug-Overdose-Vital-Signs-Evaluator> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the capsule network implementation, training scripts, evaluation results, and comparison with a baseline classifier on hypoxemia classification.

**Stretch goal:** Incorporate temporal feature extraction (e.g., using LSTM layers) to improve classification performance.

### Advanced — Calibrate and Validate Shoulder-Worn Device Data with Controlled Hypoxemia Simulation
*Effort: few weeks (~40+ hours)*

You design and implement a software pipeline to calibrate the shoulder-worn wearable device's sensor data against controlled hypoxemia lab data or simulated drug-induced apnea data. This project addresses the paper's limitation of lacking gold-standard validation and improves signal-to-noise ratio by applying advanced filtering and multi-channel spectral sensing techniques. You also propose a method to collect and integrate real opioid overdose physiological data for model refinement.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend the research practically by improving device calibration, data quality, and real-world applicability.

**Grounded in:** The paper's stated future directions to calibrate the shoulder device in controlled hypoxemia labs and deploy take-home devices to collect real-world opioid overdose data.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, NumPy, SciPy, Matplotlib, Jupyter Notebook, Docker

**Data:** Use simulated hypoxemia data or collaborate with clinical researchers to obtain controlled hypoxemia lab data; simulate opioid overdose physiological signals if real data is unavailable.

**Build it:**

1. Research controlled hypoxemia lab protocols and data characteristics relevant to the shoulder device.
2. Develop signal processing algorithms to improve noise filtering and multi-channel spectral sensing on shoulder PPG data.
3. Implement a calibration pipeline aligning wearable sensor readings with gold-standard hypoxemia measurements.
4. Simulate or acquire opioid overdose physiological data and integrate it into the pipeline for model refinement.
5. Evaluate the impact of calibration on hypoxemia classification accuracy and false positive reduction.
6. Document the calibration methodology, results, and recommendations for device deployment.

**Ships as:** A comprehensive GitHub repository with calibration code, signal enhancement algorithms, evaluation results, and a detailed README outlining the approach to address device limitations and data scarcity.

**Stretch goal:** Develop a prototype mobile app or cloud service to collect and process real-time wearable data from opioid use disorder patients for ongoing model improvement.

_The paper's own dataset is not publicly released; all projects relying on data must use publicly available sleep apnea PPG datasets as proxies or simulate data accordingly._
