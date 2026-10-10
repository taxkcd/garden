---
title: "622 · CONSEQUENCES 2025 - The 4th Workshop on Causality, Counterfactuals and Sequential Decision-Making for Recommender Systems — Thorsten Joachims"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thorsten-joachims"
source_hash: "5f6e83470fcb39eec60e1ce7aee4da81684501ff4d87274534edfb5fbc4e848b"
sequence: 622
generator: "outreach-garden: managed"
---

# 622 · CONSEQUENCES 2025 - The 4th Workshop on Causality, Counterfactuals and Sequential Decision-Making for Recommender Systems

## At a glance

- **Professor:** Thorsten Joachims
- **Institution:** Cornell University
- **Paper:** [CONSEQUENCES 2025 - The 4th Workshop on Causality, Counterfactuals and Sequential Decision-Making for Recommender Systems](https://dl.acm.org/doi/pdf/10.1145/3705328.3748498)
- **Authors:** Harrie Oosterhuis, Olivier Jeunen, Yuta Saito, Yixin Wang, Flavian Vasile, Thorsten Joachims
- **Year:** 2025

## Paper overview

This paper describes the CONSEQUENCES 2025 workshop, which focuses on the application of causal inference and counterfactual reasoning to recommender systems. It highlights the shift from viewing recommendation as a prediction problem to a decision-making problem, where recommendations have consequences that can be modeled causally. The workshop brings together researchers and practitioners to discuss theoretical, methodological, and practical challenges in this area, including fairness, long-term effects, and off-policy evaluation.

### Why it matters

**Research problem:** Recommender systems are decision-making systems whose actions have consequences, some desirable and some unintended. Existing approaches often consider only short-term effects, lacking a causal framework to reason about long-term and complex consequences, including fairness and confounding factors.

**Why it matters:** Understanding and modeling the causal consequences of recommendations is crucial for building effective, fair, and reliable recommender systems that can optimize for long-term user engagement and societal impact rather than just immediate clicks or interactions.

**Key contributions:**

- Establishing a dedicated forum (CONSEQUENCES workshop series) for discussing causality and counterfactuals in recommender systems.
- Highlighting the importance of viewing recommendation as a sequential decision-making problem with long-term consequences.
- Encouraging interdisciplinary contributions from academia and industry on causal modeling, off-policy evaluation, fairness, and policy learning.
- Organizing tutorials and keynote talks to disseminate practical knowledge on bandit algorithms and causal inference.
- Providing a platform for presenting high-quality research contributions and fostering community growth.

## About the professor

**Thorsten Joachims** — Jacob Gould Schurman Professor of Computer Science and Information Science, Computer Science, Information Science, Cornell University.

Research interests: human interaction, information access, generative AI, recommendation, counterfactual and causal inference, policy learning, learning to rank, structured output prediction, learning from implicit feedback

### Research links

- [Faculty/profile page](https://bowers.cornell.edu/people/thorsten-joachims)
- [Identity evidence](http://www.cs.cornell.edu/people/tj)
- [Identity evidence](https://dblp.org/pid/j/ThorstenJoachims.html)
- [Professor website](https://www.cs.cornell.edu/people/tj/)
- [Google Scholar](https://scholar.google.com/scholar)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Causal Inference in Machine Learning
**The paper assumes:** causal inference, counterfactual reasoning, causal graphical models, and off-policy evaluation
**Already in this field?** Skip this entirely if you already have a solid understanding of causal inference methods and their application in machine learning.

This background focuses on causal inference in machine learning, essential for understanding the causal frameworks, counterfactual reasoning, and policy learning discussed in the CONSEQUENCES 2025 workshop paper. The rigorous course option offers a structured university-level introduction to foundational causal inference concepts, while the fast track provides a concise, intuition-driven explainer series to quickly grasp key ideas without deep technical detail.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [STAT 451: Causal Inference](https://www.youtube.com/playlist?list=PLtjTgbI6JvXZ-rrZ9FOLG37IWwoyR1GcF) — Leslie Myint · 14 videos · 2.4h across 14 episodes

**Watch only this:** Episodes 1-10, about 1.7 hours — covering Defining Causal Effects through Estimating Causal Effects: Inverse Probability Weighting, which provide a solid foundation in causal effects, graphs, and estimation methods necessary for understanding the paper's causal framework.

*Why it unblocks this paper:* STAT 451: Causal Inference by Leslie Myint is a focused university lecture series that systematically covers core causal inference concepts such as causal effects, causal graphs, d-separation, and sensitivity analyses, which are directly relevant to modeling causal consequences and confounding in recommender systems.

*If you want all of it:* 2.4 hours across all 14 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Causal Inference](https://www.youtube.com/playlist?list=PLLFnyzDUVf86NWSw6fwEClf42n4NQX5Wi) — AI, ML, SWE, Tech Expert · 7 videos · 3.0h across 7 episodes

**Watch only this:** Episodes 3, 4, and 6, about 1.3 hours — focusing on Causal Graph, Backdoor, Front-door Criterion (Parts 1 and 2) and Potential Outcome, which cover essential causal graph concepts and potential outcomes critical for understanding causal reasoning in the paper.

*Why it unblocks this paper:* This short-form playlist by AI, ML, SWE, Tech Expert offers clear, visual explanations of key causal inference topics such as double machine learning, causal graphs, backdoor/front-door criteria, and potential outcomes, providing an accessible yet rigorous overview that complements the deeper course.

*If you want all of it:* 3.0 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CONSEQUENCES 2025 workshop paper, start by building foundational knowledge on sequential decision-making and off-policy evaluation, which are key frameworks for modeling recommendation as a series of decisions and evaluating policies from logged data. Then, explore causal inference and counterfactual reasoning to grasp how recommendations can be modeled with causal consequences and alternative outcomes. Finally, focus on the paper's core topic by watching the authors' own talk about the CONSEQUENCES 2025 workshop for the most direct and specific insights.

### Sequential decision-making *(prerequisite)*
Sequential decision-making provides the theoretical framework for modeling recommendation systems as a series of decisions with long-term effects. Understanding this concept is essential to appreciate how recommendations influence user behavior over time and how policies can be optimized accordingly.

*How the paper uses it:* The paper emphasizes viewing recommendation as a sequential decision-making problem with long-term consequences.

▶ [Lecture 20 -  Sequential decision making (part 1): The framework](https://www.youtube.com/watch?v=PklKJKh-IWY) — CMU 10-708 PGM · 1:11:03 · 7y ago

### Off-policy evaluation in bandits and RL *(prerequisite)*
Off-policy evaluation is crucial for assessing recommendation policies using logged data without deploying them live, enabling safe and efficient policy improvement. This concept underpins many practical approaches discussed in the workshop for evaluating and learning from historical recommendation data.

*How the paper uses it:* The workshop encourages contributions on off-policy evaluation methods for recommender systems.

▶ [Debiased Off-Policy Evaluation for Recommender Systems](https://www.youtube.com/watch?v=YOPO2u81mvg) — ACM RecSys · 13:38 · 4y ago

### Causal inference in recommender systems
Causal inference is central to understanding how recommendations can be modeled as decisions with causal consequences, moving beyond correlation to reason about the effects of recommendations. This knowledge is foundational to the workshop's focus on applying causal frameworks to recommender systems.

*How the paper uses it:* The paper highlights the need for causal frameworks to reason about the consequences of recommendations.

▶ [Causality in Recommendation - Flavian Vasile](https://www.youtube.com/watch?v=mL7s8wucNZY) — Criteo Tech · 26:42 · 8y ago

### Counterfactual reasoning *(prerequisite)*
Counterfactual reasoning allows for analyzing alternative outcomes of recommendation decisions and is fundamental for policy evaluation and fairness considerations. It supports understanding what would have happened under different recommendation policies, a key theme in the workshop.

*How the paper uses it:* Counterfactual reasoning is a foundation for reasoning about alternative recommendation outcomes and policy evaluation discussed in the workshop.

▶ [Machine Learning Work Shop - Counterfactual Measurements and Learning Systems](https://www.youtube.com/watch?v=isGAY9ELqyo) — Microsoft Research · 20:48 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand causal and counterfactual reasoning in recommender systems, starting with the basics of counterfactual reasoning and sequential decision-making. It then covers off-policy evaluation methods essential for evaluating recommendation policies, followed by fairness considerations in recommendations. Finally, it focuses on causal inference specifically applied to recommender systems, which is the core concept of the paper.

### Counterfactual reasoning *(prerequisite)*
Counterfactual reasoning is about imagining 'what if' scenarios—what would have happened if a different action had been taken. This helps in understanding alternative outcomes and is foundational for evaluating and improving recommendation policies without deploying them.

*How the paper uses it:* The paper emphasizes counterfactual reasoning as a foundation for modeling and evaluating the consequences of recommendations.

▶ [Machine Learning Work Shop - Counterfactual Measurements and Learning Systems](https://www.youtube.com/watch?v=isGAY9ELqyo) — Microsoft Research · 20:48 · 10y ago

### Sequential decision-making *(prerequisite)*
Sequential decision-making models problems where decisions are made in a sequence, each affecting future outcomes. This framework is key to understanding recommendations as a series of decisions with long-term effects rather than isolated predictions.

*How the paper uses it:* The paper frames recommendation as a sequential decision-making problem with long-term consequences.

▶ [Sequential Decision Making in Recommendations | Jaya Kawale](https://www.youtube.com/watch?v=qkTnczG5yyA) — Towards Data Science · 31:18 · 6y ago

### Off-policy evaluation in bandits and RL *(prerequisite)*
Off-policy evaluation methods allow us to estimate how well a new recommendation policy would perform using data collected from a different policy, without needing to deploy the new policy live. This is crucial for safe and efficient policy improvement in recommender systems.

*How the paper uses it:* The workshop highlights off-policy evaluation as a practical challenge in applying causal inference to recommender systems.

▶ [Debiased Off-Policy Evaluation for Recommender Systems](https://www.youtube.com/watch?v=YOPO2u81mvg) — ACM RecSys · 13:38 · 4y ago

### Fairness in machine learning recommendations *(prerequisite)*
Fairness in recommendation systems addresses ethical concerns and societal impacts, ensuring that recommendations do not unfairly disadvantage certain users or groups. Understanding fairness is important for building responsible and trustworthy systems.

*How the paper uses it:* Fairness is a key topic discussed in the workshop as part of causal and counterfactual reasoning in recommendations.

▶ [Data privacy and fairness in recommender systems by Martin Tegner](https://www.youtube.com/watch?v=9U3965uAezM) — GAIA · 24:03 · 5y ago

### Causal inference in recommender systems
Causal inference methods help us understand the true effect of recommendations by modeling the cause-and-effect relationships, going beyond correlation. This enables reasoning about long-term and complex consequences of recommendation decisions.

*How the paper uses it:* The core focus of the paper is on applying causal inference and counterfactual reasoning to recommender systems to model their consequences.

▶ [Causality in Recommendation - Flavian Vasile](https://www.youtube.com/watch?v=mL7s8wucNZY) — Criteo Tech · 26:42 · 8y ago

## Already in your library

- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the CONSEQUENCES 2025 workshop themes on causal inference and sequential decision-making in recommender systems. Starting with a small-scale simulation of off-policy evaluation, you then implement a core causal bandit algorithm on public data, and finally extend the approach to address confounding and fairness challenges at scale. Each project builds on your existing software engineering and applied ML skills while introducing causal reasoning and policy evaluation concepts central to the paper.

### Beginner — Simulate Off-Policy Evaluation for a Simple Recommender
*Effort: a weekend, ~8 hours*

You build a small Python simulation of a recommender system modeled as a contextual bandit with logged data. You implement a simple off-policy evaluation method (e.g., inverse propensity scoring) to estimate the value of a new recommendation policy from logged data generated by a behavior policy.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core causal inference concept of off-policy evaluation, a key theme in the workshop, by reproducing a fundamental mechanism to estimate counterfactual outcomes in recommendation.

**Grounded in:** The workshop highlights off-policy evaluation in bandits and reinforcement learning as a core methodological challenge and practical tool for causal reasoning in recommender systems.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Simulated contextual bandit data generated within the project to mimic logged recommendation interactions.

**Build it:**

1. Implement a simple contextual bandit environment with a small discrete action space and context features.
2. Simulate logged data by running a fixed behavior policy to generate context-action-reward triples.
3. Implement inverse propensity scoring (IPS) off-policy evaluation to estimate the value of a new target policy from logged data.
4. Visualize and compare estimated policy values versus true values from simulation.
5. Write a README explaining the causal inference concepts and off-policy evaluation mechanism.

**Ships as:** A GitHub repo with a Jupyter notebook simulating off-policy evaluation, visualizations of policy value estimates, and a clear explanation of the causal inference principles involved.

**Stretch goal:** Add doubly robust off-policy evaluation to improve estimation accuracy and compare results.

### Intermediate — Reimplement Causal Bandit Policy Learning on MovieLens Data
*Effort: 2 weekends, ~20 hours*

You reimplement a core causal bandit algorithm described in the workshop context, applying it to the MovieLens 100K dataset as a proxy for recommendation interactions. You implement off-policy evaluation to compare the learned policy against a simple baseline (e.g., popularity-based recommendation) and report metrics such as estimated long-term user engagement or click-through rate.

**Why it shows you understood the paper:** This project shows you can translate the workshop's core method of sequential decision-making with causal inference into practice on real data, including off-policy evaluation and policy learning, demonstrating a deeper grasp of the paper's main approach.

**Grounded in:** The workshop promotes applying causal inference and sequential decision-making frameworks such as contextual bandits to recommender systems, including off-policy evaluation and policy learning.

**Tech stack:** Python 3.11, Pandas, NumPy, Scikit-learn, Jupyter Notebook

**Data:** MovieLens 100K dataset (publicly available) used as a substitute for recommendation interaction data to simulate logged bandit feedback.

**Build it:**

1. Preprocess MovieLens 100K data to extract user-item interactions and contextual features.
2. Implement a simple contextual bandit algorithm (e.g., LinUCB or epsilon-greedy) to learn a recommendation policy.
3. Simulate logged data from a behavior policy and apply off-policy evaluation (IPS or doubly robust) to estimate policy performance.
4. Compare the learned policy's estimated performance against a baseline popularity-based policy.
5. Document the causal inference concepts, evaluation metrics, and results in a detailed README.

**Ships as:** A GitHub repo containing code to preprocess MovieLens data, implement causal bandit policy learning, off-policy evaluation, and a report comparing policies with explanations linking back to causal inference principles.

**Stretch goal:** Incorporate a simple fairness constraint into the policy learning to explore fairness-aware recommendation as discussed in the workshop.

### Advanced — Address Confounding and Fairness in Large-Scale Causal Recommendation
*Effort: 3+ weeks*

You develop an extended causal recommendation system that explicitly models confounding variables and incorporates fairness constraints in sequential decision-making. You design a synthetic or semi-synthetic large-scale dataset simulating confounding and fairness issues, implement advanced causal inference techniques (e.g., causal graphs, instrumental variables), and evaluate policy learning with off-policy evaluation metrics. This project tackles the workshop's stated limitations and future directions.

**Why it shows you understood the paper:** This project demonstrates your ability to engage with open research challenges highlighted by the workshop, including causal identifiability, confounding, and fairness in recommender systems, moving beyond core methods to novel extensions.

**Grounded in:** The workshop notes challenges in causal identifiability and confounding in large-scale recommender systems and calls for research addressing these limitations and fairness concerns.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, NetworkX (for causal graphs), Pandas, NumPy, Jupyter Notebook

**Data:** Synthetic or semi-synthetic dataset generated to simulate confounding factors and fairness-sensitive attributes in recommendation interactions.

**Build it:**

1. Design a data generation process that simulates user-item interactions with confounding variables and fairness-sensitive features.
2. Implement causal graph modeling to represent confounding and causal pathways.
3. Develop a policy learning algorithm that accounts for confounding using techniques such as instrumental variables or front-door adjustment.
4. Incorporate fairness constraints or regularizers into the policy learning objective.
5. Evaluate the learned policy using off-policy evaluation metrics and analyze fairness and causal identifiability outcomes.
6. Write comprehensive documentation linking the implementation to the workshop's challenges and future directions.

**Ships as:** A GitHub repo with code for synthetic data generation, causal modeling, confounding-aware policy learning with fairness constraints, evaluation scripts, and a detailed report discussing results and connections to the workshop's open problems.

**Stretch goal:** Apply the developed methods to a real-world dataset with known confounding and fairness issues if available, or collaborate with industry partners to test practical applicability.
