---
title: "738 · SPEAR: Selective Preference Elicitation with Adaptive Rewards for VLM-Guided Robotic Manipulation — Feng Chen"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-feng-chen"
source_hash: "943fa1554bd06f0e15e8c0c818ee2ecfc1428adcdf3c7bbd546e1d147a93c9cf"
sequence: 738
generator: "outreach-garden: managed"
---

# 738 · SPEAR: Selective Preference Elicitation with Adaptive Rewards for VLM-Guided Robotic Manipulation

## At a glance

- **Professor:** Feng Chen
- **Institution:** Indiana University
- **Paper:** [SPEAR: Selective Preference Elicitation with Adaptive Rewards for VLM-Guided Robotic Manipulation](https://arxiv.org/pdf/2610.21621)
- **Authors:** Zewen Wu, Ruizhe Liu, Pei Zhou, Feng Chen, Yanchao Yang
- **Year:** 2026

## Paper overview

This paper presents SPEAR, a new method that uses vision-language models (VLMs) to teach robots how to manipulate objects more efficiently. SPEAR reduces the number of costly queries to the VLM by selecting only informative comparisons and uses an adaptive reward system to help the robot explore and learn tasks faster. The approach is tested on simulated and real robots, showing significant improvements in success rates and training efficiency.

### Why it matters

**Research problem:** Robotic manipulation learning via preference-based reinforcement learning (PbRL) is limited by the high cost and frequent abstentions of vision-language model (VLM) queries, and by the difficulty of bootstrapping exploration without initial reward guidance.

**Why it matters:** Efficient and scalable robot learning without manual reward engineering or human labeling is critical for deploying robots in real-world tasks. VLMs offer automated preference oracles but are computationally expensive and often abstain on ambiguous queries, limiting practical use.

**Key contributions:**

- A distinguishability-aware query selection method combining global semantic and local spatial features to predict VLM response likelihood and reduce abstentions.
- An adaptive reward transition strategy that uses VLM-synthesized warm-up rewards to guide early exploration before preference-based refinement.
- Demonstration of SPEAR's superior performance on six diverse Meta-World manipulation tasks and on a real Mobile ALOHA robot with fully online learning.
- Integration of a decomposed two-stage VLM query protocol to mitigate positional bias and cross-image attribution errors, improving preference label quality.
- Comprehensive evaluation including query efficiency, wall-clock training time, and VLM reliability diagnostics across multiple VLM backbones.

## About the professor

**Feng Chen** — Associate Professor, Department of Computer Science, Indiana University.

Research interests: memory and storage systems, databases, data-intensive applications, computational storage, memory-based data stores, emerging systems for LLMs, such as vector databases

### Research links

- [Faculty/profile page](https://homes.luddy.indiana.edu/fchen25)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Preference-based Reinforcement Learning
**The paper assumes:** preference-based reinforcement learning, reward modeling, and policy optimization
**Already in this field?** Skip this entirely if you already understand reinforcement learning methods that learn from preference feedback instead of explicit rewards.

This background focuses on preference-based reinforcement learning (PbRL), which is central to understanding how SPEAR efficiently uses vision-language model feedback to train robotic manipulation policies. The rigorous course offers a deep, structured dive into reinforcement learning concepts relevant to PbRL, while the fast track provides a concise, intuition-driven overview suitable for quickly grasping the fundamentals and key ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-4 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods), Lecture 8 (Reward Learning), and Lecture 14 (Exploration), about 6.5 hours total — these cover foundational RL methods, reward modeling, and exploration strategies critical to understanding SPEAR's approach.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, university-level course that covers core RL algorithms, reward learning, exploration, and RL for robots, directly relevant to the preference-based RL and adaptive reward mechanisms in SPEAR.

*If you want all of it:* 20.6 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CS234  Reinforcement Learning](https://www.youtube.com/playlist?list=PLhy-zJ_UurnJEY2xS57cFAgbGzo2cdndJ) — TenMinuteTakeaway · 16 videos · 0.7h across 16 episodes

**Watch only this:** Episodes 1-4 (Value Alignment, RL Value Alignment, Exploration 1, Multi-Agent Game Playing), about 8 minutes total — these succinctly introduce preference-based learning and exploration relevant to the paper.

*Why it unblocks this paper:* The CS234 Reinforcement Learning series by TenMinuteTakeaway offers short, clear 2-minute videos that quickly explain key RL concepts including preference learning, exploration, and policy search, providing an efficient primer on the core ideas behind PbRL used in SPEAR.

*If you want all of it:* 0.7 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SPEAR paper, start by building a strong foundation in preference-based reinforcement learning, vision-language models for robotics, active query selection in reinforcement learning, and adaptive reward shaping. These prerequisites provide the necessary background on the core technologies and methods that SPEAR innovates upon. Finally, focus on the core concept of SPEAR itself, emphasizing the authors' own talk or the most relevant advanced presentations to gain direct insight into their novel contributions.

### Preference-based reinforcement learning *(prerequisite)*
This section covers foundational knowledge on how reinforcement learning can be guided by preferences rather than explicit rewards, which is central to SPEAR's approach. Understanding model-based RL, policy optimization, and preference feedback mechanisms will provide the theoretical basis for SPEAR's selective querying and reward adaptation.

*How the paper uses it:* SPEAR builds on preference-based reinforcement learning to efficiently guide robotic manipulation using VLM-derived preferences.

▶ [Research talk: Reinforcement learning with preference feedback](https://www.youtube.com/watch?v=MJzBUNtv0Ho) — Microsoft Research · 14:23 · 4y ago

### Vision-language models for robotics *(prerequisite)*
This section introduces the core technology of vision-language models (VLMs) and their applications in robotics, explaining how multimodal models enable robots to understand and act upon natural language instructions and visual inputs. It is crucial to grasp how VLMs serve as automated preference oracles in SPEAR.

*How the paper uses it:* SPEAR leverages VLMs as automated preference oracles to reduce manual labeling and reward engineering.

▶ [[MERL Seminar Series Fall 2023] The Confluence of Vision, Language, and Robotics](https://www.youtube.com/watch?v=Im1Jqpd-Kz8) — Mitsubishi Electric Research Laboratories (MERL) · 56:46 · 3y ago

### Active query selection in RL *(prerequisite)*
Active query selection techniques in reinforcement learning focus on choosing the most informative queries to improve learning efficiency. This knowledge is essential to understand SPEAR's distinguishability-aware query selection mechanism that reduces costly and abstaining VLM queries.

*How the paper uses it:* SPEAR's distinguishability-aware query selection reduces unnecessary VLM queries by predicting informative comparisons.

▶ [Non-Myopic Active Learning: A Reinforcement Learning Approac](https://www.youtube.com/watch?v=hFBe9L1xCyY) — Google TechTalks · 1:11:46 · 17y ago

### Adaptive reward shaping in RL *(prerequisite)*
Adaptive reward shaping involves designing reward functions that evolve during training to bootstrap exploration and improve learning efficiency. This background is necessary to appreciate SPEAR's adaptive reward transition strategy that uses coarse VLM-synthesized rewards before refined preference-based rewards.

*How the paper uses it:* SPEAR uses adaptive reward transition to bootstrap exploration and accelerate robotic learning.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 8: Reward Learning](https://www.youtube.com/watch?v=PDIxDhA9Z6Y) — Stanford Online · 1:05:59 · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand SPEAR, start by building a foundation in reinforcement learning and preference-based learning, which are key to how the robot learns from feedback. Then, learn about vision-language models as they provide the automated preference oracles that guide the robot. Next, explore active query selection to see how SPEAR reduces costly and abstaining queries. Finally, grasp the core SPEAR mechanism of distinguishability-aware query selection that predicts when the vision-language model can confidently respond, improving efficiency.

### Preference-based reinforcement learning *(prerequisite)*
Preference-based reinforcement learning (PbRL) teaches agents by comparing pairs of behaviors and learning which is preferred, rather than relying on explicit rewards. This approach is useful when designing reward functions is hard or costly. Understanding PbRL helps grasp how SPEAR uses preferences from vision-language models to guide robot learning.

*How the paper uses it:* SPEAR builds on PbRL by using vision-language models as preference oracles to guide robotic manipulation learning.

▶ [Research talk: Reinforcement learning with preference feedback](https://www.youtube.com/watch?v=MJzBUNtv0Ho) — Microsoft Research · 14:23 · 4y ago

### Vision-language models for robotics *(prerequisite)*
Vision-language models (VLMs) combine image understanding with natural language to interpret and describe visual scenes. In robotics, VLMs enable robots to understand instructions and evaluate behaviors without manual labeling. Learning about VLMs clarifies how SPEAR leverages them as automated preference oracles.

*How the paper uses it:* SPEAR uses VLMs to automatically provide preference feedback on robot trajectories, reducing human labeling.

▶ [Robots That “See + Understand + Act”  | VLA Models Explained](https://www.youtube.com/watch?v=DFYWkr2lklw) — Thinq Tanq · 7:44 · 9mo ago

### Active query selection in RL *(prerequisite)*
Active query selection is about choosing the most informative queries to ask an oracle, minimizing cost and maximizing learning efficiency. In reinforcement learning, it helps reduce unnecessary or unhelpful feedback requests. This concept is key to SPEAR’s strategy for reducing expensive and abstaining VLM queries.

*How the paper uses it:* SPEAR applies active query selection to predict which trajectory comparisons the VLM can confidently label, reducing wasted queries.

▶ [An Introduction to Active Learning (Machine Learning)](https://www.youtube.com/watch?v=GuYhJ-kCnGg) — The Brainy Computer · 5:06 · 5y ago

## Already in your library

- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 9: RL for LLMs](https://www.youtube.com/watch?v=XKLGuwvSKvI) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Introduction to Reinforcement Learning | Scope of Reinforcement Learning by Mahesh Huddar](https://www.youtube.com/watch?v=PIfj8jJuO1s) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [LLMs Meet Robotics: What Are Vision-Language-Action Models? (VLA Series Ep.1)](https://www.youtube.com/watch?v=8dZUOo5xWFw) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [World Models explained in 10min..](https://www.youtube.com/watch?v=ECWC-YlAk1o) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reward shaping](https://www.youtube.com/watch?v=S6X7Kb7v3II) — also for: Behavior Alignment via Reward Function Optimization (Bruno C. da Silva)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply key ideas from the SPEAR paper on efficient VLM-guided robotic manipulation. The beginner project focuses on reproducing the distinguishability-aware query selection concept in a simplified setting. The intermediate project implements the core SPEAR method on a public simulated manipulation environment to evaluate query efficiency and success rates. The advanced project extends SPEAR by addressing one of its stated limitations: improving the precision of VLM-synthesized warm-up rewards, exploring better reward shaping for initial exploration.

### Beginner — Distinguishability-Aware Query Selection Prototype
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the SPEAR query selection mechanism that predicts whether a vision-language model (VLM) would confidently label a pair of trajectory images. Using pre-extracted semantic and spatial features from image pairs, you train a lightweight classifier to predict VLM abstention likelihood. This prototype demonstrates how selective querying reduces wasted VLM calls.

**Why it shows you understood the paper:** This project shows you grasp the core idea of reducing VLM query cost by predicting distinguishability, a key SPEAR contribution. A professor would see you can translate the paper's mechanism into a practical classifier and evaluate its impact on query efficiency.

**Grounded in:** A distinguishability-aware query selection method combining global semantic and local spatial features to predict VLM response likelihood and reduce abstentions.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Matplotlib

**Data:** Simulated image pairs with semantic and spatial feature vectors synthesized or extracted from public image datasets (e.g., COCO or ImageNet subsets) as a stand-in for VLM trajectory comparisons.

**Build it:**

1. Collect or synthesize pairs of images representing trajectories with varying semantic and spatial differences.
2. Extract or simulate global semantic features (e.g., pretrained CNN embeddings) and local spatial features (e.g., bounding box overlaps).
3. Label pairs as 'distinguishable' or 'ambiguous' based on a heuristic or small manual annotation simulating VLM abstention.
4. Train a binary classifier (e.g., logistic regression or random forest) to predict VLM response likelihood from features.
5. Evaluate classifier accuracy and simulate query reduction by filtering out predicted abstentions.
6. Document the approach, results, and how this reduces VLM query cost.

**Ships as:** A GitHub repo with code to train and evaluate the query selection classifier, example data generation scripts, and a README explaining the method and results.

**Stretch goal:** Add uncertainty estimation to the classifier to better handle evolving policy behaviors during training.

### Intermediate — SPEAR Core Method on Meta-World Tasks
*Effort: 2-3 weekends, ~30 hours*

You implement the core SPEAR method described in the paper, including distinguishability-aware query selection and adaptive reward transition, applied to a subset of the Meta-World simulated manipulation tasks. You compare SPEAR's query efficiency and success rate against a baseline preference-based RL method without query selection or reward transition.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main algorithmic contributions and reproduce key metrics like success rate improvements and reduced VLM query abstentions. It proves you understand the integration of VLM oracles with RL and the adaptive reward shaping.

**Grounded in:** Demonstration of SPEAR's superior performance on six diverse Meta-World manipulation tasks and reduction in VLM query abstention rates.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, Meta-World environment, Stable Baselines3

**Data:** Meta-World simulated robotic manipulation tasks (publicly available) used as a proxy for the paper's evaluation environment.

**Build it:**

1. Set up the Meta-World environment and baseline preference-based RL agent.
2. Implement distinguishability-aware query selection using semantic and spatial features from trajectory images.
3. Implement adaptive reward transition: start training with coarse VLM-synthesized rewards, then switch to refined preference-based rewards.
4. Run experiments comparing SPEAR against baseline on selected tasks, logging success rates, query abstention rates, and training time.
5. Analyze results and produce plots similar to those in the paper.
6. Write a detailed README documenting implementation details, experiments, and insights.

**Ships as:** A GitHub repo with SPEAR implementation on Meta-World, experiment scripts, evaluation plots, and a README describing the method and results.

**Stretch goal:** Incorporate the two-stage VLM query protocol to mitigate positional bias and improve preference label quality.

### Advanced — Improving VLM-Synthesized Warm-Up Rewards for SPEAR
*Effort: 3-4 weeks*

You extend SPEAR by developing a more precise method for synthesizing warm-up rewards from VLMs to guide early exploration. This could involve integrating multi-modal sensory inputs or refining geometric cues to better approximate task completion. You evaluate how improved warm-up rewards affect learning efficiency and success rates on simulated tasks.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper and explores a future direction, demonstrating deep comprehension of SPEAR's reward shaping challenges. It shows you can innovate beyond the original method and critically assess its components.

**Grounded in:** The warm-up reward synthesized by VLMs is coarse and may not precisely represent task completion, limiting initial precision.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym, Meta-World environment, Vision-language model APIs (e.g., CLIP)

**Data:** Meta-World simulated tasks; VLM embeddings or APIs (e.g., CLIP) for reward synthesis; no authors' code available.

**Build it:**

1. Review SPEAR's adaptive reward transition and warm-up reward synthesis approach.
2. Design and implement a refined warm-up reward mechanism using enhanced visual-semantic alignment or multi-modal cues.
3. Integrate the improved warm-up rewards into the SPEAR training pipeline.
4. Conduct experiments comparing learning curves, success rates, and query efficiency with original SPEAR warm-up rewards.
5. Analyze how reward precision impacts exploration and policy quality.
6. Document methodology, experiments, and conclusions in the README.

**Ships as:** A GitHub repo with extended SPEAR code, improved warm-up reward modules, experimental results, and a comprehensive README discussing the impact of reward refinement.

**Stretch goal:** Explore automated environment reset mechanisms or extend SPEAR to multi-task learning scenarios.
