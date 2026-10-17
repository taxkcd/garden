---
title: "730 · AdaChain: A Learned Adaptive Blockchain — Mohammad Javad Amiri"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mohammad-javad-amiri"
source_hash: "eeb813582f4f4e758408d4f4b07b462a5d175930852c08aa8480ea917b80b524"
sequence: 730
generator: "outreach-garden: managed"
---

# 730 · AdaChain: A Learned Adaptive Blockchain

## At a glance

- **Professor:** Mohammad Javad Amiri
- **Institution:** Stony Brook University
- **Paper:** [AdaChain: A Learned Adaptive Blockchain](https://arxiv.org/pdf/2211.01580)
- **Authors:** Chenyuan Wu, Bhavana Mehta, Mohammad Javad Amiri, Ryan Marcus, Boon Thau Loo
- **Year:** 2023

## Paper overview

AdaChain is a blockchain system that uses reinforcement learning to automatically select and switch between different permissioned blockchain architectures to optimize transaction throughput under changing workloads. It adapts dynamically to workload and hardware variations without manual tuning, improving performance significantly compared to fixed blockchain designs.

### Why it matters

**Research problem:** Permissioned blockchain systems have diverse architectures that perform variably depending on workload characteristics and hardware. Selecting a single fixed architecture leads to suboptimal performance, especially in dynamic Blockchain-as-a-Service (BaaS) environments with fluctuating workloads. The problem is how to automatically and securely adapt blockchain architecture at runtime to maximize throughput.

**Why it matters:** BaaS providers and users face performance degradation when using a fixed blockchain architecture that does not fit their dynamic workloads. Manual tuning is costly, slow, and often infeasible due to the large configuration space and changing hardware. An adaptive system can improve throughput, reduce operational overhead, and better support diverse applications.

**Key contributions:**

- First blockchain system to automatically adapt architecture to dynamic workloads using reinforcement learning.
- A novel multi-architecture switching protocol that securely transitions between blockchain architectures at runtime.
- Comprehensive analysis of how different blockchain architectures perform under varying workloads and hardware.
- Prototype implementation and evaluation demonstrating quick convergence to optimal architectures and significant throughput improvements over fixed architectures.

## About the professor

**Mohammad Javad Amiri** — Assistant Professor, Computer Science, Stony Brook University.

Research interests: the intersection of data management and distributed systems, focusing on distributed transaction processing, consensus protocols, and blockchains

### Research links

- [Faculty/profile page](https://www3.cs.stonybrook.edu/~amiri)
- [Lab website](https://www.cs.stonybrook.edu/~seemore)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** foundations of reinforcement learning, multi-armed bandit problems, Thompson sampling, contextual bandits, exploration-exploitation tradeoff
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals and multi-armed bandit algorithms including Thompson sampling.

This background playlist selection focuses on Reinforcement Learning (RL), which is central to understanding AdaChain's adaptive blockchain architecture selection via contextual multi-armed bandits and Thompson sampling. The rigorous course provides a deep and structured dive into RL algorithms and theory, suitable for readers seeking comprehensive mastery. The fast track offers a concise, intuition-driven animated series that quickly builds foundational understanding through visual examples, ideal for readers with limited time or those new to RL concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos

**Watch only this:** Lectures 1-7 (Class Intro through Offline RL), about 7.5 hours — covering foundational RL concepts, policy gradients, actor-critic methods, and contextual bandits relevant to AdaChain's learning approach.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a university-level course that covers key RL concepts including exploration-exploitation trade-offs, policy gradients, actor-critic methods, and model-based RL, all relevant to AdaChain's use of Thompson sampling and contextual bandits.

*If you want all of it:* All 19 episodes, about 20.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning Explained – Animated Examples](https://www.youtube.com/playlist?list=PLgcKMlJueAM5OK104-hP_wBpOjZCHGfTf) — Reinforcement Learning Explained–Animated Learning · 9 videos · 0.2h across 9 episodes

**Watch only this:** Episodes 1-5 (A Car Learns to Steer Around a Bull through AI Learns the Best Cannon Angle), about 20 minutes — these cover core RL concepts and the two-armed bandit problem central to AdaChain's method.

*Why it unblocks this paper:* Reinforcement Learning Explained – Animated Examples provides clear, visual intuition about RL fundamentals including multi-armed bandits and learning from delayed rewards, which helps quickly grasp AdaChain's adaptive learning mechanism without heavy theory.

*If you want all of it:* All 9 episodes, about 20 minutes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand AdaChain, start with foundational knowledge on permissioned blockchain architectures and distributed consensus protocols, which underpin the system's design and correctness guarantees. Then study reinforcement learning with a focus on multi-armed bandit methods, as AdaChain uses Thompson sampling to adaptively select blockchain architectures. Finally, explore the authors' own talk for direct insights into AdaChain's novel adaptive blockchain system and its runtime architecture switching.

### Permissioned blockchain architectures *(prerequisite)*
This section covers the design and consensus mechanisms of permissioned blockchains, which are the types of blockchain architectures AdaChain dynamically switches between. Understanding these architectures is crucial to grasp why different designs perform variably under different workloads and hardware.

*How the paper uses it:* AdaChain adapts among multiple permissioned blockchain architectures to optimize throughput.

▶ [Lecture 14: Permissioned Blockchain – I (Basics)](https://www.youtube.com/watch?v=ZrWKTjjtZYU) — NPTEL IIT Kharagpur · 32:28 · 8y ago

### Distributed consensus protocols *(prerequisite)*
Distributed consensus protocols ensure correctness and serializability in distributed systems, which is essential for AdaChain's secure runtime switching between blockchain architectures. This section explains consensus fundamentals and algorithms like Raft that AdaChain relies on.

*How the paper uses it:* AdaChain's correctness depends on the consensus protocol and its multi-architecture switching protocol.

▶ [Distributed Systems 6.1: Consensus](https://www.youtube.com/watch?v=rN6ma561tak) — Martin Kleppmann · 18:15 · 5y ago

### Reinforcement learning multi-armed bandit *(prerequisite)*
AdaChain formulates blockchain architecture selection as a contextual multi-armed bandit problem solved via Thompson sampling. This section explains the theory and practice of Thompson sampling and multi-armed bandits, providing the machine learning foundation for AdaChain's adaptive decision-making.

*How the paper uses it:* AdaChain uses Thompson sampling reinforcement learning to adaptively select blockchain architectures.

▶ [Thompson Sampling for Machine Learning - Ruben Mak](https://www.youtube.com/watch?v=wcCSAbcj5Q0) — PyData · 34:37 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand AdaChain, start by learning the basics of permissioned blockchain architectures and distributed consensus protocols, which form the foundation of blockchain systems. Next, grasp the principles of adaptive systems in distributed computing to appreciate runtime adaptation to changing workloads. Then, study reinforcement learning with a focus on multi-armed bandits and Thompson sampling, the core method AdaChain uses to select blockchain architectures dynamically. This progression builds from blockchain fundamentals to the machine learning techniques that enable AdaChain's adaptive optimization.

### Permissioned blockchain architectures *(prerequisite)*
Permissioned blockchains are blockchain systems where access is restricted to known participants, enabling different consensus mechanisms and performance trade-offs compared to public blockchains. Understanding these architectures helps you see what kinds of blockchain designs AdaChain switches between to optimize throughput.

*How the paper uses it:* AdaChain dynamically selects among different permissioned blockchain architectures to optimize performance under varying workloads.

▶ [Lecture 14: Permissioned Blockchain – I (Basics)](https://www.youtube.com/watch?v=ZrWKTjjtZYU) — NPTEL IIT Kharagpur · 32:28 · 8y ago

### Distributed consensus protocols *(prerequisite)*
Distributed consensus protocols allow multiple nodes in a network to agree on a single data value or transaction order despite failures or network delays. This ensures correctness and consistency in blockchain systems, especially important when AdaChain switches architectures at runtime.

*How the paper uses it:* AdaChain maintains correctness and strong serializability during architecture switching through consensus and switching protocols.

▶ [Distributed Consensus and Data Replication strategies on the server](https://www.youtube.com/watch?v=GeGxgmPTe4c) — Gaurav Sen · 15:48 · 7y ago

### Adaptive systems in distributed computing *(prerequisite)*
Adaptive distributed systems monitor their environment and adjust their behavior dynamically to optimize performance or reliability. This concept underpins AdaChain’s ability to adapt blockchain architecture automatically in response to workload and hardware changes.

*How the paper uses it:* AdaChain is an adaptive blockchain system that changes its architecture at runtime to maximize throughput.

▶ [Distributed Systems and Sensing | Professor Julie McCann (Lecture 1)](https://www.youtube.com/watch?v=OYJHQ3BzRCE) — University of St Andrews · 1:08:15 · 6y ago

### Reinforcement learning multi-armed bandit *(prerequisite)*
Multi-armed bandits are a reinforcement learning framework for balancing exploration and exploitation when choosing among multiple options with uncertain rewards. Thompson sampling is a popular algorithm for this problem, enabling efficient learning of the best choice over time.

*How the paper uses it:* AdaChain formulates blockchain architecture selection as a contextual multi-armed bandit problem solved via Thompson sampling reinforcement learning.

▶ [Thompson sampling, one armed bandits, and the Beta distribution](https://www.youtube.com/watch?v=nkyDGGQ5h60) — Luis Serrano Academy · 12:40 · 5y ago

## Already in your library

- [Multi-Armed Bandit : Data Science Concepts](https://www.youtube.com/watch?v=e3L4VocZnnQ) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Multi-Armed Bandits: A Cartoon Introduction - DCBA #1](https://www.youtube.com/watch?v=bkw6hWvh_3k) — also for: Svalinn: Overload Control in Large-Scale Servers with Multiple Resource Bottlenecks (Ahmed Saeed)
- ["Raft - The Understandable Distributed Protocol" by Ben Johnson (2013)](https://www.youtube.com/watch?v=ro2fU8_mr2w) — also for: Blockplane: A Global-Scale Byzantizing Middleware (Faisal Nawab)
- [Distributed Consensus: Definition & Properties of Consensus, Steps & Fault-Tolerance in Consen. ALG.](https://www.youtube.com/watch?v=wMrLPtyU_dE) — also for: Obfuscated Consensus (James Aspnes)
- [Lecture 1: Introduction](https://www.youtube.com/watch?v=cQP8WApzIQQ) — also for: Analysis of a Memory-Efficient Self-stabilizing BFS Spanning Tree Construction (Lawrence L. Larmore)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of AdaChain's adaptive blockchain system. The beginner project reproduces a core mechanism of AdaChain's architecture switching protocol on a small scale. The intermediate project builds on the authors' released code to implement and evaluate AdaChain's reinforcement learning approach for adaptive architecture selection. The advanced project extends AdaChain by addressing one of its stated limitations, exploring adaptation to heterogeneous hardware environments.

### Beginner — Simulate AdaChain's Architecture Switching Protocol
*Effort: a weekend, ~8 hours*

You build a simplified simulation of AdaChain's multi-architecture switching protocol that securely transitions between two permissioned blockchain architectures while maintaining transaction correctness. The simulation models transaction processing episodes and switches architectures based on a fixed schedule, ensuring serializability.

**Why it shows you understood the paper:** This project demonstrates your grasp of AdaChain's novel runtime architecture switching protocol and its correctness guarantees, a key contribution of the paper.

**Grounded in:** A novel multi-architecture switching protocol that securely transitions between blockchain architectures at runtime.

**Tech stack:** Python 3.11, asyncio, pytest

**Data:** No external data needed; you simulate transaction workloads and architecture states.

**Build it:**

1. Implement two simple mock blockchain architectures that process transactions with different throughput characteristics.
2. Simulate transaction episodes where each architecture processes a batch of transactions.
3. Implement a protocol to switch from one architecture to another between episodes, ensuring no transaction is lost or reordered.
4. Verify correctness by asserting serializability and consistency of committed transactions across switches.
5. Write tests to demonstrate switching correctness and throughput differences.

**Ships as:** A Python simulation repository with README explaining the switching protocol, correctness tests, and example output showing architecture switches without violating serializability.

**Stretch goal:** Add a simple heuristic to switch architectures based on simulated workload features instead of a fixed schedule.

### Intermediate — Run and Extend AdaChain's Adaptive Architecture Selection
*Effort: 2-3 weekends, ~20 hours*

You clone and run the AdaChain prototype from the authors' GitHub repository, reproduce their adaptive architecture selection experiments on a small scale, and extend it by adding a simple baseline that selects architectures randomly. You compare throughput metrics between AdaChain's RL-based selection and the baseline.

**Why it shows you understood the paper:** This project shows you can work with the actual AdaChain codebase, understand its reinforcement learning formulation, and evaluate its performance gains over fixed or naive baselines, directly engaging with the paper's core method and results.

**Grounded in:** Prototype implementation and evaluation demonstrating quick convergence to optimal architectures and significant throughput improvements over fixed architectures.

**Tech stack:** Python 3.11, scikit-learn, Git, Docker (optional)

**Data:** Use the workload feature data and blockchain transaction logs provided or simulated as per the AdaChain repository instructions.

**Build it:**

1. Clone the AdaChain repository from https://github.com/chenyuanwu/AdaChain and set up the environment.
2. Run the provided experiments to reproduce throughput improvements under dynamic workloads.
3. Implement a random architecture selection baseline that chooses blockchain architectures uniformly at random each episode.
4. Compare throughput and convergence speed metrics between AdaChain's RL approach and the random baseline.
5. Document your findings and include plots or tables comparing the methods.

**Verified links from the paper:**

- <https://github.com/chenyuanwu/AdaChain> — released by the paper's authors

**Ships as:** A forked AdaChain repository with added baseline code, experiment scripts, and a README reporting comparative results and insights.

**Stretch goal:** Modify the AdaChain learning algorithm to incorporate a simple epsilon-greedy exploration strategy and evaluate its impact.

### Advanced — Adaptive Blockchain Architecture Selection for Heterogeneous Hardware
*Effort: 3-4 weeks*

You extend AdaChain's learning framework to handle heterogeneous hardware environments where nodes have varying resource capacities. This involves modifying workload feature extraction to include hardware heterogeneity, adapting the RL model to consider these features, and evaluating performance improvements over the original homogeneous assumption.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, demonstrating deep comprehension of AdaChain's design and the ability to innovate by extending its applicability to more realistic and challenging deployment scenarios.

**Grounded in:** AdaChain assumes a homogeneous hardware environment where nodes have similar resources.

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow (optional for RL model), Docker, Git

**Data:** Simulate heterogeneous hardware environments by varying node resource parameters in the AdaChain workload simulation; no public dataset is provided for this scenario.

**Build it:**

1. Study AdaChain's workload feature extraction and RL model to understand how hardware features are currently represented.
2. Design and implement new features capturing hardware heterogeneity (e.g., CPU speed, memory, network latency per node).
3. Modify the AdaChain RL training pipeline to incorporate these new features for architecture selection.
4. Simulate heterogeneous hardware environments and run experiments comparing the original AdaChain and your extended version.
5. Analyze throughput and adaptation quality, documenting improvements or challenges.
6. Prepare a detailed README explaining your extension, experimental setup, and results.

**Verified links from the paper:**

- <https://github.com/chenyuanwu/AdaChain> — released by the paper's authors

**Ships as:** An extended AdaChain codebase branch with heterogeneous hardware support, experiment scripts, and a comprehensive report on performance and adaptation.

**Stretch goal:** Explore robustness of your extended system against adversarial manipulation of hardware feature reports.

_The AdaChain repository may require non-trivial setup and understanding of distributed blockchain architectures; ensure you have sufficient environment resources and time to explore the codebase before starting the intermediate and advanced projects._
