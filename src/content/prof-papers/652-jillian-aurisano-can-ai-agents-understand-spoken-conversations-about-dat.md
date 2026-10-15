---
title: "652 · Can AI agents understand spoken conversations about data visualizations in online meetings? — Jillian Aurisano"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jillian-aurisano"
source_hash: "54868addc52570a465e794f3f84ea72f391456eb7158bc10d8c52feda3289899"
sequence: 652
generator: "outreach-garden: managed"
---

# 652 · Can AI agents understand spoken conversations about data visualizations in online meetings?

## At a glance

- **Professor:** Jillian Aurisano
- **Institution:** University of Cincinnati
- **Paper:** [Can AI agents understand spoken conversations about data visualizations in online meetings?](https://arxiv.org/pdf/2510.00245v1)
- **Authors:** Rizul Sharma, Tianyu Jiang, Seokki Lee, Jillian Aurisano
- **Year:** 2025

## Paper overview

This paper studies how well AI agents can understand spoken conversations about data visualizations during online meetings. It introduces a new dataset of meeting dialogues discussing charts, a set of evaluation questions, and a framework to measure AI comprehension. The study compares different AI models and input types (text, images, or both) and finds that large language models using only text inputs about the visualizations perform best at understanding the conversations.

### Why it matters

**Research problem:** How to measure and improve AI agents' understanding of spoken conversations about data visualizations in online meetings, and which model architectures and input modalities best support this understanding.

**Why it matters:** AI assistants are increasingly integrated into virtual meetings to support tasks like summarization and assistance. For these agents to be effective, they must accurately comprehend discussions involving data visualizations, which are critical for collaborative data-driven decision-making. Understanding these conversations requires integrating multiple data sources and modalities, a challenging task for AI.

**Key contributions:**

- A corpus of 72 conversational discussions about data visualizations in online meetings.
- A benchmark of 318 multiple-choice questions to evaluate AI understanding of these discussions.
- A dual-axis evaluation framework labeling questions by complexity (based on Bloom's taxonomy) and topic.
- A comparative evaluation of four AI pipelines combining different model architectures and input modalities.

## About the professor

**Jillian Aurisano** — Assoc Professor - Educator (F2), CEAS - Computer Science, University of Cincinnati.

Research interests: Data visualization & visual analytics; Human-computer interaction; Large and collaborative display environments; Immersive analytics & virtual reality; Multi-modal interaction; Computer-supported cooperative work.

### Research links

- [Faculty/profile page](https://researchdirectory.uc.edu/p/aurisajm)
- [Professor website](https://www.davinci-uc.org/)
- [Resolved homepage](https://sites.google.com/view/jillianaurisano/home)
- [Google Scholar](https://scholar.google.com/citations?user=siaXmI8AAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multimodal machine learning
**The paper assumes:** multimodal machine learning, modality fusion techniques, vision-language models, large language models
**Already in this field?** Skip this entirely if you already understand how AI models combine and process multiple data modalities such as text and images.

To understand the challenges and approaches in multimodal machine learning relevant to this paper, these two background playlists provide complementary learning paths. The rigorous course offers a deep, structured dive into multimodal machine learning concepts, architectures, and challenges, ideal for readers seeking comprehensive technical mastery. The fast track playlist delivers concise, focused explainers on multimodality in machine learning, perfect for quickly grasping key ideas and current issues without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Multimodal Machine Learning • Fall 2020 • [CMU]](https://www.youtube.com/playlist?list=PLPzcDv02-T2BToJy097AFhIXrNk2qjHD9) — Sattwik Biswal · 14 videos · 15.8h across 14 episodes

**Watch only this:** Lectures 1.1: Introduction, 2.1: Basic Concepts, 4.1: Multimodal Representations, 5.1: Multimodal Alignment, and 7.1: Alignment and Translation — about 5.5 hours total. These cover the core principles of multimodal learning, representation, and alignment critical to grasping the paper's modality fusion challenges.

*Why it unblocks this paper:* This Carnegie Mellon University course on Multimodal Machine Learning covers foundational concepts, representations, alignment, and architectures directly relevant to understanding how AI models integrate text and images, which is central to the paper's evaluation of hybrid pipelines.

*If you want all of it:* 15.8 hours across all 14 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ms. Coffee Bean's Multimodalities](https://www.youtube.com/playlist?list=PLpZBeKTZRGPNKxoNaeMD9GViU_aH_HJab) — AI Coffee Break with Letitia · 15 videos · 2.7h across 15 episodes

**Watch only this:** Episodes 1: 'What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition.', 4: 'Multimodal Machine Learning models do not work. Here is why. Part 1/2 – The SYMPTOMS', and 5: 'Why Multimodal Machine Learning models do not work. Part 2/2 – The CAUSES' — about 30 minutes total. These episodes succinctly cover the definition, challenges, and causes of multimodal learning difficulties relevant to the paper.

*Why it unblocks this paper:* This short series by AI Coffee Break with Letitia provides clear, accessible explanations of multimodal machine learning concepts, including why multimodal models often struggle and how vision and language models work together, directly illuminating the paper's findings on hybrid pipeline performance.

*If you want all of it:* 2.7 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI agents comprehending spoken conversations about data visualizations in online meetings, start with foundational knowledge on large language models and vision-language models, as these architectures are central to the AI pipelines evaluated. Next, explore evaluation frameworks for AI comprehension to grasp how AI understanding is measured rigorously. Then, study multimodal AI comprehension to understand challenges in integrating text and visual modalities. Finally, focus on the paper's core concept through the authors' own talk or closely related academic presentations to learn about their novel dataset, evaluation framework, and key findings.

### Large language models *(prerequisite)*
Large language models (LLMs) form the backbone of the best-performing AI pipeline in the paper, using text-only inputs to achieve high comprehension accuracy. Understanding the transformer architecture, attention mechanisms, and LLM fundamentals is essential to appreciate why text-only LLMs outperform hybrid or vision-based models in this context.

*How the paper uses it:* The paper finds that text-only LLM pipelines achieve the highest accuracy in understanding meeting dialogues about visualizations.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — Stanford Online · 1:44:28 · 2w ago

### Vision language models *(prerequisite)*
Vision-language models (VLMs) combine visual and textual inputs and are critical to the paper's evaluation of hybrid and image-only pipelines. Understanding VLM architectures, interpretability, and training approaches helps contextualize the challenges the paper identifies with multimodal fusion and the relative underperformance of VLM-based pipelines.

*How the paper uses it:* The paper compares VLM pipelines with LLM pipelines to evaluate the impact of architecture and input modality on AI comprehension.

▶ [Let's train Vision Language Models (VLM) from scratch using just Text-Only LLMs!](https://www.youtube.com/watch?v=Oj27kALfvr0) — Neural Breakdown with AVB · 30:04 · 8mo ago

### Evaluation frameworks for AI comprehension *(prerequisite)*
Robust evaluation frameworks are necessary to measure AI agents' understanding accurately. This section covers methodologies for benchmarking AI comprehension, test case design, and metrics selection, which underpin the paper's dual-axis evaluation framework labeling questions by complexity and topic.

*How the paper uses it:* The paper develops a dual-axis evaluation framework and a benchmark of multiple-choice questions to assess AI comprehension of meeting dialogues.

▶ [Evaluating LLM-based chatbots: A framework for reliable AI assistants](https://www.youtube.com/watch?v=ExA3KSvyzpM) — Conversation Design Institute · 1:03:46 · 11mo ago

### Multimodal AI comprehension
Multimodal AI fusion techniques are central to the paper's investigation of hybrid pipelines combining text and images. This lecture series from MIT provides an advanced and rigorous exploration of multimodal fusion strategies, heterogeneity in data, and cross-modal transfer, directly relevant to understanding the paper's findings on modality integration challenges.

*How the paper uses it:* The paper highlights difficulties in fusing visual and textual modalities effectively in hybrid AI pipelines for meeting dialogue comprehension.

▶ [Lecture 4 – Multimodal Fusion (MIT How to AI Almost Anything/Multimodal AI, Spring 2026)](https://www.youtube.com/watch?v=0SOieOIe4HI) — Paul Liang · 35:02 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how AI agents comprehend spoken conversations about data visualizations in online meetings. We start with the basics of data visualization to grasp the context, then cover large language models and vision-language models to understand the AI architectures evaluated. Next, we explore multimodal AI comprehension to appreciate challenges in integrating text and images. Finally, we examine evaluation frameworks to see how AI understanding is measured, concluding with a direct look at AI agents and their role in automating tasks related to meetings and data visualization discussions.

### Data visualization in meetings *(prerequisite)*
Learn what data visualization is, why it matters, and how it is used to communicate information effectively, especially in collaborative settings like meetings. Understanding this sets the stage for why AI needs to interpret conversations about charts and graphs.

*How the paper uses it:* The paper focuses on AI understanding spoken discussions about data visualizations in meetings, so knowing the basics of data visualization is essential.

▶ [What is Data Visualization? | Business Analytics | From A Business Professor](https://www.youtube.com/watch?v=Bo61kls5ZHM) — Business School 101 · 6:52 · 11mo ago

### Large language models *(prerequisite)*
Large language models (LLMs) are AI systems trained on vast text data to understand and generate human language. They form the backbone of many AI agents that process text inputs, making them crucial for understanding conversations.

*How the paper uses it:* The paper finds that text-only LLM pipelines achieve the highest comprehension accuracy, highlighting their importance.

▶ [A Practical Introduction to Large Language Models (LLMs)](https://www.youtube.com/watch?v=tFHeUSJAYbE) — Shaw Talebi · 14:57 · 3y ago

### Vision language models *(prerequisite)*
Vision-language models (VLMs) combine image and text understanding, enabling AI to interpret visual content alongside language. This is key for tasks involving data visualizations, which are inherently multimodal.

*How the paper uses it:* The paper compares VLMs with LLMs to evaluate how well AI understands conversations involving visualizations.

▶ [Vision-Language Models (VLMs) Explained | GPT-4V, LLaVA & CLIP](https://www.youtube.com/watch?v=MCQKDNXc4Z0) — Micro Learning · 7:46 · 3mo ago

### Multimodal AI comprehension
Multimodal AI involves integrating multiple data types, like images and text, to improve understanding. This section explains fusion techniques and challenges in combining modalities, which is critical for AI agents interpreting spoken discussions about visual data.

*How the paper uses it:* The paper highlights challenges in hybrid pipelines that fuse image and text inputs, making multimodal fusion understanding essential.

▶ [Lecture 4 – Multimodal Fusion (MIT How to AI Almost Anything/Multimodal AI, Spring 2026)](https://www.youtube.com/watch?v=0SOieOIe4HI) — Paul Liang · 35:02 · 1mo ago

### Evaluation frameworks for AI comprehension *(prerequisite)*
Evaluation frameworks define how to measure AI performance and understanding reliably. This section covers methods to benchmark AI comprehension, including question complexity and topic labeling, which are used in the paper's dual-axis framework.

*How the paper uses it:* The paper introduces a novel evaluation framework to assess AI agents' comprehension accuracy on meeting dialogues about data visualizations.

▶ [AI Evals Explained | How to evaluate AI Agents?](https://www.youtube.com/watch?v=_Er8Hao_gmQ) — Aishwarya Srinivasan · 23:08 · 3mo ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
A direct presentation from the authors provides insights into their dataset, evaluation framework, and key findings, offering a concise overview of the paper's contributions and results.

*How the paper uses it:* This video directly relates to the paper's content, summarizing the study and its implications for AI agents in meetings.

▶ [4 AI Agents To Automate 99% Of Your Life](https://www.youtube.com/watch?v=TL8V41Ea6oM) — Sandeep Swadia · 20:47 · 2mo ago

## Already in your library

- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Lecture 1 – Course Introduction (MIT How to AI Almost Anything/Multimodal AI, Spring 2026)](https://www.youtube.com/watch?v=Xm2crsD5ngA) — also for: Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders (Seungbae Kim)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How LLMs Works? - Overview](https://www.youtube.com/watch?v=K45s2PgywvI) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [End-to-End (small) Vision Language Model Fine-tuning ...](https://www.youtube.com/watch?v=_EMfJSmLSKE) — also for: CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries (Haipeng Chen)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [LLMs Meet Robotics: What Are Vision-Language-Action Models? (VLA Series Ep.1)](https://www.youtube.com/watch?v=8dZUOo5xWFw) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Lecture 23: Visualizing Data](https://www.youtube.com/watch?v=C5JjMP8m-4E) — also for: Data Visualization Literacy (Katy Börner)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)](https://www.youtube.com/watch?v=a3SMraZWNNs) — also for: COMIC: Agentic Sketch Comedy Generation (Brian Curless)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of AI comprehension of spoken conversations about data visualizations in meetings. The beginner project replicates a core evaluation metric from the paper using text-only inputs. The intermediate project reimplements the paper's core evaluation framework on a smaller scale with a public substitute dataset and compares two AI pipelines. The advanced project extends the paper by exploring improved multimodal fusion strategies to address the hybrid pipeline limitations noted by the authors.

### Beginner — Text-Only AI Comprehension Accuracy Calculator
*Effort: a weekend, ~8 hours*

You build a simple evaluation script that calculates comprehension accuracy for AI agents on multiple-choice questions about meeting dialogues discussing data visualizations, using only text inputs. You simulate a small set of example dialogues and questions inspired by the paper's benchmark and compute accuracy metrics similar to those reported for the text-only LLM pipeline.

**Why it shows you understood the paper:** This project shows you understand the paper's key result that text-only large language models achieve the highest comprehension accuracy, and you can reproduce the evaluation metric on dialogue-question pairs.

**Grounded in:** The text-only Large Language Model (LLM) pipeline achieved the highest accuracy of 95.9% across comprehension tasks.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Simulated small dataset of meeting dialogue transcripts and multiple-choice questions inspired by the paper's benchmark; no official dataset released.

**Build it:**

1. Create a small set of example meeting dialogue transcripts discussing data visualizations in text form.
2. Write multiple-choice comprehension questions for each dialogue with correct answers.
3. Implement a function to simulate AI agent predictions (e.g., random or rule-based).
4. Calculate accuracy by comparing predicted answers to correct answers.
5. Output accuracy metrics and visualize results in a notebook.

**Ships as:** A Jupyter notebook showing the simulated dataset, question-answer pairs, prediction simulation, and accuracy calculation with explanations.

**Stretch goal:** Add a simple baseline AI agent using keyword matching to answer questions and compare its accuracy to random guessing.

### Intermediate — Reimplementation of AI Comprehension Evaluation Framework
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's dual-axis evaluation framework for AI comprehension of meeting dialogues about data visualizations. Using a publicly available substitute dataset of conversational data (e.g., a small dialogue dataset about charts or tabular data you create or find), you build two AI pipelines: a text-only large language model pipeline and a vision-language model pipeline (using an open-source VLM). You evaluate and compare their accuracy on multiple-choice questions labeled by complexity and topic.

**Why it shows you understood the paper:** This project demonstrates your ability to re-create the paper's core evaluation methodology, including question labeling and pipeline comparison, and to apply it on a smaller scale with real AI models, showing comprehension of the paper's experimental design and results.

**Grounded in:** A dual-axis evaluation framework labeling questions by complexity and topic; comparative evaluation of four AI pipelines combining model architectures and input modalities.

**Tech stack:** Python 3.11, Hugging Face Transformers, PyTorch, Jupyter Notebook

**Data:** No official dataset released; you create a small substitute dataset of dialogues about simple data visualizations and corresponding multiple-choice questions labeled by complexity and topic.

**Build it:**

1. Design or find a small dataset of dialogues discussing simple data visualizations (e.g., bar charts, tables).
2. Create multiple-choice comprehension questions for each dialogue, labeling them by complexity and topic.
3. Implement a text-only pipeline using a pretrained large language model (e.g., Hugging Face LLaMA or Mixtral).
4. Implement a vision-language pipeline using an open-source VLM (e.g., llava-1.5-7b-hf) with image inputs of charts.
5. Evaluate both pipelines on the question set and compute accuracy metrics.
6. Analyze results by question complexity and topic, and compare pipeline performance.

**Verified links from the paper:**

- <https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/llavahf/llava-1.5-7b-hf> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to run both AI pipelines, the evaluation framework, labeled questions, and a report summarizing accuracy results and analysis.

**Stretch goal:** Add a simple hybrid pipeline that combines text and image inputs and analyze its performance to observe modality fusion challenges.

### Advanced — Multimodal Fusion Strategies for AI Understanding of Visualization Conversations
*Effort: 3-4 weeks*

You develop and evaluate improved multimodal fusion methods to integrate visual and textual inputs for AI comprehension of spoken conversations about data visualizations in meetings. You extend the intermediate project by implementing novel fusion architectures (e.g., cross-attention, late fusion) to address the hybrid pipeline performance limitations reported in the paper. You test your methods on your substitute dataset and analyze whether fusion improves accuracy over unimodal baselines.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on multimodal AI architectures and critically evaluate their impact on comprehension tasks in meeting contexts.

**Grounded in:** The hybrid (image+text) VLM pipeline performed worst at 68%, indicating challenges in fusing modalities; future direction to explore better strategies for multimodal input fusion.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, Jupyter Notebook

**Data:** Same substitute dataset of dialogues and multiple-choice questions as intermediate project; no official dataset released.

**Build it:**

1. Review existing multimodal fusion techniques for vision-language models.
2. Implement at least two fusion strategies (e.g., early fusion, cross-attention, late fusion) combining text and image inputs.
3. Integrate these fusion methods into the vision-language pipeline from the intermediate project.
4. Evaluate the fusion models on the multiple-choice comprehension questions.
5. Compare fusion model accuracy against unimodal baselines and analyze results by question complexity and topic.
6. Document findings and discuss implications for AI agents in meeting contexts.

**Verified links from the paper:**

- <https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/llavahf/llava-1.5-7b-hf> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code for fusion models, evaluation scripts, and a detailed report analyzing fusion effectiveness and challenges.

**Stretch goal:** Incorporate structured textual inputs such as visualization code or metadata (simulated) to test their impact on fusion performance.

_No official dataset or code was released by the paper's authors; substitute or simulated data must be used carefully to approximate the paper's domain._
