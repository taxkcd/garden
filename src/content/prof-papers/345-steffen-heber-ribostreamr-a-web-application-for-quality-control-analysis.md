---
title: "345 · RiboStreamR: a web application for quality control, analysis, and visualization of Riboseq data — Steffen Heber"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steffen-heber"
source_hash: "c89fc60a0525354a1703feb9d9bab7da33d27f7fb99fd217759956cdfba0de5f"
sequence: 345
generator: "outreach-garden: managed"
---

# 345 · RiboStreamR: a web application for quality control, analysis, and visualization of Riboseq data

## At a glance

- **Professor:** Steffen Heber
- **Institution:** North Carolina State University
- **Paper:** [RiboStreamR: a web application for quality control, analysis, and visualization of Riboseq data](https://doi.org/10.1186/s12864-019-5700-7)
- **Authors:** Patrick Perkins, Serina Mazzoni-Putman, Anna Stepanova, Jose Alonso, Steffen Heber
- **Year:** 2019

## Paper overview

This paper presents riboStreamR, a user-friendly web application designed to facilitate quality control, analysis, and visualization of ribosome profiling (Ribo-seq) data. Ribo-seq is a technique that captures snapshots of translating ribosomes on mRNA, providing insights into protein synthesis. However, analyzing Ribo-seq data is complex and requires expertise. riboStreamR integrates multiple analysis tools into a single platform with a graphical interface, enabling researchers without programming skills to perform comprehensive Ribo-seq data analyses, including quality checks, visualization, and differential expression analysis.

### Why it matters

**Research problem:** Ribo-seq data analysis is challenging due to complex preprocessing steps, quality control requirements, and the need to use multiple disparate software tools, often requiring programming expertise. There is a lack of a consolidated, user-friendly platform that integrates comprehensive Ribo-seq quality control and analysis tools accessible to mainstream biologists.

**Why it matters:** Ribo-seq is a powerful method to study translation and its regulation at high resolution, but the complexity of data analysis limits its accessibility and reproducibility. Providing an integrated, easy-to-use platform can democratize Ribo-seq data analysis, improve data quality assessment, and accelerate biological discoveries.

**Key contributions:**

- Development of riboStreamR, a comprehensive Ribo-seq quality control and analysis web platform with a user-friendly GUI.
- Integration of multiple analysis tools into a single environment, removing the need for programming skills.
- Implementation of graphical customization options for detailed data visualization.
- Inclusion of anomaly detection strategies using expert thresholds, outlier detection, and reference datasets.
- Provision of a report generation tool to summarize analyses and produce publication-quality figures.

## About the professor

**Steffen Heber** — North Carolina State University.

### Research links

- [Faculty/profile page](https://csc.ncsu.edu/people/sheber)
- [Identity evidence](http://statgen.ncsu.edu/~sheber)
- [Professor website](https://statgen.ncsu.edu/~sheber)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the riboStreamR platform and its context, start with foundational knowledge on next-generation sequencing (NGS) data processing and quality control in high-throughput sequencing, as these are essential prerequisites for grasping the data types and QC challenges riboStreamR addresses. Then, explore R Shiny web application development to appreciate the platform's implementation and user interface design. Finally, focus on the core concept of ribosome profiling data analysis and the authors' own talk to directly connect with the paper's contributions and methodology.

### next generation sequencing data processing *(prerequisite)*
Understanding the basics of NGS data processing, including file formats like fastq and BAM, and the general workflow from raw sequencing data to aligned reads, is critical to appreciate the upstream context of riboStreamR. This knowledge sets the stage for why riboStreamR focuses on downstream analysis and quality control rather than raw data processing.

*How the paper uses it:* riboStreamR accepts aligned BAM files and does not handle raw fastq processing, so understanding NGS data processing is foundational.

▶ [Next-Generation Sequencing (NGS): Full Lecture](https://www.youtube.com/watch?v=CUIUurrjdFA) — DRdoubleB · 1:07:16

### quality control in high throughput sequencing *(prerequisite)*
Quality control is a vital step in sequencing data analysis to ensure data reliability and interpretability. Learning about QC metrics and tools used in high-throughput sequencing will help understand the challenges riboStreamR addresses with its integrated QC tools and anomaly detection strategies.

*How the paper uses it:* riboStreamR integrates multiple QC tools and anomaly detection to flag suspicious datasets, making QC knowledge essential.

▶ [Quality control](https://www.youtube.com/watch?v=wpgRjgDMrH4) — Chipster Tutorials · 13:03

### R Shiny web application development *(prerequisite)*
Since riboStreamR is implemented as an R Shiny web application, understanding Shiny's capabilities, design principles, and production considerations will provide insight into the platform's user interface and technical implementation.

*How the paper uses it:* The platform is built using R Shiny, leveraging its interactive web app framework for user-friendly data analysis.

▶ [Joe Cheng | Shiny in production: Principles, practices, and ...](https://www.youtube.com/watch?v=Wy3TY0gOmJw) — Posit PBC · 50:27

### ribosome profiling data analysis
Ribosome profiling (Ribo-seq) is the core experimental technique underlying the data analyzed by riboStreamR. Understanding the principles, data characteristics, and typical analyses of Ribo-seq is crucial to grasp the platform's purpose and functionalities.

*How the paper uses it:* riboStreamR is designed specifically for quality control, analysis, and visualization of Ribo-seq data.

▶ [Ribosome Profiling](https://www.youtube.com/watch?v=mnuSkhRyBCg) — European Molecular Biology Laboratory (EMBL) · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand riboStreamR, a web application for Ribo-seq data analysis. We start with the basics of next-generation sequencing (NGS) data processing and quality control, essential for grasping the data inputs and challenges riboStreamR addresses. Then, we cover R Shiny web application development to appreciate the platform's implementation, followed by ribosome profiling data analysis to understand the biological data type. Finally, we focus on riboStreamR itself, tying all concepts together.

### next generation sequencing data processing *(prerequisite)*
Learn how raw sequencing data is generated and processed into formats like FASTQ and BAM, which are the starting points for Ribo-seq analysis. Understanding these steps clarifies what preprocessing riboStreamR assumes and what it does not handle.

*How the paper uses it:* riboStreamR requires aligned BAM files as input but does not perform raw data processing or mapping.

▶ [1) Next Generation Sequencing (NGS) - An Introduction](https://www.youtube.com/watch?v=jFCD8Q6qSTM) — Applied Biological Materials - abm · 9:30

### quality control in high throughput sequencing *(prerequisite)*
Quality control ensures sequencing data is reliable before analysis. This includes checking read quality, coverage, and biases, which are critical for trustworthy Ribo-seq results and are core to riboStreamR's functionality.

*How the paper uses it:* riboStreamR integrates multiple quality control tools to assess Ribo-seq data quality.

▶ [Quality control](https://www.youtube.com/watch?v=wpgRjgDMrH4) — Chipster Tutorials · 13:03

### R Shiny web application development *(prerequisite)*
R Shiny is a framework for building interactive web apps in R without extensive web development skills. Understanding Shiny helps appreciate how riboStreamR provides a user-friendly GUI for complex bioinformatics analyses.

*How the paper uses it:* riboStreamR is implemented as an R Shiny web application to enable accessible data analysis.

▶ [A Gentle Introduction to creating R Shiny Web Apps](https://www.youtube.com/watch?v=jxsKUxkiaLI) — Matt Dancho (Business Science) · 10:54

### ribosome profiling data analysis
Ribosome profiling (Ribo-seq) captures snapshots of translating ribosomes on mRNA, revealing protein synthesis dynamics. Understanding this method and its data analysis challenges is key to appreciating riboStreamR's purpose.

*How the paper uses it:* riboStreamR facilitates comprehensive analysis and visualization of Ribo-seq data.

▶ [Ribosome Profiling](https://www.youtube.com/watch?v=mnuSkhRyBCg) — European Molecular Biology Laboratory (EMBL) · 5 years ago

## Already in your library

- [NGS Explained: Next Generation Sequencing Step-by-Step](https://www.youtube.com/watch?v=WKAUtJQ69n8) — also for: SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection (Mukul S. Bansal)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of riboStreamR and its approach to Ribo-seq data quality control and analysis. The beginner project reproduces a core visualization metric from the platform using public data and familiar tools. The intermediate project involves running and extending the riboStreamR application on real data to explore anomaly detection and visualization customization. The advanced project tackles a stated limitation by integrating upstream raw data quality control into the riboStreamR workflow, adding automation and expanding usability beyond Arabidopsis data.

### Beginner — Ribo-seq Read Length Distribution Visualization
*Effort: a weekend, ~8 hours*

You build a simple R script that processes aligned Ribo-seq BAM files to extract read length distributions and plot them as histograms. This reproduces one of the key quality control visualizations riboStreamR offers, focusing on read length distribution as a metric of data quality.

**Why it shows you understood the paper:** This project shows you understand the importance of read length distribution in Ribo-seq QC and how to extract and visualize this metric from BAM files, a fundamental step in riboStreamR's preprocessing.

**Grounded in:** Key results: riboStreamR provides tools for read length distribution visualization; Key contributions: graphical customization options for detailed data visualization.

**Tech stack:** R 4.x, Bioconductor Rsamtools, ggplot2

**Data:** Use the Arabidopsis thaliana Ribo-seq BAM files from GEO accession GSE81332 as a substitute for the paper's test data.

**Build it:**

1. Download BAM files from GEO accession GSE81332.
2. Write an R script to read BAM files using Rsamtools and extract read lengths of aligned reads.
3. Aggregate read length counts and plot a histogram using ggplot2.
4. Add options to customize plot aesthetics (colors, labels).
5. Save the plot as a PDF.

**Ships as:** A GitHub repo with an R script and README showing how to generate and customize read length distribution plots from Ribo-seq BAM files.

**Stretch goal:** Add GC content distribution plots for the same BAM files to extend QC visualization.

### Intermediate — Running and Extending riboStreamR on Arabidopsis Data
*Effort: 2 weekends, ~20 hours*

You set up the riboStreamR web application locally from the authors' GitHub repository and run it on the Arabidopsis thaliana datasets from GEO accession GSE81332. You explore the anomaly detection features and graphical customization options, then extend the app by adding a simple new visualization or QC metric (e.g., a summary table of read length anomalies).

**Why it shows you understood the paper:** This project demonstrates you can deploy and use the authors' platform, understand its core QC and visualization tools, and extend it with new features, showing comprehension of the platform's architecture and R/Shiny development.

**Grounded in:** Key contributions: development of riboStreamR web app with GUI, integration of multiple QC tools, graphical customization, anomaly detection; Key results: support for BAM upload, anomaly detection, customizable graphics.

**Tech stack:** R 4.x, Shiny, Bioconductor, Git

**Data:** Use the Arabidopsis thaliana Ribo-seq BAM files and annotations from GEO accession GSE81332 as in the paper.

**Build it:**

1. Clone the riboStreamR GitHub repository from https://github.com/pjperki2/riboStreamR.
2. Install required R packages and dependencies.
3. Run the Shiny app locally and upload the Arabidopsis BAM and annotation files.
4. Explore existing QC tools, anomaly detection, and graphical customization.
5. Implement a new simple QC visualization or summary metric (e.g., enhanced anomaly summary).
6. Document the setup, usage, and your extension in the README.

**Verified links from the paper:**

- <https://github.com/pjperki2/riboStreamR> — released by the paper's authors

**Ships as:** A GitHub repo fork of riboStreamR with instructions to run locally, example outputs on Arabidopsis data, and a new added QC visualization or anomaly summary feature.

**Stretch goal:** Add automated report generation combining your new visualization with existing outputs.

### Advanced — Integrating Upstream Fastq Quality Control into riboStreamR Workflow
*Effort: 3-4 weeks*

You develop an extension or companion module to riboStreamR that adds upstream raw fastq quality control and preprocessing steps (e.g., FastQC reports, adapter trimming) integrated into the existing Shiny workflow. This addresses a stated limitation of riboStreamR by automating raw data QC before BAM upload. You also add support for a non-Arabidopsis species by incorporating appropriate genome and annotation files and validating the workflow.

**Why it shows you understood the paper:** This project shows deep understanding of riboStreamR's limitations and future directions, ability to extend complex bioinformatics workflows, and skill in integrating multiple NGS data processing steps into a user-friendly platform.

**Grounded in:** Limitations: riboStreamR does not handle upstream fastq QC or read mapping; Future directions: implement additional upstream tools for fastq quality analyses and optimized mapping algorithms; expand validation to more species.

**Tech stack:** R 4.x, Shiny, Bioconductor, FastQC (command line), Python 3.x (optional for preprocessing scripts), Git

**Data:** Use publicly available Ribo-seq fastq datasets from GEO (e.g., GSE81332 raw fastq files) and genome/annotation files for a second species such as yeast or mouse from Ensembl or UCSC.

**Build it:**

1. Download raw fastq files and genome/annotation files for Arabidopsis and a second species (e.g., yeast).
2. Develop or integrate a fastq quality control module (e.g., FastQC) that runs within or alongside the Shiny app.
3. Add preprocessing steps such as adapter trimming (e.g., using cutadapt) with user interface controls.
4. Modify riboStreamR workflow to accept processed BAM files generated after mapping (outside scope) or provide instructions for mapping.
5. Add support for loading genome and annotation files for the second species and validate QC visualizations.
6. Document the extended workflow, installation, and usage instructions.
7. Optionally, implement automated textual summaries of QC results.

**Verified links from the paper:**

- <https://github.com/pjperki2/riboStreamR> — released by the paper's authors

**Ships as:** A GitHub repository with an extended riboStreamR Shiny app or companion tool that integrates upstream fastq QC and preprocessing, supports multiple species, and includes documentation and example datasets.

**Stretch goal:** Automate mapping step integration using popular aligners and add codon density or ribosome pause-site detection visualizations.
