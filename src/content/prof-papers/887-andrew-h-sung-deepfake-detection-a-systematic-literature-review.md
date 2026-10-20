---
title: "887 · Deepfake Detection: A Systematic Literature Review — Andrew H. Sung"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-h-sung"
source_hash: "e728c04f69712b75e05b075e08c3be93538ff41c00c7ac1ee7397d1bffdd1d49"
sequence: 887
generator: "outreach-garden: managed"
---

# 887 · Deepfake Detection: A Systematic Literature Review

## At a glance

- **Professor:** Andrew H. Sung
- **Institution:** University of Southern Mississippi
- **Paper:** [Deepfake Detection: A Systematic Literature Review](https://ieeexplore.ieee.org/ielx7/6287639/9668973/09721302.pdf)
- **Authors:** Md Shohel Rana, Mohammad Nur Nobi, Beddhu Murali, Andrew H. Sung
- **Year:** 2022

## Paper overview

This paper systematically reviews research on detecting deepfake images and videos, which are realistic but fake multimedia created using artificial intelligence. It summarizes 112 studies from 2018 to 2020, categorizing detection methods into deep learning, machine learning, statistical, and blockchain-based techniques. The review finds that deep learning methods, especially convolutional neural networks, are the most effective for detecting deepfakes. The paper also discusses datasets, features, models, and evaluation metrics used in this research area, and highlights challenges and future directions.

### Why it matters

**Research problem:** Deepfake technology enables the creation of highly realistic fake images and videos that can be used maliciously to spread misinformation, harass individuals, or disrupt social and political stability. Detecting such manipulated media reliably is a critical challenge.

**Why it matters:** Deepfakes pose significant threats to privacy, security, and trust in digital media. They can be used for propaganda, blackmail, and cybercrime, making it essential to develop effective detection methods to mitigate these risks.

**Key contributions:**

- Performed a comprehensive survey of 112 relevant articles on deepfake detection from 2018 to 2020.
- Developed a novel taxonomy classifying detection techniques into deep learning-based, machine learning-based, statistical, and blockchain-based methods.
- Analyzed datasets, features, models, and evaluation metrics used in deepfake detection research.
- Evaluated and compared the performance of different detection methods, showing deep learning approaches outperform others.
- Provided observations, challenges, and guidelines to inform future research directions in deepfake detection.

## About the professor

**Andrew H. Sung** — Director, School of Computing Sciences and Computer Engineering, University of Southern Mississippi.

Research interests: factors that influence and motivate students to enroll and persist in computing majors

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=UMf3YBMAAAAJ&hl=en)
- [Professor website](https://www.usm.edu/faculty-directory/profile.php?id=2256079)
- [Resolved homepage](https://sarahblee.me/biography)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep Learning for Computer Vision
**The paper assumes:** convolutional neural networks, deep learning architectures, image and video feature extraction, supervised learning for computer vision
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and their application to image and video analysis.

This background focuses on deep learning for computer vision, especially convolutional neural networks (CNNs) like XceptionNet and ResNet, which are central to deepfake detection methods discussed in the paper. The rigorous course offers a comprehensive, in-depth academic treatment of deep learning techniques for computer vision, while the fast track provides a concise, practical introduction to key CNN concepts and applications for quick understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1-6, about 7 hours — covering introduction, image classification with linear classifiers, regularization and optimization, neural networks and backpropagation, image classification with CNNs, and CNN architectures.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier university course that covers CNN architectures, training, evaluation, and video understanding, directly relevant to understanding deepfake detection methods and challenges.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intro to Computer Vision with PyTorch (FULL COURSE)](https://www.youtube.com/playlist?list=PLS84ypkqWiQ8-TL0AmTRynkzK0v-d4C5m) — Drew Byron | AI / ML · 6 videos · 4.3h across 6 episodes

**Watch only this:** Episodes 0-2, about 2 hours — covering summary/introduction, object counting with CNNs, and image segmentation with UNET.

*Why it unblocks this paper:* Intro to Computer Vision with PyTorch (FULL COURSE) is a concise, well-structured series that quickly introduces CNNs and their applications in computer vision tasks, providing practical intuition and foundational knowledge useful for understanding deepfake detection.

*If you want all of it:* 4.3 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on deepfake detection, start with foundational knowledge in digital media forensics and machine learning classification methods, which underpin the detection techniques. Then, build specific understanding of convolutional neural networks, the most effective deep learning models for this task. Finally, focus on the core concept of deep learning approaches for deepfake detection, including the authors' own talk, to grasp the state-of-the-art methods and challenges discussed in the paper.

### Digital media forensics *(prerequisite)*
Digital media forensics provides the foundational understanding of how digital artifacts and manipulations can be detected and analyzed, which is essential for grasping the features and forensic cues exploited in deepfake detection. The selected lecture series offers an in-depth academic treatment suitable for advanced learners.

*How the paper uses it:* The paper discusses the use of forensic features such as artifacts and spatio-temporal consistency in deepfake detection.

▶ [Lecture Series | Episode 02 | Multimedia Forensics](https://www.youtube.com/watch?v=Ap_nRU9o3b4) — The Forensic Posts · 1:36:45 · 3y ago

### Machine learning classification methods *(prerequisite)*
Understanding machine learning classification methods is critical to appreciate the non-deep learning approaches reviewed in the paper and to contrast them with deep learning methods. The chosen video provides a rigorous explanation of classification with real-life examples, suitable for advanced readers.

*How the paper uses it:* The paper categorizes detection methods into machine learning and deep learning, requiring knowledge of classification techniques.

▶ [Lec-7: kNN Classification with Real Life Example | Movie Imdb Example | Supervised Learning](https://www.youtube.com/watch?v=O1nWXTXcCwI) — Gate Smashers · 10:13 · 3y ago

### Convolutional neural networks *(prerequisite)*
Convolutional neural networks (CNNs) are the most effective deep learning models for deepfake detection, as highlighted in the paper. The Stanford lecture offers a comprehensive and rigorous introduction to CNNs for visual recognition, providing the necessary depth for advanced understanding.

*How the paper uses it:* CNNs like XceptionNet and ResNet are identified as the most effective models in the paper's survey.

▶ [Lecture 1 | Introduction to Convolutional Neural Networks for Visual Recognition](https://www.youtube.com/watch?v=vT1JzLTH4G4) — Stanford University School of Engineering · 57:57 · 9y ago

### Deep learning for deepfake detection *(paper-talk search result; attribution unverified)*
This section covers the core concept of the paper: deep learning-based methods for detecting deepfakes. The selected videos include the authors' own talk and other advanced research presentations that delve into state-of-the-art architectures, datasets, and challenges in deepfake detection.

*How the paper uses it:* Deep learning methods, especially CNNs, dominate the surveyed literature and achieve the highest detection accuracy.

▶ [Scalable, Person-Agnostic Deepfake Detection In the Wild](https://www.youtube.com/watch?v=RspKj9DtM9U) — USC Information Sciences Institute · 5:36 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand deepfake detection as surveyed in the paper. We start with basic machine learning classification methods, then cover convolutional neural networks (CNNs) which are the core deep learning models used. Next, we explore digital media forensics to understand the features and artifacts exploited in detection. Finally, we focus on deep learning approaches specifically applied to deepfake detection, including datasets and evaluation metrics used to train and assess these models.

### Machine learning classification methods *(prerequisite)*
Learn what classification means in machine learning, including how algorithms categorize data into classes based on features. This foundational knowledge helps you understand non-deep learning detection methods and the basics behind model training and evaluation.

*How the paper uses it:* The paper discusses machine learning-based detection methods as a category distinct from deep learning approaches.

▶ [Lec-7: kNN Classification with Real Life Example | Movie Imdb Example | Supervised Learning](https://www.youtube.com/watch?v=O1nWXTXcCwI) — Gate Smashers · 10:13 · 3y ago

### Convolutional neural networks *(prerequisite)*
CNNs are specialized deep learning models designed to process visual data by automatically learning spatial hierarchies of features. Understanding CNNs is crucial because they are the most effective models for detecting deepfakes by analyzing image and video content.

*How the paper uses it:* The paper highlights CNNs, especially XceptionNet and ResNet, as the most effective deep learning models for deepfake detection.

▶ [Lecture 1 | Introduction to Convolutional Neural Networks for Visual Recognition](https://www.youtube.com/watch?v=vT1JzLTH4G4) — Stanford University School of Engineering · 57:57 · 9y ago

### Digital media forensics *(prerequisite)*
Digital media forensics involves analyzing images and videos to detect manipulation by identifying artifacts and inconsistencies. This knowledge helps you understand the types of features deepfake detection models rely on, such as facial landmarks and spatio-temporal inconsistencies.

*How the paper uses it:* The paper discusses forensic features like special artifacts and spatio-temporal consistency used in detection methods.

▶ [Lecture Series | Episode 02 | Multimedia Forensics](https://www.youtube.com/watch?v=Ap_nRU9o3b4) — The Forensic Posts · 1:36:45 · 3y ago

### Deepfake datasets and evaluation metrics *(prerequisite)*
Datasets provide the training and testing examples needed to develop detection models, while evaluation metrics measure how well these models perform. Understanding these concepts is key to grasping how researchers validate deepfake detection methods.

*How the paper uses it:* The paper analyzes popular datasets like FaceForensics++ and metrics such as accuracy and AUC used in evaluating detection methods.

▶ [On deepfake voice detection — it's all in the presentation | Talk at ICASSP 2026](https://www.youtube.com/watch?v=ftFaXUogMA0) — deepreality Group · 18:45 · 6d ago

### Deep learning for deepfake detection
This section covers how deep learning techniques, especially CNNs and hybrid models, are applied to detect deepfake images and videos. It explains preprocessing, model architectures, and the advantages of deep learning over other methods in this domain.

*How the paper uses it:* Deep learning-based methods dominate the research landscape and achieve the highest detection accuracy according to the paper.

▶ [Deepfake detection using Deep learning | Best Deep learning project 2025-2026](https://www.youtube.com/watch?v=dOdOfh64Xh8) — Smart AI Technologies · 23:06 · 1y ago

## Already in your library

- [Lecture 5 | Convolutional Neural Networks](https://www.youtube.com/watch?v=bNb2fEVKeEo) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [Lecture 9 | (1/3) Convolutional Neural Networks](https://www.youtube.com/watch?v=2XbZ03D0Sf4) — also for: Active noise cancellation on open-ear smart glasses (Swarun Kumar)
- [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [CS231n Winter 2016: Lecture 7: Convolutional Neural Networks](https://www.youtube.com/watch?v=LxfUGhug-iQ) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)](https://www.youtube.com/watch?v=HGwBXDKFk9I) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [13. Classification](https://www.youtube.com/watch?v=eg8DJYwdMyg) — also for: In the Arms of a Robot: Designing Autonomous Hugging Robots with Intra-Hug Gestures (Hasti Seifi)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Lec-2: Supervised Learning Algorithms | Machine Learning](https://www.youtube.com/watch?v=LKlOH8OLLcw) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [LLM Evaluation Basics: Datasets & Metrics](https://www.youtube.com/watch?v=1jReCwBgM84) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of deepfake detection as surveyed in the paper "Deepfake Detection: A Systematic Literature Review". Starting with a beginner project that reproduces a basic CNN-based deepfake classifier on a small dataset, you then move to an intermediate project implementing and comparing a CNN model on a popular deepfake dataset. The advanced project tackles a key limitation from the paper by developing a more generalizable detection model that addresses dataset bias and overfitting, exploring robustness across datasets.

### Beginner — Basic CNN Deepfake Image Classifier
*Effort: a weekend, ~8 hours*

You build a simple convolutional neural network (CNN) classifier to distinguish between real and deepfake face images using a small subset of a public dataset. The project includes data loading, preprocessing, model training, and evaluation with accuracy and AUC metrics.

**Why it shows you understood the paper:** This project shows you understand the core deep learning approach highlighted in the paper, specifically CNN-based detection and evaluation metrics like accuracy and AUC.

**Grounded in:** Demonstrates the paper's key result that CNN-based deep learning methods, such as XceptionNet and ResNet, achieve the highest detection accuracy (~89.73%) and AUC (~0.917).

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** Use a small subset of the FaceForensics++ dataset or a publicly available deepfake image subset as a stand-in for the paper's datasets.

**Build it:**

1. Download a small subset of FaceForensics++ or a similar public deepfake image dataset.
2. Preprocess images (resize, normalize) and split into train/test sets.
3. Implement a simple CNN architecture (e.g., 3 convolutional layers) in PyTorch.
4. Train the CNN to classify real vs. fake images.
5. Evaluate the model using accuracy and AUC metrics.
6. Document results and include code and instructions in a README.

**Ships as:** A GitHub repo with code, a Jupyter notebook demonstrating training and evaluation, and a README explaining the approach, dataset, and results.

**Stretch goal:** Add visualization of learned filters or Grad-CAM heatmaps to interpret model decisions.

### Intermediate — CNN Deepfake Detector with Baseline Comparison
*Effort: 1-3 weekends, ~20 hours*

You implement a CNN-based deepfake detection model inspired by the paper's survey (e.g., XceptionNet or ResNet) and compare its performance against a simple machine learning baseline (e.g., SVM on handcrafted features) on the Celeb-DF dataset. You report accuracy, precision, recall, and AUC.

**Why it shows you understood the paper:** This project shows you can reimplement a core deep learning detection method from the literature, apply it to a real dataset cited in the paper, and critically compare it to a non-deep learning baseline, reflecting the paper's taxonomy and performance analysis.

**Grounded in:** Reimplements the paper's core finding that deep learning methods outperform machine learning and statistical methods, using popular datasets like Celeb-DF and evaluation metrics such as accuracy and AUC.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Pandas

**Data:** Use the Celeb-DF dataset, a widely used deepfake video dataset mentioned in the paper, extracting frames for image-based classification.

**Build it:**

1. Download and preprocess Celeb-DF dataset frames for classification.
2. Extract handcrafted features (e.g., facial landmarks, texture features) for baseline ML model.
3. Implement and train a baseline ML classifier (e.g., SVM) on handcrafted features.
4. Implement and train a CNN model (e.g., ResNet or XceptionNet) on the same data.
5. Evaluate both models on test data using accuracy, precision, recall, and AUC.
6. Write a report comparing the models and discussing results.

**Ships as:** A GitHub repo with code for both models, evaluation scripts, and a detailed README with comparative results and insights.

**Stretch goal:** Incorporate spatio-temporal consistency features for video-level detection to improve robustness.

### Advanced — Generalizable Deepfake Detection Model Across Datasets
*Effort: a few weeks, ~40+ hours*

You develop a deepfake detection model that addresses the paper's limitation of overfitting to specific datasets by training and evaluating on multiple datasets (e.g., FaceForensics++ and DFDC). You explore techniques such as data augmentation, domain adaptation, or ensemble learning to improve generalization. You report cross-dataset evaluation metrics and analyze robustness to video compression and temporal variations.

**Why it shows you understood the paper:** This project tackles a key challenge and future direction identified in the paper—building more generalizable detection methods that perform well across diverse real-world scenarios, demonstrating deep comprehension of the field's open problems.

**Grounded in:** Addresses the paper's limitation that most detection methods overfit to specific datasets and perform poorly on unrelated data, and the future direction to develop more generalizable detection methods.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Pandas, OpenCV

**Data:** Use multiple datasets such as FaceForensics++ and DFDC (Deepfake Detection Challenge) datasets, both cited in the paper as popular benchmarks.

**Build it:**

1. Download and preprocess multiple deepfake datasets (FaceForensics++, DFDC).
2. Implement data augmentation techniques to increase data diversity.
3. Design a CNN-based model architecture or ensemble that incorporates domain adaptation or multi-dataset training.
4. Train the model on combined datasets and evaluate cross-dataset generalization.
5. Analyze model robustness to video compression artifacts and temporal inconsistencies.
6. Document methodology, experiments, results, and limitations in a comprehensive README.

**Ships as:** A GitHub repo with multi-dataset training code, evaluation scripts for cross-dataset testing, and a detailed report on generalization performance and robustness.

**Stretch goal:** Integrate blockchain-based verification metadata as an auxiliary input to explore hybrid detection approaches.
