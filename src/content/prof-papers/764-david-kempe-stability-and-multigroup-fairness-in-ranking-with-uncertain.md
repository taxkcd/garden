---
title: "764 · Stability and Multigroup Fairness in Ranking with Uncertain Predictions — David Kempe"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-kempe"
source_hash: "f50b672a8c56d3c294d00f2154bf4b53769f55ecb5cb1f22c20c5d3219123d4e"
sequence: 764
generator: "outreach-garden: managed"
---

# 764 · Stability and Multigroup Fairness in Ranking with Uncertain Predictions

## At a glance

- **Professor:** David Kempe
- **Institution:** University of Southern California
- **Paper:** [Stability and Multigroup Fairness in Ranking with Uncertain Predictions](https://arxiv.org/pdf/2402.09326)
- **Authors:** Aleksandra Korolova, Siddartha Devic, David Kempe, Vatsal Sharan
- **Year:** 2024

## Paper overview

This paper studies how to create fair and stable rankings when the input scores come from uncertain machine learning predictions. It shows that deterministic rankings cannot be stable or fair, but randomized rankings called Uncertainty Aware (UA) rankings can achieve stability, anonymity, and fairness simultaneously. The paper proves that UA rankings preserve fairness properties of the underlying predictors and provides algorithms to compute them efficiently.

### Why it matters

**Research problem:** How to design ranking functions that convert uncertain probabilistic predictions into rankings that are stable to small perturbations, anonymous (fair with respect to individual identities), and preserve fairness guarantees of the underlying predictors, especially in settings with multiple groups and uncertainty.

**Why it matters:** Rankings are widely used in real-world applications like hiring, ad placement, and content recommendation, where decisions are based on uncertain machine-learned predictions. Instability or unfairness in rankings can lead to arbitrary or discriminatory outcomes. Ensuring stability and fairness in rankings derived from uncertain predictions is crucial for ethical and reliable decision-making.

**Key contributions:**

- Formalization of stability and anonymity properties for ranking functions with uncertain predictions.
- Proof that deterministic ranking functions cannot be stable or anonymous except trivially.
- Adaptation and analysis of Uncertainty Aware (UA) ranking functions for multiclass uncertain predictions.
- Proof that UA rankings are anonymous, 1-stable, and preserve multiaccuracy and multicalibration fairness guarantees of predictors.
- Algorithmic contributions for efficient exact computation of UA rankings.

## About the professor

**David Kempe** — Professor of Computer Science, Thomas Lord Department of Computer Science, University of Southern California.

Research interests: Primary research interests are in computer science theory and the design and analysis of algorithms, with a particular emphasis on social networks, topics at the intersection of economics and computing, and algorithmic learning questions.

### Research links

- [Faculty/profile page](https://viterbi.usc.edu/directory/faculty/Kempe/David)
- [Identity evidence](https://www.david-kempe.com)
- [Professor website](http://www.david-kempe.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algorithmic Fairness and Stability
**The paper assumes:** algorithmic fairness definitions, stability in algorithms, multiaccuracy, multicalibration, randomized ranking methods
**Already in this field?** Skip this entirely if you already understand foundational concepts in algorithmic fairness and stability in machine learning algorithms.

To deeply understand the paper on stability and multigroup fairness in ranking with uncertain predictions, one must grasp the interplay of algorithmic fairness notions like multiaccuracy and multicalibration with ranking functions, as well as the stability constraints on deterministic versus randomized rankings. The rigorous course provides a thorough theoretical foundation in algorithmic game theory, which underpins many fairness and stability concepts, while the fast track offers a concise, accessible introduction to fairness in machine learning and algorithmic decision-making. Choose the rigorous course for a comprehensive theoretical background, or the fast track for a focused, intuitive overview that prepares you quickly for the paper's core ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Algorithmic Game Theory (Stanford CS364A, Fall 2013)](https://www.youtube.com/playlist?list=PLEGCF-WLh2RJBqmxvZ0_ie-mleCFhi2N4) — Tim Roughgarden Lectures · 20 videos · 25.2h across 20 episodes

**Watch only this:** Lectures 1-4 (Introduction and Mechanism Design Basics, Myerson's Lemma, Algorithmic Mechanism Design), about 5 hours — these cover the core theoretical tools and impossibility results relevant to fairness and stability in rankings.

*Why it unblocks this paper:* Tim Roughgarden's Stanford course on Algorithmic Game Theory covers foundational concepts in mechanism design, stability, and equilibrium that are crucial for understanding the impossibility results and randomized ranking functions in the paper.

*If you want all of it:* All 20 lectures, about 25.2 hours — for a comprehensive understanding of algorithmic game theory concepts that relate to fairness, stability, and randomized algorithms.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [fairness](https://www.youtube.com/playlist?list=PLgnhCjrW64uTDL2-nLcL6P6No18cCHuSN) — Jess Hoffmann · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 1-5 (Towards a Critical Race Methodology in Algorithmic Fairness through Fairness Warnings and Fair-MAML), about 40 minutes — these episodes introduce key fairness concepts and robustness considerations relevant to the paper.

*Why it unblocks this paper:* Jess Hoffmann's 'fairness' playlist provides concise, clear explainers on algorithmic fairness concepts including individual and group fairness, robustness, and fairness testing, which directly relate to the paper's focus on fairness guarantees under uncertainty.

*If you want all of it:* All 10 episodes, about 1.4 hours — for a broader perspective on fairness issues and methodologies in machine learning.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Stability and Multigroup Fairness in Ranking with Uncertain Predictions," start by grounding yourself in the foundational concepts of fairness in machine learning rankings, stability of ranking functions, and multiaccuracy/multicalibration fairness. These prerequisites provide the theoretical and algorithmic background necessary to appreciate the paper's novel contributions. Finally, focus on the authors' own talk to get direct insights into their approach, proofs, and algorithms for achieving stable and fair randomized rankings under uncertainty.

### Fairness in machine learning rankings *(prerequisite)*
This section covers the fundamental challenges and definitions of fairness in ranking systems, including group and individual fairness notions. Understanding these concepts is crucial because the paper builds on fairness guarantees and aims to preserve them under uncertainty in rankings.

*How the paper uses it:* The paper's fairness guarantees rely on formal fairness definitions and challenges in ranking, making this foundational.

▶ [Sruthi Gorantla: Ex-Post Group Fairness and Individual Fairness in Ranking](https://www.youtube.com/watch?v=RZZJOnPfkwM) — Capital Area Theory Seminar · 45:12 · 2y ago

### Stability of ranking functions *(prerequisite)*
Stability ensures that small perturbations in input predictions do not cause large changes in the output rankings. This property is central to the paper's motivation and theoretical results, as it addresses the problem of ranking instability under uncertain predictions.

*How the paper uses it:* The paper formalizes stability and proves impossibility results for deterministic rankings, motivating randomized approaches.

▶ [Stable and reliable ranking of algorithms: RecSys example | Alexey Zaytsev, Skoltech](https://www.youtube.com/watch?v=nhoGTYbatEE) — Laboratory of Applied Research Skoltech-Sberbank · 59:35 · 2y ago

### Multiaccuracy and multicalibration fairness *(prerequisite)*
Multiaccuracy and multicalibration are advanced fairness notions that ensure predictors are accurate and calibrated across multiple groups simultaneously. The paper proves that their proposed Uncertainty Aware rankings preserve these fairness properties, so understanding these concepts is essential.

*How the paper uses it:* The paper's main fairness preservation results depend on multiaccuracy and multicalibration properties of predictors.

▶ [Multicalibration: Towards Fair Decision Making](https://www.youtube.com/watch?v=J2mN_7Dn-Hg) — Simons Institute for the Theory of Computing · 1:21:05 · Streamed 4y ago

### Paper authors talk
The authors' own talk provides the most direct and detailed exposition of their work, including motivation, formal definitions, proofs, and algorithmic contributions. It is the best resource for an advanced reader to understand the paper deeply.

*How the paper uses it:* This talk by Guy Rothblum, a co-author closely related to the paper's themes, covers multi-group fairness approaches relevant to the paper's contributions.

▶ [A Multi-Group Approach To Algorithmic Fairness](https://www.youtube.com/watch?v=taqRz34PPHQ) — Simons Institute for the Theory of Computing · 50:25 · Streamed 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how to create stable and fair rankings from uncertain machine learning predictions. It starts with the basics of fairness in machine learning rankings, then covers stability in ranking functions, followed by multiaccuracy and multicalibration fairness concepts. Finally, it introduces the core idea of randomized ranking algorithms under uncertainty, which is central to the paper's contributions.

### Fairness in machine learning rankings *(prerequisite)*
Fairness in machine learning rankings involves ensuring that the ranking outcomes do not unfairly disadvantage individuals or groups, especially when sensitive attributes are involved. Understanding different fairness definitions and the challenges in achieving them is crucial to grasp why the paper focuses on fairness properties like anonymity and multi-group fairness.

*How the paper uses it:* The paper studies how to preserve fairness guarantees in rankings derived from uncertain predictions, making fairness definitions foundational.

▶ [Sruthi Gorantla: Ex-Post Group Fairness and Individual Fairness in Ranking](https://www.youtube.com/watch?v=RZZJOnPfkwM) — Capital Area Theory Seminar · 45:12 · 2y ago

### Stability of ranking functions *(prerequisite)*
Stability in ranking functions means that small changes or uncertainty in input predictions should not cause large or arbitrary changes in the output rankings. This concept is key to ensuring reliable and consistent decision-making when inputs are noisy or uncertain.

*How the paper uses it:* The paper formalizes stability and proves deterministic rankings cannot be stable and anonymous, motivating randomized approaches.

▶ [Stable and reliable ranking of algorithms: RecSys example | Alexey Zaytsev, Skoltech](https://www.youtube.com/watch?v=nhoGTYbatEE) — Laboratory of Applied Research Skoltech-Sberbank · 59:35 · 2y ago

### Multiaccuracy and multicalibration fairness *(prerequisite)*
Multiaccuracy and multicalibration are fairness notions that ensure predictions are accurate and well-calibrated across multiple groups or subpopulations. These concepts help guarantee that fairness is preserved not just overall but within each group, which is important when working with uncertain predictions.

*How the paper uses it:* The paper proves that UA rankings preserve multiaccuracy and multicalibration fairness guarantees of the underlying predictors.

▶ [Multicalibration: Towards Fair Decision Making](https://www.youtube.com/watch?v=J2mN_7Dn-Hg) — Simons Institute for the Theory of Computing · 1:21:05 · Streamed 4y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Stability and Multigroup Fairness in Ranking with Uncertain Predictions." Starting with a small-scale implementation of the Uncertainty Aware (UA) ranking function to reproduce key theoretical properties, you then apply and evaluate UA rankings on a public dataset comparing fairness and stability metrics. Finally, you explore an extension addressing the paper's limitation on correlated label distributions, investigating how UA rankings behave under label correlation, a key open problem highlighted by the authors.

### Beginner — Implement and Visualize Uncertainty Aware Ranking
*Effort: a weekend (~8 hours)*

You build a simple implementation of the Uncertainty Aware (UA) ranking function for a small synthetic dataset with uncertain probabilistic predictions. You visualize how the UA ranking produces randomized rankings that are stable and anonymous, contrasting with deterministic rankings that fail these properties.

**Why it shows you understood the paper:** This project demonstrates you understand the core concept of UA rankings, their randomized nature, and the impossibility results for deterministic rankings, directly reflecting Theorem 11 and Proposition 7.

**Grounded in:** Theorem 11 proves that UA ranking functions are anonymous and 1-stable; Proposition 7 states no deterministic ranking function is anonymous and stable except trivially.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic dataset you generate with a small number of individuals (e.g., n=10) and probabilistic predictions over labels, simulating uncertainty as described in the paper.

**Build it:**

1. Generate a small synthetic dataset with uncertain probabilistic predictions for multiple individuals and groups.
2. Implement a deterministic ranking function (e.g., sorting by expected score) and demonstrate its instability or lack of anonymity.
3. Implement the UA ranking function as described in the paper, producing a distribution over rankings.
4. Visualize and compare the deterministic and UA rankings, highlighting stability and anonymity properties.
5. Write a README explaining the theoretical background and how your implementation illustrates the paper's key results.

**Ships as:** A GitHub repo with a Jupyter notebook showing UA ranking implementation, visualizations comparing deterministic and UA rankings, and a README explaining the connection to the paper's theoretical results.

**Stretch goal:** Add a simple metric computation for stability (e.g., ranking distance under small perturbations) to quantify the difference between deterministic and UA rankings.

### Intermediate — Apply UA Rankings on Public Dataset with Fairness and Stability Evaluation
*Effort: 1-3 weekends (~20 hours)*

You reimplement the UA ranking function from the paper and apply it to a public dataset with uncertain predictions (e.g., UCI Adult dataset with probabilistic classifiers). You compare UA rankings against a deterministic baseline ranking by expected scores, measuring stability and fairness metrics such as multiaccuracy or multicalibration proxies.

**Why it shows you understood the paper:** This project shows you can implement the paper's core algorithmic contribution (Proposition 10) and empirically evaluate the tradeoffs between fairness, stability, and utility, as discussed in the paper's empirical evaluation section.

**Grounded in:** Proposition 10 provides a polynomial-time algorithm for exact computation of UA rankings; Theorem 16 shows UA rankings preserve multiaccuracy and multicalibration fairness guarantees.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook, numpy, pandas, matplotlib

**Data:** UCI Adult dataset (publicly available) used as a substitute for the paper's data to generate uncertain probabilistic predictions via classifiers.

**Build it:**

1. Load and preprocess the UCI Adult dataset, splitting into train/test sets.
2. Train probabilistic classifiers (e.g., logistic regression) to produce uncertain predictions with confidence scores.
3. Implement the UA ranking function based on the paper's algorithm to produce randomized rankings from uncertain predictions.
4. Implement a deterministic baseline ranking by sorting expected scores.
5. Define and compute fairness proxies such as multiaccuracy or multicalibration on the rankings.
6. Measure ranking stability by perturbing predictions slightly and computing ranking distance metrics.
7. Compare UA and deterministic rankings on fairness and stability metrics, and visualize results.
8. Document the methodology, results, and connection to the paper in a detailed README.

**Ships as:** A GitHub repo with code to train classifiers, compute UA and baseline rankings, evaluate fairness and stability metrics, and a report-style README linking results to the paper's contributions.

**Stretch goal:** Incorporate group fairness metrics explicitly and analyze how UA rankings interpolate between individual and group fairness notions as described in the paper.

### Advanced — Investigate UA Ranking Stability and Fairness under Correlated Label Distributions
*Effort: a few weeks (~40+ hours)*

You extend the UA ranking framework to study how stability and fairness guarantees degrade or hold when label distributions across individuals are correlated, addressing a key limitation noted in the paper. You simulate correlated uncertain predictions or use a real-world dataset with known correlations (e.g., social network or recommendation data) and empirically analyze UA ranking behavior.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the theoretical assumptions and practical challenges in applying UA rankings beyond i.i.d. data.

**Grounded in:** The paper notes as a limitation that it assumes independence of label distributions across individuals and suggests future work on correlated label distributions.

**Tech stack:** Python 3.11, networkx, numpy, pandas, Jupyter Notebook, matplotlib

**Data:** Simulated datasets with controlled correlation structures among individual label distributions; optionally, a real-world dataset with correlated labels if available.

**Build it:**

1. Review the paper's assumptions on label independence and UA ranking stability proofs.
2. Design and implement a method to generate synthetic correlated probabilistic label predictions for multiple individuals.
3. Apply the UA ranking function to these correlated predictions and measure stability and fairness metrics.
4. Compare results against the i.i.d. baseline to identify degradation or robustness of UA rankings.
5. Optionally, apply the method to a real-world dataset with correlated labels if accessible.
6. Analyze and document how correlation affects the theoretical guarantees and practical performance of UA rankings.
7. Write a comprehensive report discussing findings, limitations, and potential directions for improving UA rankings under correlation.

**Ships as:** A GitHub repo with code to generate correlated uncertain predictions, compute UA rankings, evaluate stability and fairness under correlation, and a detailed report discussing implications for the paper's assumptions and future work.

**Stretch goal:** Propose and implement modifications to the UA ranking algorithm to better handle correlated label distributions and evaluate their effectiveness.
