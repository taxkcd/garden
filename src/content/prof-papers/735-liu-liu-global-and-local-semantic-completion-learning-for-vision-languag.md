---
title: "735 · Global and Local Semantic Completion Learning for Vision-Language Pre-training — Liu Liu"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-liu-liu"
source_hash: "6cca2d5d271213b5847927ca9d13c0011cc8a4d1dd16e185758123d4c4275080"
sequence: 735
generator: "outreach-garden: managed"
---

# 735 · Global and Local Semantic Completion Learning for Vision-Language Pre-training

## At a glance

- **Professor:** Liu Liu
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Global and Local Semantic Completion Learning for Vision-Language Pre-training](https://arxiv.org/pdf/2306.07096)
- **Authors:** Rong-Cheng Tu, Yatai Ji, Jie Jiang, Weijie Kong, Chengfei Cai, Wenzhe Zhao, Hongfa Wang, Yujiu Yang, Wei Liu
- **Year:** 2023

## Paper overview

This paper proposes a new method to improve vision-language pre-training models by enabling them to better understand and align information from images and text. The method, called Global and Local Semantic Completion Learning (GLSCL), helps the model recover missing global and local semantic information in masked image or text data by leveraging cross-modal interactions. This leads to better performance on tasks like visual question answering, image-text retrieval, and video-text retrieval.

### Why it matters

**Research problem:** Existing vision-language pre-training models focus mainly on reconstructing masked local tokens (image patches or text tokens) but neglect recovering missing global semantic information, which limits the model's ability to align global and local features across modalities effectively.

**Why it matters:** Global semantic features are crucial for downstream vision-language tasks because they represent the overall meaning of the data. Without accurate global-local alignment, models perform suboptimally on tasks requiring deep understanding and cross-modal reasoning, such as visual question answering and retrieval.

**Key contributions:**

- Proposed MGSC to enhance global-local alignment by recovering global semantic features of masked data via cross-modal interactions.
- Introduced MLTC to improve local-local alignment by reconstructing masked tokens using fused multimodal semantic features.
- Developed ALIGN-BENCH, a manually annotated benchmark to quantitatively evaluate cross-modal alignment.
- Designed a flexible vision encoder capable of handling both image-text and video-text multimodal tasks.
- Demonstrated state-of-the-art performance on multiple vision-language downstream tasks including visual question answering, image-text retrieval, and video-text retrieval.

## About the professor

**Liu Liu** — Assistant Professor, Department of Electrical, Computer, and Systems Engineering; Department of Computer Science, Rensselaer Polytechnic Institute.

Research interests: Elastic AI Computing systems and architecture design

### Research links

- [Faculty/profile page](https://liuliu-cs.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Vision-Language Representation Learning
**The paper assumes:** vision-language representation learning, multimodal deep learning, cross-modal alignment techniques
**Already in this field?** Skip this entirely if you already understand foundational methods and architectures for learning joint vision-language representations and cross-modal alignment.

To understand the Global and Local Semantic Completion Learning (GLSCL) paper, it is essential to grasp vision-language representation learning, which covers how models jointly encode and align visual and textual data. The rigorous course offers a deep, structured dive into foundational and advanced concepts in vision and language modeling, while the fast track provides a concise, focused introduction suitable for quickly building relevant intuition and background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1-8 plus Lecture 16, about 10.5 hours — covering foundational deep learning for vision, CNNs, attention and transformers, and the specific vision-language lecture to understand cross-modal semantic alignment.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 includes a dedicated lecture on Vision and Language (Lecture 16) that covers multimodal representation learning, cross-modal alignment, and fusion architectures, directly relevant to understanding GLSCL's approach.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [9.3 - Knowledge Representation](https://www.youtube.com/playlist?list=PLAXUYU7PbJhi18Iyxr0xaHI8JJXlHnuTq) — Engineering Student · 8 videos · 1.3h across 8 episodes

**Watch only this:** Episodes 1-4, about 36 minutes — focusing on semantic networks, frames, and propositional logic relevant to semantic representation and reasoning.

*Why it unblocks this paper:* The '9.3 - Knowledge Representation' playlist offers concise, clear explanations of semantic networks and knowledge representation concepts that underpin semantic completion and alignment in vision-language models, providing a quick conceptual foundation.

*If you want all of it:* 1.3 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Global and Local Semantic Completion Learning for Vision-Language Pre-training,' start by building foundational knowledge on vision-language pre-training, masked token modeling, cross-modal representation learning, and multimodal fusion architectures. These topics provide the necessary background on how vision and language modalities are jointly modeled and how masked reconstruction tasks work. Finally, focus on the paper's core concept of global and local semantic completion, which is the novel method proposed, to grasp the specific contributions and innovations of the work.

### Vision-language pre-training *(prerequisite)*
This section covers foundational knowledge on vision-language pre-training models, which jointly learn representations from images and text. Understanding this will provide context on the goals and challenges of aligning visual and textual modalities, which the paper aims to improve.

*How the paper uses it:* The paper builds on vision-language pre-training to enhance semantic alignment and recovery across modalities.

▶ [Harvard Medical AI: Sameer Sundrani presents "Oscar: ... Pre-training for Vision-Language Tasks"](https://www.youtube.com/watch?v=IS-Cm7d5SqE) — Harvard Medical AI | Rajpurkar Lab · 17:22 · 4y ago

### Masked token modeling *(prerequisite)*
Masked token modeling is a key technique underlying the reconstruction tasks in GLSCL, where parts of the input (image patches or text tokens) are masked and the model learns to predict them. This section explains the principles and mechanisms of masked modeling, crucial for understanding the MGSC and MLTC tasks.

*How the paper uses it:* The paper's MGSC and MLTC tasks rely on masked token modeling to recover global and local semantic information.

▶ [Training BERT #1 - Masked-Language Modeling (MLM)](https://www.youtube.com/watch?v=q9NS5WpfkrU) — James Briggs · 16:24 · 5y ago

### Cross-modal representation learning *(prerequisite)*
Cross-modal representation learning focuses on how to learn aligned and fused representations from different modalities such as vision and language. This knowledge is essential to understand how GLSCL achieves better global-local and local-local alignment through cross-modal interactions.

*How the paper uses it:* GLSCL improves cross-modal alignment by leveraging cross-modal interactions for semantic completion.

▶ [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — Stanford MedAI · 1:01:58 · 4y ago

### Multimodal fusion architectures *(prerequisite)*
This section explains architectures that fuse information from multiple modalities, enabling interaction and joint reasoning. Understanding fusion encoder designs is critical to grasp how GLSCL's cross-fusion architecture supports global and local semantic completion.

*How the paper uses it:* The paper uses a fusion encoder to enable cross-modal interactions for semantic completion learning.

▶ [Fusion of Multi-Modal Data Stream for Clinical Event Prediction - Imon Banerjee, PhD](https://www.youtube.com/watch?v=3DroMVNb2vg) — Stanford AIMI · 56:23 · Streamed 5y ago

### Global and local semantic completion
This is the core concept of the paper, proposing a novel method to recover missing global and local semantic information in masked vision-language data. Understanding semantic completion and its role in improving cross-modal alignment is key to appreciating the paper's contributions.

*How the paper uses it:* GLSCL's main innovation is the global and local semantic completion learning framework for vision-language pre-training.

▶ [Lecture 11 – Semantic Parsing | Stanford CS224U: Natural Language Understanding | Spring 2019](https://www.youtube.com/watch?v=C5bdflsg7rs) — Stanford Online · 1:07:05 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential for understanding the GLSCL paper, starting with vision-language pre-training to grasp the overall goal of aligning visual and textual data. Next, it covers masked token modeling, a key technique for reconstructing missing information, followed by cross-modal representation learning to understand how features from different modalities are aligned and fused. Then, it explains multimodal fusion architectures that enable these cross-modal interactions. Finally, it focuses on the core method of global and local semantic completion, the novel contribution of the paper, to see how it improves semantic alignment and recovery.

### Vision-language pre-training *(prerequisite)*
Vision-language pre-training involves training models to understand and align information from both images and text, enabling them to perform tasks like image captioning and visual question answering. This foundational knowledge helps you understand the context and goals of GLSCL, which builds on these ideas to improve cross-modal alignment.

*How the paper uses it:* GLSCL builds on vision-language pre-training by proposing new tasks to better align and recover semantic information across modalities.

▶ [[VLP Tutorial @ CVPR 2022] Recent Advances in Vision-and-Language Pre-training](https://www.youtube.com/watch?v=QxgPhK0btvk) — Microsoft Research · 10:53 · 4y ago

### Masked token modeling *(prerequisite)*
Masked token modeling is a technique where parts of the input (tokens) are hidden and the model learns to predict or reconstruct them, helping it understand context and semantics deeply. This approach underlies GLSCL’s tasks that reconstruct missing image patches or text tokens to improve understanding.

*How the paper uses it:* GLSCL uses masked token modeling to reconstruct local tokens and recover global semantic features in vision and language data.

▶ [Training BERT #1 - Masked-Language Modeling (MLM)](https://www.youtube.com/watch?v=q9NS5WpfkrU) — James Briggs · 16:24 · 5y ago

### Cross-modal representation learning *(prerequisite)*
Cross-modal representation learning focuses on creating shared feature spaces where data from different modalities (like images and text) can be compared and aligned. Understanding this helps grasp how GLSCL aligns global and local features across vision and language.

*How the paper uses it:* GLSCL improves cross-modal alignment by learning representations that capture both global and local semantics from images and text.

▶ [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — Stanford MedAI · 1:01:58 · 4y ago

### Multimodal fusion architectures *(prerequisite)*
Multimodal fusion architectures combine information from different data types (e.g., vision and language) into a unified representation, enabling models to reason across modalities. This is crucial for GLSCL’s fusion encoder that facilitates cross-modal interactions.

*How the paper uses it:* GLSCL employs a fusion encoder architecture to integrate visual and textual features for semantic completion tasks.

▶ [The Multimodal Revolution: How AI Sees, Hears, and Thinks (Early vs. Late Fusion)](https://www.youtube.com/watch?v=i0cUrPw8r9c) — Future Simplified With AI · 7:23 · 10mo ago

## Already in your library

- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Stanford CS229 Machine Learning | Spring 2026 | Lecture 12: Representation Learning](https://www.youtube.com/watch?v=_kREM2UAiJ8) — also for: WNet: Discrete Wavelets Transform for Efficient Token Mixing (Abdou Youssef)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Multimodal fusion explained: how machines learn to “see, hear, and understand” together](https://www.youtube.com/watch?v=eg9PSb7FoYU) — also for: Zero-Shot Relational Learning for Multimodal Knowledge Graphs (Shichao Pei)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the GLSCL paper. Starting with a beginner-level project that reproduces a key mechanism of masked token reconstruction, moving to an intermediate project that runs and extends the authors' released code on a public dataset, and culminating in an advanced project that addresses a stated limitation by exploring robustness to noisy vision-language pairs. Each project is grounded in a specific contribution or limitation from the paper and leverages the applicant's existing skills and tools.

### Beginner — Masked Local Token Completion on Image-Text Pairs
*Effort: a weekend, ~8 hours*

You build a simplified masked token reconstruction pipeline that implements the MLTC (Masked Local Token Completion) task on a small subset of image-text data. Using a pre-trained vision encoder and text encoder (e.g., CLIP or similar), you mask local tokens in images or text and reconstruct them using fused multimodal features. This project focuses on reproducing the local token reconstruction mechanism without the full GLSCL architecture.

**Why it shows you understood the paper:** This project demonstrates your grasp of the MLTC pre-training task, a core component of GLSCL that improves local-local alignment by reconstructing masked tokens with multimodal fusion. A professor would see you understand how local semantic completion contributes to vision-language alignment.

**Grounded in:** Introduced MLTC to improve local-local alignment by reconstructing masked tokens using fused multimodal semantic features (Section 3.1).

**Tech stack:** Python 3.11, PyTorch, transformers, OpenCV, Jupyter Notebook

**Data:** Use a small public subset of Flickr30K or COCO captions and images as a substitute for the paper's data.

**Build it:**

1. Set up a Python environment with PyTorch and transformers.
2. Load a pre-trained vision encoder (e.g., CLIP ViT) and text encoder.
3. Implement a masking function to randomly mask local image patches or text tokens.
4. Fuse multimodal features from the unmasked modality to guide reconstruction of masked tokens.
5. Train a simple reconstruction head to predict masked tokens from fused features.
6. Evaluate reconstruction accuracy on the masked tokens and visualize some examples.

**Ships as:** A GitHub repo with code and a Jupyter notebook demonstrating masked local token completion on image-text pairs, including quantitative reconstruction metrics and visualizations.

**Stretch goal:** Add a simple cross-modal fusion encoder to improve reconstruction quality and compare results with and without fusion.

### Intermediate — Run and Extend GLSCL on Image-Text Retrieval
*Effort: 1-3 weekends*

You clone and run the authors' released GLSCL codebase from https://github.com/IIGROUP/SCL, reproduce their image-text retrieval results on Flickr30K or COCO datasets, and then extend the code by experimenting with different mask ratios or adding a simple ablation (e.g., removing MGSC or MLTC) to observe performance changes.

**Why it shows you understood the paper:** By running the official GLSCL implementation and modifying its core pre-training tasks, you demonstrate comprehension of both MGSC and MLTC contributions and their synergy in improving cross-modal alignment and retrieval performance.

**Grounded in:** Our code is available at https://github.com/IIGROUP/SCL. MGSC pre-training improves performance on VQA2.0 and NLVR2, and GLSCL (MGSC + MLTC) achieves the best results on most downstream tasks (Section 4.2.1).

**Tech stack:** Python 3.11, PyTorch, CUDA, Git, Flickr30K or COCO dataset

**Data:** Use the publicly available Flickr30K or COCO image-text datasets as in the paper's experiments.

**Build it:**

1. Clone the GLSCL repository from https://github.com/IIGROUP/SCL.
2. Set up the environment and dependencies as per the repo instructions.
3. Download and preprocess the Flickr30K or COCO dataset for image-text retrieval.
4. Run the pre-training and fine-tuning scripts to reproduce baseline results.
5. Modify mask ratios or disable MGSC or MLTC tasks to create ablation variants.
6. Evaluate and compare retrieval metrics (e.g., Recall@1, Recall@5) across variants.

**Verified links from the paper:**

- <https://github.com/IIGROUP/SCL> — released by the paper's authors

**Ships as:** A forked GitHub repo with documented experiments reproducing GLSCL results and ablation studies, including plots and metric tables in the README.

**Stretch goal:** Add a simple visualization of cross-modal attention maps to illustrate global-local alignment improvements.

### Advanced — Robust GLSCL Pre-training with Noisy Vision-Language Pairs
*Effort: a few weeks*

You extend the GLSCL framework to incorporate an online adaptive denoising mechanism that mitigates the impact of noisy or ambiguous vision-language pairs during pre-training. This addresses a key limitation noted in the paper. You implement a noise detection or weighting strategy during MGSC and MLTC tasks and evaluate the effect on downstream retrieval or VQA tasks using a noisy subset of Flickr30K or COCO.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of GLSCL, showing deep understanding of the model's assumptions and robustness challenges. It also demonstrates your ability to innovate on the original method and evaluate improvements.

**Grounded in:** The training assumes paired vision-language data are always semantically similar and different pairs are dissimilar, which may not hold due to noisy or ambiguous data pairs (Section 5). Future direction: developing online adaptive denoising methods to handle noisy or ambiguous pairs.

**Tech stack:** Python 3.11, PyTorch, CUDA, Git, Flickr30K or COCO dataset

**Data:** Use Flickr30K or COCO datasets with synthetic noise introduced by randomly mismatching some image-text pairs to simulate noisy data.

**Build it:**

1. Fork and set up the GLSCL codebase from https://github.com/IIGROUP/SCL.
2. Implement a noise detection or confidence weighting module that estimates pair reliability during pre-training.
3. Integrate this module into MGSC and MLTC pre-training tasks to adaptively weight or filter noisy pairs.
4. Create a noisy dataset variant by randomly mismatching a fraction of image-text pairs in Flickr30K or COCO.
5. Pre-train and fine-tune the modified GLSCL model on the noisy dataset and compare performance with the original model.
6. Analyze results to assess robustness improvements and document findings.

**Verified links from the paper:**

- <https://github.com/IIGROUP/SCL> — released by the paper's authors

**Ships as:** A GitHub repo with the extended GLSCL code, scripts to generate noisy data, evaluation results showing robustness gains, and a detailed README discussing methodology and outcomes.

**Stretch goal:** Explore more sophisticated masking strategies or fusion architectures to further improve semantic completion under noise.
