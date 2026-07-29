---
title: "071 · Autonomous Hamiltonian certification and changepoint detection — Steven T. Flammia"
date: 2026-07-29
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steven-t-flammia"
source_hash: "358ba7038b8abad287caa4ac0f49094ac2fc7187f1ed1641efb2f1a030a32c28"
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
