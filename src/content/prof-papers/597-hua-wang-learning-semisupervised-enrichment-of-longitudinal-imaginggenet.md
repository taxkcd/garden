---
title: "597 · Learning semi‑supervised enrichment of longitudinal imaging‑genetic data for improved prediction of cognitive decline — Hua Wang"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hua-wang"
source_hash: "2916ecfbba77ed28442555c2ee6209ca1b20eff422efbd7211edba7e19bd2e41"
sequence: 597
generator: "outreach-garden: managed"
---

# 597 · Learning semi‑supervised enrichment of longitudinal imaging‑genetic data for improved prediction of cognitive decline

## At a glance

- **Professor:** Hua Wang
- **Institution:** Colorado School of Mines
- **Paper:** [Learning semi‑supervised enrichment of longitudinal imaging‑genetic data for improved prediction of cognitive decline](https://doi.org/10.1186/s12911-024-02455-w)
- **Authors:** Hoon Seo, Lodewijk Brand, Hua Wang, for the Alzheimer’s Disease Neuroimaging Initiative
- **Year:** 2024

## Paper overview

This paper presents a novel semi-supervised machine learning method that integrates longitudinal neuroimaging data and static genetic data to create enriched biomarker representations for each participant. These representations improve the prediction accuracy of cognitive decline related to Alzheimer's disease (AD). The method handles missing temporal data and leverages multi-modal data to better track disease progression and identify relevant biomarkers.

### Why it matters

**Research problem:** Existing models for predicting cognitive decline in Alzheimer's disease often fail to integrate heterogeneous longitudinal phenotype data with genetic information, struggle with incomplete temporal records, and cannot effectively leverage multi-modal data for improved prediction accuracy.

**Why it matters:** Early and accurate detection of Alzheimer's disease progression is critical due to its irreversible nature and lack of cure. Improving prediction models by integrating multi-modal longitudinal and genetic data can aid in early diagnosis, better understanding of disease mechanisms, and identification of biomarkers for therapeutic targets.

**Key contributions:**

- Development of a semi-supervised learning method to integrate longitudinal imaging and genetic data into enriched biomarker representations.
- Handling of incomplete temporal neuroimaging data without discarding samples or relying on imputation.
- Incorporation of group-structured genetic data using structured sparsity norms.
- Demonstration of improved prediction accuracy of cognitive decline using enriched representations compared to original biomarker data.
- Identification of Alzheimer's disease relevant neuroimaging and genetic biomarkers consistent with existing literature.

## About the professor

**Hua Wang** — Associate Professor, Computer Science, Colorado School of Mines.

Research interests: machine learning, data mining, artificial intelligence

### Research links

- [Faculty/profile page](https://inside.mines.edu/~huawang)
- [Identity evidence](http://inside.mines.edu/~huawang)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Semi-supervised machine learning
**The paper assumes:** semi-supervised learning theory, regularization techniques in machine learning, multi-modal data integration methods
**Already in this field?** Skip this entirely if you already understand semi-supervised learning methods and their application to multi-modal biomedical data.

This background focuses on semi-supervised machine learning, essential for understanding the paper's method of integrating longitudinal imaging and genetic data using participant-specific projections and structured regularization. The rigorous course option provides a deep, structured university-level introduction to machine learning concepts relevant to this work, while the fast track offers a concise, intuition-driven series on semi-supervised learning to quickly grasp the core ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-5 and 8-13, about 10.5 hours — covering introduction, linear regression, logistic regression, generative models, kernels, data splits, regularization, and EM algorithm, which together provide the necessary theory for semi-supervised learning and regularization techniques used in the paper.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a comprehensive, authoritative machine learning course covering supervised, unsupervised, and semi-supervised learning principles, including regularization and model evaluation, which are foundational to the paper's semi-supervised framework and handling of multi-modal data.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Unsupervised and Weakly Supervised Learning](https://www.youtube.com/playlist?list=PLB1nTQo4_y6ttwMSX4BPCK1vw1NfpEdaA) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 13 videos · 4.4h across 13 episodes

**Watch only this:** Episodes 1-6, about 2 hours — these cover the introduction and foundational concepts of semi-supervised learning needed to understand the paper's approach.

*Why it unblocks this paper:* This short-form series on Unsupervised and Weakly Supervised Learning includes focused sessions on semi-supervised learning, providing clear, visual explanations of the core concepts relevant to the paper's method in a fraction of the time.

*If you want all of it:* 4.4 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on semi-supervised enrichment of longitudinal imaging-genetic data for predicting cognitive decline, start with foundational knowledge on longitudinal data analysis, multi-modal data integration, and structured sparsity and trace-norm regularization. Then, build understanding of semi-supervised learning methods as they underpin the proposed framework. Finally, focus on the core concept of semi-supervised enrichment for biomarker representation, which is central to the paper's contribution.

### Longitudinal data analysis *(prerequisite)*
Longitudinal data analysis is essential for modeling repeated measurements over time, which is critical for handling the neuroimaging data in the paper. Understanding statistical tools and challenges in longitudinal data will help grasp how the paper manages incomplete temporal records.

*How the paper uses it:* The paper integrates longitudinal neuroimaging data and handles missing temporal data without discarding samples.

▶ [Introduction to Longitudinal and Clustered Data Analysis Workshop](https://www.youtube.com/watch?v=0JuNCCq7q9Q) — Columbia University Northern Plains – SRP · 54:49 · 1 year ago

### Multi-modal data integration *(prerequisite)*
Multi-modal data integration is crucial for combining heterogeneous data sources such as imaging and genetic data. This foundational knowledge will clarify how the paper effectively fuses these modalities to improve prediction accuracy.

*How the paper uses it:* The method integrates longitudinal imaging and static genetic data into enriched biomarker representations.

▶ [Lecture 1.1: Introduction (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=VIq5r7mCAyw) — LP Morency · 1:21:55 · 5 years ago

### Structured sparsity and trace-norm regularization *(prerequisite)*
Structured sparsity and trace-norm regularization are key mathematical tools used in the paper to maintain group structure in genetic data and global consistency across participant-specific projections. Understanding these concepts is important for appreciating the model's regularization approach.

*How the paper uses it:* The paper uses trace-norm and structured sparsity regularization to maintain global consistency and group structure in genetic data.

▶ [Implicit regularization for general norms and errors - Lorenzo Rosasco, MIT](https://www.youtube.com/watch?v=NqQxcrPHwoU) — The Alan Turing Institute · 40:32 · 6 years ago

### Semi-supervised learning methods *(the paper's own talk)*
Semi-supervised learning methods provide the foundation for integrating labeled and unlabeled data, which is central to the paper's approach. A rigorous understanding of these methods will help in comprehending the semi-supervised framework proposed.

*How the paper uses it:* The paper proposes a semi-supervised learning framework to enrich multi-modal phenotypic measurements.

▶ [FixMatch: Simplifying Semi-Supervised Learning with Consistency and Confidence](https://www.youtube.com/watch?v=eYgPJ_7BkEw) — Yannic Kilcher · 20:12 · 6 years ago

### Semi-supervised enrichment for biomarker representation
This core concept covers the paper's novel method of semi-supervised enrichment to create fixed-length biomarker representations from multi-modal longitudinal and genetic data. Understanding this will provide direct insight into the paper's main contribution and its impact on prediction accuracy.

*How the paper uses it:* The paper's central method is a semi-supervised enrichment framework for improved biomarker representation and cognitive decline prediction.

▶ [Multi-task attention-based semi-supervised learning for medical image segmentation](https://www.youtube.com/watch?v=fRyH2ZE6mn0) — Stanford Contrastive & SS Learning Group · 28:01 · Streamed 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to predicting cognitive decline in Alzheimer's disease, start by learning the basics of semi-supervised learning, which combines labeled and unlabeled data to improve model performance. Next, grasp longitudinal data analysis to appreciate how repeated measurements over time are handled, especially with missing data. Then, explore multi-modal data integration to see how imaging and genetic data are combined effectively. After that, understand structured sparsity and trace-norm regularization, key mathematical tools used to maintain group structure and consistency in the data. Finally, study semi-supervised enrichment for biomarker representation, the core method enabling improved prediction in this work.

### Semi-supervised learning methods *(prerequisite)*
Semi-supervised learning is a machine learning approach that leverages both labeled and unlabeled data to improve prediction accuracy, especially useful when labeled data is scarce or expensive to obtain. It bridges the gap between supervised and unsupervised learning by using the structure in unlabeled data to guide learning.

*How the paper uses it:* The paper proposes a semi-supervised learning framework to integrate imaging and genetic data for better prediction of cognitive decline.

▶ [Semi-Supervised Learning Explained | Understanding Semi-Supervised Learning: A Comprehensive Guide](https://www.youtube.com/watch?v=zxizTskX1cw) — AI with Noor · 15:38 · 3 years ago

### Longitudinal data analysis *(prerequisite)*
Longitudinal data analysis focuses on studying data collected from the same subjects repeatedly over time, which helps in understanding temporal changes and progression patterns. It also addresses challenges like missing data points and correlation between repeated measures.

*How the paper uses it:* The method handles incomplete temporal neuroimaging data and learns from longitudinal records to track disease progression.

▶ [Introduction to longitudinal data analysis](https://www.youtube.com/watch?v=c4iq8KCcy8U) — Mikko Rönkkö · 11:31 · 6 years ago

### Multi-modal data integration *(prerequisite)*
Multi-modal data integration combines heterogeneous data sources, such as imaging and genetic information, to create a richer and more informative representation for analysis. This approach leverages complementary information from different modalities to improve prediction and understanding.

*How the paper uses it:* The paper integrates longitudinal neuroimaging data with static genetic data to enrich biomarker representations.

▶ [Lecture 1.1: Introduction (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=VIq5r7mCAyw) — LP Morency · 1:21:55 · 5 years ago

### Structured sparsity and trace-norm regularization *(prerequisite)*
Structured sparsity and trace-norm regularization are mathematical techniques used to enforce group-wise feature selection and low-rank constraints, respectively. These help maintain meaningful group structures in genetic data and global consistency across participant-specific projections.

*How the paper uses it:* The method applies trace-norm and structured sparsity regularization to maintain global consistency and group structure in genetic data.

▶ [Sparsity Based Regularization](https://www.youtube.com/watch?v=jEVh0uheCPk) — Shadi Albarqouni · 12:13 · 12 years ago

### Semi-supervised enrichment for biomarker representation
Semi-supervised enrichment methods enhance biomarker representations by learning from both labeled and unlabeled data, improving the quality and informativeness of features used for prediction. This is especially valuable in medical imaging and genetics where data can be incomplete or noisy.

*How the paper uses it:* The core contribution is a semi-supervised learning framework that enriches biomarker representations from multi-modal longitudinal and genetic data for improved cognitive decline prediction.

▶ [Multi-task attention-based semi-supervised learning for medical image segmentation](https://www.youtube.com/watch?v=fRyH2ZE6mn0) — Stanford Contrastive & SS Learning Group · 28:01 · Streamed 5 years ago

## Already in your library

- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's semi-supervised enrichment method for integrating longitudinal neuroimaging and genetic data to predict cognitive decline in Alzheimer's disease. The beginner project focuses on handling missing longitudinal data with a simple semi-supervised approach. The intermediate project reimplements the core enrichment method on a substitute longitudinal imaging-genetic dataset and compares prediction accuracy. The advanced project extends the method by incorporating an additional modality, such as blood-based biomarkers, addressing a future direction stated in the paper.

### Beginner — Semi-supervised handling of missing longitudinal imaging data
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements a simple semi-supervised learning approach to handle missing longitudinal neuroimaging data without discarding samples or imputing missing values. Using a public substitute longitudinal imaging dataset (e.g., synthetic or simplified time series), you demonstrate how to learn participant-specific fixed-length representations from incomplete temporal records.

**Why it shows you understood the paper:** This project shows you understand the paper's key challenge of missing temporal data and the semi-supervised approach to enrich longitudinal imaging features without imputation or sample removal.

**Grounded in:** Handling of incomplete temporal neuroimaging data without discarding samples or relying on imputation.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, numpy, pandas

**Data:** Use a publicly available or synthetically generated longitudinal imaging-like dataset with missing time points to simulate incomplete temporal records.

**Build it:**

1. Prepare or simulate a longitudinal dataset with missing time points per participant.
2. Implement a semi-supervised learning approach that learns fixed-length participant representations from available time points (e.g., averaging, weighted aggregation, or simple matrix factorization).
3. Train a simple regression model to predict a continuous cognitive score from these representations.
4. Evaluate prediction performance and compare it to a baseline that discards incomplete samples or imputes missing data.
5. Document the approach, results, and how missing data was handled.

**Ships as:** A Jupyter notebook with code and plots showing improved handling of missing longitudinal data via semi-supervised enrichment, with a README explaining the method and results.

**Stretch goal:** Add visualization of how participant-specific representations change when including vs. excluding incomplete data.

### Intermediate — Reimplementation of semi-supervised enrichment for imaging-genetic data integration
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core semi-supervised learning framework that integrates longitudinal neuroimaging data and static genetic data into enriched biomarker representations. Using a substitute multi-modal dataset with longitudinal imaging and genetic features (e.g., ADNI public subsets or synthetic data), you train the model with trace-norm and structured sparsity regularization and compare prediction accuracy of cognitive decline scores against baseline models using original biomarker data.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main method, including participant-specific projections, multi-modal fusion, and regularization techniques, and to reproduce the key result of improved prediction accuracy.

**Grounded in:** Development of a semi-supervised learning method to integrate longitudinal imaging and genetic data into enriched biomarker representations and demonstration of improved prediction accuracy.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, numpy, pandas, matplotlib

**Data:** Use a publicly available substitute dataset with longitudinal imaging and genetic features, such as a subset of ADNI data if accessible, or simulate multi-modal data with missing longitudinal records.

**Build it:**

1. Acquire or simulate a multi-modal dataset with longitudinal imaging and static genetic features along with cognitive scores.
2. Implement participant-specific projection matrices to enrich imaging data and integrate genetic data using structured sparsity and trace-norm regularization.
3. Train the semi-supervised model to learn enriched fixed-length biomarker representations.
4. Train a regression model on the enriched representations to predict cognitive decline scores.
5. Compare prediction performance (e.g., RMSE) against baseline models trained on original biomarker data.
6. Document methodology, code, and results with visualizations.

**Ships as:** A GitHub repository with code implementing the semi-supervised enrichment method, scripts to train and evaluate models, and a detailed README with results comparing enriched vs. original biomarker prediction accuracy.

**Stretch goal:** Add an ablation study showing the effect of including genetic data groups with structured sparsity vs. ignoring group structure.

### Advanced — Extending semi-supervised enrichment with blood-based biomarkers for Alzheimer's prediction
*Effort: several weeks, ~40+ hours*

You extend the semi-supervised enrichment framework by incorporating an additional modality—blood-based biomarkers—alongside longitudinal neuroimaging and genetic data. Using a substitute or synthetic multi-modal dataset that includes blood biomarker features, you adapt the model to integrate this new modality and evaluate whether prediction accuracy of cognitive decline improves, addressing one of the paper's stated future directions.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's method and limitations by implementing a genuine extension that integrates a new data modality, demonstrating ability to adapt complex multi-modal semi-supervised models and explore their impact on prediction.

**Grounded in:** Extending the model to incorporate additional modalities such as blood-based biomarkers as a future direction.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, numpy, pandas, matplotlib

**Data:** Use a synthetic or publicly available dataset with longitudinal imaging, genetic, and blood biomarker features, or simulate blood biomarker data consistent with AD progression.

**Build it:**

1. Obtain or simulate a multi-modal dataset including longitudinal imaging, genetic, and blood-based biomarker features with cognitive scores.
2. Modify the semi-supervised enrichment model to incorporate blood biomarker data as an additional modality with appropriate regularization.
3. Train the extended model to learn enriched biomarker representations integrating all three modalities.
4. Evaluate prediction accuracy of cognitive decline scores and compare with the original two-modality model.
5. Analyze the contribution of blood biomarkers to prediction improvements and document findings.
6. Prepare a comprehensive README explaining the extension, methodology, and results.

**Ships as:** A GitHub repository with code for the extended multi-modal enrichment model, evaluation scripts, and documentation showing the impact of adding blood-based biomarkers on prediction accuracy.

**Stretch goal:** Explore computational efficiency improvements to handle the increased dimensionality from the additional modality.
