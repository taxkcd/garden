---
title: "196 · Efficient quantum thermal simulation — Fernando G. S. L. Brandão"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fernando-g-s-l-brandao"
source_hash: "70c99d16d016cfb6ad3c83318ffbe9fd96b7f7056b5d3a690414f6f628e967b6"
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
