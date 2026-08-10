---
title: "060 · Optimal Fair Learning Robust to Adversarial Distribution Shift — Ravi Sundaram"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ravi-sundaram"
source_hash: "9c39055e86721fe146a6eef748304f15b59b66047030292dc25a9e081ee888e8"
sequence: 60
generator: "outreach-garden: managed"
---

# 060 · Optimal Fair Learning Robust to Adversarial Distribution Shift

## At a glance

- **Professor:** Ravi Sundaram
- **Institution:** Northeastern University
- **Paper:** [Optimal Fair Learning Robust to Adversarial Distribution Shift](https://proceedings.mlr.press/v267/agarwal25b.html)
- **Authors:** Sushant Agarwal, Amit Deshpande, Rajmohan Rajaraman, Ravi Sundaram
- **Year:** 2025

## Paper overview

This paper studies how to design fair machine learning classifiers that remain accurate and fair even when the data distribution is maliciously corrupted or shifted. It shows that deterministic fair classifiers are not robust to such adversarial noise, but randomized fair classifiers can be robust while maintaining high accuracy. The randomized classifiers are nearly deterministic, randomizing on at most one data point, thus balancing fairness, robustness, and interpretability.

### Why it matters

**Research problem:** How to achieve fair classification that is robust to adversarial distribution shifts or malicious noise in the training data, ensuring fairness and accuracy guarantees hold even under biased or corrupted data.

**Why it matters:** Machine learning models often amplify biases present in training data, causing unfair outcomes especially for vulnerable demographic groups. Training data can be maliciously corrupted or biased, making it critical to develop classifiers that maintain fairness and accuracy despite such adversarial shifts. This is important for socially impactful applications like hate speech detection, where biased classifiers can harm the very groups they aim to protect.

**Key contributions:**

- Demonstration that deterministic Fair BOCs are not robust to adversarial noise (Claim 1).
- Proof that randomized Fair BOCs are robust to malicious noise across Demographic Parity, Equal Opportunity, and Predictive Equality (Theorems 1, 2, 3).
- Characterization that randomized Fair BOCs randomize on at most one data point, making them nearly deterministic.
- Polynomial-time computability of randomized Fair BOCs, contrasted with NP-completeness of deterministic Fair BOCs (Claim 5).
- Tight bounds on accuracy gains achievable by randomization (Claim 6).

## About the professor

**Ravi Sundaram** — Professor, Computer Science, Northeastern University.

### Research links

- [Faculty/profile page](http://www.ccs.neu.edu/home/koods)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core background knowledge necessary to understand the paper on Optimal Fair Learning Robust to Adversarial Distribution Shift. It covers probability theory basics, statistical learning and binary classification concepts, fairness definitions in machine learning, adversarial robustness principles, randomized algorithms, and computational complexity. The resources are carefully selected university-level courses and lecture series, with guidance on which parts to focus on to efficiently prepare for the paper.

**The paper assumes:** probability theory, statistical learning theory, binary classification, group fairness definitions in machine learning, adversarial robustness concepts, computational complexity theory, randomized algorithms
**Time to work through:** roughly 40-50 hours if you watch all recommended parts, about 25-30 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you have a solid background in probability, machine learning fundamentals, and fairness in ML; focus on stages 4-6 for robustness and computational complexity aspects.

### Stage 1 · Probability Theory and Statistics *(foundational)*
The paper relies on concepts like probability distributions, total variation distance, and expectation to formalize distribution shifts and classifier accuracy under noise.

▶ **Course:** [Probability Bootcamp](https://www.youtube.com/playlist?list=PLMrJAkhIeNNR3sNYvfgiKgcStwuPSts9V) — Steve Brunton · 44 videos · 10.6h across 44 episodes

*What to watch:* Watch the first 24 episodes of the "Probability Bootcamp" playlist by Steve Brunton, covering fundamental probability concepts including sample spaces, random variables, distributions, and expectation, which are essential to understand total variation distance and probabilistic modeling in the paper.

*Move on when you can:* Explain total variation distance between two probability distributions and compute it for simple discrete distributions.

### Stage 2 · Statistical Learning and Binary Classification *(core)*
Understanding the basics of binary classification, Bayes optimal classifiers, and accuracy metrics is essential to grasp the Fair Bayes Optimal Classifier framework used in the paper.

▶ **Course:** [Mathematical Foundations for Machine Learning](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYPJS6m_ygxb4KtHYxh1HjR) — NPTEL - Indian Institute of Science, Bengaluru · 71 videos · 40.3h across the first 60 episodes

*What to watch:* Focus on the NPTEL "Mathematical Foundations for Machine Learning" playlist episodes 47 to 69, which cover classification basics, Bayes optimal classifiers, and logistic regression, providing the theoretical foundation for the Fair Bayes Optimal Classifier discussed in the paper.

*Move on when you can:* Derive the Bayes optimal classifier for a binary classification problem and compute its expected accuracy.

### Stage 3 · Fairness in Machine Learning *(core)*
The paper studies fairness constraints like Demographic Parity, Equal Opportunity, and Predictive Equality, so familiarity with these group fairness definitions and their implications is critical.

▶ **Course:** [Multigroup Fairness and the Validity of Statistical Judgment](https://www.youtube.com/playlist?list=PLgKuh-lKre11rbrWykJchIZpTXiDa0hX9) — Simons Institute for the Theory of Computing · 27 videos · 17.5h across 27 episodes

*What to watch:* Watch the "Multigroup Fairness and the Validity of Statistical Judgment" playlist by the Simons Institute for the Theory of Computing, focusing on the first 10 episodes that introduce group fairness definitions and their implications, which directly relate to the fairness constraints analyzed in the paper.

*Move on when you can:* Define Demographic Parity, Equal Opportunity, and Predictive Equality, and explain how they constrain classifier predictions.

### Stage 4 · Adversarial Robustness and Distribution Shift *(advanced)*
The core problem is robustness of classifiers under adversarial distribution shifts; understanding adversarial noise models and robustness metrics like Lipschitz continuity is necessary to follow the theoretical results.

▶ **Course:** [Deep Learning Course, by Dr. Soleymani, Sharif University, Spring 2024](https://www.youtube.com/playlist?list=PLDRc6k7DgmPqHPrxGIrHnbOsKh1iSb9W4) — Sharif ML Lab · 23 videos · 28.6h across 23 episodes

*What to watch:* Watch the "Deep Learning Course, by Dr. Soleymani, Sharif University, Spring 2024" playlist, focusing on the last episode (Session 24: Adversarial robustness) which covers adversarial distribution shifts and robustness concepts relevant to the paper's main contributions.

*Move on when you can:* Explain what adversarial distribution shift means and describe how Lipschitz conditions can bound accuracy changes under such shifts.

### Stage 5 · Randomized Algorithms and Their Analysis *(advanced)*
The paper’s key contribution involves randomized classifiers that randomize on at most one data point; understanding randomized algorithm design and analysis is needed to appreciate this approach and its computational benefits.

▶ **Course:** [MIT 6.5220 Randomized Algorithms Fall 2025](https://www.youtube.com/playlist?list=PL278F9gM5aZb8HXAh2yT3QmwyYQZrQUNH) — David Karger's Lectures · 31 videos · 45.4h across 31 episodes

*What to watch:* Focus on the "MIT 6.5220 Randomized Algorithms Fall 2025" playlist by David Karger, watching the first 10 lectures which introduce randomized algorithms, their analysis, and examples, providing the theoretical background to understand the paper's randomized Fair BOCs.

*Move on when you can:* Describe how randomization can improve algorithm robustness and give an example of a randomized algorithm with provable guarantees.

### Stage 6 · Computational Complexity and NP-Completeness *(advanced)*
The paper contrasts polynomial-time computability of randomized Fair BOCs with NP-completeness of deterministic ones; understanding complexity classes and reductions is essential to grasp these results.

▶ **Course:** [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos · 32.3h across 25 episodes

*What to watch:* Watch the "MIT 18.404J Theory of Computation, Fall 2020" playlist by MIT OpenCourseWare, focusing on episodes 14 to 16 which cover P vs NP, polynomial-time reductions, and NP-completeness proofs, equipping you to understand the complexity results in the paper.

*Move on when you can:* Explain the concept of NP-completeness and outline a reduction proving a problem is NP-complete.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Optimal Fair Learning Robust to Adversarial Distribution Shift," start by building foundational knowledge on adversarial distribution shift robustness and group fairness constraints in machine learning, as these underpin the paper's robustness and fairness guarantees. Next, grasp the theoretical basis of Bayes optimal classifiers, which form the core classifier model analyzed. Finally, focus on the paper's central contribution: the robustness and fairness achieved through randomized classifiers, ideally via the authors' own talk or closely related advanced research presentations.

### Adversarial distribution shift robustness *(prerequisite)*
This concept covers how machine learning models maintain performance when the data distribution changes adversarially, a key challenge addressed by the paper. Understanding robustness to distribution shifts is essential to appreciate the paper's guarantees on fairness and accuracy under malicious noise.

*How the paper uses it:* The paper's main contribution is proving robustness of randomized fair classifiers under adversarial distribution shifts.

▶ [Learning Decision Making Systems under (Adversarial) Distribution Shifts](https://www.youtube.com/watch?v=xYnDV0-1EP8) — Furong Huang · 4 years ago

### Group fairness constraints in ML *(prerequisite)*
Group fairness notions like Demographic Parity, Equal Opportunity, and Predictive Equality are central to the paper's fairness constraints. This section introduces these fairness definitions and their role in fair classification algorithms.

*How the paper uses it:* The paper analyzes Fair Bayes Optimal Classifiers under these group fairness constraints.

▶ [Michael Kearns - Between Group and Individual Fairness in Machine Learning](https://www.youtube.com/watch?v=36iQr_jwbiE) — Center for Game Theory at Stony Brook · 4 years ago

### Bayes optimal classifier theory *(prerequisite)*
Bayes Optimal Classifiers represent the theoretical foundation for optimal classification under given distributions. Understanding this theory is critical to grasp how the paper extends it to fair and robust classifiers.

*How the paper uses it:* The paper studies the Fair Bayes Optimal Classifier as the basis for their robust fair learning approach.

▶ [Probability and Bayes Learning - # 3 - Bayes Optimal Classifier](https://www.youtube.com/watch?v=O56-MQR0vgk) — Dr. Smriti Bhandari · 6 years ago

### Randomized classifiers in fairness
Randomization in classifiers is key to achieving robustness and fairness simultaneously, as deterministic classifiers fail under adversarial noise. This section explores the role and theory behind randomized classifiers in fair machine learning.

*How the paper uses it:* The paper proves that randomized Fair Bayes Optimal Classifiers are robust and nearly deterministic, randomizing on at most one data point.

▶ [Fairness and robustness in machine learning – a formal methods perspective - Aditya Nori, Microsoft](https://www.youtube.com/watch?v=iKiB5fDglZs) — The Alan Turing Institute · 33:55 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how to build fair and robust machine learning classifiers under adversarial distribution shifts. We start with the basics of Bayes optimal classifiers to grasp the theoretical foundation, then cover group fairness constraints to understand fairness definitions used in the paper. Next, we explore adversarial distribution shift robustness to appreciate the challenges of malicious data shifts. Finally, we focus on randomized classifiers in fairness, which are central to the paper's novel robust fair learning approach.

### Bayes optimal classifier theory *(prerequisite)*
Learn what a Bayes optimal classifier is — the theoretically best classifier that minimizes error given the data distribution. This concept forms the mathematical foundation for understanding the Fair Bayes Optimal Classifier analyzed in the paper.

*How the paper uses it:* The paper builds on the Fair Bayes Optimal Classifier as the theoretical basis for designing fair and robust classifiers.

▶ [2.4 Bayes Optimal Classifier with Example in Machine Learning](https://www.youtube.com/watch?v=K5N_M3MrfMo) — KnowledgeGATE Bytes · 2 years ago

### Group fairness constraints in ML *(prerequisite)*
Understand key group fairness definitions like Demographic Parity and Equal Opportunity, which ensure that machine learning models treat different demographic groups fairly. These fairness constraints are critical to the paper's analysis and robustness guarantees.

*How the paper uses it:* The paper analyzes robustness of Fair Bayes Optimal Classifiers under popular group fairness constraints including Demographic Parity and Equal Opportunity.

▶ [Definitions of Fairness in Machine Learning | Equal Opportunity, Equalized Odds & Disparate Impact](https://www.youtube.com/watch?v=c2_ezuAnCrA) — A Data Odyssey · 2 years ago

### Adversarial distribution shift robustness *(prerequisite)*
Explore what adversarial distribution shifts are — malicious or biased changes in data distribution that can degrade model performance. Understanding robustness to such shifts is key to appreciating the paper's motivation and contributions.

*How the paper uses it:* The paper studies robustness of fair classifiers under adversarial distribution shifts that corrupt or bias training data.

▶ [【EP11】Improving Robustness to Distribution Shifts: Methods and Benchmarks](https://www.youtube.com/watch?v=wSh2ln-SVg0) — The AI Talks · 3 years ago

### Randomized classifiers in fairness
Learn how introducing randomness into classifiers can help achieve fairness and robustness simultaneously. The paper shows that randomized Fair Bayes Optimal Classifiers, which randomize on at most one data point, are robust and nearly deterministic.

*How the paper uses it:* Randomized classifiers are central to the paper’s approach for achieving robustness and fairness under adversarial noise.

▶ [Fairness and robustness in machine learning – a formal methods perspective - Aditya Nori, Microsoft](https://www.youtube.com/watch?v=iKiB5fDglZs) — The Alan Turing Institute · 33:55 · 8 years ago

## Already in your library

- [On the Power of Randomization in Fair Classification and Representation](https://www.youtube.com/watch?v=1X4RoNrf45A) — also for: Optimal Fair Learning Robust to Adversarial Distribution Shift (Ravi Sundaram)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's core contributions on robust fair classification under adversarial distribution shifts. The beginner project reproduces a key theoretical insight about deterministic vs randomized fair classifiers on synthetic data. The intermediate project implements the randomized Fair Bayes Optimal Classifier (Fair BOC) under Demographic Parity on a public binary classification dataset with simulated adversarial noise, comparing accuracy and fairness robustness against a deterministic baseline. The advanced project extends the method to consider multiple fairness notions simultaneously or explores approximate fairness constraints, addressing one of the paper's stated future directions.

### Beginner — Visualizing Robustness of Deterministic vs Randomized Fair Classifiers
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simple binary classification dataset with a binary protected attribute and implements toy deterministic and randomized fair classifiers under Demographic Parity. You then simulate small adversarial distribution shifts and plot accuracy changes to reproduce the paper's Claim 1 and Theorem 1 insights about robustness and accuracy differences.

**Why it shows you understood the paper:** This project shows you grasp the fundamental theoretical difference between deterministic and randomized Fair BOCs in terms of robustness to adversarial noise, and can concretely demonstrate the local Lipschitz property of randomized classifiers.

**Grounded in:** Claim 1 (Non-Robustness of Deterministic Fair BOC’s) and Theorem 1 (Robustness of Randomized Fair BOC under Demographic Parity)

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic binary classification data with a binary protected group generated within the notebook.

**Build it:**

1. Generate a synthetic binary classification dataset with a binary protected attribute and labels.
2. Implement a deterministic fair classifier enforcing Demographic Parity by thresholding scores.
3. Implement a randomized fair classifier that randomizes prediction on at most one data point as per the paper's characterization.
4. Simulate small adversarial distribution shifts by perturbing label or feature distributions.
5. Plot accuracy and fairness metric changes for both classifiers under these shifts.
6. Write a README explaining the connection to the paper's claims.

**Ships as:** A Jupyter notebook with code and plots demonstrating robustness differences, plus a README linking the results to the paper's theoretical claims.

**Stretch goal:** Add Equal Opportunity fairness constraint and show similar robustness behavior.

### Intermediate — Implementing Randomized Fair BOC on Adult Dataset with Adversarial Noise
*Effort: 2 weekends, ~20 hours*

You implement the randomized Fair Bayes Optimal Classifier under Demographic Parity on the UCI Adult dataset (a standard binary classification dataset with a binary protected attribute 'gender'). You simulate adversarial distribution shifts by injecting label noise or biased sampling. You compare the accuracy and fairness robustness of your randomized classifier against a deterministic fair classifier baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's polynomial-time algorithm for randomized Fair BOCs into practice on a real dataset, and empirically validate the robustness and accuracy improvements claimed in the paper.

**Grounded in:** Polynomial-time computability of randomized Fair BOCs (Claim 5) and robustness guarantees under Demographic Parity (Theorem 1)

**Tech stack:** Python 3.11, scikit-learn, NumPy, Pandas, Jupyter Notebook, Matplotlib

**Data:** UCI Adult dataset (publicly available) used as a substitute for binary classification with binary protected groups.

**Build it:**

1. Download and preprocess the UCI Adult dataset, encoding features and defining the binary protected attribute.
2. Implement a deterministic fair classifier enforcing Demographic Parity as a baseline (e.g., post-processing or threshold adjustment).
3. Implement the randomized Fair BOC algorithm as described in the paper, randomizing on at most one data point.
4. Simulate adversarial distribution shifts by injecting label noise or biased sampling in the training data.
5. Evaluate and compare accuracy and fairness metrics (Demographic Parity) of both classifiers under clean and shifted distributions.
6. Document the implementation details, results, and relate findings to the paper's claims.

**Ships as:** A Jupyter notebook or Python scripts with code, evaluation results, and a detailed README explaining the implementation and empirical validation of robustness.

**Stretch goal:** Extend the implementation to Equal Opportunity fairness and compare robustness.

### Advanced — Extending Robust Fair Classification to Multiple Fairness Constraints
*Effort: 3+ weeks*

You develop an extension of the randomized Fair BOC algorithm to simultaneously enforce multiple fairness constraints (e.g., Demographic Parity and Equal Opportunity) on a binary classification task. You implement this on the UCI Adult dataset with adversarial noise and evaluate robustness and accuracy trade-offs. This addresses the paper's future direction on considering multiple fairness notions simultaneously.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's theoretical framework and limitations, and your ability to extend and apply its methods beyond the original scope, potentially contributing novel empirical insights.

**Grounded in:** Extension of robustness results to multiple fairness notions (Key Contributions and Future Directions)

**Tech stack:** Python 3.11, scikit-learn, NumPy, Pandas, Jupyter Notebook, Matplotlib, CVXPY or other convex optimization library

**Data:** UCI Adult dataset used as a proxy for binary classification with binary protected groups.

**Build it:**

1. Review the paper's theoretical extension to multiple fairness constraints and understand the combined constraint formulation.
2. Implement the randomized Fair BOC algorithm extended to handle multiple fairness constraints simultaneously.
3. Preprocess the UCI Adult dataset and define relevant protected groups and labels.
4. Simulate adversarial distribution shifts via label noise or biased sampling.
5. Evaluate accuracy and multiple fairness metrics under clean and shifted data distributions.
6. Analyze trade-offs between fairness constraints, robustness, and accuracy.
7. Prepare a comprehensive README documenting methodology, results, and connection to the paper's future directions.

**Ships as:** A well-documented codebase and notebook demonstrating the extended algorithm, empirical results on robustness under multiple fairness constraints, and a detailed report linking to the paper's contributions and future work.

**Stretch goal:** Explore approximate fairness constraints or multi-class classification extensions as further research.

_The paper authors released no code or datasets; all implementations must be built from the paper's descriptions and public datasets like UCI Adult used as substitutes._
