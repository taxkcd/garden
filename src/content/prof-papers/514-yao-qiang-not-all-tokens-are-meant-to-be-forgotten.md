---
title: "514 · Not All Tokens Are Meant to Be Forgotten — Yao Qiang"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yao-qiang"
source_hash: "725bd1bd6d26629e7b4960c49c61e167288438a08de9bcb7bd2db01d4b1aa940"
sequence: 514
generator: "outreach-garden: managed"
---

# 514 · Not All Tokens Are Meant to Be Forgotten

## At a glance

- **Professor:** Yao Qiang
- **Institution:** Oakland University
- **Paper:** [Not All Tokens Are Meant to Be Forgotten](https://arxiv.org/pdf/2506.03142)
- **Authors:** Xiangyu Zhou, Yao Qiang, Saleh Zare Zade, Douglas Zytko, Prashant Khanduri, Dongxiao Zhu
- **Year:** 2025

## Paper overview

This paper addresses the challenge of unlearning specific unwanted information from large language models (LLMs) without degrading their overall performance. The authors propose a framework called Targeted Information Forgetting (TIF) that distinguishes between unwanted words (UW) that need to be forgotten and general words (GW) that should be preserved. They introduce a novel optimization method, Targeted Preference Optimization (TPO), to selectively unlearn UW while retaining GW, improving both privacy and model utility.

### Why it matters

**Research problem:** Large Language Models memorize unwanted information such as private or copyrighted content, raising privacy and legal concerns. Existing unlearning methods often over-forget by indiscriminately suppressing all tokens in forget samples, leading to significant loss of model utility.

**Why it matters:** Unlearning unwanted information is critical to comply with privacy regulations like GDPR and to prevent privacy violations or copyright infringement. However, current methods either degrade model utility or fail to precisely remove only the unwanted information, limiting their practical applicability.

**Key contributions:**

- Introduction of the TIF framework that targets only unwanted words for unlearning, preserving general information to prevent over-forgetting.
- Development of flexible unwanted information identification methods using both generative and discriminative language models.
- Proposal of Targeted Preference Optimization (TPO) combining Logit Preference Loss and Preservation Loss to balance unlearning effectiveness and model utility retention.
- Comprehensive evaluation on TOFU and MUSE benchmarks demonstrating state-of-the-art unlearning performance and utility preservation.
- Demonstration that generative LM-based unwanted information identification (ChatGPT-4) outperforms discriminative approaches in balancing forget quality and utility.

## About the professor

**Yao Qiang** — Assistant Professor, Computer Science and Engineering Department, Oakland University.

Research interests: Natural Language Processing (NLP), Large Language Models (LLMs), Trustworthy Artificial Intelligence (AI), and Machine Learning Theory and Applications

### Research links

- [Faculty/profile page](https://qiangyao1988.github.io/)
- [Identity evidence](https://qiangyao1988.github.io)
- [Identity evidence](https://orcid.org/0000-0003-2995-3385)
- [Identity evidence](https://qiangyao1988.github.io/#about-me)
- [Identity evidence](https://www.oakland.edu/secs/labs-and-centers/cybersecurity/)
- [Identity evidence](https://www.oakland.edu/news/secs/2026/NAIRR)
- [Google Scholar](https://scholar.google.com/citations?user=8ADcg38AAAAJ)
- [GitHub](https://github.com/qiangyao1988)
- [LinkedIn](https://www.linkedin.com/in/yaoqiang)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning Optimization
**The paper assumes:** machine learning optimization methods, loss function design, gradient-based training of neural networks
**Already in this field?** Skip this entirely if you already understand gradient-based optimization techniques and loss function engineering in machine learning.

This background focuses on machine learning optimization, specifically the formulation and solution of optimization objectives relevant to the Targeted Preference Optimization (TPO) method introduced in the paper. The rigorous course option provides a deep, university-level understanding of convex optimization principles essential for grasping the theoretical foundations of TPO, while the fast track offers a concise, accessible introduction to calculus and optimization concepts tailored for machine learning practitioners who want a quicker but solid grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-6, about 7.9 hours — covering introduction, convex sets, functions, and basic optimization problems to build a solid foundation for understanding optimization objectives and algorithms.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier, authoritative university course that covers convex optimization fundamentals in depth, directly relevant to understanding the optimization objectives and methods like TPO in the paper.

*If you want all of it:* All 18 lectures, about 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [9. Calculus & Optimization for ML | Complete Playlist](https://www.youtube.com/playlist?list=PLVyM62CSsh3VjQ-iU3ckhf5eYsSLkpdi5) — Decode AiML · 13 videos · 9.6h across 13 episodes

**Watch only this:** Episodes 9.1 to 9.11, about 7.7 hours — covering introduction to optimization, gradient descent, and their applications in machine learning, sufficient for grasping the core ideas behind TPO.

*Why it unblocks this paper:* Decode AiML's Calculus & Optimization for ML playlist offers a clear, beginner-friendly introduction to calculus and optimization concepts specifically tailored for machine learning, providing the essential intuition and tools needed to understand optimization in TPO without the depth of a full university course.

*If you want all of it:* All 13 episodes, about 9.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Not All Tokens Are Meant to Be Forgotten," start by building foundational knowledge on unlearning in large language models and privacy-preserving machine learning, which provide the context and motivation for the work. Next, study token-level optimization in NLP models to grasp the technical basis for selective token suppression. Finally, focus on the paper's core concept of Targeted Information Forgetting and its novel optimization method, Targeted Preference Optimization, prioritizing the authors' own talk if available.

### Unlearning in large language models *(prerequisite)*
This section introduces the general problem of machine unlearning, focusing on removing unwanted information from large language models without degrading their utility. Understanding these foundational challenges and existing approaches is critical to appreciate the paper's novel contributions in targeted unlearning.

*How the paper uses it:* The paper addresses limitations of existing unlearning methods in LLMs and proposes a targeted approach to improve precision and utility retention.

▶ [Unlearning Sensitive Information from AI: Principles, Scopes, and Emerging Challenges](https://www.youtube.com/watch?v=3HF51sP6Wh4) — UT Austin Research · 28:55 · 5 months ago

### Privacy-preserving machine learning *(prerequisite)*
This section contextualizes the importance of unlearning within privacy-preserving machine learning, highlighting regulatory and ethical motivations. It covers techniques and challenges in protecting sensitive data during model training and deployment.

*How the paper uses it:* The paper's targeted unlearning framework aims to comply with privacy regulations like GDPR by precisely removing unwanted information while preserving model utility.

▶ [Privacy-Preserving Machine Learning - Sivakanth Gopi, Microsoft Research](https://www.youtube.com/watch?v=0xbNIHa4OGQ) — Jovian · 23:36 · 3 years ago

### Token-level optimization in NLP models *(prerequisite)*
Understanding token-level optimization is foundational to grasp how selective suppression of tokens can be achieved technically. This section covers tokenization, token representations, and optimization strategies in NLP models.

*How the paper uses it:* The paper's Targeted Preference Optimization method operates at the token level to selectively forget unwanted words while preserving general words.

▶ [Stanford CS224N: NLP with Deep Learning | Winter 2019 | Lecture 17 – Multitask Learning](https://www.youtube.com/watch?v=M8dsZsEtEsg) — Stanford Online · 1:11:54 · 7 years ago

### Targeted Preference Optimization
This section focuses on the core novel optimization method introduced in the paper, which balances forgetting unwanted tokens and preserving general tokens. It provides insight into the optimization objectives and techniques that enable selective unlearning.

*How the paper uses it:* Targeted Preference Optimization (TPO) is the paper's key contribution that combines Logit Preference Loss and Preservation Loss to achieve effective unlearning with minimal utility loss.

▶ [Hanjun Dai: Preference Optimization for Large Language Models](https://www.youtube.com/watch?v=kOdl-ncrYDk) — Mayur Naik · 1:28:44 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Not All Tokens Are Meant to Be Forgotten,' start by grasping the general problem of unlearning unwanted information from large language models (LLMs) and why privacy-preserving machine learning matters. Then, build foundational knowledge about token-level processing in NLP models, which is crucial for appreciating the paper's selective token suppression approach. Finally, explore the core novel optimization method, Targeted Preference Optimization, that balances forgetting unwanted tokens while preserving general tokens to maintain model utility.

### Unlearning in large language models *(prerequisite)*
Learn what machine unlearning means, why it is important for removing sensitive or unwanted information from AI models, and the challenges involved in doing so without harming model performance. This sets the stage for understanding the specific unlearning problem addressed by the paper.

*How the paper uses it:* The paper tackles the challenge of unlearning unwanted information from LLMs without degrading overall performance.

▶ [Unlearning Sensitive Information from AI: Principles, Scopes, and Emerging Challenges](https://www.youtube.com/watch?v=3HF51sP6Wh4) — UT Austin Research · 28:55 · 5 months ago

### Privacy-preserving machine learning *(prerequisite)*
Understand the broader context of privacy concerns in AI, including how privacy-preserving techniques help comply with regulations and protect user data. This background highlights why precise unlearning methods like those in the paper are critical.

*How the paper uses it:* The paper’s motivation is rooted in privacy compliance and ethical AI, requiring methods that remove unwanted data while preserving utility.

▶ [Privacy Preserving AI - Andrew Trask, OpenMined](https://www.youtube.com/watch?v=NJBBE_SN90A) — PyTorch · 16:03 · 6 years ago

### Token-level optimization in NLP models *(prerequisite)*
Get a clear intuition about tokens in NLP models—how text is broken down into tokens and how models process them. This knowledge is essential to understand how selective token suppression can be implemented to forget specific information without harming general knowledge.

*How the paper uses it:* The paper’s method selectively targets unwanted tokens for unlearning, making token-level understanding foundational.

▶ [Natural Language Processing - Tokenization (NLP Zero to Hero - Part 1)](https://www.youtube.com/watch?v=fNxaJsNG3-s) — TensorFlow · 4:39 · 6 years ago

### Targeted Preference Optimization
Dive into the core novel optimization technique introduced in the paper that balances forgetting unwanted tokens and preserving general tokens. This method combines losses to selectively unlearn while maintaining model utility, representing the paper’s main technical contribution.

*How the paper uses it:* Targeted Preference Optimization is the paper’s key method to achieve selective unlearning with utility preservation.

▶ [Direct Preference Optimization (DPO) Explained: Aligning LLMs Without Reinforcement Learning](https://www.youtube.com/watch?v=a0vYj8LfY0M) — SH AI Academy · 23:30 · 2 months ago

### Targeted Information Forgetting talk *(the paper's own talk)*
Watch a concise explainer on how tokens work in LLMs to solidify understanding of tokenization and token usage, which underpins the paper’s approach to targeted forgetting.

*How the paper uses it:* Understanding tokens deeply supports grasping how the paper differentiates unwanted from general tokens for selective forgetting.

▶ [Most devs don't understand how LLM tokens work](https://www.youtube.com/watch?v=nKSk_TiR8YA) — Matt Pocock · 10:58 · 11 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the Targeted Information Forgetting (TIF) framework and its core optimization method, Targeted Preference Optimization (TPO), from the paper. The beginner project reproduces a token-level unwanted information identification and suppression mechanism on a small scale. The intermediate project implements the TPO method on a public dataset to compare forget quality and utility preservation against a baseline. The advanced project extends the framework to address one of the paper's limitations by exploring knowledge-level unlearning or improving unwanted information identification accuracy.

### Beginner — Token-level Unwanted Word Identification and Suppression
*Effort: a weekend, ~8 hours*

You build a small script that takes a short text sample and identifies unwanted words (UW) versus general words (GW) using a simple discriminative model (e.g., DistilBERT). Then, you simulate a token-level suppression by masking or removing the UW tokens from the text. This reproduces the core idea of selectively targeting only unwanted tokens for forgetting.

**Why it shows you understood the paper:** This project shows you understand the key concept of differentiating unwanted and general tokens in forget samples, which is central to the TIF framework's ability to prevent over-forgetting.

**Grounded in:** TIF exploits an unwanted information identifier to differentiate between unwanted and general information in the forget sample... By specifically targeting only UW for unlearning, our TIF preserves more general information compared to existing methods like NPO.

**Tech stack:** Python 3.11, transformers (Hugging Face), PyTorch

**Data:** Use a small synthetic text sample you create that contains both unwanted and general words to simulate forget samples.

**Build it:**

1. Install Hugging Face transformers and PyTorch.
2. Load a pretrained DistilBERT model for token classification or sequence labeling.
3. Create a short text sample containing some unwanted words (e.g., private info) and general words.
4. Write code to classify tokens as unwanted or general using DistilBERT outputs or heuristics.
5. Mask or remove the unwanted tokens from the text to simulate token-level forgetting.
6. Document the process and show before/after text highlighting the selective suppression.

**Ships as:** A Python script and README demonstrating token-level unwanted word identification and selective suppression on a small text sample.

**Stretch goal:** Add a simple generative model prompt (e.g., GPT-2) to compare generative vs discriminative identification of unwanted tokens.

### Intermediate — Implementing Targeted Preference Optimization on a Public Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core Targeted Preference Optimization (TPO) method described in the paper to selectively unlearn unwanted tokens while preserving general tokens. You apply it to a public text dataset (e.g., a subset of WikiText or OpenWebText) where you define a small forget set with unwanted tokens. You compare your TPO implementation against a simple baseline that suppresses all tokens indiscriminately, measuring forget quality and model utility.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main optimization method and evaluate its effectiveness in balancing unlearning and utility preservation, a key contribution of the paper.

**Grounded in:** TPO integrates Preservation loss to maintain general model utility by retraining on GW, and Logit preference loss to unlearn unwanted information in UW... TPO achieves comparable forget quality to NPO while significantly preserving a higher model utility.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), numpy, matplotlib

**Data:** Use a publicly available language modeling dataset such as WikiText-2 or a small OpenWebText subset as a proxy for the paper's forget and retain sets.

**Build it:**

1. Set up a language model fine-tuning environment with PyTorch and Hugging Face transformers.
2. Prepare a small forget set by selecting sentences containing specific unwanted tokens from the dataset.
3. Implement the TPO loss combining Logit Preference Loss (LPL) for unwanted tokens and Preservation Loss (PL) for general tokens.
4. Fine-tune the model using TPO on the forget set and compare against a baseline that suppresses all tokens indiscriminately.
5. Evaluate forget quality (e.g., token suppression accuracy) and model utility (e.g., perplexity on a validation set).
6. Visualize and report the trade-offs between forget quality and utility preservation.

**Verified links from the paper:**

- <https://github.com/xzhou98/Unlearning-TPO> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing TPO, evaluation scripts, and a README reporting results comparing TPO to a baseline on a public dataset.

**Stretch goal:** Incorporate generative LM-based unwanted information identification (e.g., GPT-2 prompts) to improve token classification accuracy.

### Advanced — Extending Targeted Information Forgetting to Knowledge-Level Unlearning
*Effort: 3+ weeks*

You develop an extension of the TIF framework to address the paper's limitation on knowledge-level unlearning, where unwanted information is diffusely embedded rather than localized to specific tokens. This involves designing a method to identify and suppress implicit knowledge representations, possibly by combining token-level TPO with representation-level regularization or probing. You evaluate your method on a synthetic or adapted dataset simulating diffuse unwanted knowledge.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of the framework and creativity in advancing it toward more challenging unlearning scenarios.

**Grounded in:** The framework focuses on sequence-level unlearning by suppressing token generation and may not generalize well to knowledge-level unlearning where information is diffusely embedded in model representations... Future work could explore extending TIF with techniques for knowledge-based identification.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, numpy, matplotlib

**Data:** Use a synthetic dataset where unwanted information is embedded in paraphrased or distributed forms, or adapt a public dataset by diffusing unwanted concepts across multiple tokens.

**Build it:**

1. Review the TIF and TPO framework and understand sequence-level unlearning mechanisms.
2. Design a method to identify diffuse unwanted knowledge, e.g., via representation probing or clustering of hidden states.
3. Implement a combined loss that applies token-level TPO and representation-level regularization to suppress unwanted knowledge.
4. Create or adapt a dataset with diffuse unwanted information for evaluation.
5. Train and evaluate the extended method, comparing forget quality and utility preservation against baseline TPO.
6. Document challenges, results, and potential improvements.

**Verified links from the paper:**

- <https://github.com/xzhou98/Unlearning-TPO> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing the knowledge-level unlearning extension, evaluation scripts, and a detailed README discussing methodology, results, and limitations.

**Stretch goal:** Explore integrating generative and discriminative models for improved unwanted knowledge identification in this extended framework.

_The paper's authors did not release their own code; the intermediate and advanced projects rely on reimplementing the core TPO method from the paper's description and using the third-party TPO repository as a reference baseline._
