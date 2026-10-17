---
title: "673 · Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment — Jenna Wiens"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jenna-wiens"
source_hash: "7b357c4629f1ebe80d9bd5148553cbe9283555af617c9c9f75da8b3e3dd9d8ef"
sequence: 673
generator: "outreach-garden: managed"
---

# 673 · Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment

## At a glance

- **Professor:** Jenna Wiens
- **Institution:** University of Michigan
- **Paper:** [Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment](https://www.nature.com/articles/s41746-026-02625-2.pdf)
- **Authors:** Shengpu Tang, Jiayu Yao, Jenna Wiens, Sonali Parbhoo
- **Year:** 2026

## Paper overview

This paper investigates a common but overlooked issue in applying reinforcement learning (RL) to sepsis treatment using electronic health records (EHR). It shows that the common practice of aligning patient states and treatment actions at the same time step causes temporal misalignment that violates causal assumptions, leading to incorrect treatment recommendations. The authors propose a simple fix by shifting the action index backward by one time step, which respects the true temporal order of clinical decisions and observations. They demonstrate that this fix improves the clinical validity of RL policies and highlight that many prior studies have used the flawed alignment, risking harmful recommendations.

### Why it matters

**Research problem:** Reinforcement learning models for sequential clinical decision-making, such as sepsis treatment, often preprocess irregularly sampled EHR data into discrete time windows. The common practice aligns patient states and actions contemporaneously at the same time step, which violates the causal temporal ordering where actions precede subsequent states. This temporal misalignment leads to RL policies that learn incorrect causal relationships and make inappropriate treatment recommendations.

**Why it matters:** Incorrect treatment recommendations in high-stakes clinical settings like sepsis management can cause patient harm. The widespread use of flawed temporal alignment in over 80% of sepsis RL literature risks deploying policies that overtreat healthier patients and undertreat sicker ones. Moreover, standard evaluation metrics mask these errors, making flawed policies appear valid and increasing the risk of clinical harm upon deployment.

**Key contributions:**

- Identification and formal demonstration of temporal misalignment violating causal assumptions in RL for sepsis treatment.
- Proposal of a simple 'shifted' alignment fix that respects temporal ordering between states and actions.
- Empirical demonstration that the original alignment leads to clinically implausible treatment recommendations, such as overtreatment of healthier patients and undertreatment of sicker patients.
- Comprehensive literature review showing over 80% of prior sepsis RL studies use the flawed original alignment.
- Highlighting that standard evaluation metrics fail to detect the misalignment-induced errors, masking risks of harmful policies.

## About the professor

**Jenna Wiens** — Professor, Computer Science and Engineering, University of Michigan.

Research interests: machine learning (ML), artificial intelligence (AI), and healthcare

### Research links

- [Faculty/profile page](http://www-personal.umich.edu/~wiensj)
- [Lab website](https://wiens-group.engin.umich.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** foundations of reinforcement learning, Markov decision processes, policy evaluation, and causal assumptions in sequential decision-making
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals, including MDPs and policy learning.

To understand the temporal misalignment issue in reinforcement learning (RL) for sepsis treatment, a solid grasp of RL fundamentals—states, actions, policies, temporal causality, and policy evaluation—is essential. The rigorous course option offers a deep, structured university-level treatment of RL concepts, while the fast track provides a concise, intuition-driven introduction suitable for quickly building foundational understanding before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-7 (Class Intro through Offline RL), about 7.5 hours — these cover RL fundamentals, policy gradients, actor-critic methods, Q-learning, and offline RL, which are crucial to grasp the paper's core problem and proposed fix.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, authoritative university course that covers core RL concepts including policy gradients, off-policy learning, and offline RL, all highly relevant to understanding the causal and temporal issues in RL policy learning addressed by the paper.

*If you want all of it:* Approximately 20.6 hours across all 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Reinforcement Learning - Balaraman Ravindran | IIT Madras - NPTEL](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ0Hkv_1LHlJtC_wqwVu6RQX) — Rahul Madhavan · 60 videos · 28.7h across 60 episodes

**Watch only this:** Episodes 1-18 (Introduction to RL through Bellman Optimality Equation), about 8.5 hours — these episodes cover the essential RL framework, MDP modeling, value functions, and policy evaluation needed to understand temporal alignment and policy learning.

*Why it unblocks this paper:* Introduction to Reinforcement Learning by Balaraman Ravindran (IIT Madras - NPTEL) offers a clear, concise series of short episodes that cover RL basics, MDPs, value functions, policy search, and policy gradients, providing a solid conceptual foundation in under 8 hours.

*If you want all of it:* Approximately 28.7 hours across all 60 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on temporal misalignment in reinforcement learning for sepsis treatment, start with foundational knowledge on causal inference in sequential decision making to grasp why temporal ordering matters. Next, study reinforcement learning applications with electronic health records and off-policy evaluation to appreciate the clinical data challenges and evaluation pitfalls. Finally, focus on the core concept of temporal alignment in reinforcement learning, culminating with the authors' own talk or the closest available advanced lecture to directly connect with their methodology and findings.

### Causal inference in sequential decision making *(prerequisite)*
This section provides foundational understanding of causal inference principles critical for recognizing how temporal misalignment violates causal assumptions in reinforcement learning. The selected talk from Microsoft Research offers a rigorous, research-level treatment of causal inference in decision-making contexts, which is essential for appreciating the paper's core argument about causality.

*How the paper uses it:* The paper identifies temporal misalignment as a violation of causal assumptions in RL for sepsis treatment.

▶ [Foundations of causal inference and its impacts on machine learning webinar](https://www.youtube.com/watch?v=LALfQStONEc) — Microsoft Research · 1:16:58 · 5y ago

### Reinforcement learning with electronic health records *(prerequisite)*
Understanding the application of reinforcement learning to clinical data, especially EHR, is crucial to contextualize the challenges of temporal structure and irregular sampling in healthcare. The Stanford MedAI talk by Edward Choi provides an advanced, research-focused perspective on learning from EHR data, which aligns well with the paper's clinical RL setting.

*How the paper uses it:* The paper applies RL to sepsis treatment using EHR data and discusses challenges in temporal preprocessing.

▶ [MedAI Session 10: Learning the Structure of EHR with Graph Convolutional Transformer | Edward Choi](https://www.youtube.com/watch?v=IZXcuWFIBcY) — Stanford MedAI · 1:29:35 · 5y ago

### Off-policy evaluation in reinforcement learning *(prerequisite)*
Off-policy evaluation is key to understanding how standard metrics can mask errors caused by temporal misalignment. The talk by Shangtong Zhang on off-policy evaluation is a focused, research-level presentation that explains the evaluation methods relevant to the paper's analysis of policy performance.

*How the paper uses it:* The paper shows that off-policy evaluation metrics can mask misalignment errors in RL policies for sepsis.

▶ [Shangtong Zhang: Off-Policy Evaluation](https://www.youtube.com/watch?v=OYCj66IxJ14) — ODS AI Global · 28:16 · 5y ago

### Temporal alignment in reinforcement learning
This core concept addresses the correct temporal ordering of states and actions in RL, which is central to the paper's contribution. The Stanford CS224R lecture on RL for LLMs, while not clinical, is a rigorous university lecture that discusses temporal aspects of RL policies and can provide advanced insight into temporal alignment issues in sequential decision-making models.

*How the paper uses it:* The paper proposes a shifted alignment fix to restore correct temporal ordering in RL for sepsis treatment.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 9: RL for LLMs](https://www.youtube.com/watch?v=XKLGuwvSKvI) — Stanford Online · 1:02:51 · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's focus on temporal misalignment in reinforcement learning (RL) for sepsis treatment. We start with the basics of reinforcement learning to build intuition about states, actions, and policy learning. Next, we cover causal inference in sequential decision-making to grasp why temporal order matters. Then, we explore how RL is applied to electronic health records (EHR) data, highlighting challenges with temporal structure. Finally, we focus on temporal alignment in RL and off-policy evaluation, which are central to the paper's contributions.

### Reinforcement learning basics *(prerequisite)*
Learn the core ideas of reinforcement learning: how an agent interacts with an environment by observing states, taking actions, and receiving rewards to learn an optimal policy. This foundation helps understand how RL models sequential decision-making, which is crucial for clinical applications.

*How the paper uses it:* The paper builds on RL concepts to model sepsis treatment as a sequential decision-making problem.

▶ [Introduction to Reinforcement Learning | Scope of Reinforcement Learning by Mahesh Huddar](https://www.youtube.com/watch?v=PIfj8jJuO1s) — Mahesh Huddar · 8:56 · 3y ago

### Causal inference in sequential decision making *(prerequisite)*
Understand why cause-and-effect relationships matter when making decisions over time. Causal inference helps ensure that actions are based on past information and not future states, which is essential to avoid misleading conclusions in RL.

*How the paper uses it:* The paper identifies temporal misalignment as a violation of causal assumptions in RL for sepsis treatment.

▶ [Causal Inference - A Painless Introduction (#SoME5)](https://www.youtube.com/watch?v=3sp08Zmry6g) — Sam Levey · 36:16 · 2mo ago

### Reinforcement learning with electronic health records *(prerequisite)*
Explore how RL is applied to real-world clinical data stored in EHRs, which are irregular and complex. This section highlights challenges like discretizing time and aligning patient states with treatment actions, setting the stage for understanding temporal misalignment.

*How the paper uses it:* The paper focuses on RL using EHR data for sepsis treatment and the pitfalls of common preprocessing practices.

▶ [Dead-end Discovery: How offline reinforcement learning could assist healthcare decision-makers](https://www.youtube.com/watch?v=VedR00nUxSE) — Microsoft Research · 8:07 · 4y ago

### Off-policy evaluation in reinforcement learning
Understand how RL policies are evaluated using data collected under different policies (off-policy). This is important because standard evaluation metrics can mask errors caused by temporal misalignment, leading to overconfident but flawed policies.

*How the paper uses it:* The paper shows that off-policy evaluation metrics can hide the harmful effects of temporal misalignment in sepsis RL policies.

▶ [Reinforcement Learning: on-policy vs off-policy algorithms](https://www.youtube.com/watch?v=YUKUXoUg3Nc) — CodeEmporium · 14:47 · 2y ago

## Already in your library

- [Foundation of Q-learning | Temporal Difference Learning explained!](https://www.youtube.com/watch?v=uJX_72MnKg8) — also for: Task-Specific Sharpness-Aware O-RAN Resource Management using Multi-Agent Reinforcement Learning (Fatemeh Afghah)
- [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro](https://www.youtube.com/watch?v=EvHRQhMX7_w) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges](https://www.youtube.com/watch?v=hhiLw5Q_UFg) — also for: Certificate-Guided Evaluation of Reinforcement Learning Generalization (Suguman Bansal)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [W5_L5: Off-policy learning](https://www.youtube.com/watch?v=RcOyMkcOP0E) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the temporal misalignment issue in reinforcement learning (RL) for sepsis treatment as presented in the paper. Starting with a beginner-level reproduction of a key clinical plausibility analysis, you then implement the core shifted alignment method and compare policies at the intermediate level. Finally, the advanced project extends the paper by exploring temporal granularity effects on alignment bias, addressing a stated future direction.

### Beginner — Reproduce Clinical Plausibility Analysis of Temporal Alignment
*Effort: a weekend, ~8 hours*

You build a small analysis pipeline that reproduces the paper's comparison of patient severity scores (GCS and SOFA) in states where the original and shifted RL policies disagree. Using a simplified dataset or simulated data mimicking patient states and policy recommendations, you visualize and quantify how the original policy overtreats healthier patients and undertreats sicker ones.

**Why it shows you understood the paper:** This project shows you grasp the core clinical impact of temporal misalignment by replicating a key empirical result that highlights flawed treatment recommendations due to alignment errors.

**Grounded in:** Empirical demonstration that the original alignment leads to clinically implausible treatment recommendations, such as overtreatment of healthier patients and undertreatment of sicker patients.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib, seaborn

**Data:** Simulated or publicly available sepsis patient state data with GCS and SOFA scores and policy action labels; no direct access to MIMIC-III required.

**Build it:**

1. Create or obtain a small dataset with patient states, GCS and SOFA scores, and two sets of policy actions (original and shifted alignment).
2. Identify states where the two policies disagree on treatment recommendations.
3. Compute and visualize distributions of GCS and SOFA scores in disagreement states to show clinical plausibility differences.
4. Write a README explaining the temporal misalignment issue and how the analysis reflects it.

**Ships as:** A Jupyter notebook and scripts that reproduce the clinical plausibility analysis with clear visualizations and explanations.

**Stretch goal:** Add statistical tests to quantify significance of differences in severity scores between disagreement quadrants.

### Intermediate — Implement Shifted Temporal Alignment in Sepsis RL Benchmark
*Effort: 1-3 weekends*

You reimplement the core shifted temporal alignment method described in the paper by preprocessing sepsis RL trajectories to shift actions backward by one time step. You train RL policies on both original and shifted alignments using a public sepsis RL benchmark codebase, then compare their treatment recommendations and off-policy evaluation metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main methodological fix and empirically verify its impact on learned policies, replicating the key finding that temporal alignment substantially affects treatment decisions.

**Grounded in:** Proposal of a simple 'shifted' alignment fix that respects temporal ordering between states and actions; empirical demonstration that original and shifted policies disagree in nearly 45% of states.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, Jupyter Notebook

**Data:** Use the sepsis RL benchmark code from https://github.com/aniruddhraghu/sepsisrl as a starting point; this repository contains data preprocessing and RL training scripts for sepsis treatment using MIMIC-III.

**Build it:**

1. Clone and set up the sepsisrl repository and familiarize yourself with its data preprocessing and RL training pipeline.
2. Modify the data preprocessing to implement the shifted alignment by assigning actions to the previous time window.
3. Train RL policies on both original and shifted aligned data.
4. Compare the learned policies by measuring disagreement rates and analyzing treatment recommendations.
5. Evaluate policies using off-policy evaluation metrics on both original and shifted test data.
6. Document the implementation, results, and implications in a detailed README.

**Verified links from the paper:**

- <https://github.com/aniruddhraghu/sepsisrl> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked repository with your shifted alignment implementation, training scripts, comparative analysis notebooks, and documentation.

**Stretch goal:** Extend evaluation to include clinical plausibility metrics such as GCS and SOFA score distributions in disagreement states.

### Advanced — Explore Temporal Granularity Effects on Alignment Bias in Clinical RL
*Effort: a few weeks*

You extend the paper's analysis by investigating how different temporal resolutions (e.g., 1-hour, 2-hour, 4-hour windows) affect the degree of temporal misalignment bias and policy performance in sepsis RL. You implement shifted alignment at multiple granularities, retrain policies, and analyze clinical plausibility and off-policy evaluation metrics to assess the impact of temporal granularity.

**Why it shows you understood the paper:** This project tackles a stated future direction by addressing how temporal granularity influences alignment bias, demonstrating deep comprehension of the temporal dynamics in clinical RL and the limitations of discrete-time MDP formulations.

**Grounded in:** Future direction: Exploring the impact of temporal granularity on alignment bias and policy performance in clinical RL.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, Jupyter Notebook, Docker (optional)

**Data:** Use the sepsisrl benchmark codebase with MIMIC-III data or a suitable substitute dataset with timestamped clinical events to enable varying temporal window sizes.

**Build it:**

1. Extend the data preprocessing pipeline to support multiple temporal window sizes (e.g., 1h, 2h, 4h).
2. Implement shifted temporal alignment for each temporal granularity.
3. Train RL policies separately for each temporal resolution and alignment.
4. Analyze policy disagreement rates, clinical plausibility (GCS, SOFA), and off-policy evaluation metrics across granularities.
5. Visualize and interpret how temporal granularity affects misalignment bias and policy quality.
6. Write a comprehensive report discussing findings, limitations, and implications for clinical RL.

**Verified links from the paper:**

- <https://github.com/aniruddhraghu/sepsisrl> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research-style repository with code, analysis notebooks, visualizations, and a detailed report on temporal granularity effects.

**Stretch goal:** Incorporate clinician feedback or simulated clinical workflow constraints to refine temporal alignment strategies.

_The paper does not provide its own released code or dataset; the intermediate and advanced projects rely on the publicly available sepsisrl repository which uses MIMIC-III data requiring credentialed access. For beginner and exploratory work, simulated or substitute datasets must be used._
