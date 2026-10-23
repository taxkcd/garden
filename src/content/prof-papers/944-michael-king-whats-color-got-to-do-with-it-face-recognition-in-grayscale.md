---
title: "944 · What’s color got to do with it? Face recognition in grayscale — Michael King"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-king"
source_hash: "72564f44e5f148b6d188175b06810084e21be681d267b051b323fa557262ae4c"
sequence: 944
generator: "outreach-garden: managed"
---

# 944 · What’s color got to do with it? Face recognition in grayscale

## At a glance

- **Professor:** Michael King
- **Institution:** Florida Institute of Technology
- **Paper:** [What’s color got to do with it? Face recognition in grayscale](https://arxiv.org/pdf/2309.05180)
- **Authors:** Aman Bhatta, Domingo Mery, Haiyu Wu, Joyce Annan, Michael C. King, Kevin W. Bowyer
- **Year:** 2024

## Paper overview

This paper investigates whether color information improves the accuracy of deep convolutional neural network (CNN) face recognition models. The study finds that state-of-the-art deep CNN face matchers perform almost equally well when trained and tested on grayscale images compared to color images, especially for deeper models. Shallower models rely more on color and perform worse with grayscale. The paper also explores why deeper models do not effectively use color, showing that the networks learn grayscale conversion filters early on and that skin color varies too much within identities to be a reliable feature. Additionally, training with grayscale images allows for more training data due to lower storage requirements, which can improve accuracy.

### Why it matters

**Research problem:** Does color information in face images improve the accuracy of deep CNN face recognition models compared to grayscale images?

**Why it matters:** Understanding the role of color in face recognition can optimize training datasets and model architectures, potentially reducing data storage needs and improving model efficiency without sacrificing accuracy. It also informs the design of biometric systems and their robustness across diverse imaging conditions.

**Key contributions:**

- Demonstrated that deeper CNN face recognition models achieve comparable accuracy when trained and tested on grayscale images versus color images.
- Showed that shallower models rely more on color and perform worse with grayscale training.
- Analyzed first convolutional layer filters, revealing that models learn grayscale conversion filters even when trained on color images.
- Found significant variation in skin color within images of the same identity, limiting the usefulness of color for identity discrimination.
- Showed that separating chroma and luma in HSV color space does not improve learning over RGB.

## About the professor

**Michael King** — Professor, Department of Electrical Engineering and Computer Science, Florida Institute of Technology.

Research interests: automated face recognition, biometric identification under challenging imaging conditions, cyber identity, artificial intelligence and machine learning, computational imaging, and computational psychology

### Research links

- [Faculty/profile page](https://www.fit.edu/faculty-profiles/k/king-michael)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for computer vision
**The paper assumes:** convolutional neural networks, deep learning architectures, image representation in neural networks, supervised learning for computer vision
**Already in this field?** Skip this entirely if you have prior experience with deep learning models for image recognition and understand convolutional neural network architectures.

This background focuses on deep learning for computer vision, specifically understanding convolutional neural networks (CNNs) as applied to face recognition tasks like those studied in the paper. The rigorous course option provides a comprehensive, structured university-level lecture series on deep learning for computer vision, ideal for deep technical mastery. The fast track offers a shorter, focused subset of the same course material for a quicker but still solid conceptual and practical grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7 hours total — covering introduction, image classification basics, optimization, neural networks, CNNs, and CNN architectures, which provide the foundational knowledge to grasp the paper's methods and analyses.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier university course that covers CNN architectures, training, and visualization in depth, directly relevant to understanding the deep CNN face recognition models and filter analyses in the paper.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stanford CS231N | Deep Learning for Computer Vision | Spring 2025](https://www.youtube.com/playlist?list=PLT1jZ5o0K_ZIb5pFviSNR2oeDW2Wkd90e) — Mash on AI · 17 videos · 20.1h across 17 episodes

**Watch only this:** Lectures 1 through 6, about 7 hours total — these cover the core concepts of CNNs, training, and architectures needed to understand the paper's focus on CNN face recognition models and filter learning.

*Why it unblocks this paper:* This playlist is another version of the Stanford CS231N Spring 2025 lectures, offering a concise and clear presentation of deep learning for computer vision topics. Selecting a subset of this playlist provides a faster route to understanding CNNs and their training relevant to the paper.

*If you want all of it:* 20.1 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "What’s color got to do with it? Face recognition in grayscale," start by building foundational knowledge on convolutional neural networks (CNNs), their filter visualizations, and color spaces in computer vision. Then, explore demographic and dataset bias issues relevant to face recognition. Finally, focus on the core concept of deep CNN-based face recognition and the authors' own talk to directly connect with their findings on color versus grayscale performance.

### Deep convolutional neural networks face recognition *(prerequisite)*
This section covers the fundamental architecture and operation of deep convolutional neural networks, which are the core models used in the paper to compare color and grayscale face recognition performance. Understanding CNNs is essential to grasp how these models process image data and learn features relevant to face recognition.

*How the paper uses it:* The paper evaluates multiple ResNet-based CNN architectures to analyze the role of color in face recognition accuracy.

▶ [Convolutional Neural Networks from Scratch | In Depth](https://www.youtube.com/watch?v=jDe5BAsT2-Y) — Erai · 12:56 · 3y ago

### Convolutional neural network filter visualization *(prerequisite)*
This section explains how CNN filters can be visualized and interpreted, shedding light on what features the network learns, such as grayscale conversion filters or color-sensitive filters. This understanding is crucial for interpreting the paper's analysis of the first convolutional layer filters and their role in color usage.

*How the paper uses it:* The paper analyzes first-layer CNN filters to show that models learn grayscale-like filters even when trained on color images.

▶ [Visualizing and Understanding Deep Neural Networks by Matt Zeiler](https://www.youtube.com/watch?v=ghEmQSxT6tw) — AI Council · 47:48 · 11y ago

### Color spaces in computer vision *(prerequisite)*
This section provides an in-depth understanding of different color spaces such as RGB and HSV, and the separation of luminance and chrominance components. This knowledge is important to comprehend the paper's experiments comparing RGB and HSV color spaces and their impact on face recognition performance.

*How the paper uses it:* The paper investigates whether separating chroma and luma in HSV color space improves recognition over RGB and finds it does not.

▶ ["RGB to XYZ: The Science and History of Color" by John Austin](https://www.youtube.com/watch?v=AS1OHMW873s) — Strange Loop Conference · 37:54 · 7y ago

### Face recognition dataset bias and demographics *(prerequisite)*
This section discusses demographic biases and dataset characteristics in face recognition, including skin color variation within identities. Understanding these biases is key to appreciating the paper's findings on skin color variability limiting the usefulness of color for identity discrimination.

*How the paper uses it:* The paper analyzes skin color variation within identities and demographic effects on recognition accuracy with color versus grayscale images.

▶ [Stanford HAI 2019 Fall Conference - Race, Rights and Facial Recognition](https://www.youtube.com/watch?v=BS-DoiBxQ48) — Stanford · 1:55:56 · 6y ago

### Data augmentation and training set scaling in deep learning *(prerequisite)*
This section covers how data augmentation and training set size affect deep learning model performance. It is relevant to the paper's finding that training with grayscale images reduces storage requirements, enabling larger training datasets and potentially improving accuracy.

*How the paper uses it:* The paper demonstrates that grayscale training allows increasing dataset size due to lower storage, which can improve face recognition accuracy.

▶ [Lecture 17: Data Augmentation | LLMs | Artificial Intelligence |](https://www.youtube.com/watch?v=9HneH5CP2qc) — Prof.M.MasoomAlam · 18:18 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how deep convolutional neural networks (CNNs) perform face recognition, focusing on the role of color versus grayscale images as studied in the paper. We start with basic color spaces to grasp how images represent color information, then cover CNN fundamentals and how their filters work, followed by dataset bias and demographic effects relevant to face recognition accuracy. Finally, we explore data augmentation and training set scaling to understand how grayscale training enables larger datasets and impacts model performance.

### Color spaces in computer vision *(prerequisite)*
Learn how images represent colors using different color spaces like RGB and HSV, and understand the separation of luminance (brightness) and chrominance (color) components. This helps build intuition about why grayscale images might retain most useful information for face recognition.

*How the paper uses it:* The paper compares RGB and HSV color spaces and finds that luminance dominates learned features, explaining limited color utility.

▶ [Color Spaces: Explained from the Ground Up - Video Tech Explained](https://www.youtube.com/watch?v=99v96TL-tuY) — Video Tech Explained · 16:24 · 4y ago

### Deep convolutional neural networks face recognition *(prerequisite)*
Understand the basics of convolutional neural networks (CNNs), how convolutional layers extract features from images, and why CNNs are effective for face recognition tasks. This foundation is crucial to grasp how models process color and grayscale inputs differently.

*How the paper uses it:* The paper evaluates ResNet-based CNNs trained on color and grayscale images to compare face recognition accuracy.

▶ [A friendly introduction to Convolutional Neural Networks and Image Recognition](https://www.youtube.com/watch?v=2-Ol7ZB0MmU) — Luis Serrano Academy · 32:08 · 9y ago

### Convolutional neural network filter visualization *(prerequisite)*
Explore how CNN filters learn to detect patterns in images, including how early layers can learn grayscale conversion filters even when trained on color images. Visualizing filters helps understand what features the network uses for recognition.

*How the paper uses it:* The paper shows that first convolutional layer filters mostly learn grayscale-like features, explaining why color adds little benefit.

▶ [What does a CNN see? | Visualizing CNN Filters and Feature Maps | CampusX](https://www.youtube.com/watch?v=WJysB1RK2vM) — CampusX · 13:03 · 4y ago

### Face recognition dataset bias and demographics *(prerequisite)*
Learn about how demographic factors and dataset biases affect face recognition accuracy, including skin color variation within identities. This knowledge clarifies why color information may be unreliable for identity discrimination.

*How the paper uses it:* The paper analyzes skin color variation within identities and finds it approaches randomness, limiting color usefulness.

▶ [743 - FairFace: Face Attribute Dataset for Balanced Race, Gender, and Age for Bias Measurement and](https://www.youtube.com/watch?v=xqwjJNhUoUY) — ComputerVisionFoundation Videos · 4:44 · 5y ago

### Data augmentation and training set scaling in deep learning *(prerequisite)*
Understand how increasing training data size and using data augmentation techniques improve deep learning model accuracy. Grayscale images require less storage, enabling larger datasets and potentially better performance.

*How the paper uses it:* The paper demonstrates that training with grayscale images allows increasing dataset size due to lower storage, improving accuracy.

▶ [C4W2L10 Data Augmentation](https://www.youtube.com/watch?v=JI8saFjK84o) — DeepLearningAI · 9:32 · 8y ago

### Paper authors face recognition talk *(paper-talk search result; attribution unverified)*
Watch a focused explanation of face recognition methods by the authors or related experts to get direct insights into the techniques and findings relevant to the paper.

*How the paper uses it:* Though no direct author talk on this paper is available, a clear explainer on face recognition methods helps contextualize the study.

▶ [Face recognition and face matching with Python and DeepFace | Facial analysis | Computer vision](https://www.youtube.com/watch?v=FavHtxgP4l4) — Felipe Tambasco · 18:15 · 2y ago

## Already in your library

- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [CS231n Winter 2016: Lecture 7: Convolutional Neural Networks](https://www.youtube.com/watch?v=LxfUGhug-iQ) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)](https://www.youtube.com/watch?v=HGwBXDKFk9I) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [Lecture 12 | Visualizing and Understanding](https://www.youtube.com/watch?v=6wcs6szJWMY) — also for: Let RGB Be the Language of Vision (Cihang Xie)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [C4W1L06 Convolutions Over Volumes](https://www.youtube.com/watch?v=KTB_OFoAQcc) — also for: FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing (Sos S. Agaian)
- [Introduction to Computer Vision | Complete Syllabus Discussion](https://www.youtube.com/watch?v=tAveGoghups) — also for: AIR-VIEW: The Aviation Image Repository for Visibility Estimation of Weather, A Dataset and Benchmark (Chad Mourning)
- [MedAI Session 11: Hydranet -- Data Augmentation for Regression Neural Networks | Florian Dubost](https://www.youtube.com/watch?v=ph6xEFAu9A0) — also for: Synthesized Image Training Techniques: On Improving Model Performance Using Confusion (Wallapak Tavanapong)
- [Stanford CS231N | Spring 2025 | Lecture 11: Large Scale Distributed Training](https://www.youtube.com/watch?v=9MvD-XsowsE) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Data Augmentation in Deep Learning | CNN](https://www.youtube.com/watch?v=sM2C-SsREgM) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Machine Learning Foundations: Ep #7 - Image augmentation and overfitting](https://www.youtube.com/watch?v=QWdYWwW6OAE) — also for: Synthesized Image Training Techniques: On Improving Model Performance Using Confusion (Wallapak Tavanapong)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core findings about color versus grayscale in deep CNN face recognition. The beginner project reproduces a key filter visualization to grasp how CNNs learn grayscale-like filters. The intermediate project implements and compares face recognition accuracy on grayscale versus color images using a public dataset and a ResNet model, reflecting the paper's main experimental approach. The advanced project extends the paper by investigating the impact of single-channel grayscale input versus three-channel grayscale input on model performance, addressing a stated limitation and exploring potential efficiency gains.

### Beginner — Visualize First-Layer Filters of a Pretrained Face Recognition CNN
*Effort: a weekend, ~6 hours*

You build a script to load a pretrained ResNet-18 face recognition model (or a similar CNN), extract its first convolutional layer filters, and visualize them as RGB images to observe whether they resemble grayscale conversion filters. This reproduces the paper's analysis of learned filters showing that many filters have similar weights across R, G, B channels.

**Why it shows you understood the paper:** A professor would see that you grasp how CNNs internally represent color information and that deeper models tend to learn grayscale-like filters even when trained on color images.

**Grounded in:** Analyzed first convolutional layer filters, revealing that models learn grayscale conversion filters even when trained on color images.

**Tech stack:** Python 3.11, PyTorch, Matplotlib, Jupyter Notebook

**Data:** Use a publicly available pretrained ResNet-18 model trained on face recognition tasks or ImageNet as a proxy; no new dataset needed.

**Build it:**

1. Load a pretrained ResNet-18 model in PyTorch.
2. Extract the weights of the first convolutional layer.
3. Normalize and visualize each filter's R, G, B channel weights as images.
4. Create a grid plot of all first-layer filters.
5. Write a README explaining the visualization and its relation to grayscale conversion.

**Ships as:** A Jupyter Notebook or Python script with visualizations of first-layer filters and a README explaining how these filters resemble grayscale conversion filters.

**Stretch goal:** Compare filter visualizations between a model trained on color images and one trained on grayscale images (if available).

### Intermediate — Compare Face Recognition Accuracy on Color vs Grayscale Images
*Effort: 2 weekends, ~20 hours*

You implement a face recognition training and evaluation pipeline using a ResNet-50 model trained separately on color and grayscale versions of a public face dataset (e.g., LFW). You evaluate and compare verification accuracy and similarity score correlations between color and grayscale test images, reproducing the paper's core experimental comparison.

**Why it shows you understood the paper:** This project demonstrates you can replicate the paper's main finding that deeper CNNs achieve comparable accuracy on grayscale and color images and understand the evaluation metrics used.

**Grounded in:** Demonstrated that deeper CNN face recognition models achieve comparable accuracy when trained and tested on grayscale images versus color images.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Use the Labeled Faces in the Wild (LFW) dataset as a publicly available substitute for the paper's test benchmarks.

**Build it:**

1. Download and preprocess LFW dataset to create color and grayscale versions.
2. Implement a ResNet-50 face recognition model training pipeline.
3. Train one model on color images and another on grayscale images.
4. Evaluate both models on color and grayscale test sets, computing verification accuracy and similarity score correlations.
5. Plot and compare results, including statistical significance if possible.
6. Document the process and findings in a README.

**Verified links from the paper:**

- <https://github.com/deepinsight/insightface> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with training scripts, evaluation code, plots comparing accuracy and similarity correlations, and a README discussing results in context of the paper.

**Stretch goal:** Add a shallower model (e.g., ResNet-18) to show its performance drop on grayscale images, reflecting the paper's findings.

### Advanced — Evaluate Single-Channel vs Three-Channel Grayscale Input for Face Recognition
*Effort: 3+ weeks, ~80 hours*

You extend the paper's work by implementing and comparing face recognition models trained on single-channel grayscale images versus three-channel grayscale images (R=G=B). You analyze differences in accuracy, model size, and training efficiency on a public dataset, addressing a limitation noted in the paper about the impact of single-channel grayscale input.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and design experiments to explore them, potentially contributing new insights into input representation efficiency in face recognition.

**Grounded in:** Experiments primarily use three-channel grayscale images (R=G=B) rather than single-channel grayscale, which may affect network behavior.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Use the LFW dataset or MORPH dataset if accessible; otherwise, LFW as a substitute for benchmarking.

**Build it:**

1. Prepare single-channel grayscale and three-channel grayscale versions of the dataset.
2. Modify the ResNet-50 model input layer to accept single-channel input for one experiment and three-channel grayscale input for another.
3. Train models separately on each input type with comparable hyperparameters.
4. Evaluate and compare verification accuracy, training time, and model parameter counts.
5. Analyze results and discuss implications for model efficiency and accuracy.
6. Write a detailed README documenting methodology, results, and relation to the paper's limitation.

**Verified links from the paper:**

- <https://github.com/deepinsight/insightface> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code, training logs, evaluation scripts, comparative plots, and a comprehensive README discussing the impact of grayscale input representation on face recognition.

**Stretch goal:** Investigate whether training with single-channel grayscale allows increasing training set size due to lower storage, and measure any accuracy gains.

_The paper's authors did not release code; intermediate and advanced projects rely on reimplementing methods described and using publicly available datasets like LFW as substitutes for proprietary benchmarks._
