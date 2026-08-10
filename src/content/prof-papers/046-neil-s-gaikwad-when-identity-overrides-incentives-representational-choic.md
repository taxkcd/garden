---
title: "046 · When Identity Overrides Incentives: Representational Choices as Governance Decisions in Multi-Agent LLM Systems — Neil S. Gaikwad"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gaikwad"
source_hash: "d7c83dcac756c9387e5c14a18583d4dfb355c67809a413cb62bf975d5c94ee69"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational to advanced knowledge necessary to understand the research paper on multi-agent LLM systems and their strategic behavior influenced by personas. It covers essential mathematical foundations, machine learning and neural network basics, transformer architectures and prompt engineering, game theory concepts for strategic decision-making, and advanced multi-agent system design and social computing. Work through these resources in order to build a comprehensive understanding before reading the paper.

**The paper assumes:** game theory including Nash equilibria, large language model architectures and prompting, multi-agent systems, strategic decision-making, and AI governance concepts
**Time to work through:** roughly 100-115 hours if you watch everything, about 60-70 hours if you follow the skip guidance for each playlist
**Already in this field?** Skip stages 1-3 if you already have a background in game theory, multi-agent systems, and large language models; focus on the later stages about persona conditioning and strategic behavior in LLMs.

### Stage 1 · Probability and Linear Algebra Foundations *(foundational)*
Understanding LLMs and their behavior requires knowledge of probability distributions and linear algebra operations such as vector spaces and matrix multiplication, which underpin embeddings and model computations.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the MIT 18.06 Linear Algebra, Spring 2005 playlist by Prof. Gilbert Strang, focusing on episodes 1 through 23 which cover the geometry of linear equations, matrix operations, vector spaces, subspaces, eigenvalues, and diagonalization—core concepts needed to understand embeddings and neural network computations.

*Move on when you can:* Explain how a vector space represents word embeddings and compute basic matrix-vector products used in neural network layers.

### Stage 2 · Introduction to Machine Learning and Neural Networks *(core)*
LLMs are built on neural network architectures trained via machine learning; grasping these fundamentals is essential to understand model behavior and conditioning via prompts or personas.

▶ **Course:** [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

*What to watch:* Focus on the Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018 playlist, especially lectures 1 through 12, which cover supervised learning, neural networks, backpropagation, and training via gradient descent—fundamental concepts to understand how LLMs learn and are conditioned.

*Move on when you can:* Describe how a feedforward neural network processes input data and explain the concept of training via gradient descent.

### Stage 3 · Large Language Models and Prompt Engineering *(core)*
The paper studies multi-agent systems composed of LLMs and manipulates their behavior through persona prompts; understanding transformer architectures and prompt conditioning is critical to follow the experimental design.

▶ **Course:** [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

*What to watch:* Use the Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 playlist, focusing on lectures 7 through 14 which cover attention mechanisms, transformers, pretraining, prompting, and reasoning with LLMs—key to understanding how prompt design influences LLM behavior.

*Move on when you can:* Explain the transformer architecture and demonstrate how prompt design can influence LLM output behavior.

### Stage 4 · Game Theory and Strategic Decision-Making *(core)*
The paper analyzes multi-agent interactions modeled as strategic games and evaluates Nash equilibria; understanding game theory concepts is necessary to interpret equilibrium selection and payoff structures.

▶ **Course:** [Game Theory (Yale ECON 159)](https://www.youtube.com/playlist?list=PL8hA0lYK0I4k3FTLCCWISQNW3UwHh3MLY) — alsike · 24 videos · 28.5h across 24 episodes

*What to watch:* Watch the Yale Game Theory (Yale ECON 159) playlist by alsike, focusing on episodes 1 through 10 which introduce Nash equilibrium, best responses, mixed strategies, and strategic thinking—foundational for analyzing the multi-agent strategic games in the paper.

*Move on when you can:* Define Nash equilibrium and solve for equilibria in simple multi-player strategic games.

### Stage 5 · Multi-Agent Systems and Social Computing *(advanced)*
The paper focuses on multi-agent LLM systems interacting in policy simulations; knowledge of multi-agent coordination, communication, and social behavior modeling is required to understand system-level outcomes.

▶ **Course:** [Agentic AI Masterclass: Building Multi-Agent Systems with AutoGen, LangGraph & CrewAI](https://www.youtube.com/playlist?list=PLdKd-j64gDcDjZgJw6bECfdcTx0YrrSVF) — Analytics Vidhya · 29 videos · 5.7h across the first 28 episodes

*What to watch:* Watch the Agentic AI Masterclass: Building Multi-Agent Systems with AutoGen, LangGraph & CrewAI playlist by Analytics Vidhya, focusing on the first 15 episodes which cover the architecture, message flow, agent communication, and building multi-agent systems—critical to grasp how multi-agent LLM systems operate and are governed.

*Move on when you can:* Model a multi-agent interaction scenario and analyze how agent communication protocols affect collective outcomes.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of how persona assignment influences strategic behavior in multi-agent LLM systems, as studied in the paper. The beginner project reproduces a key empirical result on equilibrium selection using a simplified setup and familiar tools. The intermediate project reimplements the core experimental method on a smaller scale, comparing persona vs no-persona conditions with one LLM model. The advanced project extends the paper by exploring persona effects in repeated interactions, addressing a stated limitation and requiring new experimental design and analysis.

### Beginner — Reproduce Persona Effect on Equilibrium Selection
*Effort: a weekend, ~8 hours*

You build a simplified multi-agent strategic game simulation with four agents and binary actions, using prompt templates to condition a single open-source LLM (e.g., Qwen-7B) with and without personas. You replicate the paper’s key finding that persona presence biases agents toward socially preferred Green Transition equilibria, even when payoff-optimal Tragedy equilibria exist.

**Why it shows you understood the paper:** This project shows you grasp the core empirical phenomenon that persona conditioning overrides payoff incentives in multi-agent LLM games, and you can operationalize the experimental setup to measure equilibrium selection rates.

**Grounded in:** Empirical demonstration that a single binary design choice (persona presence) shifts equilibrium attainment by up to 90 percentage points across models and scenarios.

**Tech stack:** Python 3.11, OpenAI-compatible LLM API or HuggingFace transformers, Jupyter Notebook, matplotlib or seaborn for plotting

**Data:** Simulated environmental policy four-agent strategic games with binary actions, inspired by the paper’s scenario descriptions; no public dataset available so you synthesize payoff tables and scenario parameters based on paper examples.

**Build it:**

1. Implement a simplified four-agent strategic game environment with binary actions and payoff tables representing Green Transition and Tragedy equilibria.
2. Write prompt templates for agent action selection with and without persona descriptions, following the paper’s prompt structure.
3. Use an open-source LLM (e.g., Qwen-7B from HuggingFace) to generate agent actions under both conditions.
4. Run multiple trials per condition and record equilibrium outcomes.
5. Visualize and compare equilibrium selection rates between persona and no-persona conditions.

**Verified links from the paper:**

- <https://huggingface.co/Qwen/Qwen2.5-7B-Instruct> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to run the simulation, Jupyter notebook showing equilibrium selection results, and README explaining the reproduction of the persona effect.

**Stretch goal:** Add payoff visibility variation to observe interaction effects as in the paper’s 2×2 factorial design.

### Intermediate — Reimplement Core Experiment on Persona and Payoff Visibility
*Effort: 1-3 weekends*

You reimplement the paper’s 2×2 factorial experiment varying persona presence and payoff visibility using one LLM model (e.g., Qwen-7B). You run multiple environmental policy scenarios modeled as four-agent strategic games, measure Nash equilibrium attainment and selection, and compare results to a baseline condition without personas and with visible payoffs.

**Why it shows you understood the paper:** This project demonstrates you can reconstruct the paper’s core experimental method and metrics from scratch, including prompt engineering, multi-agent interaction, and equilibrium analysis, showing deeper comprehension of the paper’s approach and results.

**Grounded in:** First controlled study of how persona conditioning and payoff visibility jointly determine equilibrium outcomes in multi-agent LLM systems.

**Tech stack:** Python 3.11, HuggingFace transformers (Qwen-7B), Jupyter Notebook, pandas, matplotlib or seaborn

**Data:** Simulated environmental policy scenarios with four agents and binary actions, synthesized based on the paper’s scenario descriptions; no public dataset available.

**Build it:**

1. Design and implement the 2×2 factorial experiment varying persona presence (with/without) and payoff visibility (visible/hidden).
2. Create prompt templates for each condition following the paper’s description and persona variants.
3. Run multiple trials across a balanced set of scenarios, collecting agent actions and equilibrium outcomes.
4. Implement Nash equilibrium detection logic to classify outcomes as Green Transition or Tragedy equilibria.
5. Analyze and visualize equilibrium selection rates across conditions, comparing to baseline.
6. Document methodology, results, and comparison to paper findings in a detailed notebook or report.

**Verified links from the paper:**

- <https://huggingface.co/Qwen/Qwen2.5-7B-Instruct> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with experiment code, analysis notebooks, and a report comparing your results to the paper’s key findings on persona and payoff visibility effects.

**Stretch goal:** Incorporate chain-of-thought reasoning prompts to analyze shifts in agent reasoning patterns as in the paper’s chain-of-thought analysis.

### Advanced — Extend Persona Effects to Repeated Multi-Agent Games
*Effort: few weeks*

You extend the paper’s single-shot game design by implementing repeated multi-agent strategic games with persona-conditioned LLM agents. You investigate how persona presence influences equilibrium selection and strategic adaptation over multiple rounds, addressing a key limitation and future direction of the paper. You analyze whether persona effects persist, diminish, or evolve with repeated interactions.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper’s limitations and future directions, design and implement a novel experimental setup, and perform meaningful analysis of persona effects beyond the original scope, demonstrating research-level initiative and insight.

**Grounded in:** Study limited to single-shot game design; future direction to investigate effects of repeated interactions on persona effects.

**Tech stack:** Python 3.11, HuggingFace transformers (Qwen-7B or Qwen-32B), Jupyter Notebook, pandas, matplotlib or seaborn, possibly Docker for reproducibility

**Data:** Simulated repeated environmental policy strategic games with four agents and binary actions, synthesized based on the paper’s scenario descriptions; no public dataset available.

**Build it:**

1. Design a repeated game framework allowing multiple rounds of agent interaction with memory of past actions.
2. Adapt persona and payoff visibility prompt templates to support repeated interaction context.
3. Implement agent action selection using an LLM model with persona conditioning across rounds.
4. Run experiments comparing persona vs no-persona conditions over multiple rounds in several scenarios.
5. Analyze equilibrium selection dynamics, adaptation patterns, and stability over time.
6. Document findings, limitations, and implications for persona effects in repeated multi-agent LLM systems.

**Verified links from the paper:**

- <https://huggingface.co/Qwen/Qwen2.5-7B-Instruct> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/Qwen/Qwen2.5-32B-Instruct> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for repeated multi-agent games, analysis notebooks showing temporal dynamics of persona effects, and a comprehensive README discussing extension beyond the original paper.

**Stretch goal:** Explore alternative payoff formats or action orderings in repeated games to further investigate representational choice effects.

_No authors' own code or datasets are available; all projects require synthesizing scenario data based on the paper's descriptions and using third-party open-source LLM models from HuggingFace._
