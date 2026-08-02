---
title: "132 · WORKSWORLD: A Domain for Integrated Numeric Planning and Scheduling of Distributed Pipelined Workflows — William C. Regli"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-william-c-regli"
source_hash: "f2a20acaa159768e33aba063f81460afcf55d3284ed67dce4487d89e1e4c34c3"
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
