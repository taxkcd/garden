---
title: "429 · Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding — Tinoosh Mohsenin"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tinoosh-mohsenin"
source_hash: "7800af9c798f97c05377f9f3428fe50a55d44085bc03753963f91564afa6f1b9"
sequence: 429
generator: "outreach-garden: managed"
---

# 429 · Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding

## At a glance

- **Professor:** Tinoosh Mohsenin
- **Institution:** Johns Hopkins University
- **Paper:** [Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding](https://arxiv.org/abs/2505.23990)
- **Authors:** Mingyang Mao, Mariela M. Perez-Cabarcas, Utteja Kallakuri, Nicholas R. Waytowich, Xiaomin Lin, Tinoosh Mohsenin
- **Year:** 2025

## Paper overview

This paper presents Multi-RAG, a system that combines video, audio, and text data to help robots and AI better understand complex, dynamic situations. It uses advanced language models and retrieval techniques to assist humans by reducing information overload and improving decision-making, especially in video-rich environments.

### Why it matters

**Research problem:** How to enable AI systems, particularly robots and intelligent agents, to adaptively understand and assist humans in dynamic, information-rich, multimodal environments by integrating video, audio, and text data effectively.

**Why it matters:** Humans face information overload in many real-world scenarios, which can impair decision-making and cause cognitive strain. As robots become more integrated into daily life, they need to support humans by offloading cognitive burdens and providing timely, context-aware assistance.

**Key contributions:**

- Design and implementation of a multimodal RAG system integrating video, audio, and text for adaptive human assistance.
- Development of efficient video frame sampling strategies tailored for educational and general-purpose scenarios.
- Use of Markdown-formatted textual descriptions and auxiliary metadata to build a structured knowledge database.
- Comprehensive evaluation on the MMBench-Video benchmark demonstrating superior or comparable performance to state-of-the-art video large language models with fewer input frames.
- Ablation studies showing the importance of audio and auxiliary metadata in system performance.

## About the professor

**Tinoosh Mohsenin** — Associate Professor, Electrical and Computer Engineering, Johns Hopkins University.

Research interests: designing medical, health and wearable devices; high-performance computing methods for artificial intelligence, robotics and autonomous navigation, smart health monitoring

### Research links

- [Faculty/profile page](https://eehpc.ece.jhu.edu)
- [Professor website](https://eehpc.ece.jhu.edu/tinoosh-mohsenin/)
- [Google Scholar](https://scholar.google.com/citations?user=9grfK9gAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/company/jhu-eehpc)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** retrieval-augmented generation
**The paper assumes:** retrieval-augmented generation methods in natural language processing and machine learning
**Already in this field?** Skip this entirely if you already understand how retrieval-augmented generation systems combine retrieval from vector databases with large language model generation.

This background focuses on retrieval-augmented generation (RAG), the core method behind the Multi-RAG system integrating multimodal data for adaptive video understanding. The rigorous course option offers a deep, structured university-level treatment of RAG concepts and techniques, while the fast track provides a concise, practical tutorial series to quickly grasp RAG fundamentals and implementation essentials. Choose the course for comprehensive understanding and the fast track for efficient, applied learning.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [WING NUS CS6101 Retrieval Augmented Generation (T2510)](https://www.youtube.com/playlist?list=PLzIZxnJJT7OS2ZOIjeKu9Ui5GmMMnictb) — Web IR / NLP Group at NUS · 14 videos · 28.4h across 14 episodes

**Watch only this:** Episodes 00 to 04 (Introduction and Orientation, RAG Overview, Foundations of Large Language Models, LLM Prompting, Vector Stores) plus Episode 10 (Multimodal RAG) — about 11 hours total. This subset covers the basics of RAG, vector databases, prompting, and the multimodal extension crucial for understanding Multi-RAG.

*Why it unblocks this paper:* This is a public university course on retrieval augmented generation by a reputable NLP research group (WING.NUS), covering foundational concepts, multimodal RAG, vector stores, prompting, and efficiency, directly relevant to the paper's multimodal RAG system design and evaluation.

*If you want all of it:* All 14 episodes, approximately 28.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Complete RAG Tutorial 2025: Build AI Apps with Retrieval Augmented Generation](https://www.youtube.com/playlist?list=PLNIQLFWpQMRUMjxfe8o6g3uzJ6LH_VotY) — Harish Neel | AI · 17 videos · 4.1h across 17 episodes

**Watch only this:** Episodes 1 to 4 and Episode 12 (Introduction to RAG, Vector Embeddings and Architecture, Data Ingestion Pipeline, Document Retrieval Implementation, Multi-Modal RAG) — about 1.5 hours total. This covers the essential concepts and practical steps to understand and implement a multimodal RAG system.

*Why it unblocks this paper:* This concise tutorial series by Harish Neel provides a clear, practical introduction to RAG architecture, vector embeddings, document retrieval, chunking strategies, and multimodal RAG, matching the paper's focus on multimodal retrieval and generation with efficient sampling.

*If you want all of it:* All 17 episodes, approximately 4.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Multi-RAG system, start with foundational knowledge on multimodal machine learning, which covers integrating video, audio, and text data. Then, study efficient video frame sampling strategies essential for processing video inputs effectively. Next, learn about vector database retrieval techniques that underpin the system's storage and retrieval of textual embeddings. Follow this with lectures on large language models for multimodal tasks to grasp how context-aware answers are generated from multimodal inputs. Finally, focus on the core concept of Retrieval-Augmented Generation (RAG) and the authors' own talk on the Multi-RAG system to understand the specific innovations and contributions of the paper.

### Multimodal machine learning lecture *(prerequisite)*
This section provides foundational understanding of how multiple data modalities such as video, audio, and text can be integrated and modeled together. It covers challenges and techniques in multimodal learning, which is crucial for grasping how Multi-RAG processes diverse input streams.

*How the paper uses it:* Multi-RAG integrates video, audio, and text data for adaptive understanding, making multimodal machine learning fundamentals essential.

▶ [CMU Advanced NLP Spring 2026 (11): Multimodal LLMs I](https://www.youtube.com/watch?v=1fClfAI6hmA) — Sean Welleck · 55:31

### Video frame sampling strategies lecture *(prerequisite)*
Efficient video frame sampling is critical for reducing computational load while preserving important information from videos. This lecture explains various sampling methods and their impact on video understanding, directly relating to Multi-RAG's tailored sampling strategies.

*How the paper uses it:* The paper develops efficient video frame sampling strategies tailored for different scenarios to optimize input data usage.

▶ [How Semantic Video Understanding Actually Works](https://www.youtube.com/watch?v=3U1riPFtc-k) — Mixpeek · 11:29

### Vector database retrieval lecture *(prerequisite)*
Vector databases enable efficient storage and retrieval of high-dimensional embeddings, which is key for retrieval-augmented systems. This lecture covers indexing and retrieval strategies that support fast and relevant information access.

*How the paper uses it:* Multi-RAG uses a vector database to store and retrieve Markdown-formatted textual chunks for knowledge retrieval.

▶ [What is a vector databases? Easiest Explanation 2026](https://www.youtube.com/watch?v=g7cfwAmsbrM) — Sanket Singh · 17:19

### Large language models for multimodal tasks lecture *(prerequisite)*
Understanding how large language models process and reason over multimodal inputs is essential to appreciate Multi-RAG's generation capabilities. This lecture discusses reasoning and generation techniques in multimodal LLMs.

*How the paper uses it:* Multi-RAG employs large language models to generate context-aware answers from multimodal textual representations.

▶ [Multimodal Reasoning, Video Instruction-Tuning & Explaining ...](https://www.youtube.com/watch?v=Nf3Q5slJOB0) — TwelveLabs · 57:00

### Retrieval augmented generation lecture
Retrieval-Augmented Generation (RAG) is the core methodology behind Multi-RAG, combining retrieval of relevant information with language generation to improve response quality. This lecture provides a comprehensive overview of RAG techniques and challenges.

*How the paper uses it:* Multi-RAG is a multimodal retrieval-augmented generation system that integrates retrieval with LLM-based generation.

▶ [Stanford CS25: V3 I Retrieval Augmented Language Models](https://www.youtube.com/watch?v=mE7IDf2SmJg) — Stanford Online · 1:19:27

### Multi-RAG system talk *(the paper's own talk)*
This is the authors' own detailed presentation on the Multi-RAG system, covering its design, implementation, evaluation, and key contributions. It offers direct insights into the system and its innovations.

*How the paper uses it:* This talk is the direct source for the authors' presentation on the Multi-RAG system and its contributions.

▶ [Multimodal Retrieval Augmented Generation RAG with Vector ...](https://www.youtube.com/watch?v=AA3z6yehbKM) — Open Data Science and AI Conference · 48:56

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces you first to the foundational ideas behind multimodal machine learning, which is essential for understanding how video, audio, and text data are combined. Next, it covers efficient video frame sampling strategies and vector database retrieval, both critical for handling and searching large multimodal datasets. Then, it explains retrieval-augmented generation (RAG), the core method behind Multi-RAG, before concluding with a focused look at the Multi-RAG system itself, tying all concepts together.

### Multimodal machine learning lecture *(prerequisite)*
Learn how AI systems combine different types of data like images, audio, and text to understand complex information more like humans do. This foundational knowledge helps you grasp why integrating multiple modalities is challenging and important.

*How the paper uses it:* Multi-RAG integrates video, audio, and text data to improve situational understanding and reduce cognitive load.

▶ [RI Seminar: Louis-Philippe Morency : Multimodal Machine ...](https://www.youtube.com/watch?v=pMb_CIK14lU) — CMU Robotics Institute · 59:54

### Video frame sampling strategies lecture *(prerequisite)*
Understand how videos are broken down into frames and why selecting the right frames efficiently is crucial for processing and summarizing video content without losing important information.

*How the paper uses it:* The system uses efficient video frame sampling strategies tailored for different scenarios to reduce computational load while maintaining understanding.

▶ [How Semantic Video Understanding Actually Works](https://www.youtube.com/watch?v=3U1riPFtc-k) — Mixpeek · 11:29

### Vector database retrieval lecture *(prerequisite)*
Discover how vector databases store and retrieve information based on semantic meaning rather than exact keywords, enabling fast and relevant searches over large collections of textual embeddings.

*How the paper uses it:* Multi-RAG stores multimodal textual descriptions in a vector database for efficient retrieval during generation.

▶ [What is a vector databases? Easiest Explanation 2026](https://www.youtube.com/watch?v=g7cfwAmsbrM) — Sanket Singh · 17:19

### Retrieval augmented generation lecture *(the paper's own talk)*
Learn the core idea of retrieval-augmented generation, where a language model improves its answers by retrieving relevant external information, combining retrieval and generation for better context-aware responses.

*How the paper uses it:* Multi-RAG uses retrieval-augmented generation to generate context-aware answers from multimodal data.

▶ [RAG Explained in 12 Minutes](https://www.youtube.com/watch?v=v0ynfDPpe4E) — Aishwarya Srinivasan · 12:06

### Multi-RAG system talk *(the paper's own talk)*
See a direct presentation on the Multi-RAG system, its design, and contributions, providing a clear overview of how the authors combine multimodal inputs, sampling, retrieval, and generation for adaptive video understanding.

*How the paper uses it:* This talk presents the Multi-RAG system and its multimodal retrieval-augmented generation approach as described in the paper.

▶ [Multimodal RAG: A Beginner-friendly Guide (with Python Code)](https://www.youtube.com/watch?v=Y7pNmocrmi8) — Shaw Talebi · 27:43

## Already in your library

- [CMU Advanced NLP Fall 2024 (10): Retrieval and RAG](https://www.youtube.com/watch?v=KfQaYk4k9eM) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Zhe Gan - How to Build Your Multimodal LLMs: From Pre ...](https://www.youtube.com/watch?v=Sblp_U1qI7g) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Multimodal Large Language Model Intro By Google Engineer ...](https://www.youtube.com/watch?v=jjdKfk89yAM) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Multi-RAG system for multimodal retrieval-augmented generation in video understanding. The beginner project focuses on implementing a simple multimodal text generation pipeline from video and audio inputs, the intermediate project reimplements the core Multi-RAG retrieval and generation method on a smaller public dataset with evaluation, and the advanced project extends the system toward adaptive retrieval strategies for resource-constrained wearable devices, addressing a key future direction of the paper.

### Beginner — Multimodal Text Description from Video and Audio
*Effort: a weekend, ~8 hours*

You build a simple pipeline that extracts frames from a short video clip and audio segments, converts them into textual descriptions using pre-trained vision and speech recognition models, and concatenates these into a unified Markdown-formatted text output. This mimics the Multi-RAG approach of converting multimodal inputs into a single textual modality for downstream processing.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's single primary modality paradigm and the importance of converting video and audio into unified textual representations, a foundational step in Multi-RAG.

**Grounded in:** The system uses a single primary modality paradigm converting all inputs into unified textual representations.

**Tech stack:** Python 3.11, OpenCV, SpeechRecognition (Python library), transformers (Hugging Face)

**Data:** Use a publicly available short video clip with audio, such as a sample from a Creative Commons video on YouTube or a local video file you have.

**Build it:**

1. Extract video frames at a low frame rate (e.g., 1 frame per second) using OpenCV.
2. Use a pre-trained image captioning model (e.g., from Hugging Face transformers) to generate textual descriptions for each frame.
3. Extract audio from the video and segment it into short clips matching frame timestamps.
4. Use a speech recognition library to transcribe audio segments into text.
5. Combine the frame captions and audio transcriptions into a single Markdown-formatted text document.
6. Write a README explaining how this pipeline relates to Multi-RAG's modality unification.

**Ships as:** A GitHub repository with code to extract and convert video and audio into unified Markdown text, plus example outputs and a README linking the implementation to the paper's modality unification concept.

**Stretch goal:** Add auxiliary metadata extraction (e.g., video timestamps, speaker IDs) and include it in the Markdown output as Multi-RAG does.

### Intermediate — Reimplementation of Multi-RAG Retrieval-Augmented Generation on Public Video QA Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core Multi-RAG system by converting video frames and audio into textual chunks, embedding them into a vector database, and using a large language model to answer user queries based on retrieved chunks. You evaluate performance on a smaller, publicly available video question-answering dataset (e.g., MSRVTT-QA or ActivityNet-QA) as a substitute for MMBench-Video, comparing your system's accuracy to a simple baseline that uses only video frames without audio or metadata.

**Why it shows you understood the paper:** This project shows you understand the core retrieval-augmented generation method, the importance of multimodal integration, and evaluation metrics similar to those in the paper, demonstrating practical application and critical analysis.

**Grounded in:** The authors developed Multi-RAG, a multimodal retrieval-augmented generation system that converts video frames and audio into textual descriptions, stores them in a vector database, and uses a large language model to generate context-aware answers to user queries.

**Tech stack:** Python 3.11, OpenCV, SpeechRecognition, Chroma vector database (https://github.com/chroma-core/chroma), OpenAI GPT-4 API or Hugging Face transformers for LLM

**Data:** Use a publicly available video QA dataset such as MSRVTT-QA or ActivityNet-QA as a substitute for MMBench-Video.

**Build it:**

1. Extract frames and audio from videos in the dataset at a fixed frame rate (e.g., 0.5 fps).
2. Generate textual descriptions for frames and transcribe audio segments.
3. Chunk and embed these texts into a vector database using Chroma.
4. Implement a retrieval mechanism to fetch top-k relevant chunks for a given question.
5. Use a large language model to generate answers conditioned on retrieved chunks.
6. Evaluate your system's QA accuracy and compare it to a baseline using only video frames.

**Verified links from the paper:**

- <https://github.com/chroma-core/chroma> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for the full retrieval-augmented generation pipeline, evaluation scripts, and a report comparing performance with and without audio and metadata, demonstrating the benefits of multimodal integration.

**Stretch goal:** Experiment with different retrieval chunk sizes and report their impact on accuracy and efficiency, replicating the paper's parameter analysis.

### Advanced — Adaptive Retrieval Strategies for Multi-RAG on Resource-Constrained Wearable Devices
*Effort: 3+ weeks*

You extend the Multi-RAG framework by developing an adaptive retrieval strategy that dynamically adjusts the number of retrieved chunks and frame sampling rate based on simulated resource constraints typical of wearable devices. You implement a prototype that demonstrates how retrieval and generation can be optimized for real-time autonomous navigation and health monitoring scenarios, addressing the paper's future direction on adaptive retrieval and wearable deployment.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of Multi-RAG's architecture and practical challenges in deploying multimodal RAG systems on constrained hardware, potentially opening dialogue with the professor.

**Grounded in:** Develop adaptive retrieval strategies that allocate computational resources dynamically based on real-time context.

**Tech stack:** Python 3.11, OpenCV, SpeechRecognition, Chroma vector database, OpenAI GPT-4 API or Hugging Face transformers, Docker for environment simulation

**Data:** Use a subset of a public video QA dataset (e.g., MSRVTT-QA) to simulate wearable device scenarios with limited compute and bandwidth.

**Build it:**

1. Implement a baseline Multi-RAG pipeline as in the intermediate project.
2. Design and implement an adaptive retrieval controller that varies frame sampling rate and number of retrieved chunks based on simulated resource budgets.
3. Integrate the controller with the retrieval and generation pipeline.
4. Simulate resource constraints (CPU, memory, latency) typical of wearable devices.
5. Evaluate the trade-offs between retrieval chunk count, frame rate, answer accuracy, and latency.
6. Document the design decisions, limitations, and potential real-world applicability.

**Verified links from the paper:**

- <https://github.com/chroma-core/chroma> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code for the adaptive Multi-RAG system, scripts to simulate resource constraints, evaluation results showing efficiency-accuracy trade-offs, and a detailed README discussing implications for wearable autonomous navigation and health monitoring.

**Stretch goal:** Incorporate continual learning components to adapt retrieval strategies based on user feedback or environmental changes, exploring another future direction of the paper.

_The paper's authors did not release their code, so the intermediate and advanced projects require reimplementation of Multi-RAG's core methods from the paper's description. Public video QA datasets are substitutes for MMBench-Video and may differ in complexity._
