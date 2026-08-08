---
title: "313 · A Survey of Blockchain Data Management Systems — Bingzhe Li"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bingzhe-li"
source_hash: "f9937250f5710a72faa965a33bd5d589bc9e6e1713d93166d73e8ba5f44eae6d"
sequence: 313
generator: "outreach-garden: managed"
---

# 313 · A Survey of Blockchain Data Management Systems

## At a glance

- **Professor:** Bingzhe Li
- **Institution:** University of Texas at Dallas
- **Paper:** [A Survey of Blockchain Data Management Systems](https://arxiv.org/pdf/2111.13683)
- **Authors:** Qian Wei, Bingzhe Li, Wanli Chang, Zhiping Jia, Zhaoyan Shen, Zili Shao
- **Year:** 2021

## Paper overview

This paper provides a comprehensive survey of blockchain data management systems, focusing on three types of blockchains: standard blockchain, hybrid blockchain, and DAG-based blockchain. It categorizes data management into three layers—blockchain architecture, data structure, and storage engine—and discusses state-of-the-art techniques, challenges, and future research directions.

### Why it matters

**Research problem:** Despite many surveys on blockchain technologies, there is a lack of comprehensive review focusing specifically on blockchain data management systems, which are critical for addressing issues like scalability, security, and efficient data querying.

**Why it matters:** Blockchain systems face critical issues such as low throughput, excessive data load, and inefficient query processing, which limit their deployment in high-frequency and large-scale applications. Efficient data management is essential to improve scalability, security, and usability.

**Key contributions:**

- Comprehensive categorization of blockchain data management into architecture, data structure, and storage engine layers.
- Detailed survey of data management techniques for standard, hybrid, and DAG-based blockchains.
- Identification of key challenges such as security vulnerabilities, scalability bottlenecks, and inefficient query mechanisms.
- Summary of optimization techniques including sidechains, micropayment channels, partial storage, block compression, authenticated data structures, data sharding, and coding.
- Discussion of future research directions to improve blockchain data management.

## About the professor

**Bingzhe Li** — Assistant Professor, Computer Science, University of Texas at Dallas.

Research interests: Efficient computing infrastructure for data-intensive and AI-driven systems, AI/ML systems, Agentic AI, Storage systems, Energy-efficient computing architecture.

### Research links

- [Faculty/profile page](https://libingzheren.github.io)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Survey of Blockchain Data Management Systems," start with foundational concepts of blockchain data structures and storage engines to grasp how data is organized and stored efficiently. Then, explore off-chain transactions and sidechains as key optimization techniques for scalability. Finally, focus on the paper's core concept with the authors' own talk to gain direct insights into their comprehensive survey and future research directions.

### Blockchain Data Structures *(prerequisite)*
Understanding blockchain data structures is critical because they form the backbone of how blockchain systems organize and secure data. This knowledge is essential to appreciate the challenges and solutions in data querying, integrity, and storage overhead discussed in the paper.

*How the paper uses it:* The paper categorizes blockchain data management into architecture, data structure, and storage engine layers, making data structures foundational.

▶ [BLOCKCHAIN PROPERTIES AND CRYPTOGRAPHY PRIMITIVES](https://www.youtube.com/watch?v=hWQL_ilMl-g) — DataSpace Academy · Streamed 4 years ago

### Blockchain Storage Engines *(prerequisite)*
Blockchain storage engines are key to efficient data storage and retrieval, directly impacting scalability and performance. Understanding storage mechanisms helps contextualize the paper's discussion on storage optimization techniques like partial storage, compression, and authenticated data structures.

*How the paper uses it:* The paper surveys blockchain storage engines as one of the three main layers of data management.

▶ [George Spasov - Off-chain storage of data with on-chain proof](https://www.youtube.com/watch?v=0lx5p1zqcV0) — BlockSplit Conference · 7 years ago

### Off-chain Transactions and Sidechains *(prerequisite)*
Off-chain transactions and sidechains are important optimization techniques to improve blockchain throughput and scalability by offloading transactions from the main chain. Grasping these concepts is necessary to understand the trade-offs between scalability and security highlighted in the paper.

*How the paper uses it:* The paper discusses sidechains and micropayment channels as methods to offload transactions and improve throughput.

▶ [Ittai Abraham - Off chain Transactions](https://www.youtube.com/watch?v=U0ZzmkCNC0E) — Israel Institute for Advanced Studies · 7 years ago

### Blockchain Data Management Systems
This section covers the central topic of the paper, encompassing the architecture, data structure, and storage engine layers of blockchain data management. Watching a talk directly related to blockchain data management systems provides a comprehensive view of current challenges and solutions.

*How the paper uses it:* The paper's core contribution is a comprehensive survey of blockchain data management systems across multiple layers and blockchain types.

▶ [Wei Hu - Crypto Secure Data Management with In-Database Blockchain](https://www.youtube.com/watch?v=a5cptlj9QLM) — Devworld Conference · 9 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces blockchain data management by first explaining the foundational concepts of blockchain data structures and storage engines, which are critical to understanding how data is organized and stored. Next, it covers off-chain transactions and sidechains as key optimization techniques to improve scalability. Finally, it presents the core concept of blockchain data management systems as surveyed in the paper, tying all layers together for a comprehensive understanding.

### Blockchain Data Structures *(prerequisite)*
Learn how blockchain organizes data using cryptographic primitives like hashes and Merkle trees, which ensure data integrity and security. Understanding these structures is essential to grasp how blockchains store and verify data efficiently.

*How the paper uses it:* The paper categorizes blockchain data management into architecture, data structure, and storage engine layers, with data structures being core to storage and query challenges.

▶ [How Blockchain Data Structures Work (Beginner to Advanced)](https://www.youtube.com/watch?v=N0c_rEpGinY) — Daulat Hussain · 6 months ago

### Blockchain Storage Engines *(prerequisite)*
Explore how blockchain storage engines manage the persistent storage and retrieval of blockchain data, impacting scalability and performance. This includes techniques like partial storage and compression that reduce data load but may affect query capabilities.

*How the paper uses it:* The paper surveys blockchain storage engines as a key layer in data management, discussing trade-offs between storage efficiency and data integrity.

▶ [6 Steps of Blockchain Storage](https://www.youtube.com/watch?v=zovwM4jeYMk) — Eye on Tech · 6 years ago

### Off-chain Transactions and Sidechains *(prerequisite)*
Understand off-chain transactions and sidechains as methods to offload transactions from the main blockchain, improving throughput and scalability. These techniques help address blockchain bottlenecks but may introduce security and traceability challenges.

*How the paper uses it:* The paper highlights sidechains and micropayment channels as optimization techniques that improve throughput by offloading transactions.

▶ [Blockchain Transactions: On-Chain vs Off-Chain EXPLAINED](https://www.youtube.com/watch?v=QmIK6UjxoVc) — CoinGecko · 3 years ago

### Blockchain Data Management Systems
This section ties together the architecture, data structures, and storage engines to provide a comprehensive view of blockchain data management systems. It covers challenges like scalability, security, and query efficiency, reflecting the paper's survey and future directions.

*How the paper uses it:* The paper's core contribution is a comprehensive survey of blockchain data management systems across multiple layers and blockchain types.

▶ [Wei Hu - Crypto Secure Data Management with In-Database Blockchain](https://www.youtube.com/watch?v=a5cptlj9QLM) — Devworld Conference · 9 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth focused on blockchain data management systems as surveyed in the paper. The beginner project reproduces a core concept of off-chain transactions to demonstrate throughput improvement. The intermediate project implements and compares a blockchain storage optimization technique, illustrating trade-offs in data load and query capabilities. The advanced project tackles a future research direction by designing a prototype for secure off-chain transaction verification, addressing a key limitation discussed in the paper.

### Beginner — Simulate Off-Chain Transactions to Improve Throughput
*Effort: a weekend, ~8 hours*

You build a simple simulation of a blockchain network with a main chain and an off-chain sidechain channel that batches transactions. The simulation measures throughput improvements by offloading transactions from the main chain to the sidechain, demonstrating the concept of micropayment channels or sidechains.

**Why it shows you understood the paper:** This project shows you understand the paper's discussion on how sidechains and micropayment channels improve throughput by offloading transactions, including the trade-offs involved.

**Grounded in:** Sidechains and micropayment channels can offload transactions to improve throughput but may introduce security risks and loss of transaction details.

**Tech stack:** Python 3.11

**Data:** Synthetic transaction data generated within the simulation to mimic blockchain transactions.

**Build it:**

1. Implement a basic blockchain data structure in Python with blocks containing transactions.
2. Add a sidechain mechanism that batches and processes transactions off the main chain.
3. Simulate transaction submission to both main chain and sidechain, measuring throughput.
4. Visualize throughput differences with and without off-chain transaction batching.
5. Document the trade-offs observed in throughput and potential security implications.

**Ships as:** A Python simulation repository with scripts and README showing throughput metrics and discussion of off-chain transaction benefits and risks.

**Stretch goal:** Add a simple security check or verification step to the sidechain transactions to explore security trade-offs.

### Intermediate — Implement Partial Storage and Block Compression for Blockchain Data
*Effort: 2 weekends, ~20 hours*

You implement a prototype blockchain storage engine that supports partial storage of blocks and applies simple compression techniques to reduce data load. You then compare query performance and data integrity against a baseline full storage approach.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method of reducing blockchain data load via partial storage and compression, and the resulting trade-offs in information loss and query complexity.

**Grounded in:** Partial storage and block compression reduce data load but may cause information loss.

**Tech stack:** Python 3.11, SQLite, zlib compression library

**Data:** Synthetic blockchain transaction and block data generated to simulate a blockchain ledger.

**Build it:**

1. Design a simple blockchain data structure with blocks containing transaction data stored in SQLite.
2. Implement partial storage by selectively storing only block headers or summaries.
3. Apply compression (e.g., zlib) to block data before storage.
4. Implement query functions to retrieve transactions and verify integrity.
5. Benchmark query latency and data storage size against a full storage baseline.
6. Write a report discussing the trade-offs between storage savings and query limitations.

**Ships as:** A Python-based blockchain storage prototype with scripts, benchmarks, and README explaining the impact of partial storage and compression.

**Stretch goal:** Extend the prototype with authenticated data structures to improve query integrity despite compression.

### Advanced — Prototype Secure Off-Chain Transaction Verification
*Effort: 3+ weeks*

You design and implement a prototype system for secure off-chain transaction verification that addresses the paper's limitation of security risks in off-chain methods. The system includes cryptographic proofs or lightweight authenticated data structures to verify off-chain transactions without compromising traceability.

**Why it shows you understood the paper:** This project tackles a key future research direction from the paper, showing your ability to extend blockchain data management techniques to improve security and scalability in off-chain transaction processing.

**Grounded in:** Developing secure and scalable off-chain transaction verification methods.

**Tech stack:** Python 3.11, cryptography library, FastAPI, SQLite

**Data:** Synthetic blockchain and transaction data generated to simulate on-chain and off-chain states.

**Build it:**

1. Research cryptographic primitives suitable for off-chain transaction verification (e.g., Merkle proofs).
2. Implement a basic off-chain transaction channel with cryptographic proof generation.
3. Build a verification API using FastAPI to validate off-chain transaction proofs against on-chain state.
4. Simulate transaction flows and demonstrate verification correctness and performance.
5. Document security guarantees, limitations, and potential integration with existing blockchain architectures.

**Ships as:** A prototype repository with code, API server, test scripts, and detailed README discussing secure off-chain verification design and evaluation.

**Stretch goal:** Integrate data sharding techniques to scale the verification system while balancing decentralization.
