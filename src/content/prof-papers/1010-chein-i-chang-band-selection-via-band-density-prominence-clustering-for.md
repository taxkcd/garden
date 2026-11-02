---
title: "1010 · Band Selection via Band Density Prominence Clustering for Hyperspectral Image Classification — Chein-I Chang"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chein-i-chang"
source_hash: "5f76a225c23dedbbe76a52a1fcc7bceb01479f38ea5593fc0f2791f3262a4231"
sequence: 1010
generator: "outreach-garden: managed"
---

# 1010 · Band Selection via Band Density Prominence Clustering for Hyperspectral Image Classification

## At a glance

- **Professor:** Chein-I Chang
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [Band Selection via Band Density Prominence Clustering for Hyperspectral Image Classification](https://mdsoar.org/bitstreams/95f4f57c-36bc-4bb3-8e1f-e9b88511c264/download)
- **Authors:** Chein-I Chang, Yi-Mei Kuo, Kenneth Yeonkong Ma
- **Year:** 2024

## Paper overview

This paper introduces a new method for selecting important spectral bands from hyperspectral images to improve classification accuracy. It extends existing clustering-based band selection methods by adding a new indicator called band prominence value (BPV) to better capture inter-band correlations and spectral characteristics. The method automatically determines key parameters and uses spectral discrimination measures instead of simple Euclidean distance, leading to better performance in hyperspectral image classification.

### Why it matters

**Research problem:** Hyperspectral images contain many spectral bands with redundant information, making it challenging to select the most informative bands for classification. Existing density peak clustering (DPC) based band selection methods use two indicators but have limitations such as empirical parameter tuning, reliance on Euclidean distance, and lack of inter-band correlation measures.

**Why it matters:** Effective band selection reduces data dimensionality without losing important information, improving classification accuracy and computational efficiency in remote sensing applications. Addressing limitations in current methods can lead to more robust and automatic band selection techniques.

**Key contributions:**

- Introduction of band prominence value (BPV) as a third indicator in density peak clustering for band selection.
- Development of two BDPC-based band selection methods: bc-BDPC and k-BDPC with automatic parameter determination.
- Replacement of Euclidean distance with spectral discrimination measures to better capture spectral characteristics and inter-band correlation.
- Extensive experimental validation demonstrating improved performance over existing DPC-based and other state-of-the-art band selection methods.

## About the professor

**Chein-I Chang** — Professor, CSEE, Univ. of Maryland - Baltimore County.

### Research links

- [Faculty/profile page](https://www.csee.umbc.edu/people/tenure-track-faculty/chein-i-chang)
- [Identity evidence](https://ebiquity.umbc.edu/person/html/Chein-I/Chang)
- [Identity evidence](https://researchoutput.ncku.edu.tw/en/persons/chein-i-chang/)
- [Identity evidence](https://researchoutput.ncku.edu.tw/en/persons/chein-i-chang/publications/)
- [Professor website](http://ebiquity.umbc.edu/person/html/Chein-I/Chang)
- [Social profile](https://twitter.com/intent/tweet?url=http%3A%2F%2Febiquity.umbc.edu%2Fperson%2Fhtml%2FChein-I%2FChang)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** spectral clustering and distance metrics
**The paper assumes:** unsupervised clustering algorithms, spectral clustering methods, distance and similarity measures in high-dimensional spectral data
**Already in this field?** Skip this entirely if you already understand clustering algorithms, especially spectral clustering, and the use of spectral distance metrics in high-dimensional data analysis.

To understand the innovations in the paper on Band Density Prominence Clustering for hyperspectral image classification, a solid grasp of spectral clustering techniques and spectral distance metrics is essential. The rigorous course option provides a deep, structured university-level introduction to machine learning and clustering, including spectral methods, while the fast track offers a concise, focused explanation of spectral clustering concepts suitable for quick comprehension. Choose the course for thorough foundational knowledge and the fast track for a rapid, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 13-15, about 4.5 hours — covering Expectation-Maximization algorithms, EM algorithm & Factor Analysis, and PCA and ICA, which provide foundational understanding of clustering and dimensionality reduction techniques relevant to spectral clustering.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a comprehensive, authoritative machine learning course covering clustering and distance metrics in depth, including unsupervised learning techniques relevant to spectral clustering and band selection methods in hyperspectral imaging.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spectral Clustering - Stanford University](https://www.youtube.com/playlist?list=PLiAulSm0XXgtkxss6TXOEffq3RhrsbYbV) — Amr Elsayyad · 6 videos · 0.8h across 6 episodes

**Watch only this:** All 6 episodes, about 0.8 hours — covering what makes a good cluster, graph Laplacian matrix, eigendecompositions, spectral graph partitioning, and the three steps of spectral clustering.

*Why it unblocks this paper:* This short-form Stanford University playlist by Amr Elsayyad offers a clear, concise introduction to spectral clustering, graph Laplacians, and spectral graph partitioning, directly addressing the spectral clustering concepts and distance metrics used in the paper.

*If you want all of it:* 0.8 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Band Selection via Band Density Prominence Clustering for Hyperspectral Image Classification," start by grasping the foundational concepts of density peak clustering, spectral discrimination measures, hyperspectral image band selection, and clustering-based feature selection. These prerequisites provide the necessary background on clustering methods, spectral metrics, and feature selection challenges in hyperspectral imaging. Finally, focus on the core concept of Band Density Prominence Clustering (BDPC) itself, ideally through the authors' own talks to gain direct insight into their novel contributions and methodology.

### Density Peak Clustering *(prerequisite)*
Density Peak Clustering (DPC) is a clustering algorithm that identifies cluster centers as points with high local density and large distance from other points with higher density. Understanding DPC is crucial because the paper extends this method by introducing a third indicator, the band prominence value (BPV), to improve band selection in hyperspectral images.

*How the paper uses it:* The paper extends DPC by adding BPV as a third indicator to enhance band selection.

▶ [Fast Density Peaks Clustering](https://www.youtube.com/watch?v=pHnfejuE-iA) — Pasi Fränti · 4y ago

### Spectral Discrimination Measures *(prerequisite)*
Spectral discrimination measures such as SAM (Spectral Angle Mapper), SID (Spectral Information Divergence), and SIDAM are advanced metrics used to quantify spectral similarity or difference more effectively than Euclidean distance. These measures are essential for accurately capturing spectral characteristics in hyperspectral data, which the paper leverages to replace Euclidean distance in their clustering approach.

*How the paper uses it:* The paper replaces Euclidean distance with spectral discrimination measures to better capture spectral characteristics in band selection.

▶ [https://www.youtube.com › watch?v=TCReuFLxgnM](https://www.youtube.com/watch?v=TCReuFLxgnM) — YouTube result via DuckDuckGo

### Hyperspectral Image Band Selection *(prerequisite)*
Band selection in hyperspectral imaging involves choosing the most informative spectral bands to reduce data dimensionality while preserving classification accuracy. Understanding the challenges and existing approaches in this area is foundational to appreciating the improvements introduced by the BDPC method.

*How the paper uses it:* The paper proposes a novel band selection method to improve classification accuracy and computational efficiency in hyperspectral imaging.

▶ [https://www.youtube.com › watch?v=6-J8okKdXjs](https://www.youtube.com/watch?v=6-J8okKdXjs) — YouTube result via DuckDuckGo

### Clustering-based Feature Selection *(prerequisite)*
Clustering-based feature selection methods group similar features and select representative ones to reduce redundancy and improve model performance. This concept underpins the paper's approach, which uses clustering to select spectral bands based on density and prominence indicators.

*How the paper uses it:* The BDPC method is a clustering-based approach for selecting spectral bands as features.

▶ [Feature Selection and Data Mining](https://www.youtube.com/watch?v=2RTD5569m38) — Nathan Kutz · 6y ago

### Band Density Prominence Clustering
Band Density Prominence Clustering (BDPC) is the central method introduced in the paper, extending traditional density peak clustering by incorporating the band prominence value (BPV) as a third indicator and using spectral discrimination measures. This method automatically determines key parameters and improves hyperspectral band selection for classification tasks.

*How the paper uses it:* BDPC is the novel clustering-based band selection method proposed and validated in the paper.

▶ [https://www.youtube.com › watch?v=1_bLnsNmhCI](https://www.youtube.com/watch?v=1_bLnsNmhCI) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's novel band selection method for hyperspectral image classification, start by learning about the challenges of hyperspectral image band selection and why selecting informative bands matters. Then, build foundational knowledge on clustering-based feature selection and density peak clustering, as BDPC extends these concepts. Next, grasp spectral discrimination measures, which replace Euclidean distance in the paper's method. Finally, explore the core concept of Band Density Prominence Clustering (BDPC) itself, which integrates these ideas to improve band selection.

### Hyperspectral Image Band Selection *(prerequisite)*
Hyperspectral images contain hundreds of spectral bands, many of which are redundant or noisy. Band selection aims to pick the most informative bands to reduce data size and improve classification accuracy. Understanding this challenge sets the stage for why advanced selection methods like BDPC are needed.

*How the paper uses it:* The paper addresses the challenge of selecting informative spectral bands from hyperspectral images to improve classification performance.

▶ [https://www.youtube.com › watch?v=OH9nAD_xYss](https://www.youtube.com/watch?v=OH9nAD_xYss) — YouTube result via DuckDuckGo

### Clustering-based Feature Selection *(prerequisite)*
Clustering-based feature selection groups similar features (bands) to identify representative ones, reducing redundancy. This approach helps select diverse and informative features by leveraging natural groupings in the data.

*How the paper uses it:* BDPC is a clustering-based method that selects spectral bands as features by clustering them based on multiple indicators.

▶ [Feature Selection and Data Mining](https://www.youtube.com/watch?v=2RTD5569m38) — Nathan Kutz · 6y ago

### Density Peak Clustering *(prerequisite)*
Density Peak Clustering identifies cluster centers as points with high local density and large distance from other high-density points. It is intuitive and effective for discovering clusters without specifying their number upfront.

*How the paper uses it:* BDPC extends density peak clustering by adding a new indicator, band prominence value, to improve band selection.

▶ [Fast Density Peaks Clustering](https://www.youtube.com/watch?v=pHnfejuE-iA) — Pasi Fränti · 4y ago

### Spectral Discrimination Measures *(prerequisite)*
Spectral discrimination measures like SAM, SID, and SIDAM quantify differences between spectral signatures more meaningfully than Euclidean distance, capturing spectral characteristics and correlations better.

*How the paper uses it:* The paper replaces Euclidean distance with spectral discrimination measures to better capture spectral characteristics in band selection.

▶ [https://www.youtube.com › watch?v=IFSVW7cxqFE](https://www.youtube.com/watch?v=IFSVW7cxqFE) — YouTube result via DuckDuckGo

## Already in your library

- [Clustering with DBSCAN, Clearly Explained!!!](https://www.youtube.com/watch?v=RDZUdRSDOok) — also for: A Novel Approach for Detection and Ranking of Trendy and Emerging Cyber Threat Events in Twitter Streams (William H. Hsu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the Band Density Prominence Clustering (BDPC) method introduced in the paper. Starting with a focused implementation of the band prominence value (BPV) calculation, you then reimplement the core BDPC band selection method and compare it against a baseline on a public hyperspectral dataset. Finally, you extend the method by exploring alternative automatic parameter selection rules for k-BDPC, addressing a key limitation noted by the authors.

### Beginner — Band Prominence Value Calculation and Visualization
*Effort: a weekend, ~8 hours*

You build a standalone script or notebook that computes the band prominence value (BPV) for spectral bands in a hyperspectral image and visualizes the BPV distribution across bands. This project focuses on implementing the BPV indicator as introduced in the paper, using spectral discrimination measures such as SAM or SID instead of Euclidean distance.

**Why it shows you understood the paper:** This project demonstrates your grasp of the novel BPV concept as a third indicator in density peak clustering for band selection, showing you can implement and interpret this key contribution independently.

**Grounded in:** A new concept of BPV is introduced into DPC as a third indicator to extend the commonly used two-indicator DPC-BS to a new three-indicator BDPC-BS.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib, scipy

**Data:** Use a publicly available hyperspectral image dataset such as the Indian Pines dataset from the UCI Machine Learning Repository or simulate a small hyperspectral data cube with synthetic spectral bands.

**Build it:**

1. Load hyperspectral image data and extract spectral bands as feature vectors.
2. Implement spectral discrimination measures (e.g., Spectral Angle Mapper - SAM).
3. Calculate the band prominence value (BPV) for each band based on inter-band correlations using the chosen spectral measure.
4. Visualize the BPV values across bands using plots to identify prominent bands.
5. Document the implementation and interpretation of BPV in the README.

**Ships as:** A Jupyter notebook or Python script with BPV calculation and plots, plus a README explaining BPV and its significance in band selection.

**Stretch goal:** Add comparison plots of BPV computed with different spectral discrimination measures (SAM, SID, SIDAM).

### Intermediate — Reimplementation of BDPC Band Selection with Baseline Comparison
*Effort: 1-3 weekends*

You reimplement the core BDPC band selection method (bc-BDPC version) from the paper, including the three indicators (BLD, BD, BPV) and automatic cut-off band distance parameter determination. You apply it to a public hyperspectral dataset and compare classification accuracy against a simple baseline band selection method such as traditional DPC-BS using Euclidean distance.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's main method and validate its performance improvements, demonstrating comprehension of the full BDPC pipeline and its advantages over prior methods.

**Grounded in:** Using (BLD,BD,BPV)-BDPC-BS, two versions of BDPC-BS, bc-BDPC and k-BDPC are developed. Automatic rules are derived to determine the cut-off band distance bc for bc-BDPC. Extensive experiments demonstrate BDPC generally performs better than DPC-BS and other methods.

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, Jupyter Notebook

**Data:** Use the Indian Pines hyperspectral dataset (publicly available) as a substitute for the paper's datasets to perform band selection and classification experiments.

**Build it:**

1. Implement spectral discrimination measures (SAM, SID, SIDAM) to replace Euclidean distance.
2. Implement the three indicators: band local density (BLD), band distance (BD), and band prominence value (BPV).
3. Implement the bc-BDPC band selection method with automatic cut-off band distance parameter determination.
4. Select bands using bc-BDPC and a baseline DPC-BS method on the dataset.
5. Train a classifier (e.g., SVM or Random Forest) on the selected bands and evaluate classification accuracy.
6. Compare and visualize the classification results of BDPC vs baseline.
7. Document the methodology, results, and insights in a detailed README.

**Ships as:** A reproducible codebase with scripts/notebooks for BDPC band selection, baseline comparison, classification evaluation, and a report summarizing findings.

**Stretch goal:** Extend the implementation to include the k-BDPC version and analyze its performance difference with bc-BDPC.

### Advanced — Alternative Automatic Parameter Selection for k-BDPC Band Selection
*Effort: a few weeks*

You develop and evaluate alternative automatic parameter selection rules for the k-BDPC method's nearest neighbor parameter k, aiming to improve its performance as suggested by the paper's limitations. You implement k-BDPC, propose new heuristics or optimization-based methods for k selection, and test on hyperspectral datasets to compare classification accuracy against the original automatic rule.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep engagement with the method's challenges and the ability to extend research by improving parameter robustness in BDPC band selection.

**Grounded in:** The parameters bc and k determined automatically may not be optimal. Further improvements and alternative automatic rules for parameter selection, especially for k-BDPC, are needed.

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, Jupyter Notebook, optuna (for hyperparameter optimization)

**Data:** Use the Indian Pines dataset or other publicly available hyperspectral datasets for evaluation.

**Build it:**

1. Implement the k-BDPC band selection method as described in the paper.
2. Review the original automatic rule for selecting k and identify its limitations.
3. Design alternative automatic parameter selection methods, such as cross-validation-based optimization, elbow method heuristics, or density-based criteria.
4. Integrate the new parameter selection methods into the k-BDPC pipeline.
5. Evaluate the impact of different k selection methods on band selection and classification accuracy.
6. Compare results with the original k-BDPC and bc-BDPC methods.
7. Document the methodology, experiments, and conclusions in a comprehensive report.

**Ships as:** A research-style codebase and report presenting alternative k selection methods for k-BDPC, experimental results, and analysis of improvements over the original approach.

**Stretch goal:** Explore integrating Fisher’s ratio-based density peak clustering as an alternative clustering technique for band selection.
