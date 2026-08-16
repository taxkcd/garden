---
title: "454 · SKiM: accurately classifying metagenomic ONT reads in limited memory — Jaroslaw Zola"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jaroslaw-zola"
source_hash: "fd3d00f550e0c2fa8625ff31f3676b0399ae8637c62e361b4c2a30a17754f8e8"
sequence: 454
generator: "outreach-garden: managed"
---

# 454 · SKiM: accurately classifying metagenomic ONT reads in limited memory

## At a glance

- **Professor:** Jaroslaw Zola
- **Institution:** University at Buffalo
- **Paper:** [SKiM: accurately classifying metagenomic ONT reads in limited memory](https://doi.org/10.1093/bioinformatics/btaf537)
- **Authors:** Trevor Schneggenburger, Jaroslaw Zola
- **Year:** 2025

## Paper overview

This paper introduces SKiM, a new lightweight metagenomic classifier designed to efficiently and accurately classify Oxford Nanopore Technologies (ONT) DNA sequencing reads in real-time using limited memory. SKiM uses short k-mers and advanced compression techniques to reduce memory usage and improve classification speed and accuracy, especially when only the first few hundred bases of a read are available, which is critical for adaptive sampling applications.

### Why it matters

**Research problem:** Existing metagenomic classifiers for ONT reads either require large memory, are slow, or lack accuracy when classifying partial reads in real-time, limiting their effectiveness for adaptive sampling and real-time DNA analysis.

**Why it matters:** ONT sequencing devices enable real-time DNA sequencing with adaptive sampling, which requires fast and accurate classification of short read fragments to decide whether to continue sequencing or eject a read. Efficient classifiers with low memory footprints are essential for on-site and mobile deployments where computational resources are limited.

**Key contributions:**

- Development of SKiM, a memory-efficient metagenomic classifier optimized for ONT reads and real-time adaptive sampling.
- Introduction of a novel database compression scheme using adaptive run-length encoding and column reordering to drastically reduce memory usage.
- Statistical modeling of classification as a binomial test to improve accuracy when using short k-mers.
- Demonstration of SKiM's superior classification accuracy and recall on partial reads (as short as 360 bp) compared to state-of-the-art classifiers.
- Provision of an open-source implementation with publicly available datasets and reference databases.

## About the professor

**Jaroslaw Zola** — University at Buffalo.

Research interests: Experiments in Computer Science, Parallelization, Sequence Alignment, Apache Spark, Distributed Memory, Bayesian Network, Dimensionality Reduction, Learning Bayesian Network

### Research links

- [Faculty/profile page](https://engineering.buffalo.edu/computer-science-engineering/people/faculty-directory/full-time.host.html/content/shared/engineering/computer-science-engineering/profiles/faculty/ladder/zola-jaroslaw-jaric.detail.research.html)
- [Identity evidence](https://cse.buffalo.edu/~jzola)
- [Identity evidence](https://researchconnect.buffalo.edu/en/persons/jaroslaw-zola-10)
- [Identity evidence](https://www.buffalo.edu/ai-data-science/people/ub-affiliated-faculty.host.html/content/shared/www/ai-data-science/faculty/zola-jaroslaw.detail.html)
- [Professor website](https://researchconnect.buffalo.edu/en/persons/jaroslaw-zola-10/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** probabilistic sequence classification
**The paper assumes:** probabilistic modeling of biological sequences, statistical hypothesis testing in sequence classification, k-mer based sequence analysis
**Already in this field?** Skip this entirely if you already understand probabilistic approaches to DNA sequence classification and statistical testing methods applied to k-mer matching.

This background focuses on probabilistic sequence classification, essential for understanding SKiM's statistical modeling of k-mer matches in metagenomic ONT read classification. The rigorous course offers a deep, structured foundation in computational biology and probabilistic models relevant to sequence analysis, while the fast track provides a concise, practical introduction to probabilistic machine learning concepts applicable to classification tasks. Choose the course for comprehensive theoretical grounding or the fast track for a quicker, applied overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 7.91J Foundations of Computational and Systems Biology](https://www.youtube.com/playlist?list=PLUl4u3cNGP63uK-oWiLgO7LLJV6ZCWXac) — MIT OpenCourseWare · 22 videos · 27.8h across 22 episodes

**Watch only this:** Episodes 1 (Introduction to Computational and Systems Biology), 2 (Local Alignment (BLAST) and Statistics), 5 (Library Complexity and Short Read Alignment (Mapping)), 9 (Modeling and Discovery of Sequence Motifs), and 10 (Markov and Hidden Markov Models of Genomic and Protein Features), about 6.25 hours total — these cover the probabilistic and statistical foundations needed to understand SKiM's classification model.

*Why it unblocks this paper:* MIT's Foundations of Computational and Systems Biology covers probabilistic models, sequence alignment statistics, and classification methods directly relevant to SKiM's binomial test approach for k-mer based classification.

*If you want all of it:* 27.8 hours across all 22 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CIV6540E | Probabilistic Machine Learning for Civil Engineers](https://www.youtube.com/playlist?list=PLSng2CrfnjmoZMERizqkt3VU6y27QlTvD) — BayesWorks · 13 videos · 18.5h across 13 episodes

**Watch only this:** Episodes M1b (Probability Theory), M2 (Probability Distributions), M3 (Bayesian Estimation), and M6 (Classification), about 5.7 hours total — these episodes cover the core probabilistic concepts and classification techniques relevant to the paper.

*Why it unblocks this paper:* The CIV6540E Probabilistic Machine Learning for Civil Engineers playlist provides a focused introduction to probability theory, distributions, Bayesian estimation, and classification, offering a practical and concise foundation for understanding probabilistic classification methods like those used in SKiM.

*If you want all of it:* 18.5 hours across all 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SKiM paper, start by grasping the context and importance of adaptive sampling in nanopore sequencing, which motivates the need for real-time partial read classification. Next, build foundational knowledge on database compression techniques relevant to SKiM's novel adaptive run-length encoding method, followed by statistical modeling of k-mer matches that underpins SKiM's classification accuracy. Finally, focus on the core concept of SKiM itself through the authors' own talk or closely related advanced metagenomics talks.

### adaptive sampling in nanopore sequencing *(prerequisite)*
Adaptive sampling is a key application context for SKiM, requiring fast and accurate classification of partial reads in real-time to decide whether to continue sequencing or eject a read. Understanding this technology and its challenges provides motivation for SKiM's design choices.

*How the paper uses it:* SKiM is designed specifically to enable efficient classification for adaptive sampling on ONT devices.

▶ [Adaptive sampling explained: the future of flexible target enrichment](https://www.youtube.com/watch?v=Rz-cg0ptuks) — Oxford Nanopore Technologies · 50:04 · 10 months ago

### database compression techniques for bioinformatics *(prerequisite)*
SKiM introduces a novel adaptive run-length encoding compression scheme combined with column reordering to reduce memory usage drastically. Familiarity with bioinformatics database compression methods and their challenges will clarify the significance of this contribution.

*How the paper uses it:* SKiM's memory efficiency relies heavily on its innovative database compression approach.

▶ [Bioinformatics - Tim Stevens](https://www.youtube.com/watch?v=OOmmXrkFFDg) — MRC Laboratory of Molecular Biology · 1:07:00 · 5 years ago

### statistical modeling of k-mer matches *(prerequisite)*
SKiM models classification as a binomial statistical test on k-mer matches to improve accuracy, especially on partial reads. Understanding statistical modeling concepts and their application to k-mer based classification is essential to appreciate SKiM's accuracy improvements.

*How the paper uses it:* The binomial test statistical framework is central to SKiM's classification method.

▶ [1. WHAT IS STATISTICAL MODELLING](https://www.youtube.com/watch?v=FRlzdcc2pTo) — Subroto Chowdhury · 8:17 · 5 years ago

### SKiM metagenomic classifier talk *(the paper's own talk)*
The core concept is SKiM itself, a novel metagenomic classifier optimized for ONT reads with limited memory. The best learning resource is a talk by the authors or a closely related advanced metagenomics seminar that discusses SKiM or similar state-of-the-art methods in detail.

*How the paper uses it:* This section directly covers the paper's main contribution and methodology.

▶ [Metagenomics and isolate genome sequencing product demo at London Calling 2023](https://www.youtube.com/watch?v=uyCt65m0ep8) — Oxford Nanopore Technologies · 13:54 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SKiM paper, start by learning about adaptive sampling in nanopore sequencing to grasp why real-time partial read classification is crucial. Next, build intuition on k-mer based sequence classification, the core method SKiM uses for read classification. Then, explore the statistical modeling of k-mer matches to understand SKiM's accuracy improvements. Finally, learn about database compression techniques to appreciate SKiM's memory efficiency innovations.

### adaptive sampling in nanopore sequencing *(prerequisite)*
Adaptive sampling is a method in nanopore sequencing that allows selective sequencing of DNA fragments in real-time by deciding whether to continue or eject a read based on partial sequence data. Understanding this helps appreciate why fast and accurate classification of short read fragments is critical for SKiM's design.

*How the paper uses it:* SKiM targets efficient classification of partial ONT reads to enable adaptive sampling decisions.

▶ [Adaptive sampling explained: the future of flexible target enrichment](https://www.youtube.com/watch?v=Rz-cg0ptuks) — Oxford Nanopore Technologies · 50:04 · 10 months ago

### k-mer based sequence classification
K-mers are short fixed-length DNA sequences used as building blocks to represent and classify genomic data efficiently. Learning how k-mer based classification works provides insight into SKiM's core approach of using short k-mers for rapid and memory-efficient read classification.

*How the paper uses it:* SKiM uses short k-mers (k=15 or 16) as the fundamental units for classifying ONT reads.

▶ [What is k-mer ?](https://www.youtube.com/watch?v=9YDDT68JvZA) — Computational Genome Biology · 4:42 · 3 months ago

### statistical modeling of k-mer matches *(prerequisite)*
Statistical modeling, such as binomial tests, helps determine if the observed k-mer matches between a read and a reference are significant or due to chance. This modeling improves classification accuracy, especially when using short k-mers on partial reads.

*How the paper uses it:* SKiM models classification as a binomial test to accurately classify partial reads based on k-mer matches.

▶ [1. WHAT IS STATISTICAL MODELLING](https://www.youtube.com/watch?v=FRlzdcc2pTo) — Subroto Chowdhury · 8:17 · 5 years ago

### database compression techniques for bioinformatics *(prerequisite)*
Bioinformatics databases can be huge, so compression techniques like adaptive run-length encoding reduce storage and memory usage. Understanding these methods clarifies how SKiM achieves its low memory footprint by compressing its k-mer reference database.

*How the paper uses it:* SKiM introduces a novel adaptive run-length encoding compression combined with column reordering to reduce memory usage.

▶ [Overview of Biological Databases](https://www.youtube.com/watch?v=JmKD5SnQtFE) — Bioinformatica · 13:22 · 4 years ago

## Already in your library

- [Introducing k-mers: sequences of length k](https://www.youtube.com/watch?v=WMCzYjbq77s) — also for: A computational framework to assess genome-wide distribution of polymorphic human endogenous retrovirus-K In human populations (Raj Acharya)
- [1) Next Generation Sequencing (NGS) - An Introduction](https://www.youtube.com/watch?v=jFCD8Q6qSTM) — also for: RiboStreamR: a web application for quality control, analysis, and visualization of Riboseq data (Steffen Heber)
- [NGS Explained: Next Generation Sequencing Step-by-Step](https://www.youtube.com/watch?v=WKAUtJQ69n8) — also for: SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection (Mukul S. Bansal)
- [Introduction to k-mers](https://www.youtube.com/watch?v=DyZvATM9Hr8) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of SKiM, a memory-efficient metagenomic classifier for ONT reads. The beginner project recreates a core classification metric on partial reads using existing tools and simple data. The intermediate project involves running and extending the authors' SKiM implementation on a public or substitute dataset to reproduce key accuracy and memory results. The advanced project tackles one of SKiM's stated limitations by improving classification on very short reads through parameter optimization and statistical modeling enhancements.

### Beginner — Evaluate k-mer based classification accuracy on partial ONT reads
*Effort: a weekend, ~8 hours*

You build a simple script to simulate partial ONT reads (e.g., first 360 bp) from a small public bacterial genome dataset and implement a basic k-mer matching classifier using short k-mers (k=15). You then compute species-level recall, precision, and F1-score metrics to evaluate classification accuracy on these partial reads.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core challenge SKiM addresses: accurate classification from partial ONT reads using short k-mers and statistical evaluation. It shows you understand the importance of read length and k-mer size on classification performance.

**Grounded in:** Demonstrates the key result that SKiM achieves higher species-level recall and accuracy on partial reads (360 bp) than other classifiers (Table 1).

**Tech stack:** Python 3.11, Biopython, NumPy, Pandas

**Data:** Use a small subset of bacterial genomes from NCBI RefSeq or simulate short ONT reads from public bacterial genomes as a substitute for the paper's Even dataset partial reads.

**Build it:**

1. Download a small set of bacterial reference genomes from NCBI RefSeq.
2. Simulate ONT-like reads truncated to 360 bp from these genomes using Biopython.
3. Implement a simple k-mer extraction (k=15) and exact matching classifier against the reference genomes.
4. Calculate species-level recall, precision, and F1-score on the simulated partial reads.
5. Write a README explaining the approach and results.

**Ships as:** A GitHub repo with scripts to simulate partial ONT reads, perform k-mer based classification, and report classification metrics with clear documentation.

**Stretch goal:** Add a simple statistical test (e.g., binomial test) to assess significance of k-mer matches for classification decisions.

### Intermediate — Run and extend SKiM classifier on partial ONT reads
*Effort: 2 weekends, ~20 hours*

You clone and run the SKiM source code from the authors' GitLab repository on a public or simulated ONT partial read dataset. You reproduce key classification metrics such as species-level recall and memory usage reported in the paper. Then you modify SKiM parameters (e.g., k-mer size, statistical thresholds) to observe effects on classification accuracy and memory footprint.

**Why it shows you understood the paper:** This project shows you can operate the authors' implementation, understand its core algorithmic parameters, and experimentally verify SKiM's performance claims. It demonstrates hands-on familiarity with the paper's novel compression and statistical classification approach.

**Grounded in:** Reproduces the key contributions of SKiM's memory efficiency and superior classification accuracy on partial reads (Tables 1 and 3).

**Tech stack:** C++ (for SKiM), Python 3.11 (for data preprocessing and analysis), Linux shell

**Data:** Use simulated ONT partial reads from public bacterial genomes or substitute with publicly available ONT datasets trimmed to partial read lengths, as the paper's authors do not provide a public dataset but provide test data in their repository.

**Build it:**

1. Clone the SKiM repository from https://gitlab.com/SCoRe-Group/skim.
2. Build and install SKiM following the provided instructions.
3. Prepare a small reference database from bacterial genomes and simulate partial ONT reads (e.g., 360 bp).
4. Run SKiM classification on the partial reads and record species-level recall, precision, and memory usage.
5. Modify SKiM parameters such as k-mer length and statistical thresholds to evaluate impact on classification metrics.
6. Document your findings and compare them to the paper's reported results.

**Verified links from the paper:**

- <https://gitlab.com/SCoRe-Group/skim> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run SKiM on partial reads, parameter tuning experiments, and a report comparing your results to the paper's metrics.

**Stretch goal:** Implement a visualization of SKiM's compression efficiency by comparing database sizes with and without column reordering.

### Advanced — Improve SKiM classification accuracy on very short ONT reads
*Effort: 3+ weeks*

You extend SKiM by optimizing classification parameters and statistical thresholds specifically to improve accuracy on very short reads (e.g., 180 bp), addressing a stated limitation. You experiment with integrating error correction or basecaller quality scores to reduce false positives. You evaluate your improvements on simulated noisy ONT reads and compare results to the baseline SKiM performance.

**Why it shows you understood the paper:** This project tackles a concrete limitation and future direction from the paper, demonstrating deep comprehension of SKiM's statistical modeling and practical constraints. It shows your ability to innovate on the method and handle noisy, challenging data typical in real-world ONT sequencing.

**Grounded in:** Addresses the limitation of reduced classification accuracy on very short reads (180 bp) and the future direction of optimizing parameters to reduce false positives on such reads.

**Tech stack:** C++ (SKiM codebase), Python 3.11 (for data simulation and analysis), Linux shell, Optional: error correction tools or basecaller quality score integration libraries

**Data:** Simulate very short ONT reads (180 bp) with realistic error profiles using public bacterial genomes; optionally incorporate basecaller quality scores if available.

**Build it:**

1. Set up the SKiM codebase and baseline classification on 180 bp partial reads.
2. Analyze the statistical test parameters and false positive rates on very short reads.
3. Implement parameter tuning and threshold adjustments to improve classification precision and recall.
4. Optionally integrate basecaller quality scores or simple error correction preprocessing to reduce noise impact.
5. Evaluate improvements quantitatively against baseline SKiM results.
6. Document methodology, results, and limitations.

**Verified links from the paper:**

- <https://gitlab.com/SCoRe-Group/skim> — released by the paper's authors

**Ships as:** A GitHub repo with modified SKiM code, scripts for parameter optimization, evaluation on very short reads, and a detailed report on improvements and challenges.

**Stretch goal:** Explore integrating a faster distance estimation tool like Dashing to accelerate database construction as another future direction.

_The paper's authors provide SKiM source code and test data but no public large-scale ONT datasets; substitute with publicly available bacterial genomes and simulated ONT reads for experiments._
