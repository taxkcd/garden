---
title: "119 · Verifying the Correctness of Analytic Query Results — Ying Cai"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ying-cai"
source_hash: "7b75008ac1687a29d29d26e5609819c34889fc74d29cc6378a6381cf1c1e855a"
sequence: 119
generator: "outreach-garden: managed"
---

# 119 · Verifying the Correctness of Analytic Query Results

## At a glance

- **Professor:** Ying Cai
- **Institution:** Iowa State University
- **Paper:** [Verifying the Correctness of Analytic Query Results](https://arxiv.org/pdf/2011.11487)
- **Authors:** Masoud Nosrati, Ying Cai
- **Year:** 2020

## Paper overview

This paper addresses the challenge of ensuring that query results returned by cloud servers for analytic queries are correct, given that clouds may be untrusted or compromised. The authors propose a new data structure combining intersection trees and Merkle hash trees to efficiently verify the correctness of complex analytic queries such as top-k, range, and KNN queries. Their approach reduces computational overhead for data owners, servers, and users compared to previous methods.

### Why it matters

**Research problem:** How to enable users to verify the correctness (soundness and completeness) of results returned by untrusted cloud servers for analytic queries involving utility functions, where precomputing scores for data items is not feasible.

**Why it matters:** Data outsourcing to clouds is common for handling large data volumes and complex queries, but clouds may be malicious or hacked, risking incorrect query results. Verifying query results is critical for trust in cloud services, especially for sensitive applications like medical risk prediction and financial crime detection.

**Key contributions:**

- A generic verification data structure (IFMH-tree) combining I-tree and MH-tree concepts for analytic query result verification.
- Two signature schemes (one-signature and multi-signature) balancing verification cost and signature overhead.
- Efficient algorithms for building IFMH-tree, constructing verification objects, and verifying query results.
- Security analysis proving soundness and completeness guarantees under adversarial models.
- Comprehensive performance evaluation showing significant improvements over prior signature mesh approach in data owner, server, and user overhead.

## About the professor

**Ying Cai** — Associate Professor, Department of Computer Science, Iowa State University.

Research interests: database management, security and privacy

### Research links

- [Faculty/profile page](http://www.cs.iastate.edu/~yingcai)
- [Resolved homepage](https://faculty.sites.iastate.edu/yingcai/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on verifying the correctness of analytic query results, start by building foundational knowledge on the prerequisite concepts: Merkle hash trees, intersection trees, secure query verification, and analytic queries with utility functions. These provide the cryptographic, data structure, security, and query context necessary to grasp the novel IFMH-tree structure. Finally, focus on the core concept of the IFMH-tree verification structure itself to appreciate the paper's main contribution and methodology.

### Merkle hash trees *(prerequisite)*
Merkle hash trees are fundamental cryptographic data structures used for efficient and secure verification of data integrity. Understanding their construction and properties is essential since the IFMH-tree integrates Merkle hash trees for verification of analytic query results.

*How the paper uses it:* The IFMH-tree uses Merkle hash trees to ensure soundness and completeness of query results through cryptographic hashing and signatures.

▶ [3. Blockchain Basics & Cryptography](https://www.youtube.com/watch?v=0UvVOMZqpEA) — MIT OpenCourseWare · 6 years ago

### Intersection trees *(prerequisite)*
Intersection trees are advanced data structures used for indexing and querying multi-dimensional data efficiently. They form the indexing backbone of the IFMH-tree by organizing function intersections to facilitate quick subdomain searches.

*How the paper uses it:* The IFMH-tree combines intersection trees with Merkle hash trees to index function intersections for analytic query verification.

▶ [9. Augmentation: Range Trees](https://www.youtube.com/watch?v=xVka6z1hu-I) — MIT OpenCourseWare · 10 years ago

### Secure query verification *(prerequisite)*
Secure query verification techniques ensure that results returned from untrusted servers are correct and complete. This area provides the security context and adversarial model that the paper addresses with its novel verification data structure.

*How the paper uses it:* The paper proposes a secure verification framework guaranteeing soundness and completeness of analytic query results from untrusted cloud servers.

▶ [Verification and Secure Systems](https://www.youtube.com/watch?v=J9977DaNAlc) — Microsoft Research · 7 years ago

### Analytic queries with utility functions *(prerequisite)*
Understanding analytic queries involving utility functions, such as top-k, range, and KNN queries, is crucial to grasp the types of queries the paper targets. Utility functions rank or score data items, which complicates verification.

*How the paper uses it:* The paper focuses on verifying analytic queries that use utility functions for ranking, which cannot be precomputed easily.

▶ [1.5 Utility Functions](https://www.youtube.com/watch?v=rdBbPlyCtTY) — AP Microeconomics with MIT Professor Jon Gruber · 8 years ago

### IFMH-tree verification structure
The IFMH-tree is the paper's core novel data structure that integrates intersection trees and Merkle hash trees to enable efficient verification of analytic query results. Understanding this structure is key to appreciating the paper's contributions and performance improvements.

*How the paper uses it:* The IFMH-tree is the central contribution enabling efficient and secure verification of complex analytic queries in untrusted cloud environments.

▶ [Merkle Trees Optimized for Stateless Clients inBitcoin](https://www.youtube.com/watch?v=HEKtDILPeaI) — ifca · 18:40 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to verifying analytic query results from untrusted cloud servers, start by learning about the types of analytic queries and utility functions it targets. Then build foundational knowledge of data structures like intersection trees and Merkle hash trees, which underpin the proposed verification method. Finally, explore the context of secure query verification to see why these structures matter and how they fit into the paper's novel IFMH-tree design.

### Analytic queries with utility functions *(prerequisite)*
Analytic queries such as top-k, range, and k-nearest neighbors (KNN) rely on utility functions to rank or filter data items. Understanding utility functions helps grasp what kinds of queries the paper aims to verify and why precomputing scores is challenging.

*How the paper uses it:* The paper focuses on verifying results of analytic queries involving utility functions where precomputing scores is not feasible.

▶ [1.5 Utility Functions](https://www.youtube.com/watch?v=rdBbPlyCtTY) — AP Microeconomics with MIT Professor Jon Gruber · 8 years ago

### Intersection trees *(prerequisite)*
Intersection trees are a type of binary tree used to index and efficiently query intersections of function domains or subdomains. They help organize complex query spaces so that searching for relevant data is faster than scanning all records.

*How the paper uses it:* The IFMH-tree integrates intersection trees to index function intersections for efficient query verification.

▶ [6. Binary Trees, Part 1](https://www.youtube.com/watch?v=76dhtgZt38A) — MIT OpenCourseWare · 4 years ago

### Merkle hash trees *(prerequisite)*
Merkle hash trees are cryptographic data structures that enable efficient and secure verification of data integrity. They work by hashing data in a tree structure so that verifying any piece of data requires only a small proof, not the entire dataset.

*How the paper uses it:* The IFMH-tree uses Merkle hash trees to securely verify sorted function lists and ensure data integrity against tampering.

▶ [What is the merkle tree in Bitcoin?](https://www.youtube.com/watch?v=V6gLY-1G4Mc) — Keifer Kif · 9 years ago

### Secure query verification *(prerequisite)*
Secure query verification ensures that results returned from untrusted servers are both sound (correct) and complete (no missing data). It is critical when outsourcing data to cloud servers that may be compromised or malicious.

*How the paper uses it:* The paper's main goal is to enable users to verify correctness and completeness of analytic query results from untrusted cloud servers.

▶ [Achieving secure, universal, and fine-grained query results verification for secure search scheme](https://www.youtube.com/watch?v=u7UtLvd8x-U) — AMAZEBIT SOFTWARE · 8 years ago

## Already in your library

- [Merkle Tree with real world examples](https://www.youtube.com/watch?v=qHMLy5JjbjQ) — also for: Correction: Verifiable Authenticated Data Structure (V-ADS) for Analytic Queries (Ying Cai)
