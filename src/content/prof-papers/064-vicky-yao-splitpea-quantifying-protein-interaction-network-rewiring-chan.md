---
title: "064 · Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer — Vicky Yao"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vicky-yao"
source_hash: "db929699e6ef2fa4e5aac6e3ae8e2e9c22dd249d838bdd428a813a4bfb7861ee"
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
