---
title: "202 · SafeTalkCoach: Diversity-Driven Multi-Agent Simulation for Parent-Teen Health Conversations — Dongkuan Xu"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dongkuan-xu"
source_hash: "6861bb75302df82b7651e45ca31bc63cea9fd5b5ab044ad3cfa1814199ef7d9f"
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
