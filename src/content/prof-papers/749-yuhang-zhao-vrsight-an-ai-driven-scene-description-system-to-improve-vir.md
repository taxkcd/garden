---
title: "749 · VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People — Yuhang Zhao"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuhang-zhao"
source_hash: "36cb9cff7388d7473a2246ef60fc6163803181b93d75d740e450e10a18486003"
sequence: 749
generator: "outreach-garden: managed"
---

# 749 · VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People

## At a glance

- **Professor:** Yuhang Zhao
- **Institution:** University of Wisconsin - Madison
- **Paper:** [VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People](https://arxiv.org/pdf/2508.02958)
- **Authors:** Daniel Killough, Justin Feng, Zheng Xue “ZX” Ching, Daniel Wang, Rithvik Dyava, Yapeng Tian, Yuhang Zhao
- **Year:** 2025

## Paper overview

VRSight is a system that uses AI to help blind and low vision people access virtual reality (VR) by automatically detecting objects in VR scenes and describing them through spatial audio. It works without needing developers to change VR apps, making existing VR experiences more accessible. The system includes a new dataset of VR objects and uses multiple AI models to provide real-time audio descriptions that convey both what objects are present and where they are located in 3D space.

### Why it matters

**Research problem:** Virtual reality is largely inaccessible to blind and low vision people because VR environments rely heavily on visual cues, and existing accessibility solutions require developer effort and are not widely integrated. There is a lack of end-to-end systems that can describe 3D virtual environments post hoc without developer intervention.

**Why it matters:** As VR becomes mainstream in gaming, socializing, education, and healthcare, excluding blind users limits their ability to participate in these immersive experiences. Accessibility features are often deprioritized by developers, leaving blind users unable to navigate or interact effectively in VR, which perpetuates exclusion.

**Key contributions:**

- An end-to-end AI system that generates tone-relevant spatial audio descriptions from VR visuals without developer intervention.
- DISCOVR dataset with 17,691 labeled images from 17 popular social VR apps covering 30 VR object categories.
- A fine-tuned YOLOv8 object detection model adapted for VR-specific objects.
- Integration of multiple AI models including object detection, depth estimation, large language models, OCR, and text-to-speech for immersive audio feedback.
- Four default user interaction methods (ContextCompass, SceneSweep, AimAssist, SafeGuard) to provide different levels of scene understanding and safety.

## About the professor

**Yuhang Zhao** — Assistant Professor, Computer Sciences, University of Wisconsin - Madison.

Research interests: Human-Computer Interaction (HCI), accessibility, augmented and virtual reality (AR/VR), and AI-powered interactive systems.

### Research links

- [Faculty/profile page](https://www.yuhangz.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep Learning for Computer Vision
**The paper assumes:** deep learning, convolutional neural networks, object detection models, computer vision datasets, model fine-tuning
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and how deep learning models are applied and fine-tuned for object detection in computer vision.

To understand the deep learning and computer vision foundations underlying VRSight's AI-driven scene description system, this background provides two complementary learning paths. The rigorous course offers a comprehensive, university-level deep dive into convolutional neural networks, object detection, and related vision tasks, while the fast track delivers a concise, focused introduction to the same core concepts for quicker comprehension. Choose the course for in-depth mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 4 (Neural Networks and Backpropagation), 5 (Image Classification with CNNs), 6 (CNN Architectures), 9 (Object Detection, Image Segmentation, Visualizing), and 15 (3D Vision), about 6 hours total — these cover the core deep learning and vision techniques used in VRSight.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier university course that covers convolutional neural networks, object detection, depth estimation, and vision-language models, all central to VRSight's approach. Its detailed lectures on CNN architectures, object detection, and 3D vision provide the technical depth needed to fully grasp the paper's methods and results.

*If you want all of it:* 21.2 hours across all 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stanford CS231N | Deep Learning for Computer Vision | Spring 2025](https://www.youtube.com/playlist?list=PLT1jZ5o0K_ZIb5pFviSNR2oeDW2Wkd90e) — Mash on AI · 17 videos · 20.1h across 17 episodes

**Watch only this:** Lectures 4 (Neural Networks and Backpropagation), 5 (Image Classification with CNNs), 6 (CNN Architectures), 9 (Object Detection, Image Segmentation, Visualizing), and 15 (3D Vision), about 6 hours total — these provide the key concepts needed to understand the paper's technical approach.

*Why it unblocks this paper:* The Stanford CS231N | Deep Learning for Computer Vision | Spring 2025 playlist by Mash on AI closely mirrors the official Stanford course content but is slightly shorter and more concise. It covers essential topics like CNNs, object detection, and 3D vision, enabling a quick yet solid understanding of the deep learning foundations relevant to VRSight.

*If you want all of it:* 20.1 hours across all 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the VRSight paper, start with foundational concepts essential to the system: depth estimation from images, spatial audio rendering, large language models for scene description, and optical character recognition in VR. These prerequisites provide the technical background on how VRSight perceives and describes VR scenes. Then, focus on the core method of AI object detection in VR, which is central to VRSight's scene understanding. Finally, conclude with the authors' own detailed seminar talk on VRSight, offering direct insights into their novel AI-driven VR accessibility system.

### Depth estimation from images *(prerequisite)*
Depth estimation is critical for determining the distance of objects in VR scenes, enabling accurate spatial audio placement. The chosen lecture by Prof. Andreas Geiger from the University of Tübingen provides a rigorous academic treatment of self-supervised depth estimation models, suitable for advanced readers.

*How the paper uses it:* VRSight uses depth estimation to spatialize audio descriptions by determining object distances in 3D space.

▶ [Computer Vision - Lecture 11.2 (Self-Supervised Learning: Task-specific Models)](https://www.youtube.com/watch?v=utmRR6dKOOg) — Tübingen Machine Learning · 27:38 · 5y ago

### Spatial audio rendering *(prerequisite)*
Spatial audio is essential for conveying 3D object locations to blind users through sound. The Microsoft Research talk on capture and recreation of spatial audio offers an in-depth, research-level exploration of spatial sound capture and reproduction, providing foundational knowledge for understanding VRSight's audio feedback.

*How the paper uses it:* VRSight outputs spatialized audio feedback to convey object locations in VR scenes to blind users.

▶ [Capture and Recreation of Spatial Audio for HCI and Virtual Reality](https://www.youtube.com/watch?v=T8FoBIBFNRM) — Microsoft Research · 1:16:04 · 10y ago

### Large language models for scene description *(prerequisite)*
Large language models generate tone-relevant, detailed descriptions that enhance user experience in VRSight. The video from Algorithmic Simplicity explains why large language models understand the world, offering a deep dive into their capabilities and generalization, which underpins VRSight's use of GPT-4o for scene interpretation.

*How the paper uses it:* VRSight uses a large language model to interpret scene tone and provide detailed audio descriptions.

▶ [THIS is why large language models can understand the world](https://www.youtube.com/watch?v=UKcWu1l_UNw) — Algorithmic Simplicity · 18:08 · 1y ago

### Optical character recognition in VR *(prerequisite)*
OCR enables reading of in-scene text, contributing to comprehensive scene information for users. Although no advanced academic talks specifically on OCR in VR were found, the HCI 2020 lecture on AR/VR interaction design includes relevant research-level discussion on VR systems, making it the best available fit.

*How the paper uses it:* VRSight applies OCR to read text within VR environments to enhance scene descriptions.

▶ [HCI 2020 - Lecture 24: Augmented Reality (AR), Virtual Reality (VR), and Conclusion](https://www.youtube.com/watch?v=y_8rXUVkEVw) — Zack Teaching · 1:11:40 · 5y ago

### AI object detection in VR
Object detection is the core computer vision task enabling VRSight to identify VR objects in real-time. The Michigan Online lecture on object detection offers a comprehensive, university-level explanation of detection methods, datasets, and evaluation metrics, directly relevant to understanding VRSight's fine-tuned YOLOv8 model.

*How the paper uses it:* VRSight relies on a fine-tuned YOLOv8 object detection model trained on the DISCOVR dataset to identify VR objects.

▶ [Lecture 15: Object Detection](https://www.youtube.com/watch?v=TB-fdISzpHQ) — Michigan Online · 1:12:32 · 6y ago

### VRSight system talk *(paper-talk search result; attribution unverified)*
The authors' own seminar talk provides direct insight into the design, implementation, and evaluation of VRSight. This detailed presentation from the XR Access seminar covers the integration of multiple AI models and user study results, offering the most authoritative and comprehensive understanding of the system.

*How the paper uses it:* This talk is given by the authors and directly addresses the VRSight system and its contributions.

▶ [Towards Building Accessible Virtual Worlds: XR for All and VRSight](https://www.youtube.com/watch?v=Lhm4eaRxv1Q) — XR Access · 1:01:29 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the VRSight paper, start by learning foundational concepts like depth estimation and spatial audio rendering, which enable conveying 3D scene information through sound. Then, explore large language models for generating detailed scene descriptions and optical character recognition for reading in-scene text. Finally, grasp AI object detection in VR as the core method for identifying objects, culminating with an overview of the VRSight system itself.

### Depth estimation from images *(prerequisite)*
Depth estimation predicts how far objects are from the camera using images, enabling 3D understanding of scenes. This is crucial for placing audio cues spatially in VR to represent object locations accurately.

*How the paper uses it:* VRSight uses depth estimation to spatialize audio descriptions by determining object distances in VR scenes.

▶ [What is Depth Estimation & How to Implement It with MiDaS by Intel Labs | Monocular Depth Explained🚀](https://www.youtube.com/watch?v=WsCUPg_TxwI) — Ultralytics · 11:47 · 11mo ago

### Spatial audio rendering *(prerequisite)*
Spatial audio simulates how sound originates from different locations in 3D space, helping listeners perceive direction and distance. This technology is essential for conveying the positions of virtual objects to blind users through audio.

*How the paper uses it:* VRSight outputs spatialized audio feedback to communicate where objects are located in the VR environment.

▶ [Capture and Recreation of Spatial Audio for HCI and Virtual Reality](https://www.youtube.com/watch?v=T8FoBIBFNRM) — Microsoft Research · 1:16:04 · 10y ago

### Large language models for scene description *(prerequisite)*
Large language models (LLMs) understand and generate human-like text, enabling detailed and context-aware descriptions of scenes. They can interpret the tone and provide rich narrative audio feedback.

*How the paper uses it:* VRSight uses a large language model to generate tone-relevant, detailed audio descriptions of VR scenes.

▶ [THIS is why large language models can understand the world](https://www.youtube.com/watch?v=UKcWu1l_UNw) — Algorithmic Simplicity · 18:08 · 1y ago

### AI object detection in VR
Object detection identifies and localizes objects within images, a core computer vision task. In VR, detecting specific virtual objects enables real-time scene understanding for accessibility.

*How the paper uses it:* VRSight fine-tunes an object detection model to identify 30 VR object classes in real time.

▶ [A beginners introduction to YOLO | You Only Look Once | Computer Vision](https://www.youtube.com/watch?v=lcArnTfpPBM) — Vizuara · 1:51:51 · 1y ago

### VRSight system talk *(paper-talk search result; attribution unverified)*
A detailed presentation of the VRSight system explains how multiple AI models integrate to provide real-time, spatial audio descriptions for blind users in VR without developer changes.

*How the paper uses it:* This talk directly covers the VRSight system, its design, and evaluation as presented by the authors.

▶ [Towards Building Accessible Virtual Worlds: XR for All and VRSight](https://www.youtube.com/watch?v=Lhm4eaRxv1Q) — XR Access · 1:01:29 · 1y ago

## Already in your library

- [How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!](https://www.youtube.com/watch?v=sz30TDttIBA) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of VRSight's AI-driven VR accessibility system. The beginner project reproduces a core component—object detection on VR-like images—using your existing ML and full-stack skills. The intermediate project builds a simplified end-to-end pipeline inspired by VRSight's approach, integrating object detection and spatial audio description on a small VR dataset. The advanced project tackles a stated limitation by improving object detection robustness in challenging VR lighting conditions, extending the system toward real-world deployment challenges.

### Beginner — VR Object Detection with YOLOv8 on DISCOVR-like Data
*Effort: a weekend (~8 hours)*

You build a fine-tuned YOLOv8 object detection model to identify VR-specific objects using a small subset of images similar to the DISCOVR dataset described in the paper. You will prepare a labeled dataset of VR scene screenshots (simulated or collected from open VR apps), fine-tune the YOLOv8n model, and evaluate its mAP@50 metric.

**Why it shows you understood the paper:** This project shows you understand the core AI component of VRSight—the use of a fine-tuned YOLOv8 model on VR-specific objects—and the importance of domain-specific datasets for accessibility applications.

**Grounded in:** The fine-tuned object detection model achieved mAP@50 of 67.3 on the test split, outperforming the base YOLOv8n model trained on real-world datasets.

**Tech stack:** Python 3.11, PyTorch, Ultralytics YOLOv8, Jupyter Notebook

**Data:** A small custom dataset of VR scene screenshots with bounding box labels for 5-10 VR object classes, simulated or collected from open VR apps as a proxy for DISCOVR.

**Build it:**

1. Collect or simulate a small set (hundreds) of VR scene images with labeled bounding boxes for VR objects.
2. Set up the Ultralytics YOLOv8 environment and prepare the dataset in YOLO format.
3. Fine-tune the YOLOv8n model on your dataset for 50-100 epochs.
4. Evaluate the model's mAP@50 on a held-out test set.
5. Document the training process, dataset preparation, and evaluation results in a README.

**Verified links from the paper:**

- <https://github.com/ultralytics/ultralytics> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with training scripts, dataset samples, evaluation metrics, and a README explaining the fine-tuning process and results.

**Stretch goal:** Add a simple visualization web app to upload VR screenshots and display detected objects with bounding boxes.

### Intermediate — Simplified VRSight Pipeline with Object Detection and Spatial Audio
*Effort: 1-3 weekends (~20 hours)*

You implement a simplified version of VRSight's core pipeline: capture VR scene images, run a fine-tuned YOLOv8 object detector, estimate approximate depth (using a pre-trained monocular depth model), and generate spatialized audio descriptions of detected objects. You compare your object detection results against a baseline YOLOv8 model trained on COCO and report mAP@50.

**Why it shows you understood the paper:** This project demonstrates your ability to integrate multiple AI components from the paper—object detection, depth estimation, and spatial audio rendering—into a real-time accessibility system inspired by VRSight's approach.

**Grounded in:** VRSight integrates multiple AI models including object detection, depth estimation, large language models, OCR, and text-to-speech to provide spatialized audio feedback without developer intervention.

**Tech stack:** Python 3.11, PyTorch, Ultralytics YOLOv8, MiDaS depth estimation model, PyAudio or similar for spatial audio, Jupyter Notebook or lightweight Flask app

**Data:** Use the same proxy VR object detection dataset from the beginner project; for depth estimation, use pre-trained monocular depth models available publicly.

**Build it:**

1. Reuse or fine-tune the YOLOv8 model from the beginner project on the VR object dataset.
2. Integrate a pre-trained monocular depth estimation model (e.g., MiDaS) to estimate depth maps from VR scene images.
3. Develop a simple spatial audio module that maps detected object positions and depths to stereo audio cues.
4. Compare detection performance of your fine-tuned model against a baseline YOLOv8 model trained on COCO.
5. Create a demo script or lightweight app that captures VR screenshots, runs detection and depth estimation, and plays spatialized audio descriptions.
6. Document the pipeline, evaluation metrics, and demo instructions in the README.

**Verified links from the paper:**

- <https://github.com/ultralytics/ultralytics> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/MadisonAbilityLab/VRSight> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for the integrated pipeline, evaluation results comparing detection models, and a demo showing spatial audio feedback for VR scenes.

**Stretch goal:** Incorporate a simple large language model prompt (e.g., OpenAI GPT API) to generate richer scene descriptions from detected objects.

### Advanced — Robust VR Object Detection under Challenging Lighting Conditions
*Effort: a few weeks (~40+ hours)*

You extend the object detection component to improve robustness in darker VR environments and lower-performance apps, addressing a key limitation of VRSight. You experiment with data augmentation techniques (e.g., brightness/contrast adjustment, noise injection), domain adaptation, or semi-supervised learning to enhance detection accuracy in low-light VR scenes. You evaluate improvements quantitatively and qualitatively.

**Why it shows you understood the paper:** This project tackles a stated limitation of VRSight, showing your ability to critically analyze the system and apply advanced ML techniques to improve real-world applicability for accessibility in VR.

**Grounded in:** Object detection performance decreases in darker VR environments and some VR apps, limiting VRSight's effectiveness.

**Tech stack:** Python 3.11, PyTorch, Ultralytics YOLOv8, Albumentations or similar augmentation library, Jupyter Notebook or Python scripts

**Data:** Use the proxy VR object detection dataset with additional collected or simulated low-light VR images; augment data to simulate challenging lighting.

**Build it:**

1. Collect or simulate additional VR scene images with darker lighting conditions and label them.
2. Apply data augmentation techniques targeting lighting variations and noise to expand the training set.
3. Fine-tune the YOLOv8 model with augmented data and/or explore domain adaptation methods.
4. Evaluate detection performance on a low-light test set and compare against the baseline model.
5. Analyze failure cases and iterate on augmentation or model tuning.
6. Document methodology, experiments, and results in the README.

**Verified links from the paper:**

- <https://github.com/ultralytics/ultralytics> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with enhanced training scripts, augmented datasets or augmentation pipelines, evaluation reports showing improved detection in low-light VR scenes, and a detailed README.

**Stretch goal:** Prototype an on-device lightweight detection model optimized for VR headsets to reduce cloud latency.

_The DISCOVR dataset and VRSight code are partially available via the MadisonAbilityLab GitHub repository, but the dataset is not fully public; proxy datasets or simulated VR screenshots are needed for training and evaluation._
