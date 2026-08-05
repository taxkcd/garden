---
title: "163 · An integrated, scaled approach to resolve TSC2 variants of uncertain significance — Predrag Radivojac"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-predrag-radivojac"
source_hash: "6ffa41100b9fd4ebdfb42b147d725b21d82c36c42bd8a8a7abf2cf50b366a73b"
sequence: 163
generator: "outreach-garden: managed"
---

# 163 · An integrated, scaled approach to resolve TSC2 variants of uncertain significance

## At a glance

- **Professor:** Predrag Radivojac
- **Institution:** Northeastern University
- **Paper:** [An integrated, scaled approach to resolve TSC2 variants of uncertain significance](https://doi.org/10.1038/s41467-026-75442-6)
- **Authors:** Carina G. Biar, Ziyu R. Wang, Nathan D. Camp, Daniel L. Holmes, Melinda K. Wheelock, Sriram Pendyala, Abby V. McGee, Pankhuri Gupta, Abbye E. McEwen, Malvika Tejura, Marcy E. Richardson, Jamie D. Weyandt, Taylor Coleman, Alan F. Rubin, Nick Moore, Ross Stewart, Daniel Zeiberg, Allyssa J. Vandi, Samantha Dawson, Predrag Radivojac, Lea M. Starita, Gemma L. Carvill, Richard G. James, Douglas M. Fowler, Jeffrey D. Calhoun
- **Year:** 2026

## Paper overview

This study developed high-throughput assays to measure the effects of thousands of TSC2 gene variants on protein abundance and activity, enabling reclassification of many uncertain variants. This improves genetic diagnosis of tuberous sclerosis complex (TSC), a disorder caused by TSC2 mutations, and can guide clinical management and treatment.

### Why it matters

**Research problem:** Many missense variants in the TSC2 gene are classified as variants of uncertain significance (VUS), making genetic diagnosis of tuberous sclerosis complex challenging due to insufficient evidence to determine their pathogenicity or benignity.

**Why it matters:** Accurate classification of TSC2 variants is critical for confirming TSC diagnosis, enabling precision treatments such as mTOR inhibitors, informing clinical management, family planning, and participation in clinical trials.

**Key contributions:**

- Developed high-throughput VAMP-seq assay measuring steady-state abundance of 8,864 TSC2 missense variants.
- Developed two genome editing-based assays (SGE and cliPE) measuring mTORC1 activity via pS6 phosphorylation for 391 missense variants.
- Demonstrated strong correlation between variant effects on abundance and activity, with some variants affecting activity but not abundance.
- Calibrated functional data using OddsPath framework to assign evidence strength for variant classification.
- Created a decision tree combining abundance and activity data to guide ACMG/AMP variant classification.

## About the professor

**Predrag Radivojac** — Professor, Associate Dean for Research, Khoury College of Computer Sciences, Northeastern University.

Research interests: Computational biology, Machine learning

### Research links

- [Faculty/profile page](https://www.khoury.northeastern.edu/people/predrag-radivojac/)
- [Identity evidence](https://www.ccis.northeastern.edu/people/predrag-radivojac)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the integrated, scaled approach for resolving TSC2 variants of uncertain significance, start by building foundational knowledge on genome editing techniques and mTOR pathway signaling, which are critical for the functional assays used in the study. Next, explore the key assay measuring protein abundance (VAMP-seq) to grasp how variant effects on protein levels are quantified. Finally, focus on the core concept of multiplexed assays of variant effect (MAVEs) and the authors' own talk to appreciate the integrated methodology and its impact on variant classification.

### Genome editing based functional assays *(prerequisite)*
Understanding CRISPR-Cas9 genome editing technology is essential as it forms the basis for the SGE and cliPE assays used in this study to measure TSC2 variant effects on mTOR pathway activity. These assays rely on precise genome editing combined with functional readouts, so a solid grasp of genome editing principles and challenges is foundational.

*How the paper uses it:* The study uses genome editing-based assays (SGE and cliPE) to measure TSC2 activity via mTOR pathway signaling.

▶ [Genome Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8) — McGovern Institute · 4:13

### mTOR pathway signaling and TSC2 function *(prerequisite)*
A detailed understanding of the mTOR signaling pathway and TSC2's role within it is critical for interpreting how variants affect protein function and downstream signaling. This biological context helps explain why certain variants impact mTORC1 activity and how this relates to tuberous sclerosis complex pathology.

*How the paper uses it:* The functional assays measure mTOR pathway activity to assess TSC2 variant effects relevant to disease.

▶ [ITSCRC2021: Growth control by the TSC-mTOR pathway and ...](https://www.youtube.com/watch?v=D0U744fTjQM) — Tuberous Sclerosis Association TSA · 11:49

### Multiplexed assays of variant effect
Multiplexed assays of variant effect (MAVEs) are central to the paper's methodology, enabling simultaneous functional characterization of thousands of variants. Learning about MAVEs provides insight into the high-throughput experimental and computational strategies that underpin the integrated variant classification approach.

*How the paper uses it:* The study uses MAVEs including VAMP-seq, SGE, and cliPE to functionally characterize TSC2 variants at scale.

▶ [MSS 2024 Day 1 Talk 05 Jeffrey Calhoun](https://www.youtube.com/watch?v=BRmVPsm1K7Y) — Variant Effects · 18:26

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the biological and technical foundations needed to understand how the paper functionally characterizes TSC2 gene variants. It starts with the biological context of the mTOR pathway and TSC2's role, then explains genome editing techniques foundational to the assays used, followed by the specific protein abundance assay (VAMP-seq). Finally, it covers multiplexed assays of variant effect (MAVEs), the core method enabling high-throughput functional assessment of thousands of variants.

### mTOR pathway signaling and TSC2 function *(prerequisite)*
Learn the biological role of the mTOR signaling pathway and how TSC2 regulates cell growth and metabolism through this pathway. Understanding this provides the disease context and why measuring TSC2 activity is critical.

*How the paper uses it:* The paper measures TSC2 variant effects on mTOR pathway activity to assess pathogenicity.

▶ [mTOR Signaling Pathway: mTOR Complexes, Regulation and Downstream effects](https://www.youtube.com/watch?v=-2pXbSpDPQE) — JJ Medicine · 18:38 · 9 years ago

### Genome editing based functional assays *(prerequisite)*
Understand CRISPR-Cas9 genome editing technology, which enables precise modification of DNA to study gene function. This knowledge is essential to grasp how the paper's SGE and cliPE assays measure TSC2 activity in cells.

*How the paper uses it:* The paper uses genome editing-based assays (SGE and cliPE) to measure functional effects of TSC2 variants on mTOR activity.

▶ [Genome Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8) — McGovern Institute · 4:13

### Multiplexed assays of variant effect
Multiplexed assays of variant effect (MAVEs) enable simultaneous functional testing of thousands of genetic variants, providing large-scale data to interpret variant pathogenicity. This approach integrates multiple functional readouts for comprehensive variant classification.

*How the paper uses it:* The paper integrates VAMP-seq and genome editing assays as MAVEs to classify TSC2 variants under clinical guidelines.

▶ [Revolutionizing Variant Curation with MAVEs (multiplexed ...](https://www.youtube.com/watch?v=unDAF_wfNFk) — DNA Today · 34:57

### Paper authors talk *(the paper's own talk)*
Gain direct insight from experts on the challenges of classifying variants of uncertain significance and the integrated approach developed to resolve TSC2 variants. This contextualizes the study's impact on genetic diagnosis and clinical management.

*How the paper uses it:* The paper addresses the clinical challenge of TSC2 VUS classification and presents a scalable functional solution.

▶ [What is a Variant of Uncertain Significance (VUS)? | Dana-Farber Cancer Institute](https://www.youtube.com/watch?v=hogQTrqgPnE) — Dana-Farber Cancer Institute · 8 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "An integrated, scaled approach to resolve TSC2 variants of uncertain significance." The beginner project reproduces a key visualization of variant abundance effects using the VAMP-seq data. The intermediate project uses the authors' released code to analyze and classify TSC2 missense variants by integrating abundance and activity scores, reproducing the core variant classification method. The advanced project extends the paper's approach by developing a computational model to predict partial loss-of-function variants, addressing a stated limitation and future direction of the study.

### Beginner — Visualize TSC2 Variant Abundance from VAMP-seq Data
*Effort: a weekend, ~8 hours*

You build a data processing and visualization pipeline that reproduces the distribution and key statistics of TSC2 missense variant protein abundance scores measured by VAMP-seq. This includes plotting the abundance score distribution and highlighting the fraction of variants with reduced abundance.

**Why it shows you understood the paper:** This project shows you understand the core experimental assay (VAMP-seq) measuring protein abundance and how to interpret its quantitative output, a foundational contribution of the paper.

**Grounded in:** Developed high-throughput VAMP-seq assay measuring steady-state abundance of 8,864 TSC2 missense variants; 14.17% of variants showed reduced protein abundance.

**Tech stack:** Python 3.11, pandas, matplotlib, seaborn, Jupyter Notebook

**Data:** Use Supplementary Data 4 and 5 from the paper repository (link removed — unverified) which contain VAMP-seq abundance scores for TSC2 variants.

**Build it:**

1. Download the VAMP-seq abundance score data files from the authors' GitHub repository.
2. Load the data into a pandas DataFrame and clean/filter as needed.
3. Calculate summary statistics such as mean, median, and fraction of variants with reduced abundance.
4. Plot the distribution of abundance scores using histograms or density plots.
5. Highlight the subset of variants classified as reduced abundance (e.g., below a threshold).
6. Write a README explaining the assay, data source, and interpretation of the plots.

**Ships as:** A Jupyter Notebook and scripts that produce clear visualizations of TSC2 variant abundance distributions with explanatory text.

**Stretch goal:** Add interactive plots using Plotly or Dash to explore abundance scores by variant position or amino acid change.

### Intermediate — Reproduce TSC2 Variant Classification Using Integrated Functional Scores
*Effort: 1-3 weekends, ~20 hours*

You use the authors' released code and data to reproduce the integrated decision tree classification of TSC2 missense variants by combining VAMP-seq abundance and genome editing-based activity scores. You implement the OddsPath calibration framework and classify a subset of variants, comparing your results to the paper's reported putative reclassifications.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's core methodological advance: integrating multiplexed functional assays with statistical calibration to classify variants under ACMG/AMP guidelines.

**Grounded in:** Created a decision tree combining abundance and activity data to guide ACMG/AMP variant classification; putatively reclassified 212 of 276 TSC2 missense VUS in a clinical cohort.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Use the variant abundance and activity scores from Supplementary Data 4 and 5 and the code from (link removed — unverified) to reproduce classification.

**Build it:**

1. Clone and set up the authors' TSC2_analysis repository and review the data files.
2. Load and preprocess the abundance and activity score datasets.
3. Implement the decision tree logic as described in the paper to combine abundance and activity scores.
4. Implement the OddsPath calibration to assign evidence strength for pathogenicity or benignity.
5. Classify a subset of TSC2 missense variants and compare your classifications to those reported in the paper.
6. Visualize classification results and write a report summarizing your reproduction and any discrepancies.

**Ships as:** A reproducible analysis pipeline with code and notebook that classifies TSC2 variants using integrated functional data and documents the process.

**Stretch goal:** Add a simple baseline classifier using only abundance or only activity scores and compare performance to the integrated method.

### Advanced — Computational Model for Predicting Partial Loss-of-Function TSC2 Variants
*Effort: a few weeks, ~40+ hours*

You develop a machine learning model that predicts partial loss-of-function effects of TSC2 missense variants, addressing a limitation noted in the paper that current assays primarily detect complete loss-of-function. You integrate functional assay data with variant features (e.g., sequence conservation, structural context) to train and evaluate your model.

**Why it shows you understood the paper:** This project extends the paper's approach by tackling a known limitation and applying computational biology and machine learning skills to improve variant effect prediction, aligning with the professor's research interests.

**Grounded in:** Assays primarily detect complete loss-of-function variants; partial loss-of-function or dominant negative effects require further study; future direction includes developing assays calibrated for partial loss-of-function.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, biopython, matplotlib, Jupyter Notebook

**Data:** Use the authors' functional assay data from https://github.com/FowlerLab/TSC2_analysis and public variant annotation databases (e.g., ClinVar) for features; simulate partial loss-of-function labels based on intermediate assay scores or literature.

**Build it:**

1. Gather and preprocess TSC2 variant functional data and annotate variants with sequence and structural features.
2. Define a labeling scheme to identify partial loss-of-function variants using intermediate activity or abundance scores.
3. Engineer features relevant to variant impact prediction, such as evolutionary conservation and proximity to functional domains.
4. Train and evaluate machine learning models (e.g., random forest, gradient boosting) to predict partial loss-of-function status.
5. Validate model predictions against known variant classifications and analyze feature importance.
6. Document methodology, results, and limitations in a comprehensive README.

**Ships as:** A machine learning pipeline and report demonstrating improved prediction of partial loss-of-function TSC2 variants with code and data processing scripts.

**Stretch goal:** Incorporate structural modeling or molecular dynamics data to enhance feature representation and prediction accuracy.
