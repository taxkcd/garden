---
title: "206 · A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering — Yuan Luo"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuan-luo"
source_hash: "c4b2779fc75f2c9aad5781e44d610382cc74c742abca3ceac41e089d7e172614"
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
