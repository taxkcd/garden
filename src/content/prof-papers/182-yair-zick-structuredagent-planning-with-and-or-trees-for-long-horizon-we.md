---
title: "182 · STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks — Yair Zick"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yair-zick"
source_hash: "b093af45df7b3415513d477f853fbca1e9a86c52939c3bed2ad40e07b46fb18d"
sequence: 182
generator: "outreach-garden: managed"
---

# 182 · STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks

## At a glance

- **Professor:** Yair Zick
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks](https://arxiv.org/pdf/2603.05294)
- **Authors:** Elita A. Lobo, Xu Chen, Jingjing Meng, Nan Xi, Yang Jiao, Chirag Agarwal, Yair Zick, Yan Gao
- **Year:** 2026

## Paper overview

This paper presents STRUCTUREDAGENT, a hierarchical planning framework that improves the ability of AI agents powered by large language models (LLMs) to perform complex, long-horizon web-browsing tasks. The framework uses AND/OR trees to break down tasks into subgoals and alternative strategies, enabling dynamic planning, error recovery, and interpretable plans. It also includes a structured memory module to track candidate solutions and constraints, enhancing performance on information-seeking tasks. Experiments show that STRUCTUREDAGENT outperforms existing LLM-based web agents on benchmarks involving complex shopping and web navigation tasks.

### Why it matters

**Research problem:** Existing web agents powered by LLMs struggle with complex, multi-step web-browsing tasks due to limited memory, weak planning abilities, greedy decision-making, and poor error recovery.

**Why it matters:** Improving web agents' ability to perform complex tasks is crucial for applications like enterprise automation, customer support, and autonomous research assistance, where agents must handle long sequences of actions and satisfy multiple constraints reliably.

**Key contributions:**

- Introduction of a hierarchical planning framework using ordered AND/OR trees for adaptive, interpretable decision-making in web tasks.
- Development of a structured memory module to track candidate entities and constraints, improving performance on multi-constraint information-seeking tasks.
- Demonstration of significant performance improvements over state-of-the-art LLM-based agents on benchmarks including WebVoyager, WebArena, and a custom shopping dataset.

## About the professor

**Yair Zick** — Associate Professor, Computer Science Laboratories, Univ. of Massachusetts Amherst.

Research interests: Computational aspects of game theory and fair division, fair allocation of indivisible resources, justice criteria such as envy-freeness, stability, diversity, trustworthy machine learning models, applying machine learning concepts to game theory

### Research links

- [Faculty/profile page](https://www.cics.umass.edu/about/directory/yair-zick)
- [Identity evidence](https://people.cs.umass.edu/~yzick)
- [Identity evidence](https://people.cs.umass.edu/~yzick/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand STRUCTUREDAGENT, start with foundational concepts in hierarchical task planning and large language model planning, which underpin the framework's approach to decomposing and executing complex tasks. Next, explore structured memory in AI agents to grasp how candidate solutions and constraints are tracked. Finally, focus on the core concept of STRUCTUREDAGENT itself, prioritizing the authors' own talks and advanced presentations on hierarchical AND/OR tree planning and dynamic web task execution.

### Hierarchical task planning *(prerequisite)*
Hierarchical task planning is essential for breaking down complex tasks into manageable subgoals, a foundational idea that STRUCTUREDAGENT builds upon by using AND/OR trees for task decomposition and planning. Understanding this will clarify how the framework structures long-horizon web tasks into interpretable plans.

*How the paper uses it:* STRUCTUREDAGENT decomposes complex tasks into hierarchies of subgoals and alternative strategies, relying on hierarchical planning principles.

▶ [HTN Planning in the Decima Engine | AI and Games ...](https://www.youtube.com/watch?v=b04n6JfDano) — AI and Games Conference · 38:23

### Large language model planning *(prerequisite)*
Large language model planning covers how LLMs can be leveraged for localized operations within planning frameworks, which is critical since STRUCTUREDAGENT invokes LLMs only for node expansion and repair. This knowledge helps understand the separation of planning responsibilities between the framework and the LLM.

*How the paper uses it:* STRUCTUREDAGENT separates planning responsibilities from the LLM, using it only for local tree operations like node expansion and repair.

▶ [Can LLM Models Plan?](https://www.youtube.com/watch?v=jqHIZ2G9TR0) — Minh Trinh's Artificial Intelligence · 1:01:23

### Structured memory in AI agents *(prerequisite)*
Structured memory modules are key to tracking candidate solutions and constraints, improving performance on multi-constraint tasks. Understanding how AI agents manage and utilize structured memory will illuminate STRUCTUREDAGENT's approach to maintaining dynamic tables of candidates and constraints.

*How the paper uses it:* STRUCTUREDAGENT introduces a structured memory module that tracks candidate entities and constraints to enhance constraint satisfaction.

▶ [AI Agent Memory Systems Explained: Episodic, Semantic ...](https://www.youtube.com/watch?v=hrciMR7e7Fk) — Arindam Majumder · 10:18

### STRUCTUREDAGENT authors talk *(the paper's own talk)*
The authors' own talks provide direct insights into the design, implementation, and evaluation of STRUCTUREDAGENT, offering the most precise and authoritative understanding of the framework. These talks often include detailed explanations of the hierarchical AND/OR tree planning and structured memory components.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on the STRUCTUREDAGENT framework.

▶ [The Multi-Agent Architecture That Actually Ships — Luke ...](https://www.youtube.com/watch?v=ow1we5PzK-o) — AI Engineer · 18:31

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential to understanding STRUCTUREDAGENT, starting with hierarchical task planning to grasp how complex tasks are broken down into manageable parts. Next, it covers structured memory in AI agents to appreciate how candidate solutions and constraints are tracked. Finally, it explains AND/OR tree planning, the core method STRUCTUREDAGENT uses for dynamic hierarchical planning in long-horizon web tasks.

### Hierarchical task planning *(prerequisite)*
Hierarchical task planning breaks complex tasks into smaller, manageable subgoals arranged in a hierarchy, enabling systematic planning and execution. This approach helps AI agents organize and solve multi-step problems by focusing on subproblems sequentially or in parallel.

*How the paper uses it:* STRUCTUREDAGENT uses hierarchical planning to decompose web tasks into subgoals and alternative strategies.

▶ [HTN Planning in the Decima Engine | AI and Games ...](https://www.youtube.com/watch?v=b04n6JfDano) — AI and Games Conference · 38:23

### Structured memory in AI agents *(prerequisite)*
Structured memory in AI agents refers to organized storage and retrieval of information about past decisions, candidate solutions, and constraints, enabling better context management and decision-making over long tasks. This memory helps agents track what has been tried and what constraints remain to be satisfied.

*How the paper uses it:* STRUCTUREDAGENT's structured memory module tracks candidate entities and constraints to improve multi-constraint task performance.

▶ [AI Agent Memory Systems Explained: Episodic, Semantic ...](https://www.youtube.com/watch?v=hrciMR7e7Fk) — Arindam Majumder · 10:18

### STRUCTUREDAGENT authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into the motivation, design choices, and unique contributions of STRUCTUREDAGENT, complementing technical understanding with practical perspectives.

*How the paper uses it:* The authors' presentation explains the framework's hierarchical planning and structured memory innovations.

▶ [🚀 The Agent Engineering Stack: The 11 Layers Every Production AI Agent Needs (2026 Edition)](https://www.youtube.com/watch?v=s3exKWHIvk8) — The ThinkLab by Saurabh · 6 days ago

## Already in your library

- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
