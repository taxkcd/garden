---
title: "104 · Query Lower Bounds for Correlation Clustering under Memory Constraints — Periklis A. Papakonstantinou"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-periklis-a-papakonstantinou"
source_hash: "05d354d5aee29b615901bcdddec035a153a8af6446ba1f11cebb6835161ccc28"
sequence: 104
generator: "outreach-garden: managed"
---

# 104 · Query Lower Bounds for Correlation Clustering under Memory Constraints

## At a glance

- **Professor:** Periklis A. Papakonstantinou
- **Institution:** Rutgers University
- **Paper:** [Query Lower Bounds for Correlation Clustering under Memory Constraints](https://arxiv.org/pdf/2605.23104)
- **Authors:** Songhua He, Sumegha Garg, Periklis A. Papakonstantinou
- **Year:** 2026

## Paper overview

This paper studies the fundamental limits on how efficiently algorithms can solve the correlation clustering problem on graphs when constrained by limited memory and query access. It establishes tight lower bounds on the number of queries needed to approximate the clustering cost within a small additive error, especially under memory constraints and different query models. The work also extends these results to related graph problems like max cut and minimum bisection.

### Why it matters

**Research problem:** Understanding the query complexity and memory-query tradeoffs for approximating correlation clustering cost in large graphs, especially under memory constraints and various query models such as adjacency-matrix queries, random queries, and general graph queries.

**Why it matters:** Correlation clustering is a fundamental problem in machine learning and network analysis with applications in data clustering and graph partitioning. Efficient algorithms that use sublinear queries and limited memory are crucial for processing massive graphs. Establishing lower bounds clarifies the inherent difficulty and guides algorithm design.

**Key contributions:**

- Proved a tight Ω(n/ε²) query lower bound for approximating correlation clustering cost within additive error εn² in the adjacency-matrix query model.
- Established the first non-trivial memory-query tradeoff lower bound in the random query model, showing that limited memory algorithms require significantly more queries.
- Provided the first query lower bound Ω(n/ε) for correlation clustering in the general graph model with adjacency-matrix, neighbor, and degree queries.
- Extended lower bounds to related problems like max cut and minimum bisection.
- Introduced a noisy variant of the Distributional Boolean Hidden Partition problem (PD-BHP) to handle dense graphs and noise.

## About the professor

**Periklis A. Papakonstantinou** — associate professor, Management Science and Information Systems, Rutgers University.

Research interests: foundations of computing, computational complexity, mathematical foundations of cryptography, machine learning

### Research links

- [Faculty/profile page](http://papakons.business.rutgers.edu/)
- [Identity evidence](http://papakonstantinou.net)
- [Identity evidence](https://www.business.rutgers.edu/faculty/periklis-papakonstantinou)
- [Resolved homepage](http://papakons.business.rutgers.edu/#)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** communication complexity theory
**The paper assumes:** communication complexity, information theory, and theoretical computer science
**Already in this field?** Skip this entirely if you already have a solid understanding of communication complexity and its applications in theoretical computer science.

This background focuses on communication complexity theory, which is central to understanding the query lower bounds and memory-query tradeoffs in the paper. The rigorous course option provides a deep, structured university-level lecture series covering fundamental and advanced concepts in information theory and communication complexity. The fast track offers a concise tutorial series on information theory basics, suitable for quickly grasping key concepts underpinning the paper's techniques.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Information and Coding Theory (Madhur Tulsiani, TTIC, 2021)](https://www.youtube.com/playlist?list=PLidiQIHRzpXJujWKblOWPKoiD2ltRihYj) — Theoretical Computer Science School (TCSS) · 17 videos · 22.6h across 17 episodes

**Watch only this:** Lectures 1-5 and 15-16, about 8.5 hours — covering entropy, mutual information, Fano's inequality, and communication complexity lower bounds relevant to the paper's techniques.

*Why it unblocks this paper:* This course by Madhur Tulsiani at TTIC covers foundational information theory and communication complexity topics, including Fano's inequality and communication lower bounds, which are directly used in the paper's proofs and technical approach.

*If you want all of it:* 22.6 hours across all 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Information Theory Tutorial](https://www.youtube.com/playlist?list=PLF0b3ThojznQAEXlZQmbTTFNH96i2iZPC) — Complexity Explorer · 12 videos · 2.1h across 12 episodes

**Watch only this:** Episodes 1-7, about 1.2 hours — covering measuring information, entropy, mutual information, and fundamental formulas of information theory.

*Why it unblocks this paper:* This short tutorial series from Complexity Explorer provides clear, visual explanations of core information theory concepts like entropy, mutual information, and communication capacity, enabling a quick but solid grasp of the theoretical tools used in the paper.

*If you want all of it:* 2.1 hours across all 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Query Lower Bounds for Correlation Clustering under Memory Constraints," start with foundational knowledge on communication complexity and information theory, as these underpin the lower bound techniques used. Next, explore sublinear algorithms for graph problems to grasp the context of query and memory constraints in large graphs. Finally, focus on the core concept of correlation clustering complexity and the authors' own presentation of their novel results to directly connect theory with their contributions.

### Communication complexity lower bounds *(prerequisite)*
Communication complexity provides the theoretical foundation for proving lower bounds on query complexity, which is central to the paper's approach. Understanding these concepts helps in grasping the reductions and complexity arguments used by the authors.

*How the paper uses it:* The paper uses communication complexity techniques to establish tight query lower bounds for correlation clustering under memory constraints.

▶ [Lower Bounds in Complexity Theory, Communication ...](https://www.youtube.com/watch?v=w3kq7vTta7c) — Institute for Advanced Study · 1:00:16

### Information theory in algorithms *(prerequisite)*
Information theory, especially concepts like entropy and Fano's inequality, is key to analyzing memory-query tradeoffs and proving lower bounds in the paper. This background aids in understanding the generalized Fano’s inequality and noisy problem variants introduced.

*How the paper uses it:* The authors apply a generalized Fano’s inequality tailored for approximation problems and use information-theoretic arguments in their proofs.

▶ [Intuitively Understanding the Shannon Entropy](https://www.youtube.com/watch?v=0GCGaw0QOhA) — Adian Liusie · 8:03

### Sublinear algorithms for graph problems *(prerequisite)*
Sublinear algorithms provide context for the challenges of processing large graphs with limited queries and memory. This background clarifies why query lower bounds and memory constraints are significant in graph clustering problems.

*How the paper uses it:* The paper studies query complexity and memory-query tradeoffs in sublinear algorithms for correlation clustering and related graph problems.

▶ [Soheil Behnezhad - Recent Progress on Sublinear Time ...](https://www.youtube.com/watch?v=8TJw_nr83ko) — DIMACS CCICADA · 50:36

### Correlation clustering complexity *(the paper's own talk)*
Understanding the complexity and challenges of correlation clustering is essential to appreciate the significance of the paper’s lower bounds. This section focuses on the problem itself and its computational intricacies.

*How the paper uses it:* Correlation clustering is the central problem studied, and the paper establishes fundamental query lower bounds for it under memory constraints.

▶ [Recent Progress on Correlation Clustering - Vincent Cohen ...](https://www.youtube.com/watch?v=R7k1HUNF6Uw) — DIMAP · 46:06

### Paper authors talk *(the paper's own talk)*
The authors' own presentation provides the most direct and detailed exposition of their novel results, techniques, and challenges. Watching this talk offers insights into their approach and the nuances of their contributions.

*How the paper uses it:* This is the authors' presentation video for the paper, directly explaining their results on query lower bounds for correlation clustering under memory constraints.

▶ [[ITCS 2026] Query Lower Bounds for Correlation Clustering under Memory Constraints](https://www.youtube.com/watch?v=zSagjpaRsk4) — Songhua He · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper on query lower bounds for correlation clustering under memory constraints. We start with basic information theory to grasp memory-query tradeoffs, then cover communication complexity which underpins the proof techniques. Next, we explore sublinear algorithms for graph problems to appreciate the context of query complexity, followed by an intuitive introduction to correlation clustering itself. Finally, we conclude with a concise presentation by the paper's authors to directly connect theory with their novel results.

### Information theory in algorithms *(prerequisite)*
Information theory helps us understand how much information can be stored or transmitted, which is crucial when analyzing algorithms that operate under memory constraints. Concepts like entropy and Fano’s inequality provide tools to prove lower bounds on what can be computed with limited memory and queries.

*How the paper uses it:* The paper uses a generalized Fano’s inequality and information-theoretic arguments to establish memory-query tradeoffs and lower bounds.

▶ [Intuitively Understanding the Shannon Entropy](https://www.youtube.com/watch?v=0GCGaw0QOhA) — Adian Liusie · 8:03

### Communication complexity lower bounds *(prerequisite)*
Communication complexity studies the minimal amount of communication needed between parties to solve a problem, which translates to query complexity in algorithms. Understanding these lower bounds is key to grasping why certain problems require many queries or large memory.

*How the paper uses it:* The authors use communication complexity techniques and reductions to Boolean Hidden Partition problems to prove query lower bounds.

▶ [Basics of Communication Complexity || @ CMU || Lecture 23a ...](https://www.youtube.com/watch?v=mQQ36cDnmR8) — Ryan O'Donnell · 19:56

### Sublinear algorithms for graph problems *(prerequisite)*
Sublinear algorithms aim to solve problems on large graphs by inspecting only a small portion of the data, often using queries. This area provides context for why query complexity and memory constraints matter when clustering or partitioning graphs.

*How the paper uses it:* The paper studies sublinear query algorithms for correlation clustering and related graph partitioning problems under memory constraints.

▶ [Algorithms for Clustering: Lessons from Sublinear Time Graph ...](https://www.youtube.com/watch?v=0XkGda_-YoQ) — EnCORE · 35:27

### Correlation clustering complexity *(the paper's own talk)*
Correlation clustering is a graph partitioning problem where the goal is to cluster vertices to minimize disagreements with given edge labels. Understanding its complexity and approximation challenges is essential to appreciate the significance of query lower bounds.

*How the paper uses it:* The paper establishes tight query lower bounds for approximating correlation clustering cost under various query and memory models.

▶ [Sublinear algorithms for correlation clustering](https://www.youtube.com/watch?v=Dxi8UnFto8U) — Simons Institute for the Theory of Computing · 49:36

### Paper authors talk *(the paper's own talk)*
A direct presentation by the authors provides a concise overview of their novel results, techniques, and implications, tying together the theoretical foundations with their contributions.

*How the paper uses it:* This video is the authors' presentation of the paper "Query Lower Bounds for Correlation Clustering under Memory Constraints."

▶ [[ITCS 2026] Query Lower Bounds for Correlation Clustering under Memory Constraints](https://www.youtube.com/watch?v=zSagjpaRsk4) — Songhua He · 6 months ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Sublinear Algorithms, by Prof. Michael Kapralov](https://www.youtube.com/watch?v=4m9MJu1sZmM) — also for: Palindrome Recognition In The Streaming Model (Funda Ergün)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Query Lower Bounds for Correlation Clustering under Memory Constraints." The beginner project recreates a core theoretical lower bound result via simulation and visualization using familiar tools. The intermediate project implements and empirically verifies the memory-query tradeoff lower bound in the random query model on synthetic graphs, requiring new skills in algorithm design and statistical estimation. The advanced project extends the paper's framework by exploring tighter lower bounds in the general graph model using adaptive neighbor queries, addressing a stated limitation and involving deeper algorithmic experimentation and analysis.

### Beginner — Simulate and Visualize Query Lower Bound in Adjacency-Matrix Model
*Effort: a weekend, ~8 hours*

You build a simulation that models the adjacency-matrix query process for correlation clustering on small synthetic graphs and empirically demonstrate the Ω(n/ε²) query lower bound by plotting query counts versus approximation error. You visualize how query complexity grows as the additive error ε decreases, reproducing the core intuition behind Theorem 1.

**Why it shows you understood the paper:** This project shows you grasp the fundamental query complexity tradeoff in the adjacency-matrix model and can translate the theoretical lower bound into an empirical demonstration using simulation and visualization.

**Grounded in:** Proved a tight Ω(n/ε²) query lower bound for approximating correlation clustering cost within additive error εn² in the adjacency-matrix query model.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic complete graphs generated with random edge signs to simulate correlation clustering instances.

**Build it:**

1. Generate small complete graphs with n nodes and random ±1 edge labels representing similarity/dissimilarity.
2. Implement a simple query simulator that counts adjacency-matrix queries made to estimate clustering cost within additive error εn².
3. Vary ε and measure the minimum number of queries needed to achieve the error bound using repeated trials.
4. Plot query counts against 1/ε² to visualize the Ω(n/ε²) lower bound scaling.
5. Write a README explaining the connection between the simulation and the paper's Theorem 1.

**Ships as:** A Jupyter notebook with simulation code, plots showing query complexity scaling, and a README linking the results to the paper's adjacency-matrix query lower bound.

**Stretch goal:** Add a comparison plot showing query complexity if memory constraints are introduced, hinting at the memory-query tradeoff.

### Intermediate — Empirical Study of Memory-Query Tradeoff in Random Query Model
*Effort: 2 weekends, ~20 hours*

You implement an algorithm that estimates correlation clustering cost on synthetic graphs using random queries under varying memory constraints. You empirically verify the memory-query tradeoff lower bound q = Ω(min{n/ε², n^(3/2)/γ^(1/2)}) for γ < 1 and q = Ω(n/ε²) for γ ≥ 1, comparing query counts and memory usage. This requires designing a memory-limited estimator and measuring its performance.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core memory-query tradeoff result (Theorem 2) from scratch, applying theoretical bounds to algorithm design and empirical validation on synthetic data.

**Grounded in:** Established the first non-trivial memory-query tradeoff lower bound in the random query model, showing that limited memory algorithms require significantly more queries.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib

**Data:** Synthetic complete graphs with random ±1 edge labels, generated on the fly to simulate correlation clustering instances.

**Build it:**

1. Implement a random query sampling procedure that queries random vertex pairs and stores limited memory summaries.
2. Design a memory-constrained estimator for correlation clustering cost that uses γ n bits of memory.
3. Run experiments varying memory parameter γ and additive error ε, recording the number of queries q needed to achieve the error bound.
4. Plot q versus γ and ε to empirically observe the tradeoff q = Ω(min{n/ε², n^(3/2)/γ^(1/2)}) for γ < 1 and q = Ω(n/ε²) for γ ≥ 1.
5. Document the methodology, results, and how they relate to Theorem 2 in the paper.

**Ships as:** A Jupyter notebook with code implementing the memory-limited estimator, experimental results, plots illustrating the memory-query tradeoff, and a detailed README.

**Stretch goal:** Extend the estimator to handle noisy queries simulating the PD-BHP problem variant introduced in the paper.

### Advanced — Exploring Tighter Lower Bounds in the General Graph Model with Adaptive Neighbor Queries
*Effort: 3-4 weeks*

You develop and experimentally evaluate algorithms and query strategies for correlation clustering cost approximation in the general graph model, focusing on adaptive neighbor queries. You attempt to empirically approach tighter lower bounds beyond the paper's Ω(n/ε) baseline, addressing the paper's stated limitation about non-tight bounds in this model. This involves implementing adaptive query strategies, analyzing their query complexity under memory constraints, and comparing to baseline random or adjacency-matrix queries.

**Why it shows you understood the paper:** This project tackles a key open problem and limitation from the paper, showing deep engagement with the theoretical challenges and the ability to extend the paper's framework through algorithmic innovation and empirical analysis.

**Grounded in:** The lower bound in the general graph model is not tight and leaves room for sharper results; some technical challenges remain in fully characterizing tight bounds under adaptive neighbor queries.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib, networkx

**Data:** Synthetic sparse and dense graphs generated with controllable degree distributions to simulate general graph model scenarios.

**Build it:**

1. Implement graph generators to create synthetic graphs with varying density and degree distributions.
2. Implement adaptive neighbor query algorithms that select queries based on previous responses to approximate correlation clustering cost.
3. Measure query complexity and approximation error under different memory constraints and compare to baseline random and adjacency-matrix query algorithms.
4. Analyze how adaptive strategies impact query complexity and whether tighter lower bounds can be empirically observed.
5. Document findings, challenges, and potential theoretical implications in a comprehensive report.

**Ships as:** A GitHub repository with code for adaptive query algorithms, experimental results, plots comparing query complexities, and a detailed technical report discussing the extension of lower bounds in the general graph model.

**Stretch goal:** Incorporate Fourier-analytic techniques or reductions inspired by the PD-BHP problem to theoretically justify observed empirical trends.

_No code or datasets were released by the paper's authors; synthetic graph data must be generated to simulate the query models and clustering instances._
