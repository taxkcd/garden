---
title: "281 · CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries — Haipeng Chen"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-haipeng-chen"
source_hash: "c6c32bf37cd4ff872d29caa82f1a9cd60eea322e22dc38be91cf04ae0d91a932"
sequence: 281
generator: "outreach-garden: managed"
---

# 281 · CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries

## At a glance

- **Professor:** Haipeng Chen
- **Institution:** College of William and Mary
- **Paper:** [CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries](https://arxiv.org/abs/2501.01282)
- **Authors:** Shudong Liu, Yiqiao Jin, Cheng Li, Derek F. Wong, Qingsong Wen, Lichao Sun, Haipeng Chen, Xing Xie, Jindong Wang
- **Year:** 2025

## Paper overview

This paper addresses the challenge that current vision-language models (VLMs) have limited understanding of diverse cultures due to biases in training data, which is mostly Western-centric. The authors create CultureVerse, a large-scale dataset covering nearly 20,000 cultural concepts from 188 countries, to benchmark and improve VLMs' cultural understanding. They fine-tune models on this dataset, resulting in improved performance across many cultures without losing general capabilities.

### Why it matters

**Research problem:** Vision-language models struggle with cultural understanding, often misinterpreting culturally significant symbols, gestures, and artifacts due to biases in predominantly Western-centric and English-language training data.

**Why it matters:** Cultural understanding is essential for AI systems intended for global use to interact appropriately and respectfully with users from diverse cultural backgrounds. Misinterpretations can cause misunderstandings or offense, limiting AI equity and effectiveness worldwide.

**Key contributions:**

- Creation of CultureVerse, a massive multimodal cultural benchmark with extensive country and cultural coverage.
- Comprehensive evaluation of 16 open-source and proprietary VLMs on cultural understanding tasks.
- Development of CultureVLM, a series of VLMs fine-tuned on CultureVerse that show significant improvements in multicultural understanding.
- Demonstration of cross-cultural, cross-continent, and cross-dataset generalization of fine-tuned models.
- Insights into regional disparities in cultural understanding and the impact of model size and training data scale.

## About the professor

**Haipeng Chen** — Assistant Professor, Data Science Department, College of William and Mary.

Research interests: Use-Inspired AI, reinforcement learning, generative AI, optimization in health, environment, and physical sciences

### Research links

- [Faculty/profile page](https://haipeng-chen.github.io)
- [Resolved homepage](https://haipeng-chen.github.io/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=YT-b72QAAAAJ)
- [GitHub](https://github.com/wmd3i)
- [LinkedIn](https://sg.linkedin.com/in/haipeng-chen-060b74b8?trk=profile-badge)
- [Social profile](http://twitter.com/HaipengChen2)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CultureVLM paper, start with foundational knowledge on multimodal machine learning and bias in AI datasets, which underpin the challenges and methods in the paper. Then explore dataset construction and annotation techniques to appreciate how CultureVerse was built. Next, review cross-cultural AI evaluation methods to grasp how cultural understanding is assessed. Finally, focus on vision-language model fine-tuning methods and conclude with the authors' own talk for direct insights into their novel dataset and fine-tuning approach.

### Multimodal machine learning *(prerequisite)*
Multimodal machine learning is essential to understand how models process and integrate both visual and textual data, which is the foundation of vision-language models. The selected CMU lecture by Sean Welleck offers an advanced, university-level treatment of vision architectures and image representation learning, providing a rigorous background.

*How the paper uses it:* CultureVLM builds on multimodal learning to improve cultural understanding in vision-language models.

▶ [CMU Advanced NLP Fall 2025 (11): Multimodal Modeling I](https://www.youtube.com/watch?v=MqZgTEsZ4DA) — Sean Welleck · 1:07:34

### Bias in AI datasets *(prerequisite)*
Understanding bias in AI datasets is critical to grasp why current VLMs have Western-centric cultural biases. The Strange Loop Conference talk by Noble Ackerson provides an in-depth, research-level discussion on how human biases influence AI and the resulting socio-technical harms, which aligns with the paper's motivation.

*How the paper uses it:* The paper identifies Western-centric training data bias as a root cause of cultural understanding limitations in VLMs.

▶ ["Fight AI Bias With… Bias" by Noble Ackerson (Strange Loop ...](https://www.youtube.com/watch?v=ia9PMo9m_lY) — Strange Loop Conference · 47:01

### Dataset construction and annotation *(prerequisite)*
Dataset construction and annotation methods are key to understanding how CultureVerse was created with diversity and quality. The MATLAB livestream on creating deep learning models for image datasets offers a detailed, technical walkthrough relevant to large-scale multimodal dataset creation.

*How the paper uses it:* CultureVerse was constructed using a hybrid pipeline combining automated crawling and expert annotation to ensure quality and diversity.

▶ [Creating a Deep Learning Model for an Image Dataset](https://www.youtube.com/watch?v=5auMZ7PHzaY) — MATLAB · 49:26

### Cross-cultural AI evaluation *(prerequisite)*
Evaluating AI models across diverse cultural contexts is crucial to assess improvements in cultural understanding. The Microsoft Research session by YUX provides a comprehensive, research-focused exploration of evaluating cultural relevance in AI models, directly relevant to the paper's evaluation approach.

*How the paper uses it:* The paper evaluates VLMs' cultural understanding across countries and cultures using CultureVerse.

▶ [Evaluating the Cultural Relevance of AI Models and Products ...](https://www.youtube.com/watch?v=6qYFPTkgsGQ) — Microsoft Research · 1:07:22

### Vision-language model fine-tuning
Fine-tuning vision-language models is the central method used in the paper to improve cultural understanding. Daniel Bourke's detailed, hour-long tutorial on end-to-end fine-tuning of small VLMs provides a rigorous, practical perspective on the fine-tuning process applicable to CultureVLM.

*How the paper uses it:* CultureVLM fine-tunes various VLMs on the CultureVerse dataset to enhance cultural perception and generalization.

▶ [End-to-End (small) Vision Language Model Fine-tuning ...](https://www.youtube.com/watch?v=_EMfJSmLSKE) — Daniel Bourke · 1:12:42

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CultureVLM and its approach to improving cultural understanding in vision-language models, start by learning the basics of multimodal machine learning, which explains how models process images and text together. Next, grasp the concept of bias in AI datasets to understand the root cause of cultural misunderstandings in VLMs. Then, explore dataset construction and annotation to see how CultureVerse was built for quality and diversity. After that, learn about cross-cultural AI evaluation to appreciate how AI performance is assessed across cultures. Finally, dive into vision-language model fine-tuning, the core method used in this paper to enhance cultural understanding.

### Multimodal machine learning *(prerequisite)*
Multimodal machine learning involves building AI systems that can understand and combine different types of data, such as images and text. This foundational knowledge helps you grasp how vision-language models work by processing visual and textual information together.

*How the paper uses it:* CultureVLM builds on vision-language models that rely on multimodal learning to interpret cultural concepts from images and text.

▶ [Multimodal Machine Learning | Representation | Part 2 ...](https://www.youtube.com/watch?v=EwavzM_PoVo) — Artificial Intelligence · 39:09

### Bias in AI datasets *(prerequisite)*
Bias in AI datasets occurs when training data does not fairly represent all groups or contexts, leading to skewed or unfair model behavior. Understanding this helps explain why VLMs struggle with cultural understanding, especially for underrepresented regions.

*How the paper uses it:* The paper identifies Western-centric training data as a key source of cultural bias in VLMs.

▶ [3 types of bias in AI | Machine learning](https://www.youtube.com/watch?v=59bMh59JQDo) — Google · 8 years ago

### Dataset construction and annotation *(prerequisite)*
Creating high-quality datasets involves collecting diverse data and carefully annotating it to ensure accuracy and relevance. This process is crucial for building benchmarks that fairly represent different cultures.

*How the paper uses it:* CultureVerse was constructed using a hybrid pipeline of automated web crawling and expert human annotation to ensure diversity and quality.

▶ [Why Humans Still Matter in Data Annotation | Human-in-the-Loop for VisionAI | Dataset Creation 🤝](https://www.youtube.com/watch?v=IXmqeX5qshM) — Ultralytics · 7 months ago

### Cross-cultural AI evaluation *(prerequisite)*
Cross-cultural AI evaluation assesses how well AI models perform across different cultural contexts, highlighting disparities and areas for improvement. This is important for building AI that works equitably worldwide.

*How the paper uses it:* The paper evaluates VLMs on cultural understanding tasks across 188 countries to reveal regional performance disparities.

▶ [Evaluating the Cultural Relevance of AI Models and Products ...](https://www.youtube.com/watch?v=6qYFPTkgsGQ) — Microsoft Research · 1:07:22

### Vision-language model fine-tuning
Fine-tuning is the process of adapting a pre-trained vision-language model on a specific dataset to improve its performance on targeted tasks. This method is central to enhancing cultural understanding in VLMs.

*How the paper uses it:* The authors fine-tune various VLMs on the CultureVerse dataset to create CultureVLM models with improved multicultural understanding.

▶ [End-to-End (small) Vision Language Model Fine-tuning ...](https://www.youtube.com/watch?v=_EMfJSmLSKE) — Daniel Bourke · 1:12:42

## Already in your library

- [Lecture 1.1 - Introduction (CMU Multimodal Machine Learning ...](https://www.youtube.com/watch?v=DPkwjgaRvyI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Multimodal Machine Learning | Introduction | Part 1 | CVPR ...](https://www.youtube.com/watch?v=helW1httyO8) — also for: Towards Effective Human-in-the-Loop Assistive AI Agents (Jeffrey Mark Siskind)
- [Why AI Doesn’t Understand Your Culture? Dr. Vered Shwartz on Cultural Bias in LLMs](https://www.youtube.com/watch?v=RKIvrESep-g) — also for: Africa Health Check: Probing Cultural Bias in Medical LLMs (Irfan A. Essa)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of CultureVLM's approach to improving cultural understanding in vision-language models. The beginner project reproduces a simple cultural bias analysis using existing VLMs and public data proxies. The intermediate project implements the core fine-tuning method on a smaller dataset to improve cultural perception and compares results to a baseline. The advanced project extends the paper by addressing a stated limitation: incorporating open-ended question formats to enrich cultural understanding evaluation.

### Beginner — Analyze Cultural Bias in Vision-Language Models Using Public Data
*Effort: a weekend, ~8 hours*

You build a simple analysis pipeline that evaluates an open-source vision-language model's performance on cultural understanding across different regions using a proxy dataset. Since CultureVerse is not publicly available, you use a publicly available dataset with cultural landmarks or symbols (e.g., Wikimedia Commons images tagged by country) to measure model bias towards Western vs. non-Western cultures.

**Why it shows you understood the paper:** This project shows you understand the paper's key finding that VLMs have Western-centric cultural biases and can reproduce a simplified version of the regional performance disparity analysis.

**Grounded in:** All VLMs show highly consistent regional disparities in cultural understanding, with the highest cultural understanding for the Americas, followed by Europe and Oceania, and the weakest understanding for Asia and Africa.

**Tech stack:** Python 3.11, PyTorch, transformers, OpenCV, Jupyter Notebook

**Data:** Use Wikimedia Commons images tagged by country as a proxy for cultural concepts; no direct access to CultureVerse dataset.

**Build it:**

1. Select an open-source vision-language model such as CLIP or LLaVA from the third-party artifacts or Hugging Face.
2. Collect a small set of images representing cultural landmarks or symbols from Wikimedia Commons, grouped by region (Americas, Europe, Asia, Africa, Oceania).
3. Design a simple classification or retrieval task to evaluate the model's ability to correctly associate images with cultural labels or captions.
4. Run the evaluation and compute accuracy or retrieval metrics per region.
5. Visualize and report the regional disparities in model performance.

**Ships as:** A Jupyter notebook and scripts showing regional performance metrics and visualizations of cultural bias in the selected VLM.

**Stretch goal:** Add a simple baseline model (e.g., a generic image classifier) for comparison to highlight the VLM's cultural bias.

### Intermediate — Fine-tune a Vision-Language Model on a Small Multicultural Dataset
*Effort: 1-3 weekends, ~20 hours*

You implement the core fine-tuning approach described in the paper by creating a smaller-scale cultural dataset from public sources and fine-tuning an open-source VLM (e.g., LLaVA) on it. You then evaluate the fine-tuned model's cultural understanding improvement against the base model using multiple-choice cultural questions you design.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method of fine-tuning VLMs on cultural data to improve multicultural understanding and measure performance gains.

**Grounded in:** Fine-tuning on our CultureVerse enhances cultural perception, demonstrating cross-cultural, cross-continent, and cross-dataset generalization without sacrificing performance on models’ general VLM benchmarks.

**Tech stack:** Python 3.11, PyTorch, transformers, Jupyter Notebook, Git

**Data:** Construct a small dataset of cultural concepts and images from public sources such as Wikimedia Commons and Wikipedia, manually annotated with multiple-choice questions similar to CultureVerse format.

**Build it:**

1. Select an open-source VLM such as LLaVA from the third-party artifacts.
2. Collect and annotate a small dataset (~500 samples) of cultural images and multiple-choice questions covering diverse regions.
3. Implement the fine-tuning pipeline following the paper's description and using available LLaVA fine-tuning recipes (e.g., from https://github.com/haotian-liu/LLaVA).
4. Fine-tune the model on the cultural dataset.
5. Evaluate the fine-tuned model and the base model on the multiple-choice cultural questions and report accuracy improvements.
6. Document the process, results, and insights.

**Verified links from the paper:**

- <https://github.com/haotian-liu/LLaVA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to fine-tune and evaluate the VLM on cultural questions, including dataset samples, training scripts, and evaluation results.

**Stretch goal:** Add evaluation on a small set of general VLM tasks to verify no catastrophic forgetting occurs.

### Advanced — Extend Cultural Understanding Evaluation with Open-Ended Question Formats
*Effort: a few weeks, ~40+ hours*

You design and implement an extension to the paper's evaluation by developing an open-ended question format for cultural understanding assessment. You create or adapt a dataset with open-ended cultural questions and fine-tune a VLM to answer them. You compare performance with multiple-choice fine-tuned models and analyze the richer understanding enabled by open-ended formats.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the challenges in cultural evaluation and the ability to innovate beyond the original work.

**Grounded in:** CultureVerse currently contains only multiple-choice questions, limiting assessment types. Further evaluation on more diverse models and open-ended question formats is needed.

**Tech stack:** Python 3.11, PyTorch, transformers, Jupyter Notebook, Git, Flask or FastAPI (optional for demo)

**Data:** Create or adapt a small open-ended cultural question dataset by rewriting multiple-choice questions into open-ended prompts or collecting cultural Q&A from public sources; no direct CultureVerse access.

**Build it:**

1. Review the paper's multiple-choice cultural question format and design an open-ended question format.
2. Create or adapt a dataset of open-ended cultural questions and corresponding answers from public cultural knowledge sources.
3. Fine-tune an open-source VLM (e.g., LLaVA) on this open-ended dataset.
4. Evaluate the model's open-ended cultural understanding using metrics such as BLEU, ROUGE, or human evaluation.
5. Compare results with multiple-choice fine-tuned models to analyze benefits and challenges.
6. Optionally, build a simple web demo to showcase the model answering open-ended cultural questions.

**Verified links from the paper:**

- <https://github.com/haotian-liu/LLaVA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with dataset, fine-tuning code, evaluation scripts, analysis report, and optionally a demo app illustrating open-ended cultural understanding.

**Stretch goal:** Integrate reinforcement learning techniques to dynamically adapt the model to new cultural contexts with limited data, addressing the paper's thoughtful question.

_CultureVerse dataset and authors' code are not publicly released; all projects rely on proxy datasets or public open-source VLMs and require manual data preparation._
