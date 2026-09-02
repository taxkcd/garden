---
title: "524 · Disincentivize Collusion in Verifiable Secret Sharing — Hemanta K. Maji"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hemanta-k-maji"
source_hash: "6562dc26af75b31833168e4df8ba7e1d5fb42ed0941eeb43830bf6153cb88d88"
sequence: 524
generator: "outreach-garden: managed"
---

# 524 · Disincentivize Collusion in Verifiable Secret Sharing

## At a glance

- **Professor:** Hemanta K. Maji
- **Institution:** Purdue University
- **Paper:** [Disincentivize Collusion in Verifiable Secret Sharing](https://eprint.iacr.org/2025/446)
- **Authors:** Tiantian Gong, Aniket Kate, Hemanta K. Maji, Hai H. Nguyen
- **Year:** 2026

## Paper overview

This paper addresses the problem of preventing collusion among parties in verifiable secret sharing (VSS) schemes, especially in blockchain and cryptographic applications. The authors design mechanisms that discourage parties from colluding to reconstruct a secret prematurely by leveraging game theory and combinatorial structures called trackable access structures (TAS). They connect these structures to combinatorial design and coding theory, providing constructions and bounds for efficient secret sharing schemes that are robust and fair.

### Why it matters

**Research problem:** In verifiable secret sharing, parties holding shares might collude to reconstruct the secret before authorized, violating privacy. Existing methods either assume limited collusion channels or rely on traceability with access to reconstruction programs. This work tackles collusion deterrence without assumptions on collusion methods, aiming to disincentivize rational parties from colluding even when some parties are malicious.

**Why it matters:** Collusion in secret sharing can lead to unauthorized access to sensitive secrets, threatening security in applications like multi-device cryptocurrency wallets, secure multiparty computation, distributed key generation, and electronic voting. Preventing such collusion is critical to maintaining privacy and trust in these systems.

**Key contributions:**

- Design of two collusion deterrence mechanisms (W0, P) and (W1, P) for VSS with different fairness and robustness guarantees.
- Definition and characterization of trackable access structures (TAS) and their connection to combinatorial designs and coding theory.
- Construction of TAS with optimal size using Steiner systems and near-optimal TAS using Reed-Solomon and algebraic geometry codes.
- Demonstration that TAS robustness corresponds to minimum vertex cover in hypergraphs and construction of highly robust TAS.
- Efficient secret sharing schemes for (n, k, 2)-TAS with asymptotically optimal robustness and improved information ratio.

## About the professor

**Hemanta K. Maji** — Associate Professor, Computer Science, Purdue University.

Research interests: Cryptography and Algorithms; with special emphasis on Secure Computation and Information-theoretic Cryptography.

### Research links

- [Faculty/profile page](https://www.cs.purdue.edu/homes/hmaji)
- [Resolved homepage](http://www.cs.purdue.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Combinatorial Design Theory
**The paper assumes:** combinatorial design theory, Steiner systems, and coding theory basics
**Already in this field?** Skip this entirely if you already have a solid understanding of combinatorial design theory and its applications in coding and cryptography.

This background focuses on Combinatorial Design Theory, which is crucial for understanding trackable access structures (TAS) and their connections to partial Steiner systems and coding theory in the paper. The rigorous course option provides a deep, structured university-level treatment of graph theory and additive combinatorics, foundational for grasping the combinatorial underpinnings of TAS. The fast track offers a concise, intuitive introduction to combinatorial game theory concepts that build combinatorial reasoning skills relevant to design theory, suitable for a quicker but still meaningful overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.217 Graph Theory and Additive Combinatorics, Fall 2019](https://www.youtube.com/playlist?list=PLUl4u3cNGP62qauV_CpT1zKaGG_Vj5igX) — MIT OpenCourseWare · 26 videos

**Watch only this:** Lectures 1-4 (about 5.2 hours) — covering the bridge between graph theory and additive combinatorics and forbidding subgraphs including algebraic constructions, which are key to understanding combinatorial designs relevant to TAS.

*Why it unblocks this paper:* MIT 18.217 Graph Theory and Additive Combinatorics covers advanced combinatorial structures and techniques, including algebraic constructions and hypergraph regularity lemmas, which underpin the combinatorial design and coding theory aspects of TAS in the paper.

*If you want all of it:* 33.9 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Combinatorial Game Theory](https://www.youtube.com/playlist?list=PLxYr6TaF_SDV5r6rmI0LDxuO48FPFb6Rk) — Knop's Course · 6 videos · 1.1h across 6 episodes

**Watch only this:** Episodes 1-3 (about 30 minutes) — covering the basics of combinatorial game theory, P-positions and N-positions, and the game of Nim, which develop combinatorial thinking useful for understanding TAS.

*Why it unblocks this paper:* Introduction to Combinatorial Game Theory by Knop's Course provides a short, clear, and intuitive introduction to combinatorial reasoning and structures, helping build foundational intuition for combinatorial design concepts relevant to TAS without requiring extensive time commitment.

*If you want all of it:* 1.1 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Disincentivize Collusion in Verifiable Secret Sharing," start by building a strong foundation in the prerequisite topics of verifiable secret sharing schemes, combinatorial design theory (especially Steiner systems), coding theory (with emphasis on constant weight codes), and game theory as applied to cryptographic protocols. These foundational topics provide the mathematical and theoretical background necessary to grasp the paper's novel mechanisms. Finally, focus on the paper's core concept of collusion deterrence in verifiable secret sharing, highlighted by the authors' own talk and related advanced secret sharing lectures.

### Verifiable secret sharing schemes *(the paper's own talk)*
Understanding verifiable secret sharing (VSS) is essential as it forms the cryptographic primitive underlying the paper's problem and solutions. The selected videos are advanced university seminars and research talks that cover VSS protocols and their applications, avoiding beginner-level explainers.

*How the paper uses it:* The paper builds on VSS schemes to design collusion deterrence mechanisms.

▶ [Threshold Secret Sharing part 2-  Verifiable Secret Sharing - Gilad Asharov](https://www.youtube.com/watch?v=Qm4EgaNDLK4) — The BIU Research Center on Applied Cryptography and Cyber Security · 48:42 · 6 years ago

### Combinatorial design theory and Steiner systems *(prerequisite)*
Combinatorial design theory, particularly Steiner systems, provides the mathematical foundation for constructing trackable access structures (TAS) with optimal size. The chosen videos are university-level seminars and research talks that delve into Steiner systems and related combinatorial structures, suitable for advanced readers.

*How the paper uses it:* The paper uses Steiner systems to construct optimal trackable access structures.

▶ [Popularity Labellings for Steiner Systems](https://www.youtube.com/watch?v=qIE5ltSaNYo) — Fields Institute · 55:05 · 4 years ago

### Coding theory and constant weight codes *(prerequisite)*
Coding theory, especially constant weight codes, is crucial for constructing near-optimal TAS and improving robustness in secret sharing schemes. The selected videos are advanced lectures from university courses and research presentations focusing on the mathematical aspects of coding theory.

*How the paper uses it:* The paper connects TAS to binary constant weight codes for near-optimal constructions.

▶ [Mathematical Aspects of Coding Theory | Dr. Mrinmoy Datta | CLD 2021](https://www.youtube.com/watch?v=eUAn0uR5EZI) — Curry Leaf · 48:19 · 4 years ago

### Game theory in cryptographic protocols *(prerequisite)*
Game theory provides the framework to analyze incentives of rational and malicious parties in the paper's collusion deterrence mechanisms. The chosen videos are university lectures and research talks that rigorously cover game theory concepts relevant to cryptography and mechanism design.

*How the paper uses it:* The paper uses game-theoretic analysis to prove fairness and effectiveness of its mechanisms.

▶ [Game Theory in Blockchain Research and My Attempts to Connect to Cryptography | Jiasun Li (GMU)](https://www.youtube.com/watch?v=QWOYBzUyOjw) — Yale Applied Cryptography Laboratory · 54:53 · 1 year ago

### Authors' talk on disincentivize collusion VSS *(the paper's own talk)*
The authors' own talk provides direct insight into their novel collusion deterrence mechanisms, offering the most precise and authoritative explanation of their contributions and results. Supplementary advanced talks on secret sharing complement this core understanding.

*How the paper uses it:* This is the paper authors' own presentation on their collusion deterrence mechanisms in VSS.

▶ [Vipul Goyal on Non-malleable secret sharing](https://www.youtube.com/watch?v=TPfZbYqLvRU) — CMU Theory · 57:04 · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the fundamental cryptographic primitive of verifiable secret sharing (VSS), which underpins the paper's problem and solutions. Next, learn the basics of combinatorial design theory and Steiner systems, which provide the mathematical foundation for constructing trackable access structures (TAS). Then, study the game theory concepts that analyze incentives and rational behavior crucial for the paper's collusion deterrence mechanisms. After that, explore coding theory and constant weight codes, which are used to build near-optimal TAS with robustness. Finally, focus on the core concept of trackable access structures in secret sharing, which enable fairness and robustness in preventing collusion as developed in the paper.

### Verifiable secret sharing schemes *(prerequisite)*
Verifiable secret sharing schemes allow a secret to be split among parties such that the secret can be reconstructed only by authorized subsets, and the correctness of shares can be verified. This ensures security and trust even if some parties are dishonest. Understanding VSS is essential as the paper builds mechanisms to prevent collusion in these schemes.

*How the paper uses it:* The paper addresses collusion deterrence in verifiable secret sharing schemes to protect secret privacy.

▶ [Secret Sharing Explained Visually](https://www.youtube.com/watch?v=iFY5SyY3IMQ) — Art of the Problem · 7:57 · 6 years ago

### Combinatorial design theory and Steiner systems *(prerequisite)*
Combinatorial design theory studies structured arrangements of elements into sets with specific intersection properties, such as Steiner systems. These mathematical objects help construct access structures with desirable properties like uniqueness and minimal overlap. The paper uses Steiner systems to build optimal trackable access structures.

*How the paper uses it:* The paper connects TAS to partial Steiner systems to achieve optimal size and robustness.

▶ [What are...Steiner systems?](https://www.youtube.com/watch?v=uAX0RAfo1WU) — VisualMath · 18:26 · 5 years ago

### Game theory in cryptographic protocols *(prerequisite)*
Game theory analyzes strategic interactions among rational agents, predicting their behavior based on incentives and payoffs. In cryptographic protocols, it helps design mechanisms that align participants' incentives to achieve security goals. The paper uses game-theoretic analysis to ensure parties are disincentivized from colluding.

*How the paper uses it:* The paper uses game theory to design collusion deterrence mechanisms assuming rational and malicious parties.

▶ [Game Theory](https://www.youtube.com/watch?v=M3oWYHYoBvk) — Yale University · 1:07:08 · 12 years ago

### Coding theory and constant weight codes *(prerequisite)*
Coding theory studies methods to encode data to detect and correct errors, with constant weight codes being a special class where all codewords have the same number of ones. These codes have combinatorial properties useful for constructing access structures with high robustness. The paper leverages these codes to build near-optimal TAS.

*How the paper uses it:* The paper constructs near-optimal TAS using binary constant weight codes from coding theory.

▶ [Introduction to Coding Theory](https://www.youtube.com/watch?v=9DRA3JaPTqE) — Path Finders Acad. · 13:42 · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's core ideas on disincentivizing collusion in verifiable secret sharing (VSS) via trackable access structures (TAS) and game-theoretic mechanisms. Starting with a small-scale simulation of the (W0, P) mechanism on a simple access structure, you then implement the (W1, P) mechanism for TAS and compare fairness metrics. Finally, you extend the TAS constructions or secret sharing schemes addressing one of the paper's stated limitations, bridging theory and practice.

### Beginner — Simulate the (W0, P) Collusion Deterrence Mechanism on a Small Access Structure
*Effort: a weekend, ~8 hours*

You build a Python simulation of the (W0, P) collusion deterrence mechanism for verifiable secret sharing on a small, arbitrary k-homogeneous access structure (e.g., (3,5)-threshold). The simulation models rational parties deciding whether to collude or report collusion, applying penalties and rewards as defined in the paper.

**Why it shows you understood the paper:** This project shows you understand the game-theoretic mechanism design of (W0, P), how fairness and effectiveness metrics are computed, and how penalties and rewards influence rational party behavior in VSS.

**Grounded in:** "(W0, P) mechanism is (k-2)-effective and (k-2)-fair with optimal robustness (n-k+1) for arbitrary k-homogeneous access structures."

**Tech stack:** Python 3.11

**Data:** Simulated data representing shares and collusion attempts on a small (3,5)-threshold access structure; no external dataset needed.

**Build it:**

1. Define a small k-homogeneous access structure (e.g., (3,5)-threshold) and model parties holding shares.
2. Implement the (W0, P) mechanism logic: rewards for reporting collusion, penalties for last reporters and free riders.
3. Simulate rational party decisions under quasi-linear utilities to observe equilibrium behavior.
4. Compute and output fairness and effectiveness metrics as defined in the paper.
5. Write a README explaining the mechanism, simulation setup, and results.

**Ships as:** A Python script and README demonstrating the (W0, P) mechanism simulation with computed fairness/effectiveness metrics on a small access structure.

**Stretch goal:** Add visualization of payoff matrices and equilibrium outcomes for different penalty/reward parameters.

### Intermediate — Implement and Compare the (W1, P) Mechanism for Trackable Access Structures
*Effort: 2 weekends, ~20 hours*

You implement the (W1, P) collusion deterrence mechanism tailored for ω-trackable access structures (TAS). You construct a small TAS using combinatorial design principles (e.g., partial Steiner system or constant weight code) and simulate the mechanism. You compare fairness and robustness metrics against a baseline (e.g., generic threshold scheme without TAS).

**Why it shows you understood the paper:** This project demonstrates your grasp of TAS definition, construction, and how (W1, P) achieves zero fairness hazard and optimal robustness. Comparing with a baseline shows you understand the practical benefits of TAS and the mechanism.

**Grounded in:** "(W1, P) mechanism achieves (k-1)-fairness, zero fairness hazard, and optimal robustness for ω-trackable access structures."

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Simulated TAS share distributions constructed using combinatorial design principles; no external dataset required.

**Build it:**

1. Study the definition of ω-trackable access structures and construct a small TAS (e.g., (5,3,2)-TAS) using combinatorial design or coding theory principles.
2. Implement the (W1, P) mechanism logic for collusion deterrence on the TAS.
3. Simulate rational party behavior and compute fairness, effectiveness, and fairness hazard metrics.
4. Implement a baseline simulation of a generic threshold secret sharing scheme without TAS and run the same metrics.
5. Compare and document the results, highlighting improvements due to TAS and (W1, P).
6. Write a detailed README explaining TAS construction, mechanism implementation, and comparative results.

**Ships as:** A Jupyter Notebook or Python package with TAS construction, (W1, P) mechanism simulation, baseline comparison, and metric analysis.

**Stretch goal:** Integrate visualization of TAS hypergraph structure and robustness measures.

### Advanced — Extend TAS Secret Sharing Schemes for ω ≥ 3 with Improved Information Ratio
*Effort: 3+ weeks*

You develop an improved secret sharing scheme construction for ω-trackable access structures with ω ≥ 3, aiming to reduce the information ratio from the roughly O((n/k)^ω) bound stated as a limitation. You explore algebraic geometry code-based TAS constructions or deterministic TAS constructions and implement a prototype scheme. You evaluate robustness and information ratio metrics.

**Why it shows you understood the paper:** This project tackles a key open problem and limitation from the paper, showing deep understanding of TAS, secret sharing constructions, and coding theory. It also demonstrates your ability to extend theoretical cryptographic constructions toward practical improvements.

**Grounded in:** "For ω ≥ 3, secret sharing constructions have higher information ratio (roughly O((n/k)^ω)) and more efficient constructions remain open."

**Tech stack:** Python 3.11, SageMath or similar algebraic geometry code libraries, Jupyter Notebook

**Data:** Synthetic TAS parameters and share distributions generated algorithmically; no external dataset needed.

**Build it:**

1. Review the paper's TAS constructions and secret sharing schemes for ω = 2 and ω ≥ 3.
2. Research algebraic geometry codes and deterministic TAS constructions relevant to ω ≥ 3.
3. Design and implement a secret sharing scheme prototype for ω ≥ 3 TAS with improved information ratio.
4. Evaluate the scheme's robustness and information ratio compared to the paper's baseline.
5. Document the construction, implementation details, evaluation results, and open questions in a comprehensive README.
6. Optionally, prepare a short report or presentation summarizing the extension and its significance.

**Ships as:** A code repository with TAS secret sharing scheme implementation for ω ≥ 3, evaluation scripts, and detailed documentation addressing the paper's limitation.

**Stretch goal:** Explore practical parameter tuning of the (W1, P) mechanism integrated with your TAS construction for real-world distributed systems.

_The paper does not provide released code or datasets; all data must be simulated or constructed algorithmically based on the paper's definitions and combinatorial design principles._
