---
title: "933 · Small Reward Models via Backward Inference — Yulia Tsvetkov"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yulia-tsvetkov"
source_hash: "d6eaeb2caa5c9262bc0b0458a78b2b7e7212833903466e32efa2383b2ad09697"
sequence: 933
generator: "outreach-garden: managed"
---

# 933 · Small Reward Models via Backward Inference

## At a glance

- **Professor:** Yulia Tsvetkov
- **Institution:** University of Washington
- **Paper:** [Small Reward Models via Backward Inference](https://arxiv.org/pdf/2602.13551)
- **Authors:** Yike Wang, Faeze Brahman, Shangbin Feng, Teng Xiao, Hannaneh Hajishirzi, Yulia Tsvetkov
- **Year:** 2026

## Paper overview

This paper introduces FLIP, a new method for evaluating the quality of language model responses without needing reference answers or rubrics. FLIP works by inferring the instruction that likely produced a given response and comparing it to the original instruction. This approach is especially effective for smaller language models, outperforming traditional judge-based methods by a large margin and showing robustness to adversarial attacks.

### Why it matters

**Research problem:** Current reward modeling methods for language models rely heavily on large models acting as judges, which are costly and unreliable for smaller models. There is a need for reliable, flexible, and cost-effective reward modeling methods that work well with small language models without requiring reference responses or rubrics.

**Why it matters:** Reward models are central to training and evaluating language models, especially in non-verifiable domains. Improving reward modeling for small models can reduce computational costs and broaden accessibility, enabling more efficient and inclusive AI development.

**Key contributions:**

- Introduction of FLIP, a backward inference-based reward modeling method that does not require references or rubrics.
- Comprehensive evaluation on 13 small language models across four domains showing FLIP outperforms LLM-as-a-Judge baselines by an average of 79.6%.
- Demonstration of FLIP's effectiveness in test-time scaling with parallel sampling and reinforcement learning via GRPO training.
- Analysis showing FLIP is particularly effective for longer responses and robust against common reward hacking and adversarial attacks.
- Insight into the validation-generation gap in small models as a key factor enabling FLIP's superior performance.

## About the professor

**Yulia Tsvetkov** — Associate Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

Research interests: natural language processing (NLP) and AI, developing language technologies that are reliable, socially aware, and linguistically inclusive. Models that can reason and adapt to people, languages, cultures, and real-world contexts. AI ethics and safety, multilingual and culturally inclusive modeling, and high-stakes applications such as AI for health and AI for science.

### Research links

- [Faculty/profile page](https://homes.cs.washington.edu/~yuliats)
- [Lab website](https://tsvetshop.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=SEDPkrsAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Inference in Machine Learning
**The paper assumes:** probabilistic inference, Bayesian reasoning, and approximate inference methods in machine learning
**Already in this field?** Skip this entirely if you already understand Bayesian inference and probabilistic modeling techniques used in machine learning.

This background playlist selection is designed to help you understand the probabilistic inference concepts underpinning the FLIP method in the paper "Small Reward Models via Backward Inference." The rigorous course option provides a deep, structured university-level treatment of probabilistic graphical models and inference methods, ideal for a thorough grasp. The fast track offers a shorter, focused series on probabilistic machine learning and Bayesian methods to quickly build intuition and foundational knowledge relevant to backward inference in language models.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU 10-708 PGM — Spring 2020](https://www.youtube.com/playlist?list=PLoZgVqqHOumTqxIhcdcpOAJOOimrRCGZn) — CMU 10-708 PGM · 28 videos · 35.8h across 28 episodes

**Watch only this:** Lectures 1-4 (Introduction, Undirected GMs, Directed GMs, Exact Inference), about 5 hours — these cover the fundamentals of probabilistic graphical models and exact inference methods crucial for grasping FLIP's inference framework.

*Why it unblocks this paper:* This CMU 10-708 Probabilistic Graphical Models course covers exact and approximate inference methods, variational inference, and Monte Carlo techniques, which are essential to understanding the backward inference approach used in FLIP for reward modeling.

*If you want all of it:* 35.8 hours across 28 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic Machine Learning (Autumn 2024)](https://www.youtube.com/playlist?list=PLcRaBUPT5hNdel5UVt18oo7oBdQJMmtUg) — Souvik Chakraborty · 23 videos · 29.3h across 23 episodes

**Watch only this:** Lectures 1-6 (Introduction to the course, Quick review of probability and statistics, Review of Gaussian distribution and Bayesian inference, Bayesian inference, MLE and MAP, Priors and conjugate priors, Non-informative and hierarchical Bayes), about 7.5 hours — these build a solid foundation in Bayesian inference and approximate methods relevant to FLIP.

*Why it unblocks this paper:* This Probabilistic Machine Learning course from IIT Delhi offers a concise and clear introduction to Bayesian inference, sampling methods, and approximate inference, providing a practical and accessible overview of the probabilistic inference concepts that FLIP leverages.

*If you want all of it:* 29.3 hours across 23 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Small Reward Models via Backward Inference," start by building foundational knowledge on reward modeling and instruction-following in NLP, which are essential to grasp the context and motivation behind FLIP. Then, explore the challenges in evaluating small language models to appreciate the problem setting. Finally, focus on the core concept of the paper—FLIP's backward inference approach—through the authors' own or closely related advanced talks on reward models, ensuring a direct and rigorous understanding of their novel method.

### Reward modeling for language models *(prerequisite)*
Reward modeling is fundamental to training and evaluating language models, especially for aligning them with human preferences. Understanding how reward signals are constructed and used to guide model behavior provides the necessary background to appreciate FLIP's novel approach to reward modeling without references or rubrics.

*How the paper uses it:* FLIP proposes a new reward modeling method that outperforms traditional LLM-as-a-Judge baselines, making foundational knowledge of reward modeling critical.

▶ [CMU LLM Inference (12): Reward Models and Best-of-N](https://www.youtube.com/watch?v=p-MWR625HB8) — Graham Neubig · 1y ago

### FLIP paper talk *(paper-talk search result; attribution unverified)*
The core concept of the paper is FLIP, a backward inference-based reward modeling method. Watching a direct talk by the authors or a closely related advanced talk on reward models provides the most precise and insightful understanding of the method, its advantages, and experimental results.

*How the paper uses it:* This is the paper's central contribution and method, so a direct or closely related advanced talk is essential.

▶ [Reward Models | How LLMs Work: Deep Dive, Ep. 37](https://www.youtube.com/watch?v=vYGNzAokz3M) — lui lan · 6d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the FLIP method for reward modeling in small language models. It starts with the basics of reward modeling in language models, then covers instruction-following tasks in NLP, followed by challenges in evaluating small language models. Finally, it explains the core idea of backward inference as used in FLIP and concludes with a direct paper talk for deeper insights.

### Reward modeling for language models *(prerequisite)*
Reward modeling is how we assign numerical scores to language model outputs to guide training and evaluation, especially when direct correctness is hard to measure. Understanding this helps grasp why FLIP aims to improve reward signals without references or rubrics.

*How the paper uses it:* FLIP proposes a new reward modeling method that outperforms traditional judge-based approaches for small language models.

▶ [Reward Modeling: How to Train a Reward Model for LLMs](https://www.youtube.com/watch?v=EcKQeltz3UE) — SH AI Academy · 4mo ago

### FLIP paper talk *(paper-talk search result; attribution unverified)*
A direct presentation by the authors or a detailed overview helps consolidate understanding of FLIP’s motivation, method, and results from the source perspective.

*How the paper uses it:* This talk covers the FLIP method and its evaluation, providing insights straight from the authors.

▶ [Reward Models | How LLMs Work: Deep Dive, Ep. 37](https://www.youtube.com/watch?v=vYGNzAokz3M) — lui lan · 6d ago

## Already in your library

- [NLP with ACL Fellow Prof. Yue Zhang](https://www.youtube.com/watch?v=L5NyWJivAkM) — also for: TEACh: Task-driven Embodied Agents that Chat (Dilek Hakkani-Tür)
- [What Are Small Language Models? | The AI Research Lab - Explained](https://www.youtube.com/watch?v=1Rlr2OxR678) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the FLIP method introduced in "Small Reward Models via Backward Inference." The beginner project reproduces a core mechanism of FLIP's backward instruction inference and reward computation on a small scale. The intermediate project implements the FLIP method end-to-end on a public instruction-following dataset, comparing it against a baseline LLM-as-a-Judge approach. The advanced project extends FLIP to address one of its stated limitations by exploring its adaptation to safety-critical refusal tasks, investigating reward signal inversion.

### Beginner — Implement FLIP's Backward Instruction Inference and Reward Scoring
*Effort: a weekend (~8 hours)*

You build a simple script that takes a fixed set of instruction-response pairs and uses a small language model (e.g., OpenAI GPT-3.5 or an open-source small LLM) to infer the most plausible instruction given a response. Then, you compute the reward as the F1 similarity score between the inferred instruction and the original instruction. This reproduces the core backward inference mechanism of FLIP on a toy example.

**Why it shows you understood the paper:** This project shows you understand the key insight of FLIP: reformulating reward modeling as backward inference from response to instruction and using instruction similarity as a reward signal without references or rubrics.

**Grounded in:** Introduction of FLIP, a backward inference-based reward modeling method that does not require references or rubrics.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, scikit-learn (for F1 score)

**Data:** A small synthetic set of 10-20 instruction-response pairs you create manually to simulate instruction-following behavior.

**Build it:**

1. Prepare a small dataset of instruction-response pairs manually.
2. Write a function that queries a small language model to infer the instruction given a response.
3. Implement a function to compute F1 similarity between the inferred instruction and the original instruction.
4. Run the script on the dataset and output reward scores for each pair.
5. Document the approach and results in a README.

**Ships as:** A Python script and README demonstrating backward instruction inference and reward computation on toy data.

**Stretch goal:** Add a simple baseline that scores responses by direct matching or length and compare results.

### Intermediate — Reimplement FLIP Reward Modeling on a Public Instruction-Following Dataset
*Effort: 1-3 weekends (~20 hours)*

You implement the FLIP method end-to-end using a small open-source language model (e.g., GPT-2 or a 1B-parameter model) on a public instruction-following dataset such as the Alpaca or Vicuna instruction dataset (as a substitute for the paper's data). You infer instructions from responses and compute reward scores, then compare FLIP's reward correlation with human judgments against a simple LLM-as-a-Judge baseline that rates responses directly.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core FLIP method and evaluate its effectiveness compared to judge-based reward modeling, reflecting the paper's main experimental contribution.

**Grounded in:** Comprehensive evaluation on 13 small language models across four domains showing FLIP outperforms LLM-as-a-Judge baselines by an average of 79.6%.

**Tech stack:** Python 3.11, HuggingFace transformers, PyTorch, scikit-learn, pandas

**Data:** Public instruction-following dataset such as Alpaca or Vicuna instruction-response pairs (used as a substitute for the paper's benchmark).

**Build it:**

1. Download and preprocess a public instruction-following dataset.
2. Implement the backward inference step: given a response, use a small LM to infer the instruction.
3. Compute reward scores as F1 similarity between inferred and original instructions.
4. Implement a baseline LLM-as-a-Judge method that rates responses directly.
5. Evaluate and compare reward correlations with available human ratings or proxy metrics.
6. Write a report summarizing results and insights.

**Verified links from the paper:**

- <https://github.com/yikee/FLIP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code implementing FLIP and baseline reward models, evaluation scripts, and a report comparing their performance.

**Stretch goal:** Add parallel sampling or test-time scaling to improve FLIP's stability as described in the paper.

### Advanced — Extend FLIP for Safety-Critical Refusal Tasks via Reward Signal Inversion
*Effort: a few weeks (~40+ hours)*

You design and implement an extension of FLIP to handle safety-critical tasks where the desired behavior is refusal rather than compliance. This involves adapting the backward inference method to detect harmful instructions and inverting the reward signal accordingly. You test this on a curated set of harmful instruction-response pairs (synthetic or from public safety datasets) and analyze FLIP's ability to reward refusal behaviors.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the paper, showing deep comprehension of FLIP's assumptions and how to adapt it for safety evaluation, a challenging open problem.

**Grounded in:** FLIP is not directly applicable to safety-critical queries where refusal rather than compliance is desired; reward signal inversion is needed in such cases.

**Tech stack:** Python 3.11, HuggingFace transformers, PyTorch, scikit-learn, pandas

**Data:** A small curated dataset of harmful or unsafe instructions and corresponding refusal or compliant responses, created synthetically or drawn from public safety-related NLP datasets.

**Build it:**

1. Collect or synthesize a dataset of harmful instructions with compliant and refusal responses.
2. Implement FLIP's backward inference to infer instructions from responses.
3. Design a method to invert the reward signal for refusal behaviors (e.g., penalize inferred instructions matching harmful prompts).
4. Evaluate the adapted FLIP method's ability to distinguish refusal from compliance responses.
5. Analyze robustness and document findings with examples.
6. Write a detailed README explaining the extension and its implications.

**Verified links from the paper:**

- <https://github.com/yikee/FLIP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A codebase and report demonstrating FLIP's extension to safety-critical refusal tasks with experimental analysis.

**Stretch goal:** Explore defenses against FLIP-specific adversarial attacks targeting safety evaluation.

_The paper's authors have not released their own code; the FLIP codebase available at https://github.com/yikee/FLIP is a third-party implementation referenced in the paper and can be used as a baseline or starting point for intermediate and advanced projects._
