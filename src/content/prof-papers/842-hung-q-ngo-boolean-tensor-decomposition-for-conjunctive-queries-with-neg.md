---
title: "842 · Boolean Tensor Decomposition for Conjunctive Queries with Negation — Hung Q. Ngo"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hung-q-ngo"
source_hash: "30848394c3be1768ef11e3d83d06e633fad752daec7954d56f4612902cd7a106"
sequence: 842
generator: "outreach-garden: managed"
---

# 842 · Boolean Tensor Decomposition for Conjunctive Queries with Negation

## At a glance

- **Professor:** Hung Q. Ngo
- **Institution:** University at Buffalo
- **Paper:** [Boolean Tensor Decomposition for Conjunctive Queries with Negation](https://arxiv.org/pdf/1712.07445)
- **Authors:** Mahmoud Abo Khamis, Hung Q. Ngo, Dan Olteanu, Dan Suciu
- **Year:** 2019

## Paper overview

This paper presents a novel approach to efficiently answering database queries that include negations on relations with bounded degree. The method rewrites such queries into simpler forms using not-all-equal predicates and applies a generalized color-coding technique via Boolean tensor decomposition. This enables query evaluation with data complexity matching the best known algorithms for positive queries, while controlling the increased complexity caused by negations.

### Why it matters

**Research problem:** Efficient evaluation of conjunctive database queries that include negations on bounded-degree relations, where existing algorithms suffer from high complexity due to negations.

**Why it matters:** Queries with negation are common in databases but are computationally challenging, often leading to exponential runtime increases. Improving their evaluation efficiency is crucial for practical database systems and query optimizers.

**Key contributions:**

- A rewriting of queries with negation on bounded-degree relations into equivalent conjunctive queries with not-all-equal predicates without increasing data complexity.
- A generalization of the color-coding technique from cliques of disequalities to arbitrary conjunctions of NAE predicates.
- An alternative view of color coding as a Boolean tensor decomposition of conjunctions of NAE predicates, with a probabilistic construction that can be efficiently derandomized.
- Demonstration that the data complexity of queries with negation matches that of positive subqueries using InsideOut and PANDA algorithms.
- Development of strongly explicit constructions of function families for the tensor decomposition with provable size and runtime bounds.

## About the professor

**Hung Q. Ngo** — VP Research, Computer Science and Engineering, University at Buffalo.

Research interests: query optimization and evaluation

### Research links

- [Faculty/profile page](https://simons.berkeley.edu/people/hung-ngo)
- [Professor website](https://hung-q-ngo.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Boolean tensor decomposition
**The paper assumes:** Boolean tensor decomposition, hypergraph theory, color-coding technique in algorithms
**Already in this field?** Skip this entirely if you already understand Boolean tensor decompositions and their applications in algorithmic query evaluation.

This background focuses on Boolean tensor decomposition, a core technical innovation in the paper that enables efficient evaluation of conjunctive queries with negation via generalized color-coding techniques. The rigorous course option provides a deep, structured understanding of computer science fundamentals relevant to this topic, while the fast track offers a concise, intuition-driven introduction to coding concepts that underpin Boolean tensor decomposition. Choose the course for thorough mastery or the fast track for a quick, practical grasp.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Coding Background Video](https://www.youtube.com/playlist?list=PLp2zTInxCVPSO4f1RxgVnUUTgnarc8f2e) — SJ Abd · 15 videos · 0.9h across the first 13 episodes

**Watch only this:** First 7 episodes, about 30 minutes — enough to gain a practical understanding of coding concepts relevant to Boolean tensor decomposition.

*Why it unblocks this paper:* This Coding Background Video playlist by SJ Abd offers short, clear videos that quickly build intuition about coding and algorithmic thinking, which are essential for grasping Boolean tensor decomposition and the generalized color-coding technique presented in the paper.

*If you want all of it:* Approximately 0.9 hours across the first 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Boolean Tensor Decomposition for Conjunctive Queries with Negation," start by building foundational knowledge on conjunctive queries with negation and the color-coding technique, as these are central to the paper's approach. Next, grasp the bounded-degree relations concept in databases, which underpins the complexity assumptions. Then, study the advanced query evaluation algorithms InsideOut and PANDA that the paper leverages. Finally, focus on the core concept of Boolean tensor decomposition and the authors' own related talks to connect all ideas and appreciate the novel contributions.

### Conjunctive queries with negation *(prerequisite)*
Understanding conjunctive queries with negation is essential because the paper targets efficient evaluation of such queries. This video by Dan Olteanu, one of the paper's co-authors, provides an advanced seminar-level treatment on the complexity and evaluation of queries with negation, directly relevant to the research problem.

*How the paper uses it:* The paper focuses on efficient evaluation of conjunctive queries that include negations on bounded-degree relations.

▶ [A Dichotomy for Queries with Negation in Probabilistic Databases](https://www.youtube.com/watch?v=G5KoZ-84Wko) — Simons Institute for the Theory of Computing · 42:30 · Streamed 10y ago

### Color-coding technique *(prerequisite)*
The color-coding technique is a key algorithmic tool generalized in the paper to handle conjunctions of not-all-equal predicates. Noga Alon's lecture provides a rigorous and foundational presentation of color coding, balanced hashing, and approximate counting, which will help understand the paper's generalization and Boolean tensor decomposition interpretation.

*How the paper uses it:* The paper generalizes the color-coding technique to conjunctions of NAE predicates via Boolean tensor decomposition.

▶ [Noga Alon: Color Coding, Balanced Hashing and Approximate Counting](https://www.youtube.com/watch?v=_7LCbBofH34) — The Open University of Israel · 46:16 · 15y ago

### Bounded-degree relations in databases *(prerequisite)*
Bounded-degree relations are a critical assumption in the paper to control the complexity of negations in queries. This lecture from Gate Smashers covers database fundamentals including relationships and degrees, providing the necessary background to understand the bounded-degree constraints used in the paper.

*How the paper uses it:* The approach relies on bounded-degree assumptions for negated relations to control complexity.

▶ [Concept of Relationships in ER Diagram](https://www.youtube.com/watch?v=n3mHfQft5P8) — Neso Academy · 15:06 · 5y ago

### Query evaluation algorithms InsideOut and PANDA *(prerequisite)*
InsideOut and PANDA are advanced query evaluation algorithms combined with the paper's tensor decomposition approach to achieve efficient evaluation. Although direct talks on these algorithms are scarce, understanding advanced data analysis and query operations in Python Pandas can provide some conceptual grounding in data querying and manipulation at a higher level.

*How the paper uses it:* These advanced algorithms are combined with the tensor decomposition to achieve efficient evaluation.

▶ [Accessing Answers to Unions of Conjunctive Queries with Ideal Time Guarantees: II](https://www.youtube.com/watch?v=-U3T8FNr628) — Simons Institute for the Theory of Computing · 19:05 · Streamed 3y ago

### Boolean tensor decomposition
Boolean tensor decomposition is the core methodological innovation in the paper, used to generalize color-coding and handle conjunctions of NAE predicates. The Simons Institute talk by Sham Kakade offers a deep and rigorous exploration of tensor decompositions in computer science, providing the theoretical foundation necessary to understand the paper's approach.

*How the paper uses it:* Central method used to generalize color-coding and handle conjunctions of NAE predicates.

▶ [Tensor Decompositions for Estimating Latent Variable Models](https://www.youtube.com/watch?v=lk2XV03GldE) — Simons Institute for the Theory of Computing · 55:35 · 11y ago

### Paper authors talk
The authors' own talks provide the most direct and precise exposition of their work. Although no direct talk on this exact paper was found, the related tensor decomposition talks from the Simons Institute by Luke Oeding offer advanced insights into tensor decomposition techniques relevant to the paper's Boolean tensor decomposition approach.

*How the paper uses it:* Directly targets the authors' own presentation of the paper for the most precise understanding.

▶ [Tensor Decomposition I](https://www.youtube.com/watch?v=F-eORHovOe0) — Simons Institute for the Theory of Computing · 1:09:15 · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand efficient evaluation of conjunctive queries with negation in databases, focusing on bounded-degree relations and advanced algorithmic techniques. We start with the basics of conjunctive queries and negation in databases, then cover bounded-degree relations, followed by the color-coding technique and query evaluation algorithms (InsideOut and PANDA). Finally, we explore Boolean tensor decomposition, the core method used in the paper to generalize color-coding for handling negations efficiently.

### Conjunctive queries with negation *(prerequisite)*
Conjunctive queries are a fundamental class of database queries involving conjunctions (ANDs) of conditions. Adding negation makes these queries more expressive but also computationally challenging. Understanding how negation affects query evaluation is key to grasping the paper's problem and approach.

*How the paper uses it:* The paper targets efficient evaluation of conjunctive queries that include negations on bounded-degree relations.

▶ [Direct Access for Conjunctive Queries with Negation](https://www.youtube.com/watch?v=2fpABQyyw1E) — Simons Institute for the Theory of Computing · 53:26 · Streamed 3y ago

### Bounded-degree relations in databases *(prerequisite)*
Bounded-degree relations limit the number of tuples sharing a common attribute value, which helps control the complexity of query evaluation. This concept is important because the paper's approach relies on this assumption to efficiently rewrite and evaluate queries with negation.

*How the paper uses it:* The approach depends on bounded-degree assumptions for negated relations to manage complexity.

▶ [Concept of Relationships in ER Diagram](https://www.youtube.com/watch?v=n3mHfQft5P8) — Neso Academy · 15:06 · 5y ago

### Color-coding technique *(prerequisite)*
Color-coding is a randomized algorithmic technique used to find small substructures in graphs by randomly coloring elements and looking for 'colorful' patterns. The paper generalizes this technique to handle conjunctions of not-all-equal predicates, which is crucial for rewriting queries with negation.

*How the paper uses it:* The paper generalizes the color-coding technique to conjunctions of not-all-equal predicates via Boolean tensor decomposition.

▶ [Noga Alon: Color Coding, Balanced Hashing and Approximate Counting](https://www.youtube.com/watch?v=_7LCbBofH34) — The Open University of Israel · 46:16 · 15y ago

### Boolean tensor decomposition
Boolean tensor decomposition breaks down complex Boolean tensors into simpler components, enabling efficient computation of conjunctions of predicates. This method underpins the paper's novel generalization of color-coding and rewriting of queries with negation.

*How the paper uses it:* The core method in the paper interprets generalized color-coding as a Boolean tensor decomposition problem for conjunctions of not-all-equal predicates.

▶ [Tensor Decompositions for Estimating Latent Variable Models](https://www.youtube.com/watch?v=lk2XV03GldE) — Simons Institute for the Theory of Computing · 55:35 · 11y ago

## Already in your library

- [Orthogonal Tensor Decomposition](https://www.youtube.com/watch?v=I6vOHGoyUJg) — also for: Designing 3D Anisotropic Frame Fields with Odeco Tensors (Zichun Zhong)
- [1. Introduction to Algorithms](https://www.youtube.com/watch?v=0IAPZzGSbME) — also for: Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model (Yakov Nekrich)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the paper "Boolean Tensor Decomposition for Conjunctive Queries with Negation." Starting with a small-scale implementation of query rewriting to not-all-equal predicates, you then reimplement the core Boolean tensor decomposition method and compare it to a baseline. Finally, you extend the approach to address one of the paper's limitations related to unbounded-degree negated relations, exploring heuristics or approximations.

### Beginner — Query Rewriting with Not-All-Equal Predicates
*Effort: a weekend, ~8 hours*

You build a small tool that takes simple conjunctive queries with negations on bounded-degree relations and rewrites them into equivalent queries using not-all-equal (NAE) predicates, following the rewriting method described in Proposition 4.3 of the paper. The tool will parse a query, perform the rewriting, and output the rewritten queries.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key rewriting step that enables efficient evaluation of queries with negation by transforming them into queries with NAE predicates, a foundational contribution of the paper.

**Grounded in:** Proposition 4.3 shows the linear-time rewriting of queries with negation into disjunctions of queries with NAE predicates.

**Tech stack:** Python 3.11

**Data:** You simulate small synthetic conjunctive queries with negations on bounded-degree relations; no external dataset is needed.

**Build it:**

1. Implement a parser for simple conjunctive queries with negations on relations with bounded degree.
2. Implement the rewriting algorithm to transform negations into disjunctions of queries with not-all-equal predicates as per Proposition 4.3.
3. Generate and output the rewritten queries in a readable format.
4. Test the tool on several handcrafted example queries to verify correctness.

**Ships as:** A Python command-line tool with example queries and their rewritten forms in the README.

**Stretch goal:** Add a visualization of the query rewriting process showing how negations are untangled into NAE predicates.

### Intermediate — Boolean Tensor Decomposition for NAE Predicate Conjunctions
*Effort: 2 weekends, ~20 hours*

You reimplement the core Boolean tensor decomposition method for conjunctions of not-all-equal predicates as described in Section 5 and Lemma 5.1. You apply this method to evaluate rewritten queries on small synthetic bounded-degree relational data, and compare the evaluation time and correctness against a naive baseline that evaluates the original negated query directly.

**Why it shows you understood the paper:** This project shows you understood the paper's main technical contribution: generalizing color-coding via Boolean tensor decomposition to efficiently evaluate queries with negation, and how this improves data complexity compared to naive evaluation.

**Grounded in:** Section 5 and Lemma 5.1 describe the Boolean tensor decomposition and its connection to generalized color-coding.

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic bounded-degree relational data generated to simulate small relations with negations; no public dataset is specified in the paper.

**Build it:**

1. Implement a generator for synthetic bounded-degree relational data with small arity and degree.
2. Implement the Boolean tensor decomposition construction for conjunctions of NAE predicates following the paper's probabilistic method.
3. Implement a naive baseline evaluator that directly evaluates the original conjunctive query with negations.
4. Compare evaluation time and correctness of your decomposition-based evaluator against the baseline on multiple test queries.
5. Document the results and analysis in the README.

**Ships as:** A Python package with scripts to generate data, evaluate queries using both methods, and a README reporting comparison results.

**Stretch goal:** Implement the derandomization step for the Boolean tensor decomposition using strongly explicit function families as per Theorem 5.6(b).

### Advanced — Heuristic Evaluation of Queries with Unbounded-Degree Negations
*Effort: 3+ weeks*

You develop and implement heuristic or approximation methods to extend the paper's approach to conjunctive queries with negations on unbounded-degree relations, addressing one of the paper's stated limitations. You design heuristics to control the exponential growth in rewritten queries and evaluate their effectiveness on synthetic or real-world datasets, reporting empirical performance and complexity trade-offs.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep comprehension of the theoretical approach and its practical challenges, and contributing an original extension that could inform real-world query optimization.

**Grounded in:** Developing approximation or heuristic methods to handle unbounded-degree negated relations is a stated future direction.

**Tech stack:** Python 3.11, NumPy, Pandas, Matplotlib

**Data:** Synthetic relational data with unbounded-degree negated relations generated to test heuristics; optionally, small real-world datasets with negation-like constraints if available.

**Build it:**

1. Review the paper's rewriting and decomposition approach and identify the bottlenecks caused by unbounded-degree negations.
2. Design heuristic methods to limit the number of rewritten queries, such as pruning, sampling, or approximate rewriting.
3. Implement these heuristics integrated with your Boolean tensor decomposition evaluator from the intermediate project.
4. Generate or obtain datasets with unbounded-degree negated relations to test your heuristics.
5. Evaluate and compare the heuristics' impact on query complexity, runtime, and accuracy.
6. Document your methodology, results, and insights in a detailed README.

**Ships as:** A Python repository with heuristic implementations, evaluation scripts, and a comprehensive report on empirical findings.

**Stretch goal:** Explore integration of your heuristics into a simple query optimizer prototype that chooses rewriting strategies based on query structure.
