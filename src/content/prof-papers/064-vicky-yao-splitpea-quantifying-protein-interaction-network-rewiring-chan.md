---
title: "064 · Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer — Vicky Yao"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vicky-yao"
source_hash: "585a6861e4f84352a7c70f38edfe85b7b8a982c2fe71281d6bfaed536319fee4"
sequence: 64
generator: "outreach-garden: managed"
---

# 064 · Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer

## At a glance

- **Professor:** Vicky Yao
- **Institution:** Rice University
- **Paper:** [Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer](http://psb.stanford.edu/psb-online/proceedings/psb24/dannenfelser.pdf)
- **Authors:** Ruth Dannenfelser, Vicky Yao
- **Year:** 2024

## Paper overview

This paper presents Splitpea, a computational method to detect how alternative splicing in cancer rewires protein-protein interaction networks at the patient-specific level. By integrating protein domain interactions with splicing data from cancer and normal tissues, Splitpea identifies gains, losses, or ambiguous changes in protein interactions caused by splicing changes. The method was applied to breast and pancreatic cancer samples, revealing distinct network rewiring patterns and patient subgroups, highlighting its potential for understanding disease mechanisms and precision medicine.

### Why it matters

**Research problem:** Alternative splicing alters protein isoforms and their interactions, but isoform-specific protein-protein interactions (PPIs) are poorly characterized, limiting understanding of how splicing rewires interaction networks in diseases like cancer.

**Why it matters:** Protein interactions are fundamental to biological processes and disease mechanisms. Understanding how splicing changes remodel these networks can reveal molecular underpinnings of diseases such as cancer, aiding in diagnosis, prognosis, and therapy development.

**Key contributions:**

- Development of Splitpea, the first general tool to characterize directionality (gain, loss, chaos) of protein interaction rewiring due to alternative splicing at the individual sample level.
- Integration of multiple PPI and DDI databases with differential splicing data to infer rewired networks.
- Application of Splitpea to large breast and pancreatic cancer cohorts, demonstrating biological insights and patient subgroup discovery.
- Provision of open-source code and data for reproducibility and further research.

## About the professor

**Vicky Yao** — Assistant Professor, Computer Science, Rice University.

Research interests: Computational biology, machine learning and statistical methods, disease genomics, biological data visualization

### Research links

- [Faculty/profile page](https://profiles.rice.edu/faculty/vicky-yao)
- [Professor website](https://www.cs.rice.edu/~vy/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Splitpea paper, start by building a strong foundation in protein-protein interaction networks and domain-domain interactions, as these are critical for modeling how splicing rewires protein interactions. Next, study differential splicing analysis in cancer to grasp how sample-specific splicing changes are detected and interpreted. Finally, focus on the core concept of alternative splicing's impact on protein interactions, which is the biological mechanism driving the network rewiring analyzed by Splitpea.

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks form the fundamental framework for modeling cellular processes and understanding how interactions change in disease. A rigorous introduction to PPI detection methods and network construction is essential for appreciating how Splitpea integrates these data to infer rewiring.

*How the paper uses it:* Splitpea relies heavily on known PPIs to predict rewiring events caused by alternative splicing.

▶ [Approaches for using protein protein interaction networks for ...](https://www.youtube.com/watch?v=VLPk1pr4QVo) — EMBL's European Bioinformatics Institute EMBL-EBI · 58:22

### Domain-domain interactions in proteins *(prerequisite)*
Domain-domain interactions (DDIs) are key to understanding how alternative splicing alters protein interaction interfaces. Learning about protein domains and how they mediate PPIs provides insight into the mechanistic basis for Splitpea's predictions of interaction gain or loss.

*How the paper uses it:* Splitpea integrates domain-domain interaction data to infer how splicing-induced domain changes affect protein interactions.

▶ [BioPlex: An Integrated Data Product For The Analysis Of ...](https://www.youtube.com/watch?v=ZaXRFhSIFhQ) — R Consortium · 24:40

### Differential splicing analysis in cancer *(prerequisite)*
Differential splicing analysis identifies sample-specific changes in exon usage between cancer and normal tissues, which is critical for detecting splicing events that may rewire protein interactions. Understanding these methods grounds the interpretation of Splitpea's input data.

*How the paper uses it:* Splitpea uses differential exon splicing data from TCGA and GTEx to detect rewiring events at the patient level.

▶ [Somatic Mutations that Alter RNA Splicing in Human Cancers](https://www.youtube.com/watch?v=h7aFoP_CcZU) — Simons Institute for the Theory of Computing · 28:20 · 10 years ago

### Alternative splicing impact on protein interactions
Alternative splicing generates protein isoform diversity that can alter protein-protein interactions, driving network rewiring in diseases like cancer. This concept is central to the Splitpea method, which quantifies these changes at the individual sample level.

*How the paper uses it:* The core biological mechanism that Splitpea models is how alternative splicing rewires protein interaction networks.

▶ [RNAs are not naked - Gene Yeo, PhD MBA](https://www.youtube.com/watch?v=AnhbGp-pA-w) — GenomeTDCC · 20:43

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Splitpea paper, start by learning about protein-protein interaction networks as they form the fundamental framework for modeling cellular processes and network rewiring. Next, grasp domain-domain interactions in proteins, which explain how protein interfaces change due to alternative splicing. Then, study differential splicing analysis in cancer to see how splicing changes are detected and interpreted in disease contexts. Finally, focus on the core concept of how alternative splicing impacts protein interactions, which is the key biological mechanism driving network rewiring analyzed by Splitpea.

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks represent the physical contacts between proteins in a cell, which are essential for cellular functions. Understanding how these networks are constructed and analyzed helps in modeling how proteins work together and how their interactions change in diseases.

*How the paper uses it:* Splitpea builds on PPI networks to detect how alternative splicing rewires protein interactions in cancer.

▶ [Protein Protein Interaction Network- PART 1 | History of Graph ...](https://www.youtube.com/watch?v=Ukom7oPwSHk) — Sanket Bapat · 21:30

### Domain-domain interactions in proteins *(prerequisite)*
Proteins interact through specific regions called domains, and domain-domain interactions (DDIs) define how these regions bind to each other. Learning about DDIs is crucial to understanding how changes in protein domains caused by alternative splicing can alter protein interactions.

*How the paper uses it:* Splitpea integrates domain-domain interaction data to predict how splicing-induced domain changes affect protein interactions.

▶ [Protein domains and motifs - terminology, concepts, & examples](https://www.youtube.com/watch?v=7ejb6P6Fo-8) — the bumbling biochemist · 17:06

### Differential splicing analysis in cancer *(prerequisite)*
Differential splicing analysis identifies changes in RNA splicing patterns between cancer and normal tissues, revealing how different protein isoforms are produced. This knowledge is essential to interpret the sample-specific splicing changes that Splitpea uses to infer network rewiring.

*How the paper uses it:* Splitpea uses differential exon splicing data from cancer and normal tissues to detect rewiring events at the patient level.

▶ [7 Types of Alternative splicing in 6 minutes](https://www.youtube.com/watch?v=vRCzr-621qg) — biologyexams4u · 6:41

### Alternative splicing impact on protein interactions
Alternative splicing allows a single gene to produce multiple protein isoforms with different interaction capabilities, thereby rewiring protein interaction networks. Understanding this mechanism is key to grasping how Splitpea quantifies network changes due to splicing in cancer.

*How the paper uses it:* This is the core biological mechanism that Splitpea models to reveal patient-specific protein interaction network rewiring.

▶ [The Information Paradox in Biology: Life's Hidden Complexity](https://www.youtube.com/watch?v=2xU8TShkavU) — AI Labs: Exploratory Science and Paradoxes · 9:41


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Splitpea method and its application to protein interaction network rewiring due to alternative splicing in cancer. Starting from a beginner-level visualization of splicing-induced interaction changes on a small gene set, progressing to an intermediate-level reimplementation and application of Splitpea on a subset of TCGA breast cancer data, and culminating in an advanced project extending Splitpea by integrating somatic mutation data to explore combined effects on network rewiring. Each project builds on your existing software engineering and ML skills while introducing relevant computational biology concepts and tools.

### Beginner — Visualize Splicing-Induced PPI Rewiring for Selected Cancer Genes
*Effort: a weekend, ~8 hours*

You build a small interactive web app that visualizes protein-protein interaction (PPI) network rewiring caused by alternative splicing for a handful of well-studied cancer-related genes. Using publicly available domain-domain interaction data and simulated exon skipping events, you show gain, loss, or ambiguous changes in PPIs as colored edges in the network graph.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core biological problem—how alternative splicing affects protein interactions—and your ability to represent directionality of rewiring events (gain, loss, chaos) visually, a key contribution of Splitpea.

**Grounded in:** Development of Splitpea, the first general tool to characterize directionality (gain, loss, chaos) of protein interaction rewiring due to alternative splicing at the individual sample level.

**Tech stack:** TypeScript, React, D3.js, Node.js

**Data:** Use domain-domain interaction data from public databases (e.g., DOMINE or 3did) and simulate splicing changes for a small set of cancer driver genes; no TCGA data required.

**Build it:**

1. Select 5-10 well-known cancer driver genes with known PPIs and domain annotations.
2. Obtain domain-domain interaction data from a public source and map to these genes.
3. Simulate alternative splicing events that cause domain gains or losses for these genes.
4. Implement a React+D3.js app to visualize the PPI network with edges colored by rewiring type (gain, loss, chaos).
5. Add interactivity to toggle between normal and spliced isoform networks and highlight affected interactions.

**Ships as:** An interactive web app repository with README explaining the biological context, data sources, and visualization of splicing-induced PPI rewiring for selected genes.

**Stretch goal:** Add patient-specific simulated splicing profiles to show variability across samples.

### Intermediate — Reimplement and Apply Splitpea on Breast Cancer TCGA Subset
*Effort: 2 weekends, ~20 hours*

You reimplement the core Splitpea method to integrate protein-protein interaction and domain-domain interaction data with differential exon splicing data from a small subset of TCGA breast cancer samples. You predict rewiring events (gain, loss, chaos) of PPIs and compare your results to a simple baseline that ignores domain information. You report metrics such as proportion of lost vs gained interactions and visualize patient-specific rewiring networks.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's core computational approach and apply it to real cancer splicing data, demonstrating comprehension of the integration of PPI, DDI, and splicing data and the patient-specific rewiring concept.

**Grounded in:** Splitpea integrates known protein-protein interactions (PPIs) and domain-domain interactions (DDIs) with sample-specific differential exon splicing data from TCGA cancer samples and GTEx normal tissues. It predicts rewiring events (gain, loss, chaos) of PPIs mediated by splicing-induced domain changes on a per-sample basis.

**Tech stack:** Python 3.11, Pandas, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Use TCGA breast cancer RNA-seq splicing data (publicly available via GDC or recount2) and domain-domain interaction data from public databases; simulate or subset PPI data as needed.

**Build it:**

1. Download and preprocess a small subset (e.g., 10-20 samples) of TCGA breast cancer splicing data focusing on differential exon usage.
2. Obtain PPI and DDI datasets from public sources and map to genes in the splicing data.
3. Implement the Splitpea logic to infer gain, loss, and chaos rewiring events based on domain presence/absence due to splicing.
4. Implement a simple baseline that predicts rewiring without domain information (e.g., based on gene-level splicing changes only).
5. Compare the rewiring predictions of your method vs baseline and visualize patient-specific rewiring networks.
6. Document your code and results in a Jupyter notebook.

**Verified links from the paper:**

- <https://github.com/ylaboratory/splitpea> — released by the paper's authors

**Ships as:** A GitHub repo with Jupyter notebooks showing reimplementation of Splitpea on TCGA breast cancer subset, comparison to baseline, and visualizations of rewired networks.

**Stretch goal:** Add clustering of patient-specific networks to identify subgroups as in the paper.

### Advanced — Integrate Somatic Mutation Data with Splitpea to Explore Combined Network Rewiring
*Effort: 3-4 weeks*

You extend the Splitpea framework by integrating somatic mutation data from TCGA breast or pancreatic cancer samples alongside splicing data to analyze combined effects on protein interaction network rewiring. You develop methods to incorporate mutation impact scores on protein domains or interactions and assess how mutations and splicing jointly remodel PPIs. You validate your approach by comparing network rewiring patterns with and without mutation integration and explore biological insights.

**Why it shows you understood the paper:** This project tackles a key future direction of the paper, demonstrating your ability to extend a complex computational biology method by integrating multi-omics data, addressing limitations, and generating novel biological hypotheses.

**Grounded in:** Explore integration with somatic mutation data and other omics to better understand combined effects on protein networks.

**Tech stack:** Python 3.11, Pandas, NetworkX, Scikit-learn, Jupyter Notebook, Biopython

**Data:** Use TCGA somatic mutation and splicing data for breast or pancreatic cancer samples (publicly available via GDC), plus PPI and DDI data from public databases.

**Build it:**

1. Download and preprocess matched somatic mutation and splicing data for a cohort of TCGA cancer samples.
2. Map mutations to protein domains and annotate their potential impact on domain function or interactions.
3. Extend the Splitpea rewiring inference to incorporate mutation effects alongside splicing-induced domain changes.
4. Construct combined patient-specific protein interaction rewiring networks reflecting both splicing and mutation impacts.
5. Perform comparative analyses of network rewiring patterns with and without mutation data integration.
6. Document findings and biological interpretations in a detailed Jupyter notebook and README.

**Verified links from the paper:**

- <https://github.com/ylaboratory/splitpea> — released by the paper's authors

**Ships as:** A GitHub repository with code and notebooks demonstrating the extended Splitpea method integrating somatic mutation data, with analyses and visualizations of combined network rewiring in cancer.

**Stretch goal:** Develop a web-based interactive visualization tool for combined rewiring networks.

_Accessing and preprocessing TCGA splicing and mutation data requires familiarity with GDC data portals and may require controlled access permissions; public subsets or simulated data can be used for initial development._
