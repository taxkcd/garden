---
title: "647 · Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability — Jacob Andreas"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jacob-andreas"
source_hash: "6f42c188059187cab744b7e060d19c0d6d0cdb821d1d8f8ed05a70eb5c0246ed"
sequence: 647
generator: "outreach-garden: managed"
---

# 647 · Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability

## At a glance

- **Professor:** Jacob Andreas
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability](https://arxiv.org/pdf/2401.08574)
- **Authors:** Afra Feyza Akyürek, Ekin Akyürek, Derry Wijaya, Leshem Choshen, Jacob Andreas
- **Year:** 2024

## Paper overview

This paper introduces Deductive Closure Training (DCT), a method to improve language models by making them generate and reason about logical implications and contradictions of given texts. DCT fine-tunes models to produce more coherent, accurate, and updatable outputs by training them on sets of statements that are logically consistent and factually correct. The method works in supervised, semi-supervised, and unsupervised settings and shows significant improvements on fact verification, question answering, and model editing tasks.

### Why it matters

**Research problem:** Current language models often generate factually incorrect or logically inconsistent text and are difficult to update with new information. They lack a globally coherent, manipulable model of the world, which limits their reliability and usability for fact verification and knowledge updating.

**Why it matters:** Improving the factual accuracy, coherence, and updatability of language models is crucial for their deployment as reliable sources of information and tools for reasoning. Without these improvements, language models can produce misleading or false information and cannot effectively incorporate new knowledge.

**Key contributions:**

- Proposed Deductive Closure Training, a novel fine-tuning procedure that leverages inference-time reasoning for training-time supervision.
- Demonstrated that DCT improves language model factuality, coherence, and updatability across multiple benchmarks.
- Showed that DCT can be applied in supervised, semi-supervised, and unsupervised settings, including model updating and editing.
- Provided a formal analysis proving conditions under which unsupervised DCT improves model accuracy.
- Released code and prompt templates to facilitate reproducibility and further research.

## About the professor

**Jacob Andreas** — Associate Professor, EECS, Massachusetts Inst. of Technology.

Research interests: Interactive learning and teaching, Scientific understanding of neural models, Human-like language understanding

### Research links

- [Faculty/profile page](https://web.mit.edu/jda/www)
- [Lab website](http://lingo.csail.mit.edu)
- [Google Scholar](http://scholar.google.com/citations?user=dnZ8udEAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Logical reasoning and inference in AI
**The paper assumes:** logical reasoning, deductive inference, and consistency checking in artificial intelligence
**Already in this field?** Skip this entirely if you already understand logical inference methods and reasoning frameworks used in AI and language models.

To understand Deductive Closure Training and its reliance on logical implications and contradictions in language models, a solid grasp of logical reasoning and inference in AI is essential. The rigorous course option offers a deep, structured university-level foundation in AI principles including logic, while the fast track provides a concise, intuition-driven introduction to classical logic and paradoxes relevant to reasoning systems. Choose the rigorous path for comprehensive mastery or the fast track for a quick yet insightful overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS221: Artificial Intelligence: Principles and Techniques | Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rMeDqwS1yFl3j3sR_-MQNEN) — Stanford Online · 20 videos · 24.9h across 20 episodes

**Watch only this:** Lectures 15 (Logic I) and 16 (Logic II), about 2.5 hours total — these cover formal logic foundations essential for grasping deductive closure and consistency checking in AI.

*Why it unblocks this paper:* Stanford CS221 is a comprehensive AI course covering foundational principles including logic, inference, and reasoning, directly relevant to understanding the logical consistency and deductive closure concepts used in the paper.

*If you want all of it:* About 24.9 hours across 20 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Logic, Paradoxes & the Foundations of AI - How Classical Thinking Shapes Modern Computer Science](https://www.youtube.com/playlist?list=PLgMLoQq_9TW8NeosBePa2EsriND7L0Hv5) — cajunpoorguy · 9 videos · 2.5h across 9 episodes

**Watch only this:** Episodes 2 (The Wason Selection Task), 4 (The Trolley Dilemma & AI Ethics), and 8 (The Sorites Paradox), about 45 minutes total — these episodes illustrate reasoning, paradoxes, and logical consistency relevant to the paper's method.

*Why it unblocks this paper:* This short playlist offers clear, well-produced explainers on classical logic problems and paradoxes that illuminate the challenges and foundations of logical reasoning in AI, providing an accessible introduction to key concepts underlying the paper's approach.

*If you want all of it:* About 2.5 hours across 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Deductive Closure Training (DCT), start with foundational knowledge about logical consistency in language models and model fine-tuning techniques, which underpin the improvements DCT achieves. Next, explore fact verification with neural models to grasp the evaluation context where DCT shows gains. Finally, focus on the core concept of Deductive Closure Training itself, prioritizing the authors' own talks for direct insight into their novel method.

### Logical consistency in language models *(prerequisite)*
This section covers how language models maintain logical coherence, a key challenge that DCT addresses by improving the logical consistency of generated text. Understanding this helps contextualize why DCT's approach to reasoning about implications and contradictions is impactful.

*How the paper uses it:* DCT improves logical consistency and reduces contradictory predictions in language models.

▶ [Logically Consistent Language Models via Neuro-Symbolic Integration | Diego Calanzone](https://www.youtube.com/watch?v=65JNRYWLWT4) — Centaur AI Institute | Neuro-Symbolic AI Community · 1:18:23 · Streamed 6 mo ago

### Model fine-tuning techniques *(prerequisite)*
Fine-tuning is the core mechanism by which DCT updates language models. This section provides a detailed understanding of fine-tuning processes, data preparation, and model adaptation, which are essential to grasp how DCT modifies models to improve performance.

*How the paper uses it:* DCT is a novel fine-tuning procedure that leverages reasoning during training.

▶ [LLM Fine-Tuning Explained: The Complete Guide](https://www.youtube.com/watch?v=Wx1oiBCmxjY) — Aishwarya Srinivasan and The Gen Academy · 10:26 · 4 mo ago

### Fact verification with neural models *(prerequisite)*
Fact verification tasks are a primary benchmark for evaluating DCT's effectiveness. This section introduces formal verification concepts and neural network verification methods relevant to assessing factual accuracy improvements in language models.

*How the paper uses it:* DCT significantly improves fact verification accuracy on multiple datasets.

▶ [FMAS 2021 - Understanding and Verifying Deep Neural Networks](https://www.youtube.com/watch?v=mIJ3yVVy_BM) — Formal Methods Europe · 4 yr ago

### Deductive Closure Training method
This section focuses on the central contribution of the paper: Deductive Closure Training. It explains how DCT uses language models to generate and select logically consistent text subsets for fine-tuning, enhancing coherence, accuracy, and updatability.

*How the paper uses it:* DCT is the novel training method proposed and evaluated in the paper.

▶ [Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability](https://www.youtube.com/watch?v=oQDy8_zBiR0) — Arxiv Papers · 2 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Deductive Closure Training (DCT) and its impact on language models, start by building foundational knowledge of how language models are fine-tuned and how fact verification works in neural models. Next, grasp the importance of logical consistency in language models, which is crucial for DCT's improvements. Finally, explore the core concept of Deductive Closure Training itself through concise talks directly explaining the method.

### Model fine-tuning techniques *(prerequisite)*
Fine-tuning is the process of adapting a pre-trained language model to perform better on specific tasks by continuing training on task-relevant data. Understanding fine-tuning helps you grasp how DCT modifies models to improve their reasoning and factual accuracy.

*How the paper uses it:* DCT is a novel fine-tuning procedure that uses logical reasoning during training to improve language model outputs.

▶ [LLM Fine-Tuning Explained: The Complete Guide](https://www.youtube.com/watch?v=Wx1oiBCmxjY) — Aishwarya Srinivasan and The Gen Academy · 10:26 · 4 mo ago

### Fact verification with neural models *(prerequisite)*
Fact verification involves checking whether statements are true or false using neural models, which is a key challenge for language models. Learning about this task provides context for why improving factual accuracy, as DCT does, is important.

*How the paper uses it:* DCT significantly improves fact verification accuracy by training models to reason about logical implications and contradictions.

▶ [What is Neural Network Verification?](https://www.youtube.com/watch?v=1LcJk5UHpTo) — Sydney Michelle Katz · 5 yr ago

### Logical consistency in language models *(prerequisite)*
Logical consistency means that a language model's outputs do not contradict each other and follow coherent reasoning patterns. This concept is essential to understand how DCT reduces contradictory predictions and enhances model coherence.

*How the paper uses it:* DCT improves logical consistency by fine-tuning models on sets of logically coherent and factually correct statements.

▶ [Logically Consistent Language Models via Neuro-Symbolic Integration | Diego Calanzone](https://www.youtube.com/watch?v=65JNRYWLWT4) — Centaur AI Institute | Neuro-Symbolic AI Community · 1:18:23 · Streamed 6 mo ago

### Deductive Closure Training method
Deductive Closure Training is a method that uses language models to generate and select logically consistent implications and contradictions from seed texts, then fine-tunes the model on this curated data to improve reasoning and factuality. This final step builds on all prior concepts to understand the paper's core contribution.

*How the paper uses it:* This is the central method proposed in the paper to improve language model coherence, accuracy, and updatability.

▶ [Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability](https://www.youtube.com/watch?v=oQDy8_zBiR0) — Arxiv Papers · 2 yr ago

## Already in your library

- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 7: Parallelism 1](https://www.youtube.com/watch?v=l1RJcDjzK8M) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of Deductive Closure Training (DCT) from the paper. The beginner project reproduces a simple logical consistency check on small text sets to grasp the core idea. The intermediate project implements a simplified DCT fine-tuning pipeline on a public fact verification dataset, comparing it to a baseline. The advanced project extends DCT to multi-hop reasoning over implication graphs, addressing a key limitation noted by the authors.

### Beginner — Logical Consistency Checker for Contradictory Statements
*Effort: a weekend, ~8 hours*

You build a small Python script that takes a set of short English statements and identifies pairs that are logical contradictions or implications using simple rule-based heuristics and prompts to a language model API. The tool outputs which statements are consistent or contradictory within the set.

**Why it shows you understood the paper:** This project shows you understand the paper's core mechanism of generating and evaluating logical implications and contradictions as a set, a foundational step in Deductive Closure Training.

**Grounded in:** DCT prompts LMs to generate additional text implied by these documents, reason globally about the correctness of this generated text, and finally fine-tune on text inferred to be correct.

**Tech stack:** Python 3.11, OpenAI API or similar LLM API

**Data:** You create a small synthetic dataset of 10-20 short factual statements with known contradictions and implications, simulating seed documents and their logical closures.

**Build it:**

1. Write a Python script to input a small set of factual statements.
2. Implement prompt templates to query an LLM for whether one statement implies or contradicts another.
3. Aggregate pairwise results to identify logical consistency or contradictions in the set.
4. Output a report summarizing consistent and contradictory pairs.
5. Test the script on your synthetic dataset.

**Ships as:** A GitHub repo with the Python script, example input/output files, and a README explaining how the tool models logical consistency as in DCT.

**Stretch goal:** Add a simple visualization of the logical implication and contradiction graph between statements.

### Intermediate — Simplified Deductive Closure Training on CREAK Fact Verification
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of Deductive Closure Training by fine-tuning a pretrained language model on the CREAK fact verification dataset. You generate additional implied or contradictory statements using prompts, filter for logical consistency, and fine-tune on the consistent subset. You compare verification accuracy against a baseline fine-tuning without DCT.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core DCT method from the paper's description, apply it to a real benchmark, and measure improvements in factual accuracy and coherence.

**Grounded in:** Unsupervised DCT improved fact verification accuracy by up to 12% on the CREAK dataset compared to few-shot prompting baselines.

**Tech stack:** Python 3.11, PyTorch, HuggingFace Transformers, OpenAI API or local LLM for generation

**Data:** Use the publicly available CREAK fact verification dataset as a substitute for the paper's evaluation data.

**Build it:**

1. Download and preprocess the CREAK dataset for fact verification.
2. Implement prompt templates to generate logical implications and contradictions from seed statements using an LLM.
3. Filter generated statements to select a logically consistent subset.
4. Fine-tune a pretrained language model on this subset (DCT fine-tuning).
5. Fine-tune the same model on the original CREAK data as a baseline.
6. Evaluate and compare fact verification accuracy of both models.

**Ships as:** A GitHub repo with code for data preprocessing, generation, filtering, fine-tuning, evaluation scripts, and a README reporting accuracy improvements and methodology.

**Stretch goal:** Experiment with semi-supervised DCT by mixing generated data with labeled CREAK data during fine-tuning.

### Advanced — Extending Deductive Closure Training to Multi-Hop Reasoning
*Effort: 3+ weeks*

You develop an extension of DCT that performs multi-hop reasoning over a graph of logical implications and contradictions, addressing the paper's limitation of single-layer reasoning. You build a pipeline to generate multi-step inference chains, evaluate global logical consistency, and fine-tune a language model accordingly. You test this on a subset of CREAK or a synthetic multi-hop fact verification dataset.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of DCT and the challenges of scaling it to more complex reasoning tasks.

**Grounded in:** DCT was applied only to a single layer of implications and contradictions; more complex multi-hop reasoning was not explored.

**Tech stack:** Python 3.11, PyTorch, HuggingFace Transformers, NetworkX for graph processing, OpenAI API or local LLM for generation

**Data:** Use CREAK dataset or create a synthetic dataset with multi-hop logical relations between statements to simulate multi-step reasoning.

**Build it:**

1. Implement a graph data structure to represent statements as nodes and logical implications/contradictions as edges.
2. Extend prompt templates to generate multi-hop inference chains from seed statements.
3. Develop algorithms to evaluate global logical consistency over multi-hop graphs.
4. Filter multi-hop consistent subsets for fine-tuning.
5. Fine-tune a language model on this multi-hop consistent data.
6. Evaluate improvements in fact verification accuracy and logical coherence compared to single-hop DCT.

**Ships as:** A GitHub repo with code for multi-hop generation, graph consistency evaluation, fine-tuning, and evaluation, plus a detailed README documenting the extension and results.

**Stretch goal:** Integrate probabilistic reasoning over the multi-hop graph to handle uncertainty in generated statements.
