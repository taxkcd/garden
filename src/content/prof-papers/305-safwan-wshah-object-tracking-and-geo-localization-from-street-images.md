---
title: "305 · Object Tracking and Geo-localization from Street Images — Safwan Wshah"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-safwan-wshah"
source_hash: "df3762088f0bb96696bd0e6e50dabacb3ee11123346f1c300c48ae0c904a5fa8"
sequence: 305
generator: "outreach-garden: managed"
---

# 305 · Object Tracking and Geo-localization from Street Images

## At a glance

- **Professor:** Safwan Wshah
- **Institution:** University of Vermont
- **Paper:** [Object Tracking and Geo-localization from Street Images](https://arxiv.org/pdf/2107.06257)
- **Authors:** Daniel Wilson, Thayer Alshaabi, Colin Van Oort, Xiaohan Zhang, Jonathan Nelson, Safwan Wshah
- **Year:** 2021

## Paper overview

This paper presents a two-stage deep learning system to detect, track, and geolocate traffic signs from low frame rate street images. It introduces an enhanced dataset (ARTS v2) with detailed annotations and a novel object detector (GPS-RetinaNet) that predicts GPS coordinates of signs using only images and camera pose. A learned similarity network and a modified Hungarian algorithm are used to track signs across frames, consolidating detections into accurate geolocalized predictions.

### Why it matters

**Research problem:** How to accurately detect, track, and geolocate static road objects such as traffic signs from low frame rate street images without relying on expensive sensors like LIDAR or RADAR.

**Why it matters:** Accurate geolocalization of road assets is crucial for maintaining geospatial maps and enabling autonomous driving systems. Existing methods often require costly sensors or extensive calibration, limiting scalability and real-world applicability.

**Key contributions:**

- Creation of ARTS v2, the largest publicly available US traffic sign geolocalization dataset with 25,544 images, 47,589 annotations, and 199 sign classes including side of road and assembly labels.
- Development of GPS-RetinaNet, an object detector that predicts GPS coordinates from single-vision camera images using a novel GPS-subnet and adaptive focal loss (FLe) to handle class imbalance.
- Design of a similarity network that learns a distance metric to associate detections across low frame rate images.
- Integration of a modified Hungarian algorithm to track and merge detections into geolocalized sign predictions.
- Evaluation of multiple methods to aggregate tracklets into final geolocalized signs, finding weighted averaging most effective.

## About the professor

**Safwan Wshah** — Associate Professor, Department of Computer Science, University of Vermont.

Research interests: Machine Learning, Image & Video Processing, Deep Learning, Pattern Recognition, Computer Vision, Document Imaging & Digital Signal Processing.

### Research links

- [Faculty/profile page](https://www.uvm.edu/cems/cs/profile/safwan-wshah)
- [Professor website](https://www.wshahaigroup.com/)
- [Resolved homepage](https://www.wshahaigroup.com)
- [Google Scholar](https://scholar.google.com/citations?user=Q7NskmwAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Object Tracking and Geo-localization from Street Images," start by building foundational knowledge in object detection, geospatial localization in computer vision, multi-object tracking algorithms, and metric learning similarity networks. These prerequisites provide the necessary background on the core methods the paper builds upon. Finally, focus on the paper's core concept by watching an expert-level tutorial on visual geo-localization, which aligns closely with the paper's novel GPS-RetinaNet and tracking system.

### Object detection deep learning *(prerequisite)*
Object detection is the fundamental technology underlying GPS-RetinaNet, the paper's novel detector. Understanding state-of-the-art deep learning detection architectures, such as RetinaNet and YOLO, and their loss functions is crucial to grasp how the paper improves detection and geolocalization performance.

*How the paper uses it:* GPS-RetinaNet extends RetinaNet with a GPS-subnet and adaptive focal loss to detect and geolocate traffic signs.

▶ [Lecture 14: Deep Learning - Object Detection (Part 1)](https://www.youtube.com/watch?v=lLk5JzCFFAc) — Christos Kyrkou · 6 years ago

### Geospatial localization computer vision *(prerequisite)*
Geospatial localization in computer vision involves predicting geographic coordinates from images, a core challenge addressed by the paper. Learning about image-based geo-localization methods and their challenges provides context for the paper's GPS coordinate regression approach using camera pose and image features.

*How the paper uses it:* The paper predicts GPS coordinates of traffic signs from images and camera pose without expensive sensors.

▶ [CVPR 2021 Tutorial: "Cross-View Geo-Localization: Ground-to-Aerial Image Matching"](https://www.youtube.com/watch?v=Y_8kQK4kLJU) — UCF CRCV · 4 years ago

### Multi-object tracking algorithms *(prerequisite)*
Multi-object tracking is essential for associating detections across frames, especially in low frame rate videos where object displacement is large. Understanding classical and modern tracking algorithms helps appreciate the paper's use of a learned similarity network combined with a modified Hungarian algorithm for robust tracking.

*How the paper uses it:* The paper uses a similarity network and modified Hungarian algorithm to track traffic signs across frames.

▶ [CV3DST - Multi-object tracking](https://www.youtube.com/watch?v=BR3Y5bAz5Dw) — Dynamic Vision and Learning Group · 6 years ago

### Metric learning similarity networks *(prerequisite)*
Metric learning enables the system to learn a distance metric that measures similarity between detections, which is critical for associating the same traffic sign across frames. Understanding siamese networks and metric learning losses clarifies the design of the paper's similarity network.

*How the paper uses it:* A learned similarity network predicts if detections correspond to the same sign for tracking.

▶ [Lecture 15-1. Metric Learning](https://www.youtube.com/watch?v=EnlLr6S7c5A) — Joonseok Lee · 4 years ago

### Paper authors talk *(the paper's own talk)*
This tutorial provides an advanced, research-focused overview of visual geo-localization methods, including cross-view and cross-modal approaches, which are closely related to the paper's contributions. It offers direct insight into state-of-the-art techniques for geo-localization from images, complementing the paper's GPS-RetinaNet and tracking system.

*How the paper uses it:* The paper addresses visual geo-localization from street images using deep learning and camera pose.

▶ [Visual Geo-Localization Cross Time CVPR 2021 tutorial](https://www.youtube.com/watch?v=a8GfpN8XbLk) — Teddy Kumar · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on detecting, tracking, and geolocating traffic signs from street images, start by learning the basics of object detection with deep learning, which underpins the GPS-RetinaNet detector. Next, grasp the fundamentals of geospatial localization in computer vision to see how GPS coordinates can be predicted from images. Then, study multi-object tracking algorithms and metric learning similarity networks to understand how detections are associated across frames. Finally, explore the paper authors' own insights for a direct perspective on their novel system and dataset.

### Object detection deep learning *(prerequisite)*
Object detection identifies and locates objects within images using deep learning models. Understanding this helps you grasp how GPS-RetinaNet detects traffic signs before geolocating them.

*How the paper uses it:* GPS-RetinaNet builds upon RetinaNet, a deep learning object detector, to detect traffic signs in street images.

▶ [Introduction to Object Detection in Deep Learning](https://www.youtube.com/watch?v=t-phGBfPEZ4) — Aladdin Persson · 5 years ago

### Geospatial localization computer vision *(prerequisite)*
Geospatial localization uses computer vision to estimate geographic locations from images. Learning this concept explains how the system predicts GPS coordinates from single images and camera pose.

*How the paper uses it:* The paper's GPS-RetinaNet predicts GPS coordinates of detected signs using image features and camera pose information.

▶ [CVPR 2021 Tutorial: "Cross-View Geo-Localization: Ground-to-Aerial Image Matching"](https://www.youtube.com/watch?v=Y_8kQK4kLJU) — UCF CRCV · 4 years ago

### Multi-object tracking algorithms *(prerequisite)*
Multi-object tracking links detected objects across video frames to maintain their identities over time. This is crucial for associating traffic sign detections in low frame rate street images.

*How the paper uses it:* The paper uses a modified Hungarian algorithm combined with a learned similarity network to track signs across frames.

▶ [CV3DST - Multi-object tracking](https://www.youtube.com/watch?v=BR3Y5bAz5Dw) — Dynamic Vision and Learning Group · 6 years ago

### Metric learning similarity networks *(prerequisite)*
Metric learning trains networks to measure similarity between inputs, enabling the system to decide if detections in different frames are the same object. This is key for accurate tracking.

*How the paper uses it:* A siamese similarity network learns to associate detections of the same traffic sign across frames in the paper.

▶ [Lecture 15-1. Metric Learning](https://www.youtube.com/watch?v=EnlLr6S7c5A) — Joonseok Lee · 4 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into their motivations, challenges, and design choices, complementing technical understanding with context.

*How the paper uses it:* The authors discuss their novel GPS-RetinaNet detector, ARTS v2 dataset, and tracking approach in their CVPR 2021 tutorial.

▶ [Visual Geo-Localization Cross Time CVPR 2021 tutorial](https://www.youtube.com/watch?v=a8GfpN8XbLk) — Teddy Kumar · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical ladder to demonstrate understanding of the paper "Object Tracking and Geo-localization from Street Images." The beginner project focuses on reproducing a core mechanism of the paper—object detection with GPS coordinate regression—using familiar tools and a small dataset. The intermediate project involves reimplementing the GPS-RetinaNet detector and evaluating its geolocalization accuracy on a substitute dataset, introducing metric learning concepts. The advanced project extends the system to address a stated limitation by incorporating temporal context to improve tracking of visually similar traffic signs, exploring a future direction proposed by the authors.

### Beginner — Single-Image Traffic Sign Detection with GPS Offset Regression
*Effort: a weekend, ~8 hours*

You build a simplified object detector that detects traffic signs in single images and regresses local GPS offset coordinates relative to the camera pose. This reproduces the core idea of the GPS-subnet in GPS-RetinaNet on a small scale, using a public traffic sign dataset substituted for ARTS v2. The project includes visualization of detections with predicted GPS coordinates on a map.

**Why it shows you understood the paper:** This project demonstrates you understand how to augment an object detector with GPS coordinate regression and how camera pose can be used to convert local offsets to global GPS predictions, a key contribution of the paper.

**Grounded in:** Development of GPS-RetinaNet, an object detector that predicts GPS coordinates from single-vision camera images using a novel GPS-subnet

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Use a publicly available traffic sign dataset such as the German Traffic Sign Detection Benchmark (GTSDB) as a substitute for ARTS v2, with synthetic or approximate camera pose data to simulate GPS offset regression.

**Build it:**

1. Set up a RetinaNet object detector pretrained on COCO or similar dataset.
2. Add a GPS regression head that predicts local offsets (e.g., x, y offsets) for detected signs.
3. Simulate or assign approximate camera pose and GPS coordinates for images to convert local offsets to GPS predictions.
4. Train the model on the substitute dataset with bounding box and GPS offset targets.
5. Visualize detection boxes and predicted GPS points on a map or coordinate grid.

**Ships as:** A GitHub repo with code to train and evaluate the detector, plus a README showing sample images with detected signs and predicted GPS coordinates visualized.

**Stretch goal:** Add simple focal loss adaptation to handle class imbalance in detection and GPS regression.

### Intermediate — Reimplementation of GPS-RetinaNet for Traffic Sign Geolocalization
*Effort: 1-3 weekends, ~20 hours*

You reimplement the GPS-RetinaNet architecture described in the paper, including the GPS-subnet for local offset regression and adaptive focal loss (FLe). You train and evaluate it on a smaller public traffic sign dataset with added GPS and camera pose metadata simulated or approximated. You compare your GPS coordinate prediction accuracy against a baseline RetinaNet without GPS regression and report metrics analogous to mean average precision (mAP50) and median GPS error.

**Why it shows you understood the paper:** This project shows you can implement the paper's core method end-to-end, understand the role of the GPS-subnet and adaptive focal loss, and evaluate geolocalization performance quantitatively, mirroring the paper's key results.

**Grounded in:** Development of GPS-RetinaNet, an object detector that predicts GPS coordinates from single-vision camera images using a novel GPS-subnet and adaptive focal loss (FLe) to handle class imbalance

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, scikit-learn

**Data:** Use a public traffic sign dataset such as GTSDB or LISA Traffic Sign Dataset, augmented with synthetic GPS and camera pose data to simulate geolocalization tasks.

**Build it:**

1. Implement RetinaNet with a GPS regression subnet predicting local GPS offsets.
2. Implement adaptive focal loss (FLe) as described in the paper for classification.
3. Prepare dataset with bounding boxes, class labels, and synthetic GPS/camera pose metadata.
4. Train GPS-RetinaNet and a baseline RetinaNet without GPS regression on the dataset.
5. Evaluate detection mAP50 and median GPS prediction error using Haversine distance.
6. Compare results and analyze improvements from GPS-subnet and adaptive focal loss.

**Ships as:** A GitHub repo with training and evaluation code, plus a README reporting detection and geolocalization metrics and visualizations of predicted GPS points.

**Stretch goal:** Add a simple similarity network to associate detections across frames and demonstrate basic tracking.

### Advanced — Incorporating Temporal Context for Improved Tracking of Visually Similar Traffic Signs
*Effort: few weeks, ~40+ hours*

You extend the GPS-RetinaNet detection and tracking pipeline by incorporating temporal context through a learned similarity network that uses features from consecutive frames to better distinguish visually similar signs, especially in assemblies. You implement a modified Hungarian algorithm for data association and evaluate tracking accuracy and geolocalization error on a multi-frame dataset simulated from public traffic sign images with synthetic camera poses. This addresses the paper's limitation regarding difficulty distinguishing similar signs and explores a future direction.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's tracking methodology, metric learning for similarity, and data association algorithms, as well as the ability to extend the system to tackle a known limitation with temporal context.

**Grounded in:** Design of a similarity network that learns a distance metric to associate detections across low frame rate images; limitation: distinguishing between signs with very similar appearance and location, especially in assemblies, remains challenging

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, scikit-learn

**Data:** Simulate multi-frame sequences from public traffic sign datasets (e.g., GTSDB) with synthetic camera poses and GPS data to create low frame rate image sequences for tracking experiments.

**Build it:**

1. Implement GPS-RetinaNet detection with GPS regression as baseline.
2. Design and train a siamese similarity network to compute similarity scores between detections across frames using image patches and detection features.
3. Implement a modified Hungarian algorithm to associate detections into tracklets based on similarity scores.
4. Aggregate tracklet GPS predictions using weighted averaging to produce final geolocalized sign positions.
5. Evaluate tracking accuracy (true/false positives, false negatives) and median GPS error.
6. Analyze improvements in distinguishing visually similar signs in assemblies due to temporal context.

**Ships as:** A GitHub repo with detection, similarity network, and tracking code, plus a README documenting tracking performance, GPS accuracy, and visualizations of tracked signs over frames.

**Stretch goal:** Experiment with incorporating additional sensor data (e.g., simulated depth) or end-to-end training of detection and similarity networks.

_The paper's authors did not release code or dataset artifacts; all projects require substituting ARTS v2 with public traffic sign datasets and synthetic camera pose/GPS data._
