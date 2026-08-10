---
title: "250 · Kaminari: a frugal colored index for approximate k-mer queries — Rob Patro"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rob-patro"
source_hash: "43a830d43625f90060b881388cb20c5b28be1605ec3df5dacf6429cd13684f46"
sequence: 250
generator: "outreach-garden: managed"
---

# 250 · Kaminari: a frugal colored index for approximate k-mer queries

## At a glance

- **Professor:** Rob Patro
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Kaminari: a frugal colored index for approximate k-mer queries](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC13275129/)
- **Authors:** Victor Levallois, Yoshihiro Shibuya, Bertrand Le Gal, Yoann Dufresne, Rob Patro, Pierre Peterlongo, Giulio Ermanno Pibiri
- **Year:** 2026

## Paper overview

This paper presents Kaminari, a novel software tool for efficiently indexing large collections of genomic sequences to quickly find which documents contain sequences similar to a query. Kaminari uses a new approach based on k-mer minimizers and compression techniques instead of traditional Bloom filters, resulting in smaller indexes and faster query times with minimal impact from false positives.

### Why it matters

**Research problem:** Efficiently identifying documents in large genomic sequence collections that contain a query sequence approximately, allowing false positives but no false negatives, using compact and fast data structures.

**Why it matters:** Searching large genomic databases quickly and with limited memory is fundamental for bioinformatics and computational biology, enabling applications like genome analysis and metagenomics. Existing methods based on Bloom filters have limitations in space efficiency and query speed.

**Key contributions:**

- Introduced a new approximate colored k-mer index based on k-mer minimizers and integer compression instead of Bloom filters.
- Developed a merging strategy for color sets based on minimizer similarity to reduce storage and false positives.
- Implemented Kaminari software that produces smaller indexes and faster queries than state-of-the-art tools.
- Proposed using Rank-Biased Overlap (RBO) metric to evaluate the impact of false positives on result ranking.
- Demonstrated Kaminari's robustness across diverse genomic and metagenomic datasets.

## About the professor

**Rob Patro** — Department of Computer Science, Univ. of Maryland - College Park.

Research interests: Analyzing high-throughput genomics data, with a focus on transcriptomics, single-cell assays, sequence indexing, and scalable inference.

### Research links

- [Faculty/profile page](https://www.cs.umd.edu/people/nomad)
- [Identity evidence](https://www.cs.umd.edu/people/rob)
- [Identity evidence](https://combine-lab.github.io/)
- [Resolved homepage](https://combine-lab.github.io/contact/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** compact data structures
**The paper assumes:** minimal perfect hash functions, integer compression techniques, succinct and compact data structures, approximate membership data structures
**Already in this field?** Skip this entirely if you already understand advanced compact data structures and their applications in bioinformatics indexing.

This background focuses on compact data structures critical for understanding Kaminari's indexing and query methods, including minimal perfect hash functions, integer compression, and color set merging. The rigorous course provides a deep, structured university-level treatment of advanced data structures relevant to the paper, while the fast track offers a concise, visual introduction to hashing techniques foundational to these data structures. Choose the course for comprehensive mastery or the fast track for a quick, intuitive grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.851 Advanced Data Structures, Spring 2012](https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf) — MIT OpenCourseWare · 22 videos · 29.9h across 22 episodes

**Watch only this:** Lectures 10 (Dictionaries), 11 (Integer Models), 17 (Succinct Structures I), and 18 (Succinct Structures II), about 5.4 hours total — these cover the essential data structures and compression methods underpinning Kaminari's approach.

*Why it unblocks this paper:* MIT 6.851 Advanced Data Structures covers a broad range of advanced data structures including minimal perfect hash functions, succinct structures, and integer models, directly relevant to Kaminari's core indexing and compression techniques.

*If you want all of it:* 29.9 hours across 22 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hashing in Data Structures](https://www.youtube.com/playlist?list=PLndX8heiWwEpgLMJ4yc9reRYgcL1oQPQ1) — Scratch Learners · 7 videos · 1.2h across 7 episodes

**Watch only this:** Episodes 1 (Introduction to Hashing), 2 (Hashing Techniques Part 1), and 3 (Types of Hashing Techniques Part 2), about 30 minutes total — these give a solid quick overview of hashing relevant to the paper.

*Why it unblocks this paper:* The 'Hashing in Data Structures' playlist provides a focused, accessible introduction to hashing concepts, collision resolution, and hash functions, foundational for understanding minimal perfect hash functions and color set merging in Kaminari.

*If you want all of it:* 1.2 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Kaminari paper, start with foundational concepts such as approximate membership query data structures and minimal perfect hash functions, which underpin Kaminari's indexing approach. Then, study colored de Bruijn graph data structures and k-mer minimizers indexing lectures to grasp the biological data structures and compression techniques used. Finally, focus on the core concept by watching the authors' own talk or related advanced talks about Kaminari's novel approximate k-mer index.

### approximate membership query data structures lecture *(prerequisite)*
Approximate membership query data structures like Bloom filters are fundamental to understanding how Kaminari improves upon traditional methods for k-mer queries. This section covers the theory and practical trade-offs of these data structures, providing the necessary background on approximate querying and false positive management.

*How the paper uses it:* Kaminari replaces Bloom filter-based approximate membership queries with a novel approach using minimizers and compression.

▶ [Lecture 6:Memory-efficient data structures: Hash functions ...](https://www.youtube.com/watch?v=fKpj_6AZCb8) — NPTEL IIT Kharagpur · 29:49

### minimal perfect hash functions lecture *(prerequisite)*
Minimal perfect hash functions enable efficient, collision-free indexing of large key sets, which is critical for Kaminari's compact and fast color set storage. Understanding these functions helps in grasping how Kaminari achieves space efficiency and query speed.

*How the paper uses it:* Kaminari uses minimal perfect hash functions to store and query color sets efficiently with minimal collisions.

▶ [Lightning Talk: Compiling CASE and TYPECASE using minimal perfect hash functions](https://www.youtube.com/watch?v=ygZWE4YU_1g) — European Lisp Symposium · 1 year ago

### colored de Bruijn graph data structures seminar *(prerequisite)*
Colored de Bruijn graphs are a foundational data structure for representing k-mer presence across multiple genomic datasets. This section provides insight into how color information is stored and queried, which is essential to understanding Kaminari's colored k-mer indexing strategy.

*How the paper uses it:* Kaminari builds on colored k-mer indexing concepts related to colored de Bruijn graphs to represent genomic data efficiently.

▶ [A Cracco. Extremely-fast construction & querying of compacted & colored de Bruijn graphs w/ GGCAT](https://www.youtube.com/watch?v=hhRKZI7tAjM) — RECOMB Conference Series · 3 years ago

### k-mer minimizers indexing lecture
K-mer minimizers are a key technique Kaminari uses to reduce index size by merging color sets of k-mers sharing the same minimizer. This lecture explains how minimizers are identified and used for efficient k-mer storage and querying.

*How the paper uses it:* Kaminari's novel approach is based on indexing k-mer minimizers rather than all k-mers to save space and improve query speed.

▶ [Minimizers for efficient k-mer storage](https://www.youtube.com/watch?v=tStZ-913ZXQ) — Bioinfo Enthusiast · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Kaminari's approach to approximate k-mer queries, start by learning about approximate membership query data structures like Bloom filters, which provide the foundational motivation. Next, grasp minimal perfect hash functions, crucial for efficient, collision-free indexing in Kaminari. Then, explore k-mer minimizers, the key technique Kaminari uses to reduce index size by grouping similar k-mers. Finally, watch a direct talk by the authors to see how these concepts combine in Kaminari's novel indexing method.

### approximate membership query data structures lecture *(prerequisite)*
Approximate membership query data structures like Bloom filters allow fast membership tests with some false positives but no false negatives, enabling memory-efficient querying of large datasets. Understanding these helps appreciate why Kaminari seeks alternatives to Bloom filters for better space and speed trade-offs.

*How the paper uses it:* Kaminari improves on Bloom filter-based approximate k-mer membership by using minimizers and compression to reduce index size and speed up queries.

▶ [What are Bloom Filter Explained with Example (Big Data Analytics)](https://www.youtube.com/watch?v=xrjs2x29vJ4) — Gyanpur · 6 years ago

### minimal perfect hash functions lecture *(prerequisite)*
Minimal perfect hash functions map a set of keys to unique integers with no collisions and minimal space overhead, enabling very efficient storage and lookup. This concept is key to Kaminari's ability to store and query color sets of minimizers compactly and quickly.

*How the paper uses it:* Kaminari uses minimal perfect hash functions to index k-mer minimizers without collisions, improving query speed and reducing storage.

▶ [DS 094: Intro to Cichelli Minimal Perfect Hashing](https://www.youtube.com/watch?v=jN_sMA8Pr9M) — westhillcs · 3 years ago

### k-mer minimizers indexing lecture
K-mer minimizers are representative subsequences chosen from k-mers to reduce redundancy and index size. By grouping k-mers sharing the same minimizer, one can compress data and speed up queries. This technique is central to Kaminari's approach to merging color sets and reducing false positives.

*How the paper uses it:* Kaminari merges color sets of k-mers sharing the same minimizer to save space and improve query efficiency.

▶ [Minimizers for efficient k-mer storage](https://www.youtube.com/watch?v=tStZ-913ZXQ) — Bioinfo Enthusiast · 1 year ago

### Kaminari approximate k-mer index talk *(the paper's own talk)*
A direct talk by authors or related experts provides an overview of Kaminari's novel indexing approach, illustrating how the concepts of minimizers, compression, and hashing come together to produce a fast, compact approximate k-mer index.

*How the paper uses it:* This talk explains Kaminari's design choices, performance benefits, and evaluation results in the authors' own words.

▶ [DNA indexing with k-mers](https://www.youtube.com/watch?v=9Tf4VgZJGV0) — Sina Majidian · 7 months ago

## Already in your library

- [Introduction to k-mers](https://www.youtube.com/watch?v=DyZvATM9Hr8) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)
- [Solving genomic problems with K-mers](https://www.youtube.com/watch?v=1DKqHJyR6Fg) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Kaminari's novel approximate colored k-mer indexing approach. The beginner project reproduces a core concept of k-mer minimizers and color set merging on a small scale. The intermediate project uses the authors' Kaminari implementation to index and query a bacterial genome dataset, comparing index size and query speed against a baseline Bloom filter approach. The advanced project extends Kaminari by exploring repetition-aware compression techniques to reduce color set storage, addressing a future direction proposed in the paper.

### Beginner — Small-scale k-mer Minimizer Index with Color Set Merging
*Effort: a weekend, ~8 hours*

You build a simple Python script that extracts k-mers from a few small genomic sequences, computes their minimizers, and merges color sets of k-mers sharing the same minimizer. The script will simulate the merging strategy Kaminari uses to reduce storage by grouping k-mers by minimizers and output the merged color sets.

**Why it shows you understood the paper:** This project shows you understand the core idea of Kaminari's approach to approximate colored k-mer indexing by implementing the key mechanism of minimizer-based color set merging on a small scale.

**Grounded in:** Key contribution: Developed a merging strategy for color sets based on minimizer similarity to reduce storage and false positives.

**Tech stack:** Python 3.11

**Data:** Use a small set of bacterial genome sequences from NCBI RefSeq or simulate a few short DNA sequences for demonstration.

**Build it:**

1. Write a function to extract all k-mers (e.g., k=15) from input sequences.
2. Implement a minimizer function to compute the minimizer for each k-mer.
3. Group k-mers by their minimizers and merge their color sets (document IDs).
4. Output the merged color sets and compare storage size before and after merging.
5. Write a README explaining the merging strategy and its impact on storage.

**Ships as:** A Python script with example input sequences, output showing merged color sets, and a README explaining the merging strategy and its benefits.

**Stretch goal:** Add a simple query function that, given a k-mer, returns the merged color set via its minimizer.

### Intermediate — Indexing and Querying with Kaminari on Bacterial Genomes
*Effort: 2 weekends, ~20 hours*

You set up and run the Kaminari software from the authors' GitHub repository to build an approximate colored k-mer index on a small bacterial genome dataset (e.g., E. coli genomes). You then run queries and measure index size and query time, comparing results against a simple Bloom filter-based baseline implemented in Python or an existing Bloom filter library.

**Why it shows you understood the paper:** This project demonstrates practical skills in running the authors' implementation, reproducing key results on index size and query speed, and understanding the trade-offs of Kaminari's approach versus Bloom filters.

**Grounded in:** Key results: Kaminari consistently produces the smallest indexes on disk compared to competitors, often by an order of magnitude; queries with Kaminari are significantly faster than exact tools and competitive or better than other approximate tools.

**Tech stack:** Python 3.11, C++ (for Kaminari), Linux shell, Git

**Data:** Use publicly available E. coli genome assemblies from NCBI RefSeq as a substitute for the paper's Ecoli dataset.

**Build it:**

1. Clone and build the Kaminari software from https://github.com/yhhshb/kaminari.
2. Download a small set of E. coli genome assemblies from NCBI RefSeq.
3. Build a Kaminari index on these genomes using the provided commands.
4. Implement or use a simple Bloom filter-based k-mer index as a baseline.
5. Run a set of k-mer queries on both indexes and record index sizes and query times.
6. Analyze and document the comparison results in a README.

**Verified links from the paper:**

- <https://github.com/yhhshb/kaminari> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to build and query Kaminari and Bloom filter indexes on bacterial genomes, benchmark results comparing index size and query speed, and a README discussing findings.

**Stretch goal:** Add evaluation of false positive rates and ranking quality using the Rank-Biased Overlap (RBO) metric.

### Advanced — Repetition-Aware Compression for Kaminari Color Sets
*Effort: 3+ weeks, ~60+ hours*

You extend the Kaminari indexing pipeline by implementing a repetition-aware compression scheme for color sets, inspired by the paper's future direction. This involves analyzing color set redundancies and applying compression techniques (e.g., run-length encoding or delta encoding) to reduce storage. You evaluate the impact on index size and query speed on a medium-scale metagenomic dataset.

**Why it shows you understood the paper:** This project shows deep comprehension of Kaminari's data structures and limitations, and the ability to innovate by addressing a stated future direction, potentially improving the tool's scalability and efficiency.

**Grounded in:** Future direction: Investigate repetition-aware compression techniques to further reduce color set storage.

**Tech stack:** Python 3.11, C++ (for Kaminari modification), Linux shell, Git, Compression libraries (e.g., zlib)

**Data:** Use a publicly available metagenomic dataset such as a subset of the Human Microbiome Project data or simulated metagenomic reads as a proxy for complex datasets.

**Build it:**

1. Study Kaminari's color set storage and compression implementation in the source code.
2. Design and implement a repetition-aware compression scheme for color sets (e.g., run-length or delta encoding).
3. Integrate the compression scheme into Kaminari's index construction pipeline.
4. Build indexes on a metagenomic dataset with and without the new compression.
5. Measure and compare index sizes, query times, and false positive rates.
6. Document the implementation, evaluation, and discuss trade-offs in a detailed README.

**Verified links from the paper:**

- <https://github.com/yhhshb/kaminari> — released by the paper's authors

**Ships as:** A forked Kaminari codebase with repetition-aware compression, benchmark results showing storage and performance impact, and a comprehensive README explaining the approach and findings.

**Stretch goal:** Explore partitioned external-memory indexes to scale Kaminari to terabyte-scale collections as a next step.

_The intermediate and advanced projects rely on publicly available bacterial or metagenomic genome datasets as substitutes for the paper's datasets; verify dataset availability and size suitability before starting._
