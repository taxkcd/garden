---
title: "547 · Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click — B. S. Manjunath"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-b-s-manjunath"
source_hash: "6a1eacd49a7afcf4f2cdc503ebbc9d227e3c0c6cb9214950258569744ee16e51"
sequence: 547
generator: "outreach-garden: managed"
---

# 547 · Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click

## At a glance

- **Professor:** B. S. Manjunath
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click](https://arxiv.org/abs/2511.15948v2)
- **Authors:** Raphael Ruschel, Hardikkumar Prajapati, Md Awsafur Rahman, B. S. Manjunath
- **Year:** 2025

## Paper overview

Click2Graph is a novel interactive system that allows users to generate detailed, temporally consistent scene graphs from videos by providing a single visual prompt such as a click. It segments and tracks the prompted subject, discovers interacting objects, and predicts their relationships, enabling controllable and interpretable video scene understanding.

### Why it matters

**Research problem:** Existing video scene graph generation systems operate fully automatically without user intervention, lacking controllability and the ability to correct errors or guide attention. Meanwhile, interactive segmentation models provide precise masks but lack semantic and relational reasoning. There is a gap in combining user guidance with semantic and relational video scene understanding.

**Why it matters:** Understanding interactions and relationships in video scenes is critical for applications like robotics, autonomous agents, assistive systems, and surveillance, where accurate interpretation of actions and relationships affects downstream decisions. Lack of user control limits practical deployment in complex or safety-critical environments.

**Key contributions:**

- First interactive Panoptic Video Scene Graph Generation framework enabling user-guided, temporally consistent scene graphs from a single visual prompt.
- Dynamic Interaction Discovery Module for subject-conditioned object prompt generation supporting multi-object reasoning.
- Semantic Classification Head for joint entity and predicate reasoning bridging promptable segmentation with structured semantic inference.
- Demonstration of robustness to different prompt types (point, box, mask) and competitive performance on the OpenPVSG benchmark.

## About the professor

**B. S. Manjunath** — Distinguished Professor, Frank Koenig Chair, Department of Electrical and Computer Engineering, Univ. of California - Santa Barbara.

Research interests: Image Informatics

### Research links

- [Faculty/profile page](https://www.ece.ucsb.edu/people/faculty/bs-manjunath)
- [Professor website](https://vrl.ece.ucsb.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Video Scene Graph Generation
**The paper assumes:** video scene graph generation, panoptic segmentation, spatiotemporal visual relationship reasoning
**Already in this field?** Skip this entirely if you already understand video scene graph generation and its integration with panoptic segmentation and semantic relationship inference.

To understand the core concepts behind Click2Graph, including video scene graph generation, segmentation, tracking, and semantic relationship inference, it is essential to grasp how scene graphs represent spatiotemporal entities and their interactions. The rigorous course option offers a deep, structured foundation in computer graphics and scene graphs, while the fast track provides a concise, practical introduction to motion graphics relevant to video scene understanding. Choose the course for comprehensive theoretical grounding and the fast track for a quick, application-focused overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Motion Graphic In CapCut](https://www.youtube.com/playlist?list=PL2GXYn-ivPQt9O9RPhk3yXRUyPaN172DM) — Pedram Derakhshan · 12 videos · 2.4h across 12 episodes

**Watch only this:** Episodes 1-4, about 45 minutes — focusing on motion graphics basics and creating scenes that relate to visual prompting and segmentation concepts.

*Why it unblocks this paper:* This short-form series by Pedram Derakhshan provides practical tutorials on motion graphics creation, which helps build intuition on visual scene composition and animation relevant to video scene graph generation and interactive video understanding.

*If you want all of it:* All 12 episodes, about 2.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Click2Graph paper, start by building foundational knowledge on promptable segmentation models, video object tracking, scene graph generation, and semantic relationship reasoning. These prerequisites cover the core technical components such as segmentation backbones, tracking algorithms, and semantic inference critical to the paper's approach. Finally, focus on the core concept of interactive panoptic video scene graph generation to grasp how the paper integrates these elements into a novel user-guided system.

### Promptable segmentation models *(prerequisite)*
This section covers the foundational technology of promptable segmentation models like SAM2, which enable user-guided segmentation from visual prompts. Understanding these models is essential as Click2Graph builds on SAM2 to segment and track the user-prompted subject in video frames.

*How the paper uses it:* Click2Graph integrates a promptable segmentation backbone (SAM2) to enable interactive subject segmentation from a single click or other prompts.

▶ [Introduction to SAM2: Installation Guide and Performing Segmentation on Video](https://www.youtube.com/watch?v=25ZbV2Fi1dM) — VisionBrick · 13:56 · 10 months ago

### Video object tracking *(prerequisite)*
Video object tracking techniques are critical for maintaining temporal consistency of the segmented subject across frames. This section provides an advanced overview of deep learning-based tracking methods, which underpin the tracking component of Click2Graph.

*How the paper uses it:* Click2Graph tracks the user-prompted subject consistently across video frames to maintain temporal coherence in the scene graph.

▶ [Deep Video Object Tracking - Xavier Giro - UPC Barcelona 2020](https://www.youtube.com/watch?v=jXINWvB7d7E) — Image Processing Group - UPC/BarcelonaTECH · 54:44 · 6 years ago

### Scene graph generation *(prerequisite)*
Scene graph generation is the core concept of representing entities and their relationships in visual scenes. This section includes university-level talks and research presentations that explain the structured semantic representation and reasoning behind scene graphs.

*How the paper uses it:* Click2Graph produces panoptic video scene graphs by jointly inferring entities and their relationships from video data.

▶ [Scene Graphs as a Symbolic Visual Representation](https://www.youtube.com/watch?v=0ks3MTzc8Mo) — GeoAIR Lab · 26:10 · 6 years ago

### Semantic relationship reasoning *(prerequisite)*
Semantic relationship reasoning is crucial for understanding predicates and relations between entities in scene graphs. This section covers linguistic and semantic theory relevant to the Semantic Classification Head in Click2Graph that jointly infers subject, object, and predicate labels.

*How the paper uses it:* The Semantic Classification Head in Click2Graph performs joint entity and predicate reasoning to generate structured scene graph outputs.

▶ [Semantics | Features, Roles, Relation of Semantics, Collocations | Lecture: 24 (Linguistics-I)](https://www.youtube.com/watch?v=PvAAm_4LFj4) — khursheed Ujan · 12:55 · 5 years ago

### Interactive panoptic video scene graph generation
This section focuses on the central method of Click2Graph, integrating user prompts with segmentation, tracking, and semantic inference to generate interactive panoptic video scene graphs. It includes advanced talks on video scene graph generation and related research to contextualize the paper's contributions.

*How the paper uses it:* Click2Graph is the first interactive framework unifying visual prompting with spatial, temporal, and semantic understanding for panoptic video scene graph generation.

▶ [【ECCV'22】Panoptic Scene Graph Generation (1/2)](https://www.youtube.com/watch?v=XxUwlFsWtvY) — Jingkang Yang · 4:58 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Click2Graph, start by learning about promptable segmentation models, which enable user-guided segmentation of subjects in images and videos. Next, grasp video object tracking to follow these segmented subjects consistently across frames. Then, study scene graph generation to represent entities and their relationships visually. After that, explore semantic relationship reasoning to understand how entities and predicates are inferred jointly. Finally, dive into the core concept of interactive panoptic video scene graph generation, which integrates all these components with user interaction for detailed video scene understanding.

### Promptable segmentation models *(prerequisite)*
Promptable segmentation models like SAM2 allow users to provide simple prompts (clicks, boxes, masks) to segment objects precisely in images or videos. Understanding how these models work helps grasp how Click2Graph segments the user-selected subject efficiently.

*How the paper uses it:* Click2Graph builds on SAM2 as its segmentation backbone to enable user-guided subject segmentation from a single click or other prompt.

▶ [SAM - Segment Anything Model by Meta AI: Complete Guide | Python Setup & Applications](https://www.youtube.com/watch?v=D-D6ZmadzPE) — Roboflow · 12:55 · 3 years ago

### Video object tracking *(prerequisite)*
Video object tracking techniques maintain the identity and location of objects across frames, ensuring temporal consistency. This is essential for following the segmented subject and interacting objects throughout the video.

*How the paper uses it:* Click2Graph tracks the user-prompted subject across frames to maintain temporal consistency in the generated scene graphs.

▶ [Navigating Object Tracking with OpenCV](https://www.youtube.com/watch?v=p6gp8CLMDOo) — OpenCV University · 12:49 · 3 years ago

### Scene graph generation *(prerequisite)*
Scene graph generation represents visual scenes as graphs where nodes are entities and edges are relationships. This structured representation enables understanding of interactions and semantics in images or videos.

*How the paper uses it:* Click2Graph generates panoptic video scene graphs that capture entities and their relationships over time.

▶ [Scene Graphs as a Symbolic Visual Representation](https://www.youtube.com/watch?v=0ks3MTzc8Mo) — GeoAIR Lab · 26:10 · 6 years ago

### Semantic relationship reasoning *(prerequisite)*
Semantic relationship reasoning involves jointly inferring the categories of entities and the predicates that describe their interactions. This reasoning is crucial for producing meaningful scene graphs that reflect real-world relationships.

*How the paper uses it:* Click2Graph’s Semantic Classification Head performs joint entity and predicate reasoning to produce structured scene graph outputs.

▶ [Semantics | Features, Roles, Relation of Semantics, Collocations | Lecture: 24 (Linguistics-I)](https://www.youtube.com/watch?v=PvAAm_4LFj4) — khursheed Ujan · 12:55 · 5 years ago

### Interactive panoptic video scene graph generation
This concept integrates user prompts with segmentation, tracking, and semantic inference to generate detailed, temporally consistent scene graphs interactively from videos. It enables controllable and interpretable video scene understanding from minimal user input.

*How the paper uses it:* Click2Graph is the first interactive framework that unifies visual prompting with panoptic video scene graph generation, enabling user-guided, temporally consistent scene graphs from a single click.

▶ [Panoptic Scene Graph generation (PSG)  Explained](https://www.youtube.com/watch?v=cSsE_H_0Cr8) — What's AI by Louis-François Bouchard · 6:01 · 4 years ago

## Already in your library

- [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [CS 198-126: Lecture 8 - Semantic Segmentation](https://www.youtube.com/watch?v=kxzB2p9gzWU) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Image Segmentation, Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation](https://www.youtube.com/watch?v=5QUmlXBb0MY) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Overview | Object Tracking](https://www.youtube.com/watch?v=BLRSIwal7Go) — also for: Tracking without Seeing: Geospatial Inference using Encrypted Traffic from Distributed Nodes (Tarek F. Abdelzaher)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Click2Graph's interactive panoptic video scene graph generation. The beginner project focuses on reproducing a core interactive segmentation component using your existing skills. The intermediate project involves reimplementing the paper's Dynamic Interaction Discovery Module and Semantic Classification Head on a substitute video dataset, evaluating interaction discovery metrics. The advanced project extends the system by integrating a user feedback mechanism for semantic label correction, addressing a key limitation noted in the paper.

### Beginner — Interactive Video Object Segmentation with Click Prompt
*Effort: a weekend, ~8 hours*

You build a simple interactive video segmentation tool that takes a single user click on the first frame to segment and track the selected object through subsequent frames. This reproduces the core user-guided segmentation and tracking idea from Click2Graph using a promptable segmentation model.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's foundational concept of user-prompted segmentation and temporal tracking as the basis for panoptic video scene graph generation.

**Grounded in:** From the paper: 'From a single user prompt (click, box, or mask), it segments and tracks the subject...'

**Tech stack:** Python 3.11, OpenCV, PyTorch, SAM2 or an open-source promptable segmentation model

**Data:** Use a publicly available short video clip (e.g., DAVIS dataset videos) as a substitute for the paper's video data.

**Build it:**

1. Set up a promptable segmentation model (e.g., SAM2 or a similar open-source model) in Python.
2. Implement a simple UI or CLI to accept a single click coordinate on the first video frame.
3. Segment the clicked object in the first frame using the model.
4. Track the segmented object mask across subsequent frames using optical flow or a simple tracking algorithm.
5. Visualize the segmentation masks over the video frames.

**Ships as:** A GitHub repo with code and a README showing interactive segmentation and tracking results on a sample video, demonstrating user-guided object segmentation from a single click.

**Stretch goal:** Add support for bounding box and mask prompts to compare segmentation quality across prompt types.

### Intermediate — Reimplementation of Dynamic Interaction Discovery and Semantic Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the core modules of Click2Graph: the Dynamic Interaction Discovery Module (DIDM) that generates subject-conditioned object prompts, and the Semantic Classification Head (SCH) that jointly infers subject, object, and predicate labels. You apply these on a small public video dataset and compare interaction recall metrics against a simple baseline without interaction discovery.

**Why it shows you understood the paper:** This project shows you grasp the paper's novel multi-object reasoning and joint semantic inference contributions, and can implement and evaluate them on video data.

**Grounded in:** Key contributions: 'Dynamic Interaction Discovery Module for subject-conditioned object prompt generation' and 'Semantic Classification Head for joint entity and predicate reasoning.' Key results: 'High Prompt Localization Recall (PLR) and Spatial Interaction Recall (SpIR).'

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, scikit-learn

**Data:** Use a small subset of the DAVIS or YouTube-VIS dataset videos as a substitute for the paper's video data.

**Build it:**

1. Implement a subject segmentation and tracking pipeline from the beginner project.
2. Develop the Dynamic Interaction Discovery Module that, given the subject mask, proposes candidate interacting object regions in each frame.
3. Implement the Semantic Classification Head to jointly classify subject, object, and predicate labels for detected interactions.
4. Define and compute evaluation metrics analogous to Prompt Localization Recall (PLR) and Spatial Interaction Recall (SpIR) on your dataset.
5. Compare results against a baseline that segments and classifies objects independently without interaction discovery.

**Ships as:** A GitHub repo with code, evaluation scripts, and a report README showing quantitative results comparing interaction discovery and semantic classification performance.

**Stretch goal:** Incorporate temporal consistency constraints to improve interaction discovery across frames.

### Advanced — User Feedback Integration for Semantic Label Correction in Interactive Video Scene Graphs
*Effort: 3+ weeks*

You extend the Click2Graph pipeline by integrating a lightweight user feedback mechanism that allows real-time correction of semantic labels (subject, object, predicate) during inference. This updates class embeddings dynamically to improve semantic consistency and reduce classification errors, addressing a key limitation of the original system.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of the system's architecture and challenges in semantic classification, and ability to innovate on interactive semantic refinement.

**Grounded in:** Limitation: 'Real-time user intervention is limited to segmentation correction; users cannot directly modify predicted labels during inference.' Future direction: 'Integrate lightweight feedback mechanisms allowing user label corrections to update class embeddings dynamically for improved semantic consistency.'

**Tech stack:** Python 3.11, PyTorch, React (for UI), FastAPI (for backend API), OpenCV

**Data:** Use a small public video dataset such as DAVIS or YouTube-VIS for demonstration.

**Build it:**

1. Reimplement the Click2Graph pipeline including segmentation, DIDM, and SCH modules as in the intermediate project.
2. Design a UI component that displays predicted semantic labels and allows users to correct them during video playback.
3. Implement a mechanism to update class embeddings or semantic classifier weights dynamically based on user corrections.
4. Integrate the feedback loop to update predictions in real-time or near real-time.
5. Evaluate the impact of user feedback on semantic classification accuracy and consistency.
6. Document the system architecture, user interaction flow, and evaluation results.

**Ships as:** A GitHub repo with a full interactive demo showing semantic label correction via user feedback, updated predictions, and a detailed README explaining the implementation and evaluation.

**Stretch goal:** Incorporate language model-based predicate reasoning to further reduce semantic confusion as another future direction.

_The paper's authors did not release code or datasets; all projects rely on reimplementation from the paper text and use substitute public video datasets such as DAVIS or YouTube-VIS._
