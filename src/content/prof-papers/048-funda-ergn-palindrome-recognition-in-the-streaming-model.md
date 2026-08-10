---
title: "048 · Palindrome Recognition In The Streaming Model — Funda Ergün"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fergun"
source_hash: "9a21c3533a378403d840664f407637711289ea81c06e1dade903ba59de5f87ec"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational knowledge required to understand the paper on palindrome recognition in the streaming model. It covers discrete mathematics basics for understanding strings and palindromes, algorithm design and analysis principles including randomized algorithms, string pattern matching techniques like Karp-Rabin fingerprinting, streaming algorithms with sublinear space constraints, and approximation algorithms with error bounds. Work through these stages in order to build a solid theoretical and practical background before reading the paper.

**The paper assumes:** discrete mathematics, string algorithms, randomized algorithms, streaming algorithms, sublinear space complexity, Karp-Rabin fingerprinting, approximation algorithms
**Time to work through:** roughly 40-50 hours if you watch all recommended lectures, about 20-25 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you already have a solid background in algorithms and discrete math; focus on stages 4-6 for streaming and randomized algorithm techniques.

### Stage 1 · Discrete Mathematics and String Basics *(foundational)*
Understanding strings, substrings, palindromes, and basic combinatorial properties of strings is essential since the paper deals with palindromic substrings and their structural properties.

▶ **Course:** [Discrete Math I (Entire Course)](https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz) — Kimberly Brehm · 80 videos · 13.4h across the first 60 episodes

*What to watch:* Watch the first 20 episodes of the 'Discrete Math I (Entire Course)' playlist by Kimberly Brehm, focusing on the introduction to sets, relations, and basic logic. These episodes cover the foundational discrete math concepts needed to understand string structures and palindromes.

*Move on when you can:* Explain what a palindrome is, identify palindromic substrings in a given string, and describe basic string operations like substring extraction and indexing.

### Stage 2 · Algorithm Design and Analysis *(foundational)*
The paper relies on algorithmic concepts such as time and space complexity, randomized algorithms, and approximation guarantees, which require a solid grasp of algorithm design principles.

▶ **Course:** [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

*What to watch:* Focus on the first 15 lectures of the 'MIT 6.006 Introduction to Algorithms, Spring 2020' playlist by MIT OpenCourseWare. These cover fundamental algorithmic concepts including complexity analysis, data structures, sorting, and searching, which are essential for understanding the algorithms in the paper.

*Move on when you can:* Analyze the time and space complexity of a given algorithm and explain the difference between deterministic and randomized algorithms.

### Stage 3 · String Pattern Matching Algorithms *(core)*
The paper builds on substring comparison techniques and pattern matching concepts, including fingerprinting methods like Karp-Rabin, which are fundamental to efficient palindrome detection.

▶ **Course:** [CS213.3x Algorithms](https://www.youtube.com/playlist?list=PL_uaeekrhGzLglTBo2pY9A_aXlnJdL6f4) — Studio IIT Bombay · 23 videos · 8.1h across 23 episodes

*What to watch:* Watch the 'CS213.3x S119 Rabin-Karp Algorithm' episode in the 'CS213.3x Algorithms' playlist by Studio IIT Bombay. This episode explains the Karp-Rabin fingerprinting algorithm in detail, which is directly used in the paper for substring comparisons.

*Move on when you can:* Implement the Karp-Rabin algorithm for substring search and explain how fingerprinting reduces comparison time.

### Stage 4 · Streaming Algorithms and Sublinear Space Computation *(core)*
The paper addresses palindrome recognition in the streaming model with sublinear memory constraints, so understanding streaming algorithm models and space limitations is critical.

▶ **Course:** [Sketching and Algorithm Design](https://www.youtube.com/playlist?list=PLgKuh-lKre10-e2TWPCB0JdacFEnHHS31) — Simons Institute for the Theory of Computing · 24 videos · 19.3h across 24 episodes

*What to watch:* Watch the first 5 videos of the 'Sketching and Algorithm Design' playlist by Simons Institute for the Theory of Computing. These cover the streaming model, sketching techniques, and sublinear space algorithms, providing the theoretical background for the paper's streaming algorithms.

*Move on when you can:* Describe the streaming model of computation and design a simple streaming algorithm that uses sublinear space.

### Stage 5 · Randomized Algorithms and Probabilistic Analysis *(core)*
The paper uses randomized fingerprinting and probabilistic guarantees for approximation, so knowledge of randomized algorithm techniques and error probability analysis is required.

▶ **Course:** [MIT 6.046J Design and Analysis of Algorithms, Spring 2015](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) — MIT OpenCourseWare · 34 videos · 39.5h across 34 episodes

*What to watch:* Watch the first 12 lectures of the 'MIT 6.046J Design and Analysis of Algorithms, Spring 2015' playlist by MIT OpenCourseWare, focusing on the lectures about randomization, universal hashing, and randomized select. These provide a solid foundation in randomized algorithms and their analysis.

*Move on when you can:* Explain the concept of randomized algorithms and analyze the probability of error in a randomized fingerprinting scheme.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the streaming palindrome recognition paper. The beginner project reproduces a core mechanism of the ApproxSqrt algorithm using your existing skills. The intermediate project implements the ApproxSqrt algorithm from the paper and compares it against a naive baseline on synthetic streaming data. The advanced project extends the ApproxLog algorithm to explore deterministic variants or applies the streaming palindrome detection to biological sequence data, addressing the paper's stated limitations and future directions.

### Beginner — Streaming Palindrome Length Estimator with Karp-Rabin Fingerprinting
*Effort: a weekend, ~8 hours*

You build a simple one-pass streaming palindrome length estimator using Karp-Rabin fingerprinting to approximate palindrome lengths with additive error on small synthetic strings. The implementation focuses on the core fingerprinting technique and sliding window substring comparisons in a streaming fashion.

**Why it shows you understood the paper:** This project shows you grasp the fundamental randomized fingerprinting approach used in ApproxSqrt and can implement a streaming algorithm that approximates palindrome lengths with sublinear space.

**Grounded in:** Theorem 1 (ApproxSqrt): one-pass randomized algorithm with additive error using O(√n) space and Karp-Rabin fingerprinting.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic strings generated on the fly to simulate streaming input; no external dataset needed.

**Build it:**

1. Implement Karp-Rabin fingerprinting for substring hashing.
2. Simulate a streaming input of a string character-by-character.
3. Use fingerprints to compare substrings around midpoints to estimate palindrome lengths with additive error.
4. Store and update fingerprints using O(√n) space heuristics.
5. Output estimated palindrome lengths for each midpoint in the stream.

**Ships as:** A Jupyter notebook demonstrating streaming palindrome length estimation with plots comparing estimated vs actual palindrome lengths on synthetic data.

**Stretch goal:** Add visualization of error bounds and experiment with different additive error parameters ε.

### Intermediate — Reimplementation of ApproxSqrt Streaming Palindrome Algorithm
*Effort: 1-3 weekends*

You reimplement the ApproxSqrt algorithm from the paper to detect palindromes with additive error in a streaming model using O(√n) space. You compare its performance and accuracy against a naive offline palindrome detection baseline on synthetic streaming strings.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper's core algorithm, understand its space/time tradeoffs, and evaluate its approximation guarantees in practice.

**Grounded in:** Theorem 1 (ApproxSqrt): reports palindrome lengths with additive error ε√n in one pass using O(√n/ε) space.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic streaming strings generated to include palindromes of varying lengths; no external dataset used.

**Build it:**

1. Implement the ApproxSqrt algorithm as described, including Karp-Rabin fingerprinting and compression of overlapping palindromes.
2. Implement a naive offline palindrome detection algorithm for baseline comparison.
3. Generate synthetic streaming strings with known palindromes.
4. Run both algorithms on the streaming input and record palindrome length estimates.
5. Compare accuracy, space usage, and runtime between ApproxSqrt and baseline.
6. Visualize results and error bounds.

**Ships as:** A GitHub repository with code, tests, and a detailed README reporting ApproxSqrt's approximation accuracy and space/time performance compared to baseline.

**Stretch goal:** Experiment with different ε values and analyze the trade-off between space and approximation error.

### Advanced — Deterministic Streaming Palindrome Detection or Biological Sequence Application
*Effort: a few weeks*

You extend the ApproxLog algorithm or design a deterministic variant to reduce randomness while maintaining sublinear space, or you adapt the ApproxSqrt or ApproxLog algorithms to detect complementary palindromes in real biological DNA sequences, evaluating practical performance.

**Why it shows you understood the paper:** This project tackles a key limitation or future direction from the paper, showing deep comprehension and initiative to push the research boundary or apply it to real-world biological data.

**Grounded in:** Limitations: randomized fingerprinting with failure probability; future directions: deterministic variants and biological data application; Observation 22: adaptation to complementary palindromes.

**Tech stack:** Python 3.11, Jupyter Notebook, Biopython, matplotlib

**Data:** Publicly available DNA sequences from NCBI GenBank or simulated DNA sequences; used as a proxy for biological data mentioned in the paper.

**Build it:**

1. Research deterministic fingerprinting or hashing alternatives suitable for streaming palindrome detection.
2. Implement a deterministic or low-randomness variant of ApproxLog or ApproxSqrt.
3. Alternatively, implement complementary palindrome detection adapting the algorithms to DNA base pairing rules.
4. Obtain biological DNA sequence data from public repositories or simulate sequences.
5. Run your algorithm on these sequences to detect palindromic or complementary palindromic substrings.
6. Evaluate accuracy, space usage, and runtime; compare with baseline methods if available.

**Ships as:** A GitHub repository with code, documentation, and experimental results demonstrating deterministic or biological palindrome detection in streaming with sublinear space.

**Stretch goal:** Integrate your implementation into a small web app or visualization tool to explore palindromic structures interactively.

_The paper authors released no code; all implementations must be reimplemented from the paper's descriptions. Biological data must be sourced from public repositories or simulated, as the paper does not provide datasets._
