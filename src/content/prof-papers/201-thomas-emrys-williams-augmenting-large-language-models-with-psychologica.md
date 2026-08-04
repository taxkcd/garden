---
title: "201 · Augmenting large language models with psychologically grounded models of causal reasoning for planning under uncertainty — Thomas Emrys Williams"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thomas-emrys-williams"
source_hash: "fb4557fe3822dde06220f9f0b90310e1a85f1cf9051bfe9e5971e5d881cf5333"
sequence: 201
generator: "outreach-garden: managed"
---

# 201 · Augmenting large language models with psychologically grounded models of causal reasoning for planning under uncertainty

## At a glance

- **Professor:** Thomas Emrys Williams
- **Institution:** Colorado School of Mines
- **Paper:** [Augmenting large language models with psychologically grounded models of causal reasoning for planning under uncertainty](https://doi.org/10.3389/frai.2025.1730614)
- **Authors:** Semanti Basu, Moon Hwan Kim, Semir Tatlidil, Tom Williams, Steven Sloman, Ruth Iris Bahar
- **Year:** 2026

## Paper overview

This research explores how large language models (LLMs), which are good at pattern recognition but limited in causal reasoning, can be improved by integrating human causal mental models. The study focuses on tasks like assembling objects and troubleshooting malfunctions under uncertainty, modeled as partially observable Markov decision processes (POMDPs). By combining LLMs with human-generated causal models, the authors demonstrate improved decision-making and planning performance in these tasks.

### Why it matters

**Research problem:** Large language models excel at many tasks but lack robust causal reasoning abilities, limiting their effectiveness in decision-making under uncertainty, especially in sequential tasks like object assembly and troubleshooting.

**Why it matters:** Improving causal reasoning in LLMs is crucial for reliable planning and decision-making in real-world uncertain environments, such as robotics and human-robot interaction, where understanding cause-effect relationships is essential.

**Key contributions:**

- Design of an interactive LLM agent that solves POMDPs for object assembly and troubleshooting tasks.
- Development of a novel hybrid-reasoning framework combining LLM outputs with human causal mental models for improved decision-making.
- Demonstration through simulations that augmenting LLM planners with human causal models significantly improves task planning rewards across multiple state-of-the-art LLMs.
- Analysis of failure modes in LLMs and how human causal models help mitigate issues like hallucinations, incorrect belief updates, and overthinking.

## About the professor

**Thomas Emrys Williams** — Associate Professor, Department of Computer Science, Colorado School of Mines.

Research interests: Human-Robot Interaction, Natural Language Understanding and Generation, Artificial Intelligence, Cognitive Science, Robot Ethics, Augmented Reality

### Research links

- [Faculty/profile page](http://inside.mines.edu/~twilliams)
- [Professor website](http://mirrorlab.mines.edu/)
- [Resolved homepage](https://people.mines.edu/twilliams/)
- [Social profile](https://twitter.com/williamstome)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on augmenting large language models with psychologically grounded causal reasoning for planning under uncertainty, start by building a solid foundation in the core mathematical framework of Partially Observable Markov Decision Processes (POMDPs), which model decision-making under uncertainty. Next, explore the fundamentals of causal reasoning in AI to grasp the theoretical underpinnings of integrating human causal models with LLMs. Then, review the capabilities and limitations of large language models to appreciate their pattern recognition strengths and causal reasoning weaknesses. Finally, focus on the paper's central contribution by watching the authors' own talk presenting their novel hybrid reasoning framework that combines LLM outputs with human causal mental models.

### Partially Observable Markov Decision Processes *(prerequisite)*
POMDPs form the mathematical backbone of the paper's approach, modeling planning under uncertainty where the agent has incomplete information about the environment state. Understanding POMDPs is essential to grasp how the authors formulate object assembly and troubleshooting tasks and how belief states guide decision-making.

*How the paper uses it:* The paper formulates assembly and troubleshooting tasks as POMDPs to enable planning under uncertainty.

▶ [Lecture 15 Partially Observable MDPs (POMDPs) -- CS287 ...](https://www.youtube.com/watch?v=2dNp7QyoF_k) — Pieter Abbeel · 1:22:51

### Causal reasoning in AI *(prerequisite)*
Causal reasoning is fundamental to the paper's hybrid framework, which integrates human causal mental models with LLM outputs. This section covers the principles of causal inference, counterfactual reasoning, and causal representation learning that underpin the authors' approach to improving LLM planning.

*How the paper uses it:* The hybrid reasoning framework leverages human causal models to augment LLMs' shallow causal reasoning.

▶ [Zhijing Jin | Can LLMs Achieve Causal Reasoning and ...](https://www.youtube.com/watch?v=5glKZOfZsZs) — Zhijing Jin on AI Insights · 1:09:28

### Large language models capabilities and limitations *(prerequisite)*
Understanding the strengths and weaknesses of large language models, especially their limitations in causal reasoning and decision-making under uncertainty, contextualizes the motivation for augmenting them with human causal models. This section highlights why LLMs alone are insufficient for robust planning.

*How the paper uses it:* The paper addresses LLMs' limited causal reasoning abilities that hinder effective planning under uncertainty.

▶ [From Large Language Models to Reasoning Language ...](https://www.youtube.com/watch?v=NFwZi94S8qc) — Scalable Parallel Computing Lab, SPCL @ ETH Zurich · 1:01:24

### Paper authors talk *(the paper's own talk)*
This section features the authors' own presentation of their novel hybrid reasoning framework that integrates human causal mental models with LLM outputs for improved planning in POMDP-modeled tasks. It provides direct insights into their methodology, experiments, and key findings.

*How the paper uses it:* The authors' talk directly presents their hybrid framework and experimental results on augmenting LLMs with human causal models.

▶ [Fixing LLM Causal Reasoning](https://www.youtube.com/watch?v=bgs3HBfIAjU) — AI Research Roundup · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models (LLMs) can be improved with human causal reasoning for planning under uncertainty. We start with the basics of large language models, then cover causal reasoning in AI, followed by the mathematical framework of partially observable Markov decision processes (POMDPs) that model uncertainty in planning. Finally, we explore the paper's core method of hybrid reasoning frameworks that combine LLM outputs with human causal models for better decision-making.

### Large language models capabilities and limitations *(prerequisite)*
Learn what large language models are, their strengths in pattern recognition, and their key limitations, especially their shallow causal reasoning and failure modes like hallucinations. This foundational understanding clarifies why augmenting LLMs with causal models is necessary.

*How the paper uses it:* The paper builds on the insight that LLMs excel at pattern recognition but lack robust causal reasoning, limiting their decision-making under uncertainty.

▶ [Large Language Models and ChatGPT: What They Are and ...](https://www.youtube.com/watch?v=Y5ChuY0hrQk) — Institute for Experiential AI · 1:00:20

### Causal reasoning in AI *(prerequisite)*
Understand the basics of causal reasoning in AI, including causal structure learning and counterfactual reasoning, which enable machines to infer cause-effect relationships beyond correlations. This is crucial for improving planning and decision-making.

*How the paper uses it:* The paper integrates human causal mental models with LLMs to enhance causal reasoning capabilities in planning tasks.

▶ [Zhijing Jin | Can LLMs Achieve Causal Reasoning and ...](https://www.youtube.com/watch?v=5glKZOfZsZs) — Zhijing Jin on AI Insights · 1:09:28

### Partially Observable Markov Decision Processes *(prerequisite)*
Explore POMDPs, the mathematical framework modeling decision-making under uncertainty when the system state is not fully observable. Understanding belief states and planning in POMDPs is key to grasping the paper's approach to object assembly and troubleshooting tasks.

*How the paper uses it:* The paper formulates the planning tasks as POMDPs and uses belief states to guide the LLM agent's actions.

▶ [POMDP Introduction](https://www.youtube.com/watch?v=9G_KevA8DFY) — Reinforcement Learning · 33:28

### Hybrid reasoning frameworks
Learn about hybrid reasoning frameworks that combine outputs from different models or sources, such as LLMs and human causal models, to improve decision-making accuracy and robustness. This concept explains how conflicting information is resolved and integrated.

*How the paper uses it:* The paper proposes a novel hybrid reasoning framework that integrates human causal mental models with LLM outputs to improve planning under uncertainty.

▶ [Hybrid Model Strategies for AI Agents | How to Combine ...](https://www.youtube.com/watch?v=Ue1dGFYMEBk) — ScaleUp University · 4:14

### Paper authors talk *(the paper's own talk)*
Hear directly from researchers about their novel hybrid framework that augments LLMs with psychologically grounded causal models for planning under uncertainty. This talk provides a concise overview of the paper's motivation, approach, and key results.

*How the paper uses it:* This video presents the authors' explanation of their hybrid framework and its benefits in improving LLM planning performance.

▶ [Fixing LLM Causal Reasoning](https://www.youtube.com/watch?v=bgs3HBfIAjU) — AI Research Roundup · 1 year ago

## Already in your library

- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
