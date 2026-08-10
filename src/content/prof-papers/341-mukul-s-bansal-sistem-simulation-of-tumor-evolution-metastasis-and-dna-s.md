---
title: "341 · SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection — Mukul S. Bansal"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mukul-s-bansal"
source_hash: "8d9bd44398d785d92f8299688a1593e1a3b2d4264d2163b43b3852b3fb2f98cf"
sequence: 341
generator: "outreach-garden: managed"
---

# 341 · SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection

## At a glance

- **Professor:** Mukul S. Bansal
- **Institution:** University of Connecticut
- **Paper:** [SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection](https://doi.org/10.1093/bioinformatics/btaf634)
- **Authors:** Samson Weiner, Mukul S. Bansal
- **Year:** 2025

## Paper overview

SISTEM is a new software tool that simulates how tumors grow, evolve, and spread to other parts of the body, while also generating realistic DNA sequencing data. It uses an agent-based model to capture how genetic mutations and natural selection shape tumor cell populations and their migration patterns, improving on previous simulation methods.

### Why it matters

**Research problem:** Existing tumor evolution simulators often fail to realistically model the effects of natural selection and complex migration patterns in metastatic cancers, limiting their usefulness for studying tumor progression and benchmarking computational methods.

**Why it matters:** Understanding tumor evolution and metastasis is crucial for cancer research and treatment development. Realistic simulations are essential for benchmarking analytical tools and for studying selective forces in cancer, but current simulators lack biological realism, especially in modeling selection and migration.

**Key contributions:**

- Development of an agent-based simulation framework modeling tumor growth under tissue-specific selection landscapes.
- Introduction of a novel migration model simulating metastatic cancer spread with organotropism and genotype-dependent migration rates.
- Implementation of a diverse mutation model including SNVs and four distinct copy number aberration mechanisms.
- Capability to generate synthetic data at multiple stages of DNA sequencing analysis pipelines, including raw sequencing reads.
- Optimization for scalability by simulating at the clonal level and reconstructing single-cell lineages post-simulation.

## About the professor

**Mukul S. Bansal** — University of Connecticut.

### Research links

- [Faculty/profile page](https://engineering.uconn.edu/faculty/cse/mukul-bansal)
- [Identity evidence](http://www.engr.uconn.edu/~mukul)
- [Identity evidence](https://engineering.uconn.edu/faculty/cse/mukul-bansal/)
- [Identity evidence](https://mukul-bansal.uconn.edu/)
- [Identity evidence](https://mukul-bansal.uconn.edu/wp-content/uploads/sites/2586/2018/12/Bansal_CV.pdf)
- [Identity evidence](https://compbio.engr.uconn.edu/publications/)
- [Identity evidence](https://compbio.engr.uconn.edu/people/bansal)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** agent-based modeling in computational biology
**The paper assumes:** agent-based modeling, computational modeling of biological systems, tumor evolution simulation
**Already in this field?** Skip this entirely if you already understand agent-based modeling approaches applied to biological and evolutionary systems.

To understand the core simulation framework of SISTEM, which relies on agent-based modeling (ABM) to simulate tumor evolution, metastasis, and genotype-driven selection, it is essential to grasp the principles of ABM in computational biology. The rigorous course option provides a structured, in-depth university-level introduction to ABM concepts and estimation methods, while the fast track offers a concise, intuition-focused series on ABM fundamentals suitable for quickly gaining practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Agent-Based Models in Economics](https://www.youtube.com/playlist?list=PLhYWrjQSgW9nzeXk8iRQ-WqoDPqYVej-K) — CCSS School on Computational Social Science · 7 videos · 4.2h across 7 episodes

**Watch only this:** Episodes 1-4: 'Introduction to ABM/Corrado DI GUILMI', 'Agent Based Model on Actual Supply-chain Network/Hiroyasu INOUE', 'Deep Neural Networks in an ABM Virtual Experiment/David GOLDBAUM', and 'Approximate Bayesian Inference for Agent-Based Models in Economics: A Case Study/Thomas LUX', totaling about 2.3 hours — these cover the basics of ABM, practical applications, and inference methods essential for grasping the simulation and parameter estimation aspects of SISTEM.

*Why it unblocks this paper:* This university-level playlist from CCSS School on Computational Social Science covers foundational and advanced topics in agent-based modeling, including model introduction, experiments, and inference approaches, which are directly relevant to understanding the agent-based simulation framework used in SISTEM.

*If you want all of it:* All 7 episodes, about 4.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Agent-based modeling - All you wanted to know](https://www.youtube.com/playlist?list=PLsv8cj_Tu8Ks_JKH9ZshfA6C6DO3MAG_q) — Social Complexity / Computational Social Science · 11 videos · 1.9h across 11 episodes

**Watch only this:** Episodes 1-5: 'Agent Based Modelling - Simply explained', 'Why Agent-Based models are Social Sciences' future🟩', 'Social influence is a real phenomenon (and anti-vaxxers learned how to use it)', '🟩This videogame is about Game Theory and Agent-based Modeling!🟩', and 'Why are minorities segregated? - A simulation', totaling about 50 minutes — these episodes cover fundamental ABM concepts and examples that build intuition for the agent-based simulation in SISTEM.

*Why it unblocks this paper:* This short-form playlist by Social Complexity / Computational Social Science offers clear, concise explainers on agent-based modeling concepts, social influence, and modeling complex systems, providing an accessible and intuition-driven introduction to ABM relevant for understanding SISTEM's modeling approach.

*If you want all of it:* All 11 episodes, about 1.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SISTEM paper, start with foundational concepts in population genetics and natural selection in cancer to grasp genotype-driven selection shaping tumor evolution. Next, study cancer metastasis and migration models to appreciate the novel migration modeling in SISTEM. Then, explore agent-based tumor evolution modeling to understand the simulation framework underlying SISTEM. Finally, focus on the core concept of SISTEM tumor evolution simulation, prioritizing the authors' own or closely related academic talks to directly connect with the paper's contributions.

### population genetics natural selection cancer *(prerequisite)*
This section covers how natural selection and population genetics principles apply to cancer evolution, providing a theoretical foundation for understanding genotype-driven selection in tumor cell populations. It is essential to grasp these evolutionary forces to appreciate the selective dynamics modeled in SISTEM.

*How the paper uses it:* SISTEM simulates tumor growth under genotype-driven selection, making understanding natural selection in cancer critical.

▶ [NHGRI DIR Seminar Series - Rasmus Nielsen](https://www.youtube.com/watch?v=AHzz2Hqkvr8) — National Human Genome Research Institute · 56:53

### cancer metastasis migration models *(prerequisite)*
Understanding metastatic spread and organotropism in cancer is crucial to appreciate SISTEM's novel migration model that simulates metastatic cancer spread with genotype-dependent migration rates. This section provides biological and modeling context for the migration patterns incorporated in SISTEM.

*How the paper uses it:* SISTEM introduces a novel migration model simulating metastatic cancer spread with organotropism and genotype-dependent migration rates.

▶ [Mohammed El Kebir | Inferring Parsimonious Migration ...](https://www.youtube.com/watch?v=-cVU4rVrW34) — Computational Genomics Summer Institute CGSI · 31:01

### agent based tumor evolution modeling
This section delves into agent-based modeling approaches for tumor evolution, which is the core simulation framework used by SISTEM. Understanding how tumor clones are modeled as agents that proliferate, mutate, and migrate will clarify SISTEM's design and scalability.

*How the paper uses it:* SISTEM uses an agent-based model to simulate tumor clones as individual agents proliferating, mutating, and migrating.

▶ [Dominik Wodarz - Evolution in Spatially Structured Tumors, Pt ...](https://www.youtube.com/watch?v=YxxUOyuez3Y) — Institute for Pure & Applied Mathematics (IPAM) · 38:23

### SISTEM tumor evolution simulation talk *(the paper's own talk)*
This section focuses on talks directly related to the SISTEM tool or closely aligned tumor evolution simulation frameworks by the authors or in academic settings. These provide the most direct insight into SISTEM's methodology, contributions, and applications.

*How the paper uses it:* This is the authors' own or closely related academic presentation on SISTEM and tumor evolution simulation.

▶ [Layla Oesper | Computational Approaches for Tumor Evolution Inference and Analysis | CGSI 2019](https://www.youtube.com/watch?v=iJ6bDMqKn00) — Computational Genomics Summer Institute CGSI · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the SISTEM tumor evolution simulation paper, starting with population genetics and natural selection as they apply to cancer. Next, it covers cancer metastasis and migration models to grasp how tumors spread, followed by DNA sequencing data simulation to appreciate synthetic data generation. Finally, it explains agent-based tumor evolution modeling, culminating in the core concept of the SISTEM tumor evolution simulation framework itself.

### population genetics natural selection cancer *(prerequisite)*
Learn how genetic mutations and natural selection shape populations, focusing on how these evolutionary forces operate in cancer cells. This foundation helps understand how tumors evolve genetically over time under selective pressures.

*How the paper uses it:* SISTEM simulates tumor cell populations evolving under genotype-driven natural selection.

▶ [Natural Selection](https://www.youtube.com/watch?v=7VM9YxmULuo) — Amoeba Sisters · 7:23

### cancer metastasis migration models *(prerequisite)*
Understand the biological and computational models describing how cancer cells migrate from primary tumors to other organs, including concepts like organotropism (preference for specific organs). This is crucial for modeling metastatic spread realistically.

*How the paper uses it:* SISTEM incorporates a novel migration model simulating metastatic cancer spread with organotropism and genotype-dependent migration rates.

▶ [How does cancer spread through the body? - Ivan Seah Yu Jun](https://www.youtube.com/watch?v=OcigJn8UJNQ) — TED-Ed · 11 years ago

### DNA sequencing data simulation cancer *(prerequisite)*
Explore how synthetic DNA sequencing data is generated to mimic real experimental outputs, which is essential for benchmarking computational tools analyzing tumor genomics. This includes understanding sequencing reads and mutation profiles.

*How the paper uses it:* SISTEM generates synthetic DNA sequencing data including raw single-cell DNA-seq reads for benchmarking.

▶ [NGS Explained: Next Generation Sequencing Step-by-Step](https://www.youtube.com/watch?v=WKAUtJQ69n8) — ClevaLab · 7:35

### agent based tumor evolution modeling
Learn about agent-based models that simulate individual tumor clones as agents that proliferate, mutate, and migrate, capturing complex evolutionary dynamics within tumors. This modeling approach underpins SISTEM's simulation framework.

*How the paper uses it:* SISTEM uses an agent-based model to simulate tumor clones evolving under genotype-driven selection and migration.

▶ [Dominik Wodarz - Evolution in Spatially Structured Tumors, Pt ...](https://www.youtube.com/watch?v=YxxUOyuez3Y) — Institute for Pure & Applied Mathematics (IPAM) · 38:23

### SISTEM tumor evolution simulation talk *(the paper's own talk)*
Watch a focused presentation on the SISTEM software tool itself, covering its design, capabilities, and applications in simulating tumor evolution, metastasis, and DNA sequencing data generation.

*How the paper uses it:* This talk directly presents the SISTEM framework and its contributions as described in the paper.

▶ [Utility of Research Autopsies for Understanding the Dynamics ...](https://www.youtube.com/watch?v=6V9WS-qmjOk) — Institute for Advanced Study · 32:59


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of SISTEM, a tumor evolution and metastasis simulation framework. The beginner project recreates a core simulation mechanism on a small scale using your existing Python skills. The intermediate project builds on the authors' open-source SISTEM code to run and analyze simulations, comparing migration patterns. The advanced project extends SISTEM by incorporating a new biological complexity, addressing a stated limitation and future direction of the paper.

### Beginner — Small-Scale Agent-Based Tumor Clone Simulation
*Effort: a weekend, ~8 hours*

You build a simplified agent-based tumor clone simulator in Python that models clone proliferation, mutation, and genotype-driven selection over discrete generations in a single anatomical site. The simulation will track clone population sizes and mutation accumulation over time, producing summary statistics similar to those in SISTEM's core model.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental agent-based modeling approach of SISTEM, including how tumor clones evolve under selection and mutation dynamics, which is central to the paper's contribution.

**Grounded in:** SISTEM uses an agent-based model to simulate tumor growth under genotype-driven selection.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic data generated by your own simulation code representing tumor clone populations over time.

**Build it:**

1. Implement a Python class to represent tumor clones with attributes for genotype and population size.
2. Model clone proliferation with logistic growth and mutation events introducing new genotypes.
3. Incorporate genotype-driven selection by assigning fitness values affecting proliferation rates.
4. Simulate discrete generations and track clone populations and mutation counts over time.
5. Visualize clone population dynamics and mutation accumulation using matplotlib.

**Ships as:** A Python script and Jupyter notebook showing simulation code, plots of clone population trajectories, and mutation accumulation demonstrating agent-based tumor evolution.

**Stretch goal:** Add a simple migration mechanism allowing clones to move between two simulated anatomical sites with different selection landscapes.

### Intermediate — Running and Analyzing SISTEM Simulations with Migration Models
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' SISTEM Python codebase to simulate tumor evolution across multiple anatomical sites with genotype-dependent migration. You analyze simulation outputs to reproduce migration pattern metrics and compare them against a baseline model with uniform migration rates.

**Why it shows you understood the paper:** This project shows you can operate the full SISTEM framework, understand its novel migration model with organotropism, and critically evaluate simulation results, demonstrating comprehension of a key paper contribution.

**Grounded in:** Introduction of a novel migration model simulating metastatic cancer spread with organotropism and genotype-dependent migration rates.

**Tech stack:** Python 3.11, pandas, matplotlib, Git

**Data:** Synthetic tumor evolution data generated by SISTEM simulations using the authors' code at https://github.com/samsonweiner/sistem.

**Build it:**

1. Clone the SISTEM repository from https://github.com/samsonweiner/sistem and install dependencies.
2. Run example simulations with multiple anatomical sites and migration enabled.
3. Extract and parse simulation output files containing clone migration and mutation data.
4. Implement scripts to compute migration pattern metrics such as migration rates and organotropism indices.
5. Compare these metrics to a baseline simulation where migration rates are uniform and not genotype-dependent.
6. Visualize and document differences in migration patterns between models.

**Verified links from the paper:**

- <https://github.com/samsonweiner/sistem> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run SISTEM simulations, analyze migration outputs, and a report with plots comparing migration models.

**Stretch goal:** Parameterize mutation and migration rates from a public cancer genomic dataset to generate subtype-specific simulations.

### Advanced — Extending SISTEM to Model Tumor Microenvironment Effects
*Effort: 3+ weeks*

You extend the SISTEM framework by incorporating a simplified tumor microenvironment factor that modulates clone fitness based on local environmental variables (e.g., nutrient availability or immune pressure). You implement this as a spatial or site-specific modifier to selection coefficients and demonstrate its impact on tumor evolution and metastasis patterns.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of SISTEM by adding biological realism through microenvironment modeling, showing deep comprehension of the paper and ability to extend its core methods.

**Grounded in:** Limitations include simplified growth assumptions and lack of tumor microenvironment modeling. Future work includes incorporation of additional biological complexities like tumor microenvironment factors.

**Tech stack:** Python 3.11, numpy, matplotlib, Git, pytest

**Data:** Synthetic simulation data generated by your extended SISTEM code incorporating microenvironment effects.

**Build it:**

1. Fork and clone the SISTEM repository and set up the development environment.
2. Design a simple model for tumor microenvironment influence, e.g., spatially varying fitness modifiers or site-specific environmental states.
3. Modify the clone proliferation and selection functions in SISTEM to incorporate microenvironment effects.
4. Run simulations comparing tumor evolution with and without microenvironment factors across multiple anatomical sites.
5. Analyze and visualize differences in clone diversity, migration patterns, and mutation accumulation.
6. Write tests to validate your code changes and document the extension in the README.

**Verified links from the paper:**

- <https://github.com/samsonweiner/sistem> — released by the paper's authors

**Ships as:** A GitHub repository with your SISTEM extension code, simulation results demonstrating microenvironment impact, and documentation explaining your model and findings.

**Stretch goal:** Incorporate treatment response dynamics or mutation interactions as additional biological complexities.
