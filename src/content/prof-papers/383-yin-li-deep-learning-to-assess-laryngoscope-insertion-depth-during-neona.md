---
title: "383 · Deep learning to assess laryngoscope insertion depth during neonatal intubation with video laryngoscopy — Yin Li"
date: 2026-08-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yin-li"
source_hash: "88cc6224fa718ba798338bfb584591ea8994e4788d60583afe98773cb1c9cd77"
sequence: 383
generator: "outreach-garden: managed"
---

# 383 · Deep learning to assess laryngoscope insertion depth during neonatal intubation with video laryngoscopy

## At a glance

- **Professor:** Yin Li
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Deep learning to assess laryngoscope insertion depth during neonatal intubation with video laryngoscopy](https://europepmc.org/articles/PMC12815674?pdf=render)
- **Authors:** Abrar Majeedi, Patrick J. Peebles, Yin Li, Ryan M. McAdams
- **Year:** 2025

## Paper overview

This study developed a deep learning model to classify the insertion depth of a laryngoscope blade during neonatal intubation using video laryngoscopy. The model distinguishes between shallow, glottic zone, and deep insertion depths to provide real-time feedback to clinicians, aiming to improve intubation success and safety in newborns.

### Why it matters

**Research problem:** Neonatal intubation is challenging due to anatomical differences and low first-pass success rates, especially among trainees. While video laryngoscopy improves visualization, real-time guidance on blade insertion depth is lacking, which is critical for successful intubation.

**Why it matters:** Repeated intubation attempts increase risks such as bradycardia, hypoxemia, and intraventricular hemorrhage in neonates. Improving guidance on insertion depth can reduce failed attempts, shorten procedure time, and decrease complications, enhancing neonatal care outcomes.

**Key contributions:**

- Developed a deep learning model for real-time classification of laryngoscope insertion depth during neonatal intubation.
- Annotated a large dataset of 298,955 frames from 132 videos with expert neonatologist input.
- Integrated insertion depth detection with prior glottic opening detection for enhanced procedural guidance.
- Conducted a clinician survey to assess preferences for AI feedback modalities during intubation.

## About the professor

**Yin Li** — Associate Professor, Biostatistics and Medical Informatics / Computer Sciences / Electrical and Computer Engineering, University of Wisconsin - Madison.

Research interests: computer vision, applications of computer vision and machine learning in digital health

### Research links

- [Faculty/profile page](https://vision.wisc.edu/staff/yin-li/)
- [Identity evidence](https://orcid.org/0000-0003-4173-9453)
- [Professor website](https://yinli-vision.github.io/)
- [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_y-8nrcAAAAJ&citation_for_view=_y-8nrcAAAAJ:HhcuHIWmDEUC)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for video analysis
**The paper assumes:** deep learning, convolutional neural networks, video classification models, spatiotemporal feature learning
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and their application to video data analysis.

This background focuses on deep learning methods for video analysis, specifically 3D convolutional neural networks like the Inflated 3D ConvNet (I3D) used in the paper to classify laryngoscope insertion depth from video laryngoscopy frames. The rigorous course option provides a comprehensive, university-level deep dive into deep learning for computer vision, while the fast track offers a concise, intuition-driven introduction to neural networks and convolutional neural networks, suitable for quickly grasping core concepts without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos

**Watch only this:** Lectures 1-7, about 7 hours — covering introduction, image classification, convolutional networks, training neural networks, and early video-related concepts to understand spatiotemporal modeling.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier university course that covers convolutional neural networks and their application to image and video data, providing the theoretical and practical foundation needed to understand the I3D model architecture and training strategies used in the paper.

*If you want all of it:* All 18 lectures, approximately 18 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0) — DeepLearningAI

**Watch only this:** First 4 videos, about 2 hours — covering neural network basics, forward and backward propagation, and introduction to convolutional networks.

*Why it unblocks this paper:* DeepLearningAI's Neural Networks and Deep Learning playlist offers clear, well-structured explanations of neural network fundamentals and convolutional networks, providing a fast yet solid conceptual grounding relevant to understanding the deep learning approach in the paper.

*If you want all of it:* Entire playlist, approximately 4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand this paper, start with foundational knowledge of the deep learning architecture used—Inflated 3D Convolutional Networks (I3D)—to grasp how video data is processed for classification tasks. Next, gain clinical context on neonatal video laryngoscopy to appreciate the medical procedure and imaging modality central to the dataset and application. Then, explore general methods of deep learning for medical video analysis to situate the paper's approach within broader AI healthcare research. Finally, focus on the paper's core concept by reviewing the authors' own talks or advanced clinical demonstrations related to laryngoscope insertion depth assessment.

### Inflated 3D Convolutional Networks *(prerequisite)*
Understanding the I3D architecture is critical as it forms the backbone of the deep learning model used for classifying insertion depth from video frames. This lecture explains how 3D CNNs process spatiotemporal features in videos, which is essential for interpreting the model's design and performance.

*How the paper uses it:* The paper's deep learning model is based on an Inflated 3D Convolutional Network (I3D) for video frame classification.

▶ [Lecture 18: Videos](https://www.youtube.com/watch?v=A9D6NXBJdwU) — Michigan Online · 1:15:21

### Video laryngoscopy in neonatal intubation *(prerequisite)*
This concept provides clinical and procedural context for the video data analyzed by the model. Understanding the neonatal intubation procedure using video laryngoscopy helps clarify the challenges addressed by the AI system and the significance of insertion depth classification.

*How the paper uses it:* The dataset and clinical application focus on neonatal intubation using video laryngoscopy.

▶ [Neonatal Tracheal Intubation by L. Johnston, et al ...](https://www.youtube.com/watch?v=lGTaA_UdIXw) — OPENPediatrics · 15:55

### Deep learning for medical video analysis *(prerequisite)*
This section covers general approaches and challenges in applying deep learning to medical videos, providing a broader research context. It helps situate the paper's methodology within the field of automated medical procedural video interpretation.

*How the paper uses it:* The paper applies deep learning techniques to automate interpretation of neonatal intubation videos.

▶ [Stanford Seminar - Deep Learning for Medical Diagnoses](https://www.youtube.com/watch?v=nUk_P3G29tk) — Stanford Online · 56:34

### Paper authors talk *(the paper's own talk)*
Direct talks or presentations by the paper's authors offer the most precise and detailed insights into their methodology, results, and future directions. These talks often include nuanced discussion not found in the paper itself, making them invaluable for advanced understanding.

*How the paper uses it:* The authors' own presentations provide direct exposition of their deep learning model and clinical integration for laryngoscope insertion depth assessment.

▶ [Pediatric Endotracheal Intubation by J. Nagler, et al ...](https://www.youtube.com/watch?v=nEa3E5tuVJM) — OPENPediatrics · 21:53

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts starting with the clinical context of neonatal intubation using video laryngoscopy, then covers basics of deep learning for medical video analysis, followed by the specific deep learning architecture (Inflated 3D Convolutional Networks) used in the paper. Finally, it addresses real-time AI feedback in clinical procedures to understand the practical application and user preferences. This order builds intuition from clinical need to AI methods and their integration.

### Video laryngoscopy in neonatal intubation *(prerequisite)*
Learn what video laryngoscopy is and how it is used in neonatal intubation to secure the airway in newborns. Understanding the clinical procedure and visualization modality is essential to grasp the data source and application context of the AI model.

*How the paper uses it:* The paper analyzes video laryngoscopy footage of neonatal intubations to classify laryngoscope insertion depth.

▶ [A preterm neonate is intubated using a video laryngoscope.](https://www.youtube.com/watch?v=y99PgfQi8FY) — ANAESTHESIA ACADEMY · 6:42

### Deep learning for medical video analysis *(prerequisite)*
This section introduces how deep learning techniques are applied to analyze medical videos, including challenges and benefits. It provides a foundation for understanding automated interpretation of procedural videos like those used in this study.

*How the paper uses it:* The study uses deep learning to automatically classify insertion depth from video frames during neonatal intubation.

▶ [AI Medical Image Analysis (Kathleen Curran)](https://www.youtube.com/watch?v=TOHnwnkzNyU) — Mater Misericordiae University Hospital Surgery · 19:08

### Inflated 3D Convolutional Networks *(prerequisite)*
Understand the Inflated 3D ConvNet (I3D) architecture, which extends 2D CNNs to capture spatiotemporal features in videos by inflating filters into 3D. This is key to processing video frames for classification tasks in the paper.

*How the paper uses it:* The authors trained an I3D model to classify laryngoscope insertion depth from video frames.

▶ [Inflated 3D ConvNet (I3D) | Lecture 41 (Part 3) | Applied Deep ...](https://www.youtube.com/watch?v=Zchx0hPtLYE) — Maziar Raissi · 8:55

### Real-time AI feedback in clinical procedures
Explore how AI systems provide feedback during clinical procedures, including different feedback modalities and design considerations. This helps understand the user-centered aspect of the paper’s AI guidance system.

*How the paper uses it:* The paper surveyed clinicians on preferred AI feedback modalities to design effective real-time guidance during intubation.

▶ [FTS 15 - Day 3 - Surgical Education Using AI](https://www.youtube.com/watch?v=GNBsTBR3IXU) — Focal Therapy Society · 13:52

## Already in your library

- [Webinar #14: Deep Learning-based Medical Image ...](https://www.youtube.com/watch?v=AsvcdYYXgBQ) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder that helps you demonstrate understanding of the paper's core contribution: deep learning classification of laryngoscope insertion depth from neonatal video laryngoscopy. The beginner project reproduces a simple frame-level classifier for insertion depth categories using simulated data, suitable for a weekend. The intermediate project reimplements the paper's core Inflated 3D ConvNet method on a small-scale or synthetic video dataset to classify insertion depth, reporting F1 scores for shallow and glottic zones. The advanced project extends the method to improve detection of rare deep insertion events by augmenting data and refining modeling, addressing a key limitation and moving toward clinical utility.

### Beginner — Frame-level insertion depth classifier with simulated neonatal VL images
*Effort: a weekend (~8 hours)*

You build a simple image classifier that categorizes single video frames into shallow, glottic zone, or deep insertion depths using a small set of simulated or synthetic neonatal laryngoscopy images. This reproduces the paper's classification task at the frame level without temporal modeling.

**Why it shows you understood the paper:** This project shows you understand the core classification problem and the importance of distinguishing insertion depths from video frames, reflecting the paper's key contribution of frame-level annotation and classification.

**Grounded in:** Developed a deep learning model for real-time classification of laryngoscope insertion depth during neonatal intubation.

**Tech stack:** Python 3.11, PyTorch, OpenCV, scikit-learn

**Data:** Simulated or synthetically generated neonatal laryngoscopy frames with labels for shallow, glottic zone, and deep insertion depths, since no public dataset is available.

**Build it:**

1. Collect or generate a small dataset of synthetic neonatal laryngoscopy images labeled by insertion depth category.
2. Preprocess images (resize, normalize) and split into train/test sets.
3. Implement a simple CNN classifier in PyTorch to classify frames into the three insertion depth categories.
4. Train the model and evaluate classification metrics including F1 score for shallow and glottic zone classes.
5. Write a README explaining the classification task, dataset simulation, and results.

**Ships as:** A GitHub repo with code to train and evaluate a frame-level insertion depth classifier on synthetic data, including a README describing the problem and results.

**Stretch goal:** Add a simple majority voting post-processing step over consecutive frames to improve temporal consistency of predictions.

### Intermediate — I3D-based insertion depth classification on synthetic neonatal VL videos
*Effort: 1-3 weekends (~20 hours)*

You reimplement the paper's core method by training an Inflated 3D Convolutional Network (I3D) with a multilayer perceptron head to classify insertion depth categories on short synthetic or publicly available neonatal video laryngoscopy clips. You compare performance to a simple 2D CNN baseline and report F1 scores for shallow and glottic zone classes.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's main technical approach—using spatiotemporal deep learning (I3D) for video classification—and reproduces key evaluation metrics, showing you can implement and benchmark the core model.

**Grounded in:** The authors trained an Inflated 3D Convolutional Network (I3D) with a multilayer perceptron head on 298,955 annotated frames from 132 neonatal video laryngoscopy recordings.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, scikit-learn

**Data:** Synthetic or publicly available neonatal video laryngoscopy clips labeled for insertion depth; no public dataset exists so synthetic video sequences simulating shallow and glottic zone insertions are used.

**Build it:**

1. Prepare or generate a small set of synthetic neonatal video laryngoscopy clips labeled by insertion depth category.
2. Implement or adapt an Inflated 3D ConvNet (I3D) architecture in PyTorch with a multilayer perceptron classification head.
3. Train the I3D model on the synthetic video clips and evaluate frame-level classification performance (F1 scores) for shallow and glottic zone classes.
4. Implement a simple 2D CNN baseline that classifies individual frames without temporal context.
5. Compare the I3D model's performance against the 2D CNN baseline and analyze results.
6. Document the methodology, model architectures, training details, and evaluation metrics in a README.

**Ships as:** A GitHub repo containing code for training and evaluating I3D and 2D CNN models on synthetic neonatal VL videos, with performance comparison and detailed documentation.

**Stretch goal:** Incorporate majority voting post-processing to improve temporal consistency of predictions and report its effect on metrics.

### Advanced — Improving deep insertion detection with data augmentation and refined modeling
*Effort: a few weeks (~40+ hours)*

You extend the paper's method by addressing the poor detection of rare deep insertion events. Using synthetic data augmentation techniques to enrich deep insertion samples and refining the I3D model architecture or training strategy, you aim to improve sensitivity and F1 score for deep insertion classification. You also explore integrating clinician-preferred visual feedback simulation.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the paper—poor deep insertion detection due to rarity—and attempts a genuine methodological improvement. It shows you can critically engage with the paper's challenges and propose practical solutions toward clinical utility.

**Grounded in:** Performance for detecting deep insertion was poor (F1 = 0.034) due to rarity of these events in the dataset.

**Tech stack:** Python 3.11, PyTorch, OpenCV, Albumentations (for augmentation), NumPy, scikit-learn

**Data:** Synthetic neonatal video laryngoscopy clips with enriched deep insertion frames via augmentation and simulation, as no public dataset exists.

**Build it:**

1. Analyze the class imbalance problem for deep insertion frames and design augmentation strategies to synthetically increase deep insertion samples (e.g., video transformations, temporal interpolation).
2. Refine the I3D model training by applying class-weighted loss functions or focal loss to emphasize rare deep insertion class.
3. Train the augmented dataset with the refined model and evaluate improvements in deep insertion detection F1 score.
4. Implement a prototype visual feedback interface simulating clinician-preferred AI guidance based on model predictions.
5. Document the augmentation methods, model refinements, evaluation results, and feedback interface design in the README.

**Ships as:** A GitHub repo demonstrating improved detection of deep insertion events via data augmentation and model refinement, with a simulated visual AI feedback interface and thorough documentation.

**Stretch goal:** Plan a prospective evaluation pipeline integrating model predictions with clinical workflow simulation or EHR data (conceptual design).

_No public neonatal video laryngoscopy dataset or code was released by the paper's authors; synthetic data must be used to approximate the paper's data for all projects._
