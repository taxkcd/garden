---
title: "256 · Comprehensive profiling of chromatin occupancy dynamics through the cell cycle — Alexander J. Hartemink"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-j-hartemink"
source_hash: "d06b724bb6ea6b5613287e15fce01bee1ff7c4d77c570d79e1d086e15059b214"
sequence: 256
generator: "outreach-garden: managed"
---

# 256 · Comprehensive profiling of chromatin occupancy dynamics through the cell cycle

## At a glance

- **Professor:** Alexander J. Hartemink
- **Institution:** Duke University
- **Paper:** [Comprehensive profiling of chromatin occupancy dynamics through the cell cycle](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12809599/)
- **Authors:** Yulong Li, David M. MacAlpine, Alexander J. Hartemink
- **Year:** 2026

## Paper overview

This study investigates how DNA-binding proteins, including nucleosomes and transcription factors, dynamically interact with the genome during the yeast cell cycle. By profiling chromatin occupancy and gene expression at high resolution over two cell cycles, the authors reveal complex patterns of chromatin remodeling linked to transcription and DNA replication. They develop statistical models that use chromatin features to better predict gene expression changes during the cell cycle.

### Why it matters

**Research problem:** Understanding the genome-wide dynamics of chromatin organization and its relationship with transcription during the intrinsic process of the cell division cycle remains incomplete, especially at high spatial and temporal resolution.

**Why it matters:** Chromatin organization critically regulates DNA-templated processes such as transcription and replication. A comprehensive view of chromatin dynamics during the cell cycle can provide insights into gene regulation mechanisms and epigenetic control, which are fundamental to cell biology and disease.

**Key contributions:**

- Generated a high-resolution, genome-wide time series dataset of chromatin occupancy (nucleosomes and transcription factors) and gene expression through consecutive yeast cell cycles.
- Developed two-dimensional kernels to quantify nucleosome and TF occupancy from MNase-seq fragment length data.
- Identified a subset of cell-cycle-regulated genes with concordant periodic chromatin remodeling and expression, but found widespread decoupling between chromatin dynamics and transcription.
- Used Shannon entropy as a quantitative measure of nucleosome disorganization, revealing replication-coupled nucleosome disruption in S phase and reorganization in M phase.
- Constructed Gaussian process regression models showing that integrating chromatin features improves prediction of transcript dynamics beyond RNA levels alone.

## About the professor

**Alexander J. Hartemink** — Professor, Computer Science and Biology, Duke University.

Research interests: development of new algorithms in statistical machine learning and artificial intelligence, and on the application of those methods to complex problems in computational genomics

### Research links

- [Faculty/profile page](https://users.cs.duke.edu/~amink)
- [Professor website](https://users.cs.duke.edu/~amink/)
- [Google Scholar](https://scholar.google.com/citations?user=HLRZ3oAAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0002-1292-2606)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on chromatin occupancy dynamics through the cell cycle, start by grounding yourself in the biological context of cell cycle regulation and the key experimental technique MNase-seq used for chromatin profiling. Next, build familiarity with Gaussian process regression as the statistical modeling approach employed in the study. Finally, focus on the core concept of chromatin occupancy profiling and the authors' own talks or related advanced seminars to grasp the integration of chromatin dynamics with transcriptional regulation during the cell cycle.

### Cell cycle regulation *(prerequisite)*
Understanding the cell cycle and its regulatory checkpoints is essential to contextualize the chromatin dynamics observed in the study. The selected MIT OpenCourseWare lecture provides a rigorous university-level treatment of cell cycle events and checkpoints, suitable for advanced readers.

*How the paper uses it:* The paper investigates chromatin and transcriptional changes linked to the intrinsic process of the yeast cell division cycle.

▶ [23. Cell Cycle and Checkpoints](https://www.youtube.com/watch?v=iz7rWK5cqjE) — MIT OpenCourseWare · 48:19

### MNase-seq technology *(prerequisite)*
MNase-seq is the key experimental method used in the paper to profile nucleosome and transcription factor occupancy genome-wide. The chosen video from Gerald Quon's university lecture series offers an advanced introduction to chromatin accessibility assays including MNase-seq, providing the necessary technical background.

*How the paper uses it:* The authors used MNase-seq to generate high-resolution chromatin occupancy data across the yeast genome.

▶ [MCB 182 Lecture 8.4 - Chromatin accessibility (ATAC-seq)](https://www.youtube.com/watch?v=BzyVK871wqg) — Gerald Quon · 18:25

### Gaussian process regression *(prerequisite)*
Gaussian process regression is the statistical modeling technique applied in the paper to predict gene expression dynamics from chromatin features. The selected video from Distributed Algorithms CDT offers a thorough and mathematically rigorous introduction to Gaussian processes suitable for computational genomics researchers.

*How the paper uses it:* The paper constructs Gaussian process regression models to integrate chromatin features for improved transcript level prediction.

▶ [An Introduction to Gaussian Process regression](https://www.youtube.com/watch?v=dB8aqf7F3CQ) — Distributed Algorithms CDT · 37:46

### Chromatin occupancy profiling
Chromatin occupancy profiling is the core experimental and analytical concept in the paper, involving measurement and interpretation of nucleosome and transcription factor binding dynamics. The MIT OpenCourseWare lecture on chromatin structure provides a comprehensive and advanced overview of chromatin analysis methods, directly relevant to the paper's approach.

*How the paper uses it:* The study's central method is profiling chromatin occupancy dynamics genome-wide through MNase-seq and computational analysis.

▶ [18. Analysis of Chromatin Structure](https://www.youtube.com/watch?v=iKLvCuFD1MA) — MIT OpenCourseWare · 11 years ago

### Paper authors talk
Hearing from the authors themselves or closely related expert talks provides the most direct insight into the study's motivation, methods, and findings. Although no exact talk by the paper authors was found, the keynote lecture by Jane Mellor on chromatin dynamics offers a high-level, research-focused seminar relevant to chromatin remodeling and transcriptional regulation.

*How the paper uses it:* Direct author or expert talks elucidate the complex chromatin dynamics and transcriptional interplay explored in the paper.

▶ [Chromatin Dynamics and Single cell Analysis - Jane Mellor](https://www.youtube.com/watch?v=QQpi243l82E) — Wellcome Connecting Science Learning and Training · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of cell cycle regulation to grasp the biological context of chromatin dynamics during cell division. Next, explore MNase-seq technology to understand how chromatin occupancy is experimentally measured. Then, study chromatin occupancy profiling to see how nucleosome and transcription factor binding patterns are analyzed genome-wide. Finally, learn Gaussian process regression as the statistical method used to model and predict gene expression from chromatin features in the study.

### Cell cycle regulation *(prerequisite)*
The cell cycle is the process by which cells grow and divide, regulated by molecular checkpoints and proteins like cyclins and CDKs. Understanding this regulation provides the biological framework to interpret how chromatin structure changes during different cell cycle phases affect gene expression.

*How the paper uses it:* The paper studies chromatin occupancy dynamics specifically through the yeast cell cycle, making knowledge of cell cycle regulation essential.

▶ [Cell Biology | Cell Cycle Regulation](https://www.youtube.com/watch?v=9ZoZx2FK9DE) — Ninja Nerd · 39:36

### MNase-seq technology *(prerequisite)*
MNase-seq uses micrococcal nuclease to cut DNA in regions not protected by nucleosomes or DNA-binding proteins, allowing mapping of chromatin occupancy at high resolution. This technique reveals where nucleosomes and transcription factors bind across the genome.

*How the paper uses it:* The authors used MNase-seq to profile chromatin occupancy at nucleotide resolution throughout the cell cycle.

▶ [An Introduction to MNase-seq](https://www.youtube.com/watch?v=JMANBl0g2GQ) — Earl Ford IV · 18:25

### Chromatin occupancy profiling
Chromatin occupancy profiling analyzes patterns of nucleosome and transcription factor binding to understand chromatin organization and its impact on gene regulation. It integrates experimental data to reveal dynamic chromatin remodeling events genome-wide.

*How the paper uses it:* This paper develops methods to quantify nucleosome and transcription factor occupancy from MNase-seq data to study chromatin dynamics during the cell cycle.

▶ [18. Analysis of Chromatin Structure](https://www.youtube.com/watch?v=iKLvCuFD1MA) — MIT OpenCourseWare · 11 years ago

### Gaussian process regression *(prerequisite)*
Gaussian process regression is a flexible, non-parametric statistical modeling technique that predicts continuous outcomes by learning patterns and correlations in data. It is especially useful for modeling complex biological processes with uncertainty estimates.

*How the paper uses it:* The authors used Gaussian process regression models to predict transcript levels from chromatin features, improving gene expression predictions beyond RNA data alone.

▶ [Understanding Gaussian Processes | Part 1 - What are ...](https://www.youtube.com/watch?v=71e6xfxrIRs) — digiLab AI · 17:10


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper "Comprehensive profiling of chromatin occupancy dynamics through the cell cycle." The beginner project focuses on reproducing a key metric from the paper using accessible tools and data. The intermediate project involves reimplementing the core Gaussian process regression model to predict transcript dynamics from chromatin features using the paper's public dataset. The advanced project extends the paper's approach by integrating nascent transcription data to address a stated limitation and improve predictive modeling, potentially opening a conversation with the professor.

### Beginner — Calculate and Visualize Nucleosome Disorganization Entropy
*Effort: a weekend, ~8 hours*

You build a script to compute Shannon entropy as a measure of nucleosome disorganization from MNase-seq fragment length data at gene bodies across the yeast cell cycle. Then you create visualizations to reproduce the entropy peak in S phase and its stratification by replication timing, similar to Figure 4B in the paper.

**Why it shows you understood the paper:** This project shows you understand how the paper quantifies nucleosome disorganization using entropy and links it to replication timing, a key chromatin dynamic during the cell cycle.

**Grounded in:** Used Shannon entropy as a quantitative measure of nucleosome disorganization, revealing replication-coupled nucleosome disruption in S phase and reorganization in M phase.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas, numpy

**Data:** MNase-seq fragment length data and replication timing annotations from the GEO accession GSE168699.

**Build it:**

1. Download MNase-seq data and replication timing data from GEO accession GSE168699.
2. Parse fragment length distributions at gene bodies for each time point.
3. Calculate Shannon entropy of nucleosome occupancy per gene and time point.
4. Stratify entropy values by replication timing deciles.
5. Plot entropy dynamics across the cell cycle highlighting the S phase peak and replication timing stratification.

**Ships as:** A Jupyter notebook with code and plots reproducing nucleosome disorganization entropy dynamics as in the paper's Figure 4B, with clear explanations.

**Stretch goal:** Add promoter region entropy calculations and compare their dynamics to gene-body entropy.

### Intermediate — Reimplement Gaussian Process Regression to Predict Transcript Dynamics
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's Gaussian process regression model that predicts gene transcript levels from chromatin features and RNA levels over the yeast cell cycle. Using the public MNase-seq and RNA-seq data from GSE168699, you train and evaluate your model, comparing performance to a baseline RNA-only model.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core computational method linking chromatin occupancy features to transcription dynamics, including model construction, feature engineering, and evaluation.

**Grounded in:** Constructed Gaussian process regression models showing that integrating chromatin features improves prediction of transcript dynamics beyond RNA levels alone.

**Tech stack:** Python 3.11, scikit-learn, GPy or GPyTorch, pandas, numpy, matplotlib

**Data:** MNase-seq and RNA-seq time series data from GEO accession GSE168699.

**Build it:**

1. Download and preprocess MNase-seq and RNA-seq data from GSE168699.
2. Extract chromatin features such as nucleosome occupancy and TF occupancy using fragment length kernels as described in the paper.
3. Implement Gaussian process regression models to predict transcript levels from RNA alone and from RNA plus chromatin features.
4. Train models on part of the time series and evaluate prediction accuracy on held-out time points.
5. Compare performance metrics to show improvement from chromatin features.
6. Visualize predicted vs observed transcript dynamics for selected genes.

**Ships as:** A GitHub repository with scripts and notebooks implementing Gaussian process regression models, evaluation results, and visualizations demonstrating improved transcript prediction.

**Stretch goal:** Incorporate Fourier analysis-based periodicity features to enhance model input and assess impact on prediction.

### Advanced — Integrate Nascent Transcription Data to Refine Transcript Prediction Models
*Effort: 3-4 weeks*

You extend the paper's modeling framework by integrating nascent transcription measurements (e.g., GRO-seq or PRO-seq data from a public yeast dataset) alongside MNase-seq chromatin features to improve prediction of gene expression dynamics during the cell cycle. This addresses the paper's limitation of using total RNA-seq and explores how nascent transcription data refines model accuracy.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions, applying advanced data integration and modeling to improve biological insight and predictive power.

**Grounded in:** The study used total RNA-seq rather than nascent transcript measurements, though high correlation was observed; future directions include integration of nascent transcription assays to refine understanding of transcription-chromatin interplay.

**Tech stack:** Python 3.11, GPyTorch or GPy, pandas, numpy, matplotlib, bioinformatics tools for nascent RNA data processing

**Data:** MNase-seq and total RNA-seq data from GSE168699; publicly available yeast nascent transcription data (e.g., from GEO or SRA) as a substitute for nascent RNA measurements.

**Build it:**

1. Identify and download a suitable public yeast nascent transcription dataset covering the cell cycle.
2. Process nascent transcription data to obtain time-resolved transcript activity profiles.
3. Preprocess MNase-seq chromatin features from GSE168699 as in the intermediate project.
4. Extend Gaussian process regression models to incorporate nascent transcription data as an additional input or target.
5. Train and evaluate models comparing total RNA-only, total RNA plus chromatin, nascent RNA plus chromatin, and combined inputs.
6. Analyze whether nascent transcription data improves prediction accuracy and interpret biological implications.

**Ships as:** A comprehensive GitHub repository with data processing pipelines, extended modeling code, evaluation results, and a detailed README discussing improvements and biological insights.

**Stretch goal:** Explore epigenetic modification data integration if available, or apply the approach to a different organism's cell cycle data.

_The paper authors released no code repository for their methods; all modeling and feature extraction must be reimplemented from the paper's descriptions. MNase-seq and RNA-seq data are available from GEO accession GSE168699._
