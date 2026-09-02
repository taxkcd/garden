---
title: "514 · Not All Tokens Are Meant to Be Forgotten — Yao Qiang"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yao-qiang"
source_hash: "a9db9f4918225d208b2142b41cc5de1ecf85c93f90385753b9949f4172c29b20"
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
