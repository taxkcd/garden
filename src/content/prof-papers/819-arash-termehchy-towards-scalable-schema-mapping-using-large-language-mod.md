---
title: "819 · Towards Scalable Schema Mapping using Large Language Models — Arash Termehchy"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-arash-termehchy"
source_hash: "57db99bcef3189f38c76d56fa07c668e65d0b2b61d0a8f208ec095f80cdb3227"
sequence: 819
generator: "outreach-garden: managed"
---

# 819 · Towards Scalable Schema Mapping using Large Language Models

## At a glance

- **Professor:** Arash Termehchy
- **Institution:** Oregon State University
- **Paper:** [Towards Scalable Schema Mapping using Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3737412.3743490)
- **Authors:** Christopher Buss, Mahdis Safari, Arash Termehchy, David Maier, Stefan Lee
- **Year:** 2025

## Paper overview

This paper addresses the challenge of integrating data from many diverse and evolving sources, which requires complex and costly schema mappings. It explores how large language models (LLMs) can automate schema mapping tasks to reduce manual effort. The authors propose a bidirectional schema matching pipeline using an open-source LLM that performs competitively with larger proprietary models. They also discuss the difficulties in generating more complex schema mappings and outline future research directions.

### Why it matters

**Research problem:** Data integration systems face scalability problems due to the complexity of schema mappings, the large number of data sources, and frequent changes in sources that disrupt mappings. Manual creation and maintenance of these mappings are resource-intensive and costly.

**Why it matters:** Effective data integration is crucial for connecting information from diverse sources, such as biomedical data for drug repurposing. High maintenance costs and complexity hinder timely discoveries and system scalability.

**Key contributions:**

- Proposed a bidirectional schema matching pipeline leveraging stable matching and confidence scoring without additional training.
- Demonstrated that an open-source LLM can outperform larger proprietary models in schema alignment tasks.
- Highlighted challenges in generating complex GLaV schema mappings with LLMs and provided preliminary empirical results.
- Introduced techniques for robustness such as input permutation, resampling, and source-target swapping.
- Provided a detailed evaluation on clinical (MIMIC-OMOP) and synthetic datasets with precision, recall, and F1 metrics.

## About the professor

**Arash Termehchy** — Associate Professor, Electrical Engineering and Computer Science, Oregon State University.

Research interests: Reasoning and ML on raw data, reasoning and ML on structured data, scalable and robust ML, data systems, and human-data interaction.

### Research links

- [Faculty/profile page](https://engineering.oregonstate.edu/about/people/arash-termehchy)
- [Lab website](https://research.engr.oregonstate.edu/idea/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** schema matching and data integration
**The paper assumes:** schema matching algorithms, data integration principles, and schema mapping formalisms
**Already in this field?** Skip this entirely if you have prior coursework or experience in database schema matching and data integration systems.

To understand the challenges and methods in scalable schema mapping and data integration as presented in the paper, a solid grasp of schema matching principles, data integration frameworks, and foundational database concepts is essential. The rigorous course option offers a structured, in-depth academic treatment of database modeling and querying, while the fast track provides a concise, practical introduction to data integration and ETL processes. Choose the rigorous lane for deep theoretical understanding and the fast track for a quick, applied overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mastering Oracle Data Integrator (ODI)](https://www.youtube.com/playlist?list=PL2U7IM7bsFmQYBnSZEVSaGe962SF0ZKR_) — Compass · 8 videos · 0.5h across 8 episodes

**Watch only this:** Episodes 1-4 (Mastering Oracle Data Integrator (ODI), ODI - Data integration usage scenarios, ODI Product Overview, Oracle Data Integrator (ODI) product architecture), about 12 minutes — these episodes introduce key concepts and architecture relevant to schema mapping and integration.

*Why it unblocks this paper:* The 'Mastering Oracle Data Integrator (ODI)' playlist provides a concise and practical introduction to data integration and ETL processes, directly relevant to the paper's focus on automating schema mappings in data integration systems.

*If you want all of it:* All 8 episodes, about 30 minutes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Towards Scalable Schema Mapping using Large Language Models,' start by building foundational knowledge on data integration systems and stable matching algorithms, which underpin the paper's approach. Then, explore the theoretical challenges of query equivalence and consistency in databases, crucial for the paper's discussion on complex GLaV mappings. Finally, focus on the core concept of schema mapping with large language models, emphasizing the authors' novel bidirectional schema matching pipeline leveraging LLMs.

### Data Integration Systems *(prerequisite)*
This section covers the foundational challenges and goals of integrating heterogeneous data sources, which is the broader problem context motivating the paper. Understanding data integration systems provides insight into why scalable and automated schema mapping is critical.

*How the paper uses it:* The paper addresses scalability challenges in data integration systems due to complex schema mappings and evolving data sources.

▶ [Data Integration Methods and Visualization | 2021 EMSL Summer School](https://www.youtube.com/watch?v=Yhf_Q0yGzSM) — Environmental Molecular Sciences Laboratory (EMSL) · 56:05 · 5y ago

### Stable Matching Algorithms *(prerequisite)*
Stable matching algorithms are key to the paper's bidirectional schema matching pipeline, providing a principled way to aggregate matching candidates. This section explains the Gale-Shapley algorithm and stable matching theory in depth.

*How the paper uses it:* The paper uses stable matching aggregation to improve precision and recall in schema alignment without additional training.

▶ [Algorithms - Lecture 26: Stable Matching](https://www.youtube.com/watch?v=KasB3L2HYek) — Algos Lecture · 51:27 · 12y ago

### Query Equivalence and Consistency in Databases *(prerequisite)*
This section delves into the theoretical challenges of determining when two database queries are equivalent, a critical problem for generating and verifying complex GLaV schema mappings. It covers query optimization and equivalence rules relevant to the paper's limitations and future directions.

*How the paper uses it:* The paper highlights the difficulty of measuring consistency and query equivalence in complex GLaV mappings generated by LLMs.

▶ [DB1 — Chapter #02 — Video #004 — JSONiq and Query Equivalence, Data Model Tabular, CSV, PyQL](https://www.youtube.com/watch?v=IkQDKd84iI0) — Database Systems Research Group at U Tübingen · 1:22:10 · 4y ago

### Schema Mapping with Large Language Models
This core section focuses on the use of large language models to automate and scale schema mapping tasks, the central method proposed by the paper. It explains how LLMs can be prompted and leveraged for reasoning-based schema alignment.

*How the paper uses it:* The paper proposes a novel bidirectional schema matching pipeline using an open-source LLM to automate schema mapping competitively.

▶ [How LLM Works? Simplified Self Attention | Deep Learning](https://www.youtube.com/watch?v=gsyTL1cq_4o) — Gate Smashers · 18:03 · 4mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand scalable schema mapping using large language models (LLMs). It starts with the basics of data integration systems to grasp the challenges of combining diverse data sources, then explains stable matching algorithms which are key to the paper's bidirectional schema matching approach. Next, it covers query equivalence and consistency, a critical theoretical challenge in generating complex schema mappings. Finally, it presents how LLMs are applied to automate schema mapping, directly connecting to the paper's core contributions.

### Data Integration Systems *(prerequisite)*
Learn what data integration is, why it matters, and the common challenges when combining data from multiple heterogeneous sources. This foundation helps understand the problem the paper aims to solve—scalable and robust schema mapping for diverse and evolving data.

*How the paper uses it:* The paper addresses scalability and complexity challenges in data integration systems caused by diverse and changing data sources.

▶ [What Is Data Integration? Simplified](https://www.youtube.com/watch?v=KBI_Mf5FlHs) — Hurree · 6:18 · 5y ago

### Stable Matching Algorithms *(prerequisite)*
Stable matching algorithms solve problems where two sets of elements must be paired without conflicts, ensuring a stable outcome. Understanding this algorithm is crucial because the paper uses stable matching to aggregate schema matching results bidirectionally, improving accuracy.

*How the paper uses it:* The paper leverages stable matching to aggregate LLM outputs for bidirectional schema matching without additional training.

▶ [2.11.1 Stable Matching: Video](https://www.youtube.com/watch?v=RE5PmdGNgj0) — MIT OpenCourseWare · 11:20 · 10y ago

### Query Equivalence and Consistency in Databases *(prerequisite)*
Query equivalence means two queries produce the same results even if they look different, which is important for verifying complex schema mappings. Consistency ensures that generated mappings do not contradict each other. These concepts are foundational for understanding the challenges in generating and validating complex Global-Local-as-View (GLaV) mappings discussed in the paper.

*How the paper uses it:* The paper highlights difficulties in reliably generating complex GLaV mappings due to challenges in query equivalence and consistency checking.

▶ [Query Optimization: Equivalent Expressions and Simple Equivalance Rules](https://www.youtube.com/watch?v=oSXEQXXsIfw) — Fundamentals of database systems · 12:42 · 11y ago

### Schema Mapping with Large Language Models
This section explains how large language models (LLMs) can be used to automate schema mapping tasks by understanding and generating schema alignments. It covers the core idea of using LLMs with reasoning-based prompting to reduce manual effort and improve scalability, directly reflecting the paper's main approach.

*How the paper uses it:* The paper proposes a bidirectional schema matching pipeline using an open-source LLM to automate and scale schema mapping tasks.

▶ [How LLM Works? Simplified Self Attention | Deep Learning](https://www.youtube.com/watch?v=gsyTL1cq_4o) — Gate Smashers · 18:03 · 4mo ago

## Already in your library

- [Scalability Simply Explained in 10 Minutes](https://www.youtube.com/watch?v=EWS_CIxttVw) — also for: Scalability and Efficiency of Push-Driven P2PTV Systems (Sugih Jamin)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [How LLMs Works? - Overview](https://www.youtube.com/watch?v=K45s2PgywvI) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — also for: Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI (Adam Perer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Towards Scalable Schema Mapping using Large Language Models." The beginner project recreates a core robustness technique from the paper using familiar tools. The intermediate project implements the paper's bidirectional schema matching pipeline on a substitute dataset and compares it to a simple baseline. The advanced project tackles one of the paper's open challenges by exploring methods to improve query equivalence checking for complex schema mappings, extending the paper's future directions.

### Beginner — Robustness Techniques for Schema Matching with LLMs
*Effort: a weekend, ~8 hours*

You build a small prototype that demonstrates input permutation and symmetric transformations to improve robustness of schema matching prompts to an LLM. Using a simple schema matching task with a small set of synthetic schema pairs, you apply random column order permutations and source-target swapping before querying an open-source LLM (e.g., Meta-Llama-3.1-70B-Instruct-GPTQ-INT4 or a substitute).

**Why it shows you understood the paper:** This project shows you understand the paper's approach to improving robustness by altering input formatting without changing the underlying task, a key contribution to stable schema matching with LLMs.

**Grounded in:** Robustness is improved by input permutations and symmetric transformations.

**Tech stack:** Python 3.11, OpenAI-compatible LLM API or local LLM inference, Jupyter Notebook

**Data:** Synthetic schema pairs created by you to simulate simple schema matching tasks, as no public dataset is provided.

**Build it:**

1. Create a small set of synthetic source and target schema pairs with columns and types.
2. Implement functions to randomly permute column order and swap source and target schemas.
3. Write prompts that query an open-source LLM to perform schema matching on these inputs.
4. Run experiments comparing matching results with and without input permutations and swapping.
5. Analyze and report the impact of these robustness techniques on matching consistency.

**Ships as:** A Jupyter Notebook demonstrating the effect of input permutations and symmetric transformations on schema matching results with an LLM, including example prompts and analysis.

**Stretch goal:** Add confidence scoring by querying the LLM to select the best match among candidates and measure logits as in the paper.

### Intermediate — Bidirectional Schema Matching Pipeline with Open-Source LLM
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core bidirectional schema matching pipeline using an open-source LLM on a publicly available substitute clinical dataset (e.g., a small subset of MIMIC or a synthetic clinical schema). You replicate the stable matching aggregation and confidence scoring techniques to generate schema alignments and compare your results against a simple baseline such as majority voting or a naive string similarity matcher.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method from its description, apply it to real or substitute data, and evaluate it with precision, recall, and F1 metrics, showing comprehension of the pipeline and evaluation.

**Grounded in:** Proposed a bidirectional schema matching pipeline leveraging stable matching and confidence scoring without additional training.

**Tech stack:** Python 3.11, Open-source LLM (Meta-Llama-3.1-70B-Instruct-GPTQ-INT4 or similar), scikit-learn for evaluation metrics, Jupyter Notebook or Python scripts

**Data:** A small clinical dataset with source and target schemas, either a public substitute dataset or synthetically generated to mimic MIMIC-OMOP schema pairs.

**Build it:**

1. Prepare or obtain a small clinical schema dataset with source-target pairs.
2. Implement the bidirectional matching pipeline: prompt the LLM for source-to-target and target-to-source matches.
3. Implement stable matching aggregation to combine bidirectional outputs.
4. Add confidence scoring by querying the LLM to select best matches and measure logits.
5. Implement a simple baseline matcher (e.g., string similarity or majority voting).
6. Evaluate and compare the pipeline and baseline using precision, recall, and F1.

**Ships as:** A Python project with scripts or notebooks that run the bidirectional matching pipeline on clinical schema data, compare to baseline, and report evaluation metrics with analysis.

**Stretch goal:** Incorporate input filtering and resampling techniques to improve robustness and analyze their effect on performance.

### Advanced — Improving Query Equivalence Checking for Complex GLaV Mappings
*Effort: a few weeks, ~40+ hours*

You develop a prototype system that explores strategies for query equivalence checking and consistency verification of complex Global-Local-as-View (GLaV) schema mappings generated by LLMs. Using an open-source LLM, you generate multi-relation SQL queries representing GLaV mappings on a small synthetic or public relational schema dataset. You then implement or integrate heuristic equivalence checking methods (e.g., canonicalization, query rewriting, or approximate matching) to assess consistency of generated queries, addressing a key limitation identified in the paper.

**Why it shows you understood the paper:** This project tackles one of the paper's main open challenges and future directions, demonstrating deep comprehension of the difficulties in generating and verifying complex schema mappings with LLMs and contributing a novel exploration toward scalable, reliable GLaV mapping.

**Grounded in:** Challenges remain in reliably generating complex GLaV mappings due to query equivalence and input filtering issues.

**Tech stack:** Python 3.11, Open-source LLM (Meta-Llama-3.1-70B-Instruct-GPTQ-INT4 or similar), SQL parsing libraries (e.g., sqlparse), Jupyter Notebook or Python scripts

**Data:** Synthetic relational schemas designed to support multi-relation SQL queries for GLaV mappings, as no public dataset is provided.

**Build it:**

1. Design or obtain a small relational schema dataset suitable for GLaV mappings.
2. Use an open-source LLM to generate multi-relation SQL queries representing GLaV mappings from schema pairs.
3. Implement or integrate heuristic methods for query equivalence checking (e.g., canonicalization, query normalization).
4. Develop consistency measures to compare multiple generated queries for equivalence or overlap.
5. Evaluate the effectiveness of equivalence checking methods on generated queries.
6. Document challenges and potential improvements for future work.

**Ships as:** A Python project demonstrating generation of complex GLaV SQL mappings with an LLM and heuristic query equivalence checking, including analysis of consistency and limitations.

**Stretch goal:** Extend the system to incorporate input filtering and confidence aggregation to improve generation quality and verification.

_The paper's authors have not released code or datasets; all projects require synthetic or public substitute data and reimplementation of methods from the paper's descriptions._
