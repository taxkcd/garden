---
title: "321 · RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models — Tesca Fitzgerald"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tesca-fitzgerald"
source_hash: "7538cfb0d012c5cac0951684f6473de5d06c7cfcb3c60f77c44d5931232449e7"
sequence: 321
generator: "outreach-garden: managed"
---

# 321 · RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models

## At a glance

- **Professor:** Tesca Fitzgerald
- **Institution:** Yale University
- **Paper:** [RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models](https://arxiv.org/abs/2606.23617)
- **Authors:** Ulas Berk Karli, Tesca Fitzgerald
- **Year:** 2026

## Paper overview

This paper addresses how robots using vision-language-action models can learn more efficiently by actively identifying uncertain states during task execution and collecting targeted recovery demonstrations. The approach improves robot adaptation to new tasks while avoiding forgetting previously learned skills.

### Why it matters

**Research problem:** Vision-Language-Action (VLA) models require fine-tuning when deployed to new tasks or environments. Traditional passive imitation learning for fine-tuning is inefficient because it collects data only after failures, wastes demonstrator effort on well-performed states, and lacks guidance on where supervision is most needed. Additionally, fine-tuning on new data risks catastrophic forgetting of prior skills.

**Why it matters:** Improving the efficiency and safety of robot learning is critical as robots are expected to adapt to novel objects, tasks, and environments in everyday life. Efficient active learning can reduce demonstration costs and improve robot performance, while continual learning methods are necessary to maintain previously acquired competencies.

**Key contributions:**

- An active data collection framework for autoregressive VLAs using INSIGHT to select uncertain states for recovery demonstrations.
- Empirical evaluation showing that uncertainty-guided active data collection outperforms passive start-state data collection.
- Comparison of online (first uncertain state) versus offline (all uncertain states) data collection, demonstrating online collection is more demonstration-efficient.
- Evaluation of continual learning techniques (replay and EWC) to balance adaptation to new data and retention of prior skills.
- Identification of open challenges and design lessons for active continual learning in VLAs.

## About the professor

**Tesca Fitzgerald** — Assistant Professor of Computer Science, Computer Science, Yale University.

Research interests: Broadly, my interests include interactive robot learning, cognitive robotics, human-robot interaction, transfer learning, and active learning.

### Research links

- [Faculty/profile page](https://cpsc.yale.edu/people/tesca-fitzgerald)
- [Professor website](https://www.tescafitzgerald.com/)
- [Resolved homepage](https://www.tescafitzgerald.com)
- [Google Scholar](https://scholar.google.com/citations?user=UTmj6K4AAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Continual Learning in Machine Learning
**The paper assumes:** machine learning continual learning methods, catastrophic forgetting, replay techniques, elastic weight consolidation
**Already in this field?** Skip this entirely if you already understand continual learning concepts and common strategies to prevent forgetting in neural networks.

This background focuses on continual learning in machine learning, a core topic for understanding how the paper tackles catastrophic forgetting and balances adaptation and retention in vision-language-action models. The rigorous course option provides a deep, structured university lecture series on continual learning and related meta-learning topics, while the fast track offers a concise, focused playlist of explainers specifically on continual learning methods and challenges. Choose the course for comprehensive mastery or the fast track for a targeted, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022](https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI) — Stanford Online · 17 videos · 21.5h across 17 episodes

**Watch only this:** Lectures 15 and 16: 'Stanford CS330 Deep Multi-Task & Meta Learning - Lifelong Learning I 2022 I Lecture 15' and 'Stanford CS330 Deep Multi-Task & Meta Learning - Frontiers and Open Challenges I 2022 I Lecture 16', about 2.5 hours total — these focus on lifelong/continual learning principles, challenges, and state-of-the-art methods.

*Why it unblocks this paper:* Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022 covers lifelong learning and continual learning in depth, including challenges like catastrophic forgetting and methods such as replay and regularization, directly relevant to the paper's continual learning evaluation.

*If you want all of it:* 21.5 hours across 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Continual Learning](https://www.youtube.com/playlist?list=PLEdpjt8KmmQMWVwz4us2TifyABRa0NvJJ) — Jiri Fajtl · 27 videos · 18.0h across the first 25 episodes

**Watch only this:** First 6 episodes covering intrinsic rewards, variational continual learning, enabling continual learning in neural networks, datasets and benchmarks, compositionality, and iCaRL, about 4.3 hours total — these provide a solid foundational overview of continual learning techniques and challenges.

*Why it unblocks this paper:* Jiri Fajtl's 'Continual Learning' playlist offers a clear, concise series of explainers on continual learning concepts, methods, and benchmarks, well-suited for quickly grasping the key ideas needed to understand the paper's continual learning contributions.

*If you want all of it:* 18 hours across the first 25 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the RECALL paper, start with foundational concepts in continual learning in robotics and uncertainty quantification in robot learning, as these underpin the paper's approach to mitigating forgetting and identifying uncertain states. Next, explore active learning for robot adaptation to grasp the strategy of targeted data collection. Then, study replay and elastic weight consolidation methods to understand how the paper addresses catastrophic forgetting. Finally, focus on the core concept of active continual learning in vision-language-action models, including the authors' own talk if available, to directly connect these foundations to the paper's novel contributions.

### Continual learning in robotics *(prerequisite)*
This section covers the principles and challenges of continual learning in robotics, focusing on how robots retain prior skills while adapting to new tasks. Understanding these concepts is essential to appreciate the paper's evaluation of continual learning strategies like replay and EWC.

*How the paper uses it:* The paper evaluates continual learning methods to mitigate catastrophic forgetting during fine-tuning of vision-language-action models.

▶ [Franziska Meier - Lifelong Learning for Robotics @ UCL DARK](https://www.youtube.com/watch?v=3SVT-Y10Zno) — UCL DARK · 47:41

### Uncertainty quantification in robot learning *(prerequisite)*
Uncertainty quantification methods enable robots to identify states where their predictions are unreliable. This knowledge is critical for understanding how the INSIGHT method selects high-uncertainty states for active recovery demonstration collection.

*How the paper uses it:* INSIGHT, the paper's uncertainty quantification method, guides active data collection by identifying uncertain states during robot rollouts.

▶ [CAIML18 - "Uncertainty Quantification in Computer Vision and Robotics" by Dr. Matias Valdenegro Toro](https://www.youtube.com/watch?v=1HSK_3H-Zds) — CologneAIML · 5 years ago

### Active learning for robot adaptation *(prerequisite)*
Active learning strategies improve robot adaptation efficiency by selectively querying for data where supervision is most needed. This section provides context for the paper's active data collection framework that targets uncertain states rather than passive data gathering.

*How the paper uses it:* The paper proposes an active data collection framework that outperforms passive methods by focusing on uncertain states for recovery demonstrations.

▶ [EI Seminar - Jason Ma - Recent Progress on Foundation ...](https://www.youtube.com/watch?v=JfZYtpEisoM) — MIT Embodied Intelligence · 52:56

### Replay and elastic weight consolidation *(prerequisite)*
Replay and elastic weight consolidation (EWC) are key continual learning techniques to prevent catastrophic forgetting. Understanding these methods is necessary to grasp the paper's comparative evaluation of strategies to balance adaptation and retention.

*How the paper uses it:* The paper compares replay-based data mixing and EWC to mitigate forgetting during fine-tuning of vision-language-action models.

▶ [Iterative Fine-Tuning and Data-Centric Model Updates](https://www.youtube.com/watch?v=yGviMde5NIA) — SH AI Academy · 21:29

### Active continual learning in vision-language-action models
This section focuses on the integration of active learning and continual learning specifically for vision-language-action models, the core topic of the paper. It connects foundational concepts to the paper's novel framework and empirical results.

*How the paper uses it:* The paper introduces an active continual learning framework for autoregressive vision-language-action models using uncertainty-guided recovery data collection.

▶ [Vision-Language-Action (VLA) Models Explained: One Model, Every Robot, Zero Retraining (2026)](https://www.youtube.com/watch?v=jnCog3oMxzM) — SH AI Academy · 10 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand the RECALL paper, starting with continual learning in robotics to grasp how robots retain skills while adapting, then uncertainty quantification to understand how the model identifies uncertain states, followed by active learning for robot adaptation to see how targeted data collection improves efficiency, and replay and elastic weight consolidation to learn methods that prevent forgetting. Finally, the path culminates with the core concept of active continual learning in vision-language-action models, directly relating to the paper's novel framework.

### Continual learning in robotics *(prerequisite)*
Continual learning enables robots to keep previously learned skills while acquiring new ones, avoiding the problem of catastrophic forgetting. This foundational knowledge helps understand how robots can adapt over time without losing prior capabilities.

*How the paper uses it:* The paper evaluates continual learning strategies like replay and EWC to mitigate forgetting during fine-tuning.

▶ [Continual Learning on Real Robots - Rupam Mahmood](https://www.youtube.com/watch?v=smOIJldYbhk) — Amii · 1:01:20

### Uncertainty quantification in robot learning *(prerequisite)*
Uncertainty quantification methods allow models to estimate how confident they are in their predictions, which is crucial for identifying when a robot might need help or additional data. Understanding this helps grasp how INSIGHT detects uncertain states for targeted recovery.

*How the paper uses it:* INSIGHT uses uncertainty quantification to identify high-uncertainty states during robot rollouts for active data collection.

▶ [CAIML18 - "Uncertainty Quantification in Computer Vision and Robotics" by Dr. Matias Valdenegro Toro](https://www.youtube.com/watch?v=1HSK_3H-Zds) — CologneAIML · 5 years ago

### Active learning for robot adaptation *(prerequisite)*
Active learning focuses on selectively querying the most informative data points to improve learning efficiency, reducing the need for exhaustive demonstrations. This concept explains why collecting recovery demonstrations at uncertain states is more efficient than passive data collection.

*How the paper uses it:* The paper proposes an active data collection framework that targets uncertain states to improve demonstration efficiency.

▶ [RSS 2021, Spotlight Talk 14: Active Learning of Abstract Plan ...](https://www.youtube.com/watch?v=NM3sv6hzx90) — Robotics Science and Systems · 5:04

### Replay and elastic weight consolidation *(prerequisite)*
Replay and elastic weight consolidation are continual learning techniques that help prevent catastrophic forgetting by either mixing old data during training or constraining parameter updates. Understanding these methods clarifies how the paper balances adaptation and retention.

*How the paper uses it:* The paper compares replay-based data mixing and EWC to mitigate forgetting during fine-tuning.

▶ [Iterative Fine-Tuning and Data-Centric Model Updates](https://www.youtube.com/watch?v=yGviMde5NIA) — SH AI Academy · 21:29

### Active continual learning in vision-language-action models
This concept combines active data collection and continual learning specifically for vision-language-action models, showing how robots can efficiently adapt to new tasks while retaining prior knowledge. It is the core of the RECALL paper's contribution.

*How the paper uses it:* The paper introduces an active continual learning framework for autoregressive VLAs using INSIGHT and continual learning methods.

▶ [Vision-Language-Action (VLA) Models Explained: One Model, Every Robot, Zero Retraining (2026)](https://www.youtube.com/watch?v=jnCog3oMxzM) — SH AI Academy · 10 days ago

## Already in your library

- [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the RECALL paper's core ideas. The beginner project reproduces a simple uncertainty-based active data collection mechanism in a simulated environment. The intermediate project implements the paper's INSIGHT uncertainty quantification and active recovery demonstration collection on a smaller simulated VLA task, comparing active versus passive data collection. The advanced project extends the method toward a stated future direction by integrating a more sophisticated continual learning technique to improve the plasticity-retention tradeoff in vision-language-action models.

### Beginner — Simulate Uncertainty-Guided Recovery State Selection
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models a robot executing a sequence of states with associated uncertainty scores. You implement a threshold-based selection of the first high-uncertainty state during a rollout to simulate online active recovery demonstration collection. You compare the number of selected states versus a naive random selection baseline.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of identifying high-uncertainty states online for targeted recovery data collection, a key contribution of the paper.

**Grounded in:** An active data collection framework for autoregressive VLAs using INSIGHT to select uncertain states for recovery demonstrations.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic simulated rollout data with uncertainty scores generated programmatically to mimic the paper's uncertainty signal.

**Build it:**

1. Write a Python script to simulate rollouts as sequences of states with random uncertainty scores.
2. Implement a function to select the first state exceeding a predefined uncertainty threshold (online recovery).
3. Implement a baseline function selecting random states for recovery demonstration.
4. Visualize and compare the number and position of selected states between methods.
5. Document how this simulates the paper's online active recovery state selection.

**Ships as:** A Jupyter notebook showing simulation code, plots comparing online uncertainty-based selection versus random baseline, and a README explaining the connection to the paper's active data collection.

**Stretch goal:** Add offline recovery selection by collecting all states above threshold and compare efficiency to online selection.

### Intermediate — Reimplement INSIGHT-Based Active Recovery Collection on LIBERO-10
*Effort: 2 weekends, ~20 hours*

You reimplement the core INSIGHT uncertainty quantification method described in the paper to identify uncertain states during robot rollouts on the LIBERO-10 simulation benchmark. You collect recovery demonstrations online (first uncertain state) and passively (start states), fine-tune a simple autoregressive VLA model on these datasets, and compare task success rates.

**Why it shows you understood the paper:** This project shows you can implement the paper's main active learning mechanism and reproduce its key result that uncertainty-guided online recovery data collection improves task success over passive data.

**Grounded in:** Empirical evaluation showing that uncertainty-guided active data collection outperforms passive start-state data collection.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** LIBERO-10 simulation benchmark as used in the paper; if unavailable, simulate a simplified VLA task environment with synthetic data.

**Build it:**

1. Implement or simulate an autoregressive VLA model architecture suitable for LIBERO-10 or a substitute environment.
2. Implement the INSIGHT uncertainty quantification method to score states during rollouts.
3. Collect recovery demonstration datasets online (first uncertain state) and passively (start states).
4. Fine-tune the model on each dataset separately and evaluate task success rates.
5. Plot and compare success metrics to demonstrate active collection benefits.

**Ships as:** A GitHub repo with code to run INSIGHT uncertainty scoring, collect recovery data, fine-tune the model, and evaluate success metrics, plus a README explaining the method and results.

**Stretch goal:** Add offline recovery collection (all uncertain states) and compare efficiency and performance to online collection.

### Advanced — Integrate Adapter-Based Continual Learning for Active Recovery in VLAs
*Effort: 3+ weeks*

You extend the paper's active continual learning framework by implementing an adapter-based continual learning method to mitigate catastrophic forgetting during fine-tuning on recovery demonstrations. You apply this to an autoregressive VLA model trained on LIBERO-10 or a substitute environment, comparing adapter-based continual learning to replay and EWC baselines in terms of task success and retention.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the plasticity-retention tradeoff and continual learning techniques in VLAs.

**Grounded in:** Evaluation of continual learning techniques (replay and EWC) to balance adaptation to new data and retention of prior skills; future direction exploring advanced continual learning techniques like adapters.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** LIBERO-10 simulation benchmark or a simulated VLA task environment with recovery demonstration data collected via INSIGHT.

**Build it:**

1. Implement or reuse the autoregressive VLA model and INSIGHT uncertainty scoring from the intermediate project.
2. Implement adapter modules integrated into the VLA model for continual learning.
3. Fine-tune the model on recovery data using adapter-based continual learning, replay-based data mixing, and EWC baselines.
4. Evaluate and compare task success on new and retained tasks to assess forgetting and adaptation.
5. Document results and analyze the plasticity-retention tradeoff improvements.

**Ships as:** A comprehensive GitHub repository with code for adapter-based continual learning in VLAs, evaluation scripts comparing methods, and a detailed README discussing implementation, results, and relation to the paper's limitations and future directions.

**Stretch goal:** Experiment with selective freezing or rehearsal buffers to further improve continual learning performance.

_The paper's authors released no code or datasets; LIBERO-10 is a simulation benchmark referenced but not publicly linked, so data and environment may need to be simulated or approximated._
