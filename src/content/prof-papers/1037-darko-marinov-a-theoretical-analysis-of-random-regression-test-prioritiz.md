---
title: "1037 · A Theoretical Analysis of Random Regression Test Prioritization — Darko Marinov"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-darko-marinov"
source_hash: "1d1fbe4af4689eb14eea3eb08025374cdd3a5ed7876e3ccd74d0a0dcdf4553c6"
sequence: 1037
generator: "outreach-garden: managed"
---

# 1037 · A Theoretical Analysis of Random Regression Test Prioritization

## At a glance

- **Professor:** Darko Marinov
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [A Theoretical Analysis of Random Regression Test Prioritization](https://link.springer.com/content/pdf/10.1007/978-3-030-99527-0_12.pdf)
- **Authors:** Pu Yi, Hao Wang, Tao Xie, Darko Marinov, Wing Lam
- **Year:** 2022

## Paper overview

This paper presents the first theoretical analysis of random regression test prioritization (RTP), a technique used to order software tests to detect faults earlier. Prior work used empirical sampling to evaluate random RTP, but this paper introduces algorithms and formulas to compute exact probability distributions and expected values for common RTP metrics. It also identifies properties of these metrics and revisits prior RTP studies, revealing potential biases due to insufficient sampling. The work enables more precise and efficient evaluation of RTP techniques without relying on random sampling.

### Why it matters

**Research problem:** Regression test prioritization techniques are commonly compared against random RTP baselines using empirical sampling, but there has been no theoretical analysis of random RTP to understand its behavior and metrics precisely.

**Why it matters:** Random RTP is widely used as a baseline in RTP research and industry, but empirical sampling can be imprecise and biased due to insufficient sampling. A theoretical understanding allows for more accurate evaluation and comparison of RTP techniques, improving regression testing effectiveness.

**Key contributions:**

- First theoretical analysis of random regression test prioritization metrics.
- Algorithm to efficiently compute exact PMFs of APFD for general failure-to-fault matrices.
- Closed-form formulas and approximations for PMFs in common RTP scenarios (all-to-one and one-to-one).
- Formulas for expected values of APFD and cost-cognizant APFD (APFDc) for all orders and compatible orders.
- Identification of metric properties such as mean/median bounds and symmetry.

## About the professor

**Darko Marinov** — Professor, Department of Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: Software Engineering, in particular software testing

### Research links

- [Faculty/profile page](http://mir.cs.illinois.edu)
- [Professor website](http://mir.cs.illinois.edu/marinov)
- [Resolved homepage](https://mir.cs.illinois.edu/marinov)
- [Google Scholar](http://scholar.google.com/citations?user=x6OIBq4AAAAJ)
- [DBLP](http://dblp.uni-trier.de/pers/hd/m/Marinov:Darko)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** probability theory and combinatorics
**The paper assumes:** discrete probability theory, combinatorial mathematics, binomial coefficients, expected value calculations
**Already in this field?** Skip this entirely if you already have a solid understanding of discrete probability and combinatorics including how to compute and interpret probability mass functions and binomial coefficients.

This background focuses on probability theory and combinatorics, essential for understanding the theoretical analysis of random regression test prioritization metrics like APFD in the paper. The rigorous course option offers a deep, university-level treatment of probability concepts including counting, distributions, and expectation, while the fast track provides a concise, intuition-driven introduction to key probability ideas and binomial distributions relevant to the paper's formulas and algorithms. Choose the course for thorough mastery or the fast track for a quicker, conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Probability Lecture Videos by Joe Blitzstein (Harvard)](https://www.youtube.com/playlist?list=PLLVplP8OIVc8EktkrD3Q8td0GmId7DjW0) — stat110harvard · 36 videos

**Watch only this:** Lectures 1-4 (Probability and Counting, Story Proofs, Birthday Problem, Conditional Probability) plus Lectures 8-10 (Random Variables and Their Distributions, Expectation and Linearity), about 5.5 hours total — these cover the core probability and combinatorial concepts needed to understand PMFs and expected values in the paper.

*Why it unblocks this paper:* This Harvard course by Joe Blitzstein covers foundational probability and combinatorics with detailed lectures on counting, distributions, expectation, and binomial coefficients, directly supporting the paper's theoretical analysis and algorithmic complexity involving factorial terms.

*If you want all of it:* 27.1 hours across 36 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Essence of probability - 3Blue1Brown](https://www.youtube.com/playlist?list=PLiAulSm0XXgvCGe63mrAkda9UQ9478YQv) — Amr Elsayyad · 10 videos · 2.8h across 10 episodes

**Watch only this:** Episodes 4 and 5 (Binomial distributions | Probabilities of probabilities, parts 1 and 2), about 32 minutes total — these two episodes focus on binomial distributions and probability concepts directly relevant to the paper's analysis.

*Why it unblocks this paper:* This 3Blue1Brown series 'Essence of probability' provides clear, visual explanations of key probability concepts including binomial distributions and expectation, which are central to the paper's closed-form formulas and metric properties, making it an excellent quick conceptual primer.

*If you want all of it:* 2.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Theoretical Analysis of Random Regression Test Prioritization," start with foundational concepts including combinatorial algorithms and probability mass functions, which underpin the paper's algorithmic and probabilistic analysis. Next, study regression test prioritization lectures to grasp the software engineering context and metrics like APFD. Finally, focus on the paper's core concept by watching the authors' own talk on regression testing techniques to gain direct insights into their theoretical contributions and results.

### combinatorial algorithms lecture *(prerequisite)*
Combinatorial algorithms provide the mathematical and algorithmic foundation for the paper's approach to computing exact probability mass functions (PMFs) of test prioritization metrics. Understanding subset enumeration and combinatorial search techniques is crucial to grasp the factorial complexity and algorithm design presented in the paper.

*How the paper uses it:* The paper's exact PMF computation algorithm relies on combinatorial methods to enumerate test orders and fault detection scenarios.

▶ [Lecture 16 - Combinatorial Search](https://www.youtube.com/watch?v=oYUYH7rPhiQ) — Steven Skiena · 1:00:38 · 14y ago

### probability mass function lecture *(prerequisite)*
Probability mass functions (PMFs) describe the distribution of discrete random variables and are central to the paper's theoretical analysis of RTP metrics. A solid understanding of PMFs enables comprehension of how the paper derives exact and approximate distributions for APFD values.

*How the paper uses it:* The paper develops algorithms and formulas to compute exact PMFs of the APFD metric for random test orders.

▶ [L05.3 Probability Mass Functions](https://www.youtube.com/watch?v=zW1_iugJvF0) — MIT OpenCourseWare · 10:21 · 8y ago

### regression test prioritization lecture *(prerequisite)*
Regression test prioritization is the software engineering practice of ordering tests to detect faults earlier. Foundational lectures on this topic provide context for the problem the paper addresses and the significance of metrics like APFD in evaluating prioritization effectiveness.

*How the paper uses it:* The paper analyzes random regression test prioritization, so understanding the basics of RTP is essential.

▶ [Regression testing prioritization](https://www.youtube.com/watch?v=63vNfUfgVn8) — Emil Karlsson · 15:01 · 10y ago

### average percentage of faults detected lecture *(prerequisite)*
The Average Percentage of Faults Detected (APFD) metric quantifies how quickly faults are detected by a test suite order. Lectures explaining APFD provide necessary background to understand the paper's focus on exact distributions and expected values of this metric.

*How the paper uses it:* APFD is the key metric analyzed theoretically in the paper for random test orderings.

▶ [APFD Explained with Example | Software Engineering | Bangla Tutorial](https://www.youtube.com/watch?v=kmRQr0hHRGI) — Zero Days Code · 15:18 · 2mo ago

### random regression test prioritization metrics
This concept covers the specific metrics used to evaluate random regression test prioritization, including APFD and APFDc. Understanding these metrics in depth is critical to appreciate the paper's theoretical contributions and the implications of their exact PMF computations and expected value analyses.

*How the paper uses it:* The paper provides the first theoretical analysis of random RTP metrics and their distributions.

▶ [Dependent-Test-Aware Regression Testing Techniques (ISSTA20)](https://www.youtube.com/watch?v=YV9561AmNlU) — Wing Lam · 17:44 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the theoretical analysis of random regression test prioritization (RTP) from the paper. It starts with the basics of regression testing and test prioritization, then covers probability mass functions (PMFs) to grasp the paper's exact distribution computations, followed by the key metric Average Percentage of Faults Detected (APFD). Finally, it introduces combinatorial algorithms that underpin the paper's algorithmic approach to computing PMFs.

### regression test prioritization lecture *(prerequisite)*
Regression test prioritization is the process of ordering software tests so that faults are detected earlier, improving testing efficiency. This foundational concept explains why and how tests are prioritized in regression testing.

*How the paper uses it:* The paper analyzes random regression test prioritization metrics, so understanding what regression test prioritization is forms the essential base.

▶ [Regression Test Case Prioritization](https://www.youtube.com/watch?v=LpeEJaKuyto) — Giovanni Sanchez · 26:16 · 3y ago

### probability mass function lecture *(prerequisite)*
A probability mass function (PMF) describes the probability distribution of a discrete random variable, showing the likelihood of each possible outcome. Understanding PMFs is crucial for grasping how the paper computes exact distributions of RTP metrics.

*How the paper uses it:* The paper develops algorithms to compute exact PMFs of the APFD metric for test orderings.

▶ [L05.3 Probability Mass Functions](https://www.youtube.com/watch?v=zW1_iugJvF0) — MIT OpenCourseWare · 10:21 · 8y ago

### average percentage of faults detected lecture *(prerequisite)*
APFD measures how quickly faults are detected by a test suite, with higher values indicating earlier fault detection. This metric is central to evaluating the effectiveness of test prioritization strategies.

*How the paper uses it:* The paper's theoretical analysis focuses on the APFD metric and its probability distributions under random test orderings.

▶ [APFD Explained with Example | Software Engineering | Bangla Tutorial](https://www.youtube.com/watch?v=kmRQr0hHRGI) — Zero Days Code · 15:18 · 2mo ago

### combinatorial algorithms lecture *(prerequisite)*
Combinatorial algorithms systematically explore combinations or permutations of elements, which is essential for enumerating test orderings and computing exact metric distributions. Understanding these algorithms helps in grasping the paper's approach to calculating PMFs.

*How the paper uses it:* The paper's algorithm to compute exact PMFs relies on combinatorial methods to handle permutations of failing tests.

▶ [Subset Enumeration & Combinatorial Algorithms](https://www.youtube.com/watch?v=Aj-QRagX0j4) — K11 Tech University · 6:22 · 10mo ago

## Already in your library

- [Lec-3: Introduction to Regression with Real Life Examples](https://www.youtube.com/watch?v=cHT-qLnRm0E) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the theoretical analysis of random regression test prioritization (RTP) from the paper. The beginner project recreates a fundamental metric computation for RTP on small synthetic data, the intermediate project implements the paper's core exact PMF algorithm for APFD and compares it to a baseline on simulated data, and the advanced project extends the paper by exploring scalable approximations or heuristics for larger test suites, addressing a key limitation.

### Beginner — Compute APFD Distribution for Small RTP Scenario
*Effort: a weekend, ~6 hours*

You build a small command-line tool or script that computes the Average Percentage of Faults Detected (APFD) metric distribution for all permutations of test orders on a synthetic small failure-to-fault matrix (e.g., 3 failing tests and 3 faults). You generate all permutations, compute APFD for each, and plot the resulting probability mass function (PMF).

**Why it shows you understood the paper:** This project shows you understand the APFD metric, how test order affects fault detection, and the concept of PMFs over test orderings, directly reflecting the paper's foundational metric analysis.

**Grounded in:** Algorithm to efficiently compute exact PMFs of APFD for general failure-to-fault matrices.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic failure-to-fault matrix generated in code, small size (e.g., 3x3).

**Build it:**

1. Implement a function to generate all permutations of a small test suite (e.g., 3 tests).
2. Define a small failure-to-fault matrix representing which tests detect which faults.
3. Implement APFD computation for a given test order and failure-to-fault matrix.
4. Compute APFD for all permutations and aggregate frequencies to form the PMF.
5. Plot the PMF using matplotlib to visualize the distribution of APFD values.

**Ships as:** A Python script with README explaining APFD, the synthetic data, and a plot of the APFD PMF for all test orders.

**Stretch goal:** Add computation of expected APFD value and verify it is at least 1/2 as per the paper's theorem.

### Intermediate — Implement Exact PMF Algorithm for APFD
*Effort: 2 weekends, ~20 hours*

You implement the paper's exact PMF computation algorithm for APFD on failure-to-fault matrices with up to 10 failing tests, using the algorithmic description and formulas in the paper. You simulate or generate failure-to-fault matrices for common scenarios (all-to-one and one-to-one), compute exact PMFs, and compare results against empirical sampling baselines to demonstrate precision and efficiency.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core theoretical algorithm of the paper, understand its complexity, and validate the paper's claims about exact PMF computation and sampling bias.

**Grounded in:** Algorithm to efficiently compute exact PMFs of APFD for general failure-to-fault matrices; closed-form formulas and approximations for common RTP scenarios.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** Synthetic failure-to-fault matrices generated in code, including all-to-one and one-to-one scenarios as described in the paper.

**Build it:**

1. Study the paper's algorithm and closed-form formulas for APFD PMF computation.
2. Implement the exact PMF computation algorithm for general failure-to-fault matrices.
3. Implement closed-form PMF formulas for all-to-one and one-to-one failure-to-fault matrices.
4. Generate synthetic failure-to-fault matrices for these scenarios.
5. Compute exact PMFs and compare to empirical sampling (random test order sampling) results.
6. Visualize PMFs and quantify differences to highlight sampling bias.

**Ships as:** A Python package or notebook with implementations, synthetic data generation, PMF computations, comparison plots, and a README explaining the approach and findings.

**Stretch goal:** Add cost-cognizant APFDc metric computations and analyze expected values as per the paper.

### Advanced — Heuristic Approximation for Large-Scale APFD PMF Computation
*Effort: 3+ weeks*

You develop and evaluate heuristic or machine learning-based approximations to estimate the APFD PMF for large failure-to-fault matrices with more than 10 failing tests, addressing the factorial complexity limitation of the exact algorithm. You design scalable sampling or approximation methods, validate them on synthetic data, and compare their accuracy and runtime against exact computations on smaller subsets.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of the theoretical challenges and practical constraints in RTP metric computation, and contributes a novel extension.

**Grounded in:** The exact PMF computation algorithm has factorial complexity in the number of failing tests (k!), limiting scalability beyond k > 10; future direction: developing scalable algorithms or approximations for scenarios with more than 10 failing tests.

**Tech stack:** Python 3.11, numpy, scipy, scikit-learn, matplotlib

**Data:** Synthetic large failure-to-fault matrices generated in code, simulating realistic RTP scenarios with >10 failing tests.

**Build it:**

1. Review the paper's exact PMF algorithm and identify computational bottlenecks.
2. Research heuristic or ML-based approximation techniques suitable for combinatorial PMF estimation.
3. Design and implement one or more approximation methods (e.g., Monte Carlo sampling with variance reduction, probabilistic graphical models, or supervised learning to predict APFD distributions).
4. Generate large synthetic failure-to-fault matrices for evaluation.
5. Evaluate approximation accuracy by comparing to exact PMFs on smaller subsets and analyze runtime scalability.
6. Document findings, limitations, and potential improvements.

**Ships as:** A research-style codebase and report demonstrating heuristic approximation methods for APFD PMF, with empirical evaluation and discussion of trade-offs.

**Stretch goal:** Extend the approach to non-uniform or adaptive RTP techniques as suggested in the paper's future directions.
