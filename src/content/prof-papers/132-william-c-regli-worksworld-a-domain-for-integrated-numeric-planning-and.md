---
title: "132 · WORKSWORLD: A Domain for Integrated Numeric Planning and Scheduling of Distributed Pipelined Workflows — William C. Regli"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-william-c-regli"
source_hash: "a6396987c3feddac115b328148ce4a9d3c2e0990191e64d1d9d157d371a2fdce"
sequence: 132
generator: "outreach-garden: managed"
---

# 132 · WORKSWORLD: A Domain for Integrated Numeric Planning and Scheduling of Distributed Pipelined Workflows

## At a glance

- **Professor:** William C. Regli
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [WORKSWORLD: A Domain for Integrated Numeric Planning and Scheduling of Distributed Pipelined Workflows](https://arxiv.org/pdf/2603.12214)
- **Authors:** Taylor Paul, William Regli
- **Year:** 2026

## Paper overview

This paper introduces WORKSWORLD, a new numeric planning domain designed to automate the planning and scheduling of distributed data pipelines (workflows) across multiple sites with heterogeneous compute, storage, and network resources. The framework allows users to define data sources, workflow components, and desired outputs without specifying the entire workflow graph. Using a state-of-the-art numeric planner, the system can generate plans that build and schedule workflows efficiently, demonstrated on workflows with up to 14 components across eight sites.

### Why it matters

**Research problem:** Automating the joint planning and scheduling of distributed, pipelined data workflows across heterogeneous resources is computationally challenging and often intractable. Existing solutions typically require fully specified workflows and focus on scheduling tasks to optimize limited metrics, lacking integrated planning and scheduling with realistic resource modeling.

**Why it matters:** Effective data pipelines are essential for organizations to leverage AI and data platforms, yet many struggle to realize ROI due to difficulties in managing distributed data workflows with diverse data sources and formats. Optimally placing and scheduling workflow components across distributed cloud, fog, and edge sites can reduce costs and latency, enabling better AI and data platform utilization.

**Key contributions:**

- Development of WORKSWORLD, a numeric planning domain for integrated planning and scheduling of permanent distributed workflows.
- A general workflow and resource graph representation including data processing and sharing components with network interfaces.
- A framework converting human-readable YAML configurations into PDDL problem instances for domain-independent planners.
- Empirical evaluation demonstrating that ENHSP can solve linear-chain workflows of up to 14 components across eight sites within reasonable time and memory limits.
- Provision of publicly available domain and engineering artifacts to benefit the AI planning community.

## About the professor

**William C. Regli** — Professor, CS, ECE, ISR, Univ. of Maryland - College Park.

Research interests: artificial intelligence, AI Agents, design and evaluation of systems

### Research links

- [Faculty/profile page](https://www.cs.umd.edu/people/regli)
- [Professor website](https://www.linkedin.com/in/william-regli/)
- [Google Scholar](https://scholar.google.com/citations?user=-MSUomIAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WORKSWORLD paper, start by building foundational knowledge on the Planning Domain Definition Language (PDDL) 2.1, which is the formalism used to encode the numeric planning domain. Next, gain insights into heuristic search planners in AI, focusing on the kind of planners like ENHSP used in the paper. Then, study distributed workflow scheduling to appreciate the challenges of scheduling workflows across heterogeneous distributed resources. After that, review numeric planning and scheduling methods that enable integrated planning and scheduling in WORKSWORLD. Finally, conclude with the authors' own talk or the most relevant advanced talk on WORKSWORLD or closely related numeric planning domains to get direct insights into their novel approach.

### PDDL 2.1 planning domain language *(prerequisite)*
PDDL 2.1 is the foundational language for encoding numeric and temporal planning domains like WORKSWORLD. Understanding its syntax and semantics is crucial for grasping how the authors model sites, workflows, and resource constraints in their domain.

*How the paper uses it:* WORKSWORLD is encoded as a numeric planning domain in PDDL 2.1, forming the basis for problem specification and solution by planners.

▶ [Tutorial on Temporal Planning: Ten Years of PDDL 2.1 (Andrew Coles, ICAPS 2013)](https://www.youtube.com/watch?v=69_QbTv-gv8) — Andrew · 45:49 · 13 years ago

### Heuristic search planners in AI *(prerequisite)*
Heuristic search planners use informed search strategies to efficiently explore large state spaces, which is essential for solving complex numeric planning problems. Understanding these planners provides insight into how ENHSP prunes the state space and finds workflow plans.

*How the paper uses it:* ENHSP, a heuristic search planner, is used to solve WORKSWORLD planning problems with pruning techniques to manage complexity.

▶ [Tutorial: Introduction to AI Planning, Part 1 (Amanda Coles ...](https://www.youtube.com/watch?v=EeQcCs9SnhU) — Andrew · 1:23:30

### Distributed workflow scheduling *(prerequisite)*
Distributed workflow scheduling covers the challenges and techniques for managing workflows across heterogeneous, geographically distributed resources. This background is key to understanding the practical problem WORKSWORLD addresses.

*How the paper uses it:* WORKSWORLD targets integrated planning and scheduling of distributed workflows across cloud, fog, and edge sites with heterogeneous resources.

▶ [NJIT Data Science Seminar: Klara Nahrstedt](https://www.youtube.com/watch?v=8-UedF0MMJ0) — NJIT Institute for Data Science · 58:41

### Numeric planning and scheduling *(prerequisite)*
Numeric planning and scheduling methods enable the joint optimization of task execution and resource allocation under numeric constraints. This concept underpins the integrated approach WORKSWORLD employs to plan and schedule workflows.

*How the paper uses it:* WORKSWORLD uses numeric planning to model resource constraints and scheduling actions within the workflow domain.

▶ [ICAPS 2018: Chiara Piacentini on "Compiling Optimal Numeric Planning to Mixed Integer Linear ..."](https://www.youtube.com/watch?v=9LTey9WChdo) — ICAPS · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand WORKSWORLD, starting with the basics of distributed workflow scheduling and heuristic search planners in AI. It then covers the PDDL 2.1 planning domain language, which underpins numeric planning domains like WORKSWORLD, followed by numeric planning and scheduling methods. Finally, it presents the core concept of WORKSWORLD itself, focusing on integrated numeric planning and scheduling of distributed workflows.

### Distributed workflow scheduling *(prerequisite)*
Distributed workflow scheduling involves managing and coordinating tasks across multiple, heterogeneous computing resources spread over different locations. Understanding this helps grasp the challenges of placing and timing workflow components efficiently in a distributed environment.

*How the paper uses it:* WORKSWORLD addresses the challenge of scheduling workflows across diverse distributed cloud, fog, and edge sites.

▶ [NJIT Data Science Seminar: Klara Nahrstedt](https://www.youtube.com/watch?v=8-UedF0MMJ0) — NJIT Institute for Data Science · 58:41

### Heuristic search planners in AI *(prerequisite)*
Heuristic search planners use informed strategies to efficiently explore large search spaces by estimating the cost to reach goals, enabling practical solutions to complex planning problems. This foundational AI technique is key to solving numeric planning tasks.

*How the paper uses it:* The ENHSP planner used in WORKSWORLD employs heuristic search to prune the state space and find efficient workflow plans.

▶ [Lec-25 | Heuristic Search Technique in AI | AI Tutorial in ...](https://www.youtube.com/watch?v=vyJ-MF2xWSo) — AllAboutCSIT · 9:42

### PDDL 2.1 planning domain language *(prerequisite)*
PDDL 2.1 is a standardized language for describing planning problems, including numeric and temporal aspects, allowing domain-independent planners to operate on complex tasks. Learning PDDL basics helps understand how WORKSWORLD encodes workflows and resources.

*How the paper uses it:* WORKSWORLD is encoded as a numeric planning domain in PDDL 2.1 to model workflows and resource constraints.

▶ [Tutorial on Temporal Planning: Ten Years of PDDL 2.1 (Andrew Coles, ICAPS 2013)](https://www.youtube.com/watch?v=69_QbTv-gv8) — Andrew · 45:49 · 13 years ago

### Numeric planning and scheduling
Numeric planning and scheduling integrates planning actions with resource and time constraints expressed numerically, enabling joint optimization of task sequences and resource usage. This approach is essential for automating distributed workflow deployment.

*How the paper uses it:* WORKSWORLD uses numeric planning to jointly plan and schedule workflows considering compute, storage, and network resources.

▶ [Lec 56- Manufacturing Operations Scheduling-I (Scheduling ...](https://www.youtube.com/watch?v=Poff6r7EtOY) — IIT Roorkee July 2018 · 32:31

### WORKSWORLD author talk *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, design, and evaluation of WORKSWORLD, clarifying how integrated numeric planning and scheduling is achieved for distributed workflows.

*How the paper uses it:* This talk offers direct explanation of the novel numeric planning domain and its application to distributed pipelined workflows.

▶ [A Sound (but Incomplete) Polynomial Translation from Discretised PDDL+ to Numeric Planning](https://www.youtube.com/watch?v=ALbAXNRXvYk) — Mauro Vallati · 4 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of WORKSWORLD's integrated numeric planning and scheduling for distributed workflows. The beginner project reproduces a core planning concept using YAML-to-PDDL conversion and a simple numeric planner. The intermediate project reimplements the WORKSWORLD domain and runs ENHSP on a small workflow benchmark to replicate key empirical results. The advanced project extends WORKSWORLD to support non-linear workflows, addressing a stated limitation and exploring scalability improvements. Each project builds on the applicant's existing skills while deepening engagement with the paper's core contributions and challenges.

### Beginner — YAML-to-PDDL Workflow Planning Prototype
*Effort: a weekend, ~8 hours*

You build a small prototype that takes a simplified YAML configuration describing a linear-chain workflow with a few components and sites, converts it into a PDDL 2.1 problem instance, and runs a numeric planner (e.g., a lightweight open-source planner) to generate a plan. This reproduces the paper's approach of using YAML for human-readable problem specification and PDDL for domain-independent planning.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of WORKSWORLD's problem encoding and integrated planning approach, including numeric resource constraints and workflow component scheduling.

**Grounded in:** A framework converting human-readable YAML configurations into PDDL problem instances for domain-independent planners.

**Tech stack:** Python 3.11, PyYAML, PDDL 2.1 parser or simple planner CLI

**Data:** You create a small synthetic YAML workflow config with 3-5 components and 2-3 sites, inspired by examples in the paper's supplementary materials.

**Build it:**

1. Define a minimal YAML schema for a linear-chain workflow with components, sites, and resource constraints.
2. Write a Python script to parse the YAML and generate a corresponding PDDL 2.1 problem file encoding numeric resources and actions.
3. Integrate a numeric planner CLI (e.g., Metric-FF or a simple open-source planner) to run on the generated PDDL.
4. Run the planner on your generated problem and parse the output plan to verify scheduling correctness.
5. Document the YAML-to-PDDL conversion logic and show example plans in the README.

**Ships as:** A GitHub repo with the YAML-to-PDDL converter script, example YAML configs, generated PDDL files, planner invocation scripts, and README explaining the workflow and results.

**Stretch goal:** Add support for modeling network link bandwidth and data propagation delays in the YAML and PDDL encoding.

### Intermediate — Reimplementation and Evaluation of WORKSWORLD Numeric Planning Domain
*Effort: 2 weekends, ~20 hours*

You reimplement the core WORKSWORLD numeric planning domain in PDDL 2.1 based on the paper's domain description and encode a linear-chain workflow problem from the provided benchmarks. You run the Expressive Numeric Heuristic Search Planner (ENHSP) on this problem and compare planning time and memory usage against a baseline numeric planner (e.g., Metric-FF).

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's numeric planning domain and empirically validate its key result that ENHSP can solve workflows with up to 14 components across multiple sites within resource limits.

**Grounded in:** Empirical evaluation demonstrating that ENHSP can solve linear-chain workflows of up to 14 components across eight sites within reasonable time and memory limits.

**Tech stack:** Python 3.11, PDDL 2.1, ENHSP planner, Bash scripting

**Data:** Use the WORKSWORLD benchmarks dataset available at https://gitlab.com/thpaul/worksworld-benchmarks/Data as the problem instances for evaluation.

**Build it:**

1. Study the WORKSWORLD domain PDDL files and understand the numeric resource modeling and actions.
2. Reimplement or adapt the domain PDDL files and problem instances from the benchmark dataset.
3. Install and configure ENHSP planner and a baseline numeric planner (e.g., Metric-FF).
4. Run both planners on selected benchmark problems with varying workflow sizes (e.g., 5, 10, 14 components).
5. Collect and compare planning times, memory usage, and plan quality metrics.
6. Write a report summarizing the reproduction results and any discrepancies.

**Verified links from the paper:**

- <https://github.com/taylorpaul/WORKSWORLD> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://gitlab.com/thpaul/worksworld-benchmarks/Data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing the reimplemented PDDL domain and problem files, scripts to run ENHSP and baseline planners, collected empirical results, and a README with analysis.

**Stretch goal:** Implement pruning heuristics or preprocessing steps to improve ENHSP scalability on larger workflows.

### Advanced — Extending WORKSWORLD to Support Non-Linear Workflow Graphs
*Effort: 3-4 weeks*

You extend the WORKSWORLD numeric planning domain to support non-linear, series-parallel workflow graphs instead of just linear chains. This involves modifying the PDDL domain and problem encoding to represent branching and merging workflow components and updating the planner invocation to handle these more complex workflows. You evaluate scalability and discuss challenges compared to the original linear-chain assumption.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper and demonstrates deep comprehension of the domain modeling, numeric planning challenges, and scalability bottlenecks in distributed workflow scheduling.

**Grounded in:** WORKSWORLD currently supports only linear-chain workflows, limiting realism for complex non-linear workflows.

**Tech stack:** Python 3.11, PDDL 2.1, ENHSP planner, Graph modeling libraries (e.g., NetworkX)

**Data:** You synthesize non-linear workflow graphs with branching and merging components inspired by the paper's resource graph but create smaller-scale examples for tractability.

**Build it:**

1. Analyze the existing WORKSWORLD PDDL domain to identify assumptions enforcing linear-chain workflows.
2. Design PDDL extensions to represent non-linear workflow topologies with multiple predecessors and successors.
3. Modify the YAML-to-PDDL conversion or problem generation scripts to encode non-linear workflows.
4. Generate example non-linear workflow problem instances with resource constraints.
5. Run ENHSP on these new problems and measure planning time and memory usage.
6. Document the domain changes, challenges encountered, and performance implications.

**Verified links from the paper:**

- <https://github.com/taylorpaul/WORKSWORLD> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://gitlab.com/thpaul/worksworld-benchmarks/Data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the extended PDDL domain files, non-linear workflow problem instances, scripts to generate and run plans, empirical evaluation results, and a detailed README discussing the extension and its impact.

**Stretch goal:** Incorporate state-dependent action costs or hierarchical planning to delegate scheduling to site-level planners as suggested in future directions.
