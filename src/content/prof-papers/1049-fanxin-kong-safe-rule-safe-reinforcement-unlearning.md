---
title: "1049 · Safe-RULE: Safe Reinforcement UnLEarning — Fanxin Kong"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fanxin-kong"
source_hash: "b4230296f70d0e9efc81ec9538254d486c794fcebb2772ae4c50c36f4289d202"
sequence: 1049
generator: "outreach-garden: managed"
---

# 1049 · Safe-RULE: Safe Reinforcement UnLEarning

## At a glance

- **Professor:** Fanxin Kong
- **Institution:** University of Notre Dame
- **Paper:** [Safe-RULE: Safe Reinforcement UnLEarning](https://arxiv.org/pdf/2606.09559)
- **Authors:** Shixiong Jiang, Taozheng Zhu, Fanxin Kong
- **Year:** 2026

## Paper overview

This paper introduces Safe-RULE, a method to defend offline safe reinforcement learning (RL) policies against data poisoning attacks. Offline safe RL learns policies from fixed datasets without interacting with the environment, which is safer but vulnerable to malicious data that can cause unsafe behaviors. Safe-RULE enables the policy to 'unlearn' the influence of poisoned data efficiently without retraining from scratch or needing the original environment. It does so by jointly updating the policy's critic and actor networks to suppress poisoned data effects while preserving performance on clean data. Experiments show Safe-RULE effectively reduces unsafe behaviors caused by poisoning across various benchmarks and RL algorithms.

### Why it matters

**Research problem:** Offline safe reinforcement learning policies are vulnerable to data poisoning attacks where adversaries inject malicious samples into the training dataset, causing the learned policy to violate safety constraints and behave unsafely at deployment. Existing defenses like retraining from scratch or fine-tuning are computationally expensive or insufficient to fully remove poisoned behavior. There is a need for an efficient and effective method to remove the influence of poisoned data from trained safe RL policies without full retraining or environment access.

**Why it matters:** Safe RL is critical for safety-sensitive applications such as robotics, autonomous driving, and industrial manipulation, where unsafe actions can cause harm or damage. Offline safe RL avoids unsafe online exploration but is exposed to poisoning attacks that can compromise safety. Developing robust defenses against such attacks is essential to ensure the reliability and safety of RL-enabled cyber-physical systems in real-world deployments.

**Key contributions:**

- Formulation of the safe reinforcement unlearning problem for offline safe RL policies trained on poisoned data.
- Development of Safe-RULE, a defense framework that jointly unlearns critic and actor networks to remove poisoned data influence efficiently.
- Introduction of adaptive forget weight to balance forgetting poisoned data and retaining clean data performance.
- Extensive experiments on Safety Gym benchmarks demonstrating Safe-RULE's effectiveness and efficiency against various poisoning attacks.
- Theoretical analysis providing guarantees on reward suppression and safety cost separation for poisoned samples.

## About the professor

**Fanxin Kong** — tenure-track assistant professor, Department of Computer Science and Engineering, University of Notre Dame.

Research interests: assurance and intelligence of cyber-physical systems with applications to various robotic systems; reinforcement learning; neuro-symbolic AI; security; safety

### Research links

- [Faculty/profile page](https://sites.google.com/site/fanxink)
- [Professor website](https://sites.google.com/site/fanxink/pihomepage)
- [Google Scholar](https://scholar.google.com/citations?user=XeDepwwAAAAJ&hl=en)
- [DBLP](http://dblp.uni-trier.de/pers/hd/k/Kong:Fanxin)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** offline safe reinforcement learning
**The paper assumes:** offline reinforcement learning, safe reinforcement learning, actor-critic methods, policy evaluation under safety constraints
**Already in this field?** Skip this entirely if you already understand offline safe reinforcement learning, including actor-critic architectures and safety-constrained policy optimization.

This background focuses on offline safe reinforcement learning (RL), essential for understanding Safe-RULE's approach to defending offline safe RL policies against data poisoning attacks. The rigorous course option offers a deep, structured university-level treatment of deep reinforcement learning including offline RL, while the fast track provides a concise, intuition-driven introduction to offline RL concepts suitable for quickly grasping the fundamentals without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS 185/285: Deep Reinforcement Learning (Spring 2026)](https://www.youtube.com/playlist?list=PLKq1TCpsv3Y4) — RAIL · 27 videos · 36.4h across 27 episodes

**Watch only this:** Lectures 17 and 18, about 2.7 hours — these focus specifically on Offline Reinforcement Learning and Offline RL Algorithms, directly relevant to the paper's core subject.

*Why it unblocks this paper:* This is a comprehensive university course (CS 185/285 Deep Reinforcement Learning, Spring 2026) covering foundational and advanced topics in deep RL, including dedicated lectures on offline RL (Lectures 17 and 18). It provides the rigorous theoretical and practical background needed to understand offline safe RL policies, critic and actor networks, and unlearning methods like Safe-RULE.

*If you want all of it:* 36.4 hours across 27 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Offline Reinforcement Learning](https://www.youtube.com/playlist?list=PLfBz0z-kA5RBj9p6C84uuthFxhCwb9eJ1) — APTX KOK · 13 videos · 5.9h across 13 episodes

**Watch only this:** Episodes 1-7, about 3.2 hours — covering 'A Gentle Introduction to Offline Reinforcement Learning' through 'CS 285: Lecture 16, Part 4: Offline Reinforcement Learning 2', which provide a solid conceptual and technical foundation.

*Why it unblocks this paper:* This short-form playlist offers a clear, visual, and intuition-first introduction to offline reinforcement learning concepts in about 6 hours total. It covers key ideas like offline RL basics, differences from imitation learning, and practical algorithmic insights, making it a time-efficient way to quickly grasp the fundamentals underlying Safe-RULE.

*If you want all of it:* 5.9 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Safe-RULE paper, start with foundational knowledge on offline safe reinforcement learning and data poisoning attacks, which establish the problem context and threat model. Next, explore reinforcement learning unlearning methods to grasp the core techniques enabling Safe-RULE's efficient removal of poisoned data influence. Finally, focus on the paper's core concept through the authors' own talk to get direct insights into Safe-RULE's joint critic-actor update mechanism and its defense strategy.

### Offline safe reinforcement learning *(prerequisite)*
This section covers the fundamentals of offline reinforcement learning, emphasizing learning policies from fixed datasets without environment interaction, and the incorporation of safety constraints. Understanding these concepts is crucial as Safe-RULE operates in the offline safe RL setting vulnerable to poisoning.

*How the paper uses it:* Safe-RULE defends offline safe RL policies trained on static datasets against poisoning attacks.

▶ [Offline Reinforcement Learning](https://www.youtube.com/watch?v=IUAePhU0E7Y) — RAIL · 29:49 · 6 yr ago

### Data poisoning attacks in machine learning *(prerequisite)*
This section explains the nature of data poisoning attacks where adversaries inject malicious samples to corrupt model behavior. Grasping this threat model is essential to appreciate the security challenges Safe-RULE addresses in offline safe RL.

*How the paper uses it:* Safe-RULE is designed to mitigate the impact of data poisoning attacks on offline safe RL policies.

▶ [AI/ML Data Poisoning Attacks Explained and Analyzed-Technical](https://www.youtube.com/watch?v=a92SWvqgMCE) — RealTime Cyber · 15:27 · 4y ago

### Reinforcement learning unlearning methods *(prerequisite)*
This section introduces reinforcement learning techniques relevant to unlearning or removing the influence of specific data without full retraining. It provides the technical background for Safe-RULE's approach of jointly updating critic and actor networks to forget poisoned data.

*How the paper uses it:* Safe-RULE leverages unlearning methods to efficiently remove poisoned data influence from trained RL policies.

▶ [MIT 6.S191: Reinforcement Learning](https://www.youtube.com/watch?v=1ij3dweHu-0) — Alexander Amini · 59:19 · 6mo ago

### Safe-RULE joint critic actor update
This section focuses on the core mechanism of Safe-RULE, which jointly updates the reward and cost critic networks along with the actor network to suppress poisoned data effects while preserving clean data performance. Understanding actor-critic architectures and policy gradients is key to grasping this method.

*How the paper uses it:* The joint critic-actor update is the central technique enabling Safe-RULE's safe reinforcement unlearning.

▶ [Reinforcement Learning 6: Policy Gradients and Actor Critics](https://www.youtube.com/watch?v=bRfUxQs6xIM) — Google DeepMind · 1:34:41 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Safe-RULE, start by learning the basics of offline safe reinforcement learning, which sets the stage for the problem of learning policies safely from fixed datasets. Next, grasp data poisoning attacks in machine learning to appreciate the threat Safe-RULE defends against. Then, study reinforcement learning unlearning methods to see how poisoned data influence can be removed efficiently. Finally, explore the joint critic-actor update mechanism central to Safe-RULE's approach to suppress poisoned data effects while preserving policy performance.

### Offline safe reinforcement learning *(prerequisite)*
Offline safe reinforcement learning trains policies from fixed datasets without interacting with the environment, focusing on ensuring safety constraints during learning. This approach avoids unsafe exploration but introduces challenges in learning reliable policies solely from offline data.

*How the paper uses it:* Safe-RULE operates in the offline safe RL setting, defending policies trained on static datasets vulnerable to poisoning.

▶ [Safe Offline Reinforcement Learning using Diffusion Policies, AAMAS 2026](https://www.youtube.com/watch?v=PyH-gxaO_EU) — OptiMaL · 7:19 · 6 mo ago

### Data poisoning attacks in machine learning *(prerequisite)*
Data poisoning attacks involve injecting malicious samples into training data to corrupt learned models, causing unsafe or incorrect behavior at deployment. Understanding these attacks is crucial to appreciate the vulnerabilities Safe-RULE aims to mitigate.

*How the paper uses it:* Safe-RULE defends offline safe RL policies against data poisoning attacks that cause unsafe policy behaviors.

▶ [AI/ML Data Poisoning Attacks Explained and Analyzed-Technical](https://www.youtube.com/watch?v=a92SWvqgMCE) — RealTime Cyber · 15:27 · 4y ago

### Reinforcement learning unlearning methods *(prerequisite)*
Unlearning in reinforcement learning refers to techniques that remove the influence of specific data points from trained policies without full retraining. This is key for efficiently mitigating poisoned data effects while preserving learned knowledge.

*How the paper uses it:* Safe-RULE uses unlearning methods to efficiently remove poisoned data influence from offline safe RL policies.

▶ [MIT 6.S191 (2021): Reinforcement Learning](https://www.youtube.com/watch?v=93M1l_nrhpQ) — Alexander Amini · 57:08 · 5y ago

### Safe-RULE joint critic actor update
Safe-RULE’s core mechanism jointly updates the critic and actor networks to suppress the impact of poisoned data by pushing reward estimates down and cost estimates up for poisoned samples, balancing forgetting and retention.

*How the paper uses it:* This joint update is the central technique Safe-RULE uses to unlearn poisoned data effects while maintaining policy performance.

▶ [Reinforcement Learning 23 - REINFORCE & Actor-Critic Methods](https://www.youtube.com/watch?v=zH1dsWBEK7U) — Jabrah Tutorials · 35:53 · 3y ago

## Already in your library

- [CS 285: Lecture 15, Part 1: Offline Reinforcement Learning](https://www.youtube.com/watch?v=NV4oSWe1H9o) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [A Gentle Introduction to Offline Reinforcement Learning](https://www.youtube.com/watch?v=tW-BNW1ApN8) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Mitigating Data Poisoning Attacks in Federated Learning by Dr ...](https://www.youtube.com/watch?v=38TMZNIjzYQ) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [16. Reinforcement Learning, Part 1](https://www.youtube.com/watch?v=YZ5pOgY5hEE) — also for: Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency (Sergey Levine)
- [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Introduction to Reinforcement Learning | Scope of Reinforcement Learning by Mahesh Huddar](https://www.youtube.com/watch?v=PIfj8jJuO1s) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=oejFZShW9hU) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=cRGKc-nAWho) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [Reinforcement Learning: Machine Learning Meets Control Theory](https://www.youtube.com/watch?v=0MNVhXEX9to) — also for: Recovering Physically Plausible Human-Object Interactions from Monocular Videos (Etienne Vouga)
- [What is Actor-Critic?](https://www.youtube.com/watch?v=oDdPcEanLwY) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of Safe-RULE, a method for unlearning poisoned data influence in offline safe reinforcement learning policies. The beginner project focuses on reproducing a core mechanism of Safe-RULE on a simplified example, the intermediate project implements the full Safe-RULE method on a small offline safe RL benchmark and compares it to a baseline, and the advanced project explores extending Safe-RULE to handle unknown poisoned data by integrating a simple detection heuristic, addressing a key limitation of the paper.

### Beginner — Safe-RULE Value Suppression Demo
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a toy offline safe RL critic network and demonstrates the Safe-RULE value suppression objective by pushing down reward values and pushing up cost values for a small set of poisoned samples. This will be done on synthetic data representing clean and poisoned samples with simple scalar reward and cost values.

**Why it shows you understood the paper:** This project shows you understand the core Safe-RULE mechanism of joint critic updates to suppress poisoned data influence by manipulating value estimates, which is central to the paper's defense approach.

**Grounded in:** Safe-RULE uses value suppression objectives on the critics for poisoned samples, pushing reward values down and cost values up beyond safety thresholds.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic scalar reward and cost values for a small set of clean and poisoned samples generated within the notebook.

**Build it:**

1. Create synthetic data arrays representing reward and cost values for clean and poisoned samples.
2. Implement functions to apply Safe-RULE value suppression objectives: decrease reward values and increase cost values for poisoned samples.
3. Visualize before and after value distributions to show suppression effect.
4. Write a short README explaining the Safe-RULE value suppression concept and how the demo illustrates it.

**Ships as:** A Jupyter notebook with code and plots demonstrating value suppression on synthetic data, plus a README explaining the mechanism.

**Stretch goal:** Add a simple actor network update step that reacts to the suppressed critic values to show joint critic-actor unlearning.

### Intermediate — Safe-RULE Implementation on Safety Gym Mini-Benchmark
*Effort: 2 weekends, ~20 hours*

You implement the Safe-RULE unlearning method described in the paper from scratch in Python using PyTorch. You train an offline safe RL policy on a small Safety Gym environment dataset with injected poisoned samples, then apply Safe-RULE to unlearn the poisoned influence. You compare the safety cost and reward metrics before and after unlearning, and against a simple fine-tuning baseline.

**Why it shows you understood the paper:** This project demonstrates you can implement the full Safe-RULE algorithm, including joint critic and actor updates with adaptive forget weights, and evaluate its effectiveness on a real offline safe RL benchmark, replicating key paper results.

**Grounded in:** Development of Safe-RULE, a defense framework that jointly unlearns critic and actor networks to remove poisoned data influence efficiently; extensive experiments on Safety Gym benchmarks demonstrating effectiveness.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** A small offline dataset collected from Safety Gym simulation environment with synthetic poisoning injected by modifying some samples to violate safety constraints.

**Build it:**

1. Set up a minimal offline safe RL training pipeline for a Safety Gym environment (e.g., PointGoal1).
2. Inject poisoned samples into the offline dataset that cause unsafe behaviors.
3. Implement Safe-RULE unlearning: joint updates to reward and cost critics and actor network with adaptive forget weight.
4. Implement a baseline fine-tuning defense for comparison.
5. Evaluate and plot safety cost and reward metrics before poisoning, after poisoning, and after unlearning and fine-tuning.
6. Write a README documenting the implementation, experimental setup, and results.

**Ships as:** A GitHub repo with Safe-RULE implementation code, scripts to run experiments, plots comparing metrics, and a README explaining the method and results.

**Stretch goal:** Add ablation experiments to disable adaptive forget weight or actor unlearning and compare results.

### Advanced — Extending Safe-RULE with Automated Poisoned Sample Detection
*Effort: 3+ weeks*

You extend the Safe-RULE framework by integrating a simple automated detection mechanism to identify poisoned samples in the offline dataset, addressing the paper's limitation that poisoned and clean data must be pre-identified. You implement a heuristic detector (e.g., anomaly detection on reward-cost distributions or clustering) to separate poisoned samples, then apply Safe-RULE unlearning on the detected poisoned subset. You evaluate the effectiveness of this end-to-end pipeline on Safety Gym data with unknown poisoning.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by combining detection and unlearning, demonstrating deep comprehension of Safe-RULE's assumptions and practical deployment challenges.

**Grounded in:** Safe-RULE requires prior identification or separation of clean and poisoned datasets; future directions include developing methods to detect or isolate poisoned samples automatically.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Offline Safety Gym dataset with unknown poisoned samples injected synthetically; detection is performed on this dataset.

**Build it:**

1. Implement or reuse an offline safe RL training pipeline and Safe-RULE unlearning as in the intermediate project.
2. Develop a heuristic poisoned sample detection method using anomaly detection or clustering on reward and cost features.
3. Apply detection to partition the dataset into suspected poisoned and clean samples.
4. Run Safe-RULE unlearning on the detected poisoned subset without prior knowledge of true labels.
5. Evaluate safety cost and reward metrics before and after unlearning, and compare to oracle (known poisoned) unlearning.
6. Write a detailed README explaining the detection method, integration with Safe-RULE, experiments, and limitations.

**Ships as:** A GitHub repo with code for detection, Safe-RULE unlearning, experiments, and a comprehensive README discussing the extension and results.

**Stretch goal:** Experiment with more advanced detection methods such as neural network-based outlier detection or incorporate uncertainty estimation.
