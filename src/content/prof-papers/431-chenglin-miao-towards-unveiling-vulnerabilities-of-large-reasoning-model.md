---
title: "431 · Towards Unveiling Vulnerabilities of Large Reasoning Models in Machine Unlearning — Chenglin Miao"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chenglin-miao"
source_hash: "2b77facdc5d154394991a65b18b179ab067b953b3a088379a83ca1446f3e507b"
sequence: 431
generator: "outreach-garden: managed"
---

# 431 · Towards Unveiling Vulnerabilities of Large Reasoning Models in Machine Unlearning

## At a glance

- **Professor:** Chenglin Miao
- **Institution:** Iowa State University
- **Paper:** [Towards Unveiling Vulnerabilities of Large Reasoning Models in Machine Unlearning](https://arxiv.org/abs/2604.04255)
- **Authors:** Aobo Chen, Chenxu Zhao, Chenglin Miao, Mengdi Huai
- **Year:** 2026

## Paper overview

This paper investigates security vulnerabilities in large reasoning models (LRMs) during the machine unlearning process, where specific data is removed from trained models without full retraining. The authors propose a novel attack that manipulates both the final answers and the reasoning traces of LRMs to produce incorrect yet convincingly reasoned outputs. They develop a bi-level optimization framework to craft such attacks and demonstrate their effectiveness in both white-box and black-box settings across multiple models and datasets.

### Why it matters

**Research problem:** Machine unlearning aims to remove the influence of specific data from trained models efficiently, but this process may introduce new security vulnerabilities. Prior work has not studied malicious unlearning attacks targeting large reasoning models (LRMs), which produce multi-step reasoning traces alongside final answers. The problem is how to craft unlearning attacks that manipulate both the final answer and the reasoning trace to mislead users while remaining stealthy.

**Why it matters:** LRMs are increasingly used in applications requiring trustworthy AI, but their training data often contains sensitive information subject to privacy regulations like GDPR. Malicious unlearning attacks can exploit the unlearning process to cause models to produce incorrect outputs with plausible reasoning, undermining trust and potentially causing harm. Understanding and mitigating these vulnerabilities is critical for deploying LRMs responsibly.

**Key contributions:**

- First study of malicious unlearning attacks targeting large reasoning models (LRMs).
- Novel bi-level exact unlearning attack framework manipulating both final answers and reasoning traces.
- Differentiable surrogate objectives and token-level guidance to improve attack stealthiness and effectiveness.
- Extension of attacks to adversarial unlearning, reasoning quality degradation, and black-box transferability.
- Comprehensive experiments on multiple LRMs and LLMs demonstrating high attack success rates and transferability.

## About the professor

**Chenglin Miao** — Assistant Professor, Department of Computer Science, Iowa State University.

Research interests: the Internet of Things, cyber-physical systems, security and privacy, and artificial intelligence (AI)

### Research links

- [Faculty/profile page](https://clmiao.github.io)
- [Resolved homepage](https://clmiao.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** bi-level optimization machine learning
**The paper assumes:** bi-level optimization in machine learning, differentiable surrogate objectives, adversarial attack optimization
**Already in this field?** Skip this entirely if you already understand bi-level optimization frameworks and their application in machine learning adversarial settings.

This background focuses on bi-level optimization in machine learning, which is central to understanding the attack framework proposed in the paper on malicious unlearning attacks for large reasoning models. The rigorous course option offers a deep, structured university-level treatment of optimization theory and algorithms, while the fast track provides a concise, accessible introduction to optimization concepts relevant to machine learning. Choose the course for a thorough foundation or the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Optimization Theory and Algorithms - Prof. Uday Khankhoje](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8XNc8SxMLbUxdR7lDSuIGw) — NPTEL-NOC IITM · 83 videos

**Watch only this:** Lectures 1-15, about 7.5 hours — covering fundamentals of optimization, constrained optimization, and introductory bilevel optimization concepts relevant to the paper's framework.

*Why it unblocks this paper:* This NPTEL course by Prof. Uday Khankhoje covers optimization theory and algorithms comprehensively, providing the mathematical and algorithmic foundations necessary to understand bi-level optimization frameworks used in the paper.

*If you want all of it:* All 83 lectures, approximately 40 hours — for a complete mastery of optimization theory and algorithms.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimization](https://www.youtube.com/playlist?list=PLUCJYhfoaExUe3JTmudXm1zfCdtET36LR) — Qi Deng (Percy) · 21 videos

**Watch only this:** Episodes 1-6, about 1.5 hours — covering basic optimization concepts, gradient methods, and constrained optimization that underpin bi-level optimization.

*Why it unblocks this paper:* This playlist by Qi Deng (Percy) offers a clear, concise introduction to optimization methods in machine learning, providing intuition and practical understanding of optimization problems and techniques relevant to bi-level optimization.

*If you want all of it:* All 21 episodes, approximately 5 hours — for a broader overview of optimization methods in ML.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on vulnerabilities of large reasoning models (LRMs) in machine unlearning, start by grounding yourself in the foundational concepts of machine unlearning attacks, large reasoning models, bi-level optimization methods, and adversarial attacks on ML models. These prerequisites provide the necessary background on the attack surface, model architecture, optimization techniques, and stealthy manipulations relevant to the paper. Finally, focus on the paper's core contribution by reviewing talks closely related to the authors' work and the bi-level exact unlearning attack framework to grasp the novel attack methodology and its implications.

### Machine unlearning attacks *(prerequisite)*
This section covers the attack surface and threat models in machine unlearning, highlighting privacy risks and malicious manipulations that can arise during unlearning. Understanding these attacks is crucial to appreciate the security vulnerabilities the paper exposes in LRMs.

*How the paper uses it:* The paper investigates malicious unlearning attacks targeting LRMs, making this foundational to grasp the threat model.

▶ [Alina Oprea, Machine Learning Integrity and Privacy in ...](https://www.youtube.com/watch?v=ihp2NMIuJD4) — Trustworthy AI Talk Series · 1:11:19

### Large reasoning models *(prerequisite)*
This section explains the architecture and reasoning trace generation of LRMs, which produce multi-step reasoning outputs alongside final answers. Understanding how LRMs generate reasoning traces is key to appreciating how the attack manipulates both answers and reasoning.

*How the paper uses it:* The paper targets LRMs that output reasoning traces, so understanding their structure and reasoning process is essential.

▶ [The Illusion of Thinking: Understanding the Strengths and ...](https://www.youtube.com/watch?v=R_wvzSlqBhs) — Xiaol.x · 17:28

### Bi-level optimization methods *(prerequisite)*
Bi-level optimization is the core mathematical framework used in the paper to craft the unlearning attack. This section introduces the theory and algorithms behind nested optimization problems, which underpin the attack's bi-level exact unlearning framework.

*How the paper uses it:* The attack framework relies on bi-level optimization to manipulate training data subsets and model outputs.

▶ [Introduction to Bilevel Optimization, Linear Bilevel Problems, and Maybe Beyond - Part 1/2](https://www.youtube.com/watch?v=hTDrSjBtKLc) — ALOP Trier University · 5 years ago

### Adversarial attacks on ML models *(prerequisite)*
This section provides context on stealthy manipulations and attack transferability in machine learning, which relate to how the paper's attacks remain covert and effective across different models and settings.

*How the paper uses it:* The paper extends attacks to adversarial unlearning and black-box settings, making adversarial attack knowledge relevant.

▶ [Nicholas Carlini – Some Lessons from Adversarial Machine ...](https://www.youtube.com/watch?v=umfeF0Dx-r4) — FAR․AI · 16:29

### Paper authors talk *(the paper's own talk)*
Direct talks by the authors or closely related presentations provide the most precise and insightful explanations of the novel attack and framework proposed in the paper. These talks help contextualize the research within ongoing academic discussions.

*How the paper uses it:* Hearing the authors or related researchers discuss the work offers direct insight into the attack design and evaluation.

▶ [Exploring the Hidden Reasoning Process of Large Language Models by Misleading Them](https://www.youtube.com/watch?v=5GtMP0mPFNg) — Xiaol.x · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the vulnerabilities of large reasoning models (LRMs) in machine unlearning, start by grasping what LRMs are and how they generate reasoning traces. Next, learn about machine unlearning and its security risks, especially attacks targeting unlearning processes. Then, build intuition on adversarial attacks in machine learning to appreciate stealthy manipulations and transferability. Finally, explore bi-level optimization methods, the core mathematical framework used to craft the novel unlearning attacks in the paper.

### Large reasoning models *(prerequisite)*
Large reasoning models (LRMs) are advanced AI systems that generate multi-step reasoning traces alongside final answers, enabling more interpretable and trustworthy outputs. Understanding their architecture and how they produce reasoning traces is essential to grasp how attacks can manipulate both answers and reasoning.

*How the paper uses it:* The paper studies attacks that manipulate both final answers and reasoning traces generated by LRMs.

▶ [The Illusion of Thinking: Understanding the Strengths and ...](https://www.youtube.com/watch?v=R_wvzSlqBhs) — Xiaol.x · 17:28

### Machine unlearning attacks *(prerequisite)*
Machine unlearning aims to efficiently remove specific data from trained models, but this process can introduce vulnerabilities. Learning about attacks on unlearning helps understand how malicious actors can exploit unlearning to manipulate model behavior.

*How the paper uses it:* The paper introduces malicious unlearning attacks that exploit vulnerabilities during the unlearning process.

▶ [Addressing Memorization in AI/ML: Attacks on Machine ...](https://www.youtube.com/watch?v=CuH7BHqIiYk) — Probably Private · 12:36

### Adversarial attacks on ML models *(prerequisite)*
Adversarial attacks involve subtle manipulations to input data or model parameters that cause incorrect or misleading outputs. Understanding these attacks provides context for how stealthy manipulations and transferability of attacks work in machine learning.

*How the paper uses it:* The paper extends attacks to adversarial unlearning and demonstrates transferability across models.

▶ [A Beginner's Guide to Adversarial Machine Learning | Anmol ...](https://www.youtube.com/watch?v=QTqH2_Y9Kow) — Conf42 · 38:43

### Bi-level optimization methods *(prerequisite)*
Bi-level optimization involves nested optimization problems where one problem is constrained by another. This framework is used to craft the unlearning attacks by optimizing malicious data subsets to manipulate model outputs.

*How the paper uses it:* The paper proposes a bi-level exact unlearning attack framework to optimize malicious unlearning.

▶ [Introduction to Bilevel Optimization, Linear Bilevel Problems, and Maybe Beyond - Part 1/2](https://www.youtube.com/watch?v=hTDrSjBtKLc) — ALOP Trier University · 5 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors can provide insights into their motivations, methods, and findings in their own words, complementing technical understanding.

*How the paper uses it:* Direct explanation of the novel attack and framework by the authors.

▶ [Exploring the Hidden Reasoning Process of Large Language Models by Misleading Them](https://www.youtube.com/watch?v=5GtMP0mPFNg) — Xiaol.x · 1 year ago

## Already in your library

- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [USENIX Enigma 2017 — Adversarial Examples in Machine ...](https://www.youtube.com/watch?v=hUukErt3-7w) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [What is Machine Unlearning?](https://www.youtube.com/watch?v=0_ciCzHaM4o) — also for: Attention Smoothing Is All You Need for Unlearning (Dongxiao Zhu)
- [LLM Reasoning Beyond Scaling with Dr Greg Durrett ...](https://www.youtube.com/watch?v=Eiw8YB-yjW0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Large Reasoning Models](https://www.youtube.com/watch?v=_FDy0ZU6y4c) — also for: A LPHAO NE: Reasoning Models Thinking Slow and Fast at Test Time (Saurabh Gupta)
- ["Adversarial Machine Learning" with Ian Goodfellow](https://www.youtube.com/watch?v=3-qazNQS2JU) — also for: Initial Exploration of Zero-Shot Privacy Utility Tradeoffs in Tabular Data Using GPT-4 (George Traian Amariucai)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of malicious unlearning attacks on large reasoning models (LRMs) as presented in the paper. The beginner project recreates a simplified attack scenario to manipulate reasoning traces and final answers, the intermediate project implements the core bi-level exact unlearning attack framework on a smaller public reasoning dataset, and the advanced project explores a defense mechanism or extends the attack to a new unlearning method or domain, addressing the paper's limitations and future directions.

### Beginner — Simulate a Simple Malicious Unlearning Attack on Reasoning Traces
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a toy large reasoning model producing multi-step reasoning traces and final answers. Then you implement a simple data removal (unlearning) step that manipulates the model's output to produce incorrect but plausible reasoning traces and wrong final answers, inspired by the paper's attack concept.

**Why it shows you understood the paper:** This project shows you grasp the core idea that unlearning can be exploited to stealthily manipulate both reasoning traces and final answers, a novel vulnerability highlighted by the paper.

**Grounded in:** The attack manipulates both final answers and reasoning traces to produce convincing but incorrect outputs.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy

**Data:** Synthetic toy dataset simulating reasoning steps and answers, created within the notebook.

**Build it:**

1. Implement a simple reasoning model simulator that outputs multi-step reasoning traces and final answers for a small set of inputs.
2. Define a toy unlearning procedure that removes or modifies specific training data points.
3. Craft a simple malicious unlearning attack that changes the model's outputs to incorrect final answers with plausible reasoning traces.
4. Visualize and compare original vs manipulated reasoning traces and final answers.
5. Document the attack mechanism and its effect on outputs.

**Ships as:** A Jupyter notebook demonstrating a minimal malicious unlearning attack on reasoning traces with clear visualizations and explanations.

**Stretch goal:** Add a simple metric to quantify how convincing the manipulated reasoning traces are compared to original ones.

### Intermediate — Reimplement Bi-level Exact Unlearning Attack on a Public Reasoning Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core bi-level exact unlearning attack framework described in the paper, including differentiable surrogate objectives and token-level guidance, applied to a smaller public reasoning dataset such as the HotpotQA or a similar multi-hop reasoning dataset. You compare attack success rates against a random baseline and report metrics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main technical contribution and validate its effectiveness on real data, showing comprehension of bi-level optimization and attack evaluation.

**Grounded in:** The authors propose a bi-level exact unlearning attack framework that manipulates both final answers and reasoning traces, achieving significantly higher attack success rates than baselines.

**Tech stack:** Python 3.11, PyTorch, Transformers (Hugging Face), Jupyter Notebook

**Data:** Use a public multi-hop reasoning dataset such as HotpotQA as a substitute for the paper's datasets.

**Build it:**

1. Set up a pretrained large reasoning model or LLM capable of multi-step reasoning (e.g., a fine-tuned transformer on HotpotQA).
2. Implement the bi-level optimization framework for exact unlearning attacks with differentiable surrogate objectives as described in the paper.
3. Craft malicious unlearning subsets to manipulate final answers and reasoning traces.
4. Evaluate attack success rate compared to a random unlearning baseline.
5. Visualize examples of manipulated reasoning traces and final answers.
6. Write a report summarizing methodology, results, and comparison to baseline.

**Ships as:** A GitHub repo with code implementing the attack on a public reasoning dataset, scripts to run experiments, and a README with results and analysis.

**Stretch goal:** Extend the implementation to adversarial unlearning attacks optimizing trigger tokens directly and compare performance.

### Advanced — Explore Defenses Against Malicious Unlearning Attacks on LRMs
*Effort: 3+ weeks*

You design and implement a defense mechanism to detect or mitigate malicious unlearning attacks on large reasoning models. This could involve anomaly detection on reasoning traces, verification of unlearning subsets, or robustness improvements. You evaluate your defense on the intermediate project's attack implementation and report effectiveness and impact on unlearning efficiency.

**Why it shows you understood the paper:** This project tackles one of the paper's key future directions and limitations by addressing defenses, demonstrating deep understanding of the attack's mechanisms and practical challenges in securing LRMs during unlearning.

**Grounded in:** The defense strategies against such attacks are not explored in this work; developing robust defenses is a future direction.

**Tech stack:** Python 3.11, PyTorch, Scikit-learn, Jupyter Notebook

**Data:** Use the same public reasoning dataset and attack implementation from the intermediate project for evaluation.

**Build it:**

1. Review the intermediate project's attack implementation and identify attack signatures or anomalies in reasoning traces or outputs.
2. Design a detection or mitigation method, e.g., a classifier to flag suspicious reasoning traces or a robust unlearning procedure.
3. Implement the defense method integrated with the attack pipeline.
4. Evaluate defense effectiveness in reducing attack success rate and measure impact on unlearning efficiency.
5. Document findings, limitations, and potential improvements.

**Ships as:** A GitHub repo extending the intermediate project with defense code, evaluation scripts, and a detailed README discussing defense performance and trade-offs.

**Stretch goal:** Generalize the defense to other unlearning algorithms or test transferability across different LRM architectures.
