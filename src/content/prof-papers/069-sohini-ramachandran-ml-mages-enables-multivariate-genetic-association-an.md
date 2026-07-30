---
title: "069 · ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage — Sohini Ramachandran"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sohini-ramachandran"
source_hash: "3b6a1ae5e88820b768b4b498ea8b0f5e45f75f895e50522d4a926c57eacf844e"
sequence: 69
generator: "outreach-garden: managed"
---

# 069 · ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage

## At a glance

- **Professor:** Sohini Ramachandran
- **Institution:** Brown University
- **Paper:** [ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage](https://brown.edu/Research/Ramachandran_Lab/files/publications/Liu%20et%20al.%20-%202025%20-%20Genome%20Research.pdf)
- **Authors:** Xiran Liu, Lorin Crawford, Sohini Ramachandran
- **Year:** 2025

## Paper overview

This paper introduces ML-MAGES, a machine learning method that improves the analysis of genetic variants associated with multiple traits. It uses neural networks to correct inflated effect sizes caused by genetic correlations and clusters variants based on their association patterns across traits. The method is computationally efficient and better distinguishes true genetic associations, helping to identify genes influencing complex traits and diseases.

### Why it matters

**Research problem:** Genome-wide association (GWA) studies face challenges in accurately estimating genetic variant effect sizes due to inflation caused by linkage disequilibrium (LD) and in analyzing multiple traits simultaneously to detect shared and trait-specific genetic associations.

**Why it matters:** Accurate effect size estimation and multitrait analysis are critical for understanding the genetic architecture of complex traits, identifying causal variants, and informing precision medicine and drug discovery. Existing methods struggle with computational efficiency, controlling inflation, and capturing complex multitrait association patterns.

**Key contributions:**

- Development of a neural network-based effect size shrinkage method that outperforms regularized regression and fine-mapping in accuracy and computational efficiency.
- Introduction of an infinite mixture model for flexible, data-driven clustering of multitrait genetic associations, automatically inferring the number of clusters.
- Integration of SNP-level shrinkage and clustering results into gene-level summaries that reveal trait-specific and shared association patterns.
- Demonstration of ML-MAGES on simulated data and real UK Biobank data for both quantitative and binary traits, identifying biologically relevant genes and shared genetic architectures.

## About the professor

**Sohini Ramachandran** — Brown University.

Research interests: Determining the causes and consequences of human genetic variation, using population genetics, statistics, and evolutionary theory

### Research links

- [Faculty/profile page](https://www.brown.edu/Research/Ramachandran_Lab)
- [Resolved homepage](https://brown.edu/Research/Ramachandran_Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ML-MAGES paper, start with foundational concepts in genome-wide association studies (GWAS) and linkage disequilibrium (LD) to grasp the genetic and statistical background. Then, study multivariate clustering with infinite mixture models to comprehend the clustering approach used. Finally, focus on the core concept of ML-MAGES itself by watching the authors' own talks, which provide direct insights into their novel method and results.

### Genome-wide association studies statistics *(prerequisite)*
This section covers the fundamental statistical framework for identifying genetic variants linked to traits, which is essential to understand the context and challenges ML-MAGES addresses. The chosen video is a comprehensive university lecture from MIT OpenCourseWare that provides an advanced and rigorous treatment of GWAS.

*How the paper uses it:* ML-MAGES builds upon GWAS summary statistics and aims to improve effect size estimation and multitrait analysis in this framework.

▶ [20. Human Genetics, SNPs, and Genome Wide Associate Studies](https://www.youtube.com/watch?v=KYQ2dPW5nEU) — MIT OpenCourseWare · 1:17:57 · 11 years ago

### Linkage disequilibrium in genetics *(prerequisite)*
Understanding linkage disequilibrium is critical because LD causes inflation in genetic effect size estimates, a key problem ML-MAGES seeks to correct. The selected video is a detailed lecture from the National Human Genome Research Institute, providing an advanced and research-focused explanation of LD.

*How the paper uses it:* ML-MAGES incorporates LD information to shrink inflated effect sizes in GWAS data.

▶ [Introduction to Population Genetics - Lynn Jorde (2012)](https://www.youtube.com/watch?v=Ng6vKcGkzZs) — National Human Genome Research Institute · 14 years ago

### Multivariate clustering infinite mixture models *(prerequisite)*
This concept explains the statistical method used by ML-MAGES to flexibly cluster genetic variants based on multitrait association patterns. The chosen video is a university lecture by Alexander Ihler that rigorously covers Gaussian mixture models and the EM algorithm, foundational to understanding infinite mixture models.

*How the paper uses it:* ML-MAGES uses an infinite mixture model with variational inference to cluster variants by their multitrait association patterns.

▶ [Clustering (4): Gaussian Mixture Models and EM](https://www.youtube.com/watch?v=qMTuMa86NzU) — Alexander Ihler · 17:11 · 11 years ago

### ML-MAGES authors talk *(the paper's own talk)*
Direct talks by the paper's authors provide the most precise and detailed explanation of the ML-MAGES method, its innovations, and results. These talks offer insights into the neural network shrinkage approach, clustering model, and gene-level analyses, directly from the researchers.

*How the paper uses it:* These talks present the ML-MAGES method and findings in the authors' own words, offering the clearest understanding of their contributions.

▶ [https://www.youtube.com › watch?v=9Glu_XRgW4k](https://www.youtube.com/watch?v=9Glu_XRgW4k) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ML-MAGES paper, start by learning the basics of genome-wide association studies (GWAS) and linkage disequilibrium (LD), which are foundational genetic concepts underlying the problem ML-MAGES addresses. Next, grasp the idea of multivariate clustering with infinite mixture models to appreciate how ML-MAGES clusters genetic variants by multitrait patterns. Finally, study neural network-based effect size shrinkage to understand the core machine learning technique ML-MAGES uses to correct inflated genetic effect sizes.

### Genome-wide association studies statistics *(prerequisite)*
GWAS are studies that scan the genome to find genetic variants associated with traits or diseases. Understanding GWAS statistics helps you grasp how genetic associations are detected and why effect size estimation matters.

*How the paper uses it:* ML-MAGES improves effect size estimation and multitrait analysis in GWAS data.

▶ [Genome-Wide Association Study - An Explanation for Beginners](https://www.youtube.com/watch?v=sOP8WacfBM8) — Nuno Carvalho · 7:35 · 5 years ago

### Linkage disequilibrium in genetics *(prerequisite)*
Linkage disequilibrium (LD) describes the non-random association of genetic variants nearby on a chromosome, causing correlation between variants. LD can inflate effect size estimates in GWAS, which ML-MAGES aims to correct.

*How the paper uses it:* ML-MAGES uses LD information to shrink inflated effect sizes caused by genetic correlations.

▶ [What is Linkage Disequilibrium? | Genomics](https://www.youtube.com/watch?v=C3MYoasLSHQ) — Genomics Boot Camp · 12:53 · 5 years ago

### Multivariate clustering infinite mixture models *(prerequisite)*
Infinite mixture models are flexible clustering methods that can automatically infer the number of clusters in data. Multivariate clustering groups genetic variants based on their association patterns across multiple traits.

*How the paper uses it:* ML-MAGES applies an infinite mixture model with variational inference to cluster variants by multitrait association patterns.

▶ [Clustering (4): Gaussian Mixture Models and EM](https://www.youtube.com/watch?v=qMTuMa86NzU) — Alexander Ihler · 17:11 · 11 years ago

### Effect size shrinkage neural networks
Neural networks can learn complex patterns to adjust or shrink inflated effect sizes in genetic data, improving accuracy. This approach leverages supervised learning to incorporate LD and summary statistics for better effect size estimation.

*How the paper uses it:* ML-MAGES uses feed-forward neural networks for effect size shrinkage, outperforming traditional methods in accuracy and speed.

▶ [Regularization Is Shrinkage](https://www.youtube.com/watch?v=B4CsCKViB3k) — CIS 522 - Deep Learning · 5 years ago

### ML-MAGES authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, methodology, and results of ML-MAGES, complementing foundational knowledge with specific details about the method and its applications.

*How the paper uses it:* Authors explain ML-MAGES's novel approach to multitrait genetic association analysis and effect size shrinkage.

▶ [https://www.youtube.com › watch?v=9Glu_XRgW4k](https://www.youtube.com/watch?v=9Glu_XRgW4k) — YouTube result via DuckDuckGo
