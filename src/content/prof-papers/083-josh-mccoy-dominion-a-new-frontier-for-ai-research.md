---
title: "083 · Dominion: A New Frontier for AI Research — Josh McCoy"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-josh-mccoy"
source_hash: "bb292402720ac9d0047432089bc8ae5998f98d4243d87e4b3ac575652f9797d0"
sequence: 83
generator: "outreach-garden: managed"
---

# 083 · Dominion: A New Frontier for AI Research

## At a glance

- **Professor:** Josh McCoy
- **Institution:** Univ. of California - Davis
- **Paper:** [Dominion: A New Frontier for AI Research](https://arxiv.org/pdf/2405.06846)
- **Authors:** Danny Halawi, Aron Sarmasi, Siena Saltzen, Joshua McCoy
- **Year:** 2024

## Paper overview

This paper proposes the deck-building game Dominion as a new benchmark for reinforcement learning (RL) research. The authors introduce a large dataset of over 2 million human-played Dominion games and present a baseline RL bot that outperforms existing heuristic bots and competes with the strongest known AI bot, Provincial. Dominion's unique mechanics, such as randomly selected card sets each game, create a complex and varied environment ideal for advancing AI methods.

### Why it matters

**Research problem:** Current AI benchmarks in games often lack the complexity and variability needed to push reinforcement learning methods further. Dominion, with its vast number of possible card combinations and strategic depth, is underutilized as an AI research benchmark.

**Why it matters:** Games have historically driven AI research by providing challenging environments. Dominion's unique features, including a huge variety of card sets and an active player community, offer a rich, complex domain that can help develop more general and adaptive AI systems.

**Key contributions:**

- Identification of Dominion as a suitable and rich benchmark for reinforcement learning research.
- Compilation and release of the Dominion Online Dataset with over 2 million human-played games.
- Development of a baseline RL bot that outperforms heuristic bots and competes with the strongest existing AI, Provincial.
- Analysis of Dominion's game complexity and strategic variability due to randomized card sets.

## About the professor

**Josh McCoy** — Assistant Professor, Computer Science, Cinema and Digital Media, Univ. of California - Davis.

Research interests: game technology, social science, artificial intelligence and design

### Research links

- [Faculty/profile page](https://faculty.engineering.ucdavis.edu/mccoy)
- [Professor website](http://joshmccoy.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** fundamental reinforcement learning concepts, Markov decision processes, Q-learning, deep Q-networks, policy evaluation and improvement
**Already in this field?** Skip this entirely if you already understand the basics of reinforcement learning algorithms and their application to sequential decision-making problems.

To understand the reinforcement learning (RL) methods used in the Dominion AI research paper, it is essential to grasp core RL concepts such as Markov decision processes, Q-learning, policy gradients, and exploration strategies. The rigorous course option offers a deep, structured university-level introduction to these topics, while the fast track provides a concise, intuition-driven overview suitable for quickly building foundational understanding before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-7 (Class Intro through Offline RL), about 7.5 hours — these cover foundational RL concepts, policy gradients, actor-critic methods, Q-learning, and offline RL, which are critical to understanding the paper's RL approach.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, authoritative course covering deep RL algorithms including Q-learning and exploration, directly relevant to the Rainbow DQN baseline bot and challenges discussed in the paper.

*If you want all of it:* All 19 episodes, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning for LLMs](https://www.youtube.com/playlist?list=PLs8w1Cdi-zvbUan-KlgwKN2CycndyKXXS) — Luis Serrano Academy · 6 videos · 2.5h across 6 episodes

**Watch only this:** Episodes 1, 2, and 6 (RLHF, PPO, and deep RL intro), about 1.2 hours — these episodes cover key RL training methods and deep Q-learning concepts relevant to the paper's baseline bot.

*Why it unblocks this paper:* Luis Serrano Academy's Reinforcement Learning for LLMs playlist offers clear, visual explanations of RL fundamentals including Q-networks and policy gradients, providing an accessible and focused introduction to the core ideas behind the paper's RL techniques.

*If you want all of it:* All 6 episodes, about 2.5 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Dominion: A New Frontier for AI Research," start by building a solid foundation in reinforcement learning and Deep Q-Networks (DQN), which underpin the baseline AI bot. Next, explore game state representation and benchmarking AI with complex games to appreciate the challenges and significance of Dominion as a research benchmark. Finally, focus on the core concept of Dominion as an AI benchmark, prioritizing the authors' own talk for direct insights.

### Reinforcement learning in games *(prerequisite)*
This section covers advanced university-level lectures on reinforcement learning (RL) applied to games, providing the theoretical and computational background necessary to understand the RL methods used in the paper. The selected Stanford Online lecture offers a comprehensive and rigorous treatment suitable for graduate-level readers.

*How the paper uses it:* The paper's baseline AI bot is built using reinforcement learning techniques, making a strong grasp of RL fundamentals essential.

▶ [Stanford CS234 Reinforcement Learning I Multi-Agent Game ...](https://www.youtube.com/watch?v=UgANzoWc0nc) — Stanford Online · 1:13:29

### Deep Q-Networks (DQN) *(prerequisite)*
Deep Q-Networks are the core algorithmic foundation for the baseline RL bot in Dominion. The chosen lecture from The Art of Intelligence provides a detailed and technical introduction to DQN, suitable for advanced readers seeking to understand the algorithmic details behind the paper's approach.

*How the paper uses it:* The baseline RL bot in the paper uses Rainbow DQN, an advanced variant of DQN, making understanding DQN crucial.

▶ [ML10_ Deep Q-Network (DQN): From Q-Learning to Deep ...](https://www.youtube.com/watch?v=J6ui0JBmr_8) — The Art of Intelligence · 26:16

### Game state representation *(prerequisite)*
Understanding how to represent complex game states is critical for modeling Dominion's variable card sets and strategic depth. The NPTEL lecture on state space search offers a rigorous academic perspective on state representation and search in AI, aligning well with the paper's focus on game complexity.

*How the paper uses it:* Dominion's complex and variable card sets require sophisticated state representations for effective AI modeling.

▶ [Lecture - 3 State Space Search](https://www.youtube.com/watch?v=M6V-TvwqwnU) — nptelhrd · 59:01

### Benchmarking AI with complex games *(prerequisite)*
This section contextualizes why Dominion's complexity makes it a valuable AI benchmark by examining other complex games used in AI research. The Microsoft Research talk on AI for imperfect-information games provides a high-level, research-focused discussion relevant to the paper's motivation.

*How the paper uses it:* The paper positions Dominion as a new, rich benchmark for AI research, similar to other complex games like poker.

▶ [AI for Imperfect-Information Games: Beating Top Humans in ...](https://www.youtube.com/watch?v=McV4a6umbAY) — Microsoft Research · 59:40

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational reinforcement learning concepts first, then covers game state representation and benchmarking AI with complex games to build context. Next, it explains Deep Q-Networks (DQN), the core algorithm used in the paper's baseline AI bot. Finally, it presents the Dominion AI benchmark talk for direct insight into the paper's novel contribution, enabling a clear understanding of how Dominion serves as a new frontier for AI research.

### Reinforcement learning in games *(prerequisite)*
Learn the basics of reinforcement learning (RL), focusing on how agents learn to make decisions by interacting with game environments. This foundation is essential to understand how AI bots improve through trial and error in complex games.

*How the paper uses it:* The paper uses reinforcement learning to develop a baseline AI bot that competes in Dominion.

▶ [Intro to Reinforcement Learning Tutorial | Kaggle](https://www.youtube.com/watch?v=3QdOTFtQ76U) — Kaggle · 57:35

### Game state representation *(prerequisite)*
Understand how complex game environments are modeled as states that an AI can perceive and act upon. Representing the game state effectively is critical for AI to handle Dominion's variable card sets and strategic depth.

*How the paper uses it:* Dominion's complex and variable card sets require careful game state representation for effective AI training.

▶ [Lecture - 3 State Space Search](https://www.youtube.com/watch?v=M6V-TvwqwnU) — nptelhrd · 59:01

### Benchmarking AI with complex games *(prerequisite)*
Explore why complex games serve as valuable benchmarks for AI research, highlighting the challenges and benefits of using games with rich strategic variability to push AI capabilities.

*How the paper uses it:* The paper argues Dominion's complexity and variability make it an ideal benchmark for advancing reinforcement learning.

▶ [AI for Imperfect-Information Games: Beating Top Humans in ...](https://www.youtube.com/watch?v=McV4a6umbAY) — Microsoft Research · 59:40

### Deep Q-Networks (DQN) *(prerequisite)*
Dive into Deep Q-Networks, a key reinforcement learning algorithm that combines Q-learning with deep neural networks to enable AI agents to learn optimal policies from high-dimensional inputs.

*How the paper uses it:* The baseline Dominion bot is implemented using Rainbow DQN, an advanced variant of DQN.

▶ [A friendly introduction to deep reinforcement learning, Q ...](https://www.youtube.com/watch?v=SgC6AZss478) — Luis Serrano Academy · 36:26

### Dominion AI benchmark talk *(the paper's own talk)*
Gain direct insight from the authors about why Dominion is a promising new frontier for AI research, including details on the dataset, baseline bot, and the game's unique challenges for AI.

*How the paper uses it:* This talk provides an overview of the paper's main contributions and the significance of Dominion as an AI benchmark.

▶ [Episode 13 - What Is Frontier AI?](https://www.youtube.com/watch?v=EJ79sQvE1lI) — Beyond The Breach · 2 weeks ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Dominion AI benchmark paper. The beginner project reproduces a simple analysis of Dominion game complexity using the paper's insights. The intermediate project implements a baseline RL agent inspired by the paper's Rainbow DQN bot on a simplified Dominion environment, comparing it to a heuristic baseline. The advanced project extends the RL bot to improve exploration or representation, addressing a stated limitation and exploring generalization to complex strategies or expansions.

### Beginner — Dominion Card Set Complexity Analysis
*Effort: a weekend, ~8 hours*

You build a script to analyze Dominion's combinatorial complexity by enumerating possible kingdom card sets and visualizing their distribution, inspired by the paper's claim about over 6·10^18 possible setups. You also create a simple dashboard showing how random card sets vary in strategic complexity based on card types.

**Why it shows you understood the paper:** This project shows you grasp the core motivation of the paper: Dominion's vast and variable game setups create a challenging AI benchmark. It demonstrates your ability to translate the paper's combinatorial claims into concrete data analysis.

**Grounded in:** Dominion's unique mechanic of randomly selecting 10 kingdom cards from over 350 creates over 6·10^18 possible game setups, requiring adaptive strategies.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas

**Data:** No external dataset needed; you simulate card set combinations based on the paper's description of Dominion's card pool.

**Build it:**

1. Extract the number of kingdom cards (350+) and the selection size (10) from the paper.
2. Write a Python script to compute the number of possible 10-card combinations from the card pool.
3. Classify cards into types (e.g., action, treasure, victory) based on paper descriptions or public Dominion card data.
4. Generate random samples of card sets and analyze the distribution of card types per set.
5. Visualize the combinatorial counts and card type distributions using matplotlib.
6. Write a README explaining how this analysis relates to the paper's motivation for using Dominion as a benchmark.

**Ships as:** A Jupyter Notebook and Python scripts with plots showing Dominion card set combinatorial complexity and variability, with explanations linking to the paper's motivation.

**Stretch goal:** Add a simple heuristic metric estimating strategic complexity per card set based on card types and compare distributions.

### Intermediate — Baseline RL Bot for Simplified Dominion Environment
*Effort: 2 weekends, ~20 hours*

You implement a simplified Dominion environment focusing on buying decisions and train a Rainbow DQN agent to learn buying policies. You compare its performance against a heuristic baseline bot on a small set of fixed card sets, reporting win rates similar to the paper's metrics.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method—training an RL bot with Rainbow DQN on Dominion buying decisions—and evaluates it against heuristics, demonstrating your grasp of the RL approach and benchmarking methodology.

**Grounded in:** Development of a baseline RL bot that outperforms heuristic bots and competes with the strongest existing AI, Provincial.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym (custom environment), numpy, matplotlib

**Data:** No official Dominion Online Dataset available; you simulate a small fixed set of Dominion card sets and game states based on the paper's base game description.

**Build it:**

1. Design a simplified Dominion environment focusing on buying decisions with fixed card sets and simplified game states.
2. Implement heuristic baseline buying strategies based on paper heuristics.
3. Implement a Rainbow DQN agent using PyTorch to learn buying policies in this environment.
4. Train the RL agent and evaluate its win rate against the heuristic baseline over multiple episodes.
5. Plot learning curves and win rate comparisons similar to the paper's Table 2.
6. Document the environment design, training procedure, and evaluation results in a README.

**Ships as:** A GitHub repo with a simplified Dominion environment, heuristic baseline, Rainbow DQN agent code, training scripts, evaluation results, and plots comparing RL and heuristic performance.

**Stretch goal:** Extend the environment to include action card decisions or add random card sets per episode to increase variability.

### Advanced — Improved RL Bot with Enhanced Exploration for Complex Dominion Strategies
*Effort: 3+ weeks*

You extend the baseline RL bot by incorporating advanced exploration techniques (e.g., curiosity-driven exploration or improved state representations) to better handle complex engine strategies that the original RL bot struggled with. You evaluate improvements on a set of challenging card sets and analyze generalization to unseen card combinations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the RL challenges in Dominion and the ability to innovate on the baseline method to improve adaptability and generalization.

**Grounded in:** The RL bot struggles against certain complex strategies (e.g., engine combos) due to limited exploration during training; future directions include improving exploration and state representations.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym (custom environment), numpy, matplotlib, scikit-learn

**Data:** Simulated Dominion base game states with focus on complex engine strategy card sets derived from paper descriptions; no official dataset available.

**Build it:**

1. Review the baseline RL bot implementation and identify exploration limitations.
2. Implement advanced exploration strategies such as intrinsic motivation or curiosity-driven rewards.
3. Enhance game state representation using feature engineering or autoencoder-based embeddings for card effects.
4. Retrain the RL agent with these improvements on challenging card sets involving engine strategies.
5. Evaluate performance gains against the baseline RL bot and heuristic bots, reporting win rates and qualitative behavior.
6. Document methodology, experiments, and analysis in a detailed README.

**Ships as:** A GitHub repo with improved RL agent code, training and evaluation scripts, and a comprehensive report on handling complex Dominion strategies with enhanced exploration and representation.

**Stretch goal:** Experiment with transfer learning to Dominion expansions or multi-player settings as suggested in the paper's future directions.
