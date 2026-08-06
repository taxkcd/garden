---
title: "263 · Energy, Bosons and Computational Complexity — Saeed Mehraban"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-saeed-mehraban"
source_hash: "863a0e52a672db0bae4e573fdd27126adacc6f4d6551a95a73bd4d434bbae79f"
sequence: 263
generator: "outreach-garden: managed"
---

# 263 · Energy, Bosons and Computational Complexity

## At a glance

- **Professor:** Saeed Mehraban
- **Institution:** Tufts University
- **Paper:** [Energy, Bosons and Computational Complexity](https://arxiv.org/pdf/2510.08545)
- **Authors:** Dorian Rudolph, Arsalan Motamedi, Dhruva Sambrani, Hamid Reza Naeij, Ulysse Chabaud, Sevag Gharibian, Saeed Mehraban
- **Year:** 2026

## Paper overview

This paper investigates how energy, measured as average photon number, acts as a resource in the computational complexity of bosonic continuous-variable quantum systems. It shows that energy can grow extremely rapidly in such systems, leading to high computational power but also undecidable problems. The authors provide complexity-theoretic lower and upper bounds, simulation algorithms, and no-go theorems for certain universal gate sets. The work highlights the challenges and opportunities in continuous-variable quantum computing, especially regarding the feasibility and computational power of different gate sets under energy constraints.

### Why it matters

**Research problem:** Understanding the role of energy (average photon number) as a computational resource in continuous-variable (CV) bosonic quantum systems, characterizing how energy growth impacts computational complexity, and determining the computational power and limitations of CV quantum computations under energy constraints.

**Why it matters:** CV quantum systems are physically relevant and experimentally promising platforms for quantum computing and quantum information processing. Energy constraints relate directly to physical feasibility and computational power. Understanding these relationships is crucial for developing realistic quantum algorithms, assessing experimental implementations, and exploring fundamental limits of quantum computation in infinite-dimensional systems.

**Key contributions:**

- Demonstration that energy in CV systems can grow doubly exponentially or even become infinite in finite time with certain gate sets.
- Proof that CVBQP with exponential energy and constant modes can solve NP problems, and with unbounded energy can solve problems in very high complexity classes like PTOWER.
- Establishment of undecidability of deciding whether CV computations have finite energy or preserve certain computational spaces.
- Development of simulation algorithms showing CVBQP with polynomial energy is contained in BQP/poly and under assumptions in BQP.
- Improved upper bound placing CVBQP with Gaussian and cubic phase gates and exponential energy bound in PP, improving on previous PSPACE bounds.

## About the professor

**Saeed Mehraban** — Assistant Professor, Computer Science, Tufts University.

Research interests: quantum computation and information and their connections with theoretical computer science and physics

### Research links

- [Faculty/profile page](https://sites.google.com/view/saeedmehraban/about)
- [Professor website](https://www.eecs.tufts.edu/~mehraban/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F4FwKODZ1ZycKwSWvnHECqxwIOv0En6Xv3upO_Y8GqP9yluRfdfgqaeAA75A6BlDuLLW-dF-2gjKw6vKx_2PonGodOnN-ZSXwECpcs6fNuqh3PE6b1AxUiV6L4JmLP_ULNIYtbVRRvepP0Mf1SrOFcpWQqP9g&user=tVif3VUAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Energy, Bosons and Computational Complexity," start with foundational knowledge on continuous-variable quantum computing and quantum computational complexity to grasp the underlying models and complexity classes involved. Then focus on the core concept of the paper—energy as a computational resource in bosonic continuous-variable systems—highlighted by the authors' own presentation, which directly addresses their novel results and theoretical contributions.

### Continuous-variable quantum computing *(prerequisite)*
This section covers the foundational model of continuous-variable quantum information processing, including Gaussian and non-Gaussian states and gates, which form the computational framework of the paper. Understanding these concepts is essential to appreciate how energy and photon number relate to computational power in bosonic systems.

*How the paper uses it:* The paper's computational model is based on continuous-variable quantum systems and their gate sets, making this foundational knowledge crucial.

▶ [Continuous-variable Quantum Information 1](https://www.youtube.com/watch?v=N9p_f5jN3gw) — ICTP Science, Technology and Innovation · 53:46

### Quantum computational complexity *(prerequisite)*
This section introduces the complexity classes and hardness results relevant to quantum computation, such as BQP, NP, PP, and undecidability, which are central to the paper's complexity-theoretic analysis. It provides the theoretical background needed to understand the paper's lower and upper bounds and no-go theorems.

*How the paper uses it:* The paper establishes complexity class inclusions and undecidability results for CV quantum computations, requiring familiarity with quantum computational complexity.

▶ ["Computational Complexity of Quantum Systems," Sandy Irani ...](https://www.youtube.com/watch?v=4Q4OftM6r_Y) — Illinois Quantum · 55:14

### Paper authors talk *(the paper's own talk)*
This talk by one of the paper's authors presents the main results and insights directly from the researchers, offering the most precise and detailed exposition of the paper's contributions, including complexity bounds, energy growth phenomena, and no-go theorems.

*How the paper uses it:* This is the authors' own presentation on the computational power of bosons, directly related to the paper's content.

▶ [On the computational power of bosons - Ulysse Chabaud ...](https://www.youtube.com/watch?v=OMRNHm21c3s) — Munich Center for Quantum Science & Technology · 29:45

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper on energy and computational complexity in continuous-variable (CV) bosonic quantum systems. We start with the basics of quantum computational complexity to grasp the complexity classes and hardness results, then cover continuous-variable quantum computing as the physical and computational model underlying the paper. Finally, we focus on the core concept of energy as a computational resource in quantum systems, linking physical constraints to computational power as explored in the paper.

### Quantum computational complexity *(prerequisite)*
Quantum computational complexity studies the limits and capabilities of quantum computers, defining complexity classes like BQP, NP, and PP, which are essential to understanding the computational power and hardness results in the paper. This section builds intuition on how quantum algorithms relate to classical complexity classes and why these distinctions matter.

*How the paper uses it:* The paper proves complexity-theoretic lower and upper bounds for CV quantum computations, relying on understanding these complexity classes.

▶ [Quantum Complexity Classes Explained: P vs NP vs BQP](https://www.youtube.com/watch?v=S1FS9hsL7yM) — CodeLucky · 5:05

### Continuous-variable quantum computing *(prerequisite)*
Continuous-variable quantum computing uses infinite-dimensional quantum systems, such as modes of light, instead of discrete qubits. This section introduces the physical model, Gaussian and non-Gaussian gates, and the role of photon number (energy), providing the foundation to understand the computational model analyzed in the paper.

*How the paper uses it:* The paper formalizes CV quantum computations with polynomial Hamiltonians and specific gate sets, making this model central to its results.

▶ [Continuous-variable Quantum Information 1](https://www.youtube.com/watch?v=N9p_f5jN3gw) — ICTP Science, Technology and Innovation · 53:46

### Paper authors talk *(the paper's own talk)*
A direct presentation by the authors provides insights into their complexity-theoretic approach to energy in bosonic quantum systems, summarizing key results and open questions. This talk complements the foundational videos by connecting theory to the paper's novel contributions.

*How the paper uses it:* This talk is given by the paper's authors and directly addresses the computational power of energy in bosonic systems as studied in the paper.

▶ [On the computational power of bosons - Ulysse Chabaud ...](https://www.youtube.com/watch?v=OMRNHm21c3s) — Munich Center for Quantum Science & Technology · 29:45

## Already in your library

- [Course Introduction and Overview: Graduate Complexity ...](https://www.youtube.com/watch?v=pRnnEOAQZF8) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's core insights about energy as a computational resource in continuous-variable (CV) quantum systems. The beginner project reproduces a key energy growth behavior from the paper using classical simulation tools familiar to the applicant. The intermediate project implements a simplified CVBQP simulation algorithm under energy constraints, comparing computational power with a baseline classical simulation. The advanced project extends the paper's future direction by exploring noisy versions of CV gate sets to assess practical computational feasibility under energy and noise constraints.

### Beginner — Simulate Energy Growth in CV Quantum Gates
*Effort: a weekend, ~8 hours*

You build a classical numerical simulation of energy (average photon number) growth in a continuous-variable quantum system under repeated application of Gaussian and cubic phase gates. Using simple matrix/vector operations, you reproduce the doubly exponential energy growth behavior shown in Theorem 1.1 of the paper.

**Why it shows you understood the paper:** This project shows you understand how specific CV gate sets affect energy growth rates, a fundamental mechanism linking physical resources to computational complexity in the paper.

**Grounded in:** Theorem 1.1: Energy growth rates show exponential, doubly exponential, and infinite energy growth in polynomial or constant time depending on gate sets.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** No external data needed; you simulate energy growth using numerical methods based on the paper's gate definitions and formulas.

**Build it:**

1. Implement numerical representations of Gaussian and cubic phase gates as operators on a truncated Fock space.
2. Initialize a low-energy Gaussian state vector.
3. Iteratively apply the gates and compute the average photon number (energy) at each step.
4. Plot the energy growth over time to observe exponential and doubly exponential trends.
5. Compare your plots qualitatively with the paper's figures illustrating Theorem 1.1.

**Ships as:** A GitHub repo with Python scripts and Jupyter notebooks showing plots of energy growth under different gate sets, with explanations referencing the paper's theoretical results.

**Stretch goal:** Add simulation of two-mode states demonstrating infinite energy growth as in Proposition 3.14.

### Intermediate — Simulate CVBQP Computations with Polynomial Energy Bounds
*Effort: 2 weekends, ~20 hours*

You implement a simplified simulation algorithm for continuous-variable bounded-error quantum polynomial time (CVBQP) computations constrained to polynomial energy, following the approach in Theorem 1.5. You compare your simulation results against a classical baseline (e.g., a naive classical simulation) on small problem instances to demonstrate containment in BQP/poly.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's simulation algorithms and complexity upper bounds, showing how energy constraints limit CV quantum computational power and enable classical simulation.

**Grounded in:** Theorem 1.5: CVBQP with polynomial energy is contained in BQP/poly and under assumptions in BQP.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** No external dataset; you generate small synthetic problem instances representing CVBQP computations with polynomial energy constraints.

**Build it:**

1. Reimplement the paper's simulation algorithm for CVBQP with polynomial energy, including state decompositions into Gaussian components.
2. Create small test circuits using Gaussian and cubic phase gates with polynomial energy bounds.
3. Simulate these circuits and record output distributions.
4. Implement a classical baseline simulation (e.g., direct matrix multiplication) for comparison.
5. Analyze and plot the simulation runtimes and output fidelity to illustrate the efficiency gains under energy constraints.

**Ships as:** A GitHub repo with code implementing the CVBQP simulation algorithm, comparison scripts, and a report summarizing results and their relation to the paper's complexity bounds.

**Stretch goal:** Incorporate block encoding assumptions to improve simulation efficiency and compare with the baseline.

### Advanced — Explore Noisy CV Gate Sets under Energy Constraints
*Effort: 3-4 weeks*

You extend the paper's future direction by developing a simulation framework for continuous-variable quantum computations with noisy Gaussian and cubic phase gates under polynomial or exponential energy constraints. You analyze how noise impacts energy growth and computational power, aiming to assess practical feasibility and computational meaningfulness of such gate sets.

**Why it shows you understood the paper:** This project tackles a stated open question and limitation in the paper, combining theoretical insights with practical noise modeling to bridge the gap between idealized complexity results and experimental implementations.

**Grounded in:** Future direction: Explore noisy versions of problematic gate sets to assess practical computational usefulness.

**Tech stack:** Python 3.11, NumPy, SciPy, QuTiP (Quantum Toolbox in Python), Matplotlib

**Data:** No external data; you simulate noisy CV quantum circuits with synthetic noise models (e.g., Gaussian noise, photon loss) applied to gate operations.

**Build it:**

1. Familiarize yourself with noise models relevant to CV quantum gates (e.g., photon loss, phase noise).
2. Implement noisy versions of Gaussian and cubic phase gates using QuTiP or custom numerical methods.
3. Simulate energy growth and state evolution under noisy gates with energy constraints.
4. Analyze how noise limits energy growth and affects computational output distributions.
5. Compare noisy simulations with ideal noiseless cases to evaluate computational power degradation.
6. Document findings relating noise, energy constraints, and computational feasibility.

**Ships as:** A GitHub repo with noisy CV gate simulation code, analysis notebooks, and a detailed README discussing implications for experimental CV quantum computing as per the paper's open questions.

**Stretch goal:** Extend to hybrid CV-DV models incorporating measurement and feedforward noise effects.

_The paper does not provide released code or datasets; all simulations must be implemented from the paper's descriptions and standard CV quantum computing theory. Noise models and gate definitions should be carefully derived from literature to ensure physical relevance._
