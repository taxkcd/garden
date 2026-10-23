---
title: "937 · Filtering of MS/MS data for peptide identification — Patrick H. Madden"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-patrick-h-madden"
source_hash: "caee29b0ce20b2a5490959a732c1e15c0b1f739ef1fb2b9a49250fbfc5f3e069"
sequence: 937
generator: "outreach-garden: managed"
---

# 937 · Filtering of MS/MS data for peptide identification

## At a glance

- **Professor:** Patrick H. Madden
- **Institution:** Binghamton University
- **Paper:** [Filtering of MS/MS data for peptide identification](https://bmcgenomics.biomedcentral.com/counter/pdf/10.1186/1471-2164-14-S7-S2)
- **Authors:** Jason Gallia, Katelyn Lavrich, Anna Tan-Wilson, Patrick H Madden
- **Year:** 2013

## Paper overview

This paper presents a new method to filter noise from tandem mass spectrometry (MS/MS) data to improve peptide identification. The method uses orthogonal polynomials to model noise levels across different regions of the spectrum, allowing for adaptive filtering that preserves important signal peaks while removing background noise. Experiments show this approach retains more significant peaks and improves the accuracy of peptide sequencing compared to previous methods.

### Why it matters

**Research problem:** Automated analysis of large numbers of MS/MS spectra for protein identification is challenging due to difficulty in distinguishing low-intensity signal peaks from background noise, which affects the accuracy of peptide sequencing.

**Why it matters:** Accurate identification of peptides and proteins is critical for understanding cellular processes and disease mechanisms. Improving noise filtering in MS/MS data enhances the reliability of peptide identification, which is foundational for proteomics research.

**Key contributions:**

- Introduction of an orthogonal polynomial-based noise filtering method for MS/MS spectra.
- Adaptive noise level estimation across spectrum bins to avoid abrupt filtering discontinuities.
- Comprehensive evaluation on multiple datasets including published and in-house spectra.
- Demonstration that the method preserves more primary and secondary ion peaks than prior methods.
- Improved accuracy in peptide sequence identification using the new filtering approach.

## About the professor

**Patrick H. Madden** — Associate Professor, School of Computing, Binghamton University.

Research interests: optimization for NP-Hard problems, problems relevant to VLSI CAD, cryptography, biology-related topics

### Research links

- [Faculty/profile page](http://www.cs.binghamton.edu/~pmadden)
- [Lab website](https://www.cs.binghamton.edu/~pmadden/optiweb/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** orthogonal polynomials and spectral noise filtering
**The paper assumes:** orthogonal polynomials, polynomial approximation methods, spectral noise filtering techniques, signal processing for mass spectrometry
**Already in this field?** Skip this entirely if you already understand polynomial approximation methods and their application in spectral noise filtering within signal processing.

To understand the core method of this paper, which uses orthogonal polynomials for adaptive noise filtering in MS/MS spectra, foundational knowledge in linear algebra and signal processing is essential. The rigorous option provides a deep mathematical grounding in linear algebra concepts like orthogonality and projections, which underpin polynomial approximations, while the fast track offers a concise introduction to signal processing concepts relevant to spectral noise filtering. Choose the rigorous course for a thorough theoretical background or the fast track for a quicker, intuition-focused overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Signal Processing](https://www.youtube.com/playlist?list=PLFtB4YNjEY6IzIH-Fiifi80XzMgFjzFfF) — Shadman Eshraq · 11 videos · 3.3h across 11 episodes

**Watch only this:** Episodes 3 (RC Low Pass Filter Explained), 8 (Intuitive Understanding of the Fourier Transform and FFTs), and 9 (The Fourier Transform in 15 Minutes), about 50 minutes total — these cover filtering basics and frequency domain concepts important for understanding noise filtering.

*Why it unblocks this paper:* This Signal Processing playlist provides concise, visual explanations of key concepts like filtering, Fourier transforms, and noise, which help build intuition about spectral noise filtering and signal preservation relevant to the paper's method.

*If you want all of it:* 3.3 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on adaptive noise filtering for MS/MS data using orthogonal polynomials, start by building foundational knowledge on tandem mass spectrometry data analysis and peptide sequencing algorithms, as these provide the biological and computational context. Next, study signal processing concepts related to noise estimation to grasp the challenges in distinguishing signal from noise. Finally, focus on the core concept of orthogonal polynomial noise filtering, including the authors' own talk if available, to understand the novel method introduced in the paper.

### tandem mass spectrometry data analysis *(prerequisite)*
This section covers the principles and challenges of tandem mass spectrometry (MS/MS) data acquisition and analysis, which is essential to appreciate the nature of the data the paper aims to filter. Understanding MS/MS instrumentation, fragmentation methods, and data types provides the biological and technical context for the filtering problem.

*How the paper uses it:* The paper focuses on filtering noise in MS/MS spectra to improve peptide identification accuracy.

▶ [CMFI Mass Spec Seminar #3 - HPLC-MS and Tandem Mass Spectrometry](https://www.youtube.com/watch?v=SS2LXVplM4M) — Functional Metabolomics Lab · 1:01:31 · 4y ago

### peptide sequencing algorithms *(prerequisite)*
Peptide sequencing algorithms interpret MS/MS spectra to determine amino acid sequences. Understanding these algorithms is crucial because the paper's filtering method aims to improve the accuracy of peptide sequencing by enhancing signal quality.

*How the paper uses it:* The filtering method improves De Novo peptide sequencing accuracy, which depends on robust sequencing algorithms.

▶ [De novo mass spectrometry peptide sequencing with... - Melih Yilmaz - CompMS - Abstract - ISMB 2022](https://www.youtube.com/watch?v=DvLuXqubEPI) — ISCB · 13:14 · 3y ago

### signal processing noise estimation *(prerequisite)*
Adaptive noise estimation techniques in signal processing help distinguish meaningful signals from background noise. This knowledge is key to understanding how the paper models noise levels across MS/MS spectra for effective filtering.

*How the paper uses it:* The paper uses adaptive noise level estimation to distinguish signal peaks from background noise in MS/MS spectra.

▶ [Rad229 (2020) Lecture-07A: Single-Channel Noise and SNR Measurement](https://www.youtube.com/watch?v=s1OvuXJEXbY) — Stanford-RAD229 · 15:04 · 6y ago

### orthogonal polynomial noise filtering
Orthogonal polynomials are used in the paper to model noise intensity across different spectral bins smoothly and adaptively. Learning about orthogonal polynomials and their properties provides insight into the mathematical foundation of the novel filtering method.

*How the paper uses it:* The core contribution of the paper is an orthogonal polynomial-based noise filtering method for MS/MS spectra.

▶ [Lec 42 Orthogonal polynomials of RB Bhat.](https://www.youtube.com/watch?v=9o0uH7CgL5E) — NPTEL - Indian Institute of Science, Bengaluru · 32:23 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on adaptive noise filtering for MS/MS data, start by learning the basics of tandem mass spectrometry and the challenges in analyzing its data. Next, grasp how peptide sequencing algorithms work, since filtering improves their accuracy. Then, build intuition on signal processing noise estimation, which underpins noise filtering methods. Finally, focus on the core concept of orthogonal polynomial noise filtering, the novel approach introduced in the paper.

### tandem mass spectrometry data analysis *(prerequisite)*
Tandem mass spectrometry (MS/MS) is a technique that breaks molecules into fragments and measures their mass-to-charge ratios to identify molecular structures. Understanding how MS/MS data is generated and its inherent noise and complexity is essential for appreciating why filtering is needed.

*How the paper uses it:* The paper addresses noise filtering in MS/MS spectra to improve peptide identification accuracy.

▶ [MS/MS - an overview of tandem mass spectrometry methods and approaches. Corey Broeckling CSU ARC](https://www.youtube.com/watch?v=Ry5vguWhPcw) — Analytical Resources Core at CSU · 1:01:04 · 1y ago

### peptide sequencing algorithms *(prerequisite)*
Peptide sequencing algorithms interpret MS/MS data to determine the amino acid sequence of peptides. Knowing how these algorithms work helps understand why preserving signal peaks during filtering is critical for accurate peptide identification.

*How the paper uses it:* Filtering improves the accuracy of peptide sequencing algorithms used in the paper's evaluation.

▶ [Introduction to Peptide Sequencing](https://www.youtube.com/watch?v=mcNahRQbKSs) — Dr. Richard Musgrave · 5:23 · 9y ago

### signal processing noise estimation *(prerequisite)*
Signal processing noise estimation involves measuring and modeling background noise to distinguish it from meaningful signals. This concept is fundamental to adaptive filtering methods that aim to remove noise without losing important data.

*How the paper uses it:* The paper's method adaptively estimates noise levels across spectrum bins to filter MS/MS data effectively.

▶ [What is Signal to Noise Ratio and How to Calculate it?](https://www.youtube.com/watch?v=h5UmeZsXdi8) — Pharma Growth Hub · 6:24 · 4y ago

### orthogonal polynomial noise filtering
Orthogonal polynomials are mathematical functions used to model complex data patterns. In this paper, they are used to fit local regions of the MS/MS spectrum to estimate noise levels smoothly and adaptively, enabling better noise filtering while preserving signal peaks.

*How the paper uses it:* The core contribution of the paper is the novel use of orthogonal polynomial-based adaptive noise filtering for MS/MS spectra.

▶ [Orthogonal Polynomials: An Introduction](https://www.youtube.com/watch?v=F75550U4bAE) — Mike, the Mathematician · 7:36 · 2y ago

## Already in your library

- [\[Colloquium\] Statistics in Tandem Mass Spectrometry Data Analysis, by Attila Kertesz-Farkas](https://www.youtube.com/watch?v=SupdYLftAGM) — also for: HypoRiPPAtlas as an Atlas of hypothetical natural products for mass spectrometry database search (Hosein Mohimani)
- [Mass Spectrometry explained – how it works](https://www.youtube.com/watch?v=6O_85tKfZHc) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the orthogonal polynomial-based noise filtering method for MS/MS data presented in the paper. Starting with a basic implementation of local binning and polynomial fitting on synthetic MS/MS-like data, you then reimplement the core filtering method and compare it to a simple baseline on a public or simulated dataset. Finally, you extend the method by automating parameter tuning to address a key limitation noted by the authors, showing how adaptive filtering can be optimized for diverse spectra.

### Beginner — Orthogonal Polynomial Noise Estimation on Synthetic MS/MS Spectrum
*Effort: a weekend, ~8 hours*

You build a script that divides a synthetic MS/MS-like spectrum into bins and fits orthogonal polynomials to model noise levels in each bin. The script will visualize the original spectrum, the fitted polynomial noise model, and highlight peaks above a noise threshold.

**Why it shows you understood the paper:** This project shows you understand the core concept of local noise modeling using orthogonal polynomials and how adaptive noise estimation can preserve signal peaks in MS/MS spectra.

**Grounded in:** The focus of this paper is on a new method to filter noise across an entire spectrum by modeling peak intensity using orthogonal polynomials... We designate different regions of each spectrum, giving the user a choice of how many such regions (bins) to set.

**Tech stack:** Python 3.11, NumPy, Matplotlib, SciPy

**Data:** Synthetic MS/MS-like spectrum data generated by simulating peak intensities with added noise to mimic real spectra, as no public dataset is provided.

**Build it:**

1. Generate or simulate a 1D array representing an MS/MS spectrum with signal peaks and background noise.
2. Divide the spectrum into a user-defined number of bins (regions).
3. Fit orthogonal polynomials (e.g., Legendre polynomials) to the intensity values within each bin to model local noise.
4. Calculate a noise threshold from the polynomial fit and identify peaks above this threshold.
5. Visualize the original spectrum, polynomial noise model, and filtered peaks.

**Ships as:** A Python script and Jupyter notebook demonstrating orthogonal polynomial fitting on synthetic MS/MS data with plots showing noise estimation and peak preservation.

**Stretch goal:** Add interactive controls to adjust bin number and polynomial degree to see their effect on noise modeling.

### Intermediate — Reimplementation of Orthogonal Polynomial Filtering on MS/MS Data
*Effort: 1-3 weekends*

You reimplement the paper's core adaptive noise filtering method using orthogonal polynomials on a publicly available or simulated MS/MS dataset. You compare your filtering results against a simple baseline method such as a fixed threshold filter and evaluate peak retention and noise reduction metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's method into working code, apply it to real or realistic data, and quantitatively evaluate its effectiveness compared to a baseline.

**Grounded in:** The authors developed an automated noise filtering method based on constructing orthogonal polynomials fitted to local bins of the spectrum. This method adaptively estimates noise levels across the spectrum, allowing for continuous and smooth filtering that preserves significant peaks.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Pandas

**Data:** Use a publicly available MS/MS dataset substitute or simulate multiple spectra with known peptide peaks and noise characteristics, as the paper does not provide released datasets.

**Build it:**

1. Obtain or simulate multiple MS/MS spectra with annotated peaks.
2. Implement the orthogonal polynomial-based noise filtering method with adjustable parameters: number of bins, polynomial degree, and SNR threshold.
3. Implement a simple baseline noise filtering method (e.g., fixed intensity threshold).
4. Apply both methods to the dataset and compute metrics such as number of primary ion peaks retained and signal-to-noise ratio improvement.
5. Visualize and compare filtering results and metrics in a report.

**Ships as:** A Python package or notebook with code implementing the filtering methods, evaluation scripts, and a report comparing performance metrics.

**Stretch goal:** Incorporate a simple De Novo peptide sequencing algorithm or use an open-source tool to show how filtering affects peptide identification accuracy.

### Advanced — Automated Parameter Tuning for Adaptive Orthogonal Polynomial Filtering
*Effort: a few weeks*

You extend the orthogonal polynomial filtering method by developing an automated parameter tuning system that selects optimal bin numbers, polynomial degrees, and SNR thresholds for different MS/MS datasets or instruments. You evaluate how this tuning improves filtering performance and peptide identification accuracy.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing the challenge of parameter tuning for diverse data, demonstrating your ability to innovate beyond the original method and improve its practical applicability.

**Grounded in:** The method requires tuning parameters such as number of bins, polynomial degree, and SNR ratio for optimal performance... given the diversity of spectrometry equipment, it is unlikely that there is any single 'best' approach.

**Tech stack:** Python 3.11, NumPy, SciPy, Scikit-learn, Matplotlib, Optuna or Hyperopt for optimization

**Data:** Use multiple MS/MS datasets from public sources or simulate diverse spectra with varying noise and peak characteristics to test parameter tuning robustness.

**Build it:**

1. Implement the orthogonal polynomial filtering method with parameter inputs.
2. Define an objective function that quantifies filtering quality, e.g., peak retention ratio or peptide identification accuracy if sequencing is integrated.
3. Use an automated hyperparameter optimization library (e.g., Optuna) to tune bin number, polynomial degree, and SNR threshold on each dataset.
4. Evaluate and compare filtering performance before and after tuning across datasets.
5. Document the tuning process, results, and recommendations for parameter selection.

**Ships as:** A Python project with automated parameter tuning scripts, evaluation results on multiple datasets, and a detailed README explaining the approach and findings.

**Stretch goal:** Integrate the tuned filtering method with a De Novo sequencing pipeline and demonstrate improved peptide identification accuracy.

_The paper does not provide released code or datasets, so all projects require either simulation of MS/MS data or sourcing publicly available MS/MS datasets as substitutes._
