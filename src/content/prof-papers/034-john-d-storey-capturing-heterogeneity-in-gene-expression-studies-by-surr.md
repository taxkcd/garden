---
title: "034 · Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis — John D. Storey"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-storeylab-org"
source_hash: "439e4f890fb8cb1d6275c070248b30ecec3a826a52dcfdc5386878fe4a757177"
sequence: 34
generator: "outreach-garden: managed"
---

# 034 · Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis

## At a glance

- **Professor:** John D. Storey
- **Institution:** Princeton University
- **Paper:** [Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis](https://doi.org/10.1371/journal.pgen.0030161)
- **Authors:** Jeffrey T. Leek, John D. Storey
- **Year:** 2007

## Paper overview

Gene expression studies often face challenges due to many unmeasured or unknown factors influencing gene expression, which can obscure true biological signals. This paper introduces Surrogate Variable Analysis (SVA), a method that uses the gene expression data itself to identify and adjust for these hidden sources of variation, improving the accuracy and reproducibility of gene expression analyses.

### Why it matters

**Research problem:** Gene expression levels are influenced by numerous known and unknown factors, including genetic, environmental, demographic, and technical variables. Unmeasured or unmodeled factors cause expression heterogeneity (EH), leading to reduced power, spurious signals, and biased statistical inference in gene expression studies.

**Why it matters:** Failing to account for EH can distort the identification of differentially expressed genes, reduce reproducibility, and mislead biological conclusions. This is critical in large-scale genomic studies where accurate detection of true biological signals is essential for understanding complex traits and diseases.

**Key contributions:**

- Introduction of SVA to identify and estimate hidden sources of variation in gene expression data.
- A supervised factor analysis approach that accounts for correlation between surrogate variables and primary variables.
- Demonstration that SVA improves the accuracy and reproducibility of differential expression analyses.
- Application of SVA to diverse gene expression studies including yeast genetics, human disease class, and time-course data.
- Provision of an open-source R package implementing SVA.

## About the professor

**John D. Storey** — William R. Harman '63 and Mary-Love Harman Professor in Genomics, Lewis-Sigler Institute for Integrative Genomics, Princeton University.

Research interests: quantitative methods in genomics, functional genomics, high-dimensional data sets, causal regulatory networks, gene expression variation

### Research links

- [Faculty/profile page](https://lsi.princeton.edu/people/john-storey)
- [Identity evidence](https://storeylab.org)
- [Lab website](https://lsi.princeton.edu/research/faculty-research-labs/storey-research-lab)
- [Google Scholar](http://scholar.google.com/citations?user=oi4x2XIAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Statistical Factor Analysis
**The paper assumes:** statistical factor analysis, latent variable modeling, and matrix decomposition methods
**Already in this field?** Skip this entirely if you already understand factor analysis and latent variable models in statistics.

To understand the Surrogate Variable Analysis (SVA) method in this paper, a solid grasp of factor analysis is essential, as SVA is a supervised factor analysis approach that estimates hidden sources of variation in gene expression data. The rigorous course option offers a deep, university-level treatment of factor analysis concepts, models, and assumptions, while the fast track provides a concise, focused introduction to factor analysis methods and interpretation. Choose the rigorous course for a thorough foundation and the fast track for a quicker, intuition-driven overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Factor Analysis-Concept, methods, and interpretation](https://www.youtube.com/playlist?list=PLfQyI6J-c7LzK1hFUs3_fDG-PEyP0QR8u) — Rakesh Pandey · 7 videos · 5.5h across 7 episodes

**Watch only this:** Episodes 1-3 (Factor analysis Concept and meaning, Basic assumptions terminology and related statistics, and Factor analysis procedure part I), about 2.5 hours — provides a solid conceptual and procedural overview.

*Why it unblocks this paper:* This playlist by Rakesh Pandey offers a concise and clear explanation of factor analysis concepts, procedures, and interpretation, suitable for quickly understanding the key ideas behind factor analysis as used in SVA.

*If you want all of it:* All 7 episodes, about 5.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Surrogate Variable Analysis (SVA) by Leek and Storey, start with foundational concepts including latent variable models and factor analysis, which underpin the statistical methodology of SVA. Then, explore batch effect correction in genomics to appreciate the practical challenges SVA addresses. Finally, focus on the core concept of Surrogate Variable Analysis itself, prioritizing the authors' own presentation for direct insight into their method and its applications.

### Latent variable models in statistics *(prerequisite)*
Latent variable models provide the theoretical foundation for modeling unobserved factors that influence observed data, which is central to understanding how SVA estimates hidden sources of variation. The selected talks are advanced seminars and university lectures that rigorously cover identifiability, learning, and assessment of latent variable models in high-dimensional settings.

*How the paper uses it:* SVA relies on latent variable modeling to estimate surrogate variables representing unmeasured confounders in gene expression data.

▶ [Prof. Magnus Rattray | Latent variable models of transcriptional regulation](https://www.youtube.com/watch?v=s47MMOcYo7o) — INI Seminar Room 1 · 56:12 · 7 months ago

### Factor analysis and dimension reduction *(prerequisite)*
Factor analysis and dimension reduction techniques like PCA are core statistical tools used in SVA to decompose residual expression data and extract surrogate variables. The chosen videos provide in-depth coverage of these methods beyond introductory level, suitable for advanced readers seeking to understand the mathematical and practical aspects of these techniques.

*How the paper uses it:* SVA uses factor analysis approaches to identify surrogate variables capturing hidden variation in gene expression.

▶ [Mastering PCA, EFA & CFA  Dimensionality Reduction, Latent Factors & Model Testing](https://www.youtube.com/watch?v=wFuWF4yW9Ak) — Makerere Epidemiology and Statistical center · 1 year ago

### Batch effect correction in genomics *(prerequisite)*
Batch effects represent a major source of unwanted technical variation in gene expression studies, and understanding their correction is critical to appreciating the motivation and impact of SVA. The selected videos are university lectures and conference talks that discuss batch effect removal methods in the context of RNA-seq and microarray data analysis at a research level.

*How the paper uses it:* SVA addresses batch effects and other hidden confounders to improve the accuracy of differential expression analyses.

▶ [STAT115 Chapter 6.5 Batch Effect Removal](https://www.youtube.com/watch?v=xXAA_CcQMek) — Xiaole Shirley Liu · 6 years ago

### Paper authors talk
The authors' own presentation on Surrogate Variable Analysis provides direct insight into the method's development, motivation, and application, making it the most authoritative and relevant resource for understanding the paper. This talk succinctly introduces gene expression heterogeneity and the SVA approach from the original research team.

*How the paper uses it:* This video is a direct presentation by Jeff Leek, co-author of the paper, explaining SVA and its role in capturing heterogeneity in gene expression studies.

▶ [Surrogate Variable Analysis Movie](https://www.youtube.com/watch?v=nkVaYZvX3Oc) — Jeff Leek · 4:06 · 16 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Surrogate Variable Analysis (SVA) and its role in gene expression studies, start by learning about latent variable models and factor analysis, which provide the statistical foundation for modeling hidden factors. Next, grasp the concept of batch effects in genomics to appreciate the practical challenges SVA addresses. Finally, explore the SVA method itself through a focused explainer by the paper's author to see how these ideas come together to improve gene expression analysis.

### Latent variable models in statistics *(prerequisite)*
Latent variable models help us understand data influenced by hidden or unobserved factors. These models allow us to infer the presence and effect of variables we cannot directly measure, which is essential for analyzing complex biological data with unknown confounders.

*How the paper uses it:* SVA relies on latent variable modeling to estimate hidden sources of variation affecting gene expression.

▶ [Understanding Latent Variables in 4 min](https://www.youtube.com/watch?v=JCc4A5nJoGc) — numiqo · 8 months ago

### Factor analysis and dimension reduction *(prerequisite)*
Factor analysis and dimension reduction techniques like PCA reduce complex data into a smaller set of underlying factors, capturing the main sources of variation. This helps identify patterns and hidden influences in high-dimensional gene expression data.

*How the paper uses it:* SVA uses factor analysis principles to decompose residual gene expression data and estimate surrogate variables.

▶ [Factor Analysis - an introduction](https://www.youtube.com/watch?v=WV_jcaDBZ2I) — Ben Lambert · 12 years ago

### Batch effect correction in genomics *(prerequisite)*
Batch effects are unwanted technical variations in genomic data that can mask true biological signals. Understanding how to detect and correct these effects is crucial for reliable gene expression analysis.

*How the paper uses it:* SVA addresses batch effects and other hidden confounders to improve the accuracy of differential expression studies.

▶ [STAT115 Chapter 6.5 Batch Effect Removal](https://www.youtube.com/watch?v=xXAA_CcQMek) — Xiaole Shirley Liu · 6 years ago

### Surrogate Variable Analysis method
Surrogate Variable Analysis (SVA) is a method to identify and adjust for unknown sources of variation in gene expression data by estimating surrogate variables from the data itself. This improves the detection of true biological signals by accounting for hidden confounders.

*How the paper uses it:* This is the core method introduced in the paper to capture heterogeneity in gene expression studies.

▶ [Surrogate Variable Analysis Movie](https://www.youtube.com/watch?v=nkVaYZvX3Oc) — Jeff Leek · 4:06 · 16 years ago

## Already in your library

- [Batch Correction and Integration | NBIS Workshop in Single ...](https://www.youtube.com/watch?v=a-vzYSYA9mg) — also for: Capturing Heterogeneity in Gene Expression Studies by Surrogate Variable Analysis (John D. Storey)
- [CSCI 3151 - M09 - Latent-variable models & the EM algorithm](https://www.youtube.com/watch?v=c0THKJTN-ZQ) — also for: Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics (Adam Charles)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of Surrogate Variable Analysis (SVA) from the paper. The beginner project reproduces a key diagnostic plot illustrating SVA's effect on p-value distributions using simulated data. The intermediate project implements the core SVA method on a small public gene expression dataset, comparing differential expression results with and without SVA adjustment. The advanced project extends SVA by integrating external biological metadata to interpret surrogate variables, addressing a stated limitation and future direction of the paper.

### Beginner — Reproduce SVA Null P-Value Uniformity Plot
*Effort: a weekend, ~8 hours*

You build a Jupyter notebook that simulates gene expression data with known primary and unmodeled factors, applies a simple linear model without adjustment, and then applies surrogate variable adjustment by estimating surrogate variables via PCA on residuals. You then plot the null p-value distributions before and after SVA adjustment to reproduce the uniformity correction shown in the paper's Figure 1B.

**Why it shows you understood the paper:** This project shows you understand the core problem of unmodeled variation biasing p-values and how SVA corrects it by estimating hidden factors and adjusting the model accordingly.

**Grounded in:** SVA corrects the null p-value distribution to be uniform, ensuring valid significance testing. Figures 1B and S3 demonstrate that null p-values after SVA adjustment follow the expected Uniform distribution.

**Tech stack:** Python 3, Jupyter Notebook, numpy, scipy, matplotlib, scikit-learn

**Data:** Simulated gene expression data generated within the notebook to mimic primary and unmodeled factors as described in the paper's simulation setup.

**Build it:**

1. Simulate gene expression data with known primary variables and hidden confounders.
2. Fit a linear model for differential expression ignoring hidden factors and compute p-values.
3. Estimate surrogate variables by performing PCA on residuals after removing primary effects.
4. Refit the model including surrogate variables as covariates and recompute p-values.
5. Plot histograms of null p-values before and after SVA adjustment to show uniformity correction.

**Ships as:** A Jupyter notebook with code, plots, and explanations reproducing the null p-value uniformity correction by SVA.

**Stretch goal:** Add a small interactive widget to vary the strength of hidden confounding and observe its effect on p-value distributions.

### Intermediate — Implement SVA on Public Gene Expression Data
*Effort: 2 weekends, ~20 hours*

You implement the Surrogate Variable Analysis algorithm from the paper based on its description, applying it to a publicly available small gene expression dataset (e.g., a subset of the GTEx or a cancer microarray dataset). You compare differential expression results with and without SVA adjustment, reporting metrics such as p-value distribution uniformity and number of significant genes detected.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core SVA method, apply it to real data, and quantitatively evaluate its impact on differential expression analysis, mirroring the paper's core contributions.

**Grounded in:** The authors developed Surrogate Variable Analysis (SVA), a multi-step algorithm that estimates surrogate variables representing unmodeled factors by decomposing residual expression data after removing the effects of primary variables. These surrogate variables are then included as covariates in downstream analyses to adjust for EH.

**Tech stack:** Python 3, Jupyter Notebook, pandas, numpy, scipy, statsmodels, scikit-learn, matplotlib

**Data:** A small public gene expression dataset such as a subset of the GTEx dataset or a publicly available cancer microarray dataset, used as a substitute for the paper's data.

**Build it:**

1. Select and preprocess a small public gene expression dataset with known primary variables (e.g., disease status).
2. Implement the SVA algorithm: fit a model with primary variables, compute residuals, perform dimension reduction (e.g., PCA) on residuals to estimate surrogate variables.
3. Include surrogate variables as covariates in the differential expression model and compute adjusted p-values.
4. Compare p-value distributions and numbers of significant genes before and after SVA adjustment.
5. Visualize results with plots similar to those in the paper (e.g., p-value histograms, volcano plots).

**Ships as:** A GitHub repository with code implementing SVA, analysis notebooks, and a README reporting quantitative comparisons of differential expression results with and without SVA.

**Stretch goal:** Add a simple baseline adjustment method (e.g., batch correction by ComBat) and compare its performance against your SVA implementation.

### Advanced — Integrate Biological Metadata to Interpret Surrogate Variables
*Effort: 3+ weeks*

You extend the SVA method by integrating external biological or clinical metadata (e.g., tissue type, batch, patient demographics) to interpret the surrogate variables estimated from gene expression data. You implement correlation analyses and visualization tools to link surrogate variables to known biological factors, addressing the paper's limitation that surrogate variables lack direct biological identity.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing you can extend SVA beyond statistical adjustment to biological interpretation, which is critical for practical utility in genomic studies.

**Grounded in:** SVA estimates surrogate variables without identifying the biological identity of unmodeled factors. Future directions include further development to interpret biological meaning of surrogate variables and integration with external biological or clinical data.

**Tech stack:** Python 3, Jupyter Notebook, pandas, numpy, scipy, matplotlib, seaborn, statsmodels, scikit-learn

**Data:** A public gene expression dataset with accompanying biological or clinical metadata (e.g., tissue type, batch information) to enable surrogate variable interpretation.

**Build it:**

1. Implement or reuse the SVA method to estimate surrogate variables from gene expression data.
2. Collect and preprocess relevant biological or clinical metadata associated with samples.
3. Perform correlation and regression analyses between surrogate variables and metadata variables.
4. Visualize relationships using heatmaps, scatterplots, and clustering to interpret surrogate variables.
5. Document findings on which surrogate variables correspond to known biological or technical factors.
6. Optionally, propose a workflow to incorporate surrogate variable interpretation into downstream analysis.

**Ships as:** A comprehensive GitHub repository with code, notebooks, and documentation demonstrating surrogate variable interpretation via integration with biological metadata.

**Stretch goal:** Develop a simple interactive dashboard to explore surrogate variable relationships with metadata dynamically.
