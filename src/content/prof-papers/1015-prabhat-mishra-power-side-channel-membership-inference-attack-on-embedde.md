---
title: "1015 · Power Side-Channel Membership Inference Attack on Embedded Machine Learning — Prabhat Mishra"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-prabhat-mishra"
source_hash: "536dcb1ff583b72c40984ae92735f4a2c7081cce071a0247e2edbed33c299527"
sequence: 1015
generator: "outreach-garden: managed"
---

# 1015 · Power Side-Channel Membership Inference Attack on Embedded Machine Learning

## At a glance

- **Professor:** Prabhat Mishra
- **Institution:** University of Florida
- **Paper:** [Power Side-Channel Membership Inference Attack on Embedded Machine Learning](https://arxiv.org/pdf/2610.10909)
- **Authors:** Sahan Sanjaya, Prabhat Mishra
- **Year:** 2026

## Paper overview

This paper presents a novel attack method called PSCMIA that uses power consumption measurements from embedded devices running machine learning models to determine if a specific data sample was part of the model's training set. Unlike traditional attacks that rely on model outputs like prediction probabilities or labels, PSCMIA exploits physical side-channel information, specifically power traces, to infer membership without needing any output from the model. The attack is tested on various datasets, model architectures, and hardware platforms, showing it can effectively reveal sensitive training data membership even when model outputs are hidden or unavailable.

### Why it matters

**Research problem:** Membership inference attacks (MIAs) aim to determine whether a given sample was used to train a machine learning model, posing privacy risks. Existing MIAs depend on access to model outputs such as prediction probabilities or labels, which may not be accessible in embedded ML systems. The problem is whether membership information can be inferred solely from physical side-channel signals like power consumption during inference on embedded devices.

**Why it matters:** Embedded ML systems are increasingly used in privacy-sensitive applications and often operate with restricted or no model output exposure. If membership information can be leaked through physical side channels, it threatens the privacy of training data in scenarios where conventional output-based attacks are infeasible. This raises serious privacy concerns for embedded ML deployments in healthcare, finance, defense, and other domains.

**Key contributions:**

- Introduced PSCMIA, the first membership inference attack relying solely on physically measured power traces from embedded ML inference without access to model outputs.
- Developed an end-to-end profiling-based attack framework combining shadow-model profiling, leakage localization, feature extraction, and membership classification.
- Evaluated PSCMIA across multiple datasets, model architectures, and hardware platforms, demonstrating effectiveness and generality.
- Characterized membership-relevant leakage in power traces, showing correlation with prediction correctness, confidence, entropy, and margin.
- Demonstrated that PSCMIA outperforms label-only membership inference attacks in most settings and approaches probability vector-based shadow MIA performance.

## About the professor

**Prabhat Mishra** — UF Research Foundation Professor, Professor & Associate Chair for Academic Affairs, Department of Computer & Information Science & Engineering, University of Florida.

Research interests: secure and trustworthy embedded systems, design automation for quantum computing, and hardware security analysis using assertion-based validation, fuzzing, formal verification, machine learning, and side-channel analysis

### Research links

- [Faculty/profile page](http://www.cise.ufl.edu/~prabhat)
- [Lab website](https://www.cise.ufl.edu/research/cad/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** side-channel analysis and power analysis
**The paper assumes:** side-channel analysis, power analysis techniques, embedded system hardware security
**Already in this field?** Skip this entirely if you already understand side-channel attacks and power analysis methods in embedded systems.

This background focuses on side-channel analysis and power analysis, essential for understanding how physical signals like power consumption can leak sensitive information from embedded machine learning models, as exploited by PSCMIA. The rigorous course provides a deep, structured university-level treatment of hardware security and side-channel attacks, while the fast track offers a concise, accessible introduction to embedded systems fundamentals including power and security concepts. Choose the course for comprehensive technical depth; choose the fast track for a quicker, practical overview that still builds relevant intuition.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Hardware Security - Debdeep Mukhopadhyay - IIT KGP](https://www.youtube.com/playlist?list=PLQBbcgo55TX-7vygatpMHOOtgflvYtkeZ) — Amit Panda · 60 videos · 29.8h across 60 episodes

**Watch only this:** Lectures 1 through 10 (Introduction to Hardware Security Part I & II, Algorithm to Hardware, Finite Field Architectures, Hardware Design for Finite Inverse, Background Cryptography, and Side Channel Analysis) totaling about 5 hours — these cover foundational concepts in hardware security and side-channel attacks necessary to grasp power side-channel leakage.

*Why it unblocks this paper:* This is a detailed university lecture series on hardware security by Debdeep Mukhopadhyay, covering side-channel analysis and power analysis in depth, directly relevant to understanding PSCMIA's attack methodology and leakage characterization.

*If you want all of it:* Approximately 29.8 hours across all 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Advanced Embedded Systems | Complete Lecture Series](https://www.youtube.com/playlist?list=PLYh70GOEAF88) — AishaEunoia · 31 videos · 3.1h across the first 25 episodes

**Watch only this:** Episodes 1, 21, 22, and 23 (Memory Architecture, Power Modes in Embedded Systems, Advanced Embedded Systems Lecture 3 Part 1 & 2) totaling about 28 minutes — these explain embedded system architecture and power behavior critical for understanding power side-channel signals.

*Why it unblocks this paper:* This concise embedded systems lecture series covers fundamentals of embedded hardware, power modes, and embedded security in short, focused videos, providing practical context for power consumption and side-channel leakage in embedded devices relevant to PSCMIA.

*If you want all of it:* About 3.1 hours across the first 25 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PSCMIA paper, start with foundational knowledge on membership inference attacks and power side-channel analysis, as these are the core building blocks of the attack methodology. Then, explore embedded machine learning security to contextualize the environment where PSCMIA operates. Finally, focus on the paper's core concept—the novel power side-channel membership inference attack—through the authors' own and related advanced talks to grasp the attack's design, evaluation, and implications.

### Membership inference attacks *(prerequisite)*
Membership inference attacks form the fundamental privacy threat model that PSCMIA exploits via side channels. Understanding the principles, challenges, and state-of-the-art in MIAs provides essential background on how training data membership can be inferred from machine learning models.

*How the paper uses it:* PSCMIA extends membership inference attacks by leveraging power side-channel leakage instead of model outputs.

▶ [Membership Inference Attacks against Machine Learning Models](https://www.youtube.com/watch?v=rDm1n2gceJY) — IEEE Symposium on Security and Privacy · 20:15 · 9y ago

### Power side-channel analysis *(prerequisite)*
Power side-channel analysis explains how physical power consumption measurements can leak sensitive information during computation. This foundational knowledge is crucial to understand how PSCMIA extracts membership information from power traces on embedded devices.

*How the paper uses it:* PSCMIA exploits power side-channel leakage during embedded ML inference to infer membership without model outputs.

▶ [Lecture 6 - Deep Learning-based Side-Channel Analysis (Guest lecture by Stjepan Picek)](https://www.youtube.com/watch?v=IFbTPxEZFCs) — Luca Mariot · 1:29:04 · 3y ago

### Embedded machine learning security *(prerequisite)*
Embedded machine learning security covers the unique challenges and threat landscape of deploying ML models on resource-constrained devices with limited output exposure. This context is vital to appreciate why PSCMIA targets embedded platforms and the implications of side-channel leakage in such environments.

*How the paper uses it:* PSCMIA targets embedded ML systems where model outputs are restricted or unavailable, raising novel privacy concerns.

▶ [USENIX Enigma 2017 — Ghost in the Machine: Challenges in Embedded Binary Security](https://www.youtube.com/watch?v=pMRa8xDFpiE) — USENIX Enigma Conference · 19:56 · 9y ago

### Power side-channel membership inference
This concept directly addresses the novel combination of power side-channel analysis and membership inference attacks, which is the central contribution of the PSCMIA paper. Studying advanced talks on this topic reveals the state-of-the-art techniques and challenges in extracting membership information from physical side channels.

*How the paper uses it:* PSCMIA is the first attack to infer membership solely from power side-channel measurements during embedded ML inference.

▶ [PLATYPUS: Software-based Power Side-Channel Attacks on x86](https://www.youtube.com/watch?v=LXaroV2crWw) — IEEE Symposium on Security and Privacy · 15:01 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand the PSCMIA paper, starting with the basics of power side-channel analysis, then covering membership inference attacks as a core privacy threat in machine learning, followed by the context of embedded machine learning security. It concludes with the key technique of shadow model training used in membership inference attacks, preparing the learner to grasp the novel PSCMIA attack that combines these ideas. Each step builds intuition with concise, clear videos focused on the specific concepts as applied in this paper.

### Power side-channel analysis *(prerequisite)*
Power side-channel analysis studies how the power consumption of a device reveals information about its internal computations. Understanding this leakage is essential to grasp how PSCMIA exploits power traces to infer membership information without model outputs.

*How the paper uses it:* PSCMIA leverages power consumption traces during embedded ML inference as a side channel to infer training data membership.

▶ [Introduction to Side-Channel Power Analysis (SCA, DPA)](https://www.youtube.com/watch?v=OlX-p4AGhWs) — Colin O'Flynn · 1:08:57 · 10y ago

### Membership inference attacks *(prerequisite)*
Membership inference attacks aim to determine if a specific data sample was part of a model's training set, posing privacy risks. Learning about these attacks provides the core privacy threat model that PSCMIA realizes through side channels.

*How the paper uses it:* PSCMIA is a membership inference attack that uniquely uses power side-channel data instead of model outputs.

▶ [Membership Inference Attacks against Machine Learning Models](https://www.youtube.com/watch?v=rDm1n2gceJY) — IEEE Symposium on Security and Privacy · 20:15 · 9y ago

### Embedded machine learning security *(prerequisite)*
Embedded machine learning security focuses on protecting ML models running on resource-constrained devices with limited output exposure. This context explains why conventional output-based membership inference attacks are insufficient and motivates PSCMIA's side-channel approach.

*How the paper uses it:* PSCMIA targets embedded ML systems where model outputs are restricted or unavailable, making side-channel leakage a critical privacy concern.

▶ [Introduction to Embedded Machine Learning on Coursera](https://www.youtube.com/watch?v=TgekTwrftcg) — Edge Impulse · 4:05 · 5y ago

## Already in your library

- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [What is a Side Channel Attack and types of side channel attacks](https://www.youtube.com/watch?v=4jZISuiC29M) — also for: Testing side-channel security of cryptographic implementations against future microarchitectures (Daniel Genkin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the PSCMIA paper. The beginner project reproduces a core analysis of membership-dependent leakage in power traces using PCA on a public dataset, leveraging your existing ML and Python skills. The intermediate project implements a simplified PSCMIA attack pipeline on MNIST with a fully connected model, comparing it against a label-only membership inference baseline, requiring you to learn side-channel feature extraction and classification. The advanced project extends PSCMIA by exploring mitigation strategies that reduce power side-channel leakage during inference, addressing a key limitation and future direction of the paper, and involving embedded device simulation or emulation.

### Beginner — PCA Analysis of Power Trace Membership Leakage
*Effort: a weekend, ~8 hours*

You build a Python notebook that simulates power trace data correlated with membership status on the MNIST dataset, then apply PCA to extract features and visualize membership-dependent leakage patterns. This reproduces the paper's characterization of membership-relevant leakage correlated with prediction correctness and confidence.

**Why it shows you understood the paper:** This project shows you grasp how power traces contain membership-dependent information and how PCA can be used to extract and visualize this leakage, a foundational step in PSCMIA.

**Grounded in:** Characterized membership-relevant leakage in power traces, showing correlation with prediction correctness, confidence, entropy, and margin.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, matplotlib, numpy, pandas

**Data:** MNIST dataset as a proxy for the paper's MNIST experiments; power traces are simulated based on membership labels and prediction correctness.

**Build it:**

1. Download the MNIST dataset and split it into training and test sets.
2. Simulate power trace features by generating synthetic data correlated with whether samples are in the training set and their prediction correctness.
3. Apply PCA to the simulated power trace features to reduce dimensionality.
4. Visualize the PCA components colored by membership status and prediction correctness.
5. Analyze and document how the PCA components reveal membership-dependent leakage patterns.

**Ships as:** A Jupyter Notebook with code, visualizations of PCA components showing membership leakage, and a README explaining the simulation and analysis.

**Stretch goal:** Incorporate additional feature extraction methods such as t-SNE or UMAP to compare with PCA.

### Intermediate — Reimplementation of PSCMIA on MNIST with Shadow Models
*Effort: 2 weekends, ~20 hours*

You implement the core PSCMIA attack pipeline by training a target model and shadow models on MNIST, collecting simulated power trace features during inference, performing leakage localization and PCA-based feature extraction, and training a binary classifier to infer membership. You compare PSCMIA's ROC-AUC against a label-only membership inference baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main attack framework end-to-end, including shadow model training and side-channel feature extraction, and to evaluate membership inference effectiveness quantitatively.

**Grounded in:** Developed an end-to-end profiling-based attack framework combining shadow-model profiling, leakage localization, feature extraction, and membership classification; PSCMIA achieves ROC-AUC values up to 0.907 on fully connected models.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, matplotlib, pandas

**Data:** MNIST dataset used for target and shadow model training; power traces are simulated features correlated with membership and inference computations.

**Build it:**

1. Train a fully connected neural network on MNIST as the target model.
2. Train multiple shadow models on auxiliary MNIST subsets to simulate the attacker's profiling.
3. Simulate power trace features during inference on target and shadow models, incorporating membership-dependent leakage patterns.
4. Perform leakage localization and extract features using PCA.
5. Train a binary classifier on shadow model features to predict membership status.
6. Evaluate the attack on the target model's power trace features and compare ROC-AUC with a label-only membership inference baseline.

**Ships as:** A GitHub repository with code for model training, simulated power trace feature extraction, membership inference attack, evaluation scripts, and a detailed README with results and comparisons.

**Stretch goal:** Extend the attack to a convolutional neural network on Fashion-MNIST and analyze differences in membership leakage.

### Advanced — Mitigation of Power Side-Channel Membership Leakage in Embedded ML
*Effort: 3+ weeks*

You design and implement mitigation strategies to reduce membership leakage in power side-channel signals during embedded ML inference. Using the simulated PSCMIA attack pipeline, you evaluate the effectiveness of techniques such as noise injection, partial leakage suppression at multiple inference stages, or lightweight obfuscation, addressing the paper's limitation that suppressing only the final argmax leakage is insufficient.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring practical defenses against PSCMIA, demonstrating deep comprehension of the attack's distributed leakage and embedded system constraints.

**Grounded in:** Suppressing leakage from the final argmax operation only partially reduces PSCMIA effectiveness; developing comprehensive defenses that address membership leakage across multiple inference stages is a future direction.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, matplotlib, pandas

**Data:** MNIST or Fashion-MNIST datasets with simulated power trace features representing embedded inference leakage.

**Build it:**

1. Reimplement or reuse the PSCMIA attack pipeline with simulated power traces.
2. Implement mitigation techniques such as Gaussian noise injection, masking computations, or feature obfuscation at multiple inference stages in the simulation.
3. Evaluate the impact of each mitigation on PSCMIA attack ROC-AUC and classification accuracy.
4. Analyze trade-offs between mitigation effectiveness and potential inference performance overhead.
5. Document findings and suggest practical recommendations for embedded ML system designers.

**Ships as:** A comprehensive GitHub repository demonstrating mitigation implementations, attack evaluations before and after defenses, and a README discussing results, limitations, and future work.

**Stretch goal:** Extend the mitigation study to other side channels like timing or electromagnetic emanations if feasible.

_All projects rely on simulated power trace data since the paper's authors did not release code or real power trace datasets._
