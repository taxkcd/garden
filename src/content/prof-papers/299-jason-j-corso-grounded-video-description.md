---
title: "299 · Grounded Video Description — Jason J. Corso"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jason-j-corso"
source_hash: "6a5a637b61cdec1bd1abb156cd401e2c27a28d017125584bd36c20b0abcc3c30"
sequence: 299
generator: "outreach-garden: managed"
---

# 299 · Grounded Video Description

## At a glance

- **Professor:** Jason J. Corso
- **Institution:** University of Michigan
- **Paper:** [Grounded Video Description](http://openaccess.thecvf.com/content_CVPR_2019/papers/Zhou_Grounded_Video_Description_CVPR_2019_paper.pdf)
- **Authors:** Luowei Zhou, Yannis Kalantidis, Xinlei Chen, Jason J. Corso, Marcus Rohrbach
- **Year:** 2019

## Paper overview

This paper addresses the challenge of generating video descriptions that are explicitly grounded in the visual content of the video. The authors introduce a new dataset, ActivityNet-Entities, which links noun phrases in video captions to bounding boxes in video frames. They propose a novel video description model that uses these annotations to generate more accurate and explainable captions. Their model achieves state-of-the-art results on video and image description tasks, improving both the quality of captions and their grounding in visual evidence.

### Why it matters

**Research problem:** Existing video description models often generate plausible sentences based on learned priors but are not necessarily grounded in the actual video content, leading to hallucination of objects and less trustworthy descriptions.

**Why it matters:** Grounded video descriptions improve model accountability and trustworthiness, which is crucial for applications assisting people in need, such as visually impaired users. Grounding also helps explain model decisions and enables better diagnosis of errors.

**Key contributions:**

- Collected ActivityNet-Entities, a large-scale dataset with 158k bounding box annotations linking noun phrases to video frames.
- Proposed a novel grounded video description model that learns to generate captions explicitly grounded in video content.
- Demonstrated the model's superiority over baselines and prior work on video description, video paragraph description, and image captioning tasks.
- Showed that grounding supervision improves both caption quality and explainability by better localizing objects mentioned in descriptions.
- Adapted the model to image captioning on Flickr30k Entities, achieving state-of-the-art results.

## About the professor

**Jason J. Corso** — Professor, Electrical Engineering and Computer Science, University of Michigan.

Research interests: high-level computer vision, video understanding, activity recognition, video segmentation, video-to-text

### Research links

- [Faculty/profile page](https://web.eecs.umich.edu/~jjcorso)
- [Resolved homepage](https://web.eecs.umich.edu/~jjcorso/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=g9bV-_sAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Grounded Video Description' paper, start with foundational concepts such as Visual Grounding and Attention Mechanisms in Deep Learning, which are critical for linking language to visual content and focusing on relevant regions during caption generation. Then, explore Video Captioning and Description to grasp the general task context. Finally, focus on the paper's core concept by watching the authors' own talk from CVPR 2019, which directly explains their novel grounded video description approach.

### Visual Grounding in Computer Vision *(prerequisite)*
Visual grounding is the fundamental task of linking language phrases to specific regions in images or videos. Understanding this concept is essential to grasp how the paper grounds noun phrases in video frames with bounding boxes, improving caption accuracy and explainability.

*How the paper uses it:* The paper's main contribution is explicitly grounding noun phrases in video frames, making visual grounding a foundational prerequisite.

▶ [Both Sides Now: Generating and Understanding Visually ...](https://www.youtube.com/watch?v=fHijqAchv-4) — Microsoft Research · 1:21:42

### Attention Mechanisms in Deep Learning *(prerequisite)*
Attention mechanisms enable models to focus on relevant parts of the input, such as regions in images or frames in videos, which is crucial for generating grounded captions. Self-attention, in particular, is used in the paper for region context encoding to enhance grounding and caption quality.

*How the paper uses it:* The paper uses self-attention for region context encoding, which improves grounding and caption generation performance.

▶ [Lecture 13: Introduction to the Attention Mechanism in Large ...](https://www.youtube.com/watch?v=XN7sevVxyUM) — Vizuara · 51:25

### Video Captioning and Description *(prerequisite)*
Video captioning involves generating natural language descriptions from video content. Familiarity with this task provides context for the challenges the paper addresses, such as hallucination and lack of grounding in existing models.

*How the paper uses it:* The paper advances video captioning by introducing grounding supervision to improve caption quality and trustworthiness.

▶ [Lecture 18. Image/Video Captioning](https://www.youtube.com/watch?v=cbhoDeAcN3Q) — Joonseok Lee · 4 years ago

### Grounded Video Description Paper Talk *(the paper's own talk)*
This section features the authors' own presentation of their grounded video description model and dataset. It provides direct insights into their methodology, dataset collection, and experimental results, offering the most authoritative and detailed explanation of their work.

*How the paper uses it:* This is the authors' own talk from CVPR 2019, directly explaining the paper's contributions and approach.

▶ [CVPR 2019 Oral Session 2.2B: Language & Reasoning](https://www.youtube.com/watch?v=Je5LlZlqUt8) — ComputerVisionFoundation Videos · 1:36:02

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Grounded Video Description, start by learning the foundational concepts of visual grounding and attention mechanisms, which are crucial for linking language to visual content and focusing on relevant regions. Then, build up knowledge on video captioning and description to see how natural language is generated from video data. Finally, explore the core concept of grounded video captioning models to grasp how the paper's novel approach improves caption quality and grounding accuracy.

### Visual Grounding in Computer Vision *(prerequisite)*
Visual grounding is the process of linking language phrases to specific regions in images or videos, enabling models to understand and localize objects mentioned in text. This foundational concept helps machines connect visual data with natural language, which is essential for generating trustworthy and explainable captions.

*How the paper uses it:* The paper relies on visual grounding to explicitly link noun phrases in video captions to bounding boxes in video frames.

▶ [Both Sides Now: Generating and Understanding Visually ...](https://www.youtube.com/watch?v=fHijqAchv-4) — Microsoft Research · 1:21:42

### Attention Mechanisms in Deep Learning *(prerequisite)*
Attention mechanisms allow models to focus on the most relevant parts of input data when generating outputs, such as captions. Understanding attention, especially self-attention, is key to grasping how the model selectively attends to visual regions during caption generation.

*How the paper uses it:* The paper uses attention and self-attention to encode region context and guide language generation grounded in video content.

▶ [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — Vizuara · 1:04:55

### Video Captioning and Description *(prerequisite)*
Video captioning involves generating natural language descriptions that summarize the content of videos. Learning the basics of this task provides context for how models translate visual sequences into coherent sentences.

*How the paper uses it:* The paper improves video captioning by grounding descriptions explicitly in visual evidence from videos.

▶ [Lecture 18. Image/Video Captioning](https://www.youtube.com/watch?v=cbhoDeAcN3Q) — Joonseok Lee · 4 years ago

### Grounded Video Captioning Models
Grounded video captioning models generate captions that are explicitly linked to visual content, improving accuracy and explainability. This concept builds on grounding and attention to produce trustworthy video descriptions.

*How the paper uses it:* The paper proposes a novel grounded video description model that jointly optimizes caption generation and grounding using annotated bounding boxes.

▶ [Large-scale Pre-training for Grounded Video Caption ...](https://www.youtube.com/watch?v=WnkNjSJxDRQ) — Evangelos Kazakos · 5:15

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [DeepMind x UCL | Deep Learning Lectures | 8/12 | Attention ...](https://www.youtube.com/watch?v=AIiwuClvH6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Intuition Behind Self-Attention Mechanism in Transformer Networks](https://www.youtube.com/watch?v=g2BRIuln4uc) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the Grounded Video Description paper by Luowei Zhou et al. The beginner project reproduces a core grounding mechanism on a small scale using familiar tools. The intermediate project reimplements the paper's grounded video description model on a manageable dataset, comparing supervised grounding to a baseline. The advanced project extends the model to jointly handle temporal localization and caption generation, addressing a key limitation noted by the authors.

### Beginner — Visual Grounding of Noun Phrases in Single Video Frames
*Effort: a weekend, ~8 hours*

You build a simple web app or script that takes a single video frame and its caption with noun phrases, and visualizes bounding boxes linked to noun phrases. You implement a basic attention mechanism that highlights regions corresponding to noun phrases using bounding box annotations from a small subset of ActivityNet-Entities frames.

**Why it shows you understood the paper:** This project shows you understand the grounding supervision concept by explicitly linking noun phrases to visual regions, a core contribution of the paper. It demonstrates the grounding mechanism on a concrete example, illustrating how grounding improves explainability.

**Grounded in:** The paper's contribution of linking noun phrases in captions to bounding boxes in video frames via the ActivityNet-Entities dataset and grounding supervision.

**Tech stack:** Python 3.11, Jupyter Notebook, OpenCV, Matplotlib, React (optional for web UI)

**Data:** Use a small manually curated subset of ActivityNet-Entities frames and annotations (noun phrases with bounding boxes) extracted from the paper's dataset description.

**Build it:**

1. Extract or manually select a few video frames with corresponding captions and bounding box annotations from ActivityNet-Entities.
2. Parse captions to identify noun phrases linked to bounding boxes.
3. Write a script or React component that overlays bounding boxes on frames and highlights noun phrases when hovered or clicked.
4. Implement a simple attention visualization that simulates grounding by highlighting regions linked to noun phrases.
5. Document the grounding mechanism and show example visualizations in the README.

**Ships as:** A repository with code and README demonstrating noun phrase grounding on sample video frames, including visualizations linking text to image regions.

**Stretch goal:** Add a simple baseline that highlights random regions and compare with your grounding visualization to show improvement.

### Intermediate — Reimplementation of Grounded Video Description Model on ActivityNet-Entities
*Effort: 2 weekends, ~20 hours*

You reimplement the core grounded video description model from the paper using PyTorch, training it on the ActivityNet-Entities dataset or a publicly available substitute. You compare supervised grounding against an unsupervised baseline and report language metrics (BLEU, METEOR) and grounding accuracy as in the paper.

**Why it shows you understood the paper:** This project proves you can implement the paper's main method, including joint language generation and grounding supervision, and evaluate it with the same metrics. It shows comprehension of the multi-task losses and the impact of grounding supervision on caption quality and explainability.

**Grounded in:** The paper's key result that supervised grounding models outperform unsupervised baselines by 1-13% on language metrics and improve grounding accuracy from 22.3% to 43.5%.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, Jupyter Notebook

**Data:** Use the ActivityNet-Entities dataset available at https://github.com/facebookresearch/ActivityNet-Entities for training and evaluation.

**Build it:**

1. Clone and explore the ActivityNet-Entities dataset repository to understand data format and annotations.
2. Implement the grounded video description model architecture described in the paper, including region attention and grounding supervision losses.
3. Train the model on the dataset with and without grounding supervision.
4. Evaluate the models on language metrics (BLEU, METEOR, SPICE) and grounding accuracy.
5. Compare results and document findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/facebookresearch/ActivityNet-Entities> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code to train and evaluate grounded video description models on ActivityNet-Entities, including scripts to reproduce key metrics and a report comparing supervised vs unsupervised grounding.

**Stretch goal:** Incorporate self-attention context encoding and analyze its effect with and without grounding supervision.

### Advanced — Joint Temporal Localization and Grounded Video Captioning
*Effort: 3-4 weeks*

You extend the grounded video description model to jointly perform temporal event localization and generate grounded captions for those events. You design a pipeline or model that predicts temporal boundaries and generates captions with grounding, addressing the paper's limitation of assuming given temporal boundaries.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of the grounding approach and its integration with temporal localization. It shows ability to innovate beyond the paper by combining grounding with temporal event detection.

**Grounded in:** The paper's limitation that it assumes given temporal boundaries and does not address temporal localization, and the future direction to extend the model to jointly handle temporal localization and description generation.

**Tech stack:** Python 3.11, PyTorch, NumPy, OpenCV, Jupyter Notebook

**Data:** Use ActivityNet Captions dataset (temporal boundaries and captions) combined with ActivityNet-Entities annotations for grounding; if unavailable, simulate temporal segments with bounding box annotations on sampled frames.

**Build it:**

1. Study temporal event localization methods on ActivityNet Captions dataset.
2. Design a model or pipeline that first predicts temporal boundaries of events in videos.
3. Integrate the grounded video description model to generate captions with grounding for each localized event.
4. Train and evaluate the joint model on temporal localization accuracy and grounded caption quality.
5. Analyze how grounding supervision affects temporal localization and captioning, and document results.

**Verified links from the paper:**

- <https://github.com/facebookresearch/ActivityNet-Entities> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code and documentation demonstrating a joint temporal localization and grounded captioning model, including evaluation scripts and analysis of improvements over baseline methods.

**Stretch goal:** Incorporate co-reference resolution or multi-instance grounding to enrich video understanding as suggested in the paper's future directions.

_The paper's authors did not release official code for their model; the intermediate and advanced projects require reimplementation from the paper's descriptions. ActivityNet-Entities dataset is available via the linked GitHub repository, but bounding box annotations are sparse and may require careful handling._
