---
title: "881 · CENSUS-HWR: a large training dataset for offline handwriting recognition — Mark J. Clement"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mark-j-clement"
source_hash: "f6ddffe111caf36aaa2d737f8107409b21cad9cce57985fa022eec05171bd6f7"
sequence: 881
generator: "outreach-garden: managed"
---

# 881 · CENSUS-HWR: a large training dataset for offline handwriting recognition

## At a glance

- **Professor:** Mark J. Clement
- **Institution:** Brigham Young University
- **Paper:** [CENSUS-HWR: a large training dataset for offline handwriting recognition](https://arxiv.org/pdf/2305.16275)
- **Authors:** Chetan Joshi, Lawry Sorenson, Ammon Wolfert, Dr. Mark Clement, Dr. Joseph Price, Dr. Kasey Buckles
- **Year:** 2023

## Paper overview

This paper introduces CENSUS-HWR, the largest publicly available dataset for offline handwriting recognition, containing over 1.8 million grayscale images of handwritten English words extracted from the US 1930 and 1940 censuses. The dataset reflects natural, real-world handwriting with various imperfections and is intended to help develop more robust deep learning handwriting recognition models. The authors also provide a trained handwriting recognition model and tools for efficient human transcription correction.

### Why it matters

**Research problem:** Existing handwriting recognition datasets are small, carefully curated, and lack the diversity and imperfections of real-world handwriting, leading to overfitting and less robust models. There is a need for a large, natural dataset to train and benchmark handwriting recognition models.

**Why it matters:** Robust handwriting recognition models are important for applications like historical document transcription and family history research. Current datasets do not represent the messiness of real handwriting, limiting model generalizability and accessibility for researchers without large computational resources.

**Key contributions:**

- Creation of CENSUS-HWR, a large-scale, natural handwriting dataset with 1.8 million word images and 70,000 authors.
- Dataset reflects real-world handwriting imperfections such as crossed-out words, overwritten text, and spelling errors.
- Development of novel human transcription correction tools (Reverse Indexing and free-form correction applications) to efficiently improve label quality.
- Provision of a baseline handwriting recognition model trained on the dataset with publicly available code and weights.
- Demonstration that the dataset enables training of more robust handwriting recognition models with a character error rate around 4.65%.

## About the professor

**Mark J. Clement** — Computer Science Department, Brigham Young University.

Research interests: Deep learning for handwriting recognition in historical documents, Application to help users explore their family history, Ways to help people with limited vision to participate in family history research.

### Research links

- [Faculty/profile page](https://faculty.cs.byu.edu/~clement)
- [Lab website](https://fhtl.org/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for sequence recognition
**The paper assumes:** deep learning, recurrent neural networks, convolutional neural networks, sequence modeling, and Connectionist Temporal Classification (CTC) loss
**Already in this field?** Skip this entirely if you already understand deep learning models for sequence data and the CTC loss function used in handwriting recognition.

To understand the deep learning methods used in the CENSUS-HWR paper, especially the gated convolutional recurrent neural networks trained with CTC loss for handwriting recognition, this background provides two viewing options. The rigorous course offers a comprehensive university-level foundation in machine learning and neural networks, while the fast track delivers a concise, focused introduction to sequence models relevant to handwriting recognition. Choose the course for depth and breadth, or the fast track for a quick, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 10 (Introduction to Neural Networks), 11 (Backprop & Improving Neural Networks), and 12 (Debugging ML Models and Error Analysis), about 4 hours total — these cover neural networks fundamentals and practical training issues relevant to the paper's model.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng covers foundational machine learning concepts including neural networks and sequence models, which underpin the gated convolutional recurrent neural network and CTC loss used in the paper. This course provides rigorous theoretical and practical insights essential for deeply understanding the model architecture and training.

*If you want all of it:* 27.9 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Sequence Models (Course 5 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLiWO7LJsDCHcpUmL9grX9WLjyi-e92iCO) — Gurmeet Singh · 11 videos · 1.7h across 11 episodes

**Watch only this:** Episodes 1-5 (Basic Models, Picking the most likely sentence, Beam Search, Refining Beam Search, Error Analysis of Beam Search), about 45 minutes total — these cover core sequence modeling and decoding techniques used in handwriting recognition.

*Why it unblocks this paper:* The Sequence Models playlist by DeepLearningAI provides a concise, clear introduction to sequence modeling techniques including CTC loss and beam search, which are directly relevant to the handwriting recognition methods in the paper. It is well-suited for quickly grasping the key concepts without extensive time investment.

*If you want all of it:* 1.7 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CENSUS-HWR paper, start with foundational concepts including convolutional recurrent neural networks and connectionist temporal classification loss, which are central to the model architecture and training. Next, explore image segmentation techniques relevant for extracting handwritten word images from census scans. Then, study human-in-the-loop transcription correction methods important for improving label quality in crowdsourced datasets. Finally, focus on the core concept of handwriting recognition deep learning, emphasizing the authors' own talk if available, to connect all these components in the context of the CENSUS-HWR dataset and model.

### convolutional recurrent neural networks *(prerequisite)*
This foundational concept covers the architecture combining convolutional layers for feature extraction with recurrent layers for sequence modeling, which is essential for handwriting recognition tasks. Understanding this will clarify how the authors' model processes handwritten word images to predict character sequences.

*How the paper uses it:* The paper's handwriting recognition model is based on gated convolutional recurrent neural networks.

▶ [Data Science Decal Fall 2017 Day 8: Convolutional and Recurrent Neural Networks](https://www.youtube.com/watch?v=RbWRn8vtW8E) — Machine Learning at Berkeley · 1:41:13 · 8y ago

### connectionist temporal classification loss *(prerequisite)*
CTC loss enables training sequence models without requiring pre-segmented input-output alignments, which is critical for handwriting recognition where character boundaries are unknown. Learning this will help understand how the model is trained on the variable-length handwritten word images.

*How the paper uses it:* The authors trained their model using CTC loss to handle unaligned handwritten word sequences.

▶ [S18 Lecture 14: Connectionist Temporal Classification (CTC)](https://www.youtube.com/watch?v=c86gfVGcvh4) — Carnegie Mellon University Deep Learning · 1:22:10 · Streamed 8y ago

### image segmentation for handwriting *(prerequisite)*
Image segmentation is the preprocessing step to extract individual handwritten word images from scanned census pages. Understanding segmentation techniques is crucial to appreciate how the dataset was constructed from raw census scans.

*How the paper uses it:* The paper uses image processing techniques like SIFT and RANSAC to segment handwritten words from census forms.

▶ [SFBigAnalytics_20210601: Full Page Handwriting Recognition via Image to Sequence Extraction](https://www.youtube.com/watch?v=BOIrib04fmE) — SF Big Analytics · 52:18 · 5y ago

### human-in-the-loop transcription correction *(prerequisite)*
Human-in-the-loop transcription correction improves label quality in crowdsourced datasets by combining automated and manual verification. This concept is important to understand the authors' novel tools for correcting transcription errors in CENSUS-HWR.

*How the paper uses it:* The authors developed two novel human transcription correction tools to improve label accuracy in their crowdsourced dataset.

▶ [Human-in-the-Loop Automation with n8n — Liam McGarrigle](https://www.youtube.com/watch?v=tDArkCqjA-c) — AI Engineer · 1:19:22 · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand the CENSUS-HWR paper, starting with image segmentation to extract handwritten words, then human-in-the-loop transcription correction to improve label quality, followed by the neural network architecture (convolutional recurrent neural networks) used for handwriting recognition, and finally the key loss function (connectionist temporal classification) that enables training on unaligned sequences. Each step builds intuition on how these components work together to create a robust handwriting recognition system.

### image segmentation for handwriting *(prerequisite)*
Image segmentation is the process of dividing an image into meaningful parts, such as isolating individual handwritten words from a scanned page. This step is crucial to prepare the raw census scans into word images that can be fed into recognition models.

*How the paper uses it:* The authors used image processing techniques to segment handwritten words from census form scans as the first step in creating the dataset.

▶ [Line, word segmentation with OpenCV Python | Tutorial | Computer Vision](https://www.youtube.com/watch?v=Vw2dvTj58-Y) — ComputerVisionPro · 20:41 · 4y ago

### human-in-the-loop transcription correction *(prerequisite)*
Human-in-the-loop transcription correction involves using human feedback to iteratively improve the accuracy of labels in a dataset. This approach helps fix errors in crowdsourced transcriptions, making the training data more reliable for machine learning.

*How the paper uses it:* The paper developed novel human-in-the-loop tools to efficiently correct transcription errors in the crowdsourced census handwriting labels.

▶ [What is Human-in-the-Loop?](https://www.youtube.com/watch?v=qeuRQAityB8) — Google Cloud Tech · 5:27 · 3y ago

### convolutional recurrent neural networks *(prerequisite)*
Convolutional recurrent neural networks combine convolutional layers that extract spatial features from images with recurrent layers that capture sequential dependencies, making them well-suited for recognizing sequences like handwritten words.

*How the paper uses it:* The authors trained a gated convolutional recurrent neural network on the segmented word images for handwriting recognition.

▶ [Lecture 8: Recurrent Neural Networks and Language Models](https://www.youtube.com/watch?v=Keqep_PKrY8) — Stanford University School of Engineering · 1:18:03 · 9y ago

### connectionist temporal classification loss *(prerequisite)*
Connectionist Temporal Classification (CTC) loss allows training sequence models without requiring pre-aligned input-output pairs by considering all possible alignments. This is essential for handwriting recognition where character boundaries are unknown.

*How the paper uses it:* The handwriting recognition model in the paper was trained using CTC loss to handle unsegmented handwritten word images.

▶ [S18 Lecture 14: Connectionist Temporal Classification (CTC)](https://www.youtube.com/watch?v=c86gfVGcvh4) — Carnegie Mellon University Deep Learning · 1:22:10 · Streamed 8y ago

### handwriting recognition deep learning
Deep learning methods for handwriting recognition use neural networks to automatically learn features and map images of handwritten text to digital text, enabling robust recognition even with messy, real-world handwriting.

*How the paper uses it:* The core contribution of the paper is a deep learning handwriting recognition model trained on the large, natural CENSUS-HWR dataset.

▶ [Step-by-Step Handwriting Recognition Tutorial Using TensorFlow](https://www.youtube.com/watch?v=WhRC31SlXzA) — Python Lessons · 22:25 · 3y ago

## Already in your library

- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Lecture 10 | Recurrent Neural Networks](https://www.youtube.com/watch?v=6niqTuYFZLQ) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Illustrated Guide to Recurrent Neural Networks: Understanding the Intuition](https://www.youtube.com/watch?v=LHXXI4-IEns) — also for: Modeling human activity comprehension at human scale: prediction, segmentation, and categorization (Aaron F. Bobick)
- [Image Segmentation, Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation](https://www.youtube.com/watch?v=5QUmlXBb0MY) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Human-in-the-Loop AI Explained 2026 | Why AI Validation & Human Oversight Matter](https://www.youtube.com/watch?v=AunxlvqfoKk) — also for: Human-Data Interaction, Exploration, and Visualization in the AI Era: Challenges and Opportunities (Panos K. Chrysanthis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the CENSUS-HWR paper. The beginner project focuses on reproducing a core metric from the paper using a small handwriting dataset, the intermediate project implements the paper's core model architecture on a public handwriting dataset to validate performance, and the advanced project tackles a stated limitation by developing an automatic mislabeled data detection system to improve label quality in handwriting datasets.

### Beginner — Character Error Rate Evaluation on a Small Handwriting Dataset
*Effort: a weekend, ~8 hours*

You build a simple pipeline to evaluate character error rate (CER) for handwriting recognition on a small subset of handwritten word images. Using a publicly available handwriting dataset (e.g., IAM Handwriting Database as a substitute for CENSUS-HWR), you implement a basic CER calculation script comparing ground truth labels to predicted text outputs from a simple OCR or transcription.

**Why it shows you understood the paper:** This project shows you understand the importance of the CER metric reported in the paper and how to compute it to evaluate handwriting recognition models, reflecting the paper's key result of a 4.65% CER.

**Grounded in:** The trained handwriting recognition model achieves a character error rate of approximately 4.65%.

**Tech stack:** Python 3.11, Jupyter Notebook, Levenshtein package or custom CER script

**Data:** Use a small publicly available handwriting dataset such as the IAM Handwriting Database as a substitute for the CENSUS-HWR dataset.

**Build it:**

1. Download a small subset of the IAM Handwriting Database containing word images and ground truth transcriptions.
2. Implement or reuse a simple OCR or transcription method to generate predicted text for each word image (can be a dummy or heuristic method).
3. Write a script to compute character error rate (CER) between predicted and ground truth labels using Levenshtein distance.
4. Run the evaluation and report the CER metric.
5. Document the process and results in a README.

**Ships as:** A GitHub repo with code to compute CER on a small handwriting dataset, a README explaining the metric and showing the CER result.

**Stretch goal:** Extend the evaluation to word error rate (WER) and compare results.

### Intermediate — Reimplement Gated Convolutional Recurrent Neural Network with CTC Loss for Handwriting Recognition
*Effort: 1-3 weekends, ~20 hours*

You implement the core deep learning model architecture described in the paper—a gated convolutional recurrent neural network trained with connectionist temporal classification (CTC) loss—for offline handwriting recognition. You train and evaluate this model on a publicly available handwriting dataset (e.g., IAM or RIMES) to reproduce a baseline CER metric and compare it against a simple CNN baseline.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's core modeling approach and training methodology, showing comprehension of the gated convolutional recurrent architecture and CTC loss applied to handwriting recognition.

**Grounded in:** They trained a deep learning model based on gated convolutional recurrent neural networks with CTC loss on this dataset.

**Tech stack:** Python 3.11, PyTorch, NumPy, Torchvision, Jupyter Notebook

**Data:** Use the IAM Handwriting Database or RIMES dataset as a publicly available substitute for CENSUS-HWR.

**Build it:**

1. Download and preprocess the IAM or RIMES handwriting dataset to extract word images and labels.
2. Implement the gated convolutional recurrent neural network architecture as described in the paper.
3. Train the model using CTC loss on the dataset.
4. Implement a simple CNN baseline model and train it on the same data.
5. Evaluate both models using character error rate (CER) and compare results.
6. Document the architecture, training details, and evaluation results in a README.

**Ships as:** A GitHub repo with model code, training scripts, evaluation scripts, and a README comparing the gated CRNN model to a CNN baseline on handwriting recognition.

**Stretch goal:** Add data augmentation to improve model robustness and report CER improvements.

### Advanced — Automatic Detection and Correction of Mislabeled Data in Handwriting Datasets
*Effort: a few weeks, ~40+ hours*

You develop a system to automatically detect and suggest corrections for mislabeled handwritten word images, addressing a key limitation of the CENSUS-HWR dataset's crowdsourced labels. Using a trained handwriting recognition model (reimplemented or pretrained from the intermediate project), you identify samples with high prediction-label disagreement and implement a human-in-the-loop correction interface to improve label quality.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by applying model-based error detection and human-in-the-loop correction, demonstrating deep comprehension of label noise challenges and transcription correction tools.

**Grounded in:** Develop systems to identify and correct mislabeled data in the dataset.

**Tech stack:** Python 3.11, PyTorch, Flask or FastAPI, React or simple JavaScript frontend, Jupyter Notebook

**Data:** Use the IAM Handwriting Database or a synthetic subset of handwritten word images with simulated label noise to mimic crowdsourced errors.

**Build it:**

1. Train or obtain a handwriting recognition model (e.g., from the intermediate project).
2. Run inference on the dataset and compute confidence scores or prediction-label discrepancies to flag potential mislabeled samples.
3. Develop a simple web-based human-in-the-loop interface to display flagged samples and allow manual label correction.
4. Implement a pipeline to update labels based on human corrections and retrain the model to measure improvements.
5. Evaluate the impact of label correction on model accuracy and CER.
6. Document the system design, usage instructions, and evaluation results in a README.

**Ships as:** A GitHub repo containing code for mislabeled data detection, a human-in-the-loop correction web app, retraining scripts, and documentation showing improved label quality and model performance.

**Stretch goal:** Integrate active learning to prioritize samples for human review based on model uncertainty.

_The paper's authors have not released code or datasets publicly; all projects use publicly available handwriting datasets (IAM or RIMES) as substitutes for CENSUS-HWR._
