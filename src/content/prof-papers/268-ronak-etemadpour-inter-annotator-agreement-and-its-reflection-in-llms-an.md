---
title: "268 · Inter-Annotator Agreement and Its Reflection in LLMs and Responsible AI — Ronak Etemadpour"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ronak-etemadpour"
source_hash: "5315bb0078ca4ef681731e4c0eaa8f7f2025d484c3527f5ef240d9546a225fac"
sequence: 268
generator: "outreach-garden: managed"
---

# 268 · Inter-Annotator Agreement and Its Reflection in LLMs and Responsible AI

## At a glance

- **Professor:** Ronak Etemadpour
- **Institution:** CUNY
- **Paper:** [Inter-Annotator Agreement and Its Reflection in LLMs and Responsible AI](https://journals.flvc.org/FLAIRS/article/download/139049/144118)
- **Authors:** Amir Toliyat, Ronak Etemadpour, Elena Filatova
- **Year:** 2025

## Paper overview

This paper studies how people who label hate speech data on social media, especially those who belong to the targeted groups, differ in their labeling. It also evaluates how a large language model, GPT-4o, performs on the same task. The work highlights the importance of considering annotators' backgrounds to build fair and responsible AI systems for hate speech detection.

### Why it matters

**Research problem:** The challenge of inter-annotator agreement in labeling hate speech data, particularly how annotators' personal identification with targeted groups influences labeling decisions, and how this affects the performance and evaluation of large language models in hate speech detection.

**Why it matters:** Hate speech detection models rely on human-labeled data, which can inherit biases from annotators. Understanding annotator disagreement and background is crucial for developing reliable, fair, and responsible AI systems that mitigate algorithmic biases, especially for sensitive topics like hate speech.

**Key contributions:**

- Demonstration that annotators who identify with the target group label more tweets as hate and fewer as counterhate.
- Extended annotation of a COVID-19 related hate speech Twitter dataset with multiple annotators including those from the targeted group.
- Quantitative analysis of inter-annotator agreement and label distribution shifts due to annotator background.
- Evaluation of GPT-4o large language model as an additional annotator without training data.
- Highlighting the impact of annotator composition on hate speech detection model performance and evaluation.

## About the professor

**Ronak Etemadpour** — Associate Professor, Department of Business Administration, CUNY.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://www.gc.cuny.edu/people/ronak-etemadpour)
- [Identity evidence](https://www.ccny.cuny.edu/engineering/human-perception-multidimensional-data-visualization)
- [Identity evidence](https://asrc.gc.cuny.edu/people/ronak-etemadpour-ph-d/)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on inter-annotator agreement in hate speech detection and its implications for responsible AI, start with foundational knowledge on inter-annotator agreement metrics and the challenges of bias in data annotation. Then explore the specific difficulties in hate speech annotation to contextualize the problem. Finally, focus on the core concept of inter-annotator agreement with a direct talk from the authors or closely related expert presentations to grasp the paper's unique contributions and findings.

### Inter-annotator agreement metrics *(prerequisite)*
This section covers the statistical measures used to quantify agreement among annotators, such as Cohen's Kappa and Fleiss' Kappa, which are central to the paper's methodology. Understanding these metrics is essential to interpret the reported inter-annotator agreement scores and their implications for data quality and model evaluation.

*How the paper uses it:* The paper uses Fleiss' Kappa to measure inter-annotator agreement among hate speech annotators.

▶ [Reliability 4: Cohen's Kappa and inter-rater agreement](https://www.youtube.com/watch?v=djd7GalIB8c) — Vahid Aryadoust, PhD · 18:25

### Bias in data annotation *(prerequisite)*
This section explores how annotators' backgrounds and perspectives can introduce biases into labeled datasets, affecting model fairness and reliability. It provides a theoretical and practical understanding of annotation bias, which is a key focus of the paper's analysis of annotator identity effects.

*How the paper uses it:* The paper demonstrates how annotators identifying with the target group label hate speech differently, highlighting annotation bias.

▶ [Hate speech detection: Bias in data and annotations | Sandra ...](https://www.youtube.com/watch?v=imausOicsQ0) — DiLCo Video Reader · 1:02:06

### Hate speech annotation challenges *(prerequisite)*
This section contextualizes the complexities and sensitivities involved in labeling hate speech on social media, including ambiguity and disagreement among annotators. It helps to appreciate the domain-specific challenges that the paper addresses through its dataset and analysis.

*How the paper uses it:* The paper focuses on hate speech annotation on Twitter targeting Asian communities during COVID-19, illustrating these challenges.

▶ [Dr. Swabha Swayamdipta, USC CAIS Seminar, November 9 ...](https://www.youtube.com/watch?v=DtRIppOh-B4) — USC Center for AI in Society · 1:01:53

### Inter-Annotator Agreement and Its Reflection in LLMs and Responsible AI
This core section presents a direct or closely related talk by the paper authors or experts on inter-annotator agreement, providing detailed insights into the measurement, interpretation, and implications of annotator agreement in complex tasks like hate speech detection. It is crucial for understanding the paper's novel contributions and evaluation of GPT-4o.

*How the paper uses it:* The paper's main contribution is the analysis of inter-annotator agreement and evaluation of GPT-4o on hate speech labeling.

▶ [Inter-annotator Agreement for Complex Tasks](https://www.youtube.com/watch?v=g9sbJQSEW5M) — Alex Braylan · 14:16

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces the foundational concepts needed to understand the paper on inter-annotator agreement in hate speech detection. Starting with how annotator consistency is measured, it then explores the challenges of annotating hate speech and the biases introduced by annotators' backgrounds. Finally, it covers how large language models like GPT-4o are evaluated in this context, culminating in a focused look at inter-annotator agreement metrics as used in the paper.

### Inter-annotator agreement metrics *(prerequisite)*
Inter-annotator agreement metrics quantify how much different human annotators agree when labeling data. Understanding these metrics, such as Cohen's Kappa and Fleiss' Kappa, is essential to assess the reliability of labeled datasets. These measures help reveal inconsistencies and biases in human annotations.

*How the paper uses it:* The paper uses Fleiss' Kappa to measure agreement among annotators labeling hate speech tweets.

▶ [Reliability 4: Cohen's Kappa and inter-rater agreement](https://www.youtube.com/watch?v=djd7GalIB8c) — Vahid Aryadoust, PhD · 18:25

### Hate speech annotation challenges *(prerequisite)*
Labeling hate speech is difficult because it involves subjective judgments influenced by social context and personal experiences. This section explains why annotators often disagree and why neutral labels are particularly ambiguous. Understanding these challenges helps explain why the paper focuses on annotator background and disagreement.

*How the paper uses it:* The paper studies annotator disagreement in hate speech labeling, especially for neutral tweets.

▶ [Hate speech detection: Bias in data and annotations | Sandra ...](https://www.youtube.com/watch?v=imausOicsQ0) — DiLCo Video Reader · 1:02:06

### Bias in data annotation *(prerequisite)*
Annotators bring their own perspectives and biases to labeling tasks, which can skew the data and affect model fairness. This concept explains how annotator identity influences labeling decisions and why it's important to consider these biases when building AI systems.

*How the paper uses it:* The paper shows that annotators identifying with the targeted group label more tweets as hate, highlighting bias in annotation.

▶ [What Is Human Bias In Data Annotation For AI?](https://www.youtube.com/watch?v=CrXkqPMdlI4) — Safe AI for The Classroom · 8 months ago

### Large language model evaluation
Evaluating large language models involves comparing their outputs to human-labeled data to assess accuracy and fairness. This section introduces methods used to evaluate models like GPT-4o on hate speech classification without fine-tuning.

*How the paper uses it:* The paper evaluates GPT-4o's hate speech classification performance against different human annotator labels.

▶ [A Gentle Introduction to LLM Evaluations - Elena Samuylova](https://www.youtube.com/watch?v=ac6ZB5QEwGU) — DataTalksClub ⬛ · 1:01:19

### Inter-Annotator Agreement and Its Reflection in LLMs and Responsible AI
This final section ties together the previous concepts by focusing on inter-annotator agreement as it relates to responsible AI in hate speech detection. It highlights how annotator background impacts labeling and model evaluation, emphasizing the need for fairness and transparency in AI systems.

*How the paper uses it:* This is the core concept of the paper, which analyzes how annotator background affects agreement and AI model performance in hate speech detection.

▶ [Inter-annotator Agreement for Complex Tasks](https://www.youtube.com/watch?v=g9sbJQSEW5M) — Alex Braylan · 14:16


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper's core insights about inter-annotator agreement in hate speech detection and the influence of annotator background. The beginner project reproduces a key metric (Fleiss' Kappa) on a small synthetic dataset to grasp annotation agreement concepts. The intermediate project implements the paper's core method of analyzing annotator label distributions and agreement on a substitute hate speech dataset, comparing human annotators and an LLM baseline. The advanced project extends the paper by incorporating annotator background metadata into a hate speech classification pipeline to explore fairness improvements, addressing a stated future direction.

### Beginner — Compute Fleiss' Kappa on Synthetic Hate Speech Annotations
*Effort: a weekend, ~6 hours*

You build a small Python script that simulates multiple annotators labeling a set of tweets as hate, counterhate, or neutral. You compute Fleiss' Kappa to measure inter-annotator agreement and visualize the agreement score. This reproduces the paper's use of Fleiss' Kappa to quantify annotation consistency.

**Why it shows you understood the paper:** This project shows you understand the concept and calculation of inter-annotator agreement metrics central to the paper's analysis, and the challenges of annotation consistency in hate speech detection.

**Grounded in:** Demonstration that inter-annotator agreement is moderate (Fleiss' Kappa 0.53) but influenced by annotator background.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, scipy

**Data:** Synthetic small dataset of 20 tweets with simulated labels from 5 annotators, mimicking hate, counterhate, and neutral categories.

**Build it:**

1. Create a small synthetic dataset of 20 tweet IDs and simulate 5 annotators labeling each tweet with one of three labels: hate, counterhate, neutral.
2. Implement Fleiss' Kappa calculation using a Python library or from scratch.
3. Compute Fleiss' Kappa on the simulated annotation matrix.
4. Visualize the distribution of labels per annotator and the overall agreement score.
5. Write a README explaining the metric and its significance in hate speech annotation.

**Ships as:** A GitHub repo with a Jupyter notebook that computes and visualizes Fleiss' Kappa on synthetic hate speech annotations, with explanations linking to the paper's findings.

**Stretch goal:** Add simulation of annotator background influence by biasing some annotators to label more tweets as hate, then observe the effect on Fleiss' Kappa.

### Intermediate — Reproduce Annotator Agreement and GPT-4o Evaluation on Hate Speech Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core method by analyzing inter-annotator agreement and label distribution shifts on a publicly available hate speech dataset (e.g., the 'Hate Speech and Offensive Language Dataset' on Kaggle as a substitute). You compare human annotator labels and GPT-4o predictions (using GPT-4 API or open LLM) as an additional annotator. You compute Fleiss' Kappa and precision/recall of the LLM against human labels, reproducing key metrics from the paper.

**Why it shows you understood the paper:** This project demonstrates you can apply the paper's methodology to real data, understand the impact of annotator disagreement, and evaluate LLM performance in hate speech classification, reflecting the paper's core contributions.

**Grounded in:** Quantitative analysis of inter-annotator agreement and label distribution shifts due to annotator background; Evaluation of GPT-4o large language model as an additional annotator without training data.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, scikit-learn, OpenAI GPT-4 API or Hugging Face transformers

**Data:** Use the publicly available 'Hate Speech and Offensive Language Dataset' from Kaggle as a substitute for the paper's COVID-19 anti-Asian hate speech Twitter dataset.

**Build it:**

1. Download and preprocess the Kaggle hate speech dataset, focusing on labels similar to hate, counterhate, and neutral.
2. Simulate multiple annotators by using existing multiple labels if available or by splitting the dataset to mimic annotator differences.
3. Compute Fleiss' Kappa for inter-annotator agreement on the dataset.
4. Use GPT-4 API or an open LLM to classify the tweets without fine-tuning, obtaining predicted labels.
5. Compare GPT-4 predictions against each annotator's labels, computing precision, recall, and F1 scores.
6. Analyze label distribution shifts and disagreement patterns, especially on neutral labels.
7. Document findings and compare them to the paper's reported metrics.

**Ships as:** A GitHub repo with notebooks and scripts that reproduce inter-annotator agreement metrics and LLM evaluation on a hate speech dataset, with analysis and visualizations.

**Stretch goal:** Incorporate simple annotator background metadata simulation to observe its effect on agreement and LLM evaluation.

### Advanced — Incorporate Annotator Background into Hate Speech Classification for Fairness Analysis
*Effort: 3-4 weeks*

You build an extended hate speech classification pipeline that incorporates annotator background metadata as features or conditioning signals during model training or evaluation. Using a substitute hate speech dataset with simulated annotator background labels, you train a classifier (e.g., fine-tuned transformer) and analyze how including annotator identity affects fairness metrics and label disagreement reduction. This addresses the paper's future direction of integrating annotator background to improve fairness and reliability.

**Why it shows you understood the paper:** This project shows you grasp the paper's key limitation and future direction by actively experimenting with annotator background integration, a novel and responsible AI approach in hate speech detection.

**Grounded in:** Development of hate speech detection systems that incorporate annotator background information to improve fairness and reliability; Further investigation into annotation procedures and annotator backgrounds for sensitive tasks.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, pandas, Jupyter Notebook

**Data:** Use the Kaggle hate speech dataset as a base and simulate annotator background metadata (e.g., group identity flags) to extend labels for training and evaluation.

**Build it:**

1. Preprocess the hate speech dataset and simulate annotator background metadata for each label (e.g., assign annotators to groups with different labeling biases).
2. Fine-tune a transformer-based classifier (e.g., BERT) on the dataset with and without annotator background features.
3. Implement evaluation metrics focusing on fairness (e.g., disparity in false positives/negatives across simulated groups).
4. Analyze how including annotator background affects classification performance and disagreement reduction, especially on neutral labels.
5. Visualize results and write a detailed report connecting findings to the paper's discussion on responsible AI and annotator influence.

**Ships as:** A GitHub repo with code, trained models, and analysis demonstrating the impact of annotator background integration on hate speech classification fairness.

**Stretch goal:** Extend the pipeline to incorporate privacy-preserving methods (e.g., differential privacy) when using annotator background data.

_The original paper's dataset and code are not publicly released; the intermediate and advanced projects rely on a publicly available hate speech dataset as a substitute and simulated annotator background metadata._
