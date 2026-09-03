---
title: "536 · Towards LLM Agents for Earth Observation — Carl Vondrick"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-carl-vondrick"
source_hash: "0eff0e1b7aecf7e401f56ddca75cd8ed9f12601a1e68f00e5bdc63fec996844e"
sequence: 536
generator: "outreach-garden: managed"
---

# 536 · Towards LLM Agents for Earth Observation

## At a glance

- **Professor:** Carl Vondrick
- **Institution:** Columbia University
- **Paper:** [Towards LLM Agents for Earth Observation](https://arxiv.org/pdf/2504.12110)
- **Authors:** Chia-Hsiang Kao, Wenting Zhao, Shreelekha Revankar, Samuel Speas, Snehal Bhagat, Rajeev Datta, Cheng Perng Phoo, Utkarsh Mall, Carl Vondrick, Kavita Bala, Bharath Hariharan
- **Year:** 2025

## Paper overview

This paper introduces UnivEARTH, a benchmark dataset of 140 yes/no questions derived from NASA Earth Observatory articles to evaluate the ability of large language model (LLM) agents to perform reliable Earth Observation tasks. The study finds that current LLMs struggle to generate executable code to analyze satellite data, achieving only about 33% accuracy when required to produce evidence-backed answers using Google Earth Engine. The work highlights significant challenges in automating scientific Earth Observation and suggests that domain expertise and specialized training are crucial for progress.

### Why it matters

**Research problem:** Can AI systems, specifically large language model agents, reliably automate Earth Observation tasks by analyzing satellite data and answering domain-specific scientific questions?

**Why it matters:** Earth Observation data is critical for environmental monitoring, disaster management, climate science, and other scientific domains. Automating these workflows could accelerate scientific discovery and improve responsiveness to environmental changes, but current AI systems lack the flexibility and reliability needed for general-purpose Earth Observation.

**Key contributions:**

- Creation of UnivEARTH, a novel, scientifically grounded benchmark for Earth Observation question answering with verified answers and guaranteed question answerability using Google Earth Engine data.
- Comprehensive evaluation of state-of-the-art LLM agents on the UnivEARTH benchmark, revealing significant limitations in their ability to generate executable code and provide reliable evidence-based answers.
- Demonstration that fine-tuning a smaller open-source model on specialized synthetic data can achieve competitive accuracy at lower computational cost.
- Analysis showing strong correlation between model performance and knowledge of diverse Earth observation data sources, emphasizing the importance of domain expertise.

## About the professor

**Carl Vondrick** — Professor of Computer Science, Computer Science, Columbia University.

Research interests: By training machines to observe and interact with their surroundings, our research aims to create robust and versatile models for perception. Our lab often investigates visual models that capitalize on large amounts of unlabeled data and transfer across tasks and modalities. Other interests include robotics, interpretable models, and other modalities such as sound, language, and beyond.

### Research links

- [Faculty/profile page](http://www.cs.columbia.edu/~vondrick)
- [Resolved homepage](http://www.cs.columbia.edu/~vondrick/)
- [Lab website](https://cail.columbia.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models and Code Generation
**The paper assumes:** large language model architectures, code generation techniques, prompt engineering, and API-based code execution
**Already in this field?** Skip this entirely if you already understand how large language models generate code and how prompting and fine-tuning affect their performance.

This background is designed to help readers understand how large language models (LLMs) generate executable code, especially in scientific domains like Earth Observation where domain-specific API knowledge is crucial. The rigorous course offers a deep, university-level foundation in NLP with a focus on LLM architectures and code generation, while the fast track provides a concise, practical introduction to building LLMs from scratch, emphasizing intuition and implementation. Readers can choose the rigorous lane for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N: Natural Language Processing with Deep Learning | 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4) — Stanford Online · 23 videos · 29.2h across 23 episodes

**Watch only this:** Lectures 1, 7, 8, 9, 10, 15, and 16 — about 9 hours total. These cover intro to NLP, sequence-to-sequence and attention models, transformers, pretraining, prompting and reinforcement learning, code generation, and model interpretability.

*Why it unblocks this paper:* Stanford CS224N: Natural Language Processing with Deep Learning (2023) is a top-tier university course that covers foundational NLP concepts, transformer architectures, prompting, and code generation techniques essential to understanding LLM behavior in generating executable code for domain-specific tasks like Earth Observation.

*If you want all of it:* 29.2 hours across all 23 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Build a Large Language Model (From Scratch)](https://www.youtube.com/playlist?list=PLTKMiZHVd_2IIEsoJrWACkIxLRdfMlw11) — Sebastian Raschka · 7 videos · 12.5h across 7 episodes

**Watch only this:** Episodes 1 through 4 — about 7 hours total. These cover environment setup, text data handling, attention mechanisms, and GPT implementation from scratch.

*Why it unblocks this paper:* Sebastian Raschka's 'Build a Large Language Model (From Scratch)' playlist offers a clear, code-focused introduction to LLM construction and operation, providing practical insights into tokenization, attention, GPT modeling, pretraining, and finetuning that underpin LLM code generation capabilities relevant to this paper.

*If you want all of it:* 12.5 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Towards LLM Agents for Earth Observation,' start by building foundational knowledge on Earth Observation satellite data and the Google Earth Engine API, as these are critical for interpreting the benchmark and code generation tasks. Next, explore prompt engineering techniques relevant to LLMs to grasp the methods used for improving model performance. Finally, focus on the authors' own talk presenting their work, which directly addresses the core contributions and findings of the paper.

### Earth Observation satellite data seminar *(prerequisite)*
Understanding the nature, sources, and processing of Earth Observation satellite data is essential to appreciate the challenges and scope of the UnivEARTH benchmark. The selected seminar provides an advanced, research-level overview of Earth Observation big data and its applications in environmental monitoring, aligning well with the paper's domain.

*How the paper uses it:* The paper relies on diverse satellite data sources and Earth Observation principles to formulate and answer scientific questions.

▶ [Seminar - Earth Observation Big Data and Deep Learning for Global Environmental Change Monitoring](https://www.youtube.com/watch?v=RbXb3asUhyw) — KTH Space Center · 46:42 · 1y ago

### Google Earth Engine API lecture *(prerequisite)*
Google Earth Engine (GEE) is the primary tool used in the paper for querying and analyzing satellite data. A thorough understanding of the GEE API, especially its Python interface, is necessary to grasp the code generation challenges faced by LLM agents in the study.

*How the paper uses it:* The benchmark evaluates LLMs on their ability to generate executable Python code using the Google Earth Engine API to answer Earth Observation questions.

▶ [Getting Started with Google Earth Engine API](https://www.youtube.com/watch?v=wCRKymmVjD4) — GeoAI Academy · 30:25 · 4 years ago

### Prompt engineering for LLMs seminar *(prerequisite)*
The paper explores various prompting strategies such as zero-shot, few-shot, and reflexion prompting to improve LLM performance. An advanced seminar on prompt engineering provides the theoretical and practical background to understand these techniques and their impact on LLM behavior.

*How the paper uses it:* Prompt engineering is a key methodological component in the paper's evaluation of LLM agents on Earth Observation tasks.

▶ [Prompt Engineering Tools for Large Language Models| Prof Dr Talat Waseem](https://www.youtube.com/watch?v=RjY6BpxLHTk) — Shalamar Surgical Symposium · 24:39 · 2 years ago

### UnivEARTH LLM Earth Observation talk *(the paper's own talk)*
The authors' own presentation on their paper offers the most direct and detailed insight into their research, methodology, results, and future directions. This talk is essential for understanding the nuances and specific challenges identified in automating Earth Observation with LLM agents.

*How the paper uses it:* This is the authors' own talk discussing the exact work presented in the paper.

▶ [Seeing Earth Through AI LLM Augmented Geospatial Research with Satellite Imagery AIAA LA 20250903](https://www.youtube.com/watch?v=fI9wnIUO9I8) — AIAA Los Angeles Section · 1:57:20 · 11 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on using large language models (LLMs) for automating Earth Observation tasks, start by learning the basics of satellite Earth Observation data and workflows, which provide the scientific context. Next, grasp how the Google Earth Engine API enables programmatic access to satellite data, a key tool in the paper. Then, explore prompt engineering techniques that improve LLM performance in generating code. Finally, study the core concept of LLMs generating executable code for scientific Earth Observation questions, which is the paper's main focus.

### Earth Observation satellite data seminar *(prerequisite)*
This section introduces the fundamentals of Earth Observation, including how satellites collect data, the types of sensors used, and the challenges in accessing and processing this data. Understanding these basics is essential to appreciate the scientific questions and data sources the paper addresses.

*How the paper uses it:* The paper's benchmark questions are derived from NASA Earth Observatory articles and rely on diverse satellite sensors and data collections.

▶ [Earth Observation 101 - 4.4: Data access and processing](https://www.youtube.com/watch?v=TbgU156k0OI) — WILDLABS.NET · 7:45 · 3y ago

### Google Earth Engine API lecture *(prerequisite)*
Learn how the Google Earth Engine (GEE) API provides a powerful platform to access and analyze large-scale satellite imagery and geospatial data programmatically using Python. This knowledge is crucial since the paper evaluates LLMs by their ability to generate executable GEE code.

*How the paper uses it:* The paper requires LLM agents to generate Python code that uses the Google Earth Engine API to answer Earth Observation questions.

▶ [Google Earth Engine Python API for Beginners | GEE | Google Colab](https://www.youtube.com/watch?v=we79Gtt_o1w) — GeoAI Academy · 12:25 · 3 years ago

### Prompt engineering for LLMs seminar *(prerequisite)*
Prompt engineering involves crafting inputs to LLMs to elicit better, more accurate outputs. Understanding zero-shot, few-shot, and reflexion prompting strategies helps explain how the paper attempts to improve LLM performance on complex code generation tasks.

*How the paper uses it:* The paper explores various prompting strategies to improve LLM agents' ability to generate correct Earth Engine code and answer questions.

▶ [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — CodeWithHarry · 15:25 · 1 year ago

### UnivEARTH LLM Earth Observation talk *(the paper's own talk)*
This talk directly discusses the paper's contributions, challenges, and findings regarding LLM agents applied to Earth Observation tasks. It provides a concise overview of the benchmark, evaluation results, and future directions.

*How the paper uses it:* This is the authors' own presentation on the UnivEARTH benchmark and their evaluation of LLM agents for Earth Observation.

▶ [Seeing Earth Through AI LLM Augmented Geospatial Research with Satellite Imagery AIAA LA 20250903](https://www.youtube.com/watch?v=fI9wnIUO9I8) — AIAA Los Angeles Section · 1:57:20 · 11 months ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Lecture: #9 Language Models for Code Generation - ScaDS.AI Dresden/Leipzig](https://www.youtube.com/watch?v=mto9XS1Bf1c) — also for: FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications (Bedrich Benes)
- [Large Language Models for Code Generation - Meetup ...](https://www.youtube.com/watch?v=VPy7HpmKCuA) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [Training Large Language Models for Secure Code Generation - Or Sahar](https://www.youtube.com/watch?v=EqKPnBrAAoE) — also for: Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development (Jugal K. Kalita)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [How LLMs Work & Why Prompt Engineering Matters](https://www.youtube.com/watch?v=8RWfE9eDWXI) — also for: Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking (Kunpeng Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the challenges and methods in automating Earth Observation tasks with LLM agents, as presented in the paper "Towards LLM Agents for Earth Observation." Starting with a simple code generation and execution accuracy evaluation, you then reimplement the core evaluation method on a small scale, and finally explore an extension addressing a key limitation by improving code generation reliability through prompt engineering.

### Beginner — Evaluate LLM Code Generation Accuracy on Sample UnivEARTH Questions
*Effort: a weekend, ~8 hours*

You build a small Python script that prompts an LLM (e.g., OpenAI GPT-4 or Anthropic Claude) to generate Google Earth Engine (GEE) Python code for a handful of yes/no Earth Observation questions inspired by UnivEARTH. Then, you execute the generated code snippets in the GEE Python API environment and measure the code execution success rate and answer accuracy.

**Why it shows you understood the paper:** This project shows you understand the core evaluation setup of the paper, including the difficulty LLMs face in generating executable code for Earth Observation tasks and how code execution failure impacts overall accuracy.

**Grounded in:** Code generation fails to run over 58% of the time, significantly limiting model effectiveness.

**Tech stack:** Python 3.11, OpenAI API or Anthropic API, Google Earth Engine Python API

**Data:** A small subset (5-10) of yes/no Earth Observation questions inspired by UnivEARTH, manually created based on NASA Earth Observatory articles as described in the paper.

**Build it:**

1. Select or write 5-10 yes/no Earth Observation questions similar to those in UnivEARTH.
2. Write Python code to prompt an LLM to generate GEE Python code answering each question.
3. Set up Google Earth Engine Python API environment to run generated code snippets.
4. Execute the generated code, record whether it runs successfully and the answer it produces.
5. Calculate and report code execution success rate and answer accuracy.
6. Write a README explaining the evaluation and results.

**Ships as:** A GitHub repo with Python scripts that generate and execute LLM-produced GEE code on sample questions, reporting execution success and accuracy, plus a README describing the process and findings.

**Stretch goal:** Add simple few-shot prompting to see if it improves code generation success and accuracy on the same questions.

### Intermediate — Reimplement UnivEARTH Benchmark Evaluation on a Small Scale
*Effort: 1-3 weekends*

You reimplement the core evaluation method of the paper by creating a small benchmark of yes/no Earth Observation questions (20-30) derived from NASA Earth Observatory articles. You prompt an LLM to generate GEE Python code for each question, execute the code, and compute metrics such as code execution success rate and answer accuracy, comparing zero-shot prompting against a simple few-shot baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main evaluation pipeline and metrics, showing comprehension of the challenges in code generation and the impact of prompting strategies on performance.

**Grounded in:** Comprehensive evaluation of state-of-the-art LLM agents on the UnivEARTH benchmark, revealing significant limitations in their ability to generate executable code and provide reliable evidence-based answers.

**Tech stack:** Python 3.11, OpenAI API or Anthropic API, Google Earth Engine Python API, Jupyter Notebook

**Data:** A small benchmark of 20-30 yes/no questions manually curated from NASA Earth Observatory articles, serving as a proxy for UnivEARTH.

**Build it:**

1. Curate 20-30 yes/no Earth Observation questions from NASA Earth Observatory articles.
2. Implement Python scripts to prompt an LLM with zero-shot and few-shot prompting to generate GEE code for each question.
3. Set up automated execution of generated code using the Google Earth Engine Python API.
4. Collect execution success/failure and answer correctness for each question and prompting method.
5. Compute and compare metrics: code execution success rate and answer accuracy for zero-shot vs few-shot.
6. Document the methodology, results, and insights in a Jupyter Notebook or README.

**Ships as:** A GitHub repo containing scripts and notebooks that reproduce the paper's evaluation approach on a small question set, comparing prompting strategies and reporting metrics.

**Stretch goal:** Incorporate simple reflexion prompting (iterative code refinement) to test if it reduces code execution failures.

### Advanced — Improve Earth Engine Code Generation Reliability via Domain-Aware Prompt Engineering
*Effort: a few weeks*

You develop and evaluate prompt engineering techniques that incorporate domain-specific Earth Observation knowledge (e.g., correct Earth Engine imagery collection names) to reduce code execution failures in LLM-generated GEE Python code. You apply these techniques on the small benchmark from the intermediate project and measure improvements in code execution success and answer accuracy.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper—the difficulty LLMs have recalling correct Earth Engine data sources—and attempts a concrete solution aligned with the paper's future directions, demonstrating deep engagement with the research challenges.

**Grounded in:** Models struggle with recalling correct Earth Engine imagery collection names, leading to high failure rates in code execution.

**Tech stack:** Python 3.11, OpenAI API or Anthropic API, Google Earth Engine Python API, Jupyter Notebook

**Data:** The same small benchmark of 20-30 yes/no Earth Observation questions curated for the intermediate project.

**Build it:**

1. Analyze common failure modes in code generation from the intermediate project, focusing on incorrect Earth Engine imagery collection names.
2. Collect or compile a list of Earth Engine imagery collection names relevant to the benchmark questions.
3. Design prompt templates that explicitly include this domain knowledge as context or examples to guide the LLM.
4. Implement the enhanced prompting pipeline and generate new GEE code for the benchmark questions.
5. Execute the new code, measure code execution success rate and answer accuracy, and compare against baseline prompting.
6. Write a detailed report or notebook discussing the impact of domain-aware prompting on code generation reliability.

**Ships as:** A GitHub repo with enhanced prompt engineering code, evaluation scripts, and a report showing improved code execution reliability and accuracy on Earth Observation questions.

**Stretch goal:** Experiment with fine-tuning a smaller open-source LLM on synthetic data augmented with Earth Engine domain knowledge to further improve performance.

_The UnivEARTH dataset and authors' code are not publicly released; all projects rely on manually curated question sets inspired by the paper's description and publicly available NASA Earth Observatory articles._
