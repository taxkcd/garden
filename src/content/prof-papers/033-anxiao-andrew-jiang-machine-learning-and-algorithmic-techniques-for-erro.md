---
title: "033 · Machine Learning and Algorithmic Techniques for Error Correction — Anxiao Andrew Jiang"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ajiang"
source_hash: "9f8a435c0c1cf280589bfc99119980115d03e639284e7a8692e33ad37769adaf"
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

To thoroughly understand the paper on collaborative decoding using natural redundancy and stopping set elimination in LDPC codes, start with foundational knowledge on LDPC codes and Tanner graphs, followed by the computational complexity and approximation algorithms relevant to the NP-hard SSE problem. Then, build understanding of error-correcting code decoding theory and natural redundancy concepts. Finally, focus on the paper's core topic by watching the author's own talk or the closest related advanced research talk on stopping set elimination and collaborative decoding.

## Recommended videos (in order)

### LDPC codes and Tanner graphs *(prerequisite)*
LDPC codes and their Tanner graph representations form the fundamental structure underlying stopping sets and decoding algorithms studied in the paper. A solid grasp of these codes is essential to understand the stopping set elimination problem and the collaborative decoding model.

*How the paper uses it:* Stopping sets and Tanner graphs are central to the SSE problem formulation and algorithm design in the paper.

▶ [Lecture 13: LDPC Codes](https://www.youtube.com/watch?v=tB36bi8J0MA) — NPTEL-NOC IITM · 32:05

### NP-hardness and approximation algorithms *(prerequisite)*
The paper proves the SSE problem is NP-hard and develops approximation algorithms with provable guarantees. Understanding NP-hardness, reductions, and approximation algorithm design is crucial to appreciate the computational challenges and solutions presented.

*How the paper uses it:* The SSE problem's NP-hardness and the approximation algorithms with specific ratios are key theoretical contributions of the paper.

▶ [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — MIT OpenCourseWare · 1:21:08

### Error correcting codes decoding theory *(prerequisite)*
Knowledge of error-correcting code decoding models, including iterative decoding of LDPC codes, provides the necessary background to understand how ECC and NR decoders collaborate in the proposed system.

*How the paper uses it:* The collaborative decoding model combines ECC-decoder and NR-decoder to enhance error correction beyond traditional methods.

▶ [Fault Tolerance with LDPC Codes | Quantum Colloquium](https://www.youtube.com/watch?v=PD4h6ZIV2gY) — Simons Institute for the Theory of Computing · 1:05:20

### Natural redundancy in data decoding *(prerequisite)*
Natural redundancy in data such as language and images is exploited by the NR-decoder to assist ECC decoding. Understanding this concept is important to grasp the motivation and mechanism of the collaborative decoding approach.

*How the paper uses it:* The paper leverages natural redundancy to improve error correction performance beyond ECC alone.

▶ [Lecture 04 - Error and Noise](https://www.youtube.com/watch?v=L_0efNkdGMc) — caltech · 1:18:22 · 14 years ago
