---
title: "119 · Verifying the Correctness of Analytic Query Results — Ying Cai"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ying-cai"
source_hash: "ecd02ee340df810f82064ebd98f0bca4bfc73ce9005ea4091152e7b7d8bd51f3"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the IFMH-tree verification framework from the paper "Verifying the Correctness of Analytic Query Results." Starting with a small-scale implementation of Merkle hash trees for query verification, you then reimplement the core IFMH-tree method on a synthetic dataset to compare verification costs, and finally extend the framework to explore verification of nonlinear utility functions, addressing a key limitation noted by the authors.

### Beginner — Merkle Tree Verification for Simple Range Queries
*Effort: a weekend, ~8 hours*

You build a basic Merkle hash tree over a small synthetic dataset and implement a verification mechanism for range queries. This includes constructing the tree, generating verification objects for query results, and verifying correctness on the client side.

**Why it shows you understood the paper:** This project shows you understand the fundamental cryptographic data structure (Merkle tree) that underpins the IFMH-tree and how verification objects enable soundness and completeness checks for query results.

**Grounded in:** Key contribution: The IFMH-tree integrates Merkle hash trees for efficient verification; key result: user verification time is improved due to fewer signature decryptions.

**Tech stack:** Python 3.11, Jupyter Notebook, hashlib

**Data:** Synthetic dataset of 100 records with numeric attributes generated in code to simulate a small database.

**Build it:**

1. Generate a synthetic dataset of 100 numeric records.
2. Implement a Merkle hash tree construction over the dataset sorted by a key attribute.
3. Implement a function to generate verification objects for range queries.
4. Implement client-side verification that reconstructs the Merkle root from the verification object and compares it to the signed root.
5. Test the verification with correct and tampered query results to demonstrate soundness and completeness.

**Ships as:** A GitHub repo with Python code and a README explaining Merkle tree construction, verification object generation, and verification process, including example runs.

**Stretch goal:** Add support for top-k queries verification using the Merkle tree structure.

### Intermediate — Reimplementing IFMH-tree Verification for Linear Ranking Queries
*Effort: 2 weekends, ~20 hours*

You reimplement the core IFMH-tree data structure and verification algorithms described in the paper for linear ranking functions on a synthetic dataset of up to 10,000 records. You compare verification costs and signature overhead against a naive signature mesh baseline.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's main method and quantitatively evaluate its efficiency gains, showing deep comprehension of the IFMH-tree construction, signature schemes, and verification algorithms.

**Grounded in:** Key contributions: generic IFMH-tree data structure and two signature schemes; key results: reduced signatures and logarithmic server query processing cost.

**Tech stack:** Python 3.11, NumPy, Jupyter Notebook, hashlib, matplotlib

**Data:** Synthetic dataset generated in code simulating up to 10,000 records with numeric attributes and linear ranking functions, as the paper uses no public dataset.

**Build it:**

1. Implement the Intersection-tree (I-tree) indexing of function intersections for linear ranking functions.
2. Implement the Merkle hash tree (MH-tree) for sorted function lists within subdomains.
3. Combine these into the IFMH-tree data structure with one-signature and multi-signature schemes.
4. Implement query processing to locate subdomains and construct verification objects.
5. Implement user-side verification reconstructing IFMH-tree parts and verifying signatures.
6. Compare signature counts, server query time, and user verification time against a naive signature mesh baseline.
7. Visualize and report results similar to the paper's performance evaluation.

**Ships as:** A GitHub repo with code, a Jupyter notebook demonstrating IFMH-tree construction, query verification, baseline comparison, and a detailed README explaining the implementation and results.

**Stretch goal:** Add support for range queries and top-k queries verification using the IFMH-tree.

### Advanced — Extending IFMH-tree Verification to Nonlinear Utility Functions
*Effort: 3-4 weeks*

You extend the IFMH-tree framework to support verification of analytic queries involving nonlinear utility functions, addressing a key limitation of the paper. This involves adapting the intersection-tree indexing and verification algorithms to handle nonlinear ranking functions and evaluating the impact on verification cost and scalability.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and contribute a genuine extension, demonstrating research potential and the ability to innovate on complex secure query verification methods.

**Grounded in:** Limitation: The approach is primarily evaluated on linear ranking functions; future direction: extending the framework to support more complex and nonlinear analytic queries.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook, hashlib, matplotlib

**Data:** Synthetic dataset generated in code with numeric attributes; nonlinear utility functions (e.g., quadratic or polynomial ranking) defined programmatically.

**Build it:**

1. Review the IFMH-tree construction and verification algorithms for linear functions.
2. Design an extension of the intersection-tree indexing to handle nonlinear utility functions (e.g., piecewise approximations or polynomial intersections).
3. Modify the IFMH-tree construction to incorporate nonlinear function indexing and Merkle hash tree integration.
4. Implement query processing and verification object construction for nonlinear ranking queries.
5. Implement user-side verification adapted to nonlinear function verification.
6. Evaluate verification cost, signature overhead, and scalability compared to the linear baseline.
7. Document challenges, trade-offs, and potential optimizations.

**Ships as:** A GitHub repo with code, notebooks demonstrating nonlinear IFMH-tree construction and verification, performance evaluation, and a comprehensive README discussing methodology, results, and future work.

**Stretch goal:** Explore hybrid signature schemes to optimize verification efficiency for nonlinear queries.
