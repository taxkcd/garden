---
title: "1020 · Deep Incomplete Multi-View Clustering via Hierarchical Imputation and Alignment — Lusi Li"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lusi-li"
source_hash: "37a69bdfe05a46063398335edd99f16dd166f8e5811cf9b940af476bdadf64a3"
sequence: 1020
generator: "outreach-garden: managed"
---

# 1020 · Deep Incomplete Multi-View Clustering via Hierarchical Imputation and Alignment

## At a glance

- **Professor:** Lusi Li
- **Institution:** Old Dominion University
- **Paper:** [Deep Incomplete Multi-View Clustering via Hierarchical Imputation and Alignment](https://arxiv.org/pdf/2601.09051)
- **Authors:** Yiming Du, Ziyu Wang, Jian Li, Rui Ning, Lusi Li
- **Year:** 2026

## Paper overview

This paper introduces DIMVC-HIA, a novel deep learning framework designed to cluster multi-view data even when some views are partially missing. It uses a hierarchical imputation strategy to fill in missing data and dual alignment methods to ensure consistent and compact clusters. The approach outperforms existing methods on benchmark datasets, especially when data incompleteness is high.

### Why it matters

**Research problem:** Incomplete multi-view clustering (IMVC) aims to discover shared cluster structures from multi-view data with missing or partially observed views. The challenge is to accurately impute missing views without bias and maintain semantic consistency and cluster compactness.

**Why it matters:** Multi-view data is common in real-world applications (e.g., multimedia, bioinformatics, social networks), but missing views due to sensor failures or data corruption limit the effectiveness of traditional multi-view clustering methods. Reliable clustering despite missing data is crucial for robust pattern discovery and understanding complex data.

**Key contributions:**

- Proposed DIMVC-HIA, a unified framework combining representation learning, hierarchical imputation, and dual alignment for IMVC.
- Developed a hierarchical imputation strategy that first imputes missing cluster assignments guided by cross-view semantic similarity, then imputes latent features using cluster prototypes.
- Designed dual alignment modules: energy-based alignment for compact clusters and contrastive assignment alignment for consistent and confident cluster predictions.
- Demonstrated superior performance over ten state-of-the-art IMVC methods across multiple benchmark datasets and varying missing data ratios.

## About the professor

**Lusi Li** — Assistant Professor, Academic Affairs, Old Dominion University.

Research interests: My research interests lie in robust machine learning, with a focus on developing efficient and trustworthy algorithms for learning robust representations from multi-source data, and applying these methods to intelligent communications and industrial processes.

### Research links

- [Faculty/profile page](https://www.odu.edu/directory/lusi-li)
- [Professor website](https://sites.google.com/view/lusili/)
- [Lab website](https://github.com/RobustAILab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for multi-view clustering
**The paper assumes:** deep learning, multi-view clustering, autoencoders, contrastive learning, cluster assignment methods
**Already in this field?** Skip this entirely if you already understand deep representation learning methods for multi-view clustering and contrastive alignment techniques.

To understand the deep learning techniques underlying incomplete multi-view clustering as presented in the DIMVC-HIA paper, it is essential to grasp both foundational machine learning concepts and specialized deep learning methods such as autoencoders, clustering, and contrastive learning. The rigorous course option offers a comprehensive university-level foundation in machine learning, including clustering and neural networks, while the fast track provides a concise introduction to clustering concepts for quick orientation. Choose the course for depth and breadth, or the fast track for a rapid conceptual overview before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 9 (Decision Trees and Ensemble Methods), 10 (Introduction to Neural Networks), 11 (Backprop & Improving Neural Networks), 13 (Expectation-Maximization Algorithms), 14 (EM Algorithm & Factor Analysis), and 15 (PCA and ICA), about 7.9 hours total — these cover clustering, neural nets, and latent variable models relevant to multi-view clustering and imputation.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative and comprehensive machine learning course covering clustering, neural networks, and unsupervised learning fundamentals that underpin the DIMVC-HIA framework's methodology.

*If you want all of it:* 27.9 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Learn Machine Learning | K-Means Clustering in R](https://www.youtube.com/playlist?list=PLGey__rsxvBXE_AcL_dDeE8_Lb2qP-4eO) — Learn Machine Learning · 6 videos · 0.4h across 6 episodes

**Watch only this:** All 6 episodes, about 0.4 hours total — covers clustering basics and k-means intuition quickly and clearly.

*Why it unblocks this paper:* This short playlist from Learn Machine Learning provides a clear, concise introduction to clustering concepts, including k-means intuition and methods, which are foundational to understanding clustering objectives in DIMVC-HIA.

*If you want all of it:* 0.4 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DIMVC-HIA paper, start by building foundational knowledge on incomplete multi-view clustering, hierarchical imputation methods, contrastive learning for clustering, and deep autoencoders for multi-view representation. These prerequisites cover the core challenges and techniques the paper builds upon. Finally, focus on the paper's core concept by watching the authors' own talk to gain direct insights into their novel hierarchical imputation and dual alignment framework.

### Incomplete multi-view clustering *(prerequisite)*
This section covers the fundamental problem setting of clustering multi-view data with missing views, which is the core challenge addressed by the paper. Understanding the problem formulation and existing approaches provides essential context for appreciating the novel contributions of DIMVC-HIA.

*How the paper uses it:* The paper addresses incomplete multi-view clustering by proposing a framework that handles missing views effectively.

▶ [https://www.youtube.com › watch?v=gvFIOCtHeBk](https://www.youtube.com/watch?v=gvFIOCtHeBk) — YouTube result via DuckDuckGo

### Hierarchical imputation methods *(prerequisite)*
Hierarchical imputation techniques progressively fill in missing data, a key step in the DIMVC-HIA framework. Learning about these methods helps understand how the paper imputes missing cluster assignments and latent features in a structured manner.

*How the paper uses it:* DIMVC-HIA uses a hierarchical imputation strategy to fill missing cluster assignments and latent features.

▶ [https://www.youtube.com › watch?v=7dODUB1WWrM](https://www.youtube.com/watch?v=7dODUB1WWrM) — YouTube result via DuckDuckGo

### Contrastive learning for clustering *(prerequisite)*
Contrastive learning is fundamental for aligning cluster assignments and ensuring semantic consistency across views. This section explains the principles behind contrastive methods used for clustering, which underpin the dual alignment modules in the paper.

*How the paper uses it:* The paper employs contrastive assignment alignment to enhance cross-view consistency in cluster predictions.

▶ [W05.3: Understanding Contrastive learning & MoCO and image clustering (Part 3/3)](https://www.youtube.com/watch?v=PE1MT_S9m1k) — Nikolas Adaloglou · 3y ago

### Deep autoencoders for multi-view representation *(prerequisite)*
Deep autoencoders extract latent features from each view, forming the basis for representation learning in DIMVC-HIA. Understanding autoencoder architectures and training is crucial to grasp how the paper obtains robust multi-view embeddings.

*How the paper uses it:* DIMVC-HIA uses view-specific autoencoders to extract latent features and soft cluster assignments.

▶ [https://www.youtube.com › watch?v=X8SBsVqmVdY](https://www.youtube.com/watch?v=X8SBsVqmVdY) — YouTube result via DuckDuckGo

### DIMVC-HIA paper talk
This section features the authors' own presentation of their novel deep incomplete multi-view clustering framework. Watching this talk provides direct insights into their hierarchical imputation and dual alignment approach, experimental results, and future directions.

*How the paper uses it:* The authors' talk directly explains the DIMVC-HIA framework and its contributions.

▶ [https://www.youtube.com › watch?v=wNOsuQKh82k](https://www.youtube.com/watch?v=wNOsuQKh82k) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the DIMVC-HIA paper, starting with the core problem of incomplete multi-view clustering and the role of deep autoencoders for representation learning. It then builds intuition on hierarchical imputation methods and contrastive learning for clustering, culminating in an understanding of the paper's novel hierarchical imputation and alignment framework. Each step is designed to be concise and visual to efficiently build intuition for beginners.

### Incomplete multi-view clustering *(prerequisite)*
Incomplete multi-view clustering deals with grouping data points that have multiple types of features (views), even when some views are missing. Understanding this problem helps grasp why imputing missing data and aligning clusters across views is challenging and important.

*How the paper uses it:* The paper addresses incomplete multi-view clustering by proposing a method that imputes missing views and aligns cluster assignments across views.

▶ [https://www.youtube.com › watch?v=gvFIOCtHeBk](https://www.youtube.com/watch?v=gvFIOCtHeBk) — YouTube result via DuckDuckGo

### Deep autoencoders for multi-view representation *(prerequisite)*
Deep autoencoders are neural networks that learn to compress data into a latent representation and then reconstruct it. In multi-view clustering, they extract meaningful features from each view, enabling better clustering even with missing data.

*How the paper uses it:* DIMVC-HIA uses view-specific autoencoders to extract latent features from each view before imputation and clustering.

▶ [https://www.youtube.com › watch?v=X8SBsVqmVdY](https://www.youtube.com/watch?v=X8SBsVqmVdY) — YouTube result via DuckDuckGo

### Hierarchical imputation methods *(prerequisite)*
Hierarchical imputation fills in missing data progressively, starting from coarse estimates like cluster assignments and refining to detailed latent features. This approach reduces bias and improves the quality of imputed data.

*How the paper uses it:* The paper's hierarchical imputation first imputes missing cluster assignments using cross-view similarity, then imputes latent features using cluster prototypes.

▶ [https://www.youtube.com › watch?v=d6KvuYFV5xc](https://www.youtube.com/watch?v=d6KvuYFV5xc) — YouTube result via DuckDuckGo

### Contrastive learning for clustering *(prerequisite)*
Contrastive learning trains models to bring similar data points closer and push dissimilar ones apart in the feature space. For clustering, it helps align cluster assignments across different views to ensure consistency.

*How the paper uses it:* DIMVC-HIA employs contrastive assignment alignment to enhance cross-view consistency of cluster predictions.

▶ [W05.3: Understanding Contrastive learning & MoCO and image clustering (Part 3/3)](https://www.youtube.com/watch?v=PE1MT_S9m1k) — Nikolas Adaloglou · 3y ago

## Already in your library

- [Lec-14: Hierarchical Clustering | Agglomerative vs Divisive with examples](https://www.youtube.com/watch?v=zxQF8Rmpk1M) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Lecture 19 | Representations and Autoencoders](https://www.youtube.com/watch?v=gs8vT4pdbUs) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [StatQuest: Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo) — also for: Multi-Agent Sensor Data Collection with Attrition Risk (Jae C. Oh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the DIMVC-HIA framework for incomplete multi-view clustering. The beginner project focuses on reproducing a core mechanism of hierarchical imputation on a small synthetic dataset. The intermediate project involves reimplementing the full DIMVC-HIA method on a public multi-view dataset with missing views and comparing it to a baseline. The advanced project extends the method to handle more complex missingness patterns, addressing one of the paper's stated limitations.

### Beginner — Hierarchical Imputation Prototype for Missing Cluster Assignments
*Effort: a weekend, ~8 hours*

You build a simplified hierarchical imputation module that imputes missing cluster assignments based on cross-view semantic similarity and then imputes latent features using cluster prototypes. This prototype will run on a small synthetic multi-view dataset with artificially introduced missing views.

**Why it shows you understood the paper:** This project demonstrates your grasp of the hierarchical imputation strategy, a key contribution of the paper, by implementing its two-stage imputation process and showing how missing cluster assignments and features can be recovered.

**Grounded in:** Developed a hierarchical imputation strategy that first imputes missing cluster assignments guided by cross-view semantic similarity, then imputes latent features using cluster prototypes.

**Tech stack:** Python 3.11, NumPy, scikit-learn, Matplotlib, Jupyter Notebook

**Data:** Synthetic multi-view data you generate with 2-3 views and known cluster labels, with random missing views introduced to simulate incompleteness.

**Build it:**

1. Generate a small synthetic multi-view dataset with 2-3 views and known cluster labels.
2. Introduce missing views randomly to simulate incomplete multi-view data.
3. Implement cross-view similarity calculation to guide imputation of missing cluster assignments.
4. Compute cluster prototypes from available views and impute missing latent features accordingly.
5. Visualize imputed assignments and features, and evaluate imputation quality against ground truth.
6. Document the hierarchical imputation process and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook demonstrating hierarchical imputation on synthetic incomplete multi-view data, with visualizations and explanations.

**Stretch goal:** Add a simple contrastive similarity metric to improve assignment imputation quality.

### Intermediate — Reimplementation of DIMVC-HIA on MNIST-USPS with Missing Views
*Effort: 2 weekends, ~20 hours*

You reimplement the core DIMVC-HIA framework from the paper, including view-specific autoencoders, hierarchical imputation, and dual alignment modules. You apply it to the MNIST-USPS multi-view dataset with artificially introduced missing views and compare clustering accuracy against a simple baseline like partial multi-view K-means.

**Why it shows you understood the paper:** This project shows you can implement the full method described in the paper, reproduce its core mechanisms, and evaluate its performance on a real benchmark dataset, demonstrating comprehension of the model architecture and training procedure.

**Grounded in:** DIMVC-HIA integrates view-specific autoencoders for feature extraction, hierarchical imputation for missing data, and dual alignment modules for consistent clustering; outperforms baselines on MNIST-USPS dataset.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Matplotlib, Jupyter Notebook

**Data:** MNIST-USPS dataset, a publicly available multi-view dataset of handwritten digits; you simulate missing views by randomly dropping views at various ratios.

**Build it:**

1. Download and preprocess the MNIST-USPS dataset, aligning samples across views.
2. Implement view-specific autoencoders to extract latent features from each view.
3. Implement hierarchical imputation: first impute missing cluster assignments using cross-view contrastive similarity, then impute latent features using cluster prototypes.
4. Implement dual alignment modules: energy-based semantic alignment and contrastive assignment alignment.
5. Train the model end-to-end on incomplete MNIST-USPS data with varying missing ratios.
6. Compare clustering accuracy against a baseline method such as partial multi-view K-means and report results.
7. Visualize clusters using t-SNE and document findings in a README and notebook.

**Verified links from the paper:**

- <https://github.com/YMBest/DIMVC-HIA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate DIMVC-HIA on MNIST-USPS with missing views, including baseline comparison and visualizations.

**Stretch goal:** Add ablation experiments removing one alignment module to observe impact on performance.

### Advanced — Extending DIMVC-HIA for Complex Missingness Patterns in Multi-View Data
*Effort: 3+ weeks*

You extend the DIMVC-HIA framework to handle more complex missingness scenarios where multiple views for the same sample are missing simultaneously, addressing a limitation noted in the paper. You design adaptive weighting or learned view importance to mitigate performance degradation and evaluate on a public multi-view dataset with simulated complex missing patterns.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions by implementing a genuine extension that improves robustness to extreme missingness, potentially contributing novel insights to the research area.

**Grounded in:** The method's performance may degrade if multiple views for the same sample are missing or poorly aligned; future directions include handling more complex missingness patterns and adaptive weighting of views.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Matplotlib, Jupyter Notebook

**Data:** MNIST-USPS or Fashion-MNIST multi-view dataset with simulated complex missingness patterns where multiple views per sample are missing simultaneously.

**Build it:**

1. Review and understand the original DIMVC-HIA implementation and its hierarchical imputation and alignment modules.
2. Design and implement an extension to handle samples with multiple missing views, such as adaptive view weighting or learned view importance during imputation and alignment.
3. Simulate complex missingness patterns on the chosen multi-view dataset.
4. Train and evaluate the extended model, comparing performance to the original DIMVC-HIA under these challenging missingness conditions.
5. Analyze results to assess improvements and document findings.
6. Prepare a detailed README explaining the extension, motivation, implementation, and evaluation.

**Verified links from the paper:**

- <https://github.com/YMBest/DIMVC-HIA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with extended DIMVC-HIA code supporting complex missingness, evaluation scripts, and documentation of results and methodology.

**Stretch goal:** Apply the extended method to a domain-specific dataset (e.g., multimedia or bioinformatics) to explore real-world applicability.
