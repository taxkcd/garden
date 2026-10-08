---
title: "587 · S EA S EARCH: Secure and Efficient Selection Queries — Nisha Panwar"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nisha-panwar"
source_hash: "958ec70ee0cc4444a8bf037210b6d4bd7976ec76e90abeb3e083229919b4af9c"
sequence: 587
generator: "outreach-garden: managed"
---

# 587 · S EA S EARCH: Secure and Efficient Selection Queries

## At a glance

- **Professor:** Nisha Panwar
- **Institution:** Augusta University
- **Paper:** [S EA S EARCH: Secure and Efficient Selection Queries](https://eprint.iacr.org/2024/2041.pdf)
- **Authors:** Shantanu Sharma, Yin Li, Sharad Mehrotra, Nisha Panwar, Komal Kumari, Swagnik Roychoudhury
- **Year:** 2023

## Paper overview

This paper presents S EA S EARCH, a system that enables highly secure and efficient selection queries on secret-shared data. It protects against information leakage from access patterns and query result sizes, using additive and multiplicative secret-sharing combined with fingerprinting techniques. The system supports complex queries including conjunctive, disjunctive, and range conditions without requiring communication among servers during query execution, achieving strong privacy guarantees and practical performance.

### Why it matters

**Research problem:** Existing secret-sharing based systems for secure query processing either leak information through access patterns or query result sizes, or suffer from high inefficiency due to communication overhead and returning entire datasets. The challenge is to design an information-theoretically secure system that prevents both access-pattern and volume leakage while maintaining efficient query execution.

**Why it matters:** Information-theoretic security offers protection against adversaries with unlimited computational power, including quantum computers. Preventing leakage from access patterns and volume is critical to avoid adversaries inferring sensitive data from query execution. Efficient and secure query processing is essential for practical deployment of privacy-preserving data outsourcing in cloud environments.

**Key contributions:**

- Development of a fingerprint-based search algorithm over additive secret shares that prevents access-pattern and volume leakage without server communication.
- Two oblivious row retrieval methods that efficiently fetch query results while hiding access patterns and volume, one using multiplicative shares and another using additive shares with DPF.
- Implementation and evaluation on AWS demonstrating practical performance on large datasets (up to 10 million rows) with query times significantly faster than prior systems.
- Formal security definitions and proofs ensuring query privacy, data privacy, and server privacy under the secret-sharing model.
- Comprehensive comparison with existing secret-sharing and encrypted query systems showing superior efficiency and stronger leakage protection.

## About the professor

**Nisha Panwar** — Associate Professor, Department of Business, Augusta University.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://www.augusta.edu/faculty/directory/view.php?id=NPANWAR)
- [Identity evidence](https://sites.google.com/view/panwar)
- [Identity evidence](https://scholar.google.com/citations?user=0dhq-70AAAAJ&hl=en)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Secret Sharing and Secure Multiparty Computation
**The paper assumes:** secret sharing schemes, secure multiparty computation protocols, information-theoretic security
**Already in this field?** Skip this entirely if you already understand the basics of secret sharing and how secure multiparty computation protocols enable privacy-preserving distributed computations.

To understand the cryptographic foundations and secure multiparty computation techniques underlying S EA S EARCH, especially its use of additive and multiplicative secret-sharing and fingerprinting, this background provides two viewing options. The rigorous course offers a deep, structured university-level treatment of secure computation and secret sharing, ideal for a thorough grasp. The fast track is a concise, focused playlist from the same authoritative source that covers the core concepts quickly for efficient preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Secure Computation: Part I](https://www.youtube.com/playlist?list=PLgMDNELGJ1Ca3l-xioOzN86BIZ2a0N8Ds) — NPTEL - Indian Institute of Science, Bengaluru · 60 videos · 31.8h across 60 episodes

**Watch only this:** Lectures 7 (Secret sharing), 8 (Additive Secret Sharing), 11 (Shamir Secret-Sharing), 12 (Linear secret-sharing), 13 (Linear Secret Sharing Contd.), and 19 (The BGW MPC Protocol), about 3.5 hours total — these cover the essential secret-sharing schemes and MPC protocols foundational to the paper.

*Why it unblocks this paper:* This NPTEL course on Secure Computation covers secret sharing and MPC in depth, including additive secret sharing and protocols relevant to S EA S EARCH's design. It is directly aligned with the paper's cryptographic primitives and security proofs.

*If you want all of it:* All 60 episodes, approximately 31.8 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the S EA S EARCH paper, start with foundational cryptographic primitives of secret sharing, focusing on additive and multiplicative secret sharing schemes. Next, explore the concept of oblivious RAM and access pattern hiding, which addresses key privacy challenges relevant to the paper's goal of preventing leakage. Then, study distributed point functions, a technique used for efficient oblivious row retrieval in the system. Finally, conclude with the core concept by reviewing the authors' own talk or the most relevant academic presentation on secret-sharing based secure query processing to see how these concepts integrate into the S EA S EARCH system.

### Additive and multiplicative secret sharing *(prerequisite)*
Additive and multiplicative secret sharing are foundational cryptographic primitives that enable secure data sharing and computation without revealing the underlying data. Understanding these schemes is crucial as S EA S EARCH leverages both types of secret sharing to support different query operations efficiently and securely.

*How the paper uses it:* S EA S EARCH uses additive shares for search and multiplicative shares for disjunctive search and row retrieval.

▶ [Lec 08 Additive Secret Sharing](https://www.youtube.com/watch?v=TBgxlXHzxxc) — NPTEL - Indian Institute of Science, Bengaluru · 43:36 · 5y ago

### Oblivious RAM and access pattern hiding *(prerequisite)*
Oblivious RAM (ORAM) techniques are designed to hide access patterns during data queries, preventing adversaries from inferring sensitive information based on memory access sequences. This concept is key to understanding how S EA S EARCH prevents access-pattern leakage without server communication.

*How the paper uses it:* S EA S EARCH prevents access-pattern leakage, a central privacy challenge addressed by ORAM techniques.

▶ [Oblivious RAM (Part 1) - Gilad Asharov](https://www.youtube.com/watch?v=2Dhtzyr6KTM) — The BIU Research Center on Applied Cryptography and Cyber Security · 48:53 · 4y ago

### Secret-sharing based secure query processing
This concept covers the central method of enabling privacy-preserving queries on secret-shared data without leakage of access patterns or query result sizes. Understanding this topic provides direct insight into the core contributions and mechanisms of S EA S EARCH.

*How the paper uses it:* S EA S EARCH is a secret-sharing based system that achieves secure and efficient selection queries with strong leakage protection.

▶ [noc20 cs02 lec56 Secret Sharing](https://www.youtube.com/watch?v=Rsn8HjNiQpA) — NPTEL - Indian Institute of Science, Bengaluru · 36:05 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the S EA S EARCH paper, start by learning the foundational cryptographic primitives of additive and multiplicative secret sharing, which are essential for secure data sharing and computation. Next, grasp the concept of oblivious RAM and access pattern hiding to appreciate the privacy challenges the paper addresses. Then, study distributed point functions, a key technique used for efficient oblivious row retrieval in the system. Finally, explore the core method of secret-sharing based secure query processing, which enables privacy-preserving queries without leakage, culminating in a better understanding of the S EA S EARCH system itself.

### Additive and multiplicative secret sharing *(prerequisite)*
Additive and multiplicative secret sharing are cryptographic techniques that split data into parts (shares) so that no single part reveals the secret. Additive secret sharing splits a secret into shares that sum to the secret, while multiplicative secret sharing splits it into shares whose product is the secret. These schemes enable secure distributed computation without revealing the underlying data.

*How the paper uses it:* S EA S EARCH uses additive shares for search and multiplicative shares for disjunctive search and row retrieval, forming the cryptographic foundation of the system.

▶ [Lec 08 Additive Secret Sharing](https://www.youtube.com/watch?v=TBgxlXHzxxc) — NPTEL - Indian Institute of Science, Bengaluru · 43:36 · 5y ago

### Oblivious RAM and access pattern hiding *(prerequisite)*
Oblivious RAM (ORAM) is a technique to hide access patterns to memory, preventing adversaries from learning information by observing which data is accessed. Access pattern hiding is crucial for privacy because even encrypted data can leak sensitive information through access patterns. Understanding ORAM helps appreciate how S EA S EARCH prevents leakage from access patterns during query execution.

*How the paper uses it:* S EA S EARCH prevents access-pattern leakage, a key privacy challenge addressed by ORAM techniques.

▶ [Oblivious RAM (Part 1) - Gilad Asharov](https://www.youtube.com/watch?v=2Dhtzyr6KTM) — The BIU Research Center on Applied Cryptography and Cyber Security · 48:53 · 4y ago

### Secret-sharing based secure query processing
Secret-sharing based secure query processing enables executing queries on data split into secret shares, ensuring that no single server learns the data or query details. This approach prevents leakage from access patterns and query result sizes, enabling privacy-preserving data outsourcing. Learning this concept ties together the cryptographic primitives and privacy goals realized in S EA S EARCH.

*How the paper uses it:* S EA S EARCH builds on secret-sharing based query processing to provide strong privacy guarantees without server communication during queries.

▶ [noc20 cs02 lec56 Secret Sharing](https://www.youtube.com/watch?v=Rsn8HjNiQpA) — NPTEL - Indian Institute of Science, Bengaluru · 36:05 · 6y ago

## Already in your library

- [Secret Sharing Explained Visually](https://www.youtube.com/watch?v=iFY5SyY3IMQ) — also for: Disincentivize Collusion in Verifiable Secret Sharing (Hemanta K. Maji)
- [Lec 11 Shamir Secret-Sharing](https://www.youtube.com/watch?v=EwazKH7X0FI) — also for: Time-lock puzzles and timed-release Crypto (Ron Rivest)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the S EA S EARCH system for secure and efficient selection queries on secret-shared data. The beginner project recreates a core fingerprint-based search mechanism on a small scale using familiar tools. The intermediate project implements the paper's core secret-sharing search and retrieval methods on a modest dataset, comparing performance to a simple baseline. The advanced project extends the system by addressing one of the paper's stated limitations, such as reducing the number of servers or exploring query type hiding, to show deeper engagement with the research challenges.

### Beginner — Fingerprint-Based Search over Additive Secret Shares
*Effort: a weekend, ~8 hours*

You build a simplified prototype of the fingerprint-based search algorithm described in the paper, operating on a small synthetic dataset of secret-shared strings. The project implements additive secret sharing and a basic fingerprint function to enable secure string matching without server communication.

**Why it shows you understood the paper:** This project shows you understand the core mechanism that prevents access-pattern and volume leakage during search, a key contribution of the paper, by faithfully reproducing the fingerprint-based search approach on additive shares.

**Grounded in:** Development of a fingerprint-based search algorithm over additive secret shares that prevents access-pattern and volume leakage without server communication.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy

**Data:** Synthetic dataset of 100 secret-shared string records generated locally to simulate the paper's secret-shared data model.

**Build it:**

1. Implement additive secret sharing for string data with two shares per value.
2. Design and implement a simple fingerprint function for strings as described in the paper.
3. Implement the fingerprint-based search algorithm to match query strings against additive shares without communication.
4. Test the search on the synthetic dataset and verify correctness and false positive rate.
5. Document the implementation and explain how access-pattern and volume leakage are prevented.

**Ships as:** A Jupyter Notebook demonstrating the fingerprint-based search on additive shares with explanations and test results.

**Stretch goal:** Add support for conjunctive search queries combining multiple fingerprint matches.

### Intermediate — Reimplementation of S EA S EARCH Core Query Processing
*Effort: 2 weekends, ~20 hours*

You implement the core secret-sharing based selection query processing pipeline from the paper, including additive and multiplicative shares, fingerprint-based search, and one oblivious row retrieval method. You evaluate query execution time and false positive rates on a public tabular dataset adapted to secret-sharing.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main methods and reproduce key performance metrics, showing comprehension of the combined secret-sharing schemes and fingerprinting techniques that enable secure, efficient queries.

**Grounded in:** Implementation and evaluation on AWS demonstrating practical performance on large datasets with query times significantly faster than prior systems.

**Tech stack:** Python 3.11, NumPy, Pandas, Matplotlib

**Data:** A public tabular dataset such as the UCI Adult dataset, converted to a secret-shared format for experimentation.

**Build it:**

1. Convert the chosen public dataset into additive and multiplicative secret shares as per the paper's scheme.
2. Implement the fingerprint-based search algorithm over additive shares.
3. Implement one oblivious row retrieval method (e.g., multiplicative shares based) to fetch query results securely.
4. Run selection queries with conjunctive and disjunctive conditions and measure execution time and false positive rates.
5. Compare performance against a naive baseline that returns entire datasets without secret-sharing.
6. Document the implementation, evaluation results, and discuss how access-pattern and volume leakage are prevented.

**Ships as:** A Python project with scripts and a report showing query performance and security properties on a public dataset.

**Stretch goal:** Add support for range queries and evaluate their performance and security.

### Advanced — Reducing Server Assumptions in S EA S EARCH for Collusion Resistance
*Effort: 3+ weeks*

You extend the S EA S EARCH approach by designing and prototyping a variant that reduces the number of non-colluding servers required or mitigates risks if some servers collude. This involves modifying the secret-sharing scheme or query protocols to maintain security and efficiency under relaxed assumptions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep engagement with the system's security model and practical deployment challenges, and applying your engineering skills to innovate on the protocol.

**Grounded in:** Assumes non-colluding servers; security depends on the assumption that servers do not collude. Future direction: reducing the number of servers or relaxing the non-collusion assumption.

**Tech stack:** Python 3.11, NumPy, SimPy (for protocol simulation), Matplotlib

**Data:** Synthetic secret-shared datasets generated to simulate query workloads and server interactions.

**Build it:**

1. Study the paper's secret-sharing schemes and security assumptions regarding non-colluding servers.
2. Design a modified secret-sharing or query protocol that tolerates some server collusion or reduces the number of servers.
3. Implement a simulation of the modified protocol including query execution and row retrieval.
4. Evaluate the security properties and performance trade-offs compared to the original S EA S EARCH.
5. Document the design decisions, implementation details, evaluation results, and security analysis.

**Ships as:** A research prototype with simulation code and a detailed report discussing the extension and its implications.

**Stretch goal:** Explore hiding query types (conjunctive, disjunctive, range) to strengthen privacy guarantees in the modified protocol.

_No authors' code or datasets were released for this paper; all implementations must be based on the paper's descriptions and publicly available datasets adapted as needed._
