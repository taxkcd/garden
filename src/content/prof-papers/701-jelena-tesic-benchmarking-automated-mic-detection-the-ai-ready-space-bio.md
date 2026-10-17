---
title: "701 · Benchmarking automated MIC detection: the AI-ready space biology SEM dataset and advanced detection methods — Jelena Tesic"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jelena-tesic"
source_hash: "b380f2e05ba50e3153019451b1206269bdde3e2d4a0d1114f89969fa5e3d3556"
sequence: 701
generator: "outreach-garden: managed"
---

# 701 · Benchmarking automated MIC detection: the AI-ready space biology SEM dataset and advanced detection methods

## At a glance

- **Professor:** Jelena Tesic
- **Institution:** Texas State University
- **Paper:** [Benchmarking automated MIC detection: the AI-ready space biology SEM dataset and advanced detection methods](https://www.nature.com/articles/s41526-026-00652-7_reference.pdf)
- **Authors:** Tanzina Akter Tani, Amber D. Busboom, Robert J. C. McLean, Jelena Tešić
- **Year:** 2026

## Paper overview

This study addresses the challenge of detecting microbial-induced corrosion (MIC) on metals, especially in critical environments like spaceflight. The authors created the largest annotated dataset of scanning electron microscopy (SEM) images of MIC, including samples from spaceflight conditions. They benchmarked classical and deep learning segmentation methods and introduced two advanced AI models that significantly improve detection accuracy. Their work provides a robust platform for automated MIC analysis to support maintenance and safety in aerospace and terrestrial infrastructure.

### Why it matters

**Research problem:** Microbial-induced corrosion (MIC) causes localized damage to metal surfaces, threatening structural integrity in aerospace and terrestrial systems. Detecting MIC accurately and automatically in SEM images is difficult due to subtle, irregular corrosion features and limited annotated datasets, especially for spaceflight samples.

**Why it matters:** MIC can degrade critical infrastructure and spacecraft systems, risking mission success and safety. Rapid, reliable detection enables informed mitigation and maintenance. Current datasets and methods lack scale, quality, and inclusion of spaceflight conditions, limiting AI model development and deployment.

**Key contributions:**

- Release of the largest AI-ready MIC SEM dataset including spaceflight samples with pixel-wise expert annotations.
- Benchmarking of classical and state-of-the-art deep learning segmentation methods on this dataset.
- Introduction of two advanced segmentation architectures: enhanced SAM2 and Lightweight PH-FPNSeg.
- Demonstration that these models achieve state-of-the-art segmentation accuracy with strong generalization to microgravity and terrestrial conditions.
- Comprehensive ablation and prompt sensitivity studies elucidating architectural contributions and robustness.

## About the professor

**Jelena Tesic** — Associate Professor, Computer Science Department, Texas State University.

Research interests: develop novel AI methods and scalable algorithms for analyzing large, unstructured multi-modal multi-source data

### Research links

- [Faculty/profile page](http://cs.txstate.edu/~j_t463)
- [Professor website](https://jtesic.github.io/)
- [Lab website](https://datalab12.github.io/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=jRLy9uoAAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for image segmentation
**The paper assumes:** convolutional neural networks, semantic image segmentation, attention mechanisms in deep learning
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and modern deep learning methods for image segmentation.

This background is designed to prepare the reader for understanding deep learning methods for image segmentation, which are central to the paper's benchmarking and novel model contributions on microbial-induced corrosion detection in SEM images. The rigorous course option offers a comprehensive, university-level deep dive into computer vision and segmentation architectures, while the fast track provides a concise, intuition-driven introduction to image segmentation concepts. Choose the rigorous course for deep technical grounding or the fast track for a quick conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 5-9 (Image Classification with CNNs through Object Detection, Image Segmentation, Visualizing), about 6 hours — these cover CNN architectures, segmentation fundamentals, and visualization techniques essential for understanding the paper's methods and metrics.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier, up-to-date university course covering deep learning architectures, segmentation, and evaluation metrics, directly relevant to the paper's use of DeepLabv3+, SAM, and novel segmentation models.

*If you want all of it:* All 18 lectures, about 21.2 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Image Segmentation](https://www.youtube.com/playlist?list=PL2zRqk16wsdop2EatuowXBX5C-r2FdyNt) — First Principles of Computer Vision · 6 videos · 0.8h across 6 episodes

**Watch only this:** Episodes 1-3 (Overview, Segmentation by humans, Segmentation as Clustering), about 20 minutes — these episodes give a solid conceptual foundation for segmentation tasks and challenges.

*Why it unblocks this paper:* The 'Image Segmentation' series by First Principles of Computer Vision offers a clear, concise introduction to core segmentation concepts and classical methods, providing quick intuition that complements the deep learning focus of the paper.

*If you want all of it:* All 6 episodes, about 48 minutes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI-driven MIC detection in SEM images, start with foundational knowledge on microbial-induced corrosion and scanning electron microscopy image analysis, as these provide the scientific and imaging context. Next, study deep learning semantic segmentation techniques, which underpin the AI methods benchmarked and developed in the paper. Finally, focus on the paper-specific author talk to gain direct insights into the dataset, advanced segmentation models, and experimental results presented by the authors themselves.

### Microbial-induced corrosion detection *(prerequisite)*
Understanding the biological and chemical mechanisms of microbial-induced corrosion (MIC) is essential to grasp the nature of the damage the paper aims to detect automatically. This section covers the fundamentals of MIC, its impact on infrastructure, and why accurate detection is critical.

*How the paper uses it:* The paper addresses automated detection of MIC, so foundational knowledge of MIC mechanisms and significance is necessary.

▶ [Microbially Induced Corrosion: Mechanisms & a Discussion of ...](https://www.youtube.com/watch?v=SC_-Ujx5h38) — American Concrete Institute · 21:17

### Scanning electron microscopy image analysis *(prerequisite)*
Since the paper's dataset consists of SEM images, understanding SEM imaging principles and how to analyze SEM images is crucial. This section introduces SEM technology, image interpretation, and classical image analysis methods relevant to MIC detection.

*How the paper uses it:* The paper uses SEM images as the primary data modality for MIC detection and segmentation.

▶ [Scanning Electron Microscopy SEM Analysis](https://www.youtube.com/watch?v=Q7gc7TpEYx4) — Nano SPEAKs · 8:13

### Deep learning semantic segmentation *(prerequisite)*
The core AI methodology in the paper involves semantic segmentation using deep learning. This section covers the principles and architectures of semantic segmentation networks, enabling understanding of the benchmarked and novel models introduced.

*How the paper uses it:* The paper benchmarks and develops advanced deep learning segmentation models for MIC detection.

▶ [Lecture 53  Semantic Segmentation   I](https://www.youtube.com/watch?v=jsoZQV8_M5E) — Santanu Kundu · 6 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of microbial-induced corrosion (MIC) to grasp the problem context. Next, build intuition on scanning electron microscopy (SEM) image analysis since SEM images are the data source for MIC detection. Then, learn the basics of deep learning semantic segmentation, the key AI technique used for automated MIC region detection. Finally, explore prompt-based segmentation models, which are central to the novel methods introduced in the paper.

### Microbial-induced corrosion detection *(prerequisite)*
Microbial-induced corrosion (MIC) is corrosion caused by microorganisms that damage metal surfaces. Understanding MIC fundamentals helps you appreciate why detecting subtle and irregular corrosion patterns is challenging and important, especially in critical environments like spaceflight.

*How the paper uses it:* The paper addresses automated detection of MIC on metals using AI, so knowing what MIC is and why it matters is foundational.

▶ [Two Minute Lessons:  Microbial Induced Corrosion (MIC)](https://www.youtube.com/watch?v=ufvXu_67MTg) — Jim Kunkle · 6 yr ago

### Scanning electron microscopy image analysis *(prerequisite)*
Scanning electron microscopy (SEM) produces high-resolution images of metal surfaces, revealing fine details of corrosion. Learning how to interpret SEM images and analyze them is essential because the paper’s dataset consists of SEM images annotated for MIC regions.

*How the paper uses it:* The paper’s dataset and detection methods operate on SEM images of MIC, making SEM image analysis a core prerequisite.

▶ [Scanning Electron Microscopy SEM Analysis](https://www.youtube.com/watch?v=Q7gc7TpEYx4) — Nano SPEAKs · 8:13

### Deep learning semantic segmentation *(prerequisite)*
Semantic segmentation is a deep learning technique that classifies each pixel in an image, enabling precise region detection. Understanding this concept is key to grasping how the paper’s AI models identify MIC areas in SEM images.

*How the paper uses it:* The paper benchmarks and advances deep learning segmentation models for MIC detection, so semantic segmentation is the core AI technique involved.

▶ [Deep Learning Semantic Segmentation for Nucleus Detection](https://www.youtube.com/watch?v=dVFZpodqJiI) — PyData · 27:13

### Prompt-based segmentation models
Prompt-based segmentation models use user inputs or cues (prompts) to guide segmentation, improving accuracy and flexibility. This approach is central to the paper’s novel Lightweight PH-FPNSeg model, which leverages prompts and heatmaps to better delineate MIC regions.

*How the paper uses it:* The paper introduces prompt- and heatmap-guided segmentation models to enhance MIC detection accuracy and robustness.

▶ [Clicks and Prompts: Intuitive Interactive Segmentation and Local Editing of 3D Shapes](https://www.youtube.com/watch?v=B2224uqp6a0) — Brown Visual Computing · 1:09:16 · Streamed 1 yr ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 9: Object Detection, Image Segmentation, Visualizing](https://www.youtube.com/watch?v=PTypu6GqEd4) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Lecture 15.1 - Semantic Segmentation [Introduction to ...](https://www.youtube.com/watch?v=wyftZgUNMbQ) — also for: Let RGB Be the Language of Vision (Cihang Xie)
- [Image Segmentation, Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation](https://www.youtube.com/watch?v=5QUmlXBb0MY) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of automated microbial-induced corrosion (MIC) detection in SEM images as presented in the paper. Starting with a basic classical segmentation method reproduction, you then implement and benchmark a deep learning segmentation model using the authors' released dataset and code. Finally, you extend the work by addressing a stated limitation or future direction, such as automating prompt generation for prompt-based segmentation models.

### Beginner — Classical MIC Segmentation with SIFT and Convex Hull
*Effort: a weekend, ~8 hours*

You build a classical computer vision pipeline to segment MIC regions in SEM images using SIFT feature detection followed by convex hull post-processing. This reproduces the baseline classical method from the paper to understand the challenges of MIC segmentation and the performance gap to deep learning.

**Why it shows you understood the paper:** This project shows you grasp the fundamental image processing challenges in MIC detection and the baseline classical approach benchmarked in the paper, including its moderate Dice and IoU scores.

**Grounded in:** Classical SIFT+Convex Hull method achieved moderate segmentation (Dice 44.07%, IoU 31.40%).

**Tech stack:** Python 3.11, OpenCV, NumPy, Matplotlib

**Data:** Use the authors' publicly released SpaceMIC SEM image dataset from (link removed — unverified), focusing on a small subset of images for quick iteration.

**Build it:**

1. Download and explore a subset of the SpaceMIC SEM images and their annotations.
2. Implement SIFT feature detection on the SEM images using OpenCV.
3. Apply convex hull operations to group detected features into MIC regions.
4. Calculate segmentation metrics (Dice coefficient, IoU) against ground truth masks.
5. Visualize segmentation results overlayed on SEM images.
6. Write a README explaining the classical method, results, and limitations.

**Ships as:** A GitHub repo with code implementing classical MIC segmentation, metric evaluation scripts, example visualizations, and a README summarizing the approach and results.

**Stretch goal:** Add simple post-processing heuristics to improve segmentation, such as morphological operations or threshold tuning.

### Intermediate — DeepLabv3+ Segmentation on SpaceMIC Dataset
*Effort: 2 weekends, ~20 hours*

You implement and train the DeepLabv3+ deep learning segmentation model on the SpaceMIC dataset, reproducing one of the core benchmarked methods from the paper. You compare its segmentation accuracy against the classical baseline and report Dice and IoU metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to apply state-of-the-art deep learning segmentation methods to the MIC detection problem using the authors' dataset and to reproduce key quantitative results from the paper.

**Grounded in:** DeepLabv3+ model improved Dice scores to ~75.76%, showing significant accuracy gains over classical methods.

**Tech stack:** Python 3.11, PyTorch, Torchvision, NumPy, Matplotlib

**Data:** Use the full SpaceMIC SEM image dataset with pixel-wise expert annotations available at (link removed — unverified).

**Build it:**

1. Clone or download the authors' SpaceMIC dataset and preprocess images and masks for training.
2. Implement or adapt an existing PyTorch DeepLabv3+ segmentation model.
3. Train the model on the training split of the SpaceMIC dataset with appropriate loss functions.
4. Evaluate the trained model on the test split, computing Dice and IoU metrics.
5. Compare results to the classical baseline from the beginner project.
6. Document the training process, hyperparameters, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/DataLab12/SpaceMIC> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing training and evaluation code for DeepLabv3+, scripts to compute segmentation metrics, sample inference visualizations, and a detailed README.

**Stretch goal:** Experiment with data augmentation or fine-tune hyperparameters to improve segmentation accuracy.

### Advanced — Automated Prompt Generation for Lightweight PH-FPNSeg Model
*Effort: 3+ weeks*

You develop and integrate an automatic prompt generation module to replace oracle prompts for the Lightweight PH-FPNSeg segmentation model, enabling fully autonomous MIC detection. This addresses a key limitation and future direction from the paper.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's novel prompt-based segmentation approach and its deployment challenges, and your ability to extend it toward operational autonomy as envisioned by the authors.

**Grounded in:** Prompt-based models rely on oracle prompts derived from ground-truth masks, limiting fully automated deployment; future work includes automatic prompt generation.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, Matplotlib

**Data:** Use the SpaceMIC dataset and the authors' Lightweight PH-FPNSeg code from https://github.com/DataLab12/SpaceMIC to build upon their segmentation model.

**Build it:**

1. Study the authors' Lightweight PH-FPNSeg model and how it uses oracle prompts for segmentation.
2. Design an automatic prompt generation method, e.g., using unsupervised region proposals, saliency detection, or clustering on SEM images.
3. Implement the prompt generator and integrate it with the Lightweight PH-FPNSeg model pipeline.
4. Evaluate the segmentation performance with automatic prompts versus oracle prompts using Dice and IoU metrics.
5. Analyze robustness and failure cases; document findings and potential improvements.
6. Write a comprehensive README detailing the approach, implementation, evaluation, and implications.

**Verified links from the paper:**

- <https://github.com/DataLab12/SpaceMIC> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for automatic prompt generation integrated with Lightweight PH-FPNSeg, evaluation scripts comparing oracle vs automatic prompts, example results, and a thorough README.

**Stretch goal:** Incorporate uncertainty-aware or boundary-aware learning techniques to further improve segmentation of ambiguous MIC regions.
