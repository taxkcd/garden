---
title: "970 · LazyLog: A New Shared Log Abstraction and Design for Modern Low-Latency Applications — Aishwarya Ganesan"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aishwarya-ganesan"
source_hash: "c7401850aa31fc40d7780c9973379cff734222e475a4680f4ee02f6684384e4d"
sequence: 970
generator: "outreach-garden: managed"
---

# 970 · LazyLog: A New Shared Log Abstraction and Design for Modern Low-Latency Applications

## At a glance

- **Professor:** Aishwarya Ganesan
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [LazyLog: A New Shared Log Abstraction and Design for Modern Low-Latency Applications](https://dl.acm.org/doi/pdf/10.1145/3750445)
- **Authors:** Xuhao Luo, Shreesha Gopalakrishna Bhat, Jiyu Hu, Ramnatthan Alagappan, Aishwarya Ganesan
- **Year:** 2025

## Paper overview

LazyLog is a new design for shared logs used in distributed systems that reduces the latency of data ingestion by deferring the ordering of records until just before they are read, rather than eagerly ordering them upon append. This approach leverages the fact that many modern applications do not require immediate ordering upon data ingestion but only when the data is consumed later. LazyLog provides the same linearizable ordering guarantees as traditional shared logs but achieves significantly lower append latencies by performing ordering in the background. Two systems implementing LazyLog, Erwin-bb and Erwin-st, demonstrate this approach with different architectures and show substantial latency improvements over existing systems.

### Why it matters

**Research problem:** Existing shared logs eagerly order records upon ingestion to provide linearizable total order across shards, which incurs high append latencies due to coordination overhead. This high latency limits the applicability of shared logs in modern low-latency applications.

**Why it matters:** Low-latency ingestion is critical for many real-world applications such as distributed databases, high-availability journaling, message queues, event sourcing, and log aggregation. Current shared logs with eager ordering cannot meet the latency demands of these applications, hindering performance and scalability.

**Key contributions:**

- New observations about modern shared-log applications showing that eager ordering upon append is unnecessary for many workloads.
- Proposal of the LazyLog abstraction that defers ordering until needed while preserving linearizable total order guarantees.
- Design and implementation of two LazyLog systems (Erwin-bb and Erwin-st) that achieve low-latency appends with linearizable order across shards.
- Comprehensive evaluation demonstrating significant latency reductions (∼4× over Corfu and 100× over Scalog) and applicability to real-world applications.

## About the professor

**Aishwarya Ganesan** — Assistant Professor, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: distributed systems, storage, and operating systems

### Research links

- [Faculty/profile page](https://aishwaryaganesan.github.io)
- [Lab website](https://dassl-uiuc.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems Fundamentals
**The paper assumes:** distributed systems consistency models, fault tolerance, consensus protocols, and replication techniques
**Already in this field?** Skip this entirely if you already have a solid understanding of distributed systems concepts including consistency, replication, and consensus algorithms.

To understand the LazyLog paper, a solid grasp of distributed systems fundamentals—especially shared logs, linearizability, coordination, and fault tolerance—is essential. The rigorous course option offers a deep, structured university-level treatment of these concepts, while the fast track provides a concise, intuitive introduction suitable for quickly gaining core insights without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Distributed systems](https://www.youtube.com/playlist?list=PLp6ek2hDcoNAOfn2X55uHBAvxicuCwF6T) — NPTEL IIT Delhi · 29 videos · 28.7h across 29 episodes

**Watch only this:** LECTURE 1 through LECTURE 6, about 6 hours — covering fundamentals of distributed systems, consistency models, and coordination mechanisms essential to grasp LazyLog's deferred ordering and linearizability guarantees.

*Why it unblocks this paper:* This NPTEL IIT Delhi Advanced Distributed Systems course covers distributed systems concepts in depth, including ordering guarantees, fault tolerance, and coordination, directly relevant to understanding LazyLog's design and trade-offs.

*If you want all of it:* 28.7 hours across 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed System - Chapter 1 - Introduction To Distributed System](https://www.youtube.com/playlist?list=PLAXUYU7PbJhjIJTC3HyCMkVOzAJY_qnzz) — Engineering Student · 8 videos · 2.8h across 8 episodes

**Watch only this:** Episodes 1 through 4, about 1.3 hours — covering distributed systems overview, linearizability, system design basics, and characteristics of distributed systems to quickly build intuition on shared logs and coordination.

*Why it unblocks this paper:* This Engineering Student playlist offers a clear, concise introduction to distributed systems concepts including ordering, consistency, and system design, providing a quick yet solid foundation for the key ideas behind LazyLog.

*If you want all of it:* 2.8 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LazyLog paper, start by building a solid foundation in distributed consensus and coordination, as coordination overhead is a key bottleneck LazyLog addresses. Next, study linearizability in distributed systems to grasp the consistency guarantees LazyLog preserves. Then, review the shared log abstractions that form the basis for LazyLog's innovation. Finally, focus on the core concept of LazyLog itself by watching the authors' own detailed talk explaining their novel shared log design and its benefits.

### Distributed consensus and coordination *(prerequisite)*
Distributed consensus and coordination are fundamental to understanding how distributed systems agree on shared state despite failures and network partitions. Since LazyLog reduces coordination overhead by deferring ordering, grasping consensus protocols and coordination mechanisms is essential to appreciate the paper's approach.

*How the paper uses it:* Coordination overhead is a key bottleneck LazyLog addresses by deferring ordering.

▶ [Lecture 6: Distributed Systems & Consensus](https://www.youtube.com/watch?v=FzayrHDx-Gw) — Blockchain at Berkeley · 1:10:05 · 6y ago

### Linearizability in distributed systems *(prerequisite)*
Linearizability is the strongest consistency model that ensures operations appear instantaneous and in a total order. LazyLog guarantees linearizable total order, so understanding linearizability is critical to appreciate how the system preserves correctness despite deferring ordering.

*How the paper uses it:* LazyLog guarantees linearizable total order, so understanding linearizability is critical.

▶ [Distributed Systems 7.2: Linearizability](https://www.youtube.com/watch?v=noUNH3jDLC0) — Martin Kleppmann · 18:44 · 5y ago

### Shared log abstractions *(prerequisite)*
Shared log abstractions provide the foundational model for ordering and durability of records in distributed systems. Understanding traditional shared log designs is necessary to appreciate LazyLog's novel approach of deferring ordering to reduce latency.

*How the paper uses it:* Understanding the foundational shared log model is essential to grasp LazyLog's innovation.

▶ [OSDI '25 - Low End-to-End Latency atop a Speculative Shared Log with Fix-Ante Ordering](https://www.youtube.com/watch?v=qJYPFJUaAE8) — USENIX · 17:26 · 1y ago

### LazyLog paper talk *(paper-talk search result; attribution unverified)*
This talk by one of the paper's authors presents an in-depth explanation of the LazyLog design, its motivation, implementation details, and evaluation results. It offers direct insights into the novel shared log abstraction and how it achieves low-latency ingestion with linearizable ordering.

*How the paper uses it:* Directly hear the authors explain their novel shared log design.

▶ [\[Deep Dive\] LazyLog: A New Shared Log Abstraction for Low-Latency Applications](https://www.youtube.com/watch?v=oVn8-YzyC9Q) — StreamNative · 43:26 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand LazyLog, start by learning the foundational concepts of shared log abstractions, which explain how logs are used to order events in distributed systems. Next, grasp linearizability, the strong consistency model LazyLog guarantees, followed by distributed consensus and coordination, which underpin ordering and fault tolerance. Finally, focus on the core LazyLog concept of deferred ordering in distributed logs, which enables its low-latency design by postponing ordering until read time.

### Shared log abstractions *(prerequisite)*
Shared log abstractions provide a way to record and order events or records across distributed systems, ensuring a consistent sequence of operations. Understanding this model is essential because LazyLog builds on the idea of shared logs but innovates by deferring ordering.

*How the paper uses it:* LazyLog introduces a new shared log abstraction that defers ordering until read time while preserving linearizable total order guarantees.

▶ [OSDI '25 - Low End-to-End Latency atop a Speculative Shared Log with Fix-Ante Ordering](https://www.youtube.com/watch?v=qJYPFJUaAE8) — USENIX · 17:26 · 1y ago

### Linearizability in distributed systems *(prerequisite)*
Linearizability is a strong consistency model that ensures operations appear instantaneous and in a total order consistent with real-time. It is critical to understand this to appreciate how LazyLog maintains correctness despite deferring ordering.

*How the paper uses it:* LazyLog preserves linearizable total order guarantees, ensuring correctness despite lazy ordering.

▶ [Distributed Systems 7.2: Linearizability](https://www.youtube.com/watch?v=noUNH3jDLC0) — Martin Kleppmann · 18:44 · 5y ago

### Distributed consensus and coordination *(prerequisite)*
Distributed consensus protocols enable multiple nodes to agree on a single value despite failures, which is key to ordering events in distributed logs. Coordination overhead in consensus is the bottleneck LazyLog aims to reduce by deferring ordering.

*How the paper uses it:* LazyLog avoids coordination overhead in the critical path by deferring ordering to a background process, which relies on consensus mechanisms.

▶ [Distributed Systems Tutorials - 5.Consensus & Coordination in Distributed Systems](https://www.youtube.com/watch?v=4w7YxOkLcNc) — Orkhan Gasanov · 14:34 · 8mo ago

## Already in your library

- [Lecture 7: Decomposition, Abstraction, and Functions](https://www.youtube.com/watch?v=Qf6OVR8MLnU) — also for: Homomorphism Calculus for User-Defined Aggregations (Dixin Tang)
- [Distributed Consensus: Definition & Properties of Consensus, Steps & Fault-Tolerance in Consen. ALG.](https://www.youtube.com/watch?v=wMrLPtyU_dE) — also for: Obfuscated Consensus (James Aspnes)
- [Distributed Consensus and Data Replication strategies on the server](https://www.youtube.com/watch?v=GeGxgmPTe4c) — also for: AdaChain: A Learned Adaptive Blockchain (Mohammad Javad Amiri)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the LazyLog paper. The beginner project recreates the key concept of deferred ordering in a simplified shared log simulation. The intermediate project implements a small-scale LazyLog-inspired system and compares append latencies against a baseline eager-ordering log using the authors' publicly available LazyLog artifact. The advanced project extends LazyLog by addressing one of its stated limitations, such as optimizing read-after-write latency overhead, to explore practical trade-offs in real workloads.

### Beginner — Simulate Deferred Ordering in a Shared Log
*Effort: a weekend, ~8 hours*

You build a simple simulation of a shared log system that appends records without immediate global ordering and defers ordering until read time. The simulation models multiple shards and shows how records can be appended quickly and ordered later, illustrating LazyLog's core abstraction.

**Why it shows you understood the paper:** This project demonstrates you grasp the fundamental LazyLog insight that eager ordering is not always necessary and that deferring ordering can reduce append latency while preserving linearizable order at read time.

**Grounded in:** Proposal of the LazyLog abstraction that defers ordering until needed while preserving linearizable total order guarantees.

**Tech stack:** Python 3.11

**Data:** Synthetic data generated in simulation representing log records appended to multiple shards.

**Build it:**

1. Implement a multi-shard log simulation where appends add records to shards without global ordering.
2. Implement a deferred ordering mechanism that assigns global positions to records only when a read request occurs.
3. Simulate concurrent appends and reads, showing append latency is low and ordering is enforced before reads.
4. Visualize or log the order of records before and after deferred ordering to illustrate correctness.
5. Write a README explaining the simulation and how it reflects LazyLog's deferred ordering abstraction.

**Ships as:** A Python simulation repository with code, example runs, and README explaining deferred ordering and its latency benefits.

**Stretch goal:** Add a simple visualization dashboard showing append latency vs. read latency trade-offs interactively.

### Intermediate — Implement and Evaluate a LazyLog Prototype
*Effort: 2 weekends, ~20 hours*

You implement a simplified LazyLog system inspired by the paper's description and use the authors' LazyLog artifact repository as a reference. You build a prototype that supports appends without eager ordering and performs asynchronous ordering before reads. You compare append latencies against a baseline eager-ordering log system (e.g., Apache Kafka or a simple eager log you implement).

**Why it shows you understood the paper:** This project shows you can reimplement the core LazyLog method and quantitatively evaluate its latency benefits, demonstrating comprehension of the paper's design and experimental methodology.

**Grounded in:** Design and implementation of two LazyLog systems (Erwin-bb and Erwin-st) that achieve low-latency appends with linearizable order across shards; Comprehensive evaluation demonstrating significant latency reductions.

**Tech stack:** Python 3.11, Docker, gRPC or REST for communication, GitHub Actions for CI

**Data:** Synthetic workload of small and large record appends generated locally to simulate ingestion and read patterns.

**Build it:**

1. Clone and study the authors' LazyLog artifact repository at https://github.com/dassl-uiuc/LazyLog-Artifact to understand their implementation approach.
2. Implement a prototype LazyLog system that accepts appends without coordination and defers ordering asynchronously.
3. Implement a baseline eager-ordering log system for comparison, or use a simple existing system like Kafka with default ordering.
4. Generate synthetic workloads with varying record sizes and append rates to test both systems.
5. Measure and compare append latencies and throughput under similar workloads.
6. Document the implementation, evaluation setup, results, and analysis in a detailed README.

**Verified links from the paper:**

- <https://github.com/dassl-uiuc/LazyLog-Artifact> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the LazyLog prototype, baseline system, evaluation scripts, and a report comparing latency and throughput.

**Stretch goal:** Extend the prototype to support multiple shards and demonstrate linearizable total order across shards.

### Advanced — Optimize LazyLog for Immediate Read-After-Write Workloads
*Effort: 3+ weeks*

You extend the LazyLog prototype to address the paper's limitation regarding overhead in workloads with immediate read-after-write patterns. You design and implement optimizations such as batching or speculative ordering to reduce slow-path read latency. You evaluate the impact of these optimizations on latency and throughput using synthetic workloads that simulate immediate read-after-write scenarios.

**Why it shows you understood the paper:** This project demonstrates deep understanding of LazyLog's trade-offs and the ability to innovate on its design to improve performance in challenging workload patterns, aligning with the paper's future directions.

**Grounded in:** Applications that read immediately after appends may incur overhead due to lazy ordering, though batching can mitigate this; future direction: optimizing handling of workloads with immediate read-after-write patterns to reduce slow-path read overhead.

**Tech stack:** Python 3.11, Docker, gRPC or REST, Benchmarking tools

**Data:** Synthetic workload simulating immediate read-after-write access patterns with configurable read delays.

**Build it:**

1. Analyze the baseline LazyLog prototype's performance on immediate read-after-write workloads to identify overhead.
2. Design and implement batching of ordering operations or speculative ordering to reduce read latency.
3. Integrate these optimizations into the LazyLog prototype.
4. Develop synthetic workloads that simulate varying degrees of read-after-write immediacy.
5. Benchmark and compare latency and throughput before and after optimizations.
6. Document the design decisions, implementation details, evaluation results, and insights in the README.

**Verified links from the paper:**

- <https://github.com/dassl-uiuc/LazyLog-Artifact> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** An enhanced LazyLog prototype repository with optimizations for immediate read-after-write workloads and a comprehensive evaluation report.

**Stretch goal:** Explore integration of the optimized LazyLog with an existing distributed storage system or database to demonstrate practical applicability.
