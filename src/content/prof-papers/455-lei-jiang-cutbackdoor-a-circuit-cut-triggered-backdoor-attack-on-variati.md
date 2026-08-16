---
title: "455 · CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms — Lei Jiang"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lei-jiang"
source_hash: "9db7d5b6b2c511e4bf0cb8e7ee40ef9f191e938da92db7b61ee935e119651893"
sequence: 455
generator: "outreach-garden: managed"
---

# 455 · CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms

## At a glance

- **Professor:** Lei Jiang
- **Institution:** Indiana University
- **Paper:** [CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms](https://arxiv.org/abs/2607.18126)
- **Authors:** Ahatesham Bhuiyan, Hoang Ngo, Cheng Chu, Qian Lou, Lei Jiang, My T. Thai, Mengxin Zheng
- **Year:** 2026

## Paper overview

This paper introduces CutBackdoor, a novel backdoor attack on variational quantum algorithms (VQAs) that exploits the circuit cutting technique used to run large quantum circuits on limited hardware. The attack embeds malicious behavior into the parameters of quantum circuits that remain undetectable during normal full-circuit validation but cause significant errors when the circuit is executed using circuit cutting. This poses a new security risk in the quantum computing supply chain, especially as pre-trained parameters are shared publicly and circuit cutting is widely used.

### Why it matters

**Research problem:** How to secure variational quantum algorithms against supply-chain backdoor attacks that exploit the circuit cutting execution path, which has been largely overlooked as an attack surface.

**Why it matters:** VQAs are central to near-term quantum computing applications in chemistry, optimization, and machine learning. Circuit cutting is essential to run large circuits on limited hardware but introduces a complex reconstruction pipeline vulnerable to adversarial manipulation. Undetected backdoors can cause significant errors in sensitive applications like drug discovery and financial optimization, leading to incorrect results and potential real-world harm.

**Key contributions:**

- Identification of noisy finite-shot circuit-cut execution as a novel adversarial attack surface for VQAs.
- Development of CutBackdoor, the first parameter-supply-chain backdoor exploiting circuit cutting as a trigger without circuit modification.
- Formal theoretical analysis bounding the finite-shot evaluation gap between full-circuit and cut-path estimators.
- Empirical validation of CutBackdoor across five VQA benchmarks on multiple IBM quantum backends, demonstrating significant cut-path error amplification while maintaining full-circuit stealthiness.
- Analysis of attack robustness under different compilation strategies and error mitigation techniques like Zero-Noise Extrapolation.

## About the professor

**Lei Jiang** — Associate Professor of Intelligent Systems Engineering, Intelligent Systems Engineering, Indiana University.

Research interests: privacy-preserving machine learning, hardware accelerator design

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/jiang-lei.html)
- [Identity evidence](http://www.jianglei.org/)
- [Professor website](https://www.jianglei.org/)
- [Resolved homepage](https://unchartedrlab.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** variational quantum algorithms
**The paper assumes:** variational quantum algorithms, parameterized quantum circuits, quantum circuit cutting techniques
**Already in this field?** Skip this entirely if you already understand the theory and implementation of variational quantum algorithms and the basics of circuit cutting in quantum computing.

To understand the CutBackdoor attack on variational quantum algorithms (VQAs), it is essential to grasp the fundamentals of VQAs, their parameterization, and the role of circuit cutting in their execution. The rigorous course option provides a thorough university-level introduction to quantum computing and VQAs, ideal for deep comprehension and technical detail. The fast track offers a concise, focused series on quantum algorithms including VQAs, suitable for a quicker but still substantive background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NPTEL: Introduction to Quantum Computing: Quantum Algorithms and Qiskit](https://www.youtube.com/playlist?list=PLOQcXIh6tBbJhYSpcLdPiLQQ8bpGDEQ1_) — SSKDROID · 25 videos · 12.3h across 25 episodes

**Watch only this:** Watch lectures mod04lec20 - Variational Quantum Algorithms and mod04lec21 - Variational Quantum Eigensolver, about 1 hour total.

*Why it unblocks this paper:* This NPTEL course includes dedicated lectures on Variational Quantum Algorithms and the Variational Quantum Eigensolver, directly covering the core concepts and methods relevant to the paper's focus on VQAs and their execution.

*If you want all of it:* The full course is 12.3 hours across 25 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Algorithms](https://www.youtube.com/playlist?list=PLP_8lL_cb2lth71N1L9dnnf1RiGyY_hVd) — Quantum Khipus · 16 videos · 5.6h across 16 episodes

**Watch only this:** Watch the first episode 'Variational Quantum Algorithms', about 21 minutes.

*Why it unblocks this paper:* This playlist by Quantum Khipus contains a focused episode on Variational Quantum Algorithms and related quantum algorithm topics, providing a clear and visual introduction suitable for quickly building intuition on VQAs.

*If you want all of it:* The full playlist is 5.6 hours across 16 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CutBackdoor attack on variational quantum algorithms, start by building a solid foundation in quantum circuits and variational quantum algorithms, as these are the fundamental building blocks exploited by the attack. Next, explore the security context of quantum machine learning and backdoor attacks to grasp the adversarial landscape. Finally, focus on the paper's core contribution by reviewing the authors' own talk, which provides direct insights into the novel CutBackdoor attack and its dual-objective optimization framework.

### Circuit cutting in quantum computing *(prerequisite)*
Circuit cutting is a fundamental technique that enables running large quantum circuits on limited hardware by decomposing them into smaller subcircuits. Understanding this technique is essential because the CutBackdoor attack exploits the variance amplification in the circuit cutting reconstruction pipeline to trigger the backdoor.

*How the paper uses it:* The attack leverages the circuit cutting technique as the trigger mechanism to induce errors undetectable in full-circuit execution but amplified in cut-path execution.

▶ [Ph CS 219A Lecture 11 Quantum Circuits](https://www.youtube.com/watch?v=XVRbS0Qhxmw) — John Preskill · 1:17:26 · 5 years ago

### Variational quantum algorithms *(prerequisite)*
Variational quantum algorithms (VQAs) are hybrid quantum-classical algorithms that optimize parameterized quantum circuits to solve problems in chemistry, optimization, and machine learning. A thorough understanding of VQAs is critical since CutBackdoor targets the parameters of these algorithms to embed stealthy backdoors.

*How the paper uses it:* CutBackdoor specifically targets variational quantum algorithms by poisoning their parameters to behave normally under full-circuit execution but cause errors under circuit cutting.

▶ [Critical Points in Hamiltonian Agnostic Variational Quantum Algorithms, Eric Anschuetz, #QRST](https://www.youtube.com/watch?v=OnV7zdnYM6o) — Quantum Research Seminars Toronto · 31:54 · 4 years ago

### Quantum machine learning security *(prerequisite)*
Quantum machine learning security studies the vulnerabilities and defenses of quantum machine learning models against adversarial and supply-chain attacks. This context is vital to appreciate the significance and novelty of the CutBackdoor attack in the emerging field of quantum ML security.

*How the paper uses it:* The paper addresses a new security risk in quantum machine learning supply chains by demonstrating a backdoor attack exploiting circuit cutting.

▶ [Maria Schuld - How to rethink quantum machine learning - IPAM at UCLA](https://www.youtube.com/watch?v=VVY8xcps3N4) — Institute for Pure & Applied Mathematics (IPAM) · 43:04 · 2 years ago

### Backdoor attacks in quantum computing *(prerequisite)*
Backdoor attacks involve embedding hidden malicious behaviors into models or systems that activate under specific triggers. Understanding classical and quantum backdoor attacks provides the necessary background to grasp the mechanisms and implications of CutBackdoor.

*How the paper uses it:* CutBackdoor is a novel backdoor attack that exploits the circuit cutting execution path as a trigger without modifying the circuit structure.

▶ [April 16 Visitor Talk: Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=uoYEWZY16Uc) — Vector Institute · 55:25 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the CutBackdoor paper, start by learning the basics of quantum circuits and how they represent quantum computations, which is essential for grasping circuit cutting. Next, build intuition on variational quantum algorithms (VQAs), the core quantum algorithm framework targeted by the attack. Then, explore the concept of backdoor attacks in machine learning and quantum computing to appreciate the security risks. Finally, focus on the specific CutBackdoor dual-objective optimization method that enables stealthy parameter poisoning exploiting circuit cutting.

### Circuit cutting in quantum computing *(prerequisite)*
Quantum circuits are the building blocks of quantum computations, representing sequences of quantum gates acting on qubits. Circuit cutting is a technique that splits large quantum circuits into smaller subcircuits to run on limited hardware, then reconstructs the full output. Understanding this is crucial because CutBackdoor exploits vulnerabilities in this reconstruction process.

*How the paper uses it:* CutBackdoor exploits the circuit cutting technique to trigger backdoor behavior during subcircuit execution.

▶ [Quantum Computing: Quantum Circuit Example](https://www.youtube.com/watch?v=xNE1cTWnJQY) — Advanced Maths · 31:13 · 5 years ago

### Variational quantum algorithms *(prerequisite)*
Variational Quantum Algorithms (VQAs) use parameterized quantum circuits optimized with classical algorithms to solve problems like chemistry simulations and optimization. They are central to near-term quantum computing applications and the target of the CutBackdoor attack.

*How the paper uses it:* CutBackdoor targets variational quantum algorithms by poisoning their parameters to behave maliciously under circuit cutting.

▶ [What Is the Variational Quantum Eigensolver? | VQE Explained](https://www.youtube.com/watch?v=DUq-0r-Prw0) — Qiskit · 12:47 · 9 months ago

### Backdoor attacks in quantum computing *(prerequisite)*
Backdoor attacks embed hidden malicious behavior into machine learning models that activate under specific triggers, remaining undetected during normal use. In quantum computing, such attacks can manipulate quantum algorithms via parameter poisoning or circuit modifications, posing serious security risks.

*How the paper uses it:* CutBackdoor is a novel backdoor attack exploiting the circuit cutting execution path in quantum algorithms.

▶ [April 16 Visitor Talk: Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=uoYEWZY16Uc) — Vector Institute · 55:25 · 5 years ago

## Already in your library

- [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Quantum Neural Networks explained in 3Blue1Brown style animation | Episode 1, Introduction](https://www.youtube.com/watch?v=xL383DseSpE) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Neural Cleanse: Identifying and Mitigating Backdoor Attacks in ...](https://www.youtube.com/watch?v=krVLXbGdlEg) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Multiobjective optimization](https://www.youtube.com/watch?v=ELLHqHk32II) — also for: Optimizing Relevance and Diversity in Online Matching Markets: A Time-Adaptive Attenuation Approach (Pan Xu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the CutBackdoor attack on variational quantum algorithms exploiting circuit cutting. The beginner project reproduces a core mechanism of variance amplification in circuit cutting using classical simulation. The intermediate project implements a simplified version of the CutBackdoor dual-objective optimization to poison VQE parameters and measures error amplification under circuit cutting. The advanced project extends the attack framework to explore robustness against alternative circuit cutting methods, addressing a future direction of the paper.

### Beginner — Simulate Variance Amplification in Circuit Cutting
*Effort: a weekend, ~8 hours*

You build a classical simulation that models the variance amplification effect in circuit cutting as described in the paper. Using simple parameterized quantum circuits simulated with a Python quantum simulator (e.g., Qiskit Aer), you demonstrate how finite-shot sampling noise is amplified when reconstructing cut circuits compared to full-circuit execution.

**Why it shows you understood the paper:** This project shows you understand the key vulnerability exploited by CutBackdoor: the variance amplification in the circuit cutting pipeline that enables stealthy backdoors. A professor would see you grasp the fundamental mechanism behind the attack.

**Grounded in:** The attack steers subcircuits into regions where local variance is large, and the cutting pipeline amplifies these fluctuations, inflating sampling error on the cut-path while full-circuit behavior remains stable (§5.5, §5.6).

**Tech stack:** Python 3.11, Qiskit Aer simulator, Jupyter Notebook

**Data:** Simulated parameterized quantum circuits with small numbers of qubits (e.g., 4-6 qubits) generated in code; no external dataset required.

**Build it:**

1. Set up a parameterized quantum circuit in Qiskit with a small number of qubits.
2. Simulate full-circuit execution with finite-shot sampling and record measurement variance.
3. Implement a simple wire-cutting scheme to split the circuit into subcircuits and reconstruct the full circuit output.
4. Simulate finite-shot sampling on subcircuits and reconstruct the output, measuring variance amplification compared to full-circuit.
5. Visualize and compare variance/error amplification between full and cut execution.

**Ships as:** A Jupyter notebook demonstrating variance amplification in circuit cutting with plots comparing full-circuit and cut-path sampling variance.

**Stretch goal:** Add noise models to simulate realistic hardware noise and observe its effect on variance amplification.

### Intermediate — Implement CutBackdoor Dual-Objective Optimization on VQE
*Effort: 2 weekends, ~20 hours*

You reimplement the core CutBackdoor attack by training poisoned variational parameters on a small VQE benchmark (e.g., molecular hydrogen H2) using a classical simulator. You optimize parameters to behave normally under full-circuit execution but induce amplified errors under circuit cutting execution, then compare energy errors against clean parameters.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper’s main method—dual-objective optimization for parameter poisoning—and validate the stealthiness and error amplification metrics. A professor would see you can translate the paper’s theoretical framework into a working attack simulation.

**Grounded in:** Development of CutBackdoor, the first parameter-supply-chain backdoor exploiting circuit cutting as a trigger without circuit modification (§Abstract, §6). CutBackdoor amplifies cut-path energy errors by factors of 1.3× to 2.9× over clean baselines on VQE benchmarks (§7.1).

**Tech stack:** Python 3.11, Qiskit, SciPy or PyTorch for optimization, Jupyter Notebook

**Data:** Simulated VQE benchmark for molecular hydrogen (H2) using standard Hamiltonian from Qiskit chemistry modules; no external dataset needed.

**Build it:**

1. Set up a VQE simulation for molecular hydrogen using Qiskit with parameterized ansatz circuits.
2. Implement full-circuit and circuit-cut execution paths with finite-shot sampling simulation.
3. Formulate and implement the dual-objective optimization to train poisoned parameters that minimize full-circuit energy error but maximize cut-path reconstruction error.
4. Train poisoned parameters starting from clean parameters and compare energy errors under both execution modes.
5. Visualize and report error amplification and stealthiness metrics.

**Ships as:** A Jupyter notebook or Python script showing the CutBackdoor attack on VQE with plots of energy errors and comparison to clean parameters.

**Stretch goal:** Experiment with different circuit cutting placements and analyze their impact on attack effectiveness.

### Advanced — Extend CutBackdoor to QPD-Based Gate Cutting
*Effort: 3+ weeks*

You extend the CutBackdoor attack framework to a different circuit cutting paradigm—quasi-probability decomposition (QPD)-based gate cutting—addressing a future direction of the paper. You adapt the dual-objective optimization to poison parameters that trigger amplified errors under QPD-based cutting, and evaluate robustness compared to wire-cutting.

**Why it shows you understood the paper:** This project shows you deeply understand the paper’s limitations and future directions by tackling a new cutting method not studied in the paper. A professor would see you can innovate on the paper’s core ideas and contribute novel insights into attack robustness across cutting paradigms.

**Grounded in:** Extending the attack framework to other circuit cutting paradigms such as QPD-based gate cutting is a stated future direction (§8). The attack’s effectiveness depends on the victim using standard CutQC wire-cutting; generalization requires further study (§Limitations).

**Tech stack:** Python 3.11, Qiskit, SciPy or PyTorch, Jupyter Notebook, Possibly Qiskit Pulse or advanced Qiskit modules for gate cutting simulation

**Data:** Simulated VQE or VQD benchmarks with parameterized circuits; no external dataset required.

**Build it:**

1. Research and implement a QPD-based gate cutting simulation pipeline compatible with Qiskit.
2. Adapt the dual-objective optimization framework to incorporate QPD-based cutting reconstruction error as the attack trigger.
3. Train poisoned parameters on a small VQE benchmark to maximize error amplification under QPD cutting while maintaining full-circuit stealthiness.
4. Compare attack effectiveness and robustness against wire-cutting based CutBackdoor.
5. Document challenges, limitations, and potential mitigation strategies.

**Ships as:** A comprehensive Jupyter notebook or repository demonstrating CutBackdoor adapted to QPD-based gate cutting with comparative analysis and discussion.

**Stretch goal:** Investigate adaptive circuit cutting strategies that disrupt the backdoor trigger as a defense mechanism.
