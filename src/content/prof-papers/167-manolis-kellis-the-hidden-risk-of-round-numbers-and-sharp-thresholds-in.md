---
title: "167 · The hidden risk of round numbers and sharp thresholds in clinical practice — Manolis Kellis"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-manolis-kellis"
source_hash: "111e52f51f0957552fb307706c6480349591fe983664c7d9de2874053e2a0e81"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** interpretable machine learning
**The paper assumes:** interpretable machine learning models, generalized additive models, boosted decision trees, and model interpretability techniques
**Already in this field?** Skip this entirely if you already understand interpretable machine learning methods and how generalized additive models and boosted trees are used to analyze clinical data.

To understand the interpretable machine learning techniques central to this paper, especially generalized additive models and boosted decision trees for detecting threshold-induced biases in clinical risk data, two background options are provided. The rigorous course offers a deep, structured foundation in machine learning principles including ensemble methods and decision trees, while the fast track provides a concise, focused introduction to interpretable ML concepts and key explainability tools. Choose the rigorous course for comprehensive mastery or the fast track for a quick, practical grasp of interpretable ML relevant to biomedical applications.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 9 (Decision Trees and Ensemble Methods) and 8 (Data Splits, Models & Cross-Validation), plus Lectures 1-4 for foundational context, about 6.5 hours total — this subset covers core ML methods and model evaluation relevant to interpretable ML models in the paper.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a rigorous, authoritative machine learning course covering decision trees, ensemble methods, and foundational ML concepts necessary to understand the glass-box ML models used in the paper.

*If you want all of it:* 27.9 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Interpretable Machine Learning - Kaggle Course](https://www.youtube.com/playlist?list=PLpdmBGJ6ELUJaQDlOzg3tCoGc4ouyE55_) — 1littlecoder · 5 videos · 2.1h across 5 episodes

**Watch only this:** All 5 episodes, about 2.1 hours total — this covers key interpretable ML tools and use-cases needed to grasp the paper's methodology.

*Why it unblocks this paper:* The Kaggle Interpretable Machine Learning course offers a concise, well-structured introduction to interpretable ML concepts including feature importance, partial dependence plots, and SHAP values, directly relevant to understanding the paper's glass-box ML approach.

*If you want all of it:* 2.1 hours across 5 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for understanding and applying the core insights of the paper on risks of round-number clinical thresholds. The beginner project reproduces a key risk curve visualization using the authors' code and a public dataset, demonstrating the presence of threshold-induced discontinuities. The intermediate project reimplements the paper's glass-box ML approach on a smaller public ICU dataset to detect and quantify threshold artifacts, comparing to a simple baseline. The advanced project extends the method to incorporate treatment confounding effects dynamically, addressing a key limitation and future direction of the paper, aiming to improve real-time clinical decision support.

### Beginner — Visualize Mortality Risk Discontinuities at Clinical Thresholds
*Effort: a weekend, ~8 hours*

You build a Jupyter notebook that reproduces mortality risk curves for a clinical variable (e.g., serum creatinine) using the authors' provided Python notebooks and a public ICU dataset substitute. You generate plots showing discontinuities and paradoxical risk patterns at round-number thresholds, similar to figures in the paper.

**Why it shows you understood the paper:** This project shows you understand the core phenomenon of threshold-induced artifacts by reproducing the key visual evidence using real data and the authors' codebase.

**Grounded in:** Observed mortality risk curves often show discontinuities and counter-causal non-monotonicities at round-number thresholds (e.g., serum creatinine at 3.5 mg/dL).

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas, scikit-learn

**Data:** Use the MIMIC ICU dataset as a substitute for the paper's clinical data, accessed via publicly available MIMIC-III or MIMIC-IV repositories.

**Build it:**

1. Clone the authors' repository at https://github.com/AdaptInfer/DeathByRoundNumbers and explore the provided notebooks.
2. Download and preprocess a public MIMIC dataset focusing on pneumonia or ICU patient lab values including serum creatinine.
3. Run the authors' notebook to generate mortality risk curves for serum creatinine and identify discontinuities at round-number thresholds.
4. Modify the notebook to produce clear plots highlighting the threshold effects and add explanatory comments.
5. Write a README summarizing the findings and linking them to the paper's key results.

**Verified links from the paper:**

- <https://github.com/AdaptInfer/DeathByRoundNumbers> — released by the paper's authors

**Ships as:** A GitHub repo with a Jupyter notebook reproducing mortality risk curve plots showing threshold discontinuities, plus a README explaining the connection to the paper.

**Stretch goal:** Add automated statistical tests from the authors' utilities to detect discontinuities in the plotted risk curves.

### Intermediate — Detect Threshold-Induced Risk Artifacts Using Glass-Box ML
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core glass-box ML method using generalized additive models (GAMs) with boosted decision trees on a public ICU dataset. You detect and quantify discontinuities and paradoxical risk patterns caused by round-number clinical thresholds. You compare your results to a simple baseline model like logistic regression without GAM components.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main methodological contribution and apply it to real data, validating the presence of threshold artifacts and understanding their statistical signatures.

**Grounded in:** The authors developed a glass-box machine learning model using generalized additive models (GAMs) trained with boosted decision trees to detect discontinuities and non-monotonicities in mortality risk curves caused by threshold-based clinical decisions.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, scikit-learn, interpretML or pygam for GAMs, xgboost or lightgbm

**Data:** Use the MIMIC ICU dataset (MIMIC-III or MIMIC-IV) as a public substitute for the paper's clinical datasets.

**Build it:**

1. Preprocess the MIMIC dataset to extract relevant clinical variables and mortality outcomes.
2. Implement a GAM model with boosted decision trees to model mortality risk as a function of continuous predictors.
3. Apply automated tests or visualizations to identify discontinuities and paradoxical risk patterns at round-number thresholds.
4. Train a baseline logistic regression model and compare its risk curve smoothness and artifact detection to the GAM model.
5. Document the methodology, results, and interpretation in a Jupyter notebook and README.

**Verified links from the paper:**

- <https://github.com/AdaptInfer/DeathByRoundNumbers> — released by the paper's authors

**Ships as:** A GitHub repo containing code and notebooks that implement the glass-box ML approach, detect threshold artifacts, compare to baseline, and report findings.

**Stretch goal:** Incorporate longitudinal data slices to observe changes in threshold effects over time, mimicking the paper's longitudinal analysis.

### Advanced — Model Treatment Confounding to Improve Threshold Bias Detection
*Effort: a few weeks, ~40+ hours*

You extend the glass-box ML model to explicitly incorporate treatment variables and their dose-dependent effects, addressing the paper's limitation about unmodeled patient-specific treatments. Using public ICU data augmented with treatment proxies or simulated treatment variables, you analyze how treatment confounding affects risk estimates and threshold artifact detection. You propose a method to adjust risk curves dynamically to better reflect true patient risk.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by integrating treatment confounding into interpretable risk models, demonstrating deep comprehension and original extension of the research.

**Grounded in:** Extension of models to incorporate ongoing, dose-dependent treatments into risk assessments; AI models trained on observational data can underestimate true patient risk due to confounding from effective treatments.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, scikit-learn, interpretML or pygam, xgboost or lightgbm, causal inference libraries like DoWhy or EconML (optional)

**Data:** Use MIMIC ICU dataset with available treatment records or simulate treatment variables based on clinical thresholds to model confounding effects.

**Build it:**

1. Extract or simulate treatment variables from the ICU dataset aligned with clinical thresholds.
2. Extend the GAM boosted tree model to include treatment variables and model their dose-dependent effects on mortality risk.
3. Analyze how including treatment confounding changes the detection and interpretation of threshold-induced risk artifacts.
4. Implement visualization and statistical tests to compare risk curves with and without treatment adjustment.
5. Write a detailed report and notebook documenting methodology, results, and implications for clinical decision support.

**Verified links from the paper:**

- <https://github.com/AdaptInfer/DeathByRoundNumbers> — released by the paper's authors

**Ships as:** A GitHub repo with extended glass-box ML code modeling treatment confounding, analysis notebooks, and a report discussing improved risk artifact detection and clinical implications.

**Stretch goal:** Prototype a simple real-time clinical decision support dashboard that dynamically adjusts thresholds based on model outputs.

_The MIMIC dataset is used as a public substitute for the paper's ICU datasets; access requires credentialing and data use agreements. Treatment variables may be incomplete or require simulation for the advanced project._
