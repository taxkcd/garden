---
title: "419 · Learning a pairwise epigenomic and transcription factor binding association score across the human genome — Jason Ernst"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jason-ernst"
source_hash: "9bacdea69b0634e9e92ddbaca538bb6574c785276b09ddddb7e2e0fbd4c2d83a"
sequence: 419
generator: "outreach-garden: managed"
---

# 419 · Learning a pairwise epigenomic and transcription factor binding association score across the human genome

## At a glance

- **Professor:** Jason Ernst
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [Learning a pairwise epigenomic and transcription factor binding association score across the human genome](https://doi.org/10.1093/bioinformatics/btag024)
- **Authors:** Soo Bin Kwon, Jason Ernst
- **Year:** 2026

## Paper overview

This paper presents LEPAE, a computational method that uses neural networks to identify and score associations between pairs of genomic regions based on large-scale epigenomic and transcription factor binding data. LEPAE helps reveal biologically meaningful relationships between genomic loci that are not limited to physical interactions, improving understanding of genome regulation.

### Why it matters

**Research problem:** Identifying pairwise associations between genomic loci is challenging, especially beyond physical chromatin interactions detectable by assays like Hi-C. Existing correlation-based methods using epigenomic signals are limited in capturing diverse types of associations and may miss constitutive activity relationships.

**Why it matters:** Understanding pairwise relationships between genomic loci is crucial for interpreting genome regulation, gene expression, and the genetic basis of complex traits. Improved methods can reveal novel associations that inform biological function and disease mechanisms.

**Key contributions:**

- Development of LEPAE, a novel neural network-based method to score pairwise genomic associations from epigenomic and TF binding data.
- Application of LEPAE to over 3000 datasets from ENCODE and Roadmap Epigenomics projects, scoring millions of pairs of genomic windows at 1-kb and 10-kb resolutions.
- Demonstration that LEPAE scores capture biologically meaningful associations beyond simple feature similarity or genomic distance.
- Validation that LEPAE scores correlate with gene body boundaries, chromatin state annotations, topologically associating domains (TADs), and fine-mapped GWAS variants.
- Provision of LEPAE scores and software as a resource for the genomics community.

## About the professor

**Jason Ernst** — Department of Biological Chemistry, Univ. of California - Los Angeles.

Research interests: developing and applying computational methods to address problems in epigenomics, regulatory genomics, and non-coding genome interpretation

### Research links

- [Faculty/profile page](https://ernstlab.biolchem.ucla.edu/people/jason-ernst)
- [Identity evidence](http://www.biolchem.ucla.edu/labs/ernst)
- [Resolved homepage](https://ernstlab.biolchem.ucla.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Siamese neural networks
**The paper assumes:** deep learning architectures, neural network training on paired data, similarity learning with Siamese networks
**Already in this field?** Skip this entirely if you already understand neural network architectures specialized for paired input data and similarity scoring.

To understand the core method of the LEPAE paper, which uses a Siamese neural network architecture to score pairwise genomic associations, it is essential to grasp how Siamese networks function, including their architecture and training on paired inputs. The rigorous course option provides a deep, structured understanding of neural networks and their training, while the fast track offers a concise, intuition-focused introduction to neural networks that covers foundational concepts quickly. Choose the course for a thorough grounding or the fast track for a rapid but solid conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Neural Networks and Deep Learning (Course 1 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0) — DeepLearningAI · 43 videos · 5.7h across 43 episodes

**Watch only this:** Episodes 1-18 (Welcome through Explanation of Logistic Regression's Cost Function), about 2.1 hours — covers the basics of neural networks, supervised learning, and training methods necessary to understand Siamese networks.

*Why it unblocks this paper:* This DeepLearningAI course 'Neural Networks and Deep Learning' covers fundamental neural network concepts including supervised learning, gradient descent, and vectorization, which are essential to understanding the Siamese neural network architecture used in LEPAE.

*If you want all of it:* 5.7 hours across 43 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1-4 (But what is a neural network? through Backpropagation calculus), about 1.4 hours — these episodes explain neural network basics and training, sufficient for understanding the core principles behind Siamese networks.

*Why it unblocks this paper:* 3Blue1Brown's 'Neural networks' series provides a visually intuitive and conceptually clear explanation of neural networks and backpropagation, which helps quickly build intuition about how Siamese networks learn similarity from paired inputs.

*If you want all of it:* 3.6 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LEPAE method and its contributions, start by building foundational knowledge on Siamese neural networks, which form the core architecture of LEPAE. Next, gain insights into epigenomic data integration and chromatin state modeling to appreciate the biological context and data complexity LEPAE addresses. Finally, focus on the core concept of pairwise genomic association scoring, culminating with the authors' own talk or closely related expert presentations to grasp the method's design, validation, and implications.

### Siamese neural networks genomics *(prerequisite)*
Understanding Siamese neural networks is critical as LEPAE uses this architecture to model pairwise genomic associations. The selected video provides a rigorous introduction to Siamese networks, explaining their use in similarity learning and few-shot learning, which directly relates to LEPAE's approach of classifying pairs of genomic windows.

*How the paper uses it:* LEPAE employs a Siamese neural network to learn association scores between pairs of genomic loci from epigenomic and TF binding data.

▶ [Few-Shot Learning (2/3): Siamese Networks](https://www.youtube.com/watch?v=4S-XDefSjTM) — Shusen Wang · 23:41 · 5 years ago

### Epigenomic data integration *(prerequisite)*
Integrating diverse epigenomic and transcription factor binding datasets is foundational to LEPAE's input feature construction. The chosen talk from the Simons Institute and NHGRI provides advanced perspectives on epigenomic data integration and regulatory genomics, which underpin the biological signals LEPAE leverages.

*How the paper uses it:* LEPAE uses thousands of epigenomic and TF binding datasets from ENCODE and Roadmap Epigenomics projects as binary features for its neural network.

▶ [Deep Learning Frameworks for Regulatory Genomics and Epigenomics](https://www.youtube.com/watch?v=2vpKB3j-OY0) — Simons Institute for the Theory of Computing · 38:14 · 10 years ago

### Chromatin state modeling *(prerequisite)*
Chromatin state modeling provides essential biological context for interpreting LEPAE scores, as LEPAE captures associations between chromatin states and regulatory elements. The selected lecture by Jason Ernst, the paper's co-author, offers a deep dive into chromatin state annotation methods, directly relevant to understanding LEPAE's biological validation.

*How the paper uses it:* LEPAE scores correlate with chromatin state annotations, highlighting functionally related genomic loci.

▶ [Tutorial on Using ChromHMM Software and Existing Annotations](https://www.youtube.com/watch?v=R_lqQ1v0Br8) — Computing Technologies Research Lab Streaming · 1:03:07 · 10 years ago

### Pairwise genomic association scoring
This concept is central to the paper, focusing on scoring associations between genomic loci beyond physical chromatin contacts. While no direct paper talk is available, the selected seminar provides a rigorous statistical genetics perspective on genome-wide association models, complementing LEPAE's approach to pairwise scoring.

*How the paper uses it:* LEPAE develops a novel method to score pairwise genomic associations from epigenomic and TF binding data.

▶ [BSU Seminar: 'Genome-wide genetic models for association, heritability analyses and prediction'](https://www.youtube.com/watch?v=k79sXnE12RY) — MRC Biostatistics Unit, University of Cambridge · 1:11:44 · 3 years ago

### LEPAE authors talk *(the paper's own talk)*
The authors' own presentations provide the most direct and detailed insight into LEPAE's methodology, results, and biological implications. Although no exact talk on LEPAE was found, the closest relevant talk from the National Human Genome Research Institute on transcription factor expression and chromatin accessibility offers valuable context on related regulatory genomics topics.

*How the paper uses it:* Direct source for understanding the authors' presentation of their method and results.

▶ [Genome-wide association between transcription factor expression and chromatin accessibility...](https://www.youtube.com/watch?v=pKVk3ka5sEw) — National Human Genome Research Institute · 6:10 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the LEPAE paper, start by learning about epigenomic data integration to grasp how diverse genomic datasets are combined. Next, build intuition on Siamese neural networks, the core machine learning architecture used by LEPAE to model pairwise genomic associations. Then, explore chromatin state modeling to appreciate the biological context of genomic regulatory states. Finally, focus on the central concept of pairwise genomic association scoring to see how LEPAE quantifies relationships between genomic loci beyond physical contacts.

### Epigenomic data integration *(prerequisite)*
This section introduces how multiple types of epigenomic and transcription factor binding data from various cell types are combined to create comprehensive feature sets for genomic analysis. Understanding this integration is essential to appreciate the input data LEPAE uses for learning associations.

*How the paper uses it:* LEPAE uses thousands of epigenomic and TF binding datasets from ENCODE and Roadmap projects as binary feature vectors for genomic windows.

▶ [Introduction to epigenetics - Learn.OmicsLogic.com](https://www.youtube.com/watch?v=IAu44BkOaSs) — OmicsLogic · 12:50 · 7 years ago

### Siamese neural networks genomics *(prerequisite)*
Learn how Siamese neural networks work by comparing pairs of inputs to learn similarity or association scores, a technique well-suited for modeling relationships between genomic regions. This architecture enables LEPAE to classify pairs of genomic windows as associated or not based on their epigenomic features.

*How the paper uses it:* LEPAE employs a Siamese neural network to score pairwise genomic associations from epigenomic and TF binding data.

▶ [Few-Shot Learning (2/3): Siamese Networks](https://www.youtube.com/watch?v=4S-XDefSjTM) — Shusen Wang · 23:41 · 5 years ago

### Chromatin state modeling *(prerequisite)*
This section covers how chromatin states are inferred from epigenomic data to represent functional genomic regions like promoters, enhancers, and transcribed regions. Understanding chromatin states helps interpret the biological meaning behind LEPAE's association scores.

*How the paper uses it:* LEPAE scores correlate with chromatin state annotations and highlight functionally related loci such as active promoters and enhancers.

▶ [Tutorial on Using ChromHMM Software and Existing Annotations](https://www.youtube.com/watch?v=R_lqQ1v0Br8) — Computing Technologies Research Lab Streaming · 1:03:07 · 10 years ago

## Already in your library

- [18. Analysis of Chromatin Structure](https://www.youtube.com/watch?v=iKLvCuFD1MA) — also for: Comprehensive profiling of chromatin occupancy dynamics through the cell cycle (Alexander J. Hartemink)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the LEPAE method for scoring pairwise genomic associations from epigenomic and transcription factor binding data. The beginner project reproduces a simple LEPAE analysis on a small scale using existing data and tools familiar to you. The intermediate project involves running and extending the authors' LEPAE code on a subset of public epigenomic data, comparing performance to a baseline metric. The advanced project tackles a stated limitation by extending LEPAE to score inter-chromosomal associations, requiring new data handling and model adaptation.

### Beginner — Visualize LEPAE Scores for Gene Body vs Boundary Pairs
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads a provided subset of LEPAE scores for pairs of genomic windows within and across gene bodies, then visualizes the score distributions to reproduce the paper's result that pairs within gene bodies have higher LEPAE scores than pairs crossing gene boundaries. This involves simple data processing and plotting.

**Why it shows you understood the paper:** This project shows you understand how LEPAE scores relate to genomic features and can interpret the biological meaning of score distributions, a key validation in the paper.

**Grounded in:** Pairs of bases within the same gene body have significantly higher LEPAE scores than pairs crossing gene boundaries, stronger than Hi-C or Jaccard index comparisons.

**Tech stack:** Python 3.11, pandas, matplotlib, seaborn, Jupyter Notebook

**Data:** Use a small publicly available subset of LEPAE scores from the authors' GitHub repository https://github.com/ernstlab/LEPAE or simulate a small dataset of binary feature vectors and precomputed LEPAE-like scores for pairs of genomic windows with gene boundary annotations.

**Build it:**

1. Clone or download a small subset of LEPAE score data or simulate binary feature vectors and compute mock LEPAE scores.
2. Load gene body boundary annotations for the corresponding genomic windows.
3. Separate pairs into 'within gene body' and 'crossing gene boundary' groups.
4. Plot score distributions for both groups using boxplots or violin plots.
5. Interpret and comment on the difference in distributions in the README.

**Verified links from the paper:**

- <https://github.com/ernstlab/LEPAE> — released by the paper's authors

**Ships as:** A Jupyter notebook and README showing the visualization of LEPAE score distributions for gene body vs boundary pairs, with interpretation linking back to the paper's biological validation.

**Stretch goal:** Add comparison plots for Hi-C contact frequency or Jaccard index similarity for the same pairs to contrast with LEPAE scores.

### Intermediate — Run and Evaluate LEPAE on ENCODE Epigenomic Data
*Effort: 1-3 weekends*

You set up the LEPAE software from the authors' GitHub, run it on a smaller subset of ENCODE epigenomic and TF binding datasets to score pairwise genomic windows at 1-kb resolution, and compare LEPAE's predictive performance (AUROC) against a simple baseline such as the Jaccard index similarity. You report metrics and visualize results.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code and large-scale functional genomics data, reproducing the core method and key performance metric of the paper.

**Grounded in:** LEPAE achieves high predictive power (AUROC up to 0.92) in distinguishing pairs of genomic windows at fixed distances from random pairs, outperforming decision tree classifiers and Jaccard index similarity.

**Tech stack:** Python 3.11, PyTorch, pandas, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Use a publicly available subset of ENCODE epigenomic and TF binding datasets as input features, as referenced in the paper and accessible via ENCODE portal; the authors' LEPAE GitHub repository provides code to process these datasets.

**Build it:**

1. Clone the LEPAE repository from https://github.com/ernstlab/LEPAE and install dependencies.
2. Download or prepare a small subset of ENCODE epigenomic and TF binding data for a limited genomic region.
3. Run the LEPAE training pipeline on this subset to train the Siamese neural network.
4. Compute LEPAE scores for pairs of genomic windows at a fixed distance (e.g., 1 kb).
5. Calculate AUROC comparing LEPAE scores to random pairs and to a baseline Jaccard index similarity metric.
6. Visualize and report the performance metrics and score distributions.

**Verified links from the paper:**

- <https://github.com/ernstlab/LEPAE> — released by the paper's authors

**Ships as:** A repository with code, scripts, and a notebook showing LEPAE training and evaluation on a subset of ENCODE data, with performance comparison to a baseline metric and discussion.

**Stretch goal:** Extend the evaluation to multiple genomic distances or include decision tree baseline comparison.

### Advanced — Extend LEPAE to Score Inter-Chromosomal Genomic Associations
*Effort: a few weeks*

You develop an extension of the LEPAE method to score pairwise genomic associations between windows on different chromosomes, addressing a key limitation noted in the paper. This involves adapting the data pipeline to generate inter-chromosomal pairs, modifying the training scheme to handle these pairs, and evaluating the model's ability to distinguish positive from negative inter-chromosomal associations.

**Why it shows you understood the paper:** This project shows deep comprehension of LEPAE's architecture and training logic, and the ability to innovate beyond the original method by tackling a stated limitation, potentially opening new biological insights.

**Grounded in:** LEPAE only scores pairwise associations at fixed genomic distances within chromosomes and does not address interchromosomal associations.

**Tech stack:** Python 3.11, PyTorch, pandas, scikit-learn, Jupyter Notebook

**Data:** Use the same ENCODE epigenomic and TF binding datasets as in the intermediate project, but extend data processing to include inter-chromosomal pairs; simulate or select positive and negative inter-chromosomal pairs based on biological heuristics or random sampling.

**Build it:**

1. Review the LEPAE codebase to understand how intra-chromosomal pairs are generated and scored.
2. Modify the data preprocessing pipeline to generate inter-chromosomal pairs of genomic windows.
3. Define a strategy to label positive and negative inter-chromosomal pairs, possibly using chromatin contact data or random sampling.
4. Adapt the Siamese neural network training to incorporate inter-chromosomal pairs.
5. Train the extended LEPAE model and evaluate its predictive performance on inter-chromosomal pairs.
6. Analyze and visualize results, comparing to baseline similarity metrics.

**Verified links from the paper:**

- <https://github.com/ernstlab/LEPAE> — released by the paper's authors

**Ships as:** A forked LEPAE codebase with extensions for inter-chromosomal scoring, scripts for data preparation, training, evaluation notebooks, and a detailed README describing methods, challenges, and results.

**Stretch goal:** Incorporate additional data types such as RNA-seq or chromatin contact frequency to improve inter-chromosomal association predictions.
