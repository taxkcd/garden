---
title: "222 · MONITRS: Multimodal Observations of Natural Incidents Through Remote Sensing — Kavita Bala"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kavita-bala"
source_hash: "88e1f5751ca406c37157ab11bdfbcfc06bee8d7c7cd938a2a0e98e6e999ee596"
sequence: 222
generator: "outreach-garden: managed"
---

# 222 · MONITRS: Multimodal Observations of Natural Incidents Through Remote Sensing

## At a glance

- **Professor:** Kavita Bala
- **Institution:** Cornell University
- **Paper:** [MONITRS: Multimodal Observations of Natural Incidents Through Remote Sensing](https://arxiv.org/abs/2507.16228)
- **Authors:** Shreelekha Revankar, Utkarsh Mall, Cheng Perng Phoo, Kavita Bala, Bharath Hariharan
- **Year:** 2025

## Paper overview

This paper introduces MONITRS, a novel dataset combining satellite imagery and natural language descriptions from news articles to monitor natural disasters in the US. It enables machine learning models to better understand the progression and impact of disasters over time, improving automated disaster response.

### Why it matters

**Research problem:** Existing remote sensing and computer vision methods for disaster monitoring are limited by narrow disaster type focus, lack of temporal granularity, insufficient annotated datasets, and reliance on manual expert interpretation.

**Why it matters:** Natural disasters cause significant damage and loss of life annually. Effective disaster response requires timely, accurate monitoring of disaster events and their progression, which is challenging due to inaccessibility and lack of comprehensive annotated data for automated analysis.

**Key contributions:**

- Creation of MONITRS, a large-scale multimodal dataset of ~10,000 US disaster events with temporal satellite imagery and natural language annotations.
- A novel data curation pipeline leveraging FEMA records and news articles to accurately geolocate and describe disaster events.
- Development of a visual question-answering (VQA) dataset for disaster monitoring with templated and generated questions.
- Demonstration that fine-tuning existing multimodal LLMs on MONITRS significantly improves performance on event classification, temporal grounding, and location grounding tasks.
- Provision of a new benchmark for machine learning-assisted disaster response systems.

## About the professor

**Kavita Bala** — Professor, Computer Science, Cornell University.

Research interests: My research interests span computer vision, computer graphics, and human perception, including: - Recognition: material recognition, visual search and detection - Modeling: material and shape acquisition; fabric modeling; material representation and editing - Rendering: realistic, physically-based rendering; scalable rendering - Perception: translucency perception; material and lighting perception

### Research links

- [Faculty/profile page](http://www.cs.cornell.edu/~kb)
- [Resolved homepage](http://www.cs.cornell.edu/~kb/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal machine learning, visual question answering, large language model fine-tuning
**Already in this field?** Skip this entirely if you already understand how machine learning models jointly process and learn from multiple data modalities like images and text.

This background focuses on multimodal machine learning, essential for understanding how the MONITRS paper integrates satellite imagery and natural language for disaster monitoring. The rigorous course option offers a deep, structured dive into multimodal learning concepts and techniques, while the fast track provides a concise, accessible introduction to the core ideas and challenges in multimodal machine learning. Choose the course for comprehensive mastery or the fast track for a quick yet solid grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 3.1 - Multimodal Representation Fusion, 4.1 - Multimodal Alignment, 5.1 - Multimodal Transformers - Part1, and 7.1 - Multimodal Interaction; about 7 hours total. This subset covers the core multimodal concepts, fusion methods, alignment, and transformer architectures critical to understanding the paper's methodology.

*Why it unblocks this paper:* This is a recent, authoritative Carnegie Mellon University course on multimodal machine learning taught by LP Morency, covering foundational concepts, representations, alignment, transformers, and reasoning—directly relevant to the multimodal fusion and fine-tuning techniques used in MONITRS.

*If you want all of it:* About 20.1 hours across the first 17 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ms. Coffee Bean's Multimodalities](https://www.youtube.com/playlist?list=PLpZBeKTZRGPNKxoNaeMD9GViU_aH_HJab) — AI Coffee Break with Letitia · 15 videos · 2.7h across 15 episodes

**Watch only this:** Episodes 1 - What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition, 2 - Transformer combining Vision and Language? ViLBERT - NLP meets Computer Vision, 3 - Pre-training of BERT-based Transformer architectures explained – language and vision!, and 4 & 5 - Multimodal Machine Learning models do not work. Here is why. Parts 1 and 2; about 50 minutes total. This selection covers definitions, key model architectures, and challenges relevant to MONITRS.

*Why it unblocks this paper:* This concise series by AI Coffee Break with Letitia provides clear, focused explainers on multimodal machine learning fundamentals, transformer-based vision and language models, and challenges in the field, offering a quick yet insightful overview aligned with the paper's multimodal approach.

*If you want all of it:* About 2.7 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MONITRS paper, start with foundational knowledge on remote sensing for disaster monitoring to grasp satellite imagery applications in natural hazard contexts. Next, explore visual question answering and temporal grounding in computer vision, which are key techniques used in the paper for querying multimodal data and understanding disaster progression over time. Finally, focus on the core concept of the MONITRS dataset itself, prioritizing any direct talks by the authors or closely related academic presentations.

### Remote sensing for disaster monitoring *(prerequisite)*
This section covers the foundational use of satellite imagery and remote sensing technologies for tracking and managing natural disasters. Understanding these principles is crucial for appreciating the data sources and challenges MONITRS addresses, such as temporal granularity and spatial resolution limitations.

*How the paper uses it:* MONITRS leverages Sentinel-2 satellite imagery for temporal monitoring of disaster events, making remote sensing knowledge essential.

▶ [Lecture 4 Remotely Sensed Information for Managing Disaster Risks](https://www.youtube.com/watch?v=Ud6CAYDo22Q) — HEAB Geospatial Solutions · 5 years ago

### Visual question answering *(prerequisite)*
Visual question answering (VQA) techniques enable querying images with natural language questions, a core method MONITRS uses to link satellite imagery with textual disaster descriptions. This section provides insight into how VQA systems work and their challenges, which informs the paper's development of a disaster-specific VQA dataset.

*How the paper uses it:* MONITRS includes a novel VQA dataset for disaster monitoring, making understanding VQA methods important.

▶ [Visual Question Answering (VQA) by Devi Parikh](https://www.youtube.com/watch?v=ElZADFTer4I) — With The Best · 30:04

### Temporal grounding in computer vision *(prerequisite)*
Temporal grounding involves associating visual data with temporal information, critical for tracking disaster progression over time in MONITRS. This section explores how models localize events in time within image sequences, directly relating to the paper's temporal grounding tasks and performance improvements.

*How the paper uses it:* Temporal grounding is a key task in MONITRS for understanding disaster evolution from satellite imagery sequences.

▶ [Advances in self-supervised multimodal learning - Prof. Dr ...](https://www.youtube.com/watch?v=uhVzzW5d4W4) — Soft Robotics Lab [SRL] / ETH Zurich · 58:52

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand MONITRS, starting with how remote sensing is used for disaster monitoring, then explaining visual question answering and temporal grounding in computer vision. Next, it covers multimodal large language models, which integrate satellite imagery and natural language, culminating with the core concept of the MONITRS dataset itself. Each step builds intuition with clear, concise videos directly relevant to the paper's methods and goals.

### Remote sensing for disaster monitoring *(prerequisite)*
Learn how satellite imagery and remote sensing technologies are applied to track and assess natural disasters. This foundational knowledge explains the data sources and challenges in monitoring disasters from space.

*How the paper uses it:* MONITRS relies on temporal satellite imagery from Sentinel-2 to monitor disaster events in the US.

▶ [Remote Sensing and GIS Applications in Disaster Response](https://www.youtube.com/watch?v=0m1-rXxEFvM) — Spatial Lens · 4 weeks ago

### Visual question answering *(prerequisite)*
Understand how AI models answer natural language questions about images, a key technique for querying multimodal data. This introduces the concept of combining vision and language to extract meaningful information from images.

*How the paper uses it:* MONITRS includes a visual question-answering dataset to enable querying disaster events using natural language.

▶ [Visual Question Answering (VQA) by Devi Parikh](https://www.youtube.com/watch?v=ElZADFTer4I) — With The Best · 30:04

### Temporal grounding in computer vision *(prerequisite)*
Explore how computer vision models localize events in time within image sequences, crucial for understanding how disasters evolve. This concept helps grasp how models interpret temporal satellite data to track disaster progression.

*How the paper uses it:* Temporal grounding is a key task in MONITRS to understand disaster progression from satellite imagery sequences.

▶ [Advances in self-supervised multimodal learning - Prof. Dr ...](https://www.youtube.com/watch?v=uhVzzW5d4W4) — Soft Robotics Lab [SRL] / ETH Zurich · 58:52

### Multimodal large language models
Learn about AI models that process and integrate multiple data types like images and text, enabling richer understanding and reasoning. This is central to MONITRS’s approach of combining satellite imagery with natural language annotations.

*How the paper uses it:* MONITRS fine-tunes multimodal large language models to improve disaster monitoring tasks using combined visual and textual data.

▶ [Ep 3. Multimodal Large Language Models](https://www.youtube.com/watch?v=9_OFyKgxHaU) — AI Papers Podcast · 12:14

### MONITRS dataset talk *(the paper's own talk)*
Finally, watch a direct presentation related to the MONITRS dataset and its novel approach to multimodal disaster monitoring. This talk provides insights into the dataset creation, challenges, and model improvements.

*How the paper uses it:* This talk offers a deep understanding of the MONITRS dataset and its contributions to automated disaster response.

▶ [There is nothing natural about disaster | Rohini Swaminathan | TEDxPlaceDesNations](https://www.youtube.com/watch?v=h7fbfZxoWlY) — TEDx Talks · 10 years ago

## Already in your library

- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Multimodal Large Language Model Intro By Google Engineer ...](https://www.youtube.com/watch?v=jjdKfk89yAM) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the MONITRS paper. The beginner project reproduces a simple disaster event classification baseline using publicly available satellite imagery and news data, reflecting the paper's initial performance challenges. The intermediate project implements a core method of fine-tuning a multimodal large language model on a small-scale multimodal disaster dataset, showing improved event classification and temporal grounding metrics. The advanced project extends MONITRS by incorporating an additional data modality (e.g., segmentation masks or location embeddings) to address the paper's noted limitation in location grounding, thus exploring a future research direction.

### Beginner — Disaster Event Classification Baseline with Satellite Imagery and News Text
*Effort: a weekend, ~8 hours*

You build a simple classifier that predicts disaster event types from paired satellite RGB images and short news text descriptions. Using a small public dataset substituting for MONITRS (e.g., Sentinel-2 RGB images from a known US disaster event and corresponding news snippets you collect manually), you extract basic image features and text embeddings, then train a simple multimodal classifier.

**Why it shows you understood the paper:** This project shows you understand the core challenge MONITRS addresses: multimodal disaster event classification with limited annotated data and baseline model performance around 50%. It demonstrates your ability to combine satellite imagery and natural language inputs for classification.

**Grounded in:** Baseline multimodal models perform poorly on disaster monitoring tasks (event classification ~50%)

**Tech stack:** Python 3.11, PyTorch, scikit-learn, transformers (HuggingFace)

**Data:** Use publicly available Sentinel-2 RGB satellite images for a small set of US disaster events (e.g., wildfires or floods) and manually collected short news text snippets describing those events as a substitute for MONITRS data.

**Build it:**

1. Collect a small set (50-100) of Sentinel-2 RGB satellite images for known US disaster events from public sources.
2. Manually gather short news text snippets describing these disaster events with timestamps and locations.
3. Preprocess images (resize, normalize) and tokenize text using a pretrained language model tokenizer.
4. Extract image features using a pretrained CNN backbone (e.g., ResNet18) and text embeddings using a pretrained transformer (e.g., DistilBERT).
5. Concatenate image and text features and train a simple classifier (e.g., MLP) to predict disaster event types.
6. Evaluate classification accuracy and compare to the ~50% baseline reported in the paper.

**Ships as:** A GitHub repo with code, a README explaining the dataset substitution, model architecture, training procedure, and baseline classification accuracy results.

**Stretch goal:** Add temporal context by including image sequences over time and evaluate if classification improves.

### Intermediate — Fine-tuning a Multimodal LLM for Disaster Event Classification and Temporal Grounding
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core method of fine-tuning a multimodal large language model on a small-scale multimodal disaster dataset. Using a publicly available satellite imagery dataset combined with synthetic or publicly sourced disaster-related text annotations, you fine-tune an open-source multimodal LLM to perform event classification and temporal grounding, reporting accuracy improvements over a baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main technical contribution: fine-tuning multimodal LLMs on combined satellite imagery and natural language annotations to improve disaster monitoring tasks, replicating the significant accuracy gains reported.

**Grounded in:** Fine-tuning on MONITRS significantly improves model performance on event classification and temporal grounding.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), OpenAI CLIP or similar multimodal model

**Data:** Use a small public dataset of satellite image sequences (e.g., Sentinel-2) for US disaster events combined with synthetic or publicly sourced natural language annotations simulating MONITRS data.

**Build it:**

1. Prepare a small multimodal dataset pairing satellite image sequences with natural language annotations describing disaster events and timestamps.
2. Select a pretrained multimodal LLM or vision-language model (e.g., CLIP or BLIP) as the base model.
3. Fine-tune the model on the dataset for event classification and temporal grounding tasks.
4. Implement evaluation metrics matching the paper (accuracy for event classification and temporal grounding).
5. Compare fine-tuned model performance against a baseline unimodal or non-fine-tuned model.
6. Document the training setup, hyperparameters, and results.

**Ships as:** A GitHub repo with code to fine-tune and evaluate a multimodal LLM on disaster event classification and temporal grounding, with a report showing improved accuracy consistent with the paper's findings.

**Stretch goal:** Add a simple visual question answering (VQA) task on disaster images and evaluate model performance.

### Advanced — Improving Location Grounding in Disaster Monitoring by Integrating Segmentation Masks
*Effort: 3-4 weeks*

You extend the MONITRS approach by incorporating an additional data modality—segmentation masks derived from satellite imagery—to improve location grounding accuracy. Using publicly available satellite images and disaster annotations, you generate or obtain segmentation masks highlighting disaster-affected areas, integrate them into a multimodal model, and evaluate improvements in location grounding metrics.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified in the paper: the challenge of location grounding and the need for additional data modalities. It shows your ability to innovate beyond the original work by integrating spatial segmentation to enhance disaster localization.

**Grounded in:** Location grounding remains challenging for all models, indicating need for additional data modalities.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), OpenCV, segmentation model (e.g., U-Net)

**Data:** Use publicly available Sentinel-2 RGB satellite images for US disaster events, manually or automatically generate segmentation masks for disaster-affected regions, and pair with disaster event annotations.

**Build it:**

1. Collect satellite images and corresponding disaster event annotations with geolocations.
2. Train or apply a pretrained segmentation model (e.g., U-Net) to generate masks of disaster-affected areas in satellite images.
3. Integrate segmentation masks as an additional input channel or modality into a multimodal disaster monitoring model.
4. Fine-tune the model on event classification, temporal grounding, and location grounding tasks.
5. Evaluate improvements in location grounding accuracy compared to models without segmentation masks.
6. Document methodology, challenges, and results.

**Ships as:** A GitHub repo with code and documentation demonstrating improved location grounding in disaster monitoring by integrating segmentation masks, including quantitative evaluation and discussion.

**Stretch goal:** Experiment with incorporating additional geospatial embeddings or SAR data if available to further improve location grounding.
