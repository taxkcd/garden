---
title: "591 · AIR-VIEW: The Aviation Image Repository for Visibility Estimation of Weather, A Dataset and Benchmark — Chad Mourning"
date: 2026-08-25
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chad-mourning"
source_hash: "6313012a71ea34dfd775d3436b88a1aa7a86c40b7f9714af19ba7a087ec36bf8"
sequence: 591
generator: "outreach-garden: managed"
---

# 591 · AIR-VIEW: The Aviation Image Repository for Visibility Estimation of Weather, A Dataset and Benchmark

## At a glance

- **Professor:** Chad Mourning
- **Institution:** Ohio University
- **Paper:** [AIR-VIEW: The Aviation Image Repository for Visibility Estimation of Weather, A Dataset and Benchmark](https://arxiv.org/pdf/2506.20939v1)
- **Authors:** Chad Mourning, Zhewei Wang, Justin Murray
- **Year:** 2025

## Paper overview

This paper introduces AIR-VIEW, a large new dataset of images from FAA weather cameras tagged with atmospheric visibility measurements relevant to aviation safety. It benchmarks several machine learning models for estimating visibility from images, highlighting the challenges and limitations of current approaches and the need for more research.

### Why it matters

**Research problem:** Estimating atmospheric visibility from images for aviation safety is challenging due to the lack of large, diverse, publicly available datasets with accurate visibility tags and the limitations of existing models in generalizing across different conditions and locations.

**Why it matters:** Poor visibility is a leading cause of aircraft accidents, especially when pilots transition from visual flight rules to instrument meteorological conditions. Accurate, low-cost visibility estimation can improve aviation safety and reduce reliance on expensive hardware.

**Key contributions:**

- Creation and release of AIR-VIEW, a large, diverse, truth-tagged dataset for atmospheric visibility estimation relevant to aviation.
- Benchmarking of state-of-the-art and general-purpose machine learning models on AIR-VIEW and comparison with other datasets.
- Analysis of dataset characteristics, including visibility distributions, geographic and temporal coverage.
- Discussion of limitations of current models and dataset, and suggestions for future research directions.

## About the professor

**Chad Mourning** — Assistant Professor, School of Electrical Engineering & Computer Science, Ohio University.

Research interests: high-resolution, high-performance data visualizations; geospatial data; aviation safety

### Research links

- [Faculty/profile page](https://research.ohio.edu/vizsim-lab)
- [Professor website](https://www.ohio.edu/engineering/eecs/research/vizsim)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** machine learning for computer vision
**The paper assumes:** machine learning for image analysis, convolutional neural networks, supervised learning for computer vision
**Already in this field?** Skip this entirely if you already understand how machine learning models, especially convolutional neural networks, are trained and evaluated on image datasets.

To understand the machine learning models and computer vision techniques benchmarked in the AIR-VIEW paper, it is essential to grasp how deep learning processes images, learns features, and generalizes across datasets. The rigorous course option offers a comprehensive, university-level deep dive into deep learning for computer vision, while the fast track provides a shorter, focused introduction to the same core concepts, suitable for those with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7 hours — covering introduction, image classification basics, regularization, neural networks, CNNs, and CNN architectures, which provide the essential background to understand image-based visibility estimation models.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier, authoritative university course that covers foundational and advanced topics in deep learning for computer vision, directly relevant to understanding the models benchmarked in the paper such as ResNet50 and CNN architectures.

*If you want all of it:* 21.2 hours across all 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks for Computer Vision and Natural Language Processing](https://www.youtube.com/playlist?list=PLwdnzlV3ogoXxAPrZzNzJataqIPzGaD-9) — NPTEL IIT Guwahati · 49 videos

**Watch only this:** First 6 videos, approximately 3 hours — covering neural network basics, convolutional networks, and their application to vision tasks, sufficient for a practical understanding of the paper's ML approaches.

*Why it unblocks this paper:* The Neural Networks for Computer Vision and Natural Language Processing playlist by NPTEL IIT Guwahati offers concise, clear explanations focused on neural networks applied to vision, providing a quicker but still relevant overview of the core machine learning concepts needed to understand the paper's models.

*If you want all of it:* Approximately 8-10 hours (exact duration not specified) for all 49 videos

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AIR-VIEW paper, start with foundational knowledge on remote sensing for weather monitoring to grasp how environmental data is acquired via sensors and cameras. Next, study the challenges of machine learning model generalization, which is a key issue highlighted in the paper regarding model performance across datasets. Then, explore computer vision techniques for environmental sensing to understand image-based sensing methods relevant to visibility estimation. Finally, focus on the core concept of atmospheric visibility estimation using machine learning, including the authors' own talk if available, to directly connect with the paper's contributions and benchmarking of models.

### Remote sensing for weather monitoring *(prerequisite)*
This section provides foundational knowledge on how environmental data, including weather and atmospheric conditions, are acquired remotely using sensors and cameras. Understanding satellite and ground-based remote sensing techniques is crucial for appreciating the data collection methods behind the AIR-VIEW dataset.

*How the paper uses it:* The AIR-VIEW dataset is built from FAA weather cameras, a form of remote sensing critical to capturing visibility data for aviation safety.

▶ [Advances in satellite remote sensing of Earth's weather and climate](https://www.youtube.com/watch?v=hw0pz88ZxDs) — Department of Physics University of Oxford · 1:14:51 · 4y ago

### Machine learning model generalization challenges *(prerequisite)*
This section covers the theoretical and practical challenges of machine learning models generalizing well across different datasets and conditions. Since the paper highlights poor generalization of visibility estimation models across datasets, understanding these concepts is essential for grasping the limitations and future directions discussed.

*How the paper uses it:* The paper emphasizes that models trained on one dataset perform poorly on others, underscoring the importance of generalization theory in improving visibility estimation.

▶ [Lecture 06 - Theory of Generalization](https://www.youtube.com/watch?v=6FWRijsmLtE) — caltech · 1:18:12 · 14y ago

### Computer vision for environmental sensing *(prerequisite)*
This section introduces computer vision techniques applied to environmental monitoring, including the use of images to estimate environmental variables. It provides context on how image-based sensing can be leveraged for tasks like visibility estimation, which is central to the AIR-VIEW paper.

*How the paper uses it:* The AIR-VIEW paper benchmarks machine learning models that use images from weather cameras to estimate atmospheric visibility, relying on computer vision methods.

▶ [[Colloquium] Computer Vision and Machine Learning for Environmental Monitoring](https://www.youtube.com/watch?v=Ja2hniAbqZE) — ФКН ВШЭ · 1:05:24 · 5y ago

### Atmospheric visibility estimation machine learning
This core section focuses on machine learning approaches specifically designed for estimating atmospheric visibility from images. It covers relevant algorithms and challenges directly related to the paper's benchmarking of models on the AIR-VIEW dataset.

*How the paper uses it:* The paper benchmarks several ML models for visibility estimation and discusses their performance and limitations on the AIR-VIEW dataset.

▶ [Visibility Estimation through Image Analytics (VEIA)](https://www.youtube.com/watch?v=-D_YNEXtg0Y) — MIT Lincoln Laboratory · 6:09 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of remote sensing for weather monitoring, which provides the foundational knowledge of how environmental data is collected via sensors and cameras. Next, learn about computer vision techniques for environmental sensing to grasp how images can be analyzed to extract meaningful information like visibility. Then, explore the challenges of machine learning model generalization to appreciate why models may struggle across different datasets and conditions. Finally, dive into atmospheric visibility estimation using machine learning, the core method used in the AIR-VIEW paper to estimate visibility from images.

### Remote sensing for weather monitoring *(prerequisite)*
Remote sensing involves collecting data about the Earth's environment from a distance, typically using satellites or ground-based cameras. Understanding this helps you grasp how weather and visibility data are captured, which is essential for aviation safety applications.

*How the paper uses it:* The AIR-VIEW dataset is built from images collected by FAA weather cameras, a form of remote sensing for atmospheric visibility.

▶ [Geog136 Lecture 11.1 Remote sensing basics](https://www.youtube.com/watch?v=Hgf3k981Cvw) — Crooked Contours · 27:38 · 6y ago

### Computer vision for environmental sensing *(prerequisite)*
Computer vision techniques allow machines to interpret and analyze images to extract useful information about the environment, such as detecting weather conditions or visibility levels. This knowledge is key to understanding how visibility can be estimated from images.

*How the paper uses it:* The paper uses machine learning models that analyze images to estimate atmospheric visibility, relying on computer vision methods.

▶ [Introduction to Computer Vision | Complete Syllabus Discussion](https://www.youtube.com/watch?v=tAveGoghups) — Gate Smashers · 8:21 · 6mo ago

### Machine learning model generalization challenges *(prerequisite)*
Generalization refers to a model's ability to perform well on new, unseen data. Many models perform well on their training data but struggle to generalize across different datasets or conditions, which is a critical challenge in real-world applications.

*How the paper uses it:* The AIR-VIEW paper highlights that models trained on one dataset often fail to generalize well to others, limiting their practical use for visibility estimation.

▶ [What is Generalization in Machine Learning?](https://www.youtube.com/watch?v=rpHQ9tAv9ZU) — Infomity · 5:58 · 6mo ago

### Atmospheric visibility estimation machine learning
This concept covers how machine learning models analyze images to estimate atmospheric visibility, a crucial factor for aviation safety. It involves understanding specific algorithms and benchmarks used to assess visibility from camera images.

*How the paper uses it:* The core contribution of the AIR-VIEW paper is benchmarking machine learning models for visibility estimation using a large, tagged image dataset.

▶ [Visibility Estimation through Image Analytics (VEIA)](https://www.youtube.com/watch?v=-D_YNEXtg0Y) — MIT Lincoln Laboratory · 6:09 · 3y ago

## Already in your library

- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [Lec 17. Generalization: Out-of-Distribution (OOD)](https://www.youtube.com/watch?v=tjD9LIzIIek) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [Lec-12: Introduction to Ensemble Learning with Real Life Examples | Machine⚙️ Learning](https://www.youtube.com/watch?v=qQjOWmf8I_I) — also for: Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure (Benjamin C. Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the AIR-VIEW paper's contributions on atmospheric visibility estimation from images. The beginner project reproduces a simple visibility distribution analysis from the dataset to familiarize you with the data characteristics. The intermediate project involves implementing and benchmarking a core machine learning model for visibility estimation on a substitute dataset, reflecting the paper's benchmarking approach. The advanced project extends the paper by addressing a stated limitation—improving visibility estimation under low-light conditions—using temporal image sequences, exploring a future direction suggested by the authors.

### Beginner — Visibility Distribution Analysis from FAA Weather Camera Images
*Effort: a weekend (~6 hours)*

You build a data analysis script that processes a sample of visibility-tagged images metadata to reproduce the visibility distribution histogram similar to Figure 3 in the paper. This involves parsing visibility tags, counting frequencies, and plotting the distribution to show the skew toward high visibility conditions.

**Why it shows you understood the paper:** This project demonstrates your grasp of the AIR-VIEW dataset's key characteristic—its visibility distribution skew—and your ability to extract and visualize relevant dataset statistics, a foundational step in understanding the paper's data challenges.

**Grounded in:** Analysis of dataset characteristics, including visibility distributions, geographic and temporal coverage.

**Tech stack:** Python 3.11, pandas, matplotlib, Jupyter Notebook

**Data:** Simulated metadata representing visibility tags and timestamps, since AIR-VIEW dataset is not publicly released; you create a small CSV with visibility values reflecting the paper's reported distribution (mostly high visibility).

**Build it:**

1. Create or simulate a CSV file with sample visibility measurements reflecting the paper's distribution (e.g., 80% with 9 or 10+ miles visibility).
2. Write a Python script or Jupyter notebook to load the CSV using pandas.
3. Aggregate visibility counts and calculate percentages for each visibility range.
4. Plot a histogram or bar chart showing the visibility distribution using matplotlib.
5. Add comments explaining how this distribution relates to the dataset's skew and challenges.

**Ships as:** A Jupyter notebook or Python script with a plotted visibility distribution chart and commentary linking it to the AIR-VIEW dataset's characteristics.

**Stretch goal:** Add geographic or temporal filters to analyze visibility distribution by month or site if simulated metadata includes these fields.

### Intermediate — Machine Learning Benchmark for Visibility Estimation on a Public Weather Image Dataset
*Effort: 1-3 weekends (~20 hours)*

You implement a convolutional neural network model inspired by the ResNet50 architecture to estimate atmospheric visibility from weather images. You train and evaluate this model on a publicly available weather image dataset with visibility labels (e.g., a substitute dataset like the Foggy Driving Dataset or a synthetic dataset you create). You compare your model's mean absolute error (MAE) against a simple baseline such as a linear regression on image brightness features.

**Why it shows you understood the paper:** This project shows you can reimplement the core machine learning benchmarking approach of the paper, understand model evaluation metrics like MAE, and appreciate the challenges of visibility estimation from images, including generalization and dataset limitations.

**Grounded in:** Benchmarking of state-of-the-art and general-purpose machine learning models on AIR-VIEW and comparison with other datasets.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, OpenCV, Jupyter Notebook

**Data:** A publicly available weather image dataset with visibility labels or a small synthetic dataset you generate simulating visibility conditions, since AIR-VIEW is not publicly released.

**Build it:**

1. Select or create a small dataset of weather images with visibility labels.
2. Preprocess images (resize, normalize) and extract simple features for baseline.
3. Implement a baseline regression model (e.g., linear regression) using simple image features.
4. Implement a CNN model based on ResNet50 architecture for regression to predict visibility.
5. Train both models, evaluate on a test split, and compute MAE and mean absolute percentage error (MAPE).
6. Plot predicted vs. true visibility and report metrics, discussing model performance and limitations.

**Ships as:** A GitHub repository with code for data preprocessing, baseline and CNN models, training scripts, evaluation metrics, and a README explaining results and relation to AIR-VIEW benchmarks.

**Stretch goal:** Experiment with data augmentation or transfer learning to improve model generalization.

### Advanced — Improving Visibility Estimation Under Low-Light Conditions Using Temporal Image Sequences
*Effort: a few weeks (~40+ hours)*

You develop a machine learning pipeline that leverages temporal sequences of images (video frames or time-lapse images) to improve atmospheric visibility estimation during low-light or nighttime conditions, addressing a key limitation noted in the AIR-VIEW paper. You design a model that incorporates temporal context (e.g., using a CNN + LSTM or 3D CNN) and evaluate its performance on a custom dataset of low-light weather images you collect or simulate.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating your ability to extend the core method with temporal modeling to improve visibility estimation where single images fail, showing deep engagement with the paper's challenges and research gaps.

**Grounded in:** Low-light and nighttime images are underrepresented and problematic for optical visibility estimation; future direction to explore temporal or multi-modal data to improve performance.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Jupyter Notebook

**Data:** A custom dataset of temporal image sequences under low-light conditions, either collected from public webcams or simulated by modifying existing images to mimic nighttime conditions, since AIR-VIEW low-light data is limited and not publicly available.

**Build it:**

1. Collect or simulate temporal sequences of low-light weather images with approximate visibility labels.
2. Preprocess sequences (frame extraction, normalization) and organize data for temporal modeling.
3. Implement a CNN + LSTM or 3D CNN model architecture to capture temporal dependencies.
4. Train the model on the temporal dataset and evaluate against a single-image baseline model.
5. Analyze results focusing on improvements in low-light visibility estimation accuracy.
6. Document challenges, limitations, and potential for integration with AIR-VIEW future expansions.

**Ships as:** A GitHub repository with code for data preparation, temporal model implementation, training and evaluation scripts, and a detailed README discussing the approach, results, and relation to the AIR-VIEW paper's limitations and future directions.

**Stretch goal:** Incorporate multi-modal data such as infrared or radar images if available to further improve low-light estimation.

_The AIR-VIEW dataset and authors' code are not publicly released; substitute datasets or simulated data must be used for machine learning projects._
