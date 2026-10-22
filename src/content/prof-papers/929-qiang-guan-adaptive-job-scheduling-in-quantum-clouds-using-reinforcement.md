---
title: "929 · Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning — Qiang Guan"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-qiang-guan"
source_hash: "0b2afea346378b7acd66295a8df5e2f716150e38ccff1fb00d358df69420f936"
sequence: 929
generator: "outreach-garden: managed"
---

# 929 · Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning

## At a glance

- **Professor:** Qiang Guan
- **Institution:** Kent State University
- **Paper:** [Adaptive Job Scheduling in Quantum Clouds Using Reinforcement Learning](https://arxiv.org/pdf/2506.10889)
- **Authors:** Waylon Luo, Jiapeng Zhao, Tong Zhan, Qiang Guan
- **Year:** 2025

## Paper overview

This paper addresses the challenge of efficiently scheduling and executing large quantum computing jobs across multiple quantum processors connected via classical communication in a quantum cloud environment. It introduces a simulation framework that models distributed quantum job scheduling and compares four allocation strategies, including one based on reinforcement learning, to optimize execution time, fidelity, and communication overhead.

### Why it matters

**Research problem:** Quantum computing hardware currently has limited qubit counts and high error rates, making it difficult to execute large quantum circuits on a single processor. Distributing large quantum jobs across multiple quantum processing units (QPUs) connected via classical communication introduces challenges in scheduling, resource allocation, fidelity preservation, and communication overhead. The problem is how to optimally allocate and schedule these large quantum jobs to maximize fidelity and minimize execution time and communication costs.

**Why it matters:** Quantum computing promises breakthroughs in fields like cryptography, materials science, and machine learning, but hardware limitations and noise hinder scalability. Efficient scheduling and resource management in quantum clouds are critical to harnessing the power of distributed quantum processors and advancing practical quantum computing applications.

**Key contributions:**

- A flexible quantum job orchestration framework supporting distributed scheduling and execution of quantum circuits exceeding single QPU capacity.
- An adaptive, error-informed scheduling method that uses real-time calibration data to improve circuit fidelity.
- Implementation and comparison of four distinct allocation strategies including a reinforcement learning-based approach.
- Establishment of performance metrics including execution time, fidelity, and communication overhead for systematic evaluation.
- Public release of the first open-source simulation platform supporting multi-QPU quantum cloud scheduling.

## About the professor

**Qiang Guan** — Associate Professor, Department of Computer Science, Kent State University.

Research interests: Quantum Computing, Noise Mitigation, Quantum Cloud; High Performance Computing, HPC-Cloud; Resilience and Power; AR/VR, Holographic, Visualization; Deep Learning Workflow and Application

### Research links

- [Faculty/profile page](http://www.cs.kent.edu/~qguan)
- [Lab website](http://www.guans.cs.kent.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=kpPoy4gAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/20/1255.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** Markov Decision Processes, policy gradient methods, Proximal Policy Optimization algorithm, reinforcement learning fundamentals
**Already in this field?** Skip this entirely if you already understand reinforcement learning concepts including MDPs and policy optimization algorithms.

To understand the reinforcement learning (RL) approach used in the paper on adaptive job scheduling in quantum clouds, it is essential to grasp core RL concepts such as Markov Decision Processes, policy gradients, and Proximal Policy Optimization. The rigorous course offers a deep, structured dive into these algorithms and their theoretical foundations, while the fast track provides a concise, intuition-driven visual introduction to classical RL algorithms and PPO, enabling quicker comprehension for readers pressed for time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-4 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods), about 4.3 hours — these cover foundational RL concepts and policy optimization methods crucial to understanding the paper's RL approach.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, authoritative university course that covers policy gradient methods, actor-critic algorithms, and advanced RL topics including PPO, directly relevant to the RL-based scheduling method in the paper.

*If you want all of it:* All 19 lectures, about 20.6 hours — for a complete, in-depth understanding of deep reinforcement learning algorithms and their applications.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement learning VIsualized.](https://www.youtube.com/playlist?list=PL059o-2XfQvfgy4OsGADaCoYRc6OV_DxA) — AGI Lambda · 6 videos · 0.8h across 6 episodes

**Watch only this:** Episodes 1-3 (Where to use Reinforcement Learning | Part 1, Approximating a World Model with Neural Networks | overview, When AI Developed its own Language | Part 1), about 21 minutes — these episodes cover the basics of RL and model approximation relevant to the paper's approach.

*Why it unblocks this paper:* The 'Reinforcement learning VIsualized.' series by AGI Lambda provides a short, visually intuitive introduction to classical RL algorithms including policy optimization and PPO, making it ideal for quickly grasping the key ideas behind the RL scheduler in the paper.

*If you want all of it:* All 6 episodes, about 48 minutes — for a fuller but still concise visual overview of classical RL algorithms and PPO.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on adaptive job scheduling in quantum clouds using reinforcement learning, start by building foundational knowledge on reinforcement learning methods, quantum computing noise and error models, Markov decision processes, and the Proximal Policy Optimization algorithm. These prerequisites provide the theoretical and technical background necessary to grasp the paper's approach. Finally, focus on the core concept of quantum cloud job scheduling, including the authors' own talks if available, to directly connect the foundational knowledge to the paper's specific contributions and results.

### Reinforcement learning for resource allocation *(prerequisite)*
This section covers advanced reinforcement learning techniques applied to dynamic resource allocation and scheduling problems, which is central to the paper's approach. The selected Stanford lecture provides a rigorous, graduate-level deep dive into deep reinforcement learning, suitable for understanding the RL algorithms used in the paper.

*How the paper uses it:* The paper uses reinforcement learning to adaptively schedule quantum jobs, making understanding RL methods essential.

▶ [Stanford CS230 | Autumn 2025 | Lecture 5: Deep Reinforcement Learning](https://www.youtube.com/watch?v=4E27qlfYw0A) — Stanford Online · 1:45:01 · 11mo ago

### Quantum computing noise and error models *(prerequisite)*
Understanding noise and error models in quantum computing is critical for grasping the fidelity challenges addressed by the paper's error-aware scheduling strategy. The chosen Qiskit seminar offers an in-depth, research-level treatment of noise mitigation relevant to the paper's fidelity estimation and scheduling decisions.

*How the paper uses it:* The paper's scheduling strategies incorporate noise-aware fidelity estimation to improve quantum job execution quality.

▶ [Mitigating Noise in Quantum Hardware - Part 1 | Qiskit Seminar Series 2023](https://www.youtube.com/watch?v=Dv5cqB87nqk) — Qiskit · 1:01:19 · 3y ago

### Markov decision processes in scheduling *(prerequisite)*
Markov decision processes (MDPs) provide the mathematical framework for modeling the scheduling problem as a sequential decision-making task, foundational for the reinforcement learning approach used. The NPTEL lecture by Prof. Mausam offers a thorough academic introduction suitable for advanced readers.

*How the paper uses it:* The paper formulates the quantum job scheduling problem as an MDP to enable RL policy training.

▶ [Markov Decision Processes: Definition | Week 10 lecture 5 | by Prof. Mausam](https://www.youtube.com/watch?v=Zs9MLJnSCWU) — NPTEL-COURSES · 2y ago

### Proximal Policy Optimization algorithm *(prerequisite)*
Proximal Policy Optimization (PPO) is the key reinforcement learning algorithm used to train the adaptive scheduling agent in the paper. Although no perfect university lecture is available, the NobleX Infinity Labs video provides a detailed, research-focused explanation of PPO suitable for advanced understanding.

*How the paper uses it:* The paper trains its RL scheduling policy using the PPO algorithm.

▶ [🔥 PPO (Proximal Policy Optimization) – OpenAI’s Most Advanced Reinforcement Learning Algorithm! 🤖](https://www.youtube.com/watch?v=ewTmeyz4fVw) — NobleX Infinity Labs®️ · 1y ago

### Quantum cloud job scheduling
This section focuses on the core concept of distributing and scheduling quantum jobs across multiple quantum processors in a cloud environment. The IBM Research video on Quantum Services in Your Workflows offers a research-lab level overview of quantum cloud infrastructure and job scheduling relevant to the paper's context.

*How the paper uses it:* The paper develops and evaluates scheduling strategies for quantum cloud environments with multiple QPUs.

▶ [Quantum Services in Your Workflows](https://www.youtube.com/watch?v=Hw9W-ny4SR8) — IBM Research · 20:51 · 4y ago

### Paper-specific author talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors or closely related presentations provide the most precise insight into the paper's methodology and contributions. Unfortunately, no direct talk by the authors on this exact paper is available. The closest relevant talk is on programmable and adaptive scheduling for distributed systems, which, while not quantum-specific, relates to adaptive scheduling concepts.

*How the paper uses it:* No direct author talk on this paper is available; the selected talk relates to adaptive scheduling in distributed systems, providing context for the paper's approach.

▶ [Programmable and Adaptive Scheduling for Distributed Systems - HotNets 2025](https://www.youtube.com/watch?v=a1ThhKknW08) — Yuyao Wang · 9:00 · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on adaptive job scheduling in quantum clouds using reinforcement learning, start by building foundational knowledge of quantum computing noise and error models, which explain the fidelity challenges. Next, learn about Markov Decision Processes as they provide the framework for modeling scheduling decisions. Then, study reinforcement learning basics and the Proximal Policy Optimization algorithm used to train the scheduling agent. Finally, explore the core concept of quantum cloud job scheduling to see how these ideas apply to distributing quantum jobs across multiple processors.

### Quantum computing noise and error models *(prerequisite)*
Quantum computers are fragile and prone to errors due to noise and decoherence, which degrade the quality (fidelity) of computations. Understanding these noise sources and error models is essential to grasp why scheduling strategies must be noise-aware to preserve fidelity.

*How the paper uses it:* The paper addresses fidelity preservation by incorporating error-aware scheduling and noise-informed reinforcement learning policies.

▶ [Mitigating Noise on Quantum Computers](https://www.youtube.com/watch?v=Jepx3EziIR8) — Computing Sciences at Berkeley Lab · 21:08 · 5y ago

### Markov decision processes in scheduling *(prerequisite)*
Markov Decision Processes (MDPs) provide a mathematical framework to model decision-making where outcomes depend on both current state and action, with probabilistic transitions. This framework is key to formulating scheduling as a sequential decision problem suitable for reinforcement learning.

*How the paper uses it:* The authors formulate the quantum job scheduling problem as an MDP to enable training of adaptive RL policies.

▶ [Markov Decision Processes (MDP) Explained: Fundamentals, Expected Return, Policy & Value Functions](https://www.youtube.com/watch?v=XKZIsODur_g) — SmartSlides · 1y ago

### Reinforcement learning for resource allocation *(prerequisite)*
Reinforcement learning (RL) is a machine learning approach where an agent learns to make decisions by trial and error to maximize cumulative reward. RL is well-suited for dynamic resource allocation problems where the environment is complex and uncertain.

*How the paper uses it:* The paper uses RL to learn adaptive, noise-aware scheduling policies for quantum job allocation.

▶ [Reinforcement Learning for Agents - Will Brown, ML Researcher at Morgan Stanley](https://www.youtube.com/watch?v=JIsgyk0Paic) — AI Engineer · 18:17 · 1y ago

### Proximal Policy Optimization algorithm *(prerequisite)*
Proximal Policy Optimization (PPO) is a state-of-the-art reinforcement learning algorithm that balances exploration and stability during training by limiting policy updates. It is widely used for training robust RL agents efficiently.

*How the paper uses it:* The RL scheduling agent in the paper is trained using PPO to optimize job allocation policies.

▶ [🔥 PPO (Proximal Policy Optimization) – OpenAI’s Most Advanced Reinforcement Learning Algorithm! 🤖](https://www.youtube.com/watch?v=ewTmeyz4fVw) — NobleX Infinity Labs®️ · 1y ago

### Quantum cloud job scheduling
Quantum cloud job scheduling involves distributing large quantum circuits across multiple quantum processors connected via classical communication, balancing execution time, fidelity, and communication overhead. This is a new and complex challenge unique to quantum cloud computing.

*How the paper uses it:* This is the core concept of the paper, which proposes and evaluates multiple scheduling strategies including an RL-based approach for distributed quantum job execution.

▶ [Quantum Services in Your Workflows](https://www.youtube.com/watch?v=Hw9W-ny4SR8) — IBM Research · 20:51 · 4y ago

## Already in your library

- [Lecture6a: Compilation: Gate Scheduling | Quantum Computer Systems @ UChicago, Jonathan Baker](https://www.youtube.com/watch?v=HBtj5ggGpj4) — also for: Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation (Samah Mohamed Saeed)
- [Introduction to Quantum Noise - Part 1 | Qiskit Global Summer School 2023](https://www.youtube.com/watch?v=3Ka11boCm1M) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Markov Decision Processes - Computerphile](https://www.youtube.com/watch?v=2iF9PRriA7w) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Markov Decision Process (MDP) - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=4Fqt2Nk2lhY) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [Markov Decision Processes Explained in 12 Minutes](https://www.youtube.com/watch?v=2sVDNV3l-vo) — also for: Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver (Mingyan Liu)
- [Proximal Policy Optimization | ChatGPT uses this](https://www.youtube.com/watch?v=MVXdncpCbYE) — also for: PuRe Defender: A Game-Theoretic Pull Request Assignment with Deep RL (Mina Guirguis)
- [Proximal Policy Optimization (PPO) for LLMs Explained Intuitively](https://www.youtube.com/watch?v=8jtAzxUwDj0) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)
- [Simply Explaining Proximal Policy Optimization (PPO) | Deep Reinforcement Learning](https://www.youtube.com/watch?v=5VHLd9eCZ-w) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of adaptive job scheduling in quantum clouds using reinforcement learning. Starting with a beginner-level simulation of a simple scheduling strategy, you then reimplement and compare the paper's core RL scheduling method at intermediate level. Finally, the advanced project extends the RL approach by incorporating dynamic noise variability, addressing a key limitation noted in the paper.

### Beginner — Simulate Basic Quantum Job Scheduling Strategies
*Effort: a weekend, ~8 hours*

You build a small-scale simulator that models distributed quantum job scheduling across multiple quantum processors using simple heuristic strategies such as speed-optimized and error-aware scheduling. The simulator calculates execution time, fidelity (using simplified error rates), and communication overhead as metrics.

**Why it shows you understood the paper:** This project shows you grasp the paper's problem setting, the trade-offs between scheduling strategies, and the key performance metrics used to evaluate them.

**Grounded in:** A flexible quantum job orchestration framework supporting distributed scheduling and execution of quantum circuits exceeding single QPU capacity; Establishment of performance metrics including execution time, fidelity, and communication overhead for systematic evaluation.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic quantum job descriptions generated within the simulator, mimicking the paper's approach to synthetic large quantum jobs.

**Build it:**

1. Implement a simple model of multiple quantum processors with fixed error rates and qubit capacities.
2. Generate synthetic quantum jobs with parameters like circuit depth and qubit count.
3. Implement two heuristic scheduling strategies: speed-optimized (minimize runtime) and error-aware (prioritize low-error devices).
4. Simulate job execution with fidelity and communication overhead calculations based on simplified error and latency models.
5. Visualize and compare the metrics (execution time, fidelity, communication overhead) for the two strategies.

**Ships as:** A Jupyter notebook with code, plots comparing scheduling strategies, and a README explaining the simulation and results.

**Stretch goal:** Add a fair allocation strategy that balances load across processors and compare its metrics.

### Intermediate — Reimplement RL-Based Quantum Job Scheduler
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core reinforcement learning scheduling method using Proximal Policy Optimization (PPO) to learn adaptive job allocation policies in a simulated multi-QPU quantum cloud environment. You compare the RL policy against one heuristic baseline on synthetic quantum jobs and report runtime, fidelity, and communication overhead.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's RL formulation and training approach into code, and to evaluate the trade-offs in scheduling policies quantitatively.

**Grounded in:** They formulated the scheduling problem as a Markov Decision Process and trained a reinforcement learning agent using Proximal Policy Optimization to learn adaptive, noise-aware job allocation policies; Implementation and comparison of four distinct allocation strategies including a reinforcement learning-based approach.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3 (for PPO), NumPy, Matplotlib

**Data:** Synthetic quantum job workloads generated in code, simulating large quantum circuits distributed across multiple QPUs as described in the paper.

**Build it:**

1. Implement a simulation environment modeling multi-QPU quantum job scheduling with state, action, and reward definitions matching the paper's MDP formulation.
2. Implement or adapt PPO using Stable Baselines3 to train an RL agent on the scheduling environment.
3. Implement a baseline heuristic scheduler (e.g., speed-optimized).
4. Train the RL agent and evaluate both policies on synthetic job workloads.
5. Collect and plot metrics: execution time, fidelity, and communication overhead.
6. Write a README documenting your implementation, training process, and results.

**Verified links from the paper:**

- <https://github.com/QuantumCloudSimulation/ICPP2025> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the RL training code, simulation environment, evaluation scripts, plots comparing RL and baseline, and documentation.

**Stretch goal:** Incorporate real-time calibration data as part of the environment state to make the RL agent noise-aware.

### Advanced — Extend RL Scheduler with Dynamic Noise and Curriculum Learning
*Effort: 3+ weeks*

You extend the RL-based quantum job scheduler by incorporating dynamic hardware noise variability into the simulation environment and apply curriculum learning to improve RL training stability and policy performance. You evaluate how these extensions affect scheduling trade-offs between execution time, fidelity, and communication overhead.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to innovate beyond the original work by integrating more realistic noise models and advanced RL training techniques.

**Grounded in:** Limitations: Fidelity estimations are theoretical and based on simplified error models; Future directions: Extending reinforcement learning training with curriculum learning and communication-aware reward shaping to improve allocation policies; Incorporating more realistic noise models and dynamic hardware variability into fidelity estimation.

**Tech stack:** Python 3.11, PyTorch, Stable Baselines3, NumPy, Matplotlib

**Data:** Synthetic quantum job workloads with added dynamic noise profiles simulated programmatically to mimic hardware variability as described in the paper's future directions.

**Build it:**

1. Modify the simulation environment to model dynamic noise variability over time for each QPU based on stochastic or time-series noise models.
2. Implement curriculum learning by gradually increasing job complexity or noise variability during RL training.
3. Train the RL agent with the extended environment and curriculum learning schedule.
4. Evaluate the trained policy against the original RL baseline and heuristic schedulers on metrics of runtime, fidelity, and communication overhead.
5. Analyze and document how dynamic noise and curriculum learning impact policy behavior and scheduling trade-offs.
6. Prepare a detailed README explaining your extensions, methodology, and findings.

**Verified links from the paper:**

- <https://github.com/QuantumCloudSimulation/ICPP2025> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with the extended RL scheduler code, dynamic noise simulation, training scripts, evaluation results, and a detailed report.

**Stretch goal:** Incorporate communication-aware reward shaping to further optimize trade-offs between fidelity and communication overhead.
