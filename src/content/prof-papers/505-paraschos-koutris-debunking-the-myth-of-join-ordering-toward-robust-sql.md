---
title: "505 · Debunking the Myth of Join Ordering: Toward Robust SQL Analytics — Paraschos Koutris"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-paraschos-koutris"
source_hash: "5a62072ea92e63954b62f6b14dc34845e171ad1be4ca301c654e648e1ae1c12c"
sequence: 505
generator: "outreach-garden: managed"
---

# 505 · Debunking the Myth of Join Ordering: Toward Robust SQL Analytics

## At a glance

- **Professor:** Paraschos Koutris
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Debunking the Myth of Join Ordering: Toward Robust SQL Analytics](https://arxiv.org/pdf/2502.15181)
- **Authors:** Junyi Zhao, Kai Su, Yifei Yang, Xiangyao Yu, Paraschos Koutris, Huanchen Zhang
- **Year:** 2025

## Paper overview

This paper addresses the challenge of join order optimization in SQL query processing, which is critical for query performance but remains difficult due to cardinality estimation errors and large plan search spaces. The authors propose Robust Predicate Transfer (RPT), a new algorithm that guarantees robust query execution performance regardless of join order for acyclic queries. They implement RPT in DuckDB and demonstrate significant improvements in robustness and speed across standard benchmarks.

### Why it matters

**Research problem:** Modern query optimizers often generate suboptimal join orders leading to query execution times that are orders of magnitude slower than optimal. Existing robust query processing techniques either lack theoretical guarantees or sacrifice performance. The problem is to design a join processing method that is robust to join order variations and cardinality estimation errors, especially for acyclic queries.

**Why it matters:** Join order optimization is a core challenge in relational database management systems, directly impacting query performance. Poor join orders cause large intermediate results and slow queries. Improving robustness against join order and cardinality estimation errors can make query optimizers more reliable and efficient, benefiting a wide range of data management applications.

**Key contributions:**

- Proposed LargestRoot algorithm to generate a transfer schedule guaranteeing full semi-join reduction for acyclic queries.
- Developed SafeSubjoin algorithm to verify safe join orders ensuring bounded intermediate result sizes.
- Introduced Robust Predicate Transfer (RPT) algorithm with theoretical robustness guarantees against arbitrary join orders for acyclic queries.
- Implemented RPT in DuckDB with new Bloom filter operators and optimizer integration.
- Provided extensive experimental evaluation on TPC-H, JOB, TPC-DS, and DSB benchmarks demonstrating improved robustness and performance.

## About the professor

**Paraschos Koutris** — Associate Professor, Database Group, University of Wisconsin - Madison.

Research interests: data management, data processing for massively parallel systems, data markets, efficient data structures, managing uncertain data

### Research links

- [Faculty/profile page](http://pages.cs.wisc.edu/~paris)
- [Resolved homepage](https://pages.cs.wisc.edu/~paris/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Database Query Optimization
**The paper assumes:** relational database query optimization, join order algorithms, semi-join reduction techniques, query execution plans
**Already in this field?** Skip this entirely if you have prior coursework or practical experience in relational database systems focusing on query optimization and join processing.

This background playlist selection is designed to provide foundational knowledge on database query optimization, specifically join order optimization and semi-join reductions, which are crucial to understanding the Robust Predicate Transfer (RPT) technique in the paper. The rigorous course offers a deep, structured university-level treatment, while the fast track provides a more time-efficient but still comprehensive introduction to the core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Special Topics in Database: Query Optimization (15-799 - Spring 2025)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYCZfIbmEWH7f6MnYqyPwCE) — CMU Database Group · 14 videos · 16.9h across 14 episodes

**Watch only this:** Episodes #06 - Query Plan Transformations (72 min), #07 - Join Ordering: Bottom-up (72 min), #08 - Join Ordering: Top-Down / Transformational (72 min), #12 - Query Cost Models: Cardinality Estimation (72 min); about 4.8 hours total. These episodes cover join ordering techniques and cardinality estimation, the key background for this paper.

*Why it unblocks this paper:* This CMU Special Topics in Database: Query Optimization (15-799 - Spring 2025) playlist focuses explicitly on query optimization, join ordering, and cost models, directly aligning with the paper's core research problem and algorithms. It covers foundational and advanced topics in join ordering strategies and cardinality estimation, essential for understanding the theoretical and practical contributions of RPT.

*If you want all of it:* 16.9 hours across all 14 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CMU Intro to Database Systems (15-445/645 - Fall 2024)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq) — CMU Database Group · 26 videos · 33.9h across 26 episodes

**Watch only this:** Episodes #12 - Join Algorithms: Hash, Sort-Merge, Nested Loop Joins (78 min) and #15 - Query Planning & Optimization (78 min); about 2.6 hours total. These episodes cover join algorithms and query optimization basics needed to grasp the paper's context.

*Why it unblocks this paper:* The CMU Intro to Database Systems (15-445/645 - Fall 2024) playlist provides a well-produced, comprehensive introduction to database systems with focused episodes on join algorithms and query optimization. It offers a clear and accessible overview of join algorithms and query planning, which are foundational to understanding the paper's contributions, but in a shorter, more approachable format.

*If you want all of it:* 33.9 hours across all 26 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Debunking the Myth of Join Ordering: Toward Robust SQL Analytics,' start by building a solid foundation on join order optimization, semi-join reduction, acyclic join queries, and Bloom filters in query processing, as these are critical prerequisites for grasping the paper's contributions. After establishing this background, focus on the core concept of Robust Predicate Transfer, the central algorithm proposed by the paper, through the authors' own detailed talk to gain direct insight into their approach and results.

### Join order optimization *(prerequisite)*
Join order optimization is fundamental to understanding the challenges that the paper addresses. It involves strategies to determine the sequence in which joins are executed to minimize intermediate result sizes and overall query execution time. This foundational knowledge sets the stage for appreciating why robustness to join order is critical.

*How the paper uses it:* The paper targets the problem of suboptimal join orders causing large performance variability and aims to design robust join processing methods.

▶ [#07 - Join Ordering: Bottom-up (CMU Optimize!)](https://www.youtube.com/watch?v=CcUVvnYv7Hg) — CMU Database Group · 1:08:22 · 1 year ago

### Semi-join reduction *(prerequisite)*
Semi-join reduction is a key technique used in the paper's Robust Predicate Transfer algorithm to reduce the size of intermediate results by filtering tuples early. Understanding how semi-joins work and their role in query optimization is essential to grasp the paper's approach to robustness.

*How the paper uses it:* The paper uses semi-join reductions implemented via Bloom filters to guarantee robustness against join order variations.

▶ [Semi-Joins in PostgreSQL (PGConf.dev 2026)](https://www.youtube.com/watch?v=_Efq0O_QOXw) — PostgreSQL Development Conference · 22:50 · 3 weeks ago

### Acyclic join queries *(prerequisite)*
Acyclic join queries form the theoretical foundation for the robustness guarantees provided by the paper's algorithm. These queries have a join graph without cycles, allowing certain optimizations and guarantees that do not hold in cyclic cases.

*How the paper uses it:* The paper's Robust Predicate Transfer algorithm guarantees robustness specifically for acyclic queries.

▶ [Joins 4: Result Computation of Acyclic Joins](https://www.youtube.com/watch?v=KPkQihL0l54) — Yufei Tao · 53:08 · 3 months ago

### Bloom filters in query processing *(prerequisite)*
Bloom filters are probabilistic data structures used to efficiently test set membership with space efficiency, which the paper leverages to implement semi-join reductions efficiently. Understanding Bloom filters is important to appreciate the practical implementation of the proposed algorithm.

*How the paper uses it:* The paper integrates Bloom filter operators into DuckDB to efficiently implement semi-join reductions in Robust Predicate Transfer.

▶ [The Bloom filter](https://www.youtube.com/watch?v=947gWqwkhu0) — Google TechTalks · 47:41 · 18 years ago

### Robust Predicate Transfer talk
This is the authors' own detailed presentation of the Predicate Transfer technique, including the new Robust Predicate Transfer algorithm, its theoretical foundations, implementation details, and experimental results. It provides the most direct and comprehensive insight into the paper's contributions.

*How the paper uses it:* This talk by co-author Yifei Yang directly explains the core algorithm and evaluation of the paper.

▶ [Yifei Yang | Predicate Transfer: Efficient Pre-Filtering on Multi-Join Queries | #48](https://www.youtube.com/watch?v=tSu29BCwtBQ) — Disseminate: The Computer Science Research Podcast · 47:38 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Robust Predicate Transfer (RPT) for robust SQL analytics, start by learning the fundamentals of join order optimization in databases, which is crucial for query performance. Next, grasp the concept of semi-join reduction, a key technique to reduce intermediate data sizes and improve robustness. Then, study acyclic join queries, the theoretical foundation for RPT's guarantees. Finally, explore Bloom filters, which are used in RPT's implementation, and conclude with the core Robust Predicate Transfer algorithm itself.

### Join order optimization *(prerequisite)*
Join order optimization is about deciding the sequence in which tables are joined in a SQL query to minimize intermediate result sizes and improve query speed. Understanding this helps appreciate why some join orders cause slow queries and why robustness to join order matters.

*How the paper uses it:* The paper addresses the challenge that poor join orders cause large intermediate results and slow queries, motivating robust join processing.

▶ [022 join order optimization fundamentals](https://www.youtube.com/watch?v=5PxAmNud03k) — dbislab · 11:46 · 5 years ago

### Semi-join reduction *(prerequisite)*
Semi-join reduction is a technique that filters data early in the join process to reduce the size of intermediate results, improving efficiency. It works by passing only relevant tuples between tables before the full join.

*How the paper uses it:* RPT uses semi-join reductions to guarantee bounded intermediate result sizes regardless of join order.

▶ [Semi-Joins in PostgreSQL (PGConf.dev 2026)](https://www.youtube.com/watch?v=_Efq0O_QOXw) — PostgreSQL Development Conference · 22:50 · 3 weeks ago

### Acyclic join queries *(prerequisite)*
Acyclic join queries are those whose join graph forms a tree without cycles, enabling certain theoretical guarantees for query processing. Understanding acyclicity is key to grasping why RPT can guarantee robustness for these queries.

*How the paper uses it:* RPT provides theoretical robustness guarantees specifically for acyclic queries.

▶ [Joins 4: Result Computation of Acyclic Joins](https://www.youtube.com/watch?v=KPkQihL0l54) — Yufei Tao · 53:08 · 3 months ago

### Bloom filters in query processing *(prerequisite)*
Bloom filters are space-efficient probabilistic data structures used to test set membership with some false positives but no false negatives. In query processing, they help quickly filter out irrelevant data during joins.

*How the paper uses it:* RPT implements semi-join reductions efficiently using Bloom filter operators in DuckDB.

▶ [What are Bloom Filters? - Hashing](https://www.youtube.com/watch?v=bgzUdBVr5tE) — Gaurav Sen · 27:20 · 8 years ago

### Robust Predicate Transfer algorithm
Robust Predicate Transfer (RPT) is a new algorithm that ensures query execution performance is robust to any join order for acyclic queries by strategically applying semi-join reductions. It extends predicate transfer techniques with theoretical guarantees and practical implementation.

*How the paper uses it:* RPT is the central algorithm proposed by the paper to guarantee robust query execution regardless of join order.

▶ [Yifei Yang | Predicate Transfer: Efficient Pre-Filtering on Multi-Join Queries | #48](https://www.youtube.com/watch?v=tSu29BCwtBQ) — Disseminate: The Computer Science Research Podcast · 47:38 · 2 years ago

## Already in your library

- [Improving Transfer and Robustness of Supervised Contrastive Learning - Dan Fu | Stanford MLSys #62](https://www.youtube.com/watch?v=G3yLSBSCUUw) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Robust Predicate Transfer (RPT) for join order robustness in acyclic SQL queries. The beginner project familiarizes you with semi-join reduction and Bloom filters in a simplified setting. The intermediate project involves running and extending the authors' RPT implementation in DuckDB on a benchmark dataset to reproduce robustness metrics. The advanced project tackles a stated limitation by exploring robustness techniques for cyclic queries, extending the core ideas beyond the paper's acyclicity assumption.

### Beginner — Semi-Join Reduction with Bloom Filters on Acyclic Joins
*Effort: a weekend, ~8 hours*

You build a small prototype that implements semi-join reduction using Bloom filters on a simple acyclic join query graph. The project simulates a few relations with synthetic data and applies Bloom filters to filter tuples before joins, demonstrating how semi-join reduction reduces intermediate result sizes.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of Robust Predicate Transfer—using Bloom filters for semi-join reduction to improve robustness against join order. A professor would see you grasp the fundamental data structure and its role in join optimization.

**Grounded in:** The project demonstrates the use of Bloom filter operators to efficiently implement semi-join reductions as integrated in DuckDB (Approach section and Key Contributions).

**Tech stack:** C++, Python 3.11, Jupyter Notebook

**Data:** Synthetic relational data with a small acyclic join graph simulated in-memory.

**Build it:**

1. Implement a Bloom filter data structure or reuse your C++ Bloom filter implementation.
2. Generate synthetic tables representing relations with join keys forming an acyclic join graph.
3. Implement semi-join reduction by filtering tuples using Bloom filters before performing joins.
4. Measure and compare intermediate result sizes and execution time with and without semi-join reduction.
5. Document the effect of semi-join reduction on join robustness and intermediate result size.

**Ships as:** A Jupyter notebook or C++ program demonstrating semi-join reduction with Bloom filters on synthetic acyclic joins, with plots or tables showing intermediate result size reduction.

**Stretch goal:** Add visualization of Bloom filter false positive rates and their impact on join result correctness and performance.

### Intermediate — Reproducing Robust Predicate Transfer in DuckDB
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' RPT implementation in DuckDB from https://github.com/zzjjyyy/PredTransDuckDB. You run experiments on a subset of the Join Order Benchmark (JOB) queries to reproduce robustness factor metrics comparing RPT against DuckDB's default optimizer. You extend the baseline by adding a simple visualization of execution time variability across join orders.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the integration of RPT into a real DBMS, and reproduce key robustness results. It demonstrates practical skills in experimental evaluation of query optimization techniques.

**Grounded in:** This project directly uses the authors' implementation and reproduces the key result that RPT reduces robustness factor to near 1 for acyclic queries (Key Contributions and Key Results).

**Tech stack:** DuckDB, Python 3.11, Jupyter Notebook, SQL

**Data:** Join Order Benchmark (JOB) queries from the third-party artifact (link removed — unverified) used as in the paper.

**Build it:**

1. Clone https://github.com/zzjjyyy/PredTransDuckDB and build the modified DuckDB with RPT support.
2. Download and prepare the Join Order Benchmark dataset from (link removed — unverified)
3. Run baseline DuckDB query executions on a subset of acyclic JOB queries, recording execution times across random join orders.
4. Run the same queries with RPT enabled, recording execution times and robustness factors.
5. Visualize and compare execution time distributions and robustness factors between baseline and RPT.
6. Write a report summarizing your findings and any discrepancies.

**Verified links from the paper:**

- <https://github.com/zzjjyyy/PredTransDuckDB> — released by the paper's authors
- <http://github.com/gregrahn/join-order-benchmark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts to run RPT experiments on JOB queries, Jupyter notebooks with visualizations of robustness factors, and a README explaining the setup and results.

**Stretch goal:** Extend the evaluation to TPC-H queries and compare RPT performance on left-deep vs bushy plans.

### Advanced — Exploring Robust Join Processing for Cyclic Queries
*Effort: 3+ weeks*

You design and implement an extension or variant of Robust Predicate Transfer that attempts to improve robustness for cyclic join queries, addressing a key limitation of the paper. This may involve detecting cyclic components and applying partial semi-join reductions or heuristics to reduce intermediate result blowup. You evaluate your approach on cyclic queries from JOB or synthetic cyclic queries and compare robustness factors against baseline DuckDB and RPT.

**Why it shows you understood the paper:** This project tackles an open problem identified by the authors, showing you can critically analyze limitations and propose practical extensions. It demonstrates research potential and ability to bridge theory and implementation in query optimization.

**Grounded in:** Addresses the limitation that RPT does not provide robustness guarantees for cyclic queries and explores future directions for robust join algorithms with theoretical guarantees for cyclic queries.

**Tech stack:** DuckDB, C++, Python 3.11, SQL, Jupyter Notebook

**Data:** Cyclic queries from the Join Order Benchmark or synthetic cyclic join queries generated to test robustness.

**Build it:**

1. Study the RPT implementation and understand why it lacks robustness guarantees for cyclic queries.
2. Design heuristics or partial semi-join reduction strategies applicable to cyclic query components.
3. Implement your extension within the DuckDB RPT framework or as an external preprocessing step.
4. Generate or select cyclic queries from JOB or create synthetic cyclic join graphs.
5. Run experiments comparing baseline DuckDB, RPT, and your extended method on cyclic queries.
6. Analyze robustness factors, execution times, and intermediate result sizes; document findings.

**Verified links from the paper:**

- <https://github.com/zzjjyyy/PredTransDuckDB> — released by the paper's authors
- <http://github.com/gregrahn/join-order-benchmark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your extended RPT implementation, experimental scripts, and a detailed report discussing the approach, results, and limitations.

**Stretch goal:** Explore integration of your method with distributed or multi-threaded query execution as suggested in the paper's future directions.

_The intermediate and advanced projects depend on the authors' DuckDB RPT implementation and the Join Order Benchmark dataset; verify compatibility with your system and availability before starting._
