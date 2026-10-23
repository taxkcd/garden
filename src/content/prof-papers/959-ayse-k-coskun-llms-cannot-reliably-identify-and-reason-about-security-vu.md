---
title: "959 · LLMs Cannot Reliably Identify and Reason About Security Vulnerabilities (Yet?): A Comprehensive Evaluation, Framework, and Benchmarks — Ayse K. Coskun"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ayse-k-coskun"
source_hash: "e18750cfc71185d7e5c7ea9037ea11159e2f676708dedb124f6d202f2e5df10c"
sequence: 959
generator: "outreach-garden: managed"
---

# 959 · LLMs Cannot Reliably Identify and Reason About Security Vulnerabilities (Yet?): A Comprehensive Evaluation, Framework, and Benchmarks

## At a glance

- **Professor:** Ayse K. Coskun
- **Institution:** Boston University
- **Paper:** [LLMs Cannot Reliably Identify and Reason About Security Vulnerabilities (Yet?): A Comprehensive Evaluation, Framework, and Benchmarks](https://arxiv.org/pdf/2312.12575)
- **Authors:** Saad Ullah, Mingji Han, Saurabh Pujar, Hammond Pearce, Ayse Coskun
- **Year:** 2024

## Paper overview

This paper evaluates whether large language models (LLMs) can reliably detect and reason about security vulnerabilities in code. The authors develop SecLLMHolmes, an automated framework that tests eight state-of-the-art LLMs on 228 code scenarios, including hand-crafted, real-world, and augmented examples. The study finds that current LLMs often give inconsistent, incorrect, or unfaithful answers and struggle with real-world code and minor code changes. Thus, LLMs are not yet ready to be trusted as general-purpose security assistants.

### Why it matters

**Research problem:** Can large language models be used as reliable security assistants for automated detection and reasoning about software vulnerabilities in source code?

**Why it matters:** Security vulnerabilities in software are often missed or detected too late by human developers, leading to significant risks. Automated tools that can accurately identify vulnerabilities early could improve software security and reduce human error. LLMs have shown promise in programming tasks but their reliability in security vulnerability detection is unclear and unproven.

**Key contributions:**

- Development of SecLLMHolmes, a comprehensive automated framework and benchmark dataset for evaluating LLMs on vulnerability detection and reasoning.
- Systematic evaluation of eight state-of-the-art LLMs on 228 diverse code scenarios covering critical vulnerabilities.
- Identification of key shortcomings in current LLMs including non-deterministic outputs, incorrect reasoning, high false positive rates, and poor robustness to trivial code changes.
- Provision of a publicly released dataset and framework to enable future research and benchmarking in this area.
- Detailed analysis of prompting techniques and their impact on LLM performance.

## About the professor

**Ayse K. Coskun** — Professor (ECE, SE Affiliate); Associate Dean for Research and Faculty Development, Director, Center for Information and Systems Engineering, Electrical & Computer Engineering, Systems Engineering, Boston University.

Research interests: design automation, computer architecture, and embedded systems, particularly focusing on energy efficiency, thermal challenges, and using ML-powered analytics for system management

### Research links

- [Faculty/profile page](https://www.bu.edu/eng/profile/ayse-coskun)
- [Professor website](http://www.bu.edu/dbin/ece/people/acoskun/)
- [Resolved homepage](http://www.bu.edu/peaclab/)
- [Lab website](http://www.bu.edu/systems/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=euIQ_RkAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Code Analysis
**The paper assumes:** machine learning for source code analysis, neural language models for programming languages, and automated vulnerability detection
**Already in this field?** Skip this entirely if you already understand how machine learning models are trained and applied specifically to analyze and generate source code.

This background selection supports understanding the machine learning techniques applied to code analysis, specifically how large language models process and reason about source code for vulnerability detection. The rigorous course provides a deep, structured foundation in neural networks and transformers relevant to code and language modeling, while the fast track offers a concise, practical introduction to core machine learning concepts for those with limited time. Choose the rigorous course for comprehensive depth and the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Neural Networks for Computer Vision and Natural Language Processing](https://www.youtube.com/playlist?list=PLwdnzlV3ogoXxAPrZzNzJataqIPzGaD-9) — NPTEL IIT Guwahati · 49 videos · 30.4h across the first 48 episodes

**Watch only this:** Lectures 33 to 38 (Transormers - I, Transormers - II, Large Language Model - I, Large Language Model - II, Encoder only Transformer Model, Decoder only Transformer Model), about 3.8 hours — these cover the core transformer architectures and LLM concepts essential for grasping the paper's methodology.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course covers foundational and advanced topics in neural networks and transformers, including large language models, which are directly relevant to understanding the ML methods used in the paper's evaluation of LLMs on code vulnerability detection.

*If you want all of it:* About 30.4 hours across the first 48 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Machine Learning Tutorial | Sinhala](https://www.youtube.com/playlist?list=PL495mke12zYDHN9ONfcal1eQfo8VqmOgu) — CodePRO LK · 46 videos · 11.6h across 46 episodes

**Watch only this:** Episodes 2 to 14 (Machine Learning Introduction, Supervised Learning and Unsupervised Learning, Reinforcement Learning, Linear Regression, Implement Linear Regression Model Using Python, Cost Function and Gradient Descent, Train Test Split in Machine Learning, Evaluate Regression Models, Logistic Regression, Implement Logistic Regression Using Python, Underfitting and Overfitting, One Hot Encoding in Machine Learning, What is Confusion Matrix?), about 3.5 hours — these episodes cover core ML concepts and evaluation metrics useful for interpreting LLM performance.

*Why it unblocks this paper:* This Sinhala Machine Learning tutorial series offers clear, concise explanations of fundamental machine learning concepts including supervised learning, model evaluation, and algorithms, providing a practical and accessible introduction to ML principles relevant for understanding LLM behavior on code.

*If you want all of it:* About 11.6 hours across 46 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on evaluating LLMs for security vulnerability detection, start with foundational knowledge on software security vulnerability detection methods and the application of large language models to code analysis. Then, explore robustness and reliability challenges in AI systems, which are central to the paper's findings on LLM non-determinism and sensitivity. Finally, focus on the paper's core contribution by watching the authors' own talk and related expert presentations on using LLMs for vulnerability discovery.

### Software security vulnerabilities detection *(prerequisite)*
This section covers advanced university-level lectures and research talks on automated vulnerability detection techniques, including AI and deep learning approaches. Understanding these methods provides essential background on the state-of-the-art in vulnerability detection, which the paper evaluates LLMs against.

*How the paper uses it:* The paper evaluates LLMs as automated tools for detecting software vulnerabilities, so grasping existing detection techniques is foundational.

▶ [Adv. LLM Agents MOOC | UC Berkeley Sp25 | Code Agents & AI Vulnerability Detection by Charles Sutton](https://www.youtube.com/watch?v=JCk6qJtaCSU) — Berkeley RDI · 1:27:03 · Streamed 1y ago

### Large language models for code analysis *(prerequisite)*
This section includes research-focused talks on the application of large language models to code understanding and analysis tasks. It provides context on how LLMs are currently used in code-related tasks, setting the stage for their evaluation in vulnerability detection.

*How the paper uses it:* The paper investigates the reliability of LLMs specifically for code vulnerability detection, so understanding their general use in code analysis is critical.

▶ [USENIX Security '24 - Large Language Models for Code Analysis: Do LLMs Really Do Their Job?](https://www.youtube.com/watch?v=lgRGPYz2woY) — USENIX · 1y ago

### Robustness and reliability in AI systems *(prerequisite)*
This section presents advanced academic lectures on AI robustness and reliability, including issues like non-determinism and sensitivity to input changes. These topics directly relate to the paper's findings on LLM behavior in vulnerability detection scenarios.

*How the paper uses it:* The paper identifies non-determinism and sensitivity to trivial code changes as key shortcomings of current LLMs for security tasks.

▶ [Steps Toward Robust Artificial Intelligence: Thomas G Dietterich, Oregon State University](https://www.youtube.com/watch?v=9zH--IngYCQ) — The Alan Turing Institute · 8y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features talks by the paper authors or closely related expert presentations that provide direct insights into the evaluation of LLMs for vulnerability detection. These talks offer the most precise and detailed understanding of the paper's methodology, results, and implications.

*How the paper uses it:* The authors' own talk gives firsthand explanation of their comprehensive evaluation framework and findings on LLMs' limitations in vulnerability detection.

▶ [Using LLMs For Vulnerability Discovery: Hacking Like Humans (Without Humans) - Jeevan Jutla](https://www.youtube.com/watch?v=CwSXtcRLC_w) — Security BSides London · 7mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the evaluation of large language models (LLMs) for security vulnerability detection, starting with how software vulnerabilities are detected, then how LLMs are applied to code analysis, followed by the challenges of robustness and reliability in AI systems, and concluding with the paper's core contribution of automated evaluation frameworks for LLMs. Each step builds intuition with clear, focused videos to efficiently prepare you to grasp the paper's findings and framework.

### Software security vulnerabilities detection *(prerequisite)*
Learn the basics of how software vulnerabilities are identified and analyzed, including automated and manual techniques. This foundation helps you understand the context in which LLMs are evaluated for detecting security flaws in code.

*How the paper uses it:* The paper evaluates LLMs on their ability to detect critical software vulnerabilities, so understanding traditional vulnerability detection methods is essential.

▶ [Adv. LLM Agents MOOC | UC Berkeley Sp25 | Code Agents & AI Vulnerability Detection by Charles Sutton](https://www.youtube.com/watch?v=JCk6qJtaCSU) — Berkeley RDI · 1:27:03 · Streamed 1y ago

### Large language models for code analysis *(prerequisite)*
Discover how large language models are applied to programming tasks such as code understanding and analysis. This knowledge clarifies the potential and limitations of LLMs when used for vulnerability detection.

*How the paper uses it:* The paper assesses state-of-the-art LLMs specifically for code vulnerability detection and reasoning.

▶ [USENIX Security '24 - Large Language Models for Code Analysis: Do LLMs Really Do Their Job?](https://www.youtube.com/watch?v=lgRGPYz2woY) — USENIX · 1y ago

### Robustness and reliability in AI systems *(prerequisite)*
Understand key challenges in AI like non-determinism and sensitivity to small input changes that affect trustworthiness. These issues directly impact the reliability of LLMs in security-critical applications.

*How the paper uses it:* The paper identifies non-determinism and fragility to trivial code changes as major shortcomings of current LLMs for vulnerability detection.

▶ [Steps Toward Robust Artificial Intelligence: Thomas G Dietterich, Oregon State University](https://www.youtube.com/watch?v=9zH--IngYCQ) — The Alan Turing Institute · 8y ago

### Automated evaluation frameworks for LLMs
Learn about automated frameworks designed to systematically test and benchmark LLMs across multiple dimensions. This helps you appreciate the methodology behind SecLLMHolmes, the framework introduced in the paper.

*How the paper uses it:* SecLLMHolmes is the paper’s novel automated evaluation framework for testing LLMs on security vulnerabilities.

▶ [ARES Audio Deep Dive: Automated Evaluation Framework for RAG Systems](https://www.youtube.com/watch?v=CEL2g1ccXHA) — Latent AI · 10d ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Gain direct insights from the authors discussing their evaluation of LLMs for vulnerability detection and reasoning. This provides context and highlights key findings from the paper in an accessible format.

*How the paper uses it:* Hearing from the authors complements understanding of the paper’s contributions and results.

▶ [Using LLMs For Vulnerability Discovery: Hacking Like Humans (Without Humans) - Jeevan Jutla](https://www.youtube.com/watch?v=CwSXtcRLC_w) — Security BSides London · 7mo ago

## Already in your library

- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 3 - Tranformers & Large Language Models](https://www.youtube.com/watch?v=Q5baLehv5So) — also for: PeerGuard: Defending Multi-Agent Systems Against Backdoor Attacks Through Mutual Reasoning (Xi Li)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=VlA_jt_3Qc4) — also for: On the Entropy Calibration of Language Models (Gregory Valiant)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models LLMs Work Explained | Tokens, Context Windows, Parameters & Training Proce](https://www.youtube.com/watch?v=u523JOz2VaU) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Jun Zhuang)
- [Frontiers in Machine Learning: Machine Learning Reliability ...](https://www.youtube.com/watch?v=JmcIE1zUDIM) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path grounded in the paper's evaluation of LLMs for security vulnerability detection. The beginner project reproduces a simple aspect of the paper's findings on LLM non-determinism using familiar tools. The intermediate project reimplements the core SecLLMHolmes evaluation framework on a subset of vulnerability scenarios to measure LLM accuracy and robustness. The advanced project extends the paper by exploring methods to improve LLM robustness to trivial code changes, addressing a key limitation identified by the authors.

### Beginner — LLM Non-Determinism Analysis on Vulnerability Detection
*Effort: a weekend, ~8 hours*

You build a small script that queries a chosen LLM multiple times on a few hand-crafted vulnerable and patched code snippets, then analyzes the variability in the LLM's binary vulnerability detection outputs. You visualize the inconsistency rates and summarize findings.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's key result that LLMs produce non-deterministic and inconsistent vulnerability detection outputs, a fundamental challenge for trustworthiness.

**Grounded in:** All tested LLMs show significant non-determinism, changing answers across multiple runs even on the same code and prompt.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, Matplotlib or Plotly for visualization

**Data:** A small set of hand-crafted vulnerable and patched C/Python code snippets inspired by the paper's 48 hand-crafted scenarios.

**Build it:**

1. Select 3-5 simple vulnerable code snippets and their patched versions from the paper's hand-crafted examples or create similar ones.
2. Write a Python script to query a chat-based LLM (e.g., GPT-4 or Claude) 10 times per snippet with a fixed prompt asking if the code is vulnerable.
3. Collect and store the LLM's binary answers for each snippet across runs.
4. Calculate inconsistency rates (percentage of runs with differing answers) per snippet.
5. Visualize the inconsistency rates using bar charts.
6. Write a README summarizing the experiment, results, and connection to the paper's findings.

**Ships as:** A GitHub repo containing the querying script, example code snippets, visualization plots, and a README explaining the non-determinism phenomenon in LLM vulnerability detection.

**Stretch goal:** Add reasoning extraction from the LLM responses and analyze if reasoning consistency correlates with answer consistency.

### Intermediate — Reimplementation of SecLLMHolmes Evaluation Framework
*Effort: 2-3 weekends, ~20 hours*

You reimplement a simplified version of the SecLLMHolmes framework to evaluate one or two LLMs on a curated subset of vulnerability scenarios, measuring binary detection accuracy and robustness to minor code changes. You compare results against a simple baseline (e.g., static analysis tool).

**Why it shows you understood the paper:** This project shows you can reproduce the paper's core evaluation methodology and metrics, demonstrating grasp of automated vulnerability detection benchmarking and LLM performance limitations.

**Grounded in:** The authors create SecLLMHolmes, a fully automated, scalable evaluation framework that tests LLMs across eight dimensions such as deterministic response, reasoning quality, robustness to code changes, and real-world applicability.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, GitHub Actions for automation, pytest for testing, a simple static analysis tool like Bandit (for Python) or cppcheck (for C)

**Data:** A curated subset of 20-30 code scenarios from the paper's 228 scenarios, including hand-crafted and augmented examples, recreated based on the paper's descriptions.

**Build it:**

1. Select 20-30 vulnerability scenarios covering at least two CWE types and include augmented variants with minor code changes.
2. Implement a Python evaluation script that queries chosen LLM(s) with multiple prompt templates per scenario to detect vulnerabilities.
3. Implement automated metrics: binary detection accuracy, false positive rate, and robustness to code changes.
4. Integrate a simple static analysis tool as a baseline for comparison on the same scenarios.
5. Run the evaluation and collect results, generating summary tables and plots.
6. Write a detailed README documenting the framework design, evaluation process, results, and comparison to the paper's findings.

**Verified links from the paper:**

- <https://github.com/ai4cloudops/SecLLMHolmes> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the evaluation framework code, scenario dataset, baseline integration, results analysis, and documentation replicating key aspects of SecLLMHolmes.

**Stretch goal:** Add GPT-4-based automated reasoning quality evaluation to assess the faithfulness of LLM explanations.

### Advanced — Improving LLM Robustness to Trivial Code Changes in Vulnerability Detection
*Effort: 3-4 weeks*

You develop and evaluate methods to improve LLM robustness against minor code modifications that degrade detection accuracy, such as variable renaming or safe library function additions. This may include prompt engineering, data augmentation, or fine-tuning on augmented code examples.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating ability to extend research by addressing LLM sensitivity and improving trustworthiness in security tasks.

**Grounded in:** Minor code modifications such as renaming functions or variables or adding safe library functions cause substantial drops in detection accuracy.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, Hugging Face Transformers (for fine-tuning if applicable), PyTorch or TensorFlow, GitHub Actions for CI/CD

**Data:** Use the paper's augmented code scenarios (or recreated approximations) that include trivial code changes causing accuracy drops.

**Build it:**

1. Recreate or obtain a dataset of vulnerable code snippets with trivial code modifications that cause LLM detection failures.
2. Design prompt engineering strategies to explicitly instruct the LLM to ignore irrelevant code changes.
3. Optionally, fine-tune a smaller open-source LLM on augmented code examples to improve robustness.
4. Evaluate the baseline and improved models on detection accuracy and robustness metrics.
5. Analyze results to identify which strategies reduce false positives and inconsistent outputs.
6. Document the methodology, experiments, results, and implications for future LLM-based security tools.

**Verified links from the paper:**

- <https://github.com/ai4cloudops/SecLLMHolmes> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing code for robustness experiments, datasets, evaluation scripts, and a comprehensive report demonstrating improved LLM vulnerability detection stability.

**Stretch goal:** Extend the approach to include reasoning faithfulness improvements by integrating explanation consistency checks.

_The paper's authors did not release their own code or full dataset; the SecLLMHolmes framework code is third-party and partial. Data must be recreated or approximated from the paper's descriptions and public artifacts._
