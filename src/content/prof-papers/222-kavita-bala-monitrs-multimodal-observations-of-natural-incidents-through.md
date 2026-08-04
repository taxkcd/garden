---
title: "222 · MONITRS: Multimodal Observations of Natural Incidents Through Remote Sensing — Kavita Bala"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kavita-bala"
source_hash: "5280db1ef64bf0f32a0e8b738779c1c43734ec8327cf529ca282e58919fdeaf7"
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
