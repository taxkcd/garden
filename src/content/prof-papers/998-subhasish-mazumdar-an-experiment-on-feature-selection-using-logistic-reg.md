---
title: "998 · An Experiment on Feature Selection using Logistic Regression — Subhasish Mazumdar"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-subhasish-mazumdar"
source_hash: "78a718759f849052eaa5fd20cb8bd3495ee19b8f1a0f2dedd45b3bc4672e7e91"
sequence: 998
generator: "outreach-garden: managed"
---

# 998 · An Experiment on Feature Selection using Logistic Regression

## At a glance

- **Professor:** Subhasish Mazumdar
- **Institution:** New Mexico Tech
- **Paper:** [An Experiment on Feature Selection using Logistic Regression](https://arxiv.org/pdf/2402.00201)
- **Authors:** Raisa Islam, Subhasish Mazumdar, Rakibul Islam
- **Year:** 2024

## Paper overview

This paper investigates a method to select important features in machine learning classification tasks using logistic regression with L1 and L2 regularization. The authors synthesize features selected by both methods to reduce the number of features significantly while maintaining high accuracy. They test this approach on a large, real-world network intrusion detection dataset and evaluate performance on logistic regression, decision trees, and random forests.

### Why it matters

**Research problem:** Feature selection in supervised machine learning to reduce dimensionality, improve model interpretability, and maintain or improve classification accuracy, especially in the presence of class imbalance and problematic classes that are hard to separate.

**Why it matters:** Reducing the number of features can prevent overfitting, reduce computational cost, and improve explainability of models. This is critical for large, complex datasets like network intrusion detection data where some classes are difficult to distinguish.

**Key contributions:**

- Proposed a feature selection method synthesizing top features from logistic regression with L1 and L2 regularization.
- Demonstrated that a small common feature set (22 features, 72% reduction) can maintain or exceed baseline accuracy for logistic regression and complex models.
- Evaluated the method on a large, real-world intrusion detection dataset with class imbalance and problematic classes.
- Showed that decision tree and random forest classifiers maintain high accuracy with the reduced feature set, even when including problematic classes.

## About the professor

**Subhasish Mazumdar** — Department Chair, Associate Professor, Computer Science & Engineering, New Mexico Tech.

Research interests: Mobile data management, Document databases, Integrating heterogeneous data sources, Information and knowledge systems

### Research links

- [Faculty/profile page](https://nmt.edu/academics/compsci/faculty/smazumdar.php)
- [Professor website](https://www.cs.nmt.edu/~mazumdar/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Regularized Logistic Regression
**The paper assumes:** logistic regression, L1 and L2 regularization in machine learning, feature selection methods
**Already in this field?** Skip this entirely if you already understand logistic regression and the role of L1 and L2 regularization in feature selection.

This background focuses on understanding regularized logistic regression, the core method used in the paper for feature selection with L1 and L2 penalties. The rigorous course option offers a deep, university-level foundation on logistic regression and related machine learning concepts, while the fast track provides a concise, intuition-driven explanation of logistic regression and regularization. Readers can choose the rigorous path for thorough understanding or the fast track for a quick yet solid grasp of the essentials.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 3 (Locally Weighted & Logistic Regression), 4 (Perceptron & Generalized Linear Model), 8 (Data Splits, Models & Cross-Validation), and 12 (Debugging ML Models and Error Analysis), about 5.5 hours total — these cover logistic regression fundamentals, regularization concepts, and evaluation techniques relevant to the paper.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative, comprehensive machine learning course that covers logistic regression, regularization (L1 and L2), and model evaluation in depth, providing the theoretical and practical foundation necessary to fully understand the paper's feature selection approach.

*If you want all of it:* Approximately 27.9 hours across all 21 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [StatQuest Logistic regression](https://www.youtube.com/playlist?list=PL0_LwEsp5CDAbTbtfEUBI-6xa2fx8kaYn) — sun aung · 9 videos · 1.5h across the first 8 episodes

**Watch only this:** Episodes 1 (StatQuest: Logistic Regression), 5 (Regularization Part 1: Ridge (L2) Regression), and 6 (Regularization Part 2: Lasso (L1) Regression), about 33 minutes total — these focus specifically on logistic regression and the two regularization methods used in the paper.

*Why it unblocks this paper:* The StatQuest playlist on Logistic Regression offers clear, visual, and intuition-first explanations of logistic regression and regularization (L1 and L2), making it ideal for quickly grasping the key concepts underlying the paper's method without the depth of a full course.

*If you want all of it:* About 1.5 hours across the first 8 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on feature selection using logistic regression, start with foundational knowledge on imbalanced classification and tree-based classifiers to grasp dataset challenges and evaluation methods. Then, study feature selection methods to comprehend dimensionality reduction techniques. Next, focus on regularized logistic regression, the core method for feature ranking in the paper. Finally, conclude with the authors' own talk or the most relevant advanced lecture on logistic regression and feature selection to connect all concepts directly to the paper's contributions.

### Imbalanced classification *(prerequisite)*
Understanding class imbalance is crucial because the paper deals with a large, imbalanced intrusion detection dataset with problematic classes. This section covers the challenges and evaluation metrics related to imbalanced data, which affect model performance and feature selection.

*How the paper uses it:* The paper evaluates feature selection on an imbalanced dataset with challenging classes, making knowledge of imbalanced classification essential.

▶ [9.4 Addressing Class Imbalance \[Applied Machine Learning || Varada Kolhatkar || UBC\]](https://www.youtube.com/watch?v=jHaKRCFb6Qw) — Applied Machine Learning · 14:48 · 5y ago

### Tree-based classifiers *(prerequisite)*
Tree-based classifiers like decision trees and random forests are used in the paper to evaluate the reduced feature sets beyond logistic regression. This section explains their mechanisms and why they maintain accuracy with fewer features.

*How the paper uses it:* The paper tests the synthesized feature set on decision tree and random forest classifiers to demonstrate robustness across models.

▶ [MIT: Machine Learning 6.036, Lecture 12: Decision trees and random forests (Fall 2020)](https://www.youtube.com/watch?v=ZOiBe-nrmc4) — Tamara Broderick · 1:20:33 · 5y ago

### Feature selection methods *(prerequisite)*
Feature selection is fundamental to reducing dimensionality and improving model interpretability and performance. This section covers various feature selection techniques, providing context for the paper's novel synthesis approach combining L1 and L2 regularization rankings.

*How the paper uses it:* The paper proposes synthesizing feature rankings from L1 and L2 logistic regression for effective feature selection.

▶ [Stanford CS229 Machine Learning I Supervised learning setup, LMS I 2022 I Lecture 2](https://www.youtube.com/watch?v=gqKaVgQxEJ0) — Stanford Online · 59:56 · 3y ago

### Regularized logistic regression
Regularized logistic regression with L1 and L2 penalties is the core method used in the paper to rank features for selection. This section explains the theory and practical implications of these regularization techniques in logistic regression.

*How the paper uses it:* The paper uses logistic regression with L1 and L2 regularization to identify important features for classification.

▶ [Machine Learning Lecture 11 "Logistic Regression" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=GnkDzIOxfzI) — Kilian Weinberger · 47:39 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to feature selection using logistic regression with L1 and L2 regularization. It starts with the basics of feature selection and imbalanced classification to grasp dataset challenges, then covers tree-based classifiers used for evaluation, and finally explains regularized logistic regression, the core method for ranking features in the paper.

### Feature selection methods *(prerequisite)*
Feature selection is the process of identifying the most relevant features in a dataset to improve model performance, reduce overfitting, and enhance interpretability. This video explains common feature selection techniques and why they matter in machine learning.

*How the paper uses it:* The paper proposes synthesizing features selected by L1 and L2 regularization to reduce dimensionality while maintaining accuracy.

▶ [All Major Feature Selection Methods in Machine Learning Explained](https://www.youtube.com/watch?v=xHrR3yHrXMw) — Learn with Whiteboard · 11:32 · 2y ago

### Imbalanced classification *(prerequisite)*
Imbalanced classification deals with datasets where some classes have far fewer samples than others, which can bias model training and evaluation. Understanding this helps in appreciating the challenges the paper addresses with the CIC-IDS2018 dataset.

*How the paper uses it:* The paper evaluates feature selection on a large, imbalanced intrusion detection dataset with problematic classes.

▶ [5 ways to work with imbalanced data | Imbalanced dataset machine learning | Imbalanced data](https://www.youtube.com/watch?v=JisESsmQDS8) — Unfold Data Science · 23:10 · 4y ago

### Tree-based classifiers *(prerequisite)*
Decision trees and random forests are popular classifiers that use tree structures to make predictions. They are robust to feature selection and are used in the paper to test the effectiveness of the reduced feature sets.

*How the paper uses it:* The paper tests the selected feature sets on decision tree and random forest classifiers to validate performance beyond logistic regression.

▶ [MIT: Machine Learning 6.036, Lecture 12: Decision trees and random forests (Fall 2020)](https://www.youtube.com/watch?v=ZOiBe-nrmc4) — Tamara Broderick · 1:20:33 · 5y ago

### Regularized logistic regression
Regularized logistic regression uses L1 (Lasso) and L2 (Ridge) penalties to prevent overfitting and perform feature selection by shrinking some coefficients to zero or near zero. This video explains these concepts clearly and how they help in ranking features.

*How the paper uses it:* The paper's core method ranks features using logistic regression with L1 and L2 regularization before synthesizing a common feature set.

▶ [L1 vs L2 Regularization](https://www.youtube.com/watch?v=aBgMRXSqd04) — DataMListic · 4:04 · 1y ago

## Already in your library

- [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Logistic Regression \[Simply explained\]](https://www.youtube.com/watch?v=C5268D9t9Ak) — also for: Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry (Cindy X. Chen)
- [Locally Weighted & Logistic Regression | Stanford CS229: Machine Learning - Lecture 3 (Autumn 2018)](https://www.youtube.com/watch?v=het9HFqo1TQ) — also for: Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry (Cindy X. Chen)
- [Feature Selection](https://www.youtube.com/watch?v=KTzXVnRlnw4) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Feature Selection Techniques Explained with Examples in Hindi ll Machine Learning Course](https://www.youtube.com/watch?v=vZDDmULsCUU) — also for: The Association Between Social Determinants of Health and Population Health Outcomes: Ecological Analysis (Yan Li)
- [What is Feature Engineering | Day 23 | 100 Days of Machine Learning](https://www.youtube.com/watch?v=sluoVhT0ehg) — also for: A Fraud-Detection-Inspired Framework for LLM Agents Security (Yingcheng Sun)
- [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — also for: One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening (Alexander Tropsha)
- [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)
- [What Is Balanced And Imbalanced Dataset How to handle imbalanced datasets in ML DM by Mahesh Huddar](https://www.youtube.com/watch?v=KR-eWajtTfo) — also for: Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning (Anne H. H. Ngu)
- [Lecture 9 - Decision Trees and Ensemble Methods | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=wr9gUr-eWdA) — also for: Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure (Benjamin C. Lee)
- [Machine Learning Lecture 29 "Decision Trees / Regression Trees" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=a3ioGSwfVpE) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [StatQuest: Random Forests Part 1 - Building, Using and Evaluating](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Random Forest Algorithm Clearly Explained!](https://www.youtube.com/watch?v=v6VJ2RO66Ag) — also for: KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description (David Koslicki)
- [Visual Guide to Random Forests](https://www.youtube.com/watch?v=cIbj0WuK41w) — also for: GMIA-NEXT: Next-Generation Global Map of Irrigated Areas (Michela Taufer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's feature selection method using logistic regression with L1 and L2 regularization. The beginner project reproduces a core mechanism on a small scale using familiar tools. The intermediate project implements the paper's synthesis feature selection method on a public dataset, comparing performance with baseline feature selection. The advanced project extends the method to address the paper's limitation by applying it to a different dataset with heterogeneous or noisy features, exploring robustness and generalization.

### Beginner — Feature Ranking with L1 and L2 Logistic Regression
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads a standard classification dataset (e.g., UCI Breast Cancer), fits logistic regression models with L1 and L2 regularization separately, and extracts feature importance rankings from each. Then you identify the intersection of top-ranked features from both methods and compare classification accuracy using the full feature set versus the reduced common feature set.

**Why it shows you understood the paper:** This project shows you understand how the paper synthesizes feature rankings from L1 and L2 logistic regression to select a reduced feature set and how this affects model accuracy.

**Grounded in:** The paper's key contribution: "Proposed a feature selection method synthesizing top features from logistic regression with L1 and L2 regularization."

**Tech stack:** Python 3.x, scikit-learn, Jupyter Notebook

**Data:** UCI Breast Cancer Wisconsin (Diagnostic) dataset, a well-known public dataset for binary classification, used here as a substitute for the paper's CIC-IDS2018 dataset.

**Build it:**

1. Load the UCI Breast Cancer dataset using scikit-learn or pandas.
2. Preprocess data as needed (e.g., scaling).
3. Train logistic regression models with L1 and L2 regularization separately, using scikit-learn's LogisticRegression with appropriate penalty parameters.
4. Extract and rank features by their absolute coefficient magnitudes from each model.
5. Find the intersection of top N features from both rankings (e.g., top 10).
6. Train a logistic regression model using only the intersected features and compare accuracy to the full feature set.

**Ships as:** A Jupyter notebook showing feature rankings from L1 and L2 logistic regression, the intersected feature set, and classification accuracy comparisons with clear explanations.

**Stretch goal:** Visualize the feature coefficient distributions for L1 and L2 models and analyze differences.

### Intermediate — Synthesis Feature Selection on CIC-IDS2018 Subset
*Effort: 1-3 weekends*

You implement the paper's core feature selection method by training logistic regression models with L1 and L2 regularization on a publicly available subset of the CIC-IDS2018 dataset or a similar network intrusion detection dataset. You synthesize the common features from both rankings, then evaluate classification accuracy using logistic regression, decision tree, and random forest classifiers on the reduced feature set versus the full feature set.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method on a real-world imbalanced dataset, reproducing the key result that a small common feature set maintains high accuracy across multiple classifiers.

**Grounded in:** The paper's key result: "Using 22 common features, logistic regression achieved ~91% accuracy excluding the problematic class, close to full feature set accuracy (~95%). Decision tree and random forest classifiers had accuracy losses of less than 1% with the reduced feature set."

**Tech stack:** Python 3.x, scikit-learn, pandas, numpy, Jupyter Notebook

**Data:** A publicly available subset of the CIC-IDS2018 dataset or a similar network intrusion detection dataset with class imbalance, used as a substitute since the paper's authors did not release code or data.

**Build it:**

1. Obtain and preprocess the CIC-IDS2018 dataset subset (or a similar public intrusion detection dataset).
2. Train logistic regression models with L1 and L2 regularization separately to rank features.
3. Identify the common features present in both L1 and L2 top-ranked feature sets.
4. Train logistic regression, decision tree, and random forest classifiers using the full feature set and the reduced common feature set.
5. Compare classification accuracy and report results similar to the paper's metrics.
6. Document findings and discuss any differences or challenges encountered.

**Ships as:** A Jupyter notebook or Python scripts with clear documentation showing feature selection synthesis, classifier training, and accuracy comparisons on the network intrusion dataset.

**Stretch goal:** Implement additional evaluation metrics such as precision, recall, and F1-score to analyze performance on imbalanced classes.

### Advanced — Robust Feature Selection for Heterogeneous and Noisy Data
*Effort: a few weeks*

You extend the paper's synthesis feature selection method by applying it to a different dataset with heterogeneous or noisy features, such as a mobile sensor dataset or a distributed data environment dataset. You develop heuristics to predict the size of the common feature set and explore strategies to handle problematic or confounding classes during feature selection. You evaluate the robustness and generalizability of the method beyond the original dataset.

**Why it shows you understood the paper:** This project tackles the paper's stated limitations and future directions by validating the method on new data domains and addressing challenges with problematic classes, demonstrating deep comprehension and research potential.

**Grounded in:** The paper's limitations and future directions: "Apply the feature selection method to other datasets to validate general efficacy." and "Explore handling of problematic classes and confounding classes in feature selection."

**Tech stack:** Python 3.x, scikit-learn, pandas, numpy, Jupyter Notebook, matplotlib or seaborn for visualization

**Data:** A publicly available dataset with heterogeneous or noisy features, such as a mobile sensor dataset (e.g., UCI Human Activity Recognition Using Smartphones), used to test generalization beyond CIC-IDS2018.

**Build it:**

1. Select and preprocess a heterogeneous or noisy dataset suitable for classification.
2. Implement the synthesis feature selection method using logistic regression with L1 and L2 regularization.
3. Develop heuristics or rules to estimate the expected size of the common feature set before synthesis.
4. Investigate and implement strategies to handle problematic or confounding classes during feature selection.
5. Train classifiers (logistic regression, decision tree, random forest) on the reduced feature set and evaluate performance.
6. Analyze results, compare with baseline feature selection methods, and document insights on robustness and generalization.

**Ships as:** A comprehensive project repository with code, analysis notebooks, and a detailed README discussing the extension of the synthesis method to heterogeneous data and handling problematic classes.

**Stretch goal:** Integrate the feature selection pipeline into a lightweight web app or API to allow interactive exploration of feature subsets and model performance.
