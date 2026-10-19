---
title: "723 · Waffle: An Online Oblivious Datastore for Protecting Data Access Patterns — Amr El Abbadi"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amr-el-abbadi"
source_hash: "7776dacb270154532ec85fed48d4052ceb4ef42a2ac0cc0ee07ecc7875cb4fc5"
sequence: 723
generator: "outreach-garden: managed"
---

# 723 · Waffle: An Online Oblivious Datastore for Protecting Data Access Patterns

## At a glance

- **Professor:** Amr El Abbadi
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Waffle: An Online Oblivious Datastore for Protecting Data Access Patterns](https://dl.acm.org/doi/pdf/10.1145/3626760)
- **Authors:** Sujaya Maiyya, Sharath Chandra Vemula, Divyakant Agrawal, Amr El Abbadi, Florian Kerschbaum
- **Year:** 2023

## Paper overview

Waffle is a datastore system designed to protect the patterns of data access from being observed by a passive adversary who can see all data requests but cannot alter them. Unlike previous systems, Waffle does not require prior knowledge of how data will be accessed and adapts to any sequence of requests. It balances security and performance by allowing system parameters to be tuned, uses a bounded cache, and maintains constant bandwidth overhead. Waffle outperforms existing oblivious datastores like Pancake and TaoStore in efficiency while providing strong security guarantees.

### Why it matters

**Research problem:** How to design a datastore that protects data access patterns from passive persistent adversaries without prior knowledge of input access distributions, while maintaining practical performance and bounded client-side storage.

**Why it matters:** Outsourcing data storage to cloud providers risks revealing sensitive information through access patterns, even when data is encrypted. Existing solutions either require prior knowledge of access patterns or incur prohibitive overheads, limiting their practicality for large-scale or dynamic workloads.

**Key contributions:**

- Definition of a new security model (α, β-uniformity) that quantifies the uniformity of server accesses and allows tunable security guarantees.
- Design and implementation of Waffle, the first oblivious datastore to provide online obliviousness for any adversarial input sequence under a passive persistent adversary without prior distribution knowledge.
- Waffle uses a bounded cache and constant bandwidth overhead, configurable by the application owner.
- Extensive theoretical and experimental analysis demonstrating Waffle's improved performance over state-of-the-art systems like Pancake and TaoStore.
- Experimental evidence that Waffle can handle correlated queries and multi-maps, extending applicability to relational data.

## About the professor

**Amr El Abbadi** — Professor, Department of Computer Science, Univ. of California - Santa Barbara.

Research interests: My research interests are in the fields of fault-tolerant distributed systems and databases. I have designed several protocols for highly available fault-tolerant systems and have also been involved in designing systems and database support for geographic information systems and collaborative environments. Recently, I have been especially interested in exploring efficient ways for retrieving data in a distributed library as well as content-based searching using multi-dimensional index structures.

### Research links

- [Faculty/profile page](https://www.cs.ucsb.edu/~amr)
- [Lab website](http://www.cs.ucsb.edu/~dsl)
- ['\[Alexandria](http://alexandria.sdc.ucsb.edu/)
- [Yangtze](http://www.cs.ucsb.edu/~dsl/yangtze)
- [Hardware](http://www.cs.ucsb.edu/~dsl/hardware)
- [Bibliography Server by Michael Ley @ University of Trier, Germany](http://www.informatik.uni-trier.de/~ley/db/indices/a-tree/a/Abbadi:Amr_El.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Waffle datastore paper, start with foundational concepts on security models for obliviousness and cache management in secure systems, as these underpin Waffle's design choices. Next, study the core cryptographic technique of Oblivious RAM (ORAM) and related oblivious datastores, which Waffle improves upon. Finally, watch the authors' own talk on Waffle for the most direct and detailed explanation of their novel contributions and experimental results.

### Security models for obliviousness lecture *(prerequisite)*
This section covers formal security models and threat models that define what it means for a system to be secure and oblivious. Understanding these models is crucial because Waffle introduces a novel security model (α, β-uniformity) that quantifies tunable obliviousness guarantees.

*How the paper uses it:* Waffle’s α, β-uniformity model builds on foundational security model concepts to provide tunable security guarantees.

▶ [1. Introduction, Threat Models](https://www.youtube.com/watch?v=GqmQg-cszw4) — MIT OpenCourseWare · 1:17:13 · 11y ago

### Cache management in secure systems lecture *(prerequisite)*
Waffle uses a bounded client-side cache to reduce the number of fake queries and improve performance. Understanding cache design and management in secure systems helps grasp how Waffle balances security and efficiency.

*How the paper uses it:* Waffle’s design leverages a bounded cache to optimize performance while maintaining obliviousness.

▶ [Computer Architecture - Lecture 4a: Cache Design (ETH Zürich, Fall 2018)](https://www.youtube.com/watch?v=55oYBm9cifI) — Onur Mutlu Lectures · 1:28:11 · 8y ago

### Oblivious RAM and oblivious datastores lecture
Oblivious RAM (ORAM) is the central cryptographic primitive underlying Waffle’s approach to hiding access patterns. This section provides an in-depth understanding of ORAM constructions, their limitations, and how oblivious datastores operate.

*How the paper uses it:* Waffle improves upon existing ORAM-based oblivious datastores like Pancake and TaoStore by providing online obliviousness without prior distribution knowledge.

▶ [ORAM - Prof. Benny Pinkas](https://www.youtube.com/watch?v=3RWyVGwG9U8) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:08:53 · 11y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Waffle paper, start by grasping the fundamental security problem of data access pattern privacy, which motivates the need for oblivious datastores. Next, learn about cache management in secure systems to appreciate Waffle's use of bounded client-side caching to improve performance. Then, study security models for obliviousness to understand Waffle's novel α, β-uniformity model that quantifies tunable security guarantees. Finally, dive into the core concept of Oblivious RAM and oblivious datastores, which underpin Waffle's design to hide access patterns efficiently without prior knowledge of access distributions.

### Data access pattern privacy lecture *(prerequisite)*
This section introduces the fundamental security challenge of protecting data access patterns from being leaked to adversaries, even when data is encrypted. Understanding this problem explains why systems like Waffle are necessary to prevent sensitive information leakage through observed access sequences.

*How the paper uses it:* Waffle addresses the problem of protecting data access patterns from passive adversaries who observe all data requests.

▶ [NDSS 2021 Obfuscated Access and Search Patterns in Searchable Encryption](https://www.youtube.com/watch?v=FwSa6wuR-tU) — NDSS Symposium · 15:00 · 5y ago

### Cache management in secure systems lecture *(prerequisite)*
Caching is a key technique to improve system performance by temporarily storing frequently accessed data. In secure systems, managing cache effectively can reduce overhead while maintaining security guarantees. This section explains cache basics and eviction policies relevant to Waffle's bounded client-side cache.

*How the paper uses it:* Waffle uses a bounded client-side cache to reduce the number of fake queries and improve efficiency.

▶ [Caching | Cache Patterns | Cache Invalidation & Eviction | System Design Tutorials | Part 9 | 2020](https://www.youtube.com/watch?v=Ez1GK2imrsY) — sudoCODE · 22:56 · 5y ago

### Security models for obliviousness lecture *(prerequisite)*
Security models define how systems quantify and guarantee privacy properties. This section covers threat models and security definitions that help understand how Waffle's α, β-uniformity model provides tunable obliviousness guarantees against passive adversaries.

*How the paper uses it:* Waffle introduces the α, β-uniformity security model to quantify uniformity of server accesses and enable tunable security.

▶ [1. Introduction, Threat Models](https://www.youtube.com/watch?v=GqmQg-cszw4) — MIT OpenCourseWare · 1:17:13 · 11y ago

### Oblivious RAM and oblivious datastores lecture
Oblivious RAM (ORAM) is a cryptographic technique to hide access patterns by reshuffling and encrypting data accesses. This section explains ORAM fundamentals and how oblivious datastores build on ORAM to protect data access patterns, providing the core technical background for understanding Waffle's design and improvements.

*How the paper uses it:* Waffle builds on ORAM concepts to provide online obliviousness without prior knowledge of access distributions and with improved performance.

▶ [ORAM - Prof. Benny Pinkas](https://www.youtube.com/watch?v=3RWyVGwG9U8) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:08:53 · 11y ago

## Already in your library

- [Oblivious RAM I](https://www.youtube.com/watch?v=jGr7Nj3KJ3c) — also for: BOLT: Bandwidth-Optimized Lightning-Fast Oblivious Map powered by Secure HBM Accelerators (Chenghong Wang)
- [Oblivious RAM (Part 1) - Gilad Asharov](https://www.youtube.com/watch?v=2Dhtzyr6KTM) — also for: S EA S EARCH: Secure and Efficient Selection Queries (Nisha Panwar)
- [20. Mobile Phone Security](https://www.youtube.com/watch?v=uT7BXusDgDM) — also for: Lost in Translation: Text Message Spoofing via Email (Aaron Schulman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of Waffle, an online oblivious datastore protecting data access patterns without prior knowledge of access distributions. The beginner project recreates a core mechanism from the paper using your existing skills. The intermediate project builds and extends the authors' implementation to evaluate performance against a baseline. The advanced project tackles a stated limitation by exploring protection against active adversaries or side-channel attacks, extending Waffle's security model.

### Beginner — Simulate Waffle's Bounded Cache and Fake Query Mechanism
*Effort: a weekend, ~8 hours*

You build a simplified simulation of Waffle's bounded client-side cache and fake query batching mechanism in Python or TypeScript. The simulation models a sequence of data requests and demonstrates how fake queries are dynamically selected based on least recently accessed objects to maintain obliviousness.

**Why it shows you understood the paper:** This project shows you understand Waffle's core approach to online obliviousness via bounded caching and fake query insertion, key to balancing security and performance without prior access pattern knowledge.

**Grounded in:** Waffle uses a bounded cache and dynamically selects fake queries based on least recently accessed objects to achieve online obliviousness without prior distribution knowledge.

**Tech stack:** Python 3.11 or TypeScript, Node.js (if TypeScript)

**Data:** Simulated synthetic sequences of data requests generated within the program; no external dataset required.

**Build it:**

1. Implement a data request simulator that generates a sequence of object accesses.
2. Implement a bounded cache to store recently accessed objects with a fixed size.
3. Implement logic to insert fake queries dynamically for least recently accessed objects when real queries occur.
4. Track and output the sequence of real and fake queries sent to the server simulation.
5. Visualize or log the ratio of fake to real queries and cache hits over time.

**Ships as:** A repository with simulation code and a README explaining how the bounded cache and fake query mechanism work, including example outputs demonstrating the mechanism's effect on query patterns.

**Stretch goal:** Add a simple metric to quantify the uniformity of server accesses (α, β-uniformity) from the simulation logs.

### Intermediate — Run and Extend Waffle Prototype to Compare Performance with TaoStore
*Effort: 2 weekends, ~20 hours*

You clone and run the Waffle prototype implementation from the authors' GitHub repository, then extend it to run experiments comparing Waffle's performance against TaoStore under configurable parameters. You reproduce key metrics such as bandwidth overhead and query latency.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' codebase, understand Waffle's design and performance claims, and empirically validate its advantages over a state-of-the-art baseline.

**Grounded in:** Extensive theoretical and experimental analysis demonstrating Waffle's improved performance over state-of-the-art systems like Pancake and TaoStore.

**Tech stack:** C++ (for Waffle prototype), Redis (backend key-value store), Linux environment, Python or shell scripting for experiments

**Data:** Synthetic workloads generated as per the authors' experimental setup in the Waffle prototype repository.

**Build it:**

1. Clone the Waffle prototype repository from https://github.com/sharathvemula/waffle_test.
2. Set up the environment with Redis and required dependencies to build and run Waffle.
3. Run baseline experiments using Waffle with default parameters and collect performance metrics.
4. Clone TaoStore from https://github.com/taostore/TaoStore and set up its environment.
5. Run comparable experiments on TaoStore using similar workloads and parameters.
6. Extend Waffle's code or configuration to vary cache size or fake query parameters and observe performance changes.
7. Analyze and plot the performance metrics comparing Waffle and TaoStore.

**Verified links from the paper:**

- <https://github.com/sharathvemula/waffle_test> — released by the paper's authors
- <https://github.com/taostore/TaoStore> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with scripts to run experiments, collected performance data, plots comparing Waffle and TaoStore, and a README documenting the setup, results, and insights.

**Stretch goal:** Implement a simple workload with correlated queries to demonstrate Waffle's protection against correlated query attacks.

### Advanced — Extend Waffle to Mitigate Active Adversary Attacks
*Effort: 3-4 weeks*

You design and prototype an extension to Waffle that addresses one of its stated limitations: protection against active adversaries who can inject queries or manipulate data. This involves modifying the security model or query handling to detect or mitigate active attacks, and evaluating the impact on performance and security.

**Why it shows you understood the paper:** This project shows deep comprehension of Waffle's security assumptions and limitations, and the ability to innovate beyond the original design by tackling a challenging open problem posed by the authors.

**Grounded in:** Waffle assumes a passive, semi-honest adversary and does not protect against active adversaries who can inject queries or manipulate data.

**Tech stack:** C++ (Waffle prototype), Redis, Python for evaluation scripts, Linux environment

**Data:** Synthetic workloads extended to include adversarial query injection scenarios simulated in the evaluation.

**Build it:**

1. Study Waffle's current design and security model focusing on the passive adversary assumption.
2. Research common active adversary attack vectors in oblivious datastores.
3. Design a mechanism (e.g., query authentication, anomaly detection, or query validation) to detect or mitigate active adversary behaviors.
4. Implement the mechanism as an extension or modification to the Waffle prototype.
5. Create synthetic workloads including adversarial query injections to test the extension.
6. Evaluate the security improvements and measure performance overhead introduced.
7. Document the design, implementation, evaluation, and limitations.

**Verified links from the paper:**

- <https://github.com/sharathvemula/waffle_test> — released by the paper's authors

**Ships as:** A forked Waffle prototype repository with the active adversary mitigation extension, evaluation scripts and results, and a detailed README explaining the approach and findings.

**Stretch goal:** Explore automated tuning of Waffle's parameters under dynamic workloads with shifting access patterns.

_The Waffle prototype requires a Linux environment with Redis and C++ build tools; ensure compatibility before starting the intermediate and advanced projects._
