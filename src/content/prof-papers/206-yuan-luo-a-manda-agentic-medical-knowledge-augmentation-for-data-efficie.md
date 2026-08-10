---
title: "206 · A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering — Yuan Luo"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuan-luo"
source_hash: "ab081742cfcbe11e910a0d981c67eb138a76dc127fa9a64d9fd415481f30e0a7"
sequence: 206
generator: "outreach-garden: managed"
---

# 206 · A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering

## At a glance

- **Professor:** Yuan Luo
- **Institution:** Northwestern University
- **Paper:** [A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering](https://arxiv.org/abs/2510.02328)
- **Authors:** Ziqing Wang, Chengsheng Mao, Xiaole Wen, Yuan Luo, Kaize Ding
- **Year:** 2025

## Paper overview

This paper introduces A MANDA, a training-free agentic framework designed to improve medical visual question answering (Med-VQA) in scenarios with limited labeled data. It enhances the reasoning capabilities of medical multimodal large language models (Med-MLLMs) by decomposing complex questions into simpler sub-questions and by retrieving relevant medical knowledge from biomedical knowledge graphs. The framework iteratively refines answers, improving accuracy and reducing hallucinations without requiring extensive training.

### Why it matters

**Research problem:** Existing Med-MLLMs struggle in low-resource settings due to two main bottlenecks: (1) intrinsic reasoning bottleneck, where models fail to analyze fine-grained pathological details in medical images; and (2) extrinsic reasoning bottleneck, where models lack mechanisms to incorporate up-to-date specialized medical knowledge, leading to hallucinations and unreliable answers.

**Why it matters:** Accurate and reliable Med-VQA is crucial for assisting healthcare professionals in diagnosis, especially when labeled data is scarce. Addressing these bottlenecks can improve diagnostic efficiency and safety, reducing risks associated with incorrect or hallucinated AI outputs in clinical settings.

**Key contributions:**

- Proposed a training-free agentic framework addressing intrinsic and extrinsic reasoning bottlenecks in Med-MLLMs for data-efficient Med-VQA.
- Developed intrinsic medical knowledge augmentation via hierarchical coarse-to-fine question decomposition to enhance visual reasoning depth.
- Introduced extrinsic medical knowledge augmentation by retrieving and integrating relevant biomedical knowledge graph facts to ground reasoning.
- Designed an adaptive reasoning refinement mechanism to balance reasoning thoroughness and computational efficiency.
- Demonstrated strong zero-shot and few-shot performance improvements across eight diverse Med-VQA benchmarks.

## About the professor

**Yuan Luo** — Professor, Feinberg School of Medicine, Northwestern University.

Research interests: multi-modal machine learning, deep learning, vision/image processing, natural language processing, multi-omics, evaluating AI (fairness, transparency, bias), exploring the impact of AI (social, economic, cultural)

### Research links

- [Faculty/profile page](https://labs.feinberg.northwestern.edu/luolab/index.html)
- [Resolved homepage](https://labs.feinberg.northwestern.edu/luolab/)
- [Google Scholar](https://scholar.google.com/citations?user=txsHQx4AAAAJ&hl=en)
- [GitHub](https://github.com/luoyuanlab)
- [Social profile](https://twitter.com/yuanhypnosluo)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal machine learning, visual question answering, large language models, biomedical knowledge integration
**Already in this field?** Skip this entirely if you already understand how machine learning models combine and reason over multiple data modalities such as images and text.

To understand the A MANDA framework for medical visual question answering, a solid grasp of multimodal machine learning is essential, as it underpins the integration and reasoning over visual and textual medical data. The rigorous course option offers a deep, structured dive into multimodal machine learning concepts, while the fast track provides a concise, intuition-driven introduction suitable for quickly building foundational knowledge. Choose the lane that fits your available time and depth needs; both prepare you to follow the paper's agentic architecture and knowledge augmentation strategies.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 3.1 - Multimodal Representation Fusion, 4.1 - Multimodal Alignment, 5.1 - Multimodal Transformers - Part1, 5.2 - Structured Representations and Reasoning, 7.2 - Multimodal Inference and Knowledge; about 8 hours total — this subset covers foundational concepts, fusion methods, alignment, transformers, and reasoning crucial for understanding A MANDA.

*Why it unblocks this paper:* This is the 2023 Fall Carnegie Mellon University Multimodal Machine Learning course taught by LP Morency, offering a comprehensive and up-to-date treatment of multimodal representations, fusion, alignment, and reasoning, directly relevant to the paper's core techniques.

*If you want all of it:* About 20.1 hours across the first 17 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ms. Coffee Bean's Multimodalities](https://www.youtube.com/playlist?list=PLpZBeKTZRGPNKxoNaeMD9GViU_aH_HJab) — AI Coffee Break with Letitia · 15 videos · 2.7h across 15 episodes

**Watch only this:** Episodes 1 - What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition, 2 - Transformer combining Vision and Language? ViLBERT - NLP meets Computer Vision, 3 - Pre-training of BERT-based Transformer architectures explained – language and vision!, 4 and 5 - Why Multimodal Machine Learning models do not work (Parts 1 and 2), 7 - OpenAI’s CLIP explained!; about 1 hour total — these episodes cover definitions, key architectures, challenges, and examples foundational to understanding multimodal ML in the paper.

*Why it unblocks this paper:* Ms. Coffee Bean's Multimodalities series offers clear, concise explainers on multimodal machine learning fundamentals and challenges, providing an accessible overview that quickly builds intuition about vision-language models and multimodal fusion relevant to the paper.

*If you want all of it:* About 2.7 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the A MANDA framework for medical visual question answering, start by building foundational knowledge on multimodal large language models, biomedical knowledge graphs, question decomposition in AI reasoning, and adaptive reasoning refinement. These prerequisites provide the necessary background on the core technologies and methods that A MANDA innovates upon. Finally, focus on the core concept of medical visual question answering and the authors' own talk to grasp the specific contributions and design of the A MANDA framework.

### Multimodal large language models *(prerequisite)*
Multimodal large language models (Med-MLLMs) are foundational to A MANDA, as they combine visual and textual information for medical reasoning. Understanding their architecture and capabilities is essential to appreciate how A MANDA enhances their reasoning through knowledge augmentation.

*How the paper uses it:* A MANDA improves reasoning capabilities of Med-MLLMs by augmenting intrinsic and extrinsic medical knowledge.

▶ [Zhe Gan - How to Build Your Multimodal LLMs: From Pre ...](https://www.youtube.com/watch?v=Sblp_U1qI7g) — uclanlp-plus · 1:00:58

### Biomedical knowledge graphs *(prerequisite)*
Biomedical knowledge graphs provide structured external medical knowledge that A MANDA retrieves to ground its reasoning and reduce hallucinations. Familiarity with their construction and use in AI systems is critical to understand the extrinsic knowledge augmentation component.

*How the paper uses it:* A MANDA's Retriever agent uses the SPOKE biomedical knowledge graph to integrate relevant medical facts into reasoning.

▶ [Building, Analyzing and Querying Biomedical Knowledge ...](https://www.youtube.com/watch?v=1TsPQC-Oax0) — John Snow Labs – Healthcare AI Company · 22:37

### Question decomposition in AI reasoning *(prerequisite)*
Hierarchical question decomposition breaks complex questions into simpler sub-questions, enabling finer-grained reasoning. This technique underpins A MANDA's intrinsic knowledge augmentation by allowing detailed visual analysis through iterative questioning.

*How the paper uses it:* A MANDA's Explorer agent performs coarse-to-fine question decomposition to enhance intrinsic medical knowledge augmentation.

▶ [The Era of Hierarchical Reasoning Models](https://www.youtube.com/watch?v=J49kXKlF6q8) — AI Papers Academy · 11 months ago

### Adaptive reasoning refinement *(prerequisite)*
Adaptive reasoning refinement dynamically balances reasoning thoroughness and computational efficiency by iteratively improving answers until confidence thresholds are met. Understanding this mechanism clarifies how A MANDA controls its multi-agent iterative process.

*How the paper uses it:* A MANDA's Evaluator agent adaptively controls the iterative reasoning process to optimize accuracy and efficiency.

▶ [Real-Time Rethinking: Adaptive Reasoning in LLMs Explained](https://www.youtube.com/watch?v=uhiAFEQWaL0) — Agility AI · 11 months ago

### Medical visual question answering
Medical visual question answering (Med-VQA) is the central task addressed by A MANDA, involving answering clinical questions grounded in medical images. A solid grasp of Med-VQA challenges and existing approaches contextualizes the significance of A MANDA's contributions.

*How the paper uses it:* A MANDA targets data-efficient Med-VQA by addressing reasoning bottlenecks in Med-MLLMs.

▶ [MedAI Session 23: Multimodal medical research of vision and ...](https://www.youtube.com/watch?v=dv0azbOgTZE) — Stanford MedAI · 50:23

### A MANDA framework talk *(the paper's own talk)*
The authors' own presentation on A MANDA offers the most direct and detailed insight into their novel agentic framework, its design, and experimental results. This talk is essential for understanding the framework's architecture and innovations from the creators themselves.

*How the paper uses it:* This talk presents the A MANDA framework, detailing its multi-agent design and knowledge augmentation strategies.

▶ [Agentic AI in Medicine](https://www.youtube.com/watch?v=4utpXFS22IM) — Wilson Wang · 3 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the A MANDA framework for medical visual question answering. We start with the basics of multimodal large language models, then cover biomedical knowledge graphs as key external knowledge sources. Next, we explore question decomposition techniques to improve reasoning, followed by adaptive reasoning refinement for iterative answer improvement. Finally, we conclude with a focused look at the A MANDA framework itself, tying all concepts together.

### Multimodal large language models *(prerequisite)*
Multimodal large language models (MLLMs) combine text and visual inputs to understand and generate language grounded in images. Learning how these models integrate vision and language is essential to grasp how A MANDA enhances medical visual question answering.

*How the paper uses it:* A MANDA builds on Med-MLLMs that combine medical images and language for question answering.

▶ [Understanding Multimodal LLMs in 5 Minutes !](https://www.youtube.com/watch?v=10M91BkxTOw) — AI Stories Podcast - Neil Leiser · 5:03

### Biomedical knowledge graphs *(prerequisite)*
Biomedical knowledge graphs organize medical facts and relationships in a structured network, enabling AI to retrieve relevant, up-to-date medical knowledge. Understanding these graphs helps explain how A MANDA grounds its reasoning in trusted external medical data.

*How the paper uses it:* A MANDA’s Retriever agent uses biomedical knowledge graphs like SPOKE to augment reasoning with external medical facts.

▶ [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — Lars Juhl Jensen · 6:09

### Question decomposition in AI reasoning *(prerequisite)*
Question decomposition breaks complex questions into simpler sub-questions, allowing AI to reason step-by-step and analyze details more effectively. This technique is key to improving fine-grained visual reasoning in medical images.

*How the paper uses it:* A MANDA’s Explorer agent uses hierarchical coarse-to-fine question decomposition to enhance intrinsic medical knowledge augmentation.

▶ [Break Down Complex Questions with Query Decomposition](https://www.youtube.com/watch?v=kR4pVvBnOII) — Haystack · 10:37

### Adaptive reasoning refinement *(prerequisite)*
Adaptive reasoning refinement is an iterative process where the AI evaluates its confidence and decides when to stop refining its answer, balancing accuracy with computational efficiency. This mechanism ensures thorough yet efficient reasoning.

*How the paper uses it:* A MANDA’s Evaluator agent dynamically controls iterative reasoning to stop when sufficient confidence is reached.

▶ [5 ways that AI improves ITSELF! [EP509] | The AI Guide](https://www.youtube.com/watch?v=mRb-xvufEIU) — The AI Guide · 17:03

### A MANDA framework talk *(the paper's own talk)*
This presentation provides a detailed overview of the A MANDA framework, explaining how its multi-agent system integrates intrinsic and extrinsic medical knowledge augmentation to improve Med-VQA performance without training.

*How the paper uses it:* This is the authors’ own talk describing the design and benefits of the A MANDA framework.

▶ [Agentic AI in Medicine](https://www.youtube.com/watch?v=4utpXFS22IM) — Wilson Wang · 3 weeks ago

## Already in your library

- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the A MANDA framework for medical visual question answering (Med-VQA). The beginner project focuses on reproducing the intrinsic question decomposition mechanism on a small scale, the intermediate project uses the authors' released code to run and extend A MANDA on a public Med-VQA dataset with baseline comparison, and the advanced project explores extending the framework by integrating additional external medical knowledge sources, addressing a key future direction from the paper.

### Beginner — Intrinsic Question Decomposition for Medical VQA
*Effort: a weekend, ~8 hours*

You build a simplified prototype of the Explorer agent's intrinsic medical knowledge augmentation by implementing a coarse-to-fine question decomposition pipeline. Using a small set of example medical images and complex questions (which you simulate or extract from public Med-VQA samples), you write code that decomposes complex questions into simpler sub-questions and generates detailed answers for each.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core intrinsic reasoning bottleneck addressed by A MANDA and how hierarchical question decomposition improves visual reasoning depth, a key contribution of the paper.

**Grounded in:** Intrinsic Med-KA uses coarse-to-fine question decomposition for comprehensive diagnosis.

**Tech stack:** Python 3.11, Jupyter Notebook, OpenAI API or HuggingFace transformers for LLM calls

**Data:** Use a small subset of publicly available medical images with associated questions from a public Med-VQA dataset such as VQA-RAD or PathVQA, or simulate a few examples based on paper descriptions.

**Build it:**

1. Select or simulate 5-10 complex medical visual questions with corresponding images.
2. Implement a function that uses an LLM to decompose each complex question into simpler sub-questions.
3. Implement a function that answers each sub-question using either LLM or heuristic rules.
4. Aggregate sub-question answers to form a final detailed answer.
5. Evaluate and document examples showing how decomposition improves answer detail and reasoning.

**Ships as:** A GitHub repo with Jupyter notebooks demonstrating question decomposition and answering on sample medical images, with README explaining the approach and examples.

**Stretch goal:** Add a simple confidence scoring mechanism to decide when to stop decomposing further sub-questions.

### Intermediate — Run and Extend A MANDA on Public Med-VQA Dataset
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' released A MANDA codebase on a publicly available Med-VQA dataset (e.g., VQA-RAD) to reproduce zero-shot or few-shot performance improvements. Then, you implement a simple baseline Med-MLLM inference pipeline without knowledge augmentation to compare accuracy and hallucination rates. You report metrics similar to those in the paper.

**Why it shows you understood the paper:** This project shows you can operate the full A MANDA framework, understand its multi-agent architecture, and quantitatively evaluate its impact on Med-VQA benchmarks, directly engaging with the authors' core contributions and results.

**Grounded in:** Proposed a training-free agentic framework addressing intrinsic and extrinsic reasoning bottlenecks in Med-MLLMs for data-efficient Med-VQA; Achieved average zero-shot accuracy improvements of up to 19.36% over baseline Med-MLLMs.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or local LLMs, Docker (optional)

**Data:** Use the VQA-RAD dataset or another publicly available Med-VQA dataset as a substitute for the paper's benchmarks.

**Build it:**

1. Clone the A MANDA repository from https://github.com/REAL-Lab-NU/AMANDA and set up the environment.
2. Download and preprocess the chosen Med-VQA dataset (e.g., VQA-RAD).
3. Run the A MANDA pipeline in zero-shot and few-shot modes on the dataset and record accuracy and hallucination metrics.
4. Implement a baseline Med-MLLM inference pipeline without knowledge augmentation on the same dataset.
5. Compare and visualize performance differences between A MANDA and baseline.
6. Write a report summarizing findings and insights.

**Verified links from the paper:**

- <https://github.com/REAL-Lab-NU/AMANDA> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run A MANDA and baseline on a public Med-VQA dataset, evaluation metrics, and a README with results and analysis.

**Stretch goal:** Experiment with swapping the underlying LLM engine (e.g., GPT-4o vs. an open-source model) to observe performance changes.

### Advanced — Integrate Clinical Guidelines into A MANDA for Enhanced Knowledge Retrieval
*Effort: few weeks, ~40+ hours*

You extend the A MANDA framework by incorporating an additional extrinsic knowledge source: a curated set of clinical guidelines or medical textbook excerpts (publicly available). You modify the Retriever agent to query this new knowledge base alongside the SPOKE biomedical knowledge graph, integrating retrieved facts into the reasoning process. You evaluate the impact on Med-VQA accuracy and hallucination reduction compared to the original framework.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by broadening extrinsic knowledge retrieval beyond biomedical graphs, demonstrating your ability to extend and adapt the framework for real-world clinical knowledge integration.

**Grounded in:** Current extrinsic knowledge retrieval relies mainly on biomedical knowledge graphs; incorporating diverse sources like textbooks or clinical guidelines is future work.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or local LLMs, SQLite or JSON for clinical guideline storage

**Data:** Use publicly available clinical guideline documents or medical textbook excerpts (e.g., NIH guidelines, WHO protocols) as the additional knowledge source.

**Build it:**

1. Collect and preprocess a small corpus of clinical guidelines or textbook excerpts relevant to the Med-VQA domain.
2. Extend the Retriever agent in the A MANDA codebase to query this corpus alongside SPOKE.
3. Modify the reasoning pipeline to incorporate retrieved guideline facts into answer generation.
4. Run experiments on a Med-VQA dataset to compare performance and hallucination rates with and without guideline integration.
5. Analyze results and document the impact of multi-source knowledge augmentation.

**Verified links from the paper:**

- <https://github.com/REAL-Lab-NU/AMANDA> — released by the paper's authors

**Ships as:** A GitHub repo fork of A MANDA with extended Retriever agent, scripts for knowledge integration, evaluation results, and a detailed README explaining the extension and findings.

**Stretch goal:** Implement a dynamic weighting mechanism for the Retriever to prioritize knowledge sources based on question type or confidence.

_The public Med-VQA datasets used as substitutes may differ in scale and complexity from the paper's eight benchmarks; results may vary accordingly._
