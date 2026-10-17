---
title: "678 · Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring — Monika Akbar"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-monika-akbar"
source_hash: "6a997ac22f6b01d0640e2472da3e04d622f33d6784d1a13811b3c276b2a82d01"
sequence: 678
generator: "outreach-garden: managed"
---

# 678 · Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring

## At a glance

- **Professor:** Monika Akbar
- **Institution:** University of Texas - El Paso
- **Paper:** [Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring](https://www.mdpi.com/2306-5354/12/9/922/pdf?version=1756299603)
- **Authors:** Mohammad Akidul Hoque, Shamim Ehsan, Anuradha Choudhury, Peter Lum, Monika Akbar, Shashwati Geed, M. Shahriar Hossain
- **Year:** 2025

## Paper overview

This paper presents a novel framework that uses large language models (LLMs) to automatically generate natural language descriptions of patient activities during stroke therapy sessions from video data. These descriptions are aligned with wrist-worn accelerometer sensor data to create labeled training datasets. The goal is to enable automated, non-intrusive, and scalable monitoring of stroke rehabilitation by generating text-based feedback directly from sensor data, reducing the need for manual video annotation.

### Why it matters

**Research problem:** Stroke rehabilitation requires accurate monitoring of patient activities to assess therapy dosing and motor recovery. Current wearable sensors like accelerometers provide movement data but struggle to distinguish specific functional activities without labor-intensive manual video annotation. The problem is to develop automated methods to generate meaningful activity descriptions from sensor data to support clinical monitoring.

**Why it matters:** Stroke is a leading cause of long-term disability, and effective rehabilitation depends on quantifying meaningful task-specific practice. Manual annotation of video data for sensor labeling is time-consuming and limits clinical adoption. Automated, scalable monitoring tools can improve therapy personalization, reduce clinician burden, and enable remote rehabilitation.

**Key contributions:**

- An automated video-based annotation pipeline integrating LLMs and machine learning to classify patient activities during therapy.
- Exploratory analysis demonstrating distinctive temporal and statistical features in accelerometer data corresponding to specific activities.
- A visionary deep learning framework proposal for sensor-to-text generation to provide text-based feedback for stroke rehabilitation monitoring.

## About the professor

**Monika Akbar** — Associate Professor, Computer Science, University of Texas - El Paso.

Research interests: information retrieval and integration aspects of machine learning (ML) and artificial intelligence (AI), specifically for enhancing our understanding of emerging threats, including but not limited to cyber vulnerabilities, malware, and disease outbreaks

### Research links

- [Faculty/profile page](https://hb2504.utep.edu/Home/Profile?username=makbar)
- [Professor website](https://expertise.utep.edu/profiles/makbar)
- [Google Scholar](https://scholar.google.com/citations?user=jp4c0ocAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** sequence-to-sequence deep learning
**The paper assumes:** deep learning, sequence-to-sequence models, transformer architectures, attention mechanisms
**Already in this field?** Skip this entirely if you already understand deep learning sequence-to-sequence models and transformer architectures.

This background focuses on sequence-to-sequence deep learning models, particularly transformer architectures, which are central to the paper's proposed sensor-to-text generation framework for stroke therapy monitoring. The rigorous course offers a comprehensive university-level treatment of NLP with deep learning, including sequence-to-sequence models and transformers, while the fast track provides a concise, intuition-driven introduction to sequence-to-sequence models and attention mechanisms. Choose the course for deep understanding and the fast track for a quick but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 6 (Sequence to Sequence Models), 7 (Attention, Final Projects and LLM Intro), and 8 (Self-Attention and Transformers), about 3.5 hours total — these cover the core seq2seq and transformer concepts needed for the paper.

*Why it unblocks this paper:* Stanford CS224N Natural Language Processing with Deep Learning (Spring 2024) is a top-tier university course led by Professor Christopher Manning that covers sequence-to-sequence models, attention, and transformers in depth, directly relevant to understanding the paper's sensor-to-text transformer architecture.

*If you want all of it:* About 27.5 hours across 23 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Sequence Models (Course 5 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6) — DeepLearningAI · 6 videos · 1.0h across 6 episodes

**Watch only this:** All 6 episodes, about 1 hour total — covers basic seq2seq models, attention intuition, and related concepts efficiently.

*Why it unblocks this paper:* DeepLearningAI's Sequence Models (Course 5 of the Deep Learning Specialization) is a concise, well-structured series that clearly explains sequence-to-sequence models and attention mechanisms in about one hour, providing a quick but solid foundation for the paper's methods.

*If you want all of it:* About 1.0 hour across 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on leveraging LLM-based video annotations for stroke therapy monitoring, start with foundational knowledge on multimodal sensor and video data fusion, which is crucial for integrating video and accelerometer data. Next, study large language models for video captioning to grasp how textual descriptions are generated from video frames. Then, explore accelerometer signal processing for activity recognition to understand feature extraction from sensor data. Finally, focus on the core concept of the paper, including the authors' own talk if available, to learn about their novel annotation pipeline and proposed sensor-to-text generation framework.

### Multimodal sensor and video data fusion *(prerequisite)*
Understanding how to effectively combine video and accelerometer data is foundational to the paper's approach, as it relies on synchronized multimodal inputs for annotation and classification. This section covers deep learning methods for sensor fusion, which underpin the pipeline's ability to correlate visual and sensor signals.

*How the paper uses it:* The paper's annotation pipeline integrates video frames and wrist-worn accelerometer data for activity labeling.

▶ [DeeperSense - Learning for Multimodal Sensor Fusion](https://www.youtube.com/watch?v=siIR_1WAgtg) — German Research Center for Artificial Intelligence · 5 yr ago

### Large language models for video captioning *(prerequisite)*
This section explains how large language models can generate detailed textual descriptions from visual inputs, a key step in automating video annotation. Understanding LLM capabilities and architectures for visual understanding is critical to appreciate the paper's use of BLIP-2, LLaMA-3, and GPT-4o for caption generation.

*How the paper uses it:* The paper uses LLMs to produce structured activity descriptions from video frames for sensor data labeling.

▶ [Unleashing the Power of LLMs for Visual Understanding](https://www.youtube.com/watch?v=kbVYUnr_1Q0) — MIT Embodied Intelligence · 1:29:45

### Accelerometer signal processing for activity recognition *(prerequisite)*
Extracting meaningful features from accelerometer time series is essential for classifying patient activities. This section covers advanced techniques for time series feature extraction and machine learning models applied to sensor data, which support the paper's classification and sensor-to-text modeling.

*How the paper uses it:* The paper analyzes accelerometer signal patterns and statistical features to distinguish functional activities.

▶ [Feature Extraction from Time Series // Demo Lesson for " ...](https://www.youtube.com/watch?v=miy0KusjPa4) — OTUS IT Онлайн - образование · 1:37:10

### Sequence-to-sequence transformer models for sensor-to-text
This section introduces the encoder-decoder transformer architectures that the paper proposes for generating natural language descriptions directly from accelerometer data. Understanding seq2seq models and attention mechanisms is vital for grasping the future directions of sensor-to-text generation.

*How the paper uses it:* The paper proposes a seq2seq transformer framework to translate accelerometer signals into natural language activity descriptions.

▶ [Introduction to Encoder-Decoder Architecture | Sequence to Sequence Model](https://www.youtube.com/watch?v=Pc-sR242Kmo) — Gate Smashers · 5 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how the paper leverages AI for stroke therapy monitoring, starting with basics of accelerometer signal processing for activity recognition, then exploring multimodal sensor and video data fusion, followed by how large language models generate text from video frames, and concluding with the advanced concept of sequence-to-sequence transformer models for generating natural language directly from sensor data. Each section builds intuition with clear, concise videos tailored to the paper's methods and goals.

### Accelerometer signal processing for activity recognition *(prerequisite)*
Learn how raw accelerometer data from wearable sensors is processed to extract meaningful features that help identify different human activities. This includes understanding time series data, statistical features like mean and standard deviation, and how these relate to movement patterns.

*How the paper uses it:* The paper analyzes accelerometer signal patterns and statistical features to distinguish functional activities during stroke therapy.

▶ [Feature Extraction from Time Series // Demo Lesson for " ...](https://www.youtube.com/watch?v=miy0KusjPa4) — OTUS IT Онлайн - образование · 1:37:10

### Multimodal sensor and video data fusion *(prerequisite)*
Understand how data from different sources, like video and accelerometers, can be synchronized and combined to provide richer information for activity recognition. This fusion enables leveraging complementary strengths of each modality for better monitoring.

*How the paper uses it:* The authors collect synchronized video and accelerometer data to create labeled datasets for training classifiers.

▶ [DeeperSense - Learning for Multimodal Sensor Fusion](https://www.youtube.com/watch?v=siIR_1WAgtg) — German Research Center for Artificial Intelligence · 5 yr ago

### Large language models for video captioning *(prerequisite)*
Explore how large language models (LLMs) can generate detailed textual descriptions from visual inputs like video frames. This involves understanding how LLMs interpret images and produce natural language captions that describe activities.

*How the paper uses it:* LLMs are used to automatically generate activity descriptions from video frames, forming the basis for labeling sensor data.

▶ [Unleashing the Power of LLMs for Visual Understanding](https://www.youtube.com/watch?v=kbVYUnr_1Q0) — MIT Embodied Intelligence · 1:29:45

### Sequence-to-sequence transformer models for sensor-to-text
Delve into sequence-to-sequence transformer architectures that can translate time series sensor data directly into natural language descriptions. This advanced concept underpins the paper’s proposed future framework for automated sensor-to-text generation.

*How the paper uses it:* The paper proposes a deep learning framework using Seq2Seq transformers to generate natural language from accelerometer data.

▶ [Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=L8HKweZIOmg) — StatQuest with Josh Starmer · 3 yr ago

## Already in your library

- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Lecture 4 – Multimodal Fusion (MIT How to AI Almost Anything/Multimodal AI, Spring 2026)](https://www.youtube.com/watch?v=0SOieOIe4HI) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [Multimodal Models and Fusion - Complete Guide](https://www.youtube.com/watch?v=VL6izWvH4iA) — also for: UniDetect: LLM-Driven Universal Fraud Detection across Heterogeneous Blockchains (Dan Lin)
- [Lecture 18. Image/Video Captioning](https://www.youtube.com/watch?v=cbhoDeAcN3Q) — also for: Grounded Video Description (Jason J. Corso)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's approach to automated stroke therapy monitoring via multimodal data fusion and sensor-to-text generation. The beginner project focuses on reproducing a core analysis of accelerometer features for activity distinction. The intermediate project implements the paper's LLM-based video annotation pipeline and trains classifiers on generated text labels for activity recognition. The advanced project tackles the paper's future direction by developing a sequence-to-sequence transformer model to generate natural language descriptions directly from accelerometer data, addressing a key limitation and extending the research.

### Beginner — Accelerometer Feature Analysis for Stroke Therapy Activities
*Effort: a weekend, ~8 hours*

You build a Python notebook that processes wrist-worn accelerometer time series data to extract statistical features such as mean, standard deviation, and zero-crossing rate. You visualize and analyze these features to distinguish between different functional activities like grabbing and walking, reproducing the exploratory analysis shown in the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key insight that accelerometer signals contain distinctive temporal and statistical patterns corresponding to specific therapy activities, a foundational step for sensor-based activity recognition.

**Grounded in:** Section 5.4 and Figure 6 analyze accelerometer axis distributions showing distinct patterns for grabbing vs walking.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Pandas, Matplotlib, SciPy

**Data:** Simulated or publicly available accelerometer time series data representing wrist movements during functional activities; since the paper's dataset is not released, you synthesize data mimicking the statistical properties described.

**Build it:**

1. Collect or simulate accelerometer time series data for multiple activities (e.g., grabbing, walking).
2. Implement feature extraction functions to compute mean, standard deviation, and zero-crossing rate per axis.
3. Plot feature distributions and time series segments to visualize differences between activities.
4. Write a short report comparing feature patterns and discussing their relevance to activity recognition.

**Ships as:** A Jupyter notebook with code, plots, and commentary reproducing the paper's accelerometer feature analysis.

**Stretch goal:** Add simple classification (e.g., threshold-based) using extracted features to distinguish activities.

### Intermediate — LLM-Based Video Annotation and Activity Classification
*Effort: 1-3 weekends*

You implement a pipeline that samples video frames and uses an open-source LLM-based captioning model (e.g., BLIP-2) to generate textual descriptions of patient activities. You then align these captions with accelerometer data timestamps to create labeled datasets. Finally, you train Random Forest and XGBoost classifiers on the text labels to classify six activity categories, reproducing the paper's core method and evaluation.

**Why it shows you understood the paper:** This project shows you can replicate the paper's multimodal annotation pipeline and machine learning classification approach, demonstrating comprehension of how LLM-generated video captions can bootstrap sensor data labeling for activity recognition.

**Grounded in:** Key contributions include the automated video-based annotation pipeline integrating LLMs and ML classifiers; Section 5.3 shows classification results with Random Forest and XGBoost on LLM-generated labels.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), scikit-learn, OpenCV, NumPy, Pandas

**Data:** Use publicly available video datasets with wrist accelerometer data if possible, or simulate synchronized video frames and accelerometer signals representing stroke therapy activities; no authors' dataset is released.

**Build it:**

1. Sample frames from synchronized video data representing therapy sessions.
2. Use an open-source LLM-based image captioning model (e.g., BLIP-2) to generate captions for sampled frames.
3. Align captions temporally with accelerometer data to create labeled sensor datasets.
4. Extract features from accelerometer data and train Random Forest and XGBoost classifiers using the LLM-generated labels.
5. Evaluate classifier performance with confusion matrices and F1 scores, comparing to a simple baseline.

**Ships as:** A GitHub repo with code for video frame sampling, LLM captioning, sensor-label alignment, classifier training, and evaluation metrics.

**Stretch goal:** Experiment with frame sampling strategies to optimize annotation efficiency and classifier accuracy.

### Advanced — Sequence-to-Sequence Transformer for Sensor-to-Text Generation
*Effort: several weeks*

You develop and train a sequence-to-sequence transformer model that takes accelerometer time series data as input and generates natural language descriptions of patient activities, implementing the paper's proposed sensor-to-text generation framework. You explore custom time-series encoders and apply adaptation techniques such as Low-Rank Adaptation (LoRA) to improve model efficiency and generalization.

**Why it shows you understood the paper:** This project addresses a key future direction and limitation of the paper by moving beyond LLM-based video annotation to direct sensor-to-text generation, demonstrating deep understanding of multimodal sequence modeling and the challenges of label noise and sensor variability.

**Grounded in:** Section 4.3 and 8 discuss the proposed Seq2Seq architecture and future work on sensor-to-text generation; limitations include label noise and sensor placement sensitivity.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), NumPy, Pandas, scikit-learn

**Data:** Simulated accelerometer time series paired with natural language descriptions derived from the intermediate project or manually created; no public dataset is available from the paper.

**Build it:**

1. Prepare paired accelerometer time series and textual activity descriptions as training data.
2. Design a sequence-to-sequence transformer architecture with a time-series encoder and text decoder.
3. Implement training routines with appropriate loss functions and evaluation metrics (e.g., BLEU, ROUGE).
4. Apply adaptation techniques such as LoRA to reduce model size and improve training efficiency.
5. Evaluate model performance on held-out data and analyze generated text quality.
6. Document challenges related to sensor variability and label noise, proposing mitigation strategies.

**Ships as:** A repository containing model code, training scripts, evaluation results, and a detailed README explaining the sensor-to-text approach and findings.

**Stretch goal:** Extend the model to generate hierarchical text summaries over longer time windows, as suggested in the paper's future directions.
