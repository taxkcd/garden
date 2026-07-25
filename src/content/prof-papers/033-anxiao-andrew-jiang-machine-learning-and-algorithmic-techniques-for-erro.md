---
title: "033 · Machine Learning and Algorithmic Techniques for Error Correction — Anxiao Andrew Jiang"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ajiang"
source_hash: "5f6d6bf8fcb8e3c5df8d4d8506267acd5599993beba9feab0e1852a742be56e8"
sequence: 33
generator: "outreach-garden: managed"
---

# 033 · Machine Learning and Algorithmic Techniques for Error Correction

## At a glance

- **Professor:** Anxiao Andrew Jiang
- **Institution:** Texas A&M University
- **Paper:** [Machine Learning and Algorithmic Techniques for Error Correction](https://people.engr.tamu.edu/ajiang/Publications/2018/ITA_2018.pdf)
- **Authors:** Anxiao (Andrew) Jiang
- **Year:** undated (paper references works up to 2018, likely around 2018-2019)

## Paper overview

This paper studies how to improve error correction in data storage and communication by leveraging the natural redundancy inherent in data such as languages, images, and videos. It proposes a collaborative decoding model combining traditional error-correcting codes with decoders that exploit natural redundancy, analyzes the computational complexity of related problems, and presents approximation and exact algorithms for eliminating stopping sets in LDPC codes to enhance decoding performance.

### Why it matters

**Research problem:** How to effectively use natural redundancy (NR) in data to assist error-correcting codes (ECC) in correcting errors, specifically focusing on the stopping set elimination (SSE) problem in LDPC codes, which involves minimizing the number of erasures corrected by a costly NR-decoder to enable the ECC-decoder to successfully decode the remaining errors.

**Why it matters:** Data storage and communication systems face increasing challenges in ensuring long-term reliability due to exponential data growth and error rates. Utilizing natural redundancy in data can significantly enhance error correction beyond traditional ECC methods, improving data reliability and system performance. The SSE problem is fundamental to optimizing this collaborative decoding approach, but it is computationally hard, necessitating efficient algorithms.

**Key contributions:**

- Formulation of the stopping set elimination (SSE) problem for collaborative ECC and NR decoding.
- Proof that the SSE problem and its variant with iteration constraints (SSE1) are NP-hard.
- Development of an approximation algorithm for SSE1 with approximation ratio dv(dc - 1).
- Exact linear-time algorithms for SSE∞ and SSEk problems when the stopping graph is a tree.
- Extension of algorithms and analysis to p-cyclic stopping graphs with bounded cycles.

## About the professor

**Anxiao Andrew Jiang** — Professor of Computer Science and Engineering, Professor of Electrical and Computer Engineering (courtesy appointment), Computer Science and Engineering, Electrical and Computer Engineering, Texas A&M University.

Research interests: information theory and coding theory, data storage, machine learning, networks and algorithm design

### Research links

- [Faculty/profile page](http://faculty.cse.tamu.edu/ajiang)
- [Resolved homepage](https://people.engr.tamu.edu/ajiang/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on collaborative decoding using natural redundancy and LDPC codes, start with foundational knowledge on error-correcting codes and decoding strategies, followed by a focused study on LDPC codes, which are central to the paper's decoding framework. Next, explore approximation algorithms for NP-hard problems to grasp the computational complexity and algorithmic solutions presented. Then, study the core concept of stopping set elimination in LDPC codes, which is the key method for optimizing collaborative decoding. Finally, review the paper author's own talks or related advanced presentations to gain direct insights into the specific contributions and context of this research.

### Error-Correcting Codes and Decoding *(prerequisite)*
Understanding the basics of error-correcting codes, including syndrome decoding and decoding algorithms, is essential to grasp how traditional ECC works and how it integrates with natural redundancy decoding. This foundation supports comprehension of the collaborative decoding model proposed in the paper.

*How the paper uses it:* The paper builds on traditional ECC decoding methods as part of the collaborative decoding framework.

▶ [V3f: Syndrome decoding (Error-Correcting Codes)](https://www.youtube.com/watch?v=0G5Xu66FabA) — Cryptography 101 · 23:01

### Low-Density Parity-Check Codes *(prerequisite)*
LDPC codes are the fundamental error-correcting codes underlying the paper's decoding framework. A rigorous university lecture on LDPC decoding provides the necessary depth on their structure, decoding algorithms, and properties, which are crucial for understanding stopping sets and their elimination.

*How the paper uses it:* The paper focuses on stopping set elimination in LDPC codes to improve decoding performance.

▶ [Lecture 15: LDPC Decoding](https://www.youtube.com/watch?v=Ux2xnlxjvwE) — NPTEL-NOC IITM · 36:29

### Approximation Algorithms for NP-hard Problems *(prerequisite)*
The stopping set elimination problem is NP-hard, so understanding approximation algorithms and their theoretical foundations is critical. This lecture covers the complexity and approximation strategies relevant to the algorithms developed in the paper.

*How the paper uses it:* The paper develops approximation algorithms for the NP-hard stopping set elimination problem.

▶ [P, NP and Approximation Algorithms: Prof. Naveen Garg, IIT ...](https://www.youtube.com/watch?v=hhEx2zNFPAk) — Living Science · 41:04

### Stopping Set Elimination in LDPC Codes
Stopping set elimination is the core method proposed in the paper to optimize collaborative decoding by removing problematic stopping sets in LDPC codes. A detailed university lecture on graph-based codes and LDPC stopping sets provides the necessary technical depth to understand this concept.

*How the paper uses it:* The paper formulates and solves the stopping set elimination problem to enhance collaborative decoding.

▶ [Lecture "Channel Coding: Graph-based Codes", Chapter 3, Vid. 3, "LDPC Codes"](https://www.youtube.com/watch?v=pvUt3QNk9B8) — Communications Engineering Lab - KIT · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of error-correcting codes (ECC) and decoding strategies to grasp how data errors are detected and corrected. Then, learn about Low-Density Parity-Check (LDPC) codes, which are the fundamental ECC type used in the paper. Next, explore the concept of natural redundancy in data, which the paper leverages to improve decoding beyond traditional ECC. After that, study approximation algorithms for NP-hard problems to appreciate the computational challenges and solutions presented. Finally, focus on the core method of stopping set elimination in LDPC codes, which is central to the paper's collaborative decoding approach.

### Error-Correcting Codes and Decoding *(prerequisite)*
Learn the fundamental ideas behind error-correcting codes, including how errors in data transmission or storage are detected and corrected using mathematical codes. Understanding decoding strategies helps to see how these codes recover the original data from corrupted versions.

*How the paper uses it:* The paper builds on traditional ECC decoding methods as part of the collaborative decoding model.

▶ [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — 3Blue1Brown · 20:05

### Low-Density Parity-Check Codes *(prerequisite)*
LDPC codes are a powerful class of error-correcting codes characterized by sparse parity-check matrices, enabling efficient decoding algorithms. Understanding LDPC codes is essential because the paper focuses on improving their decoding performance by eliminating stopping sets.

*How the paper uses it:* The paper studies stopping set elimination specifically in LDPC codes to enhance decoding.

▶ [LDPC CODES INTRODUCTION AND ITS PROPERTIES](https://www.youtube.com/watch?v=5Mif1l8C7Q4) — K MURTHYRAJU · 16:33

### Natural Redundancy in Data *(prerequisite)*
Natural redundancy refers to the inherent patterns and structures in data like language, images, or videos that can be exploited to detect and correct errors beyond what ECC alone can achieve. Recognizing this concept helps understand how additional decoding power is gained by leveraging data properties.

*How the paper uses it:* The paper proposes a collaborative decoding model that combines ECC with decoders exploiting natural redundancy.

▶ [Block Coding | Data Communication | Lecture 54 | Urdu | Hindi](https://www.youtube.com/watch?v=t2uGGzgtGN4) — VU Masters · 11:22

### Approximation Algorithms for NP-hard Problems *(prerequisite)*
Approximation algorithms provide efficient ways to find near-optimal solutions to computationally hard problems where exact solutions are infeasible. Learning about these algorithms clarifies how the paper tackles the NP-hard stopping set elimination problem with provable performance guarantees.

*How the paper uses it:* The paper develops approximation algorithms for the NP-hard stopping set elimination problem.

▶ [P, NP and Approximation Algorithms: Prof. Naveen Garg, IIT ...](https://www.youtube.com/watch?v=hhEx2zNFPAk) — Living Science · 41:04

### Stopping Set Elimination in LDPC Codes
Stopping sets are problematic structures in LDPC code graphs that prevent successful decoding. Eliminating these sets improves decoding performance. Understanding this concept is key to grasping the paper’s main contribution in collaborative decoding.

*How the paper uses it:* The paper formulates and solves the stopping set elimination problem to optimize collaborative decoding.

▶ [Lecture "Channel Coding: Graph-based Codes", Chapter 3, Vid. 3, "LDPC Codes"](https://www.youtube.com/watch?v=pvUt3QNk9B8) — Communications Engineering Lab - KIT · 3 years ago

## Already in your library

- [Lecture 13: LDPC Codes](https://www.youtube.com/watch?v=tB36bi8J0MA) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)
