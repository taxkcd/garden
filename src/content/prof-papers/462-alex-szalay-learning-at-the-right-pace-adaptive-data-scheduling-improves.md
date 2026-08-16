---
title: "462 · Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning — Alex Szalay"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alex-szalay"
source_hash: "46dca8b707b4ab478c579b01ef6fef201733189e2b56ca3cbdf9f9c9443147fd"
sequence: 462
generator: "outreach-garden: managed"
---

# 462 · Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning

## At a glance

- **Professor:** Alex Szalay
- **Institution:** Johns Hopkins University
- **Paper:** [Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning](https://arxiv.org/pdf/2606.22305)
- **Authors:** Zicheng Xu, Ruixuan Zhang, Yu-Neng Chuang, Xiuyi Lou, Hoang Anh Duy Le, Oren Gal, Alexander S. Szalay, Zhaozhuo Xu, Guanchu Wang, Vladimir Braverman
- **Year:** 2026

## Paper overview

This paper presents Adaptive Data Scheduling (ADS), a new method to improve reinforcement learning post-training of large language models (LLMs). Instead of sampling training data uniformly, ADS organizes data into semantic clusters and adaptively selects samples near the model's current capability boundary. This approach leads to more effective learning and better reasoning accuracy across multiple models and benchmarks.

### Why it matters

**Research problem:** Current reinforcement learning post-training methods for LLMs rely on uniform data sampling, which ignores the semantic structure of the data and the evolving capability of the training policy. This can cause inefficient learning and suboptimal policy optimization.

**Why it matters:** Improving the efficiency and effectiveness of RL post-training for LLMs is crucial for enhancing their reasoning capabilities and generalization to diverse tasks. Uniform sampling wastes training resources on samples that are too easy or too difficult, limiting model performance.

**Key contributions:**

- Proposed a dual-level adaptive data scheduling framework that replaces uniform sampling with semantic cluster-based and policy-boundary sample selection.
- Developed a method to cluster training data semantically using embeddings from the base policy.
- Introduced adaptive inter-cluster sampling to focus training on clusters within the policy's current capability.
- Designed intra-cluster scheduling to continuously select policy-boundary samples for effective policy optimization.
- Demonstrated that ADS is objective-agnostic and can improve various RL post-training objectives.

## About the professor

**Alex Szalay** — Bloomberg Distinguished Professor (Director, IDIES), Department of Computer Science, Johns Hopkins University.

Research interests: Theoretical astrophysics; galaxy formation

### Research links

- [Faculty/profile page](https://physics-astronomy.jhu.edu/directory/alexander-s-szalay)
- [Professor website](http://www.sdss.jhu.edu/~szalay/)
- [Lab website](http://idies.jhu.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=rUiWchkAAAAJ)
- [DBLP](http://www.informatik.uni-trier.de/~ley/pers/hd/s/Szalay:Alex.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** fundamental reinforcement learning concepts, policy optimization methods, reward functions, and sample scheduling strategies
**Already in this field?** Skip this entirely if you already have a solid understanding of reinforcement learning fundamentals and policy optimization techniques.

This background is designed to provide a solid understanding of reinforcement learning (RL) concepts critical for grasping the adaptive data scheduling method introduced in the paper. The rigorous course option offers a deep, structured dive into RL algorithms and their applications, while the fast track provides a concise, focused introduction to RL techniques specifically relevant to large language models and policy optimization. Choose the course for comprehensive mastery or the fast track for a quick, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos

**Watch only this:** Lectures 1 through 10, about 10.8 hours — covering introduction, policy gradients, actor-critic methods, offline RL, reward learning, and RL applications to LLMs and reasoning, which provide the essential RL foundations and context for adaptive data scheduling.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a recent, authoritative course covering foundational and advanced RL topics including policy gradients, actor-critic methods, offline RL, and RL for LLMs and reasoning, directly relevant to the paper's methodology and evaluation.

*If you want all of it:* All 19 lectures, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning for LLMs](https://www.youtube.com/playlist?list=PLs8w1Cdi-zvbUan-KlgwKN2CycndyKXXS) — Luis Serrano Academy · 6 videos · 2.5h across 6 episodes

**Watch only this:** Episodes 1 through 4, about 1.6 hours — covering RLHF, PPO, DPO, and GRPO, which are core to understanding the paper's baseline comparisons and adaptive scheduling improvements.

*Why it unblocks this paper:* The 'Reinforcement Learning for LLMs' series by Luis Serrano Academy offers a concise, clear introduction to RL concepts and recent methods like PPO, DPO, and GRPO, which are directly mentioned in the paper, making it an efficient primer on RL techniques for LLM post-training.

*If you want all of it:* All 6 episodes, about 2.5 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Adaptive Data Scheduling (ADS) for improving reinforcement learning post-training of large language models, start by grounding yourself in the foundational concepts of semantic clustering embeddings and the policy capability boundary in reinforcement learning. Next, build context on reinforcement learning data scheduling methods and the application of reinforcement learning specifically to large language models. Finally, focus on the core concept of adaptive data scheduling itself, prioritizing the authors' own or closely related academic talks to grasp the novel contributions and methodology.

### Semantic clustering embeddings *(prerequisite)*
Semantic clustering embeddings form the foundation for organizing training data into meaningful clusters based on the model's learned representations. Understanding how embeddings capture semantic similarity is critical to appreciating how ADS groups data semantically before adaptive scheduling.

*How the paper uses it:* ADS organizes training samples into semantic clusters using embeddings from the base policy to enable adaptive data scheduling.

▶ [CMU Neural Nets for NLP 2021 (8): Distributional Semantics and Word Vectors](https://www.youtube.com/watch?v=A7o1zJ1eY9o) — Graham Neubig · 42:44 · 5 years ago

### Policy capability boundary in RL *(prerequisite)*
The policy capability boundary concept is key to selecting training samples near the model's current learning frontier, maximizing the informativeness of training data. Grasping this concept helps understand how ADS targets samples that are neither too easy nor too hard for the current policy.

*How the paper uses it:* ADS selects policy-boundary samples within clusters to maximize informative training signals during reinforcement learning.

▶ [Off-policy Policy Optimization](https://www.youtube.com/watch?v=GXjc-tomqpo) — Simons Institute for the Theory of Computing · 53:26 · 7 years ago

### Reinforcement Learning data scheduling *(prerequisite)*
Data scheduling in reinforcement learning is central to improving training efficiency by adaptively selecting which data to train on. Understanding existing RL data scheduling methods provides context for how ADS innovates beyond uniform sampling.

*How the paper uses it:* ADS proposes a dual-level adaptive data scheduling framework that replaces uniform sampling with semantic cluster-based and policy-boundary sample selection.

▶ [John Tsitsiklis -- Reinforcement Learning](https://www.youtube.com/watch?v=fbmAsxbLal0) — MIT Institute for Data, Systems, and Society · 1:05:06 · 7 years ago

### Large language model reinforcement learning *(prerequisite)*
Reinforcement learning applied to large language models is the broader context in which ADS operates. Familiarity with LLM RL techniques and challenges is necessary to appreciate the significance and applicability of ADS.

*How the paper uses it:* ADS improves reinforcement learning post-training of LLMs by adaptively scheduling training data to enhance reasoning accuracy.

▶ [Lecture 05 • Reinforcement Learning for Language Models](https://www.youtube.com/watch?v=MagojAG0lZI) — Meridian Cambridge · 50:53 · 1 year ago

### Adaptive Data Scheduling talk *(the paper's own talk)*
This section covers the core concept of the paper: Adaptive Data Scheduling. The ideal resource is the authors' own talk or a closely related academic presentation that explains the methodology, motivation, and results in depth.

*How the paper uses it:* The paper authors present ADS as a novel method to improve RL post-training of LLMs by semantic clustering and adaptive sample selection.

▶ [[Scheduling seminar] Zijie Zhou (IEDA, HKUST) | Efficient and Robust LLM Scheduling](https://www.youtube.com/watch?v=obTtEShQKXc) — Scheduling seminar · 52:58 · Streamed 9 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's contribution on Adaptive Data Scheduling (ADS) for improving reinforcement learning in large language models, start by grasping the foundational concepts of semantic clustering embeddings, which organize data meaningfully. Next, learn about reinforcement learning basics and the idea of a policy's capability boundary to appreciate how adaptive sampling targets informative data. Finally, explore the core concept of adaptive data scheduling itself, focusing on how it adaptively selects training samples to enhance learning efficiency and accuracy.

### Semantic clustering embeddings *(prerequisite)*
Semantic clustering embeddings convert text data into numerical vectors that capture meaning, enabling grouping of similar data points. Understanding how embeddings represent semantic similarity is key to organizing training data into meaningful clusters.

*How the paper uses it:* ADS organizes training data into semantic clusters using embeddings from the base policy to group semantically coherent samples.

▶ [Sentence Transformers: Sentence Embedding, Sentence Similarity, Semantic Search and Clustering |Code](https://www.youtube.com/watch?v=OlhNZg4gOvA) — Pradip Nichite · 32:54 · 4 years ago

### Large language model reinforcement learning *(prerequisite)*
Reinforcement learning for large language models involves training the model to improve its outputs based on reward signals, often post initial supervised training. This context is essential to understand why adaptive data scheduling can improve LLM training efficiency.

*How the paper uses it:* The paper applies ADS to reinforcement learning post-training of LLMs to improve reasoning accuracy and training efficiency.

▶ [Lecture 05 • Reinforcement Learning for Language Models](https://www.youtube.com/watch?v=MagojAG0lZI) — Meridian Cambridge · 50:53 · 1 year ago

### Policy capability boundary in RL *(prerequisite)*
The policy capability boundary refers to the frontier of what the current model can reliably handle; focusing training on samples near this boundary provides the most informative learning signals. Grasping this concept helps understand why ADS selects samples adaptively rather than uniformly.

*How the paper uses it:* ADS selects samples near the policy's current capability boundary within clusters to maximize informative training signals.

▶ [Proximal Policy Optimization (PPO) for LLMs Explained Intuitively](https://www.youtube.com/watch?v=8jtAzxUwDj0) — Julia Turc · 22:03 · 1 year ago

### Reinforcement Learning data scheduling
Data scheduling in reinforcement learning involves choosing which training samples to use and when, to improve learning efficiency and effectiveness. Adaptive scheduling tailors this selection based on model progress and data characteristics.

*How the paper uses it:* ADS is a novel adaptive data scheduling method that replaces uniform sampling with cluster- and boundary-aware selection to improve RL post-training.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro](https://www.youtube.com/watch?v=EvHRQhMX7_w) — Stanford Online · 52:59 · 8 months ago

## Already in your library

- [John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges](https://www.youtube.com/watch?v=hhiLw5Q_UFg) — also for: Certificate-Guided Evaluation of Reinforcement Learning Generalization (Suguman Bansal)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Deep clustering: discriminative embeddings for source separation](https://www.youtube.com/watch?v=13NVgk3N6Uo) — also for: Deep clustering for large-scale interpretable time series segmentation (Huiping Cao)
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of Adaptive Data Scheduling (ADS) from the paper. The beginner project reproduces a core mechanism of semantic clustering and policy-boundary sample selection on a small scale. The intermediate project runs and extends the authors' ADS implementation on a public reasoning benchmark to compare against uniform sampling. The advanced project addresses a stated limitation by extending ADS to handle non-binary reward signals, exploring adaptive scheduling for richer RL objectives.

### Beginner — Semantic Clustering and Policy-Boundary Sampling Demo
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements semantic clustering of text samples using embeddings from a pretrained language model, then selects samples near a simulated policy capability boundary for training. The demo visualizes clusters and shows how intra-cluster scheduling picks samples with intermediate difficulty scores.

**Why it shows you understood the paper:** This project demonstrates you understand the dual-level adaptive scheduling framework: semantic clustering and policy-boundary sample selection, which are central to ADS.

**Grounded in:** ADS introduces a dual-level adaptive data scheduling framework: (1) semantic clustering organizes training samples into coherent clusters based on their semantic patterns; (4) intra-cluster scheduling selects samples near the policy's capability boundary within each cluster to maximize informative training signals.

**Tech stack:** Python 3.11, scikit-learn, transformers (Hugging Face), matplotlib, numpy, jupyter notebook

**Data:** A small subset of math word problems or reasoning questions from the OpenR1-Math-220k dataset (publicly available at https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) or a similar public reasoning dataset.

**Build it:**

1. Load a small sample of reasoning problems and compute embeddings using a pretrained base policy model (e.g., a Hugging Face transformer).
2. Perform semantic clustering on the embeddings using k-means or another clustering algorithm.
3. Assign simulated difficulty scores to samples (e.g., random or heuristic-based) to mimic policy capability scores.
4. Implement intra-cluster scheduling by selecting samples within a defined difficulty band near the policy boundary.
5. Visualize clusters and the selected samples to illustrate the adaptive scheduling mechanism.

**Verified links from the paper:**

- <https://huggingface.co/datasets/open-r1/OpenR1-Math-220k> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook with code, visualizations of semantic clusters, and sample selection demonstrating the ADS scheduling principles.

**Stretch goal:** Add a simple uniform sampling baseline and compare the distribution of selected samples to show the advantage of adaptive scheduling.

### Intermediate — Run and Extend ADS on Reasoning Benchmarks
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' ADS codebase from https://github.com/Richard-zrx/ADS on a public reasoning benchmark like OpenR1-Math-220k. You reproduce the reported accuracy improvements over uniform sampling or GRPO baseline, then modify the inter-cluster distribution to test alternative cluster prioritization strategies and report effects on accuracy.

**Why it shows you understood the paper:** This project shows you can operate the authors' implementation, understand the core ADS method, and critically evaluate its components by experimenting with inter-cluster scheduling.

**Grounded in:** ADS improves average accuracy by 5.2% over Group Relative Policy Optimization (GRPO) across multiple LLMs and benchmarks. ADS maintains an adaptive inter-cluster distribution to control how frequently each semantic cluster enters the current training schedule.

**Tech stack:** Python 3.11, PyTorch, Hugging Face transformers, Git, Linux shell

**Data:** OpenR1-Math-220k dataset from https://huggingface.co/datasets/open-r1/OpenR1-Math-220k as used in the paper's experiments.

**Build it:**

1. Clone the ADS repository from https://github.com/Richard-zrx/ADS and install dependencies.
2. Download and preprocess the OpenR1-Math-220k dataset as per the repository instructions.
3. Run the baseline training with uniform sampling and then with ADS to reproduce accuracy improvements.
4. Modify the inter-cluster sampling distribution logic to implement a simple alternative (e.g., uniform cluster sampling or fixed cluster priority).
5. Evaluate and compare the accuracy and training dynamics of the modified ADS against the original.
6. Document results and insights in a README or report.

**Verified links from the paper:**

- <https://github.com/Richard-zrx/ADS> — released by the paper's authors
- <https://huggingface.co/datasets/open-r1/OpenR1-Math-220k> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts to run ADS on OpenR1-Math-220k, modified inter-cluster scheduling code, and a report comparing baseline and modified results.

**Stretch goal:** Add intra-cluster scheduling ablation by disabling policy-boundary sample selection and observe impact on performance.

### Advanced — Extending ADS for Non-Binary Reward Signals
*Effort: 3-4 weeks*

You develop an extension of ADS to handle continuous or preference-based reward signals instead of binary correctness. This involves designing adaptive scheduling signals that estimate sample informativeness under richer reward structures. You apply this to a small-scale RL post-training task with synthetic or publicly available data simulating graded rewards, and compare against the original ADS binary reward setup.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of ADS and ability to innovate on its core mechanisms for broader applicability.

**Grounded in:** ADS currently relies on verifiable outcome rewards (binary correctness), limiting applicability to tasks with richer or open-ended reward signals. Future directions include developing adaptive scheduling signals for reward settings beyond binary correctness to apply ADS to open-ended and preference-based tasks.

**Tech stack:** Python 3.11, PyTorch, Hugging Face transformers, NumPy, Matplotlib, Git

**Data:** Simulated or small public dataset with graded reward signals for reasoning tasks; if unavailable, synthesize data with continuous reward labels reflecting partial correctness or preference scores.

**Build it:**

1. Study the ADS codebase and identify components dependent on binary reward signals.
2. Design and implement a continuous reward scoring function to replace binary correctness in sample difficulty estimation.
3. Adapt inter-cluster and intra-cluster scheduling to use the new reward signals for adaptive sampling.
4. Create or source a dataset with continuous or preference-based rewards for evaluation.
5. Run experiments comparing original ADS (binary reward) and extended ADS on this dataset, measuring training efficiency and accuracy.
6. Analyze results and document challenges, limitations, and potential improvements.

**Verified links from the paper:**

- <https://github.com/Richard-zrx/ADS> — released by the paper's authors

**Ships as:** A GitHub repository with extended ADS code supporting non-binary rewards, experimental scripts, and a detailed report on methodology and findings.

**Stretch goal:** Explore combining ADS with advanced RL objectives like DAPO or GSPO under non-binary rewards to test stability and performance gains.

_The advanced project requires simulating or sourcing data with non-binary rewards as the paper and artifacts do not provide such datasets._
