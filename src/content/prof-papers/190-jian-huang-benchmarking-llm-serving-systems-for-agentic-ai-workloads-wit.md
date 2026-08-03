---
title: "190 · Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf — Jian Huang"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jian-huang"
source_hash: "c6f7fd51279054eda2ec28ac883a8521e146c29f20d694ef16b3b03bd694eac7"
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
