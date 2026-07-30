---
title: "060 · Optimal Fair Learning Robust to Adversarial Distribution Shift — Ravi Sundaram"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ravi-sundaram"
source_hash: "2d5e5134ed241f8bdc09b72e30b1d23cd2a50e089fa5c5597e366f85d4c08b82"
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
