---
title: "119 · Correction: Verifiable Authenticated Data Structure (V-ADS) for Analytic Queries — Ying Cai"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ying-cai"
source_hash: "9b188d7d120cb8d5d0ad63b3109d2661c377eb5050883bc9785ca53d9d92eab4"
sequence: 119
generator: "outreach-garden: managed"
---

# 119 · Correction: Verifiable Authenticated Data Structure (V-ADS) for Analytic Queries

## At a glance

- **Professor:** Ying Cai
- **Institution:** Iowa State University
- **Paper:** [Correction: Verifiable Authenticated Data Structure (V-ADS) for Analytic Queries](https://link.springer.com/content/pdf/10.1007/s00778-025-00962-4.pdf)
- **Authors:** Masoud Nosrati, Ying Cai
- **Year:** 2026

## Paper overview

This document is a correction notice for a previously published article on Verifiable Authenticated Data Structures (V-ADS) used to ensure the integrity and authenticity of analytic query results in databases. The correction specifically addresses an error in Table 2 of the original article.

### Why it matters

**Research problem:** Ensuring the correctness and authenticity of analytic query results in database systems using verifiable authenticated data structures.

**Why it matters:** In database management, especially for analytic queries, it is crucial to guarantee that query results are trustworthy and have not been tampered with, which is important for security and privacy.

**Key contributions:**

- Development of a V-ADS framework for analytic queries (from original article).
- Correction of an error in Table 2 to ensure accurate representation of data.

## About the professor

**Ying Cai** — Associate Professor, Department of Computer Science, Iowa State University.

Research interests: database management, security and privacy

### Research links

- [Faculty/profile page](http://www.cs.iastate.edu/~yingcai)
- [Resolved homepage](https://faculty.sites.iastate.edu/yingcai/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Verifiable Authenticated Data Structures (V-ADS) for analytic queries and its correction, start by building foundational knowledge on cryptographic accumulators and Merkle trees, which are essential building blocks for authenticated data structures. Then, explore verifiable query processing to grasp how query correctness and authenticity are ensured. Finally, focus on the core concept of verifiable authenticated data structures through advanced research talks, including the authors' own presentations, to directly connect with the paper's contributions.

### Cryptographic Accumulators *(prerequisite)*
Cryptographic accumulators are fundamental cryptographic primitives that enable compact representation and verification of set membership, which underpin many verifiable data structures. Understanding accumulators provides insight into how V-ADS can efficiently authenticate analytic query results.

*How the paper uses it:* Cryptographic accumulators form a foundational building block for constructing the verifiable authenticated data structures used in the paper.

▶ [Lattice-Based Accumulator and Application to Anonymous ...](https://www.youtube.com/watch?v=YLXVH30Ho1M) — Microsoft Research · 54:46

### Merkle Trees *(prerequisite)*
Merkle trees are a widely used authenticated data structure that enables efficient and secure verification of data integrity. They are a core technique underlying V-ADS frameworks for ensuring the authenticity of analytic query results.

*How the paper uses it:* Merkle trees are a common authenticated data structure technique underlying the V-ADS framework presented in the paper.

▶ [Merkle Trees Explained - How Databases Sync Billions of Keys](https://www.youtube.com/watch?v=KK5c0f7Gb6M) — Bankai Senpai · 8:24

### Verifiable Query Processing *(prerequisite)*
Verifiable query processing focuses on methods to ensure that query results returned by an untrusted server are correct and authentic. This concept is critical for understanding the security guarantees that V-ADS frameworks aim to provide for analytic queries.

*How the paper uses it:* The paper addresses ensuring correctness and authenticity of analytic query results, which is the core goal of verifiable query processing.

▶ [Verifiable Query Processing Over Outsourced Social Graph](https://www.youtube.com/watch?v=QbFiHOLHvQU) — XOOM PROJECTS · 2 years ago

### Verifiable Authenticated Data Structures
This concept covers the design and implementation of data structures that allow verification of data authenticity and integrity, even when operated on by untrusted parties. It is central to the paper's contribution of a V-ADS framework for analytic queries.

*How the paper uses it:* The paper's main contribution is the development and correction of a verifiable authenticated data structure framework for analytic queries.

▶ [Authenticated Data Structures for Stateless Validation and Transparency Logs - Alin Tomescu](https://www.youtube.com/watch?v=TuZiEb_SLx0) — UCL Information Security Research Group · 59:07 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundational data structures that enable verification in databases, beginning with Merkle Trees and Cryptographic Accumulators. Then, learn about Verifiable Query Processing to see how queries can be authenticated. Finally, focus on Verifiable Authenticated Data Structures (V-ADS), the core method used in the paper to ensure trustworthy analytic query results.

### Merkle Trees *(prerequisite)*
Merkle Trees are a cryptographic data structure that efficiently and securely verify data integrity by hashing data blocks in a tree structure. They are widely used in blockchain and database systems to detect tampering with data. Understanding Merkle Trees provides intuition on how data authenticity can be proven with minimal overhead.

*How the paper uses it:* The paper’s V-ADS framework relies on Merkle Trees as a fundamental technique for integrity verification of analytic query results.

▶ [Merkle Tree with real world examples](https://www.youtube.com/watch?v=qHMLy5JjbjQ) — Gaurav Sen · 7 years ago

### Cryptographic Accumulators *(prerequisite)*
Cryptographic accumulators are compact data structures that allow one to prove membership of an element in a set without revealing the entire set. They are essential for building efficient verifiable data structures by compressing data and enabling quick verification.

*How the paper uses it:* Accumulators underpin the construction of the V-ADS framework by enabling compact and verifiable representations of analytic query data.

▶ [Cryptographic Accumulator - VB20](https://www.youtube.com/watch?v=1oVWL4rP0O8) — Linfeng Zhou · 4 years ago

### Verifiable Query Processing *(prerequisite)*
Verifiable query processing ensures that the results returned by a database query are correct and have not been tampered with, even when processed by an untrusted server. This concept is crucial for secure analytic queries where trustworthiness of results is mandatory.

*How the paper uses it:* The paper addresses verifiable query processing by proposing a V-ADS framework that guarantees authenticity and correctness of analytic query results.

▶ [Verifiable Query Processing Over Outsourced Social Graph](https://www.youtube.com/watch?v=QbFiHOLHvQU) — XOOM PROJECTS · 2 years ago

### Verifiable Authenticated Data Structures
Verifiable Authenticated Data Structures (V-ADS) are specialized data structures that allow an untrusted party to prove the correctness of query results efficiently. They combine cryptographic techniques like Merkle Trees and accumulators to authenticate data and queries, ensuring security and privacy.

*How the paper uses it:* The core contribution of the paper is the development and correction of a V-ADS framework tailored for analytic queries in databases.

▶ [Authenticated Data Structures, Generically](https://www.youtube.com/watch?v=srbzojREi4I) — Microsoft Research · 9 years ago
