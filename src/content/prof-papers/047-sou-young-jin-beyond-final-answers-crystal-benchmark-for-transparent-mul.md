---
title: "047 · Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation — Sou-Young Jin"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-souyoungjin-github-io"
source_hash: "9f1b7fd0d8c61f4d7e50c5af7c2b9a92b095db409cd6f86b9f0d10f5ba808c71"
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

To deeply understand the CRYSTAL benchmark paper, start with foundational knowledge on multimodal large language models and reinforcement learning techniques for reasoning, as these underpin the paper's approach. Then, explore the concept of step-by-step reasoning evaluation to grasp the motivation behind CRYSTAL's detailed intermediate step assessment. Finally, focus on the core concept of the CRYSTAL benchmark itself through the authors' own talk, which provides direct insights into their methodology and contributions.

## Recommended videos (in order)

### multimodal large language models *(prerequisite)*
This section covers the foundational architecture and training principles of models that integrate vision and language modalities, essential for understanding the input and output modalities CRYSTAL evaluates. The selected university-level seminar provides a rigorous overview suitable for advanced readers.

*How the paper uses it:* CRYSTAL evaluates reasoning in multimodal large language models that combine vision and language inputs.

▶ [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — Stanford Online · 1:04:40

### reinforcement learning for reasoning *(prerequisite)*
Understanding reinforcement learning methods that enhance reasoning capabilities is critical, as the paper introduces the Causal Process Reward (CPR) and CPR-Curriculum training strategies based on RL. The chosen talks are research seminars and advanced presentations that delve into RL frameworks relevant to reasoning improvements.

*How the paper uses it:* CPR and CPR-Curriculum use reinforcement learning to improve step-level reasoning quality in multimodal models.

▶ [Research Seminar: Beyond Pretraining: A Deep Dive into RL ...](https://www.youtube.com/watch?v=SD5raqvYG-0) — Clarifai · 55:02

### step-by-step reasoning evaluation *(prerequisite)*
This concept explains the importance and methods of evaluating intermediate reasoning steps rather than just final answers, directly motivating CRYSTAL's design. The selected talks are from academic and research institutions focusing on fine-grained reasoning evaluation frameworks.

*How the paper uses it:* CRYSTAL's key innovation is evaluating intermediate reasoning steps with novel metrics to detect reasoning failures.

▶ [LLM Reasoning @ DLCT](https://www.youtube.com/watch?v=x7kg0JR8dTg) — ML Collective · 45:04 · 2 years ago

### CRYSTAL benchmark talk *(the paper's own talk)*
The authors' own presentation on CRYSTAL is the most direct and authoritative source to understand their benchmark, evaluation metrics, multi-agent pipeline, and training methods. This talk provides detailed insights into the paper's contributions and experimental findings.

*How the paper uses it:* This is the authors' own detailed presentation on the CRYSTAL benchmark and their novel training and evaluation methods.

▶ [LLaMA-Adapter - 5-Minute Student Presentation by Wayner Barrios and Baris Yildirim @dartmouth](https://www.youtube.com/watch?v=go-oWBTi90M) — Yu-Wing Tai · 4:54 · 1 year ago
