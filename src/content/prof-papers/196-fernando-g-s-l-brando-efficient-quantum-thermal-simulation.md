---
title: "196 · Efficient quantum thermal simulation — Fernando G. S. L. Brandão"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fernando-g-s-l-brandao"
source_hash: "aa23ae5ac7fd4aa441f6af6e20cee52a714025663ef857dc7db5703bdfdae889"
sequence: 196
generator: "outreach-garden: managed"
---

# 196 · Efficient quantum thermal simulation

## At a glance

- **Professor:** Fernando G. S. L. Brandão
- **Institution:** California Inst. of Technology
- **Paper:** [Efficient quantum thermal simulation](https://doi.org/10.1038/s41586-025-09583-x)
- **Authors:** Chi-Fang Chen, Michael Kastoryano, Fernando G. S. L. Brandão, András Gilyén
- **Year:** 2025

## Paper overview

This paper presents a new quantum algorithm that efficiently simulates thermal states of quantum systems, analogous to classical Markov Chain Monte Carlo methods. The algorithm respects quantum detailed balance and locality, overcoming previous challenges in quantum thermal simulation. It offers a promising tool for studying low-temperature quantum phenomena and could be foundational for quantum computing applications in physics and beyond.

### Why it matters

**Research problem:** Developing an efficient, general-purpose quantum algorithm for simulating low-temperature quantum thermal states that satisfies quantum detailed balance and locality, overcoming limitations of previous methods such as the Davies generator which are inefficient or break detailed balance.

**Why it matters:** Simulating quantum many-body thermal states is crucial for understanding low-temperature phenomena like phase transitions and material properties, but classical methods fail for strongly correlated systems. Quantum computers promise to solve these problems, but lack efficient, physically motivated algorithms that guarantee convergence and respect fundamental quantum properties.

**Key contributions:**

- A new quantum algorithm for thermal simulation that exactly satisfies quantum detailed balance and locality.
- Introduction of a smooth operator Fourier transform to replace exact energy transitions, enabling efficient implementation.
- A coherent term that corrects deviations from detailed balance in the Lindbladian.
- Proof of uniqueness and stationarity of the Gibbs state as the fixed point of the Lindbladian.
- Development of nearly linear-time quantum algorithms for simulating the Lindbladian evolution.

## About the professor

**Fernando G. S. L. Brandão** — Bren Professor of Theoretical Physics, Physics, Mathematics and Astronomy, California Inst. of Technology.

Research interests: quantum information science

### Research links

- [Faculty/profile page](http://fernandobrandao.org)
- [Resolved homepage](http://fernandobrandao.org/)
- [Google Scholar](https://scholar.google.com/citations?user=zmDJrh0AAAAJ&hl=en&oi=ao)
- [LinkedIn](https://www.linkedin.com/in/fernando-g-s-l-brandao-58256022/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum Markov semigroups
**The paper assumes:** quantum Markov semigroups, Lindblad generators, quantum detailed balance, open quantum systems dynamics
**Already in this field?** Skip this entirely if you already understand the theory of quantum Markov semigroups and Lindblad master equations in open quantum systems.

To understand the core methods of this paper on efficient quantum thermal simulation, it is essential to grasp the theory of quantum Markov semigroups, Lindbladian generators, and quantum detailed balance. The rigorous course provides a structured, university-level introduction to open quantum systems and master equations, ideal for deep comprehension. The fast track offers a focused, intuition-driven lecture series on open quantum systems that covers the key concepts more quickly, suitable for readers seeking a conceptual yet solid foundation without committing to a full course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Open Quantum Systems NPTEL](https://www.youtube.com/playlist?list=PLEOmDTfrARLq455TkRdA5rIPcBzfhfddO) — Vinayak Chandrakar · 7 videos

**Watch only this:** Watch episodes 3 to 6: 'Density Matrices, Super-operators and Unitary Maps' (~28 min), 'Solving Master Equations' (~28 min), 'Quantum Trajectory Approach' (~28 min), and 'Optical Master Equation, Thermalization' (~28 min), totaling about 1.9 hours. These cover the mathematical framework of quantum Markov semigroups, Lindbladians, and thermalization relevant to the paper.

*Why it unblocks this paper:* This NPTEL course on Open Quantum Systems by Vinayak Chandrakar covers master equations, thermalization, and decoherence, directly addressing Lindbladian dynamics and quantum detailed balance, which are central to the paper's approach.

*If you want all of it:* The full playlist has 7 episodes totaling about 3.3 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lectures on Theoretical Physics: "Introduction to the Theory of Open Quantum Systems" by dr P. Szańkowski, Spring 2025](https://www.youtube.com/playlist?list=PLa8M0LSKnl2qVfkBZm7Y4OJl2Ey6jXpFc) — Division of Theoretical Physics IPPAS · 16 videos · 31.8h across 16 episodes

**Watch only this:** Watch episodes 3, 11, 12, 13, and 14: 'Density Matrices, Super-operators and Unitary Maps' (~119 min), 'Master Equation' (~119 min), 'Born-Markov Approximation' (~119 min), 'Dynamics of Thermalization Pt.1' (~119 min), and 'Dynamics of Thermalization Pt.2' (~119 min), totaling about 10 hours. For a quicker overview, focus on episodes 11 to 14 (about 8 hours) which cover master equations and thermalization in depth.

*Why it unblocks this paper:* This lecture series 'Introduction to the Theory of Open Quantum Systems' by the Division of Theoretical Physics IPPAS provides a clear, conceptually rich introduction to open quantum systems, master equations, and thermalization dynamics, matching the paper's core topics but in a more accessible format.

*If you want all of it:* The full playlist has 16 episodes totaling about 31.8 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Efficient quantum thermal simulation," start by building a strong foundation in the mathematical and physical framework of open quantum systems, focusing on Lindblad master equations and quantum Markov semigroups. Then, study the concept of quantum detailed balance, which is critical for the algorithm's correctness. Next, learn about Hamiltonian simulation algorithms as they enable efficient implementation of the Lindbladian evolution. Finally, engage with the authors' own talks on quantum thermal simulation to grasp the novel algorithmic contributions and their significance.

### Lindblad master equation *(prerequisite)*
The Lindblad master equation formalism underpins the quantum thermal simulation approach by describing the dynamics of open quantum systems in a mathematically rigorous way. Understanding this is essential to grasp how the authors construct their Lindbladian generator that respects detailed balance and locality.

*How the paper uses it:* The paper constructs a Lindbladian that exactly satisfies quantum detailed balance and inherits locality from the Hamiltonian.

▶ [Quantum Optics 2 L18: Derivation of the Lindblad Master ...](https://www.youtube.com/watch?v=JGR9rA1Lp84) — UNM CQuIC · 1:19:57

### Quantum Markov semigroups *(prerequisite)*
Quantum Markov semigroups describe the continuous-time evolution of open quantum systems and provide the framework for Lindbladian dynamics. A solid understanding of their structure and properties is crucial for appreciating the algorithm's design and convergence guarantees.

*How the paper uses it:* The algorithm simulates Lindbladian dynamics, which form a quantum Markov semigroup with exact detailed balance.

▶ [On the structure of quantum Markov semigroups](https://www.youtube.com/watch?v=vrhVJIRnKPo) — Institut Henri Poincaré · 50:51

### Quantum detailed balance *(prerequisite)*
Quantum detailed balance is a fundamental property ensuring that the Lindbladian dynamics converge to the Gibbs state as a unique fixed point. This concept is central to the correctness and physical motivation of the authors' quantum thermal simulation algorithm.

*How the paper uses it:* The algorithm achieves exact quantum detailed balance despite finite energy uncertainty, overcoming previous obstacles.

▶ [Andras Gilyen - Quantum generalizations of Glauber and ...](https://www.youtube.com/watch?v=dG9AWA0r4oQ) — Institute for Pure & Applied Mathematics (IPAM) · 48:46

### Hamiltonian simulation algorithms *(prerequisite)*
Efficient Hamiltonian simulation algorithms are key subroutines enabling the implementation of the Lindbladian evolution in the quantum algorithm. Understanding these algorithms helps in appreciating the nearly linear-time complexity results presented in the paper.

*How the paper uses it:* The Lindbladian evolution can be implemented with Hamiltonian simulation time scaling approximately linearly with inverse temperature and evolution time.

▶ [Di Fang - Quantum algorithms for dynamics simulation ...](https://www.youtube.com/watch?v=lSp4OAbirI8) — Institute for Pure & Applied Mathematics (IPAM) · 1:11:58

### Paper authors talk *(the paper's own talk)*
Directly hearing the authors explain their novel quantum thermal simulation algorithm provides the most precise and insightful understanding of their contributions, technical innovations, and the broader context of their work.

*How the paper uses it:* Fernando Brandão, a co-author, presents the efficient quantum thermal simulation algorithm in a recent workshop talk.

▶ [Fernando Brandão - Efficient Quantum Thermal Simulation](https://www.youtube.com/watch?v=XlYd9loRnOw) — Quantum Energy Initiative · 4 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on efficient quantum thermal simulation, start by building a foundation in the Lindblad master equation, which models open quantum system dynamics. Then learn about quantum Markov semigroups and quantum detailed balance, which ensure the algorithm's physical correctness and convergence. Next, grasp Hamiltonian simulation algorithms as key subroutines enabling the implementation. Finally, explore the paper's core innovation: the smooth operator Fourier transform that enables locality and exact detailed balance in the quantum algorithm.

### Lindblad master equation *(prerequisite)*
The Lindblad master equation describes how open quantum systems evolve over time, accounting for interactions with their environment. It provides a mathematical framework for quantum Markovian dynamics, which is essential for modeling thermalization processes.

*How the paper uses it:* The paper constructs a Lindbladian generator that drives the quantum system towards its thermal Gibbs state.

▶ [A brief introduction to the Lindblad Master Equation.](https://www.youtube.com/watch?v=CqsK2jGknj8) — Lea F. Santos · 1:00:43

### Quantum Markov semigroups *(prerequisite)*
Quantum Markov semigroups generalize classical Markov chains to quantum systems, describing continuous-time evolution with memoryless properties. Understanding these semigroups helps grasp how the Lindbladian dynamics simulate thermalization.

*How the paper uses it:* The Lindbladian evolution in the paper forms a quantum Markov semigroup ensuring physically consistent thermalization.

▶ [On the structure of quantum Markov semigroups](https://www.youtube.com/watch?v=vrhVJIRnKPo) — Institut Henri Poincaré · 50:51

### Quantum detailed balance *(prerequisite)*
Quantum detailed balance is a condition ensuring that the quantum dynamics respect equilibrium properties analogous to classical detailed balance. It guarantees that the thermal Gibbs state is a fixed point and that the system equilibrates correctly.

*How the paper uses it:* The paper’s algorithm exactly satisfies quantum detailed balance, a key to its correctness and convergence.

▶ [Exactly Detailed-Balanced Quasi-Local Quantum Dynamics ...](https://www.youtube.com/watch?v=UsaUaKETXb4) — Simons Institute for the Theory of Computing · 59:55

### Hamiltonian simulation algorithms *(prerequisite)*
Hamiltonian simulation algorithms efficiently approximate the time evolution generated by a quantum Hamiltonian on a quantum computer. They are fundamental building blocks for simulating quantum dynamics, including the Lindbladian evolution.

*How the paper uses it:* The paper uses nearly linear-time Hamiltonian simulation to implement the Lindbladian evolution efficiently.

▶ [Quantum Algorithms for Hamiltonian Simulation | Quantum ...](https://www.youtube.com/watch?v=X4gegxIuh1o) — Simons Institute for the Theory of Computing · 1:13:58

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, challenges, and innovations of the quantum thermal simulation algorithm. It complements foundational knowledge with expert perspective.

*How the paper uses it:* Authors explain their new quantum algorithm and its significance in simulating thermal states efficiently.

▶ [Fernando Brandão - Efficient Quantum Thermal Simulation](https://www.youtube.com/watch?v=XlYd9loRnOw) — Quantum Energy Initiative · 4 weeks ago

## Already in your library

- [Anthony (Chi-Fang) Chen - “Quantum” Markov Chain Monte ...](https://www.youtube.com/watch?v=6nRsya5Aaf8) — also for: On quantum to classical comparison for Davies generators (Alistair Sinclair)
- [Quantum Markov semigroup, logarithmic Sobolev inequality and noncommutative Ricci curvature](https://www.youtube.com/watch?v=5NOq1AFhZp0) — also for: On quantum to classical comparison for Davies generators (Alistair Sinclair)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge focused on the core contributions of the paper "Efficient quantum thermal simulation." Starting with a beginner-level numerical exploration of spectral gaps in small quantum spin chains, progressing to an intermediate-level reimplementation of the Lindbladian evolution with a comparison to a simple baseline, and culminating in an advanced project that extends the method to study spectral gaps and mixing times for noncommuting Hamiltonians, addressing a key future direction of the paper. Each project leverages your existing software engineering skills while introducing relevant quantum simulation concepts and tools.

### Beginner — Numerical Diagonalization of Lindbladians for Small Spin Chains
*Effort: a weekend, ~8 hours*

You build a Python notebook that numerically diagonalizes the Lindbladian operators for small transverse field Ising and XXZ spin chain models, reproducing the spectral gap behavior at high and low temperatures as shown in the paper's numerical studies. This involves constructing small matrix representations of the Lindbladian and plotting spectral gaps versus inverse temperature.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's numerical validation approach, the concept of spectral gaps, and how temperature affects mixing times in quantum thermalization, which are central to the paper's claims about critical slowdowns and spectral properties.

**Grounded in:** Numerical studies demonstrating spectral gaps and mixing behavior in quantum spin chain models.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** No external dataset is required; you simulate small spin chain Hamiltonians (e.g., 2-4 qubits) and construct Lindbladian matrices based on the paper's formulas.

**Build it:**

1. Implement small transverse field Ising and XXZ Hamiltonians as matrices.
2. Construct the Lindbladian superoperator matrices numerically using the paper's smooth operator Fourier transform and jump operators for these small systems.
3. Diagonalize the Lindbladian matrices to find eigenvalues and identify the spectral gap.
4. Plot spectral gap versus inverse temperature β to observe high-temperature gaps and low-temperature slowdowns.
5. Document the code and results in a Jupyter Notebook with explanations linking back to the paper.

**Ships as:** A Jupyter Notebook showing numerical diagonalization results, spectral gap plots, and explanations connecting the observations to the paper's findings.

**Stretch goal:** Add visualization of how adding global or two-body jump operators affects the spectral gap to lift critical slowdowns.

### Intermediate — Reimplementation of Lindbladian Evolution for Quantum Thermal Simulation
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's Lindbladian quantum thermal simulation algorithm in Python, simulating Lindbladian evolution for small quantum systems using matrix exponentiation or Trotterization. You compare the convergence to the Gibbs state against a baseline method such as the Davies generator or a naive thermalization approach, measuring convergence metrics like trace distance or fidelity.

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic approach into code, understand the role of the coherent correction term and smooth operator Fourier transform, and evaluate convergence properties, directly engaging with the paper's main algorithmic contributions.

**Grounded in:** The Lindbladian evolution can be implemented with Hamiltonian simulation time scaling approximately linearly with inverse temperature and evolution time; introduction of a coherent correction term to ensure exact detailed balance.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook

**Data:** Simulated small quantum systems (2-4 qubits) with known Hamiltonians such as transverse field Ising model; no external dataset needed.

**Build it:**

1. Implement the system Hamiltonian and jump operators for a small quantum system.
2. Construct the Lindbladian superoperator including the coherent correction term as described in the paper.
3. Simulate Lindbladian evolution using matrix exponentiation or Trotterization over discrete time steps.
4. Implement a baseline thermalization method (e.g., Davies generator or simple thermal state preparation).
5. Compare convergence to the Gibbs state using metrics like trace distance or fidelity over time.
6. Visualize and document the results, highlighting the effect of the coherent correction and detailed balance.

**Ships as:** A Python project with scripts and notebooks demonstrating Lindbladian evolution simulation, baseline comparison, convergence plots, and detailed explanations.

**Stretch goal:** Incorporate a simple Hamiltonian simulation algorithm to replace matrix exponentiation and analyze scaling with inverse temperature.

### Advanced — Spectral Gap and Mixing Time Analysis for Noncommuting Hamiltonians Using Lindbladian Simulation
*Effort: 3-4 weeks*

You extend the Lindbladian simulation framework to study spectral gaps and mixing times for noncommuting Hamiltonians, addressing a key future direction of the paper. This involves implementing the Lindbladian with coherent correction terms for noncommuting cases, numerically analyzing spectral gaps, and exploring how jump operator choices affect mixing times. You document findings and propose heuristic jump operator designs to optimize mixing.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the Lindbladian construction, quantum detailed balance, and the challenges of noncommuting Hamiltonians. It shows initiative in advancing the research beyond the original scope.

**Grounded in:** Systematic study of spectral gaps and mixing times for noncommuting Hamiltonians using the new Lindbladian; the coherent correction term corrects deviations from detailed balance when the decay part does not commute with the Hamiltonian.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook, Matplotlib

**Data:** Simulated small quantum systems with noncommuting Hamiltonians (e.g., XYZ spin chains or perturbed Ising models); no external dataset required.

**Build it:**

1. Implement noncommuting Hamiltonians and corresponding jump operators as per the paper's framework.
2. Incorporate the coherent correction term in the Lindbladian construction to ensure exact detailed balance.
3. Numerically diagonalize the Lindbladian to extract spectral gaps for various inverse temperatures.
4. Experiment with different sets of jump operators, including global and two-body operators, to observe effects on spectral gaps and mixing times.
5. Analyze and visualize the relationship between jump operator design and mixing behavior.
6. Document the methodology, results, and insights, relating them to the paper's discussion and open questions.

**Ships as:** A comprehensive Jupyter Notebook or Python project presenting spectral gap analyses, mixing time evaluations, and heuristic jump operator designs for noncommuting Hamiltonians, with detailed commentary.

**Stretch goal:** Develop a heuristic quantum circuit implementation of the Lindbladian evolution for a small noncommuting system and benchmark its performance.
