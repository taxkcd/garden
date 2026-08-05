---
title: "207 · Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms — Clayton Thomas"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-clayton-thomas"
source_hash: "89a611b94cefc5c994deaa1fcdc5b48f5e0fb04a7e87bb7cf0e99cc8594f20f0"
sequence: 207
generator: "outreach-garden: managed"
---

# 207 · Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms

## At a glance

- **Professor:** Clayton Thomas
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms](https://arxiv.org/abs/2512.02354)
- **Authors:** Aadityan Ganesh, Clayton Thomas, S. Matthew Weinberg
- **Year:** 2025

## Paper overview

This paper studies transaction fee mechanisms (TFMs) used in blockchain systems to allocate block space based on user bids. It focuses on designing TFMs that are resistant to miners manipulating the system off-chain to increase their revenue, a property called off-chain influence-proofness (OffC-IP). The authors characterize all such OffC-IP TFMs, showing that deterministic, non-cryptographic OffC-IP TFMs must be posted-price mechanisms with carefully tuned burns, and that randomized OffC-IP TFMs exist beyond posted-price mechanisms. The work clarifies the trade-offs and limitations of TFMs in blockchain settings.

### Why it matters

**Research problem:** How to design transaction fee mechanisms that are incentive compatible and resistant to miners manipulating the system off-chain to increase revenue, while maintaining simplicity for users and miners, and without relying heavily on cryptography.

**Why it matters:** Blockchains rely on TFMs to allocate limited block space efficiently and fairly. Miners can manipulate these mechanisms off-chain to extract extra revenue, undermining fairness and simplicity. Understanding which TFMs prevent such manipulations is crucial for secure and user-friendly blockchain protocols.

**Key contributions:**

- Characterization of OffC-IP TFMs via a burn identity linking burn and allocation rules.
- Proof that deterministic, non-cryptographic OffC-IP and OnC-S TFMs are posted-price mechanisms with specially tuned burns.
- Impossibility results showing deterministic OffC-IP and OnC-S TFMs require infinite supply and prior dependence.
- Construction of randomized OffC-IP and OnC-S TFMs that do not use cryptography and work with finite supply.
- Discussion of trade-offs between OffC-IP and strong collusion-proofness (SCP) properties.

## About the professor

**Clayton Thomas** — Assistant Professor, Computer Science, Rensselaer Polytechnic Institute.

Research interests: design of collective decision-making algorithms for settings such as student-school matching, high-stakes auctions, and multi-candidate voting

### Research links

- [Faculty/profile page](https://faculty.rpi.edu/clayton-thomas)
- [Professor website](https://clathomasprime.github.io/)
- [Resolved homepage](https://clathomasprime.github.io)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Off-Chain Influence Proof Transaction Fee Mechanisms, start with foundational concepts in mechanism design focusing on monopsonists and incentive compatibility, which underpin the theoretical model of miners as Bayesian monopsonists and the DSIC properties of the mechanisms. Next, explore the practical context of transaction fee mechanisms in blockchains to appreciate the real-world problem setting. Finally, study the authors' own detailed presentation on their novel characterization of OffC-IP TFMs to grasp their main contributions and results.

### Mechanism Design for Monopsonists *(prerequisite)*
This section covers the core theoretical framework modeling miners as Bayesian monopsonists optimizing virtual utility, a central modeling assumption in the paper. Understanding monopsony and related auction theory is essential to grasp how the paper characterizes OffC-IP TFMs as truthful auctions for a multi-dimensional monopsonist.

*How the paper uses it:* The paper models the miner as a Bayesian monopolist (monopsonist) optimizing virtual utility to characterize OffC-IP TFMs.

▶ [(IME2) Chapter 3 - Video 4: The Case of Monopsony (Single ...](https://www.youtube.com/watch?v=MRJGU95U0_U) — selcuk ozyurt · 16:36

### Incentive Compatibility and DSIC *(prerequisite)*
This section explains dominant strategy incentive compatibility (DSIC), a key property ensuring truthful bidding in auctions and TFMs. Understanding DSIC is crucial for following the paper's characterization of OffC-IP TFMs as DSIC auctions and the burn identity linking allocation and burn rules.

*How the paper uses it:* The paper proves that OffC-IP TFMs correspond to DSIC auctions for the multi-dimensional monopsonist.

▶ [(AGT11E8) [Game Theory] Direct Mechanisms, Dominant ...](https://www.youtube.com/watch?v=E4O9TXaYW60) — selcuk ozyurt · 10:28

### Transaction Fee Mechanisms in Blockchains *(prerequisite)*
This section provides context on how transaction fee mechanisms allocate block space in blockchain systems, the practical problem the paper addresses. It situates the theoretical results within the blockchain domain and explains the motivation for designing OffC-IP TFMs.

*How the paper uses it:* The paper studies TFMs used in blockchains to allocate block space and prevent miner manipulation.

▶ [EC'24 Tutorial: Transaction Fee Mechanism Design (Part 1 ...](https://www.youtube.com/watch?v=XMUXrBUFCHY) — ACM SIGecom · 21:06

### Paper Author Talk *(the paper's own talk)*
This is the authors' own recorded talk presenting their novel characterization of OffC-IP TFMs, including the burn identity, deterministic and randomized mechanisms, and impossibility results. It offers the most direct and detailed exposition of the paper's contributions and insights.

*How the paper uses it:* This talk by Aadityan Ganesh presents the paper's main results and methodology on OffC-IP TFMs.

▶ [Characterizing Off-Chain Influence Proof Transaction Fee ...](https://www.youtube.com/watch?v=XfMS6QFOGpE) — Aadityan Ganesh · 33:20

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Off-Chain Influence Proof Transaction Fee Mechanisms, start by learning the basics of transaction fee mechanisms in blockchains to grasp the practical problem context. Then build foundational knowledge in mechanism design concepts like monopsonists and incentive compatibility, which underpin the theoretical modeling of miners and truthful auctions. Finally, explore the paper's core contributions on OffC-IP TFMs, including the role of randomized mechanisms and burn rules, through concise expert talks by the authors.

### Transaction Fee Mechanisms in Blockchains *(prerequisite)*
This section introduces how blockchains allocate limited block space to users via transaction fee mechanisms (TFMs). Understanding this practical context is essential to appreciate why TFMs must be designed carefully to prevent miner manipulation and ensure fairness.

*How the paper uses it:* The paper studies TFMs as the core mechanism for allocating block space and focuses on their vulnerability to off-chain miner manipulation.

▶ [EC'24 Tutorial: Transaction Fee Mechanism Design (Part 1 ...](https://www.youtube.com/watch?v=XMUXrBUFCHY) — ACM SIGecom · 21:06

### Mechanism Design for Monopsonists *(prerequisite)*
Learn the economic theory of monopsonists—single buyers in a market—and how auctions and mechanisms are designed when the buyer optimizes virtual utility. This models miners as monopolistic buyers of transactions, a key abstraction in the paper.

*How the paper uses it:* The paper models miners as Bayesian monopsonists optimizing virtual utility to characterize OffC-IP TFMs.

▶ [(IME2) Chapter 3 - Video 4: The Case of Monopsony (Single ...](https://www.youtube.com/watch?v=MRJGU95U0_U) — selcuk ozyurt · 16:36

### Incentive Compatibility and DSIC *(prerequisite)*
Dominant Strategy Incentive Compatibility (DSIC) ensures participants truthfully reveal their preferences regardless of others' actions. Understanding DSIC is crucial for grasping why certain TFMs prevent manipulation and are considered truthful.

*How the paper uses it:* The paper proves OffC-IP TFMs are DSIC auctions for a multi-dimensional monopsonist, linking incentive compatibility to off-chain manipulation resistance.

▶ [(AGT11E8) [Game Theory] Direct Mechanisms, Dominant ...](https://www.youtube.com/watch?v=E4O9TXaYW60) — selcuk ozyurt · 10:28

### Randomized Mechanisms and Burn Rules
This section covers how randomized mechanisms and burn rules work in auctions, including how burning a fraction of payments can enforce truthful behavior. These concepts are key to the paper's construction of randomized OffC-IP TFMs that work with finite supply.

*How the paper uses it:* The paper constructs randomized OffC-IP TFMs using carefully tuned burn rules to achieve incentive compatibility without cryptography.

▶ [Lecture 7.3: Optimal Auctions (Mechanism Design)](https://www.youtube.com/watch?v=476v2Bu-7w0) — economification · 20:12 · 5 years ago

### Paper Author Talk *(the paper's own talk)*
Watch the authors explain their novel characterization of OffC-IP TFMs, including the burn identity and the trade-offs in deterministic and randomized mechanisms. This talk provides direct insight into the paper's main contributions and results.

*How the paper uses it:* This talk by Aadityan Ganesh presents the paper's key results on OffC-IP TFMs and their implications for blockchain transaction fee design.

▶ [Characterizing Off-Chain Influence Proof Transaction Fee ...](https://www.youtube.com/watch?v=XfMS6QFOGpE) — Aadityan Ganesh · 33:20

## Already in your library

- [Lecture 22: Auctions, Part 1](https://www.youtube.com/watch?v=-XGDKoWi0Zg) — also for: Efficiently Restructuring Sovereign Debt via Arctic Auctions with Convex Costs (Vijay V. Vazirani)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms." The beginner project focuses on implementing a simple posted-price mechanism with burn rules to illustrate the core deterministic OffC-IP TFM concept. The intermediate project involves reimplementing the paper's burn identity characterization and simulating randomized OffC-IP TFMs for finite supply, comparing them to posted-price baselines. The advanced project tackles a future direction by exploring approximate OffC-IP mechanisms balancing off-chain influence-proofness and miner/user simplicity, addressing practical limitations highlighted in the paper.

### Beginner — Posted-Price Transaction Fee Mechanism with Burn Rule
*Effort: a weekend, ~8 hours*

You build a simple simulation of a deterministic posted-price transaction fee mechanism (TFM) with a burn rule tuned to the virtual value of the price, as characterized in the paper. The simulation will allow users to input bids and observe allocation and burn outcomes, demonstrating the OffC-IP property in a finite supply setting.

**Why it shows you understood the paper:** This project shows you understand the paper's key result that deterministic OffC-IP and OnC-S TFMs must be posted-price mechanisms with specially tuned burns, and the role of the burn identity linking allocation and burn rules.

**Grounded in:** Deterministic plaintext OffC-IP and OnC-S TFMs must be posted-price mechanisms with burns equal to the virtual value of the price.

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib

**Data:** Simulated user bid values generated from a simple bounded distribution (e.g., uniform or normal) to mimic user valuations.

**Build it:**

1. Implement a posted-price mechanism where users submit bids and the mechanism allocates block space based on a fixed price.
2. Implement the burn rule as a fraction of the price equal to the virtual value, following the burn identity from the paper.
3. Simulate multiple rounds with random user bids drawn from a chosen distribution.
4. Visualize allocation outcomes, burn amounts, and total revenue to illustrate the mechanism's behavior.
5. Write a README explaining the connection between your implementation and the paper's characterization of deterministic OffC-IP TFMs.

**Ships as:** A Jupyter Notebook or Python script simulating the posted-price TFM with burn rules, visualizations of allocations and burns, and a README linking the implementation to the paper's theoretical results.

**Stretch goal:** Add a simple user interface with React to allow interactive bid inputs and real-time visualization of allocations and burns.

### Intermediate — Reimplementation of Burn Identity and Randomized OffC-IP TFMs Simulation
*Effort: 2 weekends, ~20 hours*

You reimplement the core burn identity characterization from the paper, modeling the allocation and burn rules as a truthful multi-item auction for a monopsonist with virtual values. You simulate randomized OffC-IP TFMs for finite supply under bounded prior distributions and compare their performance against deterministic posted-price baselines.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main theoretical characterization of OffC-IP TFMs and the existence of randomized mechanisms beyond posted-price auctions, including the trade-offs involved with finite supply and prior dependence.

**Grounded in:** OffC-IP TFMs are exactly those whose allocation and burn rules form a truthful multi-item auction for the multi-dimensional monopsonist; randomized OffC-IP and OnC-S TFMs exist for finite supply under bounded prior distributions.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Simulated user valuation distributions with bounded support (e.g., truncated normal or uniform), as the paper assumes bounded priors for randomized TFMs.

**Build it:**

1. Study the burn identity relating allocation and burn rules as a truthful auction for a monopsonist from the paper's description.
2. Implement the allocation and burn functions for a randomized OffC-IP TFM under finite supply.
3. Simulate user bids drawn from bounded prior distributions and run the randomized mechanism.
4. Implement a deterministic posted-price baseline with tuned burns for comparison.
5. Evaluate and visualize metrics such as revenue, allocation efficiency, and burn amounts for both mechanisms.
6. Document the implementation details and relate the results to the paper's theoretical findings.

**Ships as:** A Jupyter Notebook or Python package simulating randomized OffC-IP TFMs and deterministic baselines, with comparative visualizations and a detailed README explaining the connection to the paper's characterization and results.

**Stretch goal:** Extend the simulation to explore the impact of varying prior distributions and supply constraints on mechanism performance.

### Advanced — Design and Evaluation of Approximate OffC-IP Transaction Fee Mechanisms
*Effort: 3+ weeks*

You design and implement approximate variants of OffC-IP TFMs that balance off-chain influence-proofness with miner and user simplicity, addressing the paper's limitation on the impracticality of randomized OffC-IP TFMs. You evaluate these mechanisms via simulation, analyzing trade-offs between OffC-IP, simplicity, and collusion resistance.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation in the paper by exploring practical, implementable TFMs that approximate OffC-IP properties, demonstrating deep comprehension of the theoretical trade-offs and practical challenges in TFM design.

**Grounded in:** Investigate approximate variants of OffC-IP and SCP to balance trade-offs; develop more practical randomized OffC-IP TFMs for finite supply.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook, TypeScript, React

**Data:** Simulated user valuation data with bounded priors; optionally incorporate synthetic off-chain data models to simulate miner priors.

**Build it:**

1. Review the paper's impossibility results and limitations regarding deterministic and randomized OffC-IP TFMs.
2. Design approximate OffC-IP mechanisms that relax strict burn identities or allocation rules to improve practicality and simplicity.
3. Implement these approximate mechanisms in Python, simulating user bids and miner strategies.
4. Evaluate the mechanisms on metrics such as revenue, allocation efficiency, burn amounts, and resistance to off-chain manipulation.
5. Optionally, build a simple React frontend to visualize mechanism behavior and allow parameter tuning.
6. Analyze and document trade-offs observed, relating findings to the paper's discussion on OffC-IP and SCP trade-offs.

**Ships as:** A comprehensive repository with implementations of approximate OffC-IP TFMs, simulation results, visualizations, and a detailed report linking the work to the paper's limitations and future directions.

**Stretch goal:** Incorporate real blockchain transaction data or miner behavior models to test mechanism robustness in more realistic settings.
