---
title: "231 · Evaluating Large Language Models for Fair and Reliable Organ Allocation — Evi Micha"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-evi-micha"
source_hash: "71d7e718a3ca6c65ddfc7ebebe3ab08b77e3a89561c1a7aa9f63746bfb2f00cf"
sequence: 231
generator: "outreach-garden: managed"
---

# 231 · Evaluating Large Language Models for Fair and Reliable Organ Allocation

## At a glance

- **Professor:** Evi Micha
- **Institution:** University of Southern California
- **Paper:** [Evaluating Large Language Models for Fair and Reliable Organ Allocation](https://doi.org/10.48550/arXiv.2504.03716)
- **Authors:** Brian Hyeongseok Kim, Hannah Murray, Isabelle Lee, Jason Byun, Joshua Lum, Dani Yogatama, Evi Micha
- **Year:** 2026

## Paper overview

This paper investigates the use of large language models (LLMs) in the high-stakes clinical task of kidney organ allocation. It evaluates whether LLMs can make medically sound decisions and whether they exhibit demographic biases when selecting or ranking candidates. The study uses real-world clinical data and multiple fairness metrics to assess model behavior, revealing that current LLMs show varying performance and can introduce inequalities depending on the decision context.

### Why it matters

**Research problem:** Can large language models reliably and fairly assist in kidney organ allocation decisions, which require complex clinical reasoning and equitable prioritization among candidates?

**Why it matters:** Organ allocation is a critical, life-impacting decision involving scarce resources. Using AI tools like LLMs could improve efficiency but risks unfairness or errors that could harm patients. Rigorous evaluation is essential before deployment in clinical settings.

**Key contributions:**

- Systematic evaluation of LLMs on kidney allocation using real patient and organ data.
- Demonstration of distinct LLM behaviors in medical viability assessment and prompting sensitivity.
- Analysis of ranking stability showing higher confidence at extreme ranks and uncertainty in mid-ranks.
- Evidence that fairness metrics and demographic preferences are highly task-dependent and can invert between selection and ranking tasks.
- Highlighting the need for multiple complementary fairness metrics to detect nuanced biases.

## About the professor

**Evi Micha** — Assistant Professor, Thomas Lord Department of Computer Science, University of Southern California.

Research interests: computational social choice, algorithmic fairness

### Research links

- [Faculty/profile page](https://evi-micha.github.io)
- [Resolved homepage](https://evi-micha.github.io/index.html)
- [Lab website](https://viterbi-web.usc.edu/~cstheory/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on evaluating large language models for fair and reliable organ allocation, start with foundational knowledge on algorithmic fairness in AI, clinical decision support systems, and ranking and selection algorithms, as these underpin the paper's methodology and evaluation metrics. Then, focus on the core concept of large language models in healthcare to grasp the application context. Finally, review the authors' own talks or closely related expert presentations to connect all foundational knowledge directly to the paper's contributions and findings.

### Algorithmic fairness in AI *(prerequisite)*
This section covers rigorous academic lectures and seminars on fairness metrics and bias detection in AI systems, essential for understanding how demographic biases are measured and analyzed in the paper's evaluation of LLMs. The selected video provides a comprehensive and research-focused treatment of fairness in representation learning, which aligns with the paper's use of multiple fairness metrics.

*How the paper uses it:* Understanding fairness metrics is essential to analyze demographic biases in LLM decisions for organ allocation.

▶ [MedAI #58: Fairness in representation learning | Natalie ...](https://www.youtube.com/watch?v=82uoN0muHto) — Stanford MedAI · 55:29

### Clinical decision support systems *(prerequisite)*
This section introduces clinical decision support systems (CDSS) through university lectures and expert talks, providing context on how AI tools assist complex medical decisions like organ allocation. The chosen lecture offers a detailed academic overview of CDSS, which is crucial for appreciating the clinical environment and challenges the paper addresses.

*How the paper uses it:* Contextualizes how AI tools assist complex medical decisions like organ allocation.

▶ [Unit 5: Clinical Decision Support Systems Lecture A](https://www.youtube.com/watch?v=_1ub86XvuAc) — Dr Chris Paton - Digital Health, Informatics & AI · 17:02

### Ranking and selection algorithms *(prerequisite)*
This section focuses on advanced academic talks about ranking and selection algorithms, foundational for understanding the paper's Choose-One and Rank-All tasks. The selected video is a university-level lecture that rigorously covers ranking methods, directly relevant to the paper's evaluation of LLM ranking stability and fairness.

*How the paper uses it:* Core to understanding the Choose-One and Rank-All tasks evaluated in the paper.

▶ [Introduction to Ranking Methods](https://www.youtube.com/watch?v=L6SrQlWtARM) — Statistical Learning Group · 11 years ago

### Large language models in healthcare
This section presents advanced talks on the application of large language models in healthcare, providing insight into how LLMs are adapted and evaluated in clinical contexts. The chosen video is a university-level seminar that discusses foundation models and LLMs in healthcare, aligning well with the paper's focus on LLM use in kidney organ allocation.

*How the paper uses it:* Central to grasping how LLMs are applied and evaluated in clinical organ allocation.

▶ [Lecture 1.1.4 | Healthcare AI: Foundation Models, LLMs ...](https://www.youtube.com/watch?v=z8rm6GB7Yr8) — Universal Digital Health · 17:59

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's evaluation of large language models (LLMs) for fair and reliable kidney organ allocation. We start with the basics of algorithmic fairness to grasp how demographic biases are measured, then cover clinical decision support systems to contextualize AI in medical decisions, followed by ranking and selection algorithms to understand the paper's tasks. Finally, we explore the core application of LLMs in healthcare, culminating in an author talk to see the paper's specific evaluation approach.

### Algorithmic fairness in AI *(prerequisite)*
Learn what algorithmic fairness means and how it is measured using metrics like demographic parity and equality of opportunity. This helps understand how AI models can unintentionally discriminate against certain groups and how to detect such biases.

*How the paper uses it:* The paper uses multiple fairness metrics to analyze demographic biases in LLM decisions for organ allocation.

▶ [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — A Data Odyssey · 5:46

### Clinical decision support systems *(prerequisite)*
Understand how AI tools assist clinicians by providing recommendations or insights to support complex medical decisions. This context is essential to appreciate the challenges and stakes involved in using LLMs for organ allocation.

*How the paper uses it:* The paper evaluates LLMs as clinical decision support tools for kidney organ allocation, a high-stakes medical task.

▶ [Clinical Decision Support Overview Animation](https://www.youtube.com/watch?v=pTh0IGCltvc) — Philips Healthcare · 3 years ago

### Ranking and selection algorithms *(prerequisite)*
Get introduced to algorithms that select or rank items based on criteria, including how to choose the best candidate or order all candidates. This is key to understanding the paper's two tasks: Choose-One and Rank-All.

*How the paper uses it:* The paper evaluates LLMs on tasks that require selecting one candidate or ranking all candidates for kidney allocation.

▶ [Introduction to Ranking Methods](https://www.youtube.com/watch?v=L6SrQlWtARM) — Statistical Learning Group · 11 years ago

### Large language models in healthcare
Explore how large language models are applied in healthcare settings, including their capabilities and limitations in answering medical questions and supporting clinicians.

*How the paper uses it:* The paper assesses state-of-the-art LLMs for their ability to make medically sound and fair organ allocation decisions.

▶ [Large Language Models for Health 101](https://www.youtube.com/watch?v=b88FZYNJdIk) — Stanford HAI · 3 years ago

### Paper authors talk *(the paper's own talk)*
Hear directly from the authors about their methodology, findings, and implications of evaluating LLMs for kidney organ allocation, providing a focused summary of the paper's contributions.

*How the paper uses it:* This talk covers the paper's evaluation approach, fairness analysis, and key results on LLM performance in organ allocation.

▶ [LLM Evaluation Basics: Datasets & Metrics](https://www.youtube.com/watch?v=1jReCwBgM84) — Generative AI at MIT · 3 years ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [MIT 6.S191: AI Bias and Fairness](https://www.youtube.com/watch?v=wmyVODy_WD8) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)
- [Inherent Trade-Offs in Algorithmic Fairness](https://www.youtube.com/watch?v=p5yY2MyTJXA) — also for: Optimal Fair Learning Robust to Adversarial Distribution Shift (Ravi Sundaram)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Evaluating Large Language Models for Fair and Reliable Organ Allocation." The beginner project reproduces a core fairness metric on synthetic data to grasp demographic parity concepts. The intermediate project implements the paper's core evaluation method on a public transplant-related dataset, comparing LLM-inspired viability scoring against a baseline. The advanced project extends the paper by incorporating temporal dynamics into fairness evaluation, addressing a key limitation and exploring improved prompting strategies for consistent fairness across tasks.

### Beginner — Fairness Metric Visualization for Organ Allocation Selection
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simplified Choose-One organ allocation scenario with synthetic candidate demographic data. You implement and visualize the proportional parity fairness metric used in the paper to detect demographic selection disparities.

**Why it shows you understood the paper:** This project shows you understand the fairness metric concepts and how demographic biases can be quantified in selection tasks, a key contribution of the paper.

**Grounded in:** Highlighting the need for multiple complementary fairness metrics to detect nuanced biases.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas, numpy

**Data:** Synthetic candidate demographic and selection data generated to mimic organ allocation scenarios described in the paper.

**Build it:**

1. Generate a synthetic dataset of candidates with demographic attributes (e.g., race, gender) and simulated selection outcomes.
2. Implement the proportional parity fairness metric as defined in the paper for the Choose-One task.
3. Create visualizations (bar charts, parity ratios) to show demographic group selection proportions versus population proportions.
4. Write a README explaining the metric, its significance, and how the visualization reveals potential biases.

**Ships as:** A Jupyter notebook with code and plots demonstrating proportional parity fairness metric on synthetic organ allocation data, plus a README explaining the metric and results.

**Stretch goal:** Add another fairness metric from the paper (e.g., rND) and compare how it reveals different bias aspects.

### Intermediate — LLM-Inspired Kidney Candidate Viability Scoring and Fairness Evaluation
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core evaluation method by building a pipeline that scores kidney transplant candidates for viability using a simplified LLM-inspired rule-based model on a public kidney transplant dataset (e.g., UNOS or a substitute). You then apply the paper's fairness metrics (proportional parity, rND) to analyze demographic biases in selection and ranking.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method of viability assessment and fairness evaluation on real-world-like data, showing comprehension of both clinical reasoning and fairness metrics.

**Grounded in:** Systematic evaluation of LLMs on kidney allocation using real patient and organ data.

**Tech stack:** Python 3.11, pandas, scikit-learn, Jupyter Notebook, matplotlib

**Data:** Public kidney transplant candidate dataset (e.g., UNOS public data or a similar transplant dataset) used as a substitute for the OPTN data in the paper.

**Build it:**

1. Obtain and preprocess a public kidney transplant candidate dataset with demographic and clinical features.
2. Implement a simplified rule-based viability scoring function inspired by the paper's LLM viability criteria.
3. Simulate Choose-One and Rank-All tasks by selecting or ranking candidates based on scores.
4. Calculate proportional parity and rND fairness metrics on the simulated selections and rankings.
5. Visualize and report demographic disparities and compare with a naive baseline (e.g., random selection).
6. Document the methodology, results, and limitations in a README.

**Ships as:** A Python project with scripts/notebooks that score candidates, perform selection/ranking, compute fairness metrics, and visualize demographic bias, with clear documentation.

**Stretch goal:** Incorporate a simple prompting or fine-tuning simulation to improve viability scoring accuracy and observe fairness metric changes.

### Advanced — Dynamic Fairness Evaluation and Prompting Strategies for LLMs in Organ Allocation
*Effort: 3+ weeks*

You develop an extended evaluation framework that incorporates temporal dynamics of organ allocation decisions, addressing the paper's limitation of static evaluation. You simulate sequences of allocation events over time, implement improved prompting strategies for LLMs to ensure consistent fairness across Choose-One and Rank-All tasks, and analyze resulting fairness metrics longitudinally.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by modeling the temporal nature of organ allocation and exploring how prompting affects fairness consistency, demonstrating deep engagement with the paper's challenges and contributions.

**Grounded in:** Static evaluation does not capture the dynamic, temporal nature of real-world organ allocation. Future direction: Incorporate additional clinical features and dynamic temporal factors in evaluation. Develop improved prompting or fine-tuning strategies to enhance LLM clinical reasoning accuracy.

**Tech stack:** Python 3.11, pandas, numpy, Jupyter Notebook, matplotlib, OpenAI API or Anthropic Claude API (if accessible)

**Data:** Synthetic or public transplant candidate data extended with simulated temporal arrival and organ availability events to mimic dynamic allocation scenarios.

**Build it:**

1. Design a simulation of organ allocation over time with candidate arrivals, organ availability, and allocation events.
2. Implement baseline LLM prompting strategies for candidate viability scoring and selection/ranking tasks.
3. Develop improved prompting or few-shot strategies to reduce demographic preference inversion between tasks.
4. Compute fairness metrics (proportional parity, rND, exposure-based) longitudinally across allocation events.
5. Analyze ranking stability and demographic bias evolution over time.
6. Document findings, limitations, and potential clinical implications.

**Ships as:** A comprehensive codebase and report demonstrating dynamic fairness evaluation, improved prompting strategies, and analysis of temporal fairness consistency in LLM-driven organ allocation.

**Stretch goal:** Integrate real LLM API calls with live prompt engineering experiments and compare with rule-based baselines.

_No authors' code or datasets were released for this paper; all projects rely on synthetic data or publicly available transplant datasets as substitutes._
