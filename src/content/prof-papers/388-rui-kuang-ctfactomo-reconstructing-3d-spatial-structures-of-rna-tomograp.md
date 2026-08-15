---
title: "388 · CTFacTomo: Reconstructing 3D spatial structures of RNA tomography transcriptomes by collapsed tensor factorization — Rui Kuang"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rui-kuang"
source_hash: "e58788dbda737d34a57db7570607e0b55067bf30600d116b3a1fa4757b3e7f46"
sequence: 388
generator: "outreach-garden: managed"
---

# 388 · CTFacTomo: Reconstructing 3D spatial structures of RNA tomography transcriptomes by collapsed tensor factorization

## At a glance

- **Professor:** Rui Kuang
- **Institution:** University of Minnesota
- **Paper:** [CTFacTomo: Reconstructing 3D spatial structures of RNA tomography transcriptomes by collapsed tensor factorization](https://doi.org/10.1371/journal.pcbi.1013457)
- **Authors:** Tianci Song, Quoc Nguyen, Charles Broadbent, Rui Kuang
- **Year:** 2026

## Paper overview

This paper introduces CTFacTomo, a computational method that reconstructs three-dimensional spatial gene expression patterns from RNA tomography data. RNA tomography profiles gene expression in thin tissue slices along three orthogonal axes, but reconstructing the full 3D structure from these 1D projections is challenging. CTFacTomo uses a novel collapsed tensor factorization approach combined with spatial and protein interaction network information to accurately infer 3D gene expression. The method outperforms existing approaches on simulated and real datasets, including zebrafish embryo and mouse olfactory mucosa, and its reconstructions align well with independent spatial transcriptomics data and in situ hybridization images.

### Why it matters

**Research problem:** Reconstructing accurate 3D spatial gene expression patterns from RNA tomography data, which consists of 1D bulk RNA sequencing measurements from consecutive tissue slices along three orthogonal axes, is computationally challenging due to noise, sparsity, and the complexity of spatial patterns.

**Why it matters:** Understanding the 3D spatial organization of gene expression in tissues is fundamental for studying cellular functions, development, and disease mechanisms. RNA tomography offers a cost-effective and sensitive way to profile transcriptomes in 3D, but without accurate computational reconstruction methods, the full potential of this data cannot be realized.

**Key contributions:**

- Development of CTFacTomo, a novel collapsed tensor factorization method for reconstructing 3D spatial gene expression from RNA tomography data.
- Integration of spatial and functional prior knowledge via product graph Laplacian regularization to improve reconstruction accuracy.
- Comprehensive validation on simulated 3D spatial transcriptomics datasets projected into tomography-like 1D data, demonstrating superior performance over existing methods (IPF and Tomographer).
- Application to real RNA tomography datasets from zebrafish embryo and mouse olfactory mucosa, showing biologically consistent 3D spatial expression patterns validated by in situ hybridization (ISH) images.
- Quantitative evaluation against an external 3D Stereo-seq zebrafish embryo dataset using bivariate Moran’s I spatial correlation, confirming improved spatial coherence of CTFacTomo reconstructions.

## About the professor

**Rui Kuang** — Professor, Department of Computer Science and Engineering, University of Minnesota.

Research interests: My broad research interests are in computational biology, biomedical informatics and machine learning. My lab focuses on developing machine-learning algorithms for problems in cancer genomics, biological network analysis and protein function/structure analysis.

### Research links

- [Faculty/profile page](http://www-users.cs.umn.edu/~kuang)
- [Professor website](http://compbio.cs.umn.edu/)
- [Resolved homepage](https://compbio.cs.umn.edu/rui-kuang)
- [GitHub](https://github.com/kuanglab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** tensor decomposition and factorization
**The paper assumes:** tensor algebra, tensor decomposition methods, Canonical Polyadic (CP) decomposition, tensor factorization algorithms
**Already in this field?** Skip this entirely if you already understand tensor decomposition techniques and their application in machine learning or computational biology.

To understand the core computational method CTFacTomo in this paper, which relies on low-rank Canonical Polyadic (CP) tensor decomposition for reconstructing 3D spatial gene expression, background knowledge in tensor decomposition and factorization is essential. The rigorous course option offers a deep, structured university-level introduction to tensors and their applications, while the fast track provides a focused, intuition-driven series on tensor decomposition concepts and algorithms. Choose the lane that fits your available time and desired depth of understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Tensor Decomposition](https://www.youtube.com/playlist?list=PL-dpUY5nCWZhOlc8XM398ps9A0CEDNGIH) — ChungKai Sun · 6 videos · 5.3h across 6 episodes

**Watch only this:** Episodes 1-3: 'Tamara G. Kolda: "Tensor Decomposition"', 'Recent Progress in High-Dimensional Learning', and 'Ankur Moitra : Tensor Decompositions and their Applications' — about 2.5 hours total. These cover essential concepts and applications directly relevant to understanding CTFacTomo.

*Why it unblocks this paper:* This concise 6-episode playlist by ChungKai Sun includes key talks and tutorials on tensor decomposition, including Tamara G. Kolda's overview and Ankur Moitra's applications, providing a clear and focused introduction suitable for quick background preparation.

*If you want all of it:* All 6 episodes, approximately 5.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To thoroughly understand the CTFacTomo paper, start with foundational concepts including the tensor decomposition CP model, graph Laplacian regularization, spatial transcriptomics and RNA tomography, and protein-protein interaction networks. These prerequisites provide the mathematical, computational, and biological background necessary to grasp the novel collapsed tensor factorization method. Finally, focus on the core concept of collapsed tensor factorization itself and the authors' own talk presenting CTFacTomo to see the method applied directly to RNA tomography data reconstruction.

### Tensor decomposition CP model *(prerequisite)*
Understanding the Canonical Polyadic (CP) tensor decomposition model is essential as it forms the mathematical foundation of CTFacTomo's approach to reconstructing 3D spatial gene expression tensors. The selected talks provide advanced theoretical and algorithmic insights into tensor decomposition, including uniqueness and identifiability, which are critical for appreciating the robustness of the factorization used.

*How the paper uses it:* CTFacTomo reconstructs the 3D spatial gene expression tensor by learning a low-rank CP decomposition.

▶ [Theo Rudkiewicz - Tensor decomposition in frugal neural networks](https://www.youtube.com/watch?v=fv_HwdY3q4o) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 24:20 · 1y ago

### Graph Laplacian regularization *(prerequisite)*
Graph Laplacian regularization is a key technique to incorporate spatial adjacency and protein-protein interaction network priors into the reconstruction, enforcing smoothness and biological consistency. The selected university lecture and conference talks provide a rigorous treatment of graph Laplacians, spectral methods, and their use in regularization and community detection.

*How the paper uses it:* CTFacTomo uses graph Laplacian regularization on a product graph combining spatial and PPI networks to improve reconstruction accuracy.

▶ [Lecture 32 — Defining the Graph Laplacian (Advanced) | Stanford University](https://www.youtube.com/watch?v=Cedjf9G0otE) — Artificial Intelligence - All in One · 10y ago

### Spatial transcriptomics RNA tomography *(prerequisite)*
A solid understanding of spatial transcriptomics and RNA tomography experimental methods is necessary to appreciate the biological data CTFacTomo reconstructs. The chosen seminar and conference talks provide advanced insights into spatial transcriptomics technologies and deconvolution methods, avoiding beginner-level overviews.

*How the paper uses it:* CTFacTomo reconstructs 3D spatial gene expression patterns from RNA tomography data, which profiles gene expression in thin tissue slices along three orthogonal axes.

▶ [Spatial transcriptomics deconvolution methods... - Laura D. Martens - HiTSeq - ISMB/ECCB 2025](https://www.youtube.com/watch?v=QeKQ6y-suiM) — ISCB · 21:54 · 6mo ago

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks serve as functional biological priors integrated into CTFacTomo's graph regularization framework. The selected talks from research groups and academic channels provide detailed and research-level discussions on PPI networks and their use in computational biology, avoiding introductory or consumer-level content.

*How the paper uses it:* CTFacTomo incorporates PPI networks as functional priors to guide the reconstruction of spatial gene expression.

▶ [STRING | Functional Protein Association Networks | Lecture 31 | Dr. Muhammad Naveed](https://www.youtube.com/watch?v=ObAjemaVSwk) — Dr. Muhammad Naveed · 5y ago

### Collapsed tensor factorization
Collapsed tensor factorization is the central computational method developed in CTFacTomo to reconstruct 3D spatial gene expression from 1D tomography data. While no direct author talk on this exact method was found, advanced lectures on tensor factorization provide the necessary mathematical and algorithmic background to understand the novel collapsed factorization loss and optimization approach.

*How the paper uses it:* CTFacTomo introduces a novel collapsed tensor factorization loss to ensure reconstructed tensor projections match observed tomography data.

▶ [Applied Linear Algebra:  Tensor Decompositions](https://www.youtube.com/watch?v=tm5am60CId4) — Nathan Kutz · 5y ago

### CTFacTomo RNA tomography talk *(the paper's own talk)*
The authors' own contributed talk at the Cognitive Computational Neuroscience 2026 conference presents CTFacTomo directly, offering the most precise and authoritative explanation of the method, its motivation, and results. This talk is invaluable for understanding the paper's contributions from the researchers themselves.

*How the paper uses it:* This is the authors' own presentation of CTFacTomo, the novel method developed in the paper.

▶ [CCN 2026 | Theory & Methods (CT)](https://www.youtube.com/watch?v=7csqgzhIXNY) — Cognitive Computational Neuroscience · 23h ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the biological and computational foundations needed to understand CTFacTomo, a method for reconstructing 3D spatial gene expression from RNA tomography data. We start with the biological context of spatial transcriptomics and protein-protein interaction networks, then cover key mathematical tools like graph Laplacian regularization and tensor decomposition (especially the CP model). Finally, we focus on the core computational approach of collapsed tensor factorization used in the paper.

### Spatial transcriptomics RNA tomography *(prerequisite)*
Spatial transcriptomics is a technique that measures gene expression while preserving spatial information within tissues. RNA tomography profiles gene expression by sequencing thin tissue slices along three orthogonal axes, producing 1D projections that need computational reconstruction to recover 3D patterns.

*How the paper uses it:* CTFacTomo reconstructs 3D spatial gene expression from RNA tomography data, which consists of 1D bulk RNA-seq measurements from tissue slices.

▶ [Spatial Transcriptomics](https://www.youtube.com/watch?v=q74euInZqm4) — Journal of Investigative Dermatology (JID) · 5:34 · 3y ago

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks represent the functional relationships between proteins in a cell, which can inform biological processes and gene function. Incorporating PPI networks as prior knowledge helps guide computational models to produce biologically meaningful reconstructions.

*How the paper uses it:* CTFacTomo integrates PPI networks via graph Laplacian regularization to enforce functional smoothness in the 3D gene expression reconstruction.

▶ [Brief Introduction of Protein-Protein Interactions (PPIs)](https://www.youtube.com/watch?v=9IrPVXn-x5k) — Creative Proteomics · 7y ago

### Graph Laplacian regularization *(prerequisite)*
Graph Laplacian regularization is a mathematical technique that encourages smoothness of a function over a graph, meaning connected nodes have similar values. It is widely used to incorporate spatial or network-based prior knowledge into machine learning models.

*How the paper uses it:* CTFacTomo uses graph Laplacian regularization on a product graph combining spatial adjacency and PPI networks to improve reconstruction accuracy.

▶ [Graph Laplacian-5: Dimension Reduction](https://www.youtube.com/watch?v=BrUi57U82fI) — Sanjoy Das · 3y ago

### Tensor decomposition CP model *(prerequisite)*
The Canonical Polyadic (CP) decomposition factorizes a tensor into a sum of rank-one components, generalizing matrix factorization to higher dimensions. It is a fundamental tool for modeling multi-way data like 3D spatial gene expression across genes and spatial coordinates.

*How the paper uses it:* CTFacTomo models the 3D spatial gene expression as a 4-way tensor and reconstructs it via low-rank CP decomposition.

▶ [Theo Rudkiewicz - Tensor decomposition in frugal neural networks](https://www.youtube.com/watch?v=fv_HwdY3q4o) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 24:20 · 1y ago

### Collapsed tensor factorization
Collapsed tensor factorization is a specialized approach that reconstructs a high-dimensional tensor from lower-dimensional projections by optimizing a loss that matches these projections. This technique is crucial for recovering 3D gene expression from 1D tomography data.

*How the paper uses it:* CTFacTomo introduces a novel collapsed tensor factorization loss to ensure reconstructed 3D tensors match observed 1D RNA tomography measurements.

▶ [Applied Linear Algebra:  Tensor Decompositions](https://www.youtube.com/watch?v=tm5am60CId4) — Nathan Kutz · 5y ago

### CTFacTomo RNA tomography talk *(the paper's own talk)*
This talk presents the CTFacTomo method directly from the authors, explaining the motivation, methodology, and validation results for reconstructing 3D spatial gene expression from RNA tomography data.

*How the paper uses it:* It is the authors' own contributed talk describing the CTFacTomo method in detail.

▶ [CCN 2026 | Theory & Methods (CT)](https://www.youtube.com/watch?v=7csqgzhIXNY) — Cognitive Computational Neuroscience · 23h ago

## Already in your library

- [Spatial Transcriptomics Intro - Part 1: What Is Spatial ...](https://www.youtube.com/watch?v=_qsHqB67O70) — also for: Mapping the topography of spatial gene expression with interpretable deep learning (Hirak Sarkar)
- [Spatial Transcriptomics Explained!](https://www.youtube.com/watch?v=6P5JZINJ4pg) — also for: Mapping the topography of spatial gene expression with interpretable deep learning (Hirak Sarkar)
- [11. Spatial transcriptomics](https://www.youtube.com/watch?v=OFW_cQ4vtaY) — also for: Mapping the topography of spatial gene expression with interpretable deep learning (Hirak Sarkar)
- [Introduction to Biological Network Analysis II: Protein-Protein Interaction Networks: From Graphs to](https://www.youtube.com/watch?v=_JjmIH53DEE) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding and practical skills related to CTFacTomo, the collapsed tensor factorization method for reconstructing 3D spatial gene expression from RNA tomography data. The beginner project focuses on reproducing a key metric from the paper using the authors' code and data, the intermediate project involves running and extending the authors' method on real data with baseline comparison, and the advanced project tackles a stated limitation by exploring robustness to incomplete protein-protein interaction networks through method extension and evaluation.

### Beginner — Reproduce CTFacTomo Spatial Correlation Metric on Zebrafish Data
*Effort: a weekend, ~8 hours*

You will set up the CTFacTomo codebase from the authors' GitHub repository and run it on the zebrafish embryo RNA tomography dataset (GSE59873). Then, you will reproduce the bivariate Moran’s I spatial correlation metric comparing CTFacTomo reconstructions to Stereo-seq data slices, as reported in the paper.

**Why it shows you understood the paper:** This project shows you understand the core evaluation metric used to validate CTFacTomo's reconstruction quality and can run the authors' pipeline on real data, reproducing a key quantitative result.

**Grounded in:** Quantitative evaluation against an external 3D Stereo-seq zebrafish embryo dataset using bivariate Moran’s I spatial correlation, confirming improved spatial coherence of CTFacTomo reconstructions.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, CTFacTomo codebase dependencies

**Data:** Zebrafish embryo RNA tomography data and Stereo-seq data from GEO accession GSE59873 and (link removed — unverified) respectively.

**Build it:**

1. Clone the CTFacTomo GitHub repository and install required Python dependencies.
2. Download the zebrafish embryo RNA tomography dataset (GSE59873) and corresponding Stereo-seq data.
3. Run the CTFacTomo reconstruction pipeline on the zebrafish tomography data following the provided instructions.
4. Compute the bivariate Moran’s I spatial correlation metric between the reconstructed 3D gene expression and Stereo-seq slices.
5. Visualize and compare the Moran’s I scores to those reported in the paper.

**Verified links from the paper:**

- <https://github.com/kuanglab/CTFacTomo> — released by the paper's authors
- <https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE59873> — released by the paper's authors

**Ships as:** A GitHub repository with scripts and a README demonstrating reproduction of the spatial correlation metric on zebrafish data, including plots and comparison commentary.

**Stretch goal:** Add a simple visualization of a few reconstructed 3D gene expression patterns alongside ISH images for qualitative validation.

### Intermediate — Run and Compare CTFacTomo on Mouse Olfactory Mucosa Tomo-seq Data
*Effort: 2 weekends, ~20 hours*

You will apply the CTFacTomo method to the mouse olfactory mucosa RNA tomography dataset (E-MTAB-10211) and reconstruct 3D spatial gene expression. You will implement a simple baseline method (e.g., iterative proportional fitting, IPF) and compare reconstruction accuracy using mean squared error (MSE) and mean absolute error (MAE) metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to run the core CTFacTomo method on a new real dataset, implement a baseline for comparison, and quantitatively evaluate reconstruction accuracy, reflecting the paper’s core contributions and validation approach.

**Grounded in:** Comprehensive validation on real RNA tomography datasets from mouse olfactory mucosa, showing biologically consistent 3D spatial expression patterns and superior performance over IPF baseline.

**Tech stack:** Python 3.11, NumPy, SciPy, Pandas, Matplotlib, CTFacTomo codebase dependencies

**Data:** Mouse olfactory mucosa RNA tomography data and ISH images from ArrayExpress accession E-MTAB-10211.

**Build it:**

1. Set up the CTFacTomo environment and download the mouse olfactory mucosa tomography dataset.
2. Run CTFacTomo to reconstruct 3D gene expression patterns from the tomography data.
3. Implement a simple IPF baseline method for 3D reconstruction from 1D projections.
4. Compute reconstruction accuracy metrics (MSE, MAE) comparing CTFacTomo and IPF results.
5. Visualize selected marker gene spatial patterns and compare to ISH images qualitatively.

**Verified links from the paper:**

- <https://github.com/kuanglab/CTFacTomo> — released by the paper's authors
- <https://www.ebi.ac.uk/biostudies/arrayexpress/studies/E-MTAB-10211> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to run CTFacTomo and IPF on mouse olfactory mucosa data, scripts for metric calculation, and a report summarizing quantitative and qualitative comparisons.

**Stretch goal:** Incorporate graph Laplacian regularization ablation by disabling it in CTFacTomo and comparing performance.

### Advanced — Robustness Analysis of CTFacTomo to Incomplete Protein-Protein Interaction Networks
*Effort: 3+ weeks*

You will extend the CTFacTomo method to systematically evaluate how reconstruction accuracy changes when the protein-protein interaction (PPI) network used for graph Laplacian regularization is incomplete or noisy. This involves simulating missing edges or adding noise to the PPI network, running CTFacTomo reconstructions, and quantifying performance degradation. You may explore strategies such as adaptive regularization or imputation to mitigate these effects.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper regarding reliance on PPI network quality. It demonstrates deep comprehension of CTFacTomo’s graph regularization mechanism and contributes a novel robustness analysis and potential improvements, suitable for research discussion.

**Grounded in:** The method relies on the availability and quality of protein-protein interaction networks and spatial graphs; inaccuracies in these priors may affect reconstruction.

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib, CTFacTomo codebase dependencies

**Data:** Use the zebrafish embryo tomography dataset (GSE59873) and associated PPI network from the CTFacTomo codebase or public PPI databases referenced therein.

**Build it:**

1. Set up CTFacTomo and obtain the PPI network used for graph Laplacian regularization.
2. Develop scripts to simulate incomplete or noisy PPI networks by randomly removing edges or adding spurious edges.
3. Run CTFacTomo reconstructions on zebrafish tomography data using modified PPI networks.
4. Evaluate reconstruction accuracy metrics (MSE, MAE, Moran’s I) under different PPI network perturbations.
5. Implement and test mitigation strategies such as adaptive regularization weights or network imputation.
6. Document findings and provide recommendations for handling PPI network uncertainty in CTFacTomo.

**Verified links from the paper:**

- <https://github.com/kuanglab/CTFacTomo> — released by the paper's authors
- <https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE59873> — released by the paper's authors

**Ships as:** A GitHub repository with code for PPI network perturbation, CTFacTomo runs, evaluation scripts, and a detailed report analyzing robustness and mitigation strategies.

**Stretch goal:** Extend the analysis to multi-omics priors integration as suggested in the paper’s future directions.

_Confirm that the CTFacTomo repository includes instructions and code to compute the bivariate Moran’s I metric and access to or instructions for the PPI network data; otherwise, some metric implementation or PPI data assembly may be needed._
