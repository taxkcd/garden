---
title: "297 · A benchmarked, high-efficiency prime editing platform for multiplexed dropout screening — Mona Singh"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mona-singh"
source_hash: "a0291d5ca32adb89cf51817f0acfb8ada7f0b1ec529e735e16742a6370d86df5"
sequence: 297
generator: "outreach-garden: managed"
---

# 297 · A benchmarked, high-efficiency prime editing platform for multiplexed dropout screening

## At a glance

- **Professor:** Mona Singh
- **Institution:** Princeton University
- **Paper:** [A benchmarked, high-efficiency prime editing platform for multiplexed dropout screening](https://doi.org/10.1038/s41592-024-02502-4)
- **Authors:** Ann Cirincione, Danny Simpson, Weihao Yan, Ryan McNulty, Purnima Ravisankar, Sabrina C. Solley, Jun Yan, Fabian Lim, Emma K. Farley, Mona Singh, Britt Adamson
- **Year:** 2024

## Paper overview

This study presents a highly efficient prime editing platform that enables precise and multiplexed genome editing to study the functional effects of genetic variants. By optimizing prime editing components and using mismatch repair-deficient cells, the authors achieved high editing efficiencies across thousands of targets. They demonstrated the platform's ability to screen for loss-of-function mutations in essential genes and uncovered additional functional variants affecting splicing. This approach allows for scalable, accurate functional genomics studies without the need for complex endogenous sequencing.

### Why it matters

**Research problem:** Existing genome editing technologies for high-throughput functional characterization of genetic variants suffer from limitations such as low editing efficiency, off-target effects, limited mutation scope, or inability to retain endogenous genomic context, complicating multiplexed screening of variants.

**Why it matters:** Millions of human genetic variants have been cataloged, many linked to diseases, but understanding their functional consequences remains challenging. Efficient and precise multiplexed editing platforms are crucial for systematically characterizing variant effects on molecular and cellular phenotypes, which can inform disease mechanisms and therapeutic development.

**Key contributions:**

- Established a high-efficiency prime editing platform with stable PEmax and epegRNA expression in MMR-deficient cells achieving up to ~95% precise editing.
- Designed and screened a large (~240,000 epegRNAs) library (StopPR) targeting nonsense and synonymous mutations across 1,231 essential genes.
- Demonstrated reproducible, specific negative growth phenotypes from nonsense mutations with low false positives from synonymous controls.
- Identified design features influencing editing efficiency and phenotype induction, such as edit position relative to Cas9 nick and RTT length.
- Discovered functional splice site variants among synonymous edits, highlighting the platform's utility for unbiased variant discovery.

## About the professor

**Mona Singh** — Professor of Computer Science, Department of Computer Science, Princeton University.

Research interests: computational molecular biology, machine learning, algorithms, protein interactions, protein functions, biological networks

### Research links

- [Faculty/profile page](https://www.cs.princeton.edu/~mona)
- [Professor website](https://www.cs.princeton.edu/~mona/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Genome editing and CRISPR technology
**The paper assumes:** molecular biology of genome editing, CRISPR-Cas9 mechanisms, DNA repair pathways, and guide RNA design
**Already in this field?** Skip this entirely if you already understand CRISPR-based genome editing methods and DNA repair mechanisms relevant to editing outcomes.

This background focuses on genome editing and CRISPR technology, essential for understanding the prime editing platform and multiplexed dropout screening described in the paper. The rigorous course offers a deep, structured university-level foundation on genome editing mechanisms, while the fast track provides a concise, clear introduction to CRISPR/Cas9 genome editing for quicker comprehension. Choose the lane that fits your available time and depth needs; both prepare you to grasp the experimental design, guide RNA strategies, and DNA repair concepts critical to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Genome Editing and Engineering](https://www.youtube.com/playlist?list=PLwdnzlV3ogoUBJbSmvuye6knzAqXKT9k6) — NPTEL IIT Guwahati · 51 videos · 32.0h across 51 episodes

**Watch only this:** Lectures 1-10 (Introduction to genome organization, genetic engineering basics, DNA breakage and repair, homologous and non-homologous recombination, site-specific recombination, and targeted genetic modification) totaling about 6 hours 10 minutes — this subset covers foundational mechanisms and editing strategies essential for the paper.

*Why it unblocks this paper:* This NPTEL IIT Guwahati series is a comprehensive university-level course on genome editing and engineering, covering DNA repair, recombination, and CRISPR/Cas9 in detail, directly relevant to understanding prime editing and multiplexed screening.

*If you want all of it:* 32.0 hours across 51 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CRISPR/Cas9 Genome Editing](https://www.youtube.com/playlist?list=PL4_fJegcjcJ_doqefkW1hoIee_sgivMr2) — OriGene Technologies Inc. · 11 videos · 5.7h across 11 episodes

**Watch only this:** Episodes 1-4 (CRISPR Cas9 Explained, Gene Knockout using CRISPR, CRISPR gene knockout webinar to get high biallelic knockout, Webinar: Gene Knockout with CRISPR) totaling about 2 hours — these cover the core CRISPR concepts and knockout approaches foundational to understanding prime editing.

*Why it unblocks this paper:* This OriGene Technologies Inc. playlist offers clear, concise explainers on CRISPR/Cas9 genome editing, including knockout strategies and molecular mechanisms, providing a quick yet solid conceptual grasp of CRISPR relevant to prime editing.

*If you want all of it:* 5.7 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on a high-efficiency prime editing platform for multiplexed dropout screening, start with foundational knowledge of the CRISPR-Cas9 mechanism and the mismatch repair pathway, as these underpin the genome editing technology used. Next, explore functional genomics screening methods to appreciate the biological context and applications of multiplexed dropout screening. Then, study epegRNA design principles critical for optimizing editing efficiency and specificity. Finally, focus on the core concept of prime editing genome engineering, including the authors' own talks if available, to grasp the specific advances and methodologies introduced in this work.

### CRISPR Cas9 mechanism *(prerequisite)*
CRISPR-Cas9 is the fundamental genome editing technology that enables targeted DNA cleavage and is the basis for prime editing. Understanding its molecular mechanism, specificity, and applications is essential for grasping how prime editing builds upon and refines this system.

*How the paper uses it:* Prime editing relies on a Cas9 nickase fused to a reverse transcriptase, so understanding Cas9's DNA targeting and cleavage is foundational.

▶ [Professor Jennifer Doudna - CRISPR-Cas9: Genome Editing ...](https://www.youtube.com/watch?v=avz4Ca-nnLo) — CPM Oxford · 1:00:43

### Mismatch repair pathway *(prerequisite)*
The mismatch repair (MMR) pathway corrects DNA replication errors and influences genome editing outcomes. The paper uses MMR-deficient cells to enhance prime editing efficiency, making knowledge of this pathway critical to understanding the platform's optimization.

*How the paper uses it:* The platform's high editing efficiency depends on using MLH1 knockout (MMR-deficient) cells to reduce repair of prime editing intermediates.

▶ [Mismatch repair](https://www.youtube.com/watch?v=41AJ1CFSqKA) — Shomu's Biology · 17:40

### Functional genomics screening *(prerequisite)*
Functional genomics screening methods enable systematic assessment of gene function and variant effects at scale. Understanding these approaches provides context for the multiplexed dropout screening strategy used in the paper to identify functional consequences of genetic variants.

*How the paper uses it:* The paper applies multiplexed dropout screening to assess phenotypic effects of prime-edited variants in essential genes.

▶ [Tools and methods for CRISPR-Cas9 screening for functional ...](https://www.youtube.com/watch?v=ibZcONHMsRA) — Labroots · 57:15

### epegRNA design principles *(prerequisite)*
Engineered prime editing guide RNAs (epegRNAs) are critical for directing precise edits with high efficiency. Learning the design principles and factors influencing epegRNA activity is key to understanding how the authors optimized their large-scale editing libraries.

*How the paper uses it:* The study designs and benchmarks large epegRNA libraries, analyzing design features that affect editing efficiency and phenotype induction.

▶ [Designing and Executing Prime Editing Experiments in ...](https://www.youtube.com/watch?v=0Z_ztvkvKUA) — Bio-protocol Webinars · 1:11:12

### Prime editing genome engineering
Prime editing is the core genome engineering technology enabling precise, multiplexed edits without double-strand breaks. Studying detailed talks on prime editing provides insight into the molecular mechanisms, advantages, and challenges that the paper addresses through platform optimization.

*How the paper uses it:* The paper develops a high-efficiency prime editing platform and applies it for multiplexed functional genomics screening.

▶ [Broad-MIT Seminar Series in Chemical Biology: David Liu ...](https://www.youtube.com/watch?v=6tHs6_l2hSY) — Broad Institute · 1:09:47

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamental CRISPR-Cas9 genome editing mechanism, which underlies prime editing. Next, grasp the mismatch repair pathway, as its deficiency is key to the platform's high editing efficiency. Then, explore functional genomics screening to appreciate the context of multiplexed dropout screening used in the study. After that, study epegRNA design principles critical for optimizing editing efficiency and specificity. Finally, focus on prime editing genome engineering, the core method enabling precise, multiplexed genome edits in this paper.

### CRISPR Cas9 mechanism *(prerequisite)*
CRISPR-Cas9 is a revolutionary genome editing tool that uses a guide RNA to direct the Cas9 enzyme to a specific DNA sequence, where it creates a double-strand break. This break can then be repaired by the cell, allowing targeted edits. Understanding this mechanism is essential as prime editing builds upon it.

*How the paper uses it:* Prime editing in this paper is based on a Cas9 nickase fused to a reverse transcriptase, so understanding Cas9 targeting and cleavage is foundational.

▶ [But what is CRISPR-Cas9? An animated introduction to Gene ...](https://www.youtube.com/watch?v=ANehpGhbuF4) — Powerhouse of the Cell · 10:02

### Mismatch repair pathway *(prerequisite)*
The mismatch repair (MMR) pathway is a cellular system that corrects DNA replication errors by recognizing and repairing mismatched bases. Deficiency in MMR increases editing efficiency by reducing correction of intended edits, which is why the paper uses MMR-deficient cells to boost prime editing outcomes.

*How the paper uses it:* The authors use MLH1 knockout (MMR-deficient) cells to achieve high prime editing efficiency.

▶ [Mismatch repair](https://www.youtube.com/watch?v=41AJ1CFSqKA) — Shomu's Biology · 17:40

### Functional genomics screening *(prerequisite)*
Functional genomics screening involves systematically perturbing genes or variants to observe their effects on cellular phenotypes, often using high-throughput sequencing to track changes. This approach helps identify gene functions and variant impacts at scale.

*How the paper uses it:* The paper applies multiplexed dropout screening to assess the functional effects of thousands of genetic variants introduced by prime editing.

▶ [Functional Genomics Screening Tips and Tricks](https://www.youtube.com/watch?v=8-485bhd4eQ) — Merck Life Science · 4 years ago

### epegRNA design principles *(prerequisite)*
Engineered prime editing guide RNAs (epegRNAs) are specially designed to improve prime editing efficiency and specificity by optimizing features like the reverse transcriptase template and primer binding site. Proper design is critical for successful multiplexed editing.

*How the paper uses it:* The study designs large-scale epegRNA libraries and identifies design features influencing editing efficiency and phenotype induction.

▶ [Prime Editing Guide RNA (pegRNA) Design: Principles and Strategies](https://www.youtube.com/watch?v=xjKEyvuaBeE) — TechnoBotany by Zahra · 7:08 · 1 year ago

### Prime editing genome engineering
Prime editing is a precise genome editing technique that uses a fusion of a Cas9 nickase and reverse transcriptase directed by a pegRNA to install targeted edits without double-strand breaks. It enables versatile and efficient editing of substitutions, insertions, and deletions.

*How the paper uses it:* This paper develops a high-efficiency prime editing platform for multiplexed functional genomics screening using optimized PEmax and epegRNAs.

▶ [Prime editing (pegRNA + RT + nCas9)](https://www.youtube.com/watch?v=huDgW0wCi9c) — theCrux · 9:45

## Already in your library

- [Genome Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8) — also for: An integrated, scaled approach to resolve TSC2 variants of uncertain significance (Predrag Radivojac)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's development and application of a high-efficiency prime editing platform for multiplexed functional genomics screening. The beginner project reproduces a basic analysis of editing efficiency and phenotype specificity using provided data and scripts. The intermediate project involves running and extending the authors' StopPR screen processing pipeline to analyze editing efficiency and phenotype induction on a subset of essential genes, introducing you to prime editing data processing and interpretation. The advanced project tackles a future direction by integrating chromatin context predictions to optimize epegRNA design, applying machine learning to improve editing efficiency predictions beyond the original study, which aligns with the professor's computational biology interests.

### Beginner — Analyze prime editing efficiency and phenotype specificity from StopPR screen summary data
*Effort: a weekend, ~8 hours*

You build a data analysis and visualization pipeline that reproduces key metrics from the StopPR screen, such as precise editing rates over time and the specificity of nonsense versus synonymous mutation phenotypes. Using summary data and provided processing scripts, you generate plots of editing efficiency progression and phenotype dropout rates.

**Why it shows you understood the paper:** This project shows you understand the core experimental design and key results of the paper, including how prime editing efficiency is measured and how phenotype specificity is assessed using synonymous controls.

**Grounded in:** Key result: PEmaxKO cells showed 68.9% to 81.1% precise editing at tested loci by day 7, reaching ~95% by day 28 with epegRNAs; Synonymous control epegRNAs showed very low activity (2.4% with negative phenotype), indicating high specificity of observed phenotypes.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib, seaborn

**Data:** Use summary data from the StopPR screen available in the paper's GitHub repository https://github.com/anncir1/StablePE and https://github.com/simpsondl/TSpeg, focusing on processed editing efficiency and phenotype Z-scores.

**Build it:**

1. Clone the StablePE and TSpeg GitHub repositories and review the provided data processing scripts.
2. Extract or download summary editing efficiency and phenotype data for a subset of essential genes from the StopPR screen.
3. Write Python scripts or Jupyter notebooks to parse the data and calculate editing efficiencies at day 7 and day 28.
4. Generate plots showing editing efficiency progression over time and compare nonsense versus synonymous mutation phenotype dropout rates.
5. Document your analysis in a README explaining the biological meaning of the metrics and how they relate to the paper's claims.

**Verified links from the paper:**

- <https://github.com/anncir1/StablePE> — released by the paper's authors
- <https://github.com/simpsondl/TSpeg> — released by the paper's authors

**Ships as:** A GitHub repository containing Python notebooks or scripts that reproduce key StopPR screen metrics with clear visualizations and explanations.

**Stretch goal:** Add analysis of how edit position relative to Cas9 nick or RTT length correlates with editing efficiency using the available data.

### Intermediate — Run and extend the StopPR prime editing screen data processing pipeline
*Effort: 1-3 weekends*

You set up and run the authors' StopPR screen processing pipeline on a subset of the epegRNA library targeting essential genes, reproducing editing efficiency and phenotype induction metrics. You then extend the analysis by comparing phenotype induction rates between early and late gene regions or PAM-disrupting edits versus others, as reported in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code and data to reproduce core screening results and to apply statistical analysis to dissect design features influencing editing efficiency and phenotype induction.

**Grounded in:** Key contributions: Designed and screened a large (~240,000 epegRNAs) library (StopPR) targeting nonsense and synonymous mutations across 1,231 essential genes; Phenotype induction was enriched for edits disrupting PAM sequences (+5–6 positions) and edits targeting early gene regions.

**Tech stack:** Python 3.11, Snakemake or Make, pandas, matplotlib, scipy, Git

**Data:** Use the StopPR epegRNA library data and sequencing reads deposited under SRA BioProject accession PRJNA1159206, and processing scripts from https://github.com/anncir1/StablePE and https://github.com/simpsondl/TSpeg.

**Build it:**

1. Download a manageable subset of sequencing data from PRJNA1159206 focusing on a few essential genes.
2. Clone and set up the StablePE and TSpeg repositories, installing dependencies and configuring the environment.
3. Run the provided data processing pipeline to quantify editing efficiencies and phenotype dropout scores for the subset.
4. Perform statistical analysis comparing phenotype induction rates for edits disrupting PAM sequences (+5–6 positions) versus others.
5. Analyze phenotype induction differences between edits targeting early versus late gene regions.
6. Document your pipeline setup, analysis methods, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/anncir1/StablePE> — released by the paper's authors
- <https://github.com/simpsondl/TSpeg> — released by the paper's authors

**Ships as:** A GitHub repository with scripts and documentation that reproduce and extend StopPR screen analyses on a subset of data, including statistical comparisons of design features affecting editing outcomes.

**Stretch goal:** Incorporate chromatin context scores from ePRIDICT (if available) to correlate with editing efficiency and phenotype induction in your subset.

### Advanced — Develop a machine learning model to predict prime editing efficiency incorporating chromatin context
*Effort: a few weeks*

You develop and train a machine learning model that predicts prime editing efficiency of epegRNAs by integrating sequence features, edit position, RTT length, and chromatin context scores (e.g., from ePRIDICT). You apply this model to optimize epegRNA design for diverse genomic loci, addressing the paper's limitation of variable editing efficiency and future direction of refining design algorithms.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's findings on factors influencing editing efficiency and phenotype induction, and applies computational methods aligned with the professor's expertise to improve prime editing library design beyond the original study.

**Grounded in:** Limitations and future directions: Chromatin context and endogenous locus features influence editing efficiency; refine epegRNA design algorithms incorporating chromatin and genomic context to enhance editing precision and efficiency.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use processed editing efficiency data and chromatin context scores from the StopPR screen (from https://github.com/anncir1/StablePE and https://github.com/simpsondl/TSpeg) and public chromatin accessibility datasets as proxies if needed.

**Build it:**

1. Collect and preprocess a dataset of epegRNAs with measured editing efficiencies and associated features including edit position, RTT length, and chromatin context scores.
2. Engineer feature vectors combining sequence-based features and chromatin context predictions (e.g., from ePRIDICT or public chromatin data).
3. Train and validate machine learning regression models (e.g., random forest, gradient boosting) to predict editing efficiency.
4. Evaluate model performance using cross-validation and compare to baseline models using sequence features alone.
5. Use the model to propose optimized epegRNA designs for a set of target loci and simulate expected editing efficiencies.
6. Document your modeling approach, results, and implications for prime editing design in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/anncir1/StablePE> — released by the paper's authors
- <https://github.com/simpsondl/TSpeg> — released by the paper's authors

**Ships as:** A GitHub repository containing data preprocessing scripts, machine learning model code, evaluation notebooks, and a report demonstrating improved prediction of prime editing efficiency incorporating chromatin context.

**Stretch goal:** Extend the model to predict phenotype induction likelihood and integrate it into a user-friendly epegRNA design tool.
