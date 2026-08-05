---
title: "185 · Examining the dynamics of three-dimensional genome organization with multitask matrix factorization — Sushmita Roy"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sushmita-roy"
source_hash: "4d3c8234d4b5a5e4968eccf65637f14e564fc97c1ae4acc983e543c9c9cecb58"
sequence: 185
generator: "outreach-garden: managed"
---

# 185 · Examining the dynamics of three-dimensional genome organization with multitask matrix factorization

## At a glance

- **Professor:** Sushmita Roy
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Examining the dynamics of three-dimensional genome organization with multitask matrix factorization](https://europepmc.org/articles/PMC12047540?pdf=render)
- **Authors:** Da-Inn Lee, Sushmita Roy
- **Year:** 2025

## Paper overview

This paper introduces TGIF, a computational method that uses multitask nonnegative matrix factorization to analyze changes in the 3D organization of the genome across multiple biological conditions. TGIF can detect changes at different scales, such as compartments and topologically associated domains (TADs), and links these changes to gene expression and regulatory signals. The method is more accurate and robust than existing approaches and can prioritize genetic variants associated with diseases.

### Why it matters

**Research problem:** Systematic detection and analysis of dynamic changes in 3D genome organization across multiple conditions, time points, or cell types is challenging due to the complexity of the data and limitations of existing computational methods that either do not model higher-order structures or cannot handle more than two conditions simultaneously.

**Why it matters:** 3D genome organization is a key regulatory mechanism influencing gene expression and cellular function in development and disease. Understanding its dynamics can reveal mechanisms underlying phenotypic changes and disease processes, and help interpret the functional impact of genetic variants.

**Key contributions:**

- Development of TGIF, a multitask NMF method that models 3D genome organization dynamics across multiple related conditions.
- Implementation of TGIF-DB and TGIF-DC to detect differential TAD boundaries and compartment changes respectively.
- Demonstration that TGIF-DB outperforms existing methods in precision, reproducibility, and biological relevance of boundary detection.
- Demonstration that TGIF-DC identifies biologically meaningful compartment and subcompartment dynamics linked to regulatory signals.
- Application of TGIF to multiple mammalian differentiation data sets linking 3D genome changes to differential gene expression and regulatory features.

## About the professor

**Sushmita Roy** — Professor, Biostatistics and Medical Informatics, University of Wisconsin - Madison.

Research interests: Computational methods to model cellular networks

### Research links

- [Faculty/profile page](http://wid.wisc.edu/profile/sushmita-roy)
- [Professor website](https://wid.wisc.edu/people/sushmita-roy/)
- [Resolved homepage](https://roylab.discovery.wisc.edu/)
- [Social profile](https://sroyyors.bsky.social)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on TGIF, start with foundational knowledge of 3D genome organization and Hi-C data analysis, as these provide the biological and experimental context for the study. Next, learn about topologically associating domains (TADs), which are key structural units analyzed by TGIF. Then, study multitask nonnegative matrix factorization, the core computational method underlying TGIF. Finally, watch the authors' own talk presenting TGIF to grasp the novel contributions and applications of their method.

### 3D genome organization lecture *(prerequisite)*
Understanding the spatial organization of the genome is essential to appreciate the biological significance of the paper. These lectures provide detailed insights into genome folding, compartments, and regulatory implications, forming the biological foundation for TGIF's analysis.

*How the paper uses it:* 3D genome organization is the biological context in which TGIF detects dynamic changes across conditions.

▶ [Jian Ma | Comparing 3D Genome Organization | CGSI 2019](https://www.youtube.com/watch?v=wMkbr55S35k) — Computational Genomics Summer Institute CGSI · 6 years ago

### Hi-C data analysis seminar *(prerequisite)*
Hi-C is the primary experimental technique generating the contact matrices analyzed by TGIF. These seminars cover the principles, biases, and computational analysis of Hi-C data, providing essential background for understanding the input data and challenges TGIF addresses.

*How the paper uses it:* TGIF jointly factorizes multiple Hi-C contact matrices to infer 3D genome organization dynamics.

▶ [Hierarchical Regulatory Domain Inference from Hi-C Data](https://www.youtube.com/watch?v=pxsz6QOtzHA) — Simons Institute for the Theory of Computing · 10 years ago

### topologically associating domains TADs lecture *(prerequisite)*
TADs are fundamental 3D genome structural units whose boundaries TGIF-DB aims to detect and analyze. These lectures explain TAD identification, function, and biological relevance, which are critical to understanding TGIF's contributions in boundary detection.

*How the paper uses it:* TGIF-DB focuses on detecting differential TAD boundaries across biological conditions.

▶ [Prof. Peter Bickel | “Network modeling of topological domains using Hi-C data”](https://www.youtube.com/watch?v=XBPTMocmphI) — INI Seminar Room 1 · 54:05 · 7 months ago

### multitask nonnegative matrix factorization lecture
Multitask nonnegative matrix factorization is the core computational framework behind TGIF. These lectures provide rigorous explanations of NMF algorithms and their extensions to multitask settings, enabling a deep understanding of TGIF's methodological innovations.

*How the paper uses it:* TGIF uses a multitask NMF framework to jointly factorize multiple Hi-C matrices with hierarchical relationships.

▶ [F23 Lecture 9 Non-Negative Matrix Factorization](https://www.youtube.com/watch?v=FFNgElSwoOU) — Machine Learning for Signal Processing CMU · 2 years ago

### TGIF multitask matrix factorization talk *(the paper's own talk)*
The authors' own presentation of TGIF offers the most direct and detailed explanation of their novel method, its applications, and results. Watching this talk will provide comprehensive insights into the paper's contributions and future directions.

*How the paper uses it:* This is the authors' own talk presenting TGIF, the method developed in the paper.

▶ [Detecting dynamic 3D genome organization with multi-task... - Da-Inn Lee - RSG - RSGDREAM 2022](https://www.youtube.com/watch?v=AgCHN_NZYMQ) — ISCB · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the biological basics of 3D genome organization and its key structural units like TADs and compartments. Then, grasp the experimental data type (Hi-C) used to study genome structure. Next, build intuition on multitask nonnegative matrix factorization, the core computational method behind TGIF. Finally, watch the authors' own talk on TGIF to see how these concepts integrate in their novel method.

### 3D genome organization lecture *(prerequisite)*
3D genome organization refers to how DNA folds and arranges itself inside the nucleus, influencing gene regulation. Understanding this spatial structure and its biological roles provides essential context for why studying genome dynamics matters.

*How the paper uses it:* The paper studies changes in 3D genome organization and their impact on gene expression and disease.

▶ [Chromosome structure | Chromatin organization | 3D chromatin | levels of organization in chromosomes](https://www.youtube.com/watch?v=2iyAaXsfuWQ) — Animated biology With arpan · 18:20 · 3 years ago

### topologically associating domains TADs lecture *(prerequisite)*
TADs are contiguous regions of the genome that interact more frequently within themselves than with outside regions, acting as fundamental 3D structural units. Knowing what TADs are and their biological significance is key to understanding TGIF-DB's goal of detecting differential TAD boundaries.

*How the paper uses it:* TGIF-DB specifically detects changes in TAD boundaries across conditions.

▶ [MCB 182 Lecture 10.6 - Topologically associated domains (TADs), A/B compartments](https://www.youtube.com/watch?v=uakxc0_Dec4) — Gerald Quon · 5:06 · 5 years ago

### Hi-C data analysis seminar *(prerequisite)*
Hi-C is an experimental technique that captures genome-wide chromatin interactions, producing contact matrices that reflect 3D genome structure. Understanding how Hi-C data is generated and analyzed is crucial since TGIF operates on multiple Hi-C contact matrices.

*How the paper uses it:* TGIF jointly factorizes multiple Hi-C contact matrices to detect 3D genome dynamics.

▶ [Hi-C Data Analysis Tutorial: TADs, Chromatin Loops & Visualization with Juicer](https://www.youtube.com/watch?v=9x7EjqYdWtc) — NGS101 — Dr. Lei Guo · 8 months ago

### multitask nonnegative matrix factorization lecture
Nonnegative matrix factorization (NMF) decomposes data into parts-based representations, useful for uncovering latent structures. Multitask NMF extends this to jointly analyze related data sets, improving robustness and capturing shared and unique features.

*How the paper uses it:* TGIF uses multitask NMF to jointly factorize Hi-C matrices from related biological conditions encoded as a tree.

▶ [Non-Negative Matrix Factorization (NMF) | Multiplicative Update Rules By Lee And Seung](https://www.youtube.com/watch?v=o4pPTwsd-5M) — Ahmad Varasteh · 6 years ago

### TGIF multitask matrix factorization talk *(the paper's own talk)*
This talk by the paper's author presents TGIF, explaining how multitask NMF is applied to analyze dynamic 3D genome organization across multiple conditions, highlighting its advantages and biological insights.

*How the paper uses it:* Direct presentation of the TGIF method developed in the paper.

▶ [Detecting dynamic 3D genome organization with multi-task... - Da-Inn Lee - RSG - RSGDREAM 2022](https://www.youtube.com/watch?v=AgCHN_NZYMQ) — ISCB · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the TGIF method for analyzing 3D genome organization dynamics. The beginner project focuses on reproducing a key metric from the paper using existing tools you know, the intermediate project involves running and extending the authors' TGIF code on a small dataset to replicate core results, and the advanced project tackles a stated limitation by implementing a contrastive multitask NMF extension to improve differential boundary detection.

### Beginner — Reproduce TGIF-DB Boundary Precision Metric
*Effort: a weekend, ~8 hours*

You build a script to compute and visualize the precision of TAD boundary detection using a simple metric such as fold enrichment of CTCF binding sites near boundaries, reproducing the key figure 2B from the paper. You use publicly available CTCF ChIP-seq data and simulated or small Hi-C contact matrices to identify boundaries with a simple peak-calling or segmentation method.

**Why it shows you understood the paper:** This project shows you understand how TGIF-DB boundaries are biologically validated and the importance of CTCF enrichment as a precision metric, demonstrating grasp of the paper's evaluation approach.

**Grounded in:** TGIF-DB boundaries have the highest fold enrichment of CTCF peaks (Fig. 2B).

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib, pandas

**Data:** Use publicly available CTCF ChIP-seq peak data from ENCODE as a proxy; simulate or download a small Hi-C contact matrix from a public source as a substitute for the paper's data.

**Build it:**

1. Download CTCF ChIP-seq peak data for a human cell line from ENCODE.
2. Obtain or simulate a small Hi-C contact matrix representing genomic interactions.
3. Implement a simple method to call TAD boundaries from the contact matrix (e.g., insulation score or directionality index).
4. Calculate fold enrichment of CTCF peaks near the called boundaries compared to random genomic regions.
5. Visualize the fold enrichment as a bar plot or heatmap similar to Fig. 2B.
6. Write a README explaining the metric and how it relates to TGIF-DB's evaluation.

**Ships as:** A Jupyter notebook and scripts that compute and plot CTCF enrichment near TAD boundaries, with a README linking this metric to TGIF-DB's precision evaluation.

**Stretch goal:** Add comparison of enrichment for boundaries called by two different simple methods to mimic the paper's comparison of TGIF-DB to other methods.

### Intermediate — Run and Extend TGIF-DB on Public Hi-C Data
*Effort: 2 weekends, ~20 hours*

You download the authors' TGIF code from their GitHub repository and run TGIF-DB on a small publicly available Hi-C dataset (e.g., from a few cell types or time points). You replicate the boundary detection and compute precision and reproducibility metrics, then compare TGIF-DB results to a simple baseline method like TopDom. You add a visualization of boundary overlaps and CTCF enrichment.

**Why it shows you understood the paper:** This project shows you can operate the authors' multitask matrix factorization framework, understand its core boundary detection method, and critically evaluate its performance against a baseline, demonstrating practical mastery of the paper's main contribution.

**Grounded in:** Development of TGIF-DB and demonstration that TGIF-DB outperforms existing methods in precision, reproducibility, and biological relevance of boundary detection.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pandas, Git, bash

**Data:** Use a small public Hi-C dataset from GEO or 4DN Data Portal representing multiple related cell types or conditions as a substitute for the paper's mammalian differentiation data.

**Build it:**

1. Clone the TGIF GitHub repository from https://github.com/Roy-lab/tgif.
2. Install required dependencies and set up the environment.
3. Download a small public Hi-C dataset with multiple related conditions.
4. Run TGIF-DB on the dataset to detect TAD boundaries.
5. Run a simple baseline method like TopDom on the same data.
6. Compute precision and reproducibility metrics for both methods.
7. Visualize boundary overlaps and CTCF enrichment near boundaries.
8. Write a report comparing TGIF-DB and baseline results, referencing the paper's metrics.

**Verified links from the paper:**

- <https://github.com/Roy-lab/tgif> — released by the paper's authors

**Ships as:** A GitHub repository with scripts to run TGIF-DB and baseline, metric computations, visualizations, and a README discussing results and comparison to the paper.

**Stretch goal:** Implement a simple noise robustness test by subsampling Hi-C data and evaluating boundary detection stability.

### Advanced — Contrastive Multitask NMF Extension for TGIF to Reduce False Positives
*Effort: 3+ weeks*

You develop an extension of the TGIF multitask NMF framework by incorporating a contrastive loss term to explicitly model differences between related biological conditions, addressing the paper's limitation of false-positive differential boundaries. You implement this in Python, apply it to a small multi-condition Hi-C dataset, and compare differential boundary detection performance to the original TGIF-DB.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's methodology and limitations, ability to extend complex matrix factorization models, and capacity to evaluate improvements quantitatively, positioning you for research-level discussion with the professor.

**Grounded in:** Incorporate a contrastive term in the loss function to better capture differences between related conditions and reduce false positives (future direction).

**Tech stack:** Python 3.11, numpy, scipy, PyTorch or TensorFlow, matplotlib, pandas, Git

**Data:** Use a small public multi-condition Hi-C dataset or simulate hierarchical related Hi-C matrices to test the contrastive multitask NMF extension.

**Build it:**

1. Study the TGIF multitask NMF framework and its regularization scheme from the paper and code.
2. Design and implement a contrastive loss term that penalizes similarity of factors for conditions expected to differ.
3. Integrate the contrastive loss into the TGIF multitask NMF optimization.
4. Run the extended model on a small multi-condition Hi-C dataset.
5. Evaluate differential boundary detection precision and false positive rate compared to original TGIF-DB.
6. Visualize results and write a detailed README explaining the method, implementation, and evaluation.
7. Optionally, prepare a short report discussing potential biological implications and next steps.

**Verified links from the paper:**

- <https://github.com/Roy-lab/tgif> — released by the paper's authors

**Ships as:** A GitHub repo with the contrastive multitask NMF implementation, evaluation scripts, visualizations, and documentation demonstrating improved differential boundary detection.

**Stretch goal:** Incorporate auxiliary data such as gene expression similarity to inform hierarchical tree weighting in the model.

_Public Hi-C datasets with multiple related conditions suitable for TGIF analysis exist but may require preprocessing; simulated data can be used if needed._
