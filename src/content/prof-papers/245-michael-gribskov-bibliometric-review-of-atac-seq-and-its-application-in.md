---
title: "245 · Bibliometric review of ATAC-Seq and its application in gene expression — Michael Gribskov"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-gribskov"
source_hash: "ef7d2fee3c1301e1f0a0cb5024dfdcf929df66f922999d09f92bd99010162b85"
sequence: 245
generator: "outreach-garden: managed"
---

# 245 · Bibliometric review of ATAC-Seq and its application in gene expression

## At a glance

- **Professor:** Michael Gribskov
- **Institution:** Purdue University
- **Paper:** [Bibliometric review of ATAC-Seq and its application in gene expression](https://doi.org/10.1093/bib/bbac061)
- **Authors:** Liheng Luo, Michael Gribskov, Sufang Wang
- **Year:** 2022

## Paper overview

This paper reviews the development, applications, and analysis methods of ATAC-seq, a sequencing technique that identifies open chromatin regions in genomes. It discusses how ATAC-seq integrates with other sequencing methods like RNA-seq and ChIP-seq to provide insights into gene expression regulation across various species and diseases. The review also summarizes computational pipelines for ATAC-seq data analysis, aiming to assist biologists lacking programming skills.

### Why it matters

**Research problem:** Understanding gene regulation requires detailed knowledge of chromatin accessibility and protein-DNA interactions, which are challenging to measure comprehensively. Integrating multiple sequencing methods and analyzing large datasets is complex, especially for researchers without computational expertise.

**Why it matters:** Gene expression regulation underlies biological processes and disease mechanisms, including cancer and other diseases. Improved methods to study chromatin accessibility and gene regulation can lead to better understanding and potential therapeutic targets.

**Key contributions:**

- Comprehensive bibliometric analysis of ATAC-seq publications and trends.
- Detailed introduction to ATAC-seq, RNA-seq, and ChIP-seq principles and integration.
- Phylogenetic analysis of species studied with ATAC-seq, highlighting dominance of human and mouse data.
- Summary of ATAC-seq applications in human diseases, animals, plants, fungi, and protozoa.
- Compilation and comparison of 16 ATAC-seq data analysis pipelines to aid researchers.

## About the professor

**Michael Gribskov** — Professor, Purdue University.

Research interests: Biological systems controlled by complex networks of interactions between genes, RNAs, proteins, and small molecules; Computational methods for finding patterns in sequences and structures; Analysis of biological networks using genome wide expression, protein interaction, genetic interaction and metabolite data.

### Research links

- [Faculty/profile page](https://www.bio.purdue.edu/People/profile/mgribsko.html)
- [Identity evidence](http://rna.genomics.purdue.edu/Gribskov_Lab#People)
- [Professor website](http://www.structure.bio.purdue.edu/)
- [Lab website](https://structure.bio.purdue.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the bibliometric review of ATAC-seq and its application in gene expression, start with foundational knowledge on chromatin accessibility sequencing, RNA sequencing methods, and ChIP-seq technology. These prerequisites provide the biological and technical context for ATAC-seq and its integration with other omics data. Then, focus on the core concept of ATAC-seq itself, prioritizing talks by the paper authors or research groups closely aligned with the paper's focus, to grasp the detailed principles, applications, and computational analysis pipelines discussed in the review.

### Chromatin accessibility sequencing *(prerequisite)*
This section covers the fundamental biological and technical principles behind assays like ATAC-seq that measure chromatin accessibility, essential for understanding how open chromatin regions are identified and interpreted. The selected lecture by Manolis Kellis from MIT is a rigorous university-level talk that covers gene regulation foundations including ATAC-seq and related methods, providing a strong academic background.

*How the paper uses it:* Understanding chromatin accessibility is central to ATAC-seq technology, which the paper reviews in detail.

▶ [MIT Deep Learning Genomics - Lecture 6 - Regulatory ...](https://www.youtube.com/watch?v=KCn_99lXCs8) — Manolis Kellis · 1:20:49

### RNA sequencing methods *(prerequisite)*
RNA-seq is a key complementary technique to ATAC-seq for studying gene expression. The chosen webinar from the MRC Laboratory of Molecular Biology offers an advanced, in-depth introduction to RNA-seq analysis, suitable for graduate-level researchers aiming to integrate transcriptomic data with chromatin accessibility data.

*How the paper uses it:* The paper discusses integration of ATAC-seq with RNA-seq to elucidate gene expression regulation.

▶ [RNA-seq course webinar - Session 1](https://www.youtube.com/watch?v=mOku8X4mw3o) — MRC Laboratory of Molecular Biology · 1:03:37

### ChIP-seq technology *(prerequisite)*
ChIP-seq is critical for studying protein-DNA interactions and complements ATAC-seq data. The selected video from VCU Libraries is a detailed, step-by-step seminar on performing ChIP-qPCR and related techniques, providing a rigorous understanding of the experimental and analytical aspects of ChIP-seq.

*How the paper uses it:* The paper reviews how ATAC-seq integrates with ChIP-seq to reveal regulatory mechanisms.

▶ [Understanding and Performing Chromatin ...](https://www.youtube.com/watch?v=pLC99QQ2MoI) — VCU Libraries · 53:15

### Multi-omics data integration
Multi-omics integration is a central theme of the paper, focusing on combining ATAC-seq, RNA-seq, and ChIP-seq data to understand gene regulation. Wolfgang Huber's talk at the Open Precision Medicine conference is a substantive, research-level presentation on multi-omics data integration in cancer stratification, aligning well with the paper's discussion of computational challenges and strategies.

*How the paper uses it:* The paper emphasizes the importance and challenges of integrating ATAC-seq with other omics data.

▶ [Multi-omics data Integration - Wolfgang Huber at OPM1](https://www.youtube.com/watch?v=M48N5_Gq2lY) — Biomage Ltd · 57:52

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related research groups provide the most precise insights into the review's findings and perspectives. Although no direct talk by the authors was found, the detailed tutorial by Bioinformagician on analyzing single-cell ATAC-seq data in R offers an advanced, computationally focused walkthrough that complements the paper's emphasis on data analysis pipelines and user-friendly tools.

*How the paper uses it:* This video aligns with the paper's focus on computational pipelines for ATAC-seq data analysis and multi-omics integration.

▶ [How to analyze single-cell ATAC-Seq data in R | Detailed ...](https://www.youtube.com/watch?v=yEKZJVjc5DY) — Bioinformagician · 45:11

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on ATAC-seq and its integration with other sequencing methods, start by learning the foundational sequencing technologies: RNA-seq and ChIP-seq, which provide transcriptomic and protein-DNA interaction data respectively. Then, build intuition on chromatin accessibility sequencing, the core concept behind ATAC-seq. Finally, explore the integration of multi-omics data, which is central to the paper's discussion on combining ATAC-seq, RNA-seq, and ChIP-seq for gene regulation insights.

### RNA sequencing methods *(prerequisite)*
RNA sequencing (RNA-seq) measures gene expression by sequencing RNA molecules, revealing which genes are active and at what levels. Understanding RNA-seq is essential to grasp how transcriptomic data complements chromatin accessibility data in multi-omics studies.

*How the paper uses it:* The paper discusses integrating ATAC-seq with RNA-seq to link chromatin accessibility with gene expression regulation.

▶ [RNA-seq Analysis 2025 | 01: Introduction to RNA Sequencing](https://www.youtube.com/watch?v=OX6Dhqx3R1s) — Bioinformatics DotCa · 1:07:09

### ChIP-seq technology *(prerequisite)*
ChIP-seq identifies DNA regions bound by specific proteins, such as transcription factors or histones, by combining chromatin immunoprecipitation with sequencing. This method reveals protein-DNA interactions critical for gene regulation.

*How the paper uses it:* The paper highlights combining ATAC-seq with ChIP-seq to explore protein regulation mechanisms of gene expression.

▶ [StatQuest: A gentle introduction to ChIP-Seq](https://www.youtube.com/watch?v=nkWGmaYRues) — StatQuest with Josh Starmer · 8 years ago

### Chromatin accessibility sequencing *(prerequisite)*
Chromatin accessibility sequencing methods like ATAC-seq map open regions of the genome where DNA is accessible to regulatory proteins, indicating active regulatory elements. This is the core technology reviewed in the paper.

*How the paper uses it:* ATAC-seq is the central technique reviewed, used to identify open chromatin regions linked to gene regulation.

▶ [[Webinar] ATAC-Seq: Mapping Open Chromatin - Dr. Michael ...](https://www.youtube.com/watch?v=L2Kxaq9yRE4) — Active Motif · 10:18

### Multi-omics data integration
Multi-omics integration combines data from different sequencing methods (e.g., ATAC-seq, RNA-seq, ChIP-seq) to provide a comprehensive view of gene regulation. It involves computational strategies to unify diverse datasets despite challenges like batch effects.

*How the paper uses it:* The paper emphasizes the growing trend and challenges of integrating ATAC-seq with RNA-seq and ChIP-seq data to understand gene expression regulation.

▶ [The What and Why of Multi-Omics Integration | 2023 EMSL ...](https://www.youtube.com/watch?v=V-Rbcso4Aag) — Environmental Molecular Sciences Laboratory (EMSL) · 36:41

### Paper authors talk
Hearing directly from authors provides insight into the review's findings, the state of ATAC-seq research, and practical considerations for data analysis pipelines.

*How the paper uses it:* This video offers a direct explanation of ATAC-seq technology and its applications, complementing the paper's bibliometric review.

▶ [ATAC-seq Explained: How to Map Chromatin Accessibility 🧬](https://www.youtube.com/watch?v=UqZCveVt2z4) — CD Genomics · 7:08 · 4 months ago

## Already in your library

- [StatQuest: A gentle introduction to RNA-seq](https://www.youtube.com/watch?v=tlf6wYJrwKY) — also for: Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads (Yoseph Barash)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for demonstrating understanding of the bibliometric review of ATAC-seq and its multi-omics integration applications. The beginner project introduces you to ATAC-seq data quality metrics using existing tools, the intermediate project has you implement and compare an ATAC-seq data analysis pipeline on public data, and the advanced project tackles a future direction by integrating multi-omics data to explore batch effect challenges and visualization improvements. Each project ties directly to a key contribution or limitation discussed in the paper and leverages your existing software engineering skills while introducing relevant bioinformatics concepts.

### Beginner — ATAC-seq Data Quality Metrics with ataqv
*Effort: a weekend, ~8 hours*

You build a small project that downloads a sample ATAC-seq dataset (publicly available from GEO or ENCODE), runs the ataqv quality control tool from the ParkerLab GitHub repository, and generates a report of key quality metrics such as fragment size distribution and transcription start site enrichment. You then create a simple web page or markdown report summarizing these metrics with explanations.

**Why it shows you understood the paper:** This project shows you understand the importance of quality control in ATAC-seq data analysis and can use one of the computational pipelines cited in the paper to extract meaningful metrics, demonstrating familiarity with the paper's discussion of analysis pipelines and data challenges.

**Grounded in:** We collected and compared ATAC-seq analysis pipelines, which allowed biological researchers who lack programming skills to better analyze and explore ATAC-seq data.

**Tech stack:** Python 3.11, Linux or MacOS environment, ataqv tool from https://github.com/ParkerLab/ataqv, Markdown or simple React for report

**Data:** Use a publicly available small ATAC-seq dataset from ENCODE or GEO as a substitute for the paper's data.

**Build it:**

1. Identify and download a small public ATAC-seq dataset (e.g., from ENCODE).
2. Install and run the ataqv tool on the dataset to generate quality control metrics.
3. Parse the ataqv output and create a markdown or simple React-based report summarizing key metrics.
4. Write explanations linking these metrics to ATAC-seq data quality concepts from the paper.
5. Publish the code and report on GitHub with clear README instructions.

**Verified links from the paper:**

- <https://github.com/ParkerLab/ataqv> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts to run ataqv on public ATAC-seq data and a report summarizing quality metrics with explanations.

**Stretch goal:** Add a comparison of quality metrics across two different ATAC-seq datasets to illustrate variability and batch effects.

### Intermediate — Implementing and Comparing an ATAC-seq Data Analysis Pipeline
*Effort: 1-3 weekends, ~20 hours*

You implement a basic ATAC-seq data analysis pipeline inspired by the paper's summary of existing pipelines, using open-source tools such as ATAC-pipe or atacr from the third-party artifacts. You process a public ATAC-seq dataset, perform peak calling, and integrate RNA-seq data from the same sample to correlate chromatin accessibility with gene expression. You compare your results against a simple baseline (e.g., peak calling without integration) and report metrics such as number of peaks, overlap with known regulatory regions, and correlation with RNA-seq expression.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core multi-omics integration approach discussed in the paper, showing comprehension of how ATAC-seq data is analyzed and combined with RNA-seq to reveal gene regulation mechanisms.

**Grounded in:** ATAC-seq combined with RNA-seq and ChIP-seq reveals regulatory mechanisms in cancers and other diseases.

**Tech stack:** Python 3.11, R 4.x, Linux or MacOS, ATAC-pipe https://github.com/QuKunLab/ATAC-pipe, atacr https://github.com/TeamMacLean/atacr, RNA-seq analysis tools (e.g., DESeq2)

**Data:** Use publicly available paired ATAC-seq and RNA-seq datasets from human or mouse samples from ENCODE or GEO as substitutes for the paper's data.

**Build it:**

1. Select a paired ATAC-seq and RNA-seq public dataset from ENCODE or GEO.
2. Install and run ATAC-pipe or atacr to process the ATAC-seq data and call peaks.
3. Process the RNA-seq data using standard RNA-seq analysis tools to obtain gene expression levels.
4. Integrate ATAC-seq peak data with RNA-seq expression to identify correlations between chromatin accessibility and gene expression.
5. Compare results to a baseline analysis without integration and report metrics such as peak counts and correlation coefficients.
6. Document the pipeline, results, and interpretations in a GitHub repository.

**Verified links from the paper:**

- <https://github.com/QuKunLab/ATAC-pipe> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/TeamMacLean/atacr> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A documented pipeline implementation on GitHub that processes ATAC-seq and RNA-seq data, integrates results, and reports metrics demonstrating multi-omics integration.

**Stretch goal:** Extend the pipeline to include ChIP-seq data integration or single-cell ATAC-seq data processing.

### Advanced — Multi-omics Integration Pipeline to Address Batch Effects and Visualization
*Effort: few weeks, ~60+ hours*

You develop an advanced computational pipeline that integrates ATAC-seq, RNA-seq, and optionally ChIP-seq data from multiple batches or experiments to explore and mitigate batch effects, a key limitation noted in the paper. You implement normalization and batch correction strategies, then create interactive visualizations to compare chromatin accessibility and gene expression across conditions. You evaluate the effectiveness of integration and batch effect correction by metrics such as clustering consistency and variance explained. This project addresses the paper's future direction on improving computational tools for better compatibility and visualization.

**Why it shows you understood the paper:** This project shows deep understanding of the paper's identified challenges in multi-omics data integration, especially batch effects and visualization, and applies computational methods to tackle these issues, demonstrating readiness for research-level work aligned with the professor's expertise.

**Grounded in:** Challenges remain in multi-omics data integration including cost, standardization, and batch effects. Future directions include improvement and integration of computational tools with better compatibility and visualization.

**Tech stack:** Python 3.11, R 4.x, Snakemake or Nextflow for workflow management, atacr or ATAC-pipe for ATAC-seq processing, DESeq2 or edgeR for RNA-seq, Batch correction tools (e.g., ComBat, Harmony), Plotly or Shiny for interactive visualization

**Data:** Use multiple public ATAC-seq and RNA-seq datasets from different batches or experiments (e.g., ENCODE or GEO) to simulate batch effects and integration challenges.

**Build it:**

1. Collect multiple public ATAC-seq and RNA-seq datasets from different batches or labs.
2. Process each dataset separately using existing pipelines (e.g., atacr, DESeq2).
3. Implement batch effect correction methods on the integrated data.
4. Develop interactive visualizations to explore chromatin accessibility and gene expression across batches and conditions.
5. Evaluate batch correction effectiveness using clustering metrics and variance analysis.
6. Document the pipeline, methods, and findings in a comprehensive GitHub repository.

**Verified links from the paper:**

- <https://github.com/TeamMacLean/atacr> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/QuKunLab/ATAC-pipe> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A multi-omics integration pipeline with batch effect correction and interactive visualization, demonstrating improved data compatibility and quality, hosted on GitHub with detailed documentation.

**Stretch goal:** Incorporate single-cell multi-omics data integration and explore cell-type specific regulatory mechanisms.

_Public ATAC-seq and RNA-seq datasets from ENCODE or GEO are used as substitutes since the paper does not provide direct data accessions; verify dataset availability and size before starting._
