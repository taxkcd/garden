---
title: "059 · ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees — Jyotirmoy Deshmukh"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jyotirmoy-deshmukh"
source_hash: "8e67f3c06dce1182a22fbf7c7626b55d8131f474bc57ec68e7146ca005e854e7"
sequence: 59
generator: "outreach-garden: managed"
---

# 059 · ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees

## At a glance

- **Professor:** Jyotirmoy Deshmukh
- **Institution:** University of Southern California
- **Paper:** [ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees](https://arxiv.org/pdf/2504.21022)
- **Authors:** David Smith Sundarsingh, Jun Wang, Jyotirmoy V. Deshmukh, Yiannis Kantaros
- **Year:** 2026

## Paper overview

This paper presents ConformalNL2LTL, a novel method that translates natural language instructions for robot tasks into Linear Temporal Logic (LTL) formulas with user-defined correctness guarantees. It uses large language models (LLMs) combined with conformal prediction to quantify uncertainty and minimize human intervention, ensuring that the translated logic accurately reflects the original instructions.

### Why it matters

**Research problem:** Translating natural language (NL) instructions into LTL formulas for autonomous robot task specification is challenging due to the manual effort and expertise required, and existing NL-to-LTL translation methods lack correctness guarantees, leading to possible misinterpretations and failed robot plans.

**Why it matters:** Accurate translation of NL instructions into formal task specifications like LTL is crucial for reliable autonomous robot operation, especially in complex tasks such as autonomous driving or manipulation. Without correctness guarantees, robots may execute incorrect plans, compromising safety and effectiveness.

**Key contributions:**

- First NL-to-LTL translation algorithm achieving user-specified translation success rates on unseen NL instructions.
- First application of conformal prediction to collaborative LLMs for NL-to-LTL translation, applicable to both open- and closed-source LLMs.
- Theoretical and empirical demonstration of achieving high translation accuracy with minimal user intervention.
- Release of software implementation and datasets for calibration and testing.

## About the professor

**Jyotirmoy Deshmukh** — Associate Professor of Computer Science and of Electrical and Computer Engineering, Department of Computer Science; Ming Hsieh Department of Electrical and Computer Engineering, University of Southern California.

Research interests: application of formal methods to reason about cyber-physical systems, verification and testing of embedded control systems, real-time temporal logics, and analysing time-series data; cyber-physical systems that use machine learning based components, such as autonomous driving vehicles

### Research links

- [Faculty/profile page](https://viterbi.usc.edu/directory/faculty/Deshmukh/Jyotirmoy)
- [Professor website](http://www-bcf.usc.edu/~jdeshmuk/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand ConformalNL2LTL, start with foundational knowledge of formal methods for cyber-physical systems and linear temporal logic, which underpin the formal task specifications. Then, study natural language to formal logic translation and collaborative large language models to grasp the challenges and techniques in converting NL instructions into formal logic using multiple LLMs. Finally, focus on conformal prediction with LLMs to understand the uncertainty quantification and correctness guarantees central to the paper, culminating with the authors' own talk presenting their novel method.

### Formal methods for cyber-physical systems *(prerequisite)*
Formal methods provide the theoretical and practical foundation for verifying and synthesizing correct behavior in cyber-physical systems, such as autonomous robots. Understanding these methods contextualizes the importance of translating natural language instructions into formally verifiable specifications like LTL.

*How the paper uses it:* The paper applies formal verification techniques to robot task specifications, aligning with formal methods for cyber-physical systems.

▶ [Formal Methods for Dependable Computing: From Models, through Software, to Circuits](https://www.youtube.com/watch?v=VUyfi6JJRgA) — CITRIS and the Banatao Institute · 47:00 · 15 years ago

### Linear temporal logic lecture *(prerequisite)*
Linear Temporal Logic (LTL) is the formal language used to specify temporal properties of systems. A rigorous lecture on LTL provides the necessary background to understand the formal specifications generated by the ConformalNL2LTL method.

*How the paper uses it:* The paper translates natural language instructions into LTL formulas, making understanding LTL essential.

▶ [Advanced 6. Planning with Temporal Logic](https://www.youtube.com/watch?v=Tmhe33f9mWA) — MIT OpenCourseWare · 1:11:48 · 7 years ago

### Natural language to formal logic translation *(prerequisite)*
Translating natural language into formal logic is a foundational challenge addressed by the paper. A lecture on this topic helps understand the complexities and methodologies involved in converting ambiguous NL instructions into precise logical formulas.

*How the paper uses it:* The core problem the paper addresses is NL-to-LTL translation, a form of natural language to formal logic translation.

▶ [Transcription and Translation of Natural Language to Logical Form](https://www.youtube.com/watch?v=QxKTrLWGKFc) — Spencer Ivy Teaches Philosophy · 1 month ago

### Collaborative large language models *(prerequisite)*
The paper uses two large language models working collaboratively to improve translation accuracy and reduce human intervention. Understanding collaborative LLM architectures and their trustworthiness is key to grasping the paper's approach.

*How the paper uses it:* ConformalNL2LTL employs a primary and an auxiliary LLM collaboratively to handle translation tasks.

▶ [Keynote: Can you trust your (large language) model? - Jodie Burchell - NDC AI 2025](https://www.youtube.com/watch?v=j4P8fXcKiHM) — NDC Conferences · 5 months ago

### Conformal prediction with LLMs
Conformal prediction is the central method used in the paper to quantify uncertainty and provide correctness guarantees in the NL-to-LTL translation process. A detailed tutorial on conformal prediction, especially in the context of LLMs, is critical to understanding the theoretical and practical contributions.

*How the paper uses it:* The paper innovatively applies conformal prediction to collaborative LLMs for uncertainty quantification and correctness guarantees.

▶ [Applied Conformal Predictors: Why Large Language Models (LLMs) Need Conformal Predictors](https://www.youtube.com/watch?v=LhdTNHvf6Tw) — MLBoost · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand ConformalNL2LTL, start by learning the basics of translating natural language into formal logic, which is foundational for converting instructions into precise formulas. Next, grasp Linear Temporal Logic (LTL) to comprehend the formal language used for specifying robot tasks. Then, explore conformal prediction to understand how uncertainty and correctness guarantees are quantified. Finally, study how collaborative large language models work together to improve translation accuracy and reduce human intervention, directly reflecting the paper's novel approach.

### Natural language to formal logic translation *(prerequisite)*
This concept covers how everyday language instructions can be converted into formal logical expressions, enabling machines to interpret and reason about human commands precisely. Understanding this translation is essential to appreciate how natural language instructions become machine-readable specifications.

*How the paper uses it:* The paper addresses the challenge of translating natural language instructions into formal LTL formulas for robot task specification.

▶ [Transcription and Translation of Natural Language to Logical Form](https://www.youtube.com/watch?v=QxKTrLWGKFc) — Spencer Ivy Teaches Philosophy · 1 month ago

### Linear temporal logic lecture *(prerequisite)*
Linear Temporal Logic (LTL) is a formal language used to describe sequences of events over time, crucial for specifying and verifying behaviors in autonomous systems. Learning LTL helps understand the target formalism into which natural language instructions are translated in the paper.

*How the paper uses it:* The paper translates natural language instructions into LTL formulas to specify robot tasks formally.

▶ [Introduction to LTL](https://www.youtube.com/watch?v=W5Q0DL9plns) — Model Checking · 28:13 · 10 years ago

### Conformal prediction with LLMs
Conformal prediction is a statistical framework that quantifies uncertainty in machine learning predictions, providing formal guarantees about prediction correctness. Understanding this method is key to grasping how the paper ensures user-defined correctness guarantees in the translation process.

*How the paper uses it:* The paper uses conformal prediction to quantify uncertainty and provide correctness guarantees in NL-to-LTL translation.

▶ [Three Easy Steps to Understand Conformal Prediction (CP), Conformity Score, Python Implementation](https://www.youtube.com/watch?v=oqK6rM8fbkk) — Dr. Data Science · 2 years ago

### Collaborative large language models *(prerequisite)*
This concept explains how multiple large language models can work together to improve task performance, such as reducing errors and minimizing human intervention. It is important to understand this collaboration to see how the paper leverages two LLMs for better translation accuracy.

*How the paper uses it:* The paper employs two LLMs collaboratively to improve translation accuracy and reduce user intervention.

▶ [Keynote: Can you trust your (large language) model? - Jodie Burchell - NDC AI 2025](https://www.youtube.com/watch?v=j4P8fXcKiHM) — NDC Conferences · 5 months ago

## Already in your library

- [Linear Temporal Logic](https://www.youtube.com/watch?v=5EO2yUwdODM) — also for: ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees (Jyotirmoy Deshmukh)
