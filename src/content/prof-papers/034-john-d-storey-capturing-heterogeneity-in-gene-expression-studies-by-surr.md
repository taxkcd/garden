---
title: "034 · Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis — John D. Storey"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-storeylab-org"
source_hash: "c7608f23733b9279934198959de15ef91981344ea526872dc5a488a1b55ec585"
sequence: 34
generator: "outreach-garden: managed"
---

# 034 · Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis

## At a glance

- **Professor:** John D. Storey
- **Institution:** Princeton University
- **Paper:** [Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis](https://doi.org/10.1371/journal.pgen.0030161)
- **Authors:** Jeffrey T. Leek, John D. Storey
- **Year:** 2007

## Paper overview

Gene expression studies often face challenges due to many unmeasured or unknown factors influencing gene expression, which can obscure true biological signals. This paper introduces Surrogate Variable Analysis (SVA), a method that uses the gene expression data itself to identify and adjust for these hidden sources of variation, improving the accuracy and reproducibility of gene expression analyses.

### Why it matters

**Research problem:** Gene expression levels are influenced by numerous known and unknown factors, including genetic, environmental, demographic, and technical variables. Unmeasured or unmodeled factors cause expression heterogeneity (EH), leading to reduced power, spurious signals, and biased statistical inference in gene expression studies.

**Why it matters:** Failing to account for EH can distort the identification of differentially expressed genes, reduce reproducibility, and mislead biological conclusions. This is critical in large-scale genomic studies where accurate detection of true biological signals is essential for understanding complex traits and diseases.

**Key contributions:**

- Introduction of SVA to identify and estimate hidden sources of variation in gene expression data.
- A supervised factor analysis approach that accounts for correlation between surrogate variables and primary variables.
- Demonstration that SVA improves the accuracy and reproducibility of differential expression analyses.
- Application of SVA to diverse gene expression studies including yeast genetics, human disease class, and time-course data.
- Provision of an open-source R package implementing SVA.

## About the professor

**John D. Storey** — William R. Harman '63 and Mary-Love Harman Professor in Genomics, Lewis-Sigler Institute for Integrative Genomics, Princeton University.

Research interests: quantitative methods in genomics, functional genomics, high-dimensional data sets, causal regulatory networks, gene expression variation

### Research links

- [Faculty/profile page](https://lsi.princeton.edu/people/john-storey)
- [Identity evidence](https://storeylab.org)
- [Lab website](https://lsi.princeton.edu/research/faculty-research-labs/storey-research-lab)
- [Google Scholar](http://scholar.google.com/citations?user=oi4x2XIAAAAJ)

## Learning path

To deeply understand the paper on Surrogate Variable Analysis (SVA), start by building foundational knowledge on latent variable models and factor analysis, which underpin the statistical approach of SVA. Then, gain context on batch effect correction in gene expression studies, a key application area for SVA. Finally, focus on the authors' own presentation of SVA to grasp the method's motivation, implementation, and impact directly from the creators.

## Recommended videos (in order)

### Latent variable models lecture *(prerequisite)*
Latent variable models provide the theoretical foundation for modeling hidden or unobserved factors influencing observed data. Understanding these models is essential to grasp how SVA estimates surrogate variables representing unmodeled sources of variation in gene expression data.

*How the paper uses it:* SVA relies on latent variable modeling to identify hidden factors affecting gene expression.

▶ [Cornell CS 6785: Deep Generative Models. Lecture 5: Latent ...](https://www.youtube.com/watch?v=KQOQyrkU8rk) — Volodymyr Kuleshov · 1:06:10

### Factor analysis seminar *(prerequisite)*
Factor analysis is a statistical method used to describe variability among observed variables in terms of fewer unobserved variables called factors. Since SVA uses a supervised factor analysis approach, understanding factor analysis techniques and assumptions is critical for appreciating the methodology.

*How the paper uses it:* SVA employs supervised factor analysis to estimate surrogate variables from residual expression data.

▶ [Stanford CS229 Machine Learning I Factor Analysis/PCA I ...](https://www.youtube.com/watch?v=o2KzJdbOwMc) — Stanford Online · 1:29:14

### Batch effect correction lecture *(prerequisite)*
Batch effects are a common source of unwanted variation in gene expression studies that can confound biological signals. Learning about batch effect correction methods provides practical context for why SVA is necessary and how it improves downstream analyses by adjusting for such confounders.

*How the paper uses it:* SVA addresses batch effects and other unmodeled heterogeneity to improve gene expression analysis accuracy.

▶ [Batch Correction and Integration | NBIS Workshop in Single ...](https://www.youtube.com/watch?v=a-vzYSYA9mg) — NBISweden · 1:05:34

### Authors' SVA talk *(the paper's own talk)*
The authors' own talk on Surrogate Variable Analysis offers the most direct and authoritative explanation of the method, its motivation, and its application. This presentation is invaluable for understanding the nuances and innovations introduced in the paper.

*How the paper uses it:* This talk is given by Jeffrey Leek, co-author of the paper, explaining SVA in detail.

▶ [Jeffrey Leek - TorBUG Talk - Post-prediction inference - what do we do after we have...](https://www.youtube.com/watch?v=jYl6IaptD3k) — Toronto Bioinformatics User Group · 37:30 · 5 years ago
