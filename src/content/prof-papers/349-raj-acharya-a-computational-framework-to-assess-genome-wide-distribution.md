---
title: "349 · A computational framework to assess genome-wide distribution of polymorphic human endogenous retrovirus-K In human populations — Raj Acharya"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-raj-acharya"
source_hash: "377e0a1a0ae29b43fa91d8d0ba3419691f6894dc3bf118190e51590118a7717f"
sequence: 349
generator: "outreach-garden: managed"
---

# 349 · A computational framework to assess genome-wide distribution of polymorphic human endogenous retrovirus-K In human populations

## At a glance

- **Professor:** Raj Acharya
- **Institution:** Indiana University
- **Paper:** [A computational framework to assess genome-wide distribution of polymorphic human endogenous retrovirus-K In human populations](https://doi.org/10.1371/journal.pcbi.1006564)
- **Authors:** Weiling Li, Lin Lin, Raunaq Malhotra, Lei Yang, Raj Acharya, Mary Poss
- **Year:** 2019

## Paper overview

This study developed a computational method to detect and analyze the presence and variation of polymorphic human endogenous retrovirus-K (HERV-K) proviruses across global human populations using whole genome sequencing data. The method accounts for low sequencing depth and reveals population-specific differences in HERV-K prevalence and combinations, providing a resource to study their potential role in human diseases.

### Why it matters

**Research problem:** Human endogenous retrovirus-K (HERV-K) is insertionally polymorphic, meaning individuals differ in the presence or absence of these retroviruses at specific genomic loci. Linking specific polymorphic HERV-Ks to human diseases has been difficult due to lack of population prevalence data and challenges in accurately identifying HERV-K loci from short-read sequencing data.

**Why it matters:** HERV-Ks have been implicated in cancers, autoimmune, and neurodegenerative diseases, but their exact contribution remains unclear. Understanding the distribution and variation of polymorphic HERV-Ks in human populations is crucial to investigate their potential roles in disease pathogenesis and genomic diversity.

**Key contributions:**

- Developed a computationally efficient k-mer based method to detect polymorphic HERV-K proviruses from low-depth whole genome sequencing data.
- Introduced a mixture model to statistically cluster k-mer matching ratios to classify provirus presence, solo LTR, or absence.
- Analyzed 1000 Genomes Project data to reveal population-specific prevalence and co-occurrence patterns of 20 polymorphic HERV-K proviruses.
- Provided evidence of population-specific allelic variation in some HERV-K loci.
- Created an interactive visualization tool for exploring HERV-K co-occurrence across populations.

## About the professor

**Raj Acharya** — John H. Rudy Professor of Computing, Engineering, and Informatics, Luddy, Indiana University.

Research interests: AI/ML and Data Science

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/acharya-raj.html)
- [Identity evidence](http://www.cse.psu.edu/~rua1)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** statistical mixture models
**The paper assumes:** statistical mixture models and clustering methods
**Already in this field?** Skip this entirely if you already understand statistical mixture models and their use in clustering biological sequence data.

This background focuses on statistical mixture models, which are central to the paper's method for classifying polymorphic HERV-K states from noisy genomic data. The rigorous course provides a deep, university-level introduction to mixture models within a broader machine learning context, ideal for readers seeking thorough understanding. The fast track offers a concise, intuition-driven introduction to mixture modeling techniques, suitable for readers who want a quick but solid grasp without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS480/680 Intro to Machine Learning - Spring 2019 - University of Waterloo](https://www.youtube.com/playlist?list=PLdAoL1zKcqTW-uzoSVBNEecKHsnug_M0k) — Pascal Poupart · 31 videos · 28.4h across 31 episodes

**Watch only this:** Watch episodes 11 (CS480/680 Lecture 6: EM and mixture models (Guojun Zhang)) and 13 (CS480/680 Lecture 7: Mixture of Gaussians), about 1 hour 50 minutes total — these cover the EM algorithm and Gaussian mixture models critical to the paper's method.

*Why it unblocks this paper:* This University of Waterloo course includes dedicated lectures on mixture models and the EM algorithm, providing rigorous statistical foundations essential to understanding the paper's mixture model clustering approach under low sequencing depth.

*If you want all of it:* 28.4 hours across 31 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Gaussian Mixture Models and EM](https://www.youtube.com/playlist?list=PLBS1zk819Sf8TrzbgaJBwywrEGbwXHS05) — Fernando Hadad · 7 videos · 2.0h across 7 episodes

**Watch only this:** Watch episodes 1 (Clustering (4): Gaussian Mixture Models and EM), 2 (Gaussian Mixture Model), and 5 (EM algorithm: how it works), about 50 minutes total — these provide a quick yet solid introduction to mixture models and EM.

*Why it unblocks this paper:* Fernando Hadad's playlist offers clear, concise explanations of Gaussian mixture models and the EM algorithm, directly relevant to the paper's statistical clustering technique, with a focus on intuition and practical understanding.

*If you want all of it:* 2.0 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand this paper, start with foundational knowledge on human endogenous retroviruses biology to grasp the biological context of HERV-K polymorphisms. Next, study mixture model statistical clustering to comprehend the statistical methods used for classifying provirus states from noisy sequencing data. Then, learn about population genomics and genetic variation to interpret the population-specific prevalence and allelic variation findings. Finally, focus on the core computational technique of k-mer based genomic sequence analysis and the authors' own talk or closest available presentation for direct insight into their novel computational framework and results.

### Human endogenous retroviruses biology *(prerequisite)*
Understanding the biology of human endogenous retroviruses (HERVs), especially HERV-K, is essential to appreciate their genomic integration, polymorphism, and potential roles in human disease. This foundational knowledge provides context for why detecting and analyzing HERV-K polymorphisms matters.

*How the paper uses it:* Provides the biological background necessary to understand the significance of polymorphic HERV-K proviruses studied in the paper.

▶ [Human endogenous retrovirus envelope proteins and extracellular vesicles by Benoit Barbeau](https://www.youtube.com/watch?v=6J45pTXtwkY) — WebEVTalk · 5 years ago

### Mixture model statistical clustering *(prerequisite)*
Mixture models are statistical tools used to classify data points into clusters when the data is noisy or incomplete. Learning about mixture model clustering will clarify how the authors statistically assigned presence, solo LTR, or absence states to HERV-K loci based on k-mer matching ratios from low-depth sequencing data.

*How the paper uses it:* The paper uses a mixture model to cluster k-mer matching ratios for accurate classification of HERV-K provirus states.

▶ [Lecture02 - Expression Analysis Clustering Classification ...](https://www.youtube.com/watch?v=Air6zIVf0M8) — Manolis Kellis · 1:22:11

### Population genomics and genetic variation *(prerequisite)*
Population genomics concepts are crucial to interpret the observed differences in HERV-K prevalence and allelic variation among global human populations. This knowledge helps understand how genetic diversity and population structure influence the distribution of polymorphic HERV-Ks.

*How the paper uses it:* Essential for understanding the population-specific prevalence and allelic variation of polymorphic HERV-K proviruses reported in the study.

▶ [Journeys in Human Genetics and Genomics Colloquium ...](https://www.youtube.com/watch?v=6saw6P6t0UQ) — National Human Genome Research Institute · 1:37:39

### k-mer based genomic sequence analysis
k-mer based analysis is the core computational technique used in the paper to detect and quantify polymorphic HERV-K proviruses from whole genome sequencing data. Understanding k-mer methods will clarify how the authors mined sequencing data efficiently despite low coverage.

*How the paper uses it:* Central computational method developed and applied in the paper to detect polymorphic HERV-K proviruses.

▶ [Rayan Chikhi | A Chalk Talk on Applications of K-mers | CGSI ...](https://www.youtube.com/watch?v=gt8X01uY_9Q) — Computational Genomics Summer Institute CGSI · 25:20

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the biological basics of human endogenous retroviruses (HERVs), which provide essential context for why HERV-K polymorphisms matter. Next, build intuition on population genomics and genetic variation to grasp how these polymorphisms differ across human groups. Then, study mixture model statistical clustering to understand the method used to classify HERV-K presence from noisy data. Finally, learn about k-mer based genomic sequence analysis, the core computational technique used in the paper to detect polymorphic HERV-K proviruses from sequencing data.

### Human endogenous retroviruses biology *(prerequisite)*
Human endogenous retroviruses (HERVs) are ancient viral sequences integrated into our genome, inherited across generations. Understanding their biology helps explain their polymorphic nature and potential roles in human health and disease.

*How the paper uses it:* The paper studies polymorphic HERV-K proviruses, a subtype of HERVs, and their distribution in human populations.

▶ [Human Endogenous Retroviruses](https://www.youtube.com/watch?v=26Ipvwyzl6Y) — Biology Unplugged · 2 years ago

### Population genomics and genetic variation *(prerequisite)*
Population genomics studies genetic differences within and between populations, revealing how variants like HERV-K insertions vary globally. This knowledge is key to interpreting population-specific prevalence and allelic variation reported in the paper.

*How the paper uses it:* The paper analyzes 1000 Genomes Project data to reveal population-specific patterns of HERV-K polymorphisms.

▶ [Introduction to Population Genetics](https://www.youtube.com/watch?v=pu4eLj7oPPA) — International Statistical Genetics Workshop · 46:38

### Mixture model statistical clustering *(prerequisite)*
Mixture models are statistical tools that identify subgroups within noisy data by clustering based on probability distributions. They help classify uncertain sequencing signals into categories like provirus presence or absence.

*How the paper uses it:* The authors use a mixture model to cluster k-mer matching ratios and classify HERV-K states despite low sequencing depth.

▶ [What are Gaussian Mixture Models? | Soft clustering | Unsupervised Machine Learning | Data Science](https://www.youtube.com/watch?v=C7jhwN6H9LU) — Six Sigma Pro SMART · 2 years ago

### k-mer based genomic sequence analysis
K-mers are short DNA subsequences used to efficiently analyze genomic data without full alignment. Counting and comparing k-mers enables detection of specific genomic elements like polymorphic HERV-K insertions from sequencing reads.

*How the paper uses it:* The core computational method in the paper mines k-mer matches from whole genome sequencing data to detect HERV-K proviruses.

▶ [Introducing k-mers: sequences of length k](https://www.youtube.com/watch?v=WMCzYjbq77s) — Professor Hendrix · 13:05

## Already in your library

- [Introduction to k-mers](https://www.youtube.com/watch?v=DyZvATM9Hr8) — also for: krepp: a k-mer-based maximum pseudo-likelihood method for estimating read distances and genome-wide phylogenetic placement (Siavash Mirarab)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth focused on the computational framework developed to detect polymorphic HERV-K proviruses from whole genome sequencing data. The beginner project reproduces a core visualization of population-specific HERV-K prevalence using public data and simple analysis. The intermediate project builds on the authors' released code to run and extend their k-mer based mixture model method on 1000 Genomes data, comparing prevalence metrics across populations. The advanced project addresses a key limitation by integrating simulated long-read sequencing data to improve classification of provirus versus solo LTR states, exploring the impact of higher-resolution data on allele discrimination.

### Beginner — Visualize Population Prevalence of Polymorphic HERV-Ks
*Effort: a weekend, ~8 hours*

You build a simple data analysis and visualization pipeline that reproduces a key figure from the paper showing the prevalence of selected polymorphic HERV-K proviruses across the five 1000 Genomes Project super-populations. Using publicly available summary prevalence data (or simulated data approximating it), you create bar plots and heatmaps to illustrate population differences.

**Why it shows you understood the paper:** This project demonstrates you understand the concept of polymorphic HERV-K prevalence variation across populations and can translate genomic prevalence data into meaningful visual summaries, a core result of the paper.

**Grounded in:** Identified 20 polymorphic HERV-K proviruses with prevalence ranging from 0.9% to 99.5% across populations; Observed significant differences in prevalence of individual HERV-K loci among African, East Asian, European, South Asian, and Admixed American super-populations.

**Tech stack:** Python 3.11, pandas, matplotlib, seaborn, Jupyter Notebook

**Data:** Use summary prevalence data from the paper's supplementary files or simulate prevalence percentages for 20 polymorphic HERV-K loci across the five 1000 Genomes super-populations.

**Build it:**

1. Obtain or simulate prevalence data for 20 polymorphic HERV-K loci across five populations.
2. Load the data into a pandas DataFrame and clean/format it for analysis.
3. Create bar plots showing prevalence per locus per population.
4. Generate heatmaps to visualize co-occurrence or prevalence patterns.
5. Write a README explaining the biological context and interpretation of the plots.

**Ships as:** A GitHub repo with a Jupyter notebook that loads prevalence data, generates visualizations replicating key population prevalence patterns, and a README explaining the results.

**Stretch goal:** Add interactive visualizations using Plotly or Dash to explore prevalence by locus and population.

### Intermediate — Run and Extend k-mer Mixture Model for HERV-K Detection
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' polymorphicHERV code to reproduce their k-mer based detection method on a subset of the 1000 Genomes Project data. You then extend the analysis by comparing prevalence estimates with a simple baseline method (e.g., presence/absence calls based on read mapping coverage) and report metrics such as population prevalence and burden distributions.

**Why it shows you understood the paper:** This project shows you can work with real genomic data and the authors' computational framework, understand the mixture model clustering approach, and critically evaluate its performance against a baseline, demonstrating comprehension of the core method.

**Grounded in:** Developed a computationally efficient k-mer based method to detect polymorphic HERV-K proviruses from low-depth whole genome sequencing data; Introduced a mixture model to statistically cluster k-mer matching ratios to classify provirus presence, solo LTR, or absence; Analyzed 1000 Genomes Project data to reveal population-specific prevalence and co-occurrence patterns.

**Tech stack:** Python 3.11, R (optional for stats), polymorphicHERV codebase, pandas, matplotlib

**Data:** Use the 1000 Genomes Project low-depth whole genome sequencing data subset as in the paper (publicly available), or simulated short-read data mapped to known HERV-K loci.

**Build it:**

1. Clone and set up the polymorphicHERV repository from https://github.com/lwl1112/polymorphicHERV.
2. Download or simulate a small subset of 1000 Genomes Project WGS data focusing on known polymorphic HERV-K loci.
3. Run the k-mer counting and mixture model clustering pipeline to classify HERV-K states.
4. Implement a simple baseline method (e.g., read coverage threshold) to call presence/absence.
5. Compare prevalence and burden metrics between methods across populations.
6. Document the process, results, and interpretation in a detailed README.

**Verified links from the paper:**

- <https://github.com/lwl1112/polymorphicHERV> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run the authors' method and baseline, analysis notebooks comparing results, and documentation showing understanding of the mixture model approach and population prevalence findings.

**Stretch goal:** Incorporate additional clustering methods (e.g., Gaussian Mixture Models with different parameters) to improve classification accuracy.

### Advanced — Integrate Long-Read Data Simulation to Improve HERV-K Allele Resolution
*Effort: a few weeks, ~40+ hours*

You develop an extension to the k-mer based mixture model framework by incorporating simulated long-read sequencing data to address the limitation of short-read mapping and low sequencing depth. You simulate long-read data covering polymorphic HERV-K loci with allelic variation, integrate it into the detection pipeline, and evaluate improvements in distinguishing provirus versus solo LTR states and allelic variants.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the computational challenges and biological implications of HERV-K polymorphism, and the ability to innovate on the method to enhance resolution using emerging sequencing technologies.

**Grounded in:** The method relies on mapping reads to reference HERV-K loci, which may miss novel insertions not closely related to reference sequences; Small unique k-mer sets for some loci limit resolution between allelic variation and solo LTR states; Future direction: Incorporate higher-depth sequencing data to refine classification of provirus, solo LTR, and allelic variants.

**Tech stack:** Python 3.11, polymorphicHERV codebase, SimLoRD or PBSIM (for long-read simulation), pandas, matplotlib

**Data:** Simulate long-read sequencing data (PacBio or Oxford Nanopore style) covering polymorphic HERV-K loci with known allelic variation; combine with short-read data from 1000 Genomes or simulated data.

**Build it:**

1. Set up the polymorphicHERV framework and understand its input/output formats.
2. Use a long-read simulator (e.g., SimLoRD or PBSIM) to generate synthetic long-read data for selected HERV-K loci with allelic variants.
3. Integrate simulated long-read k-mer profiles into the mixture model clustering pipeline.
4. Compare classification accuracy and resolution of provirus versus solo LTR states with and without long-read data.
5. Analyze how long-read data improves detection of population-specific allelic variation.
6. Document methodology, results, and implications in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/lwl1112/polymorphicHERV> — released by the paper's authors

**Ships as:** A GitHub repo with code and notebooks demonstrating integration of simulated long-read data into the HERV-K detection pipeline, improved classification results, and analysis of allelic variation resolution.

**Stretch goal:** Apply the extended pipeline to real long-read datasets from public repositories if available to validate simulation results.

_The 1000 Genomes Project whole genome sequencing data is large and may require substantial storage and compute resources; simulated data can be used to reduce resource needs but may limit biological realism._
