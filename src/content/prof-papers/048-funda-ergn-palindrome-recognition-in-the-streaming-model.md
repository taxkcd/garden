---
title: "048 · Palindrome Recognition In The Streaming Model — Funda Ergün"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fergun"
source_hash: "9123c8b035a09ed6668784308472877796e89545aed58eaff7537fd266c2a94f"
sequence: 48
generator: "outreach-garden: managed"
---

# 048 · Palindrome Recognition In The Streaming Model

## At a glance

- **Professor:** Funda Ergün
- **Institution:** Indiana University
- **Paper:** [Palindrome Recognition In The Streaming Model](https://homes.luddy.indiana.edu/fergun/PUBLICATIONS/pal.pdf)
- **Authors:** Petra Berenbrink, Funda Ergün, Frederik Mallmann-Trenn, Erfan Sadeqi Azer
- **Year:** 2013

## Paper overview

This paper presents new algorithms to find palindromes and the longest palindromic substring in a string when the input is given as a stream and only sublinear memory is allowed. The authors develop randomized one-pass and two-pass algorithms with provable approximation guarantees and efficient space usage, including a novel logarithmic space algorithm with multiplicative error. The work also discusses applications to computational biology where palindromic structures are important.

### Why it matters

**Research problem:** How to recognize all palindromes and find the longest palindromic substring in a streaming model where the input arrives sequentially and the algorithm is restricted to use sublinear space.

**Why it matters:** Palindromes are fundamental structures in strings with applications in computational biology, such as identifying palindromic structures in proteins and nucleic acids. Efficient streaming algorithms enable processing large-scale data where storing the entire input is infeasible.

**Key contributions:**

- A one-pass randomized algorithm (ApproxSqrt) that reports all palindromes with additive error and uses O(√n) space.
- A two-pass algorithm (Exact) that finds exact locations and lengths of all longest palindromes using O(√n) space.
- A one-pass randomized algorithm (ApproxLog) that finds one of the longest palindromes with multiplicative error using O(log n) space.
- Compression techniques for storing overlapping palindromes efficiently in sublinear space.
- Extensions to recognize complementary palindromes relevant in computational biology.

## About the professor

**Funda Ergün** — Professor of Computer Science, School of Informatics and Computing, Indiana University.

Research interests: Big data algorithms, streaming algorithms, randomized algorithms, sublinear algorithms, applications to computational genomics and large networks.

### Research links

- [Faculty/profile page](https://homes.luddy.indiana.edu/fergun/)
- [Identity evidence](http://homes.soic.indiana.edu/fergun)
- [Google Scholar](https://scholar.google.com/citations?user=sVV6YxwAAAAJ&hl=en)

## Learning path

To deeply understand the paper "Palindrome Recognition In The Streaming Model," start by building foundational knowledge on streaming algorithms with sublinear space and randomized fingerprinting techniques, as these underpin the paper's algorithmic design. Next, explore data compression methods for repetitive string structures to grasp the space efficiency strategies used. Finally, focus on the core concept by watching the authors' own detailed presentation of their streaming palindrome recognition algorithms, which directly explains their novel contributions and results.

## Recommended videos (in order)

### Streaming algorithms with sublinear space *(prerequisite)*
This section covers the streaming model constraints and algorithmic principles for processing data with sublinear memory, crucial for understanding the environment in which the paper's algorithms operate. The selected lectures provide rigorous academic treatments of streaming algorithms and sketching techniques, foundational for grasping the challenges and approaches in the paper.

*How the paper uses it:* The paper designs streaming algorithms that operate under sublinear space constraints, making this foundational knowledge essential.

▶ [Sublinear Algorithms, by Prof. Michael Kapralov](https://www.youtube.com/watch?v=4m9MJu1sZmM) — EPFL School of Computer and Communication Sciences · 37:02

### Randomized fingerprinting algorithms *(prerequisite)*
Randomized fingerprinting is the core technique used in the paper for substring comparisons and palindrome detection within the streaming model. Understanding this method is critical to appreciate how the algorithms achieve efficient and probabilistically reliable palindrome recognition.

*How the paper uses it:* The paper employs Karp-Rabin fingerprinting to compare substrings efficiently in streaming, enabling space-efficient palindrome detection.

▶ [COMP526 Unit 4-5 2020-03-02 String Matching: Rabin-Karp](https://www.youtube.com/watch?v=GxsUb3ecZ6I) — Sebastian Wild (Lectures) · 14:44 · 6 years ago

### Data compression of repetitive string structures *(prerequisite)*
This section addresses compression techniques for repetitive patterns in strings, which the paper leverages to store overlapping palindromes compactly. Understanding these compression strategies helps in appreciating the space savings achieved by the authors' algorithms.

*How the paper uses it:* The paper introduces compression techniques exploiting structural properties of overlapping palindromes to reduce space usage.

▶ [String Compression problem - Lecture 32 | Leetcode 443](https://www.youtube.com/watch?v=cAB15h6-sWA) — Apna College · 19:29 · 1 year ago

### Authors' talk on streaming palindrome recognition *(the paper's own talk)*
This is the authors' own presentation of their work, providing direct insights into their algorithms, theoretical guarantees, and applications. Watching this talk offers the most precise and authoritative explanation of the paper's contributions and results.

*How the paper uses it:* This talk is given by co-author Funda Ergun and directly presents the algorithms and findings from the paper.

▶ [DIMACS Sublinear Workshop: Funda Ergun - Palindrome Recognition In The Streaming Model](https://www.youtube.com/watch?v=7SgA6ZeaRUU) — Rutgers University · 27:47 · 10 years ago
