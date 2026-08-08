---
title: "333 · Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking — Kunpeng Liu"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kunpeng-liu"
source_hash: "be6c8244a471c5298b060bce777e49bc05c0aedde9100387f3d99890a6e1582a"
sequence: 333
generator: "outreach-garden: managed"
---

# 333 · Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking

## At a glance

- **Professor:** Kunpeng Liu
- **Institution:** Clemson University
- **Paper:** [Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking](https://arxiv.org/abs/2505.19722)
- **Authors:** Yihao Ai, Zhiyuan Ning, Weiwei Dai, Pengfei Wang, Yi Du, Wenjuan Cui, Kunpeng Liu, Yuanchun Zhou
- **Year:** 2025

## Paper overview

This paper presents a new method called RPDR that improves biomedical entity linking by combining the strengths of closed-source and open-source large language models (LLMs). It uses closed-source LLMs to generate training data via prompting, then fine-tunes open-source LLMs to perform entity linking locally. This approach reduces reliance on costly and unstable API calls to closed-source models, while maintaining high accuracy in linking nonstandard biomedical terms to standard entities.

### Why it matters

**Research problem:** Biomedical entity linking requires mapping nonstandard medical terms to standard entities in knowledge bases, but traditional supervised methods need extensive annotated data and struggle to transfer across disciplines and languages. Closed-source LLMs can help but have stability and cost issues, while open-source LLMs lack sufficient power.

**Why it matters:** Accurate biomedical entity linking is crucial for utilizing medical texts effectively, but limited labeled data and high costs of using closed-source LLMs hinder practical deployment, especially in low-resource scenarios.

**Key contributions:**

- Redesign of traditional two-step entity linking into a three-step RPDR framework with improved performance.
- First application of knowledge distillation from closed-source to open-source LLMs for biomedical entity linking.
- Demonstration of effective transfer across languages and disciplines with limited human-labeled data.
- Empirical validation on real-world Chinese and public English biomedical datasets.

## About the professor

**Kunpeng Liu** — Assistant Professor, School of Computing, Clemson University.

Research interests: Reinforcement Learning (RL), Large Language Models (LLMs), Data-centric AI (DCAI), and AI for Science.

### Research links

- [Faculty/profile page](https://www.kunpengliu.com)
- [Resolved homepage](https://www.kunpengliu.com/)
- [Google Scholar](https://scholar.google.com/citations?user=wfF30KMAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on distilling closed-source LLM knowledge for biomedical entity linking, start with foundational concepts such as biomedical entity linking and prompt engineering, which are core to the task and data generation process. Then, explore the tradeoffs between open-source and closed-source LLMs to grasp deployment and cost considerations. Next, study knowledge distillation techniques in LLMs, the central method used for transferring knowledge in this work. Finally, focus on the paper-specific author talks and related advanced presentations to gain direct insight into the novel RPDR framework and its contributions.

### Biomedical entity linking *(prerequisite)*
Biomedical entity linking is the core NLP task addressed by the paper, involving mapping nonstandard biomedical mentions to standard knowledge base entities. Understanding existing transformer-based and neural approaches provides essential context for appreciating the improvements RPDR offers.

*How the paper uses it:* The paper aims to improve biomedical entity linking by leveraging LLMs for candidate re-ranking and knowledge distillation.

▶ [BioASQ 2022-DisTEMIST [NLP system]: Biomedical Entity Linking with Transformers - Florian Borchert](https://www.youtube.com/watch?v=rwE7WrbFSiM) — Biomedical Text Mining · 3 years ago

### Prompt engineering for LLMs *(prerequisite)*
Prompt engineering is a key technique used to generate high-quality training data from closed-source LLMs via few-shot prompting. Understanding how prompts influence LLM outputs is crucial for grasping the data generation step in RPDR.

*How the paper uses it:* RPDR uses prompt engineering to generate re-ranking training data from unannotated biomedical text using closed-source LLMs.

▶ [How LLMs Work & Why Prompt Engineering Matters](https://www.youtube.com/watch?v=8RWfE9eDWXI) — ByteMonk · 1 year ago

### Open-source vs closed-source LLMs *(prerequisite)*
This concept covers the tradeoffs in model power, cost, stability, and deployment between open-source and closed-source LLMs. Understanding these tradeoffs clarifies the motivation behind RPDR's hybrid approach.

*How the paper uses it:* RPDR combines closed-source LLMs for data generation and open-source LLMs for local deployment to balance cost and performance.

▶ [How AI Really Works - Intro to Open Source Large Language Models](https://www.youtube.com/watch?v=vrO8tZ0hHGk) — Kushal Goenka · 1:24:54 · 1 year ago

### Knowledge distillation in LLMs
Knowledge distillation is the central method for transferring knowledge from large, powerful teacher models to smaller, efficient student models. Studying this technique in detail reveals how RPDR fine-tunes open-source LLMs using data generated by closed-source LLMs.

*How the paper uses it:* RPDR distills knowledge from closed-source LLMs to open-source LLMs to enable local, cost-effective biomedical entity linking.

▶ [Lec 19 | Knowledge Distillation](https://www.youtube.com/watch?v=LvuutbHU5eo) — LCS2 · 58:47 · 9 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces core concepts needed to understand the RPDR framework for biomedical entity linking. Start with foundational knowledge about biomedical entity linking to grasp the task, then learn about prompt engineering and the tradeoffs between open-source and closed-source LLMs, which are key to the paper's approach. Finally, explore knowledge distillation in LLMs to understand how the paper transfers knowledge from closed-source to open-source models efficiently.

### Biomedical entity linking *(prerequisite)*
Biomedical entity linking is the task of mapping nonstandard medical terms in text to standardized entities in biomedical knowledge bases. Understanding this task is essential because it underpins the paper's goal of improving accuracy and efficiency in biomedical NLP applications.

*How the paper uses it:* The paper aims to improve biomedical entity linking by combining closed-source and open-source LLMs for better candidate re-ranking.

▶ [BioASQ 2022-DisTEMIST [NLP system]: Biomedical Entity Linking with Transformers - Florian Borchert](https://www.youtube.com/watch?v=rwE7WrbFSiM) — Biomedical Text Mining · 3 years ago

### Prompt engineering for LLMs *(prerequisite)*
Prompt engineering involves designing effective input prompts to guide large language models to produce desired outputs. This technique is crucial for generating high-quality training data from closed-source LLMs without manual annotation.

*How the paper uses it:* The paper uses prompt engineering to generate re-ranking training data from unannotated biomedical text using closed-source LLMs.

▶ [How LLMs Work & Why Prompt Engineering Matters](https://www.youtube.com/watch?v=8RWfE9eDWXI) — ByteMonk · 1 year ago

### Open-source vs closed-source LLMs *(prerequisite)*
Understanding the differences between open-source and closed-source large language models helps clarify tradeoffs in cost, stability, and deployment. Closed-source models are powerful but costly and less stable, while open-source models are cheaper and locally deployable but often less capable.

*How the paper uses it:* RPDR leverages closed-source LLMs for data generation and open-source LLMs for local deployment to balance cost and performance.

▶ [Closed-source vs. Open-source models: What enterprises should know | Box AI Explainer Series EP 13](https://www.youtube.com/watch?v=Wdlvy-tKqjo) — Box · 17:03 · 11 months ago

### Knowledge distillation in LLMs
Knowledge distillation is a method where a smaller or less powerful model (student) learns to mimic a larger, more powerful model (teacher). This technique enables efficient transfer of knowledge, allowing deployment of capable models locally with reduced resource needs.

*How the paper uses it:* The paper applies knowledge distillation to fine-tune open-source LLMs using training data generated by closed-source LLMs, enabling local and economical biomedical entity linking.

▶ [Knowledge Distillation: How LLMs train each other](https://www.youtube.com/watch?v=jrJKRYAdh7I) — Julia Turc · 16:04 · 1 year ago

## Already in your library

- [Knowledge Distillation Simplified | Teacher to Student Model ...](https://www.youtube.com/watch?v=_3asoj46jVw) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [Lecture 8: Prompt Engineering | LLMs Advance Topics| Artificial Intelligence |](https://www.youtube.com/watch?v=GxFUyQUBBW8) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the RPDR framework for biomedical entity linking from the paper. The beginner project focuses on reproducing a core mechanism—prompting a closed-source LLM to generate candidate re-ranking data. The intermediate project involves implementing the full RPDR pipeline on a public biomedical dataset to compare performance against a baseline. The advanced project extends the method by addressing the paper's limitation on generated data quality, experimenting with filtering techniques to improve fine-tuning outcomes.

### Beginner — Prompting Closed-Source LLM for Biomedical Candidate Re-Ranking Data
*Effort: a weekend, ~8 hours*

You build a simple script that uses a closed-source LLM API (e.g., OpenAI GPT-3.5 Turbo) to generate re-ranking training data for biomedical entity linking. Using a small set of unannotated biomedical mentions and candidate entities, you design and test prompts to produce labeled mention-candidate pairs with relevance scores.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key idea of using prompt engineering with closed-source LLMs to generate training data, reducing annotation costs and enabling knowledge distillation.

**Grounded in:** Closed-source LLMs generate training data via prompting to reduce annotation costs.

**Tech stack:** Python 3.11, OpenAI API client, Jupyter Notebook

**Data:** A small synthetic or publicly available biomedical mention-candidate set created by you to simulate unannotated data, since no authors' dataset is released.

**Build it:**

1. Collect or create a small list of biomedical mentions and candidate entities.
2. Design prompt templates inspired by the paper's description to ask GPT-3.5 Turbo to score or label candidate relevance.
3. Write a Python script to call the OpenAI API with your prompts and parse the responses.
4. Save the generated mention-candidate relevance pairs as training data.
5. Evaluate prompt outputs qualitatively to verify correctness.

**Ships as:** A GitHub repo with scripts and a README showing your prompt design, example API calls, and sample generated training data.

**Stretch goal:** Add few-shot examples in prompts and compare output quality with zero-shot prompting.

### Intermediate — Reimplementing RPDR for Biomedical Entity Linking on a Public Dataset
*Effort: 2 weekends, ~20 hours*

You implement the three-step RPDR pipeline: candidate retrieval with a bi-encoder, closed-source LLM prompting to generate re-ranking data, and fine-tuning an open-source LLM for candidate re-ranking. You apply this on a public biomedical entity linking dataset (e.g., AskAPatient or a similar open dataset) and compare accuracy against a simple baseline like SapBERT.

**Why it shows you understood the paper:** This project shows you can reproduce the core method of the paper end-to-end, including knowledge distillation from closed-source to open-source LLMs, and evaluate it with relevant metrics.

**Grounded in:** The authors propose RPDR, a three-step framework: (1) candidate retrieval using a bi-encoder, (2) prompting closed-source LLMs to generate re-ranking training data, and (3) distilling knowledge by fine-tuning open-source LLMs on this generated data.

**Tech stack:** Python 3.11, PyTorch, Transformers library, OpenAI API client, scikit-learn

**Data:** Use the public AskAPatient biomedical entity linking dataset as a substitute for the paper's data.

**Build it:**

1. Implement or reuse a bi-encoder model to retrieve candidate entities for each mention.
2. Use the beginner project's prompting method to generate re-ranking training data with GPT-3.5 Turbo.
3. Fine-tune an open-source LLM (e.g., Llama 2 or a biomedical domain model) on the generated data for candidate re-ranking.
4. Evaluate the fine-tuned model's accuracy (Acc@1) on the test set and compare it to a baseline like SapBERT.
5. Document your pipeline, results, and insights in a README.

**Ships as:** A GitHub repo with code to run the RPDR pipeline on AskAPatient, scripts for data generation and fine-tuning, and a report comparing accuracy to a baseline.

**Stretch goal:** Add multilingual data or test transfer across biomedical subdomains as in the paper.

### Advanced — Improving RPDR by Filtering Generated Training Data to Prevent Performance Drops
*Effort: 3+ weeks*

You extend the RPDR framework by implementing and evaluating methods to filter or improve the quality of the closed-source LLM generated training data before fine-tuning the open-source LLM. This addresses the paper's limitation that too much noisy generated data can degrade performance. You experiment with filtering heuristics or confidence scoring and measure impact on entity linking accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension of RPDR's challenges and the ability to innovate on its methodology.

**Grounded in:** Performance drops if too much generated training data with errors is used for fine-tuning. Future direction: Explore methods to filter or improve quality of generated training data to prevent performance degradation.

**Tech stack:** Python 3.11, PyTorch, Transformers, OpenAI API client, NumPy, scikit-learn

**Data:** Use the same public biomedical entity linking dataset as in the intermediate project, plus the generated training data from closed-source LLM prompting.

**Build it:**

1. Reimplement the RPDR pipeline from the intermediate project to generate training data and fine-tune an open-source LLM.
2. Design and implement filtering methods for generated data, such as thresholding on LLM confidence, semantic similarity checks, or human-in-the-loop verification.
3. Fine-tune the open-source LLM on filtered vs unfiltered generated data.
4. Evaluate and compare entity linking accuracy and robustness on test sets.
5. Analyze trade-offs between data quantity and quality and document findings.

**Ships as:** A GitHub repo with extended RPDR code including data filtering, experimental results showing improved fine-tuning stability, and a detailed README discussing methods and outcomes.

**Stretch goal:** Explore reinforcement learning techniques to optimize prompt generation or data filtering dynamically, linking to Dr. Liu's RL expertise.
