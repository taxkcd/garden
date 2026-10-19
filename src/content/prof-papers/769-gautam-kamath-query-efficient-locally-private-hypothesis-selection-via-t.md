---
title: "769 · Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph — Gautam Kamath"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gautam-kamath"
source_hash: "6aedd169abd208a9aa88a82af820b1fd112e392cf4f5ea6183d6b508eb5a38fc"
sequence: 769
generator: "outreach-garden: managed"
---

# 769 · Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph

## At a glance

- **Professor:** Gautam Kamath
- **Institution:** New York University
- **Paper:** [Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph](https://arxiv.org/pdf/2509.16180)
- **Authors:** Gautam Kamath, Alireza F. Pour, Matthew Regehr, David P. Woodruff
- **Year:** 2026

## Paper overview

This paper presents a new algorithm for selecting the best hypothesis (probability distribution) from a set under strong privacy constraints called local differential privacy (LDP). The algorithm improves the number of queries needed compared to previous methods, while being non-interactive, meaning it does not require multiple rounds of communication with data holders. The key innovation is a new combinatorial structure called the Scheffé graph, which helps reduce the complexity of the problem.

### Why it matters

**Research problem:** How to efficiently perform hypothesis selection under local differential privacy constraints with minimal queries and without requiring interactive communication.

**Why it matters:** Local differential privacy provides strong privacy guarantees without needing a trusted curator, which is crucial for sensitive data applications. However, existing algorithms either require many queries or interactivity, limiting practical deployment. Improving query efficiency and non-interactivity enables more practical and privacy-preserving statistical estimation.

**Key contributions:**

- A non-interactive locally differentially private algorithm for hypothesis selection with Õ(k^{3/2}) sample complexity, improving over previous O(k^2) bounds.
- Introduction of the Scheffé graph, a novel combinatorial object encoding query relationships for hypothesis selection.
- Proof of existence and efficient construction of small dominating sets in the Scheffé graph to reduce query complexity.
- A relaxed minimum distance estimator framework that generalizes classical Scheffé tests to arbitrary query sets.
- Lower bounds showing that further improvements require new structural insights beyond the Scheffé graph.

## About the professor

**Gautam Kamath** — Assistant Professor, Computer Science, New York University.

Research interests: reliable and trustworthy statistics and machine learning, including considerations such as data privacy and robustness

### Research links

- [Faculty/profile page](http://www.gautamkamath.com)
- [Lab website](http://thesalon.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=MK6zHkYAAAAJ&view_op=list_works&sortby=pubdate)
- [DBLP](https://dblp.uni-trier.de/pers/hd/k/Kamath_0001:Gautam)
- [GitHub](https://github.com/hoonose/)
- [Social profile](https://twitter.com/thegautamkamath)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** local differential privacy
**The paper assumes:** local differential privacy definitions, randomized response mechanism, privacy guarantees, and non-interactive private algorithms
**Already in this field?** Skip this entirely if you already understand the formal definitions and mechanisms of local differential privacy and how randomized response achieves LDP.

To understand the core privacy model and mechanisms underlying the paper "Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph," it is essential to grasp local differential privacy (LDP) concepts and randomized response techniques. The rigorous course option provides a structured, in-depth university lecture series on differential privacy by an expert in the field, suitable for a deep theoretical foundation. The fast track offers a concise, focused playlist by the paper's lead author, delivering clear explanations of LDP fundamentals and key mechanisms in a shorter time, ideal for quickly gaining the necessary background.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [A Course In Differential Privacy](https://www.youtube.com/playlist?list=PLmd_zeMNzSvRRNpoEWkVo6QY_6rR3SHjp) — Gautam Kamath · 37 videos · 24.3h across 37 episodes

**Watch only this:** Lectures 3A: Randomized Response, 3B: The Definition of Differential Privacy, and 4A: Intro to Differential Privacy, Part 2 - The Laplace Mechanism; about 2 hours — these episodes succinctly cover the key LDP concepts and mechanisms relevant to the paper.

*Why it unblocks this paper:* This playlist is also by Gautam Kamath and provides a concise, focused introduction to differential privacy concepts including randomized response and local DP mechanisms. It is shorter and more targeted than the full course, making it ideal for quickly acquiring the essential background to follow the paper's approach.

*If you want all of it:* Approximately 24.3 hours across 37 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph," start by grounding yourself in the fundamentals of local differential privacy and hypothesis selection under privacy constraints, as these form the theoretical and practical backdrop of the work. Then, study the randomized response mechanism, a key privacy tool used in the paper's algorithm. Finally, focus on the paper's core novel contribution: the Scheffé graph and the relaxed minimum distance estimator, best understood through the authors' own seminar talk presenting this exact work.

### Local differential privacy algorithms *(prerequisite)*
Local differential privacy (LDP) is the privacy model central to the paper, providing strong privacy guarantees without a trusted curator. Understanding LDP's definitions, challenges, and algorithmic constraints is essential to appreciate the paper's improvements in query efficiency and non-interactivity.

*How the paper uses it:* The paper develops a non-interactive LDP algorithm for hypothesis selection, improving sample complexity under this privacy model.

▶ [Hassan Ashtiani - Sample-Optimal Locally Private Hypothesis Selection](https://www.youtube.com/watch?v=dhMZAjdipdo) — Theory & Practice of Differential Privacy Workshop · 1 yr ago

### Hypothesis selection under privacy *(prerequisite)*
Hypothesis selection is the statistical problem of choosing the best distribution from a set given samples, complicated here by privacy constraints. Grasping the statistical foundations of hypothesis testing and selection under privacy is necessary to understand the problem the paper addresses.

*How the paper uses it:* The paper focuses on hypothesis selection under local differential privacy constraints, improving query complexity and sample efficiency.

▶ [The Structure of Optimal Private Tests for Simple Hypotheses](https://www.youtube.com/watch?v=xrx2HKqcoV8) — Simons Institute for the Theory of Computing · 48:29

### Randomized response mechanism *(prerequisite)*
Randomized response is a classical mechanism to achieve local differential privacy by randomizing user responses. The paper uses randomized response to estimate queries non-interactively, making it a crucial building block for the algorithm.

*How the paper uses it:* The algorithm applies randomized response to estimate queries under local differential privacy non-interactively.

▶ [Lecture 3A: Randomized Response](https://www.youtube.com/watch?v=gCjQ-2W9yjs) — Gautam Kamath · 6 yr ago

### Paper authors talk
The authors' own seminar talk on this paper provides the most direct and detailed exposition of their novel contributions, including the Scheffé graph, the relaxed minimum distance estimator, and the improved query complexity results. It is the best resource to understand the paper's innovations and technical depth.

*How the paper uses it:* This talk by Mat Regehr, one of the paper's authors, presents the exact work on query-efficient locally private hypothesis selection via the Scheffé graph.

▶ [A&C Seminar: Mat Regehr - Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph](https://www.youtube.com/watch?v=QBdkcvEmq7c) — U Waterloo A&C Seminar · 48:40 · 2 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of local differential privacy (LDP), the privacy model central to the work. Next, grasp the basics of hypothesis selection and testing under privacy constraints to appreciate the statistical problem addressed. Then, study the randomized response mechanism, a key privacy tool used in the algorithm. Finally, explore the paper's core innovation: the Scheffé graph and the relaxed minimum distance estimator, which enable improved query efficiency under LDP.

### Local differential privacy algorithms *(prerequisite)*
Local differential privacy (LDP) is a strong privacy model where each data holder privatizes their data before sharing it, eliminating the need for a trusted curator. Understanding LDP helps you see the constraints and challenges in designing algorithms that protect individual privacy while enabling useful data analysis.

*How the paper uses it:* The paper develops a non-interactive LDP algorithm for hypothesis selection, making LDP understanding foundational.

▶ [Lecture 17A: DP Deployments 1, Local DP](https://www.youtube.com/watch?v=eP9RGfQsvtg) — Gautam Kamath · 5 yr ago

### Hypothesis selection under privacy *(prerequisite)*
Hypothesis selection involves choosing the best candidate distribution that fits observed data, a fundamental statistical task. When combined with privacy constraints, it becomes challenging to maintain accuracy while protecting sensitive information.

*How the paper uses it:* The paper addresses hypothesis selection under local differential privacy constraints.

▶ [Hypothesis Testing and Differential Privacy](https://www.youtube.com/watch?v=wXxsYZh8mkg) — Fields Institute · 14:19

### Randomized response mechanism *(prerequisite)*
Randomized response is a classic technique to collect truthful data while preserving privacy by introducing controlled randomness. It is a key mechanism enabling non-interactive local differential privacy by allowing users to perturb their responses before sharing.

*How the paper uses it:* The algorithm uses randomized response to estimate queries non-interactively under LDP.

▶ [Randomized Response Explained](https://www.youtube.com/watch?v=SD7EzSkBXug) — Security and Privacy Academy · 2 yr ago

### Scheffé graph and relaxed minimum distance estimator
The Scheffé graph is a novel combinatorial structure introduced to capture relationships between queries for hypothesis selection, enabling query complexity reduction. The relaxed minimum distance estimator generalizes classical Scheffé tests to arbitrary query sets, forming the core of the paper's improved algorithm.

*How the paper uses it:* These are the paper's key innovations that enable improved query efficiency and sample complexity.

▶ [A&C Seminar: Mat Regehr - Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph](https://www.youtube.com/watch?v=QBdkcvEmq7c) — U Waterloo A&C Seminar · 48:40 · 2 mo ago

## Already in your library

- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and implement key ideas from the paper "Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph." The beginner project introduces the randomized response mechanism under local differential privacy on a small synthetic dataset. The intermediate project implements a simplified version of the Scheffé graph-based hypothesis selection algorithm non-interactively, comparing it against a baseline. The advanced project extends the core method by exploring alternative query selection strategies or privacy mechanisms to attempt reducing sample complexity, addressing one of the paper's stated future directions.

### Beginner — Simulate Randomized Response for Local Differential Privacy
*Effort: a weekend (~6-8 hours)*

You build a small Python simulation that implements the randomized response mechanism to estimate simple binary queries under local differential privacy. Using synthetic data representing user responses, you apply randomized response to privatize data and then estimate the true query answers by debiasing the noisy responses.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental privacy mechanism (randomized response) used in the paper to estimate queries non-interactively under local differential privacy.

**Grounded in:** We can estimate our workload of queries ⟨p, T⟩ under LDP by applying randomized response to T(x) for each user, averaging, and correcting the bias introduced by RRε.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic binary data simulating user responses to simple queries, generated within the notebook.

**Build it:**

1. Generate synthetic binary user data representing answers to a simple query.
2. Implement the randomized response mechanism with a chosen privacy parameter ε.
3. Apply randomized response to each user's data to privatize it.
4. Aggregate privatized responses and debias the estimate to approximate the true query answer.
5. Visualize the estimation error as a function of sample size and privacy parameter.

**Ships as:** A Jupyter notebook demonstrating randomized response on synthetic data with plots showing estimation accuracy versus privacy and sample size.

**Stretch goal:** Extend the simulation to handle multiple queries and compare estimation errors across them.

### Intermediate — Implement Non-Interactive LDP Hypothesis Selection with Scheffé Graph
*Effort: 2 weekends (~15-20 hours)*

You reimplement the core non-interactive locally differentially private hypothesis selection algorithm based on the Scheffé graph as described in the paper. Using synthetic discrete distributions as hypotheses, you construct the Scheffé graph, find a small dominating set of queries, and estimate these queries via randomized response. You then apply the relaxed minimum distance estimator to select the best hypothesis and compare accuracy against a naive baseline that uses all pairwise queries.

**Why it shows you understood the paper:** This project shows you can translate the paper's main combinatorial and algorithmic contributions into code, reproducing the key sample complexity improvement and demonstrating the Scheffé graph's role in query reduction.

**Grounded in:** Our main result improves upon all of these, providing a non-interactive Õ(k^{3/2})-sample algorithm for LDP hypothesis selection... Theorem 14: The Scheffé graph has domination number at most Õ(k^{3/2}), enabling query set size reduction.

**Tech stack:** Python 3.11, NetworkX (graph algorithms), NumPy, Jupyter Notebook

**Data:** Synthetic discrete probability distributions generated programmatically to serve as hypotheses and samples.

**Build it:**

1. Generate k synthetic discrete distributions representing hypotheses.
2. Implement the Scheffé graph construction capturing pairwise query relationships.
3. Find a small dominating set of queries in the Scheffé graph using a greedy or approximation algorithm.
4. Simulate user samples and apply randomized response to estimate dominating set queries non-interactively.
5. Implement the relaxed minimum distance estimator to select the best hypothesis based on noisy query estimates.
6. Compare the hypothesis selection accuracy and sample complexity against a baseline using all pairwise queries.

**Ships as:** A Python repository with scripts/notebooks that implement the Scheffé graph-based LDP hypothesis selection and baseline, with accuracy and sample complexity comparison plots.

**Stretch goal:** Add visualization of the Scheffé graph structure and dominating sets for different k values.

### Advanced — Explore Alternative Query Selection to Reduce Sample Complexity in LDP Hypothesis Selection
*Effort: 3-4 weeks*

You extend the paper's framework by experimenting with alternative query selection methods or privacy mechanisms beyond randomized response to attempt reducing sample complexity or computational cost. For example, you might explore different combinatorial structures inspired by the Scheffé graph or implement a variant privacy mechanism with tighter utility guarantees. You evaluate your approach on synthetic data and compare it to the original Scheffé graph method.

**Why it shows you understood the paper:** This project tackles one of the paper's open future directions and limitations, demonstrating your ability to critically engage with the research, propose meaningful extensions, and empirically evaluate their impact.

**Grounded in:** Future directions: Discovering additional structural properties of the Scheffé graph or other combinatorial objects to reduce sample complexity to near-linear in k. Exploring alternative query selection methods or privacy mechanisms to further improve non-interactive LDP hypothesis selection.

**Tech stack:** Python 3.11, NetworkX, NumPy, Jupyter Notebook, scipy

**Data:** Synthetic discrete distributions generated programmatically as in the intermediate project.

**Build it:**

1. Review the Scheffé graph construction and dominating set approach from the intermediate project.
2. Research alternative combinatorial structures or heuristics for query selection that might reduce dominating set size or improve estimation.
3. Implement one or more alternative query selection strategies.
4. Optionally, implement a different local privacy mechanism (e.g., optimized randomized response variants) for query estimation.
5. Evaluate the sample complexity and hypothesis selection accuracy of your methods versus the original approach on synthetic data.
6. Analyze computational costs and discuss trade-offs.

**Ships as:** A research-style report and code repository documenting alternative query selection methods, their implementation, and empirical evaluation compared to the Scheffé graph baseline.

**Stretch goal:** Attempt to apply your methods to a small real-world dataset with discrete categories as a proof of concept.
