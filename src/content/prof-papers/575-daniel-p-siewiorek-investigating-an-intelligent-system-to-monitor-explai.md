---
title: "575 · Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults — Daniel P. Siewiorek"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-p-siewiorek"
source_hash: "244590553843ed75ac33774d9bb7488dcfee1072e3e3db6260f120ff0f573ae4"
sequence: 575
generator: "outreach-garden: managed"
---

# 575 · Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults

## At a glance

- **Professor:** Daniel P. Siewiorek
- **Institution:** Carnegie Mellon University
- **Paper:** [Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults](https://arxiv.org/pdf/2501.18108)
- **Authors:** Min Hun Lee, Singapore Management University, Singapore, Daniel P. Siewiorek, Carnegie Mellon University, USA, Alexandre Bernardino, Instituto Superior Técnico, Portugal
- **Year:** 2025

## Paper overview

This paper presents the design, development, and qualitative evaluation of an intelligent system that monitors older adults' daily activities using wireless motion sensors and machine learning to detect abnormal patterns. The system also supports interactive dialogues to explain these abnormalities to caregivers and allows older adults to control what information is shared, aiming to improve personalized care while preserving privacy and dignity.

### Why it matters

**Research problem:** Despite the potential of older adult care technologies, adoption remains low due to usability, trust, privacy concerns, and lack of user control, especially since many systems operate as black boxes providing only one-directional notifications without explanations or interactive control.

**Why it matters:** With the global aging population increasing, there is a critical need for efficient healthcare delivery that supports independent living and timely interventions for older adults. Improving technology adoption by addressing trust, control, and privacy can enhance quality of life and reduce caregiver burden.

**Key contributions:**

- Development of an intelligent system that detects abnormal activity patterns of older adults using wireless motion sensors and interpretable machine learning models.
- Implementation of interactive dialogue responses to explain abnormal events to caregivers and allow older adults to proactively control information sharing.
- Engagement with stakeholders (family caregivers, professional caregivers, and older adults) through focus groups and qualitative studies to inform human-centered design.
- Identification of key design principles to preserve independence and dignity by prioritizing non-visual sensors and enabling user control.
- Discussion of practical considerations including trust, privacy, system performance, and financial/policy challenges.

## About the professor

**Daniel P. Siewiorek** — Buhl University Professor, Electrical and Computer Engineering and Computer Science, Carnegie Mellon University.

Research interests: Wearable Computing, Context-Aware Computing, Fault-tolerant Computing, Reliable Computing, Computer-aided Design, Computer Architecture, Design Automation, Rapid Prototyping

### Research links

- [Faculty/profile page](https://www.cs.cmu.edu/~dps)
- [Professor website](http://www.cs.cmu.edu/~dps)
- [Resolved homepage](http://www.cmu.edu/qolt)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Graphical Models
**The paper assumes:** probabilistic graphical models, hidden Markov models, and decision tree classifiers
**Already in this field?** Skip this entirely if you already understand probabilistic graphical models and their application to time series data and classification.

This background focuses on Probabilistic Graphical Models (PGMs), essential for understanding the Hidden Markov Models and decision trees used in the paper's intelligent system for detecting abnormal activity patterns. The rigorous course offers a deep, structured university-level treatment of PGMs, while the fast track provides a concise, intuition-driven introduction suitable for quickly grasping core concepts without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic Graphical Model by Daphne Koller [Full Course]](https://www.youtube.com/playlist?list=PLBAGcD3siRDjiQ5VZQ8t0C7jkHQ8fhuq8) — Deep Learning Boston · 83 videos · 14.8h across the first 60 episodes

**Watch only this:** Episodes 1 to 24 (PGM1. Welcome to PGM through PGM24), about 5.5 hours — this subset covers motivation, semantics, factorization, and reasoning patterns foundational to PGMs.

*Why it unblocks this paper:* The 'Probabilistic Graphical Model by Daphne Koller [Full Course]' playlist by Deep Learning Boston offers a clear, concise introduction to PGMs with short episodes that build intuition and foundational knowledge, ideal for quickly understanding the basics relevant to the paper.

*If you want all of it:* About 14.8 hours across the first 60 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on an intelligent system for monitoring and explaining abnormal activity patterns of older adults, start with foundational knowledge on wireless motion sensor-based activity recognition and Hidden Markov Models, which underpin the system's sensing and modeling approach. Then, explore interpretable machine learning techniques for anomaly detection to grasp how abnormalities are explained. Next, review human-centered design principles for healthcare technologies to appreciate the user-centric approach. Finally, focus on the paper's core concept through the authors' own talk to gain direct insights into their system design, evaluation, and challenges.

### Wireless Motion Sensor Activity Recognition *(prerequisite)*
This section covers the core sensing technology used in the paper's system, focusing on how wireless motion sensors capture human activities. Understanding these sensor modalities and their application in activity recognition provides the necessary background for the system's data acquisition and monitoring capabilities.

*How the paper uses it:* The system monitors older adults' activities using wireless motion sensors to detect abnormal patterns.

▶ [Human Activity Recognition using Wearable Sensors](https://www.youtube.com/watch?v=EN0VQSeo1OY) — Tao Gu · 11 years ago

### Hidden Markov Models for Activity Recognition *(prerequisite)*
Hidden Markov Models (HMMs) are a key machine learning technique used in the paper to model and recognize activity patterns from sensor data. This section explains the theoretical foundations and practical applications of HMMs in sequential data modeling, which is critical to understanding the system's activity recognition approach.

*How the paper uses it:* The paper uses Hidden Markov Models for modeling and detecting activity patterns of older adults.

▶ [PRIISM Seminar | Vianey Leos Barajas | Spatially-coupled Hidden Markov Models](https://www.youtube.com/watch?v=FNqg7YBVLyA) — NYU PRIISM · 59:09 · 5 years ago

### Interpretable Machine Learning for Anomaly Detection *(prerequisite)*
Interpretable machine learning methods enable the system to explain detected abnormal activity patterns to caregivers and users. This section introduces concepts and techniques for building anomaly detectors that are understandable and trustworthy, aligning with the paper's focus on explainability and user control.

*How the paper uses it:* The system implements interpretable machine learning models to explain abnormal events to caregivers and older adults.

▶ [Interpretable vs Explainable Machine Learning](https://www.youtube.com/watch?v=VY7SCl_DFho) — A Data Odyssey · 3 years ago

### Human-Centered Design for Healthcare Technologies *(prerequisite)*
Human-centered design principles guide the development of healthcare technologies that are usable, trustworthy, and respectful of user autonomy. This section explores design frameworks and case studies relevant to creating systems that address privacy, control, and adoption challenges, directly informing the paper's design approach.

*How the paper uses it:* The paper engages stakeholders and applies human-centered design to improve usability, trust, and user control in older adult care.

▶ [Applications of Human-Centered Design to Create Inclusive Health Informatics Interventions](https://www.youtube.com/watch?v=h0xKRJ7d-PY) — Dept. Biomedical Informatics Columbia University · 2 years ago

### Paper Author Talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed insights into the system's design, development, evaluation, and the challenges encountered. Watching this talk offers a comprehensive understanding of the paper's contributions and future directions from the creators themselves.

*How the paper uses it:* This talk directly presents the authors' work on the intelligent system for monitoring and explaining abnormal activity patterns in older adults.

▶ ["Human Fall Detection and Activity Monitoring Using AI|Smart Healthcare & Computer Vision Explained"](https://www.youtube.com/watch?v=bshAlo-6wYE) — Researcher lyceum · 2 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the intelligent system for monitoring older adults' abnormal activity patterns. Starting with wireless motion sensor technology for activity recognition, it then covers the key machine learning method (Hidden Markov Models) used to model activities, followed by interpretable machine learning for anomaly detection to explain abnormalities. Finally, it covers human-centered design principles and interactive dialogue systems that enable user control and communication in the system.

### Wireless Motion Sensor Activity Recognition *(prerequisite)*
Learn how wireless motion sensors capture human movements and how these sensor data are used to recognize daily activities. This foundational knowledge explains the sensing technology that enables monitoring of older adults' behaviors without intrusive cameras.

*How the paper uses it:* The system uses wireless motion sensors to monitor older adults' daily activities while preserving privacy.

▶ [Human Activity Recognition using Wearable Sensors](https://www.youtube.com/watch?v=EN0VQSeo1OY) — Tao Gu · 11 years ago

### Hidden Markov Models for Activity Recognition *(prerequisite)*
Understand Hidden Markov Models (HMMs), a statistical method that models sequences of activities where the true state is hidden but can be inferred from observed sensor data. HMMs are widely used for recognizing patterns in time-series data like human activities.

*How the paper uses it:* The paper uses Hidden Markov Models to recognize activity patterns from sensor data.

▶ [Hidden Markov Model : Data Science Concepts](https://www.youtube.com/watch?v=fX5bYmnHqqE) — ritvikmath · 13:52 · 6 years ago

### Interpretable Machine Learning for Anomaly Detection *(prerequisite)*
Explore how machine learning models can detect unusual or abnormal activity patterns and how interpretability helps caregivers understand why an event is flagged. This builds trust and supports explanations in the system.

*How the paper uses it:* Interpretable machine learning models detect and explain abnormal activity patterns to caregivers and older adults.

▶ [Anomaly Detection | Machine Learning Tutorial | TutorialsPoint](https://www.youtube.com/watch?v=AYap1FTvR9E) — TutorialsPoint · 2 years ago

### Human-Centered Design for Healthcare Technologies *(prerequisite)*
Learn the principles of designing healthcare technologies that prioritize usability, trust, privacy, and user control. Human-centered design ensures that systems meet the real needs of older adults and caregivers.

*How the paper uses it:* The system design was informed by human-centered design principles to improve adoption, trust, and user control.

▶ [What is Human Centered Design?](https://www.youtube.com/watch?v=musmgKEPY2o) — IDEO.org · 10 years ago

### Paper Author Talk *(the paper's own talk)*
Gain direct insights from the authors about the motivation, design, and evaluation of the intelligent system for monitoring older adults, providing context and deeper understanding of the research contributions.

*How the paper uses it:* Author talks provide specific explanations and motivations behind the system presented in the paper.

▶ ["Human Fall Detection and Activity Monitoring Using AI|Smart Healthcare & Computer Vision Explained"](https://www.youtube.com/watch?v=bshAlo-6wYE) — Researcher lyceum · 2 weeks ago

## Already in your library

- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core contributions and limitations. The beginner project reproduces a key mechanism—activity anomaly detection using motion sensor data—with familiar tools. The intermediate project reimplements the core machine learning method (HMM + decision tree anomaly detection) on a substitute dataset, comparing against a baseline. The advanced project extends the system by addressing a stated limitation: improving interaction modalities for emergency scenarios with multimodal sensing and dialogue, showing deeper engagement with the paper's future directions.

### Beginner — Motion Sensor Abnormal Activity Detection Prototype
*Effort: a weekend, ~8 hours*

You build a simple prototype that simulates wireless motion sensor data for an older adult's daily activities and implements a basic Hidden Markov Model (HMM) to recognize activity states. Then you apply a decision tree classifier to detect abnormal activity patterns from the recognized states. The system outputs textual explanations of detected anomalies.

**Why it shows you understood the paper:** This project shows you understand the paper's core mechanism of combining wireless motion sensor data with interpretable machine learning (HMM + decision tree) to detect and explain abnormal activity patterns.

**Grounded in:** Development of an intelligent system that detects abnormal activity patterns of older adults using wireless motion sensors and interpretable machine learning models.

**Tech stack:** Python 3.11, hmmlearn, scikit-learn, Jupyter Notebook

**Data:** Simulated wireless motion sensor data representing typical and abnormal activity sequences, synthesized based on descriptions in the paper since no public dataset is provided.

**Build it:**

1. Simulate a small dataset of motion sensor event sequences representing daily activities with injected abnormal patterns.
2. Implement an HMM using hmmlearn to model normal activity states and perform activity recognition.
3. Train a decision tree classifier on recognized activity sequences to detect anomalies.
4. Create simple textual explanations for detected anomalies based on decision tree outputs.
5. Write a Jupyter Notebook demonstrating the pipeline with visualizations of recognized activities and anomaly alerts.

**Ships as:** A Jupyter Notebook with code, simulated data, visualizations, and textual anomaly explanations illustrating the core detection mechanism.

**Stretch goal:** Add a simple command-line interactive dialogue to allow a simulated older adult to confirm or dismiss detected anomalies.

### Intermediate — Reimplementation of Activity Recognition and Anomaly Detection
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core method of using Hidden Markov Models for activity recognition combined with decision tree anomaly detection on a publicly available human activity dataset (e.g., the UCI Human Activity Recognition dataset as a substitute). You compare your anomaly detection results against a simple baseline such as threshold-based anomaly detection and report metrics like detection accuracy or F1 score.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's core machine learning pipeline on real data, understand the interpretability aspect via decision trees, and evaluate system performance against a baseline.

**Grounded in:** The system uses wireless motion sensors and machine learning (Hidden Markov Models for activity recognition and decision trees for anomaly detection) to detect abnormal activity patterns.

**Tech stack:** Python 3.11, hmmlearn, scikit-learn, pandas, matplotlib

**Data:** UCI Human Activity Recognition Using Smartphones Dataset (publicly available) used as a substitute for wireless motion sensor data described in the paper.

**Build it:**

1. Download and preprocess the UCI HAR dataset to extract sequences of sensor readings representing activities.
2. Train an HMM to recognize activity states from the sensor sequences.
3. Train a decision tree classifier to detect anomalies based on recognized activity sequences.
4. Implement a simple baseline anomaly detector (e.g., threshold-based on activity duration or frequency).
5. Evaluate and compare the anomaly detection performance of your method and the baseline using accuracy and F1 score.
6. Document the methodology, results, and insights in a detailed README.

**Ships as:** A GitHub repository with code, data preprocessing scripts, evaluation metrics, and a README reporting comparative results and discussion.

**Stretch goal:** Incorporate a simple interactive explanation module that outputs human-readable reasons for detected anomalies based on decision tree paths.

### Advanced — Multimodal Emergency Interaction Extension for Older Adult Monitoring
*Effort: a few weeks, ~40+ hours*

You extend the core system by integrating an additional sensing modality (e.g., simulated environmental sensors or wearable accelerometer data) alongside motion sensors to improve detection robustness in multi-occupant or emergency scenarios. You develop an enhanced interactive dialogue system that supports urgent notifications and allows older adults to respond via voice or simple inputs. You evaluate the system's ability to handle emergency-like situations with simulated data and interaction flows.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by improving system robustness and interaction modalities for emergencies, demonstrating your ability to extend research concepts into practical, user-centered solutions.

**Grounded in:** Limitations include questionable system performance in multi-occupant settings and limited interaction methods; future directions include enhancing interaction modalities to support urgent notifications and easier engagement for older adults.

**Tech stack:** Python 3.11, FastAPI, React.js, SpeechRecognition (browser API or Python), scikit-learn, hmmlearn

**Data:** Simulated multimodal sensor data combining motion events and environmental triggers; simulated emergency event sequences synthesized based on paper descriptions.

**Build it:**

1. Design and simulate a multimodal dataset combining motion sensor data with an additional sensor modality (e.g., door sensors, accelerometers).
2. Extend the HMM and anomaly detection pipeline to incorporate multimodal inputs for improved abnormal event detection.
3. Develop a React frontend with an interactive dialogue interface allowing older adults to receive urgent notifications and respond via voice or button clicks.
4. Implement a FastAPI backend to handle sensor data processing, anomaly detection, and dialogue management.
5. Simulate emergency scenarios and evaluate system responsiveness and interaction effectiveness.
6. Document the system architecture, interaction design decisions, and evaluation results.

**Ships as:** A full-stack prototype repository with backend anomaly detection, frontend interactive dialogue UI, simulated multimodal data, and demonstration scripts for emergency interaction scenarios.

**Stretch goal:** Integrate a fallback notification channel (e.g., SMS or email) to alert caregivers if the older adult does not respond within a timeout period.

_The paper authors released no code or datasets; all data must be simulated or substituted with public datasets approximating wireless motion sensor activity data._
