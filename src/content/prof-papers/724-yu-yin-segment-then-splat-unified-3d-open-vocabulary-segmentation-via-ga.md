---
title: "724 · Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting — Yu Yin"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yu-yin"
source_hash: "798ab7a45ac17f8e50c5fa08cceee99c76f8a6ce874a6cd518a12e9527e789c3"
sequence: 724
generator: "outreach-garden: managed"
---

# 724 · Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting

## At a glance

- **Professor:** Yu Yin
- **Institution:** Case Western Reserve University
- **Paper:** [Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting](https://arxiv.org/pdf/2503.22204)
- **Authors:** Yiren Lu, Yunlai Zhou, Yiran Qiao, Chaoda Song, Tuo Liang, Jing Ma, Huan Wang, Yu Yin
- **Year:** 2025

## Paper overview

This paper presents a new method for segmenting 3D scenes into objects using a technique called Gaussian Splatting. Unlike traditional methods that segment after reconstructing the scene, this approach segments objects first, then reconstructs them. This leads to more accurate object boundaries, better handling of dynamic scenes, and faster training. The method also allows querying objects using natural language without predefined labels.

### Why it matters

**Research problem:** Existing 3D open-vocabulary segmentation methods rely on 2D pixel-level segmentation after scene reconstruction, causing multi-view inconsistencies, poor 3D object retrieval, and difficulties handling dynamic scenes due to Gaussian-object misalignment.

**Why it matters:** Accurate 3D open-vocabulary segmentation is crucial for applications like robotics, autonomous systems, and augmented reality, enabling intelligent perception, navigation, and manipulation without requiring predefined object labels.

**Key contributions:**

- Introduction of a novel 'segment then splat' paradigm that segments Gaussians before reconstruction, enabling unified static and dynamic 3D open-vocabulary segmentation.
- Development of a robust object tracking module that maintains spatial-temporal consistency of object-specific Gaussians.
- Preservation of explicit Gaussian-object correspondence to eliminate geometric and semantic ambiguities, improving segmentation accuracy and object geometry.
- Demonstration of state-of-the-art performance on multiple static and dynamic datasets with improved segmentation accuracy, object boundary precision, and computational efficiency.

## About the professor

**Yu Yin** — Tenure-Track Assistant Professor, Department of Computer & Data Science, Case Western Reserve University.

Research interests: Computer Vision, Multimodal Large Language Models (MLLM), and Embodied AI systems

### Research links

- [Faculty/profile page](https://yin-yu.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D Computer Vision and Scene Reconstruction
**The paper assumes:** 3D computer vision, multi-view geometry, scene reconstruction, Gaussian splatting, and 3D segmentation
**Already in this field?** Skip this entirely if you have a solid understanding of 3D scene reconstruction methods and Gaussian-based 3D representations in computer vision.

To understand the 'Segment then Splat' paper, a solid grasp of 3D computer vision and scene reconstruction techniques is essential, especially concepts like Gaussian splatting, multi-view consistency, and 3D segmentation. The rigorous course option offers a deep, structured dive into these topics through a university-level lecture series, while the fast track provides a concise, visual introduction to core concepts for quicker comprehension. Choose the lane that fits your available time and depth of study needed.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1, 5, 6, 9, 15, and 16, about 7.5 hours total — covering introduction, CNN architectures, object detection and segmentation, 3D vision, and vision-language topics essential for grasping the paper's methods.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a comprehensive, authoritative university course that covers foundational and advanced topics in computer vision, including 3D vision and vision-language integration, directly relevant to understanding Gaussian splatting and segmentation in 3D scenes.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [3D Computer Vision](https://www.youtube.com/playlist?list=PLjZmPymxz1tDWBREMCg7k5dHEmINmQ8iu) — PardesLine · 16 videos

**Watch only this:** First 5 videos, approximately 2-3 hours total — covering core 3D vision fundamentals and scene representation needed to understand Gaussian splatting and segmentation.

*Why it unblocks this paper:* The '3D Computer Vision' playlist by PardesLine offers a focused, concise set of videos on 3D vision concepts, providing a quick yet clear overview of scene reconstruction and segmentation techniques relevant to the paper without requiring a full university course commitment.

*If you want all of it:* Approximately 6-8 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Segment then Splat' paper, start by building foundational knowledge on Gaussian Splatting as the core 3D representation technique, followed by insights into open-vocabulary segmentation methods and multimodal vision-language models that enable language querying of 3D objects. Next, explore 3D object tracking and temporal consistency to grasp the robust tracking module critical for dynamic scenes. Finally, focus on the paper's core novel paradigm, the 'Segment then Splat' approach, with the authors' own presentation to directly learn their innovative pipeline reversal and its benefits.

### Gaussian Splatting 3D reconstruction *(prerequisite)*
Understanding Gaussian Splatting is essential as it forms the underlying 3D scene representation technique used in the paper. This concept explains how scenes are modeled as collections of 3D Gaussians, enabling efficient and photorealistic reconstruction.

*How the paper uses it:* The paper builds on Gaussian Splatting as the core 3D representation for segmentation and reconstruction.

▶ [[Introduction to Computer Vision] 13. 3D Gaussian Splatting (3DGS)](https://www.youtube.com/watch?v=nH5DcU8bTlM) — Gyeongsik Moon · 57:02 · 9mo ago

### Open-vocabulary segmentation *(prerequisite)*
Open-vocabulary segmentation methods allow segmentation without fixed predefined labels, enabling flexible querying with natural language. This is crucial to understand how the paper achieves language-based object querying in 3D scenes.

*How the paper uses it:* The paper advances open-vocabulary segmentation by integrating it with Gaussian Splatting for 3D scenes.

▶ [ECCV 2024: Open-Vocabulary 3D Semantic Segmentation with Text-to-Image Diffusion Models](https://www.youtube.com/watch?v=TDPYeJyP39U) — Voxel51 · 40:09 · 1y ago

### Multimodal vision-language models *(prerequisite)*
Multimodal vision-language models like CLIP provide the embeddings that link visual data with natural language, enabling open-vocabulary querying. Understanding these models is key to grasping how the paper assigns CLIP embeddings to segmented objects.

*How the paper uses it:* The paper uses CLIP embeddings to enable open-vocabulary querying of segmented 3D objects.

▶ [Advancing Multimodal Vision-Language Learning - Aishwarya Agrawal](https://www.youtube.com/watch?v=SLsqFdXOzUk) — UWindsor CS Colloquium · 49:41 · 1y ago

### 3D object tracking and temporal consistency *(prerequisite)*
Robust 3D object tracking and maintaining temporal consistency are vital for handling dynamic scenes and ensuring accurate segmentation over time. This knowledge supports understanding the paper's object tracking module that preserves Gaussian-object correspondence.

*How the paper uses it:* The paper's robust object tracking module ensures spatial-temporal consistency of object-specific Gaussians in dynamic scenes.

▶ [Part Correspondences and Temporal Consistency for Self-Supervised 3D Reconstruction-Shalini De Mello](https://www.youtube.com/watch?v=w-WxNynYioc) — Oxford VGG · 37:08 · 5y ago

### Segment then Splat paradigm
This is the core novel idea of the paper, reversing the traditional pipeline by segmenting Gaussians before reconstruction to improve segmentation accuracy and handle dynamic scenes effectively. The authors' own talk provides direct insight into their methodology and results.

*How the paper uses it:* This concept is the central contribution of the paper, introducing a new segmentation-reconstruction pipeline.

▶ [Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting (NeurIPS 2025)](https://www.youtube.com/watch?v=mamcO4M30eo) — UVLL : UNIST Vision&Learning Lab · 17:09 · 3mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 'Segment then Splat' paper, start by grasping the foundational concept of Gaussian Splatting for 3D scene reconstruction, which is the core representation technique used. Next, learn about open-vocabulary segmentation to appreciate how segmentation without fixed labels works. Then, explore multimodal vision-language models to understand how language embeddings like CLIP integrate with vision data. Following that, study 3D object tracking and temporal consistency, essential for handling dynamic scenes in the paper. Finally, dive into the paper's core novel idea: the 'Segment then Splat' paradigm that reverses the traditional pipeline to improve segmentation accuracy.

### Gaussian Splatting 3D reconstruction *(prerequisite)*
Gaussian Splatting represents 3D scenes as millions of fuzzy ellipsoids (Gaussians) that collectively reconstruct complex scenes with high realism and efficiency. This approach differs from traditional mesh or neural network representations by focusing on these splats to model geometry and appearance.

*How the paper uses it:* The paper builds on Gaussian Splatting as the fundamental 3D representation technique for scene reconstruction.

▶ [Core Philosophy of 3D Gaussian Splatting | The Idea That Changed 3D Rendering](https://www.youtube.com/watch?v=3Lml90hiQgU) — ScaleUp University · 5:48 · 6mo ago

### Open-vocabulary segmentation *(prerequisite)*
Open-vocabulary segmentation enables identifying and segmenting objects in images or scenes without relying on a fixed set of predefined labels, often by leveraging language-image models. This flexibility allows querying objects using natural language, which is crucial for generalizable segmentation.

*How the paper uses it:* The paper performs 3D open-vocabulary segmentation, allowing natural language queries without predefined labels.

▶ [[ECCV Workshop 2024] Open Vocabulary Object Detectors Robustness Challenge under Distribution Shifts](https://www.youtube.com/watch?v=9oV9JhTrj_M) — Machine Learning at Luleå University of Technology · 7:02 · 2y ago

### Multimodal vision-language models *(prerequisite)*
Multimodal vision-language models combine visual and textual data to understand and reason across both modalities, enabling tasks like image captioning and text-based image retrieval. Understanding these models is key to how the paper assigns CLIP embeddings to objects for open-vocabulary querying.

*How the paper uses it:* The paper uses CLIP embeddings, a vision-language model, to enable open-vocabulary querying of segmented objects.

▶ [Multimodal AI Explained | Vision Language Models (VLMs) | AI/ML Class 9](https://www.youtube.com/watch?v=gksDnUux73c) — Fusionpact · 4:06 · 9mo ago

### 3D object tracking and temporal consistency *(prerequisite)*
3D object tracking involves following objects over time in 3D space, maintaining their identity despite motion, deformation, or occlusion. Temporal consistency ensures that object segmentation remains stable across frames, which is essential for dynamic scene understanding.

*How the paper uses it:* The paper’s robust object tracking module maintains Gaussian-object correspondence over time, enabling dynamic scene segmentation.

▶ [LADCF via Temporal Consistency Preserving Spatial Feature Selection for Robust Visual Tracking](https://www.youtube.com/watch?v=9LcUX_ynLP0) — The Surrey Institute for People-Centred AI | CVSSP · 4:33 · 8y ago

### Segment then Splat paradigm
The 'Segment then Splat' paradigm reverses the traditional pipeline by segmenting Gaussians into object-specific sets before reconstructing the scene, improving segmentation accuracy and handling dynamic scenes better. This approach preserves explicit Gaussian-object correspondence and supports open-vocabulary querying.

*How the paper uses it:* This is the core novel idea of the paper that enables unified 3D open-vocabulary segmentation via Gaussian Splatting.

▶ [Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting (NeurIPS 2025)](https://www.youtube.com/watch?v=mamcO4M30eo) — UVLL : UNIST Vision&Learning Lab · 17:09 · 3mo ago

## Already in your library

- [TUM AI Lecture Series - The 3D Gaussian Splatting Adventure ...](https://www.youtube.com/watch?v=DjOqkVIlEGY) — also for: WonderHuman: Hallucinating Unseen Parts in Dynamic 3D Human Reconstruction (Xiaohu Guo)
- [3D Gaussian Splatting | Guest Lecture for "Computer Graphics in the AI Era"](https://www.youtube.com/watch?v=MBVmQSA24Yk) — also for: PowerGS: Display-Rendering Power Co-Optimization for Foveated Radiance-Field Rendering in Power-Constrained XR Systems (Yuhao Zhu)
- [Image Segmentation, Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation](https://www.youtube.com/watch?v=5QUmlXBb0MY) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CS231N Deep Learning for Computer Vision | Spring ...](https://www.youtube.com/watch?v=mQOK0Mfyrkk) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Let's train Vision Language Models (VLM) from scratch using just Text-Only LLMs!](https://www.youtube.com/watch?v=Oj27kALfvr0) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the 'Segment then Splat' method from the paper. The beginner project lets you reproduce a core mechanism of Gaussian segmentation before reconstruction using familiar tools. The intermediate project involves reimplementing the core segmentation-then-reconstruction pipeline on a public static 3D dataset, comparing segmentation accuracy with a baseline. The advanced project extends the method by addressing one of the paper's stated limitations—improving temporal stability of object tracking in dynamic scenes—exploring a future direction proposed by the authors.

### Beginner — Gaussian Segmentation Visualization
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates Gaussian splatting points in 3D and implements a simple segmentation step that assigns Gaussians to distinct object sets before any reconstruction. You visualize these segmented Gaussians in 3D using matplotlib or Plotly to show explicit Gaussian-object correspondence.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key innovation: segmenting Gaussians before reconstruction to preserve object correspondence and reduce ambiguity.

**Grounded in:** Introduction of a novel 'segment then splat' paradigm that segments Gaussians before reconstruction, enabling unified static and dynamic 3D open-vocabulary segmentation.

**Tech stack:** Python 3.11, matplotlib, numpy, plotly

**Data:** Synthetic Gaussian points generated in code to simulate segmented objects; no external dataset required.

**Build it:**

1. Generate synthetic 3D Gaussian points grouped into multiple object clusters.
2. Implement a segmentation function that assigns each Gaussian to an object set.
3. Visualize the segmented Gaussians in 3D with distinct colors per object.
4. Write a README explaining how this simulates the paper's segmentation-before-reconstruction step.

**Ships as:** A GitHub repo with a Python script and visualization notebook showing segmented Gaussian clusters and a README linking this to the paper's segmentation paradigm.

**Stretch goal:** Add a simple mask filtering step to discard inconsistent Gaussians, mimicking the paper's partial mask filtering strategy.

### Intermediate — Segment then Splat on Static 3D Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core 'segment then splat' pipeline from the paper on a public static 3D dataset such as ScanNet or ShapeNet (as a substitute for 3DOVS). You segment Gaussians into object sets before reconstruction, then reconstruct the scene. You compare segmentation accuracy (e.g., mIoU) against a baseline method that segments after reconstruction.

**Why it shows you understood the paper:** This project proves you can reimplement the paper's core method and quantitatively evaluate its advantage over traditional segmentation pipelines, demonstrating comprehension of the approach and metrics.

**Grounded in:** Outperforms existing 2D pixel-based and 3D segmentation baselines on static datasets (3DOVS, LERF_OVS) with clearer object boundaries and higher mean Intersection over Union (mIoU).

**Tech stack:** Python 3.11, PyTorch, Open3D, numpy, scikit-learn

**Data:** Use a public static 3D dataset such as ScanNet or ShapeNet as a substitute for the paper's static datasets (3DOVS, LERF_OVS).

**Build it:**

1. Load and preprocess the chosen static 3D dataset to extract Gaussian splatting points or approximate them.
2. Implement the segmentation step that assigns Gaussians to object-specific sets before reconstruction.
3. Reconstruct the scene using Gaussian splatting from segmented Gaussians.
4. Implement a baseline pipeline that segments after reconstruction for comparison.
5. Evaluate segmentation accuracy using mean Intersection over Union (mIoU) metric.
6. Document results and write a README explaining the method, comparison, and metrics.

**Ships as:** A GitHub repo with code implementing segment-then-splat and baseline pipelines, evaluation scripts, and a report README comparing segmentation accuracy.

**Stretch goal:** Incorporate CLIP embeddings for open-vocabulary querying of segmented objects as in the paper.

### Advanced — Improving Temporal Stability in Dynamic Scene Segmentation
*Effort: 3+ weeks*

You extend the 'Segment then Splat' method by integrating a Kalman filter or similar temporal filtering technique into the object tracking module to improve temporal stability in dynamic scenes. You apply this to a dynamic 3D dataset such as HyperNeRF or Neu3D (public substitutes if needed) and evaluate improvements in tracking recall and segmentation consistency.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing your ability to innovate beyond the original method and engage with current research challenges in 3D vision and temporal consistency.

**Grounded in:** Incorporate techniques such as Kalman filtering to improve temporal stability of object tracking in complex scenes.

**Tech stack:** Python 3.11, PyTorch, Open3D, numpy, filterpy (Kalman filter library)

**Data:** Use a public dynamic 3D dataset such as HyperNeRF or Neu3D substitutes if available; otherwise simulate dynamic Gaussian data with object motion and deformation.

**Build it:**

1. Implement or integrate a Kalman filter-based temporal smoothing module for object tracking in the segmentation pipeline.
2. Modify the segmentation pipeline to use this temporal filter to maintain Gaussian-object correspondence over time.
3. Apply the extended pipeline to a dynamic 3D dataset or simulated dynamic Gaussian data.
4. Evaluate improvements in object tracking recall, segmentation consistency, and temporal stability compared to the original method.
5. Write a detailed README documenting the extension, methodology, evaluation, and relation to the paper's future directions.

**Ships as:** A GitHub repo with the extended segmentation pipeline including temporal filtering, evaluation scripts, and a comprehensive README discussing improvements and research implications.

**Stretch goal:** Explore modeling inter-object relationships to handle relational text queries as a further extension.

_The paper's authors did not release code or datasets; intermediate and advanced projects require reimplementation and use of substitute public datasets or synthetic data._
