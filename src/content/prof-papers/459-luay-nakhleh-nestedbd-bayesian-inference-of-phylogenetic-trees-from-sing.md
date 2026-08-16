---
title: "459 · NestedBD: Bayesian inference of phylogenetic trees from single-cell copy number profiles under a birth-death model — Luay Nakhleh"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luay-nakhleh"
source_hash: "0bbbf158cf5716d5d0d9e8f9ebb9ef4bd668851da71b050996fea097a7fa31f1"
sequence: 459
generator: "outreach-garden: managed"
---

# 459 · NestedBD: Bayesian inference of phylogenetic trees from single-cell copy number profiles under a birth-death model

## At a glance

- **Professor:** Luay Nakhleh
- **Institution:** Rice University
- **Paper:** [NestedBD: Bayesian inference of phylogenetic trees from single-cell copy number profiles under a birth-death model](https://almob.biomedcentral.com/counter/pdf/10.1186/s13015-024-00264-4)
- **Authors:** Yushu Liu, Mohammadamin Edrisi, Zhi Yan, Huw A Ogilvie, Luay Nakhleh
- **Year:** 2024

## Paper overview

This paper introduces NestedBD, a Bayesian method that infers evolutionary trees and branch lengths from single-cell DNA sequencing data focusing on copy number aberrations (CNAs) in cancer. It models CNAs using a birth-death process and accounts for errors in copy number estimates. NestedBD outperforms existing methods in accuracy and provides insights into cancer evolution timing and mutation rates.

### Why it matters

**Research problem:** Inferring accurate evolutionary histories and copy number aberration profiles from single-cell DNA sequencing data is challenging due to complex CNA patterns, errors in data, and computational limitations of existing methods.

**Why it matters:** Understanding the evolutionary history of cancer cells at single-cell resolution can improve diagnosis, prognosis, and treatment strategies by revealing tumor heterogeneity and mutation timing, which are critical for adaptive therapies.

**Key contributions:**

- Development of a birth-death evolutionary model for CNAs in single-cell data.
- A Bayesian inference framework (NestedBD) that jointly infers phylogenetic trees with branch lengths and mutation rates.
- Implementation of NestedBD as a BEAST 2 package leveraging efficient MCMC algorithms.
- Demonstration that NestedBD outperforms maximum parsimony, neighbor-joining, and Lazac in simulated data.
- Application of NestedBD to colorectal cancer single-cell data revealing plausible evolutionary histories and mutation rate variations.

## About the professor

**Luay Nakhleh** — Professor of Computer Science and BioSciences, Computer Science, Rice University.

Research interests: Combinatorial optimization, statistical inference, and their applications to biological problems. Phylogenomics and population genomics. Evolution of biological networks (protein interaction networks and regulatory networks). Modeling and analysis of biological networks (metabolic and regulatory networks)

### Research links

- [Faculty/profile page](https://www.cs.rice.edu/~nakhleh)
- [Professor website](https://nakhleh.rice.edu)
- [Resolved homepage](https://nakhleh.rice.edu/#main-content)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian phylogenetics
**The paper assumes:** Bayesian inference, Markov chain Monte Carlo methods, phylogenetic tree models, birth-death processes in evolution
**Already in this field?** Skip this entirely if you already understand Bayesian methods for phylogenetic tree inference and MCMC algorithms in evolutionary biology.

This background focuses on Bayesian phylogenetics, essential for understanding the NestedBD method's Bayesian inference framework for phylogenetic tree estimation from single-cell copy number data. The rigorous course provides a deep, structured foundation in Bayesian statistics, including MCMC methods relevant to this paper, while the fast track offers a concise, practical introduction to Bayesian phylogenetic analysis using MrBayes, suitable for quickly grasping key concepts and workflows.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [S22 MATH 347 Bayesian Statistics](https://www.youtube.com/playlist?list=PL_lWxa4iVNt2GBPOVZMVKD4jYl9Q7hs2K) — Jingchen (Monika) Hu · 73 videos · 20.1h across the first 60 episodes

**Watch only this:** Episodes 1-22, about 7.3 hours — covering Bayesian inference basics, conjugate priors, Monte Carlo approximation, and MCMC including Gibbs sampling and diagnostics, which are critical to understanding NestedBD's statistical modeling and inference.

*Why it unblocks this paper:* This university-level Bayesian statistics course by Jingchen (Monika) Hu covers foundational Bayesian inference concepts, MCMC methods, and diagnostics that underpin the NestedBD Bayesian framework and its MCMC implementation in BEAST 2.

*If you want all of it:* About 20.1 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bayesian Inference (BI) analysis in MrBayes and Molecular (Multi-gene) Phylogenetic Tree Construction](https://www.youtube.com/playlist?list=PLDrBIFmYWtn4cjDTSbF8JPFqFiq05kT4Q) — Tepin's Lab · 7 videos · 0.8h across 7 episodes

**Watch only this:** Episodes 1-4, about 28 minutes — including requirements, sequence alignment, model selection, and running Bayesian inference, sufficient for a quick practical grasp of Bayesian phylogenetic analysis.

*Why it unblocks this paper:* This short playlist from Tepin's Lab provides a focused, practical introduction to Bayesian phylogenetic analysis using MrBayes, covering sequence preparation, model selection, and running Bayesian inference, directly relevant to the paper's Bayesian phylogenetics context.

*If you want all of it:* About 48 minutes across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NestedBD paper, start by building a strong foundation in Bayesian phylogenetic inference and Markov chain Monte Carlo (MCMC) methods, which underpin the statistical framework and computational approach of NestedBD. Next, gain familiarity with single-cell copy number variation as the biological data type modeled, and the birth-death process as the core evolutionary model for copy number changes. Finally, focus on the paper's core contribution by watching the authors' own talks on Bayesian phylogenetic and phylodynamic inference, which provide direct insight into the methodology and its application.

### Bayesian phylogenetic inference *(prerequisite)*
Bayesian phylogenetic inference is the fundamental statistical framework used in NestedBD to infer evolutionary trees and parameters from genomic data. Understanding this framework, including how posterior distributions over trees and parameters are computed, is essential to grasp how NestedBD performs joint inference of phylogenies and mutation rates.

*How the paper uses it:* NestedBD uses a Bayesian inference framework implemented via MCMC to jointly infer phylogenetic trees, branch lengths, and mutation rates.

▶ [Bayesian foundations of Phylogenetic and Phylodynamic inference (1 of 4)](https://www.youtube.com/watch?v=5_Dx3x9L6UU) — SIB - Swiss Institute of Bioinformatics · 1:16:03 · 3 years ago

### Markov chain Monte Carlo methods *(prerequisite)*
Markov chain Monte Carlo (MCMC) methods are computational algorithms used to sample from complex posterior distributions in Bayesian inference. Since NestedBD relies on MCMC for efficient exploration of the phylogenetic and parameter space, understanding MCMC principles and algorithms like Metropolis-Hastings is crucial.

*How the paper uses it:* NestedBD applies MCMC algorithms implemented in BEAST 2 for Bayesian inference of phylogenetic trees and evolutionary parameters.

▶ [Markov Chain Monte Carlo](https://www.youtube.com/watch?v=hn0Vfzcnmig) — VideoLecturesChannel · 1:19:04 · 13 years ago

### single-cell copy number variation *(prerequisite)*
Single-cell copy number variation (CNV) represents the biological data type that NestedBD models and analyzes. Understanding the nature of CNVs, their detection from single-cell sequencing, and their role in cancer evolution provides essential biological context for the paper's modeling and inference approach.

*How the paper uses it:* NestedBD infers phylogenetic trees from single-cell DNA sequencing data focusing on copy number aberrations in cancer.

▶ [IMS Medallion Lecture: "DNA Copy Number Profiling from Bulk Tissues to Single Cells", Nancy Zhang](https://www.youtube.com/watch?v=H0L1nXYUrxA) — Institute of Mathematical Statistics · 1:13:06 · 4 years ago

### birth-death process phylogenetics *(prerequisite)*
The birth-death process is the core evolutionary model used in NestedBD to represent copy number amplification and deletion events over time. Understanding this stochastic process and its application in phylogenetics is key to appreciating how NestedBD models CNA evolution.

*How the paper uses it:* NestedBD models copy number evolution using a continuous-time birth-death process to represent amplification and deletion events.

▶ [L25.10 Birth-Death Processes - Part I](https://www.youtube.com/watch?v=XKYpKYspe1w) — MIT OpenCourseWare · 8:56 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the NestedBD paper from a beginner to advanced perspective, start by learning the basics of single-cell copy number variation to grasp the biological data and variation modeled. Then, build foundational knowledge of phylogenetic tree inference from genomic data to understand the evolutionary context. Next, study Markov Chain Monte Carlo methods as the computational technique enabling Bayesian inference. Follow this with Bayesian phylogenetic inference to comprehend the statistical framework underlying NestedBD. Finally, focus on the birth-death process in phylogenetics, the core modeling approach for copy number evolution in the paper.

### single-cell copy number variation *(prerequisite)*
Learn what copy number variations (CNVs) are, how they arise in genomes, and why single-cell resolution is important for understanding tumor heterogeneity and evolution. This biological background helps you appreciate the data type NestedBD analyzes.

*How the paper uses it:* NestedBD models evolutionary histories from single-cell copy number profiles, making understanding CNVs essential.

▶ [Impact of copy number variations in genome organization, evolution and diseases](https://www.youtube.com/watch?v=scdd1wiRVb4) — Indian Academy of Sciences · 18:29 · 7 years ago

### phylogenetic tree inference from genomic data *(prerequisite)*
Understand how evolutionary trees represent relationships among cells or species based on genomic data, and the general methods used to reconstruct these trees. This sets the stage for NestedBD's goal of inferring cancer cell phylogenies.

*How the paper uses it:* NestedBD infers phylogenetic trees from single-cell copy number data to reveal cancer evolution.

▶ [Phylogenetic tree](https://www.youtube.com/watch?v=JRh0BbsYJmQ) — Shomu's Biology · 13:12 · 11 years ago

### Markov chain Monte Carlo methods *(prerequisite)*
Markov Chain Monte Carlo (MCMC) is a computational technique to sample from complex probability distributions, enabling Bayesian inference when direct calculation is impossible. Grasping MCMC helps understand how NestedBD explores possible evolutionary trees and parameters.

*How the paper uses it:* NestedBD uses MCMC algorithms to perform Bayesian inference of phylogenetic trees and mutation rates.

▶ [A Beginner's Guide to Monte Carlo Markov Chain MCMC Analysis 2016](https://www.youtube.com/watch?v=vTUwEu53uzs) — Sagan Summer Workshop · 44:03 · 10 years ago

### Bayesian phylogenetic inference *(prerequisite)*
Bayesian phylogenetic inference combines prior knowledge with observed data to estimate evolutionary trees and parameters probabilistically. This framework underpins NestedBD's approach to jointly infer trees, branch lengths, and mutation rates.

*How the paper uses it:* NestedBD applies a Bayesian framework implemented in BEAST 2 to infer phylogenies from copy number data.

▶ [Bayesian foundations of Phylogenetic and Phylodynamic inference (1 of 4)](https://www.youtube.com/watch?v=5_Dx3x9L6UU) — SIB - Swiss Institute of Bioinformatics · 1:16:03 · 3 years ago

### birth-death process phylogenetics
The birth-death process models the stochastic events of lineage birth (amplification) and death (deletion) over time, capturing evolutionary dynamics. Understanding this process clarifies how NestedBD models copy number aberrations as evolutionary events.

*How the paper uses it:* NestedBD models copy number amplification and deletion using a continuous-time birth-death process to represent CNA evolution.

▶ [L25.10 Birth-Death Processes - Part I](https://www.youtube.com/watch?v=XKYpKYspe1w) — MIT OpenCourseWare · 8:56 · 8 years ago

## Already in your library

- [1. Phylogenetic analysis of pathogens(lecture - part1) -](https://www.youtube.com/watch?v=t1vAhQvukRY) — also for: High-throughput targeted amplicon screening tool for characterizing intrahost diversity in Staphylococcus aureus directly from sample (Viacheslav Fofanov)
- [Introduction to Bayesian statistics, part 1: The basic concepts](https://www.youtube.com/watch?v=0F0QoMCSKJ4) — also for: Bayesian functional data analysis in astronomy (Tamás Budavári)
- [Intro to Cladograms and Phylogenetic Trees](https://www.youtube.com/watch?v=cIQobFHFwcM) — also for: Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness (David Fernández-Baca)
- [Markov Chain Monte Carlo Explained in 10 Minutes](https://www.youtube.com/watch?v=3qodjHRUxAo) — also for: Taming Imperfect Process Verifiers: A Sampling Perspective on Backtracking (Ankur Moitra)
- [Creating a Phylogenetic Tree](https://www.youtube.com/watch?v=09eD4A_HxVQ) — also for: Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness (David Fernández-Baca)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of NestedBD's Bayesian inference of phylogenetic trees from single-cell copy number profiles. Starting with a beginner project that reproduces a key concept visualization, progressing to an intermediate reimplementation of the core birth-death model and Bayesian inference on simulated data, and culminating in an advanced project that extends the method to address a stated limitation by modeling bin dependencies for improved inference accuracy.

### Beginner — Visualize Birth-Death Process for Copy Number Evolution
*Effort: a weekend, ~8 hours*

You build a small interactive visualization that simulates copy number changes over time using a birth-death process as described in NestedBD. The visualization will show amplification and deletion events on a single genomic bin across a lineage, illustrating how copy number states evolve under the model.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental birth-death model for CNAs central to NestedBD, including how copy number states change probabilistically over evolutionary time.

**Grounded in:** NestedBD models copy number evolution using a birth-death process.

**Tech stack:** JavaScript, React

**Data:** Synthetic data generated by simulating the birth-death process for a single genomic bin.

**Build it:**

1. Implement a simple birth-death process simulator for copy number states of one genomic bin over time.
2. Create a React component to visualize the copy number state changes as a timeline or tree branch.
3. Add controls to adjust birth and death rates and observe their effects on copy number evolution.
4. Document the biological interpretation of the model parameters and visualization.

**Ships as:** A GitHub repo with a React app that interactively visualizes birth-death copy number evolution for a single bin, with README explaining the model and its biological relevance.

**Stretch goal:** Extend the visualization to multiple independent bins and show joint copy number profiles evolving.

### Intermediate — Reimplement NestedBD Birth-Death Bayesian Inference on Simulated Data
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of NestedBD's Bayesian inference framework to jointly infer phylogenetic trees and copy number profiles from simulated single-cell CNA data. You simulate copy number profiles under a birth-death process, then use MCMC to infer tree topology and branch lengths, comparing your results to a simple baseline like neighbor-joining.

**Why it shows you understood the paper:** This project shows you can translate the core NestedBD method from the paper into code, including the birth-death model, Bayesian MCMC inference, and evaluation of tree accuracy, demonstrating grasp of the paper's main contribution.

**Grounded in:** Development of a birth-death evolutionary model for CNAs in single-cell data and a Bayesian inference framework (NestedBD) that jointly infers phylogenetic trees with branch lengths and mutation rates.

**Tech stack:** Python 3.11, NumPy, SciPy, PyMC or custom MCMC implementation

**Data:** Simulated single-cell copy number profiles generated by your birth-death process simulator for multiple cells and bins.

**Build it:**

1. Write a simulator to generate single-cell copy number profiles under a birth-death model for multiple genomic bins and cells.
2. Implement a Bayesian model that represents the birth-death process and tree topology with branch lengths.
3. Use MCMC sampling to jointly infer the phylogenetic tree and corrected copy number profiles from simulated noisy data.
4. Implement a simple baseline method like neighbor-joining on the simulated data for comparison.
5. Evaluate and visualize the accuracy of inferred trees and copy number corrections compared to ground truth.

**Ships as:** A Python repo with scripts to simulate data, run Bayesian inference, compare to baseline, and visualize results, plus a README explaining the implementation and evaluation.

**Stretch goal:** Incorporate error modeling of copy number estimates as NestedBD does to improve inference accuracy.

### Advanced — Model Bin Dependencies in Bayesian Copy Number Phylogenetics
*Effort: 3-4 weeks*

You extend the NestedBD model by incorporating dependencies among genomic bins into the birth-death Bayesian inference framework. This addresses the paper's limitation that assumes bin independence. You develop a probabilistic model capturing correlations between bins and implement scalable inference on simulated or small real single-cell CNA datasets.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the model assumptions and the computational challenges of scaling Bayesian phylogenetics with dependent genomic data.

**Grounded in:** Limitations: Assumes independence among genomic bins, which is violated in real data but shown to have limited impact on inference quality. Future directions: Integration of bin-dependency models to refine inference accuracy.

**Tech stack:** Python 3.11, PyMC or Stan, NumPy, SciPy, JAX or PyTorch for scalable inference

**Data:** Simulated single-cell copy number profiles with correlated bin events, or small publicly available single-cell CNA datasets as substitutes.

**Build it:**

1. Review the NestedBD birth-death model and its independence assumption among bins.
2. Design a probabilistic model that introduces dependencies between bins, e.g., via a hierarchical or Markov model.
3. Implement the extended Bayesian inference framework incorporating bin dependencies.
4. Develop or adapt scalable MCMC or variational inference algorithms to handle the increased complexity.
5. Test the model on simulated data with known bin correlations and evaluate improvements in tree and copy number inference accuracy.
6. Document the model, inference approach, and results in detail.

**Ships as:** A research-grade codebase implementing the extended model, with experiments demonstrating the impact of modeling bin dependencies, and a comprehensive README or report discussing methodology and findings.

**Stretch goal:** Apply the extended model to a real colorectal cancer single-cell CNA dataset to explore biological insights.
