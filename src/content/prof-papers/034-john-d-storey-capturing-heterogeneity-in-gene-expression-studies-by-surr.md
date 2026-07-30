---
title: "034 · Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis — John D. Storey"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-storeylab-org"
source_hash: "986a63086aa6bde12f787294c2e735b2499a4a114ebbc8d74e3d643d765c931e"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Surrogate Variable Analysis (SVA) by Leek and Storey, start with foundational concepts including latent variable models and factor analysis, which underpin the statistical methodology of SVA. Then, explore batch effect correction in genomics to appreciate the practical challenges SVA addresses. Finally, focus on the core concept of Surrogate Variable Analysis itself, prioritizing the authors' own presentation for direct insight into their method and its applications.

### Latent variable models in statistics *(prerequisite)*
Latent variable models provide the theoretical foundation for modeling unobserved factors that influence observed data, which is central to understanding how SVA estimates hidden sources of variation. The selected talks are advanced seminars and university lectures that rigorously cover identifiability, learning, and assessment of latent variable models in high-dimensional settings.

*How the paper uses it:* SVA relies on latent variable modeling to estimate surrogate variables representing unmeasured confounders in gene expression data.

▶ [Prof. Magnus Rattray | Latent variable models of transcriptional regulation](https://www.youtube.com/watch?v=s47MMOcYo7o) — INI Seminar Room 1 · 56:12 · 7 months ago

### Factor analysis and dimension reduction *(prerequisite)*
Factor analysis and dimension reduction techniques like PCA are core statistical tools used in SVA to decompose residual expression data and extract surrogate variables. The chosen videos provide in-depth coverage of these methods beyond introductory level, suitable for advanced readers seeking to understand the mathematical and practical aspects of these techniques.

*How the paper uses it:* SVA uses factor analysis approaches to identify surrogate variables capturing hidden variation in gene expression.

▶ [Mastering PCA, EFA & CFA  Dimensionality Reduction, Latent Factors & Model Testing](https://www.youtube.com/watch?v=wFuWF4yW9Ak) — Makerere Epidemiology and Statistical center · 1 year ago

### Batch effect correction in genomics *(prerequisite)*
Batch effects represent a major source of unwanted technical variation in gene expression studies, and understanding their correction is critical to appreciating the motivation and impact of SVA. The selected videos are university lectures and conference talks that discuss batch effect removal methods in the context of RNA-seq and microarray data analysis at a research level.

*How the paper uses it:* SVA addresses batch effects and other hidden confounders to improve the accuracy of differential expression analyses.

▶ [STAT115 Chapter 6.5 Batch Effect Removal](https://www.youtube.com/watch?v=xXAA_CcQMek) — Xiaole Shirley Liu · 6 years ago

### Paper authors talk
The authors' own presentation on Surrogate Variable Analysis provides direct insight into the method's development, motivation, and application, making it the most authoritative and relevant resource for understanding the paper. This talk succinctly introduces gene expression heterogeneity and the SVA approach from the original research team.

*How the paper uses it:* This video is a direct presentation by Jeff Leek, co-author of the paper, explaining SVA and its role in capturing heterogeneity in gene expression studies.

▶ [Surrogate Variable Analysis Movie](https://www.youtube.com/watch?v=nkVaYZvX3Oc) — Jeff Leek · 4:06 · 16 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Surrogate Variable Analysis (SVA) and its role in gene expression studies, start by learning about latent variable models and factor analysis, which provide the statistical foundation for modeling hidden factors. Next, grasp the concept of batch effects in genomics to appreciate the practical challenges SVA addresses. Finally, explore the SVA method itself through a focused explainer by the paper's author to see how these ideas come together to improve gene expression analysis.

### Latent variable models in statistics *(prerequisite)*
Latent variable models help us understand data influenced by hidden or unobserved factors. These models allow us to infer the presence and effect of variables we cannot directly measure, which is essential for analyzing complex biological data with unknown confounders.

*How the paper uses it:* SVA relies on latent variable modeling to estimate hidden sources of variation affecting gene expression.

▶ [Understanding Latent Variables in 4 min](https://www.youtube.com/watch?v=JCc4A5nJoGc) — numiqo · 8 months ago

### Factor analysis and dimension reduction *(prerequisite)*
Factor analysis and dimension reduction techniques like PCA reduce complex data into a smaller set of underlying factors, capturing the main sources of variation. This helps identify patterns and hidden influences in high-dimensional gene expression data.

*How the paper uses it:* SVA uses factor analysis principles to decompose residual gene expression data and estimate surrogate variables.

▶ [Factor Analysis - an introduction](https://www.youtube.com/watch?v=WV_jcaDBZ2I) — Ben Lambert · 12 years ago

### Batch effect correction in genomics *(prerequisite)*
Batch effects are unwanted technical variations in genomic data that can mask true biological signals. Understanding how to detect and correct these effects is crucial for reliable gene expression analysis.

*How the paper uses it:* SVA addresses batch effects and other hidden confounders to improve the accuracy of differential expression studies.

▶ [STAT115 Chapter 6.5 Batch Effect Removal](https://www.youtube.com/watch?v=xXAA_CcQMek) — Xiaole Shirley Liu · 6 years ago

### Surrogate Variable Analysis method
Surrogate Variable Analysis (SVA) is a method to identify and adjust for unknown sources of variation in gene expression data by estimating surrogate variables from the data itself. This improves the detection of true biological signals by accounting for hidden confounders.

*How the paper uses it:* This is the core method introduced in the paper to capture heterogeneity in gene expression studies.

▶ [Surrogate Variable Analysis Movie](https://www.youtube.com/watch?v=nkVaYZvX3Oc) — Jeff Leek · 4:06 · 16 years ago

## Already in your library

- [Batch Correction and Integration | NBIS Workshop in Single ...](https://www.youtube.com/watch?v=a-vzYSYA9mg) — also for: Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis (John D. Storey)
- [CSCI 3151 - M09 - Latent-variable models & the EM algorithm](https://www.youtube.com/watch?v=c0THKJTN-ZQ) — also for: Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics (Adam Charles)
