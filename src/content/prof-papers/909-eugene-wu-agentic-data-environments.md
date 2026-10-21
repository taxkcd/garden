---
title: "909 · Agentic Data Environments — Eugene Wu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eugene-wu"
source_hash: "db4efbc4cb5189d1671f2de42b5f7972154585268300ffa1c2e223eda94b8ab0"
sequence: 909
generator: "outreach-garden: managed"
---

# 909 · Agentic Data Environments

## At a glance

- **Professor:** Eugene Wu
- **Institution:** Columbia University
- **Paper:** [Agentic Data Environments](https://arxiv.org/pdf/2607.07397)
- **Authors:** Elaine Ang, Chenxi Huang, Georgios Liargkovas, Jerry Liu, Jinhui Liu, Nikos Pagonas, Charlie Summers, Haonan Wang, Jiakai Xu, Tianle Zhou, Yusen Zhang, Zhou Yu, Zhuo Zhang, Tianyi Peng, Kostis Kaffes, Eugene Wu
- **Year:** 2026

## Paper overview

This paper introduces the concept of Agentic Data Environments, which are advanced data systems designed to support autonomous agents that not only read but also act on and modify data. Unlike traditional databases that passively store data, these environments actively prepare and govern data to enable safe, reliable, and effective agent automation. The paper discusses challenges in managing, retrieving, and eliciting data for agents, and proposes mechanisms like branching and data flow control to ensure safe exploration and operation by agents.

### Why it matters

**Research problem:** How to design data environments that support autonomous agents capable of safely and effectively interacting with, modifying, and reasoning over complex, heterogeneous data and system resources beyond traditional passive databases.

**Why it matters:** Autonomous agents that can act on data promise significant benefits in speed, scale, and labor savings but also pose risks of catastrophic failures with real-world consequences. Current systems are largely read-only and passive, limiting automation's potential and safety. To enable widespread adoption and trust, data environments must both amplify agent capabilities and bound the risks of failure.

**Key contributions:**

- Definition and conceptualization of Agentic Data Environments as active, agent-centric data systems.
- Introduction of AIM, AIR, and ADE as complementary approaches to prepare and provide task-relevant information to agents.
- Development of BranchBench benchmark and analysis showing current branchable DBMSes are insufficient for agentic workloads.
- Proposal of Checkpoint-lite (Chkpt) for efficient full state branching beyond DBMS.
- Design of Data Flow Control policies enforceable inside DBMS and across heterogeneous agent workflows to guarantee data safety.

## About the professor

**Eugene Wu** — Associate Professor of Computer Science, Computer Science, Columbia University.

Research interests: Graphics and User Interfaces, Data Management, Artificial Intelligence (AI) and Machine Learning (ML), Human-Computer Interaction (HCI), Artificial Intelligence, Computer Graphics & Animation, Generative AI & Large Language Models (LLMs), Human-Computer Interaction (HCI), Scalable Data Systems, Visualization, Data Markets

### Research links

- [Faculty/profile page](https://www.engineering.columbia.edu/faculty-staff/directory/eugene-wu)
- [Identity evidence](http://www.cs.columbia.edu/~ewu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Database Systems and Version Control
**The paper assumes:** database system architecture, transaction management, branching and version control in databases, data flow control policies
**Already in this field?** Skip this entirely if you already have a solid understanding of database internals, version control mechanisms in data systems, and policy enforcement within DBMS.

To deeply understand the Agentic Data Environments paper, especially its critiques and proposals around branching in databases, version control, and data flow control policies, a solid grasp of database systems and version control concepts is essential. The rigorous course offers a comprehensive, foundational university-level treatment of database internals, while the fast track provides a concise, practical introduction to version control and branching concepts relevant to managing data and code changes. Choose the rigorous course for in-depth understanding of database architectures and concurrency control, and the fast track for a quick, clear overview of branching and version control principles.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Intro to Database Systems (15-445/645 - Fall 2024)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq) — CMU Database Group · 26 videos · 33.9h across 26 episodes

**Watch only this:** Watch episodes #03 - Database Storage: Files & Pages (78 min), #16 - Concurrency Control Theory (78 min), #19 - Multi-Version Concurrency Control (78 min), and #21 - Database Recovery with ARIES (78 min), totaling about 5.2 hours. These episodes cover storage internals, concurrency control, versioning, and recovery mechanisms critical to grasping the paper's technical contributions.

*Why it unblocks this paper:* This CMU Intro to Database Systems course covers core database internals including storage, concurrency control, multi-version concurrency control, and recovery, which are directly relevant to understanding the paper's discussion on branchable DBMS limitations and proposed branching mechanisms.

*If you want all of it:* 33.9 hours across all 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Change Management and Version Control](https://www.youtube.com/playlist?list=PLXh_vnJ0hr1C0q13a-QdOcxnj3D8ivFzx) — BuildAModule · 126 videos · 4.7h across the first 60 episodes

**Watch only this:** Watch episodes 10 - Introduction to version control, 23 - Introduction to branching and merging in Git, and 24 - How to create a new branch and navigate existing branches, totaling about 12 minutes. These episodes cover the essential concepts of version control and branching relevant to the paper.

*Why it unblocks this paper:* The 'Change Management and Version Control' series provides a practical, concise introduction to Git-based version control, branching, and merging concepts that underpin the paper's focus on branching and versioning in data environments, offering a quick yet solid foundation.

*If you want all of it:* About 4.7 hours across the first 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Agentic Data Environments' paper, start with foundational knowledge on autonomous agents in data systems and branching in databases, as these underpin the paper's approach to safe and effective agentic exploration. Next, study data flow control mechanisms to grasp how safe data usage policies are enforced across workflows. Finally, focus on the core concept of Agentic Data Environments through the authors' own talks and related advanced presentations to gain precise insights into their novel system design and empirical results.

### Autonomous agents in data systems *(prerequisite)*
Understanding autonomous agents that act on and modify data beyond passive retrieval is essential to grasp the motivation and challenges addressed by Agentic Data Environments. This background covers how agents operate autonomously in complex data ecosystems, which is foundational for appreciating the paper's contributions.

*How the paper uses it:* The paper focuses on designing data environments that support autonomous agents capable of safe and effective interaction with data.

▶ [Deepti Srivastava: Data Architectures in the Age of AI: Rebuilding Data Stacks for Autonomous Agents](https://www.youtube.com/watch?v=RGHcY65GlBE) — The AI Conference™ · 25:21 · 13d ago

### Branching in databases *(prerequisite)*
Branching in databases is foundational for understanding how agentic environments isolate agent explorations safely and efficiently. This concept explains the mechanisms for capturing consistent state snapshots and managing multiple concurrent data versions, which are critical for the paper's proposed branching and checkpointing techniques.

*How the paper uses it:* The paper highlights the inadequacy of current branchable DBMSes for high-frequency, short-lived branching needed in agentic exploration.

▶ [20 years of hacking Postgres with Heikki Linnakangas ...](https://www.youtube.com/watch?v=_SESrrvyuko) — Aaron Francis · 54:38

### Data Flow Control *(prerequisite)*
Data Flow Control is a key mechanism to enforce safe data usage policies across heterogeneous agent workflows. Understanding data flow control principles and enforcement techniques is crucial to appreciate how the paper guarantees data safety with near-zero overhead in complex environments.

*How the paper uses it:* The paper proposes Data Flow Control policies enforceable inside DBMS and across workflows to guarantee data safety.

▶ [Lecture "Data Flow Analysis (Part 1, Available Expressions)" of "Program Analysis"](https://www.youtube.com/watch?v=rJYgTJaXZU0) — Michael Pradel · 37:23 · 5y ago

### Agentic Data Environments paper talk *(paper-talk search result; attribution unverified)*
This section focuses on the authors' own presentations and closely related advanced talks about Agentic Data Environments, providing the most precise and comprehensive understanding of the paper's novel concepts, system design, and empirical findings. These talks directly address the challenges and solutions proposed in the paper.

*How the paper uses it:* The authors' talks provide direct insights into the definition, mechanisms, and evaluations of Agentic Data Environments.

▶ [AI Agent Conference 2026: Alex Gallego presents the Agentic Data Plane](https://www.youtube.com/watch?v=rwCIfzhw2Dk) — Redpanda Data · 19:54 · 4 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand Agentic Data Environments, starting with the basics of autonomous agents in data systems, then explaining branching in databases and data flow control as key system mechanisms. It then covers Agentic Information Management, the core method to prepare data for agents, and concludes with a direct paper talk to connect all concepts to the specific contributions and challenges addressed in the paper.

### Autonomous agents in data systems *(prerequisite)*
Learn what autonomous agents are and how they operate in data systems by acting on and modifying data beyond simple retrieval. This foundational understanding clarifies why new data environments are needed to support these agents safely and effectively.

*How the paper uses it:* The paper focuses on enabling autonomous agents that interact with and modify data, so understanding what these agents are is essential.

▶ [Deepti Srivastava: Data Architectures in the Age of AI: Rebuilding Data Stacks for Autonomous Agents](https://www.youtube.com/watch?v=RGHcY65GlBE) — The AI Conference™ · 25:21 · 13d ago

### Branching in databases *(prerequisite)*
Branching in databases allows creating isolated copies or versions of data states to enable safe experimentation and exploration without affecting the main data. This concept is foundational for understanding how agentic data environments isolate agent actions safely.

*How the paper uses it:* The paper highlights branching as a key mechanism to isolate agent explorations and ensure safe operations.

▶ [20 years of hacking Postgres with Heikki Linnakangas ...](https://www.youtube.com/watch?v=_SESrrvyuko) — Aaron Francis · 54:38

### Data Flow Control *(prerequisite)*
Data Flow Control enforces policies on how data moves and is used across systems, ensuring safety and compliance. Understanding this helps grasp how agentic environments guarantee safe data usage across complex agent workflows.

*How the paper uses it:* The paper proposes Data Flow Control policies to enforce safe data usage across heterogeneous agent workflows.

▶ [What is Dataflow?](https://www.youtube.com/watch?v=KalJ0VuEM7s) — Google Cloud Tech · 5:03 · 6y ago

### Agentic Information Management
Agentic Information Management transforms raw data into forms that autonomous agents can readily use, improving accuracy and efficiency in agent tasks. This method is central to the paper’s approach to preparing data for agent automation.

*How the paper uses it:* AIM is a core capability introduced by the paper to prepare data into agent-ready forms for effective automation.

▶ [Complete Agentic AI Course - AI Agents, RAG, Embeddings, Architectures, Framework, VectorDB & Memory](https://www.youtube.com/watch?v=Pn95eOlw5qk) — Tejas AI · 36:56 · 4mo ago

### Agentic Data Environments paper talk *(paper-talk search result; attribution unverified)*
Watch a focused talk that directly addresses the paper’s concepts, challenges, and proposed solutions, tying together the foundational ideas and the novel contributions of Agentic Data Environments.

*How the paper uses it:* This talk provides a precise overview and insights into the paper’s contributions and context from a related expert perspective.

▶ [AI Agent Conference 2026: Alex Gallego presents the Agentic Data Plane](https://www.youtube.com/watch?v=rwCIfzhw2Dk) — Redpanda Data · 19:54 · 4 mo ago

## Already in your library

- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs) — also for: Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents (Changxi Zheng)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Agentic Data Environments paper. The beginner project focuses on implementing a simplified branching mechanism to grasp safe agent exploration. The intermediate project reimplements the Agentic Information Management (AIM) method on a smaller dataset to validate its accuracy and efficiency claims. The advanced project extends the paper's limitations by designing a prototype for cross-component branching with checkpointing, addressing a key open challenge in agentic data environments.

### Beginner — Simplified Branching Mechanism for Agentic Exploration
*Effort: a weekend, ~8 hours*

You build a small prototype that simulates branching of data states to isolate agent explorations. This project implements a version control style branching system for JSON-based datasets, allowing agents to create, switch, and merge branches safely.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's concept of branching to isolate agent actions and ensure safe exploration, a core mechanism to prevent catastrophic failures in agentic data environments.

**Grounded in:** Proposal of branching to isolate agent explorations and ensure safe operation by agents.

**Tech stack:** TypeScript, Node.js, Git (for inspiration)

**Data:** Use synthetic JSON datasets representing simple heterogeneous data, simulating agent interactions.

**Build it:**

1. Design a JSON data structure representing a simple dataset with multiple fields.
2. Implement branching operations: create branch, switch branch, and merge branches with conflict detection.
3. Simulate agent actions that modify data only within their branch.
4. Add a simple CLI or script interface to demonstrate branching and merging workflows.
5. Write tests to verify branch isolation and data consistency.

**Ships as:** A GitHub repo with code and README demonstrating branching operations on JSON data, showing isolated agent explorations and merges.

**Stretch goal:** Add a visualization of branch trees and agent actions to better illustrate branching dynamics.

### Intermediate — Reimplementation of Agentic Information Management (AIM)
*Effort: 2 weekends, ~20 hours*

You reimplement the AIM pipeline described in the paper to transform raw data into agent-ready information. You apply it to a public heterogeneous dataset (e.g., a public CSV dataset with multiple tables) and compare its retrieval accuracy and speed against a simple RAG baseline.

**Why it shows you understood the paper:** By reimplementing AIM and benchmarking it against a baseline, you demonstrate comprehension of the paper's core method and its empirical claims about improved accuracy and efficiency for agentic data preparation.

**Grounded in:** Agentic Information Management (AIM) achieves up to 49.8% higher accuracy and 4.18× speedup over state-of-the-art agent memory systems.

**Tech stack:** Python 3.11, FastAPI, Pandas, scikit-learn, Jupyter Notebook

**Data:** Use a well-known public heterogeneous dataset such as the UCI Adult dataset combined with a small synthetic data lake of CSV files to simulate a data lake environment.

**Build it:**

1. Implement data transformation pipelines to convert raw heterogeneous data into structured, agent-ready formats.
2. Develop an information retrieval module that selects relevant data subsets for given queries.
3. Implement a simple RAG (Retrieval-Augmented Generation) baseline for comparison.
4. Evaluate accuracy by measuring retrieval correctness on a set of exploratory queries.
5. Measure and compare runtime efficiency between your AIM implementation and the baseline.
6. Document the pipeline, evaluation metrics, and results in a Jupyter Notebook.

**Ships as:** A GitHub repo with code and notebooks showing AIM reimplementation, baseline comparison, and evaluation results.

**Stretch goal:** Extend AIM to incorporate a simple latent signal elicitation step inspired by ADE to improve retrieval relevance.

### Advanced — Prototype for Cross-Component Branching with Checkpoint-lite
*Effort: 3+ weeks, ~80 hours*

You design and implement a prototype system that supports branching across multiple heterogeneous components (e.g., a database and a file system) using a lightweight checkpointing mechanism inspired by Checkpoint-lite. This addresses the paper's limitation on full environment branching and consistent state capture.

**Why it shows you understood the paper:** This project tackles a key open challenge identified in the paper, demonstrating deep understanding of system-level branching and the complexity of maintaining consistent agentic data environments across components.

**Grounded in:** Development of Checkpoint-lite for efficient full state branching beyond DBMS; limitation that full environment branching remains an open challenge.

**Tech stack:** Python 3.11, PostgreSQL, Docker, Bash scripting, FastAPI

**Data:** Use a small PostgreSQL database combined with a local file system directory containing JSON and CSV files to simulate heterogeneous system components.

**Build it:**

1. Set up a PostgreSQL database and a file system directory with sample data.
2. Implement a lightweight checkpointing mechanism that snapshots both the database state and file system state efficiently.
3. Develop branching operations that create isolated branches capturing consistent snapshots across both components.
4. Implement branch switching and merging with conflict detection and resolution strategies.
5. Create a simple API or CLI to manage branches and demonstrate agentic exploration isolation.
6. Benchmark checkpointing time against naive full backups to show efficiency gains.
7. Document design decisions, limitations, and potential improvements.

**Ships as:** A GitHub repo with code, scripts, and documentation demonstrating cross-component branching with efficient checkpointing.

**Stretch goal:** Integrate Data Flow Control policies to enforce safe data usage across branches.
