---
title: "128 · Learning to Optimize Job Shop Scheduling Under Structural Uncertainty — Jing Yuan"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jing-yuan"
source_hash: "f98c366f9dc0ccb58d55a6139c3635ab21d5490484aec8497018d7b6e5958244"
sequence: 128
generator: "outreach-garden: managed"
---

# 128 · Learning to Optimize Job Shop Scheduling Under Structural Uncertainty

## At a glance

- **Professor:** Jing Yuan
- **Institution:** University of North Texas
- **Paper:** [Learning to Optimize Job Shop Scheduling Under Structural Uncertainty](https://arxiv.org/abs/2601.21389)
- **Authors:** Rui Zhang, Jianwei Niu, Xuefeng Liu, Shaojie Tang, Jing Yuan
- **Year:** 2026

## Paper overview

This paper addresses the challenge of scheduling jobs in manufacturing environments where the sequence of operations is uncertain and can change dynamically. The authors propose a new deep reinforcement learning framework called UP-AAC that uses an asymmetric actor-critic architecture to provide more stable learning signals by separating the actor's and critic's views of uncertainty. They also introduce an uncertainty perception model to help the actor make better decisions by understanding the overall risk. Their method outperforms traditional heuristics and standard reinforcement learning approaches on benchmark problems.

### Why it matters

**Research problem:** The Job-Shop Scheduling Problem (JSSP) under structural uncertainty, where the processing route of jobs is not fixed but probabilistic, causing challenges in decision making due to incorrect credit assignment in standard reinforcement learning frameworks.

**Why it matters:** Efficient scheduling in manufacturing and logistics is critical for reducing completion times and costs. Structural uncertainty is common in real-world settings, such as varying fabrication paths based on intermediate quality, making traditional deterministic scheduling methods inadequate.

**Key contributions:**

- Introduction of UP-AAC, a novel DRL framework for JSSP with structural uncertainty featuring an asymmetric actor-critic architecture.
- Development of the Uncertainty Perception Model (UPM) that incorporates heuristic risk priors and attention mechanisms to quantify and embed global uncertainty.
- Extensive experiments demonstrating state-of-the-art performance and robustness compared to traditional heuristics and standard AC methods.
- A training procedure combining offline uncertainty analysis with online policy learning using hindsight reconstruction.

## About the professor

**Jing Yuan** — Assistant Professor, Computer Science and Engineering, University of North Texas.

Research interests: optimization, social computing and machine learning

### Research links

- [Faculty/profile page](https://computerscience.engineering.unt.edu/people/faculty/jing-yuan)
- [Professor website](https://sites.google.com/view/jing-yuan-unt)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep Reinforcement Learning
**The paper assumes:** foundations of deep reinforcement learning, actor-critic methods, policy gradient algorithms, and variance reduction techniques
**Already in this field?** Skip this entirely if you already have a solid understanding of deep reinforcement learning concepts and actor-critic algorithms.

To understand the deep reinforcement learning framework UP-AAC proposed in the paper, it is essential to grasp actor-critic architectures, policy gradient methods, and variance reduction techniques under uncertainty. The rigorous course option provides a comprehensive, university-level deep dive into these topics, while the fast track offers a concise, intuition-focused introduction to actor-critic methods and policy gradients. Choose the rigorous course for a thorough foundation or the fast track for a quick but solid conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 3 (Policy Gradients), 4 (Actor-Critic Methods), and 5 (Off-Policy Actor Critic), about 3.25 hours total — these cover the core actor-critic and policy gradient concepts needed to understand the asymmetric actor-critic design.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning by Stanford Online is a top-tier university course that covers actor-critic methods, policy gradients, and advanced RL topics directly relevant to the UP-AAC framework. It includes dedicated lectures on actor-critic architectures and policy optimization, essential for understanding the paper's contributions.

*If you want all of it:* Approximately 20.6 hours across all 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lecture DeepRL1 - Introduction to Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PL7SYVykTNxXaaTsGrJ6dswVGemRC1F_ZZ) — Gerstner Lab · 6 videos · 1.1h across 6 episodes

**Watch only this:** Episodes DeepRL1.1 (Introduction to Deep Reinforcement Learning), DeepRL1.2 (From Policy Gradient to Deep Reinforcement Learning), and DeepRL1.3 (Actor Critic Architecture and Advantage Actor Critic), about 33 minutes total — these episodes cover the foundational ideas of policy gradients and actor-critic methods.

*Why it unblocks this paper:* Gerstner Lab's 'Lecture DeepRL1 - Introduction to Deep Reinforcement Learning' is a concise, well-structured series focusing on the actor-critic architecture and policy gradient methods. It provides a clear and visual introduction to the key concepts underlying the paper's method in about one hour.

*If you want all of it:* About 1.1 hours across all 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Learning to Optimize Job Shop Scheduling Under Structural Uncertainty," start by building foundational knowledge on the Job Shop Scheduling Problem (JSSP) and its challenges under uncertainty. Then, study the core reinforcement learning techniques, especially actor-critic methods, and the role of attention mechanisms in modeling uncertainty. Finally, focus on the paper's central contribution: the asymmetric actor-critic architecture and the novel UP-AAC framework for scheduling under structural uncertainty.

### Job Shop Scheduling under Uncertainty *(prerequisite)*
This section introduces the Job Shop Scheduling Problem and the challenges posed by structural uncertainty, where job routes are probabilistic and not fixed. Understanding this problem setting is crucial to appreciate why traditional scheduling methods fail and why new approaches like UP-AAC are needed.

*How the paper uses it:* The paper addresses JSSP under structural uncertainty, making this foundational knowledge essential.

▶ [[Scheduling Seminar] Laurent Houssin (ENAC, UT) Flow-shop and job-shop robust scheduling problems](https://www.youtube.com/watch?v=S8atVTl4RDo) — Scheduling seminar · Streamed 7 months ago

### Deep Reinforcement Learning for Combinatorial Optimization *(prerequisite)*
This section covers the application of deep reinforcement learning (DRL) to combinatorial optimization problems, providing the theoretical and practical background for using DRL in scheduling tasks. It explains how DRL can learn policies to solve complex optimization problems efficiently.

*How the paper uses it:* The paper proposes a DRL framework (UP-AAC) for solving JSSP under uncertainty.

▶ [Deep Reinforcement Learning for Online Combinatorial ...](https://www.youtube.com/watch?v=PoMrl5rjQ3U) — Vector Institute · 59:25

### Actor-Critic Methods in Reinforcement Learning *(prerequisite)*
Actor-critic methods form the backbone of many reinforcement learning algorithms by combining policy-based and value-based approaches. This section explains the core concepts and algorithms behind actor-critic methods, which is necessary to understand the asymmetric actor-critic architecture introduced in the paper.

*How the paper uses it:* The UP-AAC framework is based on an asymmetric actor-critic architecture to improve learning stability under uncertainty.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=oejFZShW9hU) — Stanford Online · 1:03:30

### Attention Mechanisms and Risk Modeling *(prerequisite)*
Attention mechanisms allow models to focus on relevant parts of input data, and risk modeling helps quantify uncertainty. This section explains these techniques, which are combined in the paper's Uncertainty Perception Model (UPM) to embed global risk information guiding the actor's decisions.

*How the paper uses it:* The paper uses attention mechanisms and heuristic risk priors in the UPM to improve policy robustness.

▶ [Stanford CS224N: NLP with Deep Learning | Spring 2024 ...](https://www.youtube.com/watch?v=NxH0Y78xcF4) — Stanford Online · 1:16:27

### Paper-specific talk
This section focuses on the core contribution of the paper: the UP-AAC framework with its asymmetric actor-critic architecture and uncertainty perception model. Watching a talk by the authors or a detailed seminar on this topic provides direct insight into their novel approach and experimental results.

*How the paper uses it:* This is the paper's central topic and the authors' own presentation would be ideal, but no direct author talk was found; thus, a closely related advanced lecture on job shop scheduling is chosen.

▶ [Operations Research 09D: Job Shop Scheduling Problem](https://www.youtube.com/watch?v=UGvc-qujB-o) — Yong Wang · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to job shop scheduling under uncertainty. We start with the basics of job shop scheduling and the challenges posed by uncertainty, then cover deep reinforcement learning and actor-critic methods that underpin the solution. Finally, we explore attention mechanisms for risk modeling and the paper's core asymmetric actor-critic architecture to grasp the novel UP-AAC framework.

### Job Shop Scheduling under Uncertainty *(prerequisite)*
Learn what job shop scheduling is and how uncertainty in job routes complicates scheduling decisions. This sets the stage for understanding why traditional methods struggle and why new approaches are needed.

*How the paper uses it:* The paper addresses scheduling where job processing routes are probabilistic and unknown in advance, causing structural uncertainty.

▶ [[Scheduling Seminar] Laurent Houssin (ENAC, UT) Flow-shop and job-shop robust scheduling problems](https://www.youtube.com/watch?v=S8atVTl4RDo) — Scheduling seminar · Streamed 7 months ago

### Deep Reinforcement Learning for Combinatorial Optimization *(prerequisite)*
Understand how deep reinforcement learning (DRL) can be applied to complex optimization problems like scheduling. This includes learning policies to make sequential decisions under uncertainty.

*How the paper uses it:* The paper uses a deep reinforcement learning framework to optimize scheduling policies under uncertain job routes.

▶ [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — Alexander Amini · 2 years ago

### Actor-Critic Methods in Reinforcement Learning *(prerequisite)*
Get a clear intuition for actor-critic algorithms, which combine policy learning (actor) and value estimation (critic) to improve learning stability and efficiency in reinforcement learning.

*How the paper uses it:* The UP-AAC framework builds on an actor-critic architecture to handle uncertainty in scheduling decisions.

▶ [What is Actor-Critic?](https://www.youtube.com/watch?v=oDdPcEanLwY) — Pourquoi (布瓜的世界) · 11:50

### Attention Mechanisms and Risk Modeling *(prerequisite)*
Learn how attention mechanisms help models focus on important parts of input data, and how they can be used to embed and quantify risk information globally.

*How the paper uses it:* The paper’s Uncertainty Perception Model uses attention mechanisms to embed global risk features guiding the actor's decisions.

▶ [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — Google Cloud Tech · 5:34 · 3 years ago

### Asymmetric Actor-Critic Architecture
Explore the novel asymmetric actor-critic design where the actor and critic have different views of uncertainty to reduce variance and improve credit assignment in learning.

*How the paper uses it:* This is the core innovation of the paper’s UP-AAC framework to stabilize learning under structural uncertainty in job shop scheduling.

▶ [Learning to Fly in Seconds](https://www.youtube.com/watch?v=NRD43ZA1D-4) — ARPL UC Berkeley · 4:49


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the UP-AAC framework for job shop scheduling under structural uncertainty. The beginner project focuses on reproducing a core mechanism of the paper—the asymmetric actor-critic architecture—on a small synthetic example using familiar tools. The intermediate project involves reimplementing the full UP-AAC method on a simplified scheduling environment, comparing it against a baseline heuristic, and reporting makespan metrics. The advanced project extends the paper by exploring one of its future directions: adapting the asymmetric actor-critic and hindsight reconstruction approach to a social computing domain with structural uncertainty, showcasing your ability to transfer and innovate beyond the original manufacturing context.

### Beginner — Simulate Asymmetric Actor-Critic on a Small Job Shop Example
*Effort: a weekend, ~8 hours*

You build a minimal Python simulation of a small job shop scheduling problem with structural uncertainty, implementing the asymmetric actor-critic (AAC) architecture described in the paper. The actor learns from stochastic states, while the critic learns from hindsight-reconstructed deterministic states. You visualize training curves showing variance reduction compared to a symmetric baseline.

**Why it shows you understood the paper:** This project demonstrates you understand the core innovation of the paper—the AAC architecture and hindsight reconstruction—and can implement it faithfully on a toy problem, showing the mechanism that stabilizes learning under uncertainty.

**Grounded in:** Introduction of UP-AAC, a novel DRL framework for JSSP with structural uncertainty featuring an asymmetric actor-critic architecture.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib

**Data:** Synthetic small-scale job shop scheduling environment with probabilistic routing simulated according to the paper's description of structural uncertainty.

**Build it:**

1. Implement a small job shop environment with 3 jobs and 3 machines, where job routes are probabilistic and revealed only after decisions.
2. Implement a standard actor-critic reinforcement learning agent as a baseline.
3. Implement the asymmetric actor-critic architecture where the actor receives stochastic states and the critic receives hindsight-reconstructed deterministic states.
4. Train both agents and plot training curves comparing variance and learning stability.
5. Write a README explaining the AAC mechanism and how your results illustrate variance reduction.

**Ships as:** A GitHub repo with code, training plots, and a README explaining the AAC architecture and its effect on variance in a toy JSSP under uncertainty.

**Stretch goal:** Add a simple uncertainty perception model (UPM) that embeds heuristic risk features to guide the actor's decisions.

### Intermediate — Reimplement UP-AAC on a Simplified Job Shop Scheduling Benchmark
*Effort: 2-3 weekends, ~20 hours*

You reimplement the full UP-AAC framework from the paper, including the asymmetric actor-critic architecture and uncertainty perception model, applied to a simplified job shop scheduling benchmark with structural uncertainty. You compare your method against a simple priority dispatching heuristic baseline and report average makespan and CVaR metrics similar to the paper.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's core method and evaluation on a smaller scale, demonstrating comprehension of both the algorithmic innovations and the evaluation metrics used to measure robustness and performance.

**Grounded in:** Extensive experiments demonstrating state-of-the-art performance and robustness compared to traditional heuristics and standard AC methods.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook, matplotlib

**Data:** Synthetic job shop scheduling instances with probabilistic routing generated according to the paper's structural uncertainty model; no official dataset released, so you simulate data based on paper descriptions.

**Build it:**

1. Implement or reuse the small job shop environment with structural uncertainty and probabilistic job routes.
2. Implement the UP-AAC framework: asymmetric actor-critic architecture with hindsight reconstruction and the uncertainty perception model using heuristic risk priors and attention.
3. Implement a baseline priority dispatching rule (e.g., shortest processing time first).
4. Train UP-AAC and baseline on multiple instances and uncertainty levels.
5. Evaluate and compare average makespan and CVaR metrics, plotting results.
6. Document your implementation details, experimental setup, and results in a detailed README.

**Ships as:** A GitHub repo with a full UP-AAC implementation on a simplified benchmark, comparison plots against a heuristic baseline, and a README explaining the method and results.

**Stretch goal:** Add ablation studies removing either the AAC or UPM components to show their impact on performance.

### Advanced — Adapt UP-AAC to Social Computing Scheduling with Structural Uncertainty
*Effort: 3-4 weeks*

You extend the UP-AAC framework to a social computing domain where scheduling decisions under structural uncertainty affect social welfare outcomes (e.g., task assignment in volunteer coordination with uncertain task sequences). You adapt the asymmetric actor-critic and hindsight reconstruction approach to this new domain, implement a domain-specific uncertainty perception model, and evaluate robustness and fairness metrics.

**Why it shows you understood the paper:** This project demonstrates deep understanding by transferring the paper's novel algorithmic approach beyond manufacturing to a new domain aligned with Professor Yuan's research interests, addressing a stated future direction and showing creativity and research potential.

**Grounded in:** Exploring more generalizable models that can handle varying instance sizes without retraining; Extending the hindsight reconstruction principle to other combinatorial optimization problems with uncertainty.

**Tech stack:** Python 3.11, PyTorch, NetworkX, Jupyter Notebook, matplotlib

**Data:** Synthetic social computing scheduling data simulating uncertain task sequences in volunteer or resource allocation scenarios, created based on domain knowledge and structural uncertainty principles from the paper.

**Build it:**

1. Research a social computing scheduling problem with structural uncertainty, such as volunteer task assignment with uncertain task sequences.
2. Design a synthetic environment simulating this problem with probabilistic task routes.
3. Adapt the UP-AAC framework's asymmetric actor-critic architecture and hindsight reconstruction to this environment.
4. Develop a domain-specific uncertainty perception model incorporating social risk heuristics.
5. Train and evaluate your model against a baseline heuristic and a standard actor-critic method, measuring robustness and fairness metrics.
6. Write a comprehensive report linking your adaptation to the paper's methods and discussing challenges and results.

**Ships as:** A GitHub repo with code and documentation showing UP-AAC adapted to a social computing scheduling problem, evaluation results, and a discussion of the method's generalizability.

**Stretch goal:** Incorporate historical data or online learning to continuously improve the uncertainty perception model as suggested in the paper's future directions.

_The paper's authors did not release code or datasets, so all data must be simulated based on the paper's descriptions of structural uncertainty in job shop scheduling._
