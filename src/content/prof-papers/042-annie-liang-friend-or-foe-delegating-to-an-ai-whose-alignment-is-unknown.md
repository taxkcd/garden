---
title: "042 · Friend or Foe: Delegating to an AI whose Alignment is Unknown — Annie Liang"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-anniehliang-com"
source_hash: "5f50c2fe3d1bc48a4295a0bc2ba5c23b5d252b6616ed2e459ddd1d7ba938807a"
sequence: 42
generator: "outreach-garden: managed"
---

# 042 · Friend or Foe: Delegating to an AI whose Alignment is Unknown

## At a glance

- **Professor:** Annie Liang
- **Institution:** Northwestern University
- **Paper:** [Friend or Foe: Delegating to an AI whose Alignment is Unknown](https://www.anniehliang.com/papers/AI_Alignment.pdf)
- **Authors:** Drew Fudenberg, Annie Liang
- **Year:** 2026

## Paper overview

This paper studies how a human designer can delegate risky decisions, such as medical treatments, to an AI whose goals may or may not align with the designer's. The designer controls how much information the AI receives and limits the AI's discretion by setting treatment quotas. The authors characterize the tradeoff between best-case outcomes (when the AI is aligned) and worst-case outcomes (when the AI is misaligned), providing a framework to optimally balance risk and reward in AI delegation.

### Why it matters

**Research problem:** How should a human designer optimally delegate decisions to an AI system when the AI's alignment with the designer's objectives is uncertain, particularly in high-stakes settings where misalignment can cause harm?

**Why it matters:** AI misalignment poses significant risks in critical decision-making contexts, such as healthcare, where incorrect AI actions can cause harm. Understanding how to limit AI discretion and information use can mitigate these risks while still leveraging AI's benefits.

**Key contributions:**

- Formalization of delegation to an AI with unknown alignment using treatment-rate constraints and input informativeness bounds.
- Characterization of the risk-reward frontier as a piecewise-linear curve connecting distrust and reliance points across groups.
- Proof that optimal input restrictions are asymmetric, allowing informativeness in one direction but restricting it in the other depending on baseline treatment success rates.
- Identification of a cutoff structure for group reliance: the designer relies on the AI only in groups with baseline success rates near the treatment threshold.
- Extension of delegation and information design theory to settings with ambiguity about AI objectives and data distributions.

## About the professor

**Annie Liang** — Associate Professor of Economics (with tenure), Northwestern University.

Research interests: economic and social implications of AI systems, the use of machine learning and other computational tools in economic modeling, and the optimal design and acquisition of information.

### Research links

- [Faculty/profile page](https://www.anniehliang.com)
- [Resolved homepage](https://anniehliang.com)

## Learning path

To deeply understand the paper 'Friend or Foe: Delegating to an AI whose Alignment is Unknown,' start by building foundational knowledge on ambiguity and robust decision theory, which underpins the model's treatment of uncertainty about AI alignment. Next, study information design and Bayesian persuasion to grasp how the paper extends these theories to restrict AI inputs optimally. Then, explore delegation theory in economics to understand the principal-agent framework relevant to AI delegation. Finally, focus on the paper's core concept by reviewing advanced talks on AI alignment and delegation, prioritizing the authors' own or closely related academic presentations.

## Recommended videos (in order)

### Ambiguity and robust decision theory seminar *(prerequisite)*
This section covers decision-making under uncertainty and ambiguity sets, which is central to modeling unknown AI alignment in the paper. Understanding ambiguity aversion and robust optimization frameworks will provide the theoretical background for the paper's ambiguity set and worst-case payoff analysis.

*How the paper uses it:* The paper models uncertainty about AI alignment and data distributions using ambiguity sets and worst-case payoffs.

▶ [Harita Dellaporta (UCL) - DRO with Robust Bayesian Ambiguity Sets](https://www.youtube.com/watch?v=J0FbxhYDBXU) — Post-Bayes seminar · 17:25 · 1 year ago

### Information design and Bayesian persuasion lecture *(prerequisite)*
Information design and Bayesian persuasion theory explain how a principal can optimally restrict or reveal information to an agent to influence decisions. The paper extends these ideas to design input restrictions on AI to manage alignment risk, making this background essential for understanding the theoretical approach.

*How the paper uses it:* The authors extend information design theory to restrict AI inputs optimally under alignment uncertainty.

▶ [Emir Kamenica - Persuasion vs. incentives](https://www.youtube.com/watch?v=I3pccR-dumw) — Israel Institute for Advanced Studies · 1:28:02 · 9 years ago

### Delegation theory in economics seminar *(prerequisite)*
Delegation theory provides the economic framework for understanding how a principal delegates decisions to an agent with potentially misaligned objectives. This theory underlies the paper's model of a human designer delegating to an AI with unknown alignment.

*How the paper uses it:* The paper formalizes delegation to an AI with unknown alignment using economic delegation theory concepts.

▶ [Margins of Misalignment - Daniel Hermann](https://www.youtube.com/watch?v=AA5nRwChWbY) — ILIAD Conference · 57:34

### Authors' talk on AI delegation alignment *(the paper's own talk)*
This section features advanced talks by leading researchers on AI alignment and delegation, providing direct insight into the challenges and theoretical approaches to AI alignment uncertainty. Although the authors' own talk is not available, these talks closely relate to the paper's themes and offer rigorous academic perspectives.

*How the paper uses it:* These talks provide context and depth on AI alignment challenges and delegation, complementing the paper's theoretical contributions.

▶ [[Talk] Jerry Wei - Constitutional Classifiers](https://www.youtube.com/watch?v=tKKXEQH5pJo) — Princeton AI Alignment · 59:28 · 1 year ago
