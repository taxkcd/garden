---
title: "213 · BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks — Sara Mostafavi"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sara-mostafavi"
source_hash: "ba25cdf51fcbb3e165c1dd4460d1a5d790e05b34394fffc22dde7849646269ae"
sequence: 213
generator: "outreach-garden: managed"
---

# 213 · BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks

## At a glance

- **Professor:** Sara Mostafavi
- **Institution:** University of Washington
- **Paper:** [BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks](https://arxiv.org/abs/2604.24955)
- **Authors:** Xinming Tu, Kexin Huang, Tianze Wang, Yuanhao Qu, Yingzhou (Minta) Lu, Sara Mostafavi
- **Year:** 2026

## Paper overview

This paper introduces BENCHGUARD, the first automated framework that uses large language models (LLMs) to audit the integrity and correctness of complex benchmarks designed to evaluate AI agents. It identifies errors in benchmark tasks that can mislead performance assessments, even in benchmarks previously validated by human experts. BENCHGUARD cross-verifies all components of execution-based benchmarks, such as instructions, reference solutions, evaluation scripts, and environment configurations, to detect inconsistencies and defects efficiently and cost-effectively.

### Why it matters

**Research problem:** Execution-based benchmarks for evaluating AI agents are complex and prone to hidden errors due to misalignments among instructions, reference solutions, evaluation scripts, and runtime environments. These errors can distort performance measurements and are difficult to detect through traditional human review or dataset-only auditing methods.

**Why it matters:** Reliable benchmarks are essential for accurately measuring AI agent capabilities and guiding research progress. Undetected benchmark defects can lead to incorrect conclusions about model performance, hindering scientific advancement and application development, especially in specialized domains like computational biology.

**Key contributions:**

- Introduced an AI-assisted evaluation paradigm and a taxonomy of benchmark defects with four categories and 14 subcategories.
- Developed BENCHGUARD, the first automated auditing framework for task-oriented, execution-based agent benchmarks, capable of auditing 50 complex tasks for under $15.
- Empirically validated BENCHGUARD on two prominent scientific benchmarks (ScienceAgentBench and BIXBench), uncovering author-confirmed defects and matching or exceeding expert review recall.
- Demonstrated that even multiple rounds of human expert validation can miss critical benchmark defects, highlighting the value of automated auditing as a complement to human review.
- Provided an open-source framework and standardized ingestion format to facilitate community adoption and integration into benchmark development pipelines.

## About the professor

**Sara Mostafavi** — Associate Professor, Computer Science & Engineering, University of Washington.

Research interests: machine learning, statistical methods, biology, human health, disease

### Research links

- [Faculty/profile page](https://www.cs.washington.edu/people/faculty/sara-mostafavi/)
- [Identity evidence](http://saramostafavi.github.io)
- [Identity evidence](http://saramostafavi.github.io/)
- [Resolved homepage](https://www.cs.washington.edu/people/faculty/sara-mostafavi)
- [Google Scholar](https://scholar.google.ca/citations?user=nBL0J6kAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand BENCHGUARD and its contributions, start by exploring foundational concepts such as how large language models (LLMs) can be used for auditing AI systems, the principles of benchmark evaluation metrics, and the technique of cross-artifact consistency verification. These prerequisites provide the necessary background on automated auditing, benchmark reliability, and verification methods. Finally, focus on the core concept of execution-based benchmark auditing and the authors' own talk to gain direct insight into BENCHGUARD's novel framework and empirical results.

### large language models auditing *(prerequisite)*
This section covers how LLMs are employed as automated auditors, a foundational idea for BENCHGUARD's approach. Understanding the challenges and methodologies in auditing LLMs themselves provides context for using LLMs to audit benchmarks. The selected seminar from CITP Princeton offers a rigorous academic treatment suitable for advanced readers.

*How the paper uses it:* BENCHGUARD leverages frontier LLMs as systematic auditors to detect benchmark defects.

▶ [CITP Seminar Jakob Mökander - Auditing Large Language ...](https://www.youtube.com/watch?v=CIfdyURrv0k) — CITP Princeton · 46:32

### benchmark evaluation metrics *(prerequisite)*
This section explains how AI benchmarks measure agent performance, which is critical to appreciate why benchmark integrity matters. The Stanford CME295 lecture provides a comprehensive and research-level overview of benchmark design and pitfalls, including issues like Goodhart's law that relate to BENCHGUARD's motivation.

*How the paper uses it:* Reliable benchmark evaluation metrics are essential to accurately assess AI agent capabilities, a key concern addressed by BENCHGUARD.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — Stanford Online · 1:49:25

### cross-artifact consistency verification *(prerequisite)*
Cross-artifact consistency verification is a key technique BENCHGUARD uses to detect mismatches among benchmark components such as instructions, code, and environments. The MIT 6.824 lecture on consistency provides a rigorous foundation in consistency verification principles relevant to BENCHGUARD's multi-artifact auditing protocol.

*How the paper uses it:* BENCHGUARD treats benchmark auditing as a cross-artifact consistency problem to identify defects.

▶ [Lecture 18: Fork Consistency, Certificate Transparency](https://www.youtube.com/watch?v=UKdLJ7-0iFM) — MIT 6.824: Distributed Systems · 1:13:40 · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand BENCHGUARD, starting with how large language models (LLMs) can be used for auditing, then covering how AI benchmarks measure performance, followed by techniques for verifying consistency across benchmark components, and concluding with the core method of execution-based benchmark auditing. Each step builds intuition with clear, concise videos that explain the concepts as applied in the paper's context.

### large language models auditing *(prerequisite)*
Learn how large language models can be used as automated auditors to detect errors, biases, and inconsistencies in AI systems. This foundational knowledge explains the capabilities and limitations of LLMs in auditing tasks, which is central to BENCHGUARD's approach.

*How the paper uses it:* BENCHGUARD uses frontier LLMs as systematic auditors to detect benchmark defects automatically.

▶ [CITP Seminar Jakob Mökander - Auditing Large Language ...](https://www.youtube.com/watch?v=CIfdyURrv0k) — CITP Princeton · 46:32

### benchmark evaluation metrics *(prerequisite)*
Understand how AI benchmarks measure model performance using various metrics and datasets. This knowledge helps grasp why reliable benchmarks are crucial and how defects can distort performance assessments.

*How the paper uses it:* BENCHGUARD aims to ensure the integrity of benchmarks that evaluate AI agent capabilities accurately.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — Stanford Online · 1:49:25

### cross-artifact consistency verification *(prerequisite)*
Explore techniques for verifying consistency across different software artifacts like instructions, code, and environment configurations. This concept is key to detecting mismatches that cause benchmark errors.

*How the paper uses it:* BENCHGUARD audits cross-artifact consistency among instructions, reference solutions, evaluation scripts, and environment setups.

▶ [Software Artifacts Explained: What They Are, Why They Matter, and How to Manage Them](https://www.youtube.com/watch?v=17sctG_Xdds) — Harness · 5:10 · 1 year ago

### execution-based benchmark auditing
Learn the core method of systematically verifying all components of execution-based benchmarks to detect defects efficiently. This includes auditing instructions, ground-truth programs, evaluation scripts, and environment configurations.

*How the paper uses it:* BENCHGUARD is the first automated framework to audit complex execution-based AI agent benchmarks end-to-end.

▶ [ChatGPT for Data Analysis in Excel: Case Study | Course ...](https://www.youtube.com/watch?v=CEmLJ5a5kKY) — Corporate Finance Institute · 9:23
