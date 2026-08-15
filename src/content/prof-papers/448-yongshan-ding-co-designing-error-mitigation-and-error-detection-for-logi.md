---
title: "448 · Co-Designing Error Mitigation and Error Detection for Logical Qubits — Yongshan Ding"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yongshan-ding"
source_hash: "d61ce9e53f121475f5384698a4f40af6a17de5ced253f133b21400b2fb4768a1"
sequence: 448
generator: "outreach-garden: managed"
---

# 448 · Co-Designing Error Mitigation and Error Detection for Logical Qubits

## At a glance

- **Professor:** Yongshan Ding
- **Institution:** Yale University
- **Paper:** [Co-Designing Error Mitigation and Error Detection for Logical Qubits](https://arxiv.org/abs/2604.19871)
- **Authors:** Rohan S. Kumar, Takahiro Tsunoda, Sophia Xue, Dantong Li, Robert J. Schoelkopf, Yongshan Ding
- **Year:** 2026

## Paper overview

This paper develops a system architecture that combines Quantum Error Detection (QED) and Probabilistic Error Cancellation (PEC) to improve error management in near-term quantum computers. It identifies conditions under which this combination is beneficial, addresses challenges in characterizing error channels due to transient effects in QED, and demonstrates significant error reduction in quantum algorithms like QAOA using Iceberg codes.

### Why it matters

**Research problem:** Near-term quantum computers are noisy and require effective error management techniques. While Quantum Error Correction (QEC) is ideal, current hardware cannot support it fully. Lightweight techniques like QED and PEC exist but have complementary limitations and costs. The problem is how to co-design these two methods to achieve better error mitigation without prohibitive overhead, and how to accurately characterize error channels given position-dependent noise introduced by QED cycles.

**Why it matters:** Effective error mitigation is critical to realizing practical quantum advantage on noisy intermediate-scale quantum (NISQ) devices. Combining QED and PEC could extend the capabilities of current hardware without the large overhead of full QEC. Understanding and overcoming the challenges in their integration can significantly improve the accuracy and efficiency of quantum computations in the near term.

**Key contributions:**

- Derivation of a sampling advantage condition showing when PEC on QED codes reduces overall shot cost compared to PEC on physical qubits alone.
- Identification of the QED interval as a critical architectural parameter governing the cost-accuracy tradeoff and demonstration that optimized intervals enable sampling advantage for high-rate Iceberg codes.
- Discovery of position-dependent logical error behavior caused by a transient error profile in the first QED cycle that corrupts PEC noise models.
- Development of the steady-state extraction protocol, a superoperator inversion technique that isolates steady-state error channels by removing the first-cycle transient.
- End-to-end evaluation demonstrating that PEC+QED with steady-state extraction achieves 2–11× lower absolute error and up to 31× lower mean squared error than PEC alone on physical qubits.

## About the professor

**Yongshan Ding** — Assistant Professor of Computer Science, Applied Physics, Yale University.

Research interests: Computer architecture and algorithms in the context of quantum computing and artificial intelligence; theory and application of quantum error correction; quantum hardware/software interface.

### Research links

- [Faculty/profile page](https://seas.yale.edu/faculty-research/faculty-directory/yongshan-ding)
- [Professor website](https://www.yongshanding.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum Error Correction
**The paper assumes:** quantum error correction theory, stabilizer codes, logical qubits, and quantum noise channels
**Already in this field?** Skip this entirely if you already have a solid understanding of quantum error correction codes and their role in fault-tolerant quantum computing.

This background focuses on Quantum Error Correction (QEC), essential for understanding the co-design of Quantum Error Detection (QED) and Probabilistic Error Cancellation (PEC) in the paper. The rigorous course option provides a deep, structured foundation on QEC concepts, stabilizer codes, and measurement techniques, while the fast track offers a concise, accessible introduction to the core ideas of quantum error correction. Choose the course for thorough comprehension and the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yale Quantum Institute Course on Quantum Error Correction](https://www.youtube.com/playlist?list=PLh9mgdi4rNewrbMExcT-dzW-tH2mjkagq) — YaleCourses · 7 videos · 11.6h across 7 episodes

**Watch only this:** Lectures 1 through 3 (Class 1 - Steve Girvin: Introduction to Classical and Quantum Errors Corrections; Class 2 - Yongshan Ding: Quantum Codes, Stabilizers, and Computation; Class 3 - Daniel Weiss: Introduction to Bosonic Modes and Kraus Operators), about 5 hours total — these provide the core theoretical foundation and tools needed to understand the paper's approach.

*Why it unblocks this paper:* This Yale Quantum Institute course is directly relevant as it covers quantum error detection and correction fundamentals, stabilizer codes, and measurement in circuit QED, aligning closely with the paper's focus on QED codes, characterization, and error mitigation techniques.

*If you want all of it:* All 7 lectures, approximately 11.6 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Error Correction Series](https://www.youtube.com/playlist?list=PLD9iE8dbH_2VT2mgoeEXfswH52QN3Y2cf) — Quantumgrad · 6 videos · 5.3h across 6 episodes

**Watch only this:** Episodes 1 through 3 (Quantum error correction (QEC) Tutorial -1| Kishor Bharti; Quantum Error Correction (QEC) Tutorial -2 | Kishor Bharti; Quantum Error Correction (QEC) Tutorial - 3 | Kishor Bharti), about 2.7 hours total — these cover the essential concepts and basics of QEC needed to follow the paper.

*Why it unblocks this paper:* This Quantumgrad series offers a clear, concise tutorial on quantum error correction concepts in about 5 hours, suitable for quickly grasping the key ideas of QEC, error models, and logical qubits relevant to the paper without the depth of a full university course.

*If you want all of it:* All 6 episodes, approximately 5.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Co-Designing Error Mitigation and Error Detection for Logical Qubits," start with foundational knowledge on quantum error correction and quantum noise characterization to grasp the theoretical underpinnings of logical qubits and noise behavior. Next, study quantum error mitigation techniques, especially probabilistic error cancellation, which is central to the paper's approach. Finally, focus on the authors' own talk presenting their novel co-design architecture combining quantum error detection and probabilistic error cancellation, which directly addresses the paper's contributions and results.

### Quantum error correction lecture *(prerequisite)*
Quantum error correction (QEC) is fundamental to understanding logical qubits and error detection codes like Iceberg codes used in the paper. This lecture by Daniel Gottesman provides a rigorous and foundational introduction to QEC and fault tolerance, essential for grasping the theoretical framework behind the paper's error detection techniques.

*How the paper uses it:* The paper builds on quantum error detection codes and logical qubits, which require a solid understanding of QEC principles.

▶ [Daniel Gottesman - Quantum Error Correction and Fault Tolerance (Part 1) - CSSQI 2012](https://www.youtube.com/watch?v=ltJ1jXQeDl8) — Institute for Quantum Computing · 54:14 · 13 years ago

### Quantum noise characterization talk *(prerequisite)*
Understanding quantum noise and its characterization is critical for appreciating the challenges of position-dependent noise and transient error effects discussed in the paper. The talk by Zlatko Minev at KITP covers probabilistic error cancellation and noise modeling on noisy quantum processors, providing advanced insights into noise learning and cancellation relevant to the paper's steady-state extraction protocol.

*How the paper uses it:* The paper addresses challenges in characterizing error channels due to transient effects and position-dependent noise introduced by QED cycles.

▶ [To learn and cancel quantum noise... ▸  Zlatko Minev (IBM)](https://www.youtube.com/watch?v=zxxlAbGfVtg) — Kavli Institute for Theoretical Physics · 49:28 · 3 years ago

### Quantum error mitigation seminar *(prerequisite)*
Quantum error mitigation techniques like probabilistic error cancellation (PEC) are central to the paper's co-design approach. Ewout Van den Berg's lecture at IPAM offers a comprehensive and rigorous treatment of quantum error mitigation methods, including PEC, which is essential to understand the paper's integration of PEC with QED for improved error management.

*How the paper uses it:* The paper co-designs PEC and QED to achieve better error mitigation on near-term quantum devices.

▶ [Ewout Van den Berg - Quantum error mitigation I of II - IPAM at UCLA](https://www.youtube.com/watch?v=QpZPXTln99g) — Institute for Pure & Applied Mathematics (IPAM) · 1:33:44 · 1 year ago

### Paper authors' talk
The authors' own talk is the most direct and authoritative source for understanding their novel co-design approach combining quantum error detection and probabilistic error cancellation. Although no exact talk on this paper was found, the closest relevant advanced talk is Elizabeth Bennewitz's seminar on neural error mitigation, which, while not by the authors, covers advanced error mitigation techniques in near-term quantum simulations and complements the paper's context.

*How the paper uses it:* Direct source for the authors' presentation of their novel co-design approach combining QED and PEC.

▶ [Neural Error Mitigation of Near-Term Quantum Simulations | Seminar Series w/ Elizabeth Bennewitz](https://www.youtube.com/watch?v=wKqmxVSo1oY) — Qiskit · 1:04:51 · Streamed 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts in quantum error correction and error mitigation, essential for understanding how near-term quantum computers manage noise. Starting with basic quantum error correction principles, it then covers error mitigation techniques like probabilistic error cancellation, followed by noise characterization challenges relevant to the paper. Finally, it presents a concise, author-related talk to connect these ideas directly to the paper's novel co-design approach combining Quantum Error Detection and Probabilistic Error Cancellation.

### Quantum error correction lecture *(prerequisite)*
Learn the basics of quantum error correction, including how logical qubits are protected from noise using error detection codes. This foundation explains the principles behind stabilizer codes and the challenges of preserving quantum information, which are crucial for understanding the paper's use of Iceberg codes and QED.

*How the paper uses it:* The paper builds on quantum error detection codes and logical qubits, so understanding QEC basics is essential.

▶ [Steve Girvin - Introduction to Quantum Error Correction](https://www.youtube.com/watch?v=uD69GCYF9Zg) — Yale University · 40:36 · 6 years ago

### Quantum error mitigation seminar *(prerequisite)*
Explore error mitigation techniques that reduce noise effects without full error correction, focusing on probabilistic error cancellation (PEC). This seminar explains why error mitigation is vital for near-term quantum devices and how PEC complements error detection methods.

*How the paper uses it:* The paper co-designs PEC with QED to improve error management on NISQ devices.

▶ [Error Mitigation Explained Simply](https://www.youtube.com/watch?v=GnBeJxAmt8g) — Qiskit · 9:47 · 7 months ago

### Quantum noise characterization talk *(prerequisite)*
Understand how quantum noise behaves and how it can be characterized, including transient and position-dependent noise effects. This knowledge is key to grasping why the paper develops a steady-state extraction protocol to isolate steady-state error channels.

*How the paper uses it:* The paper addresses challenges in characterizing error channels due to transient noise introduced by QED cycles.

▶ [Introduction to Quantum Noise - Part 1 | Qiskit Global Summer School 2023](https://www.youtube.com/watch?v=3Ka11boCm1M) — Qiskit · 58:55 · 2 years ago

### Probabilistic error cancellation lecture
Delve deeper into probabilistic error cancellation, a central error mitigation method that the paper combines with QED. This lecture explains how PEC works by learning and canceling noise effects, providing intuition for the sampling advantage conditions derived in the paper.

*How the paper uses it:* PEC is a core component of the paper's co-designed error mitigation and detection architecture.

▶ [To learn and cancel quantum noise... ▸  Zlatko Minev (IBM)](https://www.youtube.com/watch?v=zxxlAbGfVtg) — Kavli Institute for Theoretical Physics · 49:28 · 3 years ago

### Paper authors' talk
Watch a detailed presentation by experts on error mitigation techniques for near-term quantum simulations, providing context and advanced insights into combining error detection and mitigation strategies similar to those in the paper.

*How the paper uses it:* Though not the exact paper authors, this talk covers neural error mitigation approaches closely related to the paper's focus on improving error management in near-term quantum devices.

▶ [Neural Error Mitigation of Near-Term Quantum Simulations | Seminar Series w/ Elizabeth Bennewitz](https://www.youtube.com/watch?v=wKqmxVSo1oY) — Qiskit · 1:04:51 · Streamed 4 years ago

## Already in your library

- [Peter Shor | Quantum error correcting codes and fault tolerance](https://www.youtube.com/watch?v=buIbd_aXAHw) — also for: Scaling and logic in the colour code on a superconducting quantum processor (Murphy Yuezhen Niu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Co-Designing Error Mitigation and Error Detection for Logical Qubits." Starting with a beginner-level simulation of the QED interval effect on error rates, moving to an intermediate implementation of the steady-state extraction protocol for error channel characterization, and culminating in an advanced project extending the steady-state extraction protocol to a larger QEC code scenario, each project ties directly to a key contribution or limitation of the paper. This ladder leverages your software engineering and applied ML skills while introducing quantum error mitigation concepts grounded in the paper.

### Beginner — Simulate QED Interval Impact on Logical Error Rates
*Effort: a weekend, ~8 hours*

You build a small-scale simulator that models logical qubit error rates under different Quantum Error Detection (QED) intervals, reproducing the paper's finding that the canonical QED interval (one cycle per gate) does not achieve sampling advantage, while optimized intervals do. The simulation uses simplified noise models and logical gate sequences to show how varying the QED interval affects error accumulation.

**Why it shows you understood the paper:** This project demonstrates you grasp the importance of the QED interval as a tunable architectural parameter and its impact on error mitigation efficiency, a core insight of the paper.

**Grounded in:** Identification of the QED interval as a critical architectural parameter governing the cost-accuracy tradeoff and demonstration that optimized intervals enable sampling advantage for high-rate Iceberg codes.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic data generated by the simulator representing logical error rates under different QED intervals; no external dataset required.

**Build it:**

1. Implement a simple noise model for logical qubits with configurable error rates.
2. Simulate logical gate sequences interleaved with QED cycles at varying intervals (e.g., every gate, every 2 gates, etc.).
3. Calculate and plot logical error rates or sampling cost metrics as a function of QED interval.
4. Compare results to the paper's reported trends for Iceberg codes.
5. Write a README explaining the simulation setup, results, and connection to the paper.

**Ships as:** A Jupyter Notebook and Python scripts that simulate and visualize how QED interval affects logical error rates, with a README linking the results to the paper's findings.

**Stretch goal:** Add a simple baseline simulation of PEC-only error mitigation on physical qubits for comparison.

### Intermediate — Implement Steady-State Extraction Protocol for Error Channel Characterization
*Effort: 2 weekends, ~20 hours*

You implement the steady-state extraction protocol described in the paper to isolate steady-state error channels by removing the first-cycle transient in a simulated QED+PEC setting. You characterize position-dependent noise channels and demonstrate improved accuracy of error mitigation compared to naive characterization, reproducing the paper's observable bias reduction.

**Why it shows you understood the paper:** This project shows you understand the paper's novel characterization method and its necessity to overcome transient error effects that degrade PEC performance when combined with QED.

**Grounded in:** Development of the steady-state extraction protocol, a superoperator inversion technique that isolates steady-state error channels by removing the first-cycle transient.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib

**Data:** Simulated quantum noise channels and QED cycle data generated in code; no external dataset required.

**Build it:**

1. Implement a simulation of QED cycles with position-dependent noise channels including a transient first cycle.
2. Implement superoperator representations of noise channels and the inversion technique for steady-state extraction.
3. Apply the steady-state extraction protocol to simulated data to isolate steady-state error channels.
4. Quantify and plot the reduction in observable bias compared to naive characterization.
5. Document the implementation details, results, and relation to the paper's claims.

**Ships as:** A Python codebase and notebook demonstrating steady-state extraction on simulated QED noise data, with visualizations and a README explaining the method and improvements.

**Stretch goal:** Extend the protocol to handle measurement error suppression via QED post-selection as discussed in the paper.

### Advanced — Extend Steady-State Extraction Protocol to Larger QEC Codes
*Effort: 3+ weeks*

You develop an extension of the steady-state extraction protocol to a larger, more complex Quantum Error Correction (QEC) code beyond distance-2 QED codes, addressing the paper's limitation on scalability and characterization overhead. You simulate characterization and inversion on a code with more logical qubits, analyze computational costs, and propose or implement scalable approximations or heuristics.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep comprehension of the protocol's challenges and potential solutions for practical fault-tolerant quantum computing.

**Grounded in:** The approach is limited to distance-2 QED codes and characterization scalability constraints; future directions include scaling characterization methods to larger logical qubit counts and more complex codes.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib, C++ (optional for performance)

**Data:** Simulated noise and QEC code data generated in code; no external dataset required.

**Build it:**

1. Research and select a suitable larger QEC code (e.g., a small surface code variant) for simulation.
2. Implement or adapt the steady-state extraction protocol for the selected code, considering increased Hilbert space dimension.
3. Simulate characterization data including transient and steady-state noise effects.
4. Analyze computational overhead and identify bottlenecks in superoperator inversion.
5. Develop and test scalable approximations or heuristics to reduce overhead while maintaining accuracy.
6. Document findings, challenges, and potential improvements in a detailed report.

**Ships as:** A codebase and report demonstrating an extended steady-state extraction protocol on larger QEC codes, with analysis of scalability and proposed solutions.

**Stretch goal:** Explore integration of the extended protocol with advanced decoding strategies or experimental hardware noise models.
