---
title: "921 · Audio Visual Segmentation Through Text Embeddings — Zhiyao Duan"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhiyao-duan"
source_hash: "f1b1aa30712ac4aba269e232fe787c01f832389e9388330f8cca2befee5d2647"
sequence: 921
generator: "outreach-garden: managed"
---

# 921 · Audio Visual Segmentation Through Text Embeddings

## At a glance

- **Professor:** Zhiyao Duan
- **Institution:** University of Rochester
- **Paper:** [Audio Visual Segmentation Through Text Embeddings](https://arxiv.org/pdf/2502.16359)
- **Authors:** Kyungbok Lee, You Zhang, Zhiyao Duan
- **Year:** 2025

## Paper overview

This paper presents a new method for segmenting objects in videos that produce sound by linking audio and visual information through text embeddings. It uses a pre-trained segmentation model called Segment Anything Model (SAM) prompted by text embeddings derived from audio and visual features, improving the ability to accurately identify and segment sound sources in video frames despite limited labeled data.

### Why it matters

**Research problem:** The challenge is to accurately segment sounding source objects in video frames (audio-visual segmentation) despite the scarcity of finely annotated audio-visual datasets, which limits the learning of audio-visual correspondence.

**Why it matters:** Audio-visual segmentation is important for applications requiring precise identification of sound sources in videos, such as interactive music systems, augmented reality, and multimedia understanding. Overcoming data scarcity and improving segmentation accuracy can advance these fields.

**Key contributions:**

- Proposed AV2T-SAM framework that uses text-prompted SAM by projecting audio and visual features into a text embedding space to leverage rich semantic information from large-scale pre-trained cross-modal encoders.
- Introduced the fCLIP ⊙ fCLAP feature that captures the intersection of audio and visual modalities, emphasizing shared semantics and filtering irrelevant information for better segmentation.
- Demonstrated a vision bias in the AVSBench S4 dataset by outperforming previous state-of-the-art methods without using any audio information.

## About the professor

**Zhiyao Duan** — Professor, Department of Electrical and Computer Engineering (primary), Department of Computer Science (secondary), Goergen Institute for Data Science (affiliated), University of Rochester.

Research interests: My research interests lie primarily in the emerging area of Computer Audition, which is about designing intelligent algorithms and systems that can understand sounds, including music, speech and environmental sounds. This is an interdisciplinary area that draws from many fields including signal processing, machine learning, psychoacoustics, music theory, etc. Specific problems that I have been working on include automatic music transcription, sound source separation, audio-score alignment, music annotation and recommendation, speech enhancement and emotion analysis, sound retrieval, and audio-visual analysis of music performances.

### Research links

- [Faculty/profile page](https://hajim.rochester.edu/ece/sites/zduan)
- [Lab website](https://labsites.rochester.edu/air/index.html)
- [Google Scholar](http://scholar.google.com/citations?user=pJmAoJ4AAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal representation learning, cross-modal embedding alignment, and deep learning for audio-visual tasks
**Already in this field?** Skip this entirely if you already understand how machine learning models learn and align representations from multiple data modalities such as audio, images, and text.

To understand the paper 'Audio Visual Segmentation Through Text Embeddings,' a solid grasp of multimodal machine learning is essential, especially how audio, visual, and text modalities are represented and aligned in shared semantic spaces. The rigorous course provides a deep, structured dive into multimodal representation and alignment, while the fast track offers a concise, intuition-driven introduction to the core concepts and challenges of multimodal machine learning, suitable for quickly building foundational understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Multimodal Machine Learning • Fall 2020 • \[CMU\]](https://www.youtube.com/playlist?list=PLPzcDv02-T2BToJy097AFhIXrNk2qjHD9) — Sattwik Biswal · 14 videos · 15.8h across 14 episodes

**Watch only this:** Lectures 1.1: Introduction, 4.1: Multimodal Representations, 4.2: Coordinated Representations, 5.1: Multimodal Alignment, and 5.2: Alignment and Representation — about 5.5 hours total, focusing on the core concepts of multimodal representation and alignment crucial for understanding the paper's methodology.

*Why it unblocks this paper:* This Carnegie Mellon University course on Multimodal Machine Learning covers foundational concepts, multimodal representations, and alignment techniques, directly relevant to the paper's approach of projecting audio and visual features into a shared text embedding space and leveraging cross-modal encoders like CLIP and CLAP.

*If you want all of it:* 15.8 hours across all 14 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ms. Coffee Bean's Multimodalities](https://www.youtube.com/playlist?list=PLpZBeKTZRGPNKxoNaeMD9GViU_aH_HJab) — AI Coffee Break with Letitia · 15 videos · 2.7h across 15 episodes

**Watch only this:** Episodes 1: What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition, 7: OpenAI’s CLIP explained! | Examples, links to code and pretrained model, and 9: How cross-modal are vision and language models really? 👀 Seeing past words. [Own work] — about 30 minutes total, covering essential intuition and examples of multimodal embeddings and alignment.

*Why it unblocks this paper:* This short series by AI Coffee Break with Letitia provides clear, concise explanations of multimodal machine learning concepts, including cross-modal embeddings and challenges, which align well with the paper's focus on audio-visual-text embedding fusion and semantic alignment.

*If you want all of it:* 2.7 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Audio Visual Segmentation Through Text Embeddings," start by building foundational knowledge on the key pre-trained models and embeddings it leverages: the Segment Anything Model (SAM) for segmentation, CLIP for visual-text embeddings, and CLAP for audio-text embeddings. Then, study the core concept of multimodal semantic alignment, which is central to the novel fusion feature fCLIP ⊙ fCLAP introduced in the paper. Finally, conclude with a direct paper talk or related advanced research talk to grasp the authors' novel AV2T-SAM framework and their findings in audio-visual segmentation.

### Segment Anything Model text prompting *(prerequisite)*
Understanding SAM is crucial as it is the backbone segmentation model used in the paper. SAM is a large-scale pre-trained model designed for promptable segmentation, including text prompts, which the paper leverages by projecting audio features into its text embedding space. A detailed, academic-level talk explaining SAM's architecture, capabilities, and usage will provide the necessary background.

*How the paper uses it:* The paper builds on SAM by projecting audio features into its text embedding space for segmentation.

▶ [Segment Anything Model (SAM) - Open Sourced!](https://www.youtube.com/watch?v=KP0LGE5Qrlw) — Rob Mulla · 1:00:06 · Streamed 3y ago

### CLIP visual text embeddings *(prerequisite)*
CLIP is a foundational model that aligns images and text in a shared semantic space, enabling zero-shot visual recognition. The paper uses CLIP to extract visual embeddings that are then fused with audio embeddings. A rigorous, research-focused explanation of CLIP's training and embedding mechanisms is essential to understand the visual feature projection.

*How the paper uses it:* The paper uses CLIP to obtain visual embeddings projected into the shared semantic space.

▶ [OpenAI CLIP: ConnectingText and Images (Paper Explained)](https://www.youtube.com/watch?v=T9XSU0pKX2E) — Yannic Kilcher · 48:07 · 5y ago

### CLAP audio text embeddings *(prerequisite)*
CLAP is a contrastive language-audio pretraining model that aligns audio with text embeddings, analogous to CLIP for images. The paper uses CLAP to extract audio embeddings that are fused with CLIP visual embeddings. An advanced talk by the CLAP authors or a detailed research seminar on CLAP is ideal to understand how audio features are embedded into text space.

*How the paper uses it:* The paper uses CLAP to extract audio embeddings projected into the shared semantic space.

▶ [Harmonai Hangouts: LAION-CLAP with Yusong Wu & Ke Chen](https://www.youtube.com/watch?v=R6dA-ai6qks) — Harmonai · 39:23 · 3y ago

### multimodal semantic alignment
Multimodal semantic alignment is the core concept behind the paper's novel fCLIP ⊙ fCLAP feature, which fuses audio and visual embeddings by emphasizing their shared semantics. Understanding the theoretical and practical aspects of multimodal alignment will clarify how the paper achieves improved audio-visual segmentation.

*How the paper uses it:* The fCLIP ⊙ fCLAP feature central to the paper relies on multimodal semantic alignment.

▶ [Lecture 4.1 - Multimodal Alignment (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=iSz0WAzyFHE) — LP Morency · 1:11:57 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Audio Visual Segmentation Through Text Embeddings,' start by learning about the foundational embedding models that map audio and visual data into a shared semantic space: CLIP for visual-text embeddings and CLAP for audio-text embeddings. Then, grasp the Segment Anything Model (SAM), which is the pre-trained segmentation backbone used in the paper. Finally, explore the core multimodal semantic alignment concept that fuses audio and visual embeddings to improve segmentation accuracy.

### CLIP visual text embeddings *(prerequisite)*
CLIP is a model that connects images and text by embedding them into a shared semantic space, enabling the model to understand visual concepts through natural language. Understanding CLIP helps grasp how visual features are projected into text embedding space, which is crucial for the paper's method of aligning visual data with audio via text embeddings.

*How the paper uses it:* The paper uses CLIP to project visual features into the text embedding space for semantic alignment with audio features.

▶ [How AI 'Understands' Images (CLIP) - Computerphile](https://www.youtube.com/watch?v=KcSXcpluDe4) — Computerphile · 18:05 · 2y ago

### CLAP audio text embeddings *(prerequisite)*
CLAP is an audio embedding model that aligns audio signals with natural language descriptions, embedding audio features into a semantic space similar to CLIP's for images. Learning about CLAP is essential to understand how the paper projects audio features into text embedding space to fuse with visual embeddings.

*How the paper uses it:* The paper uses CLAP to embed audio features into the text space to enable multimodal semantic alignment with visual features.

▶ [Harmonai Hangouts: LAION-CLAP with Yusong Wu & Ke Chen](https://www.youtube.com/watch?v=R6dA-ai6qks) — Harmonai · 39:23 · 3y ago

### Segment Anything Model text prompting *(prerequisite)*
SAM is a powerful pre-trained segmentation model that can segment objects in images based on prompts, including text prompts. Understanding SAM's architecture and how it uses text prompts to guide segmentation is key to grasping how the paper leverages SAM for audio-visual segmentation.

*How the paper uses it:* The paper builds on SAM by projecting audio and visual features into its text embedding space to prompt segmentation.

▶ [Segment Anything Model (SAM) - Open Sourced!](https://www.youtube.com/watch?v=KP0LGE5Qrlw) — Rob Mulla · 1:00:06 · Streamed 3y ago

### multimodal semantic alignment
Multimodal semantic alignment involves mapping different data modalities, such as audio and visual, into a shared semantic space to enable joint understanding and fusion. This concept is central to the paper's novel fCLIP ⊙ fCLAP feature, which fuses audio and visual embeddings by emphasizing their shared semantics for improved segmentation.

*How the paper uses it:* The paper introduces the fCLIP ⊙ fCLAP feature to align audio and visual embeddings semantically, enhancing segmentation accuracy.

▶ [Lecture 4.1 - Multimodal Alignment (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=iSz0WAzyFHE) — LP Morency · 1:11:57 · 2y ago

### paper talk *(paper-talk search result; attribution unverified)*
Hearing directly from authors or experts about the AV2T-SAM framework and its findings provides insight into the motivation, approach, and results of the paper. It helps consolidate understanding of how audio and visual modalities are fused through text embeddings for segmentation.

*How the paper uses it:* This paper talk covers the AV2T-SAM framework and its contributions to audio-visual segmentation through text embeddings.

▶ [Text Embeddings, Classification, and Semantic Search (w/ Python Code)](https://www.youtube.com/watch?v=sNa_uiqSlJo) — Shaw Talebi · 24:30 · 2y ago

## Already in your library

- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [SAM - Segment Anything Model by Meta AI: Complete Guide | Python Setup & Applications](https://www.youtube.com/watch?v=D-D6ZmadzPE) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Explaining the Segment Anything Model - Network architecture, Dataset, Training](https://www.youtube.com/watch?v=OhxJkqD1vuE) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Vector Databases simply explained! (Embeddings & Indexes)](https://www.youtube.com/watch?v=dN0lsF2cvm4) — also for: CactusDB: Unlock Co-Optimization Opportunities for SQL Queries and AI/ML Model Inferences (Jia Zou)
- [Introduction to Word Embedding | Static vs Dynamic Embedding | Deep Learning](https://www.youtube.com/watch?v=95eQCwQpS4k) — also for: Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM (Christopher Homan)
- [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — also for: Global and Local Semantic Completion Learning for Vision-Language Pre-training (Liu Liu)
- [Lecture 5.1: Multimodal Alignment (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=4P4qBBxpthg) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Semantic Layers in the Age of AI are 100% Needed](https://www.youtube.com/watch?v=K_VPF9URZo4) — also for: Semantic Data Processing with Holistic Data Understanding (Aditya G. Parameswaran)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the AV2T-SAM framework from the paper "Audio Visual Segmentation Through Text Embeddings." The beginner project focuses on reproducing the core semantic alignment feature (fCLIP ⊙ fCLAP) on a small scale, the intermediate project involves running and extending the authors' released AV2T-SAM code on the AVSBench dataset to reproduce key results, and the advanced project tackles a stated limitation by improving audio-visual fusion or addressing vision bias with a novel dataset or method extension.

### Beginner — Reproduce and Visualize fCLIP ⊙ fCLAP Semantic Alignment
*Effort: a weekend, ~8 hours*

You build a small Python notebook that extracts CLIP visual embeddings and CLAP audio embeddings from paired video frames and audio clips, then computes their element-wise multiplication to form the fCLIP ⊙ fCLAP feature. You visualize and compare these fused embeddings against individual CLIP and CLAP embeddings using dimensionality reduction (e.g., t-SNE) to show improved semantic alignment.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of semantic alignment between audio and visual modalities via the fCLIP ⊙ fCLAP feature, showing you can implement and analyze the core multimodal fusion mechanism.

**Grounded in:** Introduced the fCLIP ⊙ fCLAP feature that captures the intersection of audio and visual modalities, emphasizing shared semantics and filtering irrelevant information for better segmentation.

**Tech stack:** Python 3.11, PyTorch, OpenAI CLIP model, CLAP audio encoder (if available), scikit-learn, matplotlib, Jupyter Notebook

**Data:** Use a small publicly available video-audio pair dataset or simulate paired audio-visual samples with short clips and corresponding audio segments.

**Build it:**

1. Set up Python environment with PyTorch and install CLIP and CLAP models.
2. Load a small set of paired video frames and corresponding audio clips.
3. Extract CLIP visual embeddings from video frames and CLAP audio embeddings from audio clips.
4. Compute the element-wise multiplication of CLIP and CLAP embeddings to form fCLIP ⊙ fCLAP features.
5. Use t-SNE or PCA to reduce dimensionality and visualize CLIP, CLAP, and fused embeddings side-by-side.
6. Write a README explaining the semantic alignment concept and your observations.

**Ships as:** A Jupyter notebook and README showing embedding extraction, fusion, and visualization that confirms the semantic alignment benefit of fCLIP ⊙ fCLAP.

**Stretch goal:** Add a simple classification or clustering task using fused embeddings to show improved audio-visual semantic grouping.

### Intermediate — Run and Extend AV2T-SAM on AVSBench Dataset
*Effort: 1-3 weekends*

You clone and run the authors' AV2T-SAM codebase on the AVSBench dataset to reproduce segmentation results on Single Sound Source (S4) and Multi Sound Source (MS3) subsets. Then, you implement a simple baseline using only CLIP visual embeddings for segmentation and compare performance metrics (e.g., IoU). You document the impact of the fCLIP ⊙ fCLAP feature and adapter modules.

**Why it shows you understood the paper:** This project shows you can work with the authors' released code, understand the full AV2T-SAM pipeline, and critically evaluate the semantic alignment and adapter contributions on the benchmark dataset.

**Grounded in:** Proposed AV2T-SAM framework that uses text-prompted SAM by projecting audio and visual features into a text embedding space to leverage rich semantic information from large-scale pre-trained cross-modal encoders. Demonstrated a vision bias in the AVSBench S4 dataset by outperforming previous state-of-the-art methods without using any audio information.

**Tech stack:** Python 3.11, PyTorch, Segment Anything Model (SAM), CLIP, CLAP, Git, AV2T-SAM codebase from https://github.com/bok-bok/AV2T-SAM

**Data:** Use the AVSBench dataset as referenced in the paper (publicly available dataset for audio-visual segmentation).

**Build it:**

1. Clone the AV2T-SAM repository and install all dependencies.
2. Download and prepare the AVSBench dataset (S4 and MS3 subsets).
3. Run the pre-trained AV2T-SAM model to reproduce segmentation results and record metrics.
4. Implement a baseline segmentation using only CLIP visual embeddings without audio fusion.
5. Compare the baseline and AV2T-SAM results, focusing on the effect of fCLIP ⊙ fCLAP and adapter modules.
6. Write a detailed report and README explaining your reproduction and analysis.

**Verified links from the paper:**

- <https://github.com/bok-bok/AV2T-SAM> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run AV2T-SAM and baseline, plus a report comparing results and discussing semantic alignment and vision bias.

**Stretch goal:** Add ablation experiments disabling adapters or using only audio embeddings to further analyze fusion effects.

### Advanced — Mitigate Vision Bias in Audio-Visual Segmentation with Temporal Fusion
*Effort: a few weeks*

You extend the AV2T-SAM framework by incorporating temporal information across video frames to improve audio-visual fusion and reduce vision bias, especially on the Multi Sound Source (MS3) subset. You design or simulate a temporal fusion module (e.g., temporal adapters or attention) that better integrates audio and visual embeddings over time. You evaluate on AVSBench and analyze improvements over the original model.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by improving audio-visual fusion and tackling vision bias through temporal modeling, demonstrating research-level initiative and technical depth.

**Grounded in:** The model without adapter modules struggles on the Multi Sound Source dataset (MS3), indicating that audio-visual fusion is still challenging and adapters are beneficial. Future directions include extending the framework to incorporate temporal information and multi-source audio-visual segmentation.

**Tech stack:** Python 3.11, PyTorch, Segment Anything Model (SAM), CLIP, CLAP, Git, AV2T-SAM codebase from https://github.com/bok-bok/AV2T-SAM

**Data:** Use the AVSBench dataset (S4 and MS3 subsets) for evaluation; optionally simulate temporal sequences if needed.

**Build it:**

1. Study the AV2T-SAM codebase and understand the current fusion and adapter modules.
2. Design and implement a temporal fusion module (e.g., temporal attention or recurrent adapters) to integrate audio-visual embeddings across frames.
3. Integrate the temporal module into the AV2T-SAM pipeline.
4. Train or fine-tune the extended model on the AVSBench MS3 subset.
5. Evaluate segmentation performance and compare against the original AV2T-SAM results.
6. Analyze the impact on vision bias and audio-visual fusion quality, documenting findings in a detailed report.

**Verified links from the paper:**

- <https://github.com/bok-bok/AV2T-SAM> — released by the paper's authors

**Ships as:** A GitHub repo with the extended AV2T-SAM code including temporal fusion, evaluation scripts, and a comprehensive report discussing improvements and limitations.

**Stretch goal:** Explore creating or curating a small dataset with reduced vision bias to further validate your approach.

_The AVSBench dataset is required for intermediate and advanced projects; verify access and licensing before starting._
