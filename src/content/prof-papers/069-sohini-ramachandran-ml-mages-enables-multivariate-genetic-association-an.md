---
title: "069 · ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage — Sohini Ramachandran"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sohini-ramachandran"
source_hash: "f22d8c5e9bd130aed6ef28adf5b490e83547e1b9ee7f2b119f0defc6da07f265"
sequence: 69
generator: "outreach-garden: managed"
---

# 069 · ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage

## At a glance

- **Professor:** Sohini Ramachandran
- **Institution:** Brown University
- **Paper:** [ML-MAGES enables multivariate genetic association analyses with genes and effect size shrinkage](https://brown.edu/Research/Ramachandran_Lab/files/publications/Liu%20et%20al.%20-%202025%20-%20Genome%20Research.pdf)
- **Authors:** Xiran Liu, Lorin Crawford, Sohini Ramachandran
- **Year:** 2025

## Paper overview

This paper introduces ML-MAGES, a machine learning method that improves the analysis of genetic variants associated with multiple traits. It uses neural networks to correct inflated effect sizes caused by genetic correlations and clusters variants based on their association patterns across traits. The method is computationally efficient and better distinguishes true genetic associations, helping to identify genes influencing complex traits and diseases.

### Why it matters

**Research problem:** Genome-wide association (GWA) studies face challenges in accurately estimating genetic variant effect sizes due to inflation caused by linkage disequilibrium (LD) and in analyzing multiple traits simultaneously to detect shared and trait-specific genetic associations.

**Why it matters:** Accurate effect size estimation and multitrait analysis are critical for understanding the genetic architecture of complex traits, identifying causal variants, and informing precision medicine and drug discovery. Existing methods struggle with computational efficiency, controlling inflation, and capturing complex multitrait association patterns.

**Key contributions:**

- Development of a neural network-based effect size shrinkage method that outperforms regularized regression and fine-mapping in accuracy and computational efficiency.
- Introduction of an infinite mixture model for flexible, data-driven clustering of multitrait genetic associations, automatically inferring the number of clusters.
- Integration of SNP-level shrinkage and clustering results into gene-level summaries that reveal trait-specific and shared association patterns.
- Demonstration of ML-MAGES on simulated data and real UK Biobank data for both quantitative and binary traits, identifying biologically relevant genes and shared genetic architectures.

## About the professor

**Sohini Ramachandran** — Brown University.

Research interests: Determining the causes and consequences of human genetic variation, using population genetics, statistics, and evolutionary theory

### Research links

- [Faculty/profile page](https://www.brown.edu/Research/Ramachandran_Lab)
- [Resolved homepage](https://brown.edu/Research/Ramachandran_Lab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian mixture models
**The paper assumes:** Bayesian mixture models, variational inference, and nonparametric Bayesian statistics
**Already in this field?** Skip this entirely if you already understand Bayesian mixture modeling and variational inference methods.

This background covers Bayesian mixture models, essential for understanding the infinite mixture model and variational inference used in ML-MAGES to cluster multitrait genetic associations. The rigorous course option offers a deep, university-level treatment of Bayesian and nonparametric models, ideal for thorough comprehension. The fast track provides a concise, intuition-focused introduction to Bayesian mixture models and related concepts, suitable for quickly grasping the core ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Bayesian and Nonparametric Models (POLS 506)](https://www.youtube.com/playlist?list=PLgIPpm6tJZoTykIcy7nuOeO56AaoCljQo) — cjg2121 · 11 videos · 6.8h across the first 6 episodes

**Watch only this:** Episodes 4 (Practical MCMC for Estimating Models), 5 (Simple Bayesian Models), and 6 (Basic Monte Carlo Procedures and Sampling), about 3.4 hours total — these cover Bayesian inference, MCMC, and sampling techniques foundational for understanding Bayesian mixture models.

*Why it unblocks this paper:* This university lecture series by cjg2121 covers Bayesian and nonparametric statistics, including mixture models and practical MCMC methods, directly relevant to the paper's clustering approach using infinite mixture models and variational inference.

*If you want all of it:* All 11 episodes, approximately 6.8 hours across the first 6 episodes and about 12 hours total for the full playlist.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [bayesian](https://www.youtube.com/playlist?list=PLE1sgbR0H7PK9-0vRKKZL-QjWo1Ibknx9) — Guillermo Kopp · 13 videos · 4.8h across 13 episodes

**Watch only this:** Episodes 1 (Dirichlet Process Mixture Models and Gibbs Sampling), 10 (EM algorithm: how it works), and 11 (Clustering (4): Gaussian Mixture Models and EM), about 1.1 hours total — these specifically explain mixture models and inference algorithms used in the paper.

*Why it unblocks this paper:* This concise playlist by Guillermo Kopp includes focused videos on Dirichlet Process Mixture Models, Bayesian inference, and the EM algorithm, providing an accessible introduction to Bayesian mixture models and clustering relevant to the paper's methods.

*If you want all of it:* All 13 episodes, approximately 4.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ML-MAGES paper, start with foundational concepts in genome-wide association studies (GWAS) and linkage disequilibrium (LD) to grasp the genetic and statistical background. Then, study multivariate clustering with infinite mixture models to comprehend the clustering approach used. Finally, focus on the core concept of ML-MAGES itself by watching the authors' own talks, which provide direct insights into their novel method and results.

### Genome-wide association studies statistics *(prerequisite)*
This section covers the fundamental statistical framework for identifying genetic variants linked to traits, which is essential to understand the context and challenges ML-MAGES addresses. The chosen video is a comprehensive university lecture from MIT OpenCourseWare that provides an advanced and rigorous treatment of GWAS.

*How the paper uses it:* ML-MAGES builds upon GWAS summary statistics and aims to improve effect size estimation and multitrait analysis in this framework.

▶ [20. Human Genetics, SNPs, and Genome Wide Associate Studies](https://www.youtube.com/watch?v=KYQ2dPW5nEU) — MIT OpenCourseWare · 1:17:57 · 11 years ago

### Linkage disequilibrium in genetics *(prerequisite)*
Understanding linkage disequilibrium is critical because LD causes inflation in genetic effect size estimates, a key problem ML-MAGES seeks to correct. The selected video is a detailed lecture from the National Human Genome Research Institute, providing an advanced and research-focused explanation of LD.

*How the paper uses it:* ML-MAGES incorporates LD information to shrink inflated effect sizes in GWAS data.

▶ [Introduction to Population Genetics - Lynn Jorde (2012)](https://www.youtube.com/watch?v=Ng6vKcGkzZs) — National Human Genome Research Institute · 14 years ago

### Multivariate clustering infinite mixture models *(prerequisite)*
This concept explains the statistical method used by ML-MAGES to flexibly cluster genetic variants based on multitrait association patterns. The chosen video is a university lecture by Alexander Ihler that rigorously covers Gaussian mixture models and the EM algorithm, foundational to understanding infinite mixture models.

*How the paper uses it:* ML-MAGES uses an infinite mixture model with variational inference to cluster variants by their multitrait association patterns.

▶ [Clustering (4): Gaussian Mixture Models and EM](https://www.youtube.com/watch?v=qMTuMa86NzU) — Alexander Ihler · 17:11 · 11 years ago

### ML-MAGES authors talk *(the paper's own talk)*
Direct talks by the paper's authors provide the most precise and detailed explanation of the ML-MAGES method, its innovations, and results. These talks offer insights into the neural network shrinkage approach, clustering model, and gene-level analyses, directly from the researchers.

*How the paper uses it:* These talks present the ML-MAGES method and findings in the authors' own words, offering the clearest understanding of their contributions.

▶ [https://www.youtube.com › watch?v=9Glu_XRgW4k](https://www.youtube.com/watch?v=9Glu_XRgW4k) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ML-MAGES paper, start by learning the basics of genome-wide association studies (GWAS) and linkage disequilibrium (LD), which are foundational genetic concepts underlying the problem ML-MAGES addresses. Next, grasp the idea of multivariate clustering with infinite mixture models to appreciate how ML-MAGES clusters genetic variants by multitrait patterns. Finally, study neural network-based effect size shrinkage to understand the core machine learning technique ML-MAGES uses to correct inflated genetic effect sizes.

### Genome-wide association studies statistics *(prerequisite)*
GWAS are studies that scan the genome to find genetic variants associated with traits or diseases. Understanding GWAS statistics helps you grasp how genetic associations are detected and why effect size estimation matters.

*How the paper uses it:* ML-MAGES improves effect size estimation and multitrait analysis in GWAS data.

▶ [Genome-Wide Association Study - An Explanation for Beginners](https://www.youtube.com/watch?v=sOP8WacfBM8) — Nuno Carvalho · 7:35 · 5 years ago

### Linkage disequilibrium in genetics *(prerequisite)*
Linkage disequilibrium (LD) describes the non-random association of genetic variants nearby on a chromosome, causing correlation between variants. LD can inflate effect size estimates in GWAS, which ML-MAGES aims to correct.

*How the paper uses it:* ML-MAGES uses LD information to shrink inflated effect sizes caused by genetic correlations.

▶ [What is Linkage Disequilibrium? | Genomics](https://www.youtube.com/watch?v=C3MYoasLSHQ) — Genomics Boot Camp · 12:53 · 5 years ago

### Multivariate clustering infinite mixture models *(prerequisite)*
Infinite mixture models are flexible clustering methods that can automatically infer the number of clusters in data. Multivariate clustering groups genetic variants based on their association patterns across multiple traits.

*How the paper uses it:* ML-MAGES applies an infinite mixture model with variational inference to cluster variants by multitrait association patterns.

▶ [Clustering (4): Gaussian Mixture Models and EM](https://www.youtube.com/watch?v=qMTuMa86NzU) — Alexander Ihler · 17:11 · 11 years ago

### Effect size shrinkage neural networks
Neural networks can learn complex patterns to adjust or shrink inflated effect sizes in genetic data, improving accuracy. This approach leverages supervised learning to incorporate LD and summary statistics for better effect size estimation.

*How the paper uses it:* ML-MAGES uses feed-forward neural networks for effect size shrinkage, outperforming traditional methods in accuracy and speed.

▶ [Regularization Is Shrinkage](https://www.youtube.com/watch?v=B4CsCKViB3k) — CIS 522 - Deep Learning · 5 years ago

### ML-MAGES authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, methodology, and results of ML-MAGES, complementing foundational knowledge with specific details about the method and its applications.

*How the paper uses it:* Authors explain ML-MAGES's novel approach to multitrait genetic association analysis and effect size shrinkage.

▶ [https://www.youtube.com › watch?v=9Glu_XRgW4k](https://www.youtube.com/watch?v=9Glu_XRgW4k) — YouTube result via DuckDuckGo


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of ML-MAGES, from reproducing a core mechanism on synthetic data, to implementing the main neural network shrinkage method and clustering on multitrait genetic data, and finally extending the approach to address a key limitation around simulated training data generalizability. Each project builds on your existing software engineering and ML skills while progressively introducing domain-specific concepts and challenges from the paper.

### Beginner — Simulate and Visualize Effect Size Shrinkage on Synthetic GWAS Data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simple genetic dataset with linkage disequilibrium (LD) and multiple traits, generates inflated effect sizes, then applies a basic feed-forward neural network to shrink these effect sizes. You visualize before-and-after effect size distributions and compare to unregularized estimates.

**Why it shows you understood the paper:** This project shows you understand the core problem ML-MAGES addresses—effect size inflation due to LD—and the neural network shrinkage mechanism as a solution, even on simplified data.

**Grounded in:** Development of a neural network-based effect size shrinkage method that outperforms regularized regression and fine-mapping in accuracy and computational efficiency.

**Tech stack:** Python 3.11, Jupyter Notebook, PyTorch or TensorFlow, matplotlib, numpy, scipy

**Data:** Synthetic GWAS summary statistics simulated in notebook with simple LD structure and multitrait effect sizes.

**Build it:**

1. Simulate genotype correlation matrix mimicking LD for a small set of SNPs.
2. Generate true multitrait effect sizes and simulate inflated GWAS effect sizes with noise and LD-induced inflation.
3. Implement a small feed-forward neural network to learn shrinkage mapping from inflated to true effect sizes using simulated training pairs.
4. Train the network and apply it to shrink effect sizes on a test set.
5. Visualize and compare distributions of true, inflated, and shrunken effect sizes.
6. Write a README explaining the simulation, shrinkage concept, and results.

**Ships as:** A Jupyter notebook with code, plots showing shrinkage effect, and a README explaining the problem and method.

**Stretch goal:** Add a comparison to elastic net shrinkage on the same data to highlight ML-MAGES neural network advantage.

### Intermediate — Reimplement ML-MAGES Neural Network Shrinkage and Clustering on Public Multitrait GWAS Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core ML-MAGES neural network shrinkage method and infinite mixture model clustering from the paper using Python. You apply it to a publicly available multitrait GWAS summary statistics dataset (e.g., lipid traits from UK Biobank or a similar public dataset) to estimate shrunken effect sizes and cluster variants by multitrait association patterns. You compare shrinkage accuracy and clustering quality against a simple baseline like elastic net and k-means clustering.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper’s core methods and apply them to real data, reproducing key metrics like effect size estimation accuracy and clustering precision/recall, proving deep comprehension of ML-MAGES.

**Grounded in:** ML-MAGES uses supervised learning with feed-forward neural networks to shrink inflated GWA effect sizes by incorporating LD information and summary statistics. It then applies an infinite mixture model with variational inference to cluster variants based on their multitrait association patterns.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, pandas, matplotlib, seaborn

**Data:** Publicly available multitrait GWAS summary statistics dataset (e.g., lipid traits from UK Biobank or a similar public dataset). If unavailable, simulate multitrait GWAS summary statistics with LD structure.

**Build it:**

1. Acquire or simulate multitrait GWAS summary statistics with LD information for a moderate number of SNPs.
2. Implement the ML-MAGES neural network shrinkage model based on the paper’s description.
3. Train the neural network on simulated or held-out data to learn shrinkage mapping.
4. Implement the infinite mixture model clustering with variational inference to cluster shrunken effect sizes.
5. Apply the pipeline to the multitrait GWAS data to obtain shrunken effect sizes and variant clusters.
6. Compare shrinkage accuracy to elastic net regression and clustering quality to k-means using precision and recall metrics.
7. Document the implementation, results, and comparison in a detailed README.

**Ships as:** A Python package or notebook implementing ML-MAGES shrinkage and clustering, applied to multitrait GWAS data, with evaluation plots and a README.

**Stretch goal:** Add gene-level aggregation of variant effects and cluster assignments to identify trait-specific and shared gene associations.

### Advanced — Adapt ML-MAGES Neural Network Shrinkage for Diverse Populations with Realistic Simulations
*Effort: 3+ weeks*

You extend the ML-MAGES neural network shrinkage method by developing improved simulation strategies to generate more realistic synthetic training data that better reflect diverse population genetic architectures and LD patterns. You retrain the neural network on this enhanced data and evaluate its performance on multitrait GWAS data from a population with distinct LD structure or allele frequencies (simulated or public). You analyze how this adaptation improves shrinkage accuracy and discuss implications for generalizability.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to critically engage with the method’s weaknesses and propose concrete improvements, a hallmark of research-level understanding.

**Grounded in:** Reliance on simulated data for supervised learning training limits generalizability, especially across diverse populations with different genetic architectures. Develop improved simulation strategies to generate more realistic synthetic training data for diverse populations and traits.

**Tech stack:** Python 3.11, PyTorch, numpy, scipy, pandas, matplotlib, scikit-learn

**Data:** Simulated multitrait GWAS summary statistics with LD patterns modeled after diverse populations; optionally use public GWAS data from a non-European ancestry cohort if available.

**Build it:**

1. Research population-specific LD patterns and allele frequency distributions from literature or public resources.
2. Develop or adapt a simulation pipeline to generate synthetic multitrait GWAS summary statistics reflecting these diverse genetic architectures.
3. Retrain the ML-MAGES neural network shrinkage model on this improved synthetic training data.
4. Evaluate shrinkage accuracy on test data simulated from the target population’s genetic architecture or on real multitrait GWAS data if accessible.
5. Compare results to the original ML-MAGES model trained on generic simulations to quantify improvement.
6. Write a comprehensive report discussing simulation design, retraining process, evaluation, and implications for applying ML-MAGES to underrepresented populations.

**Ships as:** A repository with simulation code, retrained ML-MAGES shrinkage model, evaluation scripts, and a detailed report on improved generalizability to diverse populations.

**Stretch goal:** Implement visualization tools to intuitively summarize and interpret high-dimensional multitrait clustering results from the adapted model.

_No authors' code or data artifacts were released for this paper; all implementations must be based on the paper's methodological descriptions and publicly available or simulated data._
