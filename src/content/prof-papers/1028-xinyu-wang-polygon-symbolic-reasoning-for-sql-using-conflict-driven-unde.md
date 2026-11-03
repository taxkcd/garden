---
title: "1028 · Polygon: Symbolic Reasoning for SQL using Conflict-Driven Under-Approximation Search — Xinyu Wang"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xinyu-wang"
source_hash: "cae022e3fe0a48803642518f66c38b11da53aab923029710434236cffb8ba4a7"
sequence: 1028
generator: "outreach-garden: managed"
---

# 1028 · Polygon: Symbolic Reasoning for SQL using Conflict-Driven Under-Approximation Search

## At a glance

- **Professor:** Xinyu Wang
- **Institution:** University of Michigan
- **Paper:** [Polygon: Symbolic Reasoning for SQL using Conflict-Driven Under-Approximation Search](https://web.eecs.umich.edu/~xwangsd/pubs/pldi25.pdf)
- **Authors:** Pinhan Zhao, Yuepeng Wang, Xinyu Wang
- **Year:** 2025

## Paper overview

This paper introduces Polygon, a novel symbolic reasoning engine for SQL queries that efficiently generates inputs to test multiple SQL queries against a given property. It uses a new approach called conflict-driven under-approximation search, which reasons about subsets of query behaviors to quickly find distinguishing inputs or counterexamples. Polygon significantly outperforms existing methods on large benchmark sets for SQL equivalence refutation and query disambiguation.

### Why it matters

**Research problem:** How to efficiently generate inputs for multiple SQL queries such that their outputs satisfy a given property, enabling tasks like disproving query equivalence and query disambiguation, while handling the complex semantics of SQL in a scalable manner.

**Why it matters:** SQL query equivalence checking and disambiguation are fundamental for database optimization, automated grading of queries, query rewriting validation, and example-based query synthesis. Existing methods either ignore SQL semantics leading to incompleteness or fully encode semantics causing scalability issues.

**Key contributions:**

- Development of a new symbolic reasoning engine for SQL based on under-approximate reasoning.
- Formulation of the reasoning task as an under-approximation search problem.
- A compositional method to define the search space of under-approximations for SQL operators.
- Design of an efficient conflict-driven algorithm for searching under-approximations.
- Implementation and evaluation of Polygon on over 30,000 benchmarks demonstrating significant performance improvements.

## About the professor

**Xinyu Wang** — Assistant Professor, Computer Science and Engineering, University of Michigan.

Research interests: programming languages, formal methods, software engineering, and artificial intelligence

### Research links

- [Faculty/profile page](https://web.eecs.umich.edu/~xwangsd)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Symbolic Reasoning and Formal Methods
**The paper assumes:** symbolic reasoning, formal methods, program semantics, and conflict-driven search algorithms
**Already in this field?** Skip this entirely if you already have a solid understanding of symbolic program analysis and formal methods for reasoning about program correctness and semantics.

To understand the core methods in the paper 'Polygon: Symbolic Reasoning for SQL using Conflict-Driven Under-Approximation Search,' a solid grasp of symbolic reasoning and formal methods is essential. The rigorous course option offers a deep and structured university-level introduction to formal methods for system verification, ideal for thorough comprehension. The fast track provides a concise, intuition-focused series on formal sciences and symbolic reasoning, suitable for a quicker but still meaningful background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 58 videos · 30.9h across 58 episodes

**Watch only this:** Lectures 1 through 15 (Lec 1: Formal Methods for System Verification: Course Introduction through Lec 15: SAT Encoding Example - Logic Locking), about 7.75 hours — these cover formal methods basics, propositional logic, SAT solving, and conflict analysis essential for understanding the paper's methods.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Formal Methods for System Verification covers foundational topics such as propositional logic, SAT solvers, decision heuristics, and conflict analysis, which directly relate to the paper's conflict-driven search and symbolic reasoning approach.

*If you want all of it:* 58 episodes, about 30.9 hours total

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [_Mathematics and Formal Science 🧮](https://www.youtube.com/playlist?list=PL_nmTFv_49Oath0QN3Q4vIci28dsUECag) — Harrison Chamberlain · 8 videos · 1.0h across 8 episodes

**Watch only this:** Episodes 1 through 5 (Solve any Square Root in 3 Sec, Every Number Explained in 6 minutes, Square Root of Any Number in 3 seconds, Every Important Math Constant Explained Simply, The 7 Levels of Pure Mathematics), about 35 minutes total — these build a quick intuition for formal symbolic reasoning and mathematical abstraction.

*Why it unblocks this paper:* This short series on Mathematics and Formal Science by Harrison Chamberlain provides a clear, visual introduction to formal sciences and symbolic reasoning, giving intuition and foundational understanding relevant to the paper's symbolic reasoning and formal methods.

*If you want all of it:* 8 episodes, about 1.0 hour total

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Polygon paper, start by grounding yourself in the foundational concepts of SQL query equivalence and semantics, which define the problem domain. Next, study lattice theory as it underpins the mathematical structure of the search space used in the paper. Then, explore symbolic reasoning for program analysis to grasp the general techniques Polygon builds upon. Following these prerequisites, delve into the conflict-driven under-approximation search method, the core algorithmic innovation enabling Polygon's efficiency. Finally, conclude with the authors' own talk or a closely related advanced seminar to gain direct insight into the Polygon system and its contributions.

### SQL query equivalence and semantics *(prerequisite)*
Understanding SQL query equivalence and semantics is essential to grasp the problem Polygon addresses: efficiently disproving equivalence and disambiguating queries. The selected university-level lecture from the Database Systems Research Group at U Tübingen provides an advanced, research-oriented treatment of SQL evaluation order and recursion, which are critical to the paper's formal semantic modeling.

*How the paper uses it:* Polygon targets SQL equivalence refutation and query disambiguation, requiring deep understanding of SQL semantics.

▶ [Advanced SQL — Chapter 02 — Video #11 — SQL reading vs. evaluation order, CTEs (WITH)](https://www.youtube.com/watch?v=dJaLIQks7iY) — Database Systems Research Group at U Tübingen · 6 yr ago

### Lattice theory in program analysis *(prerequisite)*
Lattice theory provides the mathematical framework for structuring the search space of under-approximations in Polygon. The chosen lecture from the Simons Institute offers a rigorous academic treatment of lattices, suitable for advanced readers seeking to understand the lattice structures that underpin the conflict-driven search algorithm.

*How the paper uses it:* Polygon's search space of under-approximations is organized as a lattice, enabling efficient conflict-driven search.

▶ [Lattices with Symmetry](https://www.youtube.com/watch?v=Pz0xnHOUzPs) — Simons Institute for the Theory of Computing · 44:13 · 11y ago

### Symbolic reasoning for program analysis *(prerequisite)*
Symbolic reasoning techniques form the foundation for Polygon's approach to reasoning about SQL queries. The talk from the Simons Institute on symbolic reasoning about large language models is a recent, research-level seminar that discusses symbolic algorithms for logical deduction, providing relevant background on symbolic reasoning frameworks applicable to program analysis.

*How the paper uses it:* Polygon is a symbolic reasoning engine applying formal methods to SQL query analysis.

▶ [Symbolic Reasoning about Large Language Models](https://www.youtube.com/watch?v=yo8HtAbUynA) — Simons Institute for the Theory of Computing · 45:00 · Streamed 1y ago

### Conflict-driven under-approximation search
This concept is the core algorithmic innovation in Polygon, enabling efficient search over under-approximations to find counterexamples or distinguishing inputs. The Microsoft Research talk on unifying under- and over-approximation approaches in software model checking provides a deep, technical perspective on under-approximation-driven methods, closely related to the conflict-driven search strategy used in Polygon.

*How the paper uses it:* Polygon's conflict-driven under-approximation search algorithm is central to its performance gains.

▶ [From Under-approximations to Over-approximations and Back](https://www.youtube.com/watch?v=jtomtcVjuUw) — Microsoft Research · 1:13:41 · 10y ago

### Polygon symbolic reasoning talk *(paper-talk search result; attribution unverified)*
The authors' own talk or a direct presentation on Polygon would provide the most precise and insightful explanation of their novel approach. Unfortunately, no direct talk by the authors on this exact work is available among the candidates. The closest relevant advanced seminar is the neuro-symbolic reasoning talk by Jiayuan Mao at MIT, which, while not about Polygon specifically, covers compositional symbolic reasoning frameworks that align with the paper's methodology.

*How the paper uses it:* Direct insight from the authors or closely related neuro-symbolic reasoning talks illuminate Polygon's design and contributions.

▶ [Learning, Reasoning, and Planning with Neuro-Symbolic Concepts–Jiayuan Mao (MIT)](https://www.youtube.com/watch?v=g3-uFiCQ_KI) — Paul G. Allen School · 1:03:32 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Polygon paper, start by building a foundation in SQL query equivalence and semantics to grasp the problem domain. Next, learn about symbolic reasoning for program analysis, which underpins the paper's approach to reasoning about SQL queries. Then, study lattice theory as it provides the mathematical structure for the search space of under-approximations. Finally, focus on the core concept of conflict-driven under-approximation search, the novel method enabling efficient symbolic reasoning in Polygon.

### SQL query equivalence and semantics *(prerequisite)*
This concept covers how SQL queries are executed and how their semantics determine equivalence or differences in output. Understanding SQL execution order, recursion, and query optimization helps grasp why checking equivalence is challenging. It sets the stage for why symbolic reasoning is needed to analyze SQL queries rigorously.

*How the paper uses it:* The paper addresses SQL query equivalence and disambiguation, so understanding SQL semantics is essential to appreciate the problem Polygon solves.

▶ [Automated Reasoning of Database Queries](https://www.youtube.com/watch?v=-eMyqtrkAiA) — Microsoft Research · 7 yr ago

### Symbolic reasoning for program analysis *(prerequisite)*
Symbolic reasoning involves representing program behaviors abstractly to analyze and verify properties without enumerating all inputs. This foundation explains how symbolic execution and reasoning can be used to check program equivalence or find counterexamples efficiently.

*How the paper uses it:* Polygon uses symbolic reasoning to analyze SQL queries and generate inputs that distinguish query behaviors.

▶ [Symbolic Reasoning about Large Language Models](https://www.youtube.com/watch?v=yo8HtAbUynA) — Simons Institute for the Theory of Computing · 45:00 · Streamed 1y ago

### Lattice theory in program analysis *(prerequisite)*
Lattice theory provides a mathematical framework to organize and navigate abstract representations of program behaviors, such as under-approximations. Understanding lattices helps in grasping how the search space of approximations is structured and efficiently explored.

*How the paper uses it:* Polygon’s conflict-driven search operates over a lattice-structured space of under-approximations, balancing precision and scalability.

▶ [Lattice | What is lattice | Discrete Mathematics in Hindi](https://www.youtube.com/watch?v=LVxZ1ctkNvk) — Sandeep Kumar Gour · 12:37 · 5y ago

### Conflict-driven under-approximation search
This method iteratively searches for subsets of program behaviors that satisfy a property by resolving conflicts, enabling efficient symbolic reasoning. It is a key innovation that allows Polygon to quickly find distinguishing inputs for SQL queries.

*How the paper uses it:* Conflict-driven under-approximation search is the core algorithmic contribution of Polygon, enabling scalable and precise SQL query analysis.

▶ [CPTAI 2020 Conflict analysis in CP solving: Explanation generation from constraint decomposition](https://www.youtube.com/watch?v=s0zqcsKr3uc) — Int'l Conference on Principles and Practice of CP · 17:38 · 6y ago

## Already in your library

- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)
- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)
- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)
- [Lec 03. Approximation Theory](https://www.youtube.com/watch?v=ySaoWrv3T_Q) — also for: TOKEN SWAP: A Lightweight Method to Disrupt Memorized Sequences in LLMs (Babak Salimi)
- [A Constant-Factor Approximation Algorithm for the Asymmetric Traveling Salesman Problem](https://www.youtube.com/watch?v=EMgzeyOidCw) — also for: Semidefinite Programming Relaxations of the Traveling Salesman Problem and Their Integrality Gaps (David P. Williamson)
- [Taylor series | Chapter 11, Essence of calculus](https://www.youtube.com/watch?v=3d6DsjIBzJ4) — also for: Trace reconstruction from local statistical queries (Chin Ho Lee)
- [Guy Van den Broeck - Symbolic Reasoning in the Age of Large Language Models](https://www.youtube.com/watch?v=OtmiJRTljzs) — also for: Language Model Behavior: A Comprehensive Survey (Ben Bergen)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Polygon's conflict-driven under-approximation search for SQL query reasoning. The beginner project recreates a core concept of under-approximation on simple SQL queries using familiar tools. The intermediate project implements a simplified version of the conflict-driven search algorithm to refute SQL query equivalence on a small benchmark, comparing against a baseline random input generator. The advanced project extends the method to handle dynamic or streaming data inputs, addressing one of the paper's future directions and limitations.

### Beginner — Under-Approximation Reasoning for Simple SQL Queries
*Effort: a weekend, ~8 hours*

You build a small symbolic reasoning tool that models under-approximations of simple SQL queries (e.g., SELECT-FROM-WHERE with basic predicates). The tool enumerates subsets of input tables and simulates query outputs under these under-approximations to find distinguishing inputs between two queries.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's core idea of under-approximate reasoning and how it can be used to reason about subsets of query behaviors to find counterexamples efficiently.

**Grounded in:** Development of a new symbolic reasoning engine for SQL based on under-approximate reasoning.

**Tech stack:** Python 3.11, SQLite, Jupyter Notebook

**Data:** You create small synthetic SQL tables and queries manually to simulate input-output behaviors as the paper does for under-approximation examples.

**Build it:**

1. Implement a parser or use SQLite to parse and execute simple SQL queries on small input tables.
2. Define under-approximations as subsets of input rows or simplified predicates.
3. Simulate query execution under these under-approximations to generate outputs.
4. Compare outputs of two queries under various under-approximations to find distinguishing inputs.
5. Document the approach and illustrate with examples how under-approximation helps find counterexamples.

**Ships as:** A Jupyter notebook and Python scripts showing under-approximation reasoning on simple SQL queries with examples and explanations.

**Stretch goal:** Add visualization of the lattice structure of under-approximations and how the search space is explored.

### Intermediate — Conflict-Driven Under-Approximation Search for SQL Equivalence Refutation
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified version of the conflict-driven under-approximation search algorithm described in the paper to refute equivalence of pairs of SQL queries. You evaluate it on a small set of SQL query pairs and compare its performance against a baseline random input generator.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core algorithmic contribution and evaluate its effectiveness on SQL equivalence refutation, reproducing the paper's key result on a smaller scale.

**Grounded in:** A compositional method to define the search space of under-approximations for SQL operators and design of an efficient conflict-driven algorithm for searching under-approximations.

**Tech stack:** Python 3.11, SQLite, Pandas

**Data:** You use a small curated set of SQL query pairs with known equivalence or non-equivalence, created manually or adapted from public SQL benchmarks as a substitute for the paper's benchmarks.

**Build it:**

1. Implement a parser and executor for a subset of SQL queries using SQLite or a Python SQL engine.
2. Define under-approximation families for SQL operators (e.g., selection predicates, joins) as subsets of input data or simplified predicates.
3. Implement the conflict-driven search algorithm to explore under-approximation maps over query AST nodes.
4. Run the algorithm on query pairs to find distinguishing inputs or prove equivalence under the under-approximation.
5. Implement a baseline random input generator that generates random tables to test query equivalence.
6. Compare the conflict-driven search's solving time and success rate against the baseline.
7. Document the implementation details, evaluation results, and insights.

**Ships as:** A Python project with scripts to run conflict-driven under-approximation search on SQL query pairs, evaluation results comparing it to random testing, and a detailed README.

**Stretch goal:** Extend the implementation to handle more complex SQL operators or larger input tables.

### Advanced — Extending Conflict-Driven Under-Approximation Search to Streaming SQL Queries
*Effort: a few weeks, ~60+ hours*

You develop an extension of the conflict-driven under-approximation search framework to handle SQL queries over dynamic or streaming data inputs. This involves adapting the under-approximation definitions and search algorithm to incrementally reason about continuously changing input tables and outputs.

**Why it shows you understood the paper:** This project tackles one of the paper's stated future directions and limitations, demonstrating deep understanding by applying the core method to a new domain and proposing novel algorithmic adaptations.

**Grounded in:** Future direction: How might the conflict-driven under-approximation search framework be adapted or extended to handle dynamic or streaming data scenarios where SQL queries operate over continuously changing inputs?

**Tech stack:** Python 3.11, SQLite, Apache Kafka or a lightweight streaming simulator, Pandas

**Data:** You simulate streaming data by generating sequences of incremental table updates and queries over them, as no streaming SQL benchmark is provided.

**Build it:**

1. Review the conflict-driven under-approximation search algorithm and identify components requiring adaptation for streaming data.
2. Design incremental under-approximation representations that can update efficiently as new data arrives.
3. Implement a prototype system that ingests streaming data updates and incrementally updates under-approximation maps and conflict-driven search state.
4. Create a set of streaming SQL queries over simulated data streams to test the system.
5. Evaluate the system's ability to find distinguishing inputs or refute equivalence in a streaming context compared to a naive batch re-execution baseline.
6. Document the design, implementation challenges, evaluation results, and potential improvements.

**Ships as:** A prototype Python system demonstrating incremental conflict-driven under-approximation search for streaming SQL queries, with evaluation scripts and a comprehensive README.

**Stretch goal:** Integrate with an actual streaming platform like Apache Kafka and extend to support more expressive SQL features.
