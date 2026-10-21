---
title: "913 · HypoRiPPAtlas as an Atlas of hypothetical natural products for mass spectrometry database search — Hosein Mohimani"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hosein-mohimani"
source_hash: "ce37b4ea1f4e0c10a2b2a5a1f5e8cb968aca8f98af8ce64fa41b316098771103"
sequence: 913
generator: "outreach-garden: managed"
---

# 913 · HypoRiPPAtlas as an Atlas of hypothetical natural products for mass spectrometry database search

## At a glance

- **Professor:** Hosein Mohimani
- **Institution:** Carnegie Mellon University
- **Paper:** [HypoRiPPAtlas as an Atlas of hypothetical natural products for mass spectrometry database search](https://pmc.ncbi.nlm.nih.gov/articles/PMC10349150/pdf/41467_2023_Article_39905.pdf)
- **Authors:** Yi-Yuan Lee, Mustafa Guler, Desnor N. Chigumba, Shen Wang, Neel Mittal, Cameron Miller, Benjamin Krummenacher, Haodong Liu, Liu Cao, Aditya Kannan, Keshav Narayan, Samuel T. Slocum, Bryan L. Roth, Alexey Gurevich, Bahar Behsaz, Roland D. Kersten, Hosein Mohimani
- **Year:** 2023

## Paper overview

This paper presents HypoRiPPAtlas, a comprehensive database of hypothetical ribosomally synthesized and post-translationally modified peptides (RiPPs) predicted from microbial and plant genomes. The authors developed seq2ripp, a machine learning pipeline that predicts complete chemical structures of RiPPs from genomic data and generates their theoretical mass spectra. By linking these predictions with mass spectrometry data, the study enables large-scale discovery and annotation of natural products, including novel antibiotics and bioactive peptides from human microbiota and plants.

### Why it matters

**Research problem:** Despite the availability of millions of biosynthetic gene clusters (BGCs) from microbial genomes and billions of mass spectra from natural products, the majority of natural products remain unknown and unlinked to their genetic origins. Existing genome mining tools predict only partial structures, and connecting BGCs to molecular products is slow and inefficient, limiting natural product discovery.

**Why it matters:** Natural products, especially antibiotics and bioactive peptides, are crucial for drug discovery and human health. The rise of antibiotic resistance demands new molecules with diverse modes of action. Current methods for natural product discovery are time-consuming, expensive, and have high rediscovery rates. Bridging genomic data with mass spectrometry can accelerate discovery of novel molecules with therapeutic potential.

**Key contributions:**

- Development of HypoRiPPAtlas, a large-scale atlas of hypothetical RiPP natural products from 22,671 microbial genomes and plant transcriptomes.
- Creation of seq2ripp, a comprehensive machine learning pipeline for predicting complete RiPP structures from genomic data.
- Integration of predicted RiPP structures with mass spectrometry data via Dereplicator+ for high-throughput molecule-spectrum matching.
- Discovery and validation of known and novel RiPPs, including antibiotics (lassopeptides, lanthipeptides) from Streptomyces and bioactive peptides from human microbiota.
- Identification of novel plant RiPPs with previously uncharacterized post-translational modifications, exemplified by the BURP-domain-derived cyclic pentapeptide elaeagnin.

## About the professor

**Hosein Mohimani** — Dr., Ray and Stephanie Lane Computational Biology Department, Carnegie Mellon University.

Research interests: development of computational metabolomics and metagenomics methods for antibiotic discovery and microbiome analysis

### Research links

- [Faculty/profile page](https://www.cmu.edu/cbd/msas/people/mohimani.html)
- [Identity evidence](http://mohimanilab.cbd.cmu.edu)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HypoRiPPAtlas paper, start with foundational knowledge on biosynthetic gene clusters and mass spectrometry database search methods, as these underpin the genomic and spectral data integration in the study. Next, review the class of natural products central to the paper—ribosomally synthesized and post-translationally modified peptides (RiPPs)—to grasp the biological context. Finally, focus on the paper's core concept by watching the authors' own talk to gain direct insights into their machine learning pipeline and database development.

### Biosynthetic gene clusters genome mining seminar *(prerequisite)*
Understanding biosynthetic gene clusters (BGCs) is essential because they encode the enzymes responsible for natural product biosynthesis, including RiPPs. This seminar-level talk provides a research-focused overview of genome mining approaches to identify and classify BGCs, which is foundational for the seq2ripp pipeline's genome2bgc module.

*How the paper uses it:* The paper relies on mining BGCs from microbial and plant genomes as the first step in predicting RiPP structures.

▶ [JGI2021 Meeting: Yi Tang](https://www.youtube.com/watch?v=sUMMKOI7154) — DOE Joint Genome Institute · 35:30 · 5y ago

### Mass spectrometry database search methods lecture *(prerequisite)*
Mass spectrometry database search methods are critical for linking predicted molecular structures to experimental spectral data. This lecture provides a rigorous, research-level introduction to peptide-spectrum matching and database search statistics, which are key to understanding how Dereplicator+ integrates with HypoRiPPAtlas for molecule identification.

*How the paper uses it:* The paper uses mass spectral searches with Dereplicator+ to validate predicted RiPPs against experimental data.

▶ [\[Colloquium\] Statistics in Tandem Mass Spectrometry Data Analysis, by Attila Kertesz-Farkas](https://www.youtube.com/watch?v=SupdYLftAGM) — ФКН ВШЭ · 1:01:54 · 4y ago

### Ribosomally synthesized and post-translationally modified peptides lecture *(prerequisite)*
RiPPs are the natural product class central to the paper's predictions. A detailed lecture on their biosynthesis, structural diversity, and post-translational modifications provides the biological and chemical context necessary to appreciate the challenges and innovations in predicting their structures from genomic data.

*How the paper uses it:* HypoRiPPAtlas focuses on hypothetical RiPP natural products, making understanding RiPP biology crucial.

▶ [Natural Products with Dr. Barry O'Keefe](https://www.youtube.com/watch?v=7GWAx1BPoFI) — NIH Clinical Center · 46:58 · 5y ago

### HypoRiPPAtlas authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk offers direct insight into the development, methodology, and impact of HypoRiPPAtlas and seq2ripp. This presentation is the most precise and authoritative resource to understand the paper's contributions, challenges, and future directions from the researchers themselves.

*How the paper uses it:* This talk is by the paper's authors and directly addresses the HypoRiPPAtlas project and seq2ripp pipeline.

▶ [Micro molecules, big impact: New approaches to neurodevelopmental disorders](https://www.youtube.com/watch?v=iThrx5MSGkw) — Scripps Research · 52:56 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HypoRiPPAtlas paper, start by learning what ribosomally synthesized and post-translationally modified peptides (RiPPs) are, as they are the natural products predicted in the study. Next, grasp the concept of biosynthetic gene clusters (BGCs) which encode these peptides in genomes. Then, learn how mass spectrometry database search methods link predicted molecules to experimental data. Finally, explore the machine learning approaches used to predict natural product structures from genomic data, which is central to the paper's computational pipeline.

### Ribosomally synthesized and post-translationally modified peptides lecture *(prerequisite)*
RiPPs are a class of natural products made by ribosomes and then chemically modified after translation. Understanding their biosynthesis and biological roles provides the biochemical foundation for why predicting their structures from genomes is important.

*How the paper uses it:* The paper focuses on predicting hypothetical RiPP structures from genomes using machine learning.

▶ [Every Peptide & It's Effects Explained in 10 Minutes](https://www.youtube.com/watch?v=OkpqEtFt8QA) — A Whey to Explain and Whey Too Jacked · 9:41 · 9mo ago

### Biosynthetic gene clusters genome mining seminar *(prerequisite)*
Biosynthetic gene clusters are groups of genes in microbial or plant genomes that together encode the enzymes and precursors needed to produce natural products like RiPPs. Genome mining identifies these clusters to link genes to molecules.

*How the paper uses it:* Seq2ripp predicts RiPP biosynthetic gene clusters as the first step in the pipeline.

▶ [JGI2021 Meeting: Yi Tang](https://www.youtube.com/watch?v=sUMMKOI7154) — DOE Joint Genome Institute · 35:30 · 5y ago

### Mass spectrometry database search methods lecture *(prerequisite)*
Mass spectrometry produces spectra representing molecular fragments. Database search methods match these spectra to predicted or known molecules, enabling identification of natural products experimentally.

*How the paper uses it:* The paper uses Dereplicator+ to search mass spectral datasets against predicted RiPP structures for validation.

▶ [Database Search and Peptide-spectrum Matches - Oliver Kohlbacher - May 2018](https://www.youtube.com/watch?v=q1Kdb8RjTh0) — May Institute NEU · 36:07 · 8y ago

### Machine learning for natural product structure prediction seminar
Machine learning models can predict complex molecular structures from genomic data by learning biosynthetic patterns. This computational approach accelerates natural product discovery by generating hypothetical structures.

*How the paper uses it:* Seq2ripp uses machine learning modules to predict precursor peptides, core peptides, and mature RiPP structures from genomes.

▶ [Machine Learning in Drug Discovery: Francesca Grisoni](https://www.youtube.com/watch?v=2mYGgZWVGAU) — Broad Institute · 34:23 · 9mo ago

### HypoRiPPAtlas authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides insight into the motivation, challenges, and impact of HypoRiPPAtlas and seq2ripp, complementing technical understanding with context and future directions.

*How the paper uses it:* This talk discusses the development and application of HypoRiPPAtlas for natural product discovery.

▶ [Micro molecules, big impact: New approaches to neurodevelopmental disorders](https://www.youtube.com/watch?v=iThrx5MSGkw) — Scripps Research · 52:56 · 1mo ago

## Already in your library

- [Mass Spectrometry explained – how it works](https://www.youtube.com/watch?v=6O_85tKfZHc) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
