---
title: "581 · Internal and external normalization of nascent RNA sequencing run-on experiments — Robin D. Dowell"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-robin-d-dowell"
source_hash: "5988039711359da5f21ff60041661ce2bbbf26c2428804d12ffed953506642b9"
sequence: 581
generator: "outreach-garden: managed"
---

# 581 · Internal and external normalization of nascent RNA sequencing run-on experiments

## At a glance

- **Professor:** Robin D. Dowell
- **Institution:** University of Colorado Boulder
- **Paper:** [Internal and external normalization of nascent RNA sequencing run-on experiments](https://europepmc.org/articles/PMC10785432?pdf=render)
- **Authors:** Zachary L. Maas, Robin D. Dowell
- **Year:** 2024

## Paper overview

This paper addresses the challenge of accurately normalizing nascent RNA sequencing data, which is crucial for understanding gene transcription changes. The authors develop a new Bayesian model called Virtual Spike-In (VSI) to estimate normalization factors and their uncertainty, comparing traditional external spike-in controls with an internal normalization method based on the 3' ends of long genes. They find that external spike-ins are often under-sequenced and unreliable, while the internal 3' normalization approach can be effective when certain biological assumptions are met.

### Why it matters

**Research problem:** Normalization of nascent RNA sequencing data is complicated by technical variability and the lack of standardized external spike-in controls. Existing methods often assume constant run-on reaction efficiency across samples, which may not hold true, leading to unreliable normalization and downstream biological interpretations.

**Why it matters:** Accurate normalization is essential for rigorous analysis of transcriptional changes in nascent RNA sequencing experiments. Poor normalization can lead to incorrect conclusions about gene expression changes, affecting biological insights and reproducibility.

**Key contributions:**

- Development of the Virtual Spike-In (VSI) Bayesian model to estimate normalization factors with error bounds.
- Systematic analysis showing that external spike-ins in nascent RNA sequencing are often under-sequenced and variable.
- Demonstration that internal 3' end normalization corresponds well with external spike-in normalization when assumptions about elongation rate and time points are met.
- Evidence that normalization uncertainty affects downstream differential expression analysis, with VSI providing more conservative and biologically principled normalization factors.
- Provision of a versatile normalization framework applicable to both internal and external invariant sets.

## About the professor

**Robin D. Dowell** — Department of Molecular, Cellular and Developmental Biology, University of Colorado Boulder.

### Research links

- [Faculty/profile page](https://www.colorado.edu/biofrontiers/robin-dowell)
- [Identity evidence](http://dowell.colorado.edu)
- [Identity evidence](https://www.colorado.edu/mcdb/robin-dowell)
- [Identity evidence](https://dna.colorado.edu/)
- [Lab website](https://dna.colorado.edu/research/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian hierarchical modeling
**The paper assumes:** Bayesian statistics, hierarchical Bayesian models, Bayesian linear regression
**Already in this field?** Skip this entirely if you already have a solid understanding of Bayesian hierarchical modeling and Bayesian regression techniques.

This background focuses on Bayesian hierarchical modeling, the core methodology behind the Virtual Spike-In (VSI) model developed in the paper for normalization of nascent RNA sequencing data. The rigorous course option offers a comprehensive university-level introduction to Bayesian statistics with detailed coverage of hierarchical models and MCMC methods, while the fast track provides a shorter, focused series with clear explanations and practical implementation guidance. Choose the course for deep understanding and mathematical foundations; choose the fast track for a more time-efficient, intuition-driven overview and applied perspective.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [S22 MATH 347 Bayesian Statistics](https://www.youtube.com/playlist?list=PL_lWxa4iVNt2GBPOVZMVKD4jYl9Q7hs2K) — Jingchen (Monika) Hu · 73 videos · 20.1h across the first 60 episodes

**Watch only this:** Episodes 1-22 ("[Introduction] Course orientation" through "[Gibbs sampler and MCMC] Gamma-Gamma-Poisson exercise part 2"), about 7.3 hours — these cover Bayesian inference basics, hierarchical modeling, and MCMC sampling essential for grasping the paper's model.

*Why it unblocks this paper:* This is a rigorous university course on Bayesian statistics by Jingchen (Monika) Hu that covers foundational concepts, Bayesian inference, and hierarchical modeling with MCMC methods, directly relevant to understanding the VSI Bayesian model in the paper.

*If you want all of it:* About 20.1 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [BayesCog: Bayesian Statistics and Hierarchical Bayesian Modeling for Psychological Science  [univie]](https://www.youtube.com/playlist?list=PLfRTb2z8k2x9gNBypgMIj3oNLF8lqM44-) — Lei Zhang · 13 videos · 20.2h across 13 episodes

**Watch only this:** Episodes 1-11 ("BayesCog Summer 2020 Lecture 01 - Introduction" through "BayesCog Summer 2020 Lecture 11 - Hierarchical Bayesian modeling + Optimizing Stan code"), about 9.5 hours — these provide a focused introduction to Bayesian concepts, hierarchical models, and computational tools relevant to the VSI model.

*Why it unblocks this paper:* This concise series by Lei Zhang offers clear, intuition-first explanations of Bayesian statistics and hierarchical modeling, including practical implementation in Stan, which aligns well with the paper's use of Bayesian hierarchical linear regression.

*If you want all of it:* About 20.2 hours across all 13 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on normalization of nascent RNA sequencing run-on experiments, start by building a solid foundation in Bayesian hierarchical linear regression, which underpins the Virtual Spike-In (VSI) model. Next, gain a thorough understanding of normalization challenges in RNA sequencing data analysis, followed by insights into nascent RNA sequencing run-on assays and the role of spike-in controls in sequencing experiments. Finally, focus on the paper's core contribution by watching the authors' own talk or closely related research presentations on normalization methods in nascent RNA sequencing.

### Bayesian hierarchical linear regression *(prerequisite)*
Bayesian hierarchical linear regression provides the statistical framework for the VSI model developed in the paper. Understanding this modeling approach is essential to grasp how the authors estimate normalization factors and quantify their uncertainty using count data.

*How the paper uses it:* The VSI model is a hierarchical Bayesian linear regression model estimating normalization factors with error bounds.

▶ [Lesson 22a Hierarchical Bayes: Concepts](https://www.youtube.com/watch?v=VssgU4Ey7ss) — Michael Dietze · 14:53

### Normalization in RNA sequencing *(prerequisite)*
Normalization is a critical step in RNA-seq data analysis to correct for technical variability and enable accurate biological interpretation. This section covers foundational knowledge of normalization challenges and strategies, which contextualizes the need for improved methods like VSI.

*How the paper uses it:* The paper addresses normalization challenges in nascent RNA sequencing and compares internal and external normalization approaches.

▶ [Jo Hardin: "Tutorial on RNASeq Normalization and Differential ...](https://www.youtube.com/watch?v=YrQPA23PXSY) — Institute for Pure & Applied Mathematics (IPAM) · 35:37

### Nascent RNA sequencing run-on assays *(prerequisite)*
Understanding the experimental technique of nascent RNA sequencing run-on assays is crucial to appreciate the data characteristics and normalization challenges addressed in the paper. This section explains the biological and technical aspects of nascent transcription measurement.

*How the paper uses it:* The paper analyzes normalization methods specifically for nascent RNA sequencing run-on experiments.

▶ [Analyzing nascent sequencing data](https://www.youtube.com/watch?v=_2ROO0MdRgA) — DnA lab short read sequencing workshop · 20:18

### Spike-in controls in sequencing *(prerequisite)*
Spike-in controls are external RNA molecules added to sequencing experiments to enable normalization. This section discusses their use, limitations, and relevance to the paper's evaluation of external spike-in normalization reliability.

*How the paper uses it:* The paper critically evaluates external spike-in controls and their under-sequencing issues in nascent RNA sequencing normalization.

▶ [RNA Spike-Ins and Analysis Tools for Trustworthy Genome ...](https://www.youtube.com/watch?v=YVlrzKMJ2uc) — UCSF-Stanford CERSI · 33:58

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of nascent RNA sequencing run-on assays to grasp the experimental data generation. Then, build foundational knowledge of normalization in RNA sequencing to appreciate why normalization is critical and challenging. Next, learn about spike-in controls as a common external normalization strategy and their limitations. Finally, explore Bayesian hierarchical linear regression to understand the statistical modeling framework underlying the paper's Virtual Spike-In (VSI) method, which is the core contribution.

### Nascent RNA sequencing run-on assays *(prerequisite)*
Nascent RNA sequencing run-on assays capture RNA molecules currently being transcribed, providing a snapshot of active gene transcription. Understanding this technique helps you appreciate the nature of the data that requires normalization in the paper.

*How the paper uses it:* The paper focuses on normalization methods for nascent RNA sequencing run-on experiments.

▶ [Analyzing nascent sequencing data](https://www.youtube.com/watch?v=_2ROO0MdRgA) — DnA lab short read sequencing workshop · 20:18

### Normalization in RNA sequencing *(prerequisite)*
Normalization adjusts for technical variability in RNA sequencing data to enable accurate comparison of gene expression levels across samples. Learning about common normalization challenges and strategies lays the groundwork for understanding why the paper develops a new normalization model.

*How the paper uses it:* The paper addresses the challenge of accurately normalizing nascent RNA sequencing data to avoid misleading biological conclusions.

▶ [Jo Hardin: "Tutorial on RNASeq Normalization and Differential ...](https://www.youtube.com/watch?v=YrQPA23PXSY) — Institute for Pure & Applied Mathematics (IPAM) · 35:37

### Spike-in controls in sequencing *(prerequisite)*
Spike-in controls are known RNA molecules added to samples to serve as external references for normalization. Understanding their use and limitations is key to grasping the paper's comparison between external spike-in normalization and internal normalization methods.

*How the paper uses it:* The paper compares traditional external spike-in normalization with an internal 3' end normalization approach.

▶ [RNA Spike-Ins and Analysis Tools for Trustworthy Genome ...](https://www.youtube.com/watch?v=YVlrzKMJ2uc) — UCSF-Stanford CERSI · 33:58

### Bayesian hierarchical linear regression *(prerequisite)*
Bayesian hierarchical linear regression models data with multiple levels of variation and quantifies uncertainty in parameter estimates. This statistical framework underpins the paper's Virtual Spike-In (VSI) model for estimating normalization factors with error bounds.

*How the paper uses it:* The VSI model developed in the paper is a hierarchical Bayesian linear regression model estimating normalization factors and their uncertainty.

▶ [Lesson 22a Hierarchical Bayes: Concepts](https://www.youtube.com/watch?v=VssgU4Ey7ss) — Michael Dietze · 14:53

## Already in your library

- [StatQuest: A gentle introduction to RNA-seq](https://www.youtube.com/watch?v=tlf6wYJrwKY) — also for: Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads (Yoseph Barash)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the Virtual Spike-In (VSI) Bayesian normalization model for nascent RNA sequencing data. The beginner project reproduces a key figure comparing normalization factor estimates with uncertainty. The intermediate project implements the VSI model on a real public dataset with spike-ins and compares internal versus external normalization. The advanced project extends the VSI approach to address a stated limitation by exploring improved external spike-in normalization strategies integrating machine learning uncertainty estimation.

### Beginner — Reproduce VSI Normalization Factor Estimates with Uncertainty
*Effort: a weekend, ~8 hours*

You build a Jupyter notebook that implements a simplified Bayesian linear regression model to estimate normalization factors from nascent RNA sequencing count data, reproducing the key figure showing normalization factors with error bars (similar to Fig. 2A in the paper). You compare your Bayesian estimates against simple linear regression normalization factors on simulated or small real data.

**Why it shows you understood the paper:** This project shows you understand the core statistical approach of VSI to estimate normalization factors with uncertainty, a key contribution of the paper. It demonstrates grasp of Bayesian hierarchical modeling applied to sequencing normalization.

**Grounded in:** Development of the Virtual Spike-In (VSI) Bayesian model to estimate normalization factors with error bounds.

**Tech stack:** Python 3.11, Jupyter Notebook, PyMC or PyStan for Bayesian modeling, NumPy, Matplotlib

**Data:** Simulated nascent RNA sequencing count data or a small subset of spike-in counts from GEO accession GSE96869 as a substitute.

**Build it:**

1. Simulate or extract count data for spike-in controls and experimental samples.
2. Implement a Bayesian linear regression model to estimate normalization factors with uncertainty.
3. Fit a simple linear regression model for normalization factors as a baseline.
4. Plot normalization factors with error bars from Bayesian model alongside linear regression estimates.
5. Write a README explaining the model, assumptions, and comparison to the paper's figure.

**Ships as:** A Jupyter notebook and README showing Bayesian normalization factor estimates with uncertainty compared to linear regression, reproducing the paper's Fig. 2A concept.

**Stretch goal:** Add a small interactive widget to explore how noise levels affect uncertainty in normalization factors.

### Intermediate — Implement VSI Normalization on Public Nascent RNA-seq Dataset
*Effort: 1-3 weekends*

You implement the Virtual Spike-In Bayesian normalization model from the paper and apply it to a real nascent RNA sequencing dataset with external spike-ins from GEO accession GSE96869. You compare normalization factors obtained from external spike-ins versus internal 3' end normalization and evaluate concordance as in Fig. 3C.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method on real data, understand biological assumptions, and critically compare internal and external normalization approaches. It shows you can handle real sequencing data and reproduce key analyses.

**Grounded in:** Demonstration that internal 3' end normalization corresponds well with external spike-in normalization when assumptions about elongation rate and time points are met.

**Tech stack:** Python 3.11, Jupyter Notebook, PyMC or PyStan, Pandas, NumPy, Matplotlib, Biopython or pysam for sequencing data handling

**Data:** Nascent RNA sequencing data with Drosophila spike-ins from GEO accession GSE96869.

**Build it:**

1. Download and preprocess count data from GSE96869 for spike-ins and internal 3' regions of long genes.
2. Implement the VSI Bayesian model for normalization factor estimation using both external spike-in and internal 3' counts.
3. Calculate and plot concordance between internal and external normalization factors across samples.
4. Compare your results to the paper's reported concordance metrics and discuss biological assumptions.
5. Document your code, analysis, and interpretation in a detailed README.

**Ships as:** A reproducible analysis pipeline and notebook applying VSI normalization to real data, comparing internal and external methods, with plots and interpretation matching the paper's key results.

**Stretch goal:** Incorporate a simple baseline normalization method (e.g., DESeq2 size factors) for comparison and discuss differences.

### Advanced — Enhance External Spike-In Normalization with Machine Learning Uncertainty Estimation
*Effort: a few weeks*

You extend the VSI framework by developing a machine learning model that predicts and corrects for variability and under-sequencing in external spike-in controls, addressing a key limitation noted in the paper. You integrate this with Bayesian uncertainty estimation to improve normalization accuracy on nascent RNA sequencing datasets with low spike-in depth.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by innovating on external spike-in normalization reliability. It demonstrates deep understanding of the biological and technical challenges, Bayesian modeling, and applied ML integration, potentially opening new research avenues.

**Grounded in:** Developing more reliable external normalization methods for nascent RNA sequencing given current protocol limitations.

**Tech stack:** Python 3.11, PyMC or PyStan, scikit-learn, Pandas, NumPy, Matplotlib, Jupyter Notebook

**Data:** Nascent RNA sequencing datasets with external spike-ins from GEO accessions such as GSE96869 and others listed in the paper.

**Build it:**

1. Analyze spike-in sequencing depth and variability across samples in public datasets.
2. Develop a machine learning regression model to predict normalization factor corrections based on spike-in sequencing metrics and sample metadata.
3. Integrate ML predictions with Bayesian VSI normalization to quantify improved uncertainty estimates.
4. Evaluate normalization accuracy improvements by comparing differential expression results before and after correction.
5. Document methodology, code, and results with discussion of biological implications and limitations.

**Ships as:** A comprehensive repository with code and notebooks demonstrating improved external spike-in normalization using ML-enhanced VSI, with evaluation on real datasets and detailed documentation.

**Stretch goal:** Apply the enhanced normalization framework to other nascent transcription assays without run-on steps, such as mNET-seq, to test generalizability.
