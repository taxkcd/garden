---
title: "386 · CRAQL: A Composable Language for Querying Source Code — Rahul Simha"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rahul-simha"
source_hash: "33f20d1f124ba95520570f0999ca394fd4f50e5484e7a4a983089fcbc7d40482"
sequence: 386
generator: "outreach-garden: managed"
---

# 386 · CRAQL: A Composable Language for Querying Source Code

## At a glance

- **Professor:** Rahul Simha
- **Institution:** George Washington University
- **Paper:** [CRAQL: A Composable Language for Querying Source Code](https://arxiv.org/abs/1901.09409)
- **Authors:** Rahul Simha, Blake Johnson

## Paper overview

This paper introduces CRAQL, a new query language designed specifically for mining and querying source code repositories by operating on abstract syntax trees (ASTs) rather than plain text or relational tables. CRAQL combines a familiar SQL-like syntax with specialized operators and optimizations to efficiently and clearly express complex queries about code structure, metadata, and bindings. The language supports composability, fine-grained queries, and imperative extensions, enabling powerful and scalable analysis of large codebases.

### Why it matters

**Research problem:** Existing query languages for source code mining have limitations such as inability to fully utilize parse tree structures, lack of support for metadata and bindings, verbosity, complexity, or poor composability. There is a need for a query language that can effectively and efficiently query the rich syntactic and semantic structure of source code across large repositories.

**Why it matters:** Mining large source code repositories is a fast-growing field in software engineering with applications in program analysis, software evolution, and quality assessment. Effective querying of source code structure and metadata enables deeper insights and more powerful analyses than simple text or relational queries, but current languages fall short in expressiveness, clarity, and performance.

**Key contributions:**

- Design of CRAQL, a composable query language for source code based on ASTs with SQL-like syntax
- Introduction of tree pruning operators (outmost, inmost, directly) to optimize queries and tailor results
- Support for querying metadata and bindings such as method and type bindings
- Combination of declarative and imperative query constructs for flexibility and expressiveness
- Open-source implementation tested on over 2 million Java source files

## About the professor

**Rahul Simha** — Professor, Computer Science, George Washington University.

Research interests: His current research interests include: quantum computing, computational neuroscience, complex systems, STEM education.

### Research links

- [Faculty/profile page](https://smhs.gwu.edu/faculty-research/rahul-simha-ms-phd)
- [Identity evidence](https://www.seas.gwu.edu/~simha)
- [Professor website](https://cs.engineering.gwu.edu/rahul-simha)
- [Resolved homepage](https://www2.seas.gwu.edu/~simha/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Abstract Syntax Trees and Program Analysis
**The paper assumes:** abstract syntax trees, program analysis, source code representation
**Already in this field?** Skip this entirely if you already understand how source code is represented as abstract syntax trees and the basics of program analysis.

This background focuses on understanding Abstract Syntax Trees (ASTs) and their role in program analysis, which is central to the CRAQL paper's approach to querying source code. The rigorous course option offers a structured university-level lecture series on syntax and ASTs, ideal for deep foundational knowledge. The fast track provides a concise, practical playlist with clear explanations and examples, suitable for quickly grasping AST concepts relevant to source code querying.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS361](https://www.youtube.com/playlist?list=PLw1zg1_IeeC4YWUEMh5uvoosueWZmqvKD) — Stephanie O · 28 videos · 6.0h across 28 episodes

**Watch only this:** Episodes 1-9 ("Syntax (Part 1)" through "Binary tree traversal - breadth-first and depth-first strategies"), about 1.8 hours — these cover syntax fundamentals and tree traversal methods essential for AST comprehension.

*Why it unblocks this paper:* This university lecture series by Stephanie O covers syntax, semantics, and detailed AST concepts with episodes specifically on binary expression trees and tree traversals, directly supporting understanding of AST structures and their manipulation as used in CRAQL.

*If you want all of it:* All 28 episodes, about 6.0 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AST Abstract Syntax Tree](https://www.youtube.com/playlist?list=PLw5h0DiJ-9PCWamtYU7X220dlBSU94BdD) — Hans Schenker · 8 videos · 4.9h across 8 episodes

**Watch only this:** Episodes 1-3 ("Understand Abstract Syntax Trees - ASTs - in Practical and Useful Ways for Frontend Developers", "Transforming JS & TS codebases with Typescript compiler and ASTs - Albert Groothedde | GURU TALKS", "What is TS Morph? | Seattle TypeScript | 11/20/19"), about 1.8 hours — these give a practical overview of ASTs and their use in code analysis.

*Why it unblocks this paper:* This short playlist by Hans Schenker provides practical and accessible explanations of ASTs with episodes focused on understanding ASTs, transforming codebases, and practical tooling, offering a quick, intuition-driven grasp of AST concepts relevant to CRAQL.

*If you want all of it:* All 8 episodes, about 4.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CRAQL paper, start with foundational knowledge on source code mining techniques, declarative and imperative query languages, and program analysis metadata and bindings, as these underpin the motivation and design of CRAQL. Then, gain a solid grasp of abstract syntax trees (ASTs), which are central to CRAQL's operation. Finally, focus on the core concept by watching the authors' own talk or the closest available substitute to get direct insights into CRAQL's novel composable query language for source code.

### Source code mining techniques *(prerequisite)*
Understanding how source code mining works provides the context for why a specialized query language like CRAQL is needed. This knowledge covers the challenges and goals of extracting meaningful information from large code repositories.

*How the paper uses it:* CRAQL addresses limitations in existing source code mining query languages by operating on ASTs and metadata.

▶ [Mining Source Code](https://www.youtube.com/watch?v=kmAbLOPdV5s) — source{d} · 7y ago

### Declarative and imperative query languages *(prerequisite)*
CRAQL uniquely combines declarative SQL-like syntax with imperative filtering constructs. Understanding the differences and trade-offs between these paradigms is essential to appreciate CRAQL's design choices.

*How the paper uses it:* CRAQL combines declarative and imperative query constructs for flexibility and expressiveness.

▶ [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=X-ZYKv_0TyY) — Coding Fun · 7:10 · 4y ago

### Program analysis metadata and bindings *(prerequisite)*
Metadata and semantic bindings enrich source code queries beyond syntax alone. Familiarity with these concepts helps understand how CRAQL supports querying method and type bindings for deeper analysis.

*How the paper uses it:* CRAQL exposes metadata and bindings such as method and type bindings for richer analysis.

▶ [Metadata Management & Data Catalog (Data Architecture | Data Governance)](https://www.youtube.com/watch?v=8i2tPWXpgMQ) — Software Architecture Academy · 8:12 · 4y ago

### Abstract syntax trees querying *(prerequisite)*
ASTs are the fundamental data structure CRAQL operates on. A solid understanding of ASTs and how queries can be formulated over them is crucial to grasping CRAQL's capabilities and optimizations.

*How the paper uses it:* CRAQL operates on sets of ASTs rather than tuples like SQL, enabling rich structural queries.

▶ [What Is An Abstract Syntax Tree, With WealthFront Engineer Spencer Miskoviak](https://www.youtube.com/watch?v=wINY109MG10) — newline · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of source code and why mining it matters, then learn about declarative and imperative programming paradigms since CRAQL combines both. Next, grasp abstract syntax trees (ASTs), which are central to how CRAQL queries source code. After that, explore program analysis metadata and bindings to see how CRAQL accesses semantic information. Finally, dive into CRAQL itself as a composable query language designed specifically for querying source code ASTs.

### Source code mining techniques *(prerequisite)*
Learn what source code is and why mining large code repositories is important for software engineering tasks like program analysis and quality assessment. This foundation helps you appreciate the challenges and goals CRAQL addresses.

*How the paper uses it:* CRAQL is designed to mine and query large source code repositories effectively.

▶ [Mining Source Code](https://www.youtube.com/watch?v=kmAbLOPdV5s) — source{d} · 7y ago

### Declarative and imperative query languages *(prerequisite)*
Understand the difference between declarative programming, which focuses on what to do, and imperative programming, which focuses on how to do it. CRAQL uniquely combines SQL-like declarative syntax with imperative filtering and processing.

*How the paper uses it:* CRAQL combines declarative SQL-like syntax with imperative C-like code for flexible querying.

▶ [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=E7Fbf7R3x6I) — ui․dev · 4:44 · 4y ago

### Abstract syntax trees querying
Abstract syntax trees (ASTs) represent the structure of source code in a tree form, capturing syntax and hierarchy. Understanding ASTs is key to grasping how CRAQL operates on code beyond plain text or relational tables.

*How the paper uses it:* CRAQL operates on sets of ASTs rather than tuples, enabling structural queries on code.

▶ [Abstract Syntax Trees (ASTs) Explained](https://www.youtube.com/watch?v=lCrC-qojPpU) — The Coding Gopher · 7mo ago

### Program analysis metadata and bindings
Metadata and bindings provide semantic information about code elements, such as method and type bindings, which enrich queries beyond syntax. CRAQL exposes this information to enable deeper code analysis.

*How the paper uses it:* CRAQL supports querying metadata and bindings such as method and type bindings for richer analysis.

▶ [Metadata Management & Data Catalog (Data Architecture | Data Governance)](https://www.youtube.com/watch?v=8i2tPWXpgMQ) — Software Architecture Academy · 8:12 · 4y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of CRAQL by progressively engaging with its core concepts and challenges. The beginner project lets you explore AST querying and tree pruning operators on Java code using existing Java parsing tools. The intermediate project involves reimplementing CRAQL's core composable query language features on a smaller Java dataset, comparing query expressiveness and performance against a baseline. The advanced project extends CRAQL by adapting it to a new programming language (e.g., Python) or integrating dynamic execution data, addressing a stated limitation and future direction of the paper.

### Beginner — AST Querying with Tree Pruning Operators on Java Source
*Effort: a weekend, ~8 hours*

You build a small tool that parses Java source files into ASTs using Eclipse JDT libraries, then implements simple queries to find specific code patterns (e.g., getter methods) using tree pruning operators like 'outmost' and 'directly'. You demonstrate how these operators filter and optimize query results by comparing outputs with and without their use.

**Why it shows you understood the paper:** This project shows you understand CRAQL's key contribution of operating on ASTs with specialized tree pruning operators to improve query clarity and correctness, as well as the practical use of Java parsing libraries.

**Grounded in:** The use of “outmost” and “directly” make this condition easy to implement... they have also surprised us by being very useful functionally, as well, and often are necessary for strictly correct results.

**Tech stack:** Java 17, Eclipse JDT Core library, Maven or Gradle for build

**Data:** A small set of open-source Java files from GitHub (e.g., Apache Commons Lang) to parse and query.

**Build it:**

1. Set up a Java project with Eclipse JDT Core library dependency.
2. Write code to parse Java source files into ASTs using JDT.
3. Implement queries to find getter methods using AST traversal.
4. Add tree pruning operators 'outmost' and 'directly' to filter query results.
5. Compare query outputs and runtime with and without pruning operators.
6. Document findings and example queries in README.

**Ships as:** A Java project repository with example queries demonstrating tree pruning operators on Java ASTs, including sample input files and README explanations.

**Stretch goal:** Add support for querying method and type bindings metadata exposed by JDT to extend queries beyond syntax.

### Intermediate — Reimplementing CRAQL Core Query Language on Java ASTs
*Effort: 2 weekends, ~20 hours*

You reimplement the core CRAQL query language features: composable queries operating on sets of ASTs with SQL-like declarative syntax combined with imperative filtering. You apply this to a small Java codebase (e.g., 1000 files) and implement tree pruning operators. You compare query expressiveness and performance against a baseline approach using plain AST traversal or a simpler query language.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce CRAQL's core method of composable AST queries with declarative and imperative components, and to evaluate the impact of tree pruning operators on query clarity and efficiency.

**Grounded in:** CRAQL is designed as a composable query language operating on sets of ASTs, with inputs and outputs as AST sets rather than tuples. It combines declarative SQL-like syntax with imperative C-like code for filtering and processing.

**Tech stack:** Java 17, Eclipse JDT Core library, ANTLR or similar parser generator for query syntax, Maven or Gradle

**Data:** A curated subset of Java source files from a public GitHub repository (e.g., Apache Commons Lang) to serve as the query dataset.

**Build it:**

1. Design and implement a parser for a simplified CRAQL-like query language supporting declarative and imperative parts.
2. Implement AST set data structures and composability of queries (output of one query as input to another).
3. Integrate Eclipse JDT to parse Java files into ASTs as input data.
4. Implement tree pruning operators (outmost, directly) to optimize queries.
5. Run example queries (e.g., find getters, nested loops) and measure query length and runtime.
6. Compare results and query complexity against a baseline AST traversal approach.
7. Write documentation and examples illustrating CRAQL features.

**Ships as:** A Java-based CRAQL prototype with example queries on Java ASTs, performance and expressiveness comparison report, and usage documentation.

**Stretch goal:** Add support for querying method and type bindings metadata to enable semantic queries.

### Advanced — Extending CRAQL to Python ASTs with Dynamic Trace Integration
*Effort: 3-4 weeks*

You extend the CRAQL approach by adapting the composable AST query language to Python source code using Python's built-in AST module. Additionally, you integrate dynamic execution trace logs (e.g., function call traces) to enable combined static and dynamic queries, addressing a future direction suggested by the paper. You evaluate the feasibility and demonstrate example queries combining syntax and runtime information.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of CRAQL by adapting it beyond Java and integrating dynamic data, showing deep comprehension of the paper's method and its extensibility challenges.

**Grounded in:** Add support for other programming languages such as C++ using Eclipse CDT; Explore integration of source code with execution trace logs to enable queries combining static and dynamic information.

**Tech stack:** Python 3.11, Python built-in ast module, SQLite or JSON for trace log storage, TypeScript/React (optional) for query UI

**Data:** A small Python codebase from open-source projects (e.g., requests library) and synthetic or recorded dynamic execution traces (e.g., function call logs from instrumentation).

**Build it:**

1. Implement a simplified CRAQL-like query engine operating on Python ASTs using the ast module.
2. Design composable query syntax combining declarative and imperative parts.
3. Parse and store dynamic execution traces (e.g., function call sequences) linked to source code locations.
4. Implement query operators that combine static AST queries with dynamic trace filters.
5. Demonstrate example queries that find code patterns with dynamic behavior constraints.
6. Evaluate query expressiveness and discuss challenges adapting CRAQL beyond Java.
7. Document the system, usage examples, and limitations.

**Ships as:** A Python-based CRAQL extension prototype supporting static and dynamic queries on Python code, with example queries and a detailed README discussing design and evaluation.

**Stretch goal:** Develop a web-based UI to compose and visualize combined static-dynamic queries interactively.

_The paper authors did not release code or datasets; you must reimplement CRAQL features from the paper's descriptions and use publicly available Java and Python source code repositories as data._
