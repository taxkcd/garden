---
title: "190 · Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf — Jian Huang"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jian-huang"
source_hash: "3ca109bab67d957d94eb3098a165539424e0ba96388a3c637764d910e33b656b"
sequence: 190
generator: "outreach-garden: managed"
---

# 190 · Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf

## At a glance

- **Professor:** Jian Huang
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf](https://platformxlab.github.io/papers/agentic-bench.pdf)
- **Authors:** Michael Wang, Yikang Yue, Shaobo Li, Yirui Eric Zhou, Chen Wang, Jian Huang
- **Year:** 2026

## Paper overview

This paper presents XPerf, an open-source benchmarking framework designed to evaluate the performance of large language model (LLM) serving systems under realistic, diverse agentic AI workloads. XPerf addresses the challenge of nondeterministic and dynamic workloads in agentic applications by collecting detailed execution traces, constructing execution graphs, synthesizing new workloads, and reproducibly replaying them to profile system and hardware metrics. The framework enables developers to identify performance bottlenecks and optimize serving systems effectively.

### Why it matters

**Research problem:** Existing benchmarks for LLM serving systems fail to accurately and reproducibly evaluate performance under agentic AI workloads, which are dynamic and nondeterministic, causing significant run-to-run variance in workload patterns and making it difficult to identify system bottlenecks and optimize serving systems.

**Why it matters:** Agentic AI applications are increasingly deployed in diverse domains such as coding, research, and data center management, relying on complex sequences of LLM and tool calls. Understanding and optimizing the performance of their backend serving systems is critical for efficient and scalable deployment, but current benchmarks do not capture realistic agentic workload behaviors or provide reproducible and detailed system profiling.

**Key contributions:**

- Development of XPerf, an open-source, extensible benchmarking framework for agentic LLM serving workloads.
- A generic tracing module that supports diverse agentic applications with minimal code changes, capturing LLM calls, tool calls, and orchestrator functions.
- Execution graph construction algorithm that accurately models dependencies among calls to enable realistic workload replay.
- Workload synthesis capabilities to generate diverse serving scenarios such as online serving, batch inference, and fixed concurrency.
- Reproducible trace replay techniques including input/output token enforcement to minimize workload variation.

## About the professor

**Jian Huang** — Associate Professor, Electrical and Computer Engineering, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: sustainable AI infrastructures and platforms, computer architecture, system techniques, memory and storage systems

### Research links

- [Faculty/profile page](http://jianh.web.engr.illinois.edu)
- [Resolved homepage](http://jianh.web.engr.illinois.edu/)
- [Lab website](https://platformxlab.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf," start with foundational knowledge on system and GPU profiling for AI serving, execution graph construction, and large language model serving systems. Then, gain insight into trace replay benchmarking methods and the nature of agentic AI workloads. Finally, focus on the core concept by watching the authors' own talk or closely related advanced benchmarking framework presentations to grasp XPerf's novel contributions and methodology.

### System and GPU profiling for AI serving lecture *(prerequisite)*
Understanding detailed system and GPU profiling techniques is essential for analyzing performance bottlenecks and resource utilization in AI serving systems. This knowledge underpins how XPerf collects and interprets hardware metrics to optimize serving systems.

*How the paper uses it:* XPerf integrates lightweight system profilers to collect detailed serving system and GPU metrics for performance analysis.

▶ [Optimizing, Profiling, and Deploying High Performance Spark ML and TensorFlow AI](https://www.youtube.com/watch?v=pmBIpiCP608) — Data Con LA · Streamed 8 years ago

### Execution graph construction talk *(prerequisite)*
Execution graph construction is a key technique to model dependencies among LLM and tool calls, enabling realistic workload synthesis and replay. Understanding graph structures like DAGs and their traversal is foundational to grasping XPerf's execution graph construction algorithm.

*How the paper uses it:* XPerf constructs execution graphs using a time-span-tree-based analysis to capture dependencies among calls for workload replay.

▶ [What is DAG?](https://www.youtube.com/watch?v=1Yh5S-S6wsI) — ness-intricity101 · 4 years ago

### Large language model serving systems lecture *(prerequisite)*
Foundational knowledge of how large language models are deployed and served in production environments is critical to appreciate the challenges XPerf addresses in benchmarking serving systems under realistic workloads.

*How the paper uses it:* XPerf benchmarks LLM serving systems to identify bottlenecks and optimize performance under agentic AI workloads.

▶ [What is vLLM? Efficient AI Inference for Large Language Models](https://www.youtube.com/watch?v=McLdlg5Gc9s) — IBM Technology · 1 year ago

### Trace replay benchmarking lecture
Trace replay benchmarking is central to XPerf's methodology, enabling reproducible workload replay and detailed performance profiling despite nondeterministic and dynamic agentic workloads. Understanding this method clarifies how XPerf achieves accurate and reproducible benchmarking.

*How the paper uses it:* XPerf uses trace replay techniques to reproducibly replay workloads with accurate timing and minimal overhead.

▶ [AgentPerf — Trajectory-replay benchmarking (agents per megawatt)](https://www.youtube.com/watch?v=vYEHAyKeuCQ) — Learn AI Visually · 1 month ago

### XPerf benchmarking framework talk *(the paper's own talk)*
The authors' own or closely related advanced talks on benchmarking frameworks provide direct insight into XPerf's design, implementation, and evaluation. These talks offer the most precise and detailed understanding of the paper's core contributions.

*How the paper uses it:* This section covers the authors' presentation of XPerf, the novel benchmarking framework introduced in the paper.

▶ [Benchmarking and Scaling Web Agents with LLMs and VLMs](https://www.youtube.com/watch?v=viwXM78twfs) — NVIDIA Developer · 7 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the XPerf benchmarking framework for agentic AI workloads. It starts with basics of large language model serving systems to grasp how LLMs are deployed and managed in production. Then it covers agentic AI workloads to understand the dynamic, multi-step nature of the tasks XPerf benchmarks. Next, it explains execution graph construction to see how dependencies among calls are modeled for replay. After that, it introduces trace replay benchmarking, the core method enabling reproducible workload replay and profiling. Finally, it covers system and GPU profiling to understand how XPerf collects detailed performance metrics.

### Large language model serving systems lecture *(prerequisite)*
Learn how large language models are deployed and served in production environments, including challenges like GPU resource management and latency. This foundational knowledge helps you understand the backend systems that XPerf benchmarks.

*How the paper uses it:* XPerf benchmarks the performance of LLM serving systems under agentic AI workloads.

▶ [What is vLLM? Efficient AI Inference for Large Language Models](https://www.youtube.com/watch?v=McLdlg5Gc9s) — IBM Technology · 1 year ago

### Agentic AI workloads seminar *(prerequisite)*
Understand what agentic AI is—software agents that perform complex, multi-step tasks using LLMs and tools dynamically. This explains the nondeterministic and variable workloads that XPerf aims to benchmark reproducibly.

*How the paper uses it:* XPerf targets agentic AI workloads which are dynamic and nondeterministic, causing challenges for benchmarking.

▶ [What is Agentic AI and How Does it Work?](https://www.youtube.com/watch?v=15_pppse4fY) — codebasics · 1 year ago

### Execution graph construction talk *(prerequisite)*
Learn about execution graphs, which model dependencies between tasks or calls in a workflow. This concept is key to how XPerf reconstructs and replays workloads realistically by capturing call dependencies.

*How the paper uses it:* XPerf constructs execution graphs to capture dependencies among LLM and tool calls for workload replay.

▶ [What is DAG?](https://www.youtube.com/watch?v=1Yh5S-S6wsI) — ness-intricity101 · 4 years ago

### Trace replay benchmarking lecture
Explore trace replay benchmarking, a technique to record and reproducibly replay workloads to measure system performance accurately. This method underpins XPerf’s ability to profile serving systems under realistic conditions.

*How the paper uses it:* XPerf uses trace replay to reproducibly replay workloads with accurate timing and minimal overhead.

▶ [AgentPerf — Trajectory-replay benchmarking (agents per megawatt)](https://www.youtube.com/watch?v=vYEHAyKeuCQ) — Learn AI Visually · 1 month ago

### System and GPU profiling for AI serving lecture
Understand how system and GPU profiling tools collect detailed metrics about hardware and serving system performance. This knowledge helps interpret the performance bottlenecks and resource usage that XPerf surfaces.

*How the paper uses it:* XPerf integrates lightweight profilers to collect detailed serving system and GPU hardware metrics.

▶ [GPUs: Explained](https://www.youtube.com/watch?v=LfdK-v0SbGI) — IBM Technology · 7 years ago

### XPerf benchmarking framework talk *(the paper's own talk)*
Watch a focused talk on benchmarking frameworks for agentic AI workloads, providing context on the challenges and solutions similar to those addressed by XPerf. This helps consolidate understanding of the paper’s contributions.

*How the paper uses it:* This paper presents XPerf, a novel benchmarking framework for agentic LLM serving workloads.

▶ [AgentBench: NEW Benchmarking Tool CHANGES The LLM LEADERBOARD (Installation Tutorial)](https://www.youtube.com/watch?v=EiFVJUFiRVQ) — WorldofAI · 2 years ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the XPerf benchmarking framework for agentic LLM serving workloads. The beginner project reproduces a core latency replay metric from the paper using synthetic traces and simple profiling. The intermediate project implements the paper's execution graph construction and trace replay methodology on a small-scale agentic workload, comparing replay fidelity metrics. The advanced project extends XPerf's workload synthesis by modeling load-dependent tool call durations, addressing a stated limitation and exploring system profiling impacts.

### Beginner — Reproduce Latency Replay Accuracy on Synthetic Agentic Workload
*Effort: a weekend, ~8 hours*

You build a small benchmarking script that simulates a simple agentic AI workload with LLM and tool calls, generates execution traces, and replays them with enforced timing. You collect latency metrics during replay and compare them to the original simulated latencies to compute mean absolute percentage error (MAPE).

**Why it shows you understood the paper:** This project shows you understand the core challenge of nondeterministic agentic workloads and the importance of reproducible trace replay with accurate latency reconstruction, as demonstrated by the paper's <3% MAPE results.

**Grounded in:** XPerf replays individual LLM call latencies with mean absolute percentage error below 3% across eight agentic applications.

**Tech stack:** Python 3.11, Jupyter Notebook, psutil (for system profiling), matplotlib (for plotting)

**Data:** Synthetic execution traces generated by your script simulating LLM and tool call latencies with dependencies.

**Build it:**

1. Implement a simple Python script that simulates an agentic workload with a sequence of LLM and tool calls, each with random but controlled latencies.
2. Generate execution traces capturing call start/end times and dependencies in a simple JSON format.
3. Implement a trace replay function that replays the calls enforcing original timing and dependencies.
4. Collect latency metrics during replay and compute mean absolute percentage error compared to original latencies.
5. Visualize latency replay accuracy with plots and document the methodology in a README.

**Ships as:** A GitHub repo with scripts to simulate, trace, replay, and evaluate latency replay accuracy on synthetic agentic workloads, including plots and explanations.

**Stretch goal:** Add minimal system profiling during replay to show negligible overhead, mimicking XPerf's profiling claims.

### Intermediate — Implement Execution Graph Construction and Trace Replay for Agentic LLM Calls
*Effort: 2 weekends, ~20 hours*

You implement the core XPerf method of collecting detailed traces from an agentic AI application, constructing execution graphs to capture dependencies among LLM and tool calls, and reproducibly replaying workloads with enforced input/output tokens and timing. You evaluate replay fidelity by measuring latency errors and concurrency state matching.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's key technical contribution—execution graph construction and reproducible trace replay—and validate replay accuracy metrics, showing deep comprehension of the methodology.

**Grounded in:** XPerf collects detailed traces and constructs execution graphs to enable reproducible workload replay; XPerf replays workloads reproducibly with accurate timing and minimal overhead.

**Tech stack:** Python 3.11, NetworkX (for graph construction), FastAPI (optional for simulating serving system), matplotlib, psutil

**Data:** Use a small open-source agentic AI workload or simulate one with multiple LLM and tool calls; no authors' code available, so you reimplement based on paper descriptions.

**Build it:**

1. Implement a tracing module that logs detailed LLM and tool call events with timestamps and identifiers.
2. Build an execution graph construction algorithm using a time-span-tree-based analysis to capture call dependencies.
3. Develop a trace replay engine that enforces input/output tokens and call timing to reproduce workload behavior.
4. Run experiments to measure latency replay error and concurrency state matching against original traces.
5. Visualize results with latency breakdowns and concurrency metrics; write a detailed README explaining the approach.

**Ships as:** A GitHub repo with code to trace, build execution graphs, replay agentic workloads, and evaluate replay fidelity metrics, with visualizations and documentation.

**Stretch goal:** Compare your replay fidelity metrics against a naive replay baseline without execution graph enforcement to highlight improvements.

### Advanced — Extend XPerf to Model Load-Dependent Tool Call Durations in Agentic Workloads
*Effort: 3+ weeks*

You extend the XPerf benchmarking framework by enhancing tool call modeling to incorporate load-dependent durations and interactions, addressing a key limitation noted in the paper. You modify trace replay to simulate tool call latencies that vary with serving system load, and analyze the impact on system profiling metrics and replay fidelity.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can critically engage with the research, extend its methodology, and produce novel insights into agentic workload benchmarking.

**Grounded in:** Tool call durations are treated as independent of serving system load by default, which may not capture all real-world interactions; Enhancing tool call modeling to incorporate load-dependent durations and interactions.

**Tech stack:** Python 3.11, NetworkX, FastAPI, psutil, matplotlib, Docker (optional for environment reproducibility)

**Data:** Simulated or small-scale agentic workload traces extended with synthetic load-dependent tool call latencies; no authors' code available.

**Build it:**

1. Review the original trace replay and tool call modeling implementation from your intermediate project.
2. Design and implement a model where tool call durations vary as a function of simulated serving system load or concurrency.
3. Modify the trace replay engine to incorporate load-dependent tool call latencies during replay.
4. Collect detailed system and GPU profiling metrics during replay to observe effects of load-dependent tool calls.
5. Analyze replay fidelity and system bottlenecks compared to the original load-independent model.
6. Document your methodology, results, and implications in a comprehensive README.

**Ships as:** A GitHub repo extending XPerf-style trace replay with load-dependent tool call modeling, including profiling results and analysis demonstrating the impact on benchmarking fidelity and system insights.

**Stretch goal:** Propose and implement scheduling or cache management optimizations guided by your enhanced profiling data, as suggested in the paper's future directions.

_No authors' own code or datasets are available for this paper; all projects require simulating or reimplementing agentic workload traces based on the paper's detailed methodology and descriptions._
