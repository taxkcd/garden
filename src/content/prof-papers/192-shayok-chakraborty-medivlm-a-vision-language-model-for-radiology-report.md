---
title: "192 · MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images — Shayok Chakraborty"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shayok-chakraborty"
source_hash: "ce888bd9e875257b886676674d7461b278d2647462525e3d8173eb428cec61aa"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of MediVLM's approach to radiology report generation from medical images. The beginner project focuses on reproducing a key mechanism from the paper using your existing skills. The intermediate project involves reimplementing the core vision-language alignment and report generation method on a public chest X-ray dataset, adding a new skill in contrastive learning and transformers. The advanced project extends MediVLM's framework to a new medical imaging modality, addressing a stated limitation and exploring domain adaptation.

### Beginner — Salient Region Extraction and Visualization for Chest X-rays
*Effort: a weekend, ~8 hours*

You build a small pipeline that uses a pretrained Faster R-CNN model to extract salient anatomical regions from chest X-ray images and visualize these regions overlaid on the original images. You implement a simple script to load sample chest X-rays, run the detector, and display bounding boxes with labels.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key insight that focusing on salient anatomical regions improves report generation. A professor would see you understand the importance of region extraction as a preprocessing step in MediVLM.

**Grounded in:** Ablation studies show that passing only salient anatomical regions extracted by Faster R-CNN to the visual encoder improves all metrics compared to using the entire image.

**Tech stack:** Python 3.11, PyTorch, Torchvision, Matplotlib, OpenCV

**Data:** Use publicly available chest X-ray images from the NIH ChestX-ray14 dataset or a small sample of chest X-rays from MIMIC-CXR (publicly accessible).

**Build it:**

1. Set up a Python environment with PyTorch and Torchvision.
2. Load a pretrained Faster R-CNN model from Torchvision pretrained on COCO or a medical imaging variant if available.
3. Download or collect a small set of chest X-ray images.
4. Run the Faster R-CNN model on these images to detect salient regions (e.g., lungs, heart).
5. Visualize the detected bounding boxes overlaid on the original images with labels.
6. Write a README explaining the role of salient region extraction in MediVLM.

**Ships as:** A GitHub repository containing the extraction and visualization code, sample images with bounding boxes, and a README linking the implementation to the paper's ablation study on salient region extraction.

**Stretch goal:** Add a simple baseline visualization that shows the entire image without region extraction to contrast the effect.

### Intermediate — Reimplementation of MediVLM's Vision-Language Alignment and Report Generation
*Effort: 2 weekends, ~20 hours*

You reimplement the core MediVLM method by building a vision-language model that aligns chest X-ray image embeddings with clinical text embeddings using contrastive learning, followed by a transformer decoder to generate radiology reports. You train and evaluate on the IU X-Ray dataset, comparing your model's report generation quality against a simple image captioning baseline.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main approach from scratch, including contrastive embedding alignment and report generation, and evaluate using relevant metrics. It evidences your ability to apply vision-language modeling and transformers to medical imaging.

**Grounded in:** MediVLM uses a pretrained object detector (Faster R-CNN), a CLIP-ViT image encoder, and a ClinicalBERT text encoder aligned via contrastive learning, fused with cross-attention, and a GPT-2 decoder for report generation.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), Torchvision, Scikit-learn, NLTK or similar for evaluation

**Data:** Use the IU X-Ray dataset (publicly available) as a substitute for the paper's data to train and evaluate the model.

**Build it:**

1. Prepare the IU X-Ray dataset with paired chest X-rays and radiology reports.
2. Implement or reuse a pretrained Faster R-CNN to extract salient regions from images.
3. Use a ViT-based image encoder (e.g., CLIP ViT) to embed image regions.
4. Use ClinicalBERT to encode the text reports.
5. Train a contrastive learning objective to align image and text embeddings.
6. Implement a cross-attention fusion module to combine embeddings.
7. Fine-tune a GPT-2 transformer decoder to generate reports from fused embeddings.
8. Evaluate generated reports using BLEU, ROUGE, and clinical relevance metrics.
9. Compare results against a baseline image captioning model that uses the whole image and a general text encoder.

**Ships as:** A GitHub repo with code for data preprocessing, model training, evaluation scripts, and a detailed README explaining the architecture, training procedure, and quantitative results compared to baseline.

**Stretch goal:** Incorporate unsupervised pseudo-report generation using a frozen ClinicalBERT and a BioT5 decoder as described in the paper.

### Advanced — Extending MediVLM to Generate Reports for CT Scan Images
*Effort: 3-4 weeks*

You extend the MediVLM framework to handle CT scan images, a modality not covered in the paper. This involves adapting the salient region extraction and vision-language alignment to 3D or multi-slice CT data, generating clinical reports, and computing severity scores. You evaluate the model on a public CT dataset with radiology reports, analyzing performance and challenges.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to transfer and adapt complex vision-language models to new medical imaging domains. It shows initiative in addressing clinical relevance and data modality challenges.

**Grounded in:** Current framework is limited to chest X-ray images and does not cover other medical imaging modalities. Future directions include extending MediVLM to handle other types of medical images beyond chest X-rays.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), Torchvision or MONAI for medical imaging, NumPy, SimpleITK or nibabel for CT data handling

**Data:** Use a publicly available CT imaging dataset with associated radiology reports, such as the COVID-CT dataset or NIH DeepLesion dataset, as a substitute for chest X-rays.

**Build it:**

1. Acquire and preprocess CT scan images and associated reports from a public dataset.
2. Adapt or train a 3D or multi-slice object detector to extract salient anatomical regions from CT scans.
3. Modify the image encoder to handle volumetric or multi-slice inputs.
4. Use ClinicalBERT or a similar medical text encoder for report embeddings.
5. Implement contrastive learning and cross-attention fusion modules adapted for CT data.
6. Fine-tune a transformer decoder to generate CT scan reports.
7. Implement severity score computation from generated reports using TF-IDF of severity terms.
8. Evaluate the model's report quality and severity scoring, comparing to baseline methods or existing CT report generation approaches.
9. Document challenges and potential improvements for clinical validation.

**Ships as:** A comprehensive GitHub repository with code, pretrained models (if feasible), evaluation scripts, and a README detailing the extension approach, dataset used, results, and discussion of limitations and future work.

**Stretch goal:** Incorporate expert radiologist feedback loops to refine report generation and severity scoring as suggested by the paper's future directions.
