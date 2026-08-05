---
title: "208 · krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement — Siavash Mirarab"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-siavash-mirarab"
source_hash: "dff5963b8365551e348defc73ae76bfd6fb962a40d0282298c4503e244894780"
sequence: 208
generator: "outreach-garden: managed"
---

# 208 · krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement

## At a glance

- **Professor:** Siavash Mirarab
- **Institution:** Univ. of California - San Diego
- **Paper:** [krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement](https://doi.org/10.1186/s13059-026-03999-y)
- **Authors:** Ali Osman Berk Şapcı, Siavash Mirarab
- **Year:** 2026

## Paper overview

This paper introduces krepp, a new computational method that uses k-mer based statistics to estimate distances between short DNA sequencing reads and reference genomes without requiring sequence alignment. It enables placing reads anywhere in the genome onto very large phylogenetic trees efficiently and accurately. This approach improves the analysis of metagenomic samples by allowing genome-wide phylogenetic placement at scale, surpassing existing marker-gene focused methods.

### Why it matters

**Research problem:** Current phylogenetic placement methods rely mostly on marker genes and sequence alignments, limiting their scalability and coverage for genome-wide metagenomic reads. There is a need for scalable, alignment-free methods that can accurately compute distances between short reads and large sets of diverse reference genomes and place reads on large phylogenies.

**Why it matters:** Accurate and scalable phylogenetic placement of reads is crucial for characterizing microbial communities, understanding evolutionary relationships, and improving downstream analyses such as sample differentiation and contamination detection. Existing alignment-based methods do not scale well to ultra-large reference datasets and miss most genome-wide reads.

**Key contributions:**

- Development of a scalable k-mer based maximum pseudo-likelihood method (krepp) for read-to-genome distance estimation.
- A novel LSH-based indexing scheme allowing inexact k-mer matches to increase sensitivity.
- A colored k-mer representation using a height-bounded multitree to efficiently represent reference genome sets.
- An algorithm for phylogenetic placement of reads on ultra-large backbone trees using estimated distances and likelihood ratio tests.
- Demonstration of krepp's scalability to over 120,000 microbial genomes and improved accuracy over alignment-based methods.

## About the professor

**Siavash Mirarab** — Professor, ECE Department, Univ. of California - San Diego.

Research interests: computational biology, evolutionary analyses on large-scale datasets

### Research links

- [Faculty/profile page](http://eceweb.ucsd.edu/~smirarab)
- [Resolved homepage](http://eceweb.ucsd.edu/~smirarab/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the krepp method for scalable genome-wide phylogenetic placement, start with foundational concepts including locality-sensitive hashing (LSH) and k-mer based sequence comparison, which underpin the method's scalable indexing and alignment-free distance estimation. Then, study maximum pseudo-likelihood estimation as the core statistical framework for distance estimation. Finally, focus on the core concept of the krepp method itself, prioritizing talks by the authors or closely related academic presentations to gain direct insight into the method's design and application.

### locality sensitive hashing lecture *(prerequisite)*
Locality-sensitive hashing (LSH) is fundamental to krepp's scalable k-mer indexing, enabling efficient approximate matching of k-mers within a Hamming distance threshold. Understanding LSH principles and implementations is essential to grasp how krepp achieves sensitivity and scalability in indexing large reference genome sets.

*How the paper uses it:* krepp uses LSH to index k-mers from reference genomes allowing inexact matches, boosting sensitivity and scalability.

▶ [LSH.8 Locality-sensitive hashing: the idea](https://www.youtube.com/watch?v=dgH0NP8Qxa8) — Victor Lavrenko · 10 years ago

### k-mer based sequence comparison lecture *(prerequisite)*
K-mer based sequence comparison is the foundational concept behind alignment-free read distance estimation used by krepp. Learning about k-mer counting, representation, and their use in genomic comparisons provides the biological and computational context for the method's approach.

*How the paper uses it:* krepp estimates read-to-genome distances using k-mer statistics without requiring sequence alignment.

▶ [K mers for analyzing genome skimming data (including phylogenies) by Siavash Mirarab](https://www.youtube.com/watch?v=jYt28lTkAvg) — Evolutionary Genomics and Bioinformatics · 4 years ago

### maximum pseudo-likelihood estimation lecture *(prerequisite)*
Maximum pseudo-likelihood estimation is the core statistical framework used by krepp to estimate read-to-genome distances from k-mer matches. Understanding this estimation technique clarifies how krepp models k-mer matches as independent and derives distance estimates efficiently.

*How the paper uses it:* krepp employs a maximum pseudo-likelihood framework to estimate distances based on k-mer matches.

▶ [Pseudo Likelihood](https://www.youtube.com/watch?v=144SOuqblnM) — Deep Foundations · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand krepp, start by learning what k-mers are and how they are used for alignment-free sequence comparison, which is foundational for the method. Next, grasp locality-sensitive hashing (LSH), the key technique enabling scalable approximate k-mer matching in krepp. Then, build intuition on maximum pseudo-likelihood estimation, the statistical framework krepp uses to estimate distances. Finally, explore phylogenetic placement methods to see how these distances are used to place reads on large evolutionary trees.

### k-mer based sequence comparison lecture *(prerequisite)*
K-mers are short subsequences of length k extracted from DNA sequences and are widely used for comparing sequences without alignment. Understanding k-mers helps grasp how krepp estimates distances between reads and genomes efficiently by counting and comparing these subsequences.

*How the paper uses it:* krepp uses k-mer statistics as the core data representation to estimate read-to-genome distances without alignment.

▶ [Introduction to k-mers](https://www.youtube.com/watch?v=DyZvATM9Hr8) — RobEdwards · 7 years ago

### locality sensitive hashing lecture *(prerequisite)*
Locality-sensitive hashing (LSH) is a technique to quickly find approximate matches in large datasets by hashing similar items to the same buckets with high probability. This enables krepp to efficiently index and query k-mers allowing inexact matches, which boosts sensitivity and scalability.

*How the paper uses it:* krepp uses an LSH-based indexing scheme to allow approximate k-mer matches within a Hamming distance threshold.

▶ [LSH.8 Locality-sensitive hashing: the idea](https://www.youtube.com/watch?v=dgH0NP8Qxa8) — Victor Lavrenko · 10 years ago

### maximum pseudo-likelihood estimation lecture *(prerequisite)*
Maximum pseudo-likelihood estimation is a statistical method to estimate parameters by approximating the likelihood when full likelihood is complex or intractable. It simplifies computations by assuming independence among components, which fits krepp's model of independent k-mer matches to estimate distances.

*How the paper uses it:* krepp models k-mer matches as independent and uses maximum pseudo-likelihood to estimate read-to-genome distances.

▶ [Maximum Likelihood, clearly explained!!!](https://www.youtube.com/watch?v=XepXtl9YKwc) — StatQuest with Josh Starmer · 9 years ago

### phylogenetic placement methods lecture
Phylogenetic placement methods assign unknown sequences onto a reference evolutionary tree, helping understand their evolutionary relationships. Learning how placement works clarifies how krepp uses estimated distances to place reads on large backbone trees efficiently and accurately.

*How the paper uses it:* krepp places reads on ultra-large phylogenies using estimated distances and likelihood ratio tests.

▶ [Siavash Mirarab | Phylogenetic placement: from traditional methods to deep learning](https://www.youtube.com/watch?v=TLeFb_Gfh-g) — Computational Genomics Summer Institute CGSI · 5 years ago

### krepp method talk
A talk by the authors or closely related experts provides direct insight into the design, motivation, and implementation details of krepp, tying together all concepts in the context of this novel method.

*How the paper uses it:* Direct explanation of krepp’s design and innovations by experts helps consolidate understanding of the method.

▶ [Solving genomic problems with K-mers](https://www.youtube.com/watch?v=1DKqHJyR6Fg) — Ciência em CENA - USP · Streamed 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of krepp's k-mer-based maximum pseudo-likelihood method for read-to-genome distance estimation and genome-wide phylogenetic placement. The beginner project focuses on reproducing a key metric from the paper using your existing skills. The intermediate project involves reimplementing the core method on a smaller dataset and benchmarking against a simple baseline, introducing you to locality-sensitive hashing and likelihood estimation. The advanced project extends the method by addressing one of the paper's stated limitations, such as handling non-ultrametric trees or modeling k-mer dependencies, showcasing your ability to innovate beyond the original work.

### Beginner — Reproduce krepp's Read-to-Genome Distance Accuracy Plot
*Effort: a weekend, ~8 hours*

You build a small Python script to simulate k-mer based distance estimation between short reads and reference genomes, reproducing the accuracy and bias plot similar to Fig. 2a in the paper. Using synthetic sequences with controlled mutation rates, you compute simple k-mer Jaccard distances and compare them to true distances, visualizing mapping rates and bias.

**Why it shows you understood the paper:** This project shows you grasp the core concept of k-mer based distance estimation and the importance of accuracy and bias metrics in evaluating such methods, foundational to krepp's approach.

**Grounded in:** krepp accurately estimates read-to-genome distances with low bias and high mapping rates.

**Tech stack:** Python 3.11, matplotlib, numpy, scipy

**Data:** Synthetic DNA sequences generated with controlled mutation rates to simulate reads and reference genomes.

**Build it:**

1. Generate pairs of synthetic DNA sequences with varying mutation distances.
2. Extract k-mers from sequences and compute Jaccard distances as a proxy for read-to-genome distance.
3. Calculate bias and mapping rates for different distance bins.
4. Plot the estimated distances against true distances replicating the paper's Fig. 2a style.
5. Write a README explaining the method and results.

**Ships as:** A GitHub repo with scripts and plots demonstrating k-mer distance estimation accuracy and bias on synthetic data.

**Stretch goal:** Add a simple locality-sensitive hashing scheme to speed up k-mer matching and show its effect on mapping rates.

### Intermediate — Implement krepp's Maximum Pseudo-Likelihood Distance Estimation on Bacterial Genomes
*Effort: 2 weekends, ~20 hours*

You reimplement the core krepp method: indexing k-mers from a small set of bacterial reference genomes using locality-sensitive hashing (LSH) allowing inexact matches, then estimate read-to-genome distances via maximum pseudo-likelihood from k-mer matches. You benchmark your implementation against a simple exact k-mer matching baseline and report distance estimation accuracy and mapping rates.

**Why it shows you understood the paper:** This project demonstrates your ability to implement krepp's novel LSH-based k-mer indexing and maximum pseudo-likelihood framework, key technical contributions of the paper, and to evaluate them quantitatively.

**Grounded in:** Development of a scalable k-mer based maximum pseudo-likelihood method (krepp) for read-to-genome distance estimation; krepp uses locality-sensitive hashing with bit sampling to allow inexact k-mer matches.

**Tech stack:** Python 3.11, numpy, scipy, biopython

**Data:** Public bacterial genomes from NCBI under bioproject ID GenBank: PRJEB33281 as referenced in the paper.

**Build it:**

1. Download a subset (~20-30) of bacterial genomes from PRJEB33281.
2. Implement k-mer extraction and build an LSH index allowing inexact matches up to a small Hamming distance.
3. Implement maximum pseudo-likelihood estimation of read-to-genome distances based on k-mer matches.
4. Simulate short reads from the genomes and estimate distances using your method and a baseline exact k-mer matching method.
5. Compare accuracy and mapping rates, and plot results similar to the paper's benchmarks.
6. Document the implementation details and evaluation in a README.

**Ships as:** A GitHub repo with code implementing krepp's core method, evaluation scripts, and plots comparing performance to a baseline.

**Stretch goal:** Extend the method to handle sequencing errors by incorporating a simple error model in the likelihood estimation.

### Advanced — Extend krepp for Phylogenetic Placement on Non-Ultrametric Trees
*Effort: 3-4 weeks*

You develop an extension to krepp's phylogenetic placement algorithm that relaxes the ultrametric tree assumption, enabling placement on rooted or unrooted non-ultrametric trees. You modify the placement criteria to incorporate branch lengths and explore alternative likelihood ratio tests or distance thresholds. You evaluate placement accuracy on simulated non-ultrametric trees and compare to the original method.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, showing deep understanding of krepp's placement algorithm and the challenges of real phylogenies, as well as your ability to innovate and extend state-of-the-art methods.

**Grounded in:** Current placement algorithm requires rooted trees and assumes ultrametricity, which may limit accuracy for non-ultrametric trees; Explore alternative placement algorithms that leverage branch lengths and relax rooting requirements.

**Tech stack:** Python 3.11, numpy, scipy, ete3 (phylogenetics)

**Data:** Simulated non-ultrametric phylogenetic trees and synthetic reads generated by mutating reference genomes; optionally use bacterial genomes from PRJEB33281 for realism.

**Build it:**

1. Review krepp's placement algorithm and understand its ultrametric assumption.
2. Simulate non-ultrametric phylogenetic trees and generate synthetic reads.
3. Modify the placement algorithm to incorporate branch lengths and allow unrooted tree placement.
4. Implement alternative likelihood ratio tests or distance thresholds for placement decisions.
5. Evaluate placement accuracy compared to the original method on simulated data.
6. Write a detailed report and README explaining your extension, methods, and results.

**Ships as:** A GitHub repo with extended placement code, simulation scripts, evaluation results, and a comprehensive README discussing the method and findings.

**Stretch goal:** Incorporate modeling of k-mer dependencies or sequencing error models into the placement likelihood framework.
