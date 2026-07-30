---
title: "083 · Dominion: A New Frontier for AI Research — Josh McCoy"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-josh-mccoy"
source_hash: "d3df149a0986a796c053a14745b5cdb52e4ad9c6fb6f2f63f8629abddd6efe93"
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
