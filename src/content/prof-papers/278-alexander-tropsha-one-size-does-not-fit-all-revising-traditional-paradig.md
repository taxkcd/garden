---
title: "278 · One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening — Alexander Tropsha"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-tropsha"
source_hash: "5f3d23b2a7b4c4d227f635fcbd961323ab93c1d42f34287b150cdc3796a52004"
sequence: 278
generator: "outreach-garden: managed"
---

# 278 · One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening

## At a glance

- **Professor:** Alexander Tropsha
- **Institution:** University of North Carolina
- **Paper:** [One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening](https://europepmc.org/articles/PMC11740363?pdf=render)
- **Authors:** James Wellnitz, Sankalp Jain, Joshua E. Hochuli, Travis Maxfield, Eugene N. Muratov, Alexander Tropsha, Alexey V. Zakharov
- **Year:** 2025

## Paper overview

This study challenges the traditional practice of balancing datasets and using balanced accuracy to evaluate QSAR models for virtual screening in drug discovery. It shows that models trained on imbalanced datasets and evaluated by positive predictive value (PPV) perform better in identifying active compounds for experimental testing, which is crucial when only a small number of compounds can be tested.

### Why it matters

**Research problem:** Traditional QSAR modeling best practices recommend dataset balancing and balanced accuracy as key metrics, but these may not be optimal for virtual screening of large chemical libraries where only a small fraction of predicted actives can be experimentally tested.

**Why it matters:** False positives in virtual screening are costly due to compound acquisition and experimental validation efforts. Improving the accuracy of hit nomination can reduce wasted resources and accelerate drug discovery.

**Key contributions:**

- Demonstrated that models trained on imbalanced datasets have significantly higher PPV and hit rates in top-ranked virtual screening hits compared to balanced datasets.
- Showed that balanced accuracy is a poor metric for assessing QSAR model performance in virtual screening contexts.
- Proposed using PPV, especially PPV-N (PPV of top N compounds), as a more relevant and interpretable metric for virtual screening performance.
- Provided evidence that traditional dataset balancing reduces the effectiveness of QSAR models for hit nomination in high-throughput virtual screening (HTVS).

## About the professor

**Alexander Tropsha** — University of North Carolina.

### Research links

- [Faculty/profile page](https://sdis.unc.edu/person/alexander-tropsha/)
- [Identity evidence](http://cs.unc.edu/people/alexander-tropsha)
- [Identity evidence](https://scholar.google.com/citations?user=Ov5nq0wAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's contributions on revising QSAR model evaluation for virtual screening, start with foundational knowledge on QSAR modeling principles and virtual screening in drug discovery. Then, grasp the challenges of imbalanced dataset training and the limitations of traditional model evaluation metrics. Finally, focus on the paper's core concept by reviewing the authors' own talks and advanced lectures on QSAR modeling and virtual screening, emphasizing the novel use of PPV-N and imbalanced training strategies.

### QSAR modeling fundamentals *(prerequisite)*
This section provides foundational understanding of QSAR modeling principles, essential for grasping how molecular structures relate to biological activity and how models are constructed. It sets the stage for appreciating the paper's focus on improving QSAR model evaluation.

*How the paper uses it:* The paper builds on QSAR modeling principles to propose new evaluation metrics and training paradigms.

▶ [04a - QSAR Modeling Predicting Drug Potency from Structure](https://www.youtube.com/watch?v=RYDmWeYVog0) — DigitalSreeni · 9 days ago

### Virtual screening in drug discovery *(prerequisite)*
Understanding virtual screening is critical as it is the application context for QSAR models in this paper. This section covers how computational methods prioritize compounds for experimental testing, highlighting the importance of accurate hit nomination.

*How the paper uses it:* The paper targets QSAR model performance specifically in the context of high-throughput virtual screening.

▶ [Introduction to Virtual Screening - Stefano Forli](https://www.youtube.com/watch?v=8Q0tk6HtRuc) — The Qualcomm Institute · 10 years ago

### Imbalanced dataset training in QSAR *(prerequisite)*
This section explains the challenges and strategies for handling imbalanced datasets in machine learning, which is central to the paper's approach of training QSAR models on imbalanced data to improve hit rates.

*How the paper uses it:* The paper demonstrates that training on imbalanced datasets yields better virtual screening performance than traditional balancing.

▶ [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — CampusX · 57:17 · 2 years ago

### Model evaluation metrics for imbalanced data *(prerequisite)*
This section covers the strengths and weaknesses of common evaluation metrics like balanced accuracy, AUROC, and introduces why some metrics fail in imbalanced contexts. This understanding is necessary to appreciate the paper's critique of balanced accuracy.

*How the paper uses it:* The paper shows balanced accuracy is a poor metric for virtual screening and proposes alternatives.

▶ [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) — StatQuest with Josh Starmer · 7 years ago

### Positive predictive value and PPV-N metric
This section focuses on the positive predictive value (PPV) and the PPV-N metric, which the paper proposes as superior metrics for evaluating QSAR models in virtual screening. Understanding these metrics is key to grasping the paper's main contributions.

*How the paper uses it:* The paper advocates PPV-N as a more relevant and interpretable metric for virtual screening performance.

▶ [Positive Predictive Value & Disease Prevalence](https://www.youtube.com/watch?v=QqgJHryKOSU) — Medmastery · 5:13 · 7 years ago

### Paper authors talk *(the paper's own talk)*
This section features talks and lectures by the paper's authors or closely related academic presentations on QSAR modeling and virtual screening, providing direct insight into the research findings and methodology.

*How the paper uses it:* Direct source for the authors' presentation on their novel findings about QSAR model evaluation and training.

▶ [05 - Virtual Screening with QSAR](https://www.youtube.com/watch?v=J4HApqz-CR8) — DigitalSreeni · 35:06 · 1 day ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts of QSAR modeling and virtual screening in drug discovery, then explains challenges with imbalanced datasets and traditional evaluation metrics. It concludes by focusing on the key metric proposed in the paper, Positive Predictive Value (PPV) and its variant PPV-N, to understand why these better assess model performance in virtual screening contexts.

### QSAR modeling fundamentals *(prerequisite)*
Learn what QSAR (Quantitative Structure-Activity Relationship) modeling is and how it predicts biological activity from chemical structure. This foundation helps you understand how computational models are built to prioritize compounds in drug discovery.

*How the paper uses it:* The paper builds on QSAR modeling to improve virtual screening accuracy by revising traditional practices.

▶ [04a - QSAR Modeling Predicting Drug Potency from Structure](https://www.youtube.com/watch?v=RYDmWeYVog0) — DigitalSreeni · 9 days ago

### Virtual screening in drug discovery *(prerequisite)*
Virtual screening uses computational models to quickly evaluate large libraries of compounds and identify promising candidates for experimental testing. Understanding this context clarifies why model accuracy and evaluation metrics matter.

*How the paper uses it:* The paper focuses on improving QSAR models specifically for virtual screening applications.

▶ [Introduction to Virtual Screening - Stefano Forli](https://www.youtube.com/watch?v=8Q0tk6HtRuc) — The Qualcomm Institute · 10 years ago

### Imbalanced dataset training in QSAR
Imbalanced datasets have many more inactive than active compounds, which challenges traditional machine learning methods. This section explains why training on imbalanced data can actually improve model performance in virtual screening.

*How the paper uses it:* The paper demonstrates that models trained on imbalanced datasets outperform balanced ones in hit nomination.

▶ [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — CampusX · 57:17 · 2 years ago

### Model evaluation metrics for imbalanced data *(prerequisite)*
Explore common metrics like balanced accuracy, AUROC, and why they may fail to reflect true model utility in imbalanced scenarios. This helps understand the limitations of traditional evaluation approaches.

*How the paper uses it:* The paper shows balanced accuracy is a poor metric for virtual screening and motivates alternative metrics.

▶ [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) — StatQuest with Josh Starmer · 7 years ago

### Positive predictive value and PPV-N metric
Positive Predictive Value (PPV) measures the proportion of predicted positives that are true positives, directly reflecting hit rate. PPV-N focuses on the top N nominated compounds, making it highly relevant for virtual screening prioritization.

*How the paper uses it:* The paper proposes PPV and PPV-N as superior, interpretable metrics for assessing QSAR models in virtual screening.

▶ [Positive Predictive Value & Disease Prevalence](https://www.youtube.com/watch?v=QqgJHryKOSU) — Medmastery · 5:13 · 7 years ago

## Already in your library

- [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core findings about QSAR model evaluation for virtual screening. Starting with a simple metric calculation on synthetic or public data, you then reimplement the paper's core method on a smaller dataset to compare balanced vs. imbalanced training. Finally, you extend the approach by addressing a stated limitation or future direction, such as applying PPV-N to a new domain or incorporating hyperparameter tuning. Each project leverages your existing software engineering and ML skills while deepening your grasp of the paper's contributions.

### Beginner — Calculate PPV and PPV-N on a Synthetic Imbalanced Dataset
*Effort: a weekend, ~8 hours*

You build a small Python notebook that generates a synthetic binary classification dataset with a strong class imbalance. You train a simple gradient boosting classifier (e.g., using scikit-learn's HistGradientBoostingClassifier) on the imbalanced data and compute evaluation metrics including balanced accuracy, PPV, and PPV-N for the top N predicted positives. You visualize how PPV and PPV-N better reflect hit nomination quality compared to balanced accuracy.

**Why it shows you understood the paper:** This project shows you understand the paper's critique of balanced accuracy and the importance of PPV-N as a metric tailored for virtual screening. It demonstrates your ability to reproduce the key metric calculations and interpret their implications on imbalanced data.

**Grounded in:** Proposed using PPV, especially PPV-N (PPV of top N compounds), as a more relevant and interpretable metric for virtual screening performance.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Synthetic binary classification dataset generated with class imbalance to simulate active vs inactive compounds.

**Build it:**

1. Generate a synthetic binary classification dataset with a 1:10 ratio of positive to negative samples.
2. Train a gradient boosting classifier on the imbalanced dataset without balancing.
3. Predict probabilities on a test split and rank compounds by predicted probability of being active.
4. Calculate balanced accuracy, PPV, and PPV-N (e.g., top 50 predictions) metrics.
5. Visualize and compare these metrics to highlight the advantages of PPV-N.

**Ships as:** A Jupyter notebook with code, metric calculations, and plots demonstrating PPV-N's relevance over balanced accuracy on imbalanced data.

**Stretch goal:** Add a balanced training scenario and compare metrics side-by-side to replicate the paper's finding that balanced accuracy can be misleading.

### Intermediate — Reimplement Imbalanced vs Balanced QSAR Model Training on a Public Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core method of the paper by training QSAR-like classifiers on a publicly available, imbalanced chemical bioactivity dataset (e.g., a PubChem subset or ChEMBL bioactivity data). You train gradient boosting models on both the original imbalanced dataset and a balanced version (via undersampling or oversampling). You evaluate and compare model performance using PPV-N, balanced accuracy, AUROC, and BEDROC, focusing on the number of true actives in the top N nominated compounds.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's main experimental comparison and metrics on real chemical data. It shows you grasp the impact of dataset balancing on virtual screening performance and the practical utility of PPV-N.

**Grounded in:** Demonstrated that models trained on imbalanced datasets have significantly higher PPV and hit rates in top-ranked virtual screening hits compared to balanced datasets.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** A publicly available chemical bioactivity dataset from PubChem or ChEMBL with inherent class imbalance, used as a substitute for the paper's five PubChem datasets.

**Build it:**

1. Download and preprocess a public chemical bioactivity dataset with binary activity labels and molecular descriptors or fingerprints.
2. Split the data into training and test sets maintaining the original imbalance.
3. Train a gradient boosting classifier on the imbalanced training set.
4. Create a balanced training set by undersampling the majority class and train a second model.
5. Evaluate both models on the test set using balanced accuracy, PPV, PPV-N (top 128), AUROC, and BEDROC.
6. Visualize and compare the metrics to confirm that imbalanced training yields higher PPV-N and hit rates.

**Ships as:** A GitHub repository with code, data preprocessing scripts, model training, evaluation notebooks, and a README explaining the comparison and results.

**Stretch goal:** Incorporate hyperparameter tuning or feature selection to explore their effects on PPV-N performance.

### Advanced — Extend PPV-N Metric and Imbalanced Training to Genomic Variant Prioritization
*Effort: 3+ weeks*

You extend the paper's core idea by applying the PPV-N metric and imbalanced training approach to a new domain: genomic variant prioritization for disease association. Using a public genomic variant dataset with imbalanced labels (e.g., pathogenic vs benign variants), you train classifiers with and without balancing and evaluate using PPV-N and other metrics. You investigate whether the paradigm shift advocated in the paper generalizes beyond cheminformatics, addressing a stated future direction.

**Why it shows you understood the paper:** This project shows you can transfer the paper's insights to a novel domain, addressing a key future direction. It demonstrates your ability to handle domain-specific data preprocessing, adapt evaluation metrics, and critically assess the generalizability of the PPV-N metric and imbalanced training benefits.

**Grounded in:** Extending the PPV-N metric and imbalanced training approach to other domains such as genomics, medicine, and information retrieval.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** A public genomic variant dataset with binary pathogenicity labels and features, such as from ClinVar or similar repositories, used to simulate the imbalanced classification problem.

**Build it:**

1. Identify and download a public genomic variant dataset with binary labels and feature annotations.
2. Preprocess the data to extract relevant features and split into training and test sets with original imbalance.
3. Train classifiers (e.g., gradient boosting) on imbalanced and balanced training sets.
4. Evaluate models using PPV, PPV-N (top N variants), balanced accuracy, AUROC, and other relevant metrics.
5. Analyze whether imbalanced training improves PPV-N and hit nomination in this domain.
6. Document findings and discuss implications for extending QSAR virtual screening paradigms to genomics.

**Ships as:** A comprehensive GitHub repository with data processing, model training, evaluation code, and a detailed report/README discussing the extension and results.

**Stretch goal:** Incorporate advanced domain applicability filtering or hyperparameter optimization to further improve model performance and PPV-N.
