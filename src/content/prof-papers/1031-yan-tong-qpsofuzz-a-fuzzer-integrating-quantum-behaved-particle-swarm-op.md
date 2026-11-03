---
title: "1031 · QPSOFuzz: A Fuzzer Integrating Quantum-behaved Particle Swarm Optimization Algorithm and Logistic Mapping — Yan Tong"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yan-tong"
source_hash: "d22ad997f0d38b30ff39a9b0b99ab1961a96c3e2a8702339c49edbdc5b696ace"
sequence: 1031
generator: "outreach-garden: managed"
---

# 1031 · QPSOFuzz: A Fuzzer Integrating Quantum-behaved Particle Swarm Optimization Algorithm and Logistic Mapping

## At a glance

- **Professor:** Yan Tong
- **Institution:** University of South Carolina
- **Paper:** [QPSOFuzz: A Fuzzer Integrating Quantum-behaved Particle Swarm Optimization Algorithm and Logistic Mapping](https://itiis.org/digital-library/manuscript/file/105413/TIIS)
- **Authors:** Zhengwei Ren, Mingming Chen, Min Sun, Yan Tong, Shiwei Xu, Li Deng
- **Year:** 2025

## Paper overview

This paper presents QPSOFuzz, an improved mutation-based grey-box fuzzer that dynamically adjusts the selection probabilities of mutation operators using a Quantum-behaved Particle Swarm Optimization (QPSO) algorithm combined with Logistic mapping. This approach enhances the fuzzer's ability to explore more program paths efficiently while consuming fewer computational resources. Evaluations on nine real-world programs show that QPSOFuzz achieves higher path coverage and can trigger crashes in scenarios where other state-of-the-art fuzzers fail.

### Why it matters

**Research problem:** Mutation-based grey-box fuzzing effectiveness depends heavily on the mutation operator selection strategy. Traditional fuzzers use uniform random selection, which is inefficient because mutation operators vary in effectiveness depending on the target program. Existing adaptive strategies like MOPT improve this but suffer from premature convergence to local optima or high resource consumption.

**Why it matters:** Efficient fuzzing is critical for discovering software vulnerabilities, which are essential for software security. Improving mutation operator scheduling can lead to better path coverage and vulnerability detection while reducing computational costs, making fuzzing more practical and effective.

**Key contributions:**

- Integration of QPSO and Logistic mapping to enhance local and global search capabilities in mutation operator scheduling.
- Redefinition of global optimal probability by combining current and historical efficiencies to improve robustness and long-term effectiveness.
- Comprehensive evaluation on nine real-world programs demonstrating higher path coverage and lower resource consumption compared to baseline fuzzers.
- Demonstration that QPSOFuzz can trigger crashes in scenarios where other state-of-the-art fuzzers fail.

## About the professor

**Yan Tong** — Professor, Department of Computer Science and Engineering, University of South Carolina.

Research interests: Dr. Tong’s general research interests are on computer vision, machine learning, and human computer interaction, especially in ·Machine learning and its applications in computer vision and interdisciplinary research such as psychology, cybersecurity, HCI, marketing, materials science, mechanical engineering, and mobile computing ·Probabilistic graphical models and their applications in computer vision including modeling, reasoning, information fusion, and learning under uncertainty ·Affective computing (facial activity analysis and eye gaze tracking)

### Research links

- [Faculty/profile page](http://www.cse.sc.edu/~tongy)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Swarm Intelligence and Optimization
**The paper assumes:** particle swarm optimization algorithms, swarm intelligence principles, metaheuristic optimization methods
**Already in this field?** Skip this entirely if you already understand particle swarm optimization and metaheuristic algorithms for optimization.

To understand the core optimization technique used in QPSOFuzz—Quantum-behaved Particle Swarm Optimization (QPSO)—and how it improves mutation operator scheduling, it is essential to grasp swarm intelligence and particle swarm optimization principles. The rigorous course offers a deep, structured university-level treatment of optimization theory and algorithms, while the fast track provides a concise, intuition-focused introduction to swarm intelligence and particle swarm optimization for quicker comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Optimization Theory and Algorithms - Prof. Uday Khankhoje](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8XNc8SxMLbUxdR7lDSuIGw) — NPTEL-NOC IITM · 83 videos · 19.4h across the first 60 episodes

**Watch only this:** Lectures 1-4: 'Optimization Theory and Algorithms - Introduction' through 'Introduction to the course - 3 - an optimization example to live longer' (about 1 hour), plus Lectures 16-19: 'Unconstrained optimization -1- Roadmap of the course and Taylor’s theorem' through 'Unconstrained optimization - 4 - overview of algorithms and choosing a descent direction' (about 1 hour 20 minutes), totaling approximately 2 hours 20 minutes. These cover the fundamentals of optimization and algorithmic approaches necessary to understand QPSO.

*Why it unblocks this paper:* This NPTEL course by Prof. Uday Khankhoje covers optimization theory and algorithms comprehensively, including foundational concepts and unconstrained optimization methods relevant to understanding advanced swarm optimization techniques like QPSO.

*If you want all of it:* About 19.4 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Swarm intelligence](https://www.youtube.com/playlist?list=PLbZGnKmaC12F6JleSnFq6Pa6TD06p6LOJ) — Deena Ponnappa · 10 videos · 1.1h across the first 9 episodes

**Watch only this:** Episodes 4-6: 'Swarm Intelligence Introduction', 'Ant Colony Optimization | ACO | Part 1 in Hindi', and 'Particle Swarm Optimization (PSO) in Hindi Part 2' (about 21 minutes total). These episodes focus on swarm intelligence basics and PSO, directly relevant to understanding QPSOFuzz's optimization approach.

*Why it unblocks this paper:* This short playlist by Deena Ponnappa introduces swarm intelligence and particle swarm optimization concepts clearly and concisely, providing an accessible overview of the principles underlying QPSO and its role in optimization.

*If you want all of it:* About 1.1 hours across the first 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the QPSOFuzz paper, start by building foundational knowledge on mutation-based grey-box fuzzing and mutation operator scheduling, which are critical to grasp the problem context and challenges addressed. Next, study the Logistic chaotic mapping concept to appreciate how exploration diversity is maintained in the optimization process. Then, learn about the Quantum-behaved Particle Swarm Optimization (QPSO) algorithm, the core optimization technique integrated in QPSOFuzz. Finally, consolidate your understanding with detailed lectures on Particle Swarm Optimization to grasp the underlying principles and nuances of the algorithm enhancements used in the paper.

### Mutation-based grey-box fuzzing *(prerequisite)*
Mutation-based grey-box fuzzing is a fundamental software testing technique that generates inputs by mutating existing seeds and uses lightweight program instrumentation feedback to guide input generation. Understanding this technique is essential to appreciate the baseline fuzzing strategies that QPSOFuzz aims to improve.

*How the paper uses it:* QPSOFuzz is an improved mutation-based grey-box fuzzer that dynamically adjusts mutation operator probabilities to enhance fuzzing efficiency.

▶ [Program-Adaptive Mutational Fuzzing](https://www.youtube.com/watch?v=UoYu4ERBN4Y) — IEEE Symposium on Security and Privacy · 21:25 · 11y ago

### Logistic chaotic mapping *(prerequisite)*
Logistic chaotic mapping is a mathematical model exhibiting chaotic behavior, used to enhance exploration diversity and avoid premature convergence in optimization algorithms. Understanding its dynamics helps in appreciating how QPSOFuzz maintains a balance between exploration and exploitation.

*How the paper uses it:* QPSOFuzz uses Logistic mapping to initialize parameters and adjust the contraction-expansion factor, improving global search capability.

▶ [PHY 256A Physics of Information Lecture 7 - Example Chaotic Maps (Full Lecture)](https://www.youtube.com/watch?v=a3jKP0QHP_U) — Complexity Sciences Center · 50:24 · 5y ago

### Quantum-behaved Particle Swarm Optimization *(paper-talk search result; attribution unverified)*
Quantum-behaved Particle Swarm Optimization (QPSO) is an advanced variant of PSO that incorporates quantum mechanics principles to improve global search ability and convergence. Understanding QPSO is critical to grasp how QPSOFuzz dynamically adjusts mutation operator probabilities.

*How the paper uses it:* QPSOFuzz integrates QPSO to optimize mutation operator scheduling, enhancing fuzzing performance and resource efficiency.

▶ [Quantum Particle Swarm Optimization: An Overview](https://www.youtube.com/watch?v=RwiEmkxc0XI) — Dr. Harish Garg · 23:33 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand QPSOFuzz, starting with the basics of mutation-based grey-box fuzzing, which is the core software testing technique improved by the paper. Next, it covers mutation operator scheduling, a key challenge in fuzzing efficiency. Then, it explains Logistic chaotic mapping to understand how exploration diversity is maintained. Finally, it dives into Quantum-behaved Particle Swarm Optimization (QPSO), the advanced optimization algorithm that dynamically adjusts mutation probabilities in QPSOFuzz.

### Mutation-based grey-box fuzzing *(prerequisite)*
Mutation-based grey-box fuzzing is a software testing method that generates new inputs by mutating existing ones and uses lightweight program feedback (grey-box) to guide input generation towards exploring new program paths. It balances efficiency and effectiveness by focusing mutations on promising inputs.

*How the paper uses it:* QPSOFuzz is an improved mutation-based grey-box fuzzer that dynamically schedules mutation operators to enhance path coverage and crash detection.

▶ [Greybox Fuzzing](https://www.youtube.com/watch?v=vBrNT9q2t1Y) — Andreas Zeller · 18:09 · 4y ago

### Mutation operator scheduling in fuzzing *(prerequisite)*
Mutation operator scheduling decides which mutation strategies to apply during fuzzing to maximize exploration and bug finding. Efficient scheduling adapts to program behavior, avoiding uniform random selection which wastes resources on ineffective mutations.

*How the paper uses it:* The paper addresses mutation operator scheduling by using optimization algorithms to dynamically adjust mutation probabilities for better fuzzing efficiency.

▶ [Program-Adaptive Mutational Fuzzing](https://www.youtube.com/watch?v=UoYu4ERBN4Y) — IEEE Symposium on Security and Privacy · 21:25 · 11y ago

### Logistic chaotic mapping *(prerequisite)*
Logistic chaotic mapping is a mathematical function that produces chaotic sequences, useful for maintaining diversity and avoiding premature convergence in optimization algorithms by ensuring wide exploration of the solution space.

*How the paper uses it:* QPSOFuzz uses Logistic mapping to initialize parameters and maintain exploration diversity, preventing the optimization from getting stuck in local optima.

▶ [This equation will change how you see the world (the logistic map)](https://www.youtube.com/watch?v=ovJcsL7vyrk) — Veritasium · 18:39 · 6y ago

### Quantum-behaved Particle Swarm Optimization *(paper-talk search result; attribution unverified)*
Quantum-behaved Particle Swarm Optimization (QPSO) is an advanced variant of Particle Swarm Optimization that models particles with quantum behavior, enhancing global search ability and convergence properties in optimization problems.

*How the paper uses it:* QPSOFuzz integrates QPSO to dynamically update mutation operator probabilities, improving fuzzing performance by balancing exploration and exploitation.

▶ [Quantum Particle Swarm Optimization: An Overview](https://www.youtube.com/watch?v=RwiEmkxc0XI) — Dr. Harish Garg · 23:33 · 5y ago

## Already in your library

- [Fuzzing (fuzz testing) 101: Lessons from cyber security expert Dr. David Brumley](https://www.youtube.com/watch?v=17ebHty54T4) — also for: A Study of the Reliability of Agentic AI-Generated Programs (Barton P. Miller)
- [Fuzzing Programs to Find Bugs - Computerphile](https://www.youtube.com/watch?v=kaD54VXxGrI) — also for: Fuzzing with Agents? Generators Are All You Need (Rohan Padhye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of QPSOFuzz's novel mutation operator scheduling approach in grey-box fuzzing. The beginner project recreates a core mechanism of the paper using familiar tools to build intuition. The intermediate project implements the QPSO and Logistic mapping method on a smaller fuzzing target and compares coverage metrics against a baseline. The advanced project extends the paper by integrating deterministic mutation stages to address a stated limitation, exploring its impact on crash detection and resource use.

### Beginner — Simulate Logistic Mapping for Mutation Probability Scheduling
*Effort: a weekend, ~8 hours*

You build a standalone simulation of the Logistic chaotic mapping function to generate mutation operator selection probabilities over iterations. This project focuses on visualizing how Logistic mapping maintains exploration diversity by dynamically adjusting probabilities, mimicking the contraction-expansion factor behavior described in the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the role of Logistic mapping in enhancing global search and avoiding premature convergence in mutation scheduling, a key contribution of QPSOFuzz.

**Grounded in:** Logistic mapping enables particles to cover a wider solution space, laying the foundation of global search and maintaining a relatively large contraction-expansion factor even in later stages.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** No external data needed; you simulate Logistic mapping iterations as described in the paper.

**Build it:**

1. Implement the Logistic mapping function f(x) = r * x * (1 - x) with parameter r in Python.
2. Generate a sequence of values starting from a random initial x0 in (0,1) over 1000 iterations.
3. Visualize the sequence to show chaotic behavior and how it can be used to adjust mutation operator probabilities.
4. Simulate a small set of mutation operators and assign their selection probabilities based on the Logistic mapping values.
5. Plot the probability distributions over iterations to illustrate exploration diversity.

**Ships as:** A Jupyter Notebook with code, plots of Logistic mapping sequences, and mutation operator probability visualizations, along with a README explaining the connection to QPSOFuzz.

**Stretch goal:** Add a comparison plot showing uniform random selection probabilities versus Logistic mapping-based probabilities to highlight differences.

### Intermediate — Implement QPSO-based Mutation Operator Scheduling for Grey-box Fuzzing
*Effort: 2 weekends, ~20 hours*

You implement the core QPSO algorithm combined with Logistic mapping to dynamically adjust mutation operator selection probabilities in a mutation-based grey-box fuzzer. You apply this to fuzz a small open-source program (e.g., a simple command-line utility) and compare path coverage against a baseline fuzzer using uniform random mutation scheduling.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main method from its description, understand the integration of QPSO and Logistic mapping, and evaluate fuzzing effectiveness via path coverage metrics.

**Grounded in:** QPSOFuzz integrates the Quantum-behaved Particle Swarm Optimization (QPSO) algorithm and Logistic mapping to initialize the parameters, adjust the contraction-expansion factor, and update the probabilities of mutation operators.

**Tech stack:** Python 3.11, AFL fuzzing framework (for baseline), coverage.py or equivalent for path coverage measurement, numpy

**Data:** Use a small open-source program such as 'libpng' or 'tiffsplit' as the fuzzing target; these are publicly available and representative of the paper's evaluation targets.

**Build it:**

1. Implement the QPSO algorithm with Logistic mapping for parameter initialization and contraction-expansion factor adjustment.
2. Integrate this mutation operator scheduling into a simple mutation-based grey-box fuzzer implemented in Python or adapt an existing minimal fuzzer.
3. Set up the baseline fuzzer with uniform random mutation operator selection.
4. Run fuzzing campaigns on the chosen target program with both schedulers for a fixed time budget.
5. Measure and compare path coverage metrics between your QPSO-based scheduler and the baseline.
6. Document the implementation details, evaluation setup, and results.

**Ships as:** A GitHub repository with the QPSO-based mutation scheduler integrated into a grey-box fuzzer, scripts to run experiments, coverage results comparing baseline and your method, and a README linking these to the paper's claims.

**Stretch goal:** Add an ablation study disabling Logistic mapping to show its impact on coverage, mirroring the paper's experiments.

### Advanced — Integrate Deterministic Mutation Stage into QPSOFuzz to Improve Crash Detection
*Effort: 3-4 weeks*

You extend the QPSOFuzz approach by integrating a deterministic mutation stage, which was disabled in the paper's experiments. You implement this hybrid mutation scheduling in your fuzzer and evaluate its effect on crash detection rates and resource consumption on a set of real-world programs, including simpler targets like 'tiffsplit' where QPSOFuzz showed limitations.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of QPSOFuzz's design and the practical trade-offs in fuzzing strategies. It also shows your ability to innovate and experimentally validate improvements.

**Grounded in:** The deterministic mutation stage was disabled in experiments, which may affect generalizability to all fuzzing scenarios. Exploring integration of deterministic mutation stages with QPSOFuzz to improve crash detection in programs with rigorous input validation is a future direction.

**Tech stack:** Python 3.11, AFL fuzzing framework, coverage.py or equivalent, numpy, Docker (optional for environment reproducibility)

**Data:** Use the same real-world programs evaluated in the paper (e.g., 'pdfimages', 'tiffsplit') which are publicly available open-source utilities.

**Build it:**

1. Implement or integrate a deterministic mutation stage into your QPSOFuzz-based fuzzer, allowing it to run alongside the adaptive mutation scheduling.
2. Set up experiments to fuzz selected real-world programs with and without the deterministic stage enabled.
3. Measure crash detection counts, path coverage, CPU and memory usage for each configuration.
4. Analyze whether the deterministic stage improves crash detection on simpler programs and its impact on resource consumption.
5. Document your methodology, results, and discuss how this extension addresses the paper's limitations and future directions.

**Ships as:** A comprehensive GitHub repository with the extended fuzzer code, experiment scripts, detailed evaluation results, and a README discussing the findings in the context of the paper's limitations and future work.

**Stretch goal:** Explore hybrid mutation scheduling strategies combining QPSOFuzz with seed position mutation techniques and report preliminary results.
