---
title: "289 · Aligning Language Models with Selective Prediction — Aryan Deshwal"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aryan-deshwal"
source_hash: "1d39daa25738a1f081296f92d6be642b9f7a2f85bc00132f7aa7c5c967c44cdf"
sequence: 289
generator: "outreach-garden: managed"
---

# 289 · Aligning Language Models with Selective Prediction

## At a glance

- **Professor:** Aryan Deshwal
- **Institution:** University of Minnesota
- **Paper:** [Aligning Language Models with Selective Prediction](https://arxiv.org/abs/2607.03528)
- **Authors:** Gaoxiang Luo, Yifan Wu, Sinian Zhang, Aryan Deshwal, Ju Sun
- **Year:** 2026

## Paper overview

This paper presents a new method to improve the reliability of large language models (LLMs) by enabling them to selectively make predictions only when confident, thereby reducing errors in high-stakes applications. The method, called Reinforcement Learning for Selection Reward (RLSR), directly optimizes a metric that balances prediction accuracy and coverage, outperforming existing approaches.

### Why it matters

**Research problem:** Large language models often make confident but incorrect predictions, which is problematic in high-stakes domains like healthcare and finance. Existing alignment methods focus on accuracy or calibration but do not directly optimize for selective prediction, where the model abstains from uncertain predictions to reduce errors.

**Why it matters:** In critical applications, mistakes by AI systems can have severe consequences. Selective prediction allows models to defer uncertain cases to humans, improving safety and trustworthiness. Current methods do not adequately address this selective prediction goal, limiting deployment in sensitive areas.

**Key contributions:**

- First proposal to align pretrained LLMs directly with selective prediction to enhance reliability.
- Development of RLSR framework using a novel lifted AURC objective and batch training strategy to optimize selective prediction performance.
- Empirical demonstration that RLSR outperforms strong baselines (RLVR and RLCR) on multiple in-domain and out-of-domain tasks.
- Demonstration of RLSR’s superior performance in error-controlled deployment scenarios relevant to real-world applications.

## About the professor

**Aryan Deshwal** — University of Minnesota.

Research interests: Nanoporous Materials Discovery

### Research links

- [Faculty/profile page](https://cse.umn.edu/cs/aryan-deshwal)
- [Identity evidence](https://aryandeshwal.github.io)
- [Identity evidence](https://dblp.org/pid/246/3012.html)
- [Google Scholar](https://scholar.google.com/scholar)
- [Semantic Scholar](https://www.semanticscholar.org/search)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** reinforcement learning fundamentals, policy optimization, reward design
**Already in this field?** Skip this entirely if you already understand reinforcement learning algorithms and their application to sequence prediction tasks.

To understand the core method RLSR in the paper, which is a reinforcement learning framework optimizing selective prediction, a solid grasp of reinforcement learning fundamentals is essential. The rigorous course option offers a deep, structured university-level introduction to reinforcement learning algorithms, while the fast track provides a concise, intuition-driven visual explanation series that covers key concepts quickly. Choose the course for a thorough foundation and the fast track for a quick, clear conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-4 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods), about 4.3 hours — these cover foundational RL concepts and policy optimization crucial for grasping RLSR.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a recent, comprehensive university course focused on deep reinforcement learning algorithms, including policy optimization and reward design, directly relevant to understanding RLSR's training approach for selective prediction in LLMs.

*If you want all of it:* All 19 episodes, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning Explained – Animated Examples](https://www.youtube.com/playlist?list=PLgcKMlJueAM5OK104-hP_wBpOjZCHGfTf) — Reinforcement Learning Explained–Animated Learning · 9 videos

**Watch only this:** First 5 episodes (A Car Learns to Steer Around a Bull, AI Learns to Find Treasure, How AI Learns from Delayed Rewards, Two-Armed Bandit, AI Learns the Best Cannon Angle), about 30-40 minutes — these provide a solid intuitive grasp of RL fundamentals.

*Why it unblocks this paper:* The 'Reinforcement Learning Explained – Animated Examples' playlist uses clear animations and intuitive examples to quickly convey core RL concepts such as learning from delayed rewards and policy improvement, making it an excellent fast introduction to the principles underlying RLSR.

*If you want all of it:* All 9 episodes, approximately 1 hour

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Aligning Language Models with Selective Prediction," start by grounding yourself in the fundamentals of reinforcement learning, as the proposed RLSR method builds on these principles. Next, explore confidence calibration to appreciate how it differs from selective prediction, which is the paper's core focus. Then, study the risk-coverage curve and AURC metric, the key evaluation metric optimized by RLSR. Finally, delve into the central concept of selective prediction itself, culminating with the authors' own talk to gain direct insights into their novel approach and empirical results.

### Reinforcement learning fundamentals *(prerequisite)*
Reinforcement learning (RL) provides the foundational framework for the RLSR method, which optimizes selective prediction performance via reward signals. Understanding RL concepts such as policy optimization, reward design, and training strategies is essential to grasp how RLSR aligns LLMs with selective prediction objectives.

*How the paper uses it:* RLSR is a reinforcement learning framework that directly optimizes selective prediction metrics.

▶ [The FASTEST introduction to Reinforcement Learning on the internet](https://www.youtube.com/watch?v=VnpRp7ZglfA) — Gonkee · 1 year ago

### Confidence calibration in neural networks *(prerequisite)*
Confidence calibration involves aligning a model's predicted confidence with the true likelihood of correctness. This section clarifies why calibration and selective prediction are fundamentally different objectives, a key insight highlighted in the paper's comparisons between RLSR and calibration-focused baselines.

*How the paper uses it:* The paper contrasts calibration objectives with selective prediction, showing RLSR's superiority in the latter.

▶ [Model calibration](https://www.youtube.com/watch?v=gWmdnVD06r4) — ФКН ВШЭ · 1:28:13 · 6 years ago

### Risk-coverage curve and AURC metric *(prerequisite)*
The risk-coverage curve and its area under the curve (AURC) metric quantify the trade-off between prediction risk and coverage in selective prediction. Understanding this metric is crucial since RLSR directly optimizes a lifted AURC objective to improve selective prediction performance.

*How the paper uses it:* RLSR optimizes the area under the risk-coverage curve (AURC) to balance accuracy and coverage.

▶ [ROC and AUC, Clearly Explained!](https://www.youtube.com/watch?v=4jRBRDbJemM) — StatQuest with Josh Starmer · 16:17 · 7 years ago

### Selective prediction in machine learning
Selective prediction allows models to abstain from uncertain predictions to reduce errors, which is the central problem addressed by the paper. This section provides theoretical foundations and benchmarks relevant to selective prediction, setting the stage for understanding the RLSR approach.

*How the paper uses it:* The paper proposes a novel method to align LLMs with selective prediction for safer deployment.

▶ [A Theory of Selective Prediction](https://www.youtube.com/watch?v=Y27lIRJ9TAg) — COLT · 6 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk offers direct insights into their motivation, methodology, and empirical findings on RLSR. This primary source is invaluable for understanding the nuances of their reinforcement learning framework and its advantages over prior methods.

*How the paper uses it:* Direct presentation by the authors on aligning LLMs with selective prediction using RLSR.

▶ [Small Language Model Alignment - Finetune SLMs to ALWAYS pick the best answer (Unsloth DPO)](https://www.youtube.com/watch?v=qQwg2nFtZ1Y) — Neural Breakdown with AVB · 2 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper 'Aligning Language Models with Selective Prediction.' We start with reinforcement learning basics, then cover confidence calibration to distinguish it from selective prediction, followed by the risk-coverage curve and AURC metric which the paper optimizes. Finally, we focus on selective prediction itself, the core concept of the paper, to build intuition on how models abstain when uncertain.

### Reinforcement learning fundamentals *(prerequisite)*
Reinforcement learning (RL) is a type of machine learning where an agent learns to make decisions by receiving rewards or penalties from its environment. Understanding RL basics helps grasp how the paper’s RLSR method optimizes model behavior through reward signals.

*How the paper uses it:* The RLSR framework uses reinforcement learning to directly optimize selective prediction performance by rewarding correct confident predictions and penalizing errors.

▶ [The FASTEST introduction to Reinforcement Learning on the internet](https://www.youtube.com/watch?v=VnpRp7ZglfA) — Gonkee · 1 year ago

### Confidence calibration in neural networks *(prerequisite)*
Confidence calibration means aligning a model’s predicted confidence scores with the true likelihood of correctness. This concept is important to understand because calibration differs fundamentally from selective prediction, which focuses on when to abstain rather than just confidence accuracy.

*How the paper uses it:* The paper highlights that calibration and selective prediction are different objectives, with RLSR focusing on selective prediction rather than calibration.

▶ [Calibration in Machine Learning Explained in 60 Seconds | Aligning Confidence with Reality](https://www.youtube.com/watch?v=sCGN8TVZzhY) — 1 Minute Glossary - AI ML · 6 months ago

### Risk-coverage curve and AURC metric *(prerequisite)*
The risk-coverage curve plots the error rate (risk) against the fraction of predictions made (coverage). The area under this curve (AURC) summarizes the trade-off between making many predictions and maintaining accuracy, which is crucial for selective prediction.

*How the paper uses it:* RLSR directly optimizes the AURC metric to balance prediction accuracy and coverage, improving selective prediction performance.

▶ [ROC and AUC, Clearly Explained!](https://www.youtube.com/watch?v=4jRBRDbJemM) — StatQuest with Josh Starmer · 16:17 · 7 years ago

### Selective prediction in machine learning
Selective prediction allows a model to abstain from making predictions when uncertain, deferring those cases to humans or other systems. This improves reliability in high-stakes applications by reducing errors on uncertain inputs.

*How the paper uses it:* The core contribution of the paper is aligning large language models with selective prediction to improve reliability by abstaining on uncertain cases.

▶ [A Theory of Selective Prediction](https://www.youtube.com/watch?v=Y27lIRJ9TAg) — COLT · 6 years ago

## Already in your library

- [An introduction to Reinforcement Learning](https://www.youtube.com/watch?v=JgvyzIkgxF0) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the RLSR method for aligning large language models with selective prediction. Starting with a beginner-level reproduction of the risk-coverage curve metric, you then implement the core RLSR approach on a public dataset at intermediate level, and finally extend the method to optimize risk-constrained coverage objectives as an advanced project. Each project builds on your existing software engineering and applied ML skills while progressively introducing reinforcement learning and selective prediction concepts from the paper.

### Beginner — Selective Prediction Metric Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a classification model's confidence scores and predictions, then computes and plots the risk-coverage curve and area under the risk-coverage curve (AURC) metric. This reproduces the paper's key evaluation metric to understand how selective prediction performance is measured.

**Why it shows you understood the paper:** By implementing and visualizing the risk-coverage curve and AURC, you demonstrate comprehension of the fundamental metric the paper optimizes, showing you grasp how selective prediction balances accuracy and coverage.

**Grounded in:** The project demonstrates understanding of the paper's use of the risk-coverage curve and AURC metric as the core evaluation for selective prediction performance.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, scikit-learn

**Data:** Simulated classification predictions and confidence scores generated within the notebook; no external dataset required.

**Build it:**

1. Simulate a binary classification dataset with predicted labels and confidence scores.
2. Implement functions to compute coverage, risk (error rate), and plot the risk-coverage curve.
3. Calculate the area under the risk-coverage curve (AURC) as a summary metric.
4. Visualize the curve with matplotlib, highlighting trade-offs between coverage and risk.
5. Write a README explaining the selective prediction metric and its significance.

**Ships as:** A Jupyter notebook and README that clearly show how to compute and interpret the risk-coverage curve and AURC metric for selective prediction.

**Stretch goal:** Add a comparison of risk-coverage curves for different simulated confidence calibration scenarios.

### Intermediate — RLSR Method Reimplementation on Public Text Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the core RLSR reinforcement learning framework from the paper to train a pretrained language model to perform selective prediction on a public text classification dataset (e.g., AG News or SST-2). You compare RLSR against a simple baseline that ranks predictions by softmax confidence, reporting AURC and accuracy-at-coverage metrics.

**Why it shows you understood the paper:** This project shows you can implement the paper’s main contribution—directly optimizing selective prediction performance via reinforcement learning—and evaluate it with the same metrics, demonstrating practical grasp of the method and its benefits.

**Grounded in:** This project implements the core RLSR framework and reproduces the paper’s key results comparing RLSR to baselines on selective prediction metrics.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), Jupyter Notebook, numpy, matplotlib

**Data:** A public text classification dataset such as AG News or SST-2 from the Hugging Face datasets library, used as a proxy for the paper’s in-domain evaluation tasks.

**Build it:**

1. Load a pretrained transformer model and fine-tune it on the chosen text classification dataset.
2. Implement a confidence scorer based on the model’s output probabilities.
3. Implement the RLSR reinforcement learning objective using the lifted AURC formulation described in the paper.
4. Train the model with RLSR to optimize selective prediction performance.
5. Evaluate and plot risk-coverage curves and compute AURC, comparing against a baseline that uses softmax confidence ranking.
6. Document the implementation details, results, and insights in a README.

**Ships as:** A code repository with training scripts, evaluation notebooks, and a README showing RLSR’s selective prediction improvements over baseline on a public dataset.

**Stretch goal:** Add out-of-domain evaluation by testing the trained model on a related but different dataset to assess robustness.

### Advanced — Risk-Constrained Coverage Maximization Extension of RLSR
*Effort: 3+ weeks*

You extend the RLSR framework to directly optimize a risk-constrained coverage maximization objective, addressing a limitation noted in the paper. This involves modifying the reinforcement learning reward to enforce an error rate constraint while maximizing coverage. You apply this to a text classification task and compare performance to the original RLSR method.

**Why it shows you understood the paper:** By tackling a stated limitation and future direction of the paper, you demonstrate deep understanding of the RLSR method and selective prediction objectives, and contribute a meaningful extension that could inspire further research.

**Grounded in:** This project addresses the paper’s limitation that RLSR optimizes holistic AURC rather than risk-constrained coverage maximization, a practical deployment objective.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), Jupyter Notebook, numpy, matplotlib

**Data:** A public text classification dataset such as SST-2 or AG News, used to evaluate selective prediction under risk constraints.

**Build it:**

1. Review the RLSR method and its lifted AURC reward formulation.
2. Design a new reinforcement learning reward that incorporates a risk (error rate) constraint while maximizing coverage.
3. Modify the training loop to optimize this new risk-constrained objective.
4. Train and evaluate the extended model on the chosen dataset, measuring coverage at fixed risk levels.
5. Compare results against the original RLSR implementation and baseline confidence ranking.
6. Write detailed documentation explaining the new objective, implementation challenges, and experimental results.

**Ships as:** A repository with code and documentation demonstrating a novel risk-constrained extension of RLSR and its empirical evaluation.

**Stretch goal:** Explore integration of alternative confidence scorers or uncertainty estimators to further improve selective prediction under risk constraints.
