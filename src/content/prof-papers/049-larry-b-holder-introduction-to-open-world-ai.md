---
title: "049 · Introduction to open-world AI — Larry B. Holder"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-holder"
source_hash: "665851676ff67879739377b60f8cf18059120c8128b652c820b694a5b1b7d6a7"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Introduction to open-world AI,' start with foundational concepts that enable rapid adaptation and robust learning in dynamic environments, including meta-learning, continual learning, and neuro-symbolic AI architectures. Then, build on this foundation by exploring the central methods of novelty detection and adaptation, which are critical for open-world AI systems. Finally, conclude with the authors' own keynote talk that directly addresses open-world AI challenges and the DARPA SAIL-ON program, providing authoritative insights into the paper's contributions and context.

### Meta-learning in AI *(prerequisite)*
Meta-learning is essential for understanding how AI systems can learn to adapt quickly to new tasks with minimal data, a key challenge in open-world AI. This concept underpins few-shot and zero-shot adaptation methods discussed as future directions in the paper.

*How the paper uses it:* Meta-learning supports rapid adaptation capabilities critical for open-world AI agents.

▶ [CS 182: Lecture 21: Part 1: Meta-Learning](https://www.youtube.com/watch?v=h7qyQeXKxZE) — RAIL · 5 years ago

### Continual learning AI *(prerequisite)*
Continual learning addresses the challenge of maintaining prior knowledge while adapting to novel situations, which is crucial for open-world AI systems that must operate robustly over time without catastrophic forgetting.

*How the paper uses it:* Continual learning is necessary to preserve knowledge while adapting to new, unforeseen novelties in open-world AI.

▶ [What Happens After We Solve Continual Learning - Stephanie Chan - CoLLAs 2025](https://www.youtube.com/watch?v=Ri6HNMOmfgk) — Conference on Lifelong Learning Agents (CoLLAs) · 7 months ago

### Neuro-symbolic AI architectures *(prerequisite)*
Neuro-symbolic AI combines symbolic reasoning with neural learning, offering a promising hybrid approach to address the limitations of purely statistical or symbolic methods. This integration is highlighted in the paper as a future direction for robust open-world AI architectures.

*How the paper uses it:* Hybrid neuro-symbolic architectures are identified as a key future direction for integrated open-world AI systems.

▶ [Foundations of Neurosymbolic AI](https://www.youtube.com/watch?v=9Jc3g6sPpUU) — Neuro Symbolic · 51:07 · 1 year ago

### Novelty detection and adaptation
Novelty detection and adaptation are central methods enabling AI systems to recognize and respond to unexpected changes in their environment. Understanding these techniques is critical to grasping the core challenges and solutions surveyed in the paper.

*How the paper uses it:* Novelty detection and adaptation form the methodological core of open-world AI as surveyed in the paper.

▶ [Machine Learning 10-701 Lecture 13 Novelty Detection](https://www.youtube.com/watch?v=vIDcjbpwY3k) — Alex Smola · 12 years ago

### Open-world AI Holder talk *(the paper's own talk)*
The authors' own keynote talk provides direct insight into the paper's contributions, the DARPA SAIL-ON program, and the broader context of open-world AI research. It offers authoritative perspectives on challenges, methodologies, and future directions.

*How the paper uses it:* This keynote by Professor Larry Holder, a co-author, directly addresses the paper's themes and research outcomes.

▶ [Keynote: AI in the Open World](https://www.youtube.com/watch?v=v_6BWz-v4R4) — Microsoft Research · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational AI concepts essential for understanding open-world AI, starting with meta-learning and continual learning to grasp how AI adapts quickly and retains knowledge. It then covers neuro-symbolic AI architectures to appreciate hybrid reasoning systems, followed by novelty detection and adaptation methods central to handling unexpected changes. Finally, it presents an expert talk on open-world AI to connect these concepts directly to the paper's contributions and challenges.

### Meta-learning in AI *(prerequisite)*
Meta-learning is about teaching AI systems how to learn new tasks quickly by learning the learning process itself. This enables rapid adaptation to novel situations with minimal data, a key capability for open-world AI. Understanding meta-learning lays the groundwork for grasping few-shot and zero-shot adaptation methods discussed in the paper.

*How the paper uses it:* Meta-learning underpins rapid adaptation approaches highlighted as future directions in open-world AI research.

▶ [Meta Learning: Mastering the Art of Learning Itself](https://www.youtube.com/watch?v=tmbKFlQpbxo) — AI Labs: Brain Science & Nexus · 1 year ago

### Continual learning AI *(prerequisite)*
Continual learning focuses on how AI systems can keep learning new information without forgetting what they already know. This is crucial for open-world AI, which must adapt to new environments while retaining prior knowledge. Grasping continual learning helps understand challenges like catastrophic forgetting mentioned in the paper.

*How the paper uses it:* Continual learning addresses the problem of maintaining prior knowledge while adapting rapidly to novelty in open-world AI.

▶ [What Happens After We Solve Continual Learning - Stephanie Chan - CoLLAs 2025](https://www.youtube.com/watch?v=Ri6HNMOmfgk) — Conference on Lifelong Learning Agents (CoLLAs) · 7 months ago

### Neuro-symbolic AI architectures *(prerequisite)*
Neuro-symbolic AI combines neural networks with symbolic reasoning to create hybrid systems that can learn from data and perform logical reasoning. This integration is important for building robust open-world AI agents capable of complex adaptation and explanation. Understanding these architectures clarifies the paper's call for integrated hybrid AI systems.

*How the paper uses it:* The paper identifies neuro-symbolic architectures as a promising approach for integrated open-world AI systems.

▶ [Neuro Symbolic AI - Dr. Amit Sheth](https://www.youtube.com/watch?v=t9vN_yvW1NQ) — AI Institute at UofSC - #AIISC · 2 years ago

### Novelty detection and adaptation
Novelty detection involves identifying when an AI encounters something new or unexpected, while adaptation is how it adjusts its behavior accordingly. These are core challenges in open-world AI, enabling agents to operate reliably in unpredictable environments. Learning these concepts provides insight into the central methods surveyed in the paper.

*How the paper uses it:* Novelty detection and adaptation are central methods surveyed as key capabilities for open-world AI agents.

▶ [Overview of Modern Anomaly and Novelty Detection | AISC](https://www.youtube.com/watch?v=YOde0WceE54) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 53:17 · Streamed 6 years ago

### Open-world AI Holder talk *(the paper's own talk)*
This keynote by a leading researcher provides direct insight into open-world AI, summarizing its challenges, recent advances, and future directions. It ties together foundational concepts and illustrates their application in real research programs like DARPA SAIL-ON. Watching this talk consolidates understanding of the paper's context and contributions.

*How the paper uses it:* The talk offers direct context and expert perspective from the paper's authors on open-world AI.

▶ [Keynote: AI in the Open World](https://www.youtube.com/watch?v=v_6BWz-v4R4) — Microsoft Research · 9 years ago

## Already in your library

- [MIT 6.S191 (2020): Neurosymbolic AI](https://www.youtube.com/watch?v=4PuuziOgSU4) — also for: Introduction to open-world AI (Larry B. Holder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of open-world AI as introduced by Holder et al. (2025). The beginner project focuses on implementing a basic novelty detection metric inspired by the paper's discussion of novelty detection challenges. The intermediate project reimplements a core novelty detection and adaptation method, applying it to a visual reinforcement learning environment from the DARPA SAIL-ON program's VizDoom novelty generator. The advanced project extends the state-of-the-art by addressing a key limitation identified in the paper: improving novelty characterization to enhance adaptation, using hybrid neuro-symbolic methods and meta-learning on interactive environments.

### Beginner — Basic Novelty Detection Metric Implementation
*Effort: a weekend, ~8 hours*

You build a simple Python script that simulates a stream of data points with injected novel events and implements a basic novelty detection metric such as detection accuracy or false positive rate. The novelty events are synthetic but inspired by the paper's novelty hierarchy concept. You visualize detection results over time to illustrate detection performance.

**Why it shows you understood the paper:** This project shows you understand the fundamental challenge of novelty detection in open-world AI and how detection performance can be measured and visualized, directly reflecting the paper's emphasis on novelty detection metrics.

**Grounded in:** Open-world AI is characterized by sudden novel changes in a domain that are outside the scope of the training data... the AI system must detect the novelty and adapt in a short time frame.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic time series data with injected novelty events simulating sudden domain changes as described in the paper's novelty hierarchy.

**Build it:**

1. Implement a data generator that produces a stream of normal data points and injects novel events at random intervals.
2. Implement a simple novelty detection algorithm (e.g., threshold-based anomaly detection).
3. Calculate detection metrics such as true positive rate and false positive rate.
4. Visualize the data stream and detection results over time using matplotlib.
5. Write a README explaining the novelty detection concept and how the metric relates to open-world AI challenges.

**Ships as:** A GitHub repository containing the Python script, visualization outputs, and a README explaining novelty detection metrics in open-world AI.

**Stretch goal:** Add a simple adaptation mechanism that modifies detection thresholds based on recent novelty frequency.

### Intermediate — Reimplementing Novelty Detection and Adaptation in VizDoom
*Effort: 2 weekends, ~20 hours*

You reimplement a core novelty detection and adaptation method inspired by the DARPA SAIL-ON program's approach using the VizDoom novelty generator environment (from https://github.com/holderlb/WSU-SAILON-NG). You run experiments comparing a baseline agent without novelty adaptation to a novelty-aware agent, measuring performance recovery after novelty injection.

**Why it shows you understood the paper:** This project demonstrates your ability to work with a real open-world AI benchmark environment and replicate the paper's core experimental methodology, showing comprehension of novelty detection, adaptation, and evaluation metrics from the SAIL-ON program.

**Grounded in:** The SAIL-ON program developed an experiment methodology and set of metrics to assess different aspects of an agent’s ability to detect and adapt to novelty.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, VizDoom, matplotlib

**Data:** VizDoom novelty generator environment from the third_party_artifacts repository https://github.com/holderlb/WSU-SAILON-NG, which simulates visual reinforcement learning tasks with novelty injection.

**Build it:**

1. Clone and set up the WSU-SAILON-NG repository and its dependencies.
2. Study the novelty injection mechanisms and baseline agent implementations provided.
3. Implement a novelty-aware agent that detects novelty events and adapts its policy (e.g., via fine-tuning or meta-learning).
4. Run experiments comparing baseline and novelty-aware agents on VizDoom tasks with injected novelty.
5. Measure and plot performance recovery metrics post-novelty to replicate key results.
6. Document the methodology, results, and relation to the paper's findings.

**Verified links from the paper:**

- <https://github.com/holderlb/WSU-SAILON-NG> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your novelty-aware agent code, experiment scripts, performance plots, and a detailed README linking your results to the paper's SAIL-ON evaluation metrics.

**Stretch goal:** Incorporate a simple meta-cognitive module that triggers adaptation only when novelty is detected to optimize resource use.

### Advanced — Hybrid Neuro-Symbolic Novelty Characterization to Improve Adaptation
*Effort: 3-4 weeks*

You develop a hybrid neuro-symbolic AI architecture that integrates symbolic reasoning with deep learning to improve novelty characterization and thereby enhance adaptation in an open-world interactive environment. You implement meta-learning techniques to enable few-shot adaptation to novel situations. Experiments compare your approach to a baseline novelty-aware agent, focusing on whether improved characterization leads to better adaptation performance.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified in the paper: the limited impact of novelty characterization on adaptation and the need for integrated hybrid architectures. It shows your ability to extend state-of-the-art methods and engage with open research challenges.

**Grounded in:** Although agent teams developed methods for novelty characterization, this capability did not significantly enhance an agent’s ability to adapt to the novelty. Future open-world AI research should integrate multiple learning paradigms and improve few-shot adaptation.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Z3 SMT solver (for symbolic reasoning), OpenAI Gym or VizDoom for environment, matplotlib

**Data:** Use the VizDoom novelty generator environment (https://github.com/holderlb/WSU-SAILON-NG) as the interactive domain for experiments, substituting for the paper's evaluation environments.

**Build it:**

1. Design a neuro-symbolic architecture combining a neural novelty detector with a symbolic reasoning module for novelty characterization.
2. Implement meta-learning algorithms (e.g., MAML or Reptile) to enable few-shot adaptation to novel events.
3. Integrate the modules to enable the agent to explain and characterize novelty, then adapt its policy accordingly.
4. Run experiments comparing your hybrid agent to a baseline novelty-aware agent on VizDoom tasks with novelty injection.
5. Analyze whether improved novelty characterization leads to statistically significant adaptation performance gains.
6. Write a comprehensive report discussing how your approach addresses the paper's identified limitations and future directions.

**Verified links from the paper:**

- <https://github.com/holderlb/WSU-SAILON-NG> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing your hybrid neuro-symbolic agent code, experiment scripts, evaluation results, and a detailed README discussing the impact of novelty characterization on adaptation.

**Stretch goal:** Extend the architecture to incorporate causal reasoning for transparency and further improve adaptation.
