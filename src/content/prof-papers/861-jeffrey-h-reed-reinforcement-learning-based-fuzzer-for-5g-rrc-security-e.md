---
title: "861 · Reinforcement Learning-Based Fuzzer for 5G RRC Security Evaluation — Jeffrey H. Reed"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jeffrey-h-reed"
source_hash: "271d8013f4c78b448e2c3978b8b56d94bcfe9817ae338461bc845bfdd6b2eaa0"
sequence: 861
generator: "outreach-garden: managed"
---

# 861 · Reinforcement Learning-Based Fuzzer for 5G RRC Security Evaluation

## At a glance

- **Professor:** Jeffrey H. Reed
- **Institution:** Virginia Tech
- **Paper:** [Reinforcement Learning-Based Fuzzer for 5G RRC Security Evaluation](https://vtechworks.lib.vt.edu/bitstreams/7337d1d2-a144-4bce-82dc-c2d8bf994399/download)
- **Authors:** Dhairya Parikh, Dimitri A. Dessources, Nishith D. Tripathi, Jeffrey H. Reed, Eric W. Burger
- **Year:** 2026

## Paper overview

This paper presents a novel security testing framework for 5G networks, focusing on the Radio Resource Control (RRC) protocol layer. The authors developed a reinforcement learning (RL) based fuzzer that simulates user equipment to send mutated RRC messages to a 5G base station, learning over time which mutations cause the most system stress or failures. The approach adapts dynamically using system feedback like CPU usage and thread count to uncover vulnerabilities more efficiently than traditional fuzzing methods. Experiments in a simulated 5G environment show the RL fuzzer finds protocol anomalies and can induce crashes, demonstrating its effectiveness for proactive 5G security evaluation.

### Why it matters

**Research problem:** 5G networks, especially the RRC protocol layer, have complex, stateful interactions that create a broad attack surface vulnerable to denial-of-service, unauthorized access, and protocol-level exploits. Traditional fuzzing tools lack the ability to adaptively generate meaningful test cases for such complex protocols, limiting their effectiveness in uncovering deep vulnerabilities.

**Why it matters:** The RRC layer is critical for connection management and security in 5G networks. Vulnerabilities here can lead to severe consequences such as service disruption, unauthorized access, and privacy breaches. With the increasing deployment of 5G and open radio access networks (O-RAN), rigorous and adaptive security testing is essential to protect cellular infrastructure and emerging applications.

**Key contributions:**

- Development of a reinforcement learning-based adaptive fuzzer tailored for 5G RRC protocol evaluation.
- Integration of system-level performance metrics as feedback signals guiding fuzzing input generation.
- Demonstration of the RL fuzzer's ability to induce high CPU usage, thread count anomalies, and reproducible protocol-handling failures in a simulated 5G environment.
- A deterministic proof-of-concept case study showing reproducible RRC/NGAP protocol anomalies triggered by specific fuzzing mutations.
- Comparison with traditional fuzzers (Radamsa and random mutation) showing superior efficiency and stress induction by the RL-based approach.

## About the professor

**Jeffrey H. Reed** — Willis G. Worcester Professor, Bradley Department of Electrical and Computer Engineering, Virginia Tech.

Research interests: Software and Cognitive Radio, Cellular Communication Systems, Digital Signal Processing, Software Define Radio, Cognitive Radio, Smart Antennas, Wireless Security, Novel Security Mechanisms

### Research links

- [Faculty/profile page](https://ece.vt.edu/people/profile/reed.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** fundamental reinforcement learning concepts, Q-learning algorithm, Markov decision processes, epsilon-greedy policies
**Already in this field?** Skip this entirely if you already have a solid understanding of reinforcement learning fundamentals and Q-learning.

This background focuses on reinforcement learning (RL), the core technique used in the paper's adaptive fuzzing framework for 5G RRC security evaluation. The rigorous course option provides a deep, structured understanding of RL algorithms including Q-learning and policy adaptation, essential for grasping the paper's methodology. The fast track offers a concise, implementation-focused introduction to Deep Q-Learning, enabling quick practical insight into the key RL concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1 through 7 (Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro through Lecture 7: Offline RL), about 7.5 hours — this covers RL basics, Q-learning, policy methods, and exploration-exploitation balance needed to understand the paper's RL agent.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive and authoritative university course that covers fundamental RL algorithms including Q-learning and epsilon-greedy policies, directly relevant to the paper's RL-based fuzzing approach.

*If you want all of it:* All 19 lectures, about 20.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Implement Deep Q-Learning (DQN) in PyTorch - Beginner Reinforcement Learning Tutorial](https://www.youtube.com/playlist?list=PL58zEckBH8fCMIVzQCRSZVPUp3ZAVagWi) — Johnny Code · 11 videos · 1.5h across 11 episodes

**Watch only this:** Episodes 1 through 5 (Implement Deep Q-Learning with PyTorch and Train Flappy Bird! through Implement the Target Network), about 40 minutes — these cover the fundamentals of Q-learning, epsilon-greedy action selection, and target networks relevant to the paper's approach.

*Why it unblocks this paper:* Johnny Code's Deep Q-Learning tutorial series offers a concise, practical introduction to Deep Q-Networks with step-by-step coding explanations, covering core concepts like epsilon-greedy policies and Q-learning that underpin the paper's RL fuzzer.

*If you want all of it:* All 11 episodes, about 1.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reinforcement learning-based fuzzing for 5G RRC security evaluation, start with foundational knowledge on the 5G Radio Resource Control protocol, which is the target of the fuzzing. Then build understanding of fuzz testing techniques for network protocols and the reinforcement learning algorithms (Q-learning and epsilon-greedy policies) that underpin the adaptive fuzzing approach. Next, explore system-level performance metrics used as feedback signals in security testing. Finally, focus on the paper's core concept by reviewing the authors' own talk or the closest advanced material on their RL-based fuzzing framework.

### 5G Radio Resource Control protocol *(prerequisite)*
Understanding the 5G RRC protocol is essential as it is the protocol layer targeted by the fuzzing framework. This protocol manages connection setup, maintenance, and security in 5G networks, so grasping its structure and functions provides context for the vulnerabilities the paper aims to uncover.

*How the paper uses it:* The paper focuses on fuzzing the 5G RRC protocol to evaluate its security.

▶ [Understanding 5G NR RRC Protocol](https://www.youtube.com/watch?v=oR2DPh6UHbk) — 𝙋𝙧𝙖𝙨𝙖𝙣𝙩𝙝𝘿𝙖𝙞𝙡𝙮𝙄𝙣𝙛𝙡𝙪𝙚𝙣𝙘𝙚 · 1y ago

### Fuzz testing techniques for network protocols *(prerequisite)*
Fuzz testing is a dynamic testing method to discover vulnerabilities by sending malformed or mutated inputs. Understanding stateful fuzzing approaches and challenges in network protocol testing is critical to appreciate the novelty and effectiveness of the RL-based adaptive fuzzing method proposed in the paper.

*How the paper uses it:* The paper develops a reinforcement learning-based fuzzer tailored for 5G RRC protocol evaluation.

▶ [L2Fuzz: Discovering Bluetooth L2CAP Vulnerabilities Using Stateful Fuzz Testing](https://www.youtube.com/watch?v=lrc-mJTw1yM) — DSN Conference · 4y ago

### Q-learning and epsilon-greedy policies *(prerequisite)*
Q-learning and epsilon-greedy policies are fundamental reinforcement learning algorithms used to balance exploration and exploitation. Understanding these concepts is necessary to grasp how the RL agent in the paper learns to generate effective fuzzing mutations based on system feedback.

*How the paper uses it:* The RL agent in the paper uses tabular Q-learning with an epsilon-greedy policy to guide fuzzing input generation.

▶ [Deep Q Networks | Q Learning | Reinforcement Learning | Epsilon-Greedy Policy | Python | AI Gym](https://www.youtube.com/watch?v=nCgd9lrmYwE) — Spencer Pao · 4y ago

### System-level performance metrics in security testing *(prerequisite)*
System-level metrics such as CPU usage, thread count, and network I/O are used as feedback signals to guide the RL agent's learning process. Understanding how these metrics reflect system stress and anomalies is important to appreciate the reward function design in the paper.

*How the paper uses it:* The paper integrates system-level performance metrics as reinforcement learning feedback to guide fuzzing.

▶ [Creating a Security Metrics Program: How to Measure Success - SANS ICS Security Summit 2019](https://www.youtube.com/watch?v=gIsLP_Dtv7M) — SANS Institute · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's reinforcement learning-based fuzzing framework for 5G RRC security evaluation. It starts with the basics of the 5G Radio Resource Control protocol, then covers fuzz testing techniques for network protocols, followed by reinforcement learning fundamentals focusing on Q-learning and epsilon-greedy policies. Finally, it presents the core paper authors' insights on the RL fuzzer approach, enabling a clear grasp of how adaptive fuzzing improves 5G security testing.

### 5G Radio Resource Control protocol *(prerequisite)*
Learn what the 5G RRC protocol is, its role in managing connections between user equipment and base stations, and why it is critical for 5G network security. Understanding this protocol layer is essential because the paper targets fuzzing specifically at RRC messages to uncover vulnerabilities.

*How the paper uses it:* The paper focuses on fuzzing the 5G RRC protocol to find security weaknesses in connection management.

▶ [Understanding 5G NR RRC Protocol](https://www.youtube.com/watch?v=oR2DPh6UHbk) — 𝙋𝙧𝙖𝙨𝙖𝙣𝙩𝙝𝘿𝙖𝙞𝙡𝙮𝙄𝙣𝙛𝙡𝙪𝙚𝙣𝙘𝙚 · 1y ago

### Fuzz testing techniques for network protocols *(prerequisite)*
Gain foundational knowledge about fuzz testing, a dynamic security testing method that sends mutated inputs to software to find bugs and vulnerabilities. This section explains challenges and approaches specific to fuzzing network protocols, which are stateful and complex.

*How the paper uses it:* The paper builds on fuzz testing by applying it adaptively to the 5G RRC protocol using reinforcement learning.

▶ [Protocol Fuzzing](https://www.youtube.com/watch?v=jqZ9xB_Puuk) — Mobileum · 10mo ago

### Q-learning and epsilon-greedy policies *(prerequisite)*
Understand the key reinforcement learning algorithm Q-learning and the epsilon-greedy policy that balances exploration and exploitation. These concepts explain how the RL agent in the paper learns which fuzzing mutations cause the most system stress.

*How the paper uses it:* The RL fuzzer uses Q-learning with an epsilon-greedy policy to adaptively select RRC message mutations based on system feedback.

▶ [Exploration Exploitation Dilemma Greedy Policy and Epsilon Greedy Policy - Reinforcement Learning](https://www.youtube.com/watch?v=uAB9WOQCSxw) — Pankaj Kumar Porwal · 6y ago

## Already in your library

- [Fuzzing (fuzz testing) 101: Lessons from cyber security expert Dr. David Brumley](https://www.youtube.com/watch?v=17ebHty54T4) — also for: A Study of the Reliability of Agentic AI-Generated Programs (Barton P. Miller)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the reinforcement learning-based fuzzing framework for 5G RRC security evaluation. Starting with a simple simulation of system feedback and fuzzing input mutation, you then implement a core RL fuzzing method and compare it to a baseline. Finally, you extend the approach by incorporating protocol-semantic feedback into the reward function, addressing a key limitation noted in the paper.

### Beginner — Simulated RL Fuzzer with System Metric Feedback
*Effort: a weekend, ~8 hours*

You build a simplified RL agent that simulates fuzzing of a protocol by mutating messages and receiving discretized system-level feedback (CPU usage, thread count) from a mock environment. The agent uses tabular Q-learning with an epsilon-greedy policy to learn which mutations cause higher system stress. This reproduces the core feedback loop of the paper's RL fuzzer in a minimal, controlled setting.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key mechanism of using system-level metrics as reinforcement signals to guide fuzzing input generation, including discretization of continuous metrics and Q-learning with exploration-exploitation balance.

**Grounded in:** The system discretizes continuous metrics into states and applies Q-learning with an epsilon-greedy policy to balance exploration and exploitation.

**Tech stack:** Python 3.11, NumPy, Jupyter Notebook

**Data:** Simulated system metrics generated by a simple stochastic environment modeling CPU and thread count changes in response to fuzzing mutations.

**Build it:**

1. Implement a mock environment that simulates system metrics (CPU usage, thread count) responding to fuzzing mutations.
2. Discretize continuous system metrics into finite states.
3. Implement a tabular Q-learning agent with an epsilon-greedy policy to select mutations.
4. Run training episodes where the agent mutates inputs and receives rewards based on simulated system stress.
5. Visualize learning progress and action distribution shifts over episodes.

**Ships as:** A Jupyter notebook showing the RL agent learning to favor mutations that increase simulated system stress, with plots of reward progression and action selection.

**Stretch goal:** Add a simple anomaly detection signal as an additional reward component to mimic protocol-semantic feedback.

### Intermediate — Reimplementation of RL-Based 5G RRC Fuzzer Core Method
*Effort: 2 weekends, ~20 hours*

You reimplement the core RL fuzzing framework described in the paper using Python. This includes simulating RRC message mutations, integrating system-level feedback metrics (CPU, thread count, network I/O), discretizing states, and applying tabular Q-learning with epsilon-greedy policy. You compare the RL fuzzer's performance against a simple random mutation baseline by measuring time-to-first anomaly and peak CPU usage.

**Why it shows you understood the paper:** This project proves you can reproduce the paper's main method and evaluation approach, including the adaptive fuzzing guided by system metrics and the demonstrated efficiency gains over baseline fuzzers.

**Grounded in:** The authors designed an adaptive fuzzing framework that uses reinforcement learning to generate and mutate RRC messages sent from simulated user equipment to a 5G base station (gNB). The RL agent receives feedback from system-level metrics (CPU usage, thread count, network I/O) to iteratively learn which mutations cause the most impactful anomalies or crashes.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated 5G RRC message mutations and system feedback generated by a custom environment mimicking the paper's simulated 5G setup (UERANSIM and Open5GS are referenced but not required to run).

**Build it:**

1. Design a mutation scheme for RRC messages based on paper descriptions.
2. Implement a simulated environment that returns system-level metrics in response to fuzzing inputs.
3. Discretize metrics and implement tabular Q-learning with epsilon-greedy policy.
4. Implement a random mutation baseline fuzzer.
5. Run experiments comparing RL fuzzer and baseline on metrics like time-to-first anomaly and peak CPU usage.
6. Plot and analyze results to demonstrate RL agent's adaptive learning and superior stress induction.

**Verified links from the paper:**

- <https://gitlab.com/akihe/radamsa> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with runnable code, experiment results, and a README explaining the RL fuzzing method, baseline comparison, and evaluation metrics.

**Stretch goal:** Incorporate the Radamsa fuzzer as an additional baseline using the third-party artifact https://gitlab.com/akihe/radamsa for mutation comparison.

### Advanced — Extending RL Fuzzer with Protocol-Semantic Reward Integration
*Effort: 3+ weeks*

You extend the RL fuzzing framework by incorporating explicit protocol-semantic feedback into the reward function, such as state-transition novelty or error-code diversity, to improve vulnerability characterization precision. This addresses a key limitation noted in the paper. You implement a prototype continuous-action RL algorithm (e.g., Proximal Policy Optimization) for finer mutation control and evaluate the enhanced fuzzer in the simulated 5G environment.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions by implementing a genuine extension that improves the RL fuzzing approach's precision and control, moving beyond system-level metrics alone.

**Grounded in:** Limitations include reliance on system-level metrics and tabular Q-learning; future directions include incorporating explicit protocol-semantic feedback and exploring continuous-action RL algorithms such as Proximal Policy Optimization.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3, NumPy, Matplotlib

**Data:** Simulated 5G RRC fuzzing environment with system-level and protocol-semantic feedback signals synthesized from message state transitions and error codes.

**Build it:**

1. Implement protocol-semantic feedback metrics such as state-transition novelty or error-code diversity from fuzzing episodes.
2. Design a combined reward function integrating system-level and protocol-semantic feedback.
3. Replace tabular Q-learning with a continuous-action RL algorithm like Proximal Policy Optimization using Stable Baselines3.
4. Adapt the fuzzing mutation action space to continuous parameters for finer control.
5. Train the enhanced RL fuzzer in the simulated environment and compare performance against the original tabular Q-learning agent.
6. Analyze improvements in vulnerability detection precision and system stress metrics.

**Ships as:** A comprehensive GitHub repository demonstrating the extended RL fuzzing framework with protocol-semantic rewards, continuous-action RL implementation, evaluation results, and detailed documentation.

**Stretch goal:** Apply the extended RL fuzzer to fuzz other 5G protocol layers such as NAS or NGAP as suggested in the paper's future directions.
