---
title: "301 · Initial Exploration of Zero-Shot Privacy Utility Tradeoffs in Tabular Data Using GPT-4 — George Traian Amariucai"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-george-traian-amariucai"
source_hash: "40867ee1107554446141b10e7023bcf6271b32afebd21f4b0c844e92b3aaf575"
sequence: 301
generator: "outreach-garden: managed"
---

# 301 · Initial Exploration of Zero-Shot Privacy Utility Tradeoffs in Tabular Data Using GPT-4

## At a glance

- **Professor:** George Traian Amariucai
- **Institution:** Kansas State University
- **Paper:** [Initial Exploration of Zero-Shot Privacy Utility Tradeoffs in Tabular Data Using GPT-4](https://arxiv.org/abs/2404.05047)
- **Authors:** Bishwas Mandal, George Amariucai, Shuangqing Wei
- **Year:** 2024

## Paper overview

This paper explores how large language models, specifically GPT-4, can be used to sanitize tabular datasets to protect sensitive information while preserving useful data. The authors propose a zero-shot prompting method that converts tabular data into text and instructs GPT-4 to distort data to prevent inference of private features but allow inference of utility features. Their approach is compared to existing adversarial optimization methods and shows comparable privacy protection and utility preservation without additional model training.

### Why it matters

**Research problem:** How to effectively sanitize tabular datasets to protect private features from inference attacks by machine learning models while preserving the utility of the data for legitimate tasks, using large language models like GPT-4 in a zero-shot setting.

**Why it matters:** With the rise of large language models and their powerful inference capabilities, there is a growing risk of privacy breaches through inference of sensitive attributes from data. Existing privacy methods focus on protecting training data memorization but not inference privacy. Tabular data is widely used and vulnerable, so developing effective privacy-preserving sanitization methods that maintain data utility is crucial.

**Key contributions:**

- First study to use GPT-4 as a zero-shot sanitization function for tabular data privacy-utility tradeoffs.
- Design of a prompt-based method that requires no additional training and can distort data to protect private features while preserving utility.
- Empirical evaluation showing GPT-4's performance comparable to state-of-the-art adversarial methods in privacy protection and utility retention.
- Analysis of fairness metrics showing GPT-4's limitations in fairness compared to adversarial methods but potential for improvement with prompt design.
- Investigation of supervised vs unsupervised sanitization showing the importance of true labels for effective privacy protection.

## About the professor

**George Traian Amariucai** — Associate Professor, Director of the PITS Lab., Department of Computer Science, Kansas State University.

Research interests: cyber security and its intersections with probability and information theory, applied and theoretical machine learning, control theory, graph theory, wireless communication networks, cryptography, and social sciences

### Research links

- [Faculty/profile page](http://people.cs.ksu.edu/~amariucai)
- [Professor website](http://www.cs.ksu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Privacy in Machine Learning
**The paper assumes:** machine learning privacy, inference attacks, privacy-utility tradeoffs, data sanitization methods
**Already in this field?** Skip this entirely if you already understand core concepts of privacy in machine learning, including inference attacks and privacy-utility tradeoffs.

This background is designed to provide foundational knowledge on privacy in machine learning, focusing on privacy-utility tradeoffs, inference privacy, and data sanitization techniques relevant to the paper's use of GPT-4 for tabular data privacy. The rigorous course offers a deep, structured understanding suitable for thorough preparation, while the fast track provides a concise, accessible introduction to key concepts for quicker comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Data Protection - Privacy and Security](https://www.youtube.com/playlist?list=PLy7-2HDH5IPdLQSl49Ko6iPdbdYBqGc0h) — London Data School · 69 videos · 32.5h across the first 60 episodes

**Watch only this:** Episodes 1-9 ("Privacy and data protection" through "Michael Kearns: Differential Privacy"), about 4.8 hours — these cover foundational privacy concepts, differential privacy basics, and privacy in machine learning, providing essential context for the paper's privacy methods and evaluations.

*Why it unblocks this paper:* This extensive playlist from London Data School covers privacy and data protection comprehensively, including differential privacy, privacy definitions, and practical privacy-preserving AI techniques, directly relevant to understanding privacy-utility tradeoffs and sanitization methods compared in the paper.

*If you want all of it:* About 32.5 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data Analytics in Security and Privacy](https://www.youtube.com/playlist?list=PLMPUUgLIYH1b_XgSfiU9KCFbpaAK7uSy3) — C3 Digital Transformation Institute · 12 videos · 6.2h across 12 episodes

**Watch only this:** Episodes 1-6 ("Welcome and Opening Remarks" through "What Does It Mean to “Verify” a Neural Network?"), about 3 hours — these episodes provide a concise overview of privacy challenges and ML robustness relevant to the paper's context.

*Why it unblocks this paper:* This shorter playlist by C3 Digital Transformation Institute offers a focused introduction to data analytics in security and privacy, including discussions on trustworthy machine learning and adversarial examples, which align well with the paper's focus on privacy-utility tradeoffs and adversarial baselines.

*If you want all of it:* About 6.2 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on zero-shot privacy-utility tradeoffs in tabular data using GPT-4, start by grounding yourself in foundational concepts such as privacy-utility tradeoffs, tabular data privacy methods, adversarial optimization for privacy, and zero-shot learning with large language models. These prerequisites provide the theoretical and methodological context. Finally, focus on the paper's core concept by reviewing the authors' own talks and related advanced discussions on zero-shot AI for tabular data sanitization.

### Privacy utility tradeoff in data *(prerequisite)*
Understanding the fundamental balance between protecting sensitive information and preserving data utility is essential for grasping the challenges addressed in the paper. This section covers theoretical models and practical considerations in managing privacy-utility tradeoffs in machine learning and data sharing.

*How the paper uses it:* The paper investigates how to sanitize tabular data to protect private features while maintaining utility, directly involving privacy-utility tradeoffs.

▶ [Beyond the Privacy-Utility Tradeoff: Differential Privacy in ...](https://www.youtube.com/watch?v=6UqyS_t_KVY) — Databricks · 19:21

### Tabular data privacy methods *(prerequisite)*
Since the paper focuses on sanitizing tabular datasets, it is crucial to understand existing privacy-preserving techniques specifically designed for tabular data. This includes methods like differential privacy, synthetic data generation, and federated learning approaches.

*How the paper uses it:* The paper compares GPT-4 based sanitization with adversarial and differential privacy methods for tabular data.

▶ [Generating Synthetic Tabular Data that is Differentially Private](https://www.youtube.com/watch?v=lgCRvpaSG5A) — Snorkel AI · 27:15

### Adversarial optimization for privacy *(prerequisite)*
Adversarial optimization is a key baseline method for privacy protection in machine learning. Understanding how adversarial methods work to protect data privacy by optimizing competing objectives is important to appreciate the paper's comparative evaluation.

*How the paper uses it:* The paper benchmarks GPT-4 sanitization against adversarial optimization baselines ALFR and UAE-PUPET.

▶ ["Adversarial Machine Learning" with Ian Goodfellow](https://www.youtube.com/watch?v=3-qazNQS2JU) — Association for Computing Machinery (ACM) · 1:04:49

### Large language models zero-shot learning *(prerequisite)*
The core method in the paper uses GPT-4's zero-shot prompting capabilities to sanitize data without additional training. Understanding zero-shot learning in large language models is critical to grasp how the authors leverage GPT-4 for privacy-utility tradeoffs.

*How the paper uses it:* The paper's novel approach relies on GPT-4 zero-shot prompting to perform data sanitization.

▶ [Language Models as Zero-Shot Planners: Extracting ...](https://www.youtube.com/watch?v=OUCwujwE7bA) — Yannic Kilcher · 1:17:05

### Paper authors' talk *(the paper's own talk)*
Direct talks from the authors provide the most precise and insightful explanation of their novel zero-shot GPT-4 sanitization approach for tabular data privacy. These talks often include detailed methodology, experimental results, and future directions.

*How the paper uses it:* The authors' own talks give direct insight into their GPT-4 zero-shot sanitization method and empirical findings.

▶ [Google TabFM Explained | Zero-Shot AI for Tabular Data, In-Context Learning & Machine Learning](https://www.youtube.com/watch?v=T9Fp_fsY2Ok) — Micro Learning · 3 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how GPT-4 can be used to sanitize tabular data for privacy while preserving utility. We start with the fundamental privacy-utility tradeoff in data, then cover existing privacy methods for tabular data and adversarial optimization techniques. Next, we explain zero-shot learning in large language models, culminating with the paper's core innovation: prompt engineering for data sanitization using GPT-4.

### Privacy utility tradeoff in data *(prerequisite)*
Learn the basic tension between protecting sensitive information (privacy) and keeping data useful for analysis (utility). This tradeoff is central to designing data sanitization methods that balance these competing goals.

*How the paper uses it:* The paper addresses this fundamental balance by using GPT-4 to sanitize tabular data to protect private features while preserving utility features.

▶ [Beyond the Privacy-Utility Tradeoff: Differential Privacy in ...](https://www.youtube.com/watch?v=6UqyS_t_KVY) — Databricks · 19:21

### Tabular data privacy methods *(prerequisite)*
Understand existing approaches to protect privacy in tabular datasets, including synthetic data generation and differential privacy techniques tailored for structured data. This background helps contextualize the paper's novel GPT-4 based sanitization.

*How the paper uses it:* The paper compares GPT-4 sanitization against established adversarial optimization baselines for tabular data privacy.

▶ [Generating Synthetic Tabular Data that is Differentially Private](https://www.youtube.com/watch?v=lgCRvpaSG5A) — Snorkel AI · 27:15

### Adversarial optimization for privacy *(prerequisite)*
Explore how adversarial optimization methods work by training competing models to obscure private information while preserving data utility. This technique is a common baseline for privacy-preserving data transformations.

*How the paper uses it:* The paper benchmarks GPT-4's zero-shot sanitization against adversarial optimization methods ALFR and UAE-PUPET.

▶ ["Adversarial Machine Learning" with Ian Goodfellow](https://www.youtube.com/watch?v=3-qazNQS2JU) — Association for Computing Machinery (ACM) · 1:04:49

### Large language models zero-shot learning *(prerequisite)*
Learn what zero-shot learning means for large language models like GPT-4 — performing tasks without explicit training examples, guided only by prompts. This capability enables the paper's approach to sanitize data without additional model training.

*How the paper uses it:* The paper leverages GPT-4's zero-shot prompting to generate sanitized tabular data directly from text prompts.

▶ [What is Zero-Shot Learning?](https://www.youtube.com/watch?v=pVpr4GYLzAo) — IBM Technology · 8:55

## Already in your library

- [AWS re:Invent 2020: Privacy-preserving machine learning](https://www.youtube.com/watch?v=ZQkB9XRqdnc) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Adversarial Examples for Deep Neural Networks](https://www.youtube.com/watch?v=kxyacmVSGlI) — also for: A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services (Shuang Hao)
- [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's novel use of GPT-4 for zero-shot privacy-utility tradeoffs in tabular data. The beginner project reproduces a simple privacy-utility metric comparison on a small tabular dataset using prompt-based sanitization. The intermediate project implements the core GPT-4 zero-shot sanitization method on the UCI Adult dataset and compares it to a baseline adversarial method. The advanced project extends the approach by experimenting with prompt engineering to improve fairness metrics, addressing a key limitation noted by the authors.

### Beginner — Prompt-Based Tabular Data Sanitization on a Small Dataset
*Effort: a weekend, ~8 hours*

You build a simple Python script that converts a small tabular dataset (e.g., UCI Iris or a small synthetic dataset) into a text prompt for GPT-4, instructing it to distort data to protect a chosen private feature while preserving a utility feature. You then evaluate the privacy and utility by training simple classifiers on the original and sanitized data.

**Why it shows you understood the paper:** This project shows you understand the core idea of zero-shot sanitization via prompt engineering and the privacy-utility tradeoff concept by reproducing a basic metric comparison similar to the paper's approach.

**Grounded in:** The design of a prompt-based method that requires no additional training and can distort data to protect private features while preserving utility.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, scikit-learn, pandas

**Data:** Use a small public tabular dataset such as UCI Iris or a synthetic dataset with categorical and continuous features to simulate private and utility features.

**Build it:**

1. Select a small tabular dataset and identify private and utility features.
2. Write a function to convert each data row into a text prompt with instructions for GPT-4 to sanitize the private feature while preserving utility.
3. Call the GPT-4 API to generate sanitized data rows in text form and parse them back into tabular format.
4. Train simple classifiers (e.g., logistic regression) on original and sanitized data to measure private feature inference accuracy and utility feature accuracy.
5. Compare and report privacy and utility metrics to demonstrate the tradeoff.

**Ships as:** A GitHub repo with a Python script, README explaining the prompt design, and a report of privacy and utility metrics on the small dataset.

**Stretch goal:** Add a second prompt variant with fairness instructions and compare fairness metrics on the sanitized data.

### Intermediate — Reimplement GPT-4 Zero-Shot Sanitization on UCI Adult Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core zero-shot GPT-4 sanitization method by designing prompts that convert UCI Adult tabular data into text, instruct GPT-4 to distort private features while preserving utility features, and generate sanitized data. You compare privacy and utility metrics against a simple baseline classifier trained on original data.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's main method and evaluation on the exact dataset they used, showing comprehension of the prompt engineering, zero-shot sanitization, and privacy-utility evaluation.

**Grounded in:** Empirical evaluation showing GPT-4's performance comparable to state-of-the-art adversarial methods in privacy protection and utility retention.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, scikit-learn, pandas, numpy

**Data:** Use the UCI Adult dataset, a publicly available tabular dataset used in the paper for privacy-utility tradeoff evaluation.

**Build it:**

1. Download and preprocess the UCI Adult dataset, identifying private and utility features as per the paper.
2. Design prompt templates (e.g., P1) that convert each data row into a text prompt with sanitization instructions for GPT-4.
3. Use the OpenAI API to generate sanitized data for the entire dataset.
4. Train classifiers to infer private and utility features on both original and sanitized data.
5. Calculate and report privacy (private feature inference accuracy) and utility (utility feature accuracy) metrics.
6. Compare results to baseline classifiers trained on original data to demonstrate privacy-utility tradeoff.

**Ships as:** A GitHub repo with code to preprocess data, generate GPT-4 prompts, sanitize data, evaluate classifiers, and a README documenting methods and results.

**Stretch goal:** Implement the second prompt variant (P2) with fairness instructions and analyze fairness metrics on sanitized data.

### Advanced — Improving Fairness in GPT-4 Zero-Shot Sanitization via Prompt Engineering
*Effort: 3-4 weeks*

You extend the paper's approach by experimenting with novel prompt engineering strategies to better incorporate fairness constraints into GPT-4 sanitization of the UCI Adult dataset. You evaluate privacy, utility, and fairness metrics, aiming to reduce fairness gaps without sacrificing privacy or utility, addressing a key limitation noted by the authors.

**Why it shows you understood the paper:** This project shows deep understanding of the paper's limitations and future directions by tackling the open challenge of fairness in LLM-based data sanitization through iterative prompt design and empirical evaluation.

**Grounded in:** Analysis of fairness metrics showing GPT-4's limitations in fairness compared to adversarial methods but potential for improvement with prompt design.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, scikit-learn, pandas, numpy, fairlearn or AIF360 for fairness metrics

**Data:** Use the UCI Adult dataset as in the paper, focusing on protected attributes for fairness evaluation.

**Build it:**

1. Review the paper's prompt variants and fairness evaluation methodology.
2. Design and implement new prompt templates that explicitly instruct GPT-4 to consider fairness constraints during sanitization.
3. Generate sanitized datasets using GPT-4 with these new prompts.
4. Train classifiers on sanitized data and evaluate privacy, utility, and fairness metrics (e.g., equalized odds, equal opportunity).
5. Compare results to the paper's P1 and P2 prompts and adversarial baselines.
6. Document findings, challenges, and potential improvements in prompt design.

**Ships as:** A GitHub repo with prompt engineering experiments, evaluation scripts for privacy, utility, and fairness, and a detailed README discussing results and insights.

**Stretch goal:** Explore combining GPT-4 sanitization with differential privacy mechanisms or adversarial training to further improve fairness and privacy.
