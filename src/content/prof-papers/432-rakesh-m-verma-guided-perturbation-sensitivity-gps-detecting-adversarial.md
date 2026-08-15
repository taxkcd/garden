---
title: "432 · Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance — Rakesh M. Verma"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rakesh-m-verma"
source_hash: "f415f305a9a6758b438382fed0a03313b650d3d772d06ac3870572d90969135d"
sequence: 432
generator: "outreach-garden: managed"
---

# 432 · Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance

## At a glance

- **Professor:** Rakesh M. Verma
- **Institution:** University of Houston
- **Paper:** [Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance](https://doi.org/10.1609/aaai.v40i31.39803)
- **Authors:** Bryan E. Tuck, Rakesh M. Verma
- **Year:** 2026

## Paper overview

This paper introduces a method called Guided Perturbation Sensitivity (GPS) to detect adversarial text attacks on transformer models. GPS works by measuring how sensitive the model's internal text embeddings are when important words are masked. Adversarially altered words cause larger changes in embeddings compared to normal words, allowing GPS to identify manipulated text without needing to know the attack type or retrain the model.

### Why it matters

**Research problem:** Transformer models for natural language processing are vulnerable to adversarial text attacks, where subtle word or character changes can mislead the model's predictions. Existing defenses are often attack-specific or computationally expensive, lacking a general, efficient detection method.

**Why it matters:** Adversarial attacks threaten the reliability of NLP systems in critical applications like healthcare and fraud detection, risking trust and security. Detecting such attacks effectively and efficiently is essential for deploying robust AI systems.

**Key contributions:**

- Introduced GPS, a novel adversarial text detection framework exploiting embedding instability under targeted word masking without modifying the target model.
- Empirically demonstrated adversarial examples exhibit about twice the embedding sensitivity to masking compared to benign text.
- Conducted extensive evaluation across 18 configurations showing GPS achieves over 85% detection accuracy across multiple datasets, attack types, and models.
- Showed gradient-based importance ranking strongly correlates with detection performance for word-level attacks (ρ > 0.65), while character-level attacks require different strategies.
- Demonstrated GPS generalizes well to unseen datasets, attacks, and models without retraining, and offers a favorable trade-off between accuracy and computational cost.

## About the professor

**Rakesh M. Verma** — Professor of Computer Science, Computer Science, University of Houston.

Research interests: Cybersecurity

### Research links

- [Faculty/profile page](http://www2.cs.uh.edu/~rmverma)
- [Professor website](https://www2.cs.uh.edu/~rmverma/home.html)
- [ResearchGate](https://www.researchgate.net/profile/Rakesh_Verma38)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Network Gradient Attribution
**The paper assumes:** neural network gradients, gradient-based attribution methods, backpropagation in deep learning
**Already in this field?** Skip this entirely if you already understand how gradients are computed and used for feature importance in neural networks.

This background focuses on neural network gradient attribution, which is crucial to understanding the Guided Perturbation Sensitivity (GPS) method's use of gradient-based word importance ranking for adversarial text detection. The rigorous course option offers a deep, structured dive into gradient computation and optimization in neural networks, while the fast track provides a concise, intuition-driven explanation suitable for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization (Course 2 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc) — DeepLearningAI · 34 videos · 4.7h across 34 episodes

**Watch only this:** Watch episodes 12-14 (Numerical Approximations of Gradients, Gradient Checking, Gradient Checking Implementation Notes), about 24 minutes total — these focus specifically on gradients and their verification, essential for grasping gradient attribution.

*Why it unblocks this paper:* This DeepLearningAI course covers gradient computation, gradient checking, and optimization techniques in detail, directly supporting understanding of gradient-based importance ranking and embedding sensitivity measurement used in GPS.

*If you want all of it:* The full course is 4.7 hours across 34 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Watch episodes 2-4 (Gradient descent, how neural networks learn; Backpropagation, intuitively; Backpropagation calculus), about 65 minutes total — these episodes explain the core gradient concepts needed to understand gradient-based importance.

*Why it unblocks this paper:* 3Blue1Brown's neural networks series provides clear, visual, and intuitive explanations of neural networks and gradient descent, including backpropagation, which underpins gradient attribution methods used in GPS.

*If you want all of it:* The full series is about 3.6 hours across 10 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Guided Perturbation Sensitivity (GPS) for adversarial text detection, start with foundational knowledge on transformer model embeddings and gradient-based word importance, as these underpin the GPS method's mechanism for measuring embedding sensitivity and ranking word importance. Next, gain context on adversarial attacks on NLP models to appreciate the threat landscape GPS addresses, followed by understanding sequence classification with BiLSTM, the architecture used for detection. Finally, focus on the core concept of embedding sensitivity adversarial detection and the authors' own talk if available, for the most direct insights into GPS.

### transformer model embeddings *(prerequisite)*
Understanding transformer embeddings is essential because GPS measures embedding stability to detect adversarial perturbations. This section covers how text is represented as dense vectors in transformer models, which is foundational to grasping how masking important words affects embedding sensitivity.

*How the paper uses it:* GPS relies on measuring changes in transformer embeddings under word masking to detect adversarial text.

▶ [Training State-of-the-Art Sentence Embedding Models](https://www.youtube.com/watch?v=RHXZKUr8qOY) — Nils Reimers · 43:43 · 5 years ago

### gradient based word importance *(prerequisite)*
Gradient attribution methods are key to ranking word importance in GPS, guiding which words to mask for sensitivity measurement. This section explains how gradients can be used to identify influential words in model predictions, a critical step in GPS's detection pipeline.

*How the paper uses it:* GPS uses gradient-based importance ranking to select words for masking to reveal adversarial perturbations.

▶ [Feature Attribution | Stanford CS224U Natural Language Understanding | Spring 2021](https://www.youtube.com/watch?v=RFE6xdfJvag) — Stanford Online · 15:32 · 4 years ago

### adversarial attacks on NLP models *(prerequisite)*
Contextualizing the types and mechanisms of adversarial attacks on NLP models helps understand the threat GPS is designed to detect. This section provides an advanced overview of adversarial methods in NLP, highlighting the challenges in defending transformer models.

*How the paper uses it:* GPS addresses the vulnerability of transformer NLP models to adversarial text attacks.

▶ [MSD, Skoltech: Lec. 7 - Adversarial Attacks](https://www.youtube.com/watch?v=t74YGAGrnCQ) — Laboratory of Applied Research Skoltech-Sberbank · 1:21:12 · 5 years ago

### sequence classification with BiLSTM *(prerequisite)*
BiLSTM networks are used in GPS as the detector architecture to classify text as benign or adversarial based on sensitivity features. This section covers the advanced concepts of sequence modeling with BiLSTMs, enabling understanding of the detection model's operation.

*How the paper uses it:* GPS employs a BiLSTM detector to classify texts using embedding sensitivity features.

▶ [MIT 6.S191 (2018): Sequence Modeling with Neural Networks](https://www.youtube.com/watch?v=CznICCPa63Q) — Alexander Amini · 27:13 · 8 years ago

### embedding sensitivity adversarial detection
This core concept focuses on measuring changes in embeddings to detect adversarial perturbations, which is the central innovation of GPS. The selected videos provide advanced insights into embedding-based adversarial detection methods, crucial for understanding GPS's novelty and effectiveness.

*How the paper uses it:* GPS's main contribution is detecting adversarial text via embedding sensitivity to targeted word masking.

▶ [[Paper Review] Detecting Adversarial Examples from Sensitivity Inconsistency](https://www.youtube.com/watch?v=t9mCR_AhJJk) — 서울대학교 산업공학과 DSBA 연구실 · 24:42 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the Guided Perturbation Sensitivity (GPS) method for detecting adversarial text attacks. We start with how transformer models represent text as embeddings, then cover how gradient-based word importance ranking works, followed by sequence classification with BiLSTM networks. Finally, we focus on the core idea of measuring embedding sensitivity to detect adversarial perturbations. This progression builds intuition step-by-step from basic NLP model components to the novel GPS detection approach.

### transformer model embeddings *(prerequisite)*
Transformer models convert text into dense vector representations called embeddings, which capture semantic and contextual information about words or sentences. Understanding these embeddings is key to grasping how changes in input text affect the model internally.

*How the paper uses it:* GPS measures changes in transformer embeddings when masking important words to detect adversarial text.

▶ [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — Under The Hood · 19:33 · 1 year ago

### gradient based word importance *(prerequisite)*
Gradient-based attribution methods use the model's gradients to estimate how important each input word is for the model's prediction. This helps identify which words, when changed or masked, will most affect the model's output.

*How the paper uses it:* GPS uses gradient-based importance ranking to select words for masking and measuring embedding sensitivity.

▶ [Feature Attribution | Stanford CS224U Natural Language Understanding | Spring 2021](https://www.youtube.com/watch?v=RFE6xdfJvag) — Stanford Online · 15:32 · 4 years ago

### sequence classification with BiLSTM *(prerequisite)*
BiLSTM networks process sequences of data in both forward and backward directions, capturing context from both past and future tokens. They are commonly used for classifying sequences such as text into categories.

*How the paper uses it:* GPS uses a BiLSTM detector to classify texts as benign or adversarial based on embedding sensitivity features.

▶ [BiLSTMs](https://www.youtube.com/watch?v=7oYePBOq4ec) — CIS 522 - Deep Learning · 9:01 · 5 years ago

### embedding sensitivity adversarial detection
This concept involves measuring how much the internal embeddings of a model change when important words are masked, to detect adversarial manipulations. Adversarially perturbed texts cause larger embedding shifts, which can be used as a signal for detection.

*How the paper uses it:* GPS is a novel adversarial detection method that exploits embedding instability under targeted word masking.

▶ [[Paper Review] Detecting Adversarial Examples from Sensitivity Inconsistency](https://www.youtube.com/watch?v=t9mCR_AhJJk) — 서울대학교 산업공학과 DSBA 연구실 · 24:42 · 5 years ago

## Already in your library

- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Visualizing transformers and attention | Talk for TNG Big Tech Day '24](https://www.youtube.com/watch?v=KJtZARuO3JY) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [Gradient-based Input Attribution](https://www.youtube.com/watch?v=IYSSjueNLv0) — also for: Africa Health Check: Probing Cultural Bias in Medical LLMs (Irfan A. Essa)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Long Short-Term Memory (LSTM), Clearly Explained](https://www.youtube.com/watch?v=YCzL96nL7j0) — also for: PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI (Abdullah Muzahid)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Guided Perturbation Sensitivity (GPS) method for adversarial text detection. The beginner project reproduces a key metric from the paper using familiar tools, the intermediate project implements the core GPS detection pipeline on a public NLP dataset with a simple baseline comparison, and the advanced project extends GPS to address its limitation of requiring white-box access by exploring a black-box surrogate model approach. Each project is grounded in a specific contribution, result, or limitation from the paper and leverages your existing software engineering and ML skills.

### Beginner — Reproduce Embedding Sensitivity Metric for Masked Words
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads a pretrained transformer model (e.g., BERT), computes gradient-based word importance scores for a few sample sentences, masks the top-ranked words one by one, and measures the cosine distance between original and perturbed embeddings. You then calculate and plot the average embedding sensitivity for benign versus synthetically perturbed sentences.

**Why it shows you understood the paper:** This project shows you understand the core GPS idea that adversarial perturbations cause larger embedding sensitivity under masking, reproducing the key quantitative result that adversarial examples exhibit roughly twice the sensitivity of benign inputs.

**Grounded in:** Adversarial examples exhibit approximately 2× higher embedding sensitivity than benign text.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), numpy, matplotlib, Jupyter Notebook

**Data:** Use a small set of example sentences from public sources or synthetic perturbations created by simple word swaps to simulate adversarial examples.

**Build it:**

1. Load a pretrained transformer model and tokenizer from HuggingFace.
2. Implement gradient-based word importance scoring for input sentences.
3. Mask top-ranked words sequentially and compute cosine distances between original and masked embeddings.
4. Generate or select benign and synthetically perturbed sentences.
5. Calculate average embedding sensitivity for both sets and plot the comparison.

**Ships as:** A Jupyter notebook with code, plots, and explanations reproducing the embedding sensitivity difference between benign and perturbed text.

**Stretch goal:** Add attention-based and random importance baselines to compare with gradient-based importance.

### Intermediate — Implement GPS Adversarial Text Detector on SST-2 Dataset
*Effort: 2 weekends, ~20 hours*

You implement the full GPS pipeline: compute gradient-based word importance scores for SST-2 sentiment classification inputs, mask top K words, measure embedding sensitivity, and train a BiLSTM detector to classify texts as benign or adversarial. You generate adversarial examples using a simple word-level attack (e.g., TextFooler) and compare GPS detection accuracy against a baseline that uses random masking.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method end-to-end on a public dataset, replicate the detection accuracy metric, and understand the role of importance ranking and embedding sensitivity in adversarial detection.

**Grounded in:** GPS achieves 85%+ detection accuracy, outperforming or matching state-of-the-art baselines like TextShield and sharpness-based detectors.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), numpy, scikit-learn, Jupyter Notebook

**Data:** Use the Stanford Sentiment Treebank (SST-2) dataset as a substitute for the paper's datasets; generate adversarial examples with an open-source word-level attack implementation.

**Build it:**

1. Load SST-2 dataset and fine-tune or load a pretrained transformer sentiment classifier.
2. Implement gradient-based word importance scoring for each input.
3. Mask the top K important words and compute embedding sensitivity features.
4. Train a BiLSTM detector on these features with labeled benign and adversarial samples.
5. Generate adversarial examples using a word-level attack method.
6. Evaluate detection accuracy and compare with a random masking baseline.

**Ships as:** A GitHub repo with code to run the GPS detector on SST-2, scripts to generate adversarial samples, and a report showing detection accuracy and baseline comparison.

**Stretch goal:** Experiment with varying K (number of masked words) and analyze detection performance versus computational cost.

### Advanced — Extend GPS for Black-Box Adversarial Detection Using Surrogate Models
*Effort: 3+ weeks*

You develop an extension of GPS that estimates word importance scores without white-box gradient access by training surrogate models to approximate the target model's behavior. Using these surrogate gradients, you compute embedding sensitivity features and train a detector to classify adversarial text. You evaluate this approach on a public dataset with black-box constraints and compare detection performance to the original GPS method.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing you can innovate beyond the original method by adapting GPS to realistic black-box scenarios, a significant research contribution that could initiate discussion with the professor.

**Grounded in:** Extend GPS to black-box settings using surrogate models for importance estimation.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), numpy, scikit-learn, Jupyter Notebook

**Data:** Use the SST-2 dataset or another public sentiment dataset; simulate black-box access by restricting gradient queries to surrogate models only.

**Build it:**

1. Train a surrogate transformer model to mimic the target model's predictions using only input-output pairs.
2. Compute gradient-based word importance scores from the surrogate model.
3. Apply the GPS masking and embedding sensitivity measurement using surrogate gradients.
4. Train a BiLSTM detector on these features with labeled benign and adversarial samples.
5. Generate adversarial examples with black-box constraints.
6. Evaluate detection accuracy and compare with white-box GPS results.

**Ships as:** A comprehensive GitHub repo demonstrating GPS black-box extension with surrogate models, evaluation scripts, and a detailed README discussing results and limitations.

**Stretch goal:** Incorporate ensemble heuristics combining surrogate gradient and attention-based importance to improve detection of character-level attacks.
