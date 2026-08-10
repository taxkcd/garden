---
title: "182 · STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks — Yair Zick"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yair-zick"
source_hash: "8e5bf37f424bfaea4546417ec47e3c814a71795b60bba5de9f8e46d2e650b974"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hierarchical Task Planning AND/OR Trees
**The paper assumes:** hierarchical task planning, AND/OR tree search algorithms, and symbolic AI planning
**Already in this field?** Skip this entirely if you already understand hierarchical planning methods and AND/OR tree representations in AI task decomposition.

To understand STRUCTUREDAGENT's core hierarchical planning framework using AND/OR trees, it is essential to grasp hierarchical task planning concepts and tree-based decomposition of tasks. The rigorous course option offers a deep, university-level treatment of planning and learning, ideal for readers seeking comprehensive understanding and theoretical foundations. The fast track provides a concise, focused introduction to hierarchical task network planning and related planning concepts, suitable for readers who want a quick yet solid grasp of the key ideas without investing many hours.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CSE574 Planning & Learning (Fall 2022 ASU)](https://www.youtube.com/playlist?list=PLNONVE5W8PCRvVliwpI5PGcRBI5xdywha) — Subbarao Kambhampati · 15 videos · 36.6h across 15 episodes

**Watch only this:** Lectures 1-4 plus Lectures 8-9, about 12 hours total — covering introduction to planning, atomic transition systems, refinement planning strategies, planning heuristics, and hierarchical task networks.

*Why it unblocks this paper:* This ASU course by Subbarao Kambhampati covers hierarchical planning and task networks in depth, including abstraction, hierarchy, and planning heuristics, directly relevant to understanding AND/OR tree-based hierarchical planning frameworks like STRUCTUREDAGENT.

*If you want all of it:* 36.6 hours across all 15 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [ai unit 6 planning](https://www.youtube.com/playlist?list=PL_xGuJKqvelB_Hniz9Ivoqjt6j8l30tng) — SPPU CS & IT Solutions · 11 videos · 2.0h across 11 episodes

**Watch only this:** Episodes 1-3, about 30 minutes total — covering hierarchical task network planning, planning graphs, and state space search planning.

*Why it unblocks this paper:* This short-form playlist provides a clear, concise introduction to hierarchical task network planning and classical AI planning algorithms, giving a quick but relevant overview of hierarchical planning concepts needed to understand the paper's approach.

*If you want all of it:* 2.0 hours across 11 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of STRUCTUREDAGENT's hierarchical AND/OR tree planning and structured memory for long-horizon web tasks. The beginner project recreates a core mechanism of AND/OR tree task decomposition using familiar programming tools. The intermediate project implements a simplified version of the hierarchical planning framework on a public web navigation task, comparing it against a baseline greedy planner. The advanced project extends the framework by improving planning efficiency via heuristic pruning, addressing a stated future direction in the paper.

### Beginner — AND/OR Tree Task Decomposition Simulator
*Effort: a weekend, ~8 hours*

You build a command-line simulator in Python that models a hierarchical AND/OR tree representing a simplified web task. The simulator allows defining tasks as AND nodes (subgoals) and OR nodes (alternative strategies) and simulates a depth-first traversal with node expansion and repair operations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core planning structure—how complex tasks are decomposed into subgoals and alternatives using AND/OR trees, a fundamental contribution of STRUCTUREDAGENT.

**Grounded in:** Introduction of a hierarchical planning framework using ordered AND/OR trees for adaptive, interpretable decision-making in web tasks.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate task trees with synthetic examples representing simple web tasks.

**Build it:**

1. Implement data structures for AND nodes, OR nodes, and atomic actions.
2. Create a sample hierarchical task tree with at least two levels of AND and OR nodes.
3. Implement a modified greedy depth-first search to traverse and expand nodes.
4. Add simple repair logic to backtrack and try alternative OR nodes upon failure.
5. Add console output to visualize traversal steps and decisions.

**Ships as:** A Python script with example task trees and console logs showing hierarchical planning traversal and error recovery.

**Stretch goal:** Add a simple structured memory module to track candidate solutions and constraints during traversal.

### Intermediate — Simplified STRUCTUREDAGENT Planner on Web Navigation Tasks
*Effort: 2 weekends, ~20 hours*

You implement a simplified hierarchical planner using AND/OR trees in Python that plans and executes multi-step web navigation tasks on a public dataset or simulated environment. You compare its success rate and trajectory length against a baseline greedy planner that does not use hierarchical planning.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of hierarchical AND/OR tree planning and demonstrate its advantage over greedy approaches, reflecting the paper's key experimental claims.

**Grounded in:** STRUCTUREDAGENT constructs and maintains a dynamic hierarchical AND/OR planning tree during task execution, interleaving planning and action. It uses a modified greedy depth-first search to expand and execute nodes representing subgoals (AND nodes), alternative strategies (OR nodes), and atomic actions.

**Tech stack:** Python 3.11, FastAPI (optional for simulation), Jupyter Notebook

**Data:** Use a small simulated web navigation environment or a public web navigation task dataset (e.g., MiniWoB or a synthetic task environment) as a substitute for the paper's Amazon shopping and WebArena benchmarks.

**Build it:**

1. Design data structures for AND/OR trees and atomic web actions.
2. Implement the modified greedy depth-first search planner with node expansion and repair.
3. Create or adapt a simple web navigation task environment with multi-step goals and constraints.
4. Implement a baseline greedy planner that selects actions without hierarchical planning.
5. Run experiments comparing success rates and average trajectory lengths between planners.
6. Document results and visualize example hierarchical plans.

**Ships as:** A Jupyter notebook or Python project demonstrating hierarchical planning on web navigation tasks with comparative metrics and interpretable plan outputs.

**Stretch goal:** Incorporate a basic structured memory module to track candidate entities and constraints, improving constraint satisfaction.

### Advanced — Heuristic-Enhanced AND/OR Tree Planner for Efficient Long-Horizon Web Tasks
*Effort: 3+ weeks*

You extend the intermediate hierarchical planner by implementing admissible heuristics to guide AND/OR tree exploration, aiming to reduce trajectory length and runtime on complex tasks. You evaluate the efficiency gains and robustness compared to the baseline hierarchical planner without heuristics.

**Why it shows you understood the paper:** This project tackles a stated future direction from the paper—improving planning efficiency via heuristics—demonstrating deep comprehension and the ability to innovate beyond the original framework.

**Grounded in:** Improving admissible heuristics for AND/OR tree planning to enhance efficiency.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use the same simulated or public web navigation tasks as in the intermediate project to evaluate efficiency improvements.

**Build it:**

1. Research admissible heuristics applicable to AND/OR tree search (e.g., cost estimates for subgoals).
2. Implement heuristic functions integrated with the existing modified greedy depth-first search planner.
3. Modify the planner to use heuristics for node expansion ordering and pruning.
4. Run comparative experiments measuring trajectory length, runtime, and success rates.
5. Analyze and visualize the impact of heuristics on planning efficiency.
6. Write detailed documentation explaining heuristic design and experimental results.

**Ships as:** A documented Python project showing heuristic-guided hierarchical planning with quantitative analysis of efficiency improvements.

**Stretch goal:** Explore integrating structured memory noise reduction techniques to balance constraint tracking and performance.
