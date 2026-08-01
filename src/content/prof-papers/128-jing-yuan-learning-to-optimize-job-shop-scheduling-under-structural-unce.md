---
title: "128 · Learning to Optimize Job Shop Scheduling Under Structural Uncertainty — Jing Yuan"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jing-yuan"
source_hash: "526d6b060a79ed953881f07c082ac483ac446c8f2ca8a59975e5de4b63849f80"
sequence: 128
generator: "outreach-garden: managed"
---

# 128 · Learning to Optimize Job Shop Scheduling Under Structural Uncertainty

## At a glance

- **Professor:** Jing Yuan
- **Institution:** University of North Texas
- **Paper:** [Learning to Optimize Job Shop Scheduling Under Structural Uncertainty](https://arxiv.org/abs/2601.21389)
- **Authors:** Rui Zhang, Jianwei Niu, Xuefeng Liu, Shaojie Tang, Jing Yuan
- **Year:** 2026

## Paper overview

This paper addresses the challenge of scheduling jobs in manufacturing environments where the sequence of operations is uncertain and can change dynamically. The authors propose a new deep reinforcement learning framework called UP-AAC that uses an asymmetric actor-critic architecture to provide more stable learning signals by separating the actor's and critic's views of uncertainty. They also introduce an uncertainty perception model to help the actor make better decisions by understanding the overall risk. Their method outperforms traditional heuristics and standard reinforcement learning approaches on benchmark problems.

### Why it matters

**Research problem:** The Job-Shop Scheduling Problem (JSSP) under structural uncertainty, where the processing route of jobs is not fixed but probabilistic, causing challenges in decision making due to incorrect credit assignment in standard reinforcement learning frameworks.

**Why it matters:** Efficient scheduling in manufacturing and logistics is critical for reducing completion times and costs. Structural uncertainty is common in real-world settings, such as varying fabrication paths based on intermediate quality, making traditional deterministic scheduling methods inadequate.

**Key contributions:**

- Introduction of UP-AAC, a novel DRL framework for JSSP with structural uncertainty featuring an asymmetric actor-critic architecture.
- Development of the Uncertainty Perception Model (UPM) that incorporates heuristic risk priors and attention mechanisms to quantify and embed global uncertainty.
- Extensive experiments demonstrating state-of-the-art performance and robustness compared to traditional heuristics and standard AC methods.
- A training procedure combining offline uncertainty analysis with online policy learning using hindsight reconstruction.

## About the professor

**Jing Yuan** — Assistant Professor, Computer Science and Engineering, University of North Texas.

Research interests: optimization, social computing and machine learning

### Research links

- [Faculty/profile page](https://computerscience.engineering.unt.edu/people/faculty/jing-yuan)
- [Professor website](https://sites.google.com/view/jing-yuan-unt)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Learning to Optimize Job Shop Scheduling Under Structural Uncertainty," start by building foundational knowledge on the Job Shop Scheduling Problem (JSSP) and its challenges under uncertainty. Then, study the core reinforcement learning techniques, especially actor-critic methods, and the role of attention mechanisms in modeling uncertainty. Finally, focus on the paper's central contribution: the asymmetric actor-critic architecture and the novel UP-AAC framework for scheduling under structural uncertainty.

### Job Shop Scheduling under Uncertainty *(prerequisite)*
This section introduces the Job Shop Scheduling Problem and the challenges posed by structural uncertainty, where job routes are probabilistic and not fixed. Understanding this problem setting is crucial to appreciate why traditional scheduling methods fail and why new approaches like UP-AAC are needed.

*How the paper uses it:* The paper addresses JSSP under structural uncertainty, making this foundational knowledge essential.

▶ [[Scheduling Seminar] Laurent Houssin (ENAC, UT) Flow-shop and job-shop robust scheduling problems](https://www.youtube.com/watch?v=S8atVTl4RDo) — Scheduling seminar · Streamed 7 months ago

### Deep Reinforcement Learning for Combinatorial Optimization *(prerequisite)*
This section covers the application of deep reinforcement learning (DRL) to combinatorial optimization problems, providing the theoretical and practical background for using DRL in scheduling tasks. It explains how DRL can learn policies to solve complex optimization problems efficiently.

*How the paper uses it:* The paper proposes a DRL framework (UP-AAC) for solving JSSP under uncertainty.

▶ [Deep Reinforcement Learning for Online Combinatorial ...](https://www.youtube.com/watch?v=PoMrl5rjQ3U) — Vector Institute · 59:25

### Actor-Critic Methods in Reinforcement Learning *(prerequisite)*
Actor-critic methods form the backbone of many reinforcement learning algorithms by combining policy-based and value-based approaches. This section explains the core concepts and algorithms behind actor-critic methods, which is necessary to understand the asymmetric actor-critic architecture introduced in the paper.

*How the paper uses it:* The UP-AAC framework is based on an asymmetric actor-critic architecture to improve learning stability under uncertainty.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=oejFZShW9hU) — Stanford Online · 1:03:30

### Attention Mechanisms and Risk Modeling *(prerequisite)*
Attention mechanisms allow models to focus on relevant parts of input data, and risk modeling helps quantify uncertainty. This section explains these techniques, which are combined in the paper's Uncertainty Perception Model (UPM) to embed global risk information guiding the actor's decisions.

*How the paper uses it:* The paper uses attention mechanisms and heuristic risk priors in the UPM to improve policy robustness.

▶ [Stanford CS224N: NLP with Deep Learning | Spring 2024 ...](https://www.youtube.com/watch?v=NxH0Y78xcF4) — Stanford Online · 1:16:27

### Paper-specific talk
This section focuses on the core contribution of the paper: the UP-AAC framework with its asymmetric actor-critic architecture and uncertainty perception model. Watching a talk by the authors or a detailed seminar on this topic provides direct insight into their novel approach and experimental results.

*How the paper uses it:* This is the paper's central topic and the authors' own presentation would be ideal, but no direct author talk was found; thus, a closely related advanced lecture on job shop scheduling is chosen.

▶ [Operations Research 09D: Job Shop Scheduling Problem](https://www.youtube.com/watch?v=UGvc-qujB-o) — Yong Wang · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to job shop scheduling under uncertainty. We start with the basics of job shop scheduling and the challenges posed by uncertainty, then cover deep reinforcement learning and actor-critic methods that underpin the solution. Finally, we explore attention mechanisms for risk modeling and the paper's core asymmetric actor-critic architecture to grasp the novel UP-AAC framework.

### Job Shop Scheduling under Uncertainty *(prerequisite)*
Learn what job shop scheduling is and how uncertainty in job routes complicates scheduling decisions. This sets the stage for understanding why traditional methods struggle and why new approaches are needed.

*How the paper uses it:* The paper addresses scheduling where job processing routes are probabilistic and unknown in advance, causing structural uncertainty.

▶ [[Scheduling Seminar] Laurent Houssin (ENAC, UT) Flow-shop and job-shop robust scheduling problems](https://www.youtube.com/watch?v=S8atVTl4RDo) — Scheduling seminar · Streamed 7 months ago

### Deep Reinforcement Learning for Combinatorial Optimization *(prerequisite)*
Understand how deep reinforcement learning (DRL) can be applied to complex optimization problems like scheduling. This includes learning policies to make sequential decisions under uncertainty.

*How the paper uses it:* The paper uses a deep reinforcement learning framework to optimize scheduling policies under uncertain job routes.

▶ [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — Alexander Amini · 2 years ago

### Actor-Critic Methods in Reinforcement Learning *(prerequisite)*
Get a clear intuition for actor-critic algorithms, which combine policy learning (actor) and value estimation (critic) to improve learning stability and efficiency in reinforcement learning.

*How the paper uses it:* The UP-AAC framework builds on an actor-critic architecture to handle uncertainty in scheduling decisions.

▶ [What is Actor-Critic?](https://www.youtube.com/watch?v=oDdPcEanLwY) — Pourquoi (布瓜的世界) · 11:50

### Attention Mechanisms and Risk Modeling *(prerequisite)*
Learn how attention mechanisms help models focus on important parts of input data, and how they can be used to embed and quantify risk information globally.

*How the paper uses it:* The paper’s Uncertainty Perception Model uses attention mechanisms to embed global risk features guiding the actor's decisions.

▶ [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — Google Cloud Tech · 5:34 · 3 years ago

### Asymmetric Actor-Critic Architecture
Explore the novel asymmetric actor-critic design where the actor and critic have different views of uncertainty to reduce variance and improve credit assignment in learning.

*How the paper uses it:* This is the core innovation of the paper’s UP-AAC framework to stabilize learning under structural uncertainty in job shop scheduling.

▶ [Learning to Fly in Seconds](https://www.youtube.com/watch?v=NRD43ZA1D-4) — ARPL UC Berkeley · 4:49
