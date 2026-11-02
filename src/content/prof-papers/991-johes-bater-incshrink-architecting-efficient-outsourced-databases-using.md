---
title: "991 · IncShrink: Architecting Efficient Outsourced Databases using Incremental MPC and Differential Privacy — Johes Bater"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-johes-bater"
source_hash: "4718190add1dd815c7f866f9bf18cef3aef1e67e33000fce73c4141e680607d3"
sequence: 991
generator: "outreach-garden: managed"
---

# 991 · IncShrink: Architecting Efficient Outsourced Databases using Incremental MPC and Differential Privacy

## At a glance

- **Professor:** Johes Bater
- **Institution:** Tufts University
- **Paper:** [IncShrink: Architecting Efficient Outsourced Databases using Incremental MPC and Differential Privacy](https://arxiv.org/pdf/2203.05084)
- **Authors:** Chenghong Wang, Johes Bater, Kartik Nayak, Ashwin Machanavajjhala
- **Year:** 2022

## Paper overview

This paper presents IncShrink, a novel framework for secure outsourced growing databases that supports efficient view-based query answering. It enables untrusted servers to maintain and update materialized views of outsourced data using incremental secure multi-party computation (MPC) combined with differential privacy (DP) to protect data privacy and reduce computation overhead. IncShrink balances privacy, accuracy, and efficiency, providing strong privacy guarantees while significantly improving query performance compared to existing methods.

### Why it matters

**Research problem:** How to design secure outsourced growing databases that allow untrusted servers to efficiently maintain and update materialized views for query answering, while ensuring strong privacy guarantees against leakage from update patterns and providing high performance.

**Why it matters:** Organizations increasingly outsource data storage and query processing to cloud providers but face privacy risks from leakage-abuse attacks. Existing secure outsourced databases either lack strong privacy guarantees or are inefficient, especially for dynamic data with updates. Efficiently supporting privacy-preserving analytics on growing outsourced data is critical for practical adoption.

**Key contributions:**

- First secure outsourced growing database framework supporting view-based query processing with a 3-way trade-off between privacy, accuracy, and efficiency.
- Integration of incremental MPC and differential privacy to securely update materialized views without trusted curators.
- Imposition of contribution constraints on records to guarantee bounded privacy loss over unlimited updates.
- Design and implementation of two DP-based view update protocols (sDPTimer and sDPANT) with joint noise generation to prevent leakage.
- Extensive empirical evaluation demonstrating significant query efficiency improvements (up to 1.5e+5×) over standard secure outsourced databases.

## About the professor

**Johes Bater** — Assistant Professor, Computer Science, Tufts University.

Research interests: how to balance privacy, security, and utility to build fast, accurate database systems that support privacy-preserving analytics with provable security guarantees

### Research links

- [Faculty/profile page](https://facultyprofiles.tufts.edu/johes-bater)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Differential Privacy
**The paper assumes:** mathematical foundations of differential privacy, privacy loss composition, noise addition mechanisms, and privacy-utility trade-offs
**Already in this field?** Skip this entirely if you already understand the formal definitions, mechanisms, and composition theorems of differential privacy.

This background focuses on differential privacy (DP), a core component of the IncShrink paper's privacy guarantees and noise addition mechanisms. The rigorous course option offers a structured, university-level deep dive into DP concepts and techniques, while the fast track provides a concise, focused introduction suitable for quickly grasping the essentials needed to understand the paper's privacy framework.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lecture 16: MWEM](https://www.youtube.com/playlist?list=PLViuPqhOZABqpVaUF8ezaUsBeNn-AcZl4) — Differential Privacy in Machine Learning and Stats · 6 videos · 1.4h across 6 episodes

**Watch only this:** Episodes 'Lecture 16: MWEM (Part 1)', 'Lecture 16: MWEM (Part 2)', and 'Lecture 16: MWEM (Part 3)', about 40 minutes total — enough to grasp the core MWEM algorithm and its DP properties.

*Why it unblocks this paper:* This short series on MWEM (Multiplicative Weights Exponential Mechanism) offers a concise, focused explanation of a key DP algorithm, providing intuition and practical understanding of DP mechanisms relevant to incremental updates and noise addition in IncShrink.

*If you want all of it:* All 6 episodes, about 1.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the IncShrink paper, start with foundational concepts of secure multi-party computation (MPC) and differential privacy in dynamic databases, as these underpin the paper's technical approach. Then, study view-based query processing in outsourced databases to grasp the query efficiency paradigm IncShrink improves upon. Finally, focus on the paper's core contribution by watching the authors' own talk explaining IncShrink, which ties together these concepts into their novel framework balancing privacy, accuracy, and efficiency.

### Secure multi-party computation incremental updates *(prerequisite)*
Secure MPC is the cryptographic foundation that enables multiple parties to jointly compute functions over their inputs while keeping those inputs private. Understanding MPC, especially incremental updates, is crucial to grasp how IncShrink securely updates materialized views without a trusted third party.

*How the paper uses it:* IncShrink integrates incremental MPC protocols to securely maintain and update outsourced data views without trusted curators.

▶ [Lec 01 What is Secure MPC](https://www.youtube.com/watch?v=wOO-7YKiMP8) — NPTEL - Indian Institute of Science, Bengaluru · 28:16 · 5y ago

### Differential privacy in dynamic databases *(prerequisite)*
Differential privacy (DP) provides rigorous privacy guarantees by bounding the information leakage from data analysis, especially important in dynamic databases that grow and update over time. Understanding DP in this context is essential to appreciate how IncShrink bounds privacy loss despite unlimited updates.

*How the paper uses it:* IncShrink applies differential privacy to protect against leakage from update patterns and to ensure bounded privacy loss over time.

▶ [Differentially Private Model Publishing For Deep Learning](https://www.youtube.com/watch?v=r1K93-sVr0s) — IEEE Symposium on Security and Privacy · 23:13 · 7y ago

### View-based query processing in outsourced databases *(prerequisite)*
View-based query processing is a paradigm where queries are answered using precomputed materialized views, improving efficiency especially in outsourced settings. Understanding this paradigm helps in appreciating IncShrink's approach to efficient query answering on growing outsourced data.

*How the paper uses it:* IncShrink supports efficient view-based query answering on outsourced growing databases, a key to its performance gains.

▶ [vSQL: Verifying Arbitrary SQL Queries over Dynamic Outsourced Databases](https://www.youtube.com/watch?v=HHtKZyRRsIU) — IEEE Symposium on Security and Privacy · 20:15 · 9y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand IncShrink, a secure outsourced growing database framework. We start with the basics of differential privacy in dynamic databases to grasp privacy guarantees over evolving data, then cover secure multi-party computation (MPC) focusing on incremental updates for secure data processing. Next, we explore view-based query processing in outsourced databases to understand efficient query answering on outsourced data. Finally, we conclude with the core concept of IncShrink itself, highlighting its novel integration of incremental MPC and differential privacy for efficient, privacy-preserving updates.

### Differential privacy in dynamic databases *(prerequisite)*
Learn how differential privacy protects sensitive information even as databases grow and change over time. This concept is essential to understand how privacy guarantees are maintained despite continuous data updates.

*How the paper uses it:* IncShrink applies differential privacy to bound leakage from update patterns in growing outsourced databases.

▶ [An Introduction to Differential Privacy for Analysis of Sensitive Data](https://www.youtube.com/watch?v=gO0dDEvFios) — Cybersecurity and Privacy Institute UWaterloo · 20:17 · 3y ago

### Secure multi-party computation incremental updates *(prerequisite)*
Understand secure multi-party computation (MPC), a cryptographic technique that allows multiple parties to jointly compute functions over their inputs while keeping those inputs private. Focus on how MPC supports incremental updates to outsourced data securely without revealing sensitive information.

*How the paper uses it:* IncShrink uses incremental MPC protocols to securely update materialized views without a trusted third party.

▶ [Lec 01 What is Secure MPC](https://www.youtube.com/watch?v=wOO-7YKiMP8) — NPTEL - Indian Institute of Science, Bengaluru · 28:16 · 5y ago

### View-based query processing in outsourced databases *(prerequisite)*
Explore how databases use materialized views to answer queries efficiently, especially when data is outsourced. This paradigm reduces computation overhead by maintaining precomputed query results that can be incrementally updated.

*How the paper uses it:* IncShrink supports efficient view-based query answering by maintaining and updating materialized views on untrusted servers.

▶ [vSQL: Verifying Arbitrary SQL Queries over Dynamic Outsourced Databases](https://www.youtube.com/watch?v=HHtKZyRRsIU) — IEEE Symposium on Security and Privacy · 20:15 · 9y ago

## Already in your library

- [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Introduction to Secure Multi-Party Computation - Ahto Truu ...](https://www.youtube.com/watch?v=z4aStwXT2GE) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Introduction to Multi-Party Computation (MPC or SMPC)](https://www.youtube.com/watch?v=90jcXCHsBF0) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [The Definition of Differential Privacy - Cynthia Dwork](https://www.youtube.com/watch?v=lg-VhHlztqo) — also for: Deciding Differential Privacy of Online Algorithms with Multiple Variables (A. Prasad Sistla)
- [Differential Privacy](https://www.youtube.com/watch?v=FYokHdzgJSg) — also for: Deciding Differential Privacy of Online Algorithms with Multiple Variables (A. Prasad Sistla)
- [Differential Privacy: What? So What? Now What?](https://www.youtube.com/watch?v=NRf6sUk1bv0) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Differential Privacy explained](https://www.youtube.com/watch?v=XgotQQpXwio) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy Mechanisms Explained](https://www.youtube.com/watch?v=Quzx_QaARAE) — also for: Federated Analytics: A survey (Shantanu Sharma)
- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
- [CMU Database Systems - 10 Query Processing (Fall 2018)](https://www.youtube.com/watch?v=vmI72W-vgYI) — also for: RABIT: Efficient Range Queries with Bitmap Indexing (Manos Athanassoulis)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of IncShrink's approach to secure outsourced growing databases using incremental MPC and differential privacy. The beginner project focuses on simulating and visualizing the privacy-accuracy trade-off with dummy data injection. The intermediate project involves reimplementing the core incremental MPC and DP-based view update protocols on a small synthetic dataset to measure query efficiency gains. The advanced project extends the framework by exploring dynamic update behaviors beyond fixed-size periodic updates, addressing a key limitation noted in the paper.

### Beginner — Simulate Differential Privacy Noise Impact on View Updates
*Effort: a weekend, ~8 hours*

You build a simple simulation that models how differential privacy noise and dummy data affect query accuracy and performance in an outsourced database view update scenario. The simulation will generate synthetic update batches and apply noise addition with varying dummy data ratios, then visualize the resulting query error and overhead trade-offs.

**Why it shows you understood the paper:** This project demonstrates your grasp of the privacy-accuracy-efficiency trade-off central to IncShrink, specifically how dummy data and noise influence query results and system overhead.

**Grounded in:** Query errors arise from truncation constraints and unsynchronized cached data, requiring careful tuning of parameters.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic data simulating update batches and query results; no real dataset required.

**Build it:**

1. Implement a synthetic data generator that simulates fixed-size update batches to a materialized view.
2. Add differential privacy noise to the updates with configurable noise scale and dummy data ratios.
3. Calculate query errors by comparing noisy view results to true values.
4. Visualize the trade-off between dummy data amount, noise scale, query error, and computational overhead.
5. Write a README explaining the simulation setup and how it relates to IncShrink's privacy-accuracy trade-offs.

**Ships as:** A Jupyter Notebook with simulation code, plots illustrating the impact of dummy data and noise on query accuracy and overhead, and a README linking the simulation to the paper's trade-off discussion.

**Stretch goal:** Add a simple interactive UI (e.g., with Streamlit) to let users adjust noise and dummy data parameters dynamically.

### Intermediate — Reimplement Incremental MPC and DP-based View Updates
*Effort: 2 weekends, ~20 hours*

You reimplement the core incremental MPC protocols (Transform and Shrink) combined with differential privacy noise addition to securely update a materialized view on a small synthetic growing dataset. You then benchmark query efficiency against a naive secure query baseline without view materialization.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into working code, demonstrating the performance gains from incremental MPC and DP-based view updates without a trusted third party.

**Grounded in:** IncShrink employs a view-based query answering paradigm where untrusted servers maintain a materialized view updated via incremental MPC composed of Transform and Shrink sub-protocols, with DP noise to protect privacy.

**Tech stack:** Python 3.11, FastAPI, pytest, numpy

**Data:** Synthetic dataset simulating a growing outsourced database with incremental updates; no public dataset specified.

**Build it:**

1. Implement a basic materialized view structure and simulate incremental data updates.
2. Implement the Transform and Shrink incremental MPC sub-protocols as described in the paper.
3. Integrate differential privacy noise addition with a joint noise generation mechanism.
4. Implement a naive secure query baseline that processes queries without view materialization.
5. Benchmark query latency and accuracy for both approaches on the synthetic dataset.
6. Document the implementation details, benchmarking results, and relate them to the paper's reported efficiency improvements.

**Ships as:** A GitHub repository with code implementing incremental MPC and DP-based view updates, benchmark scripts comparing query efficiency, and a README explaining the methodology and results.

**Stretch goal:** Add support for the two DP-based synchronization protocols (sDPTimer and sDPANT) to manage cached updates.

### Advanced — Extend IncShrink to Support Dynamic Update Behaviors
*Effort: 3+ weeks*

You extend the IncShrink framework by designing and implementing support for dynamic update behaviors beyond fixed-size periodic updates, such as variable-sized or irregular update intervals. You evaluate the impact on privacy guarantees, query accuracy, and system efficiency.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on the framework and address practical deployment challenges in privacy-preserving outsourced databases.

**Grounded in:** Handling of update behaviors other than fixed-size data blocks at predetermined intervals is deferred to future work.

**Tech stack:** Python 3.11, FastAPI, Docker, pytest, numpy, matplotlib

**Data:** Synthetic dataset simulating dynamic update patterns; no real dataset specified.

**Build it:**

1. Review the existing incremental MPC and DP-based update protocols and identify assumptions about fixed update sizes and intervals.
2. Design modifications to support variable-sized and irregular update batches while maintaining bounded privacy loss.
3. Implement the extended protocols and update the materialized view accordingly.
4. Simulate dynamic update patterns on synthetic data and measure privacy leakage, query accuracy, and efficiency.
5. Compare results against the fixed-interval baseline to evaluate trade-offs.
6. Document the design, implementation, evaluation, and discuss implications for practical deployments.

**Ships as:** A GitHub repository with extended IncShrink protocol implementations supporting dynamic updates, evaluation scripts, and a comprehensive README discussing the extension and its impact.

**Stretch goal:** Explore integration with secure hardware or other privacy-preserving techniques to further optimize performance.
