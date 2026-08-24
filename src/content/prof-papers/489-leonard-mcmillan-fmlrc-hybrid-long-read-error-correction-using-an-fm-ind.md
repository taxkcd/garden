---
title: "489 · FMLRC: Hybrid long read error correction using an FM-index — Leonard McMillan"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-leonard-mcmillan"
source_hash: "4cd038eb314807463c3b4f6a8d69ccd6bcc4d4e7c437d2f3f665b14fca922e84"
sequence: 489
generator: "outreach-garden: managed"
---

# 489 · FMLRC: Hybrid long read error correction using an FM-index

## At a glance

- **Professor:** Leonard McMillan
- **Institution:** University of North Carolina
- **Paper:** [FMLRC: Hybrid long read error correction using an FM-index](https://bmcbioinformatics.biomedcentral.com/track/pdf/10.1186/s12859-018-2051-3)
- **Authors:** Jeremy R. Wang, James Holt, Leonard McMillan, Corbin D. Jones
- **Year:** 2018

## Paper overview

This paper presents FMLRC, a new computational method to improve the accuracy of long DNA sequencing reads by correcting errors using complementary short reads. The method uses an FM-index data structure to efficiently represent all de Bruijn graphs of the short-read dataset, enabling dynamic and accurate error correction. This improves genome assembly quality and reduces computational costs compared to existing methods.

### Why it matters

**Research problem:** Long read sequencing technologies produce longer DNA reads but with high error rates, complicating genome assembly. Existing hybrid error correction methods that use short reads to correct long reads are often computationally expensive, slow, or produce biased results by trimming or discarding data.

**Why it matters:** Accurate long read correction is critical for assembling complex genomes effectively and economically. Improving correction methods enables better genome assemblies, which are essential for advances in genetics, genomics, and computational biology.

**Key contributions:**

- Novel application of FM-index to represent all de Bruijn graphs of short-read data for hybrid long read error correction.
- Two-pass correction strategy using short and long k-mers to handle both simple and complex repetitive regions.
- Dynamic adjustment of correction parameters at runtime based on k-mer frequencies in each long read.
- Efficient computational implementation requiring less CPU time and memory than existing hybrid correction methods.
- Demonstration of improved throughput and contiguity in de novo genome assemblies using corrected reads.

## About the professor

**Leonard McMillan** — null, null, University of North Carolina.

Research interests: null

### Research links

- [Faculty/profile page](https://cs.unc.edu/person/leonard-mcmillan/)
- [Identity evidence](http://www.csbio.unc.edu/mcmillan/index.py)
- [Identity evidence](https://dblp.org/pid/m/LeonardMcMillan.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** FM-index and Burrows-Wheeler Transform
**The paper assumes:** FM-index data structure, Burrows-Wheeler Transform, string indexing algorithms
**Already in this field?** Skip this entirely if you already understand the FM-index and Burrows-Wheeler Transform and their use in bioinformatics sequence analysis.

This background focuses on understanding the FM-index and Burrows-Wheeler Transform (BWT), which are central to the FMLRC method for hybrid long read error correction. The rigorous course option offers a deep, structured exploration of these data structures and their algorithmic foundations, while the fast track provides a concise, intuition-driven introduction suitable for quickly grasping the key concepts without extensive time investment. Choose the course for a thorough foundation or the fast track for an efficient conceptual overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bioinformatics](https://www.youtube.com/playlist?list=PLv2ffmaeyPQU-WCFidLXmo6OX7UYWkS0A) — abardill · 6 videos · 5.6h across 6 episodes

**Watch only this:** Episodes 1 (Burrows-Wheeler Transform) and 4 (FM Index), about 1 hour 50 minutes total — these two episodes succinctly explain the key data structures used in the paper.

*Why it unblocks this paper:* The 'Bioinformatics' playlist by abardill includes focused episodes on the Burrows-Wheeler Transform and FM-index that provide clear, visual explanations suitable for quickly grasping the core concepts behind FMLRC's use of these data structures.

*If you want all of it:* All 6 episodes, about 5.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FMLRC paper, start by building a strong foundation on the Burrows-Wheeler Transform and FM-index data structures, as these underpin the method's efficient k-mer querying. Next, study de Bruijn graphs in genome assembly to grasp the graph model implicit in the FM-index representation. Finally, focus on the core concept of hybrid long read error correction and the authors' own talk on FMLRC to understand the novel algorithmic contributions and empirical results.

### Burrows-Wheeler Transform *(prerequisite)*
The Burrows-Wheeler Transform (BWT) is a reversible string transformation that rearranges characters to enable efficient compression and indexing. It forms the foundation for building the FM-index, which is central to FMLRC's approach. Understanding BWT is critical to grasp how the FM-index implicitly represents all de Bruijn graphs of the short-read data.

*How the paper uses it:* FMLRC builds its FM-index on a multi-string BWT of the short-read dataset to enable efficient k-mer queries.

▶ [Fundamentals of Stringology IV: The Burrows-Wheeler Transform](https://www.youtube.com/watch?v=y5G3ddg0moo) — Simons Institute for the Theory of Computing · 1:07:00 · 10 years ago

### FM-index data structure *(prerequisite)*
The FM-index is a compressed full-text substring index based on the BWT that supports fast substring queries. It enables FMLRC to retrieve k-mer frequencies in O(k) time, allowing dynamic and flexible error correction without explicitly constructing multiple de Bruijn graphs. A solid understanding of the FM-index is essential to appreciate FMLRC's computational efficiency.

*How the paper uses it:* FMLRC uses an FM-index built from the multi-string BWT of short-read data to implicitly represent all de Bruijn graphs and perform efficient k-mer frequency queries.

▶ [5. Library Complexity and Short Read Alignment (Mapping)](https://www.youtube.com/watch?v=P3ORBMon8aw) — MIT OpenCourseWare · 1:20:06 · 11 years ago

### de Bruijn graphs in genome assembly *(prerequisite)*
De Bruijn graphs model overlaps between k-mers in sequencing reads and are widely used in genome assembly and error correction. FMLRC leverages the FM-index to implicitly represent all de Bruijn graphs at arbitrary k-mer lengths, enabling dynamic correction passes. Understanding de Bruijn graphs is crucial to comprehend the graph-based nature of the error correction approach.

*How the paper uses it:* FMLRC implicitly represents all de Bruijn graphs of the short-read dataset via the FM-index to perform hybrid long read error correction.

▶ [Lec 31 Genome assembly using de Bruijn graphs](https://www.youtube.com/watch?v=XU73_ofTjws) — NPTEL - Indian Institute of Science, Bengaluru · 45:53 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FMLRC paper, start by learning the foundational data structures and concepts it builds upon: the Burrows-Wheeler Transform (BWT) and the FM-index, which enable efficient sequence queries. Next, grasp the role of de Bruijn graphs in genome assembly and error correction. Finally, explore the core concept of hybrid long read error correction, focusing on how FMLRC uses these data structures to improve long read accuracy using short reads.

### Burrows-Wheeler Transform *(prerequisite)*
The Burrows-Wheeler Transform (BWT) rearranges a string's characters to group similar characters together, enabling efficient compression and indexing. Understanding BWT is key because it forms the basis for building the FM-index, which FMLRC uses to query k-mers efficiently.

*How the paper uses it:* FMLRC builds an FM-index from a multi-string BWT of short-read data to represent all de Bruijn graphs implicitly.

▶ [Burrows-Wheeler Transform](https://www.youtube.com/watch?v=4n7NPk5lwbI) — Ben Langmead · 37:00 · 11 years ago

### FM-index data structure *(prerequisite)*
The FM-index is a compressed full-text index built on the BWT that allows fast substring queries in a large dataset. It enables FMLRC to efficiently retrieve k-mer frequencies from short reads in O(k) time, which is crucial for dynamic error correction.

*How the paper uses it:* FMLRC uses the FM-index to perform efficient k-mer frequency lookups for error correction without explicitly storing all k-mers.

▶ [5. Library Complexity and Short Read Alignment (Mapping)](https://www.youtube.com/watch?v=P3ORBMon8aw) — MIT OpenCourseWare · 1:20:06 · 11 years ago

### de Bruijn graphs in genome assembly *(prerequisite)*
De Bruijn graphs represent sequences as paths through overlapping k-mers, enabling efficient genome assembly and error correction by modeling sequence connectivity. Understanding these graphs helps explain how FMLRC implicitly represents all de Bruijn graphs of the short-read data using the FM-index.

*How the paper uses it:* FMLRC implicitly represents all de Bruijn graphs of the short-read dataset via the FM-index to guide error correction of long reads.

▶ [De Bruijn Graphs](https://www.youtube.com/watch?v=f-ecmECK7lw) — Bioinformatics Algorithms: An Active Learning Approach · 6:14 · 12 years ago

### Hybrid long read error correction
Hybrid long read error correction uses accurate short reads to correct errors in longer, noisier reads, improving assembly quality. FMLRC innovates by using an FM-index-based approach to perform two-pass correction with different k-mer lengths, preserving long-range information without trimming reads.

*How the paper uses it:* The paper's core contribution is FMLRC, a hybrid error correction method that uses short-read FM-index data to correct long reads efficiently and accurately.

▶ [Long read sequencing – PacBio and Oxford Nanopore sequencing explained in 11 minutes](https://www.youtube.com/watch?v=y4Thnz0hFUc) — INTEGRA Biosciences · 11:02 · 2 years ago

## Already in your library

- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)
- [Steve Girvin - Introduction to Quantum Error Correction](https://www.youtube.com/watch?v=uD69GCYF9Zg) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the FMLRC paper. The beginner project familiarizes you with the FM-index concept and k-mer frequency querying on short-read data. The intermediate project involves running and extending the authors' FMLRC code to perform hybrid error correction on real datasets and compare results. The advanced project tackles a stated limitation by adapting FMLRC's dynamic parameter adjustment to nanopore sequencing error profiles, exploring improvements for emerging long-read technologies.

### Beginner — FM-index k-mer frequency query tool
*Effort: a weekend, ~8 hours*

You build a command-line tool that loads a Burrows-Wheeler Transform (BWT) and FM-index built from short-read sequencing data and allows querying arbitrary k-mers to return their frequency counts. This reproduces the core data structure usage in FMLRC for representing de Bruijn graphs implicitly.

**Why it shows you understood the paper:** This project shows you understand how the FM-index enables efficient k-mer frequency retrieval, a key mechanism that underpins FMLRC's hybrid error correction approach.

**Grounded in:** FMLRC uses an FM-index built from a multi-string BWT of short-read data to represent all de Bruijn graphs implicitly.

**Tech stack:** Python 3.11, Biopython, numpy

**Data:** Use a publicly available short-read dataset from E. coli or S. cerevisiae (e.g., from NCBI SRA) or simulate short reads from a small reference genome.

**Build it:**

1. Implement or reuse code to construct a BWT and FM-index from a set of short reads.
2. Build functions to query the FM-index for arbitrary k-mers and return their frequency counts.
3. Create a CLI interface to input k-mers and output their frequencies.
4. Test the tool on example k-mers from the dataset and verify counts match expectations.
5. Document the relationship between FM-index queries and de Bruijn graph k-mer counts.

**Ships as:** A GitHub repo with the FM-index query tool code, example data, usage instructions, and a README explaining how FM-index supports de Bruijn graph representation as used in FMLRC.

**Stretch goal:** Add visualization of k-mer frequency distributions and explore how varying k affects frequency profiles.

### Intermediate — Run and evaluate FMLRC hybrid error correction
*Effort: 1-3 weekends*

You set up and run the FMLRC tool from the authors' implementation on publicly available PacBio long-read datasets and complementary short-read data for E. coli or S. cerevisiae. You then compare correction accuracy and runtime against a baseline hybrid correction method such as LoRDEC.

**Why it shows you understood the paper:** This project demonstrates your ability to use the authors' FM-index based hybrid correction method, reproduce key results, and understand the two-pass correction strategy and its impact on assembly quality.

**Grounded in:** FMLRC corrected more loci with competitive sensitivity, specificity, and gain compared to other hybrid and long-read-only methods on E. coli, S. cerevisiae, and A. thaliana datasets.

**Tech stack:** Linux shell, Python 3.11, Git, FMLRC (authors' code), LoRDEC (third-party)

**Data:** Use the PacBio datasets for E. coli K12 MG1655 and complementary short-read datasets as listed in the paper, available from (link removed — unverified) and (link removed — unverified)

**Build it:**

1. Clone and install the FMLRC tool from https://github.com/txje/lrc_eval and http://github.com/holtjma/fmlrc.
2. Download the E. coli PacBio long-read and short-read datasets used in the paper.
3. Build the FM-index from the short-read data using the authors' msbwt tool.
4. Run FMLRC two-pass correction on the long reads.
5. Run LoRDEC correction on the same data as a baseline.
6. Evaluate correction accuracy using the authors' evaluation code and compare CPU time and memory usage.
7. Document the results, including sensitivity, specificity, and gain metrics.

**Verified links from the paper:**

- <https://github.com/txje/lrc_eval> — released by the paper's authors
- <https://github.com/holtjma/msbwt> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/lh3/miniasm> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/lh3/minimap> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts to run FMLRC and LoRDEC on the datasets, evaluation results, plots comparing correction accuracy and resource usage, and a README explaining the two-pass correction and FM-index usage.

**Stretch goal:** Modify FMLRC parameters dynamically for different datasets and analyze the impact on correction accuracy.

### Advanced — Adapt FMLRC dynamic parameter tuning for nanopore error profiles
*Effort: a few weeks*

You extend the FMLRC method by adapting its dynamic k-mer frequency parameter adjustment to better handle nanopore sequencing data, which has different error characteristics than PacBio. You implement parameter tuning strategies and evaluate correction accuracy improvements on nanopore datasets.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction of the paper, showing deep comprehension of FMLRC's runtime parameter adjustment and its challenges with evolving long-read technologies.

**Grounded in:** Further improvements are needed to optimize performance specifically for nanopore sequencing data due to different error profiles.

**Tech stack:** Python 3.11, Linux shell, FMLRC codebase, Nanopore sequencing data processing tools

**Data:** Use publicly available nanopore long-read datasets from E. coli or yeast (e.g., from NCBI SRA) and complementary short-read data from the same or similar strains.

**Build it:**

1. Study the existing FMLRC dynamic parameter adjustment mechanism for k-mer frequency thresholds.
2. Collect nanopore long-read and matching short-read datasets.
3. Analyze nanopore error profiles and compare to PacBio profiles.
4. Modify FMLRC's parameter adjustment heuristics to better fit nanopore error characteristics.
5. Run corrected reads through assembly and evaluate improvements in correction accuracy and assembly contiguity.
6. Document challenges, parameter choices, and results.

**Verified links from the paper:**

- <https://github.com/txje/lrc_eval> — released by the paper's authors
- <https://github.com/holtjma/msbwt> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with your modified FMLRC code, parameter tuning scripts, evaluation results on nanopore data, and a detailed README discussing the adaptation and its impact.

**Stretch goal:** Integrate your adapted FMLRC with downstream assembly tools to build a modular nanopore assembly pipeline.

_Ensure availability and compatibility of nanopore datasets and short-read data for the advanced project before starting._
