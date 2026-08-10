---
title: "071 · Autonomous Hamiltonian certification and changepoint detection — Steven T. Flammia"
date: 2026-07-29
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steven-t-flammia"
source_hash: "659d97be0ff3fddeaf507101c7c53b3ec1210d31d3dcc91d40173834971ee73c"
sequence: 71
generator: "outreach-garden: managed"
---

# 071 · Autonomous Hamiltonian certification and changepoint detection

## At a glance

- **Professor:** Steven T. Flammia
- **Institution:** Virginia Tech
- **Paper:** [Autonomous Hamiltonian certification and changepoint detection](https://arxiv.org/pdf/2603.26655)
- **Authors:** Steven T. Flammia, Dmitrii Khitrin, Muzhou Ma, Jamie Sikora, Yu Tong, Alice Zheng
- **Year:** 2026

## Paper overview

This paper develops efficient protocols for quantum devices to autonomously certify their Hamiltonian dynamics and detect changes in calibration without relying on external noiseless devices or complex multi-qubit operations. The methods use only single-qubit gates and measurements, enabling robust, continuous monitoring of quantum hardware calibration status and triggering recalibration when necessary.

### Why it matters

**Research problem:** Quantum devices require precise Hamiltonian dynamics for accurate computation and simulation, but environmental noise causes parameter drift over time, necessitating recalibration. Detecting when recalibration is needed is challenging, especially without access to noiseless reference devices or complex multi-qubit operations that themselves require calibration.

**Why it matters:** Frequent recalibration causes downtime and degrades quantum computation reliability. Autonomous, efficient detection of miscalibration enables robust quantum computing on noisy devices, improving practical usability and performance of current quantum hardware.

**Key contributions:**

- An autonomous Hamiltonian certification protocol with sample complexity O(n M^2 ln(1/δ)/ϵ^2) and total evolution time O(n M ln(1/δ)/ϵ^2), using only single-qubit operations.
- An online changepoint detection algorithm based on CUSUM that detects Hamiltonian drifts with asymptotically optimal delay scaling.
- A theoretical analysis bounding fidelity between evolved states and relating it to the Frobenius norm difference of Hamiltonians.
- Demonstration that the protocols do not require ancillas, entangled measurements, controlled evolution, or a trusted reference device.
- Numerical simulations validating the certification and changepoint detection performance on Rydberg Hamiltonians.

## About the professor

**Steven T. Flammia** — Professor, Computer Science, Virginia Tech.

Research interests: Quantum information theory, Condensed matter theory, Topologically ordered phases, Tensor networks, Error correction, Quantum optics, Precision metrology, Classical statistical inference, Machine learning

### Research links

- [Faculty/profile page](https://iac.vt.edu/about/faculty/flammia-steven.html)
- [Identity evidence](https://phys.vt.edu/people/faculty/steven-flammia.html)
- [Identity evidence](https://sflammia.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=-VnX0xYAAAAJ&hl=en&oi=ao)
- [GitHub](https://github.com/sflammia)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** quantum Hamiltonian dynamics
**The paper assumes:** quantum mechanics of Hamiltonian operators, unitary evolution, and operator norm metrics
**Already in this field?** Skip this entirely if you already understand quantum system evolution under Hamiltonians and the associated mathematical formalism.

To understand the autonomous Hamiltonian certification and changepoint detection protocols in this paper, a solid grasp of quantum Hamiltonian dynamics is essential. The rigorous course option offers a deep, structured university-level treatment of quantum perturbation theory and Hamiltonian spectral properties, ideal for thorough comprehension. The fast track provides a concise, focused introduction to the Schrödinger equation and time evolution in quantum mechanics, suitable for quickly gaining the core concepts needed to follow the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 8.06 Quantum Physics III, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP60Zcz8LnCDFI8RPqRhJbb4L) — MIT OpenCourseWare · 100 videos · 17.4h across the first 60 episodes

**Watch only this:** Lectures L1.1 through L3.4 (episodes 1 to 12), about 3.4 hours — covering perturbation theory, energy and state corrections, and basis considerations essential for grasping Hamiltonian dynamics and their perturbations.

*Why it unblocks this paper:* MIT 8.06 Quantum Physics III is a rigorous university course covering perturbation theory, energy corrections, and Hamiltonian spectral properties, directly relevant to understanding the paper's theoretical analysis of Hamiltonian differences and state evolution.

*If you want all of it:* About 17.4 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Time evolution in quantum mechanics](https://www.youtube.com/playlist?list=PL8W2boV7eVflUqUY3dLhQdYuZjlbXi0mU) — Professor M does Science · 6 videos · 2.0h across 6 episodes

**Watch only this:** All 6 episodes, about 2.0 hours — covering the Schrödinger equation, time evolution operators, Ehrenfest theorem, constants of motion, time-energy uncertainty, and Schrödinger vs. Heisenberg pictures.

*Why it unblocks this paper:* This short playlist focuses specifically on time evolution in quantum mechanics, including the Schrödinger equation and time evolution operators, providing a concise and intuitive foundation for understanding how quantum states evolve under Hamiltonians, which is central to the paper's protocols.

*If you want all of it:* 2.0 hours across 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on autonomous Hamiltonian certification and changepoint detection, start with foundational knowledge of quantum Hamiltonian dynamics and classical changepoint detection methods like CUSUM. Then, build familiarity with single-qubit adaptive measurements, which are the experimental backbone of the protocols. Finally, focus on the core topic of quantum Hamiltonian certification through advanced seminar talks, culminating in the authors' own related presentations for the most direct insights.

### Quantum Hamiltonian dynamics *(prerequisite)*
This foundational concept covers how quantum systems evolve under Hamiltonians, essential for understanding the dynamics the paper aims to certify and monitor. The selected lecture from IIT Madras provides a rigorous university-level treatment of Hamiltonian dynamics, suitable for advanced readers.

*How the paper uses it:* Understanding Hamiltonian dynamics is crucial to grasp how the paper's protocols certify and detect changes in quantum device Hamiltonians.

▶ [Mod-01 Lec-10 Hamiltonian dynamics (Part 1)](https://www.youtube.com/watch?v=GOkZs2RZMQY) — nptelhrd · 1:06:30

### Changepoint detection CUSUM *(prerequisite)*
CUSUM is a classical statistical method adapted in the paper for online detection of Hamiltonian parameter drifts. The chosen video is a PhD-level lecture surveying change point detection methods, providing the necessary statistical background for the paper's online detection algorithm.

*How the paper uses it:* The paper extends the classical CUSUM procedure to detect Hamiltonian drifts in quantum devices.

▶ [Change Point Detection in Time Series](https://www.youtube.com/watch?v=JrOnOcnkR-8) — Rasmus Erlemann · 40:59

### Single-qubit adaptive measurements *(prerequisite)*
Single-qubit adaptive measurements are the core experimental technique enabling the paper's autonomous certification and changepoint detection protocols. The selected Qiskit seminar discusses rigorous protocols using few single-qubit measurements, aligning well with the paper's approach.

*How the paper uses it:* The paper's protocols rely exclusively on single-qubit gates and adaptive measurements to avoid complex multi-qubit operations.

▶ [Certifying Almost All Quantum States with Few Single-Qubit ...](https://www.youtube.com/watch?v=o4EIME_ZVnU) — Qiskit · 1:11:38

### Quantum Hamiltonian certification
This is the core concept of the paper, focusing on verifying quantum device dynamics without complex operations. The selected recent quantum seminar on certifying and learning local quantum Hamiltonians offers a rigorous, research-level perspective closely related to the paper's methods.

*How the paper uses it:* The paper develops efficient autonomous protocols for Hamiltonian certification using only single-qubit operations.

▶ [[Quantum Seminar] Myeongjin Shin | Certifying and learning ...](https://www.youtube.com/watch?v=dpjEGZ_KGZY) — Quantum Meets · 1:02:34

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand autonomous Hamiltonian certification and changepoint detection in quantum devices, start by grasping the fundamentals of quantum Hamiltonian dynamics, which describe how quantum systems evolve. Next, learn about single-qubit adaptive measurements, the experimental technique enabling the protocols without complex operations. Then, study the classical CUSUM changepoint detection method adapted here for monitoring quantum calibration drift. Finally, explore quantum Hamiltonian certification methods that verify device behavior efficiently using only single-qubit operations.

### Quantum Hamiltonian dynamics *(prerequisite)*
Quantum Hamiltonian dynamics explain how the state of a quantum system changes over time under the influence of its Hamiltonian, which encodes the system's energy and interactions. Understanding this evolution is essential to grasp how quantum devices operate and why certifying their Hamiltonians matters.

*How the paper uses it:* The paper's protocols certify and monitor the Hamiltonian dynamics of quantum devices to detect calibration drifts.

▶ [What is a Hamiltonian? Quantum Jargon Explained](https://www.youtube.com/watch?v=BusR0WQ_Gxo) — Qiskit · 3 years ago

### Single-qubit adaptive measurements *(prerequisite)*
Single-qubit adaptive measurements involve preparing and measuring individual qubits in a way that adapts based on previous outcomes, enabling efficient extraction of information without complex multi-qubit operations. This technique is experimentally feasible and robust, forming the core of the paper's autonomous certification and detection protocols.

*How the paper uses it:* The paper uses only single-qubit gates and adaptive measurements to certify Hamiltonians and detect changepoints without requiring entanglement or ancillas.

▶ [Certifying Almost All Quantum States with Few Single-Qubit ...](https://www.youtube.com/watch?v=o4EIME_ZVnU) — Qiskit · 1:11:38

### Changepoint detection CUSUM *(prerequisite)*
CUSUM is a classical statistical method that detects changes in the behavior of a process by cumulatively summing deviations from a target value, enabling quick identification of shifts. Understanding CUSUM helps appreciate how the paper adapts it for continuous, online detection of Hamiltonian parameter drifts in quantum devices.

*How the paper uses it:* The paper extends the certification protocol with an online changepoint detection algorithm based on the classical CUSUM procedure.

▶ [23a CUSUM](https://www.youtube.com/watch?v=3tj8RDafRxI) — Matthias Schonlau · 5 years ago

### Quantum Hamiltonian certification
Quantum Hamiltonian certification verifies whether a quantum device's Hamiltonian is close to a target, ensuring correct device behavior. The paper's method achieves this efficiently using only single-qubit operations, avoiding complex multi-qubit controls or trusted references.

*How the paper uses it:* This is the core method developed in the paper to autonomously certify quantum device Hamiltonians with efficient resource scaling.

▶ [Cambyse Rouze - Heisenberg-limited Hamiltonian learning ...](https://www.youtube.com/watch?v=YkS4i0IHOpA) — Institute for Pure & Applied Mathematics (IPAM) · 42:41


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate understanding of the autonomous Hamiltonian certification and changepoint detection protocols from the paper. The beginner project reproduces a core numerical experiment using familiar tools to grasp the certification concept. The intermediate project implements the online changepoint detection algorithm on simulated Hamiltonian data, introducing adaptive measurement logic and classical CUSUM statistics. The advanced project extends the protocol to address a stated limitation by exploring robustness to SPAM errors via noise modeling and mitigation techniques, pushing toward practical applicability.

### Beginner — Simulate and Visualize Hamiltonian Certification Protocol
*Effort: a weekend, ~8 hours*

You build a Python notebook that simulates the autonomous Hamiltonian certification protocol on a small synthetic single-qubit Hamiltonian system. You reproduce the certification test distinguishing whether the unknown Hamiltonian is close or far from a target by computing the Frobenius norm difference and plotting acceptance/rejection probabilities similar to the paper's numerical experiments.

**Why it shows you understood the paper:** This project shows you understand the core certification problem, the role of single-qubit adaptive measurements, and how the protocol uses statistical tests to certify closeness of Hamiltonians with efficient resource scaling.

**Grounded in:** Certification protocol distinguishes whether ∥H − H0∥_F ≥ ϵ or ≤ O(ϵ/√n) with high probability and efficient resource scaling.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic single-qubit Hamiltonians generated in code to simulate small perturbations around a target Hamiltonian.

**Build it:**

1. Implement code to generate random single-qubit Hamiltonians and compute their Frobenius norm difference from a fixed target Hamiltonian.
2. Simulate single-qubit stabilizer product state preparations and measurement outcomes based on the Hamiltonian evolution.
3. Implement the certification statistical test to decide if the unknown Hamiltonian is close or far from the target.
4. Plot acceptance and rejection probabilities as a function of perturbation size, reproducing a figure analogous to the paper's numerical results.
5. Write a README explaining the certification protocol and how the simulation validates its performance.

**Ships as:** A Jupyter notebook with simulation code, plots demonstrating certification accuracy, and a README explaining the protocol and results.

**Stretch goal:** Add simple noise models to simulate imperfect single-qubit gates and observe their effect on certification accuracy.

### Intermediate — Implement Online Changepoint Detection for Hamiltonian Drift
*Effort: 2 weekends, ~20 hours*

You implement the online changepoint detection algorithm based on the classical CUSUM procedure adapted to Hamiltonian certification. Using simulated time-series data of single-qubit measurement outcomes under drifting Hamiltonians, you detect changepoints where the Hamiltonian parameters shift beyond a threshold. You compare detection delay and false alarm rates against a naive thresholding baseline.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's core online changepoint detection contribution, including how adaptive single-qubit measurements feed into classical statistical inference to monitor Hamiltonian calibration in real time.

**Grounded in:** An online changepoint detection algorithm based on CUSUM that detects Hamiltonian drifts with asymptotically optimal delay scaling.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib

**Data:** Simulated sequential single-qubit measurement data generated from time-evolving Hamiltonians with controlled changepoints in parameters.

**Build it:**

1. Simulate time-series data of single-qubit measurement outcomes under a Hamiltonian that changes at unknown times.
2. Implement the CUSUM algorithm to process measurement statistics and detect changepoints online.
3. Implement a baseline changepoint detection method using simple thresholding for comparison.
4. Evaluate detection delay and false alarm rates for both methods across multiple simulation runs.
5. Plot performance metrics and write a README explaining the changepoint detection algorithm and results.

**Ships as:** A Jupyter notebook implementing online changepoint detection with plots comparing CUSUM and baseline performance, plus a README detailing methodology and findings.

**Stretch goal:** Incorporate adaptive measurement selection strategies to optimize detection speed and robustness.

### Advanced — Robust Hamiltonian Certification under SPAM Errors
*Effort: 3-4 weeks*

You extend the autonomous Hamiltonian certification protocol by modeling state preparation and measurement (SPAM) errors and developing mitigation techniques to improve robustness. You simulate certification under noisy single-qubit gates and imperfect measurements, implement noise-aware statistical tests or error mitigation, and evaluate detection sensitivity improvements. This addresses a key limitation noted in the paper.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions, applying practical noise modeling and mitigation to enhance protocol applicability on near-term quantum devices.

**Grounded in:** Protocols require precise single-qubit gate calibration and are not resistant to SPAM errors, which is left for future work.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib

**Data:** Simulated single-qubit measurement data with injected SPAM noise models reflecting realistic gate and measurement imperfections.

**Build it:**

1. Research common SPAM error models relevant to single-qubit gates and measurements.
2. Extend the certification simulation to include SPAM noise in state preparation and measurement outcomes.
3. Develop and implement noise-aware statistical tests or error mitigation techniques to compensate for SPAM errors.
4. Evaluate and compare certification accuracy and detection sensitivity with and without SPAM mitigation.
5. Document the methodology, results, and implications for practical quantum device calibration in a detailed README.

**Ships as:** A comprehensive Jupyter notebook and report demonstrating improved certification robustness under SPAM errors, with code, plots, and analysis.

**Stretch goal:** Explore integration of direct fidelity estimation techniques as an alternative measurement scheme to further improve scaling and robustness.

_No authors' own code or datasets are publicly available for this paper; all data must be simulated based on the paper's descriptions and standard quantum Hamiltonian models._
