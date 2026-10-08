---
title: "607 · Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders — Seungbae Kim"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-seungbae-kim"
source_hash: "24df04a716e52503ad89024ddd6447bc5ab93be478fc4a36e73c11c98e7d8d7c"
sequence: 607
generator: "outreach-garden: managed"
---

# 607 · Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders

## At a glance

- **Professor:** Seungbae Kim
- **Institution:** University of South Florida
- **Paper:** [Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders](https://arxiv.org/pdf/2502.13983)
- **Authors:** Seungbae Kim, Daeun Lee, Brielle Stark, Jinyoung Han
- **Year:** 2025

## Paper overview

This paper presents a novel speech recognition system that integrates hand gestures with spoken language to improve communication for individuals with language disorders such as aphasia. By using a multimodal large language model, the system interprets both speech and iconic gestures to generate more accurate and meaningful transcripts, even when speech is incomplete or disfluent.

### Why it matters

**Research problem:** Current automatic speech recognition (ASR) systems struggle to accurately transcribe speech from individuals with language disorders due to disfluencies and speech impairments. Existing audio-visual speech recognition (AVSR) systems rely on lip and facial cues, which are often unreliable for this population. There is a lack of systems that incorporate non-verbal communication like gestures, which these individuals frequently use to supplement speech.

**Why it matters:** Individuals with language disorders face significant communication barriers that reduce their quality of life and limit their ability to use voice-assisted technologies. Improving ASR systems to understand both speech and gestures can enhance communication effectiveness, reduce frustration, and support better social interactions and therapy outcomes.

**Key contributions:**

- Introduction of a gesture-aware zero-shot speech recognition framework tailored for individuals with language disorders.
- Use of multimodal large language models to integrate speech and iconic gestures without task-specific training.
- Demonstration of the system’s ability to generate enriched transcripts that capture latent meanings conveyed by gestures.
- Detailed analysis of gesture types and their characteristics in a structured task (Peanut Butter Sandwich Task) using the AphasiaBank dataset.
- Evaluation showing improved transcript quality over state-of-the-art ASR models like Whisper.

## About the professor

**Seungbae Kim** — Assistant Professor, Bellini College of Artificial Intelligence, Cybersecurity and Computing, University of South Florida.

Research interests: Graph-based learning, Multimodal learning, Generative AI, Responsible AI

### Research links

- [Faculty/profile page](https://sites.google.com/site/sbkimcv)
- [Resolved homepage](https://sites.google.com/view/csailusf)
- [Google Scholar](https://scholar.google.com/citations?user=gFZlotAAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal machine learning, zero-shot learning, and large language model integration
**Already in this field?** Skip this entirely if you already understand how multimodal machine learning systems combine and process heterogeneous data sources using zero-shot methods and large language models.

This background focuses on multimodal machine learning, essential for understanding how the paper integrates speech and iconic gestures using large language models to improve speech recognition for individuals with language disorders. The rigorous course option offers a deep, structured university-level lecture series covering foundational concepts and advanced topics, while the fast track provides a concise, clear tutorial series that covers the core technical challenges efficiently. Choose the course for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 3.1 - Multimodal Representation Fusion, 4.1 - Multimodal Alignment, 5.1 - Multimodal Transformers - Part1, 7.1 - Multimodal Interaction, and 7.2 - Multimodal Inference and Knowledge; about 8.5 hours total — these cover the key concepts of multimodal fusion, alignment, and inference needed to understand the paper's approach.

*Why it unblocks this paper:* This is a recent, authoritative Carnegie Mellon University course on multimodal machine learning taught by LP Morency, covering foundational and advanced topics directly relevant to integrating multiple modalities like speech and gestures with large language models, matching the paper's core methodology.

*If you want all of it:* About 20.1 hours across the first 17 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multimodal Machine Learning | CVPR 2022 Tutorial](https://www.youtube.com/playlist?list=PLki3HkfgNEsKPcpj5Vv2P98SRAT9wxIDa) — Artificial Intelligence · 7 videos · 3.1h across 7 episodes

**Watch only this:** Parts 1 through 4 (Introduction, Representation, Alignment, Reasoning); about 1.75 hours total — these episodes cover the essential concepts needed to grasp the multimodal integration and reasoning aspects of the paper.

*Why it unblocks this paper:* This CVPR 2022 tutorial playlist provides a concise, well-structured overview of core multimodal machine learning challenges such as representation, alignment, reasoning, generation, and quantification, which are directly relevant to the paper's multimodal LLM framework.

*If you want all of it:* About 3.1 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders," start by building foundational knowledge in automatic speech recognition (ASR), gesture recognition in computer vision, and zero-shot multimodal learning. These prerequisites provide the technical background on speech transcription challenges, gesture detection, and zero-shot generalization in multimodal models. Finally, focus on the core concept of the paper—gesture-aware zero-shot speech recognition integrating multimodal large language models—highlighting the authors' own related talk and advanced research insights.

### automatic speech recognition ASR *(prerequisite)*
This section covers foundational knowledge about automatic speech recognition systems, their challenges especially with impaired or disfluent speech, and baseline technologies like Whisper. Understanding ASR is critical to grasp the limitations the paper addresses and the baseline comparisons made.

*How the paper uses it:* The paper improves upon state-of-the-art ASR models by integrating gesture information to better transcribe speech from individuals with language disorders.

▶ [IAP @ Gridspace 7 - Automatic Speech Recognition (ASR)](https://www.youtube.com/watch?v=fRVNajL4vhg) — Gridspace · 57:55 · 3 years ago

### gesture recognition in computer vision *(prerequisite)*
This section introduces computer vision techniques for detecting and interpreting hand gestures, including iconic gestures relevant to communication. It provides the technical background for how the paper detects gestures from video frames and maps them to semantic meanings.

*How the paper uses it:* The paper relies on zero-shot gesture recognition to extract iconic gestures that supplement speech for improved transcript generation.

▶ [Lec 38 : Gesture Recognition](https://www.youtube.com/watch?v=jAFfkR0U5Bo) — NPTEL IIT Guwahati · 1:18:09 · 5 years ago

### zero shot multimodal learning *(prerequisite)*
Zero-shot multimodal learning explains how models generalize to new tasks or modalities without task-specific training. This is key to understanding the paper's approach of using a multimodal large language model to integrate speech and gesture inputs without additional training.

*How the paper uses it:* The paper's framework uses zero-shot multimodal learning to combine speech and gesture modalities for enriched transcript generation.

▶ [Lecture 10.2: New research directions (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=g3ZpSiwusrM) — LP Morency · 1:19:58 · 5 years ago

### multimodal large language models
This section focuses on the integration of multiple modalities, such as speech and gestures, using large language models. It covers recent advances and challenges in multimodal AI, which is central to the paper's method of contextual rewriting and semantic enrichment.

*How the paper uses it:* The paper leverages multimodal large language models to fuse speech and gesture data into semantically enriched transcripts.

▶ [Lecture 1 – Course Introduction (MIT How to AI Almost Anything/Multimodal AI, Spring 2026)](https://www.youtube.com/watch?v=Xm2crsD5ngA) — Paul Liang · 1:11:10 · 10 hours ago

### paper authors talk *(the paper's own talk)*
This section would ideally contain the authors' own presentation of their novel gesture-aware zero-shot speech recognition system. However, no direct talk by the authors on this exact paper is available. Instead, a closely related talk on zero-shot gesture generation from speech is included to provide insight into related gesture and speech integration research by experts.

*How the paper uses it:* While not the exact paper talk, this video presents advanced research on zero-shot gesture generation from speech, closely related to the paper's multimodal gesture-speech integration approach.

▶ [ZeroEGGS: Zero-shot Example-based Gesture Generation from Speech](https://www.youtube.com/watch?v=YFg7QKWkjwQ) — Saeed Ghorbani · 6:02 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding the paper's novel gesture-aware zero-shot speech recognition system. We start with the basics of automatic speech recognition (ASR), then cover gesture recognition in computer vision, followed by zero-shot multimodal learning to grasp how models generalize without task-specific training. Finally, we explore the core idea of integrating speech and gesture inputs using multimodal large language models to enrich transcripts for individuals with language disorders.

### automatic speech recognition ASR *(prerequisite)*
Automatic Speech Recognition (ASR) is the technology that converts spoken language into text. Understanding ASR fundamentals, including challenges with disfluent or impaired speech, sets the stage for appreciating improvements made by multimodal systems.

*How the paper uses it:* The paper builds on ASR as the baseline for transcribing speech from individuals with language disorders, which it then enhances with gesture information.

▶ [Automatic Speech Recognition Systems ( ASR ) | Deep Learning | Artificial Intelligence Part 1](https://www.youtube.com/watch?v=D3JyZFkoJEE) — Ligane · 6:58 · 6 years ago

### gesture recognition in computer vision *(prerequisite)*
Gesture recognition involves detecting and interpreting hand movements from video data using computer vision techniques. This knowledge helps understand how the system identifies iconic gestures that supplement speech.

*How the paper uses it:* The paper uses zero-shot gesture recognition to detect iconic gestures that enrich speech transcripts for better communication.

▶ [Gesture recognition - ML on Web with MediaPipe: Episode 3](https://www.youtube.com/watch?v=cJgDuywJv8Y) — Google for Developers · 6:28 · 2 years ago

### zero shot multimodal learning *(prerequisite)*
Zero-shot multimodal learning enables models to perform tasks involving multiple data types (e.g., speech and gestures) without task-specific training examples. This concept is key to how the paper's system generalizes to new inputs without extensive labeled data.

*How the paper uses it:* The paper's framework leverages zero-shot learning to integrate speech and gesture modalities without needing specialized training for this combined task.

▶ [Zero-Shot, One-Shot & Few-Shot Learning EXPLAINED | Master Prompt Engineering | Asif Ali Shoukat](https://www.youtube.com/watch?v=1H4HWihRsZE) — Asif Ali Shoukat · 8:44 · 1 year ago

### multimodal large language models
Multimodal large language models combine text with other data types like images or video to understand and generate richer content. They provide the backbone for integrating speech and gesture inputs into semantically enriched transcripts.

*How the paper uses it:* The paper uses multimodal LLMs to fuse speech transcripts and gesture recognition results, producing more accurate and meaningful communication outputs.

▶ [Token-Efficient Long Video Understanding for Multimodal LLMs | Paper explained](https://www.youtube.com/watch?v=uMk3VN4S8TQ) — AI Coffee Break with Letitia · 9:20 · 1 year ago

## Already in your library

- [How Does Speech Recognition Work? Learn about Speech to Text, Voice Recognition and Speech Synthesis](https://www.youtube.com/watch?v=6altVgTOf9s) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Lecture 1.1: Introduction (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=VIq5r7mCAyw) — also for: Learning semi‑supervised enrichment of longitudinal imaging‑genetic data for improved prediction of cognitive decline (Hua Wang)
- [Lecture 1.1 - Introduction (CMU Multimodal Machine Learning ...](https://www.youtube.com/watch?v=DPkwjgaRvyI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [What is Zero Shot Learning | How Zero-shot Classification model works | NLP | transformers   | Code](https://www.youtube.com/watch?v=PH_eb1udpew) — also for: Zero-Shot Relational Learning for Multimodal Knowledge Graphs (Shichao Pei)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Automatic Speech Recognition - An Overview](https://www.youtube.com/watch?v=q67z7PTGRi8) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [MIT 6.S191: Automatic Speech Recognition](https://www.youtube.com/watch?v=sR6_bZ6VkAg) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Speech Recognition Tutorial - An Introduction to Speech Recognition](https://www.youtube.com/watch?v=40X2LVPgn0k) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — also for: Bypassing Prompt Guards in Production with Controlled-Release Prompting (Sanjam Garg)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [What is Multimodal Large Language Model (LLM)?](https://www.youtube.com/watch?v=_b1OAk8PKTA) — also for: Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT (Abdeltawab M. Hendawi)
- [02. What is Multimodal large language models?](https://www.youtube.com/watch?v=OuBfhyE_VEk) — also for: Probing Logical Reasoning of MLLMs in Scientific Diagrams (Adriana Kovashka)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the paper "Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders." The beginner project recreates a simple gesture-to-text enrichment demo using existing ASR output and gesture labels. The intermediate project implements the core multimodal integration method described in the paper on a small public or simulated dataset, evaluating transcript improvements. The advanced project extends the method to unstructured narrative tasks or improves robustness to ASR errors, addressing key limitations noted by the authors.

### Beginner — Gesture-Enriched Transcript Demo
*Effort: a weekend, ~8 hours*

You build a simple web app that takes a transcript with disfluent speech segments and overlays iconic gesture labels to produce enriched sentences. The app uses a rule-based approach to replace incomplete phrases with gesture-informed actions, mimicking the paper's example of transforming 'I um... tomato' plus a cutting gesture into 'I cut tomato.'

**Why it shows you understood the paper:** This project demonstrates your grasp of how iconic gestures can supplement disfluent speech to improve transcript meaning, a core insight of the paper. It also shows you understand the zero-shot integration concept by applying gesture information without training a model.

**Grounded in:** The example where the system transforms 'I um... tomato' plus a cutting gesture into 'I cut tomato.'

**Tech stack:** TypeScript, React, Node.js

**Data:** Simulated transcripts with disfluencies and a small set of iconic gesture labels inspired by the Peanut Butter Sandwich Task examples described in the paper.

**Build it:**

1. Create a simple React frontend to input or display disfluent transcripts.
2. Define a small set of iconic gestures and their semantic meanings (e.g., cutting, spreading).
3. Implement a rule-based function that detects incomplete phrases and replaces them with gesture-informed enriched text.
4. Display the enriched transcript alongside the original for comparison.
5. Write a README explaining the gesture-to-text enrichment logic and its relation to the paper.

**Ships as:** A GitHub repo with a React app demonstrating gesture-aware transcript enrichment on example sentences, with clear documentation linking it to the paper's core example.

**Stretch goal:** Add a simple confidence filter to hide low-confidence ASR words before enrichment, reflecting the paper's confidence filtering improvement.

### Intermediate — Multimodal Speech and Gesture Integration
*Effort: 1-3 weekends, ~20 hours*

You implement a zero-shot multimodal integration pipeline that takes ASR transcripts and gesture labels as inputs and uses a large language model (LLM) prompt to generate enriched transcripts. You evaluate transcript quality improvements over baseline ASR output using word error rate (WER) or semantic similarity metrics.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of combining speech and gesture modalities via an LLM without task-specific training. It also demonstrates your ability to evaluate transcript improvements quantitatively, reflecting the paper's key results.

**Grounded in:** The proposed zero-shot multimodal framework combining speech recognition, gesture recognition, and contextual rewriting using a large language model (LLM).

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, Jupyter Notebook

**Data:** Simulated or publicly available small datasets with speech transcripts and gesture annotations; if unavailable, simulate gesture labels paired with disfluent transcripts inspired by the Peanut Butter Sandwich Task.

**Build it:**

1. Obtain or simulate a small dataset of disfluent speech transcripts paired with iconic gesture labels.
2. Generate baseline ASR transcripts (can be simulated or use Whisper API).
3. Design prompts for a pretrained LLM to integrate transcript and gesture inputs to produce enriched text.
4. Run the LLM zero-shot inference on the dataset and collect enriched transcripts.
5. Compute WER or semantic similarity metrics comparing baseline and enriched transcripts.
6. Document the pipeline, evaluation, and results in a Jupyter notebook.

**Ships as:** A GitHub repo with code and notebook demonstrating zero-shot multimodal transcript enrichment and evaluation, reproducing the paper's core integration method and metrics.

**Stretch goal:** Incorporate a simple gesture variability normalization step to map different gesture styles to unified semantic meanings, as discussed in the paper.

### Advanced — Robust Gesture-Aware ASR for Unstructured Narratives
*Effort: a few weeks, ~60+ hours*

You extend the multimodal integration method to handle unstructured narrative tasks such as the Cinderella Story Recall Task. You develop methods to improve robustness against initial ASR errors and evaluate transcript quality with qualitative and quantitative metrics. You may also explore collaboration with speech therapists for qualitative assessments.

**Why it shows you understood the paper:** This project tackles the paper's stated limitations and future directions by broadening the method's applicability beyond structured tasks and addressing ASR error propagation. It demonstrates research-level initiative and potential for impactful contributions.

**Grounded in:** Future directions: Expand the model to handle unstructured and complex narrative tasks like the Cinderella Story Recall Task; refine methods to improve robustness against initial ASR errors.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or HuggingFace transformers, Jupyter Notebook, Docker

**Data:** Simulated or publicly available narrative speech datasets with gesture annotations if possible; otherwise, simulate gestures paired with narrative transcripts based on the paper's description.

**Build it:**

1. Collect or simulate a dataset of unstructured narrative speech with corresponding gesture labels.
2. Implement or adapt the zero-shot multimodal integration pipeline from the intermediate project.
3. Develop techniques to detect and correct initial ASR errors before multimodal integration (e.g., confidence filtering, error correction heuristics).
4. Evaluate enriched transcripts using both quantitative metrics (WER, semantic similarity) and qualitative case studies.
5. Document findings and discuss challenges related to gesture variability and transcript accuracy.
6. Optionally, design a protocol for qualitative assessment with speech pathologists.

**Ships as:** A comprehensive GitHub repo with code, evaluation scripts, and detailed documentation demonstrating an extended gesture-aware ASR system for unstructured narratives, addressing key limitations of the paper.

**Stretch goal:** Integrate graph-based learning methods to model gesture-speech relationships, aligning with Professor Kim's research interests.

_The paper's authors did not release code or datasets, so data must be simulated or substituted with publicly available speech and gesture datasets where possible._
