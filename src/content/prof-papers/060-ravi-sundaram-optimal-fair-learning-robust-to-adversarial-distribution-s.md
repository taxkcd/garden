---
title: "060 · Optimal Fair Learning Robust to Adversarial Distribution Shift — Ravi Sundaram"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ravi-sundaram"
source_hash: "aa44d6190ebceef91d4a5f0b4b77c549872433d58231f80df387a9b7d7b8879b"
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

To deeply understand the paper "Optimal Fair Learning Robust to Adversarial Distribution Shift," start by building foundational knowledge on adversarial distribution shifts and group fairness constraints, which are critical to grasping the robustness and fairness challenges addressed. Then, explore the role of randomized classifiers in fair machine learning to appreciate the key innovation of the paper. Finally, focus on the authors' own talk to get direct insights into their theoretical contributions, algorithms, and robustness guarantees.

## Recommended videos (in order)

### Adversarial distribution shift in machine learning *(prerequisite)*
This section covers the foundational challenges of distribution shifts, especially adversarial ones, which the paper addresses by designing robust fair classifiers. Understanding these shifts is crucial to appreciate why deterministic classifiers fail and randomized ones succeed under malicious noise.

*How the paper uses it:* The paper studies robustness of fair classifiers under adversarial distribution shifts, making this foundational knowledge essential.

▶ [Principles for Tackling Distribution Shift: Pessimism, Adaptation, and Anticipation](https://www.youtube.com/watch?v=QKBh6TmvBaw) — Fields Institute · 5 years ago

### Group fairness constraints in classification *(prerequisite)*
This section introduces the key group fairness notions—Demographic Parity, Equal Opportunity, and Predictive Equality—that the paper analyzes. A rigorous understanding of these constraints is necessary to follow the theoretical results and robustness proofs.

*How the paper uses it:* The paper analyzes Fair Bayes Optimal Classifiers under these three popular group fairness constraints.

▶ [Inherent Trade-Offs in Algorithmic Fairness](https://www.youtube.com/watch?v=p5yY2MyTJXA) — Microsoft Research · 1:23:51

### Randomized classifiers in fair machine learning *(prerequisite)*
Randomization is the core technical tool the paper uses to achieve robustness while maintaining fairness and interpretability. This section explains why and how randomization can improve fairness and robustness simultaneously, setting the stage for the paper's main results.

*How the paper uses it:* The paper proves that randomized Fair BOCs are robust and randomize on at most one data point, balancing fairness and interpretability.

▶ [On the Power of Randomization in Fair Classification and Representation](https://www.youtube.com/watch?v=1X4RoNrf45A) — Fields Institute · 3 years ago

### Authors' talk on robust fair learning *(the paper's own talk)*
The authors' own talk is the most direct and authoritative source to understand their motivations, theoretical contributions, and algorithmic results. It provides detailed insights into the robustness of randomized fair classifiers under adversarial noise.

*How the paper uses it:* This talk by Sushant Agarwal, one of the paper's authors, directly addresses the robustness of fair machine learning under adversarial bias.

▶ [On Adversarial Bias and the Robustness of Fair Machine Learning by Hongyan Chang](https://www.youtube.com/watch?v=fhOq2aLt8GU) — CS Research Week · 5 years ago
