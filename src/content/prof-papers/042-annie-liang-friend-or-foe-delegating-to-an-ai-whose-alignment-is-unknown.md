---
title: "042 · Friend or Foe: Delegating to an AI whose Alignment is Unknown — Annie Liang"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-anniehliang-com"
source_hash: "246afb8c31d144bbf198572d837f31dd8fd31c8c5e4329eda827a403a3aa6ac7"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Friend or Foe: Delegating to an AI whose Alignment is Unknown,' start by building foundational knowledge in robust decision making under ambiguity, delegation and principal-agent theory, and information design theory. These prerequisites provide the theoretical and methodological background necessary to grasp the paper's novel contributions. Then, focus on the core concept of AI delegation under alignment uncertainty, which directly addresses the paper's main research problem. Finally, if available, watch the authors' own talk to see their presentation of the framework and results firsthand.

### Robust decision making under ambiguity *(prerequisite)*
This concept covers methods for making decisions that remain effective under worst-case scenarios and uncertain environments, which is crucial for understanding how the paper models worst-case payoffs when AI alignment and data distributions are ambiguous. The selected talk from Mitsubishi Electric Research Laboratories (MERL) is a recent seminar presenting advanced robust decision making techniques with learning efficiency, aligning well with the paper's theoretical approach.

*How the paper uses it:* The paper models worst-case outcomes under ambiguity about AI alignment and data, making robust decision making foundational.

▶ [[MERL Seminar Series Spring 2026] Robust Decision Making Without Compromising Learning Efficiency](https://www.youtube.com/watch?v=NnHUtizWcAo) — Mitsubishi Electric Research Laboratories (MERL) · 6 months ago

### Delegation and principal-agent theory *(prerequisite)*
Delegation and principal-agent theory provide the economic framework to analyze how a principal (human designer) delegates decisions to an agent (AI) with potentially misaligned objectives. The chosen lecture from the Centre International de Rencontres Mathématiques offers a comprehensive and advanced overview of principal-agent modeling, suitable for graduate-level understanding.

*How the paper uses it:* The paper formalizes delegation to an AI with unknown alignment, a principal-agent problem with ambiguity.

▶ [Dylan Possamaï: Principal Agent Modelling - lecture 1](https://www.youtube.com/watch?v=dJrDMUldreI) — Centre International de Rencontres Mathématiques · 1:28:15 · 5 years ago

### Information design theory *(prerequisite)*
Information design theory studies how to optimally structure information flow to influence decision-making outcomes, directly relevant to the paper's approach of restricting AI input informativeness. The lecture on 'Information design -- Correlated equilibrium approach' from a university mechanism design course provides a rigorous and technical treatment of information design suitable for advanced readers.

*How the paper uses it:* The paper extends information design theory to settings with ambiguity about AI objectives and data distributions.

▶ [Lecture 14.3: Information design -- Correlated equilibrium approach (Mechanism Design)](https://www.youtube.com/watch?v=DJghAJVZOkM) — economification · 27:52 · 5 years ago

### AI delegation under alignment uncertainty
This concept directly addresses the core challenge of delegating decisions to AI systems when their objectives are uncertain or misaligned. The Anthropic course lecture on delegation provides a detailed and research-driven exploration of delegation under AI alignment uncertainty, making it highly relevant and rigorous for understanding the paper's central problem.

*How the paper uses it:* The paper studies how to delegate decisions optimally when AI alignment is unknown, the central research problem.

▶ [Lesson 4: A closer look at Delegation | AI Fluency: Framework & Foundations Course](https://www.youtube.com/watch?v=EljzyfdYkrc) — Anthropic · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand delegating decisions to AI systems with uncertain alignment, as studied in the paper. We start with the basics of delegation and principal-agent theory to grasp the human-AI relationship, then cover robust decision making under ambiguity to understand managing worst-case risks. Next, we explore information design theory to see how input restrictions can be optimally set, and finally focus on AI delegation under alignment uncertainty, the paper's core concept.

### Delegation and principal-agent theory *(prerequisite)*
Delegation and principal-agent theory explain how one party (the principal) delegates decisions to another (the agent), who may have different goals. Understanding this helps clarify the challenges when humans delegate decisions to AI systems that might not share their objectives.

*How the paper uses it:* The paper models the human designer as a principal delegating decisions to an AI agent with unknown alignment.

▶ [Principal-Agent Modelling](https://www.youtube.com/watch?v=z1dprB5p30w) — Ashley Hodgson · 15:44 · 6 years ago

### Robust decision making under ambiguity *(prerequisite)*
Robust decision making focuses on making choices that perform well even in worst-case scenarios when there is uncertainty about the environment or model. This concept is key to understanding how the paper manages risks from AI misalignment and uncertain data.

*How the paper uses it:* The paper characterizes worst-case payoffs under ambiguity about AI alignment and data distributions.

▶ [Robust Decision Making](https://www.youtube.com/watch?v=IXlb8o-OOv8) — Deep Uncertainty · 4 years ago

### Information design theory *(prerequisite)*
Information design studies how to optimally control what information is revealed to decision-makers to influence outcomes. This theory underpins the paper’s approach to restricting AI input information to balance risk and reward.

*How the paper uses it:* The paper uses information design to set bounds on how informative AI inputs can be for safe delegation.

▶ [Lecture 13.1: Introduction to Information design (Mechanism Design)](https://www.youtube.com/watch?v=807cm9E4OTQ) — economification · 28:27 · 5 years ago

### AI delegation under alignment uncertainty
This concept focuses on how to delegate decisions to AI systems when their goals may not align with the human’s, especially in high-stakes settings. It covers strategies to limit AI discretion and information to manage risks from unknown AI objectives.

*How the paper uses it:* This is the core concept of the paper, which develops a framework for optimal delegation under uncertain AI alignment.

▶ [Lesson 4: A closer look at Delegation | AI Fluency: Framework & Foundations Course](https://www.youtube.com/watch?v=EljzyfdYkrc) — Anthropic · 1 year ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the paper "Friend or Foe: Delegating to an AI whose Alignment is Unknown." The beginner project recreates a key theoretical visualization from the paper to grasp the risk-reward frontier concept. The intermediate project implements the core delegation model with asymmetric input restrictions on simulated data, comparing delegation strategies. The advanced project extends the model by incorporating dynamic or adaptive input restrictions to address a stated future direction, exploring improved delegation outcomes under evolving treatment success distributions.

### Beginner — Visualizing the Risk-Reward Frontier
*Effort: a weekend, ~8 hours*

You build a small interactive web app or script that plots the piecewise-linear risk-reward frontier described in the paper, showing the tradeoff between best-case and worst-case payoffs under fixed information environments. The visualization will illustrate distrust points (no AI reliance) and reliance points (full AI reliance) across groups ordered by their baseline treatment success rates.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental tradeoff the paper characterizes and can translate the theoretical piecewise-linear frontier into a concrete visualization, a key conceptual contribution.

**Grounded in:** The risk-reward frontier for fixed information environments is piecewise-linear, connecting distrust points (no AI reliance) to reliance points (full AI reliance) across groups ordered by tradeoff slopes.

**Tech stack:** JavaScript, React, D3.js

**Data:** Simulated group baseline treatment success rates and corresponding payoff points generated according to the paper's model description.

**Build it:**

1. Read the paper section describing the risk-reward frontier and distrust/reliance points.
2. Simulate a small set of groups with baseline treatment success rates spanning below and above the treatment threshold (0.5).
3. Calculate best- and worst-case payoffs for distrust and reliance points per group using the paper's formulas.
4. Use D3.js or React+D3 to plot these points and connect them piecewise linearly to form the frontier.
5. Add interactive features to highlight groups and show payoff values on hover.
6. Write a README explaining the visualization and how it relates to the paper's theory.

**Ships as:** A GitHub repo with a React+D3 app visualizing the risk-reward frontier and a README linking the visualization to the paper's theoretical result.

**Stretch goal:** Add sliders to vary the designer's preference weight on worst-case outcomes and dynamically update the frontier visualization.

### Intermediate — Implementing Asymmetric Input Restrictions in AI Delegation
*Effort: 2 weekends, ~20 hours*

You implement the paper's core delegation model where a designer sets asymmetric input restrictions and treatment-rate constraints for multiple groups. Using simulated binary treatment and outcome data, you compute the risk-reward frontier under different delegation strategies, including full reliance, full distrust, and optimal asymmetric restrictions. You compare outcomes and visualize the frontier.

**Why it shows you understood the paper:** This project shows you can translate the paper's theoretical model into a computational framework, reproduce key results on asymmetric input restrictions, and evaluate delegation tradeoffs quantitatively.

**Grounded in:** Optimal input restrictions are asymmetric: for groups where treatment is unlikely to help, the AI is allowed to be fully informative about treatment success but restricted about treatment harm, and vice versa for groups where treatment is likely to help.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, Pandas

**Data:** Simulated binary treatment and outcome data for multiple groups, generated to reflect varying baseline success rates around the treatment threshold (0.5).

**Build it:**

1. Review the paper's formal model of input restrictions and treatment-rate constraints.
2. Write code to simulate group-level binary treatment and outcome data with specified baseline success probabilities.
3. Implement functions to calculate best- and worst-case payoffs under full distrust, full reliance, and asymmetric input restrictions.
4. Compute the risk-reward frontier by aggregating group-level frontiers weighted by group sizes.
5. Visualize the piecewise-linear frontier and compare delegation strategies.
6. Document the implementation and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook repository implementing the delegation model with asymmetric input restrictions, showing computed risk-reward frontiers and comparisons.

**Stretch goal:** Add a simple baseline that uses symmetric input restrictions and compare its performance to the asymmetric optimal strategy.

### Advanced — Adaptive Input Restrictions for AI Delegation under Evolving Treatment Success
*Effort: 3+ weeks*

You extend the paper's static delegation model by implementing an adaptive input restriction mechanism that updates based on observed outcomes or evolving beliefs about treatment success rates. This addresses the paper's future direction on incorporating learning dynamics and adaptive delegation strategies. You simulate a dynamic environment where group success rates change over time and evaluate how adaptive restrictions improve the risk-reward tradeoff compared to static policies.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the model and the ability to innovate by integrating learning and adaptation into delegation under alignment uncertainty.

**Grounded in:** Incorporating learning dynamics where the designer updates beliefs about AI alignment over time. The framework focuses on ex-ante design of information and treatment rates, not on dynamic or adaptive delegation strategies.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, Pandas, scikit-learn

**Data:** Simulated time-series binary treatment and outcome data for multiple groups with evolving baseline success probabilities to mimic changing environments.

**Build it:**

1. Review the paper's static delegation model and its assumptions about fixed input restrictions and treatment rates.
2. Design a simulation environment where group baseline success rates evolve over discrete time steps.
3. Implement a Bayesian or frequentist updating mechanism for the designer to revise beliefs about success probabilities based on observed outcomes.
4. Develop an adaptive input restriction policy that adjusts informativeness bounds and treatment quotas dynamically according to updated beliefs.
5. Compare the risk-reward frontier and delegation outcomes of the adaptive policy versus static policies over multiple simulation runs.
6. Write a detailed report and README explaining the adaptive model, simulation setup, results, and implications for AI governance.

**Ships as:** A comprehensive GitHub repo with code and documentation demonstrating adaptive input restrictions improving delegation outcomes in a dynamic setting.

**Stretch goal:** Incorporate partial observability or noisy verification of AI decisions into the adaptive framework to further approach real-world complexity.
