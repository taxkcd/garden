---
title: "542 · Probing Logical Reasoning of MLLMs in Scientific Diagrams — Adriana Kovashka"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adriana-kovashka"
source_hash: "1f814286d8b035c0632d89a843a5e39f0a8fafa1a849088d2665408d7e92f3d1"
sequence: 542
generator: "outreach-garden: managed"
---

# 542 · Probing Logical Reasoning of MLLMs in Scientific Diagrams

## At a glance

- **Professor:** Adriana Kovashka
- **Institution:** University of Pittsburgh
- **Paper:** [Probing Logical Reasoning of MLLMs in Scientific Diagrams](https://doi.org/10.18653/v1/2025.emnlp-main.542)
- **Authors:** Yufei Wang, Adriana Kovashka
- **Year:** 2025

## Paper overview

This paper investigates how well multimodal large language models (MLLMs) can perform logical reasoning tasks based on scientific diagrams, specifically food web images. The authors created datasets with real and synthetic food web images and designed seven types of logical questions to test the models' abilities. They found that current MLLMs struggle with complex logical reasoning and often rely on language priors rather than visual information.

### Why it matters

**Research problem:** Assessing the capability of multimodal large language models to perform logical inference grounded in visual information from scientific diagrams, focusing on food web/chain images and their complex logical relationships.

**Why it matters:** Logical reasoning over scientific diagrams is crucial for real-world applications such as science education, environmental monitoring, and medical diagnostics, where precise and context-sensitive answers are needed. Current benchmarks focus mostly on natural images and overlook scientific diagrams that encode structured factual knowledge.

**Key contributions:**

- Creation of two novel datasets (real and synthetic) of food web images with logically grounded question-answer pairs.
- Design of seven types of logical questions probing different reasoning complexities and relations in food webs.
- Comprehensive evaluation of four state-of-the-art MLLMs on these datasets revealing their limitations in logical reasoning.
- Demonstration that MLLMs underutilize visual information and rely heavily on language priors.
- Error analysis highlighting specific logical reasoning failures and challenges with negation and disjunction.

## About the professor

**Adriana Kovashka** — Associate Professor and Department Chair, Department of Computer Science, University of Pittsburgh.

Research interests: Computer vision, Machine learning, Natural language processing, Visual reasoning, Cross-modal retrieval

### Research links

- [Faculty/profile page](https://www.cs.pitt.edu/people/full-time-faculty/adriana-kovashka)
- [Identity evidence](http://people.cs.pitt.edu/~kovashka)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal machine learning, vision-language models, and multimodal reasoning
**Already in this field?** Skip this entirely if you already understand how multimodal models combine and reason over visual and textual data.

To understand the challenges and principles behind multimodal large language models' reasoning over scientific diagrams, especially visual and logical integration, this background provides two complementary learning paths. The rigorous course offers a deep, structured dive into multimodal machine learning foundations and advanced topics, while the fast track delivers concise, focused explainers on core multimodality concepts and current challenges. Choose the course for comprehensive mastery or the fast track for a quick but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 3.1 - Multimodal Representation Fusion, 4.1 - Multimodal Alignment, 5.2 - Structured Representations and Reasoning, 7.2 - Multimodal Inference and Knowledge, about 8 hours total — covering core concepts of multimodal fusion, alignment, reasoning, and inference crucial for this paper.

*Why it unblocks this paper:* This is a recent, comprehensive university course on multimodal machine learning by LP Morency, covering foundational concepts, representation fusion, alignment, transformers, reasoning, and new research directions, directly relevant to understanding MLLMs' multimodal reasoning capabilities explored in the paper.

*If you want all of it:* About 20.1 hours across the first 17 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ms. Coffee Bean's Multimodalities](https://www.youtube.com/playlist?list=PLpZBeKTZRGPNKxoNaeMD9GViU_aH_HJab) — AI Coffee Break with Letitia · 15 videos · 2.7h across 15 episodes

**Watch only this:** Episodes 1 - What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition, 4 - Multimodal Machine Learning models do not work. Here is why. Part 1/2 – The SYMPTOMS, 5 - Why Multimodal Machine Learning models do not work. Part 2/2 – The CAUSES, about 30 minutes total — focused on definitions and core challenges relevant to the paper.

*Why it unblocks this paper:* This short series by AI Coffee Break with Letitia offers clear, concise explainers on multimodal machine learning fundamentals, challenges, and key models, providing an accessible overview that complements the deeper university course and helps quickly grasp why MLLMs struggle with visual reasoning.

*If you want all of it:* About 2.7 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Probing Logical Reasoning of MLLMs in Scientific Diagrams," start by building foundational knowledge on multimodal large language models (MLLMs) and chain-of-thought prompting strategies, which are key to the paper's evaluation methods. Next, explore the challenges of visual logical reasoning and scientific diagram understanding to grasp the domain-specific difficulties. Finally, focus on the paper's core concept of logical reasoning over multimodal inputs and the authors' own talk to gain direct insights into their methodology and findings.

### Multimodal large language models *(prerequisite)*
This section covers the architecture and capabilities of multimodal large language models (MLLMs), which integrate textual and visual information. Understanding MLLMs is essential to appreciate the limitations and challenges identified in the paper regarding logical reasoning grounded in images.

*How the paper uses it:* The paper evaluates four recent MLLMs on logical reasoning tasks involving scientific diagrams.

▶ [MMaDA: Multimodal Large Diffusion Language Models - Paper Walkthrough](https://www.youtube.com/watch?v=1n9ubGqW98g) — DataMListic · 5:05 · 1 year ago

### Chain-of-thought prompting in LLMs *(prerequisite)*
Chain-of-thought prompting is a key strategy evaluated in the paper for improving logical reasoning in MLLMs. This section explains how step-by-step reasoning can be elicited from language models and why it may have limited effectiveness in multimodal contexts.

*How the paper uses it:* The paper explores chain-of-thought inspired prompting strategies with limited success in enhancing logical reasoning over scientific diagrams.

▶ [Lec 25 | LLM Reasoning: Part 01 | Eliciting Thought](https://www.youtube.com/watch?v=BSq54RQxQK4) — LCS2 · 39:43 · 9 months ago

### Visual logical reasoning *(prerequisite)*
Visual logical reasoning involves interpreting and reasoning about logical relations grounded in images. This foundational knowledge helps understand the complexity of the tasks designed in the paper to probe MLLMs' reasoning abilities with scientific diagrams.

*How the paper uses it:* The paper probes MLLMs' ability to perform logical inference based on visual information from scientific diagrams.

▶ [Visual Reasoning Workshop | Crack questions in 30 sec | Strategy, Tricks & Tips](https://www.youtube.com/watch?v=JxeBljpqvks) — CAT2CET (C2C) MENTORS · 54:33 · 7y ago

### Scientific diagram understanding *(prerequisite)*
Understanding how to interpret and create scientific diagrams is crucial for appreciating the structured visual knowledge that the paper's datasets encode. This section provides context on the nature and challenges of scientific diagram comprehension.

*How the paper uses it:* The paper focuses on scientific diagrams, specifically food web images, as the visual modality for logical reasoning tasks.

▶ [Principles of Beautiful Figures for Research Papers](https://www.youtube.com/watch?v=i-HAjex6VtM) — ChuScience · 1:01:14 · 1 year ago

### Logical reasoning over multimodal inputs
This core concept addresses the integration of visual and textual information to perform logical reasoning, which is the central challenge investigated in the paper. Understanding current research on multimodal reasoning provides a broader context for the paper's contributions and findings.

*How the paper uses it:* The paper assesses MLLMs' ability to integrate visual and logical information for reasoning over scientific diagrams.

▶ [Lecture 7.2 - Multimodal Inference and Knowledge (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=23FuD8J8mqU) — LP Morency · 1:08:27 · 2 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk offers direct insight into their methodology, dataset construction, evaluation, and analysis of MLLMs' logical reasoning capabilities in scientific diagrams. This is the most precise and relevant resource to understand the paper's contributions and limitations.

*How the paper uses it:* Direct presentation by the authors on their work probing logical reasoning of MLLMs in scientific diagrams.

▶ [[ECCV 2026]Circuit-MLLM: Topology Logic-Guided Latent-Space Visual Reasoning for Circuit Schematic](https://www.youtube.com/watch?v=josBWnOb9BM) — jinyuan · 7:04 · 5 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on logical reasoning in multimodal large language models (MLLMs) with scientific diagrams. We start with the basics of multimodal large language models to grasp their architecture and capabilities, then cover visual logical reasoning to build intuition on reasoning about images, followed by scientific diagram understanding to appreciate the structured visual knowledge in the paper's domain. Next, we explain chain-of-thought prompting as a key reasoning strategy evaluated in the paper, and finally focus on the paper's core topic: logical reasoning over multimodal inputs, tying all prior knowledge together.

### Multimodal large language models *(prerequisite)*
Learn what multimodal large language models (MLLMs) are—AI systems that understand and generate language grounded in multiple data types like images and text. This foundation helps you understand the models evaluated in the paper and their general capabilities and limitations.

*How the paper uses it:* The paper evaluates four state-of-the-art MLLMs on logical reasoning tasks involving scientific diagrams.

▶ [02. What is Multimodal large language models?](https://www.youtube.com/watch?v=OuBfhyE_VEk) — CodersArts · 11:33 · 2 years ago

### Visual logical reasoning *(prerequisite)*
Visual logical reasoning involves interpreting visual patterns and relationships to draw logical conclusions. This skill is crucial for understanding how models should reason about the logical relations encoded in scientific diagrams like food webs.

*How the paper uses it:* The paper probes MLLMs' ability to perform logical inference grounded in visual information from scientific diagrams.

▶ [ABSTRACT REASONING TESTS Questions, Tips and Tricks!](https://www.youtube.com/watch?v=WxeHtY-H7Dk) — CareerVidz · 11:59 · 7y ago

### Scientific diagram understanding *(prerequisite)*
Scientific diagrams encode structured factual knowledge visually, requiring specialized interpretation skills. Understanding how to read and analyze such diagrams is key to grasping the challenges MLLMs face in this paper's tasks.

*How the paper uses it:* The paper focuses on food web scientific diagrams, which encode complex prey-predator relations that models must interpret.

▶ [Create Stunning Research Diagrams & Schematics in Minutes! 🔥 Best AI Tool for Researchers | EdrawMax](https://www.youtube.com/watch?v=OuV05-Q2g3Q) — My Research Support · 14:02 · 1 year ago

### Chain-of-thought prompting in LLMs *(prerequisite)*
Chain-of-thought prompting is a technique to elicit step-by-step reasoning from language models by guiding them through intermediate reasoning steps. Understanding this helps explain why the paper tested such prompting strategies and their limited success.

*How the paper uses it:* The paper explores chain-of-thought inspired prompting strategies to improve MLLMs' logical reasoning over scientific diagrams.

▶ [Chain-of-Thought Prompting Explained | Boost AI Reasoning with Step-by-Step Thinking](https://www.youtube.com/watch?v=JDtBwOXx6Kg) — Software Testing Mentor · 8:35 · 11 months ago

### Logical reasoning over multimodal inputs
This concept covers how AI models integrate visual and textual information to perform logical inference. It is the core challenge addressed by the paper, which assesses MLLMs' ability to reason logically about scientific diagrams and questions.

*How the paper uses it:* The paper's main contribution is probing MLLMs' logical reasoning capabilities over multimodal inputs combining images and language.

▶ [Lecture 7.2 - Multimodal Inference and Knowledge (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=23FuD8J8mqU) — LP Morency · 1:08:27 · 2 years ago

## Already in your library

- [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — also for: Bypassing Prompt Guards in Production with Controlled-Release Prompting (Sanjam Garg)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [What is Multimodal Large Language Model (LLM)?](https://www.youtube.com/watch?v=_b1OAk8PKTA) — also for: Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT (Abdeltawab M. Hendawi)
- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 6 - LLM Reasoning](https://www.youtube.com/watch?v=k5Fh-UgTuCo) — also for: In-Context Algebra (David Bau)
- [Chain-of-Thought Prompting Elicits Reasoning in LLMs](https://www.youtube.com/watch?v=NBIRzSGHFro) — also for: Unreliable in Practice? A Comprehensive Study of Errors in LLM-Generated Code (Marco Vieira)
- [Chain-of-thought explained | Aravind Srinivas and Lex Fridman](https://www.youtube.com/watch?v=w9eQJdBRC5o) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)
- [Chain-of-thought prompting - Explained!](https://www.youtube.com/watch?v=AFE6x81AP4k) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Probing Logical Reasoning of MLLMs in Scientific Diagrams." Starting with a beginner-level replication of a key evaluation metric on simple food web questions, progressing to an intermediate-level reimplementation of the core logical question evaluation on synthetic data, and culminating in an advanced project that extends the paper by improving visual relation extraction with automated methods. Each project ties directly to the paper's contributions, results, or limitations, and fits your existing software engineering and ML skills.

### Beginner — Evaluate MLLM Accuracy on Simple Food Web Logical Questions
*Effort: a weekend, ~8 hours*

You build a script that evaluates a publicly available MLLM (e.g., OpenAI GPT-4 with image input if accessible, or a text-only LLM as proxy) on simple logical question types (Types 1, 2, and 5) from the paper's food web question templates. You reproduce the accuracy metric for these question types using a small set of example questions and answers derived from the paper's description.

**Why it shows you understood the paper:** This project shows you understand the paper's evaluation methodology and the distinction between simple and complex logical reasoning in MLLMs, as well as the reliance on language priors.

**Grounded in:** Models perform well on simpler questions (Types 1, 2, 5) that can be answered by leveraging prior knowledge shortcuts.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers (if available), Jupyter Notebook or script

**Data:** Use a small manually created set of food web logical questions and answers based on the paper's question templates for Types 1, 2, and 5, since the authors did not release datasets.

**Build it:**

1. Read the paper's description of question types 1, 2, and 5 and manually create 10-15 example questions with answers.
2. Write a Python script to prompt an accessible LLM with these questions in zero-shot fashion.
3. Collect model answers and compute accuracy against ground truth.
4. Compare your accuracy results to the paper's reported performance on these question types.
5. Document the process and results in a README.

**Ships as:** A GitHub repo with the evaluation script, example questions, and a README showing accuracy results and discussion comparing to the paper's findings.

**Stretch goal:** Add a white-image ablation by removing visual input (simulate by removing image context) to show reliance on language priors.

### Intermediate — Reimplement Logical Reasoning Evaluation on Synthetic Food Webs
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core evaluation pipeline described in the paper for testing MLLMs on synthetic food web images with annotated prey-predator relations. You generate or simulate a small synthetic dataset of food web diagrams and corresponding logical questions (covering multiple question types). You evaluate at least one open-source multimodal LLM or a vision-language model on these questions and report accuracy metrics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's main experimental setup, including dataset construction, logical question design, and evaluation metrics. It also shows you can apply multimodal reasoning evaluation practically.

**Grounded in:** The authors constructed two datasets of food web images (real and synthetic) with annotated prey-predator relations and developed seven types of logically challenging question templates.

**Tech stack:** Python 3.11, PyTorch or HuggingFace transformers, OpenCV or matplotlib for synthetic image generation, Jupyter Notebook or scripts

**Data:** Synthetic food web images generated by you based on the paper's description of synthetic datasets, with manually annotated prey-predator relations and logical questions.

**Build it:**

1. Implement a simple synthetic food web image generator (e.g., nodes as species icons, edges as arrows).
2. Create a set of prey-predator relations and generate corresponding logical questions using the paper's seven question templates.
3. Select an accessible multimodal LLM or vision-language model (e.g., BLIP-2, LLaVA) for zero-shot evaluation.
4. Write code to feed images and questions to the model and collect answers.
5. Compute accuracy metrics per question type and compare trends to the paper's results.
6. Write a README documenting dataset generation, evaluation, and analysis.

**Ships as:** A GitHub repo with synthetic dataset generation code, evaluation scripts, and a report comparing model performance to the paper's findings on synthetic food webs.

**Stretch goal:** Add ablation by replacing images with white backgrounds to test reliance on language priors.

### Advanced — Automate Visual Relation Extraction to Improve Logical Reasoning in Food Webs
*Effort: few weeks, ~40+ hours*

You develop an automated pipeline to extract prey-predator relations from real food web images using computer vision techniques (e.g., object detection, edge detection, or graph extraction). You integrate this with a multimodal LLM to answer logical reasoning questions grounded in the extracted relations. This addresses the paper's limitation of manual filtering in relation extraction and explores a future direction to improve visual representations for logical reasoning.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by combining visual relation extraction with logical reasoning evaluation, demonstrating deep comprehension of the challenges in multimodal logical inference over scientific diagrams.

**Grounded in:** Parsing real food web images relies on GPT-4o extraction and manual filtering, which may miss some relations. Future direction: Developing fully automated pipelines for relation extraction without manual filtering.

**Tech stack:** Python 3.11, PyTorch, OpenCV, Detectron2 or similar object detection framework, HuggingFace transformers or OpenAI API for LLM integration

**Data:** Use publicly available real food web images (or simulate similar diagrams) and manually annotated relations for evaluation; no official dataset released by authors.

**Build it:**

1. Collect or simulate a small set of real food web images with known prey-predator relations.
2. Implement or fine-tune an object detection or edge detection model to identify species and directional relations in the images.
3. Build a graph extraction module to convert detections into structured prey-predator relations.
4. Integrate the extracted relations as input context to a multimodal LLM for answering logical questions.
5. Evaluate the system's accuracy on logical reasoning questions and compare to baseline zero-shot MLLM performance.
6. Document the pipeline, challenges, and results in a detailed README.

**Ships as:** A GitHub repo with automated relation extraction code, integration with an MLLM for logical reasoning, evaluation scripts, and a report discussing improvements over manual methods and baseline performance.

**Stretch goal:** Experiment with chain-of-thought prompting or fine-tuning to improve reasoning over extracted relations.

_The paper's authors did not release code or datasets; all data must be manually created or simulated based on the paper's descriptions._
