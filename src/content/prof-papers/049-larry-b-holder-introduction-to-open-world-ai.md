---
title: "049 · Introduction to open-world AI — Larry B. Holder"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-holder"
source_hash: "169570a6f3cc96dc050c3e3ae258c3ecf1ad760add2faa68ce6c83e30969a048"
sequence: 49
generator: "outreach-garden: managed"
---

# 049 · Introduction to open-world AI

## At a glance

- **Professor:** Larry B. Holder
- **Institution:** Washington State University
- **Paper:** [Introduction to open-world AI](https://eecs.wsu.edu/~holder/pubs/Holder-AIJ-2025.pdf)
- **Authors:** Lawrence Holder, Pat Langley, Bryan Loyall, Ted Senator
- **Year:** 2025

## Paper overview

This paper introduces the concept of open-world AI, where AI systems must detect and adapt to sudden, novel changes in their environment that were not anticipated during training. It discusses the challenges, recent research advances, and future directions for building AI that can operate robustly in unpredictable, real-world settings.

### Why it matters

**Research problem:** AI systems often fail when deployed in environments that differ significantly from their training data or violate design assumptions. Open-world AI addresses the problem of enabling AI agents to detect, characterize, and adapt to novel situations quickly and autonomously without extensive retraining.

**Why it matters:** As AI systems are increasingly used in complex, dynamic real-world domains (e.g., autonomous vehicles, defense, healthcare), their inability to handle unexpected changes limits their reliability and safety. Developing open-world AI is critical for robust, autonomous decision-making in novel or unpredictable situations.

**Key contributions:**

- Definition and formalization of open-world AI and its challenges.
- Summary of the DARPA SAIL-ON program's methodology, novelty hierarchy, and evaluation metrics.
- Review of state-of-the-art approaches for novelty detection and adaptation across perceptual and interactive domains.
- Discussion of the limitations of existing methods and the need for integrated, hybrid AI architectures.
- Identification of future research directions including few-shot adaptation, catastrophic forgetting, causal reasoning, and collaborative learning.

## About the professor

**Larry B. Holder** — Professor, School of Electrical Engineering and Computer Science, Washington State University.

Research interests: Artificial Intelligence, Machine Learning, Data Mining, Graph Theory, Algorithms, Security and Bioinformatics.

### Research links

- [Faculty/profile page](http://www.eecs.wsu.edu/~holder)
- [Professor website](https://eecs.wsu.edu/~holder)
- [Resolved homepage](https://eecs.wsu.edu/~holder/)
- [Lab website](http://ailab.wsu.edu/)

## Learning path

To deeply understand the paper on open-world AI, start with foundational concepts in continual learning, meta-learning for rapid adaptation, and neuro-symbolic AI architectures, as these underpin the challenges and approaches discussed. Then, focus on the core topic of novelty detection and adaptation in AI, which is central to open-world AI systems. Finally, if available, review the authors' own talk for the most direct insights into their work and survey of the field.

## Recommended videos (in order)

### Continual learning in AI *(prerequisite)*
Continual learning is essential for understanding how AI systems maintain and update knowledge in dynamic, changing environments without catastrophic forgetting. This foundation supports grasping how open-world AI agents adapt over time as they encounter novel situations.

*How the paper uses it:* The paper discusses the need for continual learning to enable AI agents to adapt rapidly while retaining prior knowledge in open-world settings.

▶ [[Continual Learning Course] Lecture #1: Introduction and ...](https://www.youtube.com/watch?v=z9DDg2CJjeE) — ContinualAI · 1:51:17

### Meta-learning for rapid adaptation *(prerequisite)*
Meta-learning provides methods for AI to quickly adapt to new tasks with minimal data, a critical capability for open-world AI agents facing unexpected novelties. Understanding meta-learning techniques helps contextualize the paper's emphasis on few-shot and zero-shot adaptation.

*How the paper uses it:* The paper highlights meta-learning as a promising approach for rapid adaptation to novel situations in open-world AI.

▶ [Tutorial - Understanding meta learning for fast adaptation](https://www.youtube.com/watch?v=1SSQOE8ClHE) — ACM SIGKDD India Chapter · 1:27:44 · 3 years ago

### Neuro-symbolic AI architectures *(prerequisite)*
Neuro-symbolic AI combines symbolic reasoning with deep learning, offering integrated hybrid architectures that the paper identifies as necessary for robust open-world AI. This concept is key to understanding future directions proposed for combining multiple learning paradigms.

*How the paper uses it:* The paper advocates for hybrid AI architectures combining neuro-symbolic reasoning and learning to address open-world AI challenges.

▶ [MIT 6.S191 (2020): Neurosymbolic AI](https://www.youtube.com/watch?v=4PuuziOgSU4) — Alexander Amini · 41:10

### Novelty detection and adaptation in AI
Novelty detection and adaptation are the core challenges addressed by open-world AI, involving how agents identify and respond to unexpected changes in their environment. This section covers state-of-the-art methods and evaluation metrics relevant to the paper's survey and analysis.

*How the paper uses it:* Central to the paper's theme, this concept covers the detection and adaptation mechanisms that enable open-world AI agents to handle novel situations.

▶ [Thomas G. Dietterich, Anomaly Detection in Shallow and Deep Learning](https://www.youtube.com/watch?v=w-LrDom2Yzc) — Anomaly Detection for Scientific Discovery · Streamed 4 years ago

## Already in your library

- [Continual Learning Beyond Catastrophic Forgetting in Class-Incremental Scenarios - PART I](https://www.youtube.com/watch?v=OCu2vPl4Ts8) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
