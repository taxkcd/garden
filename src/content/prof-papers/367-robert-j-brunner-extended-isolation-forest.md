---
title: "367 · Extended Isolation Forest — Robert J. Brunner"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-robert-j-brunner"
source_hash: "f8db9e0529ef9fd02554a30d90ef27dd79d3ff4c24007873953f9c2d1ef24609"
sequence: 367
generator: "outreach-garden: managed"
---

# 367 · Extended Isolation Forest

## At a glance

- **Professor:** Robert J. Brunner
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Extended Isolation Forest](https://arxiv.org/abs/1811.02141)
- **Authors:** Sahand Hariri, Matias Carrasco Kind, Robert J. Brunner
- **Year:** 2020

## Paper overview

This paper presents an extension to the Isolation Forest anomaly detection algorithm, called Extended Isolation Forest (EIF), which addresses biases and artifacts in anomaly scoring caused by the original algorithm's axis-parallel splitting. EIF uses hyperplanes with random slopes for data partitioning, resulting in more robust and accurate anomaly detection without sacrificing computational efficiency.

### Why it matters

**Research problem:** The standard Isolation Forest algorithm suffers from bias due to its branching criteria, which only allow axis-parallel splits. This causes artifacts in anomaly score maps, leading to inconsistent and unreliable anomaly scores, especially in regions where anomalies are not obvious.

**Why it matters:** Accurate and robust anomaly detection is critical in many fields such as network security, financial data analysis, medical diagnostics, and astronomy. Artifacts and biases in anomaly scores reduce the reliability of detection, potentially causing false positives or missed anomalies, and impairing downstream analyses like probability density estimation.

**Key contributions:**

- Identification and detailed analysis of bias and artifacts in standard Isolation Forest anomaly scores.
- Proposal of Extended Isolation Forest using random slope hyperplanes for splitting, eliminating axis-parallel bias.
- Generalization of the algorithm to higher dimensions with configurable extension levels.
- Public release of a Python implementation and example notebooks.
- Comprehensive evaluation comparing standard, rotated, and extended Isolation Forests on synthetic and real-world datasets.

## About the professor

**Robert J. Brunner** — Professor, School of Information Sciences and Department of Accountancy, Univ. of Illinois at Urbana-Champaign.

Research interests: Observational Cosmology, Information Science, Statistical and Machine Learning, Advanced Computational Techniques, Transient and Variable Phenomena

### Research links

- [Faculty/profile page](https://experts.illinois.edu/en/persons/robert-j-brunner/)
- [Professor website](http://lcdm.illinois.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Anomaly Detection and Isolation Forests
**The paper assumes:** anomaly detection methods, Isolation Forest algorithm, recursive partitioning, and unsupervised machine learning
**Already in this field?** Skip this entirely if you already understand the Isolation Forest algorithm and its role in anomaly detection.

To understand the Extended Isolation Forest paper, it is crucial to grasp the fundamentals of anomaly detection and specifically how the Isolation Forest algorithm works, including its axis-parallel splitting and limitations. The rigorous course option provides a deep, structured foundation in machine learning concepts including decision trees and random forests, which underpin Isolation Forest. The fast track offers a concise, focused explainer series on Isolation Forest anomaly detection, ideal for quickly gaining intuition and practical understanding without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning Course - Halmstad University.](https://www.youtube.com/playlist?list=PLS8J_PRPtGfdnPf9QqT7Itnn2rAHsoWqY) — Mohamed-Rafik Bouguelia · 14 videos · 7.2h across 14 episodes

**Watch only this:** Lectures 4 (Part 1 and Part 2) - Decision Tree and Random Forest and Regression Tree, about 1 hour total. These specifically cover the tree-based models that Isolation Forest builds upon.

*Why it unblocks this paper:* This university-level Machine Learning course covers decision trees and random forests in detail (Lecture 4), which are foundational to understanding Isolation Forest and its extensions. It provides a rigorous background on machine learning methods relevant to the paper's approach.

*If you want all of it:* Approximately 7.2 hours across all 14 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Isolation forest - Anomaly detection](https://www.youtube.com/playlist?list=PLjxbCynJ0Gd-zd4TQ2Gy1WsErkDKr3h7e) — Victor Axelsson · 6 videos · 1.0h across 6 episodes

**Watch only this:** Episodes 1 through 4 (Isolation forest - Anomaly detection | 1 - Outline through | 4 - Isolation forest implementation), about 40 minutes total. These cover the algorithm's concept and practical details necessary to understand the paper's improvements.

*Why it unblocks this paper:* This short series by Victor Axelsson is focused exclusively on Isolation Forest anomaly detection, explaining the algorithm's intuition, implementation, and sampling strategies in a clear and concise manner. It directly addresses the core method extended by the paper.

*If you want all of it:* About 1 hour across all 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Extended Isolation Forest paper, start by reviewing the foundational Isolation Forest algorithm to grasp the original method and its limitations. Next, study the mathematical concept of random projections and hyperplane splits, which underpin the EIF's oblique splitting strategy. Finally, focus on the core concept of the Extended Isolation Forest itself, ideally through the authors' own or closely related advanced talks presenting the novel method and its improvements.

### Isolation Forest algorithm *(prerequisite)*
Understanding the original Isolation Forest algorithm is essential because the Extended Isolation Forest builds directly upon it by addressing its key limitations. This section covers the basic tree-based anomaly detection method, its axis-parallel splits, and the biases that arise from them.

*How the paper uses it:* EIF extends the standard Isolation Forest by generalizing the splitting hyperplanes to remove axis-parallel bias.

▶ [Isolation Forests: Identify Outliers in Data](https://www.youtube.com/watch?v=Y1x51i1936M) — Elder Research, a MANTECH company · 4:41 · 3y ago

### Random projection and hyperplane splits *(prerequisite)*
Random projections and hyperplane splits are key mathematical techniques that enable the Extended Isolation Forest to perform oblique splits rather than axis-aligned splits. Understanding these concepts provides insight into how EIF achieves more robust anomaly detection by partitioning data with random hyperplanes.

*How the paper uses it:* EIF uses random normal vectors uniformly sampled on the unit sphere to define oblique splitting hyperplanes.

▶ [Random Separating Hyperplane theorem with applications to Topic Modelling by Chiranjib Bhattacharyya](https://www.youtube.com/watch?v=YFhph7qGW0k) — CSAChannel IISc · 2y ago

### Extended Isolation Forest method
This section focuses on the core contribution of the paper: the Extended Isolation Forest. It explains how EIF generalizes the splitting criteria, eliminates artifacts and biases, and improves anomaly detection performance without sacrificing efficiency. The best resource is a talk by one of the paper's authors or a closely related advanced presentation.

*How the paper uses it:* The paper's main contribution is the EIF method, which uses oblique splits to improve anomaly scoring robustness and accuracy.

▶ [Anomaly Detection Using (Extended) Isolation Forest](https://www.youtube.com/watch?v=S0_YswNj66A) — GLAMI AI · Streamed 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Extended Isolation Forest paper, start by learning the basics of anomaly detection to grasp the problem context. Then, build foundational knowledge of the original Isolation Forest algorithm, since EIF is an extension of it. Next, study the mathematical idea of random projections and hyperplane splits, which underpin EIF’s oblique splitting strategy. Finally, explore the Extended Isolation Forest method itself to see how it improves anomaly detection by removing biases inherent in the original algorithm.

### Anomaly detection methods *(prerequisite)*
Anomaly detection is about identifying unusual or rare data points that differ significantly from the majority of the data. Understanding the general approaches and challenges in anomaly detection provides essential context for why Isolation Forest and its extensions matter.

*How the paper uses it:* The paper aims to improve anomaly detection robustness and accuracy, so knowing the broader field helps appreciate the significance of EIF.

▶ [Anomaly Detection Explained | Unsupervised Machine Learning with Real-World Examples](https://www.youtube.com/watch?v=7FjapNRy5YA) — Coursesteach · 7mo ago

### Isolation Forest algorithm *(prerequisite)*
Isolation Forest is an unsupervised anomaly detection method that isolates anomalies by recursively partitioning data using axis-parallel splits. It is efficient and effective but suffers from bias due to its splitting strategy.

*How the paper uses it:* EIF extends Isolation Forest by addressing its axis-parallel split bias to improve anomaly scoring.

▶ [Isolation Forests: Identify Outliers in Data](https://www.youtube.com/watch?v=Y1x51i1936M) — Elder Research, a MANTECH company · 4:41 · 3y ago

### Random projection and hyperplane splits *(prerequisite)*
Random projection involves projecting data onto randomly chosen directions, often represented by hyperplanes. This concept is key to understanding how EIF generalizes splits from axis-parallel to oblique hyperplanes with random slopes.

*How the paper uses it:* EIF uses random normal vectors to define hyperplanes for splitting, eliminating axis-aligned bias.

▶ [08d Machine Learning: Random Projection](https://www.youtube.com/watch?v=bfS7JAjiOMI) — GeostatsGuy Lectures · 11:16 · 6y ago

### Extended Isolation Forest method
Extended Isolation Forest generalizes the splitting mechanism of Isolation Forest by using hyperplanes with random slopes instead of axis-parallel cuts. This removes artifacts and biases in anomaly scores, resulting in more robust and accurate detection.

*How the paper uses it:* This is the core contribution of the paper, providing a more reliable anomaly detection method without sacrificing efficiency.

▶ [Anomaly Detection Using (Extended) Isolation Forest](https://www.youtube.com/watch?v=S0_YswNj66A) — GLAMI AI · Streamed 3y ago

## Already in your library

- [Anomaly Detection | Machine Learning Tutorial | TutorialsPoint](https://www.youtube.com/watch?v=AYap1FTvR9E) — also for: Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults (Daniel P. Siewiorek)
- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Extended Isolation Forest (EIF) paper. Starting with a beginner-level visualization of the bias artifacts in standard Isolation Forest, you then implement and evaluate the EIF method on a public dataset at intermediate level. Finally, the advanced project extends EIF to handle streaming data, addressing a key limitation noted in the paper and opening a path for research discussion with the professor.

### Beginner — Visualizing Axis-Parallel Bias in Isolation Forest
*Effort: a weekend, ~8 hours*

You build a small Python notebook that generates a 2D synthetic dataset and runs the standard Isolation Forest algorithm to produce anomaly score maps. You then visualize the rectangular artifact patterns caused by axis-parallel splits, reproducing one of the paper's key illustrative figures.

**Why it shows you understood the paper:** This project shows you understand the core problem the paper addresses: the bias and artifacts in standard Isolation Forest anomaly scores due to axis-parallel splits. Visualizing these artifacts demonstrates comprehension of the paper's motivation and foundational analysis.

**Grounded in:** Identification and detailed analysis of bias and artifacts in standard Isolation Forest anomaly scores.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, numpy, jupyter notebook

**Data:** Synthetic 2D datasets generated within the notebook to replicate the paper's examples.

**Build it:**

1. Generate a 2D synthetic dataset with clusters and anomalies.
2. Run scikit-learn's IsolationForest on the dataset to compute anomaly scores.
3. Create a grid over the 2D space and compute anomaly scores for each grid point.
4. Visualize the anomaly score map using matplotlib, highlighting rectangular artifact regions.
5. Compare the visualization to the paper's figures showing axis-parallel bias.

**Ships as:** A Jupyter notebook with code and plots that clearly show the axis-aligned artifact patterns in Isolation Forest anomaly scores.

**Stretch goal:** Add a visualization of rotated Isolation Forest anomaly scores to compare artifact reduction.

### Intermediate — Implementing and Evaluating Extended Isolation Forest
*Effort: 2 weekends, ~20 hours*

You reimplement the Extended Isolation Forest algorithm from the paper's description in Python, including oblique hyperplane splits with random slopes. You apply it to a public benchmark dataset (e.g., the Credit Card Fraud Detection dataset from Kaggle as a substitute) and compare its anomaly detection performance to standard Isolation Forest using AUROC and AUPRC metrics.

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's core methodological contribution and reproduce its key quantitative results, showing mastery of EIF's mechanism and its empirical benefits over the baseline.

**Grounded in:** Proposal of Extended Isolation Forest using random slope hyperplanes for splitting, eliminating axis-parallel bias; EIF improves detection performance as measured by AUROC and AUPRC.

**Tech stack:** Python 3.11, numpy, scikit-learn, pandas, matplotlib, jupyter notebook

**Data:** Public Credit Card Fraud Detection dataset from Kaggle (substitute for benchmark datasets used in the paper).

**Build it:**

1. Study the paper's algorithm description for Extended Isolation Forest and understand the oblique split mechanism.
2. Implement EIF in Python, extending a standard Isolation Forest implementation to use random normal vectors for splits.
3. Load and preprocess the Credit Card Fraud Detection dataset.
4. Train both standard Isolation Forest and your EIF implementation on the dataset.
5. Evaluate and compare their anomaly detection performance using AUROC and AUPRC metrics.
6. Visualize and report the results in a Jupyter notebook.

**Verified links from the paper:**

- <https://github.com/sahandha/eif> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook and Python module implementing EIF, with performance comparison plots and metrics demonstrating EIF's advantage.

**Stretch goal:** Add rotated Isolation Forest as a third baseline and compare computational efficiency and convergence.

### Advanced — Extending Extended Isolation Forest for Streaming Data
*Effort: 3+ weeks, ~60 hours*

You develop an extension of the EIF algorithm to handle streaming data scenarios, addressing a limitation noted in the paper. This involves adapting tree construction and anomaly scoring to incremental updates as new data arrives. You evaluate your streaming EIF on a synthetic streaming dataset and compare its anomaly detection stability and accuracy to a batch EIF baseline.

**Why it shows you understood the paper:** This project tackles a future direction proposed by the authors, showing deep understanding of EIF's design and limitations. It demonstrates your ability to innovate on the method and apply it to a challenging real-world scenario, potentially opening a research conversation.

**Grounded in:** Investigate EIF performance and adaptations for streaming data and datasets with missing values.

**Tech stack:** Python 3.11, numpy, scikit-learn, pandas, matplotlib, jupyter notebook

**Data:** Synthetic streaming dataset generated to simulate data arriving in batches with anomalies injected over time.

**Build it:**

1. Review EIF algorithm and identify components needing modification for streaming updates.
2. Design and implement incremental tree updates and anomaly scoring for streaming EIF.
3. Generate a synthetic streaming dataset with controlled anomalies.
4. Evaluate streaming EIF's anomaly detection accuracy and score stability over time.
5. Compare results to batch EIF applied periodically on accumulated data.
6. Document findings, challenges, and potential improvements.

**Ships as:** A Python package and notebook demonstrating a streaming-capable EIF with evaluation results and discussion.

**Stretch goal:** Extend the streaming EIF to handle missing data during streaming and evaluate robustness.

_The authors released no official code for EIF; the intermediate project uses a third-party EIF implementation as a reference but requires reimplementation for learning. The Credit Card Fraud Detection dataset is a substitute for benchmark datasets mentioned in the paper._
