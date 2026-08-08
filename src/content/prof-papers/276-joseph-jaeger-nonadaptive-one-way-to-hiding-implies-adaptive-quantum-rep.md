---
title: "276 · Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming — Joseph Jaeger"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-joseph-jaeger"
source_hash: "e060ed0588c1b2336e5ffaccd5de93b13eefd4d71a70da00d6bb434f000984a6"
sequence: 276
generator: "outreach-garden: managed"
---

# 276 · Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming

## At a glance

- **Professor:** Joseph Jaeger
- **Institution:** Georgia Institute of Technology
- **Paper:** [Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming](https://arxiv.org/pdf/2511.16009)
- **Authors:** Joseph Jaeger
- **Year:** 2025

## Paper overview

This paper shows that a previously known nonadaptive quantum cryptographic proof technique called the one-way to hiding (O2H) theorem can actually be used to prove adaptive quantum reprogramming results. Adaptive quantum reprogramming is a challenging problem in quantum cryptography where the points at which a quantum random oracle is reprogrammed depend on the adversary's previous queries. The author demonstrates that several existing adaptive reprogramming frameworks and lemmas can be derived from the simpler O2H theorem, simplifying proofs and unifying the theory.

### Why it matters

**Research problem:** How to analyze and prove security of cryptographic protocols in the quantum random oracle model when the oracle is adaptively reprogrammed at points chosen based on the adversary's queries, a setting where classical proof techniques fail or are complicated.

**Why it matters:** Quantum adversaries can query oracles in superposition, invalidating classical proof techniques. Adaptive reprogramming is crucial for analyzing security of many cryptographic schemes in the quantum setting, including encryption and signature schemes. Simplifying and unifying proof techniques helps advance secure quantum-resistant cryptography.

**Key contributions:**

- Demonstrates that the nonadaptive O2H theorem implies several adaptive quantum reprogramming frameworks and lemmas.
- Provides simpler, mostly classical proofs for adaptive quantum reprogramming results.
- Introduces the Fixed-Permutation O2H variant and shows its broad applicability.
- Clarifies relationships and differences between Pan-Zeng, GHHM, and Unruh adaptive frameworks.
- Identifies limitations of the Fixed-Permutation O2H approach regarding random permutations.

## About the professor

**Joseph Jaeger** — Assistant Professor, School of Cybersecurity and Privacy, Georgia Institute of Technology.

Research interests: I work on cryptography, which lies at the intersection of computer security and theoretical computer science. Commonly my research aims to apply the proof-based techniques of theory to better understand or improve the security of real-world protocols. This includes extrapolating formal models to capture novel threats, developing new tools to give precise security analyses within these models, and designing new protocols.

### Research links

- [Faculty/profile page](https://faculty.cc.gatech.edu/~josephjaeger)
- [Resolved homepage](https://scp.cc.gatech.edu/people)
- [Google Scholar](https://scholar.google.com/citations?user=r9K3MQwAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0002-4934-3405)
- [DBLP](https://dblp.org/pers/hd/j/Jaeger:Joseph)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming," start by building a foundation in the Quantum Random Oracle Model and Quantum Cryptographic Proof Techniques, which are essential for grasping the setting and proof strategies. Then, study the One-Way to Hiding theorem, the central nonadaptive technique the paper extends. Next, explore Sparse Quantum Oracle Representations, a key technical tool used in the paper. Finally, focus on the core concept of Adaptive Quantum Reprogramming, the challenging problem addressed by the paper, using advanced research talks. Although no direct author talk on this paper was found, the selected videos provide deep academic insight into the foundational and core topics relevant to the paper.

### Quantum random oracle model *(prerequisite)*
Understanding the Quantum Random Oracle Model (QROM) is crucial as it models how quantum adversaries query oracles in superposition, which is the setting of the paper. This model underpins the security analysis of cryptographic protocols against quantum attacks and is foundational for the paper's contributions.

*How the paper uses it:* The paper analyzes adaptive quantum reprogramming within the Quantum Random Oracle Model.

▶ [Dominique Unruh - The quantum random oracle model Part 1 of 2 - IPAM at UCLA](https://www.youtube.com/watch?v=YAIFGB4ryGE) — Institute for Pure & Applied Mathematics (IPAM) · 3 years ago

### Quantum cryptographic proof techniques *(prerequisite)*
Quantum cryptographic proof techniques provide the theoretical tools and frameworks necessary to reason about security in the quantum setting. They include methods like quantum rewinding and simulation, which are essential to understand the significance and novelty of the paper's approach.

*How the paper uses it:* The paper simplifies and unifies adaptive quantum reprogramming proofs using advanced quantum proof techniques.

▶ [Fermi Ma - Post-Quantum Proof Techniques, Part 1: Introduction to Quantum Rewinding - IPAM at UCLA](https://www.youtube.com/watch?v=ctI4ly846WQ) — Institute for Pure & Applied Mathematics (IPAM) · 1:26:02 · 3 years ago

### One-way to hiding theorem *(prerequisite)*
The One-Way to Hiding (O2H) theorem is a central nonadaptive proof technique that the paper builds upon and extends to adaptive settings. Understanding this theorem is key to grasping how the paper derives adaptive results from a nonadaptive foundation.

*How the paper uses it:* The paper shows that the nonadaptive O2H theorem implies adaptive quantum reprogramming results.

▶ [[CPP'25] Formalizing the One-way to Hiding Theorem](https://www.youtube.com/watch?v=AzkTVZ6oAMo) — ACM SIGPLAN · 1 year ago

### Sparse quantum oracle representations *(prerequisite)*
Sparse quantum oracle representations are a technical tool used to achieve tight adaptive reprogramming bounds. They allow efficient representation and manipulation of oracles, which is critical for the paper's derivation of existing adaptive frameworks from the Fixed-Permutation O2H theorem.

*How the paper uses it:* The paper uses sparse quantum oracle representations to prove the GHHM tight adaptive reprogramming theorem from Fixed-Permutation O2H.

▶ [Making Quantum Query Algorithms Robust to a Faulty Oracle, by Manaaswi Parashar](https://www.youtube.com/watch?v=KEowrXH6DBo) — CSAChannel IISc · 1 year ago

### Adaptive quantum reprogramming
Adaptive quantum reprogramming is the core challenging problem addressed by the paper, involving oracle reprogramming at points chosen based on adversary queries. Understanding this concept is essential to appreciate the paper's main contributions in simplifying and unifying adaptive quantum security proofs.

*How the paper uses it:* The paper demonstrates that adaptive quantum reprogramming frameworks follow from the nonadaptive O2H theorem.

▶ [Tight adaptive reprogramming in the QROM](https://www.youtube.com/watch?v=WE3PnieOOPk) — IACR · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about the Quantum Random Oracle Model, which sets the stage for how quantum adversaries interact with cryptographic oracles. Next, build intuition on the One-Way to Hiding theorem, the key nonadaptive proof technique the paper extends. Then, explore Adaptive Quantum Reprogramming, the challenging problem the paper addresses by applying the O2H theorem adaptively. Finally, deepen your understanding with Sparse Quantum Oracle Representations, a technical tool used to achieve tight bounds in adaptive proofs.

### Quantum random oracle model *(prerequisite)*
The Quantum Random Oracle Model (QROM) is a framework where adversaries can query cryptographic oracles in quantum superposition, making classical security proofs insufficient. Understanding QROM is essential to grasp why adaptive reprogramming is challenging in the quantum setting.

*How the paper uses it:* The paper studies adaptive quantum reprogramming within the QROM, where oracle queries depend on prior adversary interactions.

▶ [Dominique Unruh - The quantum random oracle model Part 1 of 2 - IPAM at UCLA](https://www.youtube.com/watch?v=YAIFGB4ryGE) — Institute for Pure & Applied Mathematics (IPAM) · 3 years ago

### One-way to hiding theorem *(prerequisite)*
The One-Way to Hiding (O2H) theorem is a fundamental nonadaptive quantum cryptographic proof technique that relates the difficulty of distinguishing certain oracle modifications to breaking one-wayness. It provides a powerful tool for analyzing security in the QROM.

*How the paper uses it:* This paper shows how the nonadaptive O2H theorem can be extended to prove adaptive quantum reprogramming results.

▶ [The one-way to hiding Lemma](https://www.youtube.com/watch?v=KsEqyUmA46o) — Quiques 2021 · 4 years ago

### Adaptive quantum reprogramming
Adaptive quantum reprogramming involves changing the oracle's behavior at points chosen based on the adversary's previous quantum queries, a complex problem because quantum queries can be in superposition. This concept is central to the paper's contribution in simplifying adaptive proofs.

*How the paper uses it:* The paper demonstrates that adaptive quantum reprogramming frameworks can be derived from the simpler O2H theorem.

▶ [Tight adaptive reprogramming in the QROM](https://www.youtube.com/watch?v=WE3PnieOOPk) — IACR · 4 years ago

### Sparse quantum oracle representations *(prerequisite)*
Sparse quantum oracle representations are techniques to efficiently represent oracles with limited nontrivial outputs, enabling tighter security bounds in quantum proofs. They are a key technical tool used in the paper to derive tight adaptive reprogramming theorems.

*How the paper uses it:* The paper uses sparse representations to apply Fixed-Permutation O2H for tight adaptive reprogramming bounds.

▶ [Making Quantum Query Algorithms Robust to a Faulty Oracle, by Manaaswi Parashar](https://www.youtube.com/watch?v=KEowrXH6DBo) — CSAChannel IISc · 1 year ago

## Already in your library

- [Random Oracle model, Security of hash functions](https://www.youtube.com/watch?v=L9YnO_bIdnk) — also for: Obfuscated Consensus (James Aspnes)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Joseph Jaeger's 2025 paper on how the nonadaptive one-way to hiding (O2H) theorem implies adaptive quantum reprogramming results. The beginner project focuses on implementing a simplified simulation of the Fixed-Permutation O2H mechanism to grasp the core concept. The intermediate project involves reimplementing the Fixed-Permutation O2H theorem to reproduce one of the paper's key adaptive reprogramming results, gaining experience with sparse quantum oracle representations. The advanced project tackles a future direction by exploring sparse representations for quantum random permutations, addressing a stated limitation of the paper.

### Beginner — Simulate Fixed-Permutation O2H on a Toy Quantum Oracle Model
*Effort: a weekend, ~8 hours*

You build a simplified classical simulation of the Fixed-Permutation O2H theorem by modeling a fixed permutation oracle and an attacker querying it. The simulation will demonstrate how the O2H distinguisher internally simulates both the attacker and the security game, showing the core idea of turning nonadaptive proofs into adaptive ones.

**Why it shows you understood the paper:** This project concretely shows you understand the Fixed-Permutation O2H variant introduced in the paper and how it conceptually enables adaptive quantum reprogramming proofs by simulating attacker queries and oracle reprogramming.

**Grounded in:** Introduces the Fixed-Permutation O2H variant and shows its broad applicability.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate toy oracle queries and permutations in code.

**Build it:**

1. Implement a classical model of a fixed permutation oracle acting on input queries.
2. Implement a simple attacker simulation that makes queries to the oracle.
3. Implement the O2H distinguisher that simulates both the attacker and the security game internally.
4. Demonstrate how the distinguisher detects differences when the oracle is reprogrammed at fixed points.
5. Write a README explaining the Fixed-Permutation O2H concept and how your simulation illustrates it.

**Ships as:** A Python script simulating Fixed-Permutation O2H with example runs and a README explaining the mechanism.

**Stretch goal:** Add visualization of the oracle state and attacker queries to better illustrate the adaptive simulation.

### Intermediate — Reimplement Fixed-Permutation O2H to Derive Pan-Zeng Adaptive Reprogramming Bounds
*Effort: 2 weekends, ~20 hours*

You reimplement the Fixed-Permutation O2H theorem from the paper and apply it to reproduce the Pan-Zeng computational adaptive reprogramming framework with concrete bounds. This involves coding sparse quantum oracle representations and simulating adaptive queries to verify the theorem's implications.

**Why it shows you understood the paper:** By reproducing a key result that the Pan-Zeng framework is implied by Fixed-Permutation O2H, you demonstrate grasp of the paper's core contribution and the ability to implement its main proof technique on a nontrivial adaptive quantum cryptographic problem.

**Grounded in:** The Pan-Zeng computational adaptive reprogramming framework is implied by Fixed-Permutation O2H with better concrete bounds.

**Tech stack:** Python 3.11, NumPy

**Data:** No real quantum data; simulate sparse quantum oracle queries and reprogramming points as described in the paper.

**Build it:**

1. Study the Fixed-Permutation O2H theorem and Pan-Zeng framework sections in the paper.
2. Implement sparse quantum oracle representations to model attacker queries and oracle states.
3. Code the Fixed-Permutation O2H distinguisher that simulates adaptive queries and reprogramming.
4. Reproduce the Pan-Zeng adaptive reprogramming bounds by running simulations and computing distinguishing advantages.
5. Document the implementation, results, and comparison to the paper's bounds in a detailed README.

**Ships as:** A Python codebase reproducing Pan-Zeng adaptive reprogramming bounds via Fixed-Permutation O2H with simulation outputs and analysis.

**Stretch goal:** Extend the implementation to also reproduce the GHHM tight adaptive reprogramming theorem using sparse oracle techniques.

### Advanced — Explore Sparse Representations for Quantum Random Permutations to Extend Fixed-Permutation O2H
*Effort: 3+ weeks*

You research and prototype sparse representation techniques for quantum random permutations, aiming to overcome the paper's stated limitation that Fixed-Permutation O2H cannot currently handle random permutations. You attempt to extend the Fixed-Permutation O2H framework to this setting and evaluate the feasibility of adaptive quantum reprogramming proofs for random permutations.

**Why it shows you understood the paper:** This project tackles a key open problem and future direction from the paper, showing deep engagement with its limitations and the ability to innovate on its core methods to push the theory forward.

**Grounded in:** Cannot prove certain adaptive reprogramming results for quantum random permutations due to absence of sparse representation techniques for permutations.

**Tech stack:** Python 3.11, NumPy, Jupyter Notebook

**Data:** No external data; you simulate quantum random permutations and attempt sparse approximations as per your research.

**Build it:**

1. Review the paper's discussion on limitations regarding random permutations and sparse representations.
2. Survey existing literature on sparse representations or approximations of quantum random permutations.
3. Design and implement prototype sparse representations or approximations for quantum random permutations.
4. Attempt to integrate these representations into the Fixed-Permutation O2H framework.
5. Evaluate the approach by simulating adaptive reprogramming scenarios and measuring distinguishing advantages.
6. Document findings, challenges, and potential future work in a comprehensive report.

**Ships as:** A research prototype codebase and detailed report exploring sparse representations for quantum random permutations and their integration with Fixed-Permutation O2H.

**Stretch goal:** Develop a Double-Oracle Fixed-Permutation O2H variant to improve bounds based on your sparse permutation representations.
