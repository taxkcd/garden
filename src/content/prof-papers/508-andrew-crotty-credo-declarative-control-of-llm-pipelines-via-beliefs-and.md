---
title: "508 · Credo: Declarative Control of LLM Pipelines via Beliefs and Policies — Andrew Crotty"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-crotty"
source_hash: "a222b0011ce9c964f60447374f69a1ce4405a95bacd00649b203a5e168d2b344"
sequence: 508
generator: "outreach-garden: managed"
---

# 508 · Credo: Declarative Control of LLM Pipelines via Beliefs and Policies

## At a glance

- **Professor:** Andrew Crotty
- **Institution:** Northwestern University
- **Paper:** [Credo: Declarative Control of LLM Pipelines via Beliefs and Policies](https://arxiv.org/pdf/2604.14401)
- **Authors:** Duo Lu, Andrew Crotty, Uğur Çetintemel
- **Year:** 2026

## Paper overview

This paper presents Credo, a framework that improves the flexibility and control of large language model (LLM) pipelines by separating logical pipeline design from physical execution decisions. Credo uses a semantic control plane with declarative beliefs and policies to adaptively manage pipeline execution based on runtime signals, making AI assistants more accurate and efficient in tasks like financial question answering.

### Why it matters

**Research problem:** Existing LLM orchestration frameworks use static control flows or unreliable agentic reasoning, leading to rigid, hard-to-debug pipelines that either waste resources or produce errors. There is a need for adaptive control that can dynamically adjust execution strategies based on the complexity and relevance of queries and evidence.

**Why it matters:** AI assistants increasingly operate in domains requiring stateful, adaptive decision-making with evolving information. Improving pipeline adaptivity enhances correctness, efficiency, and transparency, which are critical for real-world applications such as financial analysis.

**Key contributions:**

- Design of a semantic control plane with three layers: observation (beliefs), decision (policies), and execution (actions).
- Beliefs represent runtime state as (value, confidence) pairs computed by extractors, enabling explicit reasoning about pipeline conditions.
- Policies are declarative rules that trigger adaptive rewrites of pipeline operators or entire pipelines based on beliefs.
- Demonstration of Credo on FinanceBench, a financial question answering benchmark, showing how adaptive control improves accuracy and cost-efficiency.
- A web interface allowing interactive composition and tuning of beliefs and policies to observe their effects on pipeline execution.

## About the professor

**Andrew Crotty** — Assistant Professor, Computer Science, Northwestern University.

### Research links

- [Faculty/profile page](https://andrewcrotty.com)
- [Resolved homepage](https://www.mccormick.northwestern.edu/computer-science/)
- [GitHub](https://github.com/andrewcrotty/deepsqueeze)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** declarative policy frameworks
**The paper assumes:** declarative policy frameworks, rule-based system design, and runtime adaptive control
**Already in this field?** Skip this entirely if you already understand declarative policy languages and adaptive control systems in software pipelines.

To understand Credo's semantic control plane design, especially its use of declarative policies for adaptive LLM pipeline control, background on declarative policy frameworks is essential. The rigorous course offers a deep, structured university-level exploration of strategic management concepts related to policy frameworks, while the fast track provides a concise, practical introduction to policy analysis techniques. Choose the course for comprehensive foundational knowledge; choose the fast track for a focused, time-efficient overview of policy analysis relevant to declarative frameworks.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Strategic Management](https://www.youtube.com/playlist?list=PLIkqtRtuM1ToRbN4xa5Q2864LIK2vS6CN) — Business School 101 · 61 videos · 9.3h across the first 60 episodes

**Watch only this:** Episodes 1-6, about 54 minutes total — covering 'What is Strategic Management?', 'Vision, Mission, Value', 'Internal Analysis: The VRIO Framework', 'Analyzing MrBeast’s Success via VRIO', 'External Analysis: PESTEL Framework', and 'Industry Analysis: Porter's Five Forces Model'. These provide a solid foundation on strategic policy concepts relevant to declarative frameworks.

*Why it unblocks this paper:* This Strategic Management course covers frameworks and concepts around policies, decision-making, and organizational control, which underpin declarative policy frameworks like those used in Credo for adaptive pipeline control.

*If you want all of it:* Approximately 9.3 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bardach Policy Analysis](https://www.youtube.com/playlist?list=PLqHjin-DJco50D5gaM1sgI92UpjNlW3Il) — Craig DeLarge · 12 videos · 1.9h across 12 episodes

**Watch only this:** Episodes 1-6, about 54 minutes total — covering '8FP Bardach Why Defining the Problem is Hard', '8FP Bardach Introduction', '8FP Bardach Roles Of Criteria', '8FP Bardach Methods For Alternatives', '8FP Bardach What Book Tries Accomplish', and '8FP Bardach Thinking About Outcomes'. This subset provides a clear, quick grasp of policy analysis essentials.

*Why it unblocks this paper:* The Bardach Policy Analysis playlist offers a concise, practical guide to policy analysis, focusing on problem definition, criteria, methods, and evidence assembly, which aligns well with understanding declarative policies and their evaluation in Credo.

*If you want all of it:* Approximately 1.9 hours across all 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Credo framework for declarative control of LLM pipelines, start by building foundational knowledge on semantic control planes, declarative policy frameworks, adaptive LLM pipeline orchestration, and belief representation in AI systems. These prerequisites provide the theoretical and practical context for Credo's innovations. Finally, focus on the core concept of declarative control of LLM pipelines, featuring the authors' own talk or the closest research-level presentation to grasp the specific contributions and mechanisms introduced by Credo.

### Semantic control plane seminar *(prerequisite)*
Understanding the semantic control plane is crucial because Credo separates logical pipeline control from physical execution using a semantic layer that manages beliefs and policies. This seminar-level content provides a rigorous introduction to semantic layers and their role in AI systems, which underpins Credo's architecture.

*How the paper uses it:* Credo's design centers on a semantic control plane that manages runtime state and execution decisions.

▶ [Stanford Seminar - Leela: a Semantic Intelligent Agent](https://www.youtube.com/watch?v=9cjkDatLgVU) — Stanford Online · 1:21:56 · 7 years ago

### Declarative policy frameworks lecture *(prerequisite)*
Declarative policies are key to how Credo adapts pipeline execution dynamically. This lecture offers an academic perspective on normative and declarative frameworks, helping to understand the rule-based adaptive control that Credo employs.

*How the paper uses it:* Credo uses declarative policies as rules that trigger adaptive rewrites of pipeline operators based on beliefs.

▶ [10. Normative Frameworks for Business Decisions](https://www.youtube.com/watch?v=m0eRTYvmRDg) — MIT OpenCourseWare · 1:07:31 · 13 years ago

### Adaptive LLM pipeline orchestration lecture *(prerequisite)*
Adaptive orchestration of LLM pipelines is the broader context in which Credo operates. This lecture covers the challenges and solutions for dynamic control in LLM workflows, providing insight into why static pipelines are insufficient and how adaptivity improves performance and efficiency.

*How the paper uses it:* Credo advances adaptive LLM pipeline orchestration by enabling dynamic rewrites based on runtime beliefs.

▶ [Why Fixed Tool Chains Break AI Systems ? Dynamic Tool Orchestration Explained](https://www.youtube.com/watch?v=jW3vuJfWjh4) — ScaleUp University · 4:21 · 3 months ago

### Belief representation in AI systems talk *(prerequisite)*
Beliefs as (value, confidence) pairs are fundamental to Credo’s runtime state modeling and decision-making. This talk provides a focused academic treatment of belief systems in AI, which is essential to understanding how Credo extracts and reasons about pipeline conditions.

*How the paper uses it:* Credo models runtime state as beliefs with associated confidence, enabling explicit reasoning about pipeline conditions.

▶ [Lecture 59 Introduction to Beliefs Artificial Intelligence by IIT MADRAS](https://www.youtube.com/watch?v=nhem9p7yZFk) — KNOWLEDGE TREE · 25:20 · 8 years ago

### Declarative control of LLM pipelines lecture
This concept is the core of the paper, focusing on how Credo implements declarative control to manage LLM pipelines adaptively. The chosen video provides a research-level explanation of declarative pipeline programming models closely related to Credo's approach, offering detailed insights into declarative pipeline design and optimization.

*How the paper uses it:* Credo introduces declarative control of LLM pipelines via beliefs and policies to enable adaptive execution.

▶ [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://www.youtube.com/watch?v=im7bCLW2aM4) — MLOps Learners · 55:17 · Streamed 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Credo paper, start by grasping the foundational ideas of belief representation in AI systems, which underpin how Credo models runtime state. Next, learn about declarative policy frameworks to see how Credo uses rules to adapt pipeline execution. Then, explore the concept of a semantic control plane, central to Credo's separation of logical design from execution. Finally, study the core method of declarative control of LLM pipelines that Credo introduces for adaptive pipeline management.

### Belief representation in AI systems talk *(prerequisite)*
Beliefs in AI represent knowledge or assumptions about the world, often expressed with a value and a confidence level. Understanding how beliefs are modeled helps grasp how systems reason under uncertainty and update their knowledge dynamically.

*How the paper uses it:* Credo models runtime state as beliefs expressed as (value, confidence) pairs to enable explicit reasoning about pipeline conditions.

▶ [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — 3Blue1Brown · 15:11 · 6 years ago

### Declarative policy frameworks lecture *(prerequisite)*
Declarative policy frameworks allow specifying rules and constraints that govern system behavior without detailing step-by-step procedures. This approach makes policies easier to write, understand, and adapt, which is crucial for dynamic decision-making.

*How the paper uses it:* Credo uses declarative policies as rules that trigger adaptive rewrites of pipeline operators based on beliefs.

▶ [10. Normative Frameworks for Business Decisions](https://www.youtube.com/watch?v=m0eRTYvmRDg) — MIT OpenCourseWare · 1:07:31 · 13 years ago

### Semantic control plane seminar *(prerequisite)*
A semantic control plane manages system behavior by interpreting high-level semantic information rather than low-level signals. It separates decision-making logic from execution, enabling more flexible and adaptive system control.

*How the paper uses it:* Credo introduces a database-backed semantic control plane that separates logical pipeline design from physical execution decisions.

▶ [Control Plane vs Data Plane | Data Plane | Control Plane | Management Plane](https://www.youtube.com/watch?v=YOBuODvWkpg) — Simple Networkings · 8:12 · 2 years ago

### Declarative control of LLM pipelines lecture
Declarative control of LLM pipelines means specifying what the pipeline should achieve rather than how to execute each step, allowing dynamic adaptation and optimization. This approach improves flexibility, debugging, and resource efficiency in complex AI workflows.

*How the paper uses it:* Credo’s core method is declarative control of LLM pipelines via beliefs and policies to adaptively manage execution.

▶ [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://www.youtube.com/watch?v=im7bCLW2aM4) — MLOps Learners · 55:17 · Streamed 2 years ago

## Already in your library

- [Control Tone & Writing Style Of Your LLM Output](https://www.youtube.com/watch?v=miBG-a3FuhU) — also for: Controlling Chat Style in Language Models via Single-Direction Editing (Victor S. Sheng)
- [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=E7Fbf7R3x6I) — also for: CRAQL: A Composable Language for Querying Source Code (Rahul Simha)
- [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) — also for: The Model Forest Ensemble Kalman Filter (Andrey A. Popov)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [Knowledge Representation in Artificial Intelligence | Knowledge Representation in AI | Simplilearn](https://www.youtube.com/watch?v=_Fn5HYfK858) — also for: Knowledge-Guided Machine Learning: A Paradigm Shift in AI for Science (Xiaowei Jia)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of Credo's declarative control of LLM pipelines via beliefs and policies. Starting from a small-scale interactive belief and policy simulation, advancing to running and extending Credo's adaptive pipeline on FinanceBench data, and culminating in an extension addressing belief extraction cost optimization, each project deepens engagement with the paper's core ideas and challenges.

### Beginner — Interactive Belief and Policy Simulator for LLM Pipelines
*Effort: a weekend, ~8 hours*

You build a simple web-based simulator that models a small LLM pipeline with declarative beliefs (e.g., query complexity, evidence relevance) and policies that adapt pipeline steps based on these beliefs. The simulator lets users define beliefs as (value, confidence) pairs and write simple rules to trigger pipeline rewrites, visualizing the effect on pipeline execution flow.

**Why it shows you understood the paper:** This project demonstrates you grasp the core abstraction of Credo's semantic control plane: representing runtime state as beliefs and using declarative policies to adapt execution dynamically, separate from pipeline logic.

**Grounded in:** Design of a semantic control plane with three layers: observation (beliefs), decision (policies), and execution (actions).

**Tech stack:** TypeScript, React, Node.js

**Data:** No external data needed; you simulate belief values and pipeline steps interactively.

**Build it:**

1. Design a minimal pipeline model with a few operators (e.g., retrieve, generate, verify).
2. Implement belief objects as (value, confidence) pairs with adjustable inputs.
3. Create a simple declarative policy language or JSON schema to define rules triggered by beliefs.
4. Build a React UI to compose beliefs and policies and visualize pipeline execution changes.
5. Add logging or tracing to show how policies rewrite pipeline operators based on beliefs.

**Ships as:** A GitHub repo with a React app demonstrating interactive belief and policy composition and their effect on a mock LLM pipeline execution.

**Stretch goal:** Add support for confidence-weighted policy triggering and simulate cost/latency tradeoffs.

### Intermediate — Adaptive LLM Pipeline Execution with Credo on FinanceBench
*Effort: 2-3 weekends, ~20 hours*

You clone and run the Credo framework from the authors' GitHub repository, reproduce the adaptive pipeline experiments on the FinanceBench financial QA benchmark, and implement a new simple policy to dynamically switch retrieval methods based on query complexity belief. You compare accuracy and cost metrics with and without your policy.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand Credo's belief extraction and policy-driven adaptive rewrites, and extend the system with new policies that affect pipeline execution and metrics.

**Grounded in:** Demonstration of Credo on FinanceBench, showing adaptive control improves accuracy and cost-efficiency; policies trigger adaptive rewrites based on belief evaluations.

**Tech stack:** Python 3.11, Docker, Credo framework from https://github.com/brown-db/credo

**Data:** FinanceBench financial question answering benchmark as used in the paper, available via the Credo repository.

**Build it:**

1. Clone and set up the Credo framework following the repository instructions.
2. Run baseline adaptive pipeline experiments on FinanceBench to reproduce reported metrics.
3. Study existing beliefs and policies implemented in Credo for query complexity and retrieval method switching.
4. Implement a new declarative policy that switches retrieval method (e.g., BM25 to vector retrieval) based on a threshold on query_complexity belief.
5. Evaluate the impact of your policy on accuracy and cost compared to baseline pipelines.
6. Document your policy design, experimental setup, and results.

**Verified links from the paper:**

- <https://github.com/brown-db/credo> — released by the paper's authors

**Ships as:** A GitHub repo fork of Credo with your new policy, scripts to run experiments on FinanceBench, and a README reporting your findings.

**Stretch goal:** Add a policy to invalidate pipeline stages when evidence relevance belief is low and measure correctness improvements.

### Advanced — Cost-Aware Belief Extraction Optimization in Credo
*Effort: 3-4 weeks*

You extend the Credo framework to implement a cost-based optimizer for belief extraction planning, addressing the paper's limitation that belief extraction can be expensive. Your system dynamically plans which beliefs to extract based on estimated cost and expected impact on pipeline decisions, balancing accuracy and efficiency. You evaluate this on FinanceBench queries.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of Credo's architecture and the tradeoffs in adaptive pipeline control. It also shows ability to design and implement a novel optimization layer within the semantic control plane.

**Grounded in:** Limitation: Belief extraction can be expensive, requiring cost-based optimization; Future direction: Developing cost-based optimizers for belief extraction planning.

**Tech stack:** Python 3.11, Docker, Credo framework from https://github.com/brown-db/credo

**Data:** FinanceBench financial QA benchmark used in the paper, accessed via Credo repository.

**Build it:**

1. Study Credo's belief extraction mechanism and identify cost metrics for extractors (e.g., LLM invocation latency/cost).
2. Design a cost-aware planner that selects a subset of beliefs to extract per query based on cost and expected policy impact.
3. Implement the planner as an extension to Credo's semantic control plane, integrating with existing belief and policy layers.
4. Modify pipeline execution to use the planner's decisions to skip or defer expensive belief extractions.
5. Run experiments on FinanceBench comparing accuracy, cost, and latency with and without the planner.
6. Analyze tradeoffs and document your design, implementation, and evaluation.

**Verified links from the paper:**

- <https://github.com/brown-db/credo> — released by the paper's authors

**Ships as:** A GitHub repo fork of Credo with cost-aware belief extraction planner, experimental scripts, and a detailed README with evaluation results and discussion.

**Stretch goal:** Explore automating discovery of new beliefs and policies using search or testing guided by your cost-aware planner.

_The FinanceBench dataset and Credo codebase must be accessible and runnable as per the authors' GitHub repository; verify environment setup and dependencies before starting intermediate and advanced projects._
