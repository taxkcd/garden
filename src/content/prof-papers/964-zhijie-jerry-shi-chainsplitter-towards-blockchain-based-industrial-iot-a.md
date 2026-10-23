---
title: "964 · ChainSplitter: Towards Blockchain-based Industrial IoT Architecture for Supporting Hierarchical Storage — Zhijie Jerry Shi"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhijie-jerry-shi"
source_hash: "02283d6fa520765fc92a7ade4d35b9dc30a571040a6c37d18f79f351cb6760b7"
sequence: 964
generator: "outreach-garden: managed"
---

# 964 · ChainSplitter: Towards Blockchain-based Industrial IoT Architecture for Supporting Hierarchical Storage

## At a glance

- **Professor:** Zhijie Jerry Shi
- **Institution:** University of Connecticut
- **Paper:** [ChainSplitter: Towards Blockchain-based Industrial IoT Architecture for Supporting Hierarchical Storage](https://arxiv.org/pdf/1910.00742)
- **Authors:** Gang Wang, Zhijie Jerry Shi, Mark Nixon, Song Han
- **Year:** 2019

## Paper overview

This paper proposes a blockchain-based architecture for Industrial Internet of Things (IIoT) systems that addresses the challenge of storing large volumes of blockchain data in resource-constrained IIoT environments. The solution is a hierarchical storage structure called ChainSplitter, where recent blockchain data is stored locally in an overlay network of IIoT gateways, while the majority of the blockchain is stored in decentralized cloud storage. Two software connectors, the blockchain connector and the cloud connector, manage the creation of blocks from IoT data and synchronization between local storage and the cloud, respectively. The architecture supports immutable and verifiable data services across multiple industrial parties.

### Why it matters

**Research problem:** Integrating blockchain technology into large-scale Industrial IoT systems faces a critical challenge: the massive storage requirements of blockchain data exceed the limited storage capacities of resource-constrained IIoT devices and gateways.

**Why it matters:** IIoT systems generate large volumes of data that need to be immutable and verifiable for trustworthiness among multiple parties. Traditional centralized IIoT architectures cannot guarantee data integrity and trust, while blockchain offers these features but requires each participant to store the entire blockchain, which is infeasible for IIoT devices. Without an efficient storage solution, blockchain cannot be practically applied to IIoT.

**Key contributions:**

- Proposed a hierarchical blockchain storage architecture for IIoT to address storage constraints by splitting blockchain data between local overlay nodes and cloud storage.
- Designed a blockchain-based IIoT architecture with three layers: local IoT networks, blockchain overlay network, and clouds.
- Developed two software connectors: blockchain connector for block formation and transaction validation, and cloud connector for synchronization between overlay network and cloud.
- Provided a case study on a medium-size industrial wireless sensor network demonstrating the efficiency and storage savings of the hierarchical storage approach.
- Integrated decentralized cloud storage platforms (e.g., Storj) to maintain blockchain consistency and security in the cloud layer.

## About the professor

**Zhijie Jerry Shi** — Computer Engineering, University of Connecticut.

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=JXjb1g0AAAAJ&hl=en)
- [Identity evidence](https://engineering.uconn.edu/faculty/cse/zhijie-jerry-shi)
- [Professor website](https://scholar.google.com/schhp?hl=en)
- [Resolved homepage](https://scholar.google.com/schhp?hl=en&as_sdt=0,44)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Blockchain fundamentals
**The paper assumes:** blockchain architecture, consensus protocols, permissioned blockchain, Byzantine Fault Tolerance
**Already in this field?** Skip this entirely if you already understand blockchain technology, permissioned ledgers, and consensus mechanisms like BFT.

This background focuses on blockchain fundamentals essential to understanding the ChainSplitter paper's architecture, including block formation, permissioned blockchains, and Byzantine Fault Tolerant consensus. The rigorous course provides a deep, structured university-level treatment, while the fast track offers a concise, intuition-driven introduction for quicker comprehension. Choose the course for thorough mastery or the fast track for a focused conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Blockchain Architecture Design and Use Cases](https://www.youtube.com/playlist?list=PLbRMhDVUMngfxxyVLh2t2gKDUfsOdGn56) — NPTEL IIT Kharagpur · 61 videos · 28.4h across the first 60 episodes

**Watch only this:** Lectures 1 through 18 (Introduction to Blockchain I-IV, Basic Crypto Primitives I-II, Bitcoin Basics I-III, Distributed Consensus, Consensus in Bitcoin I-II, Permissioned Blockchain I-V), about 8.5 hours — this covers blockchain basics, consensus mechanisms, and permissioned blockchain concepts crucial for understanding the paper.

*Why it unblocks this paper:* This NPTEL IIT Kharagpur course covers blockchain architecture and use cases in depth, including permissioned blockchains and BFT consensus protocols, directly relevant to the paper's hierarchical blockchain storage and overlay network design.

*If you want all of it:* About 28.4 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Blockchain Intuition](https://www.youtube.com/playlist?list=PLqTl0gRhY6nQ5iRmJ5begPvGmeyQW5vwM) — Learn With Udemy Course · 11 videos · 2.0h across 11 episodes

**Watch only this:** Episodes 1 through 9 (Blockchain A-Z™: Learn How To Build Your First Blockchain - Blockchain Intuition Series through Consensus Protocol), about 1.5 hours — these episodes cover the foundational blockchain concepts and consensus protocols relevant to the paper.

*Why it unblocks this paper:* This short-form series provides a clear, visual, and intuition-first introduction to blockchain concepts including blockchains, immutable ledgers, consensus protocols, and Byzantine Fault Tolerance, matching the core concepts needed to grasp the paper's architecture quickly.

*If you want all of it:* About 2.0 hours across all 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ChainSplitter paper, start with foundational knowledge of Industrial Internet of Things (IIoT) architecture to grasp system design and constraints relevant to blockchain integration. Next, study decentralized cloud storage systems to comprehend how large blockchain data is offloaded and synchronized in the cloud layer. Then, learn about blockchain consensus protocols to understand how the overlay network maintains blockchain integrity. Finally, focus on the core concept of hierarchical blockchain storage in IIoT, prioritizing any talks by the paper's authors or closely related academic seminars.

### Industrial Internet of Things architecture lecture *(prerequisite)*
Understanding IIoT architecture provides the necessary background on the design, constraints, and communication models of industrial IoT systems, which is crucial for appreciating the challenges of integrating blockchain technology in such environments.

*How the paper uses it:* The paper proposes a three-layer IIoT architecture including local IoT networks, blockchain overlay network, and cloud infrastructure.

▶ [Industrial IoT architecture: how to tap into its full potential](https://www.youtube.com/watch?v=qakSmfcFIdQ) — IIoT World · 59:46 · 3y ago

### decentralized cloud storage systems lecture *(prerequisite)*
Decentralized cloud storage lectures explain how blockchain data can be securely and efficiently stored off-chain, which is central to the paper's hierarchical storage approach that offloads older blockchain data to decentralized cloud platforms like Storj.

*How the paper uses it:* The architecture integrates decentralized cloud storage platforms to maintain blockchain consistency and security in the cloud layer.

▶ [New Paradigm in Decentralized Cloud Storage: StorX Networks | Community Innovation Lecture Series](https://www.youtube.com/watch?v=oUAz2eTlwHo) — MOBI · 39:03 · 4y ago

### blockchain consensus protocols lecture *(prerequisite)*
Consensus protocols are fundamental to maintaining blockchain integrity and trustworthiness; understanding Byzantine Fault Tolerant (BFT) consensus is essential since the paper uses permissioned blockchain with BFT consensus in the overlay network.

*How the paper uses it:* The overlay network adopts a BFT protocol to achieve consensus among IIoT gateways.

▶ [Bernard Wong • Consensus Protocols for Blockchains, Transactions, and Cloud Computing](https://www.youtube.com/watch?v=T9TWf2y3c-g) — Faculty of Mathematics, University of Waterloo · 39:22 · 8y ago

### ChainSplitter blockchain IIoT talk *(paper-talk search result; attribution unverified)*
This section focuses on the core concept of the paper: the hierarchical blockchain storage architecture for IIoT. The best fit is a seminar or talk by the authors or closely related academic presentations that provide direct insight into the proposed ChainSplitter architecture and its components.

*How the paper uses it:* Direct insight from the authors on their proposed hierarchical blockchain storage architecture for IIoT.

▶ [BiTS seminar – Blockchain Technology and its applications to the IoT – Bhaskar Krishnamachari](https://www.youtube.com/watch?v=UavPwWPCPV0) — QUT Trusted Networks Lab · 1:04:16 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the ChainSplitter paper, starting with the basics of Industrial Internet of Things (IIoT) architecture to grasp the system context and constraints. Next, it covers decentralized cloud storage systems to explain how large blockchain data can be offloaded and synchronized in the cloud layer. Then, it introduces blockchain consensus protocols to understand how the overlay network maintains blockchain integrity. Finally, it presents the core concept of the paper: the hierarchical blockchain storage architecture for IIoT, explaining how the proposed ChainSplitter design addresses storage challenges.

### Industrial Internet of Things architecture lecture *(prerequisite)*
Learn the basic design and components of Industrial IoT systems, including how sensors, gateways, and networks interact in industrial environments. This foundation helps understand the resource constraints and data generation challenges that motivate the paper's blockchain storage solution.

*How the paper uses it:* The paper's architecture builds on a three-layer IIoT system, so understanding IIoT basics is essential.

▶ [What is the Industrial Internet of Things (IIoT)?](https://www.youtube.com/watch?v=HmbUJEShA-8) — RealPars · 8:57 · 5y ago

### decentralized cloud storage systems lecture *(prerequisite)*
Explore how decentralized cloud storage works by distributing encrypted data fragments across multiple nodes, enhancing security and scalability compared to traditional centralized storage. This knowledge clarifies how the paper leverages decentralized cloud storage to offload bulk blockchain data.

*How the paper uses it:* The paper uses decentralized cloud storage (e.g., Storj) to store most blockchain data securely and efficiently.

▶ [What is Decentralized Storage?](https://www.youtube.com/watch?v=MNMVaV4vJFM) — Tech With Tim · 17:24 · 3y ago

### blockchain consensus protocols lecture *(prerequisite)*
Understand how distributed systems achieve agreement on data state despite faults or malicious actors, focusing on Byzantine Fault Tolerance (BFT) protocols used in permissioned blockchains. This is key to grasping how the overlay network maintains blockchain integrity in the paper's architecture.

*How the paper uses it:* The overlay network in the paper uses a BFT consensus protocol to validate transactions and form blocks.

▶ [Bernard Wong • Consensus Protocols for Blockchains, Transactions, and Cloud Computing](https://www.youtube.com/watch?v=T9TWf2y3c-g) — Faculty of Mathematics, University of Waterloo · 39:22 · 8y ago

### ChainSplitter blockchain IIoT talk *(paper-talk search result; attribution unverified)*
Gain direct insight into blockchain technology's application in IIoT, focusing on the hierarchical storage approach that splits blockchain data between local overlay nodes and cloud storage. This talk provides an overview of the problem, architecture, and software connectors proposed in the paper.

*How the paper uses it:* This talk covers the paper's core contribution: the ChainSplitter hierarchical blockchain storage architecture for IIoT.

▶ [Blockchain Technology for Industrial IoT (IIoT) Explained | Applications & Architecture](https://www.youtube.com/watch?v=5R1GGefRrP4) — Industrial IoT · 5:31 · 6mo ago

## Already in your library

- [3. Blockchain Basics & Cryptography](https://www.youtube.com/watch?v=0UvVOMZqpEA) — also for: Verifying the Correctness of Analytic Query Results (Ying Cai)
- [4. Blockchain Basics & Consensus](https://www.youtube.com/watch?v=w7HDA8gUbpQ) — also for: Janus: Hierarchical Multi-Blockchain-Based Access Control (HMBAC) for Multi-Authority and Multi-Domain Environments (Mike Burmester)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the ChainSplitter hierarchical blockchain storage architecture for Industrial IoT. The beginner project reproduces a key storage metric from the paper using simulated blockchain data. The intermediate project implements a simplified version of the hierarchical storage and synchronization mechanism described in the paper, comparing local storage usage with a baseline. The advanced project extends the architecture by exploring intermittent network connectivity scenarios, addressing a stated limitation of the paper.

### Beginner — Simulate Blockchain Data Volume and Local Storage Reduction
*Effort: a weekend, ~8 hours*

You build a simulation script that generates synthetic blockchain transaction data at rates similar to those reported in the paper for a medium-size IIoT system. Then you implement a simple local storage model that keeps only recent blocks locally and offloads older blocks to simulated cloud storage. You measure and plot local storage usage over time to reproduce the paper's key result on storage reduction.

**Why it shows you understood the paper:** This project shows you grasp the core storage challenge in IIoT blockchain systems and the hierarchical storage concept of keeping recent blocks locally while offloading older data to the cloud, as proposed in ChainSplitter.

**Grounded in:** Key result: "The hierarchical storage approach reduced local storage requirements significantly by keeping only recent blocks locally and synchronizing older blocks to the cloud."

**Tech stack:** Python 3.11, Matplotlib, NumPy

**Data:** Synthetic blockchain transaction data generated to mimic the paper's reported data volume (~750KB/s).

**Build it:**

1. Write a Python script to generate synthetic blockchain transactions at ~750KB/s data volume.
2. Implement a local storage buffer that retains only the most recent N blocks (configurable).
3. Simulate offloading older blocks to a separate cloud storage model.
4. Track and plot local storage usage over simulated time (e.g., 24 hours).
5. Compare local storage usage with total blockchain data generated to demonstrate storage savings.

**Ships as:** A GitHub repo with the simulation code, plots showing local storage usage over time, and a README explaining how this reproduces the paper's storage reduction result.

**Stretch goal:** Add a simple command-line interface to configure block size, retention window, and data generation rate.

### Intermediate — Prototype Hierarchical Blockchain Storage with Synchronization
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the ChainSplitter architecture focusing on the overlay network nodes and cloud synchronization connectors. Your prototype will simulate block formation from IoT transactions, local storage of recent blocks, and periodic synchronization of older blocks to a mock cloud storage. You compare local storage usage and synchronization time against a baseline that stores the full blockchain locally.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core hierarchical storage mechanism and synchronization connectors, showing practical understanding of how to reduce local storage and maintain blockchain consistency.

**Grounded in:** Key contribution: "Developed two software connectors: blockchain connector for block formation and transaction validation, and cloud connector for synchronization between overlay network and cloud."

**Tech stack:** Python 3.11, FastAPI, SQLite (for local storage simulation), HTTP client/server libraries

**Data:** Simulated IoT transaction data generated in the prototype; no external dataset required.

**Build it:**

1. Implement a blockchain connector module that forms blocks from incoming simulated IoT transactions.
2. Store recent blocks locally in a SQLite database representing overlay node storage.
3. Implement a cloud connector module that periodically synchronizes older blocks to a mock cloud storage (e.g., a separate directory or database).
4. Measure local storage size over time and synchronization duration over a simulated network link.
5. Implement a baseline mode where all blocks are stored locally without offloading.
6. Compare storage usage and synchronization metrics between hierarchical and baseline modes.

**Ships as:** A GitHub repo with the prototype code, scripts to run simulations, comparison metrics, and a README documenting the architecture and results.

**Stretch goal:** Add a simple consensus simulation using a basic BFT protocol to validate blocks before synchronization.

### Advanced — Extend ChainSplitter Architecture to Handle Intermittent Connectivity
*Effort: 3+ weeks*

You extend the hierarchical blockchain storage prototype to simulate intermittent network connectivity between overlay nodes and cloud storage. You design and implement mechanisms to queue synchronization tasks, retry failed uploads, and ensure blockchain consistency and availability despite network partitions. You evaluate the impact on synchronization latency and data availability.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper about reliance on stable connectivity. It shows your ability to innovate on the architecture by adding robustness to real-world industrial network conditions.

**Grounded in:** Limitation: "The proposed architecture assumes reliable network connectivity between overlay nodes and clouds, which may not always be available in industrial settings." Future direction: "Extending the security mechanisms to detect and mitigate malicious behavior in overlay nodes during synchronization."

**Tech stack:** Python 3.11, FastAPI, SQLite, Asyncio or Celery for task queuing, Docker (optional for deployment simulation)

**Data:** Simulated IoT transaction data and network conditions generated within the prototype.

**Build it:**

1. Extend the cloud connector to detect network availability and queue synchronization tasks when offline.
2. Implement retry logic with exponential backoff for failed synchronization attempts.
3. Simulate network partitions and recoveries in the prototype environment.
4. Ensure blockchain consistency by verifying block hashes and synchronization order after reconnection.
5. Measure synchronization latency, backlog size, and data availability under intermittent connectivity scenarios.
6. Document design decisions and limitations in the README.

**Ships as:** A GitHub repo with the extended prototype, network simulation scripts, evaluation results, and a detailed README discussing how intermittent connectivity is handled.

**Stretch goal:** Incorporate basic security checks to detect and reject malicious or inconsistent blocks during synchronization.
