---
title: "167 · The hidden risk of round numbers and sharp thresholds in clinical practice — Manolis Kellis"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-manolis-kellis"
source_hash: "e6872830d0613181191269edbaf08befc3d5280a255e47457765954d0ba62365"
sequence: 167
generator: "outreach-garden: managed"
---

# 167 · The hidden risk of round numbers and sharp thresholds in clinical practice

## At a glance

- **Professor:** Manolis Kellis
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [The hidden risk of round numbers and sharp thresholds in clinical practice](https://doi.org/10.1038/s41746-025-02079-y)
- **Authors:** Benjamin J. Lengerich, Rich Caruana, Mark E. Nunnally, Manolis Kellis
- **Year:** 2025

## Paper overview

This study reveals that using round-number thresholds in clinical decision-making can distort risk assessments and lead to suboptimal patient outcomes. By developing an interpretable machine learning model, the authors identify statistical artifacts caused by these thresholds, such as sudden jumps or paradoxical risk patterns in patient mortality data. The findings suggest that clinical guidelines should be periodically reassessed to better align with continuous patient risk and improve treatment decisions.

### Why it matters

**Research problem:** Clinical practice often simplifies continuous risk data into discrete levels using round-number thresholds, which can distort risk assessments and lead to suboptimal treatment decisions and patient outcomes.

**Why it matters:** Threshold-based decisions are widely used for consistency and ease in clinical settings but can introduce hidden biases that increase patient risk, misguide AI models, and ultimately compromise patient care.

**Key contributions:**

- Development of an interpretable glass-box ML model to identify statistical artifacts caused by round-number clinical thresholds.
- Systematic classification of two types of threshold-induced artifacts: discontinuous risk and paradoxical (counter-causal) risk.
- Demonstration that these artifacts persist in real-world clinical datasets despite advances in medical practice.
- Longitudinal analysis showing improvements over time in some threshold effects but persistence of others.
- Identification of risks that AI models may underestimate due to confounding from effective treatments.

## About the professor

**Manolis Kellis** — Professor, Computer Science, Massachusetts Inst. of Technology.

Research interests: computational integration of large-scale functional and comparative genomics datasets

### Research links

- [Faculty/profile page](http://mit.edu/manoli)
- [Professor website](http://web.mit.edu/manoli/www/manoli.html)
- [Lab website](http://compbio.mit.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=lsYXBx8AAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the hidden risks of round numbers and sharp thresholds in clinical practice, start with foundational knowledge on the key modeling techniques used: generalized additive models and boosted decision trees. Next, build domain-specific understanding of clinical risk thresholds and interpretable machine learning frameworks critical for transparent risk assessment. Finally, focus on the paper's core concept by reviewing the authors' own talk presenting their novel glass-box ML approach and findings on threshold-induced artifacts in clinical data.

### Generalized additive models lecture *(prerequisite)*
Generalized additive models (GAMs) form the statistical backbone of the paper's interpretable risk estimation approach. Understanding GAMs is essential to grasp how the authors model nonlinear and discontinuous risk relationships while maintaining interpretability. The selected lecture from Stanford Online provides a concise, rigorous introduction to GAMs by a leading statistics department.

*How the paper uses it:* The paper uses GAMs trained with boosted trees to detect discontinuities and paradoxical risk patterns caused by clinical thresholds.

▶ [Statistical Learning: 7.4 Generalized Additive Models and ...](https://www.youtube.com/watch?v=3aMB51GMUyQ) — Stanford Online · 10:46

### Boosted decision trees lecture *(prerequisite)*
Boosted decision trees are the machine learning technique used to train the glass-box model in the paper. A solid understanding of boosting and decision tree ensembles is necessary to appreciate how the model captures complex risk patterns while remaining interpretable. Trevor Hastie's lecture on Gradient Boosting Machine Learning is a comprehensive and authoritative resource.

*How the paper uses it:* The authors employ boosted decision trees within their GAM framework to model mortality risk curves and identify threshold artifacts.

▶ [Trevor Hastie - Gradient Boosting Machine Learning](https://www.youtube.com/watch?v=wPqtzj5VZus) — H2O.ai · 44:14

### Clinical risk thresholds lecture *(prerequisite)*
Clinical risk thresholds are central to the paper's investigation of how round-number cutoffs impact patient risk assessment and treatment decisions. Understanding the clinical decision-making context and the rationale behind threshold use is crucial. The video from the 'Strong Medicine' channel offers a qualitative discussion of the threshold model in clinical decision-making, suitable for advanced understanding without oversimplification.

*How the paper uses it:* The paper analyzes how round-number clinical thresholds induce statistical artifacts and distort risk curves in practice.

▶ [The Threshold Model of Clinical Decision-Making (Strong Diagnosis)](https://www.youtube.com/watch?v=R1GGhYdOuxg) — Strong Medicine · 5 years ago

### Interpretable machine learning lecture *(prerequisite)*
Interpretable machine learning frameworks underpin the paper's glass-box modeling approach, enabling detection and explanation of threshold-induced biases. A deep understanding of interpretability methods is necessary to appreciate the transparency and clinical relevance of the authors' model. The Stanford Seminar by Professor Hima Lakkaraju provides a rigorous overview of modern interpretable ML techniques.

*How the paper uses it:* The paper develops an interpretable glass-box ML model to systematically identify statistical artifacts from clinical thresholding.

▶ [Stanford Seminar - ML Explainability Part 1 I Overview and ...](https://www.youtube.com/watch?v=_DYQdP_F-LA) — Stanford Online · 28:07

### Paper authors talk *(the paper's own talk)*
The authors' own presentation of their work offers the most direct and detailed insight into their methodology, findings, and implications. This talk is essential to fully grasp the nuances of their glass-box ML approach and the clinical significance of threshold-induced risk artifacts.

*How the paper uses it:* This talk presents the authors' novel interpretable ML approach and their discovery of hidden risks from round-number clinical thresholds.

▶ [Rounding Up or Down Number Talk](https://www.youtube.com/watch?v=LRn4W-aYlns) — Jennifer Kelley · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced learning path introduces foundational concepts needed to understand how round-number clinical thresholds can bias risk assessments, focusing on interpretable machine learning methods used in the paper. We start with clinical risk thresholds to grasp the practical context, then cover the core modeling tools—generalized additive models and boosted decision trees—that enable interpretable risk estimation. Finally, we explore interpretable machine learning approaches to appreciate how the authors detect and explain threshold-induced artifacts.

### Clinical risk thresholds lecture *(prerequisite)*
Understanding clinical risk thresholds is essential because these round-number cutoffs guide treatment decisions but can introduce biases. This section explains how thresholds simplify complex risk data into actionable decisions and the potential pitfalls of this approach.

*How the paper uses it:* The paper investigates how round-number clinical thresholds cause discontinuities and paradoxical risk patterns in patient mortality data.

▶ [The Threshold Model of Clinical Decision-Making (Strong Diagnosis)](https://www.youtube.com/watch?v=R1GGhYdOuxg) — Strong Medicine · 5 years ago

### Generalized additive models lecture *(prerequisite)*
Generalized additive models (GAMs) are flexible statistical tools that model relationships between predictors and outcomes as smooth, additive functions. They provide interpretable risk curves, making them ideal for detecting unusual patterns like discontinuities caused by thresholds.

*How the paper uses it:* The authors use GAMs trained with boosted trees to model and interpret mortality risk curves affected by clinical thresholds.

▶ [Statistical Learning: 7.4 Generalized Additive Models and ...](https://www.youtube.com/watch?v=3aMB51GMUyQ) — Stanford Online · 10:46

### Boosted decision trees lecture *(prerequisite)*
Boosted decision trees combine many simple tree models sequentially to improve prediction accuracy. This technique helps capture complex, nonlinear relationships in data while maintaining interpretability when combined with GAMs.

*How the paper uses it:* Boosted decision trees are used to train the glass-box model that identifies threshold-induced artifacts in clinical risk data.

▶ [Gradient Boost Part 1 (of 4): Regression Main Ideas](https://www.youtube.com/watch?v=3CC4N4z3GJc) — StatQuest with Josh Starmer · 15:52

### Interpretable machine learning lecture
Interpretable machine learning focuses on creating models whose decisions can be understood by humans, crucial for trustworthy clinical applications. This section introduces the principles and importance of transparency in ML models.

*How the paper uses it:* The paper’s glass-box ML approach relies on interpretability to detect and explain biases caused by clinical thresholds.

▶ [#047 Interpretable Machine Learning - Christoph Molnar](https://www.youtube.com/watch?v=0LIACHcxpHU) — Machine Learning Street Talk · 1:40:22

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into their motivation, methodology, and key findings, reinforcing understanding of how threshold effects impact clinical risk modeling.

*How the paper uses it:* This talk presents the authors’ perspective on the hidden risks of round-number thresholds and their interpretable ML approach.

▶ [Rounding Up or Down Number Talk](https://www.youtube.com/watch?v=LRn4W-aYlns) — Jennifer Kelley · 5 years ago
