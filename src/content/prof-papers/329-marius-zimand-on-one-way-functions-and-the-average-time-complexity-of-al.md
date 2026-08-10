---
title: "329 · On one-way functions and the average time complexity of almost-optimal compression — Marius Zimand"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marius-zimand"
source_hash: "113bf85881a49bf82c383db0be62f948bd4de39e8acda1706091237867587504"
sequence: 329
generator: "outreach-garden: managed"
---

# 329 · On one-way functions and the average time complexity of almost-optimal compression

## At a glance

- **Professor:** Marius Zimand
- **Institution:** Towson University
- **Paper:** [On one-way functions and the average time complexity of almost-optimal compression](https://arxiv.org/abs/2412.03392)
- **Authors:** Marius Zimand
- **Year:** 2025

## Paper overview

This paper establishes an equivalence between the existence of one-way functions, which are fundamental in cryptography, and the average-case hardness of almost-optimal compression relative to some efficiently samplable distribution. It shows that if one-way functions exist, then compressing strings almost optimally is hard on average, and conversely, if such compression is hard, then one-way functions exist.

### Why it matters

**Research problem:** The paper investigates the relationship between the existence of one-way functions (OWFs) and the average-case complexity of almost-optimal compression with respect to polynomial-time samplable distributions.

**Why it matters:** One-way functions are central to cryptography and complexity theory. Understanding their existence through the lens of compression hardness connects cryptographic assumptions to meta-complexity and randomness extraction, deepening theoretical foundations and potentially impacting cryptographic constructions.

**Key contributions:**

- Proves that the existence of one-way functions is equivalent to the average-case hardness of almost-optimal compression relative to some polynomial-time samplable distribution.
- Provides a proof that does not directly invoke prior work but closely follows their methods, strengthening the understanding of the connection between OWFs and compression hardness.
- Uses known results on pseudorandom generators and Kolmogorov complexity to establish the equivalence.
- Introduces a probabilistic polynomial-time compressor that achieves almost optimal compression given a good approximation of Kolmogorov complexity.

## About the professor

**Marius Zimand** — Professor, Computer and Information Sciences, Towson University.

Research interests: computational complexity, algorithmic information theory, cryptography

### Research links

- [Faculty/profile page](https://www.towson.edu/fcsm/departments/computerinfosci/facultystaff/mzimand.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Complexity Theory
**The paper assumes:** computational complexity theory, one-way functions, average-case complexity, polynomial-time algorithms, Kolmogorov complexity basics
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computational complexity theory and cryptographic primitives.

This background focuses on computational complexity theory, which is essential for understanding the equivalence between one-way functions and the average-case hardness of almost-optimal compression discussed in the paper. The rigorous course provides a deep and structured foundation in complexity theory, while the fast track offers a concise, intuition-driven introduction to the core concepts, suitable for quickly grasping the essentials before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos · 32.3h across 25 episodes

**Watch only this:** Lectures 8 (Undecidability), 9 (Reducibility), 12 (Time Complexity), 14 (P and NP, SAT, Poly-Time Reducibility), 15 (NP-Completeness), 16 (Cook-Levin Theorem), 23 (Probabilistic Computation, BPP), and 24 (Probabilistic Computation cont.), about 10.3 hours total — these cover the key complexity concepts relevant to one-way functions and average-case hardness.

*Why it unblocks this paper:* MIT 18.404J Theory of Computation is a comprehensive university-level course covering foundational topics in computational complexity theory, including undecidability, reducibility, NP-completeness, and probabilistic computation, all of which underpin the paper's theoretical framework.

*If you want all of it:* 32.3 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Complexity Lectures](https://www.youtube.com/playlist?list=PLdUzuimxVcC0DENcdT8mfhI3iRRJLVjqH) — Computer Science Theory Explained · 90 videos · 7.9h across the first 60 episodes

**Watch only this:** Episodes 1 (Complexity Theory - Introduction) through 23 (Probabilistic Computation, BPP), about 3 hours total — this subset covers the essential concepts of complexity classes, reductions, and probabilistic computation relevant to the paper.

*Why it unblocks this paper:* The Computational Complexity Lectures series by Computer Science Theory Explained offers clear, concise explanations of fundamental complexity theory concepts such as Turing machines, reductions, NP-completeness, and the halting problem, providing a quick but solid introduction to the theoretical background needed for this paper.

*If you want all of it:* 7.9 hours across the first 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's equivalence between one-way functions and average-case hardness of almost-optimal compression, start by grounding yourself in the foundational concepts of one-way functions, Kolmogorov complexity, pseudorandom generators, and average-case complexity. These prerequisites build the cryptographic and complexity-theoretic framework necessary to grasp the paper's results. Finally, focus on the paper's core concept and the author's own talk to see the direct application and synthesis of these ideas in the new equivalence result.

### One-way functions *(prerequisite)*
One-way functions are fundamental cryptographic primitives whose existence is central to the paper's main equivalence. Understanding their formal definition, properties, and role in cryptography is essential to appreciate how compression hardness relates to cryptographic assumptions.

*How the paper uses it:* The paper proves the existence of one-way functions is equivalent to the average-case hardness of almost-optimal compression.

▶ [Winter School: One-way functions and hard-core predicates ...](https://www.youtube.com/watch?v=qzlQLOtUF7E) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:09:54

### Kolmogorov complexity *(prerequisite)*
Kolmogorov complexity measures the algorithmic randomness and compressibility of strings, forming the theoretical backbone for analyzing compression hardness in the paper. A rigorous understanding of this concept is necessary to follow the paper's use of prefix-free Kolmogorov complexity and its approximations.

*How the paper uses it:* The paper uses Kolmogorov complexity to characterize compression hardness and to construct probabilistic compressors.

▶ [Probabilistic Kolmogorov Complexity](https://www.youtube.com/watch?v=dyK54IRTFXc) — Simons Institute for the Theory of Computing · Streamed 3 years ago

### Pseudorandom generators *(prerequisite)*
Pseudorandom generators connect cryptographic security to complexity theory and are used in the paper to argue that an efficient compressor would break pseudorandom generator security, thus linking compression hardness to one-way functions.

*How the paper uses it:* The paper leverages known results on pseudorandom generators to establish the equivalence between OWFs and compression hardness.

▶ [Pseudorandomness: From Quantum States to Binary Strings](https://www.youtube.com/watch?v=N0d86Asq7fU) — Simons Institute for the Theory of Computing · 41:58

### Average-case complexity *(prerequisite)*
The equivalence in the paper is established under average-case hardness assumptions relative to polynomial-time samplable distributions. Understanding average-case complexity theory is crucial to grasp the nature of the hardness results and their implications.

*How the paper uses it:* The paper's main theorem characterizes hardness of almost-optimal compression on average with respect to some polynomial-time samplable distribution.

▶ [Average-Case Complexity through the Lens of Interactive ...](https://www.youtube.com/watch?v=GDyq86FQ7sI) — Simons Institute for the Theory of Computing · 1:00:09

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper, start by learning about one-way functions, the fundamental cryptographic primitives whose existence the paper characterizes. Next, grasp Kolmogorov complexity, the measure of algorithmic randomness and compression central to the paper's approach. Then, study pseudorandom generators, which link cryptographic security and compression hardness. After that, explore average-case complexity to understand the hardness notion used. Finally, learn about almost-optimal compression algorithms, the core concept connecting compression difficulty to one-way functions in the paper.

### One-way functions *(prerequisite)*
One-way functions are mathematical functions that are easy to compute but hard to invert. They form the backbone of modern cryptography, enabling secure communication and encryption. Understanding their definition and significance is essential to grasp the paper's main equivalence result.

*How the paper uses it:* The paper proves that the existence of one-way functions is equivalent to the average-case hardness of almost-optimal compression.

▶ [Winter School: One-way functions and hard-core predicates ...](https://www.youtube.com/watch?v=qzlQLOtUF7E) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:09:54

### Kolmogorov complexity *(prerequisite)*
Kolmogorov complexity measures the shortest description length of a string, capturing its algorithmic randomness and compressibility. It provides a theoretical foundation for understanding data compression and randomness extraction, which are key themes in the paper.

*How the paper uses it:* The paper uses Kolmogorov complexity to relate compression hardness to cryptographic assumptions.

▶ [Kolmogorov Complexity](https://www.youtube.com/watch?v=UGN9D0n4AJA) — Computable Secrets · 23:20

### Pseudorandom generators *(prerequisite)*
Pseudorandom generators produce sequences that appear random to efficient algorithms, despite being generated deterministically. They are crucial in cryptography and are used in the paper to connect compression hardness with the security of one-way functions.

*How the paper uses it:* The paper shows that an efficient compressor would break pseudorandom generator security, implying no one-way functions exist.

▶ [Pseudorandomness: From Quantum States to Binary Strings](https://www.youtube.com/watch?v=N0d86Asq7fU) — Simons Institute for the Theory of Computing · 41:58

### Average-case complexity *(prerequisite)*
Average-case complexity studies the difficulty of computational problems on typical inputs drawn from a distribution, rather than worst-case inputs. This perspective is central to the paper's equivalence, which is framed in terms of average-case hardness of compression.

*How the paper uses it:* The equivalence between one-way functions and compression hardness is established under average-case complexity assumptions.

▶ [Average-Case Complexity Theory](https://www.youtube.com/watch?v=6SLX_dkKIxc) — Simons Institute for the Theory of Computing · 59:41

## Already in your library

- [Pseudorandom Generators I](https://www.youtube.com/watch?v=WT_vXeuk8yk) — also for: Optimal Pseudorandom Generators for Low-Degree Polynomials Over Moderately Large Fields (Zeyu Guo)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the equivalence between one-way functions and the average-case hardness of almost-optimal compression as established in the paper. The beginner project focuses on implementing a simple probabilistic compressor inspired by the paper's Theorem 3, using the applicant's existing Python skills. The intermediate project involves reimplementing the core equivalence proof idea by simulating polynomial-time samplable distributions and testing compression hardness against a baseline, requiring new skills in complexity simulation and probabilistic algorithms. The advanced project extends the paper's limitation by exploring time-bounded Kolmogorov complexity approximations and their impact on compression hardness and cryptographic assumptions, potentially opening a research conversation with the professor.

### Beginner — Probabilistic Compressor for Simple Strings
*Effort: a weekend, ~8 hours*

You build a probabilistic polynomial-time compressor that attempts to compress strings nearly optimally given an approximation of their Kolmogorov complexity. Using Python, you implement a simplified version of the compressor described in Theorem 3, applying it to short strings sampled from a uniform distribution.

**Why it shows you understood the paper:** This project shows you understand the constructive side of the paper: how a good approximation of Kolmogorov complexity enables almost-optimal compression in probabilistic polynomial time, a key component linking compression hardness to one-way functions.

**Grounded in:** Theorem 3 ([BZ23]). There exists a probabilistic polynomial-time algorithm Compress that ... if m ≥ K(x) then ProbCompress [z is a program for x] ≥ 1 − ǫ.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic short binary strings sampled uniformly at random, simulating simple polynomial-time samplable distributions.

**Build it:**

1. Implement a function to approximate Kolmogorov complexity for short binary strings using simple heuristics (e.g., length minus compressibility via gzip).
2. Implement a probabilistic compressor that, given a string and an approximation m of its Kolmogorov complexity, attempts to produce a compressed program for the string with probability ≥ 1 - epsilon.
3. Generate a dataset of short binary strings sampled uniformly at random.
4. Run the compressor on the dataset and measure compression ratios and success probabilities.
5. Document the implementation, results, and how this relates to Theorem 3.

**Ships as:** A GitHub repository with Python code implementing the probabilistic compressor, a Jupyter notebook demonstrating compression on sample strings, and a README explaining the connection to the paper's Theorem 3.

**Stretch goal:** Add support for other simple polynomial-time samplable distributions (e.g., biased coin flips) and compare compression performance.

### Intermediate — Simulating Average-Case Hardness of Compression
*Effort: 2 weekends, ~20 hours*

You reimplement the core equivalence by simulating polynomial-time samplable distributions and testing the hardness of almost-optimal compression on average. You build a compressor and a baseline trivial compressor, then empirically compare their compression ratios on strings sampled from these distributions, illustrating the average-case hardness concept.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main equivalence (Theorem 1) by operationalizing the average-case hardness of compression relative to samplable distributions and connecting it to one-way function existence through empirical evidence.

**Grounded in:** Theorem 1 (Informal statement). The following two assertions are equivalent: 1. There exists a one-way function. 2. Almost optimal compression is hard on average with respect to some polynomial-time samplable distribution.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy

**Data:** Synthetic datasets generated by polynomial-time samplable distributions you implement, such as biased coin flips or simple Markov chains, as substitutes for the paper's distributions.

**Build it:**

1. Implement several polynomial-time samplable distributions to generate binary strings (e.g., biased coin, simple Markov chain).
2. Implement a baseline compressor (e.g., gzip) and a probabilistic compressor inspired by the paper's method.
3. Sample large datasets from each distribution and compress them using both compressors.
4. Measure and compare average compression ratios and runtimes to illustrate compression hardness on average.
5. Write a report linking these empirical results to the equivalence between one-way functions and compression hardness.

**Ships as:** A GitHub repository with code for samplable distributions, compressors, empirical evaluation scripts, and a detailed README explaining the results and their relation to Theorem 1.

**Stretch goal:** Incorporate a simple pseudorandom generator to generate samples and test if the compressor breaks its security, illustrating the contrapositive argument.

### Advanced — Exploring Time-Bounded Kolmogorov Complexity and Compression Hardness
*Effort: 3+ weeks*

You extend the paper by investigating the equivalence between one-way functions and compression hardness under time-bounded Kolmogorov complexity measures, addressing one of the paper's future directions. You implement approximations of time-bounded Kolmogorov complexity, design compressors based on these approximations, and analyze their hardness relative to cryptographic assumptions.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions by attempting to generalize the equivalence to a more practical complexity measure, potentially contributing new insights to the theory and sparking discussion with the professor.

**Grounded in:** Future directions: Explore extensions of the equivalence to other complexity measures such as time-bounded Kolmogorov complexity or different randomness measures.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, C++ (optional for performance)

**Data:** Synthetic binary strings generated by polynomial-time samplable distributions; optionally pseudorandom generator outputs for hardness testing.

**Build it:**

1. Research and implement a practical approximation of time-bounded Kolmogorov complexity for binary strings.
2. Design and implement a probabilistic compressor that uses this approximation to compress strings.
3. Generate datasets from polynomial-time samplable distributions and pseudorandom generators.
4. Evaluate compression performance and hardness, comparing to baseline compressors and analyzing implications for one-way function existence.
5. Document findings, challenges, and potential theoretical implications in a comprehensive report.

**Ships as:** A GitHub repository with implementations, evaluation scripts, and a detailed technical report discussing the extension of the paper's equivalence to time-bounded complexity.

**Stretch goal:** Explore the impact of varying additive overheads in compression hardness on the equivalence, as suggested by the paper's limitations.
