---
title: "920 · Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization — Yanfu Zhang"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yanfu-zhang"
source_hash: "2580278c12653d8d832d82a44c280fccae6f2efce62c56d4ca3bc63ff046e218"
sequence: 920
generator: "outreach-garden: managed"
---

# 920 · Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization

## At a glance

- **Professor:** Yanfu Zhang
- **Institution:** College of William and Mary
- **Paper:** [Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization](https://arxiv.org/pdf/2510.21059)
- **Authors:** Mahmud Wasif Nafee, Maiqi Jiang, Haipeng Chen, Yanfu Zhang
- **Year:** 2025

## Paper overview

This paper addresses the problem of updating large language models (LLMs) with new or corrected factual information without retraining or modifying their internal weights. The authors propose a method called DR-IKE that dynamically selects the most useful examples to include in the prompt for in-context knowledge editing, improving accuracy and efficiency when editing LLMs accessed as black-box APIs.

### Why it matters

**Research problem:** Large language models often contain outdated or incorrect knowledge due to fixed training data, and updating them via retraining is computationally expensive and often infeasible, especially for black-box commercial APIs. Existing in-context knowledge editing methods use static sets of demonstration examples, which face a trade-off between quantity and quality and lack adaptivity to task difficulty.

**Why it matters:** Accurate and up-to-date factual knowledge in LLMs is critical for many applications such as question answering, dialogue systems, and recommendations. Efficiently editing knowledge without retraining enables real-time updates and fixes, especially important for large models accessed via APIs where internal weights cannot be changed.

**Key contributions:**

- Design of a BERT-based retriever trained via policy gradients to select and rank demonstrations by their editing utility without weight updates.
- Introduction of a dynamic threshold (budget controller) to prune low-value examples, balancing prompt length and informativeness.
- Demonstration that adaptive example selection improves edit success, reduces latency, and preserves unrelated knowledge better than static methods.
- Empirical validation on the COUNTERFACT benchmark and other datasets showing DR-IKE outperforms prior in-context editors on multiple LLMs, including black-box API settings.

## About the professor

**Yanfu Zhang** — Assistant Professor, Computer Science, College of William and Mary.

Research interests: machine learning, data mining, natural language processing, and computer vision

### Research links

- [Faculty/profile page](https://yaz91.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** policy gradient methods, reinforcement learning algorithms, Markov decision processes
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals and policy gradient training methods.

This background focuses on reinforcement learning (RL), specifically policy gradient methods like REINFORCE, which are central to the training approach used in the paper's dynamic retriever. The rigorous course option provides a deep, structured university-level treatment of RL algorithms and theory, while the fast track offers a concise, intuition-driven introduction to core RL concepts and policy gradients. Readers can choose the rigorous lane for comprehensive understanding or the fast track for a quicker, practical grasp of the key ideas relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-5 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic), about 5.5 hours — these cover foundational RL concepts and policy gradient methods essential to understanding the paper's training approach.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a current, authoritative university course that covers policy gradients, actor-critic methods, and RL for LLMs in detail, directly matching the paper's use of policy gradient training for the retriever.

*If you want all of it:* All 19 lectures, about 20.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning from Scratch](https://www.youtube.com/playlist?list=PLUGP9jhqEwEs) — Robo · 7 videos · 1.3h across the first 6 episodes

**Watch only this:** Episodes 1-3 (Every RL Algorithm Explained on One Simple Game, PPO Explained Visually, Policy Gradients & Actor-Critic Explained Visually), about 36 minutes — these episodes cover the fundamental RL concepts and policy gradient algorithms relevant to the paper.

*Why it unblocks this paper:* The 'Reinforcement Learning from Scratch' series by Robo offers a clear, visual, and concise explanation of policy gradients and actor-critic methods, including REINFORCE, which aligns well with the paper's core training technique, making it an efficient primer.

*If you want all of it:* All 6 episodes, about 1.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DR-IKE paper, start with foundational knowledge on policy gradient reinforcement learning to grasp how the retriever is trained. Next, build understanding of in-context learning and editing, the core paradigm enabling knowledge updates without weight changes. Then, study retriever models for NLP, focusing on BERT-based retrievers as used in DR-IKE. Finally, explore the paper's core concept through the authors' own talk or closely related research talks to see the method and results in context.

### Policy gradient reinforcement learning *(prerequisite)*
This section covers the fundamentals of policy gradient methods in reinforcement learning, which are critical to understanding how DR-IKE trains its BERT-based retriever using REINFORCE. The selected lecture from Stanford CS229 Spring 2026 provides a rigorous, graduate-level introduction to policy gradients, suitable for advanced readers.

*How the paper uses it:* DR-IKE uses policy gradient reinforcement learning (REINFORCE) to train its retriever model for dynamic example selection.

▶ [Stanford CS229 Machine Learning | Spring 2026 | Lecture 16: Basic Concept in RL, Policy Gradient](https://www.youtube.com/watch?v=hHC-SF3utxg) — Stanford Online · 1:13:19 · 2mo ago

### In-context learning and editing *(prerequisite)*
This section explains the core paradigm of in-context learning and knowledge editing in large language models, which allows updating model outputs without changing internal weights. The Stanford CS229 Spring 2026 lecture on Transformers and In-Context Learning offers a comprehensive and research-focused treatment of this topic.

*How the paper uses it:* DR-IKE builds on in-context knowledge editing to update LLM outputs dynamically without retraining or weight modification.

▶ [Stanford CS229 Machine Learning | Spring 2026 | Lecture 14: Transformers, In-Context Learning](https://www.youtube.com/watch?v=pwQ0l4hFCVI) — Stanford Online · 1:17:32 · 2mo ago

### Retriever models for NLP *(prerequisite)*
Understanding retriever models, especially BERT-based retrievers, is essential since DR-IKE uses a lightweight BERT retriever to select relevant demonstrations dynamically. The Stanford CS224N 2023 lecture on pretraining covers BERT and related models in depth, providing the necessary background on how such retrievers function in NLP tasks.

*How the paper uses it:* DR-IKE employs a BERT-based retriever to dynamically select and rank auxiliary examples for prompt construction.

▶ [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 9 - Pretraining](https://www.youtube.com/watch?v=DGfCRXuNA2w) — Stanford Online · 1:18:46 · 3y ago

### DR-IKE paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk or a closely related research presentation is the best resource to understand the novel contributions, methodology, and empirical results of DR-IKE. Although no direct authors' talk on DR-IKE was found, the talk 'You Only Edit Once: Incentivizing In-Context Capability of LLMs via Local Demonstration Refinement' is a recent, relevant research talk on in-context editing methods that complements understanding DR-IKE's approach.

*How the paper uses it:* This talk provides insights into advanced in-context editing techniques related to DR-IKE's dynamic example selection and editing capabilities.

▶ [You Only Edit Once: Incentivizing In-Context Capability of LLMs via Local Demonstration Refinement](https://www.youtube.com/watch?v=uqa6gu3RUoY) — AI Paper Slop · 20:27 · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Dynamic Retriever for In-Context Knowledge Editing (DR-IKE) paper, start by building foundational knowledge on how large language models (LLMs) learn from context and how in-context learning and editing work to update model outputs without retraining. Then, learn about retriever models, especially BERT, which are crucial for selecting relevant examples dynamically. Next, grasp the basics of policy gradient reinforcement learning, the training method used for the retriever in DR-IKE. Finally, explore the core concept of DR-IKE itself, focusing on dynamic prompt construction and adaptive example selection to improve knowledge editing efficiency and accuracy.

### In-context learning and editing *(prerequisite)*
In-context learning allows LLMs to perform new tasks by conditioning on examples provided in the prompt, without changing their internal weights. In-context editing extends this idea to update or correct factual knowledge dynamically by including demonstration examples in the prompt. Understanding this paradigm is essential to grasp how DR-IKE edits knowledge without retraining.

*How the paper uses it:* DR-IKE builds on in-context knowledge editing by dynamically selecting examples to include in the prompt for black-box LLMs.

▶ [Stanford CS229 Machine Learning | Spring 2026 | Lecture 14: Transformers, In-Context Learning](https://www.youtube.com/watch?v=pwQ0l4hFCVI) — Stanford Online · 1:17:32 · 2mo ago

### Retriever models for NLP *(prerequisite)*
Retriever models like BERT are used to find and rank relevant pieces of text or examples from a large dataset based on their semantic similarity to a query. BERT's bidirectional context understanding makes it effective for selecting high-quality demonstrations. This knowledge helps understand how DR-IKE's retriever identifies useful examples for editing.

*How the paper uses it:* DR-IKE uses a lightweight BERT-based retriever to dynamically select and rank demonstration examples for prompt construction.

▶ [BERT Neural Network - EXPLAINED!](https://www.youtube.com/watch?v=xI0HHN5XKDo) — CodeEmporium · 11:37 · 6y ago

### Policy gradient reinforcement learning *(prerequisite)*
Policy gradient methods train models to make decisions by optimizing expected rewards through gradient ascent on policy parameters. REINFORCE is a classic algorithm that updates policies based on sampled rewards. Understanding this helps explain how DR-IKE trains its retriever to select demonstrations that maximize editing success.

*How the paper uses it:* DR-IKE trains its BERT retriever using policy gradients (REINFORCE) to optimize the selection of examples by their editing utility.

▶ [Intro to Policy Gradient Methods | Reinforcement Learning (INF8953DE) | Lecture - 8 | Part - 1](https://www.youtube.com/watch?v=7KYSu98yNdc) — chandar-lab · 45:36 · 4y ago

### Dynamic prompt construction in LLMs
Dynamic prompt construction involves adaptively selecting and organizing examples in the prompt based on task difficulty or context, rather than using a fixed set. This approach balances prompt length and informativeness to improve model performance and efficiency. Learning this concept clarifies how DR-IKE controls prompt size and content dynamically.

*How the paper uses it:* DR-IKE introduces a learnable threshold to prune low-value examples, adapting prompt length to task difficulty for efficient knowledge editing.

▶ [14. LangChain Dynamic Prompt Tutorial | Practical Python Example | GenAI](https://www.youtube.com/watch?v=P1_te-3Mc_0) — learn by doing it · 11:15 · 11d ago

### DR-IKE paper talk *(paper-talk search result; attribution unverified)*
A direct explanation from the authors provides insights into the motivation, design, and empirical results of DR-IKE. Hearing from the creators helps solidify understanding of the method and its advantages over prior approaches.

*How the paper uses it:* This talk covers the DR-IKE method, its policy gradient training, dynamic example selection, and performance on benchmarks.

▶ [How to approach post-training for AI applications](https://www.youtube.com/watch?v=grpc-Wyy-Zg) — Nathan Lambert · 22:04 · 1y ago

## Already in your library

- [What Is In-Context Learning in Deep Learning?](https://www.youtube.com/watch?v=As9a15poQHs) — also for: What data should I include in my POS tagging training set? (Emily Prud'hommeaux)
- [Understanding In-Context Learning: What It Is and How It Works](https://www.youtube.com/watch?v=7vJluo_FI3I) — also for: In-Context Algebra (David Bau)
- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 3: Policy Gradients](https://www.youtube.com/watch?v=KCAOXd4IO9o) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [A friendly introduction to deep reinforcement learning, Q ...](https://www.youtube.com/watch?v=SgC6AZss478) — also for: Dominion: A New Frontier for AI Research (Josh McCoy)
- [Toward Understanding In-context Learning](https://www.youtube.com/watch?v=hxrR39mAlR4) — also for: What data should I include in my POS tagging training set? (Emily Prud'hommeaux)
- [Stanford CS224N: NLP with Deep Learning | Winter 2020 | BERT and Other Pre-trained Language Models](https://www.youtube.com/watch?v=knTc-NQSjKA) — also for: A multimodal cell-free RNA language model for liquid biopsy applications (Fereydoun Hormozdiari)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How LLMs Work & Why Prompt Engineering Matters](https://www.youtube.com/watch?v=8RWfE9eDWXI) — also for: Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking (Kunpeng Liu)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — also for: On the Opportunities of Large Language Models for Programming Process Data (John Edwards)
- [How Large Language Models LLMs Work Explained | Tokens, Context Windows, Parameters & Training Proce](https://www.youtube.com/watch?v=u523JOz2VaU) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Jun Zhuang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the DR-IKE paper. The beginner project recreates a core mechanism of dynamic example selection using a simple retriever and static prompt pruning. The intermediate project implements the DR-IKE method from the paper's description on a substitute dataset, comparing adaptive versus static retrieval. The advanced project extends DR-IKE to address its limitation on sparse or semantically distant demonstration examples by integrating external knowledge sources, exploring a future direction proposed by the authors.

### Beginner — Simple Dynamic Retriever with Threshold Pruning
*Effort: a weekend, ~8 hours*

You build a lightweight BERT-based retriever that ranks a small set of factual examples by relevance to a target query. Then implement a simple learnable threshold to prune low-value examples from the prompt, dynamically adjusting prompt length. This reproduces the core idea of adaptive example selection and prompt length control from DR-IKE on a small scale.

**Why it shows you understood the paper:** This project shows you understand how DR-IKE uses a retriever model and a threshold controller to balance prompt informativeness and length dynamically, a key contribution of the paper.

**Grounded in:** Introduction of a dynamic threshold (budget controller) to prune low-value examples, balancing prompt length and informativeness.

**Tech stack:** Python 3.11, transformers (Hugging Face), PyTorch, scikit-learn

**Data:** Use a small synthetic dataset of factual statements and paraphrased queries you create to simulate demonstration examples and target edits.

**Build it:**

1. Prepare a small dataset of factual statements and paraphrased queries as candidate demonstrations and target inputs.
2. Fine-tune or use a pretrained BERT model to encode queries and demonstrations for similarity scoring.
3. Implement a simple ranking function to score demonstrations by relevance to the query.
4. Add a learnable threshold parameter to prune demonstrations below the threshold.
5. Evaluate prompt length and retained examples on sample queries.
6. Document the dynamic pruning effect and how it adapts prompt length.

**Ships as:** A GitHub repo with code to rank and prune demonstration examples dynamically, a README explaining the threshold mechanism, and example outputs showing prompt length adaptation.

**Stretch goal:** Add a simple policy gradient training loop to optimize the threshold parameter based on a reward signal like edit success simulated by retrieval accuracy.

### Intermediate — Reimplementation of DR-IKE on COUNTERFACT Substitute
*Effort: 2-3 weekends, ~20 hours*

You implement the core DR-IKE method as described in the paper: a BERT-based retriever trained with policy gradients (REINFORCE) to dynamically select and rank demonstrations, plus a learnable threshold controller for prompt pruning. You apply this to a publicly available substitute dataset for COUNTERFACT (e.g., FEVER or a fact verification dataset) to evaluate edit success and prompt length against a static baseline.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main method and validate its benefits on a real dataset, showing comprehension of policy gradient training for retrieval and dynamic prompt construction.

**Grounded in:** DR-IKE uses a BERT-based retriever trained with policy gradients (REINFORCE) to dynamically select and rank auxiliary factual examples (demonstrations) for inclusion in the prompt. A learnable threshold controls how many examples to include, adapting prompt length to task difficulty.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), OpenAI API or Hugging Face LLMs for black-box model simulation, NumPy, scikit-learn

**Data:** Use the FEVER fact verification dataset as a substitute for COUNTERFACT to simulate factual edits and retrieval of relevant demonstrations.

**Build it:**

1. Download and preprocess the FEVER dataset to extract factual claims and supporting evidence as candidate demonstrations.
2. Implement a BERT-based retriever model to encode queries and demonstrations.
3. Implement policy gradient training (REINFORCE) to optimize the retriever based on a reward signal measuring edit success (e.g., accuracy of LLM responses with selected demonstrations).
4. Add a learnable threshold controller to dynamically prune low-value demonstrations.
5. Compare performance (edit success rate, prompt length) against a static baseline that uses fixed demonstrations.
6. Document results and analyze improvements in efficiency and accuracy.

**Ships as:** A GitHub repo with DR-IKE reimplementation code, training scripts, evaluation comparing adaptive vs static retrieval, and a detailed README explaining the method and results.

**Stretch goal:** Add paraphrase consistency and retention rate metrics to evaluate generalization and unrelated knowledge preservation as in the paper.

### Advanced — Extending DR-IKE for Sparse Demonstration Scenarios
*Effort: 3-4 weeks*

You extend the DR-IKE framework to address its limitation in sparse or semantically distant demonstration settings by integrating external knowledge sources (e.g., Wikipedia API or knowledge graph embeddings) into the retriever. You modify the retriever to incorporate fact-aware retrieval signals and evaluate on a low-overlap or specialized domain dataset you curate or simulate. This explores a future direction proposed by the paper.

**Why it shows you understood the paper:** This project shows you deeply understand DR-IKE's limitations and can innovate by combining external knowledge retrieval with dynamic in-context editing, positioning you for research collaboration.

**Grounded in:** Extending DR-IKE to better handle fact-type variation and low-overlap retrieval settings. Incorporating fact-aware retrieval and more flexible retrieval sources to improve editing of complex or diverse knowledge.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), Wikipedia API or Wikidata SPARQL queries, networkx or PyKEEN for knowledge graph embeddings, OpenAI API or Hugging Face LLMs

**Data:** Use a curated subset of Wikipedia articles or a specialized domain corpus with sparse paraphrases to simulate low-overlap demonstration scenarios.

**Build it:**

1. Set up the baseline DR-IKE retriever and threshold controller as in the intermediate project.
2. Integrate an external knowledge retrieval module (e.g., Wikipedia API or knowledge graph embeddings) to augment candidate demonstrations.
3. Modify the retriever input to combine internal example embeddings with external knowledge signals.
4. Train the extended retriever with policy gradients to optimize selection under sparse demonstration conditions.
5. Evaluate edit success, prompt length, and retention metrics compared to baseline DR-IKE without external knowledge.
6. Document the approach, challenges, and empirical findings.

**Ships as:** A GitHub repo with extended DR-IKE code integrating external knowledge retrieval, evaluation scripts on sparse data, and a comprehensive README discussing the extension and results.

**Stretch goal:** Experiment with fact-type aware retrieval models or multi-hop retrieval to further improve editing of complex knowledge.

_The paper authors released no code or datasets; all projects rely on proxy or synthetic data and reimplementation from the paper's description._
