---
title: "047 · Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation — Sou-Young Jin"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-souyoungjin-github-io"
source_hash: "abab9655cf87ceef577fd2e766c14272f1437b1ec8f75915576ba178bce08419"
sequence: 47
generator: "outreach-garden: managed"
---

# 047 · Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation

## At a glance

- **Professor:** Sou-Young Jin
- **Institution:** Dartmouth College
- **Paper:** [Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation](https://arxiv.org/pdf/2603.13099)
- **Authors:** Wayner Barrios, SouYoung Jin
- **Year:** 2026

## Paper overview

This paper introduces CRYSTAL, a new benchmark designed to evaluate how well multimodal large language models (MLLMs) perform step-by-step reasoning on vision-language tasks, rather than just judging their final answers. CRYSTAL provides detailed intermediate reasoning steps and metrics to assess reasoning quality and order, revealing common failures in current models. The authors also propose a new training reward that improves models' reasoning abilities.

### Why it matters

**Research problem:** Existing multimodal benchmarks evaluate only the final answers of models, which allows models to guess correctly without genuine understanding or transparent reasoning. This makes it difficult to detect reasoning errors, hallucinations, or shortcuts in multimodal large language models.

**Why it matters:** Transparent and trustworthy AI requires models to reason correctly and explain their thought process, especially for complex multimodal tasks involving images and language. Without evaluating intermediate reasoning steps, models can exploit shortcuts, leading to unreliable or unsafe outputs.

**Key contributions:**

- CRYSTAL benchmark with detailed step-level reasoning annotations for multimodal tasks
- Novel evaluation metrics (Match F1 and Ordered Match F1) that assess reasoning quality and order
- Delphi-inspired multi-agent pipeline for generating and validating reasoning step references
- Causal Process Reward (CPR) and CPR-Curriculum training methods that improve reasoning quality
- Comprehensive evaluation of 20 MLLMs revealing universal cherry-picking and disordered reasoning

## About the professor

**Sou-Young Jin** — Assistant Professor, Department of Computer Science, Dartmouth College.

Research interests: Teaching Machines to See and Feel, empathy-driven video understanding, multimodal reasoning, accessibility for blind and low vision audiences, privacy-preserving learning

### Research links

- [Faculty/profile page](https://souyoungjin.github.io)
- [Resolved homepage](https://souyoungjin.github.io/)
- [Lab website](https://github.com/SEE-AI-Lab)
- [Google Scholar](https://scholar.google.com/citations?user=_B-_CzYAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CRYSTAL benchmark paper, start by building foundational knowledge on multimodal large language models and reinforcement learning techniques for reasoning, as these underpin the models evaluated and the training methods proposed. Next, study step-level reasoning metrics to grasp how intermediate reasoning quality and order are quantitatively assessed. Finally, focus on the core concept of transparent multimodal reasoning evaluation with the authors' own talk on the CRYSTAL benchmark to gain direct insight into their novel benchmark, evaluation metrics, and training strategies.

### Multimodal large language models *(prerequisite)*
This section covers the architecture and capabilities of large language models that process multiple modalities such as vision and language. Understanding these models is essential because CRYSTAL evaluates their reasoning abilities on vision-language tasks.

*How the paper uses it:* CRYSTAL evaluates step-by-step reasoning in multimodal large language models, so understanding these models is foundational.

▶ [Stanford CS25: V4 I From Large Language Models to Large Multimodal Models](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — Stanford Online · 1:20:04 · 2 years ago

### Reinforcement learning for reasoning *(prerequisite)*
This section explores how reinforcement learning can be used to improve reasoning capabilities in language models, including reward design and curriculum strategies. This knowledge is crucial to understand the CPR and CPR-Curriculum training methods introduced in the paper.

*How the paper uses it:* The paper proposes CPR and CPR-Curriculum, reinforcement learning methods to enhance reasoning quality in multimodal models.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 10: RL for LLM Reasoning](https://www.youtube.com/watch?v=O2VpNnwB4lM) — Stanford Online · 1:10:30 · 7 months ago

### Step-level reasoning metrics *(prerequisite)*
This section focuses on metrics that evaluate the quality and order of intermediate reasoning steps rather than just final answers. Grasping these metrics is key to appreciating how CRYSTAL assesses reasoning transparency and coherence.

*How the paper uses it:* CRYSTAL introduces Match F1 and Ordered Match F1 metrics to evaluate reasoning step quality and order.

▶ [How do thinking and reasoning models work?](https://www.youtube.com/watch?v=xCRvOUykOX0) — Google for Developers · 13:26 · 7 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the CRYSTAL benchmark paper, starting with the basics of multimodal large language models (MLLMs), then covering reinforcement learning techniques for reasoning enhancement, followed by step-level reasoning metrics to evaluate intermediate reasoning steps, and culminating in the core concept of multimodal reasoning evaluation. Each step builds intuition with clear, concise videos to help grasp how CRYSTAL advances transparent and trustworthy AI reasoning.

### Multimodal large language models *(prerequisite)*
Learn what multimodal large language models are—AI systems that process and reason over multiple data types like images and text. This foundation helps understand the types of models evaluated by CRYSTAL.

*How the paper uses it:* CRYSTAL evaluates reasoning abilities of multimodal large language models on vision-language tasks.

▶ [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — IBM Technology · 3 months ago

### Reinforcement learning for reasoning *(prerequisite)*
Understand how reinforcement learning can improve AI reasoning by rewarding better thought processes, not just correct answers. This intuition is key to grasping the CPR training method introduced in the paper.

*How the paper uses it:* The paper uses reinforcement learning with the Causal Process Reward to enhance reasoning quality in MLLMs.

▶ [Why Reinforcement Learning Unlocks Reasoning in LLMs (Aha Moments Explained)](https://www.youtube.com/watch?v=B52Dna2tYDY) — AI Papers Academy · 11:23 · 6 months ago

### Step-level reasoning metrics *(prerequisite)*
Explore how to evaluate AI reasoning beyond final answers by measuring the quality and order of intermediate reasoning steps. This concept is essential to understanding CRYSTAL’s novel evaluation metrics.

*How the paper uses it:* CRYSTAL proposes Match F1 and Ordered Match F1 metrics to assess step-level reasoning quality and order.

▶ [How do thinking and reasoning models work?](https://www.youtube.com/watch?v=xCRvOUykOX0) — Google for Developers · 13:26 · 7 months ago

### Multimodal reasoning evaluation
Dive into the challenges and methods for evaluating reasoning in multimodal AI systems, focusing on transparent, step-by-step reasoning rather than just final answers.

*How the paper uses it:* CRYSTAL is a benchmark specifically designed to evaluate transparent multimodal reasoning with detailed intermediate steps.

▶ [Multimodal Reasoning: Survey & Roadmap](https://www.youtube.com/watch?v=z0u9kSuspbQ) — AI Research Roundup · 1 year ago

## Already in your library

- [LLaMA-Adapter - 5-Minute Student Presentation by Wayner Barrios and Baris Yildirim @dartmouth](https://www.youtube.com/watch?v=go-oWBTi90M) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [LLM Reasoning @ DLCT](https://www.youtube.com/watch?v=x7kg0JR8dTg) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the CRYSTAL benchmark paper. The beginner project reproduces and visualizes the paper's novel step-level reasoning metrics on a small synthetic example, grounding you in the core evaluation concepts. The intermediate project reimplements the Causal Process Reward (CPR) training method on a smaller multimodal reasoning dataset, showing practical application of the paper's reinforcement learning approach. The advanced project extends the Ordered Match F1 metric to model causal dependencies between reasoning steps, addressing a key limitation and exploring new evaluation methods.

### Beginner — Visualize Step-Level Reasoning Metrics on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates simple multimodal reasoning chains and computes the Match F1 and Ordered Match F1 metrics as defined in the paper. You create visualizations to illustrate how these metrics capture reasoning quality and order, reproducing the intuition behind the paper's evaluation approach.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's core contribution of step-level reasoning evaluation metrics and their importance in diagnosing reasoning quality beyond final answers.

**Grounded in:** Novel evaluation metrics (Match F1 and Ordered Match F1) that assess reasoning quality and order

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** Synthetic reasoning step sequences you create to simulate partial matches, missing steps, and order variations, inspired by examples in the paper.

**Build it:**

1. Implement functions to compute Match F1 and Ordered Match F1 between two sequences of reasoning steps.
2. Generate synthetic pairs of reasoning chains with varying degrees of overlap and order correctness.
3. Compute metrics on these pairs and tabulate results.
4. Visualize metric values against different reasoning error types using plots.
5. Write a README explaining the metrics, your synthetic data design, and interpretation of results.

**Ships as:** A Jupyter Notebook or Python script with metric implementations, synthetic data generation, plots illustrating metric behavior, and a README explaining the evaluation concepts.

**Stretch goal:** Add a simple web UI using React to allow interactive input of reasoning chains and live metric computation.

### Intermediate — Reimplement CPR Training on a Small Multimodal Reasoning Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the Causal Process Reward (CPR) training method described in the paper to improve reasoning quality of a multimodal model on a smaller public vision-language reasoning dataset (e.g., VQA or NLVR2 as a substitute). You compare baseline training with CPR-based reinforcement learning and report Match F1 and accuracy improvements.

**Why it shows you understood the paper:** This project shows you understand the paper's core method of coupling answer correctness with reasoning alignment via CPR and can apply reinforcement learning to improve multimodal reasoning quality.

**Grounded in:** Causal Process Reward (CPR) and CPR-Curriculum training methods that improve reasoning quality

**Tech stack:** Python 3.11, PyTorch, transformers, Jupyter Notebook

**Data:** A publicly available vision-language reasoning dataset such as VQA or NLVR2, used as a substitute for CRYSTAL data since the authors released no code or dataset.

**Build it:**

1. Implement Match F1 metric for step-level reasoning alignment based on paper description.
2. Set up a baseline multimodal model training pipeline on the chosen dataset.
3. Implement CPR as a multiplicative reward combining answer correctness and reasoning alignment.
4. Train the model with and without CPR-based reinforcement learning.
5. Evaluate and compare Match F1 and accuracy metrics between baseline and CPR-trained models.
6. Document your implementation details, results, and analysis in a README.

**Ships as:** A GitHub repo with code to train and evaluate a multimodal model using CPR, scripts to compute Match F1, and a report comparing baseline and CPR training results.

**Stretch goal:** Implement the CPR-Curriculum progressive training strategy and evaluate its impact on reasoning quality.

### Advanced — Extend Ordered Match F1 to Model Causal Dependencies in Reasoning Steps
*Effort: 3+ weeks*

You develop an extension of the Ordered Match F1 metric that incorporates modeling of causal dependencies between reasoning steps, addressing a key limitation noted in the paper. You design and implement a method to evaluate causal coherence in reasoning chains and test it on synthetic or publicly available multimodal reasoning data.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and advances the evaluation of multimodal reasoning by integrating causal structure into step-level metrics, potentially opening new research directions.

**Grounded in:** Ordered Match F1 metric does not yet model causal dependencies between reasoning steps

**Tech stack:** Python 3.11, networkx, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic reasoning chains annotated with causal dependency graphs you create, or adapted from public multimodal reasoning datasets with step annotations.

**Build it:**

1. Review the Ordered Match F1 metric and identify how to incorporate causal dependency modeling.
2. Design a representation for causal dependencies between reasoning steps (e.g., directed acyclic graphs).
3. Implement an extended metric that evaluates both order and causal coherence between predicted and reference reasoning chains.
4. Generate synthetic reasoning chains with known causal structures to validate your metric.
5. Compare your extended metric against Ordered Match F1 on these examples.
6. Write a detailed README explaining your metric design, implementation, and experimental validation.

**Ships as:** A GitHub repo with code implementing the causal-aware reasoning metric, synthetic data generation scripts, evaluation results, and a comprehensive README.

**Stretch goal:** Apply your causal reasoning metric to evaluate outputs from existing multimodal models and analyze their causal reasoning quality.
