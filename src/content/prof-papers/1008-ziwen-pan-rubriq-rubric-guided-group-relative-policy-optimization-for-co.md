---
title: "1008 · RubriQ: Rubric-Guided Group Relative Policy Optimization for Constraint-Aware Quantum Circuit Synthesis — Ziwen Pan"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ziwen-pan"
source_hash: "96146723264f00193ccdfbf0357e21304873186180c0c4a91a6b0d70e44538b4"
sequence: 1008
generator: "outreach-garden: managed"
---

# 1008 · RubriQ: Rubric-Guided Group Relative Policy Optimization for Constraint-Aware Quantum Circuit Synthesis

## At a glance

- **Professor:** Ziwen Pan
- **Institution:** Texas Tech University
- **Paper:** [RubriQ: Rubric-Guided Group Relative Policy Optimization for Constraint-Aware Quantum Circuit Synthesis](https://www.researchsquare.com/article/rs-10309063/latest.pdf)
- **Authors:** Ziqing Guo, Ziwen Pan
- **Year:** 2026

## Paper overview

This paper presents RubriQ, a novel framework that uses large language models (LLMs) combined with reinforcement learning to automatically generate optimized quantum circuits. The system focuses on minimizing costly quantum resources (T gates) while ensuring the circuits are correct and executable on near-term quantum hardware. RubriQ uses a programmatic rubric as a reward function to guide learning, integrates GPU-accelerated quantum simulation for efficient training, and validates results on real quantum processors.

### Why it matters

**Research problem:** Quantum circuit synthesis is challenging due to the need to produce circuits that are algorithmically correct, resource-efficient under fault-tolerant quantum computing (FTQC) architectures, and compatible with near-term quantum hardware constraints. Existing compilers rely on heuristics and lack generative capabilities, while prior reinforcement learning methods suffer from sparse rewards and limited action spaces, hindering discovery of novel circuit optimizations.

**Why it matters:** Efficient quantum circuit synthesis directly impacts the feasibility of scalable quantum computing by reducing the overhead of expensive T gates and ensuring circuits can run on actual hardware. Minimizing T gates lowers resource demands for magic-state distillation, a major bottleneck in FTQC. Near-term hardware validation ensures generated circuits are practical for current quantum devices, bridging the gap between theory and experiment.

**Key contributions:**

- Recasting quantum circuit synthesis as an LLM-driven code generation task optimized with reinforcement learning.
- Designing a multi-objective, programmatic rubric reward engine that separates FTQC cost from near-term hardware validation and enforces a hard correctness gate.
- Implementing a scalable HPC training pipeline on NERSC Perlmutter with strong scaling efficiency and GPU-accelerated fidelity simulation.
- Validating synthesized circuits on IBM and IonQ quantum processors, demonstrating near-term hardware executability.
- Achieving significant improvements in T-gate compression, convergence speed, and constraint violation reduction compared to prior RL baselines and rule-based compilers.

## About the professor

**Ziwen Pan** — Assistant Professor, CS, Texas Tech University.

Research interests: Quantum Information

### Research links

- [Faculty/profile page](https://www.depts.ttu.edu/cs/faculty/ziwenpan/ziwenpan.php)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum computing and quantum circuits
**The paper assumes:** foundations of quantum computing, quantum gates and circuits, fault-tolerant quantum computing basics, quantum circuit synthesis principles
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of quantum computing and quantum circuit design.

To understand the RubriQ paper on quantum circuit synthesis guided by reinforcement learning and large language models, a solid grasp of quantum computing fundamentals—especially quantum circuits, gate sets like Clifford+T, and fidelity concepts—is essential. The rigorous course option offers a deep, structured university-level introduction to quantum computing, while the fast track provides a concise, visual, and intuitive overview focused on quantum circuits and gates. Choose the rigorous course for comprehensive foundational knowledge, or the fast track for a quicker, intuition-driven understanding that covers the key concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to quantum computing course 2022](https://www.youtube.com/playlist?list=PLo0Vs5tDeRLRIPcJ83SN91M-asGuaa1AD) — NYU Quantum Technology Lab · 25 videos · 28.9h across 25 episodes

**Watch only this:** Lectures L1 Overview through L21 Quantum computers and quantum gates (episodes 1-21), about 24 hours — covering foundational quantum mechanics, quantum gates, and quantum computing basics essential for understanding circuit synthesis and gate cost metrics.

*Why it unblocks this paper:* This NYU Quantum Technology Lab course is a university-level introduction to quantum computing covering quantum information, quantum gates, and composite systems, which directly underpin the quantum circuit synthesis and fidelity evaluation in the paper.

*If you want all of it:* 28.9 hours across all 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Computing Tutorials (Visual) for Beginners](https://www.youtube.com/playlist?list=PLJk_IGUjQllfCDHYmFNfaCoUgXImxmZIA) — QRL · 14 videos · 2.1h across 14 episodes

**Watch only this:** Episodes 1 through 11 (Visually Understanding Quantum Computing to T and T† Gate with Quantum Glasses), about 1.7 hours — focusing on quantum states, circuits, and the crucial T gate relevant to the paper's T-gate compression results.

*Why it unblocks this paper:* This QRL playlist offers a concise, visual introduction to quantum computing basics including quantum states, quantum circuits, and single-qubit gates like the T gate, providing an accessible and quick grounding in the key concepts needed to grasp the paper's quantum circuit and gate optimization focus.

*If you want all of it:* 2.1 hours across all 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand RubriQ, start by building foundational knowledge on fault-tolerant quantum computing and T gate optimization, as minimizing T gates is critical for resource-efficient quantum circuits. Next, explore GPU-accelerated quantum circuit simulation to grasp how RubriQ achieves efficient fidelity evaluation during reinforcement learning training. Then, study reinforcement learning methods applied to quantum circuit synthesis to comprehend the core optimization techniques. Finally, focus on the RubriQ paper talk itself to directly hear the authors explain their novel framework, results, and innovations.

### Fault-tolerant quantum computing and T gate optimization *(prerequisite)*
This section covers the principles of fault-tolerant quantum computing (FTQC) and the importance of minimizing T gates, which are costly resources in FTQC architectures. Understanding these concepts is essential to appreciate RubriQ's focus on reducing T gate counts and ensuring circuits are compatible with fault-tolerant constraints.

*How the paper uses it:* RubriQ aims to minimize costly T gates to reduce overhead in fault-tolerant quantum computing architectures.

▶ [Aleks Kissinger: "ZX Calculus and Fault-tolerant quantum computing"](https://www.youtube.com/watch?v=ZA6Mbk6q3qM) — Topos Institute · 54:31 · Streamed 1y ago

### GPU-accelerated quantum circuit simulation *(prerequisite)*
This section explains how GPU acceleration is used to simulate quantum circuits efficiently, enabling high-throughput fidelity evaluation during reinforcement learning. Understanding this technology is key to grasping how RubriQ integrates CUDA-Q simulation to scale training on HPC clusters.

*How the paper uses it:* RubriQ integrates GPU-accelerated quantum simulation (CUDA-Q) for efficient fidelity evaluation during RL training.

▶ [GPU-Accelerated Fault-Tolerant Quantum Simulation | Quantum Computing & Error Correction | Uplatz](https://www.youtube.com/watch?v=hQIyxnQMjVY) — Uplatz · 8d ago

### Reinforcement learning for quantum circuit synthesis
This section delves into reinforcement learning techniques tailored for quantum circuit synthesis, highlighting how RL can optimize circuit generation and resource usage. It provides the methodological background necessary to understand RubriQ's use of Group Relative Policy Optimization (GRPO) and its improvements over prior RL baselines.

*How the paper uses it:* RubriQ uses reinforcement learning, specifically GRPO, to optimize quantum circuit synthesis.

▶ [Reinforcement Learning Based Quantum Circuit Optimization via ZX-Calculus - Jan Nogué Gómez](https://www.youtube.com/watch?v=PwqKvMNVzj0) — ZX-calculus · 39:18 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand RubriQ, a framework for quantum circuit synthesis using reinforcement learning and large language models. We start with the basics of fault-tolerant quantum computing and T gate optimization, then cover GPU-accelerated quantum simulation for efficient fidelity evaluation, followed by reinforcement learning methods tailored for quantum circuit synthesis. Finally, we explore how large language models generate quantum circuit code and the innovative programmatic rubric reward design guiding RubriQ's multi-objective optimization.

### Fault-tolerant quantum computing and T gate optimization *(prerequisite)*
Fault-tolerant quantum computing (FTQC) ensures quantum computations are reliable despite errors, with T gates being a costly resource in this context. Understanding why minimizing T gates is critical helps grasp RubriQ's goal of resource-efficient circuit synthesis.

*How the paper uses it:* RubriQ focuses on minimizing expensive T gates to reduce overhead in fault-tolerant quantum computing architectures.

▶ [Google’s Road to Fault-Tolerant Quantum Computing | William Oliver at QWC 2026](https://www.youtube.com/watch?v=Z3nY6aWSFjc) — Connected DMV · 16:55 · 1mo ago

### GPU-accelerated quantum circuit simulation *(prerequisite)*
Quantum circuit simulation on GPUs accelerates the evaluation of circuit fidelity, which is essential for training reinforcement learning agents efficiently. This enables RubriQ to perform high-throughput fidelity checks during optimization.

*How the paper uses it:* RubriQ integrates GPU-accelerated CUDA-Q simulation for efficient fidelity evaluation within its reinforcement learning loop.

▶ [GPU-Accelerated Fault-Tolerant Quantum Simulation | Quantum Computing & Error Correction | Uplatz](https://www.youtube.com/watch?v=hQIyxnQMjVY) — Uplatz · 8d ago

### Reinforcement learning for quantum circuit synthesis
Reinforcement learning (RL) is used to optimize quantum circuits by learning policies that generate better circuits over time. Understanding RL concepts in the quantum context clarifies how RubriQ improves circuit quality and resource usage.

*How the paper uses it:* RubriQ employs Group Relative Policy Optimization, a reinforcement learning method, to optimize quantum circuit generation.

▶ [Reinforcement Learning Based Quantum Circuit Optimization via ZX-Calculus - Jan Nogué Gómez](https://www.youtube.com/watch?v=PwqKvMNVzj0) — ZX-calculus · 39:18 · 2y ago

### Large language models for code generation *(prerequisite)*
Large language models (LLMs) can generate code from natural language prompts, enabling automated quantum circuit synthesis. Grasping how LLMs produce code helps understand RubriQ's formulation of circuit synthesis as a code generation task.

*How the paper uses it:* RubriQ formulates quantum circuit synthesis as an LLM-driven code generation task producing OpenQASM or Qiskit code.

▶ [Large Language Models for AI Planning: Efficiency and correctness through code generation](https://www.youtube.com/watch?v=ylKer3lehr8) — Harsha Kokel · 35:23 · 1y ago

## Already in your library

- [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [Variational Quantum Algorithms Explained (VQE & Parameterized Circuits)](https://www.youtube.com/watch?v=gZNO1tbMQLw) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)
- [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 11: Model-Based RL](https://www.youtube.com/watch?v=PvqyGnOirgA) — also for: Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency (Sergey Levine)
- [The FASTEST introduction to Reinforcement Learning on the internet](https://www.youtube.com/watch?v=VnpRp7ZglfA) — also for: Aligning Language Models with Selective Prediction (Aryan Deshwal)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Lecture: #9 Language Models for Code Generation - ScaDS.AI Dresden/Leipzig](https://www.youtube.com/watch?v=mto9XS1Bf1c) — also for: FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications (Bedrich Benes)
- [Training Large Language Models for Secure Code Generation - Or Sahar](https://www.youtube.com/watch?v=EqKPnBrAAoE) — also for: Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development (Jugal K. Kalita)
- [RSG 2023 - DUBRAVKO CULIBRK - Large Language Models for Code Generation](https://www.youtube.com/watch?v=oOWtj7iBKwU) — also for: Unreliable in Practice? A Comprehensive Study of Errors in LLM-Generated Code (Marco Vieira)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — also for: On the Opportunities of Large Language Models for Programming Process Data (John Edwards)
- [Daniel Gottesman - Quantum Error Correction and Fault Tolerance (Part 1) - CSSQI 2012](https://www.youtube.com/watch?v=ltJ1jXQeDl8) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Reward shaping](https://www.youtube.com/watch?v=S6X7Kb7v3II) — also for: Behavior Alignment via Reward Function Optimization (Bruno C. da Silva)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of RubriQ's approach to quantum circuit synthesis using LLMs and reinforcement learning. The beginner project focuses on reproducing a core metric from the paper using familiar tools. The intermediate project involves running and extending the authors' released RubriQ demo to compare T-gate compression against a baseline. The advanced project tackles a stated limitation by implementing an approximate fidelity estimator to scale synthesis to larger circuits, exploring a future direction proposed by the authors.

### Beginner — T-Gate Compression Metric Visualization
*Effort: a weekend (~8 hours)*

You build a small Python script that parses example quantum circuits in OpenQASM format and computes the T-gate count compression metric as defined in the paper. You then visualize the compression achieved by RubriQ versus baseline methods using simple bar charts.

**Why it shows you understood the paper:** This project demonstrates you understand the key resource metric (T-gate compression) RubriQ optimizes and how to extract and compare it from quantum circuit representations, a fundamental aspect of the paper's contributions.

**Grounded in:** RubriQ attains an average T-gate compression of 3.31× over correct circuits, outperforming Sparse-PPO (2.05×) and TKET O2 (1.6×).

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Use small example OpenQASM circuits from the RubriQ demo at (link removed — unverified) as input data.

**Build it:**

1. Download example OpenQASM circuit files from the RubriQ demo repository.
2. Write a Python parser to count T gates in each circuit.
3. Calculate T-gate compression ratios comparing RubriQ outputs to baseline circuits.
4. Plot the compression ratios using matplotlib bar charts.
5. Write a README explaining the metric and your results.

**Ships as:** A GitHub repo with Python scripts that compute and visualize T-gate compression for example circuits, demonstrating metric extraction and interpretation.

**Stretch goal:** Add parsing and visualization of correctness pass rates alongside T-gate compression to correlate resource savings with functional correctness.

### Intermediate — RubriQ Demo Extension with Baseline Comparison
*Effort: 2-3 weekends (~20 hours)*

You clone and run the RubriQ demonstration code released by the authors, then extend it to implement a simple baseline circuit synthesis method (e.g., rule-based compiler). You run both methods on a small set of circuits and compare T-gate compression, correctness pass rate, and near-term hardware validation success.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the multi-objective rubric reward, and reproduce key results comparing RubriQ to baselines, demonstrating grasp of the core method and evaluation metrics.

**Grounded in:** The demonstration of RubriQ is available at (link removed — unverified). RubriQ achieves an average T-gate compression of 3.31×, surpassing Sparse-PPO (2.05×) and TKET O2 (1.6×). Correctness pass rates exceed 96% across datasets.

**Tech stack:** Python 3.11, PyTorch, CUDA (for GPU simulation), DeepSpeed (optional)

**Data:** Use the RubriQ demo circuits and baseline circuits provided in the authors' repository at (link removed — unverified).

**Build it:**

1. Clone the RubriQ demo repository and set up the environment following the authors' instructions.
2. Run the RubriQ synthesis pipeline on provided example circuits to reproduce baseline results.
3. Implement a simple rule-based baseline circuit synthesis method for comparison.
4. Evaluate both methods on T-gate count, correctness pass rate, and hardware validation.
5. Visualize and report the comparative metrics in a README.

**Ships as:** A GitHub repo containing code to run RubriQ demo and baseline synthesis, with scripts to compare and report key metrics, showing practical understanding of the paper's core method.

**Stretch goal:** Incorporate GPU-accelerated fidelity simulation using CUDA-Q to measure fidelity scores as in the paper's rubric.

### Advanced — Approximate Fidelity Estimation for Scalable Quantum Circuit Synthesis
*Effort: a few weeks (~40+ hours)*

You develop an approximate fidelity estimator module to replace the exact GPU-accelerated fidelity simulation in RubriQ, using tensor-network methods or stochastic fidelity estimation. You integrate this into a simplified reinforcement learning loop for quantum circuit synthesis and demonstrate improved scalability to larger circuits.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by implementing multifidelity screening to mitigate exponential scaling of fidelity evaluation, showing deep engagement with the paper's challenges and proposed solutions.

**Grounded in:** The fidelity evaluation scales exponentially with qubit count (O(4^nq)), limiting scalability to very large circuits without further approximation methods. Future directions include incorporating multifidelity screening, tensor-network fidelity, and stochastic fidelity estimation to reduce simulation costs.

**Tech stack:** Python 3.11, PyTorch, NumPy, TensorNetwork (or similar tensor library)

**Data:** Use synthetic quantum circuits of varying qubit counts generated programmatically or from the RubriQ demo circuits scaled up in size.

**Build it:**

1. Research and implement a tensor-network based approximate fidelity estimator for quantum circuits.
2. Validate the estimator against exact fidelity simulation on small circuits.
3. Integrate the estimator into a simplified reinforcement learning loop for circuit synthesis.
4. Run experiments synthesizing larger circuits and compare runtime and fidelity estimation accuracy.
5. Document the implementation, experiments, and results in a detailed README.

**Ships as:** A GitHub repo with code for approximate fidelity estimation integrated into a quantum circuit synthesis RL pipeline, demonstrating scalability improvements and fidelity trade-offs.

**Stretch goal:** Extend the estimator to support multifidelity screening by combining fast approximate and slower exact fidelity checks during training.

_The RubriQ authors provide a demo and source code at (link removed — unverified) and (link removed — unverified); verify access and environment requirements before starting the intermediate and advanced projects._
