---
title: "481 · Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation — Samah Mohamed Saeed"
date: 2026-08-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-samah-mohamed-saeed"
source_hash: "aa14ab4d9d6a4364d6e106b59e9b6fe8f730f0b8616ebea988020067994d4f20"
sequence: 481
generator: "outreach-garden: managed"
---

# 481 · Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation

## At a glance

- **Professor:** Samah Mohamed Saeed
- **Institution:** CUNY
- **Paper:** [Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation](https://arxiv.org/abs/2201.12946)
- **Authors:** Vedika Saravanan, Samah Mohamed Saeed
- **Year:** 2022

## Paper overview

This paper addresses how to improve the reliability of quantum circuits on noisy quantum computers by reordering quantum gates based on how errors propagate through the circuit. The authors propose new metrics and algorithms that consider the order of gates and their error rates to reschedule gates, thereby improving the fidelity of quantum computations without increasing circuit depth or gate count. They validate their methods experimentally on IBM quantum computers, showing significant improvements in output fidelity.

### Why it matters

**Research problem:** Noisy Intermediate-Scale Quantum (NISQ) computers suffer from gate errors that degrade the fidelity of quantum algorithms. Existing compilation methods often ignore the detailed order of gates that do not affect circuit depth or gate count but can influence error propagation paths and thus the overall circuit reliability.

**Why it matters:** Improving the fidelity of quantum circuits on NISQ devices is critical to realizing practical quantum advantage. Since quantum error correction is not yet feasible at scale, optimizing gate scheduling to mitigate errors can significantly enhance quantum algorithm performance on current hardware.

**Key contributions:**

- Introduction of the WESP metric that accounts for gate error propagation paths in estimating circuit success probability.
- Development of gate rescheduling algorithms post-quantum circuit mapping that reorder gates to improve output fidelity while preserving circuit depth and gate count.
- Extension of rescheduling to complex ZZ gates in QAOA circuits to further enhance fidelity.
- Experimental validation on multiple IBM quantum architectures showing improved fidelity across diverse quantum circuits.

## About the professor

**Samah Mohamed Saeed** — CUNY.

Research interests: Noise Adaptive Quantum Circuit Mapping, Data-Driven Reliability Models of Quantum Circuit, Quantum Circuit Error Mitigation, Quantum Circuit Compilation for NISQ computers

### Research links

- [Faculty/profile page](https://sers.ccny.cuny.edu/)
- [Identity evidence](https://www.gc.cuny.edu/people/samah-saeed)
- [Identity evidence](https://www.ccny.cuny.edu/profiles/samah-saeed)
- [Identity evidence](https://sers.ccny.cuny.edu/samah-mohamed-ahmed-saeed)
- [Identity evidence](https://sers.ccny.cuny.edu/publications)
- [Google Scholar](https://scholar.google.com/citations?user=bdOGHkwAAAAJ)
- [GitHub](https://github.com/CCNY-Reliable-Quantum-Systems-Projects)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum error correction and noise models
**The paper assumes:** quantum error correction, quantum noise models, Pauli error propagation
**Already in this field?** Skip this entirely if you already understand quantum error correction basics and how quantum noise models, especially Pauli errors, affect quantum circuits.

Understanding quantum error correction and noise models, especially Pauli error propagation, is crucial for grasping the methods and metrics introduced in this paper on gate rescheduling for error mitigation. The rigorous course offers a deep, structured foundation suitable for thorough comprehension, while the fast track provides a concise, focused introduction to the core concepts for quicker preparation. Choose the course for detailed study and the fast track for a time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yale Quantum Institute Course on Quantum Error Correction](https://www.youtube.com/playlist?list=PLh9mgdi4rNewrbMExcT-dzW-tH2mjkagq) — YaleCourses · 7 videos · 11.6h across 7 episodes

**Watch only this:** Class 1 - Steve Girvin: Introduction to Classical and Quantum Errors Corrections, Class 2 - Yongshan Ding: Quantum Codes, Stabilizers, and Computation, and Class 3 - Daniel Weiss: Introduction to Bosonic Modes and Kraus Operators; about 5 hours total — these cover the fundamentals of quantum errors, stabilizer codes, and noise modeling essential for this paper.

*Why it unblocks this paper:* The Yale Quantum Institute Course on Quantum Error Correction is a focused, authoritative university-level series that covers quantum error detection, correction, and stabilizer codes, directly relevant to understanding Pauli error propagation and error metrics like WESP used in the paper.

*If you want all of it:* All 7 episodes, about 11.6 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Error Correction Series](https://www.youtube.com/playlist?list=PLD9iE8dbH_2VT2mgoeEXfswH52QN3Y2cf) — Quantumgrad · 6 videos · 5.3h across 6 episodes

**Watch only this:** Episodes 1-3: 'Quantum error correction (QEC) Tutorial -1| Kishor Bharti' through 'Quantum Error Correction (QEC) Tutorial - 3 | Kishor Bharti'; about 2.7 hours total — these episodes cover the essential principles of quantum errors and correction needed to understand the paper's methods.

*Why it unblocks this paper:* The Quantum Error Correction Series by Quantumgrad is a concise, well-structured set of tutorials that clearly explain the basics of quantum error correction and error models, providing a quick yet solid introduction to the concepts underlying the paper's approach.

*If you want all of it:* All 6 episodes, about 5.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation, start with foundational knowledge on Pauli error propagation in quantum circuits and quantum error mitigation techniques to grasp how errors affect quantum computations and the broader context of mitigation strategies. Next, study quantum circuit compilation and mapping to understand how circuits are prepared for hardware execution. Then, learn about the Quantum Approximate Optimization Algorithm (QAOA), since the paper extends its methods to complex ZZ gates in QAOA circuits. Finally, focus on the paper's core concept of quantum gate rescheduling algorithms, including the authors' own talk if available, to understand their novel approach and experimental validation.

### Pauli error propagation in quantum circuits *(prerequisite)*
This section covers the fundamental theory of how Pauli errors propagate through quantum circuits, which is critical to understanding the error propagation model used in the paper. The selected talk presents rigorous research-level insights into Pauli noise estimation and propagation relevant to error correction and mitigation.

*How the paper uses it:* The paper's approach relies on modeling Pauli error propagation to inform gate rescheduling decisions that improve circuit fidelity.

▶ [Andrew Eddins | Error Mitigation Landscape | QDC 2025](https://www.youtube.com/watch?v=ix52wx4_zek) — Qiskit · 51:13 · 8 months ago

### Quantum error mitigation techniques *(prerequisite)*
This section situates the paper's gate rescheduling method within the broader landscape of quantum error mitigation strategies, providing theoretical insights into how error mitigation can be made effective on NISQ devices.

*How the paper uses it:* Understanding existing error mitigation methods helps contextualize the paper's contribution to improving fidelity through gate rescheduling.

▶ [Making Quantum Error Mitigation Work - Insights from Theory](https://www.youtube.com/watch?v=OlrSnXglZWQ) — Fields Institute · 24:33 · 3 years ago

### Quantum circuit compilation and mapping *(prerequisite)*
This section explains how quantum circuits are compiled and mapped onto hardware, a necessary step before applying gate rescheduling. The chosen talks provide detailed discussions on timing, resource-aware mapping, and layout synthesis relevant to the paper's post-mapping gate rescheduling approach.

*How the paper uses it:* The paper performs gate rescheduling after circuit mapping, so understanding compilation and mapping is essential.

▶ [(IWQC20) Lingling Lao: Timing and resource-aware mapping of quantum circuits to superconducting ...](https://www.youtube.com/watch?v=9UGzDvfobNo) — Cambridge Quantum · 24:14 · Streamed 5 years ago

### Quantum Approximate Optimization Algorithm (QAOA) *(prerequisite)*
QAOA is an important application context for the paper, which extends gate rescheduling to complex ZZ gates in QAOA circuits. The selected talk by Peter Shor is a rigorous tutorial from a leading expert, providing deep insight into QAOA theory and implementation.

*How the paper uses it:* The paper applies its gate rescheduling algorithms to QAOA circuits, improving fidelity by rescheduling complex ZZ gates.

▶ [Quantum Approximate Optimization Algorithms (Peter Shor, ISCA 2018)](https://www.youtube.com/watch?v=HHIWUi3GmdM) — Quantum Computing · 29:34 · 8 years ago

### Quantum gate rescheduling algorithms
This core section focuses on the central method of the paper: algorithms for gate rescheduling that reorder gates to mitigate error propagation without increasing circuit depth or gate count. The chosen talk is a university lecture on gate scheduling in quantum compilation, providing a rigorous and relevant background to the paper's approach.

*How the paper uses it:* The paper's key contribution is the development of gate rescheduling algorithms to improve quantum circuit fidelity based on error propagation.

▶ [Lecture6a: Compilation: Gate Scheduling | Quantum Computer Systems @ UChicago, Jonathan Baker](https://www.youtube.com/watch?v=HBtj5ggGpj4) — Quantum Computing · 22:42 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Pauli error propagation-based gate rescheduling for quantum circuit error mitigation, start by learning the basics of quantum circuit compilation and mapping, which explains how quantum circuits are prepared for execution on hardware. Next, grasp the concept of Pauli error propagation in quantum circuits to understand how errors spread and affect reliability. Then, study quantum error mitigation techniques to see the broader context of improving NISQ device performance. After that, learn about quantum gate rescheduling algorithms, the core method used in the paper to reorder gates for fidelity improvement. Finally, explore the Quantum Approximate Optimization Algorithm (QAOA), an important application context where the paper extends its methods for further gains.

### Quantum circuit compilation and mapping *(prerequisite)*
Quantum circuit compilation and mapping cover how high-level quantum algorithms are transformed into sequences of hardware-executable gates, respecting hardware constraints and optimizing performance. This foundational knowledge is essential to understand how gate order and scheduling affect circuit execution on real devices.

*How the paper uses it:* The paper applies gate rescheduling after circuit mapping to improve fidelity without increasing depth or gate count.

▶ [Mapping Computational Problems onto Quantum Circuits with Kevin Sung: Qiskit Summer School 2024](https://www.youtube.com/watch?v=TyFU6r8uEsE) — Qiskit · 1:02:18 · 1 year ago

### Pauli error propagation in quantum circuits *(prerequisite)*
Pauli error propagation explains how quantum errors, modeled as Pauli operators, spread through quantum gates and affect multiple qubits, influencing overall circuit reliability. Understanding this helps grasp why gate order impacts error accumulation and circuit fidelity.

*How the paper uses it:* The paper’s novel metric and rescheduling algorithms rely on modeling error propagation paths using Pauli errors.

▶ [Andrew Eddins | Error Mitigation Landscape | QDC 2025](https://www.youtube.com/watch?v=ix52wx4_zek) — Qiskit · 51:13 · 8 months ago

### Quantum error mitigation techniques *(prerequisite)*
Quantum error mitigation encompasses strategies to reduce the impact of noise and errors on NISQ devices without full error correction, improving computation accuracy. This context helps situate the paper’s gate rescheduling approach among other fidelity enhancement methods.

*How the paper uses it:* The paper’s gate rescheduling complements existing error mitigation techniques by focusing on gate ordering based on error propagation.

▶ [Making Quantum Error Mitigation Work - Insights from Theory](https://www.youtube.com/watch?v=OlrSnXglZWQ) — Fields Institute · 24:33 · 3 years ago

### Quantum gate rescheduling algorithms
Quantum gate rescheduling algorithms reorder quantum gates to minimize error propagation and improve output fidelity while preserving circuit depth and gate count. This method is key to the paper’s contribution in enhancing quantum circuit reliability on noisy hardware.

*How the paper uses it:* The core contribution of the paper is developing efficient gate rescheduling algorithms guided by the WESP metric.

▶ [Lecture6a: Compilation: Gate Scheduling | Quantum Computer Systems @ UChicago, Jonathan Baker](https://www.youtube.com/watch?v=HBtj5ggGpj4) — Quantum Computing · 22:42 · 5 years ago

### Quantum Approximate Optimization Algorithm (QAOA) *(prerequisite)*
QAOA is a hybrid quantum-classical algorithm for combinatorial optimization, involving parameterized quantum circuits with complex ZZ gates. Understanding QAOA provides insight into the paper’s extension of gate rescheduling to complex gates for improved fidelity.

*How the paper uses it:* The paper extends gate rescheduling to complex ZZ gates in QAOA circuits to achieve better error mitigation.

▶ [Lecture 5.2 - Introduction to the Quantum Approximate Optimization Algorithm and Applications](https://www.youtube.com/watch?v=YpLzSQPrgSc) — Qiskit · 46:56 · 4 years ago

## Already in your library

- [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [Daniel Gottesman - Quantum Error Correction and Fault Tolerance (Part 1) - CSSQI 2012](https://www.youtube.com/watch?v=ltJ1jXQeDl8) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Steve Girvin - Introduction to Quantum Error Correction](https://www.youtube.com/watch?v=uD69GCYF9Zg) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Error Mitigation Explained Simply](https://www.youtube.com/watch?v=GnBeJxAmt8g) — also for: Co-Designing Error Mitigation and Error Detection for Logical Qubits (Yongshan Ding)
- [Quantum Computing: Quantum Circuit Example](https://www.youtube.com/watch?v=xNE1cTWnJQY) — also for: CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms (Lei Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Pauli Error Propagation-Based Gate Rescheduling for Quantum Circuit Error Mitigation." The beginner project reproduces the core idea of gate rescheduling based on error propagation on a small quantum circuit using IBM Qiskit. The intermediate project implements the Weighted Estimated Success Probability (WESP) metric and applies gate rescheduling to improve fidelity on a benchmark circuit, comparing results to a baseline. The advanced project extends the paper's approach by integrating a simple model of correlated errors or crosstalk into the gate rescheduling algorithm, addressing one of the paper's stated limitations and opening a path for research collaboration.

### Beginner — Gate Rescheduling on Bernstein–Vazirani Circuit Using Qiskit
*Effort: a weekend, ~8 hours*

You build a small quantum circuit for the 4-qubit Bernstein–Vazirani algorithm using Qiskit, then implement a simple gate rescheduling heuristic that reorders gates based on their error rates and commutation rules without increasing circuit depth or gate count. You simulate the circuit before and after rescheduling using Qiskit's noise model to observe fidelity improvements.

**Why it shows you understood the paper:** This project shows you understand the paper's core concept of how gate order affects error propagation and circuit fidelity, and how rescheduling can improve output without changing circuit depth or gate count.

**Grounded in:** Reordered circuits based on WESP showed higher Probability of Successful Trials (PST) compared to baseline circuits generated by Qiskit. For example, a 4-qubit Bernstein–Vazirani circuit executed on IBM Q Santiago showed an increase in PST from 0.784 to 0.861 by gate rescheduling.

**Tech stack:** Python 3.11, Qiskit, Jupyter Notebook

**Data:** Simulated 4-qubit Bernstein–Vazirani circuit with Qiskit's built-in noise model for IBM Q Santiago device as a substitute for real hardware runs.

**Build it:**

1. Implement the 4-qubit Bernstein–Vazirani circuit in Qiskit.
2. Extract gate error rates from Qiskit's IBM Q Santiago noise model.
3. Develop a simple gate rescheduling function that reorders gates based on commutation and error rates without increasing circuit depth or gate count.
4. Simulate the original and rescheduled circuits using Qiskit's noise model and compute fidelity or success probability.
5. Compare and document the fidelity improvement due to rescheduling.

**Ships as:** A GitHub repo with code and a README showing the original and rescheduled circuits, simulation results, and a discussion of fidelity improvements.

**Stretch goal:** Add visualization of gate error propagation paths and how rescheduling changes them.

### Intermediate — Implementing WESP Metric and Gate Rescheduling on QAOA Circuits
*Effort: 2 weekends, ~20 hours*

You implement the Weighted Estimated Success Probability (WESP) metric from the paper to estimate circuit success probability considering error propagation paths. Then you develop gate rescheduling algorithms for elementary and complex ZZ gates in QAOA circuits, applying them to a small QAOA instance. You compare output fidelity improvements against baseline circuits generated by Qiskit.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core metric and algorithms, apply them to a relevant quantum algorithm (QAOA), and quantitatively evaluate fidelity improvements, showing deep comprehension of the paper's contributions.

**Grounded in:** Introduction of the WESP metric that accounts for gate error propagation paths in estimating circuit success probability. Development of gate rescheduling algorithms post-quantum circuit mapping that reorder gates to improve output fidelity while preserving circuit depth and gate count. Applying both complex ZZ gate rescheduling and elementary gate rescheduling on QAOA circuits yielded the best reduction in Approximation Ratio Gap (ARG), indicating improved output fidelity.

**Tech stack:** Python 3.11, Qiskit, NumPy, Matplotlib

**Data:** Simulated QAOA circuits on small problem instances (e.g., MaxCut on 3-4 nodes) using Qiskit's noise models as a substitute for real hardware.

**Build it:**

1. Implement the WESP metric calculation based on gate error rates and error propagation paths as described in the paper.
2. Create gate rescheduling algorithms for elementary gates and complex ZZ gates respecting commutation rules and preserving circuit depth and gate count.
3. Generate baseline QAOA circuits for small problem instances using Qiskit.
4. Apply your rescheduling algorithms to the baseline circuits.
5. Simulate both baseline and rescheduled circuits under noise and compute Approximation Ratio Gap (ARG) or fidelity metrics.
6. Document the fidelity improvements and analyze the impact of rescheduling.

**Ships as:** A GitHub repo with code implementing WESP, gate rescheduling algorithms, scripts to run QAOA circuits, and a detailed README with fidelity comparison results and analysis.

**Stretch goal:** Add a simple GUI or visualization to interactively show gate schedules and their WESP scores.

### Advanced — Extending Gate Rescheduling to Account for Correlated Errors and Crosstalk
*Effort: 3-4 weeks*

You extend the paper's gate rescheduling framework by integrating a simple model of correlated errors or crosstalk between qubits into the WESP metric and rescheduling decisions. You modify the error propagation model to include correlated noise effects and evaluate the impact on fidelity for benchmark circuits on simulated noisy hardware with correlated noise. This addresses a key limitation noted in the paper and explores a future research direction.

**Why it shows you understood the paper:** This project shows you can critically analyze the paper's limitations, design and implement a meaningful extension to the error model and rescheduling algorithm, and experimentally evaluate its benefits, demonstrating readiness for research collaboration.

**Grounded in:** The approach focuses on gate errors and does not explicitly address other noise sources like decoherence or crosstalk, though it can be combined with methods targeting those. Future directions include integrating the proposed gate rescheduling with compilation approaches targeting decoherence and correlated errors for further fidelity improvements.

**Tech stack:** Python 3.11, Qiskit, NumPy, SciPy, Matplotlib

**Data:** Simulated quantum circuits with added correlated noise models implemented in Qiskit Aer or custom noise simulation; no real hardware data required.

**Build it:**

1. Review the paper's WESP metric and gate rescheduling algorithms.
2. Research simple models of correlated errors and crosstalk in quantum circuits.
3. Extend the WESP metric to incorporate correlated error probabilities between qubits.
4. Modify the gate rescheduling algorithm to optimize the extended WESP metric.
5. Simulate benchmark circuits (e.g., Bernstein–Vazirani, QAOA) under correlated noise models with and without rescheduling.
6. Analyze and document the fidelity improvements and limitations of your extended approach.

**Ships as:** A GitHub repo with extended WESP and rescheduling code, simulation scripts for correlated noise, and a comprehensive README discussing methodology, results, and future work.

**Stretch goal:** Propose integration of your extended rescheduling with existing decoherence-aware compilation techniques and outline an experimental plan for real hardware validation.
