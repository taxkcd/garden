---
title: "157 · Prioritization of causal genes from genome-wide association studies by Bayesian data integration across loci — Joel S. Bader"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-joel-s-bader"
source_hash: "f0568d26634424c5e10f12b1738ff68ae763ed42c0c3b51287e77ae4539314ea"
sequence: 157
generator: "outreach-garden: managed"
---

# 157 · Prioritization of causal genes from genome-wide association studies by Bayesian data integration across loci

## At a glance

- **Professor:** Joel S. Bader
- **Institution:** Johns Hopkins University
- **Paper:** [Prioritization of causal genes from genome-wide association studies by Bayesian data integration across loci](https://doi.org/10.1371/journal.pcbi.1012725)
- **Authors:** Zeinab Mousavi, Marios Arvanitis, ThuyVy Duong, Jennifer A. Brody, Alexis Battle, Nona Sotoodehnia, Ali Shojaie, Dan E. Arking, Joel S. Bader
- **Year:** 2025

## Paper overview

This study presents SIGNET, a new Bayesian computational method to identify the most likely causal gene at each genome-wide association study (GWAS) locus. GWAS identify genetic variants associated with traits and diseases, but pinpointing the exact causal gene is challenging because loci often contain multiple genes and the causal variant may regulate distant genes. SIGNET integrates multiple types of data within loci (such as Mendelian gene evidence, protein-coding variants, and gene expression regulation) and across loci (protein-protein and gene regulatory networks) to improve gene prioritization. Applied to cardiac electrophysiology traits, SIGNET outperforms traditional methods and suggests novel candidate genes for further study.

### Why it matters

**Research problem:** Genome-wide association studies identify genetic variants linked to diseases and traits, but determining which gene(s) at each associated locus are truly causal remains difficult due to linkage disequilibrium, multiple genes per locus, and regulatory variants affecting distant genes.

**Why it matters:** Identifying causal genes is crucial for understanding disease mechanisms and for developing targeted therapies, including small molecules, biologics, or gene editing approaches. Incorrect gene prioritization can mislead research and therapeutic development.

**Key contributions:**

- Development of SIGNET, a Bayesian data integration method combining within- and between-locus information for causal gene prioritization.
- Incorporation of protein-protein and gene regulatory interaction networks to share information across loci.
- Application of SIGNET to cardiac electrophysiology GWAS data, demonstrating improved gene prioritization over minimum distance methods.
- Provision of open-source SIGNET software and reproducible analysis pipelines.
- Identification of novel candidate causal genes, such as PMP22, supported by literature evidence.

## About the professor

**Joel S. Bader** — Department of Biomedical Engineering, Whiting School of Engineering, Johns Hopkins University.

Research interests: relationship between genotype and phenotype, applications to human disease, complex genetic disorders and cancer, computational methods, wet-lab approaches

### Research links

- [Faculty/profile page](https://www.baderzone.org)
- [Professor website](https://baderzone.org/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SIGNET method for causal gene prioritization from GWAS data, start with foundational knowledge on genome-wide association studies (GWAS), protein-protein interaction networks, gene regulatory networks, and naïve Bayes probabilistic models. Then, build a solid grasp of Bayesian data integration methods, which underpin SIGNET's approach. Finally, focus on the authors' own talk presenting SIGNET, which directly explains the novel Bayesian integration across loci for causal gene prioritization.

### Genome-wide association studies GWAS *(prerequisite)*
GWAS are the fundamental genetic study design identifying loci associated with traits and diseases. Understanding GWAS principles, challenges, and data types is essential to appreciate the problem SIGNET addresses in prioritizing causal genes at GWAS loci.

*How the paper uses it:* SIGNET prioritizes causal genes at GWAS loci, so understanding GWAS is foundational.

▶ [6.047/6.878 Lecture 14 - GWAS and Disease Dissection (Fall ...](https://www.youtube.com/watch?v=5HHQbudS2vY) — Manolis Kellis · 1:31:10

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks model physical and functional interactions between proteins, enabling information sharing across loci. SIGNET leverages PPI networks as between-locus evidence to improve gene prioritization.

*How the paper uses it:* SIGNET integrates PPI networks to share information across GWAS loci.

▶ [16. Protein Interaction Networks](https://www.youtube.com/watch?v=RBPcKbEvK3U) — MIT OpenCourseWare · 1:20:50

### Gene regulatory networks *(prerequisite)*
Gene regulatory networks represent regulatory relationships controlling gene expression. SIGNET incorporates these networks to model gene regulation across loci, enhancing causal gene identification beyond local evidence.

*How the paper uses it:* SIGNET uses gene regulatory networks as between-locus data for integration.

▶ [Introduction to gene networks](https://www.youtube.com/watch?v=kO15qwlJZi0) — Physical Biology of the Cell (Caltech BE APh 161) · 9:44

### Naïve Bayes probabilistic models *(prerequisite)*
Naïve Bayes models assume independence among features to simplify probabilistic inference. SIGNET applies a naïve Bayes assumption to combine independent evidence types for gene prioritization.

*How the paper uses it:* SIGNET relies on the naïve Bayes assumption to integrate diverse evidence types.

▶ [#87 Naive Bayes | Machine Learning for Engineering ...](https://www.youtube.com/watch?v=uQSn3oLVu-8) — NPTEL-NOC IITM · 28:36

### Bayesian data integration methods
Bayesian data integration combines multiple heterogeneous data sources probabilistically to improve inference. SIGNET is a Bayesian method integrating within- and between-locus data to prioritize causal genes.

*How the paper uses it:* SIGNET is a Bayesian data integration method central to the paper's approach.

▶ [Bayesian Data Analysis: Get Started with Roy Levy](https://www.youtube.com/watch?v=FO9NsY78Rrg) — Statistical Horizons · 58:30

### SIGNET causal gene prioritization talk *(the paper's own talk)*
This talk by Debraj Bose directly presents the SIGNET method, explaining its Bayesian integration framework and application to GWAS loci. It provides the most precise and relevant insight into the paper's novel contributions.

*How the paper uses it:* This is the authors' own talk on SIGNET, the core method of the paper.

▶ [Debraj Bose: Causal gene prioritization integrating GWAS, molecular phenotype, & gene feature data](https://www.youtube.com/watch?v=b43wksv4IGE) — Ann Arbor Chapter ASA · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SIGNET method for prioritizing causal genes from GWAS, start by learning the basics of genome-wide association studies (GWAS), which identify genetic variants linked to traits. Then build intuition on protein-protein interaction and gene regulatory networks, key biological data types SIGNET integrates. Next, grasp the naïve Bayes probabilistic model that SIGNET uses to combine independent evidence. Finally, watch a focused talk on SIGNET itself to see how these concepts come together in practice.

### Genome-wide association studies GWAS *(prerequisite)*
GWAS are studies that scan the genome to find genetic variants associated with traits or diseases. Understanding GWAS helps you know where the genetic signals come from that SIGNET aims to interpret.

*How the paper uses it:* SIGNET prioritizes causal genes at loci identified by GWAS.

▶ [MPG Primer: Genome-Wide Association Studies (GWAS): A ...](https://www.youtube.com/watch?v=Kmm8exqsyas) — Broad Institute · 50:58

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction networks map how proteins physically or functionally interact, revealing biological pathways. SIGNET uses these networks to share information across loci when prioritizing genes.

*How the paper uses it:* SIGNET incorporates protein-protein interaction networks as between-locus evidence.

▶ [16. Protein Interaction Networks](https://www.youtube.com/watch?v=RBPcKbEvK3U) — MIT OpenCourseWare · 1:20:50

### Gene regulatory networks *(prerequisite)*
Gene regulatory networks describe how genes regulate each other's expression, often through transcription factors. SIGNET integrates these networks to model gene regulation across loci.

*How the paper uses it:* SIGNET uses gene regulatory networks to capture between-locus regulatory relationships.

▶ [Introduction to gene networks](https://www.youtube.com/watch?v=kO15qwlJZi0) — Physical Biology of the Cell (Caltech BE APh 161) · 9:44

### Naïve Bayes probabilistic models *(prerequisite)*
Naïve Bayes is a simple probabilistic model that assumes independence among features to combine evidence efficiently. SIGNET uses this assumption to integrate different types of functional evidence for gene prioritization.

*How the paper uses it:* SIGNET relies on a naïve Bayes model to combine independent within-locus evidence types.

▶ [Naive Bayes, Clearly Explained!!!](https://www.youtube.com/watch?v=O2L2Uv9pdDA) — StatQuest with Josh Starmer · 15:12

### SIGNET causal gene prioritization talk *(the paper's own talk)*
This talk presents the SIGNET method, showing how it integrates multiple data types within and across loci using Bayesian modeling to prioritize causal genes from GWAS data.

*How the paper uses it:* This is a direct presentation by the authors on the SIGNET method developed in the paper.

▶ [Debraj Bose: Causal gene prioritization integrating GWAS, molecular phenotype, & gene feature data](https://www.youtube.com/watch?v=b43wksv4IGE) — Ann Arbor Chapter ASA · 3 months ago

## Already in your library

- [Genome-Wide Association Study - An Explanation for Beginners](https://www.youtube.com/watch?v=sOP8WacfBM8) — also for: ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage (Sohini Ramachandran)
- [Approaches for using protein protein interaction networks for ...](https://www.youtube.com/watch?v=VLPk1pr4QVo) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [Protein Protein Interaction Network- PART 1 | History of Graph ...](https://www.youtube.com/watch?v=Ukom7oPwSHk) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [15. Gene Regulatory Networks](https://www.youtube.com/watch?v=So6MK_FcP4E) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)
