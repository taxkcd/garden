---
title: "900 · MIRAGE: A Benchmark for Multimodal Information-Seeking and Reasoning in Agricultural Expert-Guided Conversations — Vikram S. Adve"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vikram-s-adve"
source_hash: "d0f6652c663d7c8f97974e08963638a2a62c967c0886c8f29fc53f2b2b822f45"
sequence: 900
generator: "outreach-garden: managed"
---

# 900 · MIRAGE: A Benchmark for Multimodal Information-Seeking and Reasoning in Agricultural Expert-Guided Conversations

## At a glance

- **Professor:** Vikram S. Adve
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [MIRAGE: A Benchmark for Multimodal Information-Seeking and Reasoning in Agricultural Expert-Guided Conversations](https://arxiv.org/pdf/2506.20100)
- **Authors:** Vardhan Dongre, Chi Gui, Shubham Garg, Hooshang Nayyeri, Gokhan Tur, Dilek Hakkani-Tür, Vikram S. Adve
- **Year:** 2026

## Paper overview

MIRAGE is a new benchmark dataset designed to evaluate AI models on complex, real-world agricultural expert consultations that involve images, natural language questions, and expert answers. It tests models' ability to identify plants, pests, and diseases, reason about symptoms, and provide management advice, including deciding when to ask clarifying questions. The dataset is large, diverse, and realistic, reflecting over 35,000 real user-expert interactions with thousands of biological entities. Current state-of-the-art models still struggle on this benchmark, especially with rare entities and ambiguous queries.

### Why it matters

**Research problem:** Existing vision-language benchmarks do not adequately capture the complexity of real-world, expert-level agricultural consultations that require multimodal understanding, causal reasoning, handling ambiguous and underspecified queries, and decision-making about when to clarify or respond.

**Why it matters:** Accurate AI assistance in agriculture can help farmers with critical decisions about crop health, pest diagnosis, and management. Inaccurate or unsupported AI outputs can lead to serious consequences. Therefore, rigorous evaluation frameworks that reflect real-world consultation complexity are essential for developing reliable AI tools in agriculture.

**Key contributions:**

- Introduced MIRAGE, a large-scale, realistic multimodal benchmark for expert-level agricultural consultations.
- Designed tasks that require models to identify biological entities, reason causally about symptoms, and provide management advice.
- Included a multi-turn decision-making task where models decide whether to clarify or respond based on dialogue context.
- Developed a novel evaluation framework using an ensemble of reasoning-capable language models as judges for interpretable and reproducible scoring.
- Demonstrated significant challenges for current state-of-the-art vision-language models, especially on rare entities and open-world generalization.

## About the professor

**Vikram S. Adve** — Professor, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: Digital Agriculture, AI in Agriculture, Edge Computing, Heterogeneous Computing

### Research links

- [Faculty/profile page](https://vikram.cs.illinois.edu)
- [Lab website](https://digitalag.illinois.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Vision-Language Multimodal Learning
**The paper assumes:** vision-language multimodal learning, multimodal deep learning architectures, cross-modal representation learning, multimodal reasoning
**Already in this field?** Skip this entirely if you already understand how AI models jointly process and reason over images and text in vision-language tasks.

This background focuses on vision-language multimodal learning, essential for understanding how AI models integrate and reason over visual and textual data jointly, as required by the MIRAGE benchmark paper. The rigorous course option offers a deep, structured university-level introduction to multimodal machine learning concepts and architectures, while the fast track provides a concise, intuition-driven overview of key multimodal representation learning techniques. Choose the course for comprehensive mastery or the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 through 5.2 (Introduction, Multimodal Research Task, Unimodal Representations Part 1 & 2, Multimodal Representation Fusion, Multimodal Coordination and Fission, Multimodal Alignment, and Aligned Representation), about 8 hours — this subset covers the core principles of multimodal representation and alignment critical for understanding vision-language models.

*Why it unblocks this paper:* This is the 2023 Fall Carnegie Mellon University Multimodal Machine Learning course taught by LP Morency, covering foundational and advanced topics in multimodal representation, fusion, alignment, transformers, and reasoning, directly relevant to the vision-language challenges addressed in the MIRAGE paper.

*If you want all of it:* About 20.1 hours across the first 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multimodal Representation Learning](https://www.youtube.com/playlist?list=PLyXDCTF4yPcRRLMLUajR2AlNb3YN9mjKv) — AI Focus · 9 videos · 0.7h across 9 episodes

**Watch only this:** All 9 episodes, about 0.7 hours total — the entire playlist is brief and focused, giving a fast yet comprehensive introduction to multimodal representation learning.

*Why it unblocks this paper:* This short playlist by AI Focus offers concise, clear explainers on multimodal representation learning techniques, providing a quick conceptual overview of key methods like visual reasoning, cross-modality transformers, and few-shot learning, which underpin the vision-language tasks in MIRAGE.

*If you want all of it:* 0.7 hours total

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MIRAGE benchmark paper, start with foundational concepts including vision-language model architectures, causal reasoning in AI, interactive dialogue decision-making, and benchmark evaluation with language model judges. These prerequisites provide the necessary background on the models, reasoning, dialogue systems, and evaluation methods used in MIRAGE. Finally, focus on the core concept of the MIRAGE benchmark itself through the authors' own talk, which directly presents the dataset, tasks, and evaluation framework.

### Causal reasoning in AI systems *(prerequisite)*
Causal reasoning is crucial for understanding how AI models infer causes of symptoms and provide management advice in agricultural consultations. This background supports comprehension of MIRAGE's emphasis on causal explanation and reasoning challenges.

*How the paper uses it:* MIRAGE tasks require models to reason causally about symptoms and management advice.

▶ [Judea Pearl: Causal Reasoning, Counterfactuals, and the Path to AGI | Lex Fridman Podcast #56](https://www.youtube.com/watch?v=pEBI0vF45ic) — Lex Fridman · 6y ago

### Interactive dialogue decision-making *(prerequisite)*
Interactive dialogue decision-making knowledge is key to understanding MIRAGE's multi-turn clarify-or-respond task, where models decide whether to ask clarifying questions or respond directly. This area covers dialogue system design and decision processes.

*How the paper uses it:* MIRAGE includes a multi-turn task requiring models to decide whether to clarify or respond.

▶ [Interactive Learning of Task-Oriented Dialog Systems, Rasa Developer Summit 2019](https://www.youtube.com/watch?v=eAncgjQjqlE) — Rasa · 6y ago

### Multimodal reasoning in AI
Multimodal reasoning is central to MIRAGE since the benchmark tests models on combined image and text inputs in complex agricultural consultations. Understanding current research on multimodal reasoning helps contextualize the challenges MIRAGE exposes.

*How the paper uses it:* MIRAGE evaluates models' ability to perform multimodal information-seeking and reasoning.

▶ [Vision-R1 Reasoning in Multimodal Large Language Models via RL](https://www.youtube.com/watch?v=AGPfdIuK1cQ) — Neural Intel Media · 10mo ago

### MIRAGE benchmark talk *(paper-talk search result; attribution unverified)*
The authors' own talk on MIRAGE provides the most direct and authoritative presentation of the benchmark, its design, tasks, and evaluation results. This talk is essential for a deep understanding of the paper's contributions and challenges.

*How the paper uses it:* This is the authors' presentation on the MIRAGE benchmark for deep understanding.

▶ [MIRAGE: Benchmark for Multimodal Information‑Seeking & Reasoning in Agricultural Conversations](https://www.youtube.com/watch?v=iqRsKk5jICI) — Vardhan Dongre · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational AI concepts needed to understand the MIRAGE benchmark paper, starting with vision-language model architectures and causal reasoning, then moving to interactive dialogue decision-making and benchmark evaluation methods, before concluding with the core MIRAGE benchmark itself. Each step builds intuition about how AI models process multimodal inputs, reason causally, make dialogue decisions, and are evaluated in complex agricultural consultation scenarios.

### Causal reasoning in AI systems *(prerequisite)*
Understand how AI systems infer cause-and-effect relationships rather than just correlations. This is crucial for reasoning about plant symptoms and disease management advice in MIRAGE, where models must explain why a symptom occurs and suggest treatments.

*How the paper uses it:* MIRAGE tasks require causal reasoning about symptoms and management advice.

▶ [What is Causal AI](https://www.youtube.com/watch?v=UPvb20tw0NE) — CausAI · 2y ago

### Interactive dialogue decision-making *(prerequisite)*
Explore how AI systems decide when to ask clarifying questions versus providing answers in conversations. This skill is key for the multi-turn MIRAGE task where models must choose to clarify ambiguous user queries or respond directly.

*How the paper uses it:* MIRAGE-MMMT tests models on clarify-or-respond decision-making in multi-turn dialogues.

▶ [An Introduction to Dialogue Systems](https://www.youtube.com/watch?v=vKi-1Ezelxs) — Vishal Bhalla · 9y ago

### Multimodal reasoning in AI
Understand how AI models combine and reason over multiple input types, such as images and text, to answer complex questions. This is central to MIRAGE, where models interpret plant images and expert dialogue together.

*How the paper uses it:* MIRAGE requires multimodal reasoning over images, text, and metadata in agricultural consultations.

▶ [Multimodal Visualization-of-Thought (MVoT): Visual Thinking for MLLMs in Spatial Reasoning](https://www.youtube.com/watch?v=yOaWSSb2DPo) — PaperLens · 1y ago

### MIRAGE benchmark talk *(paper-talk search result; attribution unverified)*
Watch a focused presentation by one of the MIRAGE authors explaining the benchmark's design, tasks, and challenges. This talk provides direct insight into the dataset's real-world agricultural consultation setting and evaluation.

*How the paper uses it:* This video is a direct presentation of the MIRAGE benchmark by its author.

▶ [MIRAGE: Benchmark for Multimodal Information‑Seeking & Reasoning in Agricultural Conversations](https://www.youtube.com/watch?v=iqRsKk5jICI) — Vardhan Dongre · 1y ago

## Already in your library

- [LLMs | Multimodal Models-I | Lec17.1](https://www.youtube.com/watch?v=IXp3P1MPB0Q) — also for: D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models (A. Lynn Abbott)
- [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Multimodal Reasoning: Survey & Roadmap](https://www.youtube.com/watch?v=z0u9kSuspbQ) — also for: Modality-Agnostic Latent Thinking (Bryan A. Plummer)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Vision-Language Models (VLMs) Explained | GPT-4V, LLaVA & CLIP](https://www.youtube.com/watch?v=MCQKDNXc4Z0) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Language Model Evaluation and Perplexity](https://www.youtube.com/watch?v=gHHy2w2agEo) — also for: “Talk to me with left, right, and angles”: Lexical entrainment in spoken Hebrew dialogue (Rivka Levitan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the MIRAGE benchmark paper. Starting with a small-scale reproduction of the benchmark's identification task using existing vision-language models, you then implement and evaluate a core MIRAGE task on a public dataset, and finally extend the benchmark's multi-turn clarify-or-respond decision-making to a new domain or with improved context integration. Each project builds on your existing software and ML skills while progressively introducing new concepts from the paper.

### Beginner — Simple Plant Disease Identification with Vision-Language Models
*Effort: a weekend, ~8 hours*

You build a small demo that takes plant images and user questions about plant health, then uses an off-the-shelf vision-language model to identify the plant or disease. You replicate a simplified version of the MIRAGE MMST-ID task by scoring the model's identification accuracy on a small curated set of plant images and questions.

**Why it shows you understood the paper:** This project shows you grasp the core challenge of multimodal identification in MIRAGE and the difficulty current models face, especially with biological entities. It demonstrates your ability to apply vision-language models to agricultural expert consultation scenarios.

**Grounded in:** Key contribution: Introduced MIRAGE, a large-scale, realistic multimodal benchmark for expert-level agricultural consultations; Key result: GPT-4.1 achieved 43.9% identification accuracy on MMST-ID task, showing the challenge of identification.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), OpenCV, Jupyter Notebook

**Data:** Use a small subset of publicly available plant disease images from PlantVillage dataset (as a substitute for MIRAGE images) combined with manually crafted natural language questions simulating MIRAGE queries.

**Build it:**

1. Collect a small set (~50) of plant disease images from the PlantVillage dataset.
2. Write natural language questions about plant identification or disease symptoms for these images.
3. Use a pretrained vision-language model (e.g., BLIP or CLIP) to generate predictions for each image-question pair.
4. Implement a simple accuracy metric comparing model predictions to ground truth labels.
5. Document the setup, results, and challenges in a README.

**Ships as:** A GitHub repo with code to run the identification demo, evaluation script, sample data, and a README explaining the connection to MIRAGE's identification task and model performance.

**Stretch goal:** Add metadata like location or time as additional inputs and analyze if the model's accuracy improves, reflecting MIRAGE's metadata challenge.

### Intermediate — Reimplementation and Evaluation of MIRAGE MMST Task on Public Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core MIRAGE single-turn multimodal symptom identification and management (MMST) task pipeline using a public vision-language dataset with plant images and textual queries. You fine-tune a vision-language model on the dataset and evaluate identification accuracy and management response quality, comparing against a baseline zero-shot model.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce MIRAGE's core task methodology, including multimodal input processing, fine-tuning, and evaluation with reasoning-aware metrics. It shows you understand the benchmark's challenge of causal reasoning and management advice generation.

**Grounded in:** Key contribution: Designed tasks requiring models to identify biological entities, reason causally about symptoms, and provide management advice; Key result: Fine-tuning improves accuracy on seen entities but struggles on unseen ones.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, Jupyter Notebook

**Data:** Use the PlantVillage dataset with images and labels, augmented with synthetic textual queries and expert-like management responses created manually or semi-automatically to simulate MIRAGE MMST task.

**Build it:**

1. Prepare the dataset by pairing PlantVillage images with synthetic natural language symptom queries and management advice responses.
2. Implement a vision-language model pipeline (e.g., fine-tune Qwen2.5-VL or BLIP) on the dataset.
3. Train the model on a training split and evaluate on a test split for identification accuracy and response quality.
4. Compare results against a baseline zero-shot model without fine-tuning.
5. Analyze performance gaps on seen vs unseen entities and document findings.
6. Write a detailed README linking the project to MIRAGE's MMST task and evaluation metrics.

**Verified links from the paper:**

- <https://github.com/MIRAGE-Benchmark/MIRAGE-Benchmark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for dataset preparation, model fine-tuning, evaluation scripts, and a report README showing quantitative results and discussion of generalization challenges.

**Stretch goal:** Incorporate chain-of-thought prompting or reasoning language model judges to improve management advice evaluation, as done in MIRAGE.

### Advanced — Extending MIRAGE Multi-turn Clarify-or-Respond Task with Contextual Metadata
*Effort: 3+ weeks*

You develop an extension of the MIRAGE multi-turn clarify-or-respond decision-making (MMMT) task by integrating explicit context modeling of metadata such as location and time. You build a prototype system that uses retrieval-augmented generation or domain-adaptive pretraining to improve decision accuracy on when to clarify or respond in agricultural consultations, addressing a key MIRAGE limitation.

**Why it shows you understood the paper:** This project tackles a stated MIRAGE limitation and future direction by improving models' use of structured metadata and latent context inference. It shows deep comprehension of the benchmark's multi-turn decision-making challenges and the need for open-world generalization strategies.

**Grounded in:** Limitation: Limited gains from metadata suggest models do not effectively leverage structured context like time and location; Future direction: Improve explicit context modeling and integration with external knowledge bases for metadata.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), LangChain or similar retrieval framework, Jupyter Notebook

**Data:** Use a simulated multi-turn dialogue dataset based on MIRAGE task descriptions, augmented with metadata fields (location, time). Data is synthesized from public plant disease dialogues or constructed manually to reflect clarify-or-respond scenarios.

**Build it:**

1. Design a multi-turn dialogue dataset with clarify-or-respond labels and associated metadata fields.
2. Implement a retrieval-augmented generation pipeline that incorporates metadata and external knowledge for context.
3. Fine-tune or prompt a vision-language model to decide when to clarify or respond based on dialogue and metadata.
4. Evaluate decision accuracy against a baseline model ignoring metadata.
5. Analyze improvements and document challenges in metadata integration.
6. Write a comprehensive README linking the project to MIRAGE's MMMT task and future directions.

**Ships as:** A GitHub repo with code for dataset creation, model training/inference, evaluation scripts, and a detailed report README discussing metadata integration impact and open challenges.

**Stretch goal:** Extend the system to support dynamic, interactive dialogues with user simulators for adaptive conversational flow, addressing another MIRAGE limitation.
