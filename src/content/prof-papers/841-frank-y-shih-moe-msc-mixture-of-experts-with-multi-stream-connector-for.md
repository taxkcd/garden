---
title: "841 · MoE-MSC: Mixture of Experts with Multi-Stream Connector for Modality-Aware Medical Image Captioning — Frank Y. Shih"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-frank-y-shih"
source_hash: "1522cd2e685f88562bd9d1811acf7b36a20b4e3ff02beead9334ad7f66885771"
sequence: 841
generator: "outreach-garden: managed"
---

# 841 · MoE-MSC: Mixture of Experts with Multi-Stream Connector for Modality-Aware Medical Image Captioning

## At a glance

- **Professor:** Frank Y. Shih
- **Institution:** NJIT
- **Paper:** [MoE-MSC: Mixture of Experts with Multi-Stream Connector for Modality-Aware Medical Image Captioning](https://dl.acm.org/doi/pdf/10.1145/3765612.3767248)
- **Authors:** Al Shahriar Rubel, Frank Y. Shih, Fadi P. Deek
- **Year:** 2025

## Paper overview

This paper presents MoE-MSC, a new AI model architecture designed to generate detailed and structured captions for medical images from different imaging types like CT, MRI, X-ray, and PET. The model uses a mixture of specialized experts and a multi-stream connector to better understand and describe images by focusing on modality, anatomical structures, regions of interest, and lesion impacts. It outperforms existing methods in accuracy and quality of captions.

### Why it matters

**Research problem:** Existing large vision-language models for medical image captioning treat images from different modalities uniformly, which can lead to poor captioning performance for some imaging types. There is a lack of modality-aware captioning models that dynamically specialize in generating captions tailored to various medical imaging modalities.

**Why it matters:** Medical image captioning is crucial for assisting radiologists and clinicians by providing automated, accurate, and detailed descriptions of medical images, which can improve diagnosis and patient care. Modality-aware captioning can enhance the relevance and precision of generated reports across diverse imaging types.

**Key contributions:**

- Introduction of MoE-MSC connector that bridges vision encoder and LLM for structured medical image captioning.
- Use of Mixture of Experts to specialize experts on different imaging modalities, activating only one expert during inference.
- Multi-Stream Connector with three cross-attention modules focusing on modality/structures, RoI and lesion findings, and local-global relationships.
- Extensive experiments demonstrating superior quantitative and qualitative performance over existing methods.
- High accuracy (99.96%) of the router in classifying imaging modalities.

## About the professor

**Frank Y. Shih** — Professor, Computer Science, NJIT.

Research interests: Image Processing, Information Security and Privacy, Biometrics Identification, Sensor Networks, Computer Vision, Solar Image Analysis, Computer Graphics

### Research links

- [Faculty/profile page](https://people.njit.edu/profile/shih)
- [Identity evidence](https://web.njit.edu/~shih)
- [Professor website](http://web.njit.edu/~shih/)
- [Resolved homepage](https://web.njit.edu/~shih/zlink/welcome.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Mixture of Experts models
**The paper assumes:** Mixture of Experts architectures, expert routing mechanisms, gating networks in deep learning
**Already in this field?** Skip this entirely if you already understand the principles and implementations of Mixture of Experts models in machine learning.

To understand the core innovation of the MoE-MSC paper, which is the Mixture of Experts (MoE) architecture and its routing mechanisms, this background will provide two viewing options. The rigorous course offers a deep dive into language modeling and architectures including MoE concepts, suitable for those wanting a comprehensive technical foundation. The fast track provides a focused, concise explanation of MoE models and related attention mechanisms, ideal for quickly grasping the essentials without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos

**Watch only this:** Lectures 1-3 (about 5.3 hours total) — covering Transformer basics, Transformer-based models and tricks, and the evolution to large language models, which together provide the necessary background on MoE and routing concepts.

*Why it unblocks this paper:* Stanford CME295 covers Transformers and Large Language Models with a focus on architecture and performance enhancements, including gating and routing mechanisms relevant to MoE. It is authoritative and concise, providing a solid conceptual overview in fewer lectures.

*If you want all of it:* All 9 episodes, approximately 16.2 hours, for a full course on Transformers and LLMs.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MoE-MSC paper, start with foundational concepts such as Mixture of Experts models, cross-attention mechanisms, and vision-language models, which underpin the architecture and methodology. Then, explore modality-aware medical image captioning to grasp the domain-specific challenges and finally, focus on the core concept of the MoE-MSC paper itself through an advanced, author-aligned talk on Mixture of Experts. This progression ensures a solid grasp of both the technical and application-specific aspects of the work.

### Mixture of Experts models *(prerequisite)*
Mixture of Experts (MoE) is a core technique enabling specialization within large models by routing inputs to expert subnetworks. Understanding MoE architectures, routing strategies, and training challenges is essential to appreciate how MoE-MSC dynamically activates modality-specific experts for medical image captioning.

*How the paper uses it:* MoE-MSC uses a Mixture of Experts to specialize experts on different imaging modalities, activating only one expert during inference.

▶ [Mixture of Experts (MoE) Introduction](https://www.youtube.com/watch?v=v7U21meXd6Y) — Vizuara · 29:59 · 1y ago

### Cross-attention mechanisms *(prerequisite)*
Cross-attention is fundamental in transformer architectures for integrating information from different modalities or sequences. In MoE-MSC, multiple cross-attention streams extract features relevant to modality, anatomical structures, and lesion relationships, making a detailed understanding of cross-attention critical.

*How the paper uses it:* The Multi-Stream Connector in MoE-MSC uses three cross-attention modules focusing on different aspects of the medical images.

▶ [Cross-Attention Explained: How Transformers Translate Any Language](https://www.youtube.com/watch?v=NYqJoypFncY) — Visual AI · 10:20 · 3mo ago

### Vision-language models *(prerequisite)*
Vision-language models combine visual encoders with language models to generate textual descriptions from images. Understanding their design and challenges, especially in medical imaging domains, provides context for how MoE-MSC integrates a vision encoder with a large language model for caption generation.

*How the paper uses it:* MoE-MSC bridges a vision encoder and a large language model to generate structured medical image captions.

▶ [MedAI #62: Vision-Language FMs for Medical Imaging | Christian Bluethgen & Pierre Chambon](https://www.youtube.com/watch?v=pSZDT5_EQj0) — Stanford MedAI · 1:06:09 · 3y ago

### Modality-aware medical image captioning
Modality-aware captioning tailors image descriptions to the specific imaging modality, addressing the limitations of uniform captioning approaches. This concept is central to MoE-MSC, which dynamically routes features to modality-specific experts to improve caption accuracy and relevance.

*How the paper uses it:* MoE-MSC addresses the lack of modality-aware captioning models by specializing experts for different imaging modalities.

▶ [Harvard Medical AI: Luca Weishaupt on "SMALLCAP: Image Captioning with Retrieval Augmentation"](https://www.youtube.com/watch?v=F564_kyq6ng) — Harvard Medical AI | Rajpurkar Lab · 18:12 · 3y ago

### MoE-MSC paper talk *(paper-talk search result; attribution unverified)*
A detailed, advanced explanation of Mixture of Experts architectures as applied in cutting-edge models provides direct insight into the mechanisms behind MoE-MSC. Although not a direct talk by the authors, this recent, in-depth video on MoE architectures aligns closely with the paper's core methodology and offers a rigorous understanding of the routing and expert specialization.

*How the paper uses it:* This video explains the Mixture of Experts architecture, which is the foundation of the MoE-MSC connector proposed in the paper.

▶ [Mixture of Experts Explained Visually: How Trillion-Parameter Models Actually Work](https://www.youtube.com/watch?v=9pbyKc8SI6w) — Visual AI · 29:07 · 2mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand the MoE-MSC paper, starting with the core technique of Mixture of Experts (MoE) models that enable modality-specific specialization. Next, it covers cross-attention mechanisms fundamental to the multi-stream connector's feature extraction. Then, it explains vision-language models to provide context for integrating visual encoders with large language models. Finally, it focuses on the paper's core concept of modality-aware medical image captioning, showing how the model tailors captions to different imaging modalities.

### Mixture of Experts models *(paper-talk search result; attribution unverified)*
Mixture of Experts (MoE) is a technique where multiple specialized models (experts) are trained, and a router dynamically selects which expert to use for each input. This approach allows models to scale efficiently and specialize in different data aspects, improving performance and reducing computational cost. Understanding MoE is key to grasping how MoE-MSC routes medical images to modality-specific experts.

*How the paper uses it:* MoE-MSC uses a Mixture of Experts to specialize experts on different imaging modalities, activating only one expert during inference.

▶ [Mixture of Experts Explained Visually: How Trillion-Parameter Models Actually Work](https://www.youtube.com/watch?v=9pbyKc8SI6w) — Visual AI · 29:07 · 2mo ago

### Cross-attention mechanisms *(prerequisite)*
Cross-attention is a mechanism in Transformer models that allows the decoder to focus on relevant parts of the encoder's output when generating each token. It works by computing attention scores between queries from the decoder and keys/values from the encoder, enabling context-aware generation. This is fundamental to the multi-stream connector in MoE-MSC, which uses multiple cross-attention streams to extract modality and lesion-related features.

*How the paper uses it:* The multi-stream connector in MoE-MSC uses three cross-attention modules to extract features relevant to modality, anatomical structures, and lesion relationships.

▶ [Cross-Attention Explained: How Transformers Translate Any Language](https://www.youtube.com/watch?v=NYqJoypFncY) — Visual AI · 10:20 · 3mo ago

### Vision-language models *(prerequisite)*
Vision-language models combine visual encoders and language models to generate text descriptions from images. They learn to align visual features with language representations, enabling tasks like image captioning. Understanding these models provides context for how MoE-MSC integrates a vision encoder with a large language model to produce structured medical image captions.

*How the paper uses it:* MoE-MSC bridges a vision encoder and a large language model to generate detailed captions for medical images.

▶ [MedAI #62: Vision-Language FMs for Medical Imaging | Christian Bluethgen & Pierre Chambon](https://www.youtube.com/watch?v=pSZDT5_EQj0) — Stanford MedAI · 1:06:09 · 3y ago

### Modality-aware medical image captioning
Modality-aware medical image captioning tailors the generation of image descriptions to the specific imaging modality (e.g., CT, MRI, X-ray), improving accuracy and relevance. This approach addresses the limitations of uniform captioning models by dynamically specializing captions based on modality characteristics.

*How the paper uses it:* MoE-MSC is a modality-aware captioning model that dynamically specializes in generating captions tailored to various medical imaging modalities.

▶ [Harvard Medical AI: Luca Weishaupt on "SMALLCAP: Image Captioning with Retrieval Augmentation"](https://www.youtube.com/watch?v=F564_kyq6ng) — Harvard Medical AI | Rajpurkar Lab · 18:12 · 3y ago

## Already in your library

- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 4: Mixture of experts](https://www.youtube.com/watch?v=LPv1KfUXLCo) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [A Visual Guide to Mixture of Experts (MoE) in LLMs](https://www.youtube.com/watch?v=sOPDGQjFcuM) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Mixture of Experts (MoE), Visually Explained](https://www.youtube.com/watch?v=0QQlYR1r6pQ) — also for: Gate the Filter, Not the Message: Node-Channel Mixtures for Pre-Propagation GNNs (Zhiru Zhang)
- [BLIP 2 Image Captioning Visual Question Answering Explained ( Hugging Face Space Demo )](https://www.youtube.com/watch?v=FK2Xvgu3R6g) — also for: Disentangling Fine-Tuning from Pre-Training in Visual Captioning with Hybrid Markov Logic (Deepak Venugopal)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [From Attention to Applications: Encoder, Decoder and Cross-Attention | Deep Learning](https://www.youtube.com/watch?v=sm2ZeDY8YDw) — also for: Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching (Pew-Thian Yap)
- [Cross-attention (NLP817 11.9)](https://www.youtube.com/watch?v=35jpRxa81Hc) — also for: Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching (Pew-Thian Yap)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Intuitively Understanding the Cross Entropy Loss](https://www.youtube.com/watch?v=Pwgpl9mKars) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [MedAI #134: Merlin: A Vision Language Foundation Model for 3D Computed Tomography | Ashwin Kumar](https://www.youtube.com/watch?v=XWmCkbpXOUw) — also for: Reconstructing Hand-Held Objects in 3D from Images and Videos (Georgia Gkioxari)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [LLMs Meet Robotics: What Are Vision-Language-Action Models? (VLA Series Ep.1)](https://www.youtube.com/watch?v=8dZUOo5xWFw) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the MoE-MSC paper. The beginner project focuses on reproducing and visualizing the modality classification router, a key component with high accuracy. The intermediate project involves running and extending the authors' released MoE-MSC code to evaluate captioning performance on a small public medical image dataset, gaining hands-on experience with the mixture of experts and multi-stream connector. The advanced project tackles a future direction by extending the MoE-MSC architecture to incorporate additional medical imaging modalities or pathologies, addressing scalability and clinical integration challenges.

### Beginner — Modality Router Visualization and Evaluation
*Effort: a weekend, ~8 hours*

You build a standalone Python script that implements a simplified version of the MoE-MSC router to classify medical image modalities (CT, MRI, PET, X-ray) using a small labeled sample dataset. You visualize the router's decision boundaries and compute classification accuracy to replicate the high accuracy claim.

**Why it shows you understood the paper:** This project demonstrates your grasp of the router's role in modality classification, a critical step in MoE-MSC that enables modality-aware captioning by routing features to specialized experts.

**Grounded in:** Router achieves 99.96% accuracy in modality classification on test data.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, numpy

**Data:** Use a small publicly available labeled medical image dataset with modality tags or simulate a small dataset with extracted features and modality labels to mimic the router input.

**Build it:**

1. Collect or simulate a small dataset of medical image features labeled by modality (CT, MRI, PET, X-ray).
2. Implement a simple classifier (e.g., logistic regression or small neural network) to act as the router.
3. Train the router on the dataset and evaluate classification accuracy.
4. Visualize decision boundaries or confusion matrix to illustrate router performance.
5. Write a README explaining the router's function in MoE-MSC and how your results compare to the paper.

**Ships as:** A GitHub repo with code to train and evaluate the modality router, visualization plots, and a README linking the router's role to the paper's claims.

**Stretch goal:** Add a simple user interface to upload an image feature vector and display the predicted modality with confidence scores.

### Intermediate — Run and Extend MoE-MSC on Public Medical Image Captions
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' released MoE-MSC code from https://github.com/alshahriarrubel/MoE-MSC, adapting it to a smaller public medical image captioning dataset (e.g., IU X-ray dataset). You reproduce key evaluation metrics like Exact Match and F1 score, then implement a simple ablation by disabling one cross-attention stream to observe performance impact.

**Why it shows you understood the paper:** This project shows you can operate the full MoE-MSC pipeline, understand its multi-expert and multi-stream design, and experimentally verify the contribution of the cross-attention streams as reported in the paper.

**Grounded in:** Ablation studies show that all three cross-attention streams contribute to improved captioning performance.

**Tech stack:** Python 3.11, PyTorch, transformers, numpy, pandas

**Data:** Use the IU X-ray dataset (publicly available) as a substitute for the paper's data to train and evaluate the model.

**Build it:**

1. Clone the MoE-MSC repository and install dependencies.
2. Download and preprocess the IU X-ray dataset for captioning tasks.
3. Run the MoE-MSC model training and evaluation pipeline on the dataset.
4. Implement an ablation by disabling one of the three cross-attention streams in the connector.
5. Compare evaluation metrics (Exact Match, F1) between full and ablated models.
6. Document your findings and relate them to the paper's ablation results.

**Verified links from the paper:**

- <https://github.com/alshahriarrubel/MoE-MSC> — released by the paper's authors

**Ships as:** A GitHub repo with instructions to run MoE-MSC on IU X-ray data, scripts for ablation experiments, evaluation results, and a README discussing the impact of cross-attention streams.

**Stretch goal:** Add a visualization of attention maps from each cross-attention stream to qualitatively show their focus areas.

### Advanced — Extending MoE-MSC for Additional Modalities and Clinical Integration
*Effort: 3+ weeks*

You extend the MoE-MSC architecture to incorporate an additional medical imaging modality not covered in the original paper (e.g., ultrasound) or expand lesion/pathology types. You retrain or fine-tune the mixture of experts and router to handle the new modality. Additionally, you prototype a simple clinical workflow integration by building a demo interface that inputs images and outputs structured captions, highlighting modality-aware outputs.

**Why it shows you understood the paper:** This project addresses the paper's future direction of scaling to more modalities and clinical integration, demonstrating your ability to adapt and extend complex AI architectures and consider practical deployment challenges.

**Grounded in:** Future directions: Scaling the architecture to train on significantly larger datasets covering more modalities, organs, and pathologies; exploring integration with clinical workflows.

**Tech stack:** Python 3.11, PyTorch, transformers, FastAPI, React, Docker

**Data:** Use a public dataset containing the additional modality (e.g., ultrasound images with captions) or simulate data with domain-appropriate features and captions for prototyping.

**Build it:**

1. Research and select an additional medical imaging modality dataset with captions or simulate one.
2. Modify the MoE-MSC router and expert modules to add a new expert specialized for the new modality.
3. Retrain or fine-tune the router and experts to classify and caption images including the new modality.
4. Build a simple web-based demo (FastAPI backend + React frontend) to input images and display generated captions.
5. Evaluate caption quality qualitatively and quantitatively if possible, comparing with baseline MoE-MSC.
6. Document challenges faced in scaling and clinical integration, and propose future improvements.

**Verified links from the paper:**

- <https://github.com/alshahriarrubel/MoE-MSC> — released by the paper's authors

**Ships as:** A GitHub repo with extended MoE-MSC code supporting the new modality, training scripts, a demo web app, evaluation results, and a detailed README discussing scalability and clinical workflow integration.

**Stretch goal:** Integrate user feedback collection in the demo to iteratively improve caption quality and clinical relevance.

_The paper's authors released code but no public dataset; the intermediate and advanced projects rely on substituting with publicly available medical image captioning datasets such as IU X-ray, which differ from the paper's proprietary data._
