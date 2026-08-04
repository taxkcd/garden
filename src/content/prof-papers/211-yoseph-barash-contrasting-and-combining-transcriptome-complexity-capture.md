---
title: "211 · Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads — Yoseph Barash"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yoseph-barash"
source_hash: "bccac58bcb8983e9cf79ddd61de137f6551c2e70a5eaeb931457f2f13c4a3ae5"
sequence: 211
generator: "outreach-garden: managed"
---

# 211 · Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads

## At a glance

- **Professor:** Yoseph Barash
- **Institution:** University of Pennsylvania
- **Paper:** [Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads](http://genome.cshlp.org/lookup/doi/10.1101/gr.278659.123)
- **Authors:** Seong Woo Han, San Jewell, Andrei Thomas-Tikhonenko, Yoseph Barash, et al.
- **Year:** 2024

## Paper overview

This study compares short-read and long-read RNA sequencing technologies to understand their strengths and weaknesses in capturing transcriptome complexity. The authors developed a pipeline, MAJIQ-L, to integrate data from both technologies, revealing that short reads detect more splice junctions while long reads better capture intron retention and full isoforms. They provide a visualization tool, VOILA v3, to aid combined analysis, highlighting the complementary nature of these sequencing methods.

### Why it matters

**Research problem:** How to quantitatively compare short-read and long-read RNA sequencing technologies in detecting transcriptome variations, whether these technologies can be effectively combined, and what benefits such combined analysis offers.

**Why it matters:** Understanding transcriptome complexity is crucial for genomic research, including identifying alternative splicing events and isoforms relevant to diseases. Short- and long-read sequencing have complementary strengths and limitations, and a clear comparison and integration method is needed to leverage both effectively.

**Key contributions:**

- Development of MAJIQ-L pipeline for integrated analysis of short- and long-read RNA-seq data.
- Comprehensive comparative evaluation of splice junction and intron retention detection between short and long reads across multiple datasets and algorithms.
- Demonstration that short reads detect ~30% more splice junctions, while long reads detect many more intron retention events and full isoforms.
- Identification of factors contributing to differences, including 3′ to 5′ bias in long reads and GC content effects.
- Creation of VOILA v3 visualization package for unified transcriptome analysis.

## About the professor

**Yoseph Barash** — Professor of Genetics, Genetics, University of Pennsylvania.

Research interests: The lab develops machine learning algorithms that integrate high-throughput data (RNASeq, CLIPSeq , PIPSeq, etc.) to infer RNA biogenesis and function, followed by experimental verifications of inferred mechanisms.

### Research links

- [Faculty/profile page](https://www.med.upenn.edu/apps/faculty/index.php/g275/p8507519)
- [Identity evidence](https://www.biociphers.org/yosephb)
- [Professor website](http://www.biociphers.org/)
- [Resolved homepage](https://biociphersadmin.wixsite.com/biociphers)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on integrating short- and long-read RNA sequencing data, start by building a strong foundation on alternative splicing and transcriptome complexity, which are the biological phenomena underlying the study. Next, explore computational methods for RNA-seq data analysis and splice junction detection algorithms to appreciate the technical challenges and solutions. Finally, focus on the paper's core contribution by examining the MAJIQ-L integrated analysis pipeline, including any talks by the authors or related workshops, to grasp the novel integration approach and visualization tools developed.

### Alternative splicing and transcriptome complexity *(prerequisite)*
This section covers the biological basis of transcriptome variation, focusing on alternative splicing mechanisms and their complexity. Understanding these concepts is crucial because the paper compares sequencing technologies in their ability to capture such transcriptome features.

*How the paper uses it:* The paper evaluates how short- and long-read sequencing capture alternative splicing and transcriptome complexity differently.

▶ [Long-Read Transcriptome Complexity and Cell-Type ...](https://www.youtube.com/watch?v=CivPG_qL2MU) — Simons Institute for the Theory of Computing · 32:25

### Computational analysis of RNA-seq data *(prerequisite)*
Learn about computational pipelines and methods used to process and interpret RNA sequencing data. This knowledge is essential to understand how the authors developed and benchmarked their MAJIQ-L pipeline for integrated analysis.

*How the paper uses it:* The paper develops computational methods to integrate and analyze short- and long-read RNA-seq data.

▶ [Transcriptomics 1: analyzing RNA-seq data by running bioinformatics pipelines](https://www.youtube.com/watch?v=WbJ9OA2vevk) — OmicsLogic · 6 years ago

### Splice junction detection algorithms *(prerequisite)*
This section focuses on algorithms that identify splice sites from RNA-seq data, a critical step for comparing the detection capabilities of short- and long-read sequencing technologies. Understanding these algorithms helps in appreciating the paper's comparative evaluation.

*How the paper uses it:* The paper compares splice junction detection between short- and long-read sequencing using various algorithms.

▶ [BSU seminar by Dr Heejung Shim](https://www.youtube.com/watch?v=3YNGnnsAQaE) — MRC Biostatistics Unit, University of Cambridge · 49:10

### MAJIQ-L integrated analysis pipeline
This is the core concept of the paper, detailing the novel pipeline developed to combine short- and long-read RNA-seq data for comprehensive transcriptome analysis. Watching talks or workshops related to MAJIQ/VOILA provides direct insight into the methodology and visualization tools.

*How the paper uses it:* MAJIQ-L is the central computational pipeline developed in the paper for integrated analysis of short- and long-read RNA-seq data.

▶ [Splicing analysis with MAJIQ/VOILA UPenn 052517 - Pr3](https://www.youtube.com/watch?v=Pskq9k3wT6I) — BioCiphersLab · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of RNA sequencing technologies, focusing on the differences between short- and long-read RNA-seq. Then, build intuition about alternative splicing and transcriptome complexity, which are the biological phenomena these technologies aim to capture. Next, explore computational analysis methods for RNA-seq data, followed by understanding splice junction detection algorithms critical for comparing sequencing outputs. Finally, learn about the MAJIQ-L pipeline, the core computational method developed in the paper to integrate short- and long-read RNA-seq data.

### RNA sequencing technologies *(prerequisite)*
RNA sequencing technologies allow us to read RNA molecules to understand gene expression and transcript structures. Short-read sequencing produces many short fragments, while long-read sequencing reads longer RNA molecules, each with unique strengths and limitations.

*How the paper uses it:* The paper compares short-read and long-read RNA sequencing technologies to assess their ability to capture transcriptome complexity.

▶ [StatQuest: A gentle introduction to RNA-seq](https://www.youtube.com/watch?v=tlf6wYJrwKY) — StatQuest with Josh Starmer · 18:26 · 8 years ago

### Alternative splicing and transcriptome complexity *(prerequisite)*
Alternative splicing is a process where a single gene can produce multiple RNA variants (isoforms), increasing transcriptome complexity. Understanding this biological mechanism helps grasp why detecting splice junctions and isoforms is important in RNA-seq analysis.

*How the paper uses it:* The study focuses on detecting alternative splicing events and transcriptome variations using RNA sequencing data.

▶ [Alternative splicing | mechanism of alternative splicing | eukaryotic rna processing](https://www.youtube.com/watch?v=gUS49c22gho) — Shomu's Biology · 19:06 · 2 years ago

### Splice junction detection algorithms *(prerequisite)*
Splice junction detection algorithms identify the boundaries where RNA segments are joined after splicing. Accurate detection is crucial for understanding transcript variants and comparing sequencing technologies.

*How the paper uses it:* The paper evaluates different algorithms for detecting splice junctions from short- and long-read data.

▶ [BSU seminar by Dr Heejung Shim](https://www.youtube.com/watch?v=3YNGnnsAQaE) — MRC Biostatistics Unit, University of Cambridge · 49:10

## Already in your library

- [7 Types of Alternative splicing in 6 minutes](https://www.youtube.com/watch?v=vRCzr-621qg) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
