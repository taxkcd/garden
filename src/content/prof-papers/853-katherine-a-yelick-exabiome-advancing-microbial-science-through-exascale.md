---
title: "853 · Exabiome: Advancing Microbial Science through Exascale Computing — Katherine A. Yelick"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-katherine-a-yelick"
source_hash: "0fc6c87d754718121716387ab499ec20671169cd4a81f1943773f89f7b0861f4"
sequence: 853
generator: "outreach-garden: managed"
---

# 853 · Exabiome: Advancing Microbial Science through Exascale Computing

## At a glance

- **Professor:** Katherine A. Yelick
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Exabiome: Advancing Microbial Science through Exascale Computing](https://escholarship.org/content/qt78r6h422/qt78r6h422.pdf?t=smw4qm)
- **Authors:** Steven Hofmeyr, Katherine Yelick, Aydin Buluç, Robert Riley, Rob Egan, Oguz Selvitopi, Leonid Oliker, Migun Shakya, Brett Youtsey, Ariful Azad
- **Year:** 2024

## Paper overview

The Exabiome project develops advanced computational tools that use exascale supercomputers to analyze complex microbial communities (microbiomes) by assembling genetic data, detecting protein families, and comparing metagenomes. These tools enable scientists to discover rare species, novel proteins, and better understand microbiomes in various environments, which was previously impossible due to computational limits.

### Why it matters

**Research problem:** Metagenomic analysis involves assembling and analyzing vast amounts of short, error-prone DNA sequences from mixed microbial communities. Traditional tools are limited to small datasets and shared-memory systems, making it infeasible to analyze large-scale metagenomic data comprehensively, especially for coassembly of many samples and detection of rare species and novel proteins.

**Why it matters:** Microbiomes impact human health, agriculture, the environment, and biotechnology. Understanding their composition and function requires analyzing large and complex genetic datasets. Improved computational methods can reveal rare and uncultured species, novel protein families, and functional diversity, enabling breakthroughs in biology and medicine.

**Key contributions:**

- MetaHipMer: first metagenome assembler to scale efficiently on exascale distributed-memory systems, enabling coassembly of very large datasets.
- PASTIS: a high-performance many-to-many protein sequence similarity search tool using sparse matrix operations, ported to GPUs for significant speedup.
- HipMCL: scalable distributed-memory implementation of Markov clustering for large protein similarity graphs, also GPU-accelerated.
- kmerprof: tool for comparative k-mer analysis of metagenomes, enabling reference-free comparison of large datasets.
- Demonstration of scientific impact through record-breaking assemblies (e.g., Tara Oceans, Human Microbiome Project) and discovery of rare microbial genomes, novel protein families, and effective metagenome clustering by body site.

## About the professor

**Katherine A. Yelick** — Robert S. Pepper Distinguished Professor of Electrical Engineering and Computer Sciences, Electrical Engineering and Computer Sciences, Univ. of California - Berkeley.

Research interests: high performance computing, partitioned global address space programming, communication-avoiding algorithms, automatic performance tuning, high performance data analytics, computational biology

### Research links

- [Faculty/profile page](https://www2.eecs.berkeley.edu/Faculty/Homepages/yelick.html)
- [Professor website](https://vcresearch.berkeley.edu/faculty/katherine-yelick)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel and Distributed Computing
**The paper assumes:** parallel programming models, distributed-memory architectures, communication overhead in HPC, scalable algorithms for distributed systems
**Already in this field?** Skip this entirely if you already understand parallel and distributed computing concepts and programming models for high-performance computing.

This background focuses on parallel and distributed computing fundamentals essential for understanding the scaling and performance optimization challenges in the Exabiome paper, such as distributed-memory programming, communication overhead, and GPU acceleration. The rigorous course option provides a deep, structured university-level lecture series, while the fast track offers a concise, visual introduction to key concepts for quicker comprehension. Readers should choose based on their available time and depth of prior knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 Parallel Computing](https://www.youtube.com/playlist?list=PLosJChMwPtizq2swoD8DZXc567PJ9YKnn) — kein406 · 18 videos

**Watch only this:** Lectures 1-8 ("Why Parallelism? Why Efficiency?" through "Data-Parallel Thinking"), about 10.3 hours — these cover parallelism motivation, multi-core architectures, programming basics, performance optimization, and GPU programming fundamentals needed to grasp the paper's computational methods.

*Why it unblocks this paper:* This is a comprehensive, authoritative Stanford university course on parallel computing covering essential topics like parallel programming basics, performance optimization, GPU architecture, and distributed data-parallel computing, directly relevant to understanding MetaHipMer and PASTIS implementations and scalability challenges.

*If you want all of it:* 23.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Parallel and Distributed Computing](https://www.youtube.com/playlist?list=PLN_HuE6xiyo8) — Debugging Myself · 15 videos · 6.3h across 15 episodes

**Watch only this:** Episodes 1-7 ("Parallel & Distributed Computing Explained" through "Communication Cost & Interconnection Networks Explained"), about 3 hours 5 minutes — covers core principles of parallelism, performance, communication overhead, and architectures relevant to the paper.

*Why it unblocks this paper:* This concise playlist provides clear, intuition-first explanations of parallel and distributed computing concepts such as performance, communication costs, memory coherence, and parallel algorithm design, offering a quick yet solid foundation for readers new to the subject or short on time.

*If you want all of it:* 6.3 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Exabiome paper, start with foundational knowledge of distributed-memory parallel computing, which underpins the scalability of the MetaHipMer assembler. Then study sparse matrix algorithms on GPUs and the Markov clustering algorithm, both critical for accelerating protein similarity search and clustering in Exabiome. Next, review k-mer based metagenome comparison methods to grasp reference-free metagenomic analysis. Finally, focus on the core concept of metagenome assembly at exascale, and conclude with the authors' own talk on the Exabiome project to gain direct insights into their tools and scientific impact.

### Distributed-memory parallel computing *(prerequisite)*
Distributed-memory parallel computing is the foundational architecture enabling the scaling of metagenome assembly across thousands of nodes in exascale supercomputers. Understanding this concept is essential to appreciate how MetaHipMer achieves efficient coassembly of massive datasets.

*How the paper uses it:* MetaHipMer is implemented in UPC++ and designed for distributed-memory exascale systems, making this prerequisite critical to understanding its scalability.

▶ [Parallel Computing: Distributed Memory and Communication](https://www.youtube.com/watch?v=E9wcjHVJBl0) — S2I2 SICM2 · 1:20:58 · 13y ago

### Sparse matrix algorithms on GPUs *(prerequisite)*
Sparse matrix algorithms on GPUs are key to accelerating protein similarity searches and clustering in Exabiome's PASTIS and HipMCL tools. A solid grasp of these algorithms helps understand how large-scale protein similarity computations are efficiently performed.

*How the paper uses it:* PASTIS and HipMCL use distributed sparse matrix operations and GPU acceleration to achieve high performance in protein similarity search and clustering.

▶ [HetSys Course: Lecture 11: Parallel Patterns: Sparse Matrices (Fall 2022)](https://www.youtube.com/watch?v=4cMGWoNYhe0) — Onur Mutlu Lectures · 53:07 · 3y ago

### Markov clustering algorithm *(prerequisite)*
The Markov clustering algorithm underlies HipMCL, the scalable clustering tool used for protein family detection in Exabiome. Understanding the algorithm's principles is important to appreciate how large protein similarity graphs are clustered efficiently.

*How the paper uses it:* HipMCL implements a distributed-memory, GPU-accelerated version of the Markov clustering algorithm for large protein similarity graphs.

▶ [MIT: Machine Learning 6.036, Lecture 13: Clustering (Fall 2020)](https://www.youtube.com/watch?v=BaZWcSq3IuI) — Tamara Broderick · 1:15:28 · 5y ago

### K-mer based metagenome comparison *(prerequisite)*
K-mer based metagenome comparison enables reference-free analysis and clustering of metagenomic samples, as implemented in the kmerprof tool. Understanding this method is crucial for grasping how Exabiome compares large metagenomic datasets without relying on reference genomes.

*How the paper uses it:* kmerprof uses k-mer based distances to cluster human microbiome samples effectively by body site.

▶ [Introduction to metagenomics](https://www.youtube.com/watch?v=gWzUWa7-UWA) — Mark Pallen · 20:59 · 8y ago

### Metagenome assembly at exascale
Metagenome assembly at exascale is the core method enabling reconstruction of microbial genomes from massive datasets. This concept covers the challenges and solutions in assembling metagenomes efficiently on exascale supercomputers, central to the Exabiome project.

*How the paper uses it:* MetaHipMer is the first metagenome assembler to scale efficiently on exascale distributed-memory systems, enabling record-breaking coassemblies.

▶ [Reconstructing ocean life: metagenome assembled genomes in marine research](https://www.youtube.com/watch?v=XzZPuK7vmLg) — EMBL's European Bioinformatics Institute EMBL-EBI · 1:12:27 · 10d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Exabiome paper from a beginner to advanced perspective, start by learning the basics of distributed-memory parallel computing, which is essential for scaling metagenome assembly on supercomputers. Next, grasp sparse matrix algorithms on GPUs, a key technique for accelerating protein similarity search and clustering. Then, study the Markov clustering algorithm, which underpins scalable protein family detection in the paper. After that, learn about k-mer based metagenome comparison, a method for reference-free comparison of metagenomic samples. Finally, explore the core concept of metagenome assembly at exascale, which enables large-scale microbial genome reconstruction as demonstrated by the Exabiome project.

### Distributed-memory parallel computing *(prerequisite)*
Distributed-memory parallel computing involves multiple computers (nodes) each with their own memory working together by passing messages. This architecture allows programs to scale beyond the limits of a single machine's memory and processors, which is crucial for handling very large datasets efficiently.

*How the paper uses it:* MetaHipMer, the core metagenome assembler in Exabiome, is designed to run efficiently on distributed-memory exascale supercomputers.

▶ [Parallel and Distributed Computing 7: Distributed Memory Architecture](https://www.youtube.com/watch?v=3wq2_179N8Q) — Arfan Shahzad · 19:28 · 6y ago

### Sparse matrix algorithms on GPUs *(prerequisite)*
Sparse matrix algorithms focus on efficiently storing and computing with matrices that have mostly zero elements, which saves memory and computation time. GPUs can accelerate these operations massively, enabling fast protein similarity searches and clustering in large datasets.

*How the paper uses it:* PASTIS and HipMCL use sparse matrix operations accelerated on GPUs to perform large-scale protein similarity searches and clustering.

▶ [Iterative methods for sparse linear systems on GPU (2)](https://www.youtube.com/watch?v=74cPZO_4Edw) — Boston University · 47:03 · 15y ago

### Markov clustering algorithm *(prerequisite)*
Markov clustering is a graph clustering algorithm that simulates random walks to find groups of closely related nodes. It is widely used to detect protein families by clustering similarity graphs, helping to identify functional groups in biological data.

*How the paper uses it:* HipMCL implements a scalable distributed-memory version of Markov clustering to detect large protein families in Exabiome.

▶ [MIT: Machine Learning 6.036, Lecture 13: Clustering (Fall 2020)](https://www.youtube.com/watch?v=BaZWcSq3IuI) — Tamara Broderick · 1:15:28 · 5y ago

### K-mer based metagenome comparison *(prerequisite)*
K-mers are short DNA sequences of length k used to represent genetic data compactly. Comparing metagenomes by their k-mer content allows reference-free analysis and clustering of samples based on their genetic similarity without needing known genomes.

*How the paper uses it:* kmerprof uses k-mer based distances to compare and cluster metagenomic samples effectively in the Exabiome project.

▶ [Introduction to metagenomics](https://www.youtube.com/watch?v=gWzUWa7-UWA) — Mark Pallen · 20:59 · 8y ago

### Metagenome assembly at exascale
Metagenome assembly reconstructs genomes from mixed microbial DNA sequences. Scaling this process to exascale supercomputers enables coassembly of thousands of samples, improving recovery of rare species and novel proteins that were previously inaccessible.

*How the paper uses it:* MetaHipMer is the first metagenome assembler to scale efficiently on exascale distributed-memory systems, enabling record-breaking assemblies in Exabiome.

▶ [Reconstructing ocean life: metagenome assembled genomes in marine research](https://www.youtube.com/watch?v=XzZPuK7vmLg) — EMBL's European Bioinformatics Institute EMBL-EBI · 1:12:27 · 10d ago

## Already in your library

- [Microbiome/Metagenome Analysis Workshop: Introduction to Metagenomics](https://www.youtube.com/watch?v=LUS62N7tSUU) — also for: Exabiome: Advancing Microbial Science through Exascale Computing (Katherine A. Yelick)
- [Bioinformatics Workshop 2022 Module 5: Metagenome Assembly & MAGs](https://www.youtube.com/watch?v=hKHe6yYY8k0) — also for: Exabiome: Advancing Microbial Science through Exascale Computing (Katherine A. Yelick)
- [Sparse matrix algorithms (Stanford, June 2013, Tim Davis)](https://www.youtube.com/watch?v=7ph4ZQ9oEIc) — also for: SCEMENT: scalable and memory efficient integration of large-scale single-cell RNA-sequencing data (Srinivas Aluru)
- [Lecture 16 - Sparse Matrix Computation (COO and CSR)](https://www.youtube.com/watch?v=SRgFScHYTy4) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [How AI Discovered a Faster Matrix Multiplication Algorithm](https://www.youtube.com/watch?v=fDAPJ7rvcUw) — also for: Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU (Giulia Guidi)
- [16. Markov Chains I](https://www.youtube.com/watch?v=IkbkEtOOC1Y) — also for: Sampling Colorings Close to the Maximum Degree: Non-Markovian Coupling and Local Uniformity (Vishesh Jain)
- [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Introduction to k-mers](https://www.youtube.com/watch?v=DyZvATM9Hr8) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)
- [Metagenomics Explained in minutes](https://www.youtube.com/watch?v=2awxFUnA9r4) — also for: Exabiome: Advancing Microbial Science through Exascale Computing (Katherine A. Yelick)
- [What is k-mer ?](https://www.youtube.com/watch?v=9YDDT68JvZA) — also for: SKiM: accurately classifying metagenomic ONT reads in limited memory (Jaroslaw Zola)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the Exabiome paper's core contributions and challenges. The beginner project focuses on k-mer based metagenome comparison, a lightweight but key method from the paper. The intermediate project involves reimplementing a core protein similarity search and clustering pipeline on a smaller public dataset, reflecting the paper's scalable protein family detection approach. The advanced project tackles a stated limitation by exploring communication-efficient parallel algorithms for metagenome assembly, connecting to the paper's future directions and your software engineering skills.

### Beginner — K-mer Based Metagenome Comparison Tool
*Effort: a weekend, ~8 hours*

You build a small command-line tool that computes k-mer frequency profiles from metagenomic short-read datasets and compares multiple samples using k-mer based distances. The tool will cluster samples by similarity and visualize the results using a simple dendrogram or heatmap.

**Why it shows you understood the paper:** This project demonstrates your grasp of the kmerprof tool's core idea for reference-free metagenome comparison and clustering, a key contribution of the paper. It shows you understand how k-mer profiles can reveal sample relationships without assembly or reference genomes.

**Grounded in:** kmerprof: tool for comparative k-mer analysis of metagenomes, enabling reference-free comparison of large datasets.

**Tech stack:** Python 3.11, Biopython, matplotlib, scipy

**Data:** Use publicly available small metagenomic short-read datasets from NCBI SRA or simulate small synthetic metagenomes with known differences.

**Build it:**

1. Write a script to parse FASTQ files and count k-mers (e.g., k=15) efficiently.
2. Aggregate k-mer counts into frequency profiles per sample.
3. Compute pairwise distances between samples using a metric like Jaccard or cosine similarity on k-mer profiles.
4. Cluster samples using hierarchical clustering and plot a dendrogram or heatmap.
5. Validate the tool on at least 5 small metagenomic samples and interpret clustering results.

**Ships as:** A GitHub repo with the k-mer comparison tool, example datasets or instructions to download them, and a README showing clustering visualizations and interpretation.

**Stretch goal:** Add a web-based interactive visualization of sample clusters using React or Plotly.

### Intermediate — Protein Similarity Search and Clustering Pipeline
*Effort: 2 weekends, ~20 hours*

You implement a simplified protein sequence similarity search and clustering pipeline inspired by PASTIS and HipMCL. Using a public protein dataset, you compute pairwise similarities, represent them as a sparse matrix, and cluster proteins using Markov clustering. You compare clustering results to a baseline method.

**Why it shows you understood the paper:** This project reflects the paper's core scalable protein family detection approach using sparse matrix operations and Markov clustering. It shows you understand distributed-memory algorithms and GPU acceleration challenges at a smaller scale.

**Grounded in:** PASTIS: a high-performance many-to-many protein sequence similarity search tool using sparse matrix operations; HipMCL: scalable distributed-memory Markov clustering for large protein similarity graphs.

**Tech stack:** Python 3.11, NumPy, SciPy sparse, Biopython, networkx, scikit-learn

**Data:** Use a public protein sequence dataset such as UniProtKB/Swiss-Prot subset or a small environmental protein dataset from NCBI.

**Build it:**

1. Download and preprocess protein sequences from the chosen dataset.
2. Implement pairwise protein similarity search using a simple alignment score or k-mer based similarity.
3. Construct a sparse similarity matrix representing protein pairs above a threshold.
4. Apply Markov clustering (MCL) on the sparse matrix using an existing Python MCL implementation or your own.
5. Compare clustering results to a baseline clustering method like k-means or hierarchical clustering.
6. Document runtime, memory usage, and clustering quality metrics.

**Ships as:** A GitHub repo with scripts for protein similarity search, sparse matrix construction, clustering, and a report comparing methods with visualizations.

**Stretch goal:** Experiment with GPU acceleration for sparse matrix operations using CuPy or PyTorch sparse tensors.

### Advanced — Communication-Efficient Parallel Metagenome Assembler Prototype
*Effort: 3+ weeks*

You design and prototype a distributed-memory parallel metagenome assembler focusing on reducing communication overhead during graph construction and traversal. You implement a simplified assembler pipeline that partitions data across nodes, minimizes communication, and assembles contigs from short reads. You evaluate scalability on a small cluster or simulated distributed environment.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper: improving scalability by reducing communication overhead in metagenome assemblers like MetaHipMer. It demonstrates your ability to extend the paper's core methods and tackle exascale computing challenges.

**Grounded in:** Scaling efficiency drops at very high node counts due to communication overhead; future direction: development of more scalable and communication-efficient algorithms for exascale metagenomics.

**Tech stack:** C++17, MPI, Python 3.11 (for orchestration and analysis), CMake

**Data:** Use a small publicly available metagenomic short-read dataset (e.g., a subset of Tara Oceans or Human Microbiome Project) or simulated reads.

**Build it:**

1. Design a distributed data partitioning scheme for short reads and graph nodes.
2. Implement parallel k-mer counting and de Bruijn graph construction with MPI communication minimization.
3. Develop a parallel graph traversal and contig assembly algorithm with asynchronous communication.
4. Benchmark assembly quality and runtime scaling on increasing node counts.
5. Analyze communication overhead and propose optimizations.
6. Document design decisions, performance results, and limitations.

**Ships as:** A GitHub repo with the assembler prototype code, scripts to run distributed tests, and a detailed README with performance analysis and discussion.

**Stretch goal:** Integrate GPU acceleration for k-mer counting or graph traversal stages to explore heterogeneous computing.

_The paper authors did not release code or datasets; all projects rely on public or synthetic data and reimplementation from the paper's descriptions._
