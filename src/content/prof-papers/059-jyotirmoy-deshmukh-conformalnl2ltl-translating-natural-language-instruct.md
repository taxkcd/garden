---
title: "059 · ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees — Jyotirmoy Deshmukh"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jyotirmoy-deshmukh"
source_hash: "4d7176379144726e3534f5c62ebe1b8645b40eeb9bbb1b3f0c3d0c14733cc2f7"
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

To deeply understand the ConformalNL2LTL paper, start with foundational knowledge on formal methods in autonomous robotics and linear temporal logic (LTL), as these provide the theoretical and application context for the paper's approach. Then, study the principles of natural language to formal methods translation and collaborative large language models to grasp the methodology behind the translation and model collaboration. Finally, focus on conformal prediction with LLMs to understand the uncertainty quantification and correctness guarantees central to the paper's novel contribution.

## Recommended videos (in order)

### Formal methods in autonomous robotics seminar *(prerequisite)*
This section provides a rigorous academic context on the use of formal methods for safe and robust robot autonomy, highlighting the importance of formal verification in robot task planning. Understanding these concepts grounds the motivation and application domain of the paper.

*How the paper uses it:* The paper applies formal verification techniques to robot task specifications, making this foundational for appreciating the problem context and significance.

▶ [On Using Formal Methods For Safe and Robust Robot ...](https://www.youtube.com/watch?v=SQMo7hMPEps) — Stanford Autonomous Systems Laboratory · 1:09:27

### Linear temporal logic lecture *(prerequisite)*
Linear Temporal Logic (LTL) is the formal language used in the paper to specify robot tasks. This lecture offers a comprehensive and rigorous introduction to LTL syntax and semantics, essential for understanding how natural language instructions are translated into temporal logic formulas.

*How the paper uses it:* The paper translates natural language instructions into LTL formulas, so a solid grasp of LTL is critical to understanding the output and correctness guarantees.

▶ [Linear Temporal Logic](https://www.youtube.com/watch?v=5EO2yUwdODM) — Jan Oliver Ringert · 1:24:38

### Natural language to formal methods lecture *(prerequisite)*
This section covers foundational research on translating natural language into formal specifications, a key challenge addressed by the paper. The selected talks provide advanced insights into the intersection of NLP and formal reasoning, which underpin the paper's approach.

*How the paper uses it:* The paper's core problem is translating natural language instructions into formal LTL specifications, making this foundational knowledge essential.

▶ [Formal Reasoning Meets LLMs: Toward AI for Mathematics ...](https://www.youtube.com/watch?v=XuKeSzc7f_c) — Simons Institute for the Theory of Computing · 1:05:10

### Collaborative large language models talk *(prerequisite)*
The paper uses two large language models collaboratively to improve translation accuracy and reduce user intervention. This talk explores human-AI interaction and collaboration strategies with LLMs, providing advanced understanding of the methodology behind the paper's dual-model approach.

*How the paper uses it:* The paper's approach relies on collaborative LLMs to handle question-answering tasks for translation, making this directly relevant.

▶ [Human-AI Interaction in the Age of Large Language Models](https://www.youtube.com/watch?v=Yv7drI7cBsQ) — Simons Institute for the Theory of Computing · 59:10

### Conformal prediction with LLMs seminar
Conformal prediction is central to the paper's method for quantifying uncertainty and providing correctness guarantees in NL-to-LTL translation. This seminar offers an advanced and detailed explanation of conformal prediction techniques applied to machine learning models, including LLMs.

*How the paper uses it:* The paper innovatively applies conformal prediction to collaborative LLMs to ensure user-specified correctness guarantees in translation.

▶ [Emmanuel Candès: Statistical methods for assessing the ...](https://www.youtube.com/watch?v=fsgyllS43KY) — ASA Statistical Learning and Data Science · 57:29

## Already in your library

- [Lecture 12 Linear temporal logic](https://www.youtube.com/watch?v=--4S7HjoZho) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)
