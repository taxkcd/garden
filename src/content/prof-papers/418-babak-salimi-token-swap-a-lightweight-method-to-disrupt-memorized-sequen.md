---
title: "418 · TOKEN SWAP: A Lightweight Method to Disrupt Memorized Sequences in LLMs — Babak Salimi"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-babak-salimi"
source_hash: "7b30298a9682a2f8d3a99bbd7e939d524d4f3fef1bf9e4734e6bb73179e5c28e"
sequence: 418
generator: "outreach-garden: managed"
---

# 418 · TOKEN SWAP: A Lightweight Method to Disrupt Memorized Sequences in LLMs

## At a glance

- **Professor:** Babak Salimi
- **Institution:** Univ. of California - San Diego
- **Paper:** [TOKEN SWAP: A Lightweight Method to Disrupt Memorized Sequences in LLMs](https://arxiv.org/pdf/2502.05159)
- **Authors:** Parjanya Prajakta Prashant, Kaustubh Ponkshe, Babak Salimi
- **Year:** 2025

## Paper overview

This paper introduces TOKEN SWAP, a practical method to reduce the tendency of large language models (LLMs) to memorize and reproduce exact sequences from their training data. TOKEN SWAP works by selectively replacing the probabilities of common grammar tokens from a large model with those from a smaller auxiliary model that memorizes less, thereby disrupting memorized sequences without harming the model's performance or fluency.

### Why it matters

**Research problem:** Large language models tend to memorize and verbatim reproduce parts of their training data, which raises legal, ethical, and safety concerns such as copyright infringement and plagiarism. Existing mitigation methods often require retraining, access to model weights, or training data, making them impractical for typical users who only have API access to token-level outputs.

**Why it matters:** Memorization in LLMs can lead to verbatim generation of copyrighted or sensitive content, exposing both model providers and users to legal risks. It also undermines trustworthiness and responsible AI deployment. Practical mitigation methods that do not require retraining or internal access are urgently needed for real-world applications.

**Key contributions:**

- Proposed TOKEN SWAP, a novel inference-time method to mitigate memorized generation without requiring access to model weights or training data.
- Demonstrated that small language models reliably approximate probabilities of common grammar tokens and memorize far less, enabling effective disruption of memorized sequences.
- Constructed a token subset G of 110 high-frequency grammar-based tokens for selective probability replacement.
- Extensively evaluated TOKEN SWAP on controlled fine-tuning experiments and production-grade models (Pythia-6.9B, Llama-3-8B).
- Compared TOKEN SWAP with state-of-the-art pre-training (Goldfish) and inference-time baselines, showing comparable or superior memorization reduction without performance degradation.

## About the professor

**Babak Salimi** — Assistant Professor, Halıcıoğlu Data Science Institute, Univ. of California - San Diego.

Research interests: advancing the field of trustworthy data analysis by fostering responsible data management practices, data Management for Machine Learning, Responsible Data Science, Data Cleaning and Debiasing, Data Integration, and Data-centric AI

### Research links

- [Faculty/profile page](https://bsalimi.github.io)
- [Resolved homepage](https://bsalimi.github.io/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** language model probability distributions
**The paper assumes:** probability theory for language models, token-level conditional probability distributions, sequence modeling in natural language processing
**Already in this field?** Skip this entirely if you already understand how language models compute and use token probability distributions during generation.

This background focuses on understanding language model probability distributions, specifically how token probabilities and conditional probabilities are computed and used in sequence generation. This knowledge is critical to grasp the TOKEN SWAP method's rationale, which selectively replaces token probabilities to disrupt memorized sequences without harming fluency. The rigorous course offers a deep, structured foundation in discrete probability distributions, while the fast track provides a concise, focused introduction suitable for quick comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MAT 256( Probability & Statistical Modeling) Module 1 Discrete Probability Distribution](https://www.youtube.com/playlist?list=PLZKuc5xrMu7eDboNVTETqIWjMgfGCl4Mq) — BTech Mathematics · 12 videos · 3.4h across 12 episodes

**Watch only this:** Episodes 1-3: 'Discrete Probability Distribution (Part 1)', 'Probability Distribution | Discrete Probability Distribution (Part 2)', and 'Mean and Variance of Discrete Random Variable | Module 1 (Part 3)', about 51 minutes total — these cover the core concepts of discrete probability distributions and expectations essential for understanding token probabilities.

*Why it unblocks this paper:* This university-level playlist on Discrete Probability Distribution covers foundational concepts in probability distributions, mean, variance, and discrete random variables, which underpin understanding token probability distributions in language models. Its structured progression and manageable episode lengths make it ideal for rigorous study relevant to TOKEN SWAP's probability replacement approach.

*If you want all of it:* All 12 episodes, about 3.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Chapter 5: Joint Distributions](https://www.youtube.com/playlist?list=PL-qA2peRUQ6qULnBqvEcdxd-irsFslOVS) — Probability Course · 6 videos · 1.3h across 6 episodes

**Watch only this:** Episodes 1-3: '38-Joint Probability Mass Function (PMF)', '39- Joint CDF', and '40- Conditional PMF and CDF', about 36 minutes total — these cover the essentials of joint and conditional probability needed to grasp the chain rule in language models.

*Why it unblocks this paper:* This concise 6-episode playlist on Joint Distributions and Conditional Probability provides a focused, intuition-driven overview of joint and conditional probabilities, which are key to understanding how language models compute token probabilities conditionally in sequences. Its brevity and clarity make it an excellent quick study complementing the rigorous course.

*If you want all of it:* All 6 episodes, about 1.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TOKEN SWAP paper, start with foundational knowledge on memorization in large language models, then build understanding of language model token probability distributions and auxiliary language models for probability approximation. Next, explore inference-time mitigation methods for LLMs to grasp practical approaches without retraining. Finally, focus on the core concept of TOKEN SWAP itself, prioritizing the authors' own talk for direct insights.

### memorization in large language models *(prerequisite)*
This section covers the problem of memorization in LLMs, which TOKEN SWAP aims to mitigate. Understanding how and why LLMs memorize training data is critical to appreciating the need for and design of TOKEN SWAP.

*How the paper uses it:* TOKEN SWAP addresses the challenge of memorization in large language models by disrupting memorized sequences.

▶ [Eric Wallace: Memorization in language models](https://www.youtube.com/watch?v=sVWfYguVUfQ) — Berkeley RDI · 1:05:46 · 1 year ago

### language model token probability distributions *(prerequisite)*
TOKEN SWAP operates by selectively replacing token probabilities. A solid grasp of how token probability distributions work in language models is essential to understand this mechanism.

*How the paper uses it:* TOKEN SWAP modifies token probabilities to disrupt memorized sequences without harming fluency.

▶ [Lec 21. Language Models](https://www.youtube.com/watch?v=9GWd3SAWLbA) — MIT OpenCourseWare · 1:17:23 · 6 months ago

### auxiliary language models for probability approximation *(prerequisite)*
This section explains the role of small auxiliary models that approximate token probabilities with less memorization, a key component of TOKEN SWAP's approach.

*How the paper uses it:* TOKEN SWAP uses a small auxiliary model to replace probabilities of grammar tokens, leveraging their low memorization.

▶ [Lec 03. Approximation Theory](https://www.youtube.com/watch?v=ySaoWrv3T_Q) — MIT OpenCourseWare · 1:22:42 · 6 months ago

### inference-time mitigation methods for LLMs *(prerequisite)*
Understanding inference-time methods that mitigate memorization without retraining or weight access provides context for TOKEN SWAP's practical advantages and design choices.

*How the paper uses it:* TOKEN SWAP is a lightweight, inference-time method that requires no retraining or access to model internals.

▶ [Lec 24. Inference Methods for Deep Learning](https://www.youtube.com/watch?v=mbgFTqKxR7A) — MIT OpenCourseWare · 1:23:13 · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the TOKEN SWAP paper, start by grasping the problem of memorization in large language models (LLMs) and why it matters. Next, learn how LLMs generate text using token probability distributions, which is central to how TOKEN SWAP modifies outputs. Then, explore inference-time mitigation methods that operate without retraining, followed by the role of small auxiliary models in approximating token probabilities. Finally, study the core mechanism of selective token probability replacement that TOKEN SWAP uses to disrupt memorized sequences.

### memorization in large language models *(prerequisite)*
Memorization in LLMs refers to the tendency of these models to reproduce exact sequences from their training data, which can cause privacy, ethical, and legal issues. Understanding this problem highlights why mitigation is necessary and what challenges exist in reducing memorization without harming model performance.

*How the paper uses it:* The paper addresses the problem of memorization in LLMs and proposes TOKEN SWAP to mitigate it.

▶ [Eric Wallace: Memorization in language models](https://www.youtube.com/watch?v=sVWfYguVUfQ) — Berkeley RDI · 1:05:46 · 1 year ago

### language model token probability distributions *(prerequisite)*
LLMs generate text by predicting the next token based on a probability distribution over possible tokens. Understanding how these probabilities work is crucial to grasping how TOKEN SWAP selectively replaces token probabilities to disrupt memorized sequences.

*How the paper uses it:* TOKEN SWAP modifies token probability distributions of grammar tokens to reduce memorization.

▶ [Transformers, Tokens, and Temperature - LLMs From Scratch](https://www.youtube.com/watch?v=ZPg9iSEl-a0) — Decode Agent · 11:53 · 3 months ago

### inference-time mitigation methods for LLMs *(prerequisite)*
Inference-time mitigation methods modify model outputs during generation without retraining or accessing internal weights. These practical approaches are important for real-world deployment where retraining is costly or impossible.

*How the paper uses it:* TOKEN SWAP is an inference-time method that works without retraining or weight access.

▶ [Lec 24. Inference Methods for Deep Learning](https://www.youtube.com/watch?v=mbgFTqKxR7A) — MIT OpenCourseWare · 1:23:13 · 6 months ago

### auxiliary language models for probability approximation *(prerequisite)*
Small auxiliary language models can approximate the probabilities of common grammar tokens with less memorization. This property enables TOKEN SWAP to replace certain token probabilities from the large model with those from the small model to disrupt memorized sequences.

*How the paper uses it:* TOKEN SWAP uses a small auxiliary model to provide alternative token probabilities for swapping.

▶ [Lec 21. Language Models](https://www.youtube.com/watch?v=9GWd3SAWLbA) — MIT OpenCourseWare · 1:17:23 · 6 months ago

## Already in your library

- [On Memorization of Large Language Models in Logical ...](https://www.youtube.com/watch?v=eULIf02frIw) — also for: Benchmarking LLMs on Can AI Validate Science? Claim → Evidence Reasoning in AI Papers (Nikhil Muralidhar)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of TOKEN SWAP, a method to reduce memorization in large language models by swapping token probabilities at inference time. The beginner project reproduces a core mechanism on a small scale using familiar tools. The intermediate project implements TOKEN SWAP on a smaller public dataset and compares memorization metrics against a baseline. The advanced project extends TOKEN SWAP to a new domain, addressing a limitation noted in the paper, and explores auxiliary model design for structured data.

### Beginner — Implement TOKEN SWAP Probability Replacement on Grammar Tokens
*Effort: a weekend, ~8 hours*

You build a simple script that takes token probability distributions from a large language model API and selectively replaces probabilities of a predefined subset of grammar tokens with those from a smaller auxiliary model. This reproduces the core TOKEN SWAP mechanism on a small scale using token-level outputs.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of TOKEN SWAP: selective token probability replacement at inference time to disrupt memorized sequences without retraining or internal model access.

**Grounded in:** Proposed TOKEN SWAP, a novel inference-time method to mitigate memorized generation without requiring access to model weights or training data.

**Tech stack:** Python 3.11, HuggingFace Transformers, requests, Jupyter Notebook

**Data:** Use HuggingFace pretrained models (e.g., GPT-2 large and DistilGPT-2) as proxies for the large and small models respectively, substituting for the paper's production-grade models.

**Build it:**

1. Select a subset G of high-frequency grammar tokens (e.g., the paper's 110 tokens or a smaller subset).
2. Query a large pretrained model (e.g., GPT-2 large) to get token probability distributions for a set of input prompts.
3. Query a smaller auxiliary model (e.g., DistilGPT-2) for the same prompts to get token probabilities.
4. Implement a function to replace probabilities of tokens in G from the large model with those from the small model.
5. Generate text using the modified probability distributions and compare outputs qualitatively to standard generation.
6. Document the implementation and illustrate how selective token swapping disrupts memorized sequences.

**Ships as:** A GitHub repo with a Jupyter notebook demonstrating selective token probability replacement, example outputs, and explanations linking the code to the TOKEN SWAP method.

**Stretch goal:** Add a simple metric to quantify reduction in verbatim memorization on a small controlled prompt set.

### Intermediate — Reimplement TOKEN SWAP and Evaluate Memorization Reduction on WritingPrompts Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the TOKEN SWAP method using the authors' auxiliary model approach and apply it to a public dataset such as WritingPrompts (a common dataset for language modeling). You compare exact memorization rates (Exact Match Rate) with and without TOKEN SWAP and against a simple baseline like standard generation.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the core experimental setup of the paper, including selective token probability replacement, memorization metrics, and baseline comparisons, showing deep comprehension of the method and its evaluation.

**Grounded in:** Achieved up to 800× reduction in exact memorization (Exact Match Rate) in extreme fine-tuning scenarios.

**Tech stack:** Python 3.11, PyTorch, HuggingFace Transformers, Jupyter Notebook, numpy, pandas

**Data:** Use the WritingPrompts dataset (publicly available) as a substitute for the paper's fine-tuning evaluation dataset.

**Build it:**

1. Download and preprocess the WritingPrompts dataset for language model evaluation.
2. Implement or adapt code to query a large language model and a small auxiliary model to obtain token probability distributions.
3. Implement the TOKEN SWAP method to replace probabilities of the grammar token subset G during generation.
4. Generate text samples with and without TOKEN SWAP and compute Exact Match Rate (EMR) for memorization on a held-out set.
5. Implement a simple baseline such as standard generation without TOKEN SWAP for comparison.
6. Analyze and visualize the memorization reduction and task performance metrics.
7. Write a detailed README explaining the method, dataset, evaluation, and results.

**Verified links from the paper:**

- <https://github.com/ahans30/goldfish-loss> — released by the paper's authors

**Ships as:** A GitHub repository with code to run TOKEN SWAP on WritingPrompts, scripts to compute memorization metrics, and a report notebook showing results and comparisons.

**Stretch goal:** Incorporate the Goldfish pre-training baseline by integrating the authors_own_artifacts goldfish-loss repository to compare memorization reduction.

### Advanced — Extend TOKEN SWAP to Code Generation Domain with Adaptive Token Subset Selection
*Effort: 3-4 weeks*

You extend TOKEN SWAP to structured domains by adapting it for code generation tasks. This involves designing or selecting an auxiliary model with low memorization for code, defining a domain-specific token subset G (e.g., syntax tokens in programming languages), and implementing adaptive token subset selection based on code context. You evaluate memorization reduction and fluency on a public code generation dataset.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by transferring TOKEN SWAP beyond natural language to structured code generation, demonstrating mastery of the method and creativity in addressing domain-specific challenges.

**Grounded in:** Current implementation focuses on natural language tasks; adaptation to structured domains like code generation may require domain-specific modifications.

**Tech stack:** Python 3.11, PyTorch, HuggingFace Transformers, Jupyter Notebook, numpy, pandas

**Data:** Use a public code generation dataset such as the CodeSearchNet dataset or a subset of GitHub code for evaluation.

**Build it:**

1. Research and select a small auxiliary language model trained on code with low memorization (e.g., a distilled GPT-2 model fine-tuned on code).
2. Define a token subset G relevant to code syntax (e.g., keywords, operators, delimiters) for selective probability replacement.
3. Implement adaptive token subset selection that adjusts G dynamically based on code context or token frequency.
4. Implement TOKEN SWAP inference-time probability replacement for code generation tasks.
5. Evaluate memorization reduction using exact match or code plagiarism detection metrics on held-out code snippets.
6. Assess impact on code generation quality using metrics like BLEU or code correctness tests.
7. Document the methodology, challenges, and results in a comprehensive report.

**Ships as:** A GitHub repository with code implementing TOKEN SWAP for code generation, evaluation scripts, and a detailed report discussing adaptation challenges and results.

**Stretch goal:** Explore combining TOKEN SWAP with unlearning techniques on the auxiliary model to further reduce memorization.
