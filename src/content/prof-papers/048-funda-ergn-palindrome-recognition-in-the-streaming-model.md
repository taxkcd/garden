---
title: "048 · Palindrome Recognition In The Streaming Model — Funda Ergün"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fergun"
source_hash: "64592d983c80d150b654109fcba4e08a26e038d88ca04076a361fda68c7ef6d0"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Palindrome Recognition In The Streaming Model," start by building foundational knowledge on streaming algorithms with sublinear space constraints and randomized fingerprinting techniques, as these underpin the paper's model and correctness guarantees. Then, review classical palindromic substring algorithms and compression techniques for overlapping palindromes to appreciate the algorithmic innovations. Finally, focus on the authors' own talks and presentations about their streaming palindrome recognition algorithms to get direct insights into their novel contributions and methods.

### streaming algorithms sublinear space *(prerequisite)*
Streaming algorithms with sublinear space are fundamental to the paper's model, where input arrives sequentially and memory is limited. Understanding these algorithms provides the necessary background on how large data can be processed efficiently with limited memory.

*How the paper uses it:* The paper designs streaming algorithms that operate in sublinear space to recognize palindromes in large input streams.

▶ [DIMACS Sublinear Workshop: Pitor Indyk - Streaming Algorithms for Set Cover](https://www.youtube.com/watch?v=_4mM1UGI9Dg) — Rutgers University · 10 years ago

### randomized algorithms fingerprinting *(prerequisite)*
Randomized fingerprinting, such as the Karp-Rabin algorithm, is a core technique used in the paper for substring comparisons and ensuring correctness with high probability. Familiarity with this technique is essential to understand the probabilistic guarantees of the proposed algorithms.

*How the paper uses it:* The paper employs Karp-Rabin fingerprinting to compare substrings efficiently in streaming with small failure probability.

▶ [9.2 Rabin-Karp String Matching Algorithm](https://www.youtube.com/watch?v=qQ8vS2btsxI) — Abdul Bari · 8 years ago

### palindromic substring algorithms *(prerequisite)*
Classical algorithms for finding palindromic substrings, including Manacher's algorithm, provide the baseline for palindrome detection without streaming constraints. Understanding these helps in appreciating the challenges and innovations when adapting palindrome recognition to streaming models.

*How the paper uses it:* The paper extends palindrome detection to streaming settings with space constraints, building on classical palindrome substring algorithms.

▶ [Longest Palindromic Substring Manacher's Algorithm](https://www.youtube.com/watch?v=V-sEwsca1ak) — Tushar Roy - Coding Made Simple · 10 years ago

### compression of overlapping palindromes *(prerequisite)*
The paper's space efficiency relies on compressing overlapping palindromes by exploiting their structural properties. Understanding compression techniques for runs of palindromes is key to grasping how the algorithms reduce memory usage.

*How the paper uses it:* The paper develops compression techniques for overlapping palindromes to achieve sublinear space usage.

▶ [Manacher Algorithm for Strings | Understanding, Proof and Implementation | Palindromes | VIvek Gupta](https://www.youtube.com/watch?v=ei7qghJEj4Y) — Vivek Gupta · 3 years ago

### paper authors talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed insights into their algorithms, design decisions, and theoretical guarantees. These presentations are invaluable for understanding the nuances and contributions of their streaming palindrome recognition work.

*How the paper uses it:* Direct presentations by the authors on their streaming palindrome recognition algorithms offer the clearest exposition of their research.

▶ [23:46](https://www.youtube.com/watch?v=n_kL8BkURVA) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational ideas needed to understand streaming palindrome recognition algorithms. Start with the streaming algorithms and sublinear space model to grasp the computational constraints, then learn about randomized fingerprinting techniques like Rabin-Karp that enable efficient substring comparisons. Next, build intuition on palindrome detection algorithms in general before exploring the paper's key innovation: compressing overlapping palindromes to save space. Finally, focus on approximate palindrome detection in streaming settings, which is the core contribution of the paper.

### streaming algorithms sublinear space *(prerequisite)*
Streaming algorithms process data sequentially with limited memory, often sublinear in input size, making them essential for big data scenarios. Understanding this model clarifies why the paper focuses on space-efficient palindrome detection.

*How the paper uses it:* The paper designs palindrome recognition algorithms that operate in the streaming model using sublinear space.

▶ [Streaming Algorithms: Handle Big Data with Limited Memory!](https://www.youtube.com/watch?v=-4wXOw25m5E) — CodeLucky · 1 year ago

### randomized algorithms fingerprinting *(prerequisite)*
Randomized fingerprinting, such as the Rabin-Karp algorithm, uses hash functions to quickly compare substrings with a small probability of error. This technique is crucial for efficient palindrome detection without storing the entire string.

*How the paper uses it:* The paper employs Karp-Rabin fingerprinting to compare substrings efficiently in streaming palindrome algorithms.

▶ [Rabin-Karp Algorithm Visually Explained](https://www.youtube.com/watch?v=yFHV7weZ_as) — ByteQuest · 2 years ago

### palindromic substring algorithms *(prerequisite)*
Before tackling streaming constraints, it's important to understand classical palindrome detection methods, including how to find the longest palindromic substring using dynamic programming or Manacher's algorithm.

*How the paper uses it:* The paper builds on classical palindrome detection but adapts it to streaming with limited memory.

▶ [Longest Palindromic Substring Manacher's Algorithm](https://www.youtube.com/watch?v=V-sEwsca1ak) — Tushar Roy - Coding Made Simple · 10 years ago

### compression of overlapping palindromes *(prerequisite)*
Overlapping palindromes exhibit structural patterns that can be compressed to save space. Understanding this compression is key to the paper's space-efficient algorithms.

*How the paper uses it:* The paper uses compression techniques exploiting runs of overlapping palindromes to reduce space usage.

▶ [Manacher Algorithm for Strings | Understanding, Proof and Implementation | Palindromes | VIvek Gupta](https://www.youtube.com/watch?v=ei7qghJEj4Y) — Vivek Gupta · 3 years ago

### approximate palindrome detection streaming
Approximate palindrome detection in streaming settings balances accuracy and memory constraints, using randomized algorithms to find palindromes with provable guarantees. This is the core innovation of the paper.

*How the paper uses it:* The paper presents ApproxSqrt and ApproxLog algorithms for approximate palindrome recognition in streaming with sublinear space.

▶ [001. Approximate On-line Palindrome Recognition, and Applications - Amihood Amir](https://www.youtube.com/watch?v=SGBy3mhSHTI) — Yandex for ML · 11 years ago

## Already in your library

- [DIMACS Sublinear Workshop: Funda Ergun - Palindrome Recognition In The Streaming Model](https://www.youtube.com/watch?v=7SgA6ZeaRUU) — also for: Palindrome Recognition In The Streaming Model (Funda Ergün)
- [Sublinear Algorithms, by Prof. Michael Kapralov](https://www.youtube.com/watch?v=4m9MJu1sZmM) — also for: Palindrome Recognition In The Streaming Model (Funda Ergün)
