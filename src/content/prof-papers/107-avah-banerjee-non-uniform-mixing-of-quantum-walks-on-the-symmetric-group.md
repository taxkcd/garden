---
title: "107 · Non-uniform Mixing of Quantum Walks on the Symmetric Group — Avah Banerjee"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-avah-banerjee"
source_hash: "0e33e80af0da3c52645cb590329364fa313470911d6aa6e6eeafe3c8622df1cf"
sequence: 107
generator: "outreach-garden: managed"
---

# 107 · Non-uniform Mixing of Quantum Walks on the Symmetric Group

## At a glance

- **Professor:** Avah Banerjee
- **Institution:** Missouri S&T
- **Paper:** [Non-uniform Mixing of Quantum Walks on the Symmetric Group](https://arxiv.org/pdf/2311.02843)
- **Authors:** Avah Banerjee
- **Year:** 2023

## Paper overview

This paper studies discrete-time quantum walks (DTQW) on the symmetric group, focusing on how their probability distributions differ from classical random walks. It shows that unlike classical walks, these quantum walks do not converge to a uniform distribution, revealing 'blind spots' or localization effects in the quantum walk's behavior. The analysis uses advanced representation theory and Fourier analysis on non-commutative groups to characterize the spectral properties of the quantum walk operator.

### Why it matters

**Research problem:** Understanding the mixing behavior and limiting distributions of discrete-time quantum walks on the symmetric group, specifically whether these quantum walks converge to uniform distributions like their classical counterparts.

**Why it matters:** Quantum walks are fundamental tools for developing quantum algorithms and understanding their mixing properties is crucial for leveraging quantum speedups in randomized algorithms. The symmetric group is a key non-abelian group with rich structure, making it a challenging and important case for quantum walk analysis.

**Key contributions:**

- Extension of Gerhardt and Watrous's continuous-time quantum walk results to the discrete-time Szegedy walk framework on the symmetric group.
- Derivation of spectral decomposition of the Szegedy walk operator using irreps and character theory of the symmetric group.
- Proof that the discrete-time quantum walk does not converge to the uniform distribution, with explicit upper bounds on the probability of observing n-cycles.
- Identification of localization phenomena and lack of anti-concentration in the quantum walk distribution.
- Development of general techniques potentially applicable to other non-commutative groups.

## About the professor

**Avah Banerjee** — Assistant Professor of Computer Science, Computer Science, Missouri S&T.

Research interests: high-precision physics ML, quantum circuits, ML models, structured objects, AI in human-centered computing systems, drug discovery

### Research links

- [Faculty/profile page](https://www.avahbanerjee.com)
- [Resolved homepage](https://www.avahbanerjee.com/)
- [Lab website](https://semiqlassical.tech/#founders)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on non-uniform mixing of quantum walks on the symmetric group, start with foundational mathematical prerequisites: representation theory of the symmetric group and Fourier analysis on non-abelian groups. Then study the Szegedy quantum walk framework, which is the central method used in the paper. Finally, focus on the paper's core concept of discrete-time quantum walks on the symmetric group, including the author's own talk and related advanced seminars to gain direct insight into the novel results and methods.

### Representation theory of symmetric group *(prerequisite)*
Representation theory of the symmetric group is essential to decompose the quantum walk operator and analyze its spectral properties. Understanding irreducible representations and character theory provides the mathematical foundation for the spectral decomposition used in the paper.

*How the paper uses it:* The paper uses irreps and character theory of the symmetric group to derive the spectral decomposition of the quantum walk operator.

▶ [Representation Theory & Combinatorics of the Symmetry Group &Related Structures III -Monica Vazirani](https://www.youtube.com/watch?v=2tvNWmzBc-4) — Institute for Advanced Study · 5 years ago

### Fourier analysis on non-abelian groups *(prerequisite)*
Fourier analysis on non-abelian groups generalizes classical Fourier transform techniques to groups like the symmetric group, enabling spectral analysis of operators defined on these groups. This is crucial for understanding the spectral properties and character theory applied in the paper.

*How the paper uses it:* The paper employs Fourier analysis on the symmetric group to characterize spectral properties of the quantum walk operator.

▶ [Lec 49 Fourier analysis on nonabeilian groups](https://www.youtube.com/watch?v=vJe_rQaZsAA) — NPTEL - Indian Institute of Science, Bengaluru · 5 months ago

### Szegedy quantum walk framework
Szegedy's framework provides a systematic way to quantize classical Markov chains into discrete-time quantum walks. Understanding this framework is key to grasping how the paper constructs and analyzes the discrete-time quantum walk on the symmetric group.

*How the paper uses it:* The paper constructs the discrete-time quantum walk using Szegedy's framework applied to the Cayley graph of the symmetric group.

▶ [2021 lecture28 Szegedy Walks](https://www.youtube.com/watch?v=-6-xtwMHaGM) — Nathan Wiebe · 3 years ago

### Paper author talk *(the paper's own talk)*
Direct talks by experts or authors provide the most precise and insightful explanations of their novel results and methods. Such talks often include motivations, technical challenges, and implications that are not fully captured in the paper text.

*How the paper uses it:* Although no direct talk by Avah Banerjee on this exact paper was found, closely related advanced talks on quantum walks on groups provide valuable context and depth.

▶ [Quantum Walks on Graphs and Group State Transfer](https://www.youtube.com/watch?v=JCavHmcloyo) — Fields Institute · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand the paper on discrete-time quantum walks on the symmetric group. We start with the basics of the symmetric group and its representation theory, then build intuition on Fourier analysis on non-abelian groups, followed by understanding mixing times and limiting distributions in quantum walks. Finally, we cover the Szegedy quantum walk framework, which is the core method used in the paper.

### Representation theory of symmetric group *(prerequisite)*
Representation theory helps us understand how groups like the symmetric group can be broken down into simpler, well-understood pieces called irreducible representations. This decomposition is crucial for analyzing complex operators, like the quantum walk operator in the paper, by studying their action on these simpler components.

*How the paper uses it:* The paper uses irreducible representations and their characters to decompose and analyze the quantum walk operator on the symmetric group.

▶ [Lecture 22 (Specht representations of symmetric groups)](https://www.youtube.com/watch?v=TWZ51wyS6U4) — Math with MS · 5 years ago

### Fourier analysis on non-abelian groups *(prerequisite)*
Fourier analysis generalizes to non-abelian groups by using their irreducible representations to transform functions on the group into simpler components. This tool is essential for understanding the spectral properties of operators defined on groups, such as the quantum walk operator studied in the paper.

*How the paper uses it:* The paper applies Fourier analysis on the symmetric group to characterize the spectral decomposition of the quantum walk operator.

▶ [Fourier transform on finite non-abelian groups](https://www.youtube.com/watch?v=KJ9Dqn6Afo4) — Arijit Ganguly · 6 years ago

### Mixing times and limiting distributions of quantum walks *(prerequisite)*
Mixing time measures how quickly a random or quantum walk approaches its steady-state distribution. Understanding these concepts helps us grasp why quantum walks on the symmetric group do not converge to uniform distributions, unlike classical walks.

*How the paper uses it:* The paper studies the non-uniform mixing behavior and limiting distributions of discrete-time quantum walks on the symmetric group.

▶ [Lecture 16: Mixing time for random walks on graphs](https://www.youtube.com/watch?v=Ae25jFh_TAg) — Ayalvadi Ganesh · 5 years ago

### Szegedy quantum walk framework
Szegedy's framework provides a method to construct discrete-time quantum walks from classical Markov chains, enabling the study of their spectral and mixing properties. This framework is central to the paper's approach for defining and analyzing the quantum walk on the symmetric group.

*How the paper uses it:* The paper employs Szegedy's framework to build the discrete-time quantum walk operator on the symmetric group.

▶ [2021 lecture28 Szegedy Walks](https://www.youtube.com/watch?v=-6-xtwMHaGM) — Nathan Wiebe · 3 years ago
