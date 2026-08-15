---
title: "405 · D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models — A. Lynn Abbott"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-a-lynn-abbott"
source_hash: "3645d95d027c782b20060015de9e83ef46a4f29969764f11089abcfd12410e3a"
sequence: 405
generator: "outreach-garden: managed"
---

# 405 · D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models

## At a glance

- **Professor:** A. Lynn Abbott
- **Institution:** Virginia Tech
- **Paper:** [D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models](https://arxiv.org/pdf/2607.19528)
- **Authors:** Heesang Han, A. Lynn Abbott, Abhijit Sarkar
- **Year:** 2026

## Paper overview

This paper presents D3VL, a new framework that improves how multimodal large language models (MLLMs) understand driving scenes by integrating both 2D camera images and 3D LiDAR/stereo camera time-series data. It addresses challenges in processing sparse and unstructured 3D data and shows improved performance in answering safety-related questions about autonomous driving scenes.

### Why it matters

**Research problem:** Current multimodal large language models (MLLMs) for autonomous driving mainly focus on 2D images and videos, lacking effective integration of 3D sensor data like LiDAR and stereo cameras. Processing 3D time-series data is challenging due to data sparsity, lack of grid structure, and the complexity of fusion with 2D data. Existing QA datasets for autonomous driving also lack comprehensive 3D and temporal data coverage.

**Why it matters:** Most autonomous vehicle systems rely heavily on LiDAR-based sensing, and incorporating 3D data improves perception tasks critical for safety. Without effective 3D data integration, MLLMs cannot fully understand driving scenes or answer safety-related questions, limiting their utility in real-world autonomous driving applications.

**Key contributions:**

- Proposed D3VL framework to enhance smaller MLLMs in processing LiDAR and camera time-series data through fine-tuning.
- Introduced WaymoQA, a large-scale VideoQA extension for the Waymo Open Dataset focusing on 3D and temporal scene understanding under diverse driving conditions.
- Demonstrated that D3VL improves baseline MLLM accuracy by 11% on the KITTI QA dataset.
- Showed that D3VL effectively learns prominent 3D features, improving perception of cyclists, pedestrians, and road dividers.
- Provided an efficient fine-tuning process requiring at most 3 epochs leveraging pretrained LLM knowledge.

## About the professor

**A. Lynn Abbott** — Professor, Virginia Tech.

Research interests: Computer vision, Pattern recognition, Artificial intelligence, Digital design, Computer architecture, Image processing, Biometrics, Sensing for autonomous vehicles

### Research links

- [Faculty/profile page](https://ece.vt.edu/people/profile/abbott.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D Computer Vision and Multimodal Sensor Fusion
**The paper assumes:** 3D computer vision, LiDAR data processing, multimodal sensor fusion techniques
**Already in this field?** Skip this entirely if you already understand 3D vision fundamentals and how to combine LiDAR with camera data for machine learning models.

To fully understand the D3VL paper's approach to integrating 3D LiDAR and 2D camera data for autonomous driving scene understanding, a solid grasp of 3D computer vision and multimodal sensor fusion is essential. The rigorous course option offers a deep, structured university-level introduction to core concepts in computer vision, while the fast track provides a concise, focused series on sensor fusion and tracking to quickly build intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos

**Watch only this:** Lectures 1-6, about 5 hours — covering introduction, image classification, convolutional networks, training neural networks, and early 3D vision concepts to build a strong foundation for 3D data processing and fusion.

*Why it unblocks this paper:* Stanford's CS231N Deep Learning for Computer Vision I is a highly authoritative and comprehensive university course that covers fundamental and advanced topics in computer vision, including 3D vision concepts relevant to understanding LiDAR and camera fusion as used in D3VL.

*If you want all of it:* All 18 lectures, approximately 15 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Understanding Sensor Fusion and Tracking](https://www.youtube.com/playlist?list=PLn8PRpmsu08ryYoBpEKzoMOveSTyS-h4a) — MATLAB · 6 videos

**Watch only this:** Episodes 1-3, about 45 minutes — covering basics of sensor fusion, Kalman filtering, and tracking to quickly grasp core fusion techniques.

*Why it unblocks this paper:* The MATLAB playlist 'Understanding Sensor Fusion and Tracking' provides a concise and clear introduction to sensor fusion concepts, including multimodal data integration and tracking, which are central to the D3VL framework's handling of 3D and 2D sensor data.

*If you want all of it:* All 6 episodes, about 1.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the D3VL paper, start with foundational knowledge on 3D LiDAR data processing and sensor fusion for autonomous vehicles, as these are critical for handling and integrating the sparse and unstructured 3D data with 2D images. Next, explore multimodal large language models to grasp the core technology enabling the fusion of visual and textual data. Finally, focus on the core concept of the D3VL framework itself, including the authors' own talks and related advanced research presentations to gain direct insight into their novel approach and dataset contributions.

### 3D LiDAR data processing *(prerequisite)*
Understanding how to process 3D LiDAR data is fundamental to grasping how D3VL handles sparse and unstructured 3D sensor inputs. This includes knowledge of point cloud processing, projection techniques, and data representation methods critical for integrating 3D data with language models.

*How the paper uses it:* D3VL improves MLLMs by effectively processing 3D LiDAR time-series data, which requires foundational understanding of LiDAR data processing.

▶ [Lidar Data Processing for Autonomous Systems](https://www.youtube.com/watch?v=30BAocUSrJc) — MATLAB · 28:45

### Sensor fusion for autonomous vehicles *(prerequisite)*
Sensor fusion techniques are essential for combining heterogeneous data streams such as 2D camera images and 3D LiDAR data. Understanding these methods provides context for how D3VL integrates multimodal inputs into a unified model for driving scene understanding.

*How the paper uses it:* D3VL's core innovation lies in fusing 2D and 3D sensor data effectively within a multimodal language model framework.

▶ [Multi-Sensor Perception and Data Fusion for Autonomous ...](https://www.youtube.com/watch?v=13DMAu844sk) — IEEE Instrumentation and Measurement Society · 52:49

### Multimodal large language models
Multimodal large language models form the backbone of D3VL, enabling the integration of visual and textual data for complex scene understanding. This section covers the architecture and training paradigms of MLLMs, which is crucial for appreciating how D3VL extends these models to incorporate 3D time-series data.

*How the paper uses it:* D3VL builds upon and fine-tunes multimodal large language models to incorporate 3D LiDAR and video data for autonomous driving QA tasks.

▶ [LLMs | Multimodal Models-I | Lec17.1](https://www.youtube.com/watch?v=IXp3P1MPB0Q) — LCS2 · 46:10

### D3VL framework talk *(the paper's own talk)*
This section provides direct insight from leading researchers and experts on driving scene understanding, focusing on integrating 3D and 2D data streams. It includes university lectures and conference talks that align closely with the D3VL approach, offering detailed technical context and state-of-the-art methods.

*How the paper uses it:* These talks provide advanced understanding and context for the D3VL framework's novel approach to multimodal fusion and temporal 3D data processing.

▶ [Computer Vision for Driving Scene Understanding](https://www.youtube.com/watch?v=DE0MkAJVPFE) — 2d3d.ai · Streamed 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the D3VL paper, start by building foundational knowledge on 3D LiDAR data processing and sensor fusion techniques essential for combining 2D and 3D data in autonomous driving. Next, learn about video question answering datasets to appreciate the evaluation context. Then, explore multimodal large language models that integrate visual and textual data. Finally, dive into the core concept of the D3VL framework itself, which innovatively fuses 3D time-series LiDAR data with 2D images for improved driving scene understanding.

### 3D LiDAR data processing *(prerequisite)*
LiDAR sensors capture sparse, unstructured 3D point clouds representing the environment. Understanding how to process this data—such as converting raw points into usable formats—is crucial for integrating 3D information into AI models for autonomous driving.

*How the paper uses it:* D3VL processes 3D LiDAR time-series data by projecting point clouds into depth images to integrate with 2D camera data.

▶ [Lidar Data Processing for Autonomous Systems](https://www.youtube.com/watch?v=30BAocUSrJc) — MATLAB · 28:45

### Sensor fusion for autonomous vehicles *(prerequisite)*
Sensor fusion combines data from multiple sensors like cameras and LiDAR to create a richer, more accurate understanding of the environment. Learning the basics of sensor fusion helps grasp how D3VL merges 2D and 3D inputs effectively.

*How the paper uses it:* D3VL’s architecture fuses 2D camera images and 3D LiDAR data streams to improve scene understanding.

▶ [Understanding Sensor Fusion and Tracking, Part 1: What Is ...](https://www.youtube.com/watch?v=6qV3YjFppuc) — MATLAB · 12:35

### Video question answering datasets *(prerequisite)*
Video QA datasets contain annotated video clips paired with questions and answers, enabling evaluation of models’ temporal and multimodal understanding. Familiarity with these datasets clarifies how D3VL’s performance is measured.

*How the paper uses it:* The paper introduces WaymoQA, a large-scale video QA dataset with 3D and temporal annotations for autonomous driving.

▶ [Question Answering: Datasets](https://www.youtube.com/watch?v=f-jGagMzjZ0) — Jordan Boyd-Graber · 12:03

### Multimodal large language models
Multimodal large language models integrate visual and textual data to understand complex scenes and answer questions. Understanding their architecture and training helps appreciate how D3VL fine-tunes such models to incorporate 3D data.

*How the paper uses it:* D3VL builds on pretrained multimodal LLMs, enhancing them to process combined 2D and 3D driving data.

▶ [LLMs | Multimodal Models-I | Lec17.1](https://www.youtube.com/watch?v=IXp3P1MPB0Q) — LCS2 · 46:10

### D3VL framework talk *(the paper's own talk)*
This concept covers the core innovation of the paper: a novel framework that integrates 3D LiDAR time-series data with 2D images into a single language model architecture, improving autonomous driving scene understanding and safety question answering.

*How the paper uses it:* The D3VL framework is the paper’s main contribution, demonstrating improved accuracy and 3D feature learning in MLLMs.

▶ [Computer Vision for Driving Scene Understanding](https://www.youtube.com/watch?v=DE0MkAJVPFE) — 2d3d.ai · Streamed 4 years ago

## Already in your library

- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [CMU Advanced NLP Spring 2026 (11): Multimodal LLMs I](https://www.youtube.com/watch?v=1fClfAI6hmA) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [MIT 6.S191 (2025): Large Language Models (Google)](https://www.youtube.com/watch?v=ZNodOsz94cc) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Understanding Multimodal LLMs in 5 Minutes !](https://www.youtube.com/watch?v=10M91BkxTOw) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the D3VL paper. The beginner project focuses on reproducing a core data processing step from the paper using familiar tools. The intermediate project implements the core D3VL framework on a substitute dataset to replicate key performance improvements. The advanced project extends the method to address a stated limitation by exploring longer temporal sequences and additional sensor modalities, aligning with the paper's future directions.

### Beginner — LiDAR-to-Camera Projection and Depth Image Tokenization
*Effort: a weekend, ~8 hours*

You build a small pipeline that takes 3D LiDAR point cloud data and projects it onto 2D camera images to create depth images, then tokenize these depth images into patches or tokens suitable for input to a language model. This reproduces the paper's key preprocessing step for integrating 3D data with 2D images.

**Why it shows you understood the paper:** This project shows you understand the challenge of converting sparse, unstructured 3D point clouds into a structured 2D representation that can be fused with camera images, a foundational mechanism in D3VL.

**Grounded in:** The framework converts 3D point clouds into depth images via LiDAR-to-camera projection, tokenizes both 2D and 3D inputs, and feeds them into a pretrained language model with fine-tuning.

**Tech stack:** Python 3.11, Open3D, NumPy, OpenCV, Matplotlib, Jupyter Notebook

**Data:** Use publicly available KITTI dataset LiDAR point clouds and corresponding camera images as a substitute for the paper's data.

**Build it:**

1. Download a sample sequence from the KITTI dataset containing synchronized LiDAR point clouds and camera images.
2. Implement LiDAR-to-camera projection using calibration parameters to generate depth images aligned with camera views.
3. Visualize the generated depth images alongside the original camera images to verify alignment.
4. Tokenize the depth images into fixed-size patches or tokens (e.g., 16x16 pixel patches) suitable for transformer input.
5. Document the pipeline and include visual examples in a Jupyter notebook.

**Ships as:** A GitHub repo containing a Jupyter notebook that demonstrates LiDAR-to-camera projection, depth image generation, tokenization, and visualization with clear explanations.

**Stretch goal:** Add temporal stacking of depth images from consecutive frames to simulate time-series input.

### Intermediate — Reimplementing D3VL Framework on KITTI QA Dataset Substitute
*Effort: 2 weekends, ~20 hours*

You reimplement the core D3VL architecture that fuses 2D camera images and 3D depth images (from LiDAR projection) as token inputs to a pretrained language model, then fine-tune it on a small-scale video question answering task. You compare performance against a baseline model that uses only 2D images.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main contribution—integrating 3D time-series data with 2D images in an MLLM framework—and your ability to reproduce its key performance improvement metric.

**Grounded in:** The authors propose D3VL, a novel MLLM framework that integrates 2D camera images and 3D time-series data into a single architecture and demonstrate an 11% accuracy improvement on KITTI QA dataset.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), OpenCV, NumPy, Jupyter Notebook

**Data:** Use the KITTI dataset as a substitute for the paper's KITTI QA dataset; simulate QA pairs or use a small subset of annotated questions if available.

**Build it:**

1. Prepare synchronized 2D camera images and projected 3D depth images from KITTI sequences.
2. Implement tokenization for both image modalities compatible with a pretrained transformer-based language model.
3. Build a simple fusion architecture that concatenates or cross-attends 2D and 3D tokens before feeding into the language model.
4. Fine-tune the model on a small set of QA pairs (simulated or from KITTI QA if accessible) to predict answers.
5. Train a baseline model using only 2D images for comparison.
6. Evaluate and report accuracy improvements from adding 3D depth tokens.

**Ships as:** A GitHub repo with code to preprocess data, train and evaluate the D3VL-inspired fusion model, baseline comparison, and a report notebook summarizing results.

**Stretch goal:** Incorporate temporal sequences of frames to extend the model to 3D time-series inputs as in the paper.

### Advanced — Extending D3VL for Longer Temporal Sequences and Additional Sensors
*Effort: 3+ weeks*

You extend the D3VL framework to handle longer temporal sequences of 3D and 2D data and integrate an additional sensor modality such as radar or stereo camera disparity maps. You evaluate computational efficiency and accuracy trade-offs, addressing the paper's limitation on temporal scale and sensor diversity.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation identified in the paper, demonstrating deep comprehension of the framework and the challenges of scaling multimodal fusion for autonomous driving applications.

**Grounded in:** Future directions include scaling D3VL to handle longer temporal sequences and integrating additional sensor modalities while maintaining computational efficiency for onboard systems.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), OpenCV, NumPy, Jupyter Notebook, CUDA (optional for acceleration)

**Data:** Use the Waymo Open Dataset or KITTI sequences with multiple sensor modalities (LiDAR, stereo cameras, radar if available) as substitutes; simulate longer temporal sequences by concatenating frames.

**Build it:**

1. Collect and preprocess longer sequences of synchronized 2D images, 3D LiDAR depth images, and an additional sensor modality (e.g., stereo disparity maps).
2. Extend the tokenization and fusion architecture to incorporate temporal attention mechanisms or temporal token stacking.
3. Modify the model to accept and fuse the additional sensor modality tokens alongside 2D and 3D tokens.
4. Implement efficient batching and memory management to keep computational costs feasible for onboard deployment.
5. Fine-tune and evaluate the extended model on a QA or perception task, comparing accuracy and inference time against the original D3VL baseline.
6. Document challenges, performance trade-offs, and potential improvements.

**Ships as:** A comprehensive GitHub repo with extended D3VL code, data preprocessing scripts for multiple sensors and temporal sequences, evaluation results, and a detailed README discussing scalability and efficiency.

**Stretch goal:** Explore pruning or quantization techniques to further reduce model size and latency for real-time onboard use.

_The paper's authors did not release code or datasets; KITTI and Waymo datasets are substitutes, but KITTI QA annotations may be unavailable publicly, requiring simulation or proxy tasks._
