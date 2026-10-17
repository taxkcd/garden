---
title: "679 · A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2 — Damon L. Woodard"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-damon-l-woodard"
source_hash: "08af1c9e37aa676febced5e880ce3b8e66a849dfdcac8eaf3b00353024a33311"
sequence: 679
generator: "outreach-garden: managed"
---

# 679 · A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2

## At a glance

- **Professor:** Damon L. Woodard
- **Institution:** University of Florida
- **Paper:** [A Performance Comparison of Multi-Agent Reinforcement Learning Algorithms using PyMARL2](https://journals.flvc.org/UFJUR/article/download/138769/145473)
- **Authors:** Connor McLoon, Stephen E. Wormald, Olivia P. Dizon-Paradis, Damon L. Woodard
- **Year:** 2025

## Paper overview

This paper compares the performance of several leading multi-agent reinforcement learning (MARL) algorithms using a standardized framework called PyMARL2 and the StarCraft Multi-Agent Challenge version 2 (SMACv2). The study evaluates how well different algorithms perform in simulated StarCraft II battles, focusing on their ability to learn effective team strategies under consistent conditions. The results highlight differences in algorithm performance and demonstrate the value of PyMARL2 for reproducible and trustworthy benchmarking in MARL research.

### Why it matters

**Research problem:** There is a lack of standardized performance comparison studies among top-performing multi-agent reinforcement learning algorithms, which affects reproducibility and cross-examination of results in the field.

**Why it matters:** Without standardized benchmarking and performance comparisons, it is difficult to trust and reproduce results across different MARL studies, slowing progress and innovation in multi-agent AI applications.

**Key contributions:**

- Demonstrated a modular and reproducible benchmarking workflow using PyMARL2 and SMACv2.
- Conducted extensive performance comparisons of five MARL algorithms including baseline and state-of-the-art models.
- Provided insights into model performance differences across scenarios and identified issues like gradient explosion in some models.
- Released a unified repository combining model components for easy configuration and experimentation.
- Highlighted the importance of stochasticity and environment complexity in MARL benchmarking.

## About the professor

**Damon L. Woodard** — Professor | Director, Herbert Wertheim College of Engineering, University of Florida.

Research interests: application of artificial intelligence to various problems in national security and law enforcement

### Research links

- [Faculty/profile page](https://experts.ufl.edu/experts/damon.woodard/)
- [Professor website](https://damonwoodard.com/)
- [Resolved homepage](https://damonwoodard.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multi-agent reinforcement learning
**The paper assumes:** multi-agent reinforcement learning algorithms, Markov decision processes, decentralized training with centralized execution, value function factorization
**Already in this field?** Skip this entirely if you already understand the fundamentals of multi-agent reinforcement learning and its common algorithmic frameworks.

This background provides two viewing options to understand multi-agent reinforcement learning (MARL) as it relates to the paper comparing MARL algorithms using PyMARL2 and SMACv2. The rigorous course offers a deep, structured university-level foundation in deep reinforcement learning concepts, including multi-agent aspects, while the fast track provides a focused, shorter series specifically on multi-agent reinforcement learning principles and algorithms. Choose the course for comprehensive mastery or the fast track for a quicker, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 3 (Policy Gradients), 4 (Actor-Critic Methods), 6 (Q-Learning), 9 (RL for LLMs), and 18 (Frontiers), about 5.5 hours total — these cover core RL algorithms, value-based methods, and recent advances relevant to multi-agent settings.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a top-tier university course covering foundational and advanced deep RL methods, including Q-learning and policy gradients, which underpin MARL algorithms like QMIX and IQL used in the paper. It provides rigorous theoretical and practical insights essential for understanding the paper's methodology and results.

*If you want all of it:* About 20.6 hours across 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multi-Agent Reinforcement Learning Course](https://www.youtube.com/playlist?list=PLYqXmZaxvwmzikjw-cNyZfI051ms05czB) — Jason Eckstein · 22 videos · 33.5h across 22 episodes

**Watch only this:** Episodes 7 (Policy-Based Learning), 8 (Deep Reinforcement Learning, Q-learning and DQN), 11 (Centralized and Action-Value Critics), and 12 (Value Decomposition Networks), about 6 hours total — these episodes cover key MARL algorithms and value decomposition relevant to the paper.

*Why it unblocks this paper:* Jason Eckstein's Multi-Agent Reinforcement Learning Course directly addresses MARL topics, including value decomposition networks and independent learning, which are central to the paper's algorithm comparisons. It is a concise, focused series that quickly builds understanding of MARL concepts and challenges.

*If you want all of it:* About 33.5 hours across 22 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper comparing multi-agent reinforcement learning (MARL) algorithms using PyMARL2, start with foundational knowledge of reinforcement learning fundamentals to grasp the core learning principles. Next, explore benchmarking and evaluation methods in MARL to appreciate the importance of standardized comparisons. Then, study the PyMARL2 framework itself, which is the modular platform used for the experiments. Finally, focus on the core concept of multi-agent reinforcement learning, including the authors' own talk and related advanced research presentations to gain direct insights into the algorithms and their performance in complex environments.

### Reinforcement Learning Fundamentals *(prerequisite)*
This section covers the foundational principles of reinforcement learning, including the mathematical framework and key algorithms. Understanding these basics is essential before delving into multi-agent extensions and benchmarking. The selected lecture from Princeton University by Chi Jin offers a rigorous, graduate-level introduction suitable for advanced readers.

*How the paper uses it:* The paper builds on reinforcement learning algorithms as the base for multi-agent extensions compared using PyMARL2.

▶ [Lecture 1: Foundations of Reinforcement Learning](https://www.youtube.com/watch?v=QwTBtKWmA0M) — Chi Jin @ Princeton · 1:21:00

### Benchmarking and Evaluation in MARL *(prerequisite)*
This section focuses on standardized evaluation methods and benchmarking practices in multi-agent reinforcement learning, which are critical for interpreting and trusting comparative results. The Simons Institute talk by Kalesha Bullard provides an advanced research perspective on MARL benchmarking challenges and methodologies.

*How the paper uses it:* The paper addresses the lack of standardized performance comparisons in MARL and uses PyMARL2 to enable reproducible benchmarking.

▶ [Multi-Agent Reinforcement Learning Towards Zero-Shot Communication](https://www.youtube.com/watch?v=IhH-mNaDI_8) — Simons Institute for the Theory of Computing · 57:50 · Streamed 4y ago

### PyMARL2 Framework *(prerequisite)*
Understanding the PyMARL2 framework is crucial as it is the modular and standardized platform used to implement and compare the MARL algorithms in the paper. While no dedicated PyMARL2 talk is available, the advanced research talk by Natasha Jaques covers multi-agent reinforcement learning frameworks and recent developments relevant to PyMARL2's modular approach.

*How the paper uses it:* PyMARL2 is the modular framework used to implement and benchmark the MARL algorithms evaluated in the study.

▶ [Multi-agent Reinforcement Learning (MARL) for LLMs](https://www.youtube.com/watch?v=brbZ3NgWZpo) — Natasha Jaques · 58:11 · 1mo ago

### Multi-Agent Reinforcement Learning
This core section covers the central topic of the paper: multi-agent reinforcement learning. It includes advanced talks by leading researchers that discuss state-of-the-art MARL algorithms, challenges, and applications. The chosen talk by Natasha Jaques provides a comprehensive and recent overview of MARL techniques, including those applicable to large language models, which parallels the multi-agent coordination challenges studied in the paper.

*How the paper uses it:* The paper compares several leading MARL algorithms and their performance in complex environments using PyMARL2.

▶ [Prof. Natasha Jaques: Multi-agent Reinforcement Learning (MARL) for LLMs](https://www.youtube.com/watch?v=uCkjoGIrVRM) — AI Agent Frontier · 47:05 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts of reinforcement learning first, then builds up to multi-agent reinforcement learning (MARL), followed by understanding benchmarking and evaluation methods critical for comparing MARL algorithms. Finally, it covers the PyMARL2 framework used in the paper to implement and compare MARL algorithms. This order ensures a beginner gains the necessary background before diving into the core methods and tools used in the paper.

### Reinforcement Learning Fundamentals *(prerequisite)*
Start by understanding the basics of reinforcement learning (RL), where an agent learns to make decisions by interacting with an environment to maximize cumulative rewards. This foundation is essential because MARL algorithms extend RL concepts to multiple agents learning simultaneously.

*How the paper uses it:* The paper compares multi-agent RL algorithms, which build upon single-agent reinforcement learning principles.

▶ [MIT 6.S091: Introduction to Deep Reinforcement Learning (Deep RL)](https://www.youtube.com/watch?v=zR11FLZ-O9M) — Lex Fridman · 1:07:30 · 7y ago

### Multi-Agent Reinforcement Learning
Learn how reinforcement learning extends to multiple agents that interact and learn in a shared environment, requiring coordination or competition. This concept is central to the paper as it evaluates different MARL algorithms in complex scenarios.

*How the paper uses it:* The paper evaluates several MARL algorithms on StarCraft II scenarios to benchmark their performance.

▶ [What Is Multi-Agent Reinforcement Learning? | MARL | Lecture 01](https://www.youtube.com/watch?v=3RPjbaLX2Z0) — Concept in Motion · 13:00 · 3w ago

### Benchmarking and Evaluation in MARL *(prerequisite)*
Understanding how to fairly evaluate and compare MARL algorithms is crucial. This includes standardized environments, metrics like win rates, and reproducible experimental setups to ensure trustworthy results.

*How the paper uses it:* The paper uses PyMARL2 and SMACv2 to provide a standardized benchmarking framework for MARL algorithms.

▶ [Multi-Agent Reinforcement Learning Towards Zero-Shot Communication](https://www.youtube.com/watch?v=IhH-mNaDI_8) — Simons Institute for the Theory of Computing · 57:50 · Streamed 4y ago

## Already in your library

- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [How to train Multi Agent Collaborative Agents with Reinforcement Learning (CTDE Explained)](https://www.youtube.com/watch?v=Ji5VTbH7i08) — also for: PLATO: Pointer Learner for Agent and Task Openness (Leen-Kiat Soh)
- [Multi-Agent Reinforcement Learning (Part I)](https://www.youtube.com/watch?v=RCu-nU4_TQM) — also for: NestRL: A Nested Training Regime for Mutual Adaptation in Human-AI Teaming (Sarath Sreedharan)
- [Stanford CS234 Reinforcement Learning I Multi-Agent Game ...](https://www.youtube.com/watch?v=UgANzoWc0nc) — also for: Dominion: A New Frontier for AI Research (Josh McCoy)
- [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Stefano V. Albrecht: Deep Reinforcement Learning for Multi-Agent Interaction](https://www.youtube.com/watch?v=WsXJmy7s8tU) — also for: Social Theory Should Be a Structural Prior for Agentic AI: A Formal Framework for Multi-Agent Social Systems (Kathleen M. Carley)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's benchmarking of multi-agent reinforcement learning (MARL) algorithms using PyMARL2 and SMACv2. The beginner project focuses on reproducing a key performance metric visualization from the paper using familiar tools. The intermediate project involves reimplementing and comparing core MARL algorithms on a simplified environment to grasp the benchmarking workflow. The advanced project extends the paper by addressing a stated limitation, expanding the benchmarking framework to a new MARL environment, showcasing your ability to innovate beyond the original study.

### Beginner — Reproduce Win Rate Comparison Chart from Paper
*Effort: a weekend, ~8 hours*

You build a Python Jupyter notebook that reproduces the paper's win rate comparison chart for QMIX, VDN, DMIX, DDN, and IQL algorithms on one SMACv2 scenario using publicly available benchmark results or simulated data. The notebook will visualize average win rates over training timesteps, mimicking the paper's Figure or Table that compares algorithm performance.

**Why it shows you understood the paper:** This project shows you understand the key performance metrics used in the paper and how to interpret and visualize MARL benchmarking results, demonstrating familiarity with the paper's core evaluation approach.

**Grounded in:** Key results: 'QMIX and VDN performed similarly to their distributional variants DMIX and DDN, while IQL showed significantly lower performance.'

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib, Pandas

**Data:** Use the paper's reported win rate data extracted from figures or tables; if unavailable, simulate plausible win rate curves based on the paper's descriptions.

**Build it:**

1. Extract or approximate win rate data for the five algorithms from the paper's figures or text.
2. Create a Jupyter notebook that loads this data into Pandas dataframes.
3. Plot win rate curves over training timesteps using Matplotlib, replicating the paper's visualization style.
4. Add descriptive captions and comments explaining the significance of the results.
5. Document the notebook with references to the paper's corresponding figure and results.

**Ships as:** A Jupyter notebook with clear plots comparing algorithm win rates, demonstrating your ability to reproduce and interpret key paper results.

**Stretch goal:** Add additional metrics such as agent casualty rates or scenario difficulty comparisons to deepen the analysis.

### Intermediate — Reimplement Core MARL Algorithms on SMACv2 Using PyMARL2
*Effort: 1-3 weekends*

You set up the PyMARL2 framework and reimplement the training and evaluation of QMIX and IQL algorithms on a single SMACv2 map with constrained action spaces. You run experiments to measure win rates and compare your results to the paper's reported performance, producing plots and a report.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the paper's core benchmarking framework (PyMARL2), understand MARL algorithm implementations, and replicate the paper's experimental methodology and metrics.

**Grounded in:** Approach: 'The authors used PyMARL2, a modular and standardized MARL development framework, combined with SMACv2 scenarios to train and evaluate five MARL algorithms under equivalent conditions.'

**Tech stack:** Python 3.11, PyTorch, PyMARL2 (https://github.com/benellis3/pymarl2), StarCraft II environment via SMACv2, Matplotlib

**Data:** Use the SMACv2 benchmark scenarios as provided by PyMARL2 and the StarCraft II environment; no additional data needed.

**Build it:**

1. Clone and install PyMARL2 and its dependencies following the official repository instructions.
2. Set up the StarCraft II environment and SMACv2 scenarios required by PyMARL2.
3. Configure and run training experiments for QMIX and IQL algorithms on a selected SMACv2 map with constrained action spaces.
4. Collect training logs and evaluate win rates over training timesteps.
5. Plot and compare your results to the paper's reported performance metrics.
6. Write a README documenting your setup, methodology, and comparison to the paper.

**Verified links from the paper:**

- <https://github.com/benellis3/pymarl2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing your PyMARL2 setup, training scripts, evaluation plots, and a report comparing your results to the paper's findings.

**Stretch goal:** Add training and evaluation of distributional variants DMIX and DDN to compare with baseline algorithms.

### Advanced — Extend PyMARL2 Benchmarking to a New MARL Environment
*Effort: a few weeks*

You extend the PyMARL2 framework to support an additional MARL environment beyond SMACv2, such as the Multi-Agent Particle Environment (MPE) or SMAC-Exp, implementing environment wrappers and adapting training pipelines. You benchmark QMIX and IQL on this new environment, analyze performance differences, and discuss implications for robustness and generalization.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by expanding benchmarking beyond SMACv2, demonstrating deep understanding of MARL frameworks, environment integration, and experimental rigor.

**Grounded in:** Future directions: 'Expanding PyMARL2 to support additional MARL environments beyond SMACv2 and DEPP, such as SMAC-Exp, VMAS, or MPE.'

**Tech stack:** Python 3.11, PyTorch, PyMARL2 (https://github.com/benellis3/pymarl2), Selected MARL environment (e.g., MPE)

**Data:** Use the selected MARL environment's standard benchmark scenarios; these are publicly available and serve as substitutes for SMACv2 data.

**Build it:**

1. Select a new MARL environment compatible with Python (e.g., MPE or SMAC-Exp).
2. Develop environment wrappers and adapters to integrate the new environment into PyMARL2's modular framework.
3. Modify training and evaluation scripts to support the new environment.
4. Train QMIX and IQL algorithms on selected scenarios from the new environment.
5. Collect and analyze performance metrics such as win rates and agent casualties.
6. Compare results to those reported in the paper for SMACv2, discussing differences and challenges.
7. Document your extension, challenges faced, and insights gained in a detailed README.

**Verified links from the paper:**

- <https://github.com/benellis3/pymarl2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your extended PyMARL2 codebase, training scripts, benchmark results, and a comprehensive report on extending benchmarking to a new MARL environment.

**Stretch goal:** Investigate and implement strategies to improve model stability (e.g., gradient clipping) to address issues like gradient explosion observed in the paper.
