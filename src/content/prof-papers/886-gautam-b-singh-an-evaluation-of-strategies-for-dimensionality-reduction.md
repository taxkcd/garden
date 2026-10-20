---
title: "886 · An Evaluation of Strategies for Dimensionality Reduction — Gautam B. Singh"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gautam-b-singh"
source_hash: "16f01a7fe21cb4c1012166b11ecfa2d49c4e333139689d14602a624959c37cad"
sequence: 886
generator: "outreach-garden: managed"
---

# 886 · An Evaluation of Strategies for Dimensionality Reduction

## At a glance

- **Professor:** Gautam B. Singh
- **Institution:** Oakland University
- **Paper:** [An Evaluation of Strategies for Dimensionality Reduction](https://easychair.org/publications/open/TwRK)
- **Authors:** Gautam B. Singh
- **Year:** 2024

## Paper overview

This paper studies how to reduce the number of features in high-dimensional data to improve machine learning model performance. It compares six dimensionality reduction techniques on a wine dataset, reducing 13 features to 2, and evaluates their impact on classification accuracy using a quadratic discriminant classifier. The study finds that supervised statistical methods like ANOVA and Chi-Square outperform unsupervised geometric methods like PCA and MDS in this context.

### Why it matters

**Research problem:** High-dimensional data suffers from the 'curse of dimensionality,' where the volume of feature space grows exponentially with the number of features, requiring more data and complicating model training. The problem is how to effectively reduce dimensionality while preserving important information for machine learning tasks.

**Why it matters:** Reducing dimensionality is crucial to make machine learning models more efficient and accurate, especially when dealing with complex datasets like sensor, financial, or social network data. Proper dimensionality reduction helps avoid overfitting, reduces computational cost, and improves model interpretability.

**Key contributions:**

- Comprehensive comparison of four unsupervised (PCA, KPCA1, KPCA2, MDS) and two supervised (Chi-Square, ANOVA) dimensionality reduction methods.
- Demonstration that supervised statistical methods (Chi-Square and ANOVA) selecting specific features outperform unsupervised geometric methods that produce linear combinations of features.
- Use of a real-world wine dataset with 13 features and three classes to benchmark dimensionality reduction techniques.
- Detailed explanation of the mathematical foundations of each dimensionality reduction method.
- Evaluation of classifier performance via error rates and F1 scores, highlighting the superiority of ANOVA-based feature selection.

## About the professor

**Gautam B. Singh** — ML Postdoctoral Research Staff, Oakland University.

Research interests: Deep Learning, Abstractions, Reasoning

### Research links

- [Faculty/profile page](https://www.oakland.edu/secs/directory/singh/)
- [Professor website](http://singhgautam.github.io/)
- [Resolved homepage](https://computing.llnl.gov/casc/ml)
- [Google Scholar](https://scholar.google.com/citations?user=lXpFxDwAAAAJ&hl=en)
- [GitHub](https://github.com/singhgautam)
- [LinkedIn](https://www.linkedin.com/in/gautam-singh-61302463/)
- [Social profile](https://twitter.com/gautamsi11)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Statistical Feature Selection Methods
**The paper assumes:** statistical hypothesis testing, feature selection techniques, ANOVA, Chi-Square tests for feature relevance
**Already in this field?** Skip this entirely if you already understand statistical hypothesis testing and how ANOVA and Chi-Square tests are used for feature selection in machine learning.

This background focuses on statistical feature selection methods, specifically ANOVA and Chi-Square, which are key to understanding the supervised dimensionality reduction techniques evaluated in the paper. The rigorous course provides a deep, structured university-level treatment of subset selection and related statistical decision theory concepts, while the fast track offers a concise, visual introduction to feature selection methods including ANOVA and Chi-Square for quick comprehension. Choose the course for thorough mastery or the fast track for a rapid, intuitive grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NPTEL MOOC Machine Learning 2016](https://www.youtube.com/playlist?list=PL1xHD4vteKYVpaIiy295pg6_SY5qznc77) — Machine Learning- Balaraman Ravindran · 88 videos · 21.7h across the first 60 episodes

**Watch only this:** Watch episodes 10-12 (Subset Selection 1, Subset Selection 2, Shrinkage Methods), about 1 hour 3 minutes total — these cover the core statistical feature selection methods relevant to the paper's supervised approaches.

*Why it unblocks this paper:* This NPTEL Machine Learning course by Balaraman Ravindran covers subset selection and statistical decision theory in detail, including lectures specifically on subset selection and hypothesis testing relevant to ANOVA and Chi-Square feature selection methods used in the paper.

*If you want all of it:* About 21.7 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Feature Selection](https://www.youtube.com/playlist?list=PL3FYbS3FoFIoHhNF-6QI2PN2BjUwE4wFa) — Learn with Vichu · 11 videos · 0.6h across 11 episodes

**Watch only this:** Watch episodes 1, 5, and 7 (What is feature selection? and why it is important?, ANOVA Clearly Explained, Chi-Square Clearly Explained), about 9 minutes total — these give a quick, clear understanding of the statistical methods central to the paper.

*Why it unblocks this paper:* This concise playlist from Learn with Vichu clearly explains feature selection concepts including ANOVA and Chi-Square with short, focused videos, providing an accessible introduction to the key supervised feature selection methods used in the paper.

*If you want all of it:* About 36 minutes across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'An Evaluation of Strategies for Dimensionality Reduction,' start by grasping the foundational challenge of the curse of dimensionality, which motivates the need for dimensionality reduction. Next, study the core supervised statistical feature selection methods (ANOVA and Chi-Square) that the paper finds most effective. Then, review unsupervised dimensionality reduction techniques like PCA and MDS to understand the baseline geometric methods compared. Also, learn about the quadratic discriminant analysis classifier used to evaluate the impact of these methods. Finally, focus on the paper's core concept by watching the authors' or related advanced talks on dimensionality reduction techniques and their comparative evaluation.

### Curse of dimensionality *(prerequisite)*
Understanding the curse of dimensionality is crucial as it explains why high-dimensional data complicates machine learning and motivates dimensionality reduction. This concept highlights the exponential growth of feature space volume and its impact on data sparsity and model performance.

*How the paper uses it:* The paper addresses the curse of dimensionality by evaluating methods to reduce feature dimensions effectively.

▶ [05b Machine Learning: Curse of Dimensionality](https://www.youtube.com/watch?v=fCdAP24CcOI) — GeostatsGuy Lectures · 20:04 · 7y ago

### Statistical feature selection *(prerequisite)*
Supervised statistical feature selection methods like ANOVA and Chi-Square are core to the paper's approach. Understanding these methods provides insight into how specific features are selected based on their statistical relevance to the target classes, which the paper finds superior to unsupervised methods.

*How the paper uses it:* The paper demonstrates that supervised statistical methods outperform unsupervised geometric methods for dimensionality reduction.

▶ [Feature Selection | Wrapper | Filter | Embeded Intrinsic Method in Machine Learning by Mahesh Huddar](https://www.youtube.com/watch?v=GJnSBhxWEEg) — Mahesh Huddar · 10:47 · 3y ago

### Unsupervised dimensionality reduction *(prerequisite)*
Unsupervised methods such as PCA and MDS form the baseline geometric approaches compared in the paper. Understanding these techniques helps contextualize why the paper finds supervised methods more effective in the studied dataset.

*How the paper uses it:* The paper compares unsupervised geometric methods like PCA and MDS against supervised statistical methods for dimensionality reduction.

▶ [Stanford CS229 Machine Learning I PCA/ICA I 2022 I Lecture 15](https://www.youtube.com/watch?v=FVLZG_oHUIw) — Stanford Online · 1:16:48 · 3y ago

### Quadratic discriminant analysis *(prerequisite)*
Quadratic discriminant analysis (QDA) is the classifier used in the paper to evaluate the impact of dimensionality reduction on classification accuracy. Understanding QDA's assumptions and mechanics is essential to interpret the paper's performance results.

*How the paper uses it:* The paper uses a quadratic discriminant classifier to assess the effectiveness of dimensionality reduction techniques.

▶ [Statistical Learning: 4.9 Quadratic Discriminant Analysis and Naive Bayes](https://www.youtube.com/watch?v=giCZkipHEmA) — Stanford Online · 10:08 · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The paper authors' own talks or closely related advanced university lectures provide direct insight into the methodology, mathematical foundations, and comparative evaluation of dimensionality reduction techniques. This is the most precise and relevant resource for understanding the paper's contributions.

*How the paper uses it:* Direct insight from the authors or related university lectures on dimensionality reduction techniques and their evaluation.

▶ [Dimensionality Reduction | ML-005 Lecture 14 | Stanford University | Andrew Ng](https://www.youtube.com/watch?v=pAwjiGkafbM) — Machine Learning and AI · 1:07:08 · 9y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the fundamental challenge of high-dimensional data known as the 'curse of dimensionality,' which motivates the need for dimensionality reduction. Then, learn about supervised statistical feature selection methods like ANOVA and Chi-Square that the paper found most effective. Next, explore unsupervised geometric dimensionality reduction techniques such as PCA and MDS to see baseline approaches. Finally, grasp the quadratic discriminant analysis classifier used to evaluate the impact of these methods on classification performance.

### Curse of dimensionality *(prerequisite)*
The curse of dimensionality refers to the problems that arise when data has too many features, making it sparse and hard for machine learning models to learn effectively. Understanding this challenge explains why reducing the number of features is crucial to improve model accuracy and efficiency.

*How the paper uses it:* The paper addresses this problem by applying dimensionality reduction techniques to mitigate the curse of dimensionality in a 13-feature wine dataset.

▶ [05b Machine Learning: Curse of Dimensionality](https://www.youtube.com/watch?v=fCdAP24CcOI) — GeostatsGuy Lectures · 20:04 · 7y ago

### Statistical feature selection *(prerequisite)*
Statistical feature selection methods like ANOVA and Chi-Square select the most relevant features based on their statistical relationship with the target variable, improving model performance by focusing on important data aspects.

*How the paper uses it:* The paper demonstrates that supervised statistical methods (ANOVA and Chi-Square) outperform unsupervised methods in reducing dimensionality for classification.

▶ [ML 7 : Features Selections & Feature Extractions with Examples #machinelearningfullcourse](https://www.youtube.com/watch?v=YRCLmV4t9lI) — CS & IT Tutorials by Vrushali 👩‍🎓 · 14:43 · 5y ago

### Unsupervised dimensionality reduction *(prerequisite)*
Unsupervised dimensionality reduction methods such as PCA and MDS reduce feature space by finding new combinations of features that capture the most variance or preserve distances, without using class labels.

*How the paper uses it:* The paper compares these unsupervised geometric methods against supervised statistical methods for dimensionality reduction on the wine dataset.

▶ [StatQuest: PCA main ideas in only 5 minutes!!!](https://www.youtube.com/watch?v=HMOI_lkzW08) — StatQuest with Josh Starmer · 6:05 · 8y ago

### Quadratic discriminant analysis *(prerequisite)*
Quadratic discriminant analysis (QDA) is a classifier that models each class with its own covariance matrix, allowing for nonlinear decision boundaries, which helps evaluate how well dimensionality reduction preserves class separability.

*How the paper uses it:* The paper uses QDA to assess classification accuracy after applying different dimensionality reduction techniques.

▶ [Statistical Learning: 4.9 Quadratic Discriminant Analysis and Naive Bayes](https://www.youtube.com/watch?v=giCZkipHEmA) — Stanford Online · 10:08 · 4y ago

## Already in your library

- [Lec-46: Principal Component Analysis (PCA) Explained | Machine Learning](https://www.youtube.com/watch?v=Dv-Kk7PDEas) — also for: A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation (Elizabeth Bradley)
- [PCA 1: curse of dimensionality](https://www.youtube.com/watch?v=IbE0tbjy6JQ) — also for: A Survey on Locality Sensitive Hashing Algorithms and their Applications (Parth Nagarkar)
- [Feature Selection Techniques Explained with Examples in Hindi ll Machine Learning Course](https://www.youtube.com/watch?v=vZDDmULsCUU) — also for: The Association Between Social Determinants of Health and Population Health Outcomes: Ecological Analysis (Yan Li)
- [Feature Selection](https://www.youtube.com/watch?v=KTzXVnRlnw4) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [What is Feature Engineering | Day 23 | 100 Days of Machine Learning](https://www.youtube.com/watch?v=sluoVhT0ehg) — also for: A Fraud-Detection-Inspired Framework for LLM Agents Security (Yingcheng Sun)
- [StatQuest: Principal Component Analysis (PCA), Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Latent Space Visualisation: PCA, t-SNE, UMAP | Deep Learning Animated](https://www.youtube.com/watch?v=o_cAOa5fMhE) — also for: Deconstructing Denoising Diffusion Models for Self-Supervised Learning (He He)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "An Evaluation of Strategies for Dimensionality Reduction." Starting with a simple implementation of PCA on the wine dataset, you then reimplement and compare supervised and unsupervised dimensionality reduction methods on the same dataset, and finally extend the study to a higher-dimensional dataset and explore dimensionality reduction beyond two dimensions, addressing the paper's limitations.

### Beginner — PCA Dimensionality Reduction on Wine Dataset
*Effort: a weekend, ~8 hours*

You build a Python notebook that loads the wine dataset, applies Principal Component Analysis (PCA) to reduce the 13 features to 2 dimensions, and visualizes the transformed data. You then train a quadratic discriminant classifier on the reduced data and report classification accuracy and F1 score using k-fold cross-validation.

**Why it shows you understood the paper:** This project shows you understand unsupervised dimensionality reduction and its impact on classification performance, replicating a core baseline from the paper.

**Grounded in:** The paper applies PCA to reduce the 13-dimensional wine dataset to 2 dimensions and evaluates classification accuracy with a quadratic discriminant classifier.

**Tech stack:** Python 3.11, scikit-learn, pandas, matplotlib, numpy, jupyter notebook

**Data:** The UCI Wine dataset (13 features, 3 classes), a well-known public dataset used as a substitute for the paper's wine dataset.

**Build it:**

1. Load the wine dataset using scikit-learn or from UCI repository.
2. Apply PCA to reduce the features from 13 to 2 dimensions.
3. Visualize the 2D transformed data with class labels.
4. Train a quadratic discriminant analysis classifier on the reduced data.
5. Evaluate performance using k-fold cross-validation, reporting error rate and F1 score.
6. Document results and compare with the paper's PCA baseline.

**Ships as:** A Jupyter notebook with code, visualizations, and performance metrics demonstrating PCA-based dimensionality reduction and classification on the wine dataset.

**Stretch goal:** Add Kernel PCA with polynomial and Gaussian kernels and compare their performance to PCA.

### Intermediate — Supervised vs Unsupervised Dimensionality Reduction on Wine Dataset
*Effort: 1-3 weekends*

You implement the six dimensionality reduction techniques from the paper: PCA, two Kernel PCA variants (polynomial and Gaussian kernels), Multidimensional Scaling (MDS), Chi-Square feature selection, and ANOVA feature selection. You reduce the wine dataset from 13 features to 2 dimensions/features accordingly, train a quadratic discriminant classifier, and compare classification error rates and F1 scores for each method.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core comparative study, showing you grasp the mathematical and practical differences between supervised statistical and unsupervised geometric methods and their impact on classification.

**Grounded in:** The paper compares six dimensionality reduction techniques on the 13-dimensional wine dataset, showing supervised methods outperform unsupervised ones in classification accuracy.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, scipy, jupyter notebook

**Data:** The UCI Wine dataset (13 features, 3 classes), used as a substitute for the paper's wine dataset.

**Build it:**

1. Load the wine dataset and preprocess as needed.
2. Implement PCA, Kernel PCA (polynomial and Gaussian kernels), and MDS for unsupervised dimensionality reduction to 2 dimensions.
3. Implement Chi-Square and ANOVA feature selection to select top 2 features.
4. Train a quadratic discriminant classifier on each reduced dataset.
5. Evaluate each method using k-fold cross-validation, reporting error rates and F1 scores.
6. Visualize and tabulate the comparative results.
7. Write a README summarizing the findings and relating them to the paper's results.

**Ships as:** A well-documented Jupyter notebook or Python scripts comparing six dimensionality reduction methods on the wine dataset with classification metrics and visualizations.

**Stretch goal:** Add another classifier type (e.g., Random Forest or SVM) to evaluate if the performance trends hold across classifiers.

### Advanced — Extending Dimensionality Reduction to Higher Dimensions and Datasets
*Effort: a few weeks*

You extend the paper's study by applying supervised (ANOVA, Chi-Square) and unsupervised (PCA, Kernel PCA, MDS) dimensionality reduction methods to a higher-dimensional public dataset (e.g., the UCI Parkinson's Disease dataset with 22 features or another suitable dataset). You explore reducing to more than two dimensions (e.g., 3 to 5) and evaluate classification performance with multiple classifiers (quadratic discriminant analysis plus one other). You analyze how dimensionality and dataset characteristics affect method performance and interpretability.

**Why it shows you understood the paper:** This project addresses the paper's limitations and future directions by scaling methods to higher-dimensional data and multiple classifiers, demonstrating deep comprehension of dimensionality reduction challenges and practical trade-offs.

**Grounded in:** The paper notes limitations including evaluation on only one dataset, reduction to two dimensions only, and use of a single classifier; it suggests exploring other datasets, higher dimensions, and classifiers.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, seaborn, scipy, jupyter notebook

**Data:** A higher-dimensional public dataset such as the UCI Parkinson's Disease dataset or another with >13 features and multiple classes, used as a substitute for extending the paper's wine dataset.

**Build it:**

1. Select and load a suitable higher-dimensional public dataset with multiple classes.
2. Implement or reuse dimensionality reduction methods: PCA, Kernel PCA, MDS, Chi-Square, and ANOVA.
3. Reduce the dataset to multiple target dimensions (e.g., 2, 3, 5) using each method.
4. Train quadratic discriminant analysis and one additional classifier (e.g., Random Forest or SVM) on each reduced dataset.
5. Evaluate classification performance with k-fold cross-validation, reporting error rates and F1 scores.
6. Analyze and visualize how dimensionality and method choice affect performance and interpretability.
7. Document findings in a detailed report comparing results to the original paper's conclusions.

**Ships as:** A comprehensive project repository with code, analysis notebooks, and a report extending the paper's dimensionality reduction evaluation to higher dimensions and datasets.

**Stretch goal:** Investigate hybrid dimensionality reduction methods combining supervised and unsupervised approaches and evaluate their performance.
