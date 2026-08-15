---
title: "423 · On the Implementations of the BiTemporal RDF Model: An Experimental Approach — Abdullah Uz Tansel"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abdullah-uz-tansel"
source_hash: "91d13e1cd52f93ad1b6ffa564d23199fb974db1937e0fa276cfc38252cfe4a52"
sequence: 423
generator: "outreach-garden: managed"
---

# 423 · On the Implementations of the BiTemporal RDF Model: An Experimental Approach

## At a glance

- **Professor:** Abdullah Uz Tansel
- **Institution:** CUNY
- **Paper:** [On the Implementations of the BiTemporal RDF Model: An Experimental Approach](https://mdpi-res.com/d_attachment/informatics/informatics-13-00061/article_deploy/informatics-13-00061-v2.pdf?version=1776302319)
- **Authors:** Di Wu, Hsien-Tseng Wang, Abdullah Uz Tansel
- **Year:** 2026

## Paper overview

This paper studies practical ways to implement the BiTemporal RDF (BiTRDF) model, which extends the standard RDF data model by embedding two time dimensions—valid time and transaction time—directly into RDF resources. The authors explore six different implementation strategies combining object-oriented programming and database designs, evaluate their performance on large synthetic datasets, and provide guidance on choosing suitable approaches based on data size and performance needs.

### Why it matters

**Research problem:** While the BiTemporal RDF model provides a theoretical foundation for representing bitemporal knowledge in RDF, practical implementation strategies that efficiently store, query, and scale BiTRDF data using existing technologies have not been systematically studied.

**Why it matters:** Temporal information is critical in many real-world applications such as legal records, financial systems, and historical knowledge bases. Efficiently managing both valid time and transaction time in RDF enables accurate historical queries and auditing. Existing RDF temporal extensions often suffer from complexity or limited temporal semantics, so practical, scalable implementations of BiTRDF are essential for advancing temporal knowledge management on the Semantic Web.

**Key contributions:**

- First systematic study of practical BiTRDF implementation methods.
- Design and implementation of six alternative BiTRDF storage and querying approaches.
- Comprehensive experimental evaluation on large synthetic bitemporal RDF datasets.
- Demonstration of trade-offs between extensibility, performance, and scalability.
- Provision of practical guidance for selecting BiTRDF implementation strategies based on workload characteristics.

## About the professor

**Abdullah Uz Tansel** — Professor, Paul Chook Dept InfoSys & Stat, CUNY.

Research interests: Database Management Systems, Temporal Databases, Semantic Web, Blockchain Databases WEB3.0, and Generative AI

### Research links

- [Faculty/profile page](https://www.baruch.cuny.edu/profiles/faculty/Abdullah-Tansel)
- [Identity evidence](https://www.gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Doctoral-Programs/Computer-Science/Faculty-Bios/Abdullah-Uz-Tansel)
- [Identity evidence](https://zicklin.baruch.cuny.edu/faculty-profile/abdullah-uz-tansel/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Temporal Databases
**The paper assumes:** temporal databases, bitemporal data modeling, temporal query processing
**Already in this field?** Skip this entirely if you already understand temporal database concepts including valid time, transaction time, and temporal query operators.

This background focuses on temporal databases, essential for understanding the BiTemporal RDF model's dual time dimensions and temporal query operators discussed in the paper. The rigorous course provides a deep theoretical and practical foundation in database systems, including temporal aspects, while the fast track offers a concise, accessible introduction to core database concepts to quickly get up to speed.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Database Systems](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-xymXgqewlzcC3U4cdRoSu) — NPTEL-NOC IITM · 41 videos · 29.4h across 41 episodes

**Watch only this:** Episodes #1 to #24 (Introduction to Database Systems through Normal forms 2NF, 3NF, BCNF), about 17 hours — these cover database architecture, relational models, query languages, and normalization, providing the necessary theoretical background for temporal database modeling and querying.

*Why it unblocks this paper:* This comprehensive university-level course from NPTEL IITM covers foundational database concepts, including data models, relational algebra, SQL, and query languages, which are crucial for understanding the implementation and querying of bitemporal RDF data. Its detailed episodes on relational models and query operators align well with the paper's focus on database-oriented BiTRDF implementations.

*If you want all of it:* 29.4 hours across 41 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Databases](https://www.youtube.com/playlist?list=PLxf3-FrL8GzQu22HZmXhVhageklX-HEGn) — Irfan Malik · 17 videos · 3.5h across 17 episodes

**Watch only this:** Lectures 1 to 10 (Introduction to Instructor through Introduction to SQL JOINS & it's Types), about 2 hours — these cover database basics, table design, keys, and SQL joins, providing a practical overview relevant to the paper's implementation strategies.

*Why it unblocks this paper:* This short-form series by Irfan Malik offers a clear, beginner-friendly introduction to databases, including key concepts like tables, keys, and SQL queries, which are foundational for understanding the paper's database and object-oriented BiTRDF implementations. It is well-suited for quickly grasping essential database principles without deep theoretical detail.

*If you want all of it:* 3.5 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on BiTemporal RDF model implementations, start with foundational knowledge on temporal databases and bitemporal data to grasp the management of valid and transaction time. Next, build understanding of database indexing and query optimization to appreciate performance trade-offs in implementations, followed by object-oriented data structures for large datasets to comprehend the OOP approaches evaluated. Then, review RDF and Semantic Web standards for the data modeling context. Finally, focus on the paper's core concept by watching the authors' own or closely related talks on BiTemporal RDF models and their implementations.

### Temporal databases and bitemporal data *(prerequisite)*
This section provides essential background on managing valid and transaction time in databases, which is fundamental to understanding the BiTemporal RDF model's temporal dimensions. The selected talk covers bitemporal graph queries and database design considerations for temporal data, aligning well with the paper's focus on bitemporal data management.

*How the paper uses it:* The paper extends RDF with bitemporal semantics, so understanding temporal databases is foundational.

▶ ["Temporal Databases for Streaming Architectures" by Jeremy Taylor and Jon Pither](https://www.youtube.com/watch?v=ykbYNBE-V3k) — Strange Loop Conference · 34:34 · 6 years ago

### Database indexing and query optimization *(prerequisite)*
Understanding indexing and query optimization is key to grasping the performance trade-offs observed in the paper's PostgreSQL-based BiTRDF implementations. The chosen lecture from Carnegie Mellon University offers an advanced, research-level treatment of query optimizer implementation, suitable for an advanced reader.

*How the paper uses it:* The paper discusses PostgreSQL implementation benefits from mature indexing and query optimization.

▶ [20 - Query Optimizer Implementation II (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=AywssLlkF1U) — CMU Database Group · 1:13:45 · 6 years ago

### Object-oriented data structures for large datasets *(prerequisite)*
This section covers object-oriented data models and structures, which is crucial for understanding the paper's OOP implementation approaches using Python dictionaries, dataframes, and lists. The selected video provides an advanced lecture on object-oriented database models, aligning with the paper's exploration of OOP flexibility versus performance.

*How the paper uses it:* The paper evaluates three OOP BiTRDF implementations emphasizing flexibility and modularity.

▶ [DBMS Data Models-Part 4 | Object Oriented Database | Object Oriented Model in DBMS | DBMS Lecture-11](https://www.youtube.com/watch?v=wuluqbxxaD4) — Simple Digital School · 22:41 · 5 years ago

### RDF and Semantic Web standards *(prerequisite)*
A solid understanding of RDF and Semantic Web standards is necessary to contextualize the BiTemporal RDF model within existing semantic frameworks. The chosen lecture is a comprehensive university-level course segment on RDF syntax and semantics, providing rigorous academic depth.

*How the paper uses it:* BiTRDF extends the RDF data model, so foundational RDF knowledge is essential.

▶ [The Semantic Web Technologies: Unit 03-1 RDF Syntax and Semantics](https://www.youtube.com/watch?v=u6ZmIUhA4OU) — TEAL 2.0 AIT · 1:53:44 · 3 years ago

### BiTemporal RDF model talk
This section focuses on the core concept of the paper: the BiTemporal RDF model and its practical implementations. Although the authors' own talk on this exact work was not found, a closely related talk on a bitemporal database client provides relevant insights into bitemporal data handling and querying, complementing the paper's experimental approach.

*How the paper uses it:* Directly relates to the paper's experimental study of BiTemporal RDF implementations.

▶ [Transistor, a bitemporal database client - Julia Naomi & Otavio Paulino Pace](https://www.youtube.com/watch?v=WZ_kkWfjY0g) — RustLab Conference · 33:42 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the BiTemporal RDF model and its practical implementations. We start with the basics of RDF and Semantic Web standards to grasp the data model and querying language, then cover temporal databases and bitemporal data to understand the dual time dimensions. Next, we explore object-oriented data structures relevant to the paper's implementation approaches, followed by database indexing and query optimization to appreciate performance trade-offs. Finally, we focus on the core concept of bitemporal RDF data modeling as used in the paper.

### RDF and Semantic Web standards *(prerequisite)*
Learn what RDF is, how it structures data as triples, and how it fits into the Semantic Web ecosystem. Understanding RDF and its querying language SPARQL is essential to grasp how temporal information can be represented and queried in RDF-based systems.

*How the paper uses it:* The BiTRDF model extends RDF by embedding temporal dimensions directly into RDF resources, so understanding RDF basics is foundational.

▶ [RDF Tutorial - An Introduction to the Resource Description Framework](https://www.youtube.com/watch?v=zeYfT1cNKQg) — Fullstack Academy · 9:22 · 9 years ago

### Temporal databases and bitemporal data *(prerequisite)*
Explore how databases manage time-varying data using valid time and transaction time, the two dimensions of bitemporal data. This background is crucial to understand why BiTemporal RDF needs to handle both time aspects and how temporal coherence is maintained.

*How the paper uses it:* The BiTRDF model incorporates both valid and transaction time, concepts rooted in temporal database theory.

▶ ["Temporal Databases for Streaming Architectures" by Jeremy Taylor and Jon Pither](https://www.youtube.com/watch?v=ykbYNBE-V3k) — Strange Loop Conference · 34:34 · 6 years ago

### Object-oriented data structures for large datasets *(prerequisite)*
Understand object-oriented data models and data structures like dictionaries, lists, and dataframes, which are used in the paper's OOP implementation approaches. This helps appreciate the trade-offs between flexibility and performance in managing bitemporal RDF data.

*How the paper uses it:* The paper implements three BiTRDF alternatives using OOP data structures in Python, making this knowledge directly relevant.

▶ [Data Structures Explained for Beginners - How I Wish I was Taught](https://www.youtube.com/watch?v=O9v10jQkm5c) — Sajjaad Khader · 15:51 · 1 year ago

### Database indexing and query optimization *(prerequisite)*
Learn how databases use indexing and query optimization techniques to efficiently retrieve data, especially important for large datasets. This understanding clarifies why the PostgreSQL implementation in the paper outperforms OOP approaches on large bitemporal RDF datasets.

*How the paper uses it:* The paper shows that database-oriented BiTRDF implementations benefit from mature indexing and query optimization strategies.

▶ [Database Indexing Explained (with PostgreSQL)](https://www.youtube.com/watch?v=-qNSXK7s7_w) — Hussein Nasser · 18:19 · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the BiTemporal RDF (BiTRDF) model implementations studied in the paper. The beginner project reproduces a core performance comparison on a small scale using familiar Python data structures. The intermediate project extends this by running and comparing one of the authors' database-oriented implementations on a larger synthetic dataset from their released data. The advanced project tackles a future direction by integrating bitemporal RDF data with an existing RDF store, exploring extensibility and performance trade-offs in a real Semantic Web environment.

### Beginner — BiTRDF Small-Scale Query Performance with Python Data Structures
*Effort: a weekend, ~8 hours*

You build a small Python script that implements a simplified bitemporal RDF triple store using dictionaries and lists, mimicking the paper's object-oriented approaches. You then load a small synthetic dataset (e.g., 0.5 million triples simulated or sampled) and measure memory usage and query response times for basic temporal queries.

**Why it shows you understood the paper:** This project shows you grasp the core BiTRDF concept of embedding valid and transaction time in RDF triples and understand the trade-offs in memory and query performance between different in-memory data structures.

**Grounded in:** Section 6.1 and 6.2 discuss OOP approaches’ memory consumption and loading time overhead due to object creation and metadata.

**Tech stack:** Python 3.11, pandas, memory_profiler

**Data:** Synthetic bitemporal RDF triples generated by you or sampled from the smallest dataset described in the paper (D1, 0.5 million triples).

**Build it:**

1. Implement a Python class to represent bitemporal RDF triples with valid and transaction time attributes.
2. Load or generate a small synthetic dataset of bitemporal triples into Python dictionaries and lists.
3. Implement basic temporal query functions such as time-slice and rollback operators.
4. Measure memory consumption and query execution time using memory_profiler and time modules.
5. Compare performance between dictionary-based and list-based storage approaches.
6. Document the results and relate them to the paper's findings on OOP implementations.

**Ships as:** A GitHub repository with Python scripts, a README explaining the implementation, performance measurements, and a discussion linking results to the paper's OOP approach evaluation.

**Stretch goal:** Add a dataframe-based implementation and compare its performance to dictionary and list approaches.

### Intermediate — Evaluating PostgreSQL BiTRDF Implementation on Large Synthetic Dataset
*Effort: 2 weekends, ~20 hours*

You set up the authors' PostgreSQL-based BiTRDF implementation using their released synthetic datasets from https://osf.io/q3yvw/. You load a mid-to-large scale dataset (e.g., 4 million triples), run the authors' benchmark queries, and compare query performance and loading times against a simple Python dictionary-based baseline you implement.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' actual artifacts, reproduce their core experimental results on database-oriented BiTRDF implementations, and critically compare them to simpler baselines, reflecting the paper's key contributions and results.

**Grounded in:** Section 5.2 describes the six alternatives including PostgreSQL; Sections 6.2 and 6.3 show database-oriented implementations outperform OOP on large datasets.

**Tech stack:** Python 3.11, PostgreSQL 15, psycopg2, pandas

**Data:** Authors' synthetic bitemporal RDF datasets available at https://osf.io/q3yvw/ (accessed 22 December 2025).

**Build it:**

1. Download the synthetic datasets and PostgreSQL BiTRDF schema/scripts from the authors' OSF repository.
2. Set up a PostgreSQL database and load the chosen dataset using the provided scripts.
3. Implement a simple Python dictionary-based BiTRDF store for baseline comparison.
4. Run benchmark queries from the paper on both implementations, measuring loading and query times.
5. Analyze and visualize the performance differences, relating them to the paper's findings.
6. Write a detailed README documenting setup, execution, results, and insights.

**Verified links from the paper:**

- <https://osf.io/q3yvw> — released by the paper's authors

**Ships as:** A GitHub repo containing setup scripts, Python baseline code, performance results, and a report comparing PostgreSQL and dictionary-based BiTRDF implementations.

**Stretch goal:** Extend the baseline with a dataframe-based implementation and include it in the comparison.

### Advanced — Integrating BiTRDF with RDFLib for Extensible Temporal Knowledge Graphs
*Effort: 3-4 weeks*

You develop an extension or middleware layer for RDFLib (https://github.com/RDFLib/rdflib) that supports bitemporal RDF triples by embedding valid and transaction time semantics. You implement temporal coherence constraints and basic temporal query operators (time-slice, rollback) within RDFLib's framework. You evaluate your extension's performance and extensibility on a moderate synthetic dataset and discuss integration challenges with existing RDF stores.

**Why it shows you understood the paper:** This project addresses a key future direction from the paper—integrating BiTRDF with existing RDF stores and Semantic Web tools. It shows deep comprehension of BiTRDF's temporal semantics, practical implementation challenges, and trade-offs between extensibility and performance.

**Grounded in:** Future directions: Integration of BiTRDF with existing RDF stores and Semantic Web tools for broader applicability; Section 3.2 on temporal coherence and core operators.

**Tech stack:** Python 3.11, RDFLib, PostgreSQL (optional), pytest

**Data:** Synthetic bitemporal RDF datasets from the authors' OSF repository or smaller subsets generated by you.

**Build it:**

1. Study RDFLib's data model and query mechanisms to identify extension points for temporal semantics.
2. Implement BiTRDF triple representation with embedded valid and transaction times within RDFLib.
3. Add enforcement of temporal coherence constraints and implement time-slice and rollback query operators.
4. Load synthetic bitemporal datasets and benchmark query performance and correctness.
5. Document integration challenges, performance trade-offs, and potential improvements.
6. Prepare a comprehensive README with usage instructions, design rationale, and evaluation results.

**Verified links from the paper:**

- <https://github.com/RDFLib/rdflib> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://osf.io/q3yvw> — released by the paper's authors

**Ships as:** A GitHub repository with the RDFLib extension code, test cases, example datasets, performance benchmarks, and a detailed README discussing integration and extensibility.

**Stretch goal:** Explore distributed or cloud-based storage backends for your BiTRDF extension to improve scalability.

_The synthetic datasets from the authors' OSF repository should be verified for accessibility and completeness before starting the intermediate and advanced projects._
