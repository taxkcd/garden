---
title: "750 · Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows — Diana Marculescu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-diana-marculescu"
source_hash: "ca766f899daf5d79124d5faf33a723ac13ec4d176d2da999f2e1c15441b78c5b"
sequence: 750
generator: "outreach-garden: managed"
---

# 750 · Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows

## At a glance

- **Professor:** Diana Marculescu
- **Institution:** University of Texas at Austin
- **Paper:** [Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows](https://arxiv.org/pdf/2504.04319)
- **Authors:** Dimitrios Stamoulis, Diana Marculescu
- **Year:** 2025

## Paper overview

This paper presents Geo-OLM, a framework that uses smaller, cost-efficient open language models (OLMs) combined with a state-driven prompting approach to automate complex Earth observation (EO) workflows. It addresses the high computational and financial costs of using large proprietary models like GPT-4o for geospatial tasks by structuring workflows as state machines, which reduces reasoning complexity and enables smaller models to perform competitively at a fraction of the cost.

### Why it matters

**Research problem:** Large-scale geospatial AI applications for Earth observation and sustainability rely heavily on large proprietary language models, which incur prohibitive computational and financial costs, limiting accessibility for researchers and practitioners. Smaller open language models struggle with complex reasoning required for these workflows, leading to degraded performance.

**Why it matters:** Earth observation studies are critical for sustainability, climate monitoring, disaster response, and environmental analysis. Making geospatial AI tools affordable and accessible is essential for enabling researchers, NGOs, and policymakers to conduct large-scale, real-world analyses without unsustainable costs or environmental impact.

**Key contributions:**

- Introduction of Geo-OLM, a geospatial prompting scheme modeling EO workflows as state machines for efficient use of smaller OLMs.
- Comprehensive evaluation across multiple LLM families (proprietary and open) and serving runtimes, providing practitioner guidelines.
- Demonstration of cost and performance benefits on single- and multi-agent EO benchmarks, with up to 100× cost reduction.
- Extension of Geo-OLM to a real-world disaster impact assessment case study replicating the 2023 Turkey earthquake analysis.

## About the professor

**Diana Marculescu** — Professor, Motorola Regents Chair in Electrical and Computer Engineering #2, Cockrell Family Chair for Departmental Leadership #5, Electrical and Computer Engineering, University of Texas at Austin.

Research interests: energy- and reliability-aware computing, hardware aware machine learning, and computing for sustainability and natural science applications

### Research links

- [Faculty/profile page](https://www.ece.utexas.edu/people/faculty/diana-marculescu)
- [Professor website](http://users.ece.utexas.edu/~dianam/)
- [Resolved homepage](https://users.ece.utexas.edu/~dianam/index.html)
- [Lab website](http://enyac.org/)
- [Google Scholar](https://scholar.google.com/citations?user=MRHzTAIAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** finite state machines
**The paper assumes:** finite state machines and automata theory
**Already in this field?** Skip this entirely if you already understand finite state machines and how they model computational workflows.

This background focuses on finite state machines (FSMs), which are central to the Geo-OLM paper's approach of modeling geospatial workflows as explicit state machines to enable efficient reasoning with smaller language models. The rigorous course option provides a deep, university-level foundation in FSM theory and design, while the fast track offers a concise, visual introduction to FSM concepts and Mealy/Moore machines, suitable for quickly grasping the essentials needed to understand the paper's methodology.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture Series TCS-Theory of Computer Science](https://www.youtube.com/playlist?list=PLYK_lTZR6h8Xpb5WPAjtuJb19YsjZsZgP) — Swati Ringe · 38 videos · 32.6h across 38 episodes

**Watch only this:** Lectures 2 through 6, about 4.25 hours — covering Introduction to Finite State Machine, Deterministic FSM, FSM design, and Deterministic Automata designs, which provide a solid understanding of FSM concepts relevant to Geo-OLM.

*Why it unblocks this paper:* This is a comprehensive university lecture series on Theory of Computer Science with multiple focused lectures on finite state machines, including deterministic and nondeterministic FSMs, design, and minimization. It covers the theoretical foundations and practical FSM design principles that underpin the paper's state-driven prompting and workflow modeling.

*If you want all of it:* 32.6 hours across all 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mealy & Moore Machine | Chapter 5 | Theory of Computation](https://www.youtube.com/playlist?list=PLBlnK6fEyqRhduNC2PI4FPJqAhwoNTe1d) — Neso Academy · 14 videos · 2.0h across 14 episodes

**Watch only this:** Episodes 1 through 7, about 2 hours — covering Introduction to Finite Automata, DFA basics, transition diagrams, and problem sets, providing a practical and intuitive grasp of FSMs.

*Why it unblocks this paper:* This Neso Academy playlist offers a clear, concise introduction to finite automata and FSMs, including deterministic and nondeterministic automata, transition diagrams, and output FSMs. It is well-structured for quick learning and covers the core FSM concepts needed to understand the paper's state machine modeling approach.

*If you want all of it:* 8.7 hours across 30 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Geo-OLM paper, start with foundational concepts including finite state machines, multi-agent AI systems, and prompt engineering for language models, as these underpin the framework's design and operation. Then, explore Earth observation AI workflows to contextualize the application domain. Finally, focus on the core innovation of state-driven prompting and the authors' own talk if available, to grasp the novel contributions and practical impact of Geo-OLM.

### Finite state machines lecture *(prerequisite)*
Finite state machines (FSMs) are the core method used in Geo-OLM to model geospatial workflows as explicit states and transitions, enabling structured task progression and error handling. Understanding FSM theory and practical examples is essential to appreciate how Geo-OLM decouples task logic from tool execution.

*How the paper uses it:* Geo-OLM models geospatial workflows as finite state machines to reduce reasoning complexity for smaller language models.

▶ [Lecture 4: State Machines](https://www.youtube.com/watch?v=gVdrFsnOo_s) — MIT OpenCourseWare · 1:21:16 · 1y ago

### Multi-agent AI systems lecture *(prerequisite)*
Multi-agent AI systems involve multiple specialized agents collaborating to solve complex tasks, a paradigm supported by Geo-OLM for Earth observation workflows. Understanding multi-agent architectures and their coordination mechanisms provides insight into how Geo-OLM orchestrates multiple LLMs and APIs effectively.

*How the paper uses it:* Geo-OLM supports multi-agent workflows integrating various open LLMs and APIs for complex EO tasks.

▶ [Build a Real-World Multi-Agent AI System using LangGraph | Multi-Agent AI + Memory + APIs](https://www.youtube.com/watch?v=ctHby5vhDqg) — Code With Aarohi Hindi · 1:03:23 · 4mo ago

### Prompt engineering for language models seminar *(prerequisite)*
Prompt engineering is a key technique to guide language models effectively, especially smaller open models, by crafting inputs that reduce ambiguity and improve task performance. This knowledge is crucial to understand Geo-OLM's state-driven prompting approach that tailors prompts to workflow states.

*How the paper uses it:* Geo-OLM uses state-driven prompting to reduce reasoning burden on smaller OLMs by providing stage-specific tool choices and error handling.

▶ [Prompting 101 | Code w/ Claude](https://www.youtube.com/watch?v=ysPbXH0LpIE) — Anthropic · 24:53 · 1y ago

### Earth observation AI workflows talk *(prerequisite)*
Earth observation AI workflows provide the application context for Geo-OLM, illustrating the challenges and importance of automating geospatial data analysis for sustainability and disaster response. Understanding these workflows helps situate Geo-OLM's contributions within real-world EO studies.

*How the paper uses it:* Geo-OLM automates complex Earth observation workflows to enable sustainable and cost-efficient geospatial AI.

▶ [4th ML4EO workshop: Introduction to AI for EO Data – Theory by NEODAAS](https://www.youtube.com/watch?v=lKXds9-EbtA) — Centre for Enviromental Intelligence - Exeter · 25:34 · 1mo ago

### State-driven prompting for language models lecture
State-driven prompting is the central innovation of Geo-OLM, enabling smaller open language models to perform complex reasoning by structuring prompts according to explicit workflow states. This concept is critical to understand how Geo-OLM achieves competitive performance with reduced costs.

*How the paper uses it:* Geo-OLM's state-driven prompting mitigates failure modes and improves reliability of smaller OLMs on geospatial tasks.

▶ [Prompt Engineering ⚙️ - Addressing the sensitivity of Large language models | PyData NYC 2022](https://www.youtube.com/watch?v=nPWIxkRPFk0) — PyData · 38:12 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand Geo-OLM, starting with finite state machines to grasp how workflows are modeled explicitly. Next, it covers prompt engineering to appreciate how smaller language models are guided effectively. Then, it explains multi-agent AI systems to understand the collaborative workflows Geo-OLM supports. Finally, it presents Earth observation AI workflows to contextualize the application domain. This order builds intuition from core computational models to practical AI applications in geospatial sustainability.

### Finite state machines lecture *(prerequisite)*
Finite state machines (FSMs) are a fundamental computational model that represent processes as a set of states and transitions between them. Understanding FSMs helps you see how complex workflows can be broken down into manageable, explicit stages, which is key to Geo-OLM's approach.

*How the paper uses it:* Geo-OLM models geospatial workflows as finite state machines to reduce reasoning complexity for smaller language models.

▶ [Finite State Machine (Finite Automata)](https://www.youtube.com/watch?v=Qa6csfkK7_I) — Neso Academy · 11:05 · 9y ago

### Prompt engineering for language models seminar *(prerequisite)*
Prompt engineering is the practice of crafting inputs to language models to guide their outputs effectively. Learning this helps you understand how Geo-OLM uses state-driven prompting to direct smaller models through complex Earth observation tasks.

*How the paper uses it:* Geo-OLM uses state-driven prompting to reduce the reasoning burden on smaller open language models by providing stage-specific instructions.

▶ [Prompt Engineering Full Course🔥 | Beginner to PRO in 25 Min (2026)](https://www.youtube.com/watch?v=_2aHFh4jgj8) — Vishnu Suthar · 16:23 · 10d ago

### Multi-agent AI systems lecture *(prerequisite)*
Multi-agent AI systems involve multiple specialized AI agents working together to solve complex problems. This concept explains how different AI components can collaborate, which is essential for understanding Geo-OLM's support for multi-agent Earth observation workflows.

*How the paper uses it:* Geo-OLM supports multi-agent workflows integrating various open LLMs and APIs for Earth observation tasks.

▶ [Build a Real-World Multi-Agent AI System using LangGraph | Multi-Agent AI + Memory + APIs](https://www.youtube.com/watch?v=ctHby5vhDqg) — Code With Aarohi Hindi · 1:03:23 · 4mo ago

### Earth observation AI workflows talk *(prerequisite)*
Earth observation AI workflows focus on applying AI techniques to analyze geospatial data for sustainability and environmental monitoring. This provides context on the real-world problems Geo-OLM aims to address with cost-efficient AI models.

*How the paper uses it:* Geo-OLM automates complex Earth observation workflows to enable sustainable and affordable geospatial AI studies.

▶ [From Pixels to Insights: Python for Earth Observation - ELENI TOKMAKTSI](https://www.youtube.com/watch?v=O9ZyixOwSrY) — EuroPython Conference · 24:01 · 2mo ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Workshop: Basics of LLMs & Prompt Engineering | AI in Medical Education Symposium](https://www.youtube.com/watch?v=zriuIpOSL2g) — also for: Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation (Dongjie Wang)
- [Prompt Engineering Tools for Large Language Models| Prof Dr Talat Waseem](https://www.youtube.com/watch?v=RjY6BpxLHTk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What is Prompt Engineering? 🤔 क्या है Prompt Engineer? (The REAL Truth)](https://www.youtube.com/watch?v=NOdDPIcar78) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 7 - Agentic LLMs](https://www.youtube.com/watch?v=h-7S6HNq0Vg) — also for: Understanding the LLM-ification of CHI: Unpacking the Impact of LLMs at CHI through a Systematic Literature Review (Ziang Xiao)
- [Multi-Agent AI Systems Explained: The Complete Guide](https://www.youtube.com/watch?v=-zBbij9rrEI) — also for: Social Theory Should Be a Structural Prior for Agentic AI: A Formal Framework for Multi-Agent Social Systems (Kathleen M. Carley)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of Geo-OLM's approach to cost-efficient Earth observation workflows using state-driven prompting with smaller open language models. The beginner project recreates a core mechanism of state-driven prompting to reduce reasoning complexity. The intermediate project implements a simplified Geo-OLM style finite state machine workflow on a public geospatial dataset, comparing performance against a baseline. The advanced project extends Geo-OLM by addressing its limitation on workflow design complexity, exploring interactive tools to simplify state-driven workflow creation.

### Beginner — State-Driven Prompting Prototype for Geospatial Task
*Effort: a weekend, ~8 hours*

You build a small prototype that models a simple Earth observation task as a finite state machine with explicit states and transitions. You implement state-driven prompting logic that guides a smaller open language model (e.g., GPT-3.5-turbo or an open LLM accessible via API) through the workflow stages, including error handling and termination checks.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of Geo-OLM's state-driven prompting approach and how it reduces reasoning complexity for smaller models by structuring workflows as state machines.

**Grounded in:** Introduction of Geo-OLM, a geospatial prompting scheme modeling EO workflows as state machines for efficient use of smaller OLMs.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face API for open LLMs, FastAPI or simple CLI for interaction

**Data:** No external dataset needed; you simulate a simple geospatial task workflow with synthetic inputs (e.g., location names or coordinates).

**Build it:**

1. Define a simple Earth observation task workflow as a finite state machine with 3-5 states and transitions.
2. Design state-specific prompts that instruct the LLM what to do at each state, including tool calls and error handling.
3. Implement a controller that sends prompts to the LLM and processes its outputs to determine state transitions.
4. Add error detection and retry logic to handle common failure modes like invalid tool arguments or premature exits.
5. Test the prototype with example inputs and verify the LLM completes the workflow correctly.

**Ships as:** A GitHub repo with code and README demonstrating the state-driven prompting prototype, including example runs and explanation of the state machine design.

**Stretch goal:** Add multi-agent coordination by simulating two cooperating agents each handling different workflow states.

### Intermediate — Geo-OLM Style Finite State Machine Workflow on Building Footprints Dataset
*Effort: 2 weekends, ~20 hours*

You implement a finite state machine workflow inspired by Geo-OLM to perform a geospatial analysis task on the Microsoft Global ML Building Footprints dataset. You build state-driven prompting logic for a smaller open language model to automate the workflow stages, and compare its task completion rate and cost against a baseline approach without state-driven prompting.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement Geo-OLM's core method on a real-world geospatial dataset, showing how state-driven prompting improves performance and cost-efficiency for smaller models.

**Grounded in:** Comprehensive evaluation across multiple LLM families and serving runtimes, providing practitioner guidelines; Geo-OLM maintains robust performance on smaller OLMs, outperforming prior geospatial agents by up to 33% in completion rates.

**Tech stack:** Python 3.11, Hugging Face Transformers or OpenAI API, FastAPI or Flask for serving, Microsoft Global ML Building Footprints dataset

**Data:** Use the Microsoft Global ML Building Footprints dataset from https://github.com/microsoft/GlobalMLBuildingFootprints as a public geospatial dataset substitute.

**Build it:**

1. Familiarize yourself with the Global ML Building Footprints dataset and define a geospatial task (e.g., building footprint extraction and classification).
2. Design a finite state machine workflow for the task with explicit states and transitions, including error handling.
3. Implement state-driven prompting logic that guides a smaller open LLM through the workflow stages.
4. Implement a baseline workflow that uses the same LLM without state-driven prompting for comparison.
5. Run experiments measuring task completion rates, token usage, and estimated inference cost for both approaches.
6. Analyze and document the results comparing Geo-OLM style prompting versus baseline.

**Verified links from the paper:**

- <https://github.com/microsoft/GlobalMLBuildingFootprints> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code, scripts, and a detailed README reporting the workflow design, experimental setup, and comparative results.

**Stretch goal:** Extend the workflow to support multi-agent collaboration or integrate additional geospatial APIs for richer tool use.

### Advanced — Interactive Workflow Designer for State-Driven Geo-OLM Prompting
*Effort: 3+ weeks*

You develop an interactive web-based tool that helps users design and visualize finite state machine workflows for Geo-OLM style prompting, addressing the paper's limitation on reliance on domain expertise for workflow design. The tool allows users to define states, transitions, prompts, and error handling logic visually, and exports structured workflow definitions usable by Geo-OLM style agents.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by simplifying the creation of structured workflows, demonstrating deep comprehension of Geo-OLM's architecture and practical deployment challenges.

**Grounded in:** Explore human-computer interaction methods to simplify structured workflow design and integrate state-driven reasoning into interactive agent development.

**Tech stack:** TypeScript, React, Node.js/Express backend, D3.js or similar for graph visualization, Python 3.11 for backend LLM integration

**Data:** No external dataset required; the focus is on workflow design tooling and export formats compatible with Geo-OLM style prompting.

**Build it:**

1. Design a user interface that allows creation and editing of finite state machine workflows with states, transitions, and prompts.
2. Implement visualization of the workflow graph with interactive editing capabilities.
3. Add features to specify error handling states and termination conditions.
4. Implement export functionality to serialize the workflow into a structured JSON format usable by Geo-OLM agents.
5. Integrate a backend service to validate workflows by simulating state-driven prompting with a smaller LLM.
6. Document the tool with usage examples and demonstrate how it reduces the barrier to designing Geo-OLM workflows.

**Ships as:** A GitHub repo with the interactive workflow designer web app, backend simulation service, and documentation showing how it supports Geo-OLM workflow creation.

**Stretch goal:** Integrate the tool with a live Geo-OLM agent backend to enable end-to-end interactive workflow testing and refinement.

_The paper does not provide a public implementation or dataset specific to Geo-OLM; the intermediate project uses the Microsoft Global ML Building Footprints dataset as a substitute for realistic geospatial data._
