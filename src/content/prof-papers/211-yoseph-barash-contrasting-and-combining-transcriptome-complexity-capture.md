---
title: "211 · Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads — Yoseph Barash"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yoseph-barash"
source_hash: "770459220ab1a1c8c4461ce5d5f129e9a8b58d1d2c60662237a4bc4960fba8ae"
sequence: 211
generator: "outreach-garden: managed"
---

# 211 · Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads

## At a glance

- **Professor:** Yoseph Barash
- **Institution:** University of Pennsylvania
- **Paper:** [Contrasting and combining transcriptome complexity captured by short and long RNA sequencing reads](http://genome.cshlp.org/lookup/doi/10.1101/gr.278659.123)
- **Authors:** Seong Woo Han, San Jewell, Andrei Thomas-Tikhonenko, Yoseph Barash, et al.
- **Year:** 2024

## Paper overview

This study compares short-read and long-read RNA sequencing technologies to understand their strengths and weaknesses in capturing transcriptome complexity. The authors developed a pipeline, MAJIQ-L, to integrate data from both technologies, revealing that short reads detect more splice junctions while long reads better capture intron retention and full isoforms. They provide a visualization tool, VOILA v3, to aid combined analysis, highlighting the complementary nature of these sequencing methods.

### Why it matters

**Research problem:** How to quantitatively compare short-read and long-read RNA sequencing technologies in detecting transcriptome variations, whether these technologies can be effectively combined, and what benefits such combined analysis offers.

**Why it matters:** Understanding transcriptome complexity is crucial for genomic research, including identifying alternative splicing events and isoforms relevant to diseases. Short- and long-read sequencing have complementary strengths and limitations, and a clear comparison and integration method is needed to leverage both effectively.

**Key contributions:**

- Development of MAJIQ-L pipeline for integrated analysis of short- and long-read RNA-seq data.
- Comprehensive comparative evaluation of splice junction and intron retention detection between short and long reads across multiple datasets and algorithms.
- Demonstration that short reads detect ~30% more splice junctions, while long reads detect many more intron retention events and full isoforms.
- Identification of factors contributing to differences, including 3′ to 5′ bias in long reads and GC content effects.
- Creation of VOILA v3 visualization package for unified transcriptome analysis.

## About the professor

**Yoseph Barash** — Professor of Genetics, Genetics, University of Pennsylvania.

Research interests: The lab develops machine learning algorithms that integrate high-throughput data (RNASeq, CLIPSeq , PIPSeq, etc.) to infer RNA biogenesis and function, followed by experimental verifications of inferred mechanisms.

### Research links

- [Faculty/profile page](https://www.med.upenn.edu/apps/faculty/index.php/g275/p8507519)
- [Identity evidence](https://www.biociphers.org/yosephb)
- [Professor website](http://www.biociphers.org/)
- [Resolved homepage](https://biociphersadmin.wixsite.com/biociphers)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** RNA sequencing data analysis
**The paper assumes:** RNA sequencing technologies, transcriptome analysis methods, splice junction detection algorithms, and RNA-seq data biases
**Already in this field?** Skip this entirely if you already understand RNA sequencing technologies and computational transcriptome analysis workflows.

This background is designed to provide foundational knowledge on RNA sequencing data analysis, crucial for understanding the comparative evaluation and integration of short- and long-read RNA-seq data in the paper. The rigorous course offers a deep dive into next-generation sequencing technologies and data analysis workflows, while the fast track provides a concise, practical tutorial series focused on RNA-seq data processing steps. Choose the course for comprehensive understanding or the fast track for a quick, hands-on introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Next Generation Sequencing Technologies : Data Analysis And Applications](https://www.youtube.com/playlist?list=PLmsR2Fv1p6b4VvwYz48-FJud9lwxQT-O9) — CH 31: IIT Madras 01: Instrumentation & Others · 60 videos · 32.1h across 60 episodes

**Watch only this:** Lectures 10 (Data QC and Trimming), 13 (Data Download and Exploration), 14 (Hands-on 1 - Data exploration and QC), 15 (Hands-on 1 - Data QC and Trimming), 46 (Hands-on 2: Preliminary Data Analysis), and 48 (Differential Gene Expression Analysis I), about 3.2 hours total — these cover key RNA-seq data processing and quality control steps relevant to the paper.

*Why it unblocks this paper:* This IIT Madras course covers next-generation sequencing technologies and data analysis in depth, including data quality control, trimming, alignment, and variant calling, which underpin understanding RNA-seq data characteristics and biases relevant to the paper's comparative analysis of short- and long-read sequencing.

*If you want all of it:* 32.1 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [RNA Seq Data Analysis Tutorial](https://www.youtube.com/playlist?list=PLvK49Q0ARs91nb8lIpErL2bYU64ADmqc2) — Farhan Haq · 10 videos · 1.2h across 10 episodes

**Watch only this:** Episodes 1 through 7 (Downloading sequencing data on windows - SRA Tool kit - Step 1 through Indexing BAM file using samtools - Step 6), about 50 minutes total — these cover the core RNA-seq data preparation and alignment steps necessary to understand the paper's data processing.

*Why it unblocks this paper:* This concise tutorial series by Farhan Haq walks through essential RNA-seq data analysis steps from downloading data to gene expression quantification, providing a practical and accessible introduction to RNA-seq workflows that align well with the paper's focus on RNA-seq data processing and analysis.

*If you want all of it:* 1.2 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on integrating short- and long-read RNA sequencing data, start by building a strong foundation on alternative splicing and transcriptome complexity, which are the biological phenomena underlying the study. Next, explore computational methods for RNA-seq data analysis and splice junction detection algorithms to appreciate the technical challenges and solutions. Finally, focus on the paper's core contribution by examining the MAJIQ-L integrated analysis pipeline, including any talks by the authors or related workshops, to grasp the novel integration approach and visualization tools developed.

### Alternative splicing and transcriptome complexity *(prerequisite)*
This section covers the biological basis of transcriptome variation, focusing on alternative splicing mechanisms and their complexity. Understanding these concepts is crucial because the paper compares sequencing technologies in their ability to capture such transcriptome features.

*How the paper uses it:* The paper evaluates how short- and long-read sequencing capture alternative splicing and transcriptome complexity differently.

▶ [Long-Read Transcriptome Complexity and Cell-Type ...](https://www.youtube.com/watch?v=CivPG_qL2MU) — Simons Institute for the Theory of Computing · 32:25

### Computational analysis of RNA-seq data *(prerequisite)*
Learn about computational pipelines and methods used to process and interpret RNA sequencing data. This knowledge is essential to understand how the authors developed and benchmarked their MAJIQ-L pipeline for integrated analysis.

*How the paper uses it:* The paper develops computational methods to integrate and analyze short- and long-read RNA-seq data.

▶ [Transcriptomics 1: analyzing RNA-seq data by running bioinformatics pipelines](https://www.youtube.com/watch?v=WbJ9OA2vevk) — OmicsLogic · 6 years ago

### Splice junction detection algorithms *(prerequisite)*
This section focuses on algorithms that identify splice sites from RNA-seq data, a critical step for comparing the detection capabilities of short- and long-read sequencing technologies. Understanding these algorithms helps in appreciating the paper's comparative evaluation.

*How the paper uses it:* The paper compares splice junction detection between short- and long-read sequencing using various algorithms.

▶ [BSU seminar by Dr Heejung Shim](https://www.youtube.com/watch?v=3YNGnnsAQaE) — MRC Biostatistics Unit, University of Cambridge · 49:10

### MAJIQ-L integrated analysis pipeline
This is the core concept of the paper, detailing the novel pipeline developed to combine short- and long-read RNA-seq data for comprehensive transcriptome analysis. Watching talks or workshops related to MAJIQ/VOILA provides direct insight into the methodology and visualization tools.

*How the paper uses it:* MAJIQ-L is the central computational pipeline developed in the paper for integrated analysis of short- and long-read RNA-seq data.

▶ [Splicing analysis with MAJIQ/VOILA UPenn 052517 - Pr3](https://www.youtube.com/watch?v=Pskq9k3wT6I) — BioCiphersLab · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of RNA sequencing technologies, focusing on the differences between short- and long-read RNA-seq. Then, build intuition about alternative splicing and transcriptome complexity, which are the biological phenomena these technologies aim to capture. Next, explore computational analysis methods for RNA-seq data, followed by understanding splice junction detection algorithms critical for comparing sequencing outputs. Finally, learn about the MAJIQ-L pipeline, the core computational method developed in the paper to integrate short- and long-read RNA-seq data.

### RNA sequencing technologies *(prerequisite)*
RNA sequencing technologies allow us to read RNA molecules to understand gene expression and transcript structures. Short-read sequencing produces many short fragments, while long-read sequencing reads longer RNA molecules, each with unique strengths and limitations.

*How the paper uses it:* The paper compares short-read and long-read RNA sequencing technologies to assess their ability to capture transcriptome complexity.

▶ [StatQuest: A gentle introduction to RNA-seq](https://www.youtube.com/watch?v=tlf6wYJrwKY) — StatQuest with Josh Starmer · 18:26 · 8 years ago

### Alternative splicing and transcriptome complexity *(prerequisite)*
Alternative splicing is a process where a single gene can produce multiple RNA variants (isoforms), increasing transcriptome complexity. Understanding this biological mechanism helps grasp why detecting splice junctions and isoforms is important in RNA-seq analysis.

*How the paper uses it:* The study focuses on detecting alternative splicing events and transcriptome variations using RNA sequencing data.

▶ [Alternative splicing | mechanism of alternative splicing | eukaryotic rna processing](https://www.youtube.com/watch?v=gUS49c22gho) — Shomu's Biology · 19:06 · 2 years ago

### Splice junction detection algorithms *(prerequisite)*
Splice junction detection algorithms identify the boundaries where RNA segments are joined after splicing. Accurate detection is crucial for understanding transcript variants and comparing sequencing technologies.

*How the paper uses it:* The paper evaluates different algorithms for detecting splice junctions from short- and long-read data.

▶ [BSU seminar by Dr Heejung Shim](https://www.youtube.com/watch?v=3YNGnnsAQaE) — MRC Biostatistics Unit, University of Cambridge · 49:10

## Already in your library

- [7 Types of Alternative splicing in 6 minutes](https://www.youtube.com/watch?v=vRCzr-621qg) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from reproducing a core comparative metric from the paper using existing tools, to applying the authors' MAJIQ-L pipeline on real data for integrated analysis, and finally to extending the work by addressing a stated limitation around isoform quantification with a probabilistic model. Each project is tailored to your software engineering and applied ML skills while grounding tightly in the paper's contributions and future directions.

### Beginner — Reproduce splice junction detection comparison
*Effort: a weekend, ~8 hours*

You build a small analysis script that compares splice junction counts detected by short-read versus long-read RNA-seq data at matched coverage, reproducing the paper's key metric that short reads detect ~30% more splice junctions. You use simple Python data processing and visualization to replicate one figure or table from the paper.

**Why it shows you understood the paper:** This project shows you understand the fundamental difference in splice junction detection between short and long reads, a central quantitative result of the paper.

**Grounded in:** Short reads detect approximately 30% more splice junctions than long reads at matched coverage.

**Tech stack:** Python 3.11, pandas, matplotlib

**Data:** Use publicly available matched short- and long-read RNA-seq datasets referenced in the paper or simulate small example data reflecting splice junction counts.

**Build it:**

1. Obtain or simulate matched short- and long-read RNA-seq splice junction count data.
2. Write a Python script to load and aggregate splice junction counts for each technology.
3. Calculate the percentage difference in detected splice junctions between short and long reads.
4. Plot a bar chart or table summarizing the comparison.
5. Write a README explaining the analysis and how it relates to the paper's result.

**Ships as:** A GitHub repo with a Python script and README reproducing the splice junction detection comparison metric and visualization.

**Stretch goal:** Add analysis of coverage effects on junction detection by subsampling reads.

### Intermediate — Run MAJIQ-L pipeline on public RNA-seq data
*Effort: 2 weekends, ~20 hours*

You install and run the authors' MAJIQ-L pipeline from their Bitbucket repository to integrate short- and long-read RNA-seq data on a publicly available dataset. You reproduce the combined splice graph visualization using VOILA v3 and compare splice junction and intron retention detection between the two technologies.

**Why it shows you understood the paper:** This project demonstrates you can use the authors' core method for integrated analysis, understand its inputs and outputs, and interpret the complementary transcriptome features revealed by combined short- and long-read data.

**Grounded in:** Development of MAJIQ-L pipeline for integrated analysis of short- and long-read RNA-seq data; Creation of VOILA v3 visualization package for unified transcriptome analysis.

**Tech stack:** Python 3.11, MAJIQ-L (Bitbucket), VOILA v3, Linux shell scripting

**Data:** Use publicly available matched short- and long-read RNA-seq datasets referenced in the paper or substitute with publicly available datasets with both data types.

**Build it:**

1. Clone and install the MAJIQ-L pipeline from https://bitbucket.org/biociphers/majiq-l.
2. Download or identify a suitable matched short- and long-read RNA-seq dataset.
3. Prepare genome annotation files as required by MAJIQ-L.
4. Run MAJIQ-L to detect splice junctions and intron retention events.
5. Use VOILA v3 to visualize combined splice graphs and transcript isoforms.
6. Compare and report differences in splice junction and intron retention detection between short and long reads.
7. Document the process and findings in a detailed README.

**Verified links from the paper:**

- <https://bitbucket.org/biociphers/majiq-l> — released by the paper's authors

**Ships as:** A GitHub repo with scripts, commands, and a report reproducing integrated analysis and visualization of transcriptome complexity using MAJIQ-L and VOILA v3.

**Stretch goal:** Experiment with relaxing long-read algorithm parameters and observe effects on junction detection and false positives.

### Advanced — Unified probabilistic isoform quantification model
*Effort: 3-4 weeks*

You develop a prototype probabilistic model that integrates short- and long-read RNA-seq data for isoform-level quantification, addressing a key limitation noted in the paper. You implement the model in Python, apply it to a matched dataset, and compare isoform abundance estimates to those from separate analyses.

**Why it shows you understood the paper:** This project tackles a stated future direction by extending the paper's integrated analysis beyond splice junction detection to isoform quantification, demonstrating deep comprehension and ability to innovate on the method.

**Grounded in:** No unified probabilistic model combining short- and long-read data for isoform quantification was developed; Future direction: Development of unified probabilistic models for integrated isoform-level quantification from short and long reads.

**Tech stack:** Python 3.11, NumPy, SciPy, PyTorch or TensorFlow (optional), Jupyter Notebook

**Data:** Use publicly available matched short- and long-read RNA-seq datasets referenced in the paper or substitute with publicly available datasets; simulate isoform abundances if necessary.

**Build it:**

1. Review literature on isoform quantification models for short and long reads separately.
2. Design a probabilistic model framework that integrates splice junction evidence from both data types.
3. Implement the model in Python, allowing input of splice junction counts and long-read isoform evidence.
4. Apply the model to a matched dataset to estimate isoform abundances.
5. Compare results to isoform quantifications from short-read-only and long-read-only methods.
6. Document methodology, code, and results in a comprehensive README and Jupyter notebook.

**Ships as:** A GitHub repo with code implementing a unified probabilistic isoform quantification model, example data analysis, and detailed documentation linking to the paper's limitation and future direction.

**Stretch goal:** Incorporate allele-specific splicing or variant detection into the model.

_Public matched short- and long-read RNA-seq datasets may not be identical to those used in the paper; substitute datasets should be carefully chosen or simulated to approximate the paper's data characteristics._
