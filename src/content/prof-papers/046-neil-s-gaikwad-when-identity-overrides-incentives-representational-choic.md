---
title: "046 · When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems — Neil S. Gaikwad"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gaikwad"
source_hash: "d441cb3822bb3e058a8ca0122a7796d85c71e661c6bdce0beddeb857b8fd46b1"
sequence: 46
generator: "outreach-garden: managed"
---

# 046 · When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems

## At a glance

- **Professor:** Neil S. Gaikwad
- **Institution:** University of North Carolina
- **Paper:** [When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems](https://arxiv.org/pdf/2601.10102)
- **Authors:** Viswonathan Manoranjan, Snehalkumar ‘Neil’ S. Gaikwad
- **Year:** 2026

## Paper overview

This paper studies how assigning role-based identities (personas) to large language model (LLM) agents in multi-agent systems affects their strategic decision-making. The authors find that personas strongly bias agents toward socially preferred outcomes, overriding explicit payoff incentives. This means that the way agents are represented influences the system's behavior more than the actual incentives, which has important implications for AI simulations used in policy and governance.

### Why it matters

**Research problem:** Whether LLM agents in multi-agent strategic games follow explicit payoff incentives or their assigned role-based personas remains untested, especially how persona presence and payoff visibility interact to influence equilibrium outcomes.

**Why it matters:** Multi-agent LLM systems are increasingly used in policy simulations and governance contexts. Understanding how design choices like persona assignment affect agent behavior is critical because these choices shape system-level outcomes and may embed normative biases, impacting the reliability and neutrality of AI-driven simulations.

**Key contributions:**

- First controlled study of how persona conditioning and payoff visibility jointly determine equilibrium outcomes in multi-agent LLM systems.
- Empirical demonstration that a single binary design choice (persona presence) shifts equilibrium attainment by up to 90 percentage points across models and scenarios.
- Identification of three distinct behavioral profiles across model families showing how representational choices govern strategic behavior.
- Establishment that representational choices in multi-agent LLM systems are governance decisions with direct consequences for system evaluation and deployment.

## About the professor

**Neil S. Gaikwad** — Assistant Professor, Department of Computer Science, University of North Carolina.

Research interests: machine learning and social computing, human-AI collaborative systems focused on equity, fairness, and value alignment

### Research links

- [Faculty/profile page](https://www.cs.unc.edu/~gaikwad/)
- [Identity evidence](https://web.media.mit.edu/~gaikwad)
- [LinkedIn](https://www.linkedin.com/in/neilgaikwad)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on how identity (persona) influences strategic behavior in multi-agent LLM systems, start with foundational knowledge on multi-agent strategic games and Nash equilibrium concepts, which underpin the experimental design and analysis. Then, build background on large language model agents to appreciate the agent architecture used. Finally, focus on the paper's core concept of representational choices as governance decisions in multi-agent systems, culminating with the authors' own talk if available.

### Multi-agent strategic games lecture *(prerequisite)*
This section covers the game-theoretic framework essential for understanding agent interactions in the paper's experiments. It introduces multi-agent reinforcement learning and strategic behavior modeling, which are foundational to analyzing equilibrium outcomes.

*How the paper uses it:* The paper models environmental policy scenarios as four-agent strategic games, so understanding multi-agent strategic games is crucial.

▶ [Reinforcement Learning for Complex Security Games and Beyond](https://www.youtube.com/watch?v=fVLwKRLDYSg) — Simons Institute for the Theory of Computing · Streamed 4 years ago

### Nash equilibrium lecture *(prerequisite)*
Nash equilibrium is the core solution concept used in the paper to analyze strategic outcomes. This section explains the definition, intuition, and examples of Nash equilibria, enabling comprehension of equilibrium attainment and selection in the experiments.

*How the paper uses it:* The paper analyzes Nash equilibrium attainment and selection to understand how personas affect strategic outcomes.

▶ [Nash Equilibrium in 5 Minutes](https://www.youtube.com/watch?v=tDQ4_W3eUiw) — Ashley Hodgson · 3 years ago

### Representational choices in multi-agent systems lecture
This section focuses on how assigning identities or roles to agents influences their strategic behavior, a central theme of the paper. It discusses how representational choices govern multi-agent interactions and outcomes, providing context for the paper's framing of persona assignment as a governance decision.

*How the paper uses it:* The paper's core contribution is demonstrating that representational choices like persona assignment govern strategic behavior in multi-agent LLM systems.

▶ [Prof. Jeff Rosenschein - Cooperative Games in Multiagent Systems](https://www.youtube.com/watch?v=1-ep_QqYVvQ) — Hebrew University of Jerusalem · 1:01:51 · 12 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how role-based identities (personas) influence strategic decision-making in multi-agent large language model (LLM) systems. Starting with the basics of large language models and multi-agent systems, it then covers game theory fundamentals like Nash equilibrium before focusing on the paper's core idea that representational choices govern agent behavior in multi-agent LLM setups.

### Large language model agents seminar *(prerequisite)*
Learn what large language models (LLMs) are, how they work, and how they can act as agents in multi-agent systems. This foundation helps understand the nature of the AI agents studied in the paper.

*How the paper uses it:* The paper studies multi-agent systems composed of LLM agents, so understanding LLM basics is essential.

▶ [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — 3Blue1Brown · 1 year ago

### Multi-agent strategic games lecture *(prerequisite)*
This section introduces the concept of multiple agents interacting strategically, each making decisions that affect others. Understanding multi-agent systems and their challenges sets the stage for analyzing strategic behavior in the paper's experiments.

*How the paper uses it:* The paper models environmental policy scenarios as multi-agent strategic games involving LLM agents.

▶ [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — MATLAB · 3 years ago

### Nash equilibrium lecture *(prerequisite)*
Nash equilibrium is a core game theory concept describing stable outcomes where no agent benefits from unilaterally changing their strategy. Grasping this helps interpret the paper's analysis of equilibrium selection by LLM agents.

*How the paper uses it:* The paper evaluates how LLM agents reach or fail to reach Nash equilibria under different persona and payoff conditions.

▶ [The Nash Equilibrium (A Beautiful Mind, John Nash): Definition, Explanation & Examples in One Minute](https://www.youtube.com/watch?v=MSxgzaeKCJ0) — One Minute Economics · 7 years ago

### Representational choices in multi-agent systems lecture
This concept covers how assigning identities or roles to agents influences their behavior and interactions in multi-agent systems. It directly relates to how persona assignment acts as a governance decision shaping outcomes.

*How the paper uses it:* The paper's core finding is that persona presence biases LLM agents toward socially preferred equilibria, overriding payoff incentives.

▶ [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — Shaw Talebi · 17:40 · 5 months ago

## Already in your library

- [Identity and Economic Incentives](https://www.youtube.com/watch?v=zfL2ecNwqaw) — also for: When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems (Neil S. Gaikwad)
- [Lecture 5: Nash Equilibrium](https://www.youtube.com/watch?v=ftCXguW2k4o) — also for: When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems (Neil S. Gaikwad)
