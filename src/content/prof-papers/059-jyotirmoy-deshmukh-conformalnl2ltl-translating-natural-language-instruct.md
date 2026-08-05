---
title: "059 · ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees — Jyotirmoy Deshmukh"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jyotirmoy-deshmukh"
source_hash: "a5aba74111e579474b6ac4c3cd8e7dff1636d036e586ec3f241769816b34ee46"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of ConformalNL2LTL. The beginner project reproduces a core mechanism of conformal prediction uncertainty quantification using familiar tools. The intermediate project implements the paper's core collaborative LLM and conformal prediction method on a small synthetic dataset to replicate translation accuracy and user intervention metrics. The advanced project extends the method to reduce human intervention by experimenting with multiple auxiliary LLMs or confidence aggregation, addressing a key limitation and future direction of the paper.

### Beginner — Conformal Prediction Uncertainty Demo for NL-to-LTL QA
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates the conformal prediction mechanism for uncertainty quantification on a toy natural language question-answering task. Using a simple pretrained LLM API (e.g., OpenAI GPT-3 or Anthropic Claude) accessed via Python, you implement the split conformal prediction calibration and validation steps to produce prediction sets with user-specified confidence levels.

**Why it shows you understood the paper:** This project shows you understand how conformal prediction quantifies uncertainty in LLM outputs, a key innovation of ConformalNL2LTL. A professor would see you grasp the statistical guarantees and calibration process that underpin the method's correctness assurances.

**Grounded in:** Theoretical and empirical demonstration of achieving high translation accuracy with minimal user intervention.

**Tech stack:** Python 3.11, Jupyter Notebook, OpenAI or Anthropic API client

**Data:** Synthetic natural language questions and multiple-choice answers you create to simulate translation QA tasks.

**Build it:**

1. Create a small dataset of NL questions with known correct answers and plausible distractors.
2. Implement split conformal prediction calibration: run the LLM on calibration set, record conformity scores.
3. Implement prediction set construction for validation set with user-specified confidence.
4. Visualize prediction set sizes and coverage rates to verify conformal guarantees.
5. Write a README explaining conformal prediction and how it applies to NL-to-LTL translation uncertainty.

**Ships as:** A Jupyter notebook demonstrating conformal prediction calibration and uncertainty quantification on toy NL QA data, with plots and explanations.

**Stretch goal:** Add a simple auxiliary LLM reranking step to reduce prediction set sizes before human intervention.

### Intermediate — Reimplementation of ConformalNL2LTL Core Method on Synthetic NL-to-LTL Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core ConformalNL2LTL method as described in the paper: a pipeline that translates natural language instructions into LTL formulas via a sequence of QA tasks answered by a primary LLM, uncertainty quantified by conformal prediction, and an auxiliary LLM queried on high-uncertainty cases to reduce user intervention. You evaluate translation accuracy and user intervention rates on a small synthetic dataset of NL instructions paired with LTL formulas.

**Why it shows you understood the paper:** This project shows you can implement the paper's main algorithmic contribution from scratch, including collaborative LLM usage and conformal prediction calibration. A professor would see you understand the interplay between uncertainty quantification, auxiliary model querying, and iterative formula construction.

**Grounded in:** First NL-to-LTL translation algorithm achieving user-specified translation success rates on unseen NL instructions; significant reduction in user help requests by using an auxiliary LLM.

**Tech stack:** Python 3.11, FastAPI or Flask (optional for API wrapping), OpenAI or Anthropic API client, Jupyter Notebook or scripts

**Data:** Synthetic dataset you create of NL robot task instructions paired with corresponding LTL formulas, simulating the paper's translation scenarios.

**Build it:**

1. Design a small synthetic dataset of NL instructions and corresponding LTL formulas.
2. Implement the primary LLM QA pipeline to translate NL instructions into LTL subformulas.
3. Implement conformal prediction calibration and validation to quantify uncertainty per QA step.
4. Integrate an auxiliary LLM to answer high-uncertainty QA tasks before user intervention.
5. Evaluate translation success rate and user intervention rate on a held-out synthetic test set.
6. Document the pipeline, calibration procedure, and evaluation metrics in a README.

**Ships as:** A Python project with scripts or notebooks implementing ConformalNL2LTL core method on synthetic data, reporting translation accuracy and user intervention statistics.

**Stretch goal:** Add a simple human-in-the-loop simulation that selects correct answers on remaining uncertain cases to measure minimal user intervention.

### Advanced — Reducing Human Intervention in ConformalNL2LTL via Multi-Auxiliary LLM Collaboration
*Effort: 3-4 weeks*

You extend the ConformalNL2LTL framework by experimenting with multiple auxiliary LLMs collaboratively to resolve high-uncertainty QA tasks, aiming to further reduce human intervention rates. You implement confidence aggregation or voting among auxiliary LLM responses before escalating to a human user. You evaluate this extension on synthetic or small real NL-to-LTL instruction datasets, analyzing its impact on user intervention and translation accuracy.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated in the paper: reducing or eliminating human intervention. A professor would see you can critically engage with the method, propose and implement a genuine extension, and evaluate its practical benefits.

**Grounded in:** Limitations: User intervention is still required in some high-uncertainty cases; Future directions: Reducing or eliminating the need for human intervention further.

**Tech stack:** Python 3.11, OpenAI and Anthropic API clients, Jupyter Notebook or Python scripts, Optional: Docker for environment reproducibility

**Data:** Synthetic NL-to-LTL instruction dataset as in the intermediate project; optionally augment with small real-world NL instructions if available.

**Build it:**

1. Reimplement or reuse the intermediate project pipeline for ConformalNL2LTL.
2. Integrate multiple auxiliary LLMs (e.g., GPT-4, Claude) to answer uncertain QA tasks.
3. Implement confidence aggregation methods (e.g., majority vote, confidence thresholding) among auxiliary LLM outputs.
4. Evaluate the impact on user intervention rates and translation accuracy compared to single auxiliary LLM baseline.
5. Analyze failure cases and document trade-offs in README.
6. Optionally containerize the project for reproducibility.

**Ships as:** A Python project demonstrating multi-auxiliary LLM collaboration to reduce human intervention in NL-to-LTL translation, with evaluation results and analysis.

**Stretch goal:** Explore adaptive calibration methods to dynamically adjust conformal prediction parameters based on auxiliary LLM agreement.
