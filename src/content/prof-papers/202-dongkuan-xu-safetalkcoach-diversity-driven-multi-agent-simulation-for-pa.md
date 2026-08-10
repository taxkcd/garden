---
title: "202 · SafeTalkCoach: Diversity-Driven Multi-Agent Simulation for Parent-Teen Health Conversations — Dongkuan Xu"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dongkuan-xu"
source_hash: "8873da6494898605aaa01681884c7b133070bc56e13efc2ec82e6d40e57ce482"
sequence: 202
generator: "outreach-garden: managed"
---

# 202 · SafeTalkCoach: Diversity-Driven Multi-Agent Simulation for Parent-Teen Health Conversations

## At a glance

- **Professor:** Dongkuan Xu
- **Institution:** North Carolina State University
- **Paper:** [SafeTalkCoach: Diversity-Driven Multi-Agent Simulation for Parent-Teen Health Conversations](https://arxiv.org/abs/2602.00017)
- **Authors:** Benyamin Tabarsi, Wenbo Li, Tahreem Yasir, Aryan Santhosh Kumar, Laura Widman, Dongkuan (DK) Xu, Tiffany Barnes
- **Year:** 2026

## Paper overview

This paper presents SafeTalkCoach, a multi-agent AI framework that simulates realistic and diverse parent-teen conversations about sexual health. It addresses the scarcity of real-world data due to privacy concerns by generating dialogues grounded in evidence-based guidelines and diverse scenarios. The system models parent and child personas with adaptive engagement and controls conversation flow to produce natural, guideline-adherent dialogues useful for research and training.

### Why it matters

**Research problem:** Effective parent-child communication about sexual health is important but difficult to study due to scarce real-world data caused by privacy and sensitivity concerns. Existing large language model (LLM) dialogue generation methods often lack realism, diversity, and adherence to best practices, limiting their utility for research and training.

**Why it matters:** Improving parent-teen sexual health communication can increase adolescents' knowledge, contraceptive use, and willingness to discuss sexual issues, which benefits their well-being. However, lack of authentic data hinders development of effective communication strategies, automated interventions, and counselor training.

**Key contributions:**

- Design and implementation of SafeTalkCoach, a multi-agent dialogue generation framework with agent-level control and hierarchical diversification for parent-child sexual health conversations.
- Creation of a dataset of 1,495 generated dialogues covering three key topics: safe sex, abstinence, and consent.
- Comprehensive evaluations showing SafeTalkCoach produces more diverse, realistic, and guideline-adherent dialogues than baseline methods, with better controllability and reduced off-topic risks.

## About the professor

**Dongkuan Xu** — North Carolina State University.

### Research links

- [Faculty/profile page](https://csc.ncsu.edu/people/dxu27/)
- [Identity evidence](http://personal.psu.edu/dux19)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multi-Agent Reinforcement Learning
**The paper assumes:** foundations of multi-agent reinforcement learning, agent coordination, and control in AI systems
**Already in this field?** Skip this entirely if you already understand multi-agent reinforcement learning fundamentals and agent-based AI control architectures.

This background focuses on Multi-Agent Reinforcement Learning (MARL), which is essential to understand the multi-agent AI framework used in SafeTalkCoach for simulating adaptive, controlled parent-teen dialogues. The rigorous course provides a deep, structured foundation in reinforcement learning concepts including multi-agent settings, while the fast track offers a concise, intuition-driven introduction to deep MARL methods. Choose the rigorous course for comprehensive mastery and the fast track for a quick but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS234 I Reinforcement Learning I Spring 2024 I Emma Brunskill](https://www.youtube.com/playlist?list=PLoROMvodv4rN4wG6Nk6sNpTEbuOSosZdX) — Stanford Online · 16 videos · 20.2h across 16 episodes

**Watch only this:** Lectures 1-3 for foundational RL concepts (about 3.75 hours), plus Lecture 14 'Multi-Agent Game Playing' (about 1.25 hours), totaling approximately 5 hours — this subset covers core RL and the multi-agent perspective relevant to the paper.

*Why it unblocks this paper:* Stanford CS234 Reinforcement Learning I by Emma Brunskill is a top-tier university course covering foundational and advanced RL topics, including multi-agent game playing, which directly supports understanding the agent coordination and control mechanisms in SafeTalkCoach.

*If you want all of it:* 20.2 hours across 16 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Deep Multi-Agent Reinforcement Learning](https://www.youtube.com/playlist?list=PLFihX_3MLxS9iS3Hz8VDWAyU4QCdjQUKr) — The Agent Whisperer · 5 videos · 0.8h across 5 episodes

**Watch only this:** All 5 episodes, about 0.8 hours total — this covers the problem formulation, actor-critic methods, and centralized training with decentralized execution, providing a compact yet comprehensive overview.

*Why it unblocks this paper:* The Agent Whisperer's 'Introduction to Deep Multi-Agent Reinforcement Learning' playlist offers a clear, concise, and well-structured introduction to MARL concepts, focusing on problem formulation and key algorithms, ideal for quickly grasping the essentials behind SafeTalkCoach's multi-agent design.

*If you want all of it:* 0.8 hours across 5 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SafeTalkCoach paper, start with foundational knowledge on large language models and controllable text generation, which underpin the multi-agent dialogue system. Next, explore multi-agent dialogue simulation methods to grasp the architectural and interaction design. Finally, focus on the core concept of SafeTalkCoach itself, prioritizing any direct talks by the authors or closely related academic presentations.

### Large language models for dialogue *(prerequisite)*
Large language models (LLMs) are the foundation for generating natural, coherent, and contextually relevant dialogues in SafeTalkCoach. Understanding their capabilities and limitations is essential to appreciate how the parent and child agents produce realistic conversations.

*How the paper uses it:* SafeTalkCoach uses LLM-powered agents to generate parent-teen dialogues grounded in guidelines and persona modeling.

▶ [“Audio Language Models” - Neil Zeghidour](https://www.youtube.com/watch?v=FblY6HvaVu8) — TTIC · 39:39

### Controllable text generation *(prerequisite)*
Controllable text generation techniques enable the SafeTalkCoach system to guide agent personas and conversation flow, ensuring adherence to communication guidelines and realistic interaction dynamics. This knowledge helps understand how dialogue diversity and control are balanced.

*How the paper uses it:* SafeTalkCoach employs control modules and prompting strategies to steer dialogue generation according to evidence-based personas and engagement levels.

▶ [Controllable and Creative Natural Language Generation](https://www.youtube.com/watch?v=GJdcbQdIOY0) — Simons Institute for the Theory of Computing · 1:01:16

### Multi-agent dialogue simulation
Multi-agent dialogue simulation is the core methodology behind SafeTalkCoach, involving multiple AI agents interacting to produce realistic conversations. Studying advanced seminars on multi-agent systems will clarify the design choices and challenges in simulating adaptive, controlled dialogues.

*How the paper uses it:* SafeTalkCoach's multi-agent architecture includes parent, child, and moderator agents collaborating to generate diverse, realistic conversations.

▶ [CHM Seminar Series: Multiagent Artificial General Intelligence – Joel Z Leibo](https://www.youtube.com/watch?v=HFLY2gTum3U) — Max Planck Institute for Human Development · 50:34 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts to understand the SafeTalkCoach paper, starting with the basics of large language models (LLMs) for dialogue generation, then exploring controllable text generation techniques that guide agent behavior, followed by hierarchical diversification methods to ensure dialogue variety and realism, and finally covering multi-agent dialogue simulation as the core method enabling realistic parent-teen conversation generation. Each step builds intuition with clear, concise videos focused on the paper's specific uses of these concepts.

### Large language models for dialogue *(prerequisite)*
Learn what large language models are and how they generate human-like text, especially in dialogue settings. This foundation helps understand how SafeTalkCoach uses LLMs to power its parent, child, and moderator agents.

*How the paper uses it:* SafeTalkCoach uses LLM-powered agents to generate realistic and adaptive parent-teen conversations.

▶ [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=3eScVwKzP68) — Flirting with Technology · 4:14

### Controllable text generation *(prerequisite)*
Understand how AI systems can be guided to produce text with specific attributes or follow certain rules, which is crucial for generating conversations that adhere to sexual health guidelines and persona traits in SafeTalkCoach.

*How the paper uses it:* SafeTalkCoach controls agent personas and conversation flow through controllable text generation techniques.

▶ [Controllable and Creative Natural Language Generation](https://www.youtube.com/watch?v=GJdcbQdIOY0) — Simons Institute for the Theory of Computing · 1:01:16

### Multi-agent dialogue simulation
Explore how multiple AI agents can interact in simulated conversations, each with distinct roles and controls, to produce natural and controlled dialogue flows as done in SafeTalkCoach.

*How the paper uses it:* SafeTalkCoach’s core method is a multi-agent simulation with parent, child, and moderator agents generating adaptive conversations.

▶ [Simulating and Evaluating Multi-Turn Conversations](https://www.youtube.com/watch?v=3ODizwXu-uk) — Langfuse · 5:56

## Already in your library

- [Coordinated Multi Agent Imitation Learning - ICML 2017](https://www.youtube.com/watch?v=KBms4_LKbbg) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of SafeTalkCoach by progressively engaging with its core multi-agent dialogue simulation framework and its evaluation. The beginner project recreates a simplified parent-teen dialogue simulation with persona and engagement controls. The intermediate project implements the multi-agent architecture with hierarchical diversification on a small synthetic dataset, comparing diversity metrics against a baseline. The advanced project extends SafeTalkCoach by incorporating richer emotional and relational dynamics into agent personas, addressing a key limitation noted in the paper.

### Beginner — Simplified Parent-Teen Dialogue Simulator
*Effort: a weekend, ~8 hours*

You build a small multi-agent dialogue simulator with two agents: a Parent Agent and a Child Agent. The Parent Agent follows a simple persona with role and attitude parameters, and the Child Agent has a dynamic engagement score that modulates its responsiveness. The conversation flow is controlled to produce short, guideline-adherent dialogues on a single sexual health topic.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core multi-agent design and adaptive engagement mechanism, showing you can implement controlled dialogue generation with persona and engagement factors.

**Grounded in:** Design and implementation of SafeTalkCoach, a multi-agent dialogue generation framework with agent-level control and hierarchical diversification for parent-child sexual health conversations.

**Tech stack:** Python 3.11, OpenAI GPT-4 API or similar LLM API, FastAPI (optional for serving)

**Data:** Synthetic dialogue prompts and scenario seeds inspired by the paper's three topics (safe sex, abstinence, consent), manually created for simulation.

**Build it:**

1. Define simple persona parameters for Parent Agent (role: e.g., authoritative, supportive; attitude: e.g., warm, neutral).
2. Implement Child Agent with a numeric engagement score that influences response length and detail.
3. Create a turn-based dialogue loop where Parent Agent generates prompts guided by persona and guidelines, and Child Agent responds based on engagement.
4. Add simple rules to terminate conversation after a fixed number of turns or when engagement drops below a threshold.
5. Test the simulator with example scenarios and log dialogues.

**Ships as:** A Python script or small app that runs simulated parent-teen dialogues with adjustable persona and engagement, with example dialogues in the README.

**Stretch goal:** Add a simple Moderator Agent that decides when to end the conversation based on engagement and dialogue content.

### Intermediate — Multi-Agent Dialogue Generation with Diversity Metrics
*Effort: 2 weekends, ~20 hours*

You reimplement the SafeTalkCoach multi-agent framework core with three agents (Parent, Child, Moderator) using LLMs, and implement hierarchical diversification at the prompting level to generate diverse dialogues on sexual health topics. You generate a small dataset of simulated dialogues and compare diversity metrics (e.g., situational coverage, dialogue trajectory diversity) against a baseline method such as direct prompting.

**Why it shows you understood the paper:** This project shows you can implement the paper's core multi-agent architecture and hierarchical diversification approach, and quantitatively evaluate dialogue diversity, demonstrating comprehension of the paper's main technical contributions and evaluation methodology.

**Grounded in:** Design and implementation of SafeTalkCoach, a multi-agent dialogue generation framework with agent-level control and hierarchical diversification for parent-child sexual health conversations; SafeTalkCoach outperforms baselines in dialogue-level diversity.

**Tech stack:** Python 3.11, OpenAI GPT-4 API or similar LLM API, Jupyter Notebook for analysis, scikit-learn or numpy for metrics

**Data:** Synthetic scenario seeds inspired by the paper's three sexual health topics, generated manually or via LLM prompting to simulate the paper's hybrid data pipeline.

**Build it:**

1. Implement Parent, Child, and Moderator agents as separate LLM prompt templates with persona and engagement controls.
2. Incorporate hierarchical diversification by varying data inputs, prompt templates, and agent parameters to generate diverse dialogues.
3. Generate a dataset of ~100 dialogues covering the three topics.
4. Implement simple diversity metrics such as n-gram diversity, situational coverage, and dialogue trajectory diversity.
5. Compare your multi-agent framework's dialogue diversity against a baseline direct prompting method.
6. Document results and example dialogues.

**Ships as:** A Jupyter Notebook and Python scripts that generate and evaluate multi-agent dialogues with diversity metrics, including plots and example dialogues in the README.

**Stretch goal:** Add a basic naturalness and coherence scoring module using LLM-based evaluation to compare dialogue quality.

### Advanced — Extending SafeTalkCoach with Emotional and Relational Dynamics
*Effort: 3+ weeks*

You extend the SafeTalkCoach multi-agent framework by incorporating richer emotional and relational dynamics into the Parent and Child agents. This includes modeling family communication habits, emotional stakes, and relationship closeness as additional persona dimensions influencing dialogue generation and engagement. You implement stronger termination criteria via an enhanced Moderator Agent. You evaluate the impact on dialogue realism and controllability.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the SafeTalkCoach architecture and its challenges. It shows your ability to innovate on multi-agent dialogue simulation by integrating complex interaction factors while maintaining control and realism.

**Grounded in:** Limitations: Simplified persona and control modules omit complex factors like relationship closeness and emotional stakes; Multi-agent architecture sometimes misses natural conversation stopping points; Future directions: Incorporate richer interaction factors, stronger termination criteria, and deeper personalization in agent models.

**Tech stack:** Python 3.11, OpenAI GPT-4 API or similar LLM API, FastAPI or Flask for serving (optional), Jupyter Notebook for evaluation, scikit-learn or numpy

**Data:** Synthetic dialogues extended with emotional and relational context, created by augmenting scenario seeds with emotional state and relationship closeness parameters.

**Build it:**

1. Design extended persona models for Parent and Child agents including emotional state, relationship closeness, and communication habits.
2. Modify agent prompt templates to incorporate these new persona dimensions influencing dialogue style and engagement.
3. Enhance the Moderator Agent with stronger termination criteria based on emotional cues and dialogue completeness.
4. Generate a new set of dialogues with the extended framework.
5. Evaluate dialogue realism, coherence, and controllability compared to the baseline multi-agent framework.
6. Document methodology, results, and limitations.

**Ships as:** A GitHub repository with code for the extended multi-agent framework, example dialogues demonstrating emotional and relational dynamics, evaluation scripts, and a detailed README explaining the extension and findings.

**Stretch goal:** Conduct a small user study or expert feedback session to assess ecological validity of the extended dialogues.
