---
title: "752 · Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM — Christopher Homan"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-christopher-homan"
source_hash: "bf69ba22b94c826872d4c2be9f97ffd0ac0a4fa0b4d028dfe201f678688c52c9"
sequence: 752
generator: "outreach-garden: managed"
---

# 752 · Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM

## At a glance

- **Professor:** Christopher Homan
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM](https://arxiv.org/pdf/2604.08425v1)
- **Authors:** Samay U. Shetty, Tharindu Cyril Weerasooriya, Deepak Pandita, Christopher M. Homan
- **Year:** 2026

## Paper overview

This paper introduces DiADEM, a machine learning model that predicts how different people might disagree when labeling subjective content, by explicitly modeling annotators' demographic characteristics. Unlike traditional methods that combine multiple human labels into a single majority label, DiADEM learns which demographic factors (like race and age) influence disagreement, improving prediction of diverse human perspectives.

### Why it matters

**Research problem:** Standard NLP systems often collapse multiple human annotator judgments into a single majority label, ignoring meaningful disagreement that reflects genuine differences in perspective shaped by social identities and lived experiences. This leads to models that overfit majority viewpoints and obscure minority perspectives.

**Why it matters:** Ignoring structured disagreement risks building biased NLP systems that fail to represent the diversity of human interpretation, especially in socially sensitive tasks like offensiveness detection and hate speech classification. Faithfully modeling disagreement is crucial for fair and accurate AI systems.

**Key contributions:**

- Introduced DiADEM, a demographic-aware model that learns per-demographic importance weights to predict annotator disagreement.
- Developed a novel item-level disagreement loss to better align predicted and actual disagreement variance.
- Demonstrated that race and age are consistently influential demographic factors driving disagreement.
- Showed DiADEM outperforms both neural and large language model baselines on multiple disagreement-aware benchmarks (DICES and VOICED).
- Provided analysis revealing that disagreement is partly predictable and systematic rather than purely noise.

## About the professor

**Christopher Homan** — Associate Professor, Computer Science, Rochester Inst. of Technology.

Research interests: human-computer interaction (HCI), machine learning (ML), mental-health related signals from social media, community-based participatory research (CBPR), underrepresented populations, LGBTQ communities

### Research links

- [Faculty/profile page](https://www.cs.rit.edu/~cmh)
- [Professor website](https://www.rit.edu/lpi/)
- [Resolved homepage](https://www.rit.edu/lpi/christopher-homan)
- [Lab website](https://www.rit.edu/lpi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** machine learning for annotator modeling
**The paper assumes:** machine learning for annotator modeling, multi-annotator learning, disagreement-aware loss functions
**Already in this field?** Skip this entirely if you already understand machine learning approaches to modeling annotator behavior and disagreement in labeled data.

To understand the machine learning techniques used in DiADEM for modeling annotator disagreement with demographic importance weighting, it is essential to grasp foundational concepts in machine learning, including supervised learning, neural networks, and model evaluation metrics. The rigorous course offers a comprehensive, structured deep dive into these topics, while the fast track provides a concise, practical introduction to data annotation and labeling processes relevant to understanding annotator behavior. Choose the rigorous course for a thorough theoretical grounding, or the fast track for a quick, applied overview of annotation concepts that underpin the paper's context.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-5, about 6.5 hours — covering linear regression, logistic regression, generative models, and Naive Bayes to build a solid foundation in supervised learning and probabilistic modeling relevant to annotator modeling.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative and comprehensive machine learning course covering supervised learning, neural networks, and evaluation metrics, which are foundational to understanding DiADEM's modeling approach and disagreement loss.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Annotations](https://www.youtube.com/playlist?list=PLlga_GU9d4tGaD0yblQtBWfXlL6Y28xmg) — FIN Developer · 12 videos · 1.3h across the first 11 episodes

**Watch only this:** First 5 episodes, about 35 minutes — covering basics of annotation, history, AI annotation, and annotation quality to quickly grasp the human labeling context behind the paper.

*Why it unblocks this paper:* The 'Annotations' playlist by FIN Developer offers concise, clear videos on data annotation and labeling, providing practical insights into the annotation process and challenges, which are crucial for understanding the context of annotator disagreement modeling.

*If you want all of it:* About 1.3 hours across the first 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DiADEM paper, start by exploring foundational concepts such as modeling annotator disagreement, neural embedding interactions, and disagreement-aware loss functions, which underpin the paper's methodology. Then, review background on multi-annotator label aggregation to appreciate traditional approaches that DiADEM improves upon. Finally, focus on the core concept of demographic importance weighting and the authors' own talk to grasp the novel contributions and empirical results of DiADEM.

### Modeling annotator disagreement *(prerequisite)*
This section covers advanced research talks and seminars on modeling annotator disagreement, which is fundamental to understanding why DiADEM explicitly models disagreement rather than collapsing labels. The selected talk by Eve Fleisig at DIMACS CCICADA is a recent, research-focused presentation directly addressing annotator disagreement in language tasks, providing a rigorous foundation.

*How the paper uses it:* Understanding annotator disagreement modeling is foundational to DiADEM's approach to capturing diverse human perspectives.

▶ [Eve Fleisig - When the Majority is Wrong: Modeling Annotator Disagreement for Language Tasks](https://www.youtube.com/watch?v=R7I_dnazRX4) — DIMACS CCICADA · 2 yr ago

### Neural embedding interactions *(prerequisite)*
This section introduces the technical mechanism of embedding interactions, including Hadamard products, which DiADEM uses to fuse annotator and item representations. The video by Raymond Jin on Hadamard Matrices offers a mathematically rigorous explanation of the key operation used in the model, suitable for an advanced audience.

*How the paper uses it:* Neural embedding interactions like Hadamard products are key to DiADEM's fusion of annotator and item features.

▶ [Hadamard Matrices - Raymond Jin](https://www.youtube.com/watch?v=EBMrX9Z3cGg) — FHS MAO · 5 yr ago

### Disagreement-aware loss functions *(prerequisite)*
This section focuses on understanding loss functions tailored to align predicted and actual disagreement variance, critical for DiADEM's training. While no perfect match for the novel item-level disagreement loss exists, the Gate Smashers video on loss functions provides a concise, technical overview of loss functions in neural networks, suitable for advanced learners.

*How the paper uses it:* DiADEM's novel item-level disagreement loss is central to improving disagreement calibration during training.

▶ [Loss Function In Neural Network & Various Types of Loss Functions](https://www.youtube.com/watch?v=Ffv7L5avJ3M) — Gate Smashers · 5:53 · 1 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the DiADEM paper, starting with how multiple annotator labels are traditionally combined, then exploring how annotator disagreement can be modeled, followed by neural embedding interactions that enable complex representation fusion, and disagreement-aware loss functions that improve training. Finally, it covers demographic importance weighting, the core innovation of DiADEM, to show how demographic factors influence disagreement modeling.

### Modeling annotator disagreement *(prerequisite)*
Understand what annotator disagreement means and why it matters, especially in subjective tasks. This includes how disagreement can be systematic and informative rather than just noise, and how it can be modeled to capture diverse perspectives.

*How the paper uses it:* DiADEM explicitly models annotator disagreement to better reflect diverse human perspectives in labeling.

▶ [Eve Fleisig - When the Majority is Wrong: Modeling Annotator Disagreement for Language Tasks](https://www.youtube.com/watch?v=R7I_dnazRX4) — DIMACS CCICADA · 2 yr ago

### Neural embedding interactions *(prerequisite)*
Discover how neural networks represent data as embeddings—vectors capturing semantic information—and how combining embeddings (e.g., concatenation, Hadamard product) allows models to fuse information from different sources, such as annotators and items.

*How the paper uses it:* DiADEM fuses annotator demographic embeddings with item embeddings using concatenation and Hadamard interactions to predict disagreement.

▶ [Introduction to Word Embedding | Static vs Dynamic Embedding | Deep Learning](https://www.youtube.com/watch?v=95eQCwQpS4k) — Gate Smashers · 6 mo ago

### Disagreement-aware loss functions *(prerequisite)*
Learn what loss functions are and how they guide model training by measuring prediction errors. Disagreement-aware loss functions specifically penalize mismatches between predicted and actual disagreement variance, improving model calibration on disagreement.

*How the paper uses it:* DiADEM uses a novel item-level disagreement loss to align predicted disagreement variance with empirical data.

▶ [https://www.youtube.com › watch?v=bGJvQhdzqr4](https://www.youtube.com/watch?v=bGJvQhdzqr4) — YouTube result via DuckDuckGo

### Demographic importance weighting
Explore how demographic importance weighting assigns learnable weights to demographic features to capture their influence on annotator disagreement. This approach helps the model understand which demographic factors matter most in predicting diverse labeling behaviors.

*How the paper uses it:* DiADEM learns per-demographic importance weights to model how demographic factors like race and age drive disagreement.

▶ [Weights in social surveys: an introduction](https://www.youtube.com/watch?v=ItDR2LY2jdo) — UK DATA SERVICE · 4 yr ago

## Already in your library

- [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of DiADEM's approach to modeling annotator disagreement with demographic importance weighting. The beginner project reproduces a key metric from the paper using synthetic data and simple tools. The intermediate project implements the core DiADEM method on a public multi-annotator dataset to compare disagreement prediction performance against a baseline. The advanced project extends DiADEM by incorporating richer annotator signals beyond demographics, addressing a stated limitation and future direction of the paper.

### Beginner — Reproduce DiADEM's Disagreement Variance Metric
*Effort: a weekend, ~8 hours*

You create a small Python notebook that simulates annotator labels with demographic groups and calculates the item-level disagreement variance metric as used in DiADEM. You implement the item-level disagreement loss function to measure alignment between predicted and actual disagreement variance on synthetic data.

**Why it shows you understood the paper:** This project shows you understand the core disagreement-aware loss function and the importance of modeling disagreement variance rather than just majority labels, a key contribution of the paper.

**Grounded in:** The novel item-level disagreement loss directly penalizes mismatch between actual and predicted annotator disagreement, leading to better disagreement calibration.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic dataset simulating annotator labels with demographic groups and controlled disagreement variance.

**Build it:**

1. Simulate a small dataset with items, annotators, and demographic attributes (e.g., race, age groups).
2. Generate synthetic labels with controlled disagreement patterns across demographic groups.
3. Implement calculation of empirical disagreement variance per item.
4. Implement a simple model that predicts disagreement variance per item.
5. Implement the item-level disagreement loss function comparing predicted vs empirical variance.
6. Visualize the alignment between predicted and actual disagreement variance.

**Ships as:** A Jupyter notebook demonstrating calculation of disagreement variance and the item-level disagreement loss on synthetic data, with plots showing alignment.

**Stretch goal:** Add entropy-based disagreement metrics and compare their behavior with variance.

### Intermediate — Implement DiADEM Core on a Public Multi-Annotator Dataset
*Effort: 1-3 weekends*

You reimplement the core DiADEM model architecture from the paper description, including demographic-weighted annotator embeddings and the item-level disagreement loss. You train and evaluate it on a public multi-annotator dataset (e.g., the DICES dataset substitute or a similar public dataset with annotator demographics) and compare disagreement prediction performance against a simple majority-vote baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's core method and metrics, showing you grasp the demographic importance weighting mechanism and disagreement-aware training.

**Grounded in:** Introduced DiADEM, a demographic-aware model that learns per-demographic importance weights to predict annotator disagreement.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** A public multi-annotator dataset with demographic metadata or a synthesized dataset approximating DICES or VOICED characteristics.

**Build it:**

1. Select or synthesize a multi-annotator dataset with demographic attributes and multiple labels per item.
2. Implement annotator demographic embeddings with learnable importance weights per demographic axis.
3. Implement item and annotator representation fusion using concatenation and Hadamard product.
4. Implement the item-level disagreement loss function as described in the paper.
5. Train the DiADEM model and a majority-vote baseline on the dataset.
6. Evaluate and compare disagreement prediction metrics such as Spearman correlation on variance.

**Ships as:** A GitHub repository with code to train and evaluate DiADEM on a multi-annotator dataset, including scripts, notebooks, and a README with results and metric comparisons.

**Stretch goal:** Add analysis of learned demographic importance weights and visualize which demographics drive disagreement.

### Advanced — Extend DiADEM with Behavioral Signals for Disagreement Prediction
*Effort: a few weeks*

You extend the DiADEM model to incorporate richer annotator signals beyond demographics, such as annotator behavioral features (e.g., annotation time, past label consistency) to improve disagreement prediction. You evaluate this extended model on a multi-annotator dataset and analyze whether adding these signals improves disagreement variance prediction and calibration, addressing a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions by implementing a genuine extension that tests richer annotator modeling beyond demographics, a challenging research step.

**Grounded in:** Integrate richer signals beyond demographic attributes to better capture annotator perspectives.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** A multi-annotator dataset with demographic and behavioral metadata or a synthesized dataset augmented with simulated behavioral features.

**Build it:**

1. Extend the dataset to include behavioral annotator features such as annotation time or label consistency.
2. Modify the DiADEM architecture to incorporate these additional annotator features alongside demographic embeddings.
3. Train the extended model with the item-level disagreement loss.
4. Evaluate disagreement prediction performance and calibration compared to the original DiADEM model.
5. Analyze the learned importance weights for behavioral vs demographic features.
6. Document findings and limitations in the README.

**Ships as:** A GitHub repository with extended DiADEM code, training and evaluation scripts, and a detailed report on the impact of behavioral signals on disagreement prediction.

**Stretch goal:** Explore multimodal disagreement modeling by incorporating text or image features of items alongside annotator features.
