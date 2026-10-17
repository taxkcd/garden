---
title: "669 · Mapping the topography of spatial gene expression with interpretable deep learning — Hirak Sarkar"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hirak-sarkar"
source_hash: "e0086bc4cbe228fb68e15671809352f95497c5c2ba01af9fa79597cf4b2e9f8b"
sequence: 669
generator: "outreach-garden: managed"
---

# 669 · Mapping the topography of spatial gene expression with interpretable deep learning

## At a glance

- **Professor:** Hirak Sarkar
- **Institution:** Vanderbilt University
- **Paper:** [Mapping the topography of spatial gene expression with interpretable deep learning](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12370209/)
- **Authors:** Uthsav Chitra, Brian J. Arnold, Kohei Sanno, Hirak Sarkar, Cong Ma, Sereno Lopez-Darwin, Benjamin J. Raphael
- **Year:** 2025

## Paper overview

This paper introduces GASTON, a novel deep learning method that creates a topographic map of gene expression in tissue slices. It models both sharp boundaries and continuous gradients of gene expression, enabling better understanding of spatial organization in tissues such as brain and tumors. GASTON overcomes data sparsity by pooling information along contours of equal 'isodepth', a coordinate analogous to elevation in geography, revealing meaningful biological patterns and spatial domains.

### Why it matters

**Research problem:** Spatially resolved transcriptomics (SRT) data is sparse and complex, making it difficult to accurately identify spatial domains and continuous gene expression gradients within tissues. Existing methods either focus on discrete spatial domains or continuous gradients but rarely both, and often lack a global coordinate system to model spatial gene expression comprehensively.

**Why it matters:** Understanding spatial gene expression patterns is critical for deciphering tissue architecture, cell type organization, and biological processes such as development, differentiation, and tumor microenvironment dynamics. Improved computational models can reveal new biological insights and aid in disease characterization and treatment strategies.

**Key contributions:**

- Introduction of the isodepth coordinate to model spatial gene expression topography, analogous to elevation in geographic maps.
- Development of GASTON, a deep learning algorithm that jointly learns isodepth, spatial gradients, and piecewise linear gene expression functions in an unsupervised manner.
- Demonstration that GASTON identifies spatial domains and marker genes more accurately than existing methods across multiple tissues and SRT technologies.
- Revealing biologically meaningful continuous and discontinuous gene expression patterns, including gradients of neuronal firing, differentiation, metabolism, and immune activity.
- Application of GASTON to tumor microenvironment data, uncovering spatial gradients related to metabolism, epithelial-mesenchymal transition, and immune responses.

## About the professor

**Hirak Sarkar** — Assistant Professor, College of Connected Computing, Vanderbilt University.

Research interests: deciphering the spatial architecture of complex diseases such as cancer using machine learning and artificial intelligence

### Research links

- [Faculty/profile page](https://www.hiraksarkar.com)
- [Resolved homepage](https://www.hiraksarkar.com/)
- [Google Scholar](https://scholar.google.com/citations?user=7vu64WsAAAAJ&hl=en&inst=10749622055976013885)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** spatial statistics and spatial modeling
**The paper assumes:** spatial statistics, spatial point processes, spatial gradient fields, spatial domain modeling
**Already in this field?** Skip this entirely if you already understand spatial statistics concepts such as spatial autocorrelation, spatial gradients, and spatial domain modeling in biological data.

This background playlist selection focuses on spatial statistics and spatial modeling, essential for understanding the spatial gene expression topography and vector field assumptions in the GASTON paper. The rigorous course provides a deep, structured foundation in spatial data analytics and modeling, while the fast track offers a concise, practical introduction to spatial analysis concepts relevant to GIS and spatial data interpretation. Choose the course for comprehensive mastery or the fast track for a quicker, intuition-driven overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [SBG051 Lecture: Spatial Analysis](https://www.youtube.com/playlist?list=PLJdAjlGo4yptawBRpihDDcY82pNzVVpqF) — GeoInfo · 6 videos · 1.1h across 6 episodes

**Watch only this:** Episodes 1 through 4, about 40 minutes — these cover spatial analysis fundamentals and spatial autocorrelation necessary to understand spatial dependencies in gene expression data.

*Why it unblocks this paper:* This short series on Spatial Analysis by GeoInfo provides a clear, concise introduction to spatial analysis basics, including spatial autocorrelation and spatial weights, which are foundational for grasping spatial coherence and gradient assumptions in the paper.

*If you want all of it:* Approximately 1.1 hours across all 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GASTON paper, start with foundational knowledge on spatially resolved transcriptomics (SRT) to grasp the data and biological context. Then, build understanding of interpretable deep learning models and spatial gene expression gradients, which underpin the modeling approach. Finally, focus on the core concept of the paper—the isodepth coordinate and the GASTON method itself—by watching the authors' own detailed presentation.

### Spatially resolved transcriptomics *(prerequisite)*
Spatially resolved transcriptomics is the fundamental technology generating the data that GASTON analyzes. Understanding the principles and challenges of SRT provides essential context for why new computational methods like GASTON are needed.

*How the paper uses it:* GASTON is developed to analyze spatially resolved transcriptomics data, addressing its sparsity and complexity.

▶ [Peter Kharchenko | Bayesian segmentation of spatially ...](https://www.youtube.com/watch?v=Ksvzjc0Z9SY) — Harvard CMSA · 30:44

### Interpretable deep learning models *(prerequisite)*
Interpretable deep learning methods allow researchers to understand how complex models make predictions, which is critical for biological applications where insight into learned patterns is as important as accuracy. This section covers the principles and approaches to interpretable modeling.

*How the paper uses it:* GASTON uses an interpretable deep neural network to jointly learn spatial coordinates and gene expression functions.

▶ [Introduction to Interpretable Machine Learning I - Cynthia Rudin](https://www.youtube.com/watch?v=nAvcQnnIvn8) — Institute for Advanced Study · 57:18

### Spatial gene expression gradients *(prerequisite)*
Spatial gene expression gradients represent continuous changes in gene expression across tissue space, a key biological phenomenon that GASTON models. Understanding these gradients helps appreciate the biological insights GASTON uncovers.

*How the paper uses it:* GASTON models both continuous gradients and sharp boundaries in spatial gene expression patterns.

▶ [Ed Lein: 2012 Allen Institute for Brain Science Symposium](https://www.youtube.com/watch?v=pSqyRRec1cM) — allen institute · 23:49

### Piecewise linear function modeling *(prerequisite)*
Piecewise linear functions provide a mathematical framework to model gene expression as continuous segments with possible sharp changes, matching the biological reality of spatial domains and gradients. This section explains the modeling approach used in GASTON.

*How the paper uses it:* GASTON models gene expression as piecewise linear functions of the isodepth coordinate.

▶ [Lecture 12: Modeling Piecewise Linear Functions, by Sven ...](https://www.youtube.com/watch?v=OiPwGo7REfE) — IEOR@IITB · 34:38

### GASTON paper talk *(the paper's own talk)*
This section features the authors' own presentation of the GASTON method, providing direct insights into the model design, biological applications, and key findings. It is the most authoritative and detailed resource on the paper.

*How the paper uses it:* Uthsav Chitra, the lead author, explains the GASTON method and results in this recorded talk.

▶ [Uthsav Chitra | Mapping the geometry of spatial gene expression | CGSI 2026](https://www.youtube.com/watch?v=_JLeyxG_P6c) — Computational Genomics Summer Institute CGSI · 7 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the GASTON paper, start by learning the fundamental technology of spatially resolved transcriptomics (SRT), which generates the data GASTON analyzes. Next, grasp the biological concept of spatial gene expression gradients that GASTON models. Then, build intuition on interpretable deep learning models to appreciate GASTON's approach. After that, understand piecewise linear function modeling, the mathematical basis for how gene expression is modeled along the isodepth coordinate. Finally, learn about the isodepth coordinate modeling itself, the core novel concept introduced by GASTON to represent spatial gene expression topography.

### Spatially resolved transcriptomics *(prerequisite)*
Spatially resolved transcriptomics (SRT) is a cutting-edge technology that measures gene expression within intact tissue sections, preserving spatial context. Understanding SRT is essential to grasp what data GASTON analyzes and why spatial information matters in biology.

*How the paper uses it:* GASTON analyzes SRT data to map spatial gene expression patterns in tissues.

▶ [Spatial Transcriptomics Intro - Part 1: What Is Spatial ...](https://www.youtube.com/watch?v=_qsHqB67O70) — Alex Soupir · 14:30

### Spatial gene expression gradients *(prerequisite)*
Spatial gene expression gradients describe how gene activity changes continuously or abruptly across tissue regions, reflecting biological processes like cell differentiation or tumor microenvironments. Understanding these gradients helps appreciate what GASTON models and why capturing both continuous and discontinuous patterns is important.

*How the paper uses it:* GASTON models both continuous gradients and sharp boundaries in gene expression across tissues.

▶ [Spatial Transcriptomics Explained!](https://www.youtube.com/watch?v=6P5JZINJ4pg) — Omixium · 25:41

### Interpretable deep learning models *(prerequisite)*
Interpretable deep learning aims to build models whose decisions and learned features can be understood by humans, crucial for trust and insight in biological applications. Learning this helps understand how GASTON's neural network produces meaningful, interpretable spatial maps rather than black-box predictions.

*How the paper uses it:* GASTON uses an interpretable deep neural network to learn spatial gene expression patterns in an unsupervised manner.

▶ [Interpretable Deep Learning: More than just a pretty picture](https://www.youtube.com/watch?v=XiaTnSh4oAo) — Warwick SIAM-IMA Student Chapter · 37:54

### Piecewise linear function modeling *(prerequisite)*
Piecewise linear functions are mathematical models that represent data with multiple linear segments joined together, allowing modeling of both smooth trends and sharp changes. This concept is key to understanding how GASTON models gene expression as functions of the isodepth coordinate.

*How the paper uses it:* GASTON models gene expression as piecewise linear functions of the isodepth coordinate to capture continuous gradients and discontinuities.

▶ [Common Core Algebra I.Unit #11.Lesson #6.Piecewise Linear ...](https://www.youtube.com/watch?v=oiprTrYBh-w) — eMATHinstruction · 32:24

### Isodepth coordinate modeling
The isodepth coordinate is a novel concept introduced by GASTON, analogous to elevation on a geographic map, representing a scalar function that captures tissue topography and spatial gene expression patterns. Understanding isodepth is crucial to grasp how GASTON creates a global coordinate system to model complex spatial gene expression.

*How the paper uses it:* GASTON learns the isodepth coordinate to model spatial gene expression topography and identify spatial domains and gradients.

▶ [11. Spatial transcriptomics](https://www.youtube.com/watch?v=OFW_cQ4vtaY) — Chipster Tutorials · 7 years ago

## Already in your library

- [Machine Learning for Spatial and Network Biology – Uthsav ...](https://www.youtube.com/watch?v=2m5QhvwVMbM) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the GASTON paper. The beginner project reproduces a core concept of isodepth coordinate modeling on a small synthetic dataset, using your existing Python and ML skills. The intermediate project uses the authors' released GASTON code to analyze a public spatial transcriptomics dataset, comparing spatial domain identification against a simple baseline. The advanced project extends GASTON to address its limitation of modeling only a single conservative spatial gradient vector field by implementing a multi-directional gradient extension on a small dataset, showcasing your ability to innovate on the paper's core method.

### Beginner — Isodepth Coordinate Modeling on Synthetic Spatial Gene Data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simple 2D spatial gene expression dataset with known continuous gradients and sharp boundaries. Then you implement a piecewise linear function model of gene expression as a function of a learned scalar isodepth coordinate, inspired by GASTON's approach. You visualize the learned isodepth coordinate and gene expression gradients to reproduce a simplified version of the paper's topographic mapping concept.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of isodepth as a latent spatial coordinate capturing continuous and discontinuous gene expression patterns, and how piecewise linear functions model gene expression along it.

**Grounded in:** GASTON models the expression fg(x,y) of each gene g at spatial location x,y as a piecewise linear function of the isodepth d(x,y)... which describes both continuous gradients and sharp discontinuities in gene expression.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic 2D spatial gene expression data generated in the notebook to mimic continuous gradients and sharp boundaries.

**Build it:**

1. Generate a 2D grid of spatial coordinates and simulate gene expression for a few genes with known piecewise linear gradients and discontinuities.
2. Implement a simple model to learn a scalar isodepth coordinate for each spatial location by fitting piecewise linear functions to gene expression.
3. Visualize the learned isodepth coordinate as a topographic map and plot gene expression as functions of isodepth.
4. Compare the learned isodepth and gene expression patterns to the ground truth simulation.
5. Write a README explaining the connection to GASTON's isodepth concept.

**Ships as:** A Jupyter notebook with code, visualizations of isodepth and gene expression gradients, and a README linking the implementation to the paper's isodepth modeling.

**Stretch goal:** Add noise and sparsity to the synthetic data to test robustness of isodepth learning.

### Intermediate — Applying GASTON to Mouse Cortex Spatial Transcriptomics Data
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' GASTON code on the publicly available mouse cortex spatial transcriptomics dataset mentioned in the paper. You reproduce spatial domain identification and visualize isodepth maps and gene expression gradients. Then you implement a simple baseline clustering method (e.g., k-means on spatial coordinates) to identify spatial domains and compare spatial coherence metrics between GASTON and the baseline.

**Why it shows you understood the paper:** This project shows you can operate the authors' code, understand the core unsupervised learning of isodepth and spatial domains, and critically evaluate GASTON's performance against a baseline using spatial coherence metrics.

**Grounded in:** GASTON jointly learns the isodepth d and piecewise linear gene expression functions fg in a completely unsupervised manner using an interpretable deep learning model.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn, matplotlib

**Data:** Mouse cortex spatial transcriptomics dataset as used in the paper (publicly available; substitute if needed with 10x Genomics Visium mouse brain data).

**Build it:**

1. Clone the GASTON repository from https://github.com/raphael-group/GASTON and install dependencies.
2. Download the mouse cortex spatial transcriptomics dataset or a substitute public dataset.
3. Run the GASTON pipeline to learn isodepth coordinates, spatial domains, and gene expression functions.
4. Implement a simple baseline spatial clustering method (e.g., k-means on spatial coordinates).
5. Compute spatial coherence metrics for both GASTON and baseline domains.
6. Visualize and compare spatial domains, isodepth maps, and gene expression gradients.
7. Document the process, results, and interpretation in a README.

**Verified links from the paper:**

- <https://github.com/raphael-group/GASTON> — released by the paper's authors

**Ships as:** A GitHub repo with scripts/notebooks running GASTON on mouse cortex data, baseline comparison, visualizations, and a report README.

**Stretch goal:** Add analysis of spatially varying genes identified by GASTON and compare to baseline gene markers.

### Advanced — Extending GASTON to Model Multiple Spatial Gradient Directions
*Effort: 3+ weeks*

You develop an extension of GASTON that relaxes the assumption of a single conservative spatial gradient vector field by allowing multiple spatial gradient directions. You implement this extension in Python, adapting the original GASTON codebase. You test your method on a small spatial transcriptomics dataset with complex spatial patterns (e.g., simulated or a subset of real data) and compare the ability to capture multiple spatial gradients versus the original GASTON.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of GASTON's modeling assumptions and limitations, and your ability to innovate by addressing a key limitation identified by the authors, potentially enabling richer modeling of spatial gene expression patterns.

**Grounded in:** GASTON assumes all spatially varying genes share the same vector field of spatial gradients, limiting its ability to find multiple directions of spatial variation simultaneously.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, matplotlib

**Data:** A small spatial transcriptomics dataset with complex spatial gene expression patterns, either simulated or a subset of a public dataset.

**Build it:**

1. Study the GASTON codebase and understand how the single vector field of spatial gradients is modeled.
2. Design a model extension that allows multiple spatial gradient vector fields or a non-conservative vector field.
3. Implement the extended model, modifying the isodepth learning and gene expression function fitting accordingly.
4. Simulate or select a dataset with multiple spatial gradient directions.
5. Train and evaluate the extended model versus the original GASTON on this dataset.
6. Visualize learned multiple isodepth coordinates or vector fields and gene expression gradients.
7. Write a detailed README explaining the extension, implementation, results, and limitations.

**Verified links from the paper:**

- <https://github.com/raphael-group/GASTON> — released by the paper's authors

**Ships as:** A GitHub repository with the extended GASTON implementation, example dataset, evaluation scripts, visualizations, and a comprehensive README.

**Stretch goal:** Apply the extended model to a real tumor microenvironment dataset to explore complex spatial gradients.

_The mouse cortex dataset mentioned in the paper is not directly linked but is referenced; you may substitute with a publicly available spatial transcriptomics dataset such as 10x Genomics Visium mouse brain data for the intermediate and advanced projects._
