---
title: "315 · AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time — Saurabh Gupta"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-saurabh-gupta"
source_hash: "bc2efd7dcc8c548306fcdd5c0c318887976601bb509599672f12675fd0970b8a"
sequence: 315
generator: "outreach-garden: managed"
---

# 315 · AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time

## At a glance

- **Professor:** Saurabh Gupta
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time](https://arxiv.org/abs/2505.24863)
- **Authors:** Junyu Zhang, Runpei Dong, Han Wang, Xuying Ning, Haoran Geng, Peihao Li, Xialin He, Yutong Bai, Jitendra Malik, Saurabh Gupta, Huan Zhang
- **Year:** 2025

## Paper overview

This paper introduces A LPHAO NE (α1), a framework to improve large reasoning models (LRMs) by modulating their reasoning speed during test time. It schedules slow thinking phases early and fast thinking phases later to enhance reasoning accuracy and efficiency across tasks like math, coding, and science problems.

### Why it matters

**Research problem:** Large reasoning models often struggle to balance slow and fast thinking during problem solving, leading to issues like overthinking or underthinking. Existing test-time scaling methods either increase or decrease slow thinking monotonically but do not jointly optimize the thinking phase budget and slow thinking schedule.

**Why it matters:** Improving the reasoning capabilities and efficiency of LRMs is crucial for advancing AI systems that can solve complex problems reliably and quickly, impacting fields such as robotics, vision, and artificial intelligence.

**Key contributions:**

- A universal reasoning progress modulation framework (α1) that jointly modulates thinking phase budget and slow thinking scheduling.
- Introduction of the α moment to scale thinking phase length and control reasoning speed transitions.
- A stochastic slow thinking scheduling method using Bernoulli sampling of 'wait' tokens.
- A deterministic post-α moment fast thinking encouragement to overcome slow thinking inertia.
- Comprehensive empirical evaluation on six benchmarks across math, coding, and scientific reasoning.

## About the professor

**Saurabh Gupta** — Associate Professor, Univ. of Illinois at Urbana-Champaign.

Research interests: Robotics, vision, and artificial intelligence

### Research links

- [Faculty/profile page](https://ece.illinois.edu/about/directory/faculty/saurabhg)
- [Identity evidence](http://saurabhg.web.illinois.edu)
- [Professor website](http://saurabhg.web.illinois.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AlphaOne (α1) framework for modulating reasoning speed in large reasoning models, start with foundational knowledge on large reasoning models and the cognitive theory of slow and fast thinking in AI. Then, build a solid grasp of stochastic scheduling methods, particularly Bernoulli processes, which underpin α1's slow thinking modulation. Next, explore reasoning efficiency-performance trade-offs to appreciate the optimization goals of α1. Finally, focus on the paper-specific author talk to gain direct insights into the α1 framework and its empirical results.

### Large reasoning models *(prerequisite)*
Understanding the architecture, capabilities, and challenges of large reasoning models (LRMs) is essential as α1 targets these models to improve their reasoning accuracy and efficiency. These videos provide detailed academic lectures and seminars on LRMs, their inference mechanisms, and their role in complex reasoning tasks.

*How the paper uses it:* α1 is designed to enhance the reasoning capabilities of LRMs by modulating their thinking speed during test time.

▶ [Lecture 1 - Reasoning LLMs from Scratch - Series Introduction](https://www.youtube.com/watch?v=k2QEElQ9eeM) — Vizuara · 49:04

### Slow and fast thinking in AI *(prerequisite)*
The α1 framework is inspired by the dual-process theory of cognition, which distinguishes between slow, deliberate thinking and fast, intuitive thinking. Understanding this foundational cognitive theory helps contextualize why α1 schedules slow thinking early and fast thinking later to improve reasoning outcomes.

*How the paper uses it:* α1's slow-to-fast thinking schedule contrasts with human fast-then-slow thinking and is key to its improved reasoning performance.

▶ [Francesca Rossi (IBM) - Thinking fast and slow in AI (14/01/2021)](https://www.youtube.com/watch?v=ZDjxU34n8t4) — Scuola Galileiana di Studi Superiori · 1:08:01

### Stochastic scheduling methods *(prerequisite)*
α1 employs a stochastic slow thinking scheduling method using Bernoulli sampling of 'wait' tokens. A rigorous understanding of Bernoulli processes and stochastic scheduling is necessary to grasp how α1 modulates the slow thinking phases probabilistically.

*How the paper uses it:* The Bernoulli process underlies α1's stochastic insertion of 'wait' tokens to modulate slow thinking before the α moment.

▶ [13. Bernoulli Process](https://www.youtube.com/watch?v=gMTiAeE0NCw) — MIT OpenCourseWare · 13 years ago

### Reasoning efficiency-performance trade-offs *(prerequisite)*
α1 optimizes the trade-off between reasoning accuracy and efficiency, measured by metrics like the REP metric. Understanding these trade-offs and how they are evaluated in reasoning models is important to appreciate the empirical gains demonstrated by α1.

*How the paper uses it:* α1 achieves better reasoning efficiency-performance trade-offs than baseline methods across multiple benchmarks.

▶ [Thought-Augmented Reasoning with Large Language Models](https://www.youtube.com/watch?v=oBh6v36Asxg) — Paper With Video · 15:41

### Paper-specific author talk *(the paper's own talk)*
The authors' own talk on the α1 framework provides direct, detailed insights into the motivation, design, and empirical evaluation of their reasoning progress modulation approach. This talk is the most authoritative and focused resource to understand the paper's contributions and results.

*How the paper uses it:* This talk directly presents the α1 framework, its α moment parameter, stochastic and deterministic scheduling methods, and comprehensive evaluation results.

▶ [AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time](https://www.youtube.com/watch?v=cX1xW198zh8) — Keyur · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts to understand the AlphaOne (α1) framework for modulating reasoning speed in large reasoning models (LRMs). Start by learning what LRMs are and how they differ from generic language models, then explore the cognitive theory of slow and fast thinking that inspires α1's scheduling. Next, grasp the stochastic scheduling method using Bernoulli processes that α1 employs to modulate slow thinking phases. Finally, dive into the core paper-specific explanation of the α1 framework itself.

### Large reasoning models *(prerequisite)*
Large reasoning models (LRMs) are advanced AI systems designed to solve complex problems by generating detailed step-by-step reasoning before answering. They differ from generic language models by focusing on reasoning-intensive tasks like math, coding, and science problems.

*How the paper uses it:* α1 targets LRMs to improve their reasoning accuracy and efficiency by modulating their thinking speed during test time.

▶ [Large Reasoning Models](https://www.youtube.com/watch?v=_FDy0ZU6y4c) — AI Makerspace · 1:02:50

### Slow and fast thinking in AI *(prerequisite)*
The slow and fast thinking concept comes from cognitive psychology, describing two modes of human thought: fast, intuitive thinking and slow, deliberate thinking. This dual-process theory inspires AI methods that balance quick heuristic reasoning with slower, more careful analysis.

*How the paper uses it:* α1 uses a slow-to-fast thinking schedule to improve reasoning performance, differing from human fast-then-slow thinking.

▶ [Dual Process Theory](https://www.youtube.com/watch?v=eMvDJfvXxeQ) — Syntience · 20:00

### Stochastic scheduling methods *(prerequisite)*
Stochastic scheduling involves using probabilistic methods to decide when to perform certain actions, such as inserting 'wait' tokens to modulate slow thinking phases. The Bernoulli process is a simple model for random binary events, useful for scheduling in α1.

*How the paper uses it:* α1 modulates slow thinking before the α moment by stochastically inserting 'wait' tokens using a Bernoulli process.

▶ [13. Bernoulli Process](https://www.youtube.com/watch?v=gMTiAeE0NCw) — MIT OpenCourseWare · 13 years ago

### Paper-specific author talk *(the paper's own talk)*
This talk provides a direct explanation from the authors about the AlphaOne (α1) framework, detailing how it schedules slow and fast thinking phases to improve reasoning in LRMs. It offers clear insights into the motivation, method, and empirical results.

*How the paper uses it:* Gives a focused overview of the α1 framework and its contributions as presented by the paper's authors.

▶ [AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time](https://www.youtube.com/watch?v=cX1xW198zh8) — Keyur · 1 year ago

## Already in your library

- [LLM Reasoning Beyond Scaling with Dr Greg Durrett ...](https://www.youtube.com/watch?v=Eiw8YB-yjW0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 6 - LLM Reasoning](https://www.youtube.com/watch?v=k5Fh-UgTuCo) — also for: In-Context Algebra (David Bau)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the A LPHAO NE paper's core idea of modulating reasoning speed in large reasoning models at test time. Starting with a simple simulation of the slow-to-fast thinking schedule, you then implement the α moment modulation method on a public reasoning dataset, and finally extend the framework to address a stated limitation by removing dependency on specific slow thinking tokens, exploring a learned transition mechanism. Each project builds on your existing software engineering and ML skills while introducing progressively deeper engagement with the paper's contributions.

### Beginner — Simulate Slow-to-Fast Thinking Schedule
*Effort: a weekend, ~8 hours*

You build a small Python simulation that models the stochastic scheduling of slow thinking tokens ('wait') before an α moment and deterministic fast thinking after it, following the paper's Bernoulli process and linear annealing schedule. The simulation outputs token sequences and visualizes the transition from slow to fast thinking phases.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of α1's reasoning progress modulation, specifically the α moment concept and the stochastic scheduling of slow thinking tokens, which are central to the paper's contribution.

**Grounded in:** A LPHAO NE introduces the α moment to scale thinking phase budget and modulate reasoning speed, using stochastic slow thinking scheduling before α and deterministic fast thinking after (see claims about α moment and Bernoulli sampling of 'wait' tokens).

**Tech stack:** Python 3.11, matplotlib

**Data:** No external data needed; you simulate token sequences based on the paper's described Bernoulli process and scheduling functions.

**Build it:**

1. Implement a Bernoulli sampling function to insert 'wait' tokens stochastically before the α moment.
2. Implement a linear annealing schedule function to modulate the probability of inserting 'wait' tokens over time.
3. Simulate token sequences representing slow thinking followed by fast thinking, replacing 'wait' tokens with '</think>' after the α moment.
4. Visualize the token sequence and the transition point (α moment) using matplotlib.
5. Write a README explaining the α moment concept and how your simulation models the slow-to-fast thinking schedule.

**Ships as:** A Python script and visualization demonstrating the stochastic slow thinking scheduling and deterministic fast thinking transition, with clear README documentation linking to the paper's α moment concept.

**Stretch goal:** Add a simple CLI to allow users to input different α values and scheduling functions to see their effect on the thinking schedule.

### Intermediate — Reimplement α1 Reasoning Modulation on AI-MO AMC Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core α1 framework from the paper by coding the α moment scaling and stochastic slow thinking scheduling with 'wait' tokens, then apply it to a publicly available reasoning dataset (AI-MO AMC from HuggingFace) to evaluate problem-solving accuracy and token length compared to a baseline without modulation.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core method into code, apply it to real data, and reproduce key metrics like accuracy improvement and token length reduction, proving comprehension of the framework and its empirical benefits.

**Grounded in:** The paper's key contribution is the universal reasoning progress modulation framework (α1) with α moment scaling and stochastic slow thinking scheduling, which yields improved accuracy and efficiency on benchmarks (see key contributions and results).

**Tech stack:** Python 3.11, PyTorch, transformers, datasets (HuggingFace), matplotlib

**Data:** Use the AI-MO AMC dataset from HuggingFace (https://huggingface.co/datasets/AI-MO/aimo-validation-amc) as a substitute for the paper's benchmarks.

**Build it:**

1. Load the AI-MO AMC dataset and preprocess it for input to a small large reasoning model (e.g., a 1.5B parameter LRM or a smaller open model).
2. Implement the α moment scaling mechanism to scale the thinking phase length by α times.
3. Implement stochastic slow thinking scheduling by inserting 'wait' tokens before the α moment using Bernoulli sampling with a linear annealing schedule.
4. Implement deterministic fast thinking after the α moment by replacing 'wait' tokens with '</think>'.
5. Run inference with and without α1 modulation, measure problem-solving accuracy and token length.
6. Visualize and compare results, reporting improvements consistent with the paper's findings.
7. Document your implementation details, evaluation protocol, and results in a README.

**Verified links from the paper:**

- <https://huggingface.co/datasets/AI-MO/aimo-validation-amc> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing α1 modulation on AI-MO AMC dataset, scripts to run evaluation, and a report showing accuracy and token length improvements over baseline.

**Stretch goal:** Experiment with different α values and scheduling functions to analyze their impact on reasoning performance and efficiency.

### Advanced — Extend α1 Framework to Learned Slow Thinking Transition Without 'wait' Tokens
*Effort: 3+ weeks*

You develop an extension of the α1 framework that removes dependency on the specific 'wait' token for slow thinking transitions by implementing a learned transition mechanism (e.g., a small classifier or policy network) that decides when to switch from slow to fast thinking. You apply this to a reasoning task and compare with the original α1 method.

**Why it shows you understood the paper:** This project tackles a key limitation stated in the paper—dependency on specific slow thinking transition tokens—and explores a future direction by designing a generalizable transition mechanism, demonstrating deep engagement with the paper's challenges and potential extensions.

**Grounded in:** The paper notes as a limitation that α1 depends on specific slow thinking transition tokens like 'wait' and suggests future directions to remove this dependency for better generalization.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, datasets (HuggingFace), matplotlib

**Data:** Use the AI-MO AMC dataset from HuggingFace for evaluation, as a proxy for the paper's benchmarks.

**Build it:**

1. Reimplement the baseline α1 framework with 'wait' token scheduling as in the intermediate project.
2. Design and train a lightweight classifier or policy network that, given partial generation context or model hidden states, predicts the transition point from slow to fast thinking without explicit 'wait' tokens.
3. Integrate this learned transition mechanism into the reasoning generation process, replacing the deterministic post-α moment token replacement.
4. Evaluate the extended framework on the AI-MO AMC dataset, measuring accuracy, token length, and reasoning efficiency-performance trade-offs.
5. Compare results with the original α1 method and a baseline without modulation.
6. Document your methodology, experiments, and findings in detail.
7. Optionally, analyze the learned transition behavior and its alignment with human-like reasoning progress.

**Verified links from the paper:**

- <https://huggingface.co/datasets/AI-MO/aimo-validation-amc> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repo with code for the extended α1 framework using learned transition, evaluation scripts, and a detailed report comparing performance and discussing implications.

**Stretch goal:** Explore adapting the learned transition mechanism to multimodal reasoning models or embodied AI scenarios as suggested in the paper's future directions.
