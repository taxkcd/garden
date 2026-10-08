---
title: "582 · CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research — Borivoje Nikolic"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-borivoje-nikolic"
source_hash: "9e310ed14e30e5667ffdefebec2e338c829dad89e98975798def2e382ec9343c"
sequence: 582
generator: "outreach-garden: managed"
---

# 582 · CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research

## At a glance

- **Professor:** Borivoje Nikolic
- **Institution:** Univ. of California - Berkeley
- **Paper:** [CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research](https://arxiv.org/abs/2606.27350)
- **Authors:** Angela Cui, Ferran Hermida-Rivera, Jack Toubes, Raghav Gupta, Jim Fang, Chengyi Lux Zhang, Ella Schwarz, Junha Kim, Yakun Sophia Shao, Borivoje Nikolić, Christopher W. Fletcher, Sagar Karandikar
- **Year:** 2026

## Paper overview

This paper introduces CHIA, an open-source framework designed to accelerate and improve hardware/software co-design research by integrating agentic AI into complex design workflows. CHIA enables researchers to build, deploy, and study AI-driven design flows at scale, supporting a variety of tools and providing robust features like fault tolerance, profiling, and modularity. The framework is demonstrated through case studies including microarchitectural simulator alignment, RTL implementation of ISA extensions, critical path optimization, evolutionary architectural discovery, and automated bug fixing.

### Why it matters

**Research problem:** Hardware/software co-design is complex and labor-intensive, involving multiple abstraction layers and diverse tools. Existing AI applications in this domain are limited to small-scale or isolated problems due to difficulties in designing and deploying scalable, reliable AI-infused workflows. There is a lack of a flexible, principled framework to express, deploy, and evaluate arbitrary AI-driven hardware/software co-design flows at scale.

**Why it matters:** Improving hardware/software co-design workflows can significantly accelerate innovation in computer architecture, systems, compilers, and VLSI design. Current manual and script-based approaches are brittle, hard to scale, and costly, limiting the potential of AI to transform the design process. A scalable, modular, and agentic framework can enable more productive research and development, reduce human effort, and improve design quality and verification.

**Key contributions:**

- Development of CHIA, an open-source, agent-forward framework for scalable AI-driven hardware/software co-design.
- Introduction of CHIA loops as a flexible graph abstraction to compose complex design workflows from reusable components.
- Support for heterogeneous clusters combining on-premises and cloud resources with containerized logical workers.
- Integration of fault tolerance, profiling, caching, and bypassing features to enable robust and reproducible experiments.
- Demonstration of CHIA through five diverse case studies showcasing agentic microarchitectural simulator alignment, RTL ISA extension implementation, critical path optimization, evolutionary architectural discovery, and automated GitHub issue fixing.

## About the professor

**Borivoje Nikolic** — Professor, National Semiconductor Distinguished Professor in Electrical Engineering and Computer Sciences, Electrical Engineering and Computer Sciences, Univ. of California - Berkeley.

Research interests: digital and analog integrated circuit design and VLSI implementation of communications and signal processing algorithms

### Research links

- [Faculty/profile page](https://www2.eecs.berkeley.edu/Faculty/Homepages/nikolic.html)
- [Professor website](http://www.eecs.berkeley.edu/~bora/)
- [Resolved homepage](https://people.eecs.berkeley.edu/~bora/biography.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** hardware/software co-design
**The paper assumes:** hardware/software co-design principles, digital integrated circuit design, microarchitectural simulation, RTL design flows
**Already in this field?** Skip this entirely if you already have a solid understanding of hardware/software co-design and digital integrated circuit design workflows.

To understand the CHIA framework and its contributions to AI-driven hardware/software co-design workflows, it is essential to grasp the fundamentals and challenges of hardware/software co-design. The rigorous course offers a comprehensive, structured deep dive into electronic systems design, covering circuits, PCB design, and hardware description languages, which underpin the hardware aspects of co-design. The fast track provides a concise, focused introduction to modern hardware design methodologies and co-design principles, suitable for quickly gaining intuition about the integration of hardware and software design flows.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Electronic Systems Design: Hands-on Circuits and PCB Design with CAD Software](https://www.youtube.com/playlist?list=PLp6ek2hDcoNAUpqc3DUj4U5hcipc2idZ5) — NPTEL IIT Delhi · 37 videos · 36.6h across 37 episodes

**Watch only this:** Lectures 1 through 23 (INTRO to Combinational Circuit Simulation using iVerilog), about 22.7 hours — these cover the essential hardware design concepts, circuit simulation, and hardware description languages relevant to CHIA's hardware/software co-design framework.

*Why it unblocks this paper:* This NPTEL IIT Delhi course covers foundational topics in electronic systems design, including circuit elements, simulations, PCB design, and hardware description languages like Verilog, which are critical for understanding the hardware side of hardware/software co-design workflows modeled in CHIA.

*If you want all of it:* 36.6 hours across 37 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [[Arm DevSummit 2021] Hardware Design Methodology](https://www.youtube.com/playlist?list=PLKjl7IFAwc4Q0jdjmMJZXwr7jZ7jTANGm) — Arm Software Developers · 14 videos · 6.7h across 14 episodes

**Watch only this:** Episodes 5 (You Are Using a Heterogeneous Multicore SoC for Your Next Design; Now What?), 6 (Using Performance Models to Optimize Arm-based Data Center SoCs), and 7 (A Configurable Network-on-Chip with Novel Automated Tooling Scaling to 100s of Interfaces), about 1.4 hours total — these episodes focus on heterogeneous hardware/software co-design and tooling relevant to CHIA.

*Why it unblocks this paper:* This Arm DevSummit 2021 playlist provides a concise, industry-relevant overview of modern hardware design methodologies and hardware/software co-design, including modeling, tools, and heterogeneous SoC design, directly relating to the AI-driven co-design workflows in CHIA.

*If you want all of it:* 6.7 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CHIA framework and its contributions to agentic AI-driven hardware/software co-design, start with foundational concepts including distributed computing with Ray, directed cyclic graphs in workflows, agentic AI systems, and hardware/software co-design automation. These prerequisites build the necessary background on the technologies and methodologies CHIA leverages. Finally, focus on the core concept of hardware/software co-design workflows and the authors' own talk on CHIA to gain direct insights into the framework's design, implementation, and case studies.

### Distributed computing with Ray *(prerequisite)*
CHIA leverages the Ray distributed computing platform for scheduling, fault tolerance, and profiling across heterogeneous clusters. Understanding Ray's architecture and capabilities is essential to grasp how CHIA achieves scalable and robust execution of complex co-design workflows.

*How the paper uses it:* CHIA uses Ray for scheduling, fault tolerance, and profiling in heterogeneous clusters.

▶ [Ray Summit 2025 Keynote: Ray + Anyscale Announcements ...](https://www.youtube.com/watch?v=ki5N_hpRNOk) — Anyscale · 1:20:18

### Directed cyclic graphs in workflows *(prerequisite)*
CHIA models hardware/software co-design workflows as directed cyclic graphs called CHIA loops. Familiarity with directed cyclic graphs and cycle detection algorithms provides foundational understanding of how CHIA composes and manages complex interdependent tasks in its workflows.

*How the paper uses it:* CHIA loops are modeled as directed cyclic graphs to express complex workflows.

▶ [LEC-66 : How to Find Cycle in Directed Graph using DFS](https://www.youtube.com/watch?v=sLtMwI1ty2E) — Gate Smashers · 3 months ago

### Agentic AI systems *(prerequisite)*
Agentic AI systems autonomously plan, reason, and act to achieve goals, which is central to CHIA's approach of embedding AI agents in hardware/software co-design workflows. Understanding the principles and design of agentic AI systems is critical to appreciating CHIA's agent-forward framework.

*How the paper uses it:* CHIA integrates agentic AI agents for autonomous decision-making in co-design flows.

▶ [Agent AI System Design Explained in 27 Minutes](https://www.youtube.com/watch?v=mwN75EiGfCE) — Aishwarya Srinivasan · 26:56

### Hardware/software co-design automation *(prerequisite)*
Automating hardware/software co-design workflows is the core goal of CHIA. This concept covers the challenges and methodologies in co-design automation, providing context for why CHIA’s flexible, agentic framework is a significant advancement.

*How the paper uses it:* CHIA focuses on automating co-design workflows to improve scalability and robustness.

▶ [Hardware-Software Co-Design for General-Purpose Processors  [1/14]](https://www.youtube.com/watch?v=ZyPT9ZGiRgo) — Microsoft Research · 9 years ago

### Hardware software co-design workflows
This concept is central to the paper, as CHIA is designed to express, deploy, and evaluate complex hardware/software co-design workflows. Understanding the state-of-the-art and challenges in co-design workflows sets the stage for appreciating CHIA’s contributions.

*How the paper uses it:* CHIA’s approach is based on integrating AI into hardware/software co-design workflows.

▶ [Fall 2024 GRASP SFI - Gioele Zardini, Massachusetts Institute ...](https://www.youtube.com/watch?v=SAqXQll4mFM) — GRASP Lab · 1:04:05

### CHIA framework author talk *(the paper's own talk)*
The authors’ own talk on CHIA provides the most direct and detailed insights into the framework’s design, implementation, and case studies. It is the definitive resource for understanding the paper’s contributions and results.

*How the paper uses it:* Direct presentation by the authors on the CHIA framework and its research impact.

▶ [CHIA: The Open Source AI Framework That Builds Chips](https://www.youtube.com/watch?v=Pa1MZFzzaBA) — Codedigipt · 1 month ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the CHIA framework paper, start by grasping the foundational concept of agentic AI systems, which enable autonomous decision-making by AI agents. Next, learn about directed cyclic graphs, the structural model behind CHIA loops that represent complex workflows. Then, explore distributed computing with Ray, the platform CHIA uses for scalable, fault-tolerant execution. After that, study hardware/software co-design automation to see how AI can streamline integrated hardware and software development. Finally, focus on the CHIA framework itself, which ties all these concepts together to enable scalable AI-driven hardware/software co-design.

### Agentic AI systems *(prerequisite)*
Agentic AI systems are autonomous software agents that can plan, reason, and act to achieve goals without constant human intervention. Understanding how these agents operate helps clarify how CHIA enables AI to control complex hardware/software design workflows.

*How the paper uses it:* CHIA integrates agentic AI to enable autonomous decision-making and control within hardware/software co-design workflows.

▶ [Agentic AI Explained | McKinsey & Company](https://www.youtube.com/watch?v=DsRNp3cmJm0) — McKinsey & Company · 16:01

### Directed cyclic graphs in workflows *(prerequisite)*
Directed cyclic graphs are graph structures where nodes represent tasks and edges represent dependencies, allowing cycles that model iterative or feedback workflows. This concept is key to understanding CHIA loops, which represent complex, cyclic hardware/software design processes.

*How the paper uses it:* CHIA models co-design workflows as directed cyclic graphs called CHIA loops to flexibly compose and orchestrate tasks.

▶ [Depth First Search (DFS) on Directed graphs and Cyclic Graphs](https://www.youtube.com/watch?v=c7sUDqgrCaY) — Turing Machines · 7 years ago

### Distributed computing with Ray *(prerequisite)*
Ray is a distributed computing framework that enables scalable, fault-tolerant execution of parallel tasks across heterogeneous clusters. Learning Ray helps understand how CHIA schedules and manages complex workflows reliably at scale.

*How the paper uses it:* CHIA leverages Ray for scheduling, fault tolerance, profiling, and scaling across on-premises and cloud resources.

▶ [Ray Learning 1 | Introduction to Ray Platform](https://www.youtube.com/watch?v=VJrV8pbYgoY) — Backfill · 18:25

### Hardware/software co-design automation *(prerequisite)*
Hardware/software co-design automation involves integrating hardware and software development processes to optimize system performance and efficiency. This automation is the core goal of CHIA, which uses AI agents to automate and improve these workflows.

*How the paper uses it:* CHIA aims to automate and scale hardware/software co-design workflows using agentic AI and modular components.

▶ [Hardware-Software Co-Design: Revolutionizing Performance in Next-Gen Architectures](https://www.youtube.com/watch?v=Ym0zTI6QAwI) — lab68dev · 7 months ago

### CHIA framework author talk *(the paper's own talk)*
This talk provides a direct overview of the CHIA framework from its creators, explaining how it integrates agentic AI, modular workflow graphs, and distributed computing to accelerate hardware/software co-design research.

*How the paper uses it:* The authors' presentation offers specific insights into CHIA’s design, features, and case studies demonstrating its capabilities.

▶ [CHIA: The Open Source AI Framework That Builds Chips](https://www.youtube.com/watch?v=Pa1MZFzzaBA) — Codedigipt · 1 month ago

## Already in your library

- [What is Agentic AI and How Does it Work?](https://www.youtube.com/watch?v=15_pppse4fY) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)
- [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — also for: Seeking Solutions in Configurable Computing (David Andrews)
- [What is DAG?](https://www.youtube.com/watch?v=1Yh5S-S6wsI) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the CHIA framework for AI-driven hardware/software co-design. The beginner project focuses on reproducing a core workflow concept using familiar tools. The intermediate project involves reimplementing a key CHIA loop case study on microarchitectural simulator alignment, requiring new skills in distributed computing with Ray. The advanced project extends the framework by addressing a stated limitation on benchmark generalization, applying AI-driven tuning to improve alignment on withheld benchmarks.

### Beginner — Simple CHIA Loop Simulation with Directed Cyclic Graph
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of a CHIA loop as a directed cyclic graph workflow that orchestrates simple tasks representing hardware/software co-design steps. Using Python and Ray, you implement nodes as containerized logical workers that execute dummy tasks with profiling and fault tolerance features.

**Why it shows you understood the paper:** This project shows you understand the core abstraction of CHIA loops as directed cyclic graphs and how agentic AI workflows can be modularly composed and scheduled with fault tolerance and profiling.

**Grounded in:** Introduction of CHIA loops as a flexible graph abstraction to compose complex design workflows from reusable components.

**Tech stack:** Python 3.11, Ray distributed computing, Docker (optional for containerization)

**Data:** No external data needed; you simulate simple task execution with synthetic dummy workloads.

**Build it:**

1. Implement a directed cyclic graph structure in Python representing a CHIA loop with nodes and edges.
2. Create simple task nodes that simulate hardware/software design steps with dummy computations.
3. Use Ray to schedule and execute these nodes as containerized logical workers with fault tolerance.
4. Add automatic profiling of node execution times and log results to disk.
5. Demonstrate a small cyclic workflow with 3-5 nodes and visualize profiling output.

**Ships as:** A GitHub repo with Python code implementing a CHIA loop simulation, README explaining the graph abstraction, profiling logs, and instructions to run the workflow.

**Stretch goal:** Add a simple AI agent node that makes decisions to bypass or retry tasks based on profiling feedback.

### Intermediate — Reimplement CHIA Microarchitectural Simulator Alignment Loop
*Effort: 2 weekends, ~20 hours*

You reimplement the CHIA loop for microarchitectural simulator alignment between gem5 and BOOM RTL on a smaller public benchmark set. Using Ray for distributed scheduling, you build a workflow that iteratively tunes simulator parameters to minimize cycle count error, comparing against a baseline fixed-parameter simulation.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core CHIA method of agentic AI-driven co-design loops, distributed execution, and iterative tuning to achieve alignment metrics reported in the paper.

**Grounded in:** Achieved 3% cycle count error alignment between gem5 microarchitectural simulator and BOOM RTL after 202 iterations (~10.5 days) on 36 benchmarks.

**Tech stack:** Python 3.11, Ray distributed computing, gem5 microarchitectural simulator, Docker

**Data:** Use a publicly available subset of gem5 benchmarks as a substitute for the paper's 36 benchmark suite.

**Build it:**

1. Set up gem5 simulator environment and select a small benchmark suite for cycle count measurement.
2. Implement a CHIA loop workflow in Python that models iterative tuning of gem5 parameters.
3. Use Ray to distribute simulation tasks and collect cycle count results with fault tolerance.
4. Implement a simple agent that adjusts parameters to minimize cycle count error compared to reference RTL data (simulated or approximated).
5. Compare results against a baseline fixed-parameter simulation and report cycle count error metrics.

**Verified links from the paper:**

- <https://github.com/apache/airflow> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/ucb-bar/chia> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to run the CHIA loop for simulator alignment, scripts to launch distributed simulations, and a report comparing alignment error metrics.

**Stretch goal:** Incorporate caching and bypassing features to optimize workflow runtime and resource usage.

### Advanced — Improving Benchmark Generalization in CHIA Simulator Alignment
*Effort: 3+ weeks*

You extend the CHIA microarchitectural simulator alignment workflow by implementing improved benchmarking strategies to reduce overfitting and improve alignment on withheld benchmarks. This involves designing a more diverse training benchmark selection, integrating cross-validation techniques, and tuning the agent's decision-making control to enhance generalization.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to critically analyze CHIA's challenges and contribute meaningful extensions that improve robustness and applicability.

**Grounded in:** Some overfitting observed in microarchitectural simulator alignment due to benchmark-specific tuning. Training benchmark suites may not capture all core states, leading to outlier misalignments on withheld benchmarks. Explore improved benchmarking strategies to enhance alignment on withheld benchmarks.

**Tech stack:** Python 3.11, Ray distributed computing, gem5 microarchitectural simulator, Docker, scikit-learn (for cross-validation)

**Data:** Use the same public gem5 benchmark suite as in the intermediate project, partitioned into training and withheld test sets.

**Build it:**

1. Analyze the existing CHIA loop implementation for simulator alignment and identify overfitting patterns.
2. Design and implement a benchmark selection strategy that diversifies training benchmarks using clustering or coverage metrics.
3. Integrate cross-validation or holdout validation within the CHIA loop to evaluate alignment on withheld benchmarks.
4. Modify the agent's parameter tuning logic to incorporate validation feedback and prevent overfitting.
5. Run experiments comparing alignment error on training vs withheld benchmarks and document improvements.

**Verified links from the paper:**

- <https://github.com/ucb-bar/chia> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended CHIA loop code, benchmark selection scripts, validation workflows, and a detailed report on improved generalization results.

**Stretch goal:** Explore tuning agent decision-making control flows to balance exploration and exploitation as AI agents become more autonomous.

_The paper's authors have not released their own code for CHIA; the intermediate and advanced projects rely on reimplementing methods described in the paper and using the gem5 simulator with public benchmarks as substitutes._
