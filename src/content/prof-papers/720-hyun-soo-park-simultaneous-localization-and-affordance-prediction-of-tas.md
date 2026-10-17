---
title: "720 · Simultaneous Localization and Affordance Prediction of Tasks from Egocentric Video — Hyun Soo Park"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hyun-soo-park"
source_hash: "f0f10679df7726ba3cb64d13fadb65e47fc2f9fb0df18257c267be26d2b4e20b"
sequence: 720
generator: "outreach-garden: managed"
---

# 720 · Simultaneous Localization and Affordance Prediction of Tasks from Egocentric Video

## At a glance

- **Professor:** Hyun Soo Park
- **Institution:** University of Minnesota
- **Paper:** [Simultaneous Localization and Affordance Prediction of Tasks from Egocentric Video](https://arxiv.org/pdf/2407.13856)
- **Authors:** Zach Chavis, Hyun Soo Park, Stephen J. Guy
- **Year:** 2025

## Paper overview

This paper presents a method to predict where in 3D space a person is likely to perform a given task based on a single first-person (egocentric) image and a natural language description of the task. The approach extends vision-language models (VLMs) by incorporating spatial understanding from egocentric video demonstrations, enabling robots to better navigate and interact in human environments by anticipating task locations and avoiding collisions.

### Why it matters

**Research problem:** Existing vision-language models can identify objects and actions visible in an image but cannot predict spatial locations of tasks beyond the image plane, limiting robots' ability to understand where tasks physically occur in 3D space from egocentric views.

**Why it matters:** Robots operating in human environments need to understand spatial affordances—where tasks can be performed—to navigate effectively and safely. Predicting these spatial task regions from limited egocentric views enables robots to assist humans and avoid interfering with their activities.

**Key contributions:**

- Extension of vision-language models to predict 3D spatial regions representing task location likelihood.
- Use of the EgoExo4D dataset to learn spatial affordances from egocentric human demonstrations in real kitchen environments.
- A training approach optimizing the model on spatial demonstrations of tasks across full environments.
- Introduction of 'task obstacles'—regions to help robots avoid areas where humans perform tasks.

## About the professor

**Hyun Soo Park** — Associate Professor, Computer Science & Engineering, University of Minnesota.

Research interests: 3D Computer Vision, Computer Vision, Multiview Geometry, Human Behavior Understanding

### Research links

- [Faculty/profile page](https://www-users.cs.umn.edu/~hspark)
- [Professor website](https://www-users.cse.umn.edu/~hspark)
- [Resolved homepage](https://www-users.cse.umn.edu/~hspark/)
- [Lab website](https://goo.gl/maps/9kQ6UQHzssR2)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Vision-language models and spatial reasoning
**The paper assumes:** vision-language model architectures, multimodal embedding spaces, spatial reasoning in computer vision, egocentric vision fundamentals
**Already in this field?** Skip this entirely if you already understand how vision-language models work and how spatial reasoning is integrated into multimodal AI systems.

This background playlist selection is designed to help you understand the integration of vision-language models with spatial reasoning, which is crucial for grasping the paper's method of predicting 3D task locations from egocentric images and natural language queries. Choose the rigorous course for a deep, structured academic foundation on transformers, large language models, and vision-language integration. Alternatively, the fast track offers a concise, visually intuitive explainer series that covers the evolution and core concepts of AI vision and language models, suitable for a quicker but still solid understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1 through 4 ("Transformer" through "LLM Training"), about 7 hours — these cover the transformer architecture, vision-language model basics, and training methods essential for understanding the paper's encoder-decoder network.

*Why it unblocks this paper:* Stanford CME295 covers transformers and large language models in depth, including the architecture and reasoning techniques that underpin vision-language models like CLIP, which are central to the paper's approach of encoding egocentric images and task queries.

*If you want all of it:* Approximately 16.2 hours across all 9 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [How AI Thinks & Learns (The Visual Evolution)](https://www.youtube.com/playlist?list=PLMi6HyB_xUIE) — Engineering Visualized · 7 videos · 1.4h across 7 episodes

**Watch only this:** Episodes 1 through 3 ("The Evolution of AI Intelligence", "The Story of Reinforcement Learning", "How AI Learned to See, Hear and Understand"), about 33 minutes — these episodes introduce the foundational concepts of vision-language integration and reasoning.

*Why it unblocks this paper:* The 'How AI Thinks & Learns (The Visual Evolution)' series provides clear, visual explanations of how AI evolved from separate vision and language models to integrated multimodal systems, offering intuition on vision-language models and reasoning relevant to the paper's contributions.

*If you want all of it:* Approximately 1.4 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on simultaneous localization and affordance prediction from egocentric video, start with foundational knowledge on multimodal encoder-decoder networks to grasp the neural architecture integrating vision and language. Next, build understanding of egocentric video processing as it is central to the input data modality. Then study 3D spatial affordance prediction concepts to appreciate how spatial task locations are modeled. Follow this with advanced vision-language model spatial reasoning to see how vision-language models are extended for spatial understanding. Finally, conclude with the authors' own talk or closely related research talks to get direct insights into their novel approach and results.

### Multimodal encoder decoder networks *(prerequisite)*
This section covers the neural network architectures that integrate vision and language inputs, specifically encoder-decoder models, which are foundational to the paper's approach. Understanding these models provides insight into how the paper's method encodes egocentric images and task queries to predict spatial distributions.

*How the paper uses it:* The paper uses an encoder-decoder neural network architecture to combine egocentric images and natural language task queries.

▶ [Guide to TRANSFORMERS ENCODER-DECODER Neural Network : A Step by Step Intuitive Explanation](https://www.youtube.com/watch?v=SP_365Wh4EY) — Datafuse Analytics · 17:36 · 3y ago

### Egocentric video understanding *(prerequisite)*
This section focuses on understanding first-person video data, which is the input modality for the paper's method. It covers challenges and methods for interpreting egocentric videos, crucial for learning spatial affordances from human demonstrations.

*How the paper uses it:* The paper processes egocentric video data to learn spatial task affordances from human demonstrations.

▶ [Robot Learning by Understanding Egocentric Videos](https://www.youtube.com/watch?v=4WznUQvDQEw) — Ai2 · 57:24 · 2y ago

### 3D spatial affordance prediction *(prerequisite)*
This section introduces the concept of predicting where tasks can be performed in 3D space, which is central to the paper's contribution. It includes spatial AI and spatial reasoning methods relevant to modeling task locations as spatial distributions.

*How the paper uses it:* The paper predicts 3D spatial regions representing where tasks are likely performed relative to the viewer.

▶ [Marc Pollefeys - ICCV-25 - 3D Spatial AI](https://www.youtube.com/watch?v=EKHfl0rqaQw) — Andrew Melnik · 31:19 · 10mo ago

### Vision language models spatial reasoning
This section delves into how vision-language models can be extended to incorporate spatial reasoning capabilities, a core innovation of the paper. It covers recent advances in grounding language and vision for spatial and temporal understanding.

*How the paper uses it:* The paper extends vision-language models by incorporating spatial understanding from egocentric video to predict task locations.

▶ [SpatialVLM: Endowing Vision-LanguageModels with Spatial Reasoning Capabilities, CVPR 2024](https://www.youtube.com/watch?v=nfp4yraguw4) — UVLL : UNIST Vision&Learning Lab · 11:58 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand how robots can predict where tasks happen in 3D space from first-person video and language instructions. We start with understanding egocentric video and its challenges, then cover how neural networks encode vision and language together, followed by spatial affordance prediction in 3D, and finally dive into how vision-language models are extended for spatial reasoning as used in the paper.

### Egocentric video understanding *(prerequisite)*
Egocentric video captures scenes from a first-person perspective, which presents unique challenges like limited field of view and dynamic viewpoints. Understanding how to process and interpret these videos is key to extracting meaningful spatial and task context from what the camera wearer sees.

*How the paper uses it:* The paper uses egocentric video as input to predict where tasks happen in 3D space from a single first-person image.

▶ [Robot Learning by Understanding Egocentric Videos](https://www.youtube.com/watch?v=4WznUQvDQEw) — Ai2 · 57:24 · 2y ago

### Multimodal encoder decoder networks *(prerequisite)*
Encoder-decoder neural networks transform inputs into a compressed representation (encoding) and then generate outputs (decoding), enabling integration of different data types like images and text. This architecture is fundamental for combining vision and language inputs to predict spatial task locations.

*How the paper uses it:* The paper’s model uses an encoder-decoder architecture to jointly process egocentric images and natural language task queries.

▶ [Sequence To Sequence Learning With Neural Networks| Encoder And Decoder In-depth Intuition](https://www.youtube.com/watch?v=jCrgzJlxTKg) — Krish Naik · 13:22 · 6y ago

### 3D spatial affordance prediction *(prerequisite)*
Spatial affordance prediction involves identifying where in 3D space certain tasks or interactions are possible, which is critical for robots to understand and navigate human environments safely and effectively.

*How the paper uses it:* The core contribution of the paper is predicting 3D spatial regions where tasks are likely performed from egocentric views.

▶ [Marc Pollefeys - ICCV-25 - 3D Spatial AI](https://www.youtube.com/watch?v=EKHfl0rqaQw) — Andrew Melnik · 31:19 · 10mo ago

### Vision language models spatial reasoning
Vision-language models combine visual and textual information to understand scenes and instructions, and extending them with spatial reasoning enables prediction of where tasks occur beyond the image plane, in 3D space.

*How the paper uses it:* The paper extends vision-language models by incorporating spatial understanding to predict task locations from egocentric images and language queries.

▶ [SpatialVLM: Endowing Vision-LanguageModels with Spatial Reasoning Capabilities, CVPR 2024](https://www.youtube.com/watch?v=nfp4yraguw4) — UVLL : UNIST Vision&Learning Lab · 11:58 · 2y ago

## Already in your library

- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [RI Seminar: Saurabh Gupta : Robot Learning by Understanding Egocentric Videos](https://www.youtube.com/watch?v=RdPftGBhN8c) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=L8HKweZIOmg) — also for: Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring (Monika Akbar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core idea: predicting 3D spatial task affordances from egocentric images and natural language queries. The beginner project reproduces a simple spatial prediction visualization using familiar tools. The intermediate project implements the paper's core neural network method on a small-scale or substitute dataset, comparing against a baseline. The advanced project extends the method to address a stated limitation by enabling online adaptation to new environments, showcasing research-level initiative and engineering skill.

### Beginner — Egocentric Image to 3D Task Location Heatmap
*Effort: a weekend, ~8 hours*

You build a simple web app that takes a single egocentric image and a natural language task description as input, then visualizes a 2D heatmap overlay representing the predicted spatial region where the task is likely performed relative to the viewer. The heatmap is a synthetic unimodal Gaussian centered in front of the camera to mimic the paper's spatial affordance concept.

**Why it shows you understood the paper:** This project shows you understand the paper's key concept of mapping egocentric views and task queries to spatial task location likelihoods, even if simplified. It demonstrates grasp of spatial affordance visualization and multimodal input handling.

**Grounded in:** Extension of vision-language models to predict 3D spatial regions representing task location likelihood.

**Tech stack:** TypeScript, React, CSS

**Data:** No real dataset needed; use sample egocentric images from public sources or placeholders and synthetic spatial heatmaps.

**Build it:**

1. Create a React app with a file input for an egocentric image and a text input for a task description.
2. Implement a simple function that generates a 2D Gaussian heatmap centered in front of the camera as a proxy for spatial affordance.
3. Overlay the heatmap semi-transparently on the uploaded image using CSS or canvas.
4. Add UI elements to adjust heatmap parameters (e.g., spread) to simulate spatial likelihood.
5. Document the app and explain how this mimics the paper's spatial affordance prediction.

**Ships as:** A GitHub repo with a React app that visualizes synthetic spatial task affordance heatmaps over egocentric images, with clear README linking to the paper's concept.

**Stretch goal:** Add simple natural language processing to parse task queries and adjust heatmap position heuristically (e.g., 'cutting' tasks appear near counters).

### Intermediate — Reimplementation of 3D Spatial Task Affordance Prediction
*Effort: 1-3 weekends*

You implement the core encoder-decoder neural network described in the paper that takes an egocentric image and a natural language task query and predicts a 3D spatial distribution of task location likelihood. You train and evaluate this model on a small-scale substitute dataset of egocentric kitchen images with synthetic or publicly available spatial annotations, comparing performance against a baseline vision-language similarity method.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main method from its description, understand multimodal encoder-decoder architectures, and evaluate spatial affordance prediction quantitatively, reflecting deep comprehension of the paper's core contribution.

**Grounded in:** The authors propose a neural network with an encoder-decoder architecture that takes an egocentric image and a natural language task query as input... Training uses annotated, localized egocentric video data from cooking activities in kitchens.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), OpenCV, NumPy

**Data:** Use a small subset of publicly available egocentric kitchen images (e.g., from EPIC-KITCHENS dataset) with synthetic spatial annotations created by you to simulate task locations, as the paper's EgoExo4D dataset is not publicly released.

**Build it:**

1. Prepare a small dataset of egocentric kitchen images with paired natural language task queries and synthetic 3D spatial location labels.
2. Implement an encoder that uses a pretrained CLIP vision encoder fine-tuned on your data and a frozen language encoder for task queries.
3. Build a decoder network that predicts a spatial distribution (e.g., a 3D heatmap or coordinate likelihood) relative to the camera.
4. Train the model end-to-end on your dataset with a suitable loss function (e.g., spatial likelihood loss).
5. Implement a baseline method that predicts task location based on vision-language similarity scores without spatial modeling.
6. Evaluate and compare localization error and task prediction accuracy between your model and the baseline.
7. Document the implementation, training process, and results with plots and metrics.

**Ships as:** A GitHub repo with code to train and evaluate the spatial affordance prediction model, including baseline comparison, dataset preparation scripts, and a detailed README linking to the paper.

**Stretch goal:** Add support for multiple natural language rephrasings of the same task and demonstrate prediction stability as in the paper.

### Advanced — Online Adaptation of Spatial Task Affordance Prediction in New Environments
*Effort: few weeks*

You extend the core spatial affordance prediction model to incorporate online learning or continual adaptation, enabling the model to update its predictions in real-time when deployed in a new environment. You simulate this by fine-tuning the model on a single demonstration from a new kitchen scene and evaluate the reduction in localization error, addressing the paper's limitation on generalization and fine-tuning requirements.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by implementing online learning for spatial affordance models, demonstrating your ability to innovate beyond the original work and apply continual learning techniques in robotics-relevant vision-language tasks.

**Grounded in:** Limitations include generalization to new environments and fine-tuning is required for new environments... Future directions include exploring online learning for continuous model adaptation from live observations.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), OpenCV, NumPy

**Data:** Use the same substitute dataset as the intermediate project, partitioned into seen and unseen environment subsets to simulate new environments for online adaptation.

**Build it:**

1. Implement a mechanism to fine-tune the pretrained spatial affordance model on a single or few task demonstrations from a new environment.
2. Design an online learning loop that updates model weights incrementally as new egocentric images and task annotations arrive.
3. Evaluate the model's localization error before and after online adaptation on unseen environment data.
4. Compare results to the baseline static model to quantify improvement.
5. Document the online adaptation approach, experimental setup, and results.
6. Optionally, implement a simple robot navigation simulation that uses updated spatial affordance predictions to avoid task obstacles.

**Ships as:** A GitHub repo demonstrating online adaptation of spatial task affordance prediction with evaluation scripts and a comprehensive README discussing the approach and results in context of the paper's limitations and future work.

**Stretch goal:** Extend the adaptation method to handle multimodal continual learning with multiple task types and environment changes.

_The paper's EgoExo4D dataset and code are not publicly released; substitute datasets or synthetic data must be used for intermediate and advanced projects._
