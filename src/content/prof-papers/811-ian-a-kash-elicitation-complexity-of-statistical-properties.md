---
title: "811 · Elicitation Complexity of Statistical Properties — Ian A. Kash"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ian-a-kash"
source_hash: "08b16f8c0bf6227a0517ccb5f2b34fc12f69eb3110f04574b78f7a25b05314aa"
sequence: 811
generator: "outreach-garden: managed"
---

# 811 · Elicitation Complexity of Statistical Properties

## At a glance

- **Professor:** Ian A. Kash
- **Institution:** University of Illinois at Chicago
- **Paper:** [Elicitation Complexity of Statistical Properties](https://arxiv.org/pdf/1506.07212)
- **Authors:** Rafael Frongillo, Ian A. Kash
- **Year:** 2020

## Paper overview

This paper studies how statistical properties (like mean, variance, entropy, and financial risk measures) can be estimated by minimizing loss functions, a common approach in statistics and machine learning. It introduces the concept of elicitation complexity, which measures how many dimensions are needed to indirectly estimate a property via empirical risk minimization. The authors develop a general theory, provide tight bounds for many properties including variance and financial risk measures, and discuss implications for machine learning and finance.

### Why it matters

**Research problem:** Which statistical properties are elicitable by loss functions, and more specifically, what is the minimal dimensional complexity (elicitation complexity) required to indirectly elicit a given property through empirical risk minimization?

**Why it matters:** Understanding elicitation complexity clarifies the capabilities and limitations of empirical risk minimization and point estimation, which are foundational in statistics, machine learning, and financial risk management. It informs the design of surrogate loss functions and consistent learning algorithms for complex properties that are not directly elicitable.

**Key contributions:**

- Introduced a general and flexible definition of elicitation complexity with respect to property classes.
- Proved tight upper and lower bounds on elicitation complexity for Bayes risks.
- Applied theory to key properties: variance, entropy, norms, and financial risk measures like expected shortfall and spectral risk measures.
- Established that variance has elicitation complexity 2, entropy and norms have maximal complexity (equal to full distribution dimension).
- Introduced a new risk measure, the variantile, and characterized its elicitation complexity.

## About the professor

**Ian A. Kash** — Associate Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: Economics and Computer Science, Machine Learning

### Research links

- [Faculty/profile page](https://cs.uic.edu/profiles/ian-kash)
- [Professor website](https://www.cs.uic.edu/~iankash/)
- [Google Scholar](https://scholar.google.co.uk/citations?user=CxIxSBEAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Statistical Decision Theory
**The paper assumes:** statistical decision theory, loss functions, Bayes risk, property elicitation, empirical risk minimization
**Already in this field?** Skip this entirely if you already understand the basics of statistical decision theory including loss functions and Bayes risk.

This background covers Statistical Decision Theory, essential for understanding elicitable properties, Bayes risks, and empirical risk minimization as discussed in the paper. The rigorous course option offers a deep, structured university-level exploration, while the fast track provides a concise, focused overview suitable for quickly grasping core concepts without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [BUS509 - Statistics Analysis & Decision Theory](https://www.youtube.com/playlist?list=PLRoTrFD--2Sw0JOJqxzVISVKqtDwDrI5N) — Sarah Sachs · 31 videos · 28.4h across 31 episodes

**Watch only this:** Watch episodes 1 (Introduction and Syllabus), 6 (Introduction to Probability Demo), 7 (Introduction to Probability), 13 (Testing Variance part 2), 14 (Testing Variance of the Population), and 16 (Hypothesis Testing), totaling about 5.5 hours — these cover the key statistical decision theory concepts relevant to elicitation and risk measures.

*Why it unblocks this paper:* This is a comprehensive university-level course on Statistics Analysis & Decision Theory that covers foundational concepts such as loss functions, variance, hypothesis testing, and probability distributions, directly supporting the paper's theoretical framework on elicitation complexity and empirical risk minimization.

*If you want all of it:* 28.4 hours across 31 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Decision Analysis](https://www.youtube.com/playlist?list=PLD3fYc0bAjC-FbzlruUEYIO-El4PjDVCv) — Joshua Emmanuel · 19 videos · 1.8h across 19 episodes

**Watch only this:** Watch episodes 1 (Decision Analysis 1: Maximax, Maximin, Minimax Regret), 2 (Decision Analysis 2: EMV & EVPI - Expected Value & Perfect Information), 4 (Decision Analysis 3: Decision Trees), and 5 (Decision Analysis 4 (Tree): EVSI - Expected Value of Sample Information), totaling about 20 minutes — these give a quick but solid foundation in decision theory concepts relevant to the paper.

*Why it unblocks this paper:* This concise Decision Analysis playlist provides clear, focused explanations of decision theory fundamentals such as expected value, decision trees, and payoff tables, which underpin the intuition behind loss functions and risk minimization in the paper.

*If you want all of it:* 1.8 hours across 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Elicitation Complexity of Statistical Properties," start by building a foundation in prerequisite concepts such as Bayes risk and loss functions, empirical risk minimization consistency, and statistical property elicitation. These provide the theoretical and practical background on loss functions, risk, and estimation that the paper builds upon. Then focus on the core concept of elicitation complexity theory, which is central to the paper's contributions. Finally, watch the authors' own talks or closely related research seminars to get the most precise and advanced exposition of the paper's novel results and implications.

### Bayes risk and loss functions *(prerequisite)*
Understanding Bayes risk and loss functions is critical because the paper establishes tight bounds on elicitation complexity for Bayes risks and connects these to surrogate loss design. These videos provide rigorous academic lectures on Bayesian decision theory, loss functions, and their role in statistical estimation and classification.

*How the paper uses it:* The paper's key results and theory revolve around Bayes risks and their elicitation complexity.

▶ [On the Design of Bayes Consistent Loss Functions for Classification](https://www.youtube.com/watch?v=MYSgtLWPReA) — Google TechTalks · 1:07:43 · 16y ago

### Empirical risk minimization consistency *(prerequisite)*
Empirical risk minimization (ERM) is the fundamental framework for estimating statistical properties via loss minimization. Understanding ERM and its consistency is crucial to grasp how elicitation complexity informs the design of surrogate losses and learning algorithms.

*How the paper uses it:* The paper links elicitation complexity bounds to the minimal dimension of surrogate losses for consistent empirical risk minimization.

▶ [Stanford EE104: Introduction to Machine Learning | 2020 | Lecture 6 - empirical risk minimization](https://www.youtube.com/watch?v=SwH0rs5TW_Q) — Stanford Online · 1:04:34 · 5y ago

### Elicitation complexity theory
Elicitation complexity theory formalizes the minimal dimension of an intermediate elicitable property needed to indirectly elicit a target property. This is the core theoretical framework developed and analyzed in the paper, including upper and lower bounds and applications to various properties.

*How the paper uses it:* The paper introduces and develops the general theory of elicitation complexity as its central contribution.

▶ [Machine Learning Lecture 16 "Empirical Risk Minimization" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=AkmPv2WEsHw) — Kilian Weinberger · 46:33 · 8y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talks provide the most direct and precise exposition of their work, including motivations, technical details, and implications. While no direct talk on this exact paper was found, related talks by Rafael Frongillo on related topics such as learning with strategic agents and property elicitation provide valuable insights.

*How the paper uses it:* Direct presentations by the paper's authors offer the clearest understanding of their novel contributions and context.

▶ [How (Not) to Run a Forecasting Competition: Incentives and Efficiency](https://www.youtube.com/watch?v=z0bgHFtVxZw) — Simons Institute for the Theory of Computing · 1:08:10 · Streamed 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on elicitation complexity of statistical properties, start by grasping the basics of statistical property elicitation and estimation, which form the foundation of the paper's topic. Then, learn about Bayes risk and loss functions, which are crucial for understanding the theoretical bounds and surrogate loss design discussed in the paper. Next, study empirical risk minimization consistency to connect theory to practical machine learning algorithms. Finally, focus on elicitation complexity theory itself, the core concept introduced and analyzed in the paper.

### Statistical property elicitation *(prerequisite)*
Statistical property elicitation involves understanding which statistical quantities (like mean, variance) can be directly estimated by minimizing loss functions. This concept is foundational because the paper studies which properties can be elicited and how complex that elicitation is.

*How the paper uses it:* The paper builds on the theory of which statistical properties are elicitable by loss functions to define elicitation complexity.

▶ [Statistical Estimation | Lecture 1 | Biostatistics](https://www.youtube.com/watch?v=tfGr8Z97w_U) — The Statistics Teacher · 38:40 · 6y ago

### Bayes risk and loss functions *(prerequisite)*
Bayes risk is the minimal expected loss achievable for a given prediction problem, and loss functions define how errors are penalized. Understanding these concepts is key to grasping how the paper derives bounds on elicitation complexity and designs surrogate losses.

*How the paper uses it:* The paper proves tight bounds on elicitation complexity for Bayes risks and uses loss functions to characterize elicitation.

▶ [(ML 11.3) Frequentist risk, Bayesian expected loss, and Bayes risk](https://www.youtube.com/watch?v=b1GxZdFN6cY) — mathematicalmonk · 14:05 · 15y ago

### Empirical risk minimization consistency *(prerequisite)*
Empirical risk minimization (ERM) is a core machine learning principle where models are trained by minimizing average loss on data. Consistency means that minimizing surrogate losses leads to correct estimation of the target property. This connects the paper's theoretical results to practical learning algorithms.

*How the paper uses it:* The paper links elicitation complexity to the minimal dimension of surrogate losses needed for consistent ERM.

▶ [Stanford EE104: Introduction to Machine Learning | 2020 | Lecture 6 - empirical risk minimization](https://www.youtube.com/watch?v=SwH0rs5TW_Q) — Stanford Online · 1:04:34 · 5y ago

## Already in your library

- [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — also for: Learning-assisted schedulability analysis: opportunities and limitations (Sanjoy K. Baruah)
- [Lecture 3 | Learning, Empirical Risk Minimization, and Optimization](https://www.youtube.com/watch?v=9kAQ8Em7SdM) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Empirical Risk Minimization Explained | The Engine Behind Modern AI](https://www.youtube.com/watch?v=8fsJCyBOizQ) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — also for: Credo: Declarative Control of LLM Pipelines via Beliefs and Policies (Andrew Crotty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of elicitation complexity from the paper "Elicitation Complexity of Statistical Properties." The beginner project focuses on implementing and visualizing the elicitation complexity concept for variance, a key example in the paper. The intermediate project involves reimplementing the core elicitation complexity framework and applying it to financial risk measures like expected shortfall, comparing results to baseline elicitation methods. The advanced project tackles an open future direction by extending elicitation complexity theory to linear combinations of Bayes risks, exploring practical surrogate loss design implications.

### Beginner — Visualizing Elicitation Complexity of Variance
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the elicitation complexity concept for variance, demonstrating why variance has elicitation complexity 2. You visualize how variance can be indirectly elicited via a 2-dimensional intermediate property (mean and second moment) and show the link function that recovers variance.

**Why it shows you understood the paper:** This project concretely demonstrates your grasp of the paper's key result that variance is 2-elicitable, showing you understand elicitation complexity as minimal dimension of an elicitable intermediate property and how it applies to a fundamental statistical property.

**Grounded in:** Corollary 1 states elicitation complexity of variance is 2 with respect to linear and identifiable property classes.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic data sampled from simple distributions (e.g., Gaussian) to compute mean, second moment, and variance.

**Build it:**

1. Implement functions to compute mean, second moment, and variance from samples.
2. Implement the link function that recovers variance from mean and second moment.
3. Generate synthetic samples from a Gaussian distribution.
4. Visualize the relationship between the 2-dimensional elicitable property (mean, second moment) and variance.
5. Write a README explaining elicitation complexity and how this example illustrates it.

**Ships as:** A Jupyter notebook with code and plots illustrating variance's elicitation complexity 2, plus a README explaining the concept and the example.

**Stretch goal:** Add visualization of how direct elicitation of variance (1-dimensional) fails consistency, reinforcing the need for 2 dimensions.

### Intermediate — Reimplementing Elicitation Complexity for Expected Shortfall
*Effort: 1-3 weekends*

You reimplement the paper's core elicitation complexity framework from scratch in Python and apply it to expected shortfall (a financial risk measure). You compute elicitation complexity bounds for expected shortfall with varying numbers of quantiles and compare your results to a baseline method that directly estimates quantiles. You report elicitation complexity metrics and consistency of empirical risk minimization.

**Why it shows you understood the paper:** This project shows you can implement the paper's main theoretical framework and apply it to a complex, practically relevant property, reproducing the paper's tight bounds for expected shortfall and understanding its implications for surrogate loss design.

**Grounded in:** Corollary 3 proves elicitation complexity of expected shortfall and spectral risk measures is k+1 where k is the number of quantiles involved.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib

**Data:** Synthetic financial return data simulated from known distributions (e.g., normal, t-distribution) to estimate quantiles and expected shortfall.

**Build it:**

1. Implement the elicitation complexity framework to compute minimal dimension k+1 for expected shortfall with k quantiles.
2. Simulate financial return data from standard distributions.
3. Estimate quantiles and expected shortfall using empirical risk minimization with surrogate losses.
4. Compare elicitation complexity and estimation consistency against a baseline direct quantile estimation method.
5. Visualize results and write a report summarizing findings and implications.

**Ships as:** A Python project with notebooks and scripts demonstrating elicitation complexity computations for expected shortfall, comparisons to baseline, and a report explaining results.

**Stretch goal:** Extend the implementation to spectral risk measures with arbitrary weight functions and analyze elicitation complexity.

### Advanced — Extending Elicitation Complexity to Linear Combinations of Bayes Risks
*Effort: a few weeks*

You develop a research prototype extending the paper's elicitation complexity theory to linear combinations of Bayes risks, addressing one of the paper's stated open questions. You formalize elicitation complexity bounds for these combinations, implement surrogate loss constructions, and evaluate empirical risk minimization consistency on synthetic data. You document theoretical insights and practical surrogate loss design implications.

**Why it shows you understood the paper:** This project tackles a known limitation and future direction from the paper, demonstrating deep comprehension of elicitation complexity theory and the ability to extend it to new, open problems relevant to machine learning and finance.

**Grounded in:** Open questions remain about elicitation complexity of linear combinations of Bayes risks like Range Value at Risk.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib, sympy

**Data:** Synthetic data simulating distributions relevant for financial risk measures; no public dataset directly available.

**Build it:**

1. Review the paper's theory on elicitation complexity and Bayes risks.
2. Formally define elicitation complexity for linear combinations of Bayes risks.
3. Develop and implement surrogate loss functions consistent with these combinations.
4. Simulate synthetic data to evaluate empirical risk minimization consistency.
5. Analyze results and write a detailed README documenting theoretical extensions and practical implications.

**Ships as:** A research prototype repository with code, theoretical notes, and empirical evaluation demonstrating an extension of elicitation complexity theory.

**Stretch goal:** Explore multi-observation loss functions or restrictions on link functions as further extensions.
