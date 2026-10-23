---
title: "961 · ZeroWaste Dataset: Towards Deformable Object Segmentation in Cluttered Scenes — Sarah Adel Bargal"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sarah-adel-bargal"
source_hash: "5ab15b29fd68af5c9ef7ff88ffd0fdcf6c181e8c8c1f46c8cd338f15ad813b3a"
sequence: 961
generator: "outreach-garden: managed"
---

# 961 · ZeroWaste Dataset: Towards Deformable Object Segmentation in Cluttered Scenes

## At a glance

- **Professor:** Sarah Adel Bargal
- **Institution:** Georgetown University
- **Paper:** [ZeroWaste Dataset: Towards Deformable Object Segmentation in Cluttered Scenes](https://arxiv.org/pdf/2106.02740)
- **Authors:** Dina Bashkirova, Fadi Alladkani, Mohamed Abdelfattah, Ping Hu, Vitaly Ablavsky, Ziliang Zhu, Berk Calli, James Akl, Sarah Adel Bargal, Kate Saenko
- **Year:** 2022

## Paper overview

This paper introduces ZeroWaste, the largest publicly available dataset for detecting and segmenting waste objects in cluttered, real-world recycling facility scenes. It addresses the challenge of identifying highly deformable and translucent waste items on conveyor belts to improve automated recycling processes, which currently suffer from low efficiency and safety risks for workers. The dataset supports fully-, semi-, and weakly-supervised learning and provides baseline results showing that current state-of-the-art computer vision methods struggle with this complex task.

### Why it matters

**Research problem:** Automated detection and segmentation of highly deformable, translucent waste objects in cluttered scenes at Materials Recovery Facilities (MRFs) to improve recycling efficiency and worker safety.

**Why it matters:** Less than 35% of recyclable waste in the US is actually recycled, leading to environmental pollution and health risks for manual waste sorters. Improving automated waste sorting can increase recycling rates, reduce pollution, and protect workers from hazardous materials.

**Key contributions:**

- Creation of ZeroWaste-f, the first fully annotated industrial waste detection and segmentation dataset with 4661 frames and polygon annotations.
- Introduction of ZeroWaste-s (unlabeled frames) for semi-supervised learning and ZeroWaste-w (before/after frames) for weakly-supervised learning.
- Development of ZeroWasteAug dataset with augmented rare classes to address class imbalance.
- Implementation and evaluation of fully-, semi-, and weakly-supervised baseline methods on the dataset.
- Demonstration that current state-of-the-art methods struggle on this challenging real-world dataset, motivating development of more robust, label-efficient algorithms.

## About the professor

**Sarah Adel Bargal** — Assistant Professor, Department of Computer Science, Georgetown University.

Research interests: Computer Vision and Machine Learning

### Research links

- [Faculty/profile page](https://bargal.georgetown.domains)
- [Google Scholar](https://scholar.google.com/citations?user=zjlFcrEAAAAJ&hl=en&oi=ao)
- [LinkedIn](https://www.linkedin.com/pub/sarah-adel-bargal/29/511/a75)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Vision and Deep Learning
**The paper assumes:** computer vision, deep learning, convolutional neural networks, object detection, semantic segmentation, supervised learning, semi-supervised learning, weakly-supervised learning, evaluation metrics in vision
**Already in this field?** Skip this entirely if you already have a solid understanding of modern computer vision techniques and deep learning-based object detection and segmentation.

To understand the ZeroWaste dataset paper, a solid grasp of computer vision and deep learning techniques for object detection and segmentation is essential. The rigorous course option provides a comprehensive, university-level deep dive into these topics, while the fast track offers a shorter, focused series of lectures that cover the core concepts efficiently. Choose the lane that fits your available time and depth needs; the fast track is a concise but high-quality alternative, not a watered-down version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1-9 (Introduction through Object Detection, Image Segmentation, Visualizing), about 10.5 hours — covering foundational deep learning, CNN architectures, and core detection/segmentation methods essential for understanding the paper's models and results.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision is a top-tier, authoritative graduate-level course that covers convolutional neural networks, object detection, segmentation, and relevant architectures like Mask R-CNN and DeepLabv3+. It aligns closely with the paper's focus on state-of-the-art detection and segmentation models and their training paradigms.

*If you want all of it:* All 18 lectures, about 21.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Vision — Andreas Geiger](https://www.youtube.com/playlist?list=PL05umP7R6ij35L2MHGzis8AEHz7mg381_) — Tübingen Machine Learning · 46 videos · 22.0h across 46 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Introduction), 2.1 to 2.4 (Image Formation), 11 (Image Segmentation), 15 (Object Detection), about 6 hours total — covering key concepts in image formation, segmentation, and detection relevant to the paper.

*Why it unblocks this paper:* The Computer Vision lecture series by Andreas Geiger offers clear, concise explanations focused on core computer vision concepts including image formation, segmentation, and object detection. It is well-structured and visually intuitive, making it an excellent quick background for the paper's domain.

*If you want all of it:* All 46 lectures, about 22 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ZeroWaste dataset paper, start with foundational concepts in instance segmentation and semi-supervised learning, as these underpin the methods evaluated on the dataset. Then explore data augmentation techniques for class imbalance and weakly supervised segmentation methods, which address key challenges highlighted by the authors. Finally, focus on the core concept of deformable object segmentation and the authors' own talk or closest available presentation to gain direct insights into their dataset, experiments, and findings.

### Instance segmentation deep learning *(prerequisite)*
Instance segmentation is a fundamental technique for detecting and segmenting individual objects in images, which is central to the models evaluated on the ZeroWaste dataset. Understanding deep learning approaches to instance segmentation provides the necessary background to appreciate the challenges and baseline results reported in the paper.

*How the paper uses it:* The paper evaluates state-of-the-art instance segmentation models like Mask R-CNN on the ZeroWaste dataset.

▶ [From Semantic segmentation to Instance Segmentation using DeepLearning - Humberto Farias](https://www.youtube.com/watch?v=x7AT4z_w6vM) — ADASS 2020 · 5y ago

### Semi supervised learning computer vision *(prerequisite)*
Semi-supervised learning methods leverage unlabeled data to improve model performance when labeled data is scarce, a key paradigm explored in the paper to address annotation challenges. A rigorous academic lecture on semi-supervised learning in computer vision will help understand the methods and their mixed results on the ZeroWaste dataset.

*How the paper uses it:* The paper explores semi-supervised methods like CCT and ReCo on the ZeroWaste-s unlabeled subset.

▶ [ADL4CV:DV - Semi-Supervised Learning](https://www.youtube.com/watch?v=ihkylUbqFMI) — Dynamic Vision and Learning Group · 4y ago

### Data augmentation for class imbalance *(prerequisite)*
Data augmentation is a critical technique to address class imbalance, which the authors tackle by creating the ZeroWasteAug dataset to improve rare class segmentation. Understanding augmentation strategies in an academic context helps grasp how augmentation impacts model performance on challenging classes like metal waste.

*How the paper uses it:* The paper uses ZeroWasteAug to improve segmentation accuracy on rare classes.

▶ [CSCI 3151 - M24 - Data augmentation for robustness](https://www.youtube.com/watch?v=HGcH9uhg7Zc) — Atlantic AI Institute · 8mo ago

### Weakly supervised segmentation methods *(prerequisite)*
Weakly supervised segmentation reduces annotation effort by using cheaper labels like image-level tags, an approach evaluated in the paper with methods like PuzzleCAM. A detailed tutorial on weakly supervised semantic segmentation provides the theoretical and practical background to understand these methods' performance on ZeroWaste.

*How the paper uses it:* The paper evaluates weakly supervised methods for object localization on the ZeroWaste-w subset.

▶ [ECCV 2020 WSL tutorial: 3. Weakly supervised semantic segmentation](https://www.youtube.com/watch?v=jM1T1HwbY5s) — Rodrigo Benenson · 6y ago

### Deformable object segmentation
Segmenting highly deformable objects in cluttered scenes is the core technical challenge addressed by the ZeroWaste dataset. Academic talks on deformable part models and deformable object reconstruction provide foundational knowledge on modeling deformability, essential for understanding the dataset's difficulty and the need for specialized algorithms.

*How the paper uses it:* The paper focuses on segmenting highly deformable waste objects in cluttered recycling facility scenes.

▶ [Training Deformable Object Models for Human Detection based on Alignment and Clustering](https://www.youtube.com/watch?v=OG7VYBAYdQY) — ECCV'14 Video Spotlights · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the ZeroWaste dataset paper, starting with instance segmentation in deep learning, then covering data augmentation for class imbalance, followed by semi-supervised and weakly supervised learning methods in computer vision. Finally, it addresses the core challenge of deformable object segmentation in cluttered scenes, culminating in insights about the dataset and its real-world application in waste detection.

### Instance segmentation deep learning *(prerequisite)*
Instance segmentation is a computer vision task that identifies and segments each object instance in an image, combining object detection and semantic segmentation. Understanding this helps grasp how models like Mask R-CNN work to detect and segment waste items in the ZeroWaste dataset.

*How the paper uses it:* The paper evaluates state-of-the-art instance segmentation models on the ZeroWaste dataset to detect and segment waste objects.

▶ [From Semantic segmentation to Instance Segmentation using DeepLearning - Humberto Farias](https://www.youtube.com/watch?v=x7AT4z_w6vM) — ADASS 2020 · 5y ago

### Data augmentation for class imbalance *(prerequisite)*
Data augmentation involves creating modified versions of data to increase dataset diversity and address class imbalance, which helps models learn better from rare classes. This technique is crucial for improving segmentation accuracy on underrepresented waste types in the ZeroWaste dataset.

*How the paper uses it:* The authors use an augmented dataset (ZeroWasteAug) to improve performance on rare waste classes like metal.

▶ [Lecture 8: Overfitting, Underfitting, Class Imbalance & Data Augmentation](https://www.youtube.com/watch?v=22nnYGtxE5s) — Mohamed Abdeldayem · 3w ago

### Semi supervised learning computer vision *(prerequisite)*
Semi-supervised learning leverages both labeled and unlabeled data to improve model performance when labeled data is scarce or expensive. This approach is important for the ZeroWaste dataset, which includes unlabeled frames to help train models more efficiently.

*How the paper uses it:* The paper explores semi-supervised methods using unlabeled frames from ZeroWaste-s to improve detection and segmentation.

▶ [ADL4CV:DV - Semi-Supervised Learning](https://www.youtube.com/watch?v=ihkylUbqFMI) — Dynamic Vision and Learning Group · 4y ago

### Weakly supervised segmentation methods *(prerequisite)*
Weakly supervised segmentation uses limited annotations, such as image-level labels instead of detailed masks, to train models, reducing annotation costs. This is relevant for the ZeroWaste dataset's weakly supervised subset, which uses before/after frames for training.

*How the paper uses it:* Weakly supervised methods are evaluated on the ZeroWaste dataset to reduce annotation effort while providing meaningful localization.

▶ [ECCV 2020 WSL tutorial: 3. Weakly supervised semantic segmentation](https://www.youtube.com/watch?v=jM1T1HwbY5s) — Rodrigo Benenson · 6y ago

### Deformable object segmentation
Deformable object segmentation focuses on detecting and segmenting objects that change shape or appearance, which is challenging in cluttered scenes. This concept is central to the ZeroWaste dataset, as waste items are highly deformable and translucent on conveyor belts.

*How the paper uses it:* The core challenge addressed by the ZeroWaste dataset is segmenting highly deformable waste objects in cluttered recycling facility scenes.

▶ [Registered and Segmented Deformable Object Reconstruction From a Single View Point Cloud](https://www.youtube.com/watch?v=Ir7GXjGWqtE) — ComputerVisionFoundation Videos · 2y ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)
- [Computer Vision - Lecture 11.1 (Self-Supervised Learning: Preliminaries)](https://www.youtube.com/watch?v=j97fdXLKlQ8) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Computer Vision - Lecture 11.2 (Self-Supervised Learning: Task-specific Models)](https://www.youtube.com/watch?v=utmRR6dKOOg) — also for: VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People (Yuhang Zhao)
- [Introduction to Semi-Supervised learning](https://www.youtube.com/watch?v=caelO7XRO6Q) — also for: Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning (Anne H. H. Ngu)
- [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — also for: One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening (Alexander Tropsha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the ZeroWaste dataset paper. The beginner project focuses on reproducing a simple segmentation evaluation metric using familiar tools and a substitute dataset. The intermediate project involves reimplementing and evaluating a core segmentation model described in the paper on a smaller or substitute dataset, introducing you to instance segmentation deep learning and semi-supervised learning concepts. The advanced project extends the paper by addressing class imbalance or semi-supervised learning challenges using data augmentation or novel methods, showing your ability to innovate on stated limitations.

### Beginner — Semantic Segmentation Metric Evaluation on Cluttered Objects
*Effort: a weekend, ~8 hours*

You build a simple semantic segmentation evaluation script that computes mean Intersection-over-Union (mIoU) and pixel accuracy metrics on a small set of images with polygon annotations. You use a public dataset with deformable objects (e.g., COCO subset or a synthetic substitute) to simulate the task of segmenting cluttered, deformable objects.

**Why it shows you understood the paper:** This project shows you understand the core evaluation metrics used in the ZeroWaste paper and the challenges of segmenting deformable objects in cluttered scenes, as well as how polygon annotations translate into pixel-level metrics.

**Grounded in:** Key results: DeepLabv3+ semantic segmentation achieves moderate mean Intersection-over-Union (~47%) on the test set, demonstrating the difficulty of the task.

**Tech stack:** Python 3.11, NumPy, OpenCV, Matplotlib, Jupyter Notebook

**Data:** Use a small subset of COCO dataset or synthetic images with polygon annotations to simulate deformable object segmentation.

**Build it:**

1. Load polygon annotations and corresponding images from the chosen dataset.
2. Rasterize polygon masks to binary masks for each class.
3. Implement functions to compute Intersection-over-Union (IoU) and pixel accuracy per class.
4. Calculate mean IoU and overall pixel accuracy across the dataset.
5. Visualize example images with ground truth and predicted masks (simulated or dummy predictions).

**Ships as:** A Jupyter notebook with code to compute and visualize segmentation metrics on deformable objects, with clear explanations linking to the paper's evaluation.

**Stretch goal:** Add support for multi-class segmentation metrics and compare metric results for different simulated prediction qualities.

### Intermediate — Instance Segmentation with Mask R-CNN on Deformable Objects
*Effort: 2 weekends, ~20 hours*

You reimplement the core Mask R-CNN instance segmentation model evaluated in the paper and train it on a smaller public dataset with deformable objects (e.g., a subset of COCO or a similar dataset). You evaluate mean average precision (mAP) and compare your results to the paper's baseline performance on ZeroWaste-f.

**Why it shows you understood the paper:** This project demonstrates your ability to implement and evaluate a state-of-the-art detection and segmentation model on deformable objects, replicating the paper's core experimental approach and understanding the challenges highlighted by their low AP scores.

**Grounded in:** Key results: Mask R-CNN achieves low mean average precision (~22-24 AP) on ZeroWaste-f, indicating the difficulty of detecting deformable, translucent waste objects in cluttered scenes.

**Tech stack:** Python 3.11, PyTorch, Detectron2 or torchvision Mask R-CNN implementation, NumPy, Matplotlib

**Data:** Use a publicly available subset of COCO dataset with deformable object classes as a substitute for ZeroWaste-f due to lack of public code/data from the paper.

**Build it:**

1. Set up Mask R-CNN training pipeline using Detectron2 or torchvision on the chosen dataset.
2. Preprocess dataset to fit model input requirements and define class labels.
3. Train Mask R-CNN model with default hyperparameters for instance segmentation.
4. Evaluate model on a held-out test set and compute mean average precision (mAP).
5. Compare your mAP results to the paper's reported AP on ZeroWaste-f and discuss differences.

**Verified links from the paper:**

- <https://github.com/voxel51/fiftyone> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/neo85824/epsnet> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with training and evaluation scripts for Mask R-CNN on deformable objects, including a report comparing your results to the paper's baseline.

**Stretch goal:** Implement simple data augmentation to address class imbalance and observe its effect on AP.

### Advanced — Improving Semi-Supervised Segmentation for Cluttered Deformable Objects
*Effort: 3+ weeks*

You develop and evaluate a semi-supervised learning method to improve segmentation accuracy on cluttered, deformable objects, addressing the paper's limitation of mixed results with unlabeled data. You experiment with data augmentation and consistency regularization techniques inspired by CCT or ReCo, applying them to a substitute dataset or synthetic data simulating ZeroWaste challenges.

**Why it shows you understood the paper:** This project shows you can extend the paper's work by tackling a stated limitation—improving label efficiency and generalization in complex, cluttered scenes—demonstrating research-level initiative and understanding of semi-supervised segmentation methods.

**Grounded in:** Limitations: Semi-supervised methods leveraging unlabeled data show mixed results, indicating the need for better approaches; future directions include improving semi- and weakly-supervised learning methods.

**Tech stack:** Python 3.11, PyTorch, Detectron2 or custom segmentation model, NumPy, Albumentations for data augmentation

**Data:** Use a synthetic or public dataset with deformable objects and simulate unlabeled data to mimic ZeroWaste-s for semi-supervised learning experiments.

**Build it:**

1. Implement a baseline fully supervised segmentation model (e.g., DeepLabv3+ or Mask R-CNN) on the chosen dataset.
2. Incorporate semi-supervised learning techniques such as consistency regularization or pseudo-labeling inspired by CCT or ReCo.
3. Apply data augmentation strategies to address class imbalance and improve robustness.
4. Train the semi-supervised model using labeled and unlabeled data splits.
5. Evaluate segmentation performance on a test set and compare to the fully supervised baseline.
6. Analyze results and discuss improvements or challenges relative to the paper's findings.

**Verified links from the paper:**

- <https://github.com/voxel51/fiftyone> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/neo85824/epsnet> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and documentation for semi-supervised segmentation experiments, including quantitative results and analysis linking back to the paper's limitations and future directions.

**Stretch goal:** Explore weakly-supervised learning methods using image-level labels to further reduce annotation requirements.

_The ZeroWaste dataset and authors' code are not publicly released; substitute datasets like COCO or synthetic data must be used to simulate deformable object segmentation tasks._
