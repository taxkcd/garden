---
title: "192 · MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images — Shayok Chakraborty"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shayok-chakraborty"
source_hash: "4ff9b327fdec738bfbafa44e72c57c6e6d17c0842f769e1d4d5ceb658b7fb617"
sequence: 192
generator: "outreach-garden: managed"
---

# 192 · MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images

## At a glance

- **Professor:** Shayok Chakraborty
- **Institution:** Florida State University
- **Paper:** [MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images](https://doi.org/10.18653/v1/2025.findings-emnlp.544)
- **Authors:** Debanjan Goswami, Ronast Subedi, Shayok Chakraborty
- **Year:** 2025

## Paper overview

This paper presents MediVLM, a vision-language model designed to automatically generate detailed radiology reports from medical images such as chest X-rays. The model can operate even without paired image-report training data by generating pseudo-reports, and it also computes a severity score to prioritize patients needing urgent care. Extensive experiments show that MediVLM outperforms existing methods in generating accurate and clinically relevant reports.

### Why it matters

**Research problem:** Automating the generation of accurate, complete, and clinically relevant radiology reports from medical images is challenging due to incomplete or inconsistent outputs from existing methods, difficulty in focusing on informative image regions, and the scarcity of annotated training data.

**Why it matters:** Radiology report generation can reduce the workload of radiologists, address the shortage of trained professionals, expedite clinical workflows, and improve healthcare quality by providing timely and accurate diagnostic information.

**Key contributions:**

- Proposed MediVLM, a vision-language model that generates radiology reports from medical images with superior performance.
- Developed an unsupervised training framework allowing report generation without paired image-report data, addressing the scarcity of annotated reports.
- Introduced a severity score computation from generated reports to quantify patient condition criticality for prioritization.
- Conducted extensive empirical evaluations on three benchmark datasets, including a French-language dataset, demonstrating MediVLM's effectiveness.

## About the professor

**Shayok Chakraborty** — Associate Professor, Department of Computer Science, Florida State University.

Research interests: Machine Learning, Computer Vision, AI for Healthcare

### Research links

- [Faculty/profile page](https://shayokch.com)
- [Resolved homepage](https://www.cs.fsu.edu/~shayok/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MediVLM paper, start by building foundational knowledge on the key techniques it employs: contrastive learning for aligning visual and textual embeddings, transformer-based natural language generation for report synthesis, medical image object detection for extracting salient regions, and ClinicalBERT for specialized clinical text embeddings. After establishing these prerequisites, focus on the core concept of vision-language models tailored for medical imaging, which directly relates to the paper's approach. This progression ensures a comprehensive grasp of both the underlying methods and their application in MediVLM.

### Contrastive learning deep learning *(prerequisite)*
Contrastive learning is a pivotal technique used in MediVLM to align visual and textual embeddings by pulling matching pairs closer and pushing non-matching pairs apart in the embedding space. Understanding its principles and implementation nuances is essential for grasping how MediVLM achieves effective multimodal representation alignment.

*How the paper uses it:* MediVLM uses contrastive learning to align visual and textual embeddings for radiology report generation.

▶ [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — Stanford Online · 1:17:33

### Transformers natural language generation *(prerequisite)*
Transformers, especially decoder architectures like GPT-2, are fundamental for generating coherent and contextually relevant natural language text. Familiarity with transformer mechanisms, attention, and their application in language generation is crucial to understand how MediVLM produces detailed radiology reports from fused embeddings.

*How the paper uses it:* MediVLM employs a fine-tuned GPT-2 transformer decoder to generate radiology reports from fused visual-textual embeddings.

▶ ["Transformers in Natural Language Processing & Beyond" by Justin Joyce](https://www.youtube.com/watch?v=1NMcjg2t8Hk) — Scientific Computing Software (HHMI Janelia) · 3 years ago

### Medical image object detection *(prerequisite)*
Object detection in medical imaging, particularly using models like Faster R-CNN, enables the extraction of salient anatomical regions critical for focused analysis. Understanding these detection techniques helps in appreciating how MediVLM selectively processes image patches to improve report accuracy.

*How the paper uses it:* MediVLM uses Faster R-CNN to extract salient anatomical regions from chest X-rays for better report generation.

▶ [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — Stanford University School of Engineering · 1:14:26

### ClinicalBERT medical text embeddings *(prerequisite)*
ClinicalBERT is a domain-specific adaptation of BERT pretrained on clinical text, providing embeddings that capture medical semantics more effectively than general-purpose models. Understanding ClinicalBERT's design and benefits is key to appreciating its role in enhancing the clinical relevance of MediVLM's generated reports.

*How the paper uses it:* MediVLM uses ClinicalBERT as the text encoder to improve clinical relevance of generated radiology reports.

▶ [ClinicalBERT Pretraining BERT on clinical text Paper ...](https://www.youtube.com/watch?v=KT18WgZhtRo) — AI WITH Rithesh · 13:37

### Vision-language models medical imaging
Vision-language models integrate visual and textual modalities to perform tasks like image captioning and report generation. In the medical imaging domain, these models must handle domain-specific challenges such as limited paired data and clinical accuracy. Studying advanced talks on vision-language models tailored for medical imaging provides direct insight into the state-of-the-art approaches, including the methods similar to or inspiring MediVLM.

*How the paper uses it:* MediVLM is a vision-language model designed specifically for generating radiology reports from medical images.

▶ [MONAI Multi-Modal and M3: A Vision Language Model for ...](https://www.youtube.com/watch?v=ApPVTuEtBjc) — Project MONAI · 30:03

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundational concepts of contrastive learning and transformers for natural language generation, as these are key techniques used in MediVLM. Then, learn about medical image object detection and ClinicalBERT embeddings to grasp how the model processes medical images and clinical text. Finally, explore vision-language models specialized for medical imaging to see how these components integrate to generate radiology reports.

### Transformers natural language generation *(prerequisite)*
Transformers are deep learning architectures that excel at processing sequences, especially text, by using attention mechanisms to capture context. They are widely used for generating coherent and contextually relevant natural language outputs.

*How the paper uses it:* MediVLM employs a fine-tuned GPT-2 transformer decoder to generate detailed radiology reports from fused visual and textual embeddings.

▶ [What are Transformers (Machine Learning Model)?](https://www.youtube.com/watch?v=ZXiruGOCn9s) — IBM Technology · 4 years ago

### Medical image object detection *(prerequisite)*
Object detection in medical imaging involves identifying and localizing important anatomical regions or abnormalities within images, which helps focus analysis on clinically relevant areas. Faster R-CNN is a popular model for this task, extracting salient patches for downstream processing.

*How the paper uses it:* MediVLM uses Faster R-CNN to extract salient anatomical regions from chest X-rays, improving the quality of visual features used for report generation.

▶ [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — Stanford University School of Engineering · 1:14:26

### ClinicalBERT medical text embeddings *(prerequisite)*
ClinicalBERT is a version of the BERT language model pretrained on clinical text, enabling it to generate embeddings that capture medical terminology and context more effectively than general-purpose models.

*How the paper uses it:* MediVLM uses ClinicalBERT to encode radiology reports, enhancing the clinical relevance and accuracy of the generated text.

▶ [ClinicalBERT Pretraining BERT on clinical text Paper ...](https://www.youtube.com/watch?v=KT18WgZhtRo) — AI WITH Rithesh · 13:37

### Vision-language models medical imaging
Vision-language models combine visual and textual data to perform tasks like image captioning or report generation by learning joint representations. In medical imaging, these models generate detailed reports by understanding both the image content and clinical language.

*How the paper uses it:* MediVLM is a vision-language model specifically designed to generate radiology reports from chest X-rays, integrating visual and textual embeddings with cross-attention and transformer decoding.

▶ [MONAI Multi-Modal and M3: A Vision Language Model for ...](https://www.youtube.com/watch?v=ApPVTuEtBjc) — Project MONAI · 30:03

## Already in your library

- [What is vLLM? Efficient AI Inference for Large Language Models](https://www.youtube.com/watch?v=McLdlg5Gc9s) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)
- [Contrastive learning explained | Ishan Misra and Lex Fridman](https://www.youtube.com/watch?v=bDfqtxKEThI) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
