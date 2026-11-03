---
title: "1039 · Quantum Pseudorandom Scramblers — Fang Song"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fang-song"
source_hash: "81e99b666e9bb809892c4b08408169861f61fed3050c02fae4e45e62f0a3b360"
sequence: 1039
generator: "outreach-garden: managed"
---

# 1039 · Quantum Pseudorandom Scramblers

## At a glance

- **Professor:** Fang Song
- **Institution:** Portland State University
- **Paper:** [Quantum Pseudorandom Scramblers](https://arxiv.org/pdf/2309.08941)
- **Authors:** Chuhan Lu, Minglong Qin, Fang Song, Penghui Yao, Mingnan Zhao
- **Year:** 2024

## Paper overview

This paper introduces quantum pseudorandom state scramblers (PRSSs), a new quantum cryptographic primitive that can transform any initial quantum state into one that appears random to efficient quantum adversaries. Unlike previous pseudorandom state generators (PRSGs) that only work on a fixed initial state, PRSSs work on arbitrary input states. The authors construct PRSSs using a novel parallel version of Kac's walk, a random process on the unit sphere, which mixes exponentially faster than the original. This construction enables stronger cryptographic applications and advances understanding of quantum pseudorandomness.

### Why it matters

**Research problem:** Existing quantum pseudorandom state generators (PRSGs) produce pseudorandom states only from a fixed initial state (usually the all-zero state), and provably fail on other initial states. The problem is to construct a family of polynomial-sized quantum circuits that can map any arbitrary input pure state to a pseudorandom state, thus overcoming this limitation.

**Why it matters:** Pseudorandomness is fundamental in cryptography and complexity theory, enabling efficient approximations to true randomness. Quantum pseudorandom states have applications in quantum cryptography and physics, including quantum gravity and string theory. Overcoming the limitation of PRSGs to fixed initial states is crucial for broader cryptographic applications, such as secure quantum encryption and commitment schemes, and for advancing the theoretical understanding of quantum pseudorandomness.

**Key contributions:**

- Introduction of quantum pseudorandom state scramblers (PRSSs), a new primitive that scrambles any input quantum state into a pseudorandom state.
- Construction of PRSSs based on a novel parallelization of Kac's walk, achieving exponentially faster mixing times.
- Extension of Kac's walk to complex Hilbert spaces and analysis of its mixing properties.
- Demonstration that PRSSs subsume standard PRSGs and scalable PRSGs, and enable black-box constructions of pseudorandom functionlike state generators (PRFSGs).
- Proof of oracle separation showing PRSSs can exist relative to an oracle even when one-way functions do not, indicating PRSSs are potentially weaker assumptions than one-way functions.

## About the professor

**Fang Song** — Associate Professor, Computer Science Department, Portland State University.

Research interests: cryptography, quantum computing, computational complexity, provable security against quantum attacks, quantum algorithms, quantum pseudorandomness

### Research links

- [Faculty/profile page](https://fangsong.info)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** quantum information theory
**The paper assumes:** quantum states, quantum circuits, unitary operations, quantum pseudorandomness, and quantum cryptographic primitives
**Already in this field?** Skip this entirely if you already have a solid understanding of quantum information theory including quantum states and quantum circuits.

This background focuses on quantum information theory, which is essential for understanding the quantum pseudorandom state scramblers (PRSSs) introduced in the paper. The rigorous course option provides a deep, structured university-level foundation in quantum computing concepts, while the fast track offers a more accessible, intuition-driven series on quantum information theory. Choose the course for comprehensive study or the fast track for a quicker, conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to quantum computing course 2022](https://www.youtube.com/playlist?list=PLo0Vs5tDeRLRIPcJ83SN91M-asGuaa1AD) — NYU Quantum Technology Lab · 25 videos

**Watch only this:** Lectures 3 to 7 (Complex numbers, The wavefunction, Measurements, Basis rotations, Measurements in other bases), about 5.7 hours — these cover the mathematical and physical foundations of quantum states and operations needed to understand quantum pseudorandomness.

*Why it unblocks this paper:* This NYU Quantum Technology Lab course covers fundamental quantum computing topics including quantum states, unitary operations, quantum circuits, and measurements, which are directly relevant to the paper's construction and analysis of PRSSs and parallel Kac's walk.

*If you want all of it:* About 28.9 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Information Theory](https://www.youtube.com/playlist?list=PLngCqobCfq4PQQMvwD1MxHIfQk23Bz2Id) — NIcholas Davis · 37 videos · 28.3h across 37 episodes

**Watch only this:** Episodes 13 (Quantum Information | John Preskill) and 14 (John Preskill - Introduction to Quantum Information (Part 1) - CSSQI 2012), about 1.5 hours total — these two provide a focused introduction to quantum information concepts relevant to pseudorandom states.

*Why it unblocks this paper:* This playlist by Nicholas Davis offers clear, concise lectures on quantum information theory, providing intuition and conceptual understanding of quantum states and information that underpin the paper's cryptographic constructions.

*If you want all of it:* About 28.3 hours across 37 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Quantum Pseudorandom Scramblers," start by grounding yourself in the foundational cryptographic assumptions and mathematical tools that enable the construction of PRSSs. This includes post-quantum one-way functions, quantum-secure pseudorandom permutations, and the theory of Markov chains with a focus on mixing times relevant to Kac's walk. Next, build background on quantum pseudorandom states to appreciate how PRSSs generalize prior work. Finally, engage with the authors' own talk and related advanced lectures to grasp the novel parallel Kac's walk construction and its cryptographic implications.

### Post-quantum one-way functions *(prerequisite)*
Post-quantum one-way functions form the cryptographic foundation enabling the construction of quantum pseudorandom state scramblers (PRSSs). Understanding their security assumptions and proof techniques is critical to appreciating the feasibility and limitations of PRSS constructions.

*How the paper uses it:* The paper constructs PRSSs assuming the existence of post-quantum one-way functions.

▶ [Quantum and Post-Quantum Cryptography](https://www.youtube.com/watch?v=vHIK4AR_fVw) — Simons Institute for the Theory of Computing · 1:25:01 · 11y ago

### Quantum-secure pseudorandom permutations *(prerequisite)*
Quantum-secure pseudorandom permutations are used to implement the parallel Kac's walk as quantum circuits under post-quantum assumptions. Grasping their construction and security is essential to understanding how the paper realizes efficient quantum scramblers.

*How the paper uses it:* The parallel Kac's walk is implemented using quantum-secure pseudorandom permutations and functions.

▶ [Ryan O'Donnell: Pseudorandom Permutations from Random Reversible Circuits](https://www.youtube.com/watch?v=7Q8c5ReRNPM) — CMU × LayerZero Crypto Seminar · 43:28 · 2y ago

### Kac's walk and mixing times *(prerequisite)*
Kac's walk is a random process on the unit sphere whose mixing properties underpin the paper's novel parallel construction. Understanding Markov chain mixing times and coupling techniques provides the mathematical background to appreciate the exponential speedup achieved.

*How the paper uses it:* The paper develops a parallel extension of Kac's walk with exponentially faster mixing times.

▶ [Lecture 2: Quantitative features of Markov chains: mixing time, cover time, and speed](https://www.youtube.com/watch?v=Tj7rftlNHsQ) — Yuval Peres · 56:53 · 3y ago

### Quantum pseudorandom states *(prerequisite)*
Quantum pseudorandom states (PRS) are the precursor concept to PRSSs, generating pseudorandom states from a fixed initial state. Familiarity with PRS constructions and their cryptographic applications sets the stage for understanding how PRSSs generalize and strengthen these ideas.

*How the paper uses it:* PRSSs subsume standard PRSGs and scalable PRSGs, extending pseudorandomness to arbitrary input states.

▶ ["Cryptography from Pseudorandom Quantum States", presented by Henry Yuen](https://www.youtube.com/watch?v=TN-yUpTZWjc) — Illinois Quantum · 1:02:16 · Streamed 4y ago

### Quantum pseudorandom state scramblers
This is the core concept introduced by the paper: a new primitive that scrambles any input quantum state into a pseudorandom state using a parallelized Kac's walk. Engaging with advanced lectures and talks on this topic provides direct insight into the paper's main contributions and technical innovations.

*How the paper uses it:* The paper introduces and constructs quantum pseudorandom state scramblers (PRSSs) as a new cryptographic primitive.

▶ [Quantum pseudorandomness in Algorithmica, and its implications to cryptography and complexity](https://www.youtube.com/watch?v=vw0lcXWluWE) — Simons Institute for the Theory of Computing · 46:00 · Streamed 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Quantum Pseudorandom Scramblers, start by building foundational knowledge of quantum pseudorandom states, which are the basis for the new scrambler primitive. Then learn about the parallel Kac's walk, the key mathematical tool enabling fast scrambling. Next, grasp the role of quantum-secure pseudorandom permutations, which implement the walk in quantum circuits. Finally, study post-quantum one-way functions, the cryptographic assumption underlying the construction. This path progresses from core quantum cryptographic concepts to the specific technical tools used in the paper.

### Quantum pseudorandom states *(prerequisite)*
Quantum pseudorandom states are quantum states that look random to any efficient quantum observer, despite being generated by an efficient process. Understanding these states is crucial because the paper generalizes and strengthens this concept by introducing scramblers that work on any input state.

*How the paper uses it:* The paper builds on pseudorandom quantum states by defining scramblers that produce pseudorandom states from arbitrary inputs.

▶ ["Cryptography from Pseudorandom Quantum States", presented by Henry Yuen](https://www.youtube.com/watch?v=TN-yUpTZWjc) — Illinois Quantum · 1:02:16 · Streamed 4y ago

### Kac's walk and mixing times *(prerequisite)*
Kac's walk is a random process on the unit sphere used to model how quickly a system 'mixes' or becomes random. Learning about mixing times and Markov chains helps understand how the paper achieves exponentially faster scrambling by parallelizing Kac's walk.

*How the paper uses it:* The paper's main technical innovation is a parallel version of Kac's walk that mixes exponentially faster, enabling efficient pseudorandom scramblers.

▶ [Lecture 2: Quantitative features of Markov chains: mixing time, cover time, and speed](https://www.youtube.com/watch?v=Tj7rftlNHsQ) — Yuval Peres · 56:53 · 3y ago

### Quantum-secure pseudorandom permutations *(prerequisite)*
Quantum-secure pseudorandom permutations are cryptographic functions that appear random even to quantum adversaries. They are essential for implementing the parallel Kac's walk as efficient quantum circuits under post-quantum assumptions.

*How the paper uses it:* The paper constructs the parallel Kac's walk quantum circuits using quantum-secure pseudorandom permutations and functions.

▶ [noc20 cs02 lec14 Pseudo random Functions PRFs](https://www.youtube.com/watch?v=_iPVd87B_zc) — NPTEL - Indian Institute of Science, Bengaluru · 41:51 · 6y ago

### Post-quantum one-way functions *(prerequisite)*
Post-quantum one-way functions are cryptographic primitives that remain hard to invert even for quantum computers. They form the foundational assumption enabling the construction of the paper's pseudorandom state scramblers.

*How the paper uses it:* The existence of PRSSs in the paper relies on the assumption of post-quantum one-way functions.

▶ [Quantum and Post-Quantum Cryptography](https://www.youtube.com/watch?v=vHIK4AR_fVw) — Simons Institute for the Theory of Computing · 1:25:01 · 11y ago

### Quantum pseudorandom state scramblers
Quantum pseudorandom state scramblers are new quantum operators that transform any input quantum state into one that appears random to efficient quantum adversaries. This concept generalizes previous pseudorandom state generators by working on arbitrary inputs and is the core contribution of the paper.

*How the paper uses it:* The paper introduces and constructs quantum pseudorandom state scramblers as its central new primitive.

▶ [Quantum pseudorandomness in Algorithmica, and its implications to cryptography and complexity](https://www.youtube.com/watch?v=vw0lcXWluWE) — Simons Institute for the Theory of Computing · 46:00 · Streamed 3y ago

## Already in your library

- [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [How Quantum Computers Break Encryption | Shor's Algorithm Explained](https://www.youtube.com/watch?v=lvTqbM5Dq4Q) — also for: Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations (Dan Boneh)
- [PRFs explained: Transforming Secrets into Infinite Keys - Pseudo Random Functions](https://www.youtube.com/watch?v=UrjcpvWeHSM) — also for: Pseudorandom Function from Learning Burnside Problem (Antonio Nicolosi)
- [Pseudorandomness: From Quantum States to Binary Strings](https://www.youtube.com/watch?v=N0d86Asq7fU) — also for: On one-way functions and the average time complexity of almost-optimal compression (Marius Zimand)
- [Pseudorandom Generators || @ CMU || Lecture 12a of CS Theory Toolkit](https://www.youtube.com/watch?v=3lCmIM3lH8Y) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)
- [Lecture 16: Mixing time for random walks on graphs](https://www.youtube.com/watch?v=Ae25jFh_TAg) — also for: Non-uniform Mixing of Quantum Walks on the Symmetric Group (Avah Banerjee)
- [Winter School: Pseudorandom functions and permutations - Iftach Haitner](https://www.youtube.com/watch?v=0YicJFccEik) — also for: Pseudorandom Function from Learning Burnside Problem (Antonio Nicolosi)
- [Pseudorandom Number Generator (PRNG)](https://www.youtube.com/watch?v=q2XVhTWJ-Oo) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Quantum Pseudorandom Scramblers." The beginner project focuses on simulating and visualizing the parallel Kac's walk mixing behavior on classical vectors, grounding the core mixing concept. The intermediate project implements a simplified quantum circuit model of the parallel Kac's walk to scramble quantum states, reproducing the paper's main construction without relying on unavailable code. The advanced project extends the paper by exploring a future direction: simplifying the PRSS quantum circuits using local permutations and fixed rotations, addressing a stated open problem.

### Beginner — Simulate Parallel Kac's Walk Mixing on Unit Sphere
*Effort: a weekend, ~8 hours*

You build a classical simulation of the parallel Kac's walk on the unit sphere in R^n, demonstrating its exponentially faster mixing compared to the standard Kac's walk. You visualize the mixing progress using metrics like total variation or Wasserstein distance approximations.

**Why it shows you understood the paper:** This project shows you grasp the core mathematical mechanism behind the paper's construction: the parallel Kac's walk and its rapid mixing properties, which underpin the PRSS primitive.

**Grounded in:** Proof that the parallel Kac's walk mixes to the Haar measure on the unit sphere in O(log n) steps with respect to Wasserstein and total variation distances.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** No external data needed; you simulate random vectors on the unit sphere.

**Build it:**

1. Implement the standard Kac's walk on vectors in R^n by randomly selecting coordinate pairs and applying random rotations.
2. Implement the parallel Kac's walk by partitioning coordinates into pairs and applying independent random rotations simultaneously.
3. Simulate both walks starting from a fixed initial vector and track the distribution of states over iterations.
4. Approximate mixing metrics such as Wasserstein or total variation distances between the current distribution and the uniform distribution on the sphere.
5. Plot and compare the mixing speed of the standard and parallel Kac's walks.
6. Write a README explaining the connection to the paper's mixing time results.

**Ships as:** A GitHub repository with simulation code, plots comparing mixing speeds, and a README linking the results to the paper's parallel Kac's walk mixing time contribution.

**Stretch goal:** Add a visualization of the mixing process on a 3D sphere for small dimensions to intuitively show scrambling.

### Intermediate — Quantum Circuit Simulation of Parallel Kac's Walk Scrambler
*Effort: 2 weekends, ~20 hours*

You implement a simplified quantum circuit model of the parallel Kac's walk acting on n qubits using a quantum computing framework. The circuit applies layers of two-qubit random rotations in parallel, simulating the PRSS construction. You compare the output state's pseudorandomness on different input states against a baseline of fixed random rotations.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core quantum construction into a working quantum circuit simulation, reproducing the key primitive that scrambles arbitrary input states into pseudorandom states.

**Grounded in:** Construction of quantum circuits implementing the parallel Kac's walk using quantum-secure pseudorandom primitives.

**Tech stack:** Python 3.11, Qiskit or Cirq, NumPy

**Data:** No external data; you generate random quantum states as inputs and simulate the circuit outputs.

**Build it:**

1. Learn basics of quantum circuit simulation with Qiskit or Cirq.
2. Implement a quantum circuit layer that applies random two-qubit rotations to disjoint pairs of qubits in parallel.
3. Build a circuit that repeats this parallel layer O(log n) times to simulate the parallel Kac's walk.
4. Prepare different input quantum states (e.g., computational basis states, random pure states).
5. Simulate the circuit outputs and compute metrics indicating pseudorandomness, such as state fidelity or statistical tests on measurement outcomes.
6. Compare results to a baseline circuit applying fixed rotations without randomness.
7. Document the implementation and relate it to the paper's PRSS construction.

**Ships as:** A GitHub repo with quantum circuit simulation code, analysis scripts, and a README explaining how the circuit models the parallel Kac's walk and demonstrates scrambling of arbitrary inputs.

**Stretch goal:** Incorporate simple quantum-secure pseudorandom permutations as replacements for truly random rotations to mimic the paper's cryptographic assumptions.

### Advanced — Simplifying PRSS Circuits via Local Permutations and Fixed Rotations
*Effort: 3+ weeks*

You research and implement a variant of the PRSS quantum circuit that replaces the random permutations and functions with sequences of local permutations or fixed rotations, aiming to simplify the circuit as suggested in the paper's future directions. You evaluate the mixing speed and pseudorandomness quality compared to the original parallel Kac's walk construction.

**Why it shows you understood the paper:** This project tackles a stated open problem from the paper, showing deep comprehension of the PRSS construction and the challenges in practical circuit simplification, potentially contributing new insights or heuristics.

**Grounded in:** Simplify quantum circuits for PRSSs, possibly replacing random permutations with sequences of local permutations or fixed rotations.

**Tech stack:** Python 3.11, Qiskit or Cirq, NumPy, Matplotlib

**Data:** No external data; quantum state simulations generated internally.

**Build it:**

1. Study the paper's construction and future direction on simplifying PRSS circuits.
2. Design quantum circuit variants replacing random permutations with fixed or local permutations and rotations.
3. Implement these variants in a quantum simulator.
4. Evaluate and compare their mixing times and pseudorandomness metrics against the original parallel Kac's walk circuit.
5. Visualize and analyze trade-offs between circuit complexity and scrambling quality.
6. Write a detailed report and README discussing findings, limitations, and possible next steps.

**Ships as:** A GitHub repository containing code for simplified PRSS circuit variants, evaluation scripts, visualizations, and a comprehensive README discussing the approach and results.

**Stretch goal:** Explore extending the approach toward constructing pseudorandom unitaries (PRUs) as a further research direction.
